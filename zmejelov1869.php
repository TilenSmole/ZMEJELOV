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

    <div class="mobileContainer">
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmejaMobile">
      <span class="mobile"><?php echo $translations['1869_intro_mobile'] ?></span>

    </div>

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

    <div class="game_mobile">
      <span><?php echo $translations['mobile_too_small2'] ?></span>
    </div>


    <div class="split">
      <div class="QnA_full" class="col-10" id="QnA_OG">
        <h1>Q&A</h1>
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
        var type = 2; // Set the type here, you can change it based on your requirement

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
    var initialType = 2; // Set the initial type here
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