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
            text += "#e#d兑换#v1113164#Lv30级佩戴.全属性+2,HP/MP+200,攻击/魔力+2,防御/魔防+10,命中/回避+10,跳跃/移动+5\r\n需要#v4170013#x30个.搜集好道具就可以找我兑换了.#l\r\n\r\n"//3
            text += "#L1##r兑换新手赏金猎人戒指#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170013,30)){
				cm.gainItem(4170013, -30);
				cm.gainItem(1113164,2,2,2,2,200,200,2,2,10,10,10,10,5,5);
				cm.gainMeso(100000);
            cm.sendOk("兑换成功！");
		//	cm.worldMessage(6,"玩家：["+cm.getName()+"]用30个[月妙副本蛋]兑换了[新手赏金猎人戒指]，多多带新手，攒人品哦~！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


