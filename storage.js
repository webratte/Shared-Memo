function storeSentTime() {
	window.CurrentTime = Date.now();
	localStorage.setItem("sentUnixTime", window.CurrentTime);

};

function readUnixtime() {
	storedSentTime = localStorage.getItem("sentUnixTime");
	
};