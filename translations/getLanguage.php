<?php
// Start the session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}



function getLanguage() {
    // Check if the selected language is set in the session, otherwise default to 'slo'
    return isset($_SESSION['selectedLanguage']) ? $_SESSION['selectedLanguage'] : 'slo';
}


$data = ['language' => getLanguage()];

echo json_encode($data); 
?>
