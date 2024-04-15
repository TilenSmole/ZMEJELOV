class E12_Swamp_goraUvod extends Phaser.Scene {
  constructor() {
    super({
      key: 'E12_Swamp_goraUvod',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    });
  }
  preload() {
    this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
    this.load.image("gumb", "assets/uvod/gumb.png")
    this.load.image("zmeja", "assets/uvod/zmeja.png")
    this.load.atlas("trgovec", "assets/mesto/zivali/trgovec/trgovec.png", "assets/mesto/zivali/trgovec/trgovec_atlas.json")
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

    this.da = this.add.sprite(GAME_WIDTH / 2 + 100, GAME_HEIGHT - 60, 'gumb').setInteractive();
    this.ne = this.add.sprite(GAME_WIDTH / 2 - 100, GAME_HEIGHT - 60, 'gumb').setInteractive();
    this.da.setScale(0.8)
    this.ne.setScale(0.8)

    gameState.clovk = this.physics.add.sprite(120, GAME_HEIGHT / 3, "trgovec");
    gameState.clovk.move = this.tweens.add({
      targets: gameState.clovk,
      x: GAME_WIDTH - 100,
      ease: 'Linear',
      duration: 5000,
      repeat: -1,
      flipX: true,
      yoyo: true,
    })

    this.add.text(GAME_WIDTH / 2 - 80 - 170, GAME_HEIGHT / 2 + 105, this.loadText("no"), { fontSize: '60px', fill: '#E950F4' });
    this.add.text(GAME_WIDTH / 2 + 170, GAME_HEIGHT / 2 + 105, this.loadText("yes"), { fontSize: '60px', fill: '#E950F4' });


    this.da.on('pointerup', () => {
      KoordinateMestoX = 250
      KoordinateMestoY = 1000
      this.scene.stop('E12_Swamp_goraUvod')
      this.scene.start('E12_swampSkakanje')
    })
    this.ne.on('pointerup', () => {
      KoordinateMestoX = 250
      KoordinateMestoY = 1000
      this.scene.stop('E12_Swamp_goraUvod')
      this.scene.start('E0_mesto')
    })



    this.add.text(100, GAME_HEIGHT - 200, this.loadText("mountain_intro"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
    });









  }
}