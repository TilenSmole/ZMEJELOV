var nStars = 0 //number of collected stars for the achievement

class M4_deathScreen extends M0_shared {
    constructor() {
        super("M4_deathScreen");
    }


    create() {
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        const xKordinata = (Math.random() * 490)
        const yKordinata = (Math.random() * 350)


        this.add.text(xKordinata, yKordinata, this.loadText("space_restart"), { fontSize: '40px', fill: "#E950F4" })

        const showPopupAchievements = (text) => {
            const rectangle = this.add.rectangle(GAME_WIDTH - 300, 0, 700, 100, 0XFFFFFF);
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

        if (canShowAnAchivement) {
            showPopupAchievements(this.loadText("no_pups"))
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            tfK = true
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
            canShowAnAchivement = false
        }

        if (wisdom) {
            var num = Math.floor(Math.random() * 11)

            this.add.text(100, GAME_HEIGHT - 400, this.loadText("wisdom" + num), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
            });
        }


        if (coinsNewGame) {
            const money = {
                money: userCoins + coinsNewGame,
            };
            this.updateMoney(money);
            saveResOnce = true
            coinsNewGame = 0;

        }

        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('M4_deathScreen')
            this.scene.start("M2_inicial")
        });










    }
}

