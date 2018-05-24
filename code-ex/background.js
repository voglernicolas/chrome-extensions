console.log("Running!")

chrome.browserAction.onClicked.addListener(buttonClicked);

 function buttonClicked(tab) {
  let msg = {
     txt: "hello"
   }
   console.log(tab.id);
   pes = tab.id;
   chrome.tabs.sendMessage(pes, msg);
 }
