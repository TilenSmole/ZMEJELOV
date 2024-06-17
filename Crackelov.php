<?php
include("SERVER/database.php");
include('translations/load_translations.php');
if (session_status() === PHP_SESSION_NONE)
  session_start();
$translations = loadTranslations();
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


  <meta charset="utf-8" />
  <title>CR*CKELOV</title>
  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S0_shared.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S2_inicial.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S3_storyIntro.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S4_gamePlayStart.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S4_deathScreen.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S5_konec.js"></script>
  <script type="text/javascript" src="zmejelov_speed_run/S1_game.js"></script>

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

    <div class="mobileContainer">
        <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmejaMobile">
        <span class="mobile"><?php echo $translations['thefinalrage_intro_mobile'] ?></span>
        
    </div>

    <div class="introduction" id="introduction_crackelov">
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja col-10">
      <div class="introductionText">
        <p><b><span style="font-size: 50px;">CR*CKELOV</span></b> <?php echo $translations["thefinalrage_intro"] ?></p>
      </div>
    </div>


    <div class="game">
      <div id="game_crackelov">
        <h1><?php
            echo $translations['game'] ?></h1>
        <?php if (isset($_SESSION["username"])) : ?>
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

        <?php else : ?>
          <div class="gameContainerError" class="col-10">
            <p><?php
                echo $translations['please_login'] ?> </p>
          </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="game_mobile">
      <span><?php echo $translations['mobile_too_small2'] ?></span>
    </div>

    <div class="speed_running_split" id="QnA_crackelov">
      <div class="QnA_split">
        <h1>Q&A</h1>
        <div>
          <div class="QN_field">
            <div class="question_field_split">
              <p class="q_field"><?php
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
            <div class="question_field_split">
              <p class="q_field"> <?php
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
            <div class="question_field_split">
              <p class="q_field"> <?php
                                  echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a3b','a3bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a3bDiv">
            <p id="a3b" style="display: none;"><?php echo $translations['a3_OG'] ?></p>
          </div>
        </div>









      </div>

      <script>
        function toggleAnswerVisibilityZmentures(id, div) {
          var myEle = document.getElementById(id);
          var myDiv = document.getElementById(div);


          if (myEle.style.display === "none") {
            myEle.style.display = "inline";
            myEle.classList.add("answer-visible_split");
            myDiv.classList.add("answer-visible_split-div");

          } else {
            myEle.style.display = "none";
            myEle.classList.remove("answer-visible_split"); // Remove the CSS class
            myDiv.classList.remove("answer-visible_split-div"); // Remove the CSS class

          }
        }
      </script>

      <div id="leaderboard" class="leaderBoardSpeedRun">
        <h1>LEADERBOARD</h1>
        <div style="text-align: center;" class="board">
    <?php
    // Retrieve the current page number from the URL
    $currentPage = isset($_GET['page']) ? $_GET['page'] : 1;
    $commentsPerPage = 7;

    // Calculate the total number of pages
    $sqlCount = "SELECT COUNT(*) AS all_leaderboard FROM leaderboard WHERE type = 1";
    $resultCount = sqlsrv_query($conn, $sqlCount);
    $rowCount = sqlsrv_fetch_array($resultCount);
    $totalComments = $rowCount['all_leaderboard'];
    $totalPages = ceil($totalComments / $commentsPerPage);

    // Determine the range of pages to display
    $numPaginationLinks = 5;
    $startPage = max(min($currentPage - floor($numPaginationLinks / 2), $totalPages - $numPaginationLinks + 1), 1);
    $endPage = min($startPage + $numPaginationLinks - 1, $totalPages);

    // Fetch leaderboard entries for the current page
    $offset = ($currentPage - 1) * $commentsPerPage;
    $sql = "SELECT * FROM leaderboard WHERE type = 1 ORDER BY time OFFSET $offset ROWS FETCH NEXT $commentsPerPage ROWS ONLY";
    $result = sqlsrv_query($conn, $sql);

    $rows = [];
    while ($row = sqlsrv_fetch_array($result)) {
        $rows[] = $row;
    }

    // Custom time sorting function
    function customTimeSort($a, $b)
    {
        $timeA = explode(" ", $a);
        $timeB = explode(" ", $b);

        // Convert time strings to milliseconds for comparison
        $timeInMillisA = ($timeA[0] * 3600000) + ($timeA[1] * 60000) + ($timeA[2] * 1000) + intval($timeA[3]);
        $timeInMillisB = ($timeB[0] * 3600000) + ($timeB[1] * 60000) + ($timeB[2] * 1000) + intval($timeB[3]);

        // Compare milliseconds
        return $timeInMillisA - $timeInMillisB;
    }

    // Sort the rows by "time" field
    usort($rows, function($a, $b) {
        return customTimeSort($a['time'], $b['time']);
    });

    // Display the paginated results with consistent player ranking
    $startingRank = ($currentPage - 1) * $commentsPerPage + 1;
    foreach ($rows as $row) {
        echo '<div><span class="Leaderbord_result"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $startingRank . ". " . $row["user"] . '</a> (' . $row["date"]->format('d. m. Y')  . '):</span><br><span class="">' . $row["time"] . '</span></div><br><br>';
        $startingRank++; // Increment the player ranking
    }

    // Pagination
    echo '<div class="pagination">';
    // Previous page link
    if ($currentPage > 1) {
        echo '<a href="?page=' . ($currentPage - 1) . '#leaderboard"><&#160 &#160</a> ';
    }

    // Pagination links
    for ($i = $startPage; $i <= $endPage; $i++) {
        echo '<a href="?page=' . $i . '#leaderboard"' . ($i == $currentPage ? ' class="active"' : '') . '>' . $i . '</a> ';
    }

    // Next page link
    if ($currentPage < $totalPages) {
        echo '<a href="?page=' . ($currentPage + 1) . '#leaderboard">&#160 &#160></a>';
    }
    echo '</div>';
    ?>
