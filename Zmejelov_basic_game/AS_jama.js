class AS_jama extends Phaser.Scene {
	constructor(){
		super({ key: 'AS_jama' });
	}
  preload() {
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
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    this.add.text(xKordinata, yKordinata, this.loadText("space"))
    this.add.text(100, GAME_HEIGHT - 200, this.loadText("cave_intro"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
  });
 


   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('uvod')
      this.scene.start('AS_skrivni')
    });
  }
}