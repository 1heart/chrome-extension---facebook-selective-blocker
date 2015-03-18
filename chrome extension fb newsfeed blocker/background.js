// chrome.browserAction.onClicked.addListener(function(tab) {


//   chrome.storage.sync.get(null, function(items) {
//   	if (items.nf) {
// 		chrome.tabs.insertCSS(null, {
// 		    file: "css/newsfeed.css"
// 		  });
//   	}
//   	if (items.m) {
// 		chrome.tabs.insertCSS(null, {
// 		    file: "css/messaging.css"
// 		  });
//   	}
//   	if (items.p) {
// 		chrome.tabs.insertCSS(null, {
// 		    file: "css/profiles.css"
// 		  });
//   	}
//   	if (items.g) {
// 		chrome.tabs.insertCSS(null, {
// 		    file: "css/groups.css"
// 		  });
//   	}
//   });


  

// });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {

        chrome.storage.sync.get(null, function(items) {
        if (items.nf) {
        chrome.tabs.insertCSS(null, {
            file: "css/newsfeed.css"
          });
   //      chrome.tabs.executeScript(null, {file: 'js/newsfeed.js'
			// });

   //      chrome.tabs.executeScript(null, {code: '
			// var element = document.getElementById("stream_pagelet");
			// element.parentNode.removeChild(element);'});
        }
        if (items.m) {
        chrome.tabs.insertCSS(null, {
            file: "css/messaging.css"
          });
        }
        if (items.p) {
        chrome.tabs.insertCSS(null, {
            file: "css/profiles.css"
          });
        }
        if (items.g) {
        chrome.tabs.insertCSS(null, {
            file: "css/groups.css"
          });
    }
  });
    }
  });



// if (true) {
// 	var element = document.getElementById("contentArea");
// 	element.parentNode.removeChild(element);

// 	// chrome.tabs.insertCSS(null, {file: "newsfeed.css"});
// }
  // chrome.tabs.insertCSS(null, {
  //   file: "newsfeed.css"
  // });

// function nf() {
//   chrome.tabs.insertCSS(null, {
//     file: "newsfeed.css"
//   });
// }

// nf();