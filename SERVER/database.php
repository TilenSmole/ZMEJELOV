<?php

// MySQLi connection parameters
$servername = "localhost";  // Usually 'localhost' for local PHP MyAdmin
$username = "root";
$password = "";
$dbname = "zmejelov_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
