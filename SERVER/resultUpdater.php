<?php
session_start();
include("database.php");

// Retrieve the raw POST data
$data = file_get_contents("php://input");

// If data is received, decode it from JSON format
if ($data) {
    $jsonData = json_decode($data);

    // Extract data from JSON
    $time = $jsonData->time;
    $user = $_SESSION["username"];

    // Prepare the SQL statement with placeholders
    $query = "INSERT INTO leaderboard ([user], date, time, type) VALUES (?,GETDATE(),?,  1)";

    $stmt = sqlsrv_prepare($conn, $query, array(&$user, &$time));

    if ($stmt) {
        if (sqlsrv_execute($stmt)) {
            echo json_encode(array("message" => "Database with result updated successfully"));
        } else {
            // Enhance error handling to get detailed error messages
            echo json_encode(array("error" => "Failed to execute SQL statement: " . print_r(sqlsrv_errors(), true)));
        }
    } else {
        // Enhance error handling to get detailed error messages
        echo json_encode(array("error" => "Error preparing statement: " . print_r(sqlsrv_errors(), true)));
    }
} else {
    // No data received
    echo json_encode(array("error" => "No data received"));
}
?>
