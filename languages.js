function changeLanguage() {
	browserLang = window.navigator.language;
	browserLang = browserLang.slice(0, 2).toLowerCase();
		if (browserLang == "de") {
			//german
			strSendMemo = "Memo senden";
			strWasSent = "Memo wurde gesendet";
			strPreviousUpdate = "Vorherige Änderung";
			strEditMemo = "Memo bearbeiten";
			strLast = "Letzte";
			strThis = "Diese";
			strUpdate = "Änderung";
			strCancel = "Abbrechen";
			strSetTitle = "Titel ändern";
			}
		else if (browserLang == "fr") {
			//french
			strSendMemo = "Envoyer mémo";
			strWasSent = "Mémo a été envoyé";
			strPreviousUpdate = "Mise à jour précédente";
			strEditMemo = "Éditer le mémo";
			strLast = "Dernier";
			strThis = "Cette";
			strUpdate = "Modification";
			strCancel = "Annuler";
			strSetTitle = "Changer le titre";
			}
		else {
			//fallback
			strSendMemo = "Send Memo";
			strWasSent = "Memo was sent";
			strPreviousUpdate = "Previous Update";
			strEditMemo = "Edit Memo";
			strLast = "Last";
			strThis = "This";
			strUpdate = " Update ";
			strCancel = "Cancel";
			strSetTitle = "Change Title";
		}
};
