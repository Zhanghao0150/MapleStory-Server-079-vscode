var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var 红色 = "#fEffect/CharacterEff/1114000/2/0#";
var status = 0;
var fstype = 0;



	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "#r在我这里强化装备!#k\r\n每日6次#k\r\n注意:装备请放第一格，#r强化成功会全区报喜哦!#k\r\n";

		textz += "------------------------------------------------------\r\n";
               
	
		textz += "#b#L4#" + 红色 + "10个充值币增加装备四维各5点（失败返5币）\r\n\r\n";
		
		textz += "#b#L5#" + 红色 + "2000W金币增加装备四维各1点（失败返还500W金币）\r\n\r\n";
		
		
		cm.sendSimple (textz);  
  
//----------------------------------------------------------------------------------------------------------------------------------------------	
//----------------------------------------------------------------------------------------------------------------------------------------------		
	}else if (status == 1) {

            if (selection == 0) { //力量母矿
                fstype = 0;
                cm.sendNext("你目前选择的是用力量母矿增加装备10力量（有几率失败，失败退回一半，成功了回合减1）");
         
        
			}else if (selection == 4) { //象征
                fstype = 4;
                cm.sendNext("你目前选择的是用10充值币增加装备四维各5.（失败返还5充值币）");
				
				}else if (selection == 5) { //象征
                fstype = 5;
                cm.sendNext("你目前选择的是用2000W金币增加装备四维各1点（失败返还500W金币）");

         
            }

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------

      } else if (status == 2) {

           
             

            if (fstype == 4) { //运气母矿
                fstype = 4;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
				
				if (fstype == 5) { //运气母矿
                fstype = 5;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }

}
        

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
	if (fstype == 0) {
		if (!cm.haveItem(4005000,10))  {
                    cm.sendOk("请带来#r 10 #k个#z4005000##v4005000#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setStr(item.getStr()+10);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005000,-10);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        成功为装备增加10力量"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005000,-2);
		 cm.sendOk("强化失败，退回你8个力量水晶");	
		}
		 cm.dispose();
		}




	}  else if (fstype == 4) {
              if (cm.getmoneyb() < 10){
                    cm.sendOk("请带来10充值币加工费");
                    cm.dispose();
					
		}	else    if (cm.getBossLog('PlayQuest40') >= 6) {
			cm.sendOk("你今天强化次数超过6次!");
			cm.dispose();	
			
		} else {

                 var chance = Math.floor(Math.random() * 3);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                // item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr() + 5); //给予装备力量
		 item.setDex(item.getDex() + 5);//给予装备敏捷
		 item.setInt(item.getInt() + 5);//给予装备智力
		 item.setLuk(item.getLuk() + 5);//给予装备运气
		// item.setWatk(item.getWatk() + 10);
		// item.setMatk(item.getMatk() + 10);
		 //cm.gainItem(4001084,-1);
		 cm.setmoneyb(-10);
		 cm.gainjf(+10);
		 cm.setBossLog('PlayQuest40');
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
              cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        使用10个充值币为装备增加四维各5点");
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.setmoneyb(-5);
		 cm.gainjf(+5);
		 cm.setBossLog('PlayQuest40');
		 cm.sendOk("强化失败，退回你5个充值币");	
		}
		 cm.dispose();
		}

		
		}  else if (fstype == 5) {
              if (cm.getMeso() < 20000000){
                    cm.sendOk("请带来2000W金币加工费");
                    cm.dispose();
					
		}	else    if (cm.getBossLog('PlayQuest41') >= 6) {
			cm.sendOk("你今天强化次数超过6次!");
			cm.dispose();	
			
		} else {

                 var chance = Math.floor(Math.random() * 6);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                // item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr() + 1); //给予装备力量
		 item.setDex(item.getDex() + 1);//给予装备敏捷
		 item.setInt(item.getInt() + 1);//给予装备智力
		 item.setLuk(item.getLuk() + 1);//给予装备运气
		// item.setWatk(item.getWatk() + 10);
		// item.setMatk(item.getMatk() + 10);
		 //cm.gainItem(4001084,-1);
		 cm.gainMeso(-20000000);
		 //cm.gainjf(+10);
		 cm.setBossLog('PlayQuest41');
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
              cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        使用2000W金币为装备增加四维各1点");
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		cm.gainMeso(-5000000);
		 cm.setBossLog('PlayQuest41');
		 cm.sendOk("强化失败，退回你500W金币");	
		}
		 cm.dispose();
		}
	

	} else if (fstype == 10) {
		if (!cm.haveItem(4170009,1)){
            cm.sendOk("请带来#r 1 #k个#z4170009##v4170009#");
            cm.dispose();
		} else {
            cm.gainItem(4170009,-1);
			cm.gainItem(2370000,1);
			cm.sendOk("#r#e兑换成功,祝您游戏愉快!#k");
            cm.dispose();
		} 

	}
									
}
}
}
