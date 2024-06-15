<?php
include("SERVER/database.php");
include('translations/load_translations.php');
if (session_status() === PHP_SESSION_NONE)
  session_start();

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


    <div class="introduction" id="introduction_CityZmentures">
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja col-10">
      <div class="introductionText">
        <p><b><span style="font-size: 50px;">CityZmentures</span></b> <?php $translations = loadTranslations();
                                                                      echo $translations["cityzmentures_intro"] ?></p>
      </div>
    </div>



    <div class="game">
      <div id="game_CityZmentures">
        <h1><?php $translations = loadTranslations();
            echo $translations['game'] ?></h1>
        <?php if (isset($_SESSION["username"])) : ?>
          <div id="gameContainerSpeedRunning"></div>
        <?php else : ?>
          <div class="gameContainerError" class="col-10">
            <p><?php $translations = loadTranslations();
                echo $translations['please_login'] ?> </p>
          </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="speed_running_split" id="QnA_CityZmentures">
      <div class="QnA_split">
        <h1>Q&A</h1>
        <div>
          <div class=" QN_field">
        <div class="question_field">
          <p><?php $translations = loadTranslations();
              echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a1b','a1bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a1bDiv">
        <p id="a1b" style="display: none; "><?php $translations = loadTranslations();
                                            echo $translations['a1_OG'] ?></p>
      </div>
    </div>


    <div>
      <div class="QN_field">
        <div class="question_field">
          <p> <?php $translations = loadTranslations();
              echo $translations['q2_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a2b','a2bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a2bDiv">
        <p id="a2b" style="display: none;"><?php $translations = loadTranslations();
                                            echo $translations['a2_OG'] ?></p>
      </div>
    </div>

    <div>
      <div class="QN_field">
        <div class="question_field">
          <p> <?php $translations = loadTranslations();
              echo $translations['q3_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a3b','a3bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a3bDiv">
        <p id="a3b" style="display: none;"><?php $translations = loadTranslations();
                                            echo $translations['a3_OG'] ?></p>
      </div>
    </div>

    <div>
      <div class="QN_field">
        <div class="question_field">
          <p> <?php $translations = loadTranslations();
              echo $translations['q4_OG'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a4b','a4bDiv')">&#9660;</button></span>
          </p>
        </div>
      </div>
      <div id="a4bDiv">
        <p id="a4b" style="display: none;"><?php $translations = loadTranslations();
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
        $type = 2; // Assuming button60 corresponds to type 2 leaderboard
    } elseif (isset($_GET['button120'])) {
        $type = 3; // Assuming button120 corresponds to type 3 leaderboard
    } else {
        $type = 1; // Default to type 1 leaderboard
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
    <h1><?php $translations = loadTranslations();
        echo $translations['achivements'] ?></h1>
    <?php if (isset($_SESSION["username"])) : ?>
      <div class="achievements">
        <?php
        $translations = loadTranslations();
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
        $translations = loadTranslations();
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
        $translations = loadTranslations();
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
        $translations = loadTranslations();

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
        $translations = loadTranslations();

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
        $translations = loadTranslations();
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
        $translations = loadTranslations();
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
        <p><?php $translations = loadTranslations();
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
            <form action="CityZmentures.php" method="GET" class="commentsForm">
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
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type = 3";
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
    WHERE type = 3
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
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type=3";
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
          echo '<a href="CityZmentures.php?page=' . ($page- 1) . '#comments_OG"><&#160 &#160</a> ';
        }

        // Pagination links
        for ($i = $startPage; $i <= $endPage; $i++) {
          echo '<a href="CityZmentures.php?page=' . $i . '#comments_OG"' . ($i == $page? ' class="active"' : '') . '>' . $i . "&nbsp;   "  . '</a>';
        }

        // Next page link
        if ($page < $totalPages) {
          echo '<a href="CityZmentures.php?page=' . ($page+ 1) . '#comments_OG">&#160 &#160></a>';
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