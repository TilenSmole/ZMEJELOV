class S4_deathScreen extends Phaser.Scene {
    constructor() {
        super({
            key: 'S4_deathScreen',
        });
    }
    create() {
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        const xKordinata = (Math.random() * 490)
        const yKordinata = (Math.random() * 350)

        this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '40px', fill: "#E950F4" })






        if (deathVarient == "bird") {
            this.add.text(100, GAME_HEIGHT - 200, this.loadText("bird_death"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });

        }
        else if (deathVarient == "sky") {

            this.add.text(100, GAME_HEIGHT - 200, this.loadText("sky_death"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });


        }
        else if (deathVarient == "spaceship") {
            this.add.text(100, GAME_HEIGHT - 200, this.loadText("spaceship_death"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });



        }
        else if (deathVarient == "qucikSpaceship") {
            this.showPopupAchievements( this.loadText("ach_ship"))

            if (!quickDeath) {
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                quickDeath = true;
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            }
            this.add.text(100, GAME_HEIGHT - 200, this.loadText("spaceship_death_quick"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });


        }
        else if (deathVarient == "reaper") {
            this.add.text(100, GAME_HEIGHT - 200, this.loadText("reaper"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });



        }
        else if (deathVarient == "greediness") {
            this.add.text(100, GAME_HEIGHT - 200, this.loadText("greediness"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });



        }



        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('S4_deathScreen')
            this.scene.start("S4_gamePlayStart")
        });










    }
}

