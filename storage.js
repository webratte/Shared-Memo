// store time if send-button is pressed
function storeSentTime() {
	window.CurrentTime = Date.now();
	localStorage.setItem("sentUnixTime", window.CurrentTime);

};

// store time of incoming update
function storeIncomingTime() {
	localStorage.setItem("sentUnixTime", window.CurrentTime);
	
};

// read time of already exist update
function readUnixtime() {
	storedSentTime = localStorage.getItem("sentUnixTime");
	
};
