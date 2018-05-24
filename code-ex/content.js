console.log("Helloouu");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
   console.log(message);
   if (message.txt === 'hello') {
     alert("Oh, hello there")
   }
}