</div>




      </div>

    </div>


    <script>
      function toggleAnswerVisibility(id) {
        var myEle = document.getElementById(id);
        if (myEle.style.display === "none") {
          myEle.style.display = "inline";
          myEle.classList.add("answer-visible_split"); // Add the CSS class
        } else {
          myEle.style.display = "none";
          myEle.classList.remove("answer-visible_split"); // Remove the CSS class
        }
      }
    </script>


    <div class="achievementsMainBlock" id="dosezki_crackelov">
      <h1><?php
          echo $translations['achivements'] ?></h1>
      <?php if (isset($_SESSION["username"])) : ?>
        <div class="achievements">
          <?php

          if ($_SESSION["achievements"][17] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets/achivments/speedRun/speed.png"    alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach1_speed"] . '</p></b>';
            echo '<p>' . $translations["ach1.1_speed"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets/achivments/speedRun/speed.png"    alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach1_speed"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php

          if ($_SESSION["achievements"][18] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\speedRun\complete.png" alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach2_speed"] . '</p></b>';
            echo '<p>' . $translations["ach2.2_speed"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\speedRun\complete.png" alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach2_speed"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php

          if ($_SESSION["achievements"][19] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\speedRun\allDeaths.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach3_speed"] . '</p></b>';
            echo '<p>' . $translations["ach3.3_speed"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\speedRun\allDeaths.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach3_speed"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php


          if ($_SESSION["achievements"][20] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\speedRun\star.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach4_speed"] . '</p></b>';
            echo '<p>' . $translations["ach4.4_speed"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\speedRun\star.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach4_speed"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php


          if ($_SESSION["achievements"][21] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach5_speed"] . '</p></b>';
            echo '<p>' . $translations["ach5.5_speed"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach5_speed"] . '</p></b>';
            echo '</div>';
            echo '</div>';
          }
          ?>

          <?php
        if ($_SESSION["achievements"][22] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\speedRun\spaceship.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach6_speed"] . '</p></b>';
            echo '<p>' . $translations["ach6.6_speed"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\speedRun\spaceship.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["ach6_speed"] . '</p></b>';
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
    <h1><?php
              echo $translations["KOMENTARJI"] ?></h1>
      <?php if (isset($_SESSION["username"])) : ?>
        <div>
          <div class="alignCommentAdd">
            <form action="Crackelov.php" method="GET" class="commentsForm">
              <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php echo $translations["write_comment"]; ?>" rows="3" cols="50"></textarea>
              <div class="submitButtonClass"><button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton"><?php echo $translations["post"]; ?></button>
              </div>
          </div>
          </form>
        </div>


      <?php else : ?>
        <div class="commentsFormError">
         
          <p class="commentsFormErrorText"><?php echo $translations["please_login_comments"] ?></p>
        </div>
      <?php endif; ?>
      <?php
      // Define the number of comments per page
      $commentsPerPage = 7;

      // Query to count total number of comments
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type = 1";
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
    WHERE type = 1
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
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type=1";
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
          echo '<a href="Crackelov.php?page=' . ($page- 1) . '#comments_OG"><&#160 &#160</a> ';
        }

        // Pagination links
        for ($i = $startPage; $i <= $endPage; $i++) {
          echo '<a href="Crackelov.php?page=' . $i . '#comments_OG"' . ($i == $page? ' class="active"' : '') . '>' . $i . "&nbsp;   "  . '</a>';
        }

        // Next page link
        if ($page < $totalPages) {
          echo '<a href="Crackelov.php?page=' . ($page+ 1) . '#comments_OG">&#160 &#160></a>';
        }

        echo '</div>';
        echo '</div>';
      }


      ?>

    </div>
  </div>


  <div id="footer"></div>
  </div>
</body>



</html>



<?php
if (isset($_GET["submitCommentZmejelov"])) {
  if (isset($_GET["addCommentZmejelov"])) {
    $user = $_SESSION["username"];
    $comment = $_GET["addCommentZmejelov"];

    // Prepare the SQL statement with placeholders
    $sql = "INSERT INTO comments ([user], comment, date, type) VALUES (?, ?, GETDATE(),1)";

    // Prepare the statement
    $stmt = sqlsrv_prepare($conn, $sql, array(&$user, &$comment));

    if ($stmt) {
      if (sqlsrv_execute($stmt)) {
        echo "<meta http-equiv=Refresh content=2;url=/Crackelov.php#comments_crackelov>";
      } else {
        echo "Error executing statement: " . print_r(sqlsrv_errors(), true);
      }
    } else {
      echo "Error preparing statement: " . print_r(sqlsrv_errors(), true);
    }
  }
}



?>