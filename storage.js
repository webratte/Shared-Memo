// store time if send-button is pressed
function storeSentTime() {
     window.CurrentTime = Date.now();
     localStorage.setItem('sentUnixTime', window.CurrentTime);

};

// store time of incoming update
function storeIncomingTime() {
     localStorage.setItem('sentUnixTime', window.CurrentTime);
	
};

// read time of already exist update
function readUnixtime() {
     window.storedSentTime = localStorage.getItem('sentUnixTime');
	
};

//handle if a new update arrives while memo is edited
function setDraft() {
     window.draft = strYourUpdate + '\n' + document.getElementById('input').value + '\n' + '\n' + strIncomUpdate + '\n' + window.msg;
     document.getElementById('input').value = window.draft;
     document.getElementById('updateButton').disabled = true;  
     
     // hide/deactivate elements
     document.getElementById('input').style='display: none';
     document.getElementById('previous-button').style='display: none';
     document.getElementById('updateButton').style='display: none';
     document.getElementById('title').disabled = true;
     
     // Show info
     document.getElementById('draftinfo').style='display: yes; max-width: calc(100% - 7px); text-align:center'; 
     document.getElementById('draft-button').style='display: yes'; 
     
};

function closeInfo() {
     document.getElementById('draftinfo').style='display: none'; 
     document.getElementById('draft-button').style='display: none';
     document.getElementById('input').style='display: yes; max-width: calc(100% - 7px)';
     document.getElementById('updateButton').style='display: yes';
     document.getElementById('previous-button').style='display: yes; float: right'; 
     document.getElementById('title').disabled = false;
     
};
