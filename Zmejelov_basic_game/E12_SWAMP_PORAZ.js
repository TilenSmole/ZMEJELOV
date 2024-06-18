class E12_SWAMP_PORAZ extends Phaser.Scene {
	constructor(){
		super({ key: 'E12_SWAMP_PORAZ' });
	}
  preload() {
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);
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

    this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
  		this.titleMusic.play(); 
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    
    this.add.text(100, GAME_HEIGHT - 200, this.loadText("mountain_fall"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
  });

  
  

  if(vrniNaPogoj ){

    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('E12_SWAMP_PORAZ')
      this.scene.start('E12_swampSkakanje')
    });
    
  }else{
    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('E12_SWAMP_PORAZ')
      this.scene.start('E0_mesto')
    });
    }
  }
}
