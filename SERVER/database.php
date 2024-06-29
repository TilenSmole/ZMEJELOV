<?php
$connectionInfo = array(
    "UID" => "zmejelov",
    "pwd" => "9ar:p!d&@,w4mY8",
    "Database" => "Zmejelov DB",
    "LoginTimeout" => 30,
    "Encrypt" => 1,
    "TrustServerCertificate" => 0
);
$serverName = "tcp:zmejelov-server.database.windows.net";

$conn = sqlsrv_connect($serverName, $connectionInfo);

if ($conn === false) {
    echo "Error connecting to SQL Server via sqlsrv_connect: ";
    die(print_r(sqlsrv_errors(), true));
} else {
    // echo "Connected successfully via sqlsrv_connect";
}
?>
