<?php
include("SERVER/database.php");
session_start();
include('translations/load_translations.php');

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TH6M7HMG59"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-TH6M7HMG59');
  </script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
 <link rel="stylesheet" href="/CSS/index.css">
  <link rel="stylesheet" href="/CSS/common.css">


  <meta charset="utf-8" />
  <title>Zmejelov</title>
  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S0_shared.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S2_inicial.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S3_storyIntro.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S4_gamePlayStart.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S5_konec.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S4_deathScreen.js"></script>


  <script type="text/javascript" src="zmejelov_speed_run/S1_game.js"></script>
  <link rel="preload" as="font" href="assets\uvod\Cinzel-Regular.ttf" type="font/ttf" />
</head>

<body>
  <div id="header"></div>

  <script>
    $(document).ready(function() {
      $("#header").load("SHARED/header.php");
      $("#footer").load("SHARED/footer.php");

    });
  </script>


  <h1>ZMENTURES</h1>
  <div class="introduction" id="introduction_OG">
    <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
    <div class="introductionText">
      <p><b>ZMENTURES</b> <?php $translations = loadTranslations();
                          echo $translations['zmejelov_intro_OG'] ?></p>
    </div>
  </div>

  <div id="time">
    <span class="digit" id="hr">
      00</span>
    <span class="digit" id="min">
      00</span>
    <span class="digit" id="sec">
      00</span>
    <span class="digit" id="count">
      00</span>
  </div>

  <div id="gameContainerSpeedRunning"></div>

  <div class="speed_running_split">
    <div class="QnA_split" class="col-10" id="QnA_OG">
      <h1>Q&N</h1>
      <div>
        <div class="QN_field">
            <div class="question_field"><p>Kako shranim napredek igre?</p></div>
            <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a1s')">&#9660;</button></div>
          </div>
          <div id="a1s" style="display: none;"> 
            <p >Napredek igre se shrani avtomatsko na vsakem nivoju GLEJ DA TO TUD IMPLEMENTIRAS</p>
          </div>
      </div>
        

      <div>
        <div class="QN_field">
            <div class="question_field">      <p class="question">KAJ NAREDITI, ČE IGRICA ZAGLIČA?</p></div>
            <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a2s')">&#9660;</button></div>
          </div>
          <div id="a2s" style="display: none;"> 
            <p >Ponovno naloži stran, v kolikor pa se težava pojava me kontaktiraj <a href="SHARED\contact.php">preko obrazca</a></p>
          </div>
      </div>
      
      
      <div>
        <div class="QN_field">
            <div class="question_field">      <p class="question">KAJ NAREDITI, ČE IGRICA ZAGLIČA?</p></div>
            <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a3s')">&#9660;</button></div>
          </div>
          <div id="a3s" style="display: none;"> 
            <p >Ponovno naloži stran, v kolikor pa se težava pojava me kontaktiraj <a href="SHARED\contact.php">preko obrazca</a></p>
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


    <div id="leaderboard" class="leaderBoardSpeedRun">
      <h1>LEADERBOARD</h1>
      <div style="text-align: center;">
        <?php

        // Retrieve the current page number from the URL
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
        $commentsPerPage = 5;
        $offset = ($page - 1) * $commentsPerPage;

        // Calculate the starting player ranking for the current page
        $startingRank = ($page - 1) * $commentsPerPage + 1;

        // Fetch leaderboard entries
        $sql = "SELECT * FROM leaderboard";
        $result = mysqli_query($conn, $sql);

        $rows = [];
        while ($row = mysqli_fetch_assoc($result)) {
          $rows[] = $row;
        }

        // Custom time sorting function
        function customTimeSort($a, $b)
        {
          $timeA = explode(" ", $a['time']);
          $timeB = explode(" ", $b['time']);

          // Compare hours
          if ($timeA[0] != $timeB[0]) {
            return $timeA[0] - $timeB[0];
          }
          // Compare minutes
          if ($timeA[1] != $timeB[1]) {
            return $timeA[1] - $timeB[1];
          }
          // Compare seconds
          if ($timeA[2] != $timeB[2]) {
            return $timeA[2] - $timeB[2];
          }
          // Compare milliseconds
          return $timeA[3] - $timeB[3];
        }

        // Sort the rows
        usort($rows, 'customTimeSort');

        // Paginate the sorted results
        $paginatedRows = array_slice($rows, $offset, $commentsPerPage);

        // Display the sorted results with consistent player ranking
        foreach ($paginatedRows as $row) {
          echo '<div><span class="Leaderbord_result"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $startingRank . " " . $row["user"] . '</a> (' . $row["date"] . '):</span><br><span class="">' . $row["time"] . '</span></div><br><br>';
          $startingRank++; // Increment the player ranking
        }

        // Pagination
        $sqlCount = "SELECT COUNT(*) AS all_leaderboard FROM leaderboard";
        $resultCount = mysqli_query($conn, $sqlCount);
        $rowCount = mysqli_fetch_assoc($resultCount);
        $totalComments = $rowCount['all_leaderboard'];
        $totalPages = ceil($totalComments / $commentsPerPage);

        echo '<div class="pagination">';
        for ($i = 1; $i <= $totalPages; $i++) {
          echo '<a href="?page=' . $i . '#speed_running_split">' . $i . '</a> ';
        }
        echo '</div>';

        ?>
      </div>



    </div>
  </div>

  <div class="achievementsMainBlock" id="dosezki_OG">
  <h1><?php $translations = loadTranslations();
        echo $translations['achivements'] ?></h1>
    <?php if (isset($_SESSION["username"])) : ?>
      <div class="achievements">
        <?php
        if ($_SESSION["achievements"][6] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach1_speed"] . '</p>';
          echo '<p>' . $translations["ach1.1_speed"] . '</p>';
          echo '</div>';;
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach1_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($_SESSION["achievements"][7] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach2_speed"] . '</p>';
          echo '<p>' . $translations["ach2.2_speed"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach2_speed"] . '</p>';
          echo '</div>';
        }
        ?>
        <?php
        if ($_SESSION["achievements"][1] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach3_speed"] . '</p>';
          echo '<p>' . $translations["ach3.3_speed"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach3_speed"] . '</p>';
          echo '</div>';
        }
        ?>

        <?php
        if ($_SESSION["achievements"][9] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach4_speed"] . '</p>';
          echo '<p>' . $translations["ach4.4_speed"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach4_speed"] . '</p>';
          echo '</div>';
        } ?>

        <?php
        if ($_SESSION["achievements"][10] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach5_speed"] . '</p>';
          echo '<p>' . $translations["ach5.5_speed"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach5_speed"] . '</p>';
          echo '</div>';
        }
        ?>


        <?php
        if ($_SESSION["achievements"][11] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach6_speed"] . '</p>';
          echo '<p>' . $translations["ach6.6_speed"] . '</p>';
          echo '</div>';;
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach6_speed"] . '</p>';
          echo '</div>';
        }

        ?>
      <?php else : ?>
        <div>
          <p><?php  $translations = loadTranslations(); echo $translations['please_login_achivements'] ?></p>
        </div>
      <?php endif; ?>
      </div>


      <div class="comments_DIV" id="comments_OG">
        <?php if (isset($_SESSION["username"])) : ?>
            <h1><?php $translations = loadTranslations();
                echo $translations["KOMENTARJI"] ?></h1>
                <div  >
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET" class="commentsForm">
        <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php $translations = loadTranslations(); echo $translations["write_comment"]; ?>"></textarea>
        <div class="submitButtonClass"><button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton">Post Comment</button>
        </div>
      </form>
</div>


        <?php else : ?>
          <div class="commentsFormError">
            <h1><?php $translations = loadTranslations();
                echo $translations["KOMENTARJI"] ?></h1>
            <?php $translations = loadTranslations();
            echo $translations["add_comment"] ?>
          </div>
        <?php endif; ?>
        <div class="commentsZmejelov">
          <?php
          $sql = "SELECT * FROM comments_zmejelov_speedrun";
          $result = mysqli_query($conn, $sql);


          while ($row = mysqli_fetch_assoc($result)) {
            echo '<div><span class="commentAuthor"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a> (' . $row["date"] . '):</span><span class="commentText"><br>' . $row["comment"] . '</div><br><br></span>';
          }
          ?>
        </div>
      </div>

      <div id="footer"></div>
</body>



</html>



<?php
if (isset($_GET["submitCommentZmejelov"])) {
  echo "gsdf";
  if (isset($_GET["addCommentZmejelov"])) {
    $user = $_SESSION["username"];
    $comment = $_GET["addCommentZmejelov"];

    $sql = "INSERT INTO comments_zmejelov_speedrun (user, comment) VALUES ('$user', '$comment') ";
    mysqli_query($conn, $sql);
    echo "<script>window.location.href = '" . $_SERVER['PHP_SELF'] . "';</script>";
  }
}



mysqli_close($conn);

?>