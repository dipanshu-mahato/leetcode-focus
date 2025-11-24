const FEATURES = ["difficulty", "tags", "likes"];

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(FEATURES, (cfg) => {
    FEATURES.forEach(f => {
      document.getElementById(f).checked = cfg[f] === true;
    });
  });

  FEATURES.forEach(f => {
    document.getElementById(f).addEventListener("change", () => {
      const enabled = document.getElementById(f).checked;

      chrome.storage.sync.set({ [f]: enabled });

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          feature: f,
          enabled
        });
      });
    });
  });
});
