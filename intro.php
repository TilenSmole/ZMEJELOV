<?php
ob_start();
include('translations/load_translations.php');
$translations = loadTranslations();
$_SESSION['visited_before'] = true;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="icon" type="image/x-icon" href="assets\favicon.ico">
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/common.css">
    <script src="/translations/language_functions.js"></script>
</head>

<body>
    <div class="introductionDivFrontPage">
        <div id="animationIntro">
            <img src="assets/lvl2/Wraith_03_Idle_006.png" id="zmejaIntro" alt="Zmeja">
        </div>

        <script>
    function checkScreenSizeAndRedirect() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1200)
            window.location.href = "index.php"; 
       
    }

    window.onload = checkScreenSizeAndRedirect;
    window.onresize = checkScreenSizeAndRedirect;
</script>


        <div id="introductionTextDivFrontPage">
            <p id="textIntroAnimation"></p>
            <p id="welcome"></p>
            <p id="thisIsZmejelov"></p>
            <div id="inlineButtons">

                <div class="language_selection">
                    <button class="button_language_intro" id="english_button_intro" onclick="setLanguage('en') ">🇺🇸</button>
                    <button class="button_language_intro" id="slovenian_button_intro" onclick="setLanguage('slo')">🇸🇮</button>
                </div>
                <button id="enterTheWorld">
    <a href="/">
        <?php echo "<p id='exploretext'>" . $translations["skip"] . "</p>"; ?>
    </a>
</button>

            </div>

        </div>
    </div>
   



    <script>
        getLanguage(function(language) {
            var languageObj = JSON.parse(language);

            if (languageObj.language == "en") {
                document.getElementById("english_button_intro").style.display = "none";
                document.getElementById("slovenian_button_intro").style.display = "block";
            } else {
                document.getElementById("english_button_intro").style.display = "block";
                document.getElementById("slovenian_button_intro").style.display = "none";
            }
        });





        <?php
        // Define your PHP variables here if needed
        $content = $translations["welcome_intro"];
        $content2 =   $translations["welcome"];
        $content3 =  $translations["this_is"];;
        ?>

        var content = "<?php echo $content; ?>";
        var content2 = "<?php echo $content2; ?>";
        var content3 = "<?php echo $content3; ?>";

        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
        var ele2 = '<span>' + content2.split('').join('</span><span>') + '</span>';
        var ele3 = '<span>' + content3.split('').join('</span><span>') + '</span>';

        $(ele).hide().appendTo('p#textIntroAnimation').each(function(i) {
            $(this).delay(70 * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, 100);
        });

        setTimeout(function() {
            $(ele2).hide().appendTo('p#welcome').each(function(i) {
                $(this).delay(67 * i).css({
                    display: 'inline',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 100);
            });
        }, 34500);

        setTimeout(function() {
            $(ele3).hide().appendTo('p#thisIsZmejelov').each(function(i) {
                $(this).delay(65 * i).css({
                    display: 'inline',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 100);
            });
            document.getElementById("exploretext").innerText = "<?php echo $translations["explore"]; ?>";

        }, 37000);
    </script>
</body>

</html>