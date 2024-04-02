
const GAME_HEIGHT = 740
const GAME_WIDTH = 1200
var cursors;
var completed = false
const gameState = {
  speed: 240,
 ups: 380,
 width: 2000,
 height: 600,
};
// uvodna scena math-random za fun
const config = {
  scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
},
parent: "gameContainer",
  type: Phaser.AUTO,
  height:  GAME_HEIGHT, 
  width: GAME_WIDTH ,  
  scene:[uvod,scena1,scena2,scena3,scena4,scena5,scena6,konec,osnova],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      enableBody: true,
      debug: false
    }
  }
  
};

var user = ""
class getStuff {
  getPhpStuff() {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/SERVER/getSessionData.php', true);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var sessionData = JSON.parse(xhr.responseText);
          user = sessionData.username;
          const achievements = sessionData.achievements;
          console.log(user)
          resolve({achievements, user });
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


var achievements = "";
const dataRetrieval = new getStuff();
dataRetrieval.getPhpStuff()
.then(data => {
  achievements = data.achievements;   
  if(user){
    const game = new Phaser.Game(config)
  }
    
})
.catch(error => {
  console.error(error);
});



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





