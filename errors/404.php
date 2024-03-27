<?php
include('translations/load_translations.php');
?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 ERROR</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/common.css">
    <link rel="stylesheet" href="/errors/errors.css">

</head>

<body>
    <script>
        $(document).ready(function() {
            $("#header").load("SHARED/header.php");
            $("#footer").load("SHARED/footer.php");
        });
    </script>

    <div id="header"></div>

    <div id="errorDiv">
        <p><?php $translations = loadTranslations();
            echo $translations["error"] ?></p>


        <p><a href="index.php"><?php $translations = loadTranslations();
                                echo $translations["error_home"] ?></a></p>
    </div>


    <div id="footer"></div>


</body>

</html>