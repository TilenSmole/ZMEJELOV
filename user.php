<?php
include("SERVER/database.php");
include('translations/load_translations.php');
$translations = loadTranslations();
if (isset( $_SESSION['username'])) {
  $username = $_SESSION['username'];

}
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
      $date .= $row["creation_date"]->format('d. m. Y') . "<br>";
    }
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
            <p><?php echo $translations['since'] ?> <?php echo $date; ?></p>
          </div>
        </div>
      </div>


      <h1><?php
          echo $translations['achivements'] ?></h1>
      <div class="achievementsDisplayProfile">
        <h2>ZMENTURES</h2>
        <?php
        $finalScore = substr($achievements, 0, 6);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p><?php echo $translations['unlocked'] ?> <?php echo $finalScore ?>/6 </p>
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
        <h2>CRA*KELOV </h2>
        <?php
        $finalScore = substr($achievements, 17, 6);
        $finalScore = substr_count($finalScore, '1');
        ?>
        <p><?php echo $translations['unlocked'] ?> <?php echo $finalScore ?>/6 </p>
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
        <p><?php echo $translations['unlocked'] ?> <?php echo $finalScore ?>/1 </p>


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
        <p><?php echo $translations['unlocked'] ?> <?php echo $finalScore ?>/7 </p>


        <?php


        if ($achievements[9] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">50</p>';
          echo '<p class="hover-text">' . $translations["50"] . '</p>';
          echo '</div>';
        }

        if ($achievements[10] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">200</p>';
          echo '<p class="hover-text">' . $translations["200"] . '</p>';
          echo '</div>';
        }


        if ($achievements[11] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">500</p>';
          echo '<p class="hover-text">' . $translations["500"] . '</p>';
          echo '</div>';
        }



        if ($achievements[12] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">1000</p>';
          echo '<p class="hover-text">' . $translations["1000"] . '</p>';
          echo '</div>';
        }


        if ($achievements[13] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">5000</p>';
          echo '<p class="hover-text">' . $translations["5000"] . '</p>';
          echo '</div>';
        }

        if ($achievements[14] === "1") {
          echo '<div class="achievement-container">';
          echo '<p class="ach_num">10000</p>';
          echo '<p class="hover-text">' . $translations["10000"] . '</p>';
          echo '</div>';
        }


        if ($achievements[15] === "1") {
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
        <p><?php echo $translations['unlocked'] ?> <?php echo $finalScore ?>/3 </p>


        <?php

        if ($achievements[6] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets/achivments/money.png"  alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["money_ach"] . '</p>';
          echo '</div>';
        }


        if ($achievements[7] === "1") {

          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\rainbow.png" alt="Achievement Picture 1">';
          echo '<p class="hover-text">' . $translations["rainbow"] . '</p>';
          echo '</div>';
        }

        if ($achievements[8] === "1") {
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

  <div class="QnA" class="col-10" >
    <h1>Q&A</h1>
    <div>
      <div class="QN_field" style=" background-color: #4d4455;">
        <div class="question_field">
          <p> <?php
              echo $translations['change'] ?> <span class="button_field"><button class="dropbtnProfile" onclick="toggleAnswerVisibilityZmentures('a4b','a4bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a4bDiv">
        <p id="a4b" style="display: none;"><?php echo $translations['no'] ?></p>
      </div>
    </div>
    <div>
      <div class="QN_field" style=" background-color: #4d4455;">
        <div class="question_field">
          <p> <?php
              echo $translations['dedicated'] ?> <span class="button_field"><button class="dropbtnProfile" onclick="toggleAnswerVisibilityZmentures('a4a','a4aDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a4aDiv">
        <p id="a4a" style="display: none;"><?php echo $translations['alot'] ?></p>
      </div>
    </div>
    <div>
      <div class="QN_field" style=" background-color: #4d4455;">
        <div class="question_field">
          <p> <?php
              echo $translations['contact'] ?> <span class="button_field"><button class="dropbtnProfile" onclick="toggleAnswerVisibilityZmentures('a4c','a4cDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a4cDiv">
        <p id="a4c" style="display: none;"><?php echo $translations['form'] ?></p>
      </div>
    </div>



    <script>
      function toggleAnswerVisibilityZmentures(id, div) {
        var myEle = document.getElementById(id);
        var myDiv = document.getElementById(div);


        if (myEle.style.display === "none") {
          myEle.style.display = "inline";
          myEle.classList.add("answer-visible");
          myDiv.classList.add("answer-visible-div");

        } else {
          myEle.style.display = "none";
          myEle.classList.remove("answer-visible"); // Remove the CSS class
          myDiv.classList.remove("answer-visible-div"); // Remove the CSS class

        }
      }
    </script>





    <div id="footer"></div>
    </body>

    </html>