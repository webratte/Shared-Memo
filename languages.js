function changeLanguage() {
     browserLang = window.navigator.language;
     browserLang = browserLang.slice(0, 2).toLowerCase();
          if (browserLang == "de") {
               //german
               strSendMemo = "Memo senden";
               strWasSent = "Memo wurde gesendet";
               strPreviousUpdate = "Verlauf";
               strEditMemo = "Memo bearbeiten";
               strLast = "Letzte";
               strThis = "Diese";
               strUpdate = "Änderung";
               strCancel = "Abbrechen";
               strSetTitle = "Titel ändern";
               strYourUpdate = "Ihr Entwurf:";
               strIncomUpdate = "Gerade angekommene Änderung (" + window.updateUser +"):";
               strMessageDraft = "\nEs kam gerade eine Änderung durch " + window.updateUser +" an.\nIhr Text wurde temporär als Entwurf gespeichert.\n\n!! ACHTUNG !!\nBeim Schließen der App geht er verloren, wenn das Memo nicht gesendet wird."
               strDraftButton = "Entwurf anzeigen";
          }
          else if (browserLang == "fr") {
               //french
               strSendMemo = "Envoyer mémo";
               strWasSent = "Mémo a été envoyé";
               strPreviousUpdate = "Histoire";
               strEditMemo = "Éditer le mémo";
               strLast = "Dernier";
               strThis = "Cette";
               strUpdate = "Modification";
               strCancel = "Annuler";
               strSetTitle = "Changer le titre";
               strYourUpdate = "Votre Brouillon:";
               strIncomUpdate = "Le changement vient d'arriver (" + window.updateUser +"):";
               strMessageDraft = "\nUn changement vient d'arriver.\nVotre brouillon a été enregistré pour comparaison et ajustement."
               strMessageDraft = "\nUn changement de " + window.updateUser +" vient d'arriver.\nVotre texte a été temporairement enregistré en tant que brouillon.\n\n!! ATTENTIONNÉ !!\nIl sera perdu à la fermeture de l'application si le mémo n'est pas envoyé."
               strDraftButton = "  Afficher le brouillon  ";
          }
          else {
               //fallback
               strSendMemo = "Send Memo";
               strWasSent = "Memo was sent";
               strPreviousUpdate = "History";
               strEditMemo = "Edit Memo";
               strLast = "Last";
               strThis = "This";
               strUpdate = " Update ";
               strCancel = "Cancel";
               strSetTitle = "Change Title";
               strYourUpdate = "Your Draft:";
               strIncomUpdate = "Change just arrived (" + window.updateUser +"):";
               strMessageDraft = "\nA change just arrived.\nYour draft has been saved for comparison and adjustment."
               strMessageDraft = "\nA change by " + window.updateUser +" just arrived.\nYour text has been temporarily saved as a draft.\n\n!! ATTENTION !!\nIt will be lost when the app is closed if the memo is not sent."
               strDraftButton = "  Show draft  ";
          }
     document.getElementById('updateButton').value=window.strSendMemo;
     document.getElementById('previous-button').value=window.strPreviousUpdate;
     document.getElementById('edit-button').value=window.strEditMemo;
     document.getElementById('setTitleButton').value=window.strSetTitle;
     document.getElementById('draftinfo').value=window.strMessageDraft;
     document.getElementById('draft-button').value=window.strDraftButton;
};