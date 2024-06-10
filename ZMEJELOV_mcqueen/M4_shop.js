
var item1, item2, item3,item4,item6,item5,item7,item8


var money
class M4_shop extends M0_shared {
	constructor(){
        super("M4_shop")
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("ach","assets/achivments/money.png")
        for (let i = 1; i <= 16; i++) {
            this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
        }


    


	   }
 create() {



        
    this.zacetek = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.zacetek.setScale(0.8)
    this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65,this.loadText("home"),{ fontSize: '30px', fill: '#E950F4' });

     


     var chest = this.add.image(100,  50, "r1 (1)")
     chest.setScale(.8)
     this.add.text(200, 50, ' naključno nagrado',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item1 = this.add.text(GAME_WIDTH-250,   50, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();




     var shield = this.add.image(100,  150, "r1 (2)")
     shield.setScale(.5)
     this.add.text(200, 150, ' ščit, ki omogoča zaščito pred ovirami in sovražnikom',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item1 = this.add.text(GAME_WIDTH-250,   150, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();



     var ghost = this.add.image(100,  250, "r1 (5)")
     this.add.text(200, 250, ' duha, ki omogoča zaščito pred ovirami ',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item2 = this.add.text(GAME_WIDTH-250,   250, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();


     var shrrom = this.add.image(100,  350, "r1 (6)")
     this.add.text(200, 350, ' gobice,  ki omogoča zaščito pred sovražnikom',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     item3 = this.add.text(GAME_WIDTH-250,   350, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();


     var potion = this.add.image(100,  450, "r1 (10)")
     this.add.text(200, 450, ' napoj,  ki ti omogoča dodatno življenje',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item4 = this.add.text(GAME_WIDTH-250,   450, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();

     var spaceship = this.add.image(100,  550, "r1 (14)")
     this.add.text(200, 550, ' raketo,  ki ti ponese 1000m na zažetku igre',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item5 = this.add.text(GAME_WIDTH-250,   550, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();

     var zmeja = this.add.image(100,  650, "r1 (15)")
     zmeja.setScale(.1)
     this.add.text(200, 650, ' vesoljsko ladjo, zaščita pred vsem',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item6 = this.add.text(GAME_WIDTH-250,   650, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();

     var ach = this.add.image(100,  750, "ach")
     ach.setScale(.1)
     this.add.text(200, 750, 'Dosežek',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     item7 = this.add.text(GAME_WIDTH-250,   750, '100',{ fontSize: '30px', fill: '#E950F4' }).setInteractive();





    

    console.log('userCoins'+ userCoins);
     gameState.text = this.add.text(GAME_WIDTH-200, 20, 'Stanje: '+ userCoins,{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});


    this.zacetek.on('pointerup', () => {
        this.scene.stop('M4_shop')
        this.scene.start('M2_inicial')
        })
    

       

    



  



   
}

}