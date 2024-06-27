var GAME_HEIGHT = 800
const GAME_WIDTH = 1300
var cursors;
var isMute = false
var slo = true   //jeziki
var usa = false
var rus = false
var muska = 1 //da ne ponavla muske vsakic ko gres na main
var spawnFood = true
var score = 0
var currentTimer = 0
var delayTimer = 3000
var typeOfBc = [1,2,3,4,5,6,7]
var typeOfBcIndex = 0
var speedOfDrops = 300
var timeToPlay = 0
var countdown = false
var lastSwitch =  0 //how long has it been since last change of the scene
// GAME
var food = [];
var destoyers = [];
var allPlatforms = []
var star = false
var heart = false
var shield = false
var shieldIcon = ""
var multiplierIcon = ""
var hearts = []
var shields = []
var distanceHeart = 0
var heartsOnScreen = []
var startTime = 0
var multipliers = []
var multiplier = false
var startTimeMultiplayer = 0
var time = 0
var scoreMultiplier = 1 //how much multiplayer a player has 
let countdownEvent;
 
let startX = GAME_WIDTH / 2   //start x coordiante for zmeja
let startY =  GAME_HEIGHT - 200 //start y coordiante for zmeja
let type = 4 //which type of v2 we r playing
const gameState = {
   speed: -650, //650!!!!!!!!!!!!!!!
   
  };

//language
  var language = "slo"

  function getLanguage() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText); // Parse JSON response
          var languageOfApp = response.language;
          if (languageOfApp === "en") {
            language = "en"
          } 
        }
      }
    };
    // Send a request to getLanguage.php to retrieve the selected language
    xhr.open('GET', '/translations/getLanguage.php', true);
    xhr.send();
  }
  getLanguage()


//achivements

var H = false
var FH = false
var T = false
var tfT = false
var fT = false
var K = false
var tfK = false
var fK = false
var HK = false


const config = {
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "gameContainerSpeedRunning",
    type: Phaser.AUTO,
    height:  GAME_HEIGHT, 
    width: GAME_WIDTH ,  
    scene:[F2_inicial, F0_shared, F4_gamePlayStart,F3_explanation,F4_gamePlayStart2, F3_storyIntro, F2_time_intro,F5_konec],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        enableBody: true,
        debug: false
      }
    }
    
  };
var user = null

class getStuff {
    getPhpStuff() {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SERVER/getSessionData.php', true);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            var sessionData = JSON.parse(xhr.responseText);
          var username = sessionData.username;
          user = sessionData.username;
          const achievements = sessionData.achievements;
          resolve({ username, achievements, user }); // Resolve with username and lastLevel
          } else {
            // Handle error
            reject(new Error('Failed to retrieve username')); // Reject with an error
          }
        };
        xhr.onerror = function () {
          // Handle network errors
          reject(new Error('Network error')); // Reject with an error
        };
        xhr.send();
      });
    }
  }
  

const dataRetrieval = new getStuff();


  
  

dataRetrieval.getPhpStuff()
  .then(data => {
    username = data.username;
    achievements = data.achievements;
    /* console.log(username);
     console.log(lastLevel);
     console.log(difficulty);
     console.log(DATE);
     console.log(achievements);*/
    if (user !== undefined) {
      const game = new Phaser.Game(config);
    }
  })
  .catch(error => {
    console.error(error);
  });
