    <?php
    include(__DIR__ . '/SHARED/header.php');
    include(__DIR__ . "/SERVER/database.php");
    $translations = loadTranslations();

    if (isset($_SESSION['username']))
        echo "<meta http-equiv=Refresh content=0;url=../>";

    if (session_status() === PHP_SESSION_NONE)
        session_start();


    ?>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ZMEJELOV</title>
        <link rel="stylesheet" href="/SERVER/server.css">

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
            <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST">
                <div class="username"> 🧛‍♀️<input type="text" name="username" placeholder=<?php echo $translations["username"] ?>><br>
                </div>
                <div class="password">
                    &#128274;<input type="password" name="password" placeholder=<?php echo $translations["password"] ?>><br>
                </div>
                <div class="password">
                    &#128274;<input type="password" name="passwordRepeat" placeholder=<?php echo $translations["password"] ?>><br>
                </div>
                <div class="submitAbove">
                    <input type="submit" name="submit" value=<?php echo $translations["login"] ?> class="submitData"><br>
                </div>
                <div class="textForm">
                    <p><?php echo $translations["already_user"] ?></p>
                </div>
            </form>


    </body>

    </html>




    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        $passwordRepeat = filter_input(INPUT_POST, "passwordRepeat", FILTER_SANITIZE_SPECIAL_CHARS);



        if (empty($username)) {
            echo "<p class='response''>prosim vnesi uporabniško ime !<p>";
        } else if (empty($password)) {
            echo "<p class='response''>prosim vnesi geslo!<p>";
        } else if ($password !== $passwordRepeat) {
            echo "<p class='response''>gesli se ne ujemata!<p>";
        } else {
            $check_query = "SELECT * FROM users WHERE username='$username'";
            $result = sqlsrv_query($conn, $check_query);
            if (sqlsrv_has_rows($result) > 0) {
                echo "<p class='response''>uporabniško ime že v uporabi 😫!<p>";
            } else {
                $hash = password_hash($password, PASSWORD_DEFAULT);
                $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hash') ";
                sqlsrv_query($conn, $sql);

                $getLastLevel = "SELECT achievements  FROM users WHERE username='$username'";
                $getLastLevel_result = sqlsrv_query($conn, $getLastLevel);

                $row = sqlsrv_fetch_array($getLastLevel_result);
                $_SESSION["lastLevel"] = $row['lastLevel'];
                $_SESSION["difficulty"] = $row['difficulty'];
                $_SESSION["DATE"] = $row['DATE'];
                $_SESSION["achievements"] = $row['achievements'];
                $_SESSION["money"] = $row['money'];
                $_SESSION["username"] = $username;
                $_SESSION['visited_before'] = true;
                echo   $_SESSION["username"];
                echo $username;
                echo "<p class='response'>" . $translations['login_succ'] . "</p>";
                echo "<meta http-equiv=Refresh content=0;url=/>";
            }
        }
    }



    ?>
    </div>

    <?php
    include(__DIR__ . '/SHARED/footer.php');
    ?>