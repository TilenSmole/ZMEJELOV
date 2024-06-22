class A10_outro extends Phaser.Scene {
    constructor() {
        super({ key: 'A10_outro' });
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.video('videokonec', 'assets/uvod/zmeja konec.mp4');

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
        this.video = this.add.video(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'videokonec');
        this.video.setScale(.65)
        this.video.play()


        //this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
        /*var x = 150
        var y = 125
        var font = "80px"
        this.add.text(x, y, 'Z', { fontSize:  font,fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y + 60, 'M',{ fontSize: font,fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y+120, 'E',{ fontSize: font,fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y+180, 'J',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y+240, 'E',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y+300, 'L',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y+360, 'O',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(x, y+420, 'V',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });*/


        this.zacetek = this.add.sprite(GAME_WIDTH - 100, GAME_HEIGHT - 50, 'gumb').setInteractive();
        this.zacetek.setScale(0.8)
        this.add.text(GAME_WIDTH - 150, GAME_HEIGHT - 50, this.loadText("next"), { fontSize: '40px', fill: '#B637BF' });




        this.zacetek.on('pointerup', () => {
            this.scene.stop('A0_intro')
            this.scene.start('A10_konec')
        })




















    }
}