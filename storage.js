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
     if (window.showPrevious === true) {
          edit(); 
          window.draft = strYourUpdate + '\n' + window.tmpDraftMsg + '\n' + '\n' + strIncomUpdate + '\n' + window.msg;
     }
     else {
          window.draft = strYourUpdate + '\n' + document.getElementById('input').value + '\n' + '\n' + strIncomUpdate + '\n' + window.msg;
     };

     document.getElementById('input').value = window.draft;
     document.getElementById('updateButton').disabled = true;

     // hide/deactivate elements
     cancelTitle();
     document.getElementById('input').style='display: none';
     document.getElementById('previous-button').style='display: none';
     document.getElementById('updateButton').style='display: none';
     document.getElementById('title').disabled = true;
     
     // Show info
     document.getElementById('draftinfo').style='display: yes; max-width: calc(100% - 7px); text-align:center; border-radius: 5px;'; 
     document.getElementById('draft-button').style='display: yes; border-radius: 5px;';
};

function closeInfo() {
     document.getElementById('draftinfo').style='display: none';
     document.getElementById('draft-button').style='display: none';
     document.getElementById('input').style='display: yes; max-width: calc(100% - 7px); border-radius: 5px;';
     document.getElementById('updateButton').style='display: yes; float: left; border-radius: 5px;';
     document.getElementById('previous-button').style='display: yes; float: right; border-radius: 5px;'; 
     document.getElementById('title').disabled = false;
};