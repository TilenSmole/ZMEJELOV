var item1, item2, item3, item4, item6, item5, item7, item8, item0


var money
class M3_shop extends M0_shared {
    constructor() {
        super("M3_shop")
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        for (let i = 1; i <= 16; i++) {
            this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
        }
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);
        this.load.image("ach", "assets/achivments/money.png")


    }

  

    create() {
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        //NAREDIMO, DA IGRALEC NE DOBI PONOVNO OBVESTIL O DOSEZENIH ACHIVEMENTIH
        const ach1 = achievements.substring(6, 7);
        const ach2 = achievements.substring(7, 8);
        const ach3 = achievements.substring(8, 9);


        if (ach1 == 1)
            buy = true;
        if (ach2 == 1)
            rainbow = true;
        if (ach3 == 1)
            noCheat = true;


        this.add.text(500, 200, this.loadText("thefinalrage_explanation"), {
            fontSize: '30px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: 800, useAdvancedWrap: true }
        });











        this.zacetek = this.add.sprite(GAME_WIDTH - 100, GAME_HEIGHT - 50, 'gumb').setInteractive();
        this.zacetek.setScale(0.8)
        this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, this.loadText("play"), { fontSize: '30px', fill: '#E950F4' });




        var chest = this.add.image(100, 50, "r1 (1)")
        chest.setScale(.8)

        item0 = this.add.text(250, 50, '180', { fontSize: '30px', fill: '#E950F4' }).setInteractive();




        var shield = this.add.image(100, 150, "r1 (2)")
        shield.setScale(.5)

        item1 = this.add.text(250, 150, '200', { fontSize: '30px', fill: '#E950F4' }).setInteractive();



        var ghost = this.add.image(100, 250, "r1 (5)")

        item2 = this.add.text(250, 250, '50', { fontSize: '30px', fill: '#E950F4' }).setInteractive();


        var shrrom = this.add.image(100, 350, "r1 (6)")

        item3 = this.add.text(250, 350, '50', { fontSize: '30px', fill: '#E950F4' }).setInteractive();


        var potion = this.add.image(100, 450, "r1 (10)")
        item4 = this.add.text(250, 450, '200', { fontSize: '30px', fill: '#E950F4' }).setInteractive();

        var spaceship = this.add.image(100, 550, "r1 (14)")
        item5 = this.add.text(250, 550, '500', { fontSize: '30px', fill: '#E950F4' }).setInteractive();

        var zmeja = this.add.image(100, 650, "r1 (15)")
        zmeja.setScale(.1)
        item6 = this.add.text(250, 650, '300', { fontSize: '30px', fill: '#E950F4' }).setInteractive();

        var ach = this.add.image(100, 750, "ach")
        ach.setScale(.1)
        if (buy)
            this.add.text(250, 750, this.loadText("bought"), { fontSize: '30px', fill: '#E950F4' })
        else
            item7 = this.add.text(250, 750, '1000', { fontSize: '30px', fill: '#E950F4' }).setInteractive();


        gameState.text = this.add.text(GAME_WIDTH - 400, 20, 'Stanje: ' + userCoins, { fontSize: '30px', fill: '#E950F4', fontFamily: 'CustomFont' });


        this.zacetek.on('pointerup', () => {
            stopWatchStart()
            this.scene.stop('M3_shop')
            this.scene.start('M4_red')
        })

        const chooseRandom = () => {
            var random = Math.floor(Math.random() * 6);
        
            if (random === 0) {
                shieldStart = true;
                item1.setText(this.loadText("bought"));
                this.updateBalance();
            } else if (random === 1) {
                ghostStart = true;
                item2.setText(this.loadText("bought"));
                this.updateBalance();
            } else if (random === 2) {
                shroomStart = true;
                item3.setText(this.loadText("bought"));
                this.updateBalance();
            } else if (random === 3) {
                potionStart = true;
                item4.setText(this.loadText("bought"));
                this.updateBalance();
            } else if (random === 4) {
                rocketStart = true;
                item5.setText(this.loadText("bought"));
                this.updateBalance();
            } else if (random === 5) {
                spaceshipStart = true;
                item6.setText(this.loadText("bought"));
                this.updateBalance();
            }
            item0.setText(this.loadText("not_ava"))

        };
        


        item0.on('pointerup', () => {
            if (!shieldStart && !ghostStart && !shroomStart && !potionStart && !rocketStart && !spaceshipStart) {
                if (userCoins - 180 >= 0) {
                    userCoins -= 180
                    chooseRandom()
                    this.updateBalance()

                }

            }
            else {
                item0.setText(this.loadText("not_ava"))
            }




        })

        if (chestPickedInGame) {
            chestPickedInGame = false
            chooseRandom()



        }










        item1.on('pointerup', () => {
            if (userCoins - 200 >= 0) {
                userCoins -= 200
                item0.setText(this.loadText("not_ava"))

                shieldStart = true
                item1.setText(this.loadText("bought"))
                item1.setInteractive = false
                this.updateBalance()
            }

        })

        item2.on('pointerup', () => {
            if (userCoins - 50 >= 0) {
                userCoins -= 50
                item2.setText(this.loadText("bought"))
                ghostStart = true
                this.updateBalance()
                item0.setText(this.loadText("not_ava"))

            }
        })

        item3.on('pointerup', () => {
            if (userCoins - 50 >= 0) {
                userCoins -= 50
                item3.setText(this.loadText("bought"))
                shroomStart = true
                this.updateBalance()
                item0.setText(this.loadText("not_ava"))

            }

        })
        item4.on('pointerup', () => {
            if (userCoins - 200 >= 0) {
                userCoins -= 200
                item4.setText(this.loadText("bought"))
                potionStart = true
                this.updateBalance()
                item0.setText(this.loadText("not_ava"))

            }
        })

        item5.on('pointerup', () => {
            if (userCoins - 500 >= 0) {
                userCoins -= 500
                item5.setText(this.loadText("bought"))
                rocketStart = true
                this.updateBalance()
                item0.setText(this.loadText("not_ava"))

            }

        })

        item6.on('pointerup', () => {
            if (userCoins - 300 >= 0) {
                userCoins -= 300
                item6.setText(this.loadText("bought"))
                spaceshipStart = true
                this.updateBalance()
                item0.setText(this.loadText("not_ava"))

            }


        })
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








        if (!buy) {
            item7.on('pointerup', () => {
                if (userCoins - 1000 >= 0) {
                    userCoins -= 1000
                    item7.setText(this.loadText("bought"))
                    showPopupAchievements(this.loadText("money_ach"))
                    this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                    this.titleMusic.play();
                    buy = true;
                    this.updateAchievements();
                    const dataAchievements = {
                        achievements: achievements,
                    };
                    this.updateDataBaseAchivements(dataAchievements)

                }


            })
        }




    }

    update() {
        gameState.text.setText('Stanje: ' + userCoins);






    }
    updateBalance() {
        const data = {
            money: userCoins,
        };
        this.updateMoney(data)
    }


}