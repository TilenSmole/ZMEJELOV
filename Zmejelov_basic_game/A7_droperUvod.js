class A7_droperUvod extends Phaser.Scene {
	constructor(){
		super({ key: 'A7_droperUvod' });
	}
  preload(){

    //this.load.image("zmeja","assets/uvod/zmeja.png")
	//this.load.image("spaceship" ,"assets/scena6/spaceship.png")
    this.load.image("ozadje6_2","assets/uvod/ozadje6_2.png")
    this.load.image("platformO1","assets/droper/Smoke VFX B2.png")
    this.load.image("platformO2" ,"assets/droper/Smoke VFX C1.png")
    this.load.image("platformO3", "assets/droper/Smoke VFX A1.png")
    this.load.image("platformO4","assets/droper/Smoke VFX B1.png")
    this.load.image("zmejaVladji","assets/droper/zmeja v ladji.png")
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
  if (easy == true){
    stZivljenj = 4
    }
  else{
  stZivljenj = 3}



    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 200)
    this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje6_2');
    this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
    //platforma
    var  random =  0
    var oblacki = ["platformO1", "platformO2", "platformO3","platformO4"] 
    for (var x = -15; x <= GAME_HEIGHT; x += random){
        random =  Math.floor(Math.random() * GAME_WIDTH/3);
        var y =  Math.floor(Math.random() * GAME_HEIGHT);
        var oblak =  Math.floor(Math.random() * 4);
        var slika = this.add.image(x,y, oblacki[oblak]);
        slika.setScale(2.6)

    }


	
    var zmeja = this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 525,"zmejaVladji");
    zmeja.setScale(.4)

    this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '40px', fill: "#E950F4", fontFamily: 'CustomFont' });

    if (easy == true){
      this.add.text(20, GAME_HEIGHT - 300, this.loadText("flying_intro"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 30, useAdvancedWrap: true }
    });
    }
    else{
      this.add.text(20, GAME_HEIGHT - 300, this.loadText("flying_intro_hard"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 30, useAdvancedWrap: true }
    });

}

    


  
  if (easy == true){
    
    var spaceBar1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    spaceBar1.on('down', () => {
      this.scene.stop('A7_droperUvod')
      this.scene.start('A7_droper')
    });
    
  }
  else{
    var spaceBar2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    spaceBar2.on('down', () => {
      this.scene.stop('A7_droperUvod')
      this.scene.start('A7_droperTroll')
    });




  }





  }
}