load('nashorn:mozilla_compat.js');

importPackage(Packages.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random() * 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("请输入密码。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        var h1 = cm.getBossRank("银行账户1", 2);
        var h2 = cm.getBossRank("银行账户2", 2);
        var h3 = cm.getBossRank("银行账户3", 2);
        var h4 = cm.getBossRank("银行账户4", 2);
        var h5 = cm.getBossRank("银行账户5", 2);
        var h6 = cm.getBossRank("银行账户6", 2);
        var h7 = cm.getBossRank("银行账户7", 2);
        var h8 = cm.getBossRank("银行账户8", 2);
        var h9 = cm.getBossRank("银行账户9", 2);
        var h10 = cm.getBossRank("银行金币", 2);
        if (status == 0) {
            cm.sendGetText("- 用户名；#r#h ##k\r\n- 用户账号；#r" + h1 + "" + h2 + "" + h3 + "" + h4 + "" + h5 + "" + h6 + "" + h7 + "" + h8 + "" + h9 + "\r\n\r\n #e#r请输入需要取出的金币；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("- 请确认取出的金币数量是； #r" + fee + "#k  ？");
        } else if (status == 2) {
            if (cm.getBossRank("银行金币", 2) < fee) {
                cm.sendOk("你银行里并没那么多金币哦。");
                cm.dispose();
            } else if (fee < 0) {
                cm.sendOk("输入有误!");
                cm.dispose();
            } else {

                if (chance <= 1) {
                    cm.gainMeso(fee);
                    cm.setBossRankCount("银行金币", -fee);
                    cm.dispose();
                    cm.openNpc(9900002, 105);
                } else {
                    cm.sendOk("未知错误，请联系�߱�;7144700");
                    cm.dispose();
                }

            }
        }
    }
}