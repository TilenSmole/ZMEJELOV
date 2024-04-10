class M4_shop extends Phaser.Scene {
	constructor(){
		super({ key: 'M4_shop' });
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
    this.video = this.add.video(GAME_WIDTH/2, GAME_HEIGHT/2, 'video2');
    this.video.setScale(.65)
    this.video.play()


        
    this.zacetek = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.zacetek.setScale(0.8)
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'DOMOV',{ fontSize: '30px', fill: '#E950F4' });

        
    this.add.text(GAME_WIDTH-200, 20, 'Stanje: '+ userCoins,{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});


     var chest = this.add.image(100,  50, "r1 (1)")
     chest.setScale(.8)
     this.add.text(200, 50, 'Kupi naključno nagrado',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     var shield = this.add.image(100,  150, "r1 (2)")
     shield.setScale(.5)
     this.add.text(200, 150, 'Kupi ščit, ki omogoča zaščito pred ovirami in sovražnikom',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     var ghost = this.add.image(100,  250, "r1 (5)")
     this.add.text(200, 250, 'Kupi duha, ki omogoča zaščito pred ovirami ',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     var shrrom = this.add.image(100,  350, "r1 (6)")
     this.add.text(200, 350, 'Kupi gobice,  ki omogoča zaščito pred sovražnikom',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

   
     var potion = this.add.image(100,  450, "r1 (10)")
     this.add.text(200, 450, 'Kupi napoj,  ki ti omogoča dodatno življenje',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     var spaceship = this.add.image(100,  550, "r1 (14)")
     this.add.text(200, 550, 'Kupi raketo,  ki ti ponese 1000m na zažetku igre',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     var zmeja = this.add.image(100,  650, "r1 (15)")
     zmeja.setScale(.1)
     this.add.text(200, 650, 'Kupi vesoljsko ladjo, zaščita pred vsem',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});

     var ach = this.add.image(100,  750, "ach")
     ach.setScale(.1)
     this.add.text(200, 750, 'Kupi dosežek',{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});










    this.zacetek.on('pointerup', () => {
        this.scene.stop('M4_shop')
        this.scene.start('M2_inicial')
        })
    
    



  
    
   


	


    


  


    
  }
}