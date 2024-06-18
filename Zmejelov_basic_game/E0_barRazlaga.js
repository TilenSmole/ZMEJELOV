class E0_barRazlaga extends Phaser.Scene {
    constructor() {
        super({
            key: 'E0_barRazlaga',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }
                }
            }
        });
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
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
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        const xKordinata = (Math.random() * 490)
        const yKordinata = (Math.random() * 350)

        this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });
        this.add.text(50, GAME_HEIGHT - 250, this.loadText("bar_intro"), {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 50, useAdvancedWrap: true }
        });





        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_barRazlaga')
            this.scene.start('E0_bar')
        });













    }
}