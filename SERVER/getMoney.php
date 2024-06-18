<?php
session_start();
include("database.php");

// Retrieve the raw POST data
$data = file_get_contents("php://input");

$user = $_SESSION["username"];

$query = "SELECT money FROM users WHERE username = ?";
$stmt = $conn->prepare($query);

if ($stmt) {
    $stmt->bind_param("s", $user);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($row = $result->fetch_assoc()) {
            // Return the money value as JSON
            echo json_encode(array("money" => $row['money']));
        } else {
            // User not found
            echo json_encode(array("error" => "User not found"));
        }
    } else {
        // Error executing SQL statement
        error_log("Failed to execute SQL statement: " . $stmt->error);
        echo json_encode(array("error" => "Failed to execute SQL statement"));
    }
    $stmt->close();
} else {
    // Error preparing statement
    error_log("Error preparing statement: " . $conn->error);
    echo json_encode(array("error" => "Error preparing statement"));
}
?>
