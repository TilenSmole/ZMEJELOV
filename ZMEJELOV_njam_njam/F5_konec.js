


    class F5_konec extends F0_shared {
        constructor() {
            super("F5_konec");
        }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.video('videokonec', 'assets/uvod/zmeja konec.mp4');
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);
		this.load.json('textEn', '/translations/translationsSLO_js.json');
		this.load.json('textSlo', '/translations/translationsEN_js.json');
    } 
    
    loadText(text_to_translate) {
		if (language === "en") 
			return this.cache.json.get('textEn')["en"][text_to_translate];
		 else 
			return this.cache.json.get('textSlo')["slo"][text_to_translate];
		}
    create() {
        super.create()

        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        //this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
        var x = 150
        var y = 125
        var font = "80px"
        const characters = ['Z', 'M', 'E', 'J', 'E', 'L', 'O', 'V'];
        
        characters.forEach((char, index) => {
            this.add.text(x, y + index * 60, char, { fontSize:" 80px", fill: '#B637BF', fontFamily: 'CustomFont' });
        });
        




        this.space =   this.add.text(300, 200, this.loadText("space_restart"), { fontSize: '30px', fill: "#B637BF" })



        if(!countdown ){
            var choice = Math.floor(Math.random() * 3) + 1;
            this.add.text(300 , 400, this.loadText("feast"+choice), {
                fontSize: '35px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH-300, useAdvancedWrap: true }
            });
    
        }
    
        this.add.text(300 , 590,  this.loadText("yourScore") + score, {
            fontSize: '35px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width:  GAME_WIDTH-300, useAdvancedWrap: true }
        });

        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('F5_konec')
            this.scene.start("F2_inicial")
        });

     
      
    }
}