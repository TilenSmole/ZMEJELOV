
class E0_pokerUvod extends Phaser.Scene {
  constructor() {
        super({
          key: 'E0_pokerUvod',
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

      }
      loadText(text_to_translate) {
        if (language === "en") {
          return this.cache.json.get('textEn')[text_to_translate];
        } else {
          return this.cache.json.get('textSlo')[text_to_translate];
        }
      }
    
  create() {

    this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 40, 'gumb').setInteractive();
    this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 40 , 'gumb').setInteractive();
    this.da.setScale(0.8)
    this.ne.setScale(0.8)

    gameState.clovk = this.physics.add.sprite(120,GAME_HEIGHT /3-50,"trgovec");
    gameState.clovk.setScale(.8)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: GAME_WIDTH -100,
        ease: 'Linear',
        duration: 5000,
        repeat: -1,
        flipX: true,
        yoyo: true,})


        this.add.text(GAME_WIDTH/2-80 -140,GAME_HEIGHT/2 +105, this.loadText("no") ,{ fontSize: '60px', fill: '#E950F4' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT/2+105, this.loadText("yes") ,{ fontSize: '60px', fill: '#E950F4' });


        this.da.on('pointerup', () => {
            KoordinateMestoX = 6500
            KoordinateMestoY = 1000
          this.scene.stop('E0_pokerUvod')
          this.scene.start('E0_poker')
          })
        this.ne.on('pointerup', () => {
            KoordinateMestoX = 5000
            KoordinateMestoY = 1000 
          this.scene.stop('E0_pokerUvod')
          this.scene.start('E0_mesto')
          })

  

          this.add.text(100, GAME_HEIGHT - 200, this.loadText("poker_intro"), {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
        });

  
    
    


    
  }
}