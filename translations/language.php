<?php
// Start the session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Function to set the selected language
function setLanguage($language) {
    // Store the selected language in a session variable
    $_SESSION['selectedLanguage'] = $language;
}



if (isset($_GET['language'])) {
    setLanguage($_GET['language']);
}



?>
