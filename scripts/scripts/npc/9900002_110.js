//////////////////////////////
//�߱�*自由冒险岛*最具创意////
//1346464664/992916233//////
///////////////////////////
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var MC = cm.getServerName();
    var h1 = cm.getBossRank("银行账户1", 2);
    var h2 = cm.getBossRank("银行账户2", 2);
    var h3 = cm.getBossRank("银行账户3", 2);
    var h4 = cm.getBossRank("银行账户4", 2);
    var h5 = cm.getBossRank("银行账户5", 2);
    var h6 = cm.getBossRank("银行账户6", 2);
    var h7 = cm.getBossRank("银行账户7", 2);
    var h8 = cm.getBossRank("银行账户8", 2);
    var h9 = cm.getBossRank("银行账户9", 2);
    var r1 = Math.ceil(Math.random() * 9);
    var r2 = Math.ceil(Math.random() * 9);
    var r3 = Math.ceil(Math.random() * 9);
    var r4 = Math.ceil(Math.random() * 9);
    var r5 = Math.ceil(Math.random() * 9);
    var r6 = Math.ceil(Math.random() * 9);
    var r7 = Math.ceil(Math.random() * 9);
    var r8 = Math.ceil(Math.random() * 9);
    var r9 = Math.ceil(Math.random() * 9);

    if (cm.getMapId() == 10000) {
        cm.sendOk(" 自 由 冒 险 岛 境 外 无 法 使 用 此 功 能 。");
        cm.dispose();
    } else if (status == 0) {

        var
            selStr = "◆◆◆◆◆◆◆#e#r《自由冒险岛民生银行》#k◆◆◆◆◆◆◆#n\r\n";


        selStr += "\t\t\t #L1#" + 箭头 + "#b重置密码为111111#l \r\n\r\n\r\n";









        //selStr += " #b#e#L0#"+枫叶天梯+"#l #L1#"+随身仓库+"#l #L2#"+音乐点播+"#l #L3#"+快捷商店+"#l\r\n";
        ///selStr += " #L99995#"+试炼专区+"#l #L5#"+清理背包+"#l #L99997#"+锻造技艺+"#l #L7#"+任务手册+"#l \r\n";
        //selStr += " #L20#"+礼包商店+"#l #L21#"+现金商店+"#l #r#e#L23#"+至尊喇叭+"#l #L24#"+角色装扮+"#l\r\n";
        //selStr += " #L100000#"+快速转职+"#l #L99996#"+活动专区+"#l #L99994#"+天赋+"#l #L6#"+个人信息+"#l\r\n";


        //selStr += "\r\n\t\t\t\t\t\t\t\t\t\t\t  #L9999##r设置#l#k ";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {


            case 1:
                cm.setBossRankCount("银行密码", "-" + cm.getBossRank("银行密码", 2) + "");
                cm.setBossRankCount("银行密码", 111111);
                cm.dispose();
                cm.openNpc(9900002, 101);
                break;








































        }
    }
}