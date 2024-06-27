<?php
include("database.php");
session_start();

if (isset($_POST["submitCommentZmejelov"]) && isset($_POST["addCommentZmejelov"]) && isset($_POST["type"])) {
    $user = $_SESSION["username"];
    $comment = $_POST["addCommentZmejelov"];
    $type = $_POST["type"];
    if (strlen($comment) > 0) {
        $sql = "INSERT INTO comments ([user], comment, date, type) VALUES (?, ?, GETDATE(), ?)";
        $stmt = sqlsrv_prepare($conn, $sql, array(&$user, &$comment, &$type));

        if ($stmt && sqlsrv_execute($stmt)) {
            echo "Success";
        } else {
            echo "Error: " . print_r(sqlsrv_errors(), true);
        }
    }
}
?>
