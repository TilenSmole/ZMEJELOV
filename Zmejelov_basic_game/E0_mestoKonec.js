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
        this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
        this.load.audio('poraz', ['assets/uvod/smrt.mp3', "assets/uvod/smrt.ogg"]);
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);
	   }
 create() {
  if (!city){
    this.showPopupAchievements( this.loadText("ach_city"))

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
  this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");


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
      this.da = this.add.sprite(GAME_WIDTH / 2 + 100, GAME_HEIGHT - 80, 'gumb').setInteractive();
      this.ne = this.add.sprite(GAME_WIDTH / 2 - 100, GAME_HEIGHT - 80, 'gumb').setInteractive();
      this.da.setScale(0.8)
      this.ne.setScale(0.8)

          

      this.add.text(GAME_WIDTH / 2 - 150, GAME_HEIGHT - 100, this.loadText("town"), { fontSize: '40px', fill: '#E950F4' });


      this.add.text(GAME_WIDTH / 2 + 50, GAME_HEIGHT - 100, this.loadText("level"), { fontSize: '40px', fill: '#E950F4' });


          
          this.da.on('pointerup', () => {
              KoordinateMestoX = 8800
              KoordinateMestoY = 1000
            this.scene.stop('E0_mestoKonec')
            this.scene.start('A6_scena6')
            })
          this.ne.on('pointerup', () => {
              KoordinateMestoX = 8200
              KoordinateMestoY = 1000 
            this.scene.stop('E12_goraKonec')
            this.scene.start('E0_mesto')
            })
  
  

    
    this.add.text(50, GAME_HEIGHT - 400, this.loadText("ctiy_win2"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 50, useAdvancedWrap: true }
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
            this.scene.stop('E0_mestoKonec')
            this.scene.start('A0_zacetniZaslon')
            })
  


            this.add.text(100, GAME_HEIGHT - 200, this.loadText("ctiy_win"), {
              fontSize: '40px',
              fill: '#A996BC',
              fontFamily: 'CustomFont',
              wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
          });

    

    }
    

        

  
    
    


    
  }
}