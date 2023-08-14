var status = -1;
var map = 910060000;
var num = 5;
var maxp = 5;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status <= 1) {
            cm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (cm.isQuestActive(22515) || cm.isQuestActive(22516) || cm.isQuestActive(22517) || cm.isQuestActive(22518)) {
            cm.sendYesNo("你想进入培训中心？？");
            status = 1;
        }
        var selStr = "选择一个你想要去的培训中心";
        for (var i = 0; i < num; i++) {
            selStr += "\r\n#b#L" + i + "#培训中心 " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        if (selection < 0 || selection >= num) {
            cm.dispose();
        } else if (cm.getPlayer().getLevel() >= 20) {
            cm.sendNext("二十等以后无法使用唷。");
            cm.dispose();
        } else if (cm.getPlayerCount(map + selection) >= maxp) {
            cm.sendNext("这个培训中心已经满人，请稍后再尝试!");
            status = -1;
        } else {
            cm.warp(map + selection, 0);
            cm.dispose();
        }
    } else if (status == 2) {
        cm.warp(910060100, 0);
        cm.dispose();
    }
}