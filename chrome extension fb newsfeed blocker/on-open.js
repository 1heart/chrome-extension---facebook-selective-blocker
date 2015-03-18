// if (true) {
// 	var element = document.getElementById("contentArea");
// 	element.parentNode.removeChild(element);

// 	// chrome.tabs.insertCSS(null, {file: "newsfeed.css"});
// }

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
