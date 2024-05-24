var item1, item2, item3, item4, item6, item5, item7, item8

class M3_storyIntro extends Phaser.Scene {
    constructor() {
        super({ key: 'M3_storyIntro' });
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        for (let i = 1; i <= 16; i++) {
            this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
        }
    }
    create() {
        this.zacetek = this.add.sprite(GAME_WIDTH - 100, GAME_HEIGHT - 50, 'gumb').setInteractive();
        this.zacetek.setScale(0.8)
        if (usa == true) {
            this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, 'NEXT', { fontSize: '40px', fill: '#E950F4' });
        }
        else if (rus == true) {
            this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, 'СЛЕДУЮЩИЙ', { fontSize: '20px', fill: '#E950F4' });
        }
        else {
            this.add.text(GAME_WIDTH - 165, GAME_HEIGHT - 65, 'NAPREJ', { fontSize: '40px', fill: '#E950F4' });
        }

        this.zacetek.on('pointerup', () => {
            this.scene.stop('M3_storyIntro')
            this.scene.start('M4_gamePlayStart')
        })

        item1 = this.add.image(100, 150, "r1 (2)").setInteractive();
        item1.setScale(.5)
        this.add.text(200, 125, storage.shield ? storage.shield : 0, { fontSize: '40px', fill: '#E950F4' });

        item2 = this.add.image(100, 250, "r1 (5)").setInteractive();
        this.add.text(200, 225, storage.ghost ? storage.ghost : 0, { fontSize: '40px', fill: '#E950F4' });


        item3 = this.add.image(100, 350, "r1 (6)").setInteractive();
        this.add.text(200, 325, storage.shroom ? storage.shroom : 0, { fontSize: '40px', fill: '#E950F4' });

        item4 = this.add.image(100, 450, "r1 (10)").setInteractive();
        this.add.text(200, 425, storage.potion ? storage.potion : 0, { fontSize: '40px', fill: '#E950F4' });

        item5 = this.add.image(100, 550, "r1 (14)").setInteractive();
        this.add.text(200, 525, storage.rocket ? storage.rocket : 0, { fontSize: '40px', fill: '#E950F4' });

        item6 = this.add.image(100, 650, "r1 (15)").setInteractive();
        item6.setScale(.1)
        this.add.text(200, 650, storage.spaceship ? storage.spaceship : 0, { fontSize: '40px', fill: '#E950F4' });





        item1.on('pointerup', () => {
            if (storage.shield > 0) {
                shieldAbility = true
                storage.shield--
            }

        })

        item2.on('pointerup', () => {
            if (storage.ghost > 0) {
                ghostAbility = true
                storage.ghost--
            }
        })

        item3.on('pointerup', () => {
            if (storage.shroom > 0) {
                shroomAbility = true
                storage.shroom--
            }
        })


        item4.on('pointerup', () => {
            if (storage.potion > 0) {
                potionAbility = true
                storage.potion--
            }
        })
        item5.on('pointerup', () => {
            if (storage.rocket > 0) {
                rocketAbility = true
                storage.rocket--
            }
        })

        item6.on('pointerup', () => {
            if (storage.spaceship > 0) {
                spaceshipAbility = true
                storage.spaceship--
            }
        })








    }



}