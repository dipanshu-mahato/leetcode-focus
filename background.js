chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.inject) {
    chrome.tabs.insertCSS(sender.tab.id, { file: msg.inject });
  }
  if (msg.remove) {
    chrome.tabs.removeCSS(sender.tab.id, { file: msg.remove });
  }
});
