const FILES = {
    difficulty: "difficulty.css",
    tags: "tags.css",
    likes: "likes.css",
};

function apply(feature, enabled) {
    const file = FILES[feature];
    if (!file) return;

    if (enabled) {
        chrome.runtime.sendMessage({ inject: file });
    } else {
        chrome.runtime.sendMessage({ remove: file });
    }
}

// Apply all filters on page load
chrome.storage.sync.get(null, (cfg) => {
    Object.keys(FILES).forEach(feature => {
        apply(feature, cfg[feature] === true);
    });
});

// Listen for runtime changes
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.feature) {
        apply(msg.feature, msg.enabled);
    }
});
