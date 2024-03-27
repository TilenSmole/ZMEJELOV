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
    scene:[F2_inicial, F0_shared, F3_storyIntro, F4_gamePlayStart,F5_konec],
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
