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
        this.add.text(x, y, 'Z', { fontSize: font, fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 60, 'M', { fontSize: font, fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 120, 'E', { fontSize: font, fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 180, 'J', { fontSize: '80px', fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 240, 'E', { fontSize: '80px', fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 300, 'L', { fontSize: '80px', fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 360, 'O', { fontSize: '80px', fill: '#A996BC', fontFamily: 'CustomFont' });
        this.add.text(x, y + 420, 'V', { fontSize: '80px', fill: '#A996BC', fontFamily: 'CustomFont' })


        const xKordinata = (Math.random() * 490 + 200)
        const yKordinata = (Math.random() * 350 + 200)

        this.add.text(xKordinata, yKordinata, this.loadText("space_restart"), { fontSize: '40px', fill: "#E950F4" })

        this.add.text(100, GAME_HEIGHT - 200, this.loadText("speedrun_win"), {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
        });


        this.stopWatchStop()


        var text = ""
        if (speedrun_win < 60)
            text = this.loadText("speedrun_win")
        else if (speedrun_win < 140)
            text = this.loadText("speedrun_win_med")
        else if (speedrun_win < 500)
            text = this.loadText("speedrun_win_slow")
        else
            text = this.loadText("speedrun_win_slow2x")




        this.add.text(100, GAME_HEIGHT - 200, text, {
            fontSize: '40px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
        });



        if (stSmrti > 20 && !dieALot) {
            this.showPopupAchievements( this.loadText("ach_death"))

            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            dieALot = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)

        }

        if (finalTime > 60 && !completedSpeedy) {
            this.showPopupAchievements( this.loadText("ach_speed"))

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
            this.showPopupAchievements( this.loadText("ach_finish"))
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            completedGame = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)

        }

        if (deathByWho = [1, 1, 1, 1, 1] && !dieDiverse) {
            this.showPopupAchievements( this.loadText("ach_all"))

            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            dieDiverse = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)

        }








        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('S5_konec.js')
            this.scene.start('S2_inicial.js')
        });















    }
}