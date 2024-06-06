class M5_konec extends M0_shared {
    constructor() {
        super("M5_konec")
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.video('videokonec', 'assets/uvod/zmeja konec.mp4');
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);

    }
    create() {



        //this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
        var x = 150
        var y = 125
        var font = "80px"
        this.add.text(x, y, 'Z', { fontSize: font, fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 60, 'M', { fontSize: font, fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 120, 'E', { fontSize: font, fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 180, 'J', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 240, 'E', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 300, 'L', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 360, 'O', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 420, 'V', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' })


        


       /* this.zacetek = this.add.sprite(GAME_WIDTH - 100, GAME_HEIGHT - 50, 'gumb').setInteractive();
        this.zacetek.setScale(0.8)
        if (usa == true) {
            this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, 'START', { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
        }
        else if (rus == true) {
            this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, 'СЛЕДУЮЩИЙ', { fontSize: '20px', fill: '#E950F4', fontFamily: 'CustomFont' });
        }
        else {
            this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, 'START', { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
        }




        this.zacetek.on('pointerup', () => {

            this.scene.stop('M5_konec')
            this.scene.start('M2_inicial')
        })*/




        const data = {
            type: 5,
            score: score
        };

        this.updateDataBase(data)
            .then(response => {
                console.log("progress saved!     " + response);
            })
            .catch(error => {
                console.error(error);
            });

       





    }

    updateBalance() {
        const data = {
            money: userCoins + coinsNewGame,
        };
        this.updateMoney(data)

        coinsNewGame = 0
    }


}