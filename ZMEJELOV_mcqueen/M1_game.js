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
var userCoins = 0
var inventory = []
var wisdom = false
var chests = []
var coinsNewGame = 0
var score = 0
var didntCheat = true
var storage = {}
var rainbowUnlocked = false
var buy   = false
var rainbow = false
var noCheat = false
var saveResOnce = false

var shieldAbility = false
var ghostAbility= false
var shroomAbility= false
var potionAbility = false
var rocketAbility= false
var spaceshipAbility = false


var shieldStart = false
var ghostStart = false
var shroomStart = false
var potionStart = false
var rocketStart = false
var spaceshipStart = false

var shield = false
var ghost = false
var shroom = false
var heart = false
var spaceShip = false
var speedShip = false




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






const config = {
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "gameContainerSpeedRunning",
  type: Phaser.AUTO,
  height: GAME_HEIGHT,
  width: GAME_WIDTH,
  scene: [M2_inicial, M4_shop, M0_shared, M3_storyIntro, M4_red, M4_deathScreen, M5_konec],
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
          var username = sessionData.username;
          user = sessionData.username;
          const achievements = sessionData.achievements;
          var userCoins = sessionData.money;
          resolve({ username, achievements, user, userCoins }); // Resolve with username and lastLevel
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

var user = null
var achievements = "";
const dataRetrieval = new getStuff();
var money = false
var noPops = false
var rainbow = false
var tenK = false




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

  
