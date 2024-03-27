class E0_poker4 extends Phaser.Scene {
	constructor(){
		super({ key: 'E0_poker4' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.video('video2', 'assets/uvod/zmeja konec.mp4')
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');
	   }
       loadText(text_to_translate) {
        if (language === "en") {
          return this.cache.json.get('textEn')[text_to_translate];
        } else {
          return this.cache.json.get('textSlo')[text_to_translate];
        }
      }
    
 create() {
    
    poker = true
    E_iger += 1

	const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });

    this.add.text(100, GAME_HEIGHT - 200, this.loadText("poker_end"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
    });

    
    


    if(vrniNaPogoj == true){
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_poker4')
            this.scene.start('A0_vsi_nivoji')
          });
          
        
        }
    else{
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_poker4')
            this.scene.start('E0_mesto')
          });}
          
  
    
    



  
    
   


	


    


  


    
  }
}