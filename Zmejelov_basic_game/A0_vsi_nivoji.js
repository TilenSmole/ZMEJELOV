class A0_vsi_nivoji extends Phaser.Scene {
	constructor(){
		super({ key: 'A0_vsi_nivoji' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("L1","assets/uvod/nivoji/L1.png")
        this.load.image("L2","assets/uvod/nivoji/L2.png")
		this.load.image("L3","assets/uvod/nivoji/L3.png")
        this.load.image("L4","assets/uvod/nivoji/L4.png")
        this.load.image("L5","assets/uvod/nivoji/L5.png")
		this.load.image("L6","assets/uvod/nivoji/L6.png")
        this.load.image("L7","assets/uvod/nivoji/L7.png")
        this.load.image("L8","assets/uvod/nivoji/L8.png")
		this.load.image("L9","assets/uvod/nivoji/L9.png")
		this.load.image("gumb","assets/uvod/gumb.png")

        this.load.image("zmeja","assets/uvod/zmeja.png")

		this.load.image("N1","assets/uvod/nivoji/L1igra.png")
		this.load.image("N2","assets/uvod/nivoji/scena2.png")
		this.load.image("N3","assets/uvod/nivoji/scena3.png")
		this.load.image("N4","assets/uvod/nivoji/scena4.png")
		this.load.image("N5","assets/uvod/nivoji/scena5.png")
		this.load.image("N6","assets/uvod/nivoji/scena6.png")
		this.load.image("N7","assets/uvod/nivoji/droper.png")
		this.load.image("N8","assets/uvod/nivoji/plavanje.png")
		this.load.image("N9","assets/uvod/nivoji/L1igra.png")
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');


	   }
 create() {
    vrniNaPogoj = true
    easy = true
    zmaga = false
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    //basic osnova
	this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    var x = 60
    var y = 125
    var font = "80px"
    this.add.text(x, y, 'Z', { fontSize:  font, fill: '#B637BF' });
    this.add.text(x, y + 60, 'M',{ fontSize: font, fill: '#B637BF' });
    this.add.text(x, y+120, 'E',{ fontSize: font, fill: '#B637BF' });
    this.add.text(x, y+180, 'J',{ fontSize: '80px', fill: '#B637BF' });
    this.add.text(x, y+240, 'E',{ fontSize: '80px', fill: '#B637BF' });
    this.add.text(x, y+300, 'L',{ fontSize: '80px', fill: '#B637BF' });
    this.add.text(x, y+360, 'O',{ fontSize: '80px', fill: '#B637BF' });
    this.add.text(x, y+420, 'V',{ fontSize: '80px', fill: '#B637BF' });



    //gumbi za naprej, domov plus text za njih
    this.naprej = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 100, 'gumb').setInteractive();
    this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
    this.naprej.setScale(0.8)
    this.domov.setScale(0.8)
   
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 115, this.loadText("next"),{ fontSize: '40px', fill: '#B637BF' });
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, this.loadText("home"),{ fontSize: '40px', fill: '#B637BF' });

    this.naprej.on('pointerup', () => {
        this.scene.stop('A0_vsi_nivoji')
        this.scene.start('A0_vsi_nivoji2')
        })
    this.domov.on('pointerup', () => {
        this.scene.stop('A0_vsi_nivoji')
        this.scene.start('A0_zacetniZaslon')
        })




    //gumbi za nivoje

    var x = 300
    var y = 75
    var zaKok = 220
    var ime = 60 //zamik za texxt
    var imey = 20 //zamik za y
    this.l1 = this.add.image(x, y, 'L1')
        this.s1 = this.add.sprite(x,y+100 ,"N1").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x-ime,y - imey , 'LEVEL 1',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A1_scena1')
            })
    this.l2 = this.add.image(x+ zaKok * 1, y, 'L2')
        this.s1 = this.add.sprite(x+ zaKok * 1,y+100 ,"N2").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+ zaKok * 1 -ime, y -imey , 'LEVEL 2',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A2_scena2')
            })
    this.l3 = this.add.image(x+zaKok * 2, y, 'L3')
        this.s1 = this.add.sprite(x+ zaKok * 2,y+100 ,"N3").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+ zaKok * 2 -ime, y -imey , 'LEVEL 3',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A3_scena3')
            })




    y += 225
    this.l4 = this.add.image(x, y, 'L4')
        this.s1 = this.add.sprite(x,y+100 ,"N4").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+  -ime, y -imey , 'LEVEL 4',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A4_scena4')
            })
    this.l5 = this.add.image(x+ zaKok * 1, y, 'L5')
        this.s1= this.add.sprite(x+ zaKok * 1,y+100 ,"N5").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+ zaKok * 1 -ime, y -imey , 'LEVEL 5',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A5_scena5')
            })

    this.l6= this.add.image(x+zaKok * 2, y, 'L6')
        this.s1 = this.add.sprite(x+ zaKok * 2,y+100 ,"N6").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+ zaKok * 2 -ime, y -imey , 'LEVEL 6',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A6_scena6')
            })




    y += 225
    this.l7 = this.add.image(x, y, 'L7')
        this.s1 = this.add.sprite(x,y+100 ,"N7").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+  -ime , y -imey -5, 'LEVEL 7\nHARD',{ fontSize: '28px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            stZivljenj = 4
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A7_droperTroll')
            })
    this.l8 = this.add.image(x+ zaKok * 1, y, 'L8')
        this.s1= this.add.sprite(x+ zaKok * 1,y+100 ,"N7").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+ zaKok * 1 -ime, y -imey , 'LEVEL 8',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A7_droperUvod')
            })
    this.l9 =this.add.image(x+zaKok * 2, y, 'L9')
        this.s1= this.add.sprite(x+ zaKok * 2,y+100 ,"N8").setInteractive();
        this.s1.setScale(.1)
        this.add.text(x+ zaKok * 2 -ime, y -imey , 'LEVEL 9',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
        this.s1.on('pointerup', () => {
            vrniNaPogoj = true
            this.scene.stop('A0_vsi_nivoji')
            this.scene.start('A8_plavanje')
            })

  

   
    this.l1.setScale(0.8)
    this.l2.setScale(0.8)
    this.l3.setScale(0.8)
    this.l4.setScale(0.8)
    this.l5.setScale(0.8)
    this.l6.setScale(0.8)
    this.l7.setScale(0.8)
    this.l8.setScale(0.8)
    this.l9.setScale(0.8)
    

/*
    this.igra.on('pointerup', () => {
    this.scene.stop('meni')
    this.scene.start('A8_plavanje')
	})
    this.jezik.setScale(0.8)
    this.jezik.on('pointerup', () => {
    this.scene.stop('meni')
    this.scene.start('')
	})
    this.krediti.setScale(0.8)
	this.krediti.on('pointerup', () => {
    this.scene.stop('meni')
    this.scene.start('A0_zahvale')
	})*/
    
   


	


    


  


    
  }


  loadText(text_to_translate) {
    if (language === "en") {
                    return this.cache.json.get('textEn')["en"][text_to_translate];

    } else {
                    return this.cache.json.get('textSlo')["slo"][text_to_translate];

    }
}

}