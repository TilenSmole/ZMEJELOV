class E0_uvod extends Phaser.Scene {
	constructor(){
		super({ key: 'E0_uvod' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.video('videoMESTO', 'assets/mesto/E0_uvod_video.mp4');
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.atlas("trgovec", "assets/mesto/zivali/trgovec/trgovec.png", "assets/mesto/zivali/trgovec/trgovec_atlas.json")
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
    this.video = this.add.video(GAME_WIDTH/2, GAME_HEIGHT/2, 'videoMESTO');
    this.video.setScale(.65)
    this.video.play()


	





    this.gozd = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.gozd.setScale(0.8)

    this.mesto = this.add.sprite(135,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.mesto.setScale(0.8)



    this.add.text(5,GAME_HEIGHT - 65, this.loadText("town") ,{ fontSize: '60px', fill: '#E950F4' });
    this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, this.loadText("forest") ,{ fontSize: '60px', fill: '#E950F4' });




        
    
    this.gozd.on('pointerup', () => {
        this.scene.stop('E0_uvod')
        this.scene.start('A6_scena6')
        })
    
    this.mesto.on('pointerup', () => {
        this.scene.stop('E0_uvod')
        this.scene.start('E0_mesto')
        })



  
    
   


	


 }}
