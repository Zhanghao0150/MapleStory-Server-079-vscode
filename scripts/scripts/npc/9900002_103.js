importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*1);
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
		var h1 = cm.getBossRank("银行账户1",2);
	var h2 = cm.getBossRank("银行账户2",2);
	var h3 = cm.getBossRank("银行账户3",2);
	var h4 = cm.getBossRank("银行账户4",2);
	var h5 = cm.getBossRank("银行账户5",2);
	var h6 = cm.getBossRank("银行账户6",2);
	var h7 = cm.getBossRank("银行账户7",2);
	var h8 = cm.getBossRank("银行账户8",2);
	var h9 = cm.getBossRank("银行账户9",2);
	var h10 = cm.getBossRank("银行密码",2);
          if (status == 0) {
            cm.sendGetText("- 用户名；#r#h ##k\r\n- 用户账号；#r"+h1+""+h2+""+h3+""+h4+""+h5+""+h6+""+h7+""+h8+""+h9+"\r\n\r\n #e#r请输入密码；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("- 请确认密码是； #r" + fee + "#k  ？");
        } else if (status == 2) {
            if (h10 < fee ||  h10 > fee) {
                cm.sendOk("密码错误，请重试。");
                cm.dispose();
				} else {

                 if (chance <= 1) { 
				 
	                   // cm.gainMeso(-fee); 
	                   // cm.sendNext("#i3994125# - #r你输了#k"); 
                       //  cm.serverNotice("[赌博公告]：玩家 "+ cm.getChar().getName() +" ，在赌场⑹号机输了，看来今天并不被女神并眷顾!");
						 
	                   cm.dispose();
                       cm.openNpc(9900002,105);	
	                } 
	                else  { 
                         cm.sendOk("未知错误，请联系�߱�;7144700");
	                     cm.dispose(); 
	                } 

            }
        }
    }
}

