function startProc()
{
	chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {      
	    chrome.tabs.sendMessage(tabs[0].id, {method: "getSelec"}, function(response){               
	        document.getElementById('iframe').src = "http://www.thesaurus.com/browse/"+ response.data;                                                          
	    });
	});
}

document.getElementById('getSelec').onclick = startProc;

chrome.browserAction.onClicked.addListener(function(tab)
{
	startProc();
});