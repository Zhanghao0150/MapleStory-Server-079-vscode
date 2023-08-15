load('nashorn:mozilla_compat.js');

/*
 *
 *  此脚本由乐章网络制作完成
 * 购买商业脚本请加群:1049548
 *
 */


importPackage(net.sf.odinms.client);

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
										Array(100000005,100000,"蘑菇王 传送费用10W"),													       
										Array(105070002,100000,"僵尸蘑菇王 传送费用10W"), 
										Array(105090900,100000,"被诅咒的寺院：蝙蝠怪 传送费用10W"),     
										//Array(105090900,1000000,"蓝蘑菇王 传送费用10W"), 
										Array(240020402,100000,"喷火龙栖息地：喷火龙 传送费用10W"), 
										Array(240020101,100000,"格瑞芬多森林：鸟 传送费用10W"),  
										Array(220080000,100000,"时间塔的本源:闹钟 传送费用10W"),  
										Array(230040420,100000,"皮亚奴斯洞穴:鱼王 传送费用10W"), 
										Array(702070400,100000,"藏经阁七层:妖憎 传送费用10W"), 
										Array(551030100,100000,"阴森世界入口:打熊和狮子 传送费用10W"),
										Array(541020700,100000,"克雷塞尔的遗迹I:树精王 传送费用10W"),
										Array(211042300,100000,"扎昆入口:挑战扎昆 传送费用10W"), 
										Array(240050400,100000,"生命之穴入口:暗黑龙王 传送费用10W"), 
										Array(209080100,100000,"圣诞组队室:雪屋天球 传送费用10W"), 
										Array(803001200,100000,"绯红副本挑战 传送费用10W"), 
										Array(270050000,100000,"神的黄昏:PB品克缤  传送费用10W")														
		);

//------------------------------------------------------------------------

var monstermaps = Array(
                                        Array(104040000,0,"射手训练场------------1级-30级"), 
										Array(550000100,0,"泥泞的河岸外围--------30级-50级"), 
										Array(220010500,5000,"露台大厅--------------40级-70级"), 
										Array(250020000,5000,"初级修炼场------------50级-60级"), 
										Array(105040306,10000,"巨人之林--------------60级-80级"), 
										Array(541020000,20000,"乌鲁城入口------------70级-90级"), 
										Array(240010700,20000,"天空之巢--------------90级-110级"), 
										Array(240020100,20000,"火焰死亡战场----------100级-120级"), 
										Array(240030101,20000,"火焰树林--------------110级-130级"), 
										Array(541020500,50000,"乌鲁城中心------------120级-140级"), 
										Array(240040511,50000,"被遗忘的龙之巢穴------130级-150级"), 
										Array(270030500,50000,"忘却之路5-------------140级-160级"),  
										Array(230010400,50000,"西海叉路"), 
										Array(211041400,50000,"死亡之林Ⅳ"), 
										Array(222010000,50000,"乌山入口"),
										Array(220070301,50000,"时间停止之间"), 
										Array(220070201,50000,"消失的时间"), 
										Array(220050300,50000,"时间通道"), 
										Array(251010000,50000,"十年药草地"), 
										Array(200040000,50000,"云彩公园Ⅲ"), 
										Array(200010301,50000,"黑暗庭院Ⅰ"), 
										Array(240040500,50000,"龙之巢穴入口"), 
										Array(240040000,50000,"龙的峡谷"), 
										Array(600020300,50000,"狼蛛洞穴"),
                                        Array(541020000,50000,"乌鲁庄园"), 
										Array(800020130,50000,"大佛的邂逅")
		); 

//------------------------------------------------------------------------

var townmaps = Array(

										Array(104000000,0,"明珠港"), 
										Array(100000000,0,"射手村"), 
										Array(101000000,0,"魔法密林"), 
										Array(102000000,0,"勇士部落"), 
										Array(103000000,0,"废弃都市"), 
                                        Array(140000000,10000,"里恩"),
                                         Array(106020000,10000,"蘑菇城堡"),
										Array(120000000,0,"诺特勒斯号码头"),
									//	Array(741000208,0,"钓鱼场 无聊玩玩"),
										Array(105040300,10000,"林中之城"), 
										Array(200000000,10000,"天空之城"),
										Array(211000000,10000,"冰峰雪域"), 
										Array(230000000,10000,"水下世界"),  
										Array(222000000,10000,"童话村"), 
										Array(220000000,10000,"玩具城"),
										Array(701000000,10000,"东方神州"),
										Array(250000000,10000,"武陵"), 
										Array(702000000,10000,"少林寺"), 
										Array(500000000,10000,"泰国"),
										Array(260000000,10000,"沙漠之城"), 
										Array(600000000,10000,"新叶城"), 
										Array(240000000,10000,"神木村"), 
										Array(261000000,10000,"马加提亚"), 
										Array(221000000,10000,"地球防御本部"), 
										Array(251000000,10000,"百草堂"),
										Array(701000200,10000,"上海豫园"),
										Array(130000000,10000,"圣地"),  
										Array(801000000,10000,"昭和村"), 
										Array(540010000,10000,"新加坡机场"),
										Array(541000000,10000,"新加坡码头"),
										Array(300000000,10000,"艾林森林"), 
										Array(270000100,10000,"时间神殿"), 
										Array(702100000,10000,"藏经阁"), 
										Array(970000000,10000,"各大城市欣赏"), 
										Array(800000000,10000,"地图古代神社") 
										
		);

