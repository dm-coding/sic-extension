enabled = true;

/** GOOGLE **/
chrome.webRequest.onBeforeRequest.addListener(function(details) {
		if ((details.url.indexOf("&tbs=li:1") == -1) && enabled) {
			var url = details.url + "&tbs=li:1";
			chrome.browserAction.setBadgeText({text: "OK"});

			return {
				redirectUrl: url
			};
		}
	}, {
		urls: [
			"*://www.google.com/search?*",
			"*://google.com/search?*",
			"*://encrypted.google.com/search?*",
		],
		types: ["main_frame"]
	}, 
	["blocking"]
);

/** DUCKDUCKGO **/
chrome.webRequest.onBeforeRequest.addListener(function(details) {
		if ((details.url.indexOf("%2B") == -1) && enabled) {
			var url = details.url.replace(/\+/g, "+%2B").replace(/\%20/g, "%20%2B").replace(/\/\?q\=/g, "/?q=%2B");
			chrome.browserAction.setBadgeText({text: "OK"});

			return {
				redirectUrl: url
			};
		}
	}, {
		urls: [
			"*://www.duckduckgo.com/?q=*",
			"*://duckduckgo.com/?q=*"
		],
		types: ["main_frame"]
	}, 
	["blocking"]
);

/** Remove the browseraction badge text if the tab changes **/
chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.browserAction.setBadgeText({text: ""});
});

/** Allow the extension to be toggled at will **/
chrome.browserAction.onClicked.addListener(function() {
	if (enabled) {
		enabled = false;
		alert("Verbatim search (sic) disabled");
	} else {
		enabled = true;
		alert("Verbatim search (sic) enabled");
	}
});