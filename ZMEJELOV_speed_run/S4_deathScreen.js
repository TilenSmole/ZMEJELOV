var stars = []
var nStars = 0 //number of collected start

class S4_deathScreen extends S0_shared {
    constructor() {
        super("S4_deathScreen");
    }
    preload() {
        super.preload()
        this.load.json('textSlo', '/translations/translationsSLO_js.json');
        this.load.json('textEn', '/translations/translationsEN_js.json');
        this.load.image("star", "assets/a_speedRunning/clouds/star.png")

    }
    loadText(text_to_translate) {
        if (language === "en") {
            return this.cache.json.get('textEn')["en"][text_to_translate];
        } else {
            return this.cache.json.get('textSlo')["slo"][text_to_translate];
        }
    }
    create() {
        super.create()
        this.restart()
        
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        const xKordinata = (Math.random() * 490)
        const yKordinata = (Math.random() * 350)

        this.add.text(xKordinata, yKordinata, this.loadText("space_restart"), { fontSize: '40px', fill: "#E950F4" })

       


        gameState.star1 = this.physics.add.sprite(GAME_WIDTH - 150, 100, 'star');
        gameState.star1.body.allowGravity = false;
        gameState.star1.setScale(0.05);
        gameState.star2 = this.physics.add.sprite(150, 500, 'star');
        gameState.star2.body.allowGravity = false;
        gameState.star2.setScale(0.05);
        gameState.star3 = this.physics.add.sprite(GAME_WIDTH/2+100, 400, 'star');
        gameState.star3.body.allowGravity = false;
        gameState.star3.setScale(0.05);
        gameState.star4 = this.physics.add.sprite(800, 700, 'star');
        gameState.star4.body.allowGravity = false;
        gameState.star4.setScale(0.05);
        gameState.star5 = this.physics.add.sprite(100, 100, 'star');
        gameState.star5.body.allowGravity = false;
        gameState.star5.setScale(0.05);
        gameState.star6 = this.physics.add.sprite(GAME_WIDTH-200, 750, 'star');
        gameState.star6.body.allowGravity = false;
        gameState.star6.setScale(0.05);
        gameState.junakMali = this.physics.add.sprite(GAME_WIDTH / 2, 400, "Zmeja")
        gameState.junakMali.setScale(0.3)
        gameState.junakMali.body.allowGravity = false;
        gameState.junakMali.setCollideWorldBounds(true);

        this.physics.add.overlap(gameState.junakMali, gameState.star6, () => {
            gameState.star6.destroy()
            nStars++;
        })
        this.physics.add.overlap(gameState.junakMali, gameState.star5, () => {
            gameState.star5.destroy()
            nStars++;
        })

        this.physics.add.overlap(gameState.junakMali, gameState.star4, () => {
            gameState.star4.destroy()
            nStars++;
        })

        this.physics.add.overlap(gameState.junakMali, gameState.star3, () => {
            gameState.star3.destroy()
            nStars++;
        })

        this.physics.add.overlap(gameState.junakMali, gameState.star2, () => {
            gameState.star2.destroy()
            nStars++;
        })

        this.physics.add.overlap(gameState.junakMali, gameState.star1, () => {
            gameState.star1.destroy()
            nStars++;
        })





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

            if (!quickDeath) {
                showPopupAchievements(this.loadText("ach_ship"))
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
            showPopupAchievements(this.loadText("ach_death"))

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
            showPopupAchievements(this.loadText("ach_all"))

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


    update() {
        if (gameState.active) {
            if ((gameState.cursors.up.isDown)) {
                gameState.junakMali.anims.play('skok', true);
                gameState.junakMali.setVelocityY(this.getJumpingSpeed())
            }
            else if (gameState.cursors.right.isDown) {
                gameState.junakMali.setVelocityX(500)
                gameState.junakMali.anims.play('walk', true)
                gameState.junakMali.flipX = false;
            }
            else if (gameState.cursors.left.isDown) {
                gameState.junakMali.setVelocityX(-500);
                gameState.junakMali.anims.play('walk', true);
                gameState.junakMali.flipX = true;
            }
            else if (gameState.cursors.down.isDown) {
                gameState.junakMali.anims.play('skok', true);
                gameState.junakMali.setVelocityY(-1 * this.getJumpingSpeed())
            }
            else {
                gameState.junakMali.setVelocityX(0);
                // Plays the idle animation if no arrow keys are pressed
                gameState.junakMali.anims.play('idle', true);
            }


            this.physics.add.overlap(gameState.junakMali, gameState.stars, (user, star) => {
                stZvezd++
                star.destroy();
            });



        }
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

        if(nStars == 6 && !stars){
            showPopupAchievements(this.loadText("ach_stars"))

            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            stars = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
        }

    }
}

