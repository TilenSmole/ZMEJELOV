<?php
include('translations/load_translations.php');

include("SERVER/database.php");
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
  <link rel="stylesheet" href="CSS/index.css">


  <meta charset="utf-8" />
  <title>Zmejelov</title>

  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="zmejelov_OG/scena2.js"></script>
  <script type="text/javascript" src="zmejelov_OG/scena1.js"></script>
  <script type="text/javascript" src="zmejelov_OG/uvod.js"></script>
  <script type="text/javascript" src="zmejelov_OG/scena6.js"></script>
  <script type="text/javascript" src="zmejelov_OG/scena3.js"></script>
  <script type="text/javascript" src="zmejelov_OG/scena4.js"></script>
  <script type="text/javascript" src="zmejelov_OG/scena5.js"></script>
  <script type="text/javascript" src="zmejelov_OG/konec.js"></script>
  <script type="text/javascript" src="zmejelov_OG/osnova.js"></script>

  <script type="text/javascript" src="zmejelov_OG/game.js"></script>

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

  <div class="introduction" id="introduction_OG">
    <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
    <div class="introductionText">
      <h1>ZMEJELOV 1869</h1>
      <p><b>ZMEJELOV 1869</b> <?php $translations = loadTranslations();
                              echo $translations["zmejelov_1960"] ?></p>
    </div>
  </div>
  </div>

  <div class="game">
    <div id="game_OG">
      <?php if (isset($_SESSION["username"])) : ?>
        <h1><?php $translations = loadTranslations();
            echo $translations["game"] ?></h1>
        <div id="gameContainer"></div>
      <?php else : ?>
        <div class="gameContainerError" class="col-10">
          <p><?php $translations = loadTranslations();
              echo $translations["please_login"] ?> </p>
        </div>
      <?php endif; ?>
    </div>
  </div>


  <div class="speed_running_split">
    <div class="QnA_split" class="col-10" id="QnA_OG">
      <h1>Q&N</h1>
      <div>
        <div class="QN_field">
          <div class="question_field">
            <p><?php $translations = loadTranslations();
                echo $translations['q1_OG'] ?></p>
          </div>
          <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a1b')">&#9660;</button></div>
        </div>
        <div id="a1s" style="display: none;">
          <p><?php $translations = loadTranslations();
              echo $translations['a1_OG'] ?></p>
        </div>
      </div>


      <div>
        <div class="QN_field">
          <div class="question_field">
            <p> <?php $translations = loadTranslations();
                echo $translations['q2_OG'] ?></p>
          </div>
          <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a2b')">&#9660;</button></div>
        </div>
        <div id="a2s" style="display: none;">
          <p><?php $translations = loadTranslations();
              echo $translations['a2_OG'] ?></p>
        </div>
      </div>

      <div>
        <div class="QN_field">
          <div class="question_field">
            <p> <?php $translations = loadTranslations();
                echo $translations['q3_OG'] ?></p>
          </div>
          <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a3b')">&#9660;</button></div>
        </div>
        <div id="a2s" style="display: none;">
          <p><?php $translations = loadTranslations();
              echo $translations['a3_OG'] ?></p>
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



  </div>



  <div class="speed_running_split">
    <div class="QnA_split" class="col-10" id="QnA_OG">
      <h1>Q&N</h1>
      <div>
        <div class="QN_field">
          <div class="question_field">
            <p><?php $translations = loadTranslations();
                echo $translations['q1_OG'] ?></p>
          </div>
          <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a1b')">&#9660;</button></div>
        </div>
        <div id="a1s" style="display: none;">
          <p><?php $translations = loadTranslations();
              echo $translations['a1_OG'] ?></p>
        </div>
      </div>


      <div>
        <div class="QN_field">
          <div class="question_field">
            <p> <?php $translations = loadTranslations();
                echo $translations['q2_OG'] ?></p>
          </div>
          <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a2b')">&#9660;</button></div>
        </div>
        <div id="a2s" style="display: none;">
          <p><?php $translations = loadTranslations();
              echo $translations['a2_OG'] ?></p>
        </div>
      </div>


      <div>
        <div class="QN_field">
          <div class="question_field">
            <p> <?php $translations = loadTranslations();
                echo $translations['q4_OG'] ?></p>
          </div>
          <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a4b')">&#9660;</button></div>
        </div>
        <div id="a2s" style="display: none;">
          <p><?php $translations = loadTranslations();
              echo $translations['a2_1960'] ?></p>
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



  </div>




  <div class="achievementsMainBlock" id="dosezki_OG">
    <h1><?php $translations = loadTranslations();
        echo $translations['achivements'] ?></h1>
    <?php if (isset($_SESSION["username"])) : ?>
      <?php
      if ($_SESSION["achievements"][12] === "1") {
        echo "<div class='oneAchievements'>";
        echo '<img src="assets\achivments\old.png"  alt="Achievement Picture 1">';
        echo  $translations = loadTranslations();
        $translations["aOG"];
        echo  $translations = loadTranslations();
        $translations["rOG"];
        echo '</div>';
      } else {
        echo  $translations = loadTranslations();
        $translations["aOG"];
      }
      ?>
  </div>
<?php else : ?>
  <div>
    <p><?php $translations = loadTranslations();
        echo $translations['please_login_achivements'] ?></p>
  </div>
<?php endif; ?>

</div>

<div class="comments_DIV" id="comments_OG">
  <?php if (isset($_SESSION["username"])) : ?>
    <h1><?php $translations = loadTranslations();
        echo $translations["KOMENTARJI"] ?></h1>
    <div>
      <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET" class="commentsForm">
        <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php $translations = loadTranslations();
                                                                                  echo $translations["write_comment"]; ?>"></textarea>
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



