const GAME_HEIGHT = 800
const GAME_WIDTH = 1400
var cursors;
var isMute = false
var slo = true   //jeziki
var usa = false
var rus = false
var muska = 1 //da ne ponavla muske vsakic ko gres na main
var enkratt = 1 //ce je 1 je default, pomeni pa da odklenemo 2 easter egg na 4 nivoju
var stSmrti = 0
var deathVarient = ""

// Languages
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



const gameState = {
   speed: -650, //650!!!!!!!!!!!!!!!
   
  };
  const zivali = {
    speed: 1,
   ups: 20,
   width: 20,
   height: 20,
  };

gameState.stars = []
var disableReturnBack = false //player cant take the easy way out 
var stopChecking = false //so it doesnt dispplay every second if disableReturnBack
var hotdogShow = true //shows a hotdog
var canWin = false //if the player touches spaceship does he win

var finalTime = ""
var deathByWho = [0,0,0,0,0] //ground, volture, alien, spaceship1, quick spaceship


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
    scene:[S2_inicial, S0_shared, S3_storyIntro, S4_gamePlayStart, S4_deathScreen,S5_konec],
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
