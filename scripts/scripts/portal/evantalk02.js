function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;mo00=o;mo01=o;mo02=o")) {
		return false;
	}
	pi.updateEvanIntroState("dt00=o;mo00=o;mo01=o;mo02=o");
        pi.showWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon02",1);
	return true;
}