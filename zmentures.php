<?php
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}


include("SERVER/database.php");
include('translations/load_translations.php');

$translations = loadTranslations();

/*
if (isset($_SESSION['username'], $_SESSION['lastLevel'], $_SESSION['difficulty'], $_SESSION['DATE'], $_SESSION['achievements'])) {
  $response = array(
      'username' => $_SESSION['username'],
      'lastLevel' => $_SESSION['lastLevel'],
      'difficulty' => $_SESSION['difficulty'],
      'DATE' => $_SESSION['DATE'],
      'achievements' => $_SESSION['achievements']
  );
  echo json_encode($response);
} else {
  echo json_encode(array('error' => 'Session variables not set'));
}

*/



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
 <link rel="icon" type="image/x-icon" href="assets\favicon.ico">
  <link rel="stylesheet" href="/CSS/index.css">
  <link rel="stylesheet" href="/CSS/common.css">
  <link rel="stylesheet" href="/CSS/common.css">
  <link rel="icon" type="image/x-icon" href="assets\favicon.ico">


  <meta charset="utf-8" />
  <title>ZMENTURES</title>
  <script type="text/javascript" src="/Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_osnova.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A2_scena2.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A1_scena1.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_uvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A10_konec.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A6_scena6.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A5_scena5.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A4_scena4.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A3_scena3.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/AS_skrivni.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A7_droper.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A8_plavanje.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A9_cilj.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_zacetniZaslon.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/vrsta.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/AS_jama.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_tezavnost.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/AS_jamaKonec.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/smrt.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A7_droperUvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A7_droperTroll.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_vsi_nivoji.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_vsi_nivoji2.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_intro.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/film.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A10_outro.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_mesto.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_uvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E1_swamp.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E12_swampSkakanje.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E12_SWAMP_PORAZ.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E12_skakanjeUvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_pokerUvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_barUvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_bar.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_poker.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_poker1.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_poker2.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_poker3.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_poker4.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_barKonec.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_barRazlaga.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E12_Swamp_goraUvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E12_goraKonec.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/E0_mestoKonec.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A9_skrinja.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A9_skrinja_konec.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A9_skrinja_uvod.js"></script>
  <script type="text/javascript" src="/Zmejelov_basic_game/A0_loadSave.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/game.js"></script>
  <link rel="preload" as="font" href="assets\uvod\Cinzel-Regular.ttf" type="font/ttf" />
</head>

<body>

  <div id="loader-wrapper">
    <span class="loader"><img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Loading..."></span>
  </div>



  <script>
  function showLoader() {
    document.getElementById("loader-wrapper").style.display = "flex";
  }

  function hideLoader() {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("fullBody").style.display = "block";

    // Get the current URL
    var url = window.location.href;

    // Find the index of the '#' character in the URL
    var anchorIndex = url.indexOf('#');

    // Check if the '#' character exists in the URL
    if (anchorIndex !== -1) {
      // Extract the anchor part of the URL
      var anchor = url.substring(anchorIndex);

      // Scroll to the corresponding section based on the anchor
      var targetElement = document.getElementById(anchor.substring(1)); // Remove the '#' character
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }
  }

  window.onload = function() {
    setTimeout(hideLoader);
  };
  showLoader();
