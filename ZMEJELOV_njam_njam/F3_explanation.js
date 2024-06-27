
class F3_explanation extends F0_shared {
	constructor(){
        super("F3_explanation")
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")

        this.load.image("shield", "assets/a_njam_njam/shield.png")
        this.load.image("heart", "assets/droper/heart.png")
        this.load.image("multiplier", "assets/a_njam_njam/multiplier.png")

		this.load.json('textEn', '/translations/translationsEN_js.json');
		this.load.json('textSlo', '/translations/translationsSLO_js.json');
    


	   }
       loadText(text_to_translate) {
		let textEn = this.cache.json.get('textEn');
		let textSlo = this.cache.json.get('textSlo');
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



     var shield=  this.add.image(100,  150, "shield")
     shield.setScale(1.2)
     this.add.text(200, 150,this.loadText("shieldCity"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});





     var heart = this.add.image(100,  225, "heart")
     heart.setScale(0.15)
     this.add.text(200, 225, this.loadText("heart"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});




     var multiplier = this.add.image(100,  300, "multiplier")
     this.add.text(200, 300, this.loadText("multiplier"),{ fontSize: '30px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
     multiplier.setScale(0.7)




  
     this.add.text(100, 500, this.loadText("explanation_city"), { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH-200, useAdvancedWrap: true }
    });
 
    


    this.zacetek.on('pointerup', () => {
        this.scene.stop('F3_explanation')
        this.scene.start('F2_inicial')
        })
    

       

    



  



   
}

}