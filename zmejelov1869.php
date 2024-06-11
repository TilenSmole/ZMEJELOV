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
  <link rel="stylesheet" href="/CSS/index.css">
  <link rel="stylesheet" href="/CSS/common.css">
  <link rel="stylesheet" href="/CSS/common.css">


  <meta charset="utf-8" />
  <title>ZMEJELOV 1869</title>
  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/osnova.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/scena2.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/scena1.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/uvod.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/scena6.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/scena3.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/scena4.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/scena5.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/konec.js"></script>
  <script type="text/javascript" src="ZMEJELOV_OG/game.js"></script>
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
        <p><b><span style="font-size: 50px;"> ZMEJELOV 1869</span></b> <?php
                                                                        echo $translations["1869_intro"] ?></p>
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
      <div class="QnA_split" class="col-10" id="QnA_OG">
        <h1>Q&N</h1>
        <div>
          <div class="QN_field">
            <div class="question_field">
              <p><?php
                  echo $translations['q1_1960'] ?> <span class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibilityZmentures('a1b','a1bDiv')">&#9660;</button></span>
              </p>
            </div>
          </div>
          <div id="a1bDiv">
            <p id="a1b" style="display: none; "><?php
                                                echo $translations['a1_1960'] ?></p>
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


    <div class="achievementsMainBlock" id="dosezki_OG">
      <h1><?php
          echo $translations['achivements'] ?></h1>
      <?php if (isset($_SESSION["username"])) : ?>
        <div class="achievements">
          <?php
          if ($_SESSION["achievements"][16] === "1") {
            echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\old.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["aOG"] . '</p></b>';
            echo '<p>' . $translations["rOG"] . '</p>';
            echo '</div>';
            echo '</div>';
          } else {
            echo "<div class='achievementsNotLoggedIn'>";
            echo '<img src="assets\achivments\old.png"  alt="Achievement Picture 1">';
            echo '<div class="tooltip">';
            echo '<b><p>' . $translations["aOG"] . '</p></b>';
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
            <form action="zmejelov1869.php" method="GET" class="commentsForm">
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
          <p class="commentsFormErrorText">za komentiranje se prijavi</p>
        </div>
      <?php endif; ?>
      <?php
      // Define the number of comments per page
      $commentsPerPage = 6;
      // Query to count total number of comments
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type = 2";
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
    WHERE type = 2
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
      $totalCommentsQuery = "SELECT COUNT(*) AS total FROM comments WHERE type=2";
      $totalCommentsResult = sqlsrv_query($conn, $totalCommentsQuery);
      $totalCommentsRow = sqlsrv_fetch_array($totalCommentsResult);
      $totalComments = $totalCommentsRow['total'];


      if ($totalComments != 0) {
        // Calculate total number of pages
        $totalPages = ceil($totalComments / $commentsPerPage);

        // Display pagination links
        echo '<div class="pagination-container">';
        echo '<div class="pagination">';
        for ($i = 1; $i <= $totalPages; $i++) {
          // Add onclick event to each pagination link to scroll to the comment section
          echo '<a href="zmejelov1869.php?page=' . $i . '#comments_OG">' . $i . "&nbsp;   "  . '</a>';
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
    if (strlen($comment) > 0) {
      // Prepare the SQL statement with placeholders
      $sql = "INSERT INTO comments ([user], comment, date, type) VALUES (?, ?, GETDATE(), 2)";

      // Prepare the statement
      $stmt = sqlsrv_prepare($conn, $sql, array(&$user, &$comment));

      if ($stmt) {
        if (sqlsrv_execute($stmt)) {
          echo "<meta http-equiv=Refresh content=2;url=/zmejelov1869.php#comments_OG>";
        } else {
          echo "Error executing statement: " . print_r(sqlsrv_errors(), true);
        }
      } else {
        echo "Error preparing statement: " . print_r(sqlsrv_errors(), true);
      }
    }


    echo "<meta http-equiv=Refresh content=2;url=/zmejelov1869.php#comments_OG>";
  }
}



?>