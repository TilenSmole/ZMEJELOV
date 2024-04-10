const GAME_HEIGHT = 800
const GAME_WIDTH = 1200
var cursors;
var isMute = false
var slo = true   //jeziki
var usa = false
var rus = false
var muska = 1 //da ne ponavla muske vsakic ko gres na main
var lastPoint = 1600
var borderLeft = 0
var generated = false
const visina = 3000
var heightPlatform = visina - 200 //kok visok je platforma, dinamicno spreminja
var userCoins = 0 //load!!!!!!
var inventory = []



var wisdom = false
var chests = []






function getLanguage() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              var response = JSON.parse(xhr.responseText); // Parse JSON response
              var language = response.language;
              if (language === "en") {
                slo = false;
                usa = true;
              } else {
                slo = true;
                usa = false;
              }
          } 
      }
  };
  // Send a request to getLanguage.php to retrieve the selected language
  xhr.open('GET', '/translations/getLanguage.php', true);
  xhr.send();
}
getLanguage()






const gameState = {
   speed: -650, //650!!!!!!!!!!!!!!!
  };



//achivements
var completedSpeedy = false
var completedGame = false
var dieDiverse = false
var stars = false
var dieALot = false
var quickDeath = false
var stZvezd = 0


const config = {
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "gameContainerSpeedRunning",
    type: Phaser.AUTO,
    height:  GAME_HEIGHT, 
    width: GAME_WIDTH ,  
    scene:[M2_inicial,M4_shop , M0_shared, M3_storyIntro, M4_gamePlayStart, M4_deathScreen, M5_konec],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 1000 },
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
