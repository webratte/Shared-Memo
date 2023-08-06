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
               strYourUpdate = "Ihr Entwurf:";
               strIncomUpdate = "Gerade angekommene Änderung:";
               strMessageDraft = "\nEs kam gerade ein eine Änderung an.\nIhr Entwurf wurde zum Vergleichen und anpassen gespeichert."
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
               strYourUpdate = "Votre Brouillon:";
               strIncomUpdate = "Le changement vient d'arriver:";
               strMessageDraft = "\nUn changement vient d'arriver.\nVotre brouillon a été enregistré pour comparaison et ajustement."
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
               strYourUpdate = "Your Draft:";
               strIncomUpdate = "Change just arrived:";
               strMessageDraft = "\nA change just arrived.\nYour draft has been saved for comparison and adjustment."
          }
     document.getElementById("updateButton").value=window.strSendMemo;
     document.getElementById("previous-button").value=window.strPreviousUpdate;
     document.getElementById("edit-button").value=window.strEditMemo;
     document.getElementById("setTitleButton").value=window.strSetTitle;
     document.getElementById('draftinfo').value=window.strMessageDraft;
};
