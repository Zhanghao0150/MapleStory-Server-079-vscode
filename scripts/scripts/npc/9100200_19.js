load('nashorn:mozilla_compat.js');

importPackage(Packages.client);
var 粉五角星号 = "#fUI/Initials.img/Button/Button9/mouseOver/0#";
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
            cm.sendOk("咳咳。。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        var MC = cm.getServerName();
        var 粉五角星号下注 = cm.getBossRank("粉五角星号下注", 2);
        var 粉五角星号赔率 = 1;

        if (status == 0) {
            cm.sendGetText("" + 粉五角星号 + "#b请输入下注金额；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("确定下注； #r " + fee + " #k?");
        } else if (fee < 0) {
            cm.sendOk("输入有误!");
            cm.dispose();
        } else if (cm.getPlayer().getMeso() < fee) {
            cm.sendOk("你的金币不够哦。");
            cm.dispose();
        } else {

            if (chance <= 1) {
                cm.setBossRankCount("粉五角星号下注", -粉五角星号下注);
                cm.setBossRankCount("粉五角星号下注", fee);
                cm.gainMeso(-fee);
                cm.playerMessage(5, "[下注 " + fee + " 金币成功，当前赔率是 " + 粉五角星号赔率 + " ]");
                cm.dispose();
                cm.openNpc(9100200, 0);
            } else {
                cm.sendOk("未知错误，请联系ZEV;7144700");
                cm.dispose();
            }

        }
    }
}