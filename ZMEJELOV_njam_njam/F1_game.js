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
var delayTimer = 2500
var typeOfBc = [1,2,3,4,5,6,7]
var typeOfBcIndex = 0
var speedOfDrops = 300
var timeToPlay = 0
var countdown = false

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
          console.log(languageOfApp)
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
    scene:[F2_inicial, F0_shared, F3_storyIntro, F4_gamePlayStart,F5_konec, F2_time_intro],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        enableBody: true,
        debug: false
      }
    }
    
  };

class getStuff {
    getPhpStuff() {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SERVER/getSessionData.php', true);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            var sessionData = JSON.parse(xhr.responseText);
            const achievements = sessionData.achievements;
            console.log(achievements)
            resolve({achievements });
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
  
var lastLevel = "";
var dificulty = "";
var achievements = "";
var DATE = "";
const dataRetrieval = new getStuff();


  
  
dataRetrieval.getPhpStuff()
  .then(data => {
    achievements = data.achievements;   
  })
  .catch(error => {
    console.error(error);
});



  const game = new Phaser.Game(config)
