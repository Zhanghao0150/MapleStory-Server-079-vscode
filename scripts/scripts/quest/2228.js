var status = -1;

function start(mode, type, selection) {
    qm.sendNext("璋㈣阿瀹屾垚.鎴戝緢寮?蹇?");
    qm.gainExp(11280);
    qm.getPlayer().setFame(qm.getPlayer().getFame() + 8);
    qm.forceCompleteQuest();
    qm.dispose();
}
function end(mode, type, selection) {
    qm.dispose();
}
