function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() && pi.haveItem(4001055,1)) {
		pi.warpParty(920010100);
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"璜嬮殜闀锋嬁鐢熷懡鑽夊啀鍑哄幓");
	}
}