class E0_mestoKonec extends A0_osnova {
	constructor() {
    super("E0_mestoKonec");
       /* super({
          key: 'E0_mestoKonec',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 0 }
            }
          }
        });*/}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.atlas("trgovec", "assets/mesto/zivali/trgovec/trgovec.png", "assets/mesto/zivali/trgovec/trgovec_atlas.json")

	   }
 create() {
  if (!city){
    this.showPopupAchievements("POMAGAJ LJUDEM V MESTU")

    this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
    this.titleMusic.play(); 
    city = true;
  this.updateAchievements();
  const dataAchievements = {
    achievements: achievements,
    };
  this.updateDataBaseAchivements(dataAchievements)
  }

  mestoOpravljeno = true


    gameState.clovk = this.physics.add.sprite(120,GAME_HEIGHT /3,"trgovec");
    gameState.clovk.body.allowGravity = false;
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: GAME_WIDTH -100,
        ease: 'Linear',
        duration: 5000,
        repeat: -1,
        flipX: true,
        yoyo: true,})



    if(!mestoGameMode)  {
      this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 100, 'gumb').setInteractive();
      this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 100 , 'gumb').setInteractive();
      this.da.setScale(0.8)
      this.ne.setScale(0.8)


          

          this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, this.loadText("town"),{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
          this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 120, this.loadText("level"),{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });


          
          this.da.on('pointerup', () => {
              KoordinateMestoX = 8800
              KoordinateMestoY = 1000
            this.scene.stop('E12_goraKonec')
            this.scene.start('A6_scena6')
            })
          this.ne.on('pointerup', () => {
              KoordinateMestoX = 8200
              KoordinateMestoY = 1000 
            this.scene.stop('E12_goraKonec')
            this.scene.start('E0_mesto')
            })
  
  
      this.add.text(100, GAME_HEIGHT - 200, this.loadText("ctiy_win"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
    });



    }
    else{
      this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 100 , 'gumb').setInteractive();
      this.ne.setScale(0.8)

      this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, this.loadText("town"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
    });


   
          
          this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, this.loadText("home"),{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });


          this.ne.on('pointerup', () => {
              KoordinateMestoX = 8200
              KoordinateMestoY = 1000 
            this.scene.stop('E12_goraKonec')
            this.scene.start('A0_zacetniZaslon')
            })
  


            this.add.text(100, GAME_HEIGHT - 200, this.loadText("ctiy_win2"), {
              fontSize: '40px',
              fill: '#A996BC',
              fontFamily: 'CustomFont',
              wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
          });

    

    }
    

        

  
    
    


    
  }
}