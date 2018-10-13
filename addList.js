chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelec") {
    	var googleDocument = googleDocsUtil.getGoogleDocument();
    	var selected = googleDocument.selectedText;
    	var toSend = selected.split(" ")[0];
        sendResponse({data: toSend});
    } else {
        sendResponse({});
    }
});

