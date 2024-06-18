
var item1, item2, item3,item4,item6,item5,item7,item8


var money
class M3_explanation extends M0_shared {
	constructor(){
        super("M3_explanation")
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("ach","assets/achivments/money.png")
        for (let i = 1; i <= 16; i++) {
            this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
        }

		this.load.json('textEn', '/translations/translationsEN_js.json');
		this.load.json('textSlo', '/translations/translationsSLO_js.json');
    


	   }
       loadText(text_to_translate) {
		let textEn = this.cache.json.get('textEn');
		let textSlo = this.cache.json.get('textSlo');
        console.log(textSlo);
		if (language === "en") 
			return textEn["en"][text_to_translate];
		 else 
			return textSlo["slo"][text_to_translate];
		
	}
 create() {

    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");


        
    this.zacetek = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.zacetek.setScale(0.8)
    this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65,this.loadText("home"),{ fontSize: '30px', fill: '#E950F4' });



     var chest = this.add.image(100,  50, "r1 (1)")
     chest.setScale(.8)
     this.add.text(200, 50,this.loadText("randomPrize"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item1 = this.add.text(GAME_WIDTH-350,   50, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();




     var shield = this.add.image(100,  150, "r1 (2)")
     shield.setScale(.5)
     this.add.text(200, 150, this.loadText("shield"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item1 = this.add.text(GAME_WIDTH-350,   150, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();



     var ghost = this.add.image(100,  250, "r1 (5)")
     this.add.text(200, 250, this.loadText("ghost"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item2 = this.add.text(GAME_WIDTH-350,   250, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();


     var shrrom = this.add.image(100,  350, "r1 (6)")
     this.add.text(200, 350, this.loadText("shroom"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item3 = this.add.text(GAME_WIDTH-350,   350, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();


     var potion = this.add.image(100,  450, "r1 (10)")
     this.add.text(200, 450, this.loadText("potion"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item4 = this.add.text(GAME_WIDTH-350,   450, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();

     var spaceship = this.add.image(100,  550, "r1 (14)")
     this.add.text(200, 550, this.loadText("quickShip"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item5 = this.add.text(GAME_WIDTH-350,   550, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();

     var zmeja = this.add.image(100,  650, "r1 (15)")
     zmeja.setScale(.1)
     this.add.text(200, 650, this.loadText("spaceShip"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item6 = this.add.text(GAME_WIDTH-350,   650, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();

     var ach = this.add.image(100,  750, "ach")
     ach.setScale(.1)
     this.add.text(200, 750, this.loadText("money_ach"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item7 = this.add.text(GAME_WIDTH-350,   750, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();





    

    console.log('userCoins'+ userCoins);
     gameState.text = this.add.text(GAME_WIDTH-350, 20, 'Stanje: '+ userCoins,{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});


    this.zacetek.on('pointerup', () => {
        this.scene.stop('M3_shop')
        this.scene.start('M2_inicial')
        })
    

       

    



  



   
}

}