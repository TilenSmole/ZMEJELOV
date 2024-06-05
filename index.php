<?php
session_start();
include('translations/load_translations.php');
if (!isset($_SESSION['visited_before'])) {
    $_SESSION['visited_before'] = true;

    header("Location: intro.php");
    exit();
}




?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="stylesheet" href="/CSS/common.css">


</head>

<body>
    <div id="header"></div>

    <script>
        $(document).ready(function() {
            $("#header").load("SHARED/header.php");
            $("#footer").load("SHARED/footer.php");
        });
    </script>


    <div class="introduction" id="introduction_OG">
        <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
        <div class="introductionText">
            <?php if (isset($_SESSION["username"])) : ?>
                <p><?php $translations = loadTranslations();
                    echo $translations['welcome_again'] ?>
                <ul id="options">
                    <li><a href="/zmentures.php">ZMENTURES</a></li>
                    <li><a href="zmejelov1869.php">ZMEJELOV 1869</a></li>
                    <li><a href="CityZmentures.php">CITY ZMENTURES</a></li>
                    <li><a href="Crackelov.php">CRA*KELOV</a></li>
                    <li><a href="TheFinalRage.php">THE FINAL RAGE</a></li>
                </ul>
                <?php $translations = loadTranslations();
                echo $translations['welcome_again2'] ?> <ul id="options">
                    </p>
                <?php else : ?>
                    <p> <?php $translations = loadTranslations();
                        echo $translations['welcome_again3'] ?>
                    <ul id="options">
                        </p>
                    <?php endif; ?>
        </div>
    </div>
    </div>


    <div id="memes">
        <h1>MEMES</h1>


    </div>


    <div id="videos">
        <h1>VIDEO VSEBINA</h1>
        <div>
            <div class="pictureSliderVideo fade">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WkpYCOwkyK4?si=BSql_6SpqcIPEFWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>
            </div>
            <div class="pictureSliderVideo fade">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WkpYCOwkyK4?si=BSql_6SpqcIPEFWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>
            </div>
            <div class="pictureSliderVideo fade">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nN8u2-mLYUY?si=ppCsG7ehGV1jXwW9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        <h1><?php $translations = loadTranslations();
            echo $translations['intro_essay'] ?></h1>
        <div class="pictureSlider fade">
            <img src="assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png" alt="zmentures" width="800" height="500">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/uvod/rage.png" alt="the final rage" width="800" height="500"  >
        </div>
        <div class="pictureSlider fade">
            <img src="assets/uvod/basic.png" alt="zmejelov" width="800" height="500">
        </div>
        <div class="pictureSlider fade">
        <img src="assets/PROMO/keepOn.png.png" alt="zmejelov keep on" width="800" height="500">
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

        <p><?php
            echo $translations["my_intro"] ?>

        <p><?php $translations = loadTranslations();
            echo $translations['github_essay'] ?></p>

    </div>



    <div id="footer"></div>
</body>

</html>