function storeHistory() {
     arrHistory.push(window.prvLastSerial,window.prvTitle,window.prvMsg,window.prvUpdateUser,window.prvUpdateDate);
     if (arrHistory.length >=10) {
     	    window.boolHistory = true;
     };
}; 

function storeStartSerial() {
     if (arrHistory.length < (window.maxHistory * 5)) {
     	    window.startSerial = 0;
     }
     else{
     	    window.startSerial = arrHistory[arrHistory.length - ((window.maxHistory+3) * 5)];
     };
     if (window.startSerial === null || window.startSerial === undefined || window.startSerial === 0) {
     	    window.startSerial = window.tempStartSerial;
     };
     localStorage.setItem('lastSerial', window.startSerial);
};

function getStartValue() {
	  window.startSerial = localStorage.getItem('lastSerial');
     if (window.startSerial === null || window.startSerial === undefined) {
          window.startSerial = 0;
     };
     window.tempStartSerial = window.startSerial;
};

function callHistory() {
     document.getElementById('back-button').style='display: yes; float: right; border-radius: 5px;';
     document.getElementById('back-button').disabled = false;
     document.getElementById('forward-button').style='display: yes; float: left; border-radius: 5px;';
     document.getElementById('forward-button').disabled = true;
     window.historyIndex = arrHistory.length -4;
     window.showPrevious = true;
     document.getElementById('input').disabled = true;
     document.getElementById('title').disabled = true;
     document.getElementById('previous-button').style='display: none';
     document.getElementById('edit-button').style='display: yes; float: right; border-radius: 5px;';
     document.getElementById('updateButton').disabled = true;
     window.msg = document.getElementById('input').value;
     window.tmpDraftMsg = window.msg;
     historyBack();
};

function historyForward() {
     window.historyIndex = window.historyIndex + 5;
     showHistory();
};

function historyBack() {
     window.historyIndex = window.historyIndex - 5;
     showHistory();
};

function showHistory() {
     if (window.historyIndex <= [arrHistory.length -4] && window.historyIndex >= 6) {
     	   document.getElementById('back-button').disabled = false;
     }
     else {
          document.getElementById('back-button').disabled = true;
     };   
     if (window.historyIndex == ((arrHistory.length -4)-(window.maxHistory * 5))) {
     	    document.getElementById('back-button').disabled = true;
     };
     if (window.historyIndex <= arrHistory.length -14) {
     	    document.getElementById('forward-button').disabled = false;
     }
     else {
     	    document.getElementById('forward-button').disabled = true;
     };
     document.getElementById('title').value = arrHistory[window.historyIndex];
     document.getElementById('input').value = arrHistory[window.historyIndex+1];
     document.getElementById('output').innerHTML = strThis + ' ' + strUpdate +': ' + arrHistory[window.historyIndex+2] + '<br>' + '<small>' + arrHistory[window.historyIndex+3];
};