<?php


// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "zmejelover", "pwd" => "9ar:p!d&@,w4mY8", "Database" => "zmejelov", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:zmejelov.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);
?>