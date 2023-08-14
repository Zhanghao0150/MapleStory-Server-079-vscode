var setupTask;
//var 鏁伴噺 = Math.floor(Math.random() * 100);;
function init() {
	scheduleNew();
}

function scheduleNew() {
	var cal = java.util.Calendar.getInstance();
	var nextTime = cal.getTimeInMillis();
	while (nextTime <= java.lang.System.currentTimeMillis()) {
		nextTime += 10000;
	}
	setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	setupTask.cancel(true);
}

function start() {
	scheduleNew();
	em.getChannelServer().AutoNx(Math.floor(Math.random() * 100)+1);
} 