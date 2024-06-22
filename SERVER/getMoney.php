<?php
session_start();
include("database.php");

// Retrieve the raw POST data
$data = file_get_contents("php://input");

$user = $_SESSION["username"];

$query = "SELECT money FROM users WHERE username = ?";
$params = array($user);

$stmt = sqlsrv_prepare($conn, $query, $params);

if ($stmt) {
    if (sqlsrv_execute($stmt)) {
        if ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
            // Return the money value as JSON
            echo json_encode(array("money" => $row['money']));
        } else {
            // User not found
            echo json_encode(array("error" => "User not found"));
        }
    } else {
        // Error executing SQL statement
        error_log("Failed to execute SQL statement: " . print_r(sqlsrv_errors(), true));
        echo json_encode(array("error" => "Failed to execute SQL statement"));
    }
} else {
    // Error preparing statement
    error_log("Error preparing statement: " . print_r(sqlsrv_errors(), true));
    echo json_encode(array("error" => "Error preparing statement"));
}
?>
