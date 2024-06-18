class E0_barUvod extends Phaser.Scene {
	constructor() {
        super({
          key: 'E0_barUvod',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 0 }
            }
          }
        });}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
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
  this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 80, 'gumb').setInteractive();
    this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 80 , 'gumb').setInteractive();
    this.da.setScale(0.8)
    this.ne.setScale(0.8)

    gameState.clovk = this.physics.add.sprite(120,GAME_HEIGHT /3,"trgovec");
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: GAME_WIDTH -100,
        ease: 'Linear',
        duration: 5000,
        repeat: -1,
        flipX: true,
        yoyo: true,})


 
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 100, this.loadText("no") ,{ fontSize: '60px', fill: '#E950F4' });
    
  
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 100, this.loadText("yes") ,{ fontSize: '60px', fill: '#E950F4' });





        
        this.da.on('pointerup', () => {
            KoordinateMestoX = 8800
            KoordinateMestoY = 1000
          this.scene.stop('E0_barUvod')
          this.scene.start('E0_barRazlaga')
          })
        this.ne.on('pointerup', () => {
            KoordinateMestoX = 8200
            KoordinateMestoY = 1000 
          this.scene.stop('E0_barUvod')
          this.scene.start('E0_mesto')
          })



   

        
this.add.text(50, GAME_HEIGHT - 400, this.loadText("bar_intro_story"), {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 50, useAdvancedWrap: true }
        });
  
    
    


    
  }
}