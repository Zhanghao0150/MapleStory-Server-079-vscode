package webui;
import static spark.Spark.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import com.google.gson.Gson;
import handling.channel.ChannelServer;
import client.MapleCharacter;

public class WebServer { 
    /** 账号或者密码错误 */
    static final int CODE_PWD_ERROR = 10002;
    /** token 无效 */
    static final int CODE_INVALID_TOKEN = 10001;
    static final int CODE_SUCCESS = 0;

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
                return sendResponse(CODE_SUCCESS,"sucess", jwt);
            } else {
                return sendResponse(CODE_PWD_ERROR, "账号或者密码错误", null);
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
        get("/protected/check", (request, response) ->{
            return sendResponse(CODE_SUCCESS, "success", null);
        });
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
            return sendResponse(CODE_SUCCESS, "success", result);
        });

    }
    
    private Object sendResponse(int code, String msg, Object data ) {
        Gson gson = new Gson();
        halt(200,  String.format("{\"code\": %s, \"msg\": \"%s\", \"data\": %s }", code, msg,gson.toJson(data)));
        return null;
    }

    public void dismiss(){
        stop();
    }
}