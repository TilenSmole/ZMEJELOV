  <?php
  if (session_status() === PHP_SESSION_NONE)
    session_start();
    include(__DIR__ . '/../translations/load_translations.php');
    
  //https://www.w3schools.com/howto/howto_js_sidenav.asp
  ?>
  <!DOCTYPE html>
  <html>

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="/CSS/index.css">
  <link rel="stylesheet" href="/CSS/common.css">

    <style>
      .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 50px;

      }

      .sidenav a {
        padding: 0px 8px 8px 32px;
        text-decoration: none;
        color: #818181;
        display: block;
        transition: 0.3s;
        font-size: 25px;

      }

      .sidenav a:hover {
        color: #4d1451;
        transition: 0.65s;


      }

      .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }


      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: left;
      }



      .has-subnav .subnav {
        display: none;
      }

      @media only screen and (min-height: 500px) {}

      .has-subnav:hover .subnav {
        display: block;
      }

      .subnav>li>a {
        font-size: 15px;
      }

      .bottom-element {
        position: absolute;
        bottom: 10%;
      }

      #title {
        color: #4d1451;
        font-size: 50px;
        padding: 0;
        margin: 10px 0 0px 10px;
      }

      #container {
        position: relative;
        /* Create a positioning context for its children */

      }

      #meniIcon {
        position: fixed;
        margin: 0px 0 0px 10px;
      }

      #meni {
        position: absolute;
        left: 40px;
        top: 6px
      }

      #language_selection {
        margin-left: 30px;
      }

      .button_language {
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border: none;
        background-color: inherit;
      }
    </style>
  </head>

  <body>
    <script src="/translations/getLanguage.js"></script>

    <p id="title"><a href="/" onclick="closeNav()">ZMEJELOV</a></p>
    <div id="mySidenav" class="sidenav">
      <div id="gamePlayStuff">
        <ul>
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

          <li class="has-subnav"><a href="/" id="mainPageReturn" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['home']; ?></a>
            <ul class="subnav">
              <li><a href="/" onclick="closeNav()"><?php $translations = loadTranslations(); echo $translations['intro']; ?></a></li>
              <li><a href="/#videos" onclick="closeNav()"><?php echo $translations = loadTranslations();  $translations['video_library']; ?></a></li>
              <li><a href="/#about_proyect" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['about']; ?></a></li>
            </ul>
          </li>
          <li class="has-subnav"><a href="/zmentures" onclick="closeNav()">ZMENTURES</a>
            <ul class="subnav">
              <li><a href="/zmentures#introduction" onclick="closeNav()"><?php  $translations = loadTranslations();  echo $translations['about_the_game']; ?></a></li>
              <li><a href="/zmentures#game_OG" onclick="closeNav()"><?php  $translations = loadTranslations();  echo $translations['game']; ?></a></li>
              <li><a href="/zmentures#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/zmentures#comments_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['KOMENTARJI']; ?></a></li>
              <li><a href="/zmentures#dosezki_OG" onclick="closeNav()"><?php  $translations = loadTranslations();  echo $translations['achivements']; ?></a></li>
            </ul>
          </li>
          <li class="has-subnav"><a href="/Cra*kelov" onclick="closeNav()">CRA*KELOV</a>
            <ul class="subnav">
              <li><a href="/Zmejelov_1869#introduction_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['about_the_game']; ?></a></li>
              <li><a href="/Zmejelov_1869#game_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['game']; ?></a></li>
              <li><a href="/Zmejelov_1869#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/Zmejelov_1869#comments_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['KOMENTARJI']; ?></a></li>
              <li><a href="/Zmejelov_1869#dosezki_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['achivements']; ?></a></li>
            </ul>
          </li>
          <li class="has-subnav"><a href="/TheFinalRage" onclick="closeNav()">THE FINAL RAGE </a>
            <ul class="subnav">
              <li><a href="/Zmejelov_1869#introduction_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['about_the_game']; ?></a></li>
              <li><a href="/Zmejelov_1869#game_OG" onclick="closeNav()"><?php echo $translations['game']; ?></a></li>
              <li><a href="/Zmejelov_1869#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/Zmejelov_1869#comments_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['KOMENTARJI']; ?></a></li>
              <li><a href="/Zmejelov_1869#dosezki_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['achivements']; ?></a></li>
            </ul>
          </li>
          <li class="has-subnav"><a href="/CityZmentures" onclick="closeNav()">CITY ZMENTURES</a>
            <ul class="subnav">
              <li><a href="/Zmejelov_1869#introduction_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['about_the_game']; ?></a></li>
              <li><a href="/Zmejelov_1869#game_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['game']; ?></a></li>
              <li><a href="/Zmejelov_1869#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/Zmejelov_1869#comments_OG" onclick="closeNav()"><?php  $translations = loadTranslations();  echo $translations['KOMENTARJI']; ?></a></li>
              <li><a href="/Zmejelov_1869#dosezki_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['achivements']; ?></a></li>
            </ul>
          </li>
          <li class="has-subnav"><a href="/Zmejelov_1869" onclick="closeNav()">ZMEJELOV 1869 </a>
            <ul class="subnav">
              <li><a href="/Zmejelov_1869#introduction_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['about_the_game']; ?></a></li>
              <li><a href="/Zmejelov_1869#game_OG" onclick="closeNav()"><?php $translations = loadTranslations(); echo $translations['game']; ?></a></li>
              <li><a href="/Zmejelov_1869#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/Zmejelov_1869#comments_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['KOMENTARJI']; ?></a></li>
              <li><a href="/Zmejelov_1869#dosezki_OG" onclick="closeNav()"><?php $translations = loadTranslations();  echo $translations['achivements']; ?></a></li>
            </ul>
          </li>

          <div class="bottom-element">
            <div id="language_selection">
              <button class="button_language" id="english_button" onclick="setLanguage('en') ">🇺🇸</button>
              <button class="button_language" id="slovenian_button" onclick="setLanguage('slo')">🇸🇮</button>
            </div>



            <?php if (empty($_SESSION["username"])) : ?>
              <li> <a href="/login" onclick="closeNav()"><?php  $translations = loadTranslations(); echo $translations['login']; ?></a></li>
            <?php else : ?>
              <li><a href="/user.php"><?php echo $_SESSION["username"]; ?></a><a href="/SERVER/logout.php"><?php $translations = loadTranslations(); echo $translations['logout']; ?></a></li>
            <?php endif; ?>
            <li><a href="/#about_proyect" id="logo">Zmejelov © 2024</a></li>
          </div>
        </ul>
      </div>
    </div>

    <script>
      function setLanguage(language) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              console.log('Language set successfully' + language);
              // Call getLanguage to update the buttons after setting the language
              getLanguage();
              window.location.reload();
            } else {
              console.error('Error setting language:', xhr.status);
            }
          }
        };
        // Send a request to set_language.php with the desired language as a parameter
        xhr.open('GET', '/translations/language.php?language=' + language, true);
        xhr.send();
      }




      getLanguage(function(language) {
        if (language === "en") {
          document.getElementById("english_button").style.display = "none";
          document.getElementById("slovenian_button").style.display = "block";
        } else {
          document.getElementById("english_button").style.display = "block";
          document.getElementById("slovenian_button").style.display = "none";
        }
      });
    </script>




    <div id="container">
      <span style="font-size:30px;cursor:pointer; color:#4d1451" onclick="openNav()">
        <span id="meniIcon">&#9776;</span>
        <span id="meni">MENU</span>
      </span>
    </div>

    <script>
      function openNav() {
        document.getElementById("mySidenav").style.width = "25%";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    </script>

  </body>

  </html>