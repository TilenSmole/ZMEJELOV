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
    $difficulty = $jsonData->difficulty;

    $_SESSION["lastLevel"] = $lastLevel;
    $_SESSION["difficulty"] = $difficulty;
    $currentDate = date("Y-m-d H:i:s");
    $_SESSION["DATE"] = $currentDate;

    // Prepare the SQL statement with placeholders
    $query = "UPDATE users SET lastLevel = ?, DATE = ?, difficulty = ? WHERE username = ?";

    // Prepare the statement
    $stmt = sqlsrv_prepare($conn, $query, array(&$lastLevel, &$currentDate, &$difficulty, &$username));

    // Execute the statement
    if ($stmt) {
        $result = sqlsrv_execute($stmt);
        if ($result) {
            echo json_encode(array("message" => "Database updated successfully"));
        } else {
            // Error executing SQL statement
            echo json_encode(array("error" => "Failed to execute SQL statement: " . print_r(sqlsrv_errors(), true)));
        }
    } else {
        // Error preparing statement
        echo json_encode(array("error" => "Error preparing statement: " . print_r(sqlsrv_errors(), true)));
    }
} else {
    // No data received
    echo json_encode(array("error" => "No data received"));
}
?>