//---------//Array(700000000,0,"结婚地图") ---------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,0,"家族PK地图"),
		Array(193000000,0,"网吧地图")						
		);

//------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

//------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "\r\n\r\n我可以把你送到你想去的地方\r\n\r\n#b";

	//	add += "冒险到世界地图我都可以为你送到,";

	//	add += "为方便玩家,管理设置了练级地图,组队副本,BOSS地图直接传送,";

	//	add += "如果你有什么更好的地图,不防联系管理员添加,感谢你对本服的支持.#b\r\n\r\n";

		add += "#L0#城镇传送#l ";

		//add += "      #L1#练级传送#l";

	//	add += "       #k#L3#BOSS状态#l\r\n\r\n\r\n ";

		

		add += "#L2#BOSS传送#l ";
		
		add += "#r#L6#组队副本#l";
		
		add += "#r#L7#自由市场#l";


 
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "选择你的目的地吧.#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "选择你的目的地吧.#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "选择你的目的地吧.#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(280030000);
		var zha1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(280030000);
		var zha2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(280030000);
		var zha3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(280030000);
		var zha4 = map.getCharacters().toArray().length;

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(240060200);
		var hei1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(240060200);
		var hei2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(240060200);
		var hei3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(240060200);
		var hei4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(270050100);
		var pb1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(270050100);
		var pb2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(270050100);
		var pb3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(270050100);
		var pb4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(220080001);
		var nao1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(220080001);
		var nao2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(220080001);
		var nao3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(220080001);
		var nao4 = map.getCharacters().toArray().length

   	    var add = "以下所示为各线的BOSS战况#b\r\n";

		add += ""+aaa+"[#r频道一#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha1+"#b人  [#d黑龙#b]：#r"+hei1+"#b人  [#dPB#b]：#r"+pb1+"#b人  [#d闹钟#b]：#r"+nao1+"#b人\r\n\r\n";

		add += ""+aaa+"[#r频道二#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha2+"#b人  [#d黑龙#b]：#r"+hei2+"#b人  [#dPB#b]：#r"+pb2+"#b人  [#d闹钟#b]：#r"+nao2+"#b人\r\n\r\n";

		add += ""+aaa+"[#r频道三#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha3+"#b人  [#d黑龙#b]：#r"+hei3+"#b人  [#dPB#b]：#r"+pb3+"#b人  [#d闹钟#b]：#r"+nao3+"#b人\r\n\r\n";

		add += ""+aaa+"[#r频道四#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha4+"#b人  [#d黑龙#b]：#r"+hei4+"#b人  [#dPB#b]：#r"+pb4+"#b人  [#d闹钟#b]：#r"+nao4+"#b人\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();
                   }

	if (selection == 6) {
		cm.dispose();
cm.warp(910000006,0);
cm.取消克隆();

                   }
	if (selection == 5) {
		cm.dispose();
cm.warp(700000000,0);

                   }
	if (selection == 7) {
		cm.dispose();
cm.warp(910000000,0);
cm.取消克隆();


                   }
				   
//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("你确定要去 " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("你确定要去 " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("你确定要去 " + fubenmaps[selection][2] + "?");
		chosenMap = selection;
		fuben = 2;

		}

//----------------------------------------------------------------------

	} else if (status == 3) {

	if (towns == 2) {
		if(cm.getMeso()>=townmaps[chosenMap][1]){
		cm.warp(townmaps[chosenMap][0], 0);
		cm.gainMeso(-townmaps[chosenMap][1]);
		cm.取消克隆();
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		cm.取消克隆();
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		cm.取消克隆();
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		cm.取消克隆();
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

