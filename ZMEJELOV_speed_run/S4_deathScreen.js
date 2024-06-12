class S4_deathScreen extends S0_shared{
        constructor(){
            super("S4_deathScreen");
        }
    preload() {
		this.load.json('textSlo', '/translations/translationsSLO_js.json');
		this.load.json('textEn', '/translations/translationsEN_js.json');
	}



     loadText(text_to_translate) {
		if (language === "en") {
			return this.cache.json.get('textEn')["en"][text_to_translate];
		} else {
			return this.cache.json.get('textSlo')["slo"][text_to_translate];
		}
	}
    create() {
        this.restart()
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        const xKordinata = (Math.random() * 490)
        const yKordinata = (Math.random() * 350)

        this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '40px', fill: "#E950F4" })

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
            showPopupAchievements( this.loadText("ach_ship"))

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
    

        if (stSmrti >= 20 && !dieALot) {
            showPopupAchievements( this.loadText("ach_death"))

            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            dieALot = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)

        }


        if (deathByWho == [1, 1, 1, 1, 1] && !dieDiverse) {
            showPopupAchievements( this.loadText("ach_all"))

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
            this.scene.stop('S4_deathScreen')
            this.scene.start("S4_gamePlayStart")
        });










    }
}

