status = -1;
var maxTcmes = 900;
var itemList = Array(
//传说枫叶系列
Array(1003296,800,1), //传说枫叶纪念帽1
Array(1003349,300,1), //传说枫叶纪念帽1
Array(1003350,150,1), //传说枫叶纪念帽1
Array(1032111,800,1), //传说枫叶耳环1
Array(1032112,300,1), //传说枫叶耳环2
Array(1032113,150,1), //传说枫叶耳环3
Array(1122152,800,1), //传说枫叶围巾1
Array(1122153,300,1), //传说枫叶围巾2
Array(1122154,150,1), //传说枫叶围巾3
Array(1012286,900,1), //传说枫叶1
Array(1012287,800,1), //传说枫叶2
Array(1012288,700,1), //传说枫叶3
Array(1012308,700,1), //传说枫叶3(可交易)
Array(1082343,800,1), //传说枫叶手套1
Array(1082344,300,1), //传说枫叶手套2
Array(1082345,150,1), //传说枫叶手套3

//枫叶系列
Array(1132151,250,1), //腰带
Array(1003529,250,1), //帽子
Array(1102394,250,1), //披风
Array(1052457,250,1), //套装
Array(1072660,250,1), //鞋子
Array(1082430,250,1), //手套
Array(1132154,150,1), //专属腰带
Array(1003552,150,1), //专属帽子
Array(1102441,150,1), //专属披风
Array(1052461,150,1), //专属套装
Array(1072666,150,1), //专属鞋子
Array(1082433,150,1), //专属手套
Array(1302212,200,1), //单手剑
Array(1322154,200,1), //单手钝器
Array(1332186,200,1), //短刀
Array(1372131,200,1), //短杖
Array(1382160,200,1), //长杖
Array(1402145,200,1), //双手剑
Array(1422105,200,1), //双手钝器
Array(1432135,200,1), //枪
Array(1442173,200,1), //矛
Array(1452165,200,1), //弓
Array(1462156,200,1), //弩
Array(1472177,200,1), //拳套
Array(1482138,200,1), //指节
Array(1492138,200,1), //短枪
Array(1302142,150,1), //单手剑
Array(1322084,150,1), //单手钝器
Array(1402085,150,1), //双手剑
Array(1422057,150,1), //双手钝器
Array(1432075,150,1), //枪
Array(1442104,150,1), //矛
Array(1372071,150,1), //长杖
Array(1382093,150,1), //短杖
Array(1452100,150,1), //弓
Array(1462085,150,1), //弩
Array(1472111,150,1), //拳套
Array(1332114,150,1), //短刀

//玩具
Array(1332053,150,1), //烧烤串
Array(1322051,150,1), //七夕
Array(1332021,300,1), //乌龙茶
Array(1402037,150,1), //龙背
Array(1442039,150,1), //冻冻鱼
Array(1302013,300,1), //红色鞭子
Array(1302049,150,1), //光线鞭子
Array(1302063,200,1), //火焰刀
Array(1302106,200,1), //冰焰刀
Array(1402014,150,1), //温度计
Array(1402013,300,1), //白日剑
Array(1432037,150,1), //枫叶大将旗
Array(1322031,150,1), //葵花宝典
Array(1302037,150,1), //小号
Array(1332054,150,1), //闪电飞刀
Array(1302019,150,1), //无名剑
Array(1322027,150,1), //平底锅
Array(1302024,350,1), //废报纸卷
Array(1432015,350,1), //红色滑雪板
Array(1432016,350,1), //橙色滑雪板
Array(1432017,350,1), //绿色滑雪板
Array(1432018,350,1), //蓝色滑雪板
Array(1442046,150,1), //超级滑雪板
Array(1382015,250,1), //毒蘑菇
Array(1382016,250,1), //香菇
Array(1302084,150,1), //火柴
Array(1302087,200,1), //火炬
Array(1332032,350,1), //圣诞树
Array(1302026,350,1), //黑雨伞
Array(1302025,350,1), //红雨伞
Array(1302017,350,1), //蓝雨伞
Array(1302027,350,1), //绿雨伞
Array(1302029,350,1), //褐雨伞
Array(1302028,350,1), //紫雨伞
Array(1302016,350,1), //黄雨伞
Array(1442026,350,1), //红色冲浪板
Array(1442029,350,1), //红色冲浪板
Array(1442011,350,1), //冲浪板
Array(1442070,350,1), //绿色冲浪板
Array(1442028,350,1), //蓝色冲浪板
Array(1442065,350,1), //蓝色冲浪板
Array(1442027,350,1), //绿色冲浪板
Array(1442066,350,1), //红色冲浪板
Array(1442029,350,1), //紫色冲浪板
Array(1422031,200,1), //蓝色海豹抱枕
Array(1422031,200,1), //蓝色海豹抱枕

//浪人工地系列
Array(1102040,800,1), //浪人披风黄
Array(1102041,250,1), //浪人披风粉
Array(1102042,250,1), //浪人披风紫
Array(1102043,800,1), //浪人披风黄
Array(1082002,900,1), //工地手套
Array(1082145,800,1), //工地手套黄
Array(1082146,800,1), //工地手套红
Array(1082147,800,1), //工地手套蓝
Array(1082148,800,1), //工地手套紫
Array(1082149,300,1), //工地手套褐
Array(1082150,800,1), //工地手套灰

//冒险岛盾牌
Array(1092045,750,1), //战士盾
Array(1092046,450,1), //法师盾
Array(1092045,450,1), //飞侠盾

//战士装备
Array(1002028,900,1), //50帽子
Array(1002029,800,1), //60帽子
Array(1002030,700,1), //70帽子
Array(1002340,300,1), //80帽子
Array(1002532,300,1), //90帽子
Array(1002379,250,1), //100帽子
Array(1002339,150,1), //110帽子
Array(1002776,200,1), //120帽子
Array(1072135,900,1), //50鞋子
Array(1072149,800,1), //60鞋子
Array(1072156,700,1), //70鞋子
Array(1072212,300,1), //80鞋子
Array(1072198,300,1), //90鞋子
Array(1072222,250,1), //100鞋子
Array(1072273,150,1), //110鞋子
Array(1072355,200,1), //120鞋子
Array(1082011,900,1), //50手套
Array(1082061,800,1), //60手套
Array(1082105,700,1), //70手套
Array(1082119,300,1), //80手套
Array(1082129,300,1), //90手套
Array(1082140,250,1), //100手套
Array(1082168,150,1), //110手套
Array(1082234,200,1), //120手套
Array(1092004,900,1), //50盾牌
Array(1092011,800,1), //60盾牌
Array(1092017,700,1), //70盾牌
Array(1092025,300,1), //80盾牌
Array(1092028,300,1), //90盾牌
Array(1092038,250,1), //100盾牌
Array(1092060,150,1), //110盾牌
Array(1092058,200,1), //120盾牌
Array(1040087,900,1), //50上衣
Array(1041087,900,1), //50上衣
Array(1040091,800,1), //60上衣
Array(1041092,800,1), //60上衣
Array(1040104,700,1), //70上衣
Array(1041098,700,1), //70上衣
Array(1040112,300,1), //90上衣
Array(1041120,300,1), //90上衣
Array(1040121,250,1), //100上衣
Array(1041123,250,1), //100上衣
Array(1060076,900,1), //50裤子
Array(1061086,900,1), //50裤子
Array(1060080,800,1), //60裤子
Array(1061091,800,1), //60裤子
Array(1060092,700,1), //70裤子
Array(1061097,700,1), //70裤子
Array(1060101,300,1), //90裤子
Array(1061119,300,1), //90裤子
Array(1060110,250,1), //100裤子
Array(1061122,250,1), //100裤子
Array(1050082,300,1), //80套装
Array(1051079,300,1), //80套装
Array(1052075,150,1), //110套装
Array(1052155,200,1), //120套装
Array(1302010,900,1), //50单手剑
Array(1302011,800,1), //60单手剑
Array(1302012,700,1), //70单手剑
Array(1302018,300,1), //80单手剑
Array(1302023,300,1), //90单手剑
Array(1302056,250,1), //100单手剑
Array(1302059,150,1), //110单手剑
Array(1302081,200,1), //120单手剑
Array(1402003,900,1), //50双手剑
Array(1402011,800,1), //60双手剑
Array(1402012,700,1), //70双手剑
Array(1402004,300,1), //80双手剑
Array(1402016,300,1), //90双手剑
Array(1402035,250,1), //100双手剑
Array(1402036,150,1), //110双手剑
Array(1402046,200,1), //120双手剑
Array(1322017,900,1), //50单手钝器
Array(1322018,800,1), //60单手钝器
Array(1322019,700,1), //70单手钝器
Array(1322028,300,1), //80单手钝器
Array(1322029,300,1), //90单手钝器
Array(1322045,250,1), //100单手钝器
Array(1322052,150,1), //110单手钝器
Array(1322060,200,1), //120单手钝器
Array(1422005,900,1), //50双手钝器
Array(1422005,800,1), //60双手钝器
Array(1422005,700,1), //70双手钝器
Array(1422005,300,1), //80双手钝器
Array(1422005,300,1), //90双手钝器
Array(1422005,250,1), //100双手钝器
Array(1422005,150,1), //110双手钝器
Array(1422005,200,1), //120双手钝器
Array(1432004,900,1), //50枪
Array(1432006,800,1), //60枪
Array(1432007,700,1), //70枪
Array(1432010,300,1), //80枪
Array(1432011,300,1), //90枪
Array(1432030,250,1), //100枪
Array(1432038,150,1), //110枪
Array(1432047,200,1), //120枪
Array(1442005,900,1), //50矛
Array(1442010,800,1), //60矛
Array(1442008,700,1), //70矛
Array(1442019,300,1), //80矛
Array(1442020,300,1), //90矛
Array(1442044,250,1), //100矛
Array(1442045,150,1), //110矛
Array(1442063,200,1), //120矛

//法师装备
Array(1002218,900,1), //50帽子
Array(1002246,800,1), //60帽子
Array(1002254,700,1), //70帽子
Array(1002274,300,1), //80帽子
Array(1002366,300,1), //90帽子
Array(1002401,250,1), //100帽子
Array(1002773,150,1), //110帽子
Array(1002777,200,1), //120帽子
Array(1072595,900,1), //50鞋子
Array(1072139,800,1), //60鞋子
Array(1072160,700,1), //70鞋子
Array(1072179,300,1), //80鞋子
Array(1072209,300,1), //90鞋子
Array(1072226,250,1), //100鞋子
Array(1072268,150,1), //110鞋子
Array(1072356,200,1), //120鞋子
Array(1082080,900,1), //50手套
Array(1082088,800,1), //60手套
Array(1082100,700,1), //70手套
Array(1082122,300,1), //80手套
Array(1082134,300,1), //90手套
Array(1082134,250,1), //100手套
Array(1082164,150,1), //110手套
Array(1082235,200,1), //120手套
Array(1050047,900,1), //50套装
Array(1051034,900,1), //50套装
Array(1050055,800,1), //60套装
Array(1051046,800,1), //60套装
Array(1050069,700,1), //70套装
Array(1051054,700,1), //70套装
Array(1050075,300,1), //80套装
Array(1051057,300,1), //80套装
Array(1050095,300,1), //90套装
Array(1051096,300,1), //90套装
Array(1050105,250,1), //100套装
Array(1051104,250,1), //100套装
Array(1052076,150,1), //110套装
Array(1052156,200,1), //120套装
Array(1372007,900,1), //50短杖
Array(1372014,800,1), //60短杖
Array(1372015,700,1), //70短杖
Array(1372016,300,1), //80短杖
Array(1372009,300,1), //90短杖
Array(1372010,250,1), //100短杖
Array(1372032,150,1), //110短杖
Array(1372044,200,1), //120短杖
Array(1382006,800,1), //55长杖
Array(1382007,700,1), //65长杖
Array(1382010,300,1), //75长杖
Array(1382008,300,1), //85长杖
Array(1382035,250,1), //95长杖
Array(1382036,150,1), //105长杖
Array(1382057,200,1), //115长杖
Array(1092057,200,1), //120盾牌

//弓手装备
Array(1002213,900,1), //50帽子
Array(1002269,800,1), //60帽子
Array(1002288,700,1), //70帽子
Array(1002277,300,1), //80帽子
Array(1002404,300,1), //90帽子
Array(1002408,250,1), //100帽子
Array(1002547,150,1), //110帽子
Array(1002778,200,1), //120帽子
Array(1072125,900,1), //50鞋子
Array(1072146,800,1), //60鞋子
Array(1072167,700,1), //70鞋子
Array(1072182,300,1), //80鞋子
Array(1072205,300,1), //90鞋子
Array(1072229,250,1), //100鞋子
Array(1072269,150,1), //110鞋子
Array(1072357,200,1), //120鞋子
Array(1082085,900,1), //50手套
Array(1082091,800,1), //60手套
Array(1082108,700,1), //70手套
Array(1082112,300,1), //80手套
Array(1082127,300,1), //90手套
Array(1082160,250,1), //100手套
Array(1082163,150,1), //110手套
Array(1082236,200,1), //120手套
Array(1050052,900,1), //50套装
Array(1051038,900,1), //50套装
Array(1050059,800,1), //60套装
Array(1051042,800,1), //60套装
Array(1050063,700,1), //70套装
Array(1051064,700,1), //70套装
Array(1050077,300,1), //80套装
Array(1051068,300,1), //80套装
Array(1050090,300,1), //90套装
Array(1051084,300,1), //90套装
Array(1050108,250,1), //100套装
Array(1051107,250,1), //100套装
Array(1052071,150,1), //110套装
Array(1052157,200,1), //120套装
Array(1452008,900,1), //50弓
Array(1452004,800,1), //60弓
Array(1452011,700,1), //70弓
Array(1452015,300,1), //80弓
Array(1452017,300,1), //90弓
Array(1452021,250,1), //100弓
Array(1452044,150,1), //110弓
Array(1452008,200,1), //120弓
Array(1462007,900,1), //50弩
Array(1462008,800,1), //60弩
Array(1462009,700,1), //70弩
Array(1462013,300,1), //80弩
Array(1462018,300,1), //90弩
Array(1462017,250,1), //100弩
Array(1462039,150,1), //110弩
Array(1462050,200,1), //120弩

//飞侠装备
Array(1002210,900,1), //50帽子
Array(1002249,800,1), //60帽子
Array(1002284,700,1), //70帽子
Array(1002330,300,1), //80帽子
Array(1002326,300,1), //90帽子
Array(1002383,250,1), //100帽子
Array(1002550,150,1), //110帽子
Array(1002779,200,1), //120帽子
Array(1082067,900,1), //50手套
Array(1082094,800,1), //60手套
Array(1082096,700,1), //70手套
Array(1082120,300,1), //80手套
Array(1082144,300,1), //90手套
Array(1082138,250,1), //100手套
Array(1082167,150,1), //110手套
Array(1082237,200,1), //120手套
Array(1072131,900,1), //50鞋子
Array(1072152,800,1), //60鞋子
Array(1072163,700,1), //70鞋子
Array(1072174,300,1), //80鞋子
Array(1072195,300,1), //90鞋子
Array(1072216,250,1), //100鞋子
Array(1072272,150,1), //110鞋子
Array(1072358,200,1), //120鞋子
Array(1040096,900,1), //50上衣
Array(1041079,900,1), //50上衣
Array(1040100,800,1), //60上衣
Array(1041096,800,1), //60上衣
Array(1040106,700,1), //70上衣
Array(1041101,700,1), //70上衣
Array(1040109,300,1), //80上衣
Array(1041106,300,1), //80上衣
Array(1040118,300,1), //90上衣
Array(1041118,300,1), //90上衣
Array(1060085,900,1), //50裤子
Array(1061078,900,1), //50裤子
Array(1060088,800,1), //60裤子
Array(1061094,800,1), //60裤子
Array(1060094,700,1), //70裤子
Array(1061101,700,1), //70裤子
Array(1060098,300,1), //80裤子
Array(1061105,300,1), //80裤子
Array(1060107,300,1), //90裤子
Array(1061107,300,1), //90裤子
Array(1050099,250,1), //100套服
Array(1051093,250,1), //100套服
Array(1052072,150,1), //110套服
Array(1052158,200,1), //120套服
Array(1092059,200,1), //120盾牌
Array(1332003,900,1), //50短刀
Array(1332015,800,1), //60短刀
Array(1332018,700,1), //70短刀
Array(1332023,300,1), //80短刀
Array(1332027,300,1), //90短刀
Array(1332052,250,1), //100短刀
Array(1332050,150,1), //110短刀
Array(1332075,200,1), //120短刀
Array(1472020,900,1), //50拳套
Array(1472025,800,1), //60拳套
Array(1472029,700,1), //70拳套
Array(1472031,300,1), //80拳套
Array(1472033,300,1), //90拳套
Array(1472053,250,1), //100拳套
Array(1472052,150,1), //110拳套
Array(1472068,50,1), //120拳套

//海盗装备
Array(1002631,900,1),
Array(1002634,800,1),
Array(1002637,700,1),
Array(1002640,300,1),
Array(1002643,300,1),
Array(1002646,250,1),
Array(1002649,150,1),
Array(1002780,200,1),
Array(1052116,900,1),
Array(1052119,800,1),
Array(1052122,700,1),
Array(1052125,300,1),
Array(1052128,300,1),
Array(1052131,250,1),
Array(1052134,150,1),
Array(1052159,200,1),
Array(1072303,900,1),
Array(1072306,800,1),
Array(1072309,700,1),
Array(1072312,300,1),
Array(1072315,300,1),
Array(1072318,250,1),
Array(1072321,150,1),
Array(1072359,200,1),
Array(1082198,900,1),
Array(1082201,800,1),
Array(1082204,700,1),
Array(1082207,300,1),
Array(1082210,300,1),
Array(1082213,250,1),
Array(1082216,150,1),
Array(1082238,200,1),
Array(1482007,900,1),
Array(1482008,800,1),
Array(1482009,700,1),
Array(1482010,300,1),
Array(1482011,300,1),
Array(1482012,250,1),
Array(1482013,150,1),
Array(1482023,200,1),
Array(1492007,900,1),
Array(1492008,800,1),
Array(1492009,700,1),
Array(1492010,300,1),
Array(1492011,300,1),
Array(1492012,250,1),
Array(1492013,150,1),
Array(1492023,50,1)


);
var transId = 2022503;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * maxTcmes);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            if(!cm.haveItem(transId)){
                cm.sendOk("您没有#b#t"+ transId +"##k，我无法为您抽奖");
                cm.dispose();
		return;
            }
            if (cm.getInventory(1).isFull()){
                cm.sendOk("#b请保证装备栏位至少有2个空格。");
                cm.dispose();
				return;
            } else if (cm.getInventory(2).isFull()){
                cm.sendOk("#b请保证消耗栏位至少有2个空格。");
                cm.dispose();
				return;
            } else if (cm.getInventory(3).isFull()){
                cm.sendOk("#b请保证设置栏位至少有2个空格。");
                cm.dispose();
				return;
            } else if (cm.getInventory(4).isFull()){
                cm.sendOk("#b请保证其他栏位至少有2个空格。");
                cm.dispose();
				return;
            } else if (cm.getInventory(5).isFull()){
                cm.sendOk("#b请保证特殊栏位至少有2个空格。");
                cm.dispose();
				return;
            }
            var ran = Math.floor(Math.random() * 100);
			if(ran < 50){
				cm.gainItem(transId,-1);
				cm.sendOk("这枚蛋竟然是空的？#k");
				cm.dispose();
			}else{
				cm.gainItem(itemId,quantity);
				cm.gainItem(transId,-1);
				cm.sendOk("恭喜从蛋中抽取到了#z"+itemId+"##v"+itemId+"# x #r" + quantity + " #k个");
				cm.dispose();
			}
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。");
            cm.dispose();
        }
    }
}
