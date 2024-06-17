<?php
session_start();
include('translations/load_translations.php');
if (!isset($_SESSION['visited_before'])) {
    $_SESSION['visited_before'] = true;

    header("Location: intro.php");
    exit();
}
$translations = loadTranslations();




?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="icon" type="image/x-icon" href="assets\favicon.ico">
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/common.css">


</head>

<body>
    <div id="header"></div>

    <script>
        $(document).ready(function() {
            var username = "<?php echo isset($_SESSION["username"]) ? $_SESSION["username"] : ''; ?>";
            $("#header").load("SHARED/header.php?username=" + username);
            $("#footer").load("SHARED/footer.php");
        });
    </script>

    <div class="mobileContainer">
        <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmejaMobile">
        <span class="mobile"><?php echo $translations['mobile_too_small'] ?></span>
    </div>



    <div class="introduction" id="introduction_OG">
        <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
        <div class="introductionText">
            <?php if (isset($_SESSION["username"])) : ?>
                <p><?php echo $translations['welcome_again'] ?><br>
                    <br>
                <ul id="options">
                    <li><a href="zmejelov1869.php">ZMEJELOV 1869 </a><?php echo $translations['welcome_1869'] ?></li>
                    <li><a href="/zmentures.php">ZMENTURES</a> <?php echo $translations['welcome_zmentures'] ?></li>
                    <li><a href="Crackelov.php">CRA*KELOV</a> <?php echo $translations['welcome_crackelov'] ?> </li>
                    <li><a href="CityZmentures.php">CITY ZMENTURES </a><?php echo $translations['welcome_city'] ?></li>
                    <li><a href="TheFinalRage.php">THE FINAL RAGE</a> <?php echo $translations['welcome_rage'] ?></li>
                </ul>
                <?php
                echo $translations['welcome_again2'] ?> <ul id="options">
                    </p>
                <?php else : ?>
                    <p> <?php
                        echo $translations['welcome_again3'] ?>
                    <ul id="options">
                        </p>
                    <?php endif; ?>
        </div>
    </div>
    </div>
    <?php


    $language = isset($_SESSION['selectedLanguage']) ? $_SESSION['selectedLanguage'] : 'slo';
    ?>
    <div id="memes" style="position: relative; margin: auto; overflow: hidden;">
        <h1>MEMES</h1>
        <button id="prev" class="slider-button">&lt;</button>
        <button id="next" class="slider-button" >&gt;</button>



        <div class="memesSlider fade memesSlider2">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m1<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 1">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m2<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 2">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m4<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 4">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m5<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 5">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m6<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 6">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m7<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 7">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m8<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 8">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m9<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 9">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m10<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 10">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m11<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 11">
        </div>
        <div class="memesSlider fade">
            <img src="assets/<?php echo $language === 'en' ? 'memes_en' : 'memes_slo'; ?>
/m12<?php echo $language === 'en' ? 'en' : ''; ?>.jpg" alt="meme 12">
        </div>
        <div class="memesSlider fade">
            <img src="assets/PROMO/keepOn.png" alt="keepOn zmejeloving">
        </div>
    </div>

    <script>
        let memeIndex = 0;
        showMeme(memeIndex);

        function showMeme(index) {
            let memes = document.getElementsByClassName("memesSlider");
            if (index >= memes.length) {
                memeIndex = 0;
            } else if (index < 0) {
                memeIndex = memes.length - 1;
            } else {
                memeIndex = index;
            }

            for (let i = 0; i < memes.length; i++) {
                memes[i].style.display = "none";
            }

            memes[memeIndex].style.display = "block";
        }

        document.getElementById("next").addEventListener("click", function() {
            showMeme(memeIndex + 1);
        });

        document.getElementById("prev").addEventListener("click", function() {
            showMeme(memeIndex - 1);
        });
    </script>










    <div id="videos">
        <h1>VIDEO VSEBINA</h1>
        <div>
            <div class="pictureSliderVideo fade">
                <iframe src="https://www.youtube-nocookie.com/embed/WkpYCOwkyK4?si=BSql_6SpqcIPEFWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>
            </div>
            <div class="pictureSliderVideo fade">
                <iframe src="https://www.youtube-nocookie.com/embed/WkpYCOwkyK4?si=BSql_6SpqcIPEFWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>
            </div>
            <div class="pictureSliderVideo fade">
                <iframe src="https://www.youtube-nocookie.com/embed/nN8u2-mLYUY?si=ppCsG7ehGV1jXwW9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>
            </div>
            <script>
                let slideIndexVideo = 0;
                showSlidesVideo();

                function showSlidesVideo() {
                    let slidesVideo = document.getElementsByClassName("pictureSliderVideo");
                    if (slideIndexVideo >= slidesVideo.length) {
                        slideIndexVideo = 0
                    }
                    for (let i = 0; i < slidesVideo.length; i++) {
                        slidesVideo[i].style.display = "none";
                    }
                    slidesVideo[slideIndexVideo].style.display = "block";
                    slideIndexVideo++;


                    setTimeout(showSlidesVideo, 1000);
                }
            </script>
        </div>

    </div>







    <div id="about_proyect">
        <h1><?php
            echo $translations['intro_essay'] ?></h1>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (1).png" alt="zmentures">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (2).png" alt="the final rage">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (3).png" alt="zmejelov">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (4).png" alt="zmejelov keep on">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (5).png" alt="zmejelov keep on">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (6).png" alt="zmejelov keep on">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (7).png" alt="zmejelov keep on">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/zmejelov/1 (8).png" alt="zmejelov keep on">
        </div>

        <script>
            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let slides = document.getElementsByClassName("pictureSlider");
                if (slideIndex >= slides.length) {
                    slideIndex = 0
                }
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex].style.display = "block";
                slideIndex++;


                setTimeout(showSlides, 3500);
            }
        </script>

        <p class="my_intro"><?php
                            echo $translations["my_intro"] ?>

        <p class="my_intro"><?php
                            echo $translations['github_essay'] ?></p>

    </div>



    <div id="footer"></div>
</body>

</html>