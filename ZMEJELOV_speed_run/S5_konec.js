class S5_konec extends S0_shared {
    constructor() {
        super("S5_konec")
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.video('videokonec', 'assets/uvod/zmeja konec.mp4');
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);

    }
    create() {
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

        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        

        this.add.text(300, 200, this.loadText("space_restart"), { fontSize: '30px', fill: "#A996BC" })

      



        const showPopupAchievements = (text) => {
            const rectangle = this.add.rectangle(GAME_WIDTH - 300, 0, 700, 100, 0x4d4455);
            rectangle.setOrigin(0.5, 0);
        
            const graphics = this.add.graphics();
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(rectangle.x - rectangle.width / 2, rectangle.y, rectangle.width, rectangle.height);
        
            const popup = this.add.text(GAME_WIDTH - 300, 40, text, {
                fontSize: '32px',
                color: '#980a69',
                align: 'center',
                wordWrap: { width: rectangle.width - 20, useAdvancedWrap: true }
            });
            popup.setOrigin(0.5);
        
            this.time.delayedCall(4000, () => {
                popup.destroy();
                rectangle.destroy();
                graphics.destroy();
            });
        };

        var speedrun_win = finalTime
        	console.log(''+speedrun_win);
        var text = ""
        if (speedrun_win < 60)
            text = this.loadText("speedrun_win_fast")
        else if (speedrun_win < 140)
            text = this.loadText("speedrun_win_med")
        else if (speedrun_win < 500)
            text = this.loadText("speedrun_win_slow")
        else
            text = this.loadText("speedrun_win_slow2x")




        this.add.text(300, 350, text, {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
        });



       

        if (speedrun_win < 60 && !completedSpeedy) {
            showPopupAchievements( this.loadText("ach_speed"))
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            completedSpeedy = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)

        }

        if (!completedGame) {
            showPopupAchievements( this.loadText("ach_finish"))
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            completedGame = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
        }

       



        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('S5_konec')
            this.scene.start('S2_inicial')
        });








        
        






    }
}
