<?php
include("SERVER/database.php");
include('translations/load_translations.php');
$translations = loadTranslations();
$username = $_SESSION['username'];
if (isset($_GET['user'])) {
  $username = $_GET['user'];
}
if (session_status() === PHP_SESSION_NONE)
  session_start();

$sql = "SELECT achievements, creation_date FROM users WHERE username='{$username}'";
$result = sqlsrv_query($conn, $sql);

if ($result) {

  if (sqlsrv_has_rows($result) > 0) {
    $achievements = "";
    $date = "";

    while ($row = sqlsrv_fetch_array($result)) {
      $achievements .= $row["achievements"] . "<br>";
      $date .= $row["creation_date"]->format('Y-m-d H:i:s') . "<br>";
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
      <link rel="stylesheet" href="/CSS/profileCSS.css">
    </head>

    <body>
      <script>
        $(document).ready(function() {
          var username = "<?php echo isset($_SESSION["username"]) ? $_SESSION["username"] : ''; ?>";
          $("#header").load("SHARED/header.php?username=" + username);
          $("#footer").load("SHARED/footer.php");
        });
      </script>
      <div id="header"></div>
      <div id="profileTop">
        <div class="profile">
          <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" style="width: 150px; height: 200px; background-color: #605966; border-radius: 100%;">
          <div>
        <h1> <?php echo $username; ?></h1>
        <p>zmejeloving since <?php echo $date; ?></p>
    </div>
        </div>
      </div>



      <div class="achievementsDisplayProfile">
        <h2>ZMENTURES</h2>
        <?php
        $finalScore = substr($achievements, 0, 6);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p>odklenjenih <?php echo $finalScore ?>/5 </p>
        <?php
        if ($achievements[0] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets/achivments/zmejelov_clasic/8664840_face_grin_beam_sweat_icon.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>" . $translations["ach_OG1"] . '</p>';
          echo '</div>';
        }


        if ($achievements[1] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets/achivments/zmejelov_clasic/8665591_ghost_halloween_icon.png" alt="Achievement Picture 1">';
          echo "<p class='hover-text'>" . $translations["ach_OG2"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[2] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\9035903_skull_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach_OG3"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[3] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">'  . $translations["ach_OG4"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[4] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\8665817_store_shopping_icon.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach_OG5"] . '</p>';
          echo '</div>';
        }

        ?>
        <?php
        if ($achievements[5] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach_OG6"] . '</p>';
          echo '</div>';
        }
        ?>
      </div>
      <div class="achievementsDisplayProfile">
        <h2>CR*CKELOV </h2>
        <?php
        $finalScore = substr($achievements, 17, 7);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p>odklenjenih <?php echo $finalScore ?>/7 </p>
        <?php
        if ($achievements[17] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\speed.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach1_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[18] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\complete.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach2_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[19] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\allDeaths.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach3_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[20] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\star.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach4_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[21] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach5_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[22] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["ach6_speed"] . '</p>';
          echo '</div>';
        }
        ?>
      </div>
      <div class="achievementsDisplayProfile">
        <h2>ZMEJELOV 1869 </h2>
        <?php
        $finalScore = substr($achievements, 16, 1);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p>odklenjenih <?php echo $finalScore ?>/1 </p>


        <?php
        if ($achievements[16] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\old.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["aOG"] . '</p>';
          echo '</div>';
        }
        ?>
      </div>
      <div class="achievementsDisplayProfile">
        <h2>CITY ZMENTURES </h2>
        <?php
        $finalScore = substr($achievements, 9, 7);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p>odklenjenih <?php echo $finalScore ?>/7 </p>


        <?php

        $translations = loadTranslations();
        if ($_SESSION["achievements"][9] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">50</p>';
          echo '<p class="hover-text">' . $translations["50"] . '</p>';
          echo '</div>';
        }

        if ($_SESSION["achievements"][10] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">200</p>';
          echo '<p class="hover-text">' . $translations["200"] . '</p>';
          echo '</div>';
        }


        if ($_SESSION["achievements"][11] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">500</p>';
          echo '<p class="hover-text">' . $translations["500"] . '</p>';
          echo '</div>';
        }



        if ($_SESSION["achievements"][12] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">1000</p>';
          echo '<p class="hover-text">' . $translations["1000"] . '</p>';
          echo '</div>';
        }


        if ($_SESSION["achievements"][13] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">5000</p>';
          echo '<p class="hover-text">' . $translations["5000"] . '</p>';
          echo '</div>';
        }

        if ($_SESSION["achievements"][14] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">10000</p>';
          echo '<p class="hover-text">' . $translations["10000"] . '</p>';
          echo '</div>';
        }


        if ($_SESSION["achievements"][15] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">25000</p>';
          echo '<p class="hover-text">' . $translations["25000"] . '</p>';
          echo '</div>';
        }




        ?>
      </div>
      <div class="achievementsDisplayProfile">
        <h2>THE FINAL RAGE </h2>
        <?php
        $finalScore = substr($achievements, 6, 3);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p>odklenjenih <?php echo $finalScore ?>/3 </p>


        <?php

        if ($_SESSION["achievements"][6] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets/achivments/money.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["money_ach"] . '</p>';
          echo '</div>';
        }


        if ($_SESSION["achievements"][7] === "1") {

          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\rainbow.png" alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["rainbow"] . '</p>';
          echo '</div>';
        }

        if ($_SESSION["achievements"][8] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\broom.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["no_pups"] . '</p>';
          echo '</div>';
        }

        ?>
      </div>




  <?php
  } else {
    echo "Username doesn't exist";
  }
} else {
  echo "Error";
}




  ?>

  <div class="QnA" class="col-10" id="QnA_OG">
    <h1>Q&N</h1>
    <div>
      <div class="QN_field">
        <div class="question_field">
          <p>Ali lahko spremenim svoje ime in geslo?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a1s')">&#9660;</button></div>
      </div>
      <div id="a1s" style="display: none;">
        <p>Ne</p>
      </div>
    </div>


    <div>
      <div class="QN_field">
        <div class="question_field">
          <p class="question">Koliko časa je bilo posvečeno igri?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('u1s')">&#9660;</button></div>
      </div>
      <div id="u1s" style="display: none;">
        <p>Govorimo o več kot 200 urah</p>
      </div>
    </div>


    <div>
      <div class="QN_field">
        <div class="question_field">
          <p class="question">Ali je bilo po xx urah še vedno zabavno?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('u2s')">&#9660;</button></div>
      </div>
      <div id="u2s" style="display: none;">
        <p>Ddddddddd</p>
      </div>
    </div>

    <div>
      <div class="QN_field">
        <div class="question_field">
          <p class="question">Kako te lahko kontaktiram?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('u3s')">&#9660;</button></div>
      </div>
      <div id="u3s" style="display: none;">
        <p>PREKO OBRAZCA KI GA BOM PRIPORAL SEM</p>
      </div>
    </div>

  </div>


  

  <script>
    function toggleAnswerVisibility(id) {
      var myEle = document.getElementById(id);
      if (myEle.style.display === "none") {
        myEle.style.display = "inline";
        myEle.classList.add("answer-visible"); // Add the CSS class
      } else {
        myEle.style.display = "none";
        myEle.classList.remove("answer-visible"); // Remove the CSS class
      }
    }
  </script>






  <div id="footer"></div>
    </body>

    </html>