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
     window.storedSentTime = localStorage.getItem("sentUnixTime");
	
};

// store the sender of the last valid message
function storeSentUser() {
     localStorage.setItem("sentLastUser", window.updateUser);
	
};

// read the sender of the last valid message
function readSentUser() {
     window.lastUser = localStorage.getItem("sentLastUser");
	
};

// store the summary of the last incoming message
function storeSentSummary() {
     localStorage.setItem("sentLastSummery", window.summarySent);
	
};

// read the summary of the last incoming message
function readSentSummery() {
     window.summarySent = localStorage.getItem("sentLastSummery");
	
};

function pruefen() {
     readSentUser();
     readSentSummery();
     if (window.summarySent != ("Update: " + window.lastUser)) {
          window.repairMessage = true;       
          sendMsg();                                              //send a repairmessage 
     }

};


function timer() {
     pruefen();
  
};
