importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "我是每日跑商第3环NPC哦！\r\n\r\n";

            if (cm.getPS() == 2){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!

                txt += "#L1##b收集25个#v4000190#+#v4000191#交给我！！#l";
                cm.sendSimple(txt);
            }else{
                txt += "你已经完成过了然后你去找.勇士部落-仓库老板-王先生!\r\n请第二天再来！";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000190,25) && cm.haveItem(4000191,25)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		
                cm.gainItem(4000190, -25);
				cm.gainItem(4000191, -25);
cm.gainExp(+250000);
cm.gainMeso(+250000);
                cm.sendOk("跑商第3环完成!恭喜获得金币=250000、经验=250000\r\n\r\n然后你去找.勇士部落-仓库老板-王先生.进行下一环！");
                cm.dispose();
            }else{
                cm.sendOk("收集25个#v4000190#+#v4000191#交给我!");
                cm.dispose();
            }
        }
    }
}
