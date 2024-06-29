<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
include(__DIR__ . '/SHARED/header.php');
include(__DIR__ ."/SERVER/database.php");
include(__DIR__ ."/SERVER/generalData.php");
$translations = loadTranslations();


if (isset($_SESSION['username'])) {
    echo "<meta http-equiv=Refresh content=0;url=../>";
    exit(); // Add exit to stop script execution after redirection
}






?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <link rel="stylesheet" href="/SERVER/server.css">
    <link rel="stylesheet" href="/CSS/common.css">

</head>

<body>
<script>
    function checkScreenSizeAndRedirect() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1200)
            window.location.href = "index.php"; 
       
    }

    window.onload = checkScreenSizeAndRedirect;
    window.onresize = checkScreenSizeAndRedirect;
</script>


    <div id="loginForm">
        <form action="/login.php" method="POST">
            <div class="username"> 🧛‍♀️<input type="text" name="username" placeholder=<?php echo $translations["username"] ?>><br>
            </div>
            <div class="password">
                &#128274;<input type="password" name="password" placeholder=<?php echo $translations["password"] ?>><br>
            </div>
            <div class="submitAbove">
                <input type="submit" name="submit" value=<?php echo $translations["login"] ?> class="submitData"><br>
            </div>
            <div class="textForm">
                <p><?php echo $translations["not_yet_user"] ?></p>
            </div>
        </form>

</body>

</html>





<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

    $check_user_query = "SELECT * FROM users WHERE username='$username'";
    $check_user_result = sqlsrv_query($conn, $check_user_query);



    if ($check_user_result && sqlsrv_has_rows($check_user_result) > 0) {
        $user_data = sqlsrv_fetch_array($check_user_result);
        $hashed_password = $user_data['password'];

        if (password_verify($password, $hashed_password)) {
            
            $getLastLevel = "SELECT lastLevel, difficulty, DATE, achievements,money  FROM users WHERE username='$username'";
            $getLastLevel_result = sqlsrv_query($conn, $getLastLevel);
            // Fetch a row from the result set as an associative array
            $row = sqlsrv_fetch_array($getLastLevel_result);
            // Access the column containing the integer value 

            $_SESSION["lastLevel"] = $row['lastLevel'];
            $_SESSION["difficulty"] = $row['difficulty'];
            $_SESSION["DATE"] = $row['DATE'];
            $_SESSION["achievements"] = $row['achievements'];
            $_SESSION["money"] = $row['money'];
            $_SESSION["username"] = $username;
            $_SESSION['visited_before'] = true;


           echo "<p class='response'>" . $translations['login_succ'] . "</p>";
        echo "<meta http-equiv=Refresh content=0;url=/>";
        } else {
            echo  $translations["incorect_pass"];
        }
    } else {
        echo $translations["user_not"];
    }
}
//mysqli_close($conn);


?>




</div>
<?php
include(__DIR__ . '/SHARED/footer.php');

?>