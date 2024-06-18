class A0_loadSave extends Phaser.Scene {
  constructor() {
    super({ key: 'A0_loadSave' });
  }
  preload() {
    this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
    this.load.image("gumb", "assets/uvod/gumb.png")
    this.load.image("zmeja", "assets/uvod/zmeja.png")
    this.load.image("zmentures", "assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png")
    this.load.image("rage", "assets/uvod/rage.png")
    this.load.image("basic", "assets/uvod/basic.png")
    this.load.image("usa", "assets/uvod/United_States.jpg")
    this.load.image("rus", "assets/uvod/Russia.jpg")
    this.load.image("slo", "assets/uvod/Slovenia.jpg")
    this.load.image("gumb2", "assets/uvod/gumbVeliki.png")
    this.load.image("mute", "assets/uvod/mute.png")
    this.load.image("unmute", "assets/uvod/umute.png")
    this.load.json('textSlo', 'translations/translationsSLO_js.json');
    this.load.json('textEn', 'translations/translationsEN_js.json');
  }

  loadText(text_to_translate) {
    if (language === "en") {
      return this.cache.json.get('textEn')["en"][text_to_translate];

    } else {
      return this.cache.json.get('textSlo')["slo"][text_to_translate];

    }
  }


  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    this.add.text(30, 100, this.loadText("last_version") + " " + lastLevel + " " + this.loadText("last_version_date") + " " + DATE, {
      fontSize: '60px',
      fill: '#E950F4',
      wordWrap: { width: 1150, useAdvancedWrap: true }
    });




    this.no = this.add.sprite(GAME_WIDTH / 2 - 200, GAME_HEIGHT / 2 + 130, 'gumb').setInteractive();

    this.yes = this.add.sprite(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2 + 130, 'gumb').setInteractive();



    this.add.text(GAME_WIDTH / 2 - 80 - 170, GAME_HEIGHT / 2 + 105, this.loadText("no"), { fontSize: '60px', fill: '#E950F4' });
    this.add.text(GAME_WIDTH / 2 + 170, GAME_HEIGHT / 2 + 105, this.loadText("yes"), { fontSize: '60px', fill: '#E950F4' });






    this.no.on('pointerup', () => {
      this.scene.stop('A0_zacetniZaslon ')
      this.scene.start('A0_tezavnost')
    })

    this.yes.on('pointerup', () => {
      this.scene.stop('A0_zacetniZaslon ')
      var difficultySplit = difficulty;
      const difficultyPrevious = difficultySplit.substring(0, 1);
      const secretLevelCompletedPrevious = difficultySplit.substring(1, 2);
      const checkPoints = difficultySplit.substring(2, 3);
      const secretAtempt = difficultySplit.substring(3, 4);



      if (difficultyPrevious == "0") {
        easy = true;
       
      }
      else {
        easy = false;

        if (secretLevelCompletedPrevious == "1") {
          zmaga = true;
        }
        else {
          zmaga = false;
        }

        if (secretAtempt == "1") {
          zaprto = true;
        }
        else {
          zaprto = false;
        }

      }


      if (checkPoints == "1") {
        spawn6 = true;
        spawnP = false;
      }
      else if (checkPoints == "2") {
        spawn6 = true;
        spawnP = true;

      }
      else {
        spawnP = false;
        spawn6 = false;
      }


      this.scene.start(lastLevel)
    })














  }
}