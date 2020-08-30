const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.rek.savefrom.net/www/a9s/1ck.php?oaparams=2__bannerid=1891__zoneid=17__cb=73e619bdda__oadest=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fvdp-best-video-downloader%2Facdfdofofabmipgcolilkfhnpoclgpdd*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)