package webui;
import static spark.Spark.*;

import database.DatabaseConnection;
import handling.RecvPacketOpcode;
import handling.SendPacketOpcode;
import handling.world.World;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.net.URLDecoder;
import java.security.Key;
import java.util.concurrent.ScheduledFuture;

import com.google.gson.Gson;
import handling.channel.ChannelServer;
import client.MapleCharacter;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.CashItemFactory;
import server.MapleShopFactory;
import server.ShutdownServer;
import server.Timer;
import server.life.MapleMonsterInformationProvider;
import server.quest.MapleQuest;
import spark.HaltException;
import tools.MaplePacketCreator;

public class WebServer { 
    /** 账号或者密码错误 */
    static final int CODE_PWD_ERROR = 10002;
    /** token 无效 */
    static final int CODE_INVALID_TOKEN = 10001;
    static final int CODE_SUCCESS = 0;
    private int minutesLeft;
    private Thread closeServerThread;
    private ScheduledFuture<?> timeSchedule;
    private int CODE_OTHER_ERROR = -1;
    private boolean reloadFlag = false;
    private boolean saveFlag = false;

    public static void main(final String[] args) {

        new WebServer().run();
    }

    public void run() {
        // 设置端口号
        port(4567);

        // 预设的用户名和密码
        String username = "admin";
        String password = "admin";
 
        // 生成一个随机的签名密钥，用于JWT
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        // 设定静态资源文件夹的位置（例如：public）
        staticFileLocation("/public");
        
        // 针对根路径的请求，返回 index.html 静态文件
        get("/", (req, res) -> {
            res.redirect("/index.html");
            return null;
        });
        // 在浏览器中访问 http://localhost:4567 查看结果

        // 登录接口，验证用户名密码并返回JWT令牌
        get("/login", (request, response) -> {
            String reqUsername = request.queryParams("username");
            String reqPassword = request.queryParams("password");
            response.type("application/json");
            if (reqUsername.equals(username) && reqPassword.equals(password)) {
                // 创建JWT令牌
                String jwt = Jwts.builder()
                        .setSubject(username)
                        .signWith(key)
                        .compact();
                return generateResponse(CODE_SUCCESS,"sucess", jwt);
            } else {
                return generateResponse(CODE_PWD_ERROR, "账号或者密码错误", null);
            }
        });

        // 需要令牌校验的保护接口
        before("/protected/*", (request, response) -> {
            String token = request.queryParams("token");
            response.type("application/json");
            if (token == null) {
                sendResponse(CODE_INVALID_TOKEN, "请先登录", null);
            }
            try {
                Jwts.parserBuilder()
                        .setSigningKey(key)
                        .build()
                        .parseClaimsJws(token); // 验证令牌
            } catch (Exception e) {
                sendResponse(CODE_INVALID_TOKEN, "token无效", null);
            }
        });

        // 令牌校验通过的保护接口
        get("/protected/check", (request, response) -> generateResponse(CODE_SUCCESS, "success", null));
        // 查询总在线人数接口
        get("/protected/getMapleCharacterCount", (request, response) ->{
            int p = 0;
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (final MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                    if (chr != null) {
                        ++p;
                    }
                }
            }
            MapleCharacterCountResult result = new MapleCharacterCountResult();
            result.count = p;
            return generateResponse(CODE_SUCCESS, "success", result);
        });
        // 断开全服玩家
        get("/protected/disconnectAllServerPlayer", (request, response) ->{
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.getPlayerStorage().disconnectAll(true);
            }
            return generateResponse(CODE_SUCCESS, "success", null);
        });
        
        // 关闭服务器
        get("/protected/closeServer", (request, response) -> {
            try{
                this.minutesLeft = Integer.parseInt(request.queryParams("time"));
                if (this.timeSchedule == null && (this.closeServerThread == null || !this.closeServerThread.isAlive())) {
                    this.closeServerThread = new Thread(ShutdownServer.getInstance());
                    this.timeSchedule  = Timer.EventTimer.getInstance().register(new Runnable() {
                        @Override
                        public void run() {
                            if (WebServer.this.minutesLeft == 0) {
                                ShutdownServer.getInstance();
                                closeServerThread.start();
                                timeSchedule.cancel(false);
                                return;
                            }
                            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, "服务器將在 " + WebServer.this.minutesLeft + "分钟后关闭. 请尽快关闭雇佣商人安全下线.").getBytes());
                            System.out.println("服务器將在 " + WebServer.this.minutesLeft + "分钟后关闭.");
                            WebServer.this.minutesLeft--;
                        }
                    }, 60000L);
                    return generateResponse(CODE_SUCCESS, String.format("配置关服任务成功，服务器将在%s分钟后关闭", minutesLeft), null);
                } else {
                    return generateResponse(CODE_OTHER_ERROR, String.format("关服任务已配置，还剩%s分钟，服务器将关闭", minutesLeft), null);
                }
            } catch(Exception e) {
                e.printStackTrace();
                return generateResponse(CODE_OTHER_ERROR, "服务器错误", e.getMessage());
            }
        });

        // 发送全服公告
        get("/protected/sendAllServerNotice", (request, response) -> {
            try {
                String content = request.queryParams("content");
                content = URLDecoder.decode(content, "UTF-8");
                System.out.println("[公告]:" + content);
                for (final ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                    for (final MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                        mch.startMapEffect(content, 5121009);
                    }
                }
                return generateResponse(CODE_SUCCESS, "success", null);
            } catch(Exception e) {
                e.printStackTrace();
                return generateResponse(CODE_OTHER_ERROR, "服务器错误", e.getMessage());
            }
        });
        // 重载系列
        get("/protected/reload", (request, response) -> {
            try {
                if (reloadFlag) {
                    return generateResponse(CODE_OTHER_ERROR, "正在重载其他内容，请稍后再试", null);
                }
                String type = request.queryParams("type");
                type = URLDecoder.decode(type, "UTF-8");
                String outStr = "";
                reloadFlag = true;
                switch(type){
                    case "Task": // 任务
                        MapleQuest.clearQuests();
                        outStr = "[重载系统] 任务重载成功。";
                        break;
                    case "Dungeon": // 副本
                        for (final ChannelServer instance1 : ChannelServer.getAllInstances()) {
                            if (instance1 != null) {
                                instance1.reloadEvents();
                            }
                        }
                        outStr = "[重载系统] 副本重载成功。";
                        break;
                    case "ParkHead":
                        SendPacketOpcode.reloadValues();
                        RecvPacketOpcode.reloadValues();
                        outStr = "[重载系统] 包头重载成功。。";
                        break;
                    case "SqlConnect":
                        DatabaseConnection.closeTimeout();
                        outStr = "[重载系统] 清除sql连接成功。。";
                        break;
                    case "EquipRate":
                        MapleMonsterInformationProvider.getInstance().clearDrops();
                        outStr = "[重载系统] 爆率重载成功。";
                        break;
                    case "Shop":
                        MapleShopFactory.getInstance().clear();
                        outStr = "[重载系统] 商店重载成功。";
                        break;
                    case "CashShop":
                        CashItemFactory.getInstance().clearCashShop();
                        outStr= "[重载系统] 商城重载成功。";
                        break;
                    case "Reaction":
                        ReactorScriptManager.getInstance().clearDrops();
                        outStr = "[重载系统] 反应堆重载成功。";
                        break;
                    case "Transmitn":
                        PortalScriptManager.getInstance().clearScripts();
                        outStr = "[重载系统] 传送门重载成功。";
                        break;
                }
                reloadFlag = false;
                if (outStr.equals("")){
                    return generateResponse(CODE_OTHER_ERROR, "未知的type", null);
                }
                System.out.println(outStr);
                return generateResponse(CODE_SUCCESS, outStr, null);
            } catch(Exception e) {
                e.printStackTrace();
                return generateResponse(CODE_OTHER_ERROR, "服务器错误", e.getMessage());
            }
        });
        // 保存系列
        get("/protected/save/:name", (request, response) -> {
            try {
                if(saveFlag){
                    return generateResponse(CODE_OTHER_ERROR, "正在重保存他内容，请稍后再试", null);
                }
                saveFlag = true;
                String name = request.params(":name");
                String outStr = "";
                int p = 0;
                if (name.equals("data")) {
                    for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                        for (final MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                            ++p;
                            chr.saveToDB(true, true);
                        }
                    }
                    outStr = "[保存数据系统] 保存" + p + "个成功。";
                } else if (name.equals("shopNpc")) {
                    for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                        ++p;
                        cserv.closeAllMerchant();
                    }
                    outStr = "[保存雇佣商人系统] 雇佣商人保存" + p + "个频道成功。";
                }
                saveFlag = false;
                System.out.println(outStr);
                return generateResponse(CODE_SUCCESS, outStr, null);
            } catch(Exception e) {
                e.printStackTrace();
                return generateResponse(CODE_OTHER_ERROR, "服务器错误", e.getMessage());
            }
        });
        // 发放全服奖励
        get("/protected/sendAllServerReward", (request, response) -> {
            try{
                int number = Integer.parseInt(request.queryParams("number"));
                int type = Integer.parseInt(request.queryParams("type"));
                if (number <= 0 || type <= 0) {
                    return generateResponse(CODE_OTHER_ERROR, "输入了错误的数量或者类型", null);
                }
                String outStr = "";
                int ret = 0;
                if (type == 1 || type == 2) {
                    for (final ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                        for (final MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                            mch.modifyCSPoints(type, number);
                            String cash = null;
                            if (type == 1) {
                                cash = "点卷";
                            }
                            else if (type == 2) {
                                cash = "抵用卷";
                            }
                            mch.startMapEffect("管理员发放" + number + cash + "给在线的所有玩家！快感谢管理员吧！", 5121009);
                            ++ret;
                        }
                    }
                }
                else if (type == 3) {
                    for (final ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                        for (final MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                            mch.gainMeso(number, true);
                            mch.startMapEffect("管理员发放" + number + "冒险币给在线的所有玩家！快感谢管理员吧！", 5121009);
                            ++ret;
                        }
                    }
                }
                else if (type == 4) {
                    for (final ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                        for (final MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                            mch.gainExp(number, true, false, true);
                            mch.startMapEffect("管理员发放" + number + "经验给在线的所有玩家！快感谢管理员吧！", 5121009);
                            ++ret;
                        }
                    }
                }
                String typeA = "";
                if (type == 1) {
                    typeA = "点卷";
                }
                else if (type == 2) {
                    typeA = "抵用卷";
                }
                else if (type == 3) {
                    typeA = "金币";
                }
                else if (type == 4) {
                    typeA = "经验";
                }
                outStr = "一个发放[" + number + "]." + typeA + "!一共发放给了" + ret + "人！";
                System.out.println(outStr);
                return generateResponse(CODE_SUCCESS, outStr, null);
            } catch (Exception e) {
                e.printStackTrace();
                return generateResponse(CODE_OTHER_ERROR, "服务器错误", e.getMessage());
            }
        });
    }
    
    private void sendResponse(int code, String msg, Object data ) {
        halt(200,  generateResponse(code,msg,data));
    }

    private String generateResponse(int code, String msg, Object data ) {
        Gson gson = new Gson();
        return String.format("{\"code\": %s, \"msg\": \"%s\", \"data\": %s }", code, msg,gson.toJson(data));
    }


    public void dismiss(){
        stop();
    }
}