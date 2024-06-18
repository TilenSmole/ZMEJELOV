<?php
session_start();
include("database.php"); // Ensure this file contains the connection to MySQL using MySQLi

// Retrieve the raw POST data
$data = file_get_contents("php://input");

// If data is received, decode it from JSON format
if ($data) {
    $jsonData = json_decode($data);
    
    // Extract data from JSON
    $username = $_SESSION["username"]; // Assuming username is stored in session
    $lastLevel = $jsonData->lastLevel; // Extract lastLevel from JSON if it exists
    $difficulty = $jsonData->difficulty; // Extract difficulty from JSON if it exists

    // Store the values in session variables
    $_SESSION["lastLevel"] = $lastLevel;
    $_SESSION["difficulty"] = $difficulty;
    $currentDate = date("Y-m-d H:i:s");
    $_SESSION["DATE"] = $currentDate;

    // Prepare the SQL statement with placeholders
    $query = "UPDATE users SET lastLevel = ?, DATE = ?, difficulty = ? WHERE username = ?";

    // Prepare the statement
    $stmt = $conn->prepare($query);
    if ($stmt) {
        // Bind the parameters
        $stmt->bind_param("ssss", $lastLevel, $currentDate, $difficulty, $username);

        // Execute the statement
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Database updated successfully"));
        } else {
            // Error executing SQL statement
            echo json_encode(array("error" => "Failed to execute SQL statement: " . $stmt->error));
        }

        // Close the statement
        $stmt->close();
    } else {
        // Error preparing statement
        echo json_encode(array("error" => "Error preparing statement: " . $conn->error));
    }
} else {
    // No data received
    echo json_encode(array("error" => "No data received"));
}
?>
