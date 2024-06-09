
const GAME_HEIGHT = 740
const GAME_WIDTH = 1200
var cursors;
var pogoj = true //samo ta prvic izpise glinena vojska
var stSmrti = 0
var stZivljenj = 0


var zaprto = true;  //zapre vhod jame


// Languages
var usa = false;
var rus = false;
var slo = false;
var language = slo

function getLanguage() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText); // Parse JSON response
        var languageOfApp = response.language;
        console.log(languageOfApp)
        if (languageOfApp === "en") {
          slo = false;
          usa = true;
          language = "en"

          
        } else {
          slo = true;
          usa = false;
          language = "slo"
        }
      }
    }
  };
  // Send a request to getLanguage.php to retrieve the selected language
  xhr.open('GET', '/translations/getLanguage.php', true);
  xhr.send();
}
getLanguage()




var easy = true  //gamemode

var zmaga = true   //ce zmagamo skrvini nivo bo true

var trenutnaScena = "" //na kero sceno vrnt, ce odklene easter egg za smrt
var checkpoint = false
var pogojSmrtLevel = 25 //pogoj za aktivacijo easter egga 

var spawnP = false  //pogoj za spown point A8_plavanje 
var spawn6 = false  //pogoj za spown point lvl6 
var cheatZaHard = 1 //hard level, če opravi težk nivo dobi en spawn point, 1 brez aka default, 0 ali 2  nastavljen
//aka je aktiviru spawnpoint

var vrniNa = "" //pove na keri nivo naj vrne igralca, za free play
var vrniNaPogoj = false //ce gremo freeplay
var muska = 1 //da ne ponavla muske vsakic ko gres na main
var enkratt = 1 //ce je 1 je default, pomeni pa da odklenemo 2 easter egg na 4 nivoju
var smrtEnkrattt = 0 //da se ob 50 smrti ne bo se kr en ester egg


var vrstaTeksta = "" //vrze na en page, da bo zgodba bolj pregledna
var vrsta_smrt = false //ce umre
var stSmrtiPrVojski = 0

var isMute = false //mute/unmute

//SPAWN 6 FALSE ZMAGA FALSE

var KoordinateMestoX = 9700
var KoordinateMestoY = 1100

var leva = 8
var vrstaLeva = 0

var poker = false
var bar = false
var pokerZmaga = false
var mestoOpravljeno = false
var E_iger = 0 //st iger v expansion packu ki jih je igralec opravil

var mestoGameMode = false


if (easy == true) {
  var zaprto = true
  var checkpoint = true

}


var username = ""


if (zmaga == true) {
  var checkpoint = true
}




const gameState = {
  speed: 240,
  ups: 380,
  width: 2000,
  height: 600,
};
const zivali = {
  speed: 1,
  ups: 20,
  width: 20,
  height: 20,
};
const config = {
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "gameContainer",
  type: Phaser.AUTO,
  height: GAME_HEIGHT,
  width: GAME_WIDTH,
  scene: [A0_zacetniZaslon, A0_loadSave, A0_intro, vrsta, E0_mesto, E0_uvod, E1_swamp, A9_skrinja_konec, A9_skrinja_uvod, E12_skakanjeUvod, E0_mestoKonec, A9_skrinja, E12_Swamp_goraUvod, E12_goraKonec, E0_barKonec, E0_barUvod, E0_barRazlaga, E0_pokerUvod, E0_poker, E12_swampSkakanje, E0_poker1, E0_poker2, E0_bar, E0_poker3, E0_poker4, E12_SWAMP_PORAZ, film, A0_vsi_nivoji, A0_vsi_nivoji2, A0_uvod, A0_tezavnost, A7_droperTroll, A0_osnova, AS_jama, AS_skrivni, AS_jamaKonec, A1_scena1, A2_scena2, A3_scena3, A4_scena4, A5_scena5, A6_scena6, A7_droperUvod, A7_droper, smrt, A8_plavanje, A9_cilj, A10_outro, A10_konec],
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
          var username = sessionData.username;
          user = sessionData.username;
          var lastLevel = sessionData.lastLevel;
          var difficulty = sessionData.difficulty;
          const DATE = sessionData.DATE;
          const achievements = sessionData.achievements;
          console.log('difficulty  v game' + difficulty );
          resolve({ username, lastLevel, difficulty, DATE, achievements, user }); // Resolve with username and lastLevel
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
var difficulty = "00000";
var achievements = "0000000";
var DATE = "";
const dataRetrieval = new getStuff();

//achievements
hardMode = false
secret = false
deaths = false
easyMode = false
city = false
ruins = false


dataRetrieval.getPhpStuff()
  .then(data => {
    username = data.username;
    lastLevel = data.lastLevel;
    difficulty = data.difficulty;
    achievements = data.achievements;
    DATE = data.DATE;
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



