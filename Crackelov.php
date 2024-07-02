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
  <title>CRA*KELOV</title>
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
        <p><b><span style="font-size: 50px;">CRA*KELOV</span></b> <?php echo $translations["thefinalrage_intro"] ?></p>
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
            <div class="question_field">
              <p> <?php
                  echo $translations['q8_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('space2','spaceDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="spaceDiv">
            <p id="space2" style="display: none;"><?php
                                                echo $translations['a8_OG'] ?></p>
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
                                  echo $translations['q4_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a3b','a3bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a3bDiv">
            <p id="a3b" style="display: none;"><?php echo $translations['a4_OG'] ?></p>
          </div>
        </div>

        <div>
          <div class="QN_field">
            <div class="question_field">
              <p> <?php
                  echo $translations['q5_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a5b','a5bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a5bDiv">
            <p id="a5b" style="display: none;"><?php
                                                echo $translations['a5_OG'] ?></p>
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


    <div class="comments_DIV" id="comments_crackelov">
    <h1><?php echo $translations["KOMENTARJI"] ?></h1>

    <?php if (isset($_SESSION["username"])) : ?>
    <div>
        <div class="alignCommentAdd">
            <form id="commentsForm" action="zmejelov1869.php" method="POST" class="commentsForm">
                <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php echo $translations["write_comment"]; ?>" rows="3" cols="50"></textarea>
                <div class="submitButtonClass">
                    <button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton"><?php echo $translations["post"]; ?></button>
                </div>
            </form>
        </div>
    </div>

    <?php else : ?>
    <div class="commentsFormError">
        <p class="commentsFormErrorText"><?php echo $translations["please_login_comments"] ?></p>
    </div>
    <?php endif; ?>

    <div id="comment_section" class="commentsZmejelov">
        <!-- Comments will be loaded here dynamically -->
    </div>
</div>


    
    <script>
$(document).ready(function() {
    // Handle comment submission via AJAX
    $('#commentsForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser

        var comment = $('#addCommentZmejelov').val();
        var type = 1; // Set the type here, you can change it based on your requirement

        $.ajax({
            url: 'SERVER/submit_comment.php',
            type: 'POST',
            data: {
                addCommentZmejelov: comment,
                submitCommentZmejelov: true,
                type: type
            },
            success: function(response) {
                // Clear the comment input field
                $('#addCommentZmejelov').val('');
                // Reload comments
                loadComments(type);
            },
            error: function(xhr, status, error) {
                console.error('Error submitting comment:', status, error);
            }
        });
    });

    // Function to load comments via AJAX
    function loadComments(type) {
        $.ajax({
            url: 'SERVER/load_comments.php',
            type: 'GET',
            data: {
                type: type
            },
            success: function(response) {
                $('#comment_section').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error loading comments:', status, error);
            }
        });
    }

    // Initial load of comments
    var initialType = 1; // Set the initial type here
    loadComments(initialType);
});
</script>
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