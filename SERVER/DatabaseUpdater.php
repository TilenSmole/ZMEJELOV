<?php
session_start();
include("database.php");
// Retrieve the raw POST data
$data = file_get_contents("php://input");

// If data is received, decode it from JSON format
if ($data) {
    $jsonData = json_decode($data);
    // Extract data from JSON
    $username = $_SESSION["username"]; // Assuming username is sent along with lastLevel
    $lastLevel = $jsonData->lastLevel; // Extract lastLevel from JSON
    $dificulty = $jsonData->dificulty;

    $_SESSION["lastLevel"] = $lastLevel;
    $_SESSION["dificulty"] = $dificulty;
    $currentDate = date("Y-m-d H:i:s");
    $_SESSION["DATE"] = $currentDate;

    // Perform database update operation
    $query = "UPDATE users SET lastLevel = '$lastLevel', DATE = NOW(), dificulty = '$dificulty' WHERE username = '$username'";
    $result = sqlsrv_query($conn, $query);
   
    if ($result) {
        echo json_encode(array("message" => "Database updated successfully"));
    } else {
        echo json_encode(array("error" => "Failed to update database"));
    }
} else {
    // No data received
    echo json_encode(array("error" => "No data received"));
}

mysqli_close($conn);
?>
