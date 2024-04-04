<?php
session_start();
include("database.php");
// Retrieve the raw POST data
$data = file_get_contents("php://input");

// If data is received, decode it from JSON format
if ($data) {
    $jsonData = json_decode($data);
    // Extract data from JSON
    $achievements = $jsonData->achievements;
    $username = $_SESSION["username"];   
    $_SESSION["achievements"] = $achievements;
    
    // Perform database update operation
    $query = "UPDATE users SET achievements = '$achievements' WHERE username = '$username'";
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
