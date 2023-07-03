let extensionTabId = null;

chrome.tabs.onCreated.addListener((tab) => {
    if (tab.url === chrome.runtime.getURL('index.html')) {
        // The tab is from the extension, so close it
        chrome.tabs.remove(tab.id);
    }
});

chrome.tabs.onRemoved.addListener((tabId, removed) => {
    // Do something when a tab is closed
    if (tabId === extensionTabId) {
        // The extension tab is closed, so reset the ID
        extensionTabId = null;
    }
});

chrome.browserAction.onClicked.addListener(() => {
    try {
        const extensionUrl = chrome.runtime.getURL('index.html');

        // Check if the extension tab is still open
        if (extensionTabId) {
            chrome.tabs.query({active: true}, (tabs) => {
                if (tabs.length === 0) {
                    // The tab is closed, so create a new one
                    chrome.tabs.create({ url: extensionUrl });
                }
            });
        }

        if (extensionTabId) {
            // If the extension tab is already open, focus on it
            chrome.tabs.update(extensionTabId, { active: true });
        } else {
            // Otherwise, create a new tab
            chrome.tabs.create({ url: extensionUrl }, (tab) => {
                // Store the tab ID for future reference
                extensionTabId = tab.id;
            });
        }
    } catch (e) {
        console.error(e);
    }
});


console.log('background.js loaded');

// Example background.js

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.searchValue) {
        const searchValue = message.searchValue;

        // Perform further actions with the searchValue in the background script
        console.log('Received searchValue in background:', searchValue);

        // Send a response back to the content script if needed
        sendResponse({received: true});
    }
});
