class F2_time_intro extends Phaser.Scene {
	constructor() {
        super("F2_time_intro")
    }
	preload() {
	
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');
	   }
 create() {

   countdown = true
    var x = 150
    var y = 100
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    var font = "80px"
	this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    this.add.text(x, y-30, 'G', { fontSize:  font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y + 40, 'A',{ fontSize: font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+100, 'M',{ fontSize: font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+160, 'E',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+220, '',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+280, 'M',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+340, 'O',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+400, 'D',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+460, 'E',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+520, 'S',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });

    this.lahko = this.add.sprite(GAME_WIDTH/2, 300, 'gumb').setInteractive();
    this.city = this.add.sprite(GAME_WIDTH/2, 450, 'gumb').setInteractive();
    this.nivoji = this.add.sprite(GAME_WIDTH/2, 600, 'gumb').setInteractive();

   //this.loadText("no_mercy")
   var odmik = 30
    this.add.text(GAME_WIDTH/2-220, 105, "IZBERI ŽELJENI ČAS IGRANJA", { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 500, useAdvancedWrap: false }
    });
  
    this.add.text(GAME_WIDTH/2-odmik, 285, "20s", { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
  
    this.add.text(GAME_WIDTH/2-odmik, 440, "60s", { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
  
    this.add.text(GAME_WIDTH/2-odmik, 590,  "120s", { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
 
    


    
    
    this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
    this.domov.setScale(0.8)
   
     this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, this.loadText("home"),{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });

     star = false
     heart = false
     shield = false
     hearts = []
     shields = []
     distanceHeart = 0
     heartsOnScreen = []
     startTime = 0
     startTimeMultiplayer = 0
     scoreMultiplier = 1 //how much multiplayer a player has    
    

    this.nivoji.setScale(1.5)
    this.nivoji.setScale(1.5)
    this.nivoji.on('pointerup', () => {
        stopWatchStart()
        timeToPlay = 120
        time = timeToPlay
        type = 4
        this.scene.stop('F2_time_intro')
        this.scene.start('F4_gamePlayStart')
	})
    
    this.lahko.setScale(1.5)
    this.lahko.on('pointerup', () => {
        timeToPlay = 20
        time = timeToPlay
        stopWatchStart()
        type = 2
        this.scene.stop('F2_time_intro')
        this.scene.start('F4_gamePlayStart')
	})
    this.city.setScale(1.5)
	this.city.on('pointerup', () => {
        timeToPlay = 60
        time = timeToPlay
        stopWatchStart()
        this.scene.stop('F2_time_intro')
        this.scene.start('F4_gamePlayStart')
        type = 3
	})
    
   
    this.domov.on('pointerup', () => {
        this.scene.stop('F2_time_intro')
        this.scene.start('F2_inicial')
        })

	


    


    
  }
 
  loadText(text_to_translate) {
    if (language === "en") {
                    return this.cache.json.get('textEn')["en"][text_to_translate];

    } else {
                    return this.cache.json.get('textSlo')["slo"][text_to_translate];

    }
}

}


