<?php
include('translations/load_translations.php');
$translations = loadTranslations();

require_once __DIR__.'/router.php';

// ##################################################
// ##################################################
// ##################################################
echo "omg to dela2";

get('/', '/firstPage.php');
get('/SHARED/header.php', '/SHARED/header.php');
get('/translations/load_translations.php', '/translations/load_translations.php');
get('/translations/getLanguage.php', '/translations/getLanguage.php');
get('/SHARED/footer.php', '/SHARED/footer.php');
get('/zmentures/introduction', '/zmentures#introduction_OG');
get('/SERVER/getSessionData.php', '/SERVER/getSessionData.php');
post('/login', '/SERVER/login.php');
get('../SHARED/header.php', '../SHARED/header.php');
get('/SERVER/logout.php', '/SERVER/logout.php');
post('/register', '/SERVER/register.php');
get('/register', '/SERVER/register.php');
get('/login', '/SERVER/login.php');
get('/language.php', '/language.php');
get('/translations/language.php', '/translations/language.php');
//get('/translations/language.php?language=en', '/translations/language.php?language=en');
get('/translations/language.php?language', '/translations/language.php?language');
//get('/translations/language.php?language=slo', '/translations/language.php?language=slo');
get('/zmentures', '/zmejelov_basic.php');
get('/Zmejelov1869', '/zmejelov_og.php');
get('/Crackelov', '/zmejelov_speed_run.php');
get('/TheFinalRage', '/zmejelov_mcqueen.php');
get('/CityZmentures', '/ZMEJELOV_njam_njam.php');
get('/intro', '/index.php');
get('/user', '/user.php');
post('/zmentures', '/zmejelov_basic.php');
get('/contact', '/SHARED/contact.php');
any('/404','/errors/404.php');




?>
<!DOCTYPE html>
<html lang="en">    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/common.css">
    <script src="/translations/language_functions.js"></script>
</head>

<body>
    <div class="introductionDivFrontPage">
        <div id="animationIntro">
            <img src="assets/lvl2/Wraith_03_Idle_006.png" id="zmejaIntro" alt="Zmeja">
        </div>
        <div id="introductionTextDivFrontPage">
            <p id="textIntroAnimation"></p>
            <p id="welcome"></p>
            <p id="thisIsZmejelov"></p>
            <div id="inlineButtons">

                <div class="language_selection">
                    <button class="button_language_intro" id="english_button_intro" onclick="setLanguage('en') ">🇺🇸</button>
                    <button class="button_language_intro" id="slovenian_button_intro" onclick="setLanguage('slo')">🇸🇮</button>
                </div>
                <button id="enterTheWorld"><a href="/"><?php echo "<p id='exploretext'>preskoči animacijo<p>"; ?> </a></button></p>

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
        $content2 =           $translations["welcome"];
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