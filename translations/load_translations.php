<?php
include(dirname(__FILE__) . '/language.php');
if (session_status() === PHP_SESSION_NONE) 
    session_start();

function loadTranslations() {
    
    // Construct the file path relative to the directory of the PHP script

    // Read the JSON file

    $lang = isset($_SESSION['selectedLanguage']) ? $_SESSION['selectedLanguage'] : 'slo';

    if($lang == "en")
        $filePath = dirname(__FILE__) . '/translationsEN.json';
    else
        $filePath = dirname(__FILE__) . '/translationsSLO.json';


    $translationsJson = file_get_contents($filePath);


    // Decode JSON into PHP associative array
    $translations = json_decode($translationsJson, true);

    // Return translations for the requested language if available
    return isset($translations[$lang]) ? $translations[$lang] : null;
}


