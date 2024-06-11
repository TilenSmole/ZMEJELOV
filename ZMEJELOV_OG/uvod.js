
class uvod extends Phaser.Scene {
  constructor() {
    super({ key: 'uvod' });
  }

  preload() {
    this.load.atlas("coolGuy", "assets/najdela/najdela.png", "assets/najdela/najdela.json");
    this.load.atlas("sovraznik", "assets/enemy/enemy1.png", "assets/enemy/enemy1.json");
    this.load.json('textSlo', '/translations/translationsSLO_OG_js.json');
    this.load.json('textEn', '/translations/translationsEN_OG_js.json');


  }
  loadText(text_to_translate) {

    console.log(language)
    if (language === "en") {
      return this.cache.json.get('textEn')["en"][text_to_translate];
    } else {
      return this.cache.json.get('textSlo')["slo"][text_to_translate];
    }
  }



  create() {
    const xKordinata = (Math.random() * 490)
    const yKordinata = (Math.random() * 350)

    this.add.text(xKordinata, yKordinata, this.loadText("click_to_start"), { fontSize: '40px', fill: '#FF7F50' });
    this.add.text(50, 500, this.loadText("intro"), { fontSize: '40px', fill: '#F0F8FF' });



    const ach = achievements.substring(16, 17);

    console.log('ach'+ach);
    if (ach == 1)
        completed = true;
    else
      completed = false




    this.input.on('pointerup', () => {
    


      this.scene.stop('uvod')
      this.scene.start('scena1')
    });
  }
}
