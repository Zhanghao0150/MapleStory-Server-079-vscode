function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d制作#v2070006# +27攻击.需要：\r\n#v4021009#x3.#v4011007#x3.#v4011001#x10.#v4000040#x20.#v4021000#x10.#v4031891#1500万.搜集好道具我就可以为您制作.\r\n\r\n重要提示：当您拥有2组齿轮镖时，请联系GM，2组齿轮换1组无限飞镖！！！\r\n\r\n"//3
            text += "#L1##r制作齿轮镖#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4011007,3) && cm.haveItem(4021009,3) && cm.haveItem(4000040,20) && cm.haveItem(4011001,10) && cm.haveItem(4021000,10) && cm.getMeso() > 15000000){
				cm.gainItem(4021009, -3);
				cm.gainItem(4011007, -3);
				cm.gainItem(4011001, -10);
				cm.gainItem(4000040, -20);
				cm.gainItem(4021000, -10);
				cm.gainItem(2070006,1);
				cm.gainMeso(-15000000);
            cm.sendOk("制作成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]制作了[无限飞镖]，进一步提升了自己的能力！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


