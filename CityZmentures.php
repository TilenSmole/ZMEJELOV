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
  <link rel="icon" type="image/x-icon" href="assets\favicon.ico">

  <meta charset="utf-8" />
  <title>CITY ZMENTURES</title>
  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F0_shared.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F5_konec.js"></script>

  <script type="text/javascript" src="zmejelov_njam_njam/F2_inicial.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F2_time_intro.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F3_storyIntro.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F4_gamePlayStart.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F4_gamePlayStart2.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F3_explanation.js"></script>
  <script type="text/javascript" src="zmejelov_njam_njam/F1_game.js"></script>


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
        <span class="mobile"><?php echo $translations['cityzmentures_intro_mobile'] ?></span>
    </div>


    <div class="introduction" id="introduction_CityZmentures">
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja col-10">
      <div class="introductionText">
        <p><b><span style="font-size: 50px;">CityZmentures</span></b> <?php 
                                                                      echo $translations["cityzmentures_intro"] ?></p>
      </div>
    </div>



    <div class="game">
      <div id="game_CityZmentures">
        <h1><?php 
            echo $translations['game'] ?></h1>
        <?php if (isset($_SESSION["username"])) : ?>
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


    <div class="speed_running_split" id="QnA_CityZmentures">
      <div class="QnA_split">
        <h1>Q&A</h1>
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

  <div id="leaderboard" class="leaderBoardSpeedRun">
    <h1>LEADERBOARD</h1>

    <div class="leaderboard_buttons">
      <form method="get" action="CityZmentures.php#leaderboard">
        <button type="submit" name="button20" class="leaderboard_button"> 20s</button>
        <button type="submit" name="button60" class="leaderboard_button">60s</button>
        <button type="submit" name="button120" class="leaderboard_button">120s</button>
      </form>

    </div>


    <div style="text-align: center;" class="board">
    <?php
    // Retrieve the current page number from the URL
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $commentsPerPage = 5;
    $offset = ($page - 1) * $commentsPerPage;

    // Calculate the starting player ranking for the current page
    $startingRank = ($page - 1) * $commentsPerPage + 1;

    // Determine which leaderboard type to fetch based on button clicks or default
    if (isset($_GET['button60'])) {
        $type = 3; 
    } elseif (isset($_GET['button120'])) {
        $type = 4; 
    } else {
        $type = 2; 
    }

   // Retrieve the current page number from the URL
   $currentPage = isset($_GET['page']) ? $_GET['page'] : 1;
   $commentsPerPage = 7;

   // Calculate the total number of pages
   $sqlCount = "SELECT COUNT(*) AS all_leaderboard FROM leaderboard WHERE type = ?";
   $params = array($type);
   $resultCount = sqlsrv_query($conn, $sqlCount, $params);
   $rowCount = sqlsrv_fetch_array($resultCount);
   $totalComments = $rowCount['all_leaderboard'];
   $totalPages = ceil($totalComments / $commentsPerPage);

   // Determine the range of pages to display
   $numPaginationLinks = 5;
   $startPage = max(min($currentPage - floor($numPaginationLinks / 2), $totalPages - $numPaginationLinks + 1), 1);
   $endPage = min($startPage + $numPaginationLinks - 1, $totalPages);

   // Fetch leaderboard entries for the current page
   $offset = ($currentPage - 1) * $commentsPerPage;
   $sql = "SELECT TOP ({$commentsPerPage}) *
           FROM (
               SELECT ROW_NUMBER() OVER (ORDER BY [score] DESC) AS RowNum, *
               FROM [dbo].[leaderboard]
               WHERE type = ?
           ) AS RowConstrainedResult
           WHERE RowNum > ?
           ORDER BY RowNum";
   $params = array($type, $offset);
   $result = sqlsrv_query($conn, $sql, $params);

   $startingRank = ($currentPage - 1) * $commentsPerPage + 1;
   while ($row = sqlsrv_fetch_array($result)) {
       echo '<div><span class="Leaderbord_result"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $startingRank . ". " . $row["user"] . '</a> (' . $row["date"]->format('d. m. Y')  . '):</span><br><span class="">' . $row["score"] . '</span></div><br><br>';
       $startingRank++;
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
        myEle.classList.add("answer-visible"); // Add the CSS class
      } else {
        myEle.style.display = "none";
        myEle.classList.remove("answer-visible"); // Remove the CSS class
      }
    }
  </script>

  <div class="achievementsMainBlock" id="dosezki_CityZmentures">
    <h1><?php 
        echo $translations['achivements'] ?></h1>
    <?php if (isset($_SESSION["username"])) : ?>
      <div class="achievements">
        <?php
        
        if ($_SESSION["achievements"][9] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">50</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["50"] . '</p></b>';
          echo '<p>' . $translations["50e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">50</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["50"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        
        if ($_SESSION["achievements"][10] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">200</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["200"] . '</p></b>';
          echo '<p>' . $translations["200e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">200</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["200"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        
        if ($_SESSION["achievements"][11] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">500</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["500"] . '</p></b>';
          echo '<p>' . $translations["500e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">500</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["500"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        

        if ($_SESSION["achievements"][12] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">1000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["1000"] . '</p></b>';
          echo '<p>' . $translations["1000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">1000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["1000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        

        if ($_SESSION["achievements"][13] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">5000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["5000"] . '</p></b>';
          echo '<p>' . $translations["5000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">5000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["5000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

        <?php
        
        if ($_SESSION["achievements"][14] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">10000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["10000"] . '</p></b>';
          echo '<p>' . $translations["10000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">10000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["10000"] . '</p></b>';
          echo '</div>';
          echo '</div>';
        }
        ?>

<?php
        
        if ($_SESSION["achievements"][15] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<p class="ach_num">25000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["25000"] . '</p></b>';
          echo '<p>' . $translations["25000e"] . '</p>';
          echo '</div>';
          echo '</div>';
        } else {
          echo "<div class='achievementsNotLoggedIn'>";
          echo '<p class="ach_num">25000</p>          ';
          echo '<div class="tooltip">';
          echo '<b><p>' . $translations["25000"] . '</p></b>';
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

 
  <div class="comments_DIV" id="comments_CityZmentures">
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
        var type = 3; // Set the type here, you can change it based on your requirement

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
    var initialType = 3; // Set the initial type here
    loadComments(initialType);
});
</script>
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
    $sql = "INSERT INTO comments ([user], comment, date, type) VALUES (?, ?, GETDATE(), 3)";

    // Prepare the statement
    $stmt = sqlsrv_prepare($conn, $sql, array(&$user, &$comment));

    if ($stmt) {
      if (sqlsrv_execute($stmt)) {
        echo "<meta http-equiv=Refresh content=2;url=/CityZmentures.php#comments_city>";
      } else {
        echo "Error executing statement: " . print_r(sqlsrv_errors(), true);
      }
    } else {
      echo "Error preparing statement: " . print_r(sqlsrv_errors(), true);
    }
  }
}



?>