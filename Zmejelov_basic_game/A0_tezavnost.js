class A0_tezavnost extends A0_osnova {
	constructor() {
        super("A0_tezavnost")
    }
	preload() {
	
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');
	   }
 create() {

   
    easy = false
    var x = 150
    var y = 100
    pogojSmrtLevel = 25
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
    this.tezko = this.add.sprite(GAME_WIDTH/2, 150, 'gumb').setInteractive();
    this.city = this.add.sprite(GAME_WIDTH/2, 450, 'gumb').setInteractive();
    this.nivoji = this.add.sprite(GAME_WIDTH/2, 600, 'gumb').setInteractive();

   

    this.add.text(GAME_WIDTH/2-150, 105, this.loadText("no_mercy"), { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 145, this.loadText("no_mercy_descr"), { 
        fontSize: '20px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 250, this.loadText("easy"), { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 296, this.loadText("easy_desc"), { 
        fontSize: '20px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 405, this.loadText("zmentures_ep"), { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 450, this.loadText("zmentures__ep_desc"), { 
        fontSize: '20px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 555, this.loadText("individual_level"), { 
        fontSize: '35px',
        fill: '#B637BF',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    this.add.text(GAME_WIDTH/2-150, 600, this.loadText("individual_level_descr"), { 
        fontSize: '20px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: 300, useAdvancedWrap: true }
    });
    


    
    
    this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
    this.domov.setScale(0.8)
   
     this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, this.loadText("home"),{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });

        
    

    this.nivoji.setScale(1.5)
    this.nivoji.setScale(1.5)
    this.nivoji.on('pointerup', () => {
        easy = true
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_vsi_nivoji')
	})
    this.tezko.setScale(1.5)
    this.tezko.on('pointerup', () => {
        easy = false
        difficulty = "100000"
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_uvod')
	})
    this.lahko.setScale(1.5)
    this.lahko.on('pointerup', () => {
        easy = true
        difficulty = "00000"
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_uvod')
	})
    this.city.setScale(1.5)
	this.city.on('pointerup', () => {
        mestoGameMode = true;



        this.scene.stop('A0_tezavnost')
        this.scene.start('E0_mesto')
	})
    
    this.domov.on('pointerup', () => {
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_zacetniZaslon')
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