</script>




  <div id="fullBody">


    <script>
      $(document).ready(function() {
        var username = "<?php echo isset($_SESSION["username"]) ? $_SESSION["username"] : ''; ?>";
        $("#header").load("SHARED/header.php?username=" + username);
        $("#footer").load("SHARED/footer.php");

      });
    </script>
    <div id="header"></div>


    <div class="introduction" id="introduction_OG">
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja col-10">
      <div class="introductionText">
        <p><b><span style="font-size: 50px;">ZMENTURES</span></b> <?php  echo $translations["zmentures_intro"] ?></p>

      </div>
    </div>


    <div class="game">
      <div id="game_OG">
        <h1><?php
            echo $translations['game'] ?></h1>
        <?php if (isset($_SESSION["username"])) : ?>
          <div id="gameContainer"></div>
        <?php else : ?>
          <div class="gameContainerError" class="col-10">
            <p><?php
                echo $translations['please_login'] ?> </p>
          </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="split">
      <div  class="col-12" id="QnA_OG">
        <h1>Q&A</h1>
        <div>
          <div class="QN_field">
            <div class="question_field">
              <p><?php
                  echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a1b','a1bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a1bDiv">
            <p id="a1b" style="display: none; "><?php
                                                echo $translations['a1_OG'] ?></p>
          </div>
        </div>


        <div>
          <div class="QN_field">
            <div class="question_field">
              <p> <?php
                  echo $translations['q2_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a2b','a2bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a2bDiv">
            <p id="a2b" style="display: none;"><?php
                                                echo $translations['a2_OG'] ?></p>
          </div>
        </div>

        <div>
          <div class="QN_field">
            <div class="question_field">
              <p> <?php
                  echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a3b','a3bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a3bDiv">
            <p id="a3b" style="display: none;"><?php
                                                echo $translations['a3_OG'] ?></p>
          </div>
        </div>

        <div>
          <div class="QN_field">
            <div class="question_field">
              <p> <?php
                  echo $translations['q4_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a4b','a4bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a4bDiv">
            <p id="a4b" style="display: none;"><?php
                                                echo $translations['a4_OG'] ?></p>
          </div>
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


    <div class="achievementsMainBlock" id="dosezki_zmentures">
      <h1><?php
          echo $translations['achivements'] ?></h1>
      <?php if (isset($_SESSION["username"])) : ?>
        <div class="achievements">
          <?php
          if ($_SESSION["achievements"][0] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets/achivments/zmejelov_clasic/8664840_face_grin_beam_sweat_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG1"] . '</p></b>';
            echo '<p>' . $translations["ach_OG1.1"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets/achivments/zmejelov_clasic/8664840_face_grin_beam_sweat_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG1"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php

          if ($_SESSION["achievements"][1] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png" alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG2"] . '</p></b>';
            echo '<p>' . $translations["ach_OG2.2"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png" alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG2"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php

          if ($_SESSION["achievements"][2] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\zmejelov_clasic\9035903_skull_sharp_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG3"] . '</p></b>';
            echo '<p>' . $translations["ach_OG3.3"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\zmejelov_clasic\9035903_skull_sharp_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG3"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php


          if ($_SESSION["achievements"][3] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG4"] . '</p></b>';
            echo '<p>' . $translations["ach_OG4.4"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG4"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php


          if ($_SESSION["achievements"][4] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\zmejelov_clasic\8665817_store_shopping_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG5"] . '</p></b>';
            echo '<p>' . $translations["ach_OG5.5"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\zmejelov_clasic\8665817_store_shopping_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG5"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php
          if ($_SESSION["achievements"][5] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG6"] . '</p></b>';
            echo '<p>' . $translations["ach_OG6.6"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach_OG6"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

        </div>
      <?php else : ?>
        <div>
          <p>
          <p><?php
              echo $translations['please_login_achivements'] ?></p>
          </p>
        </div>
      <?php endif; ?>







    </div>


    <div class="comments_DIV" id="comments_OG">
      <?php if (isset($_SESSION["username"])) : ?>
        <h1><?php echo $translations["KOMENTARJI"] ?></h1>
        <div>
          <div class="alignCommentAdd">
            <form action="zmentures.php" method="GET" class="commentsForm">
              <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php echo $translations["write_comment"]; ?>" rows="3" cols="50"></textarea>
              <div class="submitButtonClass"><button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton"><?php echo $translations["post"]; ?></button>
              </div>
          </div>
          </form>
        </div>


      <?php else : ?>
        <div class="commentsFormError">
          <h1><?php
              echo $translations["KOMENTARJI"] ?></h1>
          <p class="commentsFormErrorText"><?php echo $translations["please_login_comments"] ?></p>
        </div>
      <?php endif; ?>
      <?php
      // Define the number of comments per page
      $commentsPerPage = 7;

      // Query to count total number of comments
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type = 0";
      $totalCommentsResult = sqlsrv_query($conn, $totalCommentsQuery);

      if ($totalCommentsResult === false) {
        echo "Error counting total comments: " . print_r(sqlsrv_errors(), true);
        exit();
      }

      $totalCommentsRow = sqlsrv_fetch_array($totalCommentsResult);
      $totalComments = $totalCommentsRow['total'];

      // Calculate the current page number
      $page = isset($_GET['page']) ? $_GET['page'] : 1;
      // Calculate the SQL LIMIT for pagination
      $offset = ($page - 1) * $commentsPerPage;

      // Query to fetch comments for the current page
      $totalPages = ceil($totalComments / $commentsPerPage);

      // Adjust the offset for the last page
      if ($page == $totalPages && $totalComments % $commentsPerPage != 0) {
        $commentsPerPage = $totalComments % $commentsPerPage;
      }

      // Calculate the SQL LIMIT for pagination
      $offset = ($page - 1) * $commentsPerPage;

      // Query to fetch comments for the current page
      $sql = "
WITH PaginationCTE AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY date DESC) AS RowNum
    FROM comments
    WHERE type = 0
)
SELECT *
FROM PaginationCTE
WHERE RowNum BETWEEN ? AND ?";

      $stmt = sqlsrv_prepare($conn, $sql, array($offset + 1, $offset + $commentsPerPage));

      // Execute the statement
      try {
        $result = sqlsrv_execute($stmt);

        if ($result === false) {
          echo "Error fetching comments: " . print_r(sqlsrv_errors(), true);
          exit();
        }
        $startPage = max(min($page- floor($commentsPerPage / 2), $totalPages - $commentsPerPage + 1), 1);
        $endPage = min($startPage + $commentsPerPage - 1, $totalPages);
        // Display comments
        echo '<div id="comment_section" class="commentsZmejelov">';
        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
          echo '<div class="full_comment">
                  <span class="commentAuthor"> 
                    <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" style="width: 40px; height: 50px; background-color: #605966; border-radius: 100%;">
                    <a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a>      </span>
                  <span class="commentText"><br>' . $row["comment"] . '</span><br><br>
                  <span class="commentDate"><br>' . $row["date"]->format('d-m-Y')   . '</span>
                </div><br><br>';
        }

        echo '</div>';
      } catch (Exception $e) {
        // Handle the exception
        echo 'Caught exception: ',  $e->getMessage(), "\n";
      }


      // Query to count total number of comments
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type=0";
      $totalCommentsResult = sqlsrv_query($conn, $totalCommentsQuery);
      $totalCommentsRow = sqlsrv_fetch_array($totalCommentsResult);
      $totalComments = $totalCommentsRow['total'];


      if ($totalComments != 0) {
        // Calculate total number of pages
        $totalPages = ceil($totalComments / $commentsPerPage);

        // Display pagination links
        echo '<div class="pagination_container_comments">';
        echo '<div class="pagination">';

        // Previous page link
        if ($page > 1) {
          echo '<a href="zmentures.php?page=' . ($page- 1) . '#comments_OG"><&#160 &#160</a> ';
        }

        // Pagination links
        for ($i = $startPage; $i <= $endPage; $i++) {
          echo '<a href="zmentures.php?page=' . $i . '#comments_OG"' . ($i == $page? ' class="active"' : '') . '>' . $i . "&nbsp;   "  . '</a>';
        }

        // Next page link
        if ($page < $totalPages) {
          echo '<a href="zmentures.php?page=' . ($page+ 1) . '#comments_OG">&#160 &#160></a>';
        }

        echo '</div>';
        echo '</div>';
      }


      ?>

    </div>

  </div>
  <div id="footer"></div>
</body>



</html>



<?php
if (isset($_GET["submitCommentZmejelov"])) {
  if (isset($_GET["addCommentZmejelov"])) {
    $user = $_SESSION["username"];
    $comment = $_GET["addCommentZmejelov"];

    // Prepare the SQL statement with placeholders
    $sql = "INSERT INTO comments ([user], comment, date, type) VALUES (?, ?, GETDATE(), 0)";

    // Prepare the statement
    $stmt = sqlsrv_prepare($conn, $sql, array(&$user, &$comment));

    if ($stmt) {
      if (sqlsrv_execute($stmt)) {
        echo "<meta http-equiv=Refresh content=2;url=/zmentures#comments_OG>";
      } else {
        echo "Error executing statement: " . print_r(sqlsrv_errors(), true);
      }
    } else {
      echo "Error preparing statement: " . print_r(sqlsrv_errors(), true);
    }
  }
}



?>