function changeLanguage() {
	browserLang = window.navigator.language;
	browserLang = browserLang.slice(0, 2).toLowerCase();
		if (browserLang == "de") {
			//german
			strSendMemo = "    Memo senden    ";
			strWasSent = " Memo wurde gesendet ";
			strPreviousUpdate = " Vorherige Änderung ";
			strEditMemo = "   Memo bearbeiten  ";
			strLast = "Letzte";
			strThis = "Diese";
			strUpdate = "Änderung";
			//strInfoMessage = "Memo wurde geändert durch";
			strInfoMessage = "Memo was updated by";
			}
		else if (browserLang == "en") {
			//english
			strSendMemo = "   Send Memo   ";
			strWasSent = " Memo was sent ";
			strPreviousUpdate = " Previous Update ";
			strEditMemo = "    Edit Memo    ";
			strLast = "Last";
			strThis = "This";
			strUpdate = " Update ";
			strInfoMessage = "Memo was updated by";
			}
		else {
			//fallback
			strSendMemo = "   Send Memo   ";
			strWasSent = " Memo was sent ";
			strPreviousUpdate = " Previous Update ";
			strEditMemo = "    Edit Memo    ";
			strLast = "Last";
			strThis = "This";
			strUpdate = " Update ";
			strInfoMessage = "Memo was updated by";
		}
};
