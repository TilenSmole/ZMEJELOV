

class F3_storyIntro extends F0_shared {
    constructor() {
        super("F3_storyIntro");
    }


    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');
        this.load.image("zmeja", "assets/uvod/zmeja.png")

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


        gameState.sovraznik = this.physics.add.sprite(-100, 220, "zmeja");
        gameState.sovraznik.setScale(.7)
        gameState.sovraznik.body.setAllowGravity(false);

        gameState.sovraznik.move = this.tweens.add({
            targets: gameState.sovraznik,
            x: GAME_WIDTH + 100,
            ease: 'Linear',
            duration: 4000,
            repeat: -1,
            flipX: true,
            yoyo: true,
        })


        const text = this.add.text(10, 400, this.loadText("city_intro"), {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 20, useAdvancedWrap: true }
        });

        const xKordinata = (Math.random() * 490);
        const yKordinata = (Math.random() * 350);
    
    
        this.add.text(xKordinata, yKordinata, this.loadText("space_start"), { fontSize: '40px', fill: "#E950F4", fontFamily: 'CustomFont' }); // Create a new text object with updated content
     
        this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
        this.domov.setScale(0.8)
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, this.loadText("home"),{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        
        this.domov.on('pointerup', () => {
            this.scene.stop('F3_storyIntro')
            this.scene.start('F2_inicial')
            })

        countdown = false

        var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        spaceBar.on('down', () => {
          this.scene.stop('F3_storyIntro')
          this.scene.start('F4_gamePlayStart')
        });























    }
}

function random_color() {
    var rint = Math.floor(0x100000000 * Math.random());
    return 'rgb(' + (rint & 255) + ',' + (rint >> 8 & 255) + ',' + (rint >> 16 & 255) + ')';


}