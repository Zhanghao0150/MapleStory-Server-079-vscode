var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("等您下定决心再次找我吧.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getJob() == 311 || cm.getJob() == 321 || cm.getJob() == 312 || cm.getJob() == 322) {
                cm.sendOk("您属于弓箭手职业群,但是您已经成功三转了,已经超越了教官的强度了!\r\n如果需要四转，请去神木村的祭司之林，找四转教官吧！");
                cm.dispose();
                return;
            }
            if (!(cm.getJob() == 310 || cm.getJob() == 320)) {
                cm.sendOk("请找您的转职教官,您不属于弓箭手职业群!");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getLevel() < 70) {
                cm.sendOk("你的等级尚未满70");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4031057, 1)) {
                cm.sendNext("恭喜你到达这里,最后我将给你一个考验!");
            } else if (!(cm.haveItem(4031057, 1))) {
                cm.warp(100000201);
                cm.sendOk("去找 #r赫丽娜#k 他会帮助你的!");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("你的技能点数还没点完..");
            } else {
                cm.sendOk("你还不能转职...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob() == 310) {
                    cm.changeJob(311);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("恭喜转职了!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[转职快报]：恭喜帅哥." + cm.getChar().getName() + "  成功转职成为一名 射手，让我们热烈的祝福他吧！！！");
                    } else {
                        cm.worldMessage("[转职快报]：恭喜美女." + cm.getChar().getName() + "  成功转职成为一名 射手，让我们热烈的祝福她吧！！！");
                    }
                    cm.dispose();
                } else if (cm.getJob() == 320) {
                    cm.changeJob(321);
                    //cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("恭喜转职了!");
                    if (cm.getPlayer().getGender() == 0) {
                        cm.worldMessage("[转职快报]：恭喜帅哥." + cm.getChar().getName() + "  成功转职成为一名 游侠，让我们热烈的祝福他吧！！！");
                    } else {
                        cm.worldMessage("[转职快报]：恭喜美女." + cm.getChar().getName() + "  成功转职成为一名 游侠，让我们热烈的祝福她吧！！！");
                    }
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("你准备承担最终测试??");
            else
                cm.sendAcceptDecline("但是，我可以让你更加强大。虽然你必须证明不仅是你的实力，但你的知识。你准备好挑战了吗？");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.warp(211040401);
                cm.sendOk("去找神圣的石头测验吧!!.");
                cm.dispose();
            }
        }
    }
}
