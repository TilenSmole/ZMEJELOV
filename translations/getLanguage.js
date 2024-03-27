

function getLanguage(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText); // Parse JSON response
                var language = response.language;
                callback(language); // Call the callback function with the language value
            } else {
                // Handle error conditions if needed
            }
        }
    };
    // Send a request to getLanguage.php to retrieve the selected language
    xhr.open('GET', '/translations/getLanguage.php', true);
    xhr.send();
}


