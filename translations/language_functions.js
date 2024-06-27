src = "/translations/getLanguage.js"



function setLanguage(language) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Language set successfully' );
                // Call getLanguage to update the buttons after setting the language
                getLanguage();
                window.location.reload();
            } else {
                console.error('Error setting language:', xhr.status);
            }
        }
    };
    // Send a request to set_language.php with the desired language as a parameter
    xhr.open('GET', '/translations/language.php?language=' + language, true);
    xhr.send();
}

function getLanguage(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var language = xhr.responseText;
                callback(language);
            } else {
                console.error('Error getting language:', xhr.status);
            }
        }
    };
    xhr.open('GET', '/translations/getLanguage.php', true);
    xhr.send();
}
