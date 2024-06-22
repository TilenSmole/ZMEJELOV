const clouds = []
class A7_droper extends Phaser.Scene {
    constructor() {
        super({
            key: 'A7_droper',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 20 }
                }
            }
        });
    }
    preload() {
        this.load.image("ozadje7", "assets/droper/blue-sea-sky-background-calm-sea-surface-sky-clouds-vector-illustration_625536-133.png")
        this.load.image("platformO1", "assets/droper/Smoke VFX B2.png")
        this.load.image("platformO2", "assets/droper/Smoke VFX C1.png")
        this.load.image("platformO3", "assets/droper/Smoke VFX A1.png")
        this.load.image("platformO4", "assets/droper/Smoke VFX B1.png")
        this.load.image("izhod", "assets/Sign_01.png")
        this.load.image("tla7", "assets/scena6/Brick_02.png")
        this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
        this.load.atlas("zmejaD", "assets/najdela/najdela.png", "assets/najdela/najdela.json")
        this.load.image("zaklad", "assets/Chest_01_Locked.png")
        this.load.image("sovraznik", "assets/enemy/Wraith_02_Idle Blinking_003.png")
        this.load.image("spaceship", "assets/scena6/spaceship.png")
        this.load.image("znak", "assets/Sign_01.png")
        this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
        this.load.audio('poraz', ['assets/uvod/smrt.mp3', "assets/uvod/smrt.ogg"]);
        this.load.image("heart", "assets/droper/heart.png")

    }
    updateDataBase(data) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/SERVER/DatabaseUpdater.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log("Server Response:", xhr.responseText);
                        resolve("Database updated successfully");
                    } else {
                        reject("Failed to update database");
                    }
                }
            };

            xhr.send(JSON.stringify(data));
        });

    }

    replaceCharAt(str, index, replacement) {
        if (index < 0 || index >= str.length) {
            return str; // Index out of range, return original string
        }
        return str.substring(0, index) + replacement + str.substring(index + 1);
    }
    updateDificulty() {
        var difficultyUpdated = "0000";

        if (easy) {
            difficultyUpdated = this.replaceCharAt(difficultyUpdated, 0, "0");
        } else {
            difficultyUpdated = this.replaceCharAt(difficultyUpdated, 0, "1");
        }

        if (zmaga) {
            difficultyUpdated = this.replaceCharAt(difficultyUpdated, 1, "1");
        }

        if (spawn6 && !spawnP) {
            difficultyUpdated = this.replaceCharAt(difficultyUpdated, 2, "1");
        } else if (spawnP) {
            difficultyUpdated = this.replaceCharAt(difficultyUpdated, 2, "2");
        }

        if (zaprto) {
            difficultyUpdated = this.replaceCharAt(difficultyUpdated, 3, "1");
        }

        console.log('difficultyUpdated' + difficultyUpdated);
        difficulty = difficultyUpdated;





    }

    create() {
        if (easy == true) {
            stZivljenj = 4
        }
        else {
            stZivljenj = 3
        }





        if (easy == true) {
            trenutnaScena = "A7_droper"
        }
        else if ((zmaga == true && spawn6 /*&&cheatZaHard == 0*/)) {
            trenutnaScena = "A6_scena6"
        }
        else {
            trenutnaScena = "A4_scena4"
        }

        if (!vrniNaPogoj) {
            this.updateDificulty()
            const data = {
                lastLevel: "A7_droperUvod",
                difficulty: difficulty
            };

            this.updateDataBase(data)
                .then(response => {
                    console.log("progress saved!");
                })
                .catch(error => {
                    console.error(error);
                });

        }






        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.active = true;
        const visina = 24000
        const dolzina = 1250
        //ozadje full screen
        this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadje7');
        this.bg.setDisplaySize(dolzina, visina)


        gameState.junak = this.physics.add.sprite(dolzina / 2, 0, "zmejaD")
        gameState.junak.setScale(.2)// pomanjsa


        var spaceship = this.add.image(gameState.junak.x, gameState.junak.y + 165, "spaceship")


        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)
        this.cameras.main.startFollow(gameState.junak)

        //oblacki
        var oblacki = ["platformO1", "platformO2", "platformO3", "platformO4"]
        const platforms = this.physics.add.staticGroup(); //128*128
        gameState.junak.setCollideWorldBounds(true)
  
        var manjsa = 1000
        var pogoj = 0
        plus = 0
        while (pogoj < 800 && manjsa < (visina - 6500)) {
            //razlika med oblakoma 
            //vedno 2 oblaka
            var kordinata = Math.floor(Math.random() * (dolzina + 50));
            var dolzinaO = Math.floor(Math.random() * (dolzina) / 3);
            var zaY = Math.floor(Math.random() * 100);
            var plus = Math.floor(Math.random() * dolzina / 3)
            var oblak = Math.floor(Math.random() * 4);
            const podenj = platforms.create(kordinata, manjsa - zaY, oblacki[oblak])
            podenj.setScale(2.6)
            clouds.push(podenj)
            var st = Math.floor(Math.random() * 11);
            if (st > 4) {
                var kordinata = Math.floor(Math.random() * (dolzina + 50));
                var dolzinaO = Math.floor(Math.random() * (dolzina) / 3);
                var zaY = Math.floor(Math.random() * 100);
                var plus = Math.floor(Math.random() * dolzina / 3)
                var oblak = Math.floor(Math.random() * 4);
                var podenj2 = platforms.create(kordinata, manjsa - zaY, oblacki[oblak])
                podenj2.setScale(2.6)
                clouds.push(podenj2)
            }
            var st = Math.floor(Math.random() * 12);
            //se en
            if (pogoj > 12 && st > 2) {
                var kordinata = Math.floor(Math.random() * (dolzina + 50));
                var dolzinaO = Math.floor(Math.random() * (dolzina) / 3);
                var zaY = Math.floor(Math.random() * 100);
                var plus = Math.floor(Math.random() * dolzina / 3)
                var oblak = Math.floor(Math.random() * 4);
                var podenj2 = platforms.create(kordinata, manjsa - zaY, oblacki[oblak])
                podenj2.setScale(2.6)
                clouds.push(podenj2)
            }
            //se en
            var st = Math.floor(Math.random() * 8);
            if (pogoj > 50 && st > 3) {
                var kordinata = Math.floor(Math.random() * (dolzina + 50));
                var dolzinaO = Math.floor(Math.random() * (dolzina) / 3);
                var zaY = Math.floor(Math.random() * 100);
                var plus = Math.floor(Math.random() * dolzina / 3)
                var oblak = Math.floor(Math.random() * 4);
                var podenj2 = platforms.create(kordinata, manjsa - zaY, oblacki[oblak])
                podenj2.setScale(2.6)
                clouds.push(podenj2)
            }




            var razlika = Math.floor(Math.random() * 500) + 350;
            pogoj += 1
            manjsa += razlika

        }




        var tla = []
        for (let x = 0; x < dolzina + 115; x = x + 115) {
            const podenj = platforms.create(x, visina - 2540, 'tla7')
            const podenj2 = platforms.create(x, visina - 2660, 'tla7')
            const podenj3 = platforms.create(x, visina - 2420, 'tla7')
            tla.push(podenj3)
            tla.push(podenj)
            tla.push(podenj2)

        }
        const atlantida = this.physics.add.sprite(200, visina - 3000, "rusevine")
        const sovraznik = this.physics.add.sprite(500, visina - 3000, "sovraznik")
        sovraznik.setScale(.3)
        const zaklad = this.physics.add.sprite(850, visina - 3000, "zaklad")
        const izhod = this.physics.add.sprite(1100, visina - 3000, "izhod")

        this.physics.add.collider(tla, izhod)
        this.physics.add.collider(tla, zaklad)
        this.physics.add.collider(tla, sovraznik)
        this.physics.add.collider(tla, atlantida)

        this.anims.create({
            key: 'stoji',
            frames: [
                { key: 'zmejaD', frame: "Wraith_03_Idle_000.png" },],
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'umre',
            frames: [
                { key: 'zmejaD', frame: "assets/lvl2/Wraith_03_Dying_000.png" },],
            frameRate: 8,
            repeat: -1
        });
        var naPol = dolzina / 2 - 380

        this.physics.add.overlap(gameState.junak, tla, () => {
            this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
            this.titleMusic.play();
            stSmrti += 1
            this.anims.pauseAll();
            gameState.active = false;
            vrstaTeksta = "level_7_konec"
            vrsta_smrt = true
            this.scene.stop('A7_droper')
            this.scene.start('vrsta')
        })





        if (easy) {
            gameState.heart4 = this.physics.add.sprite(190, gameState.junak.y - 50, "heart")
            gameState.heart4.setScale(0.1)
        }
        gameState.heart1 = this.physics.add.sprite(40, gameState.junak.y - 50, "heart")
        gameState.heart1.setScale(0.1)
        gameState.heart2 = this.physics.add.sprite(90, gameState.junak.y - 50, "heart")
        gameState.heart2.setScale(0.1)
        gameState.heart3 = this.physics.add.sprite(140, gameState.junak.y - 50, "heart")
        gameState.heart3.setScale(0.1)







    }

    update() {
        if (gameState.active) {
            if (gameState.cursors.right.isDown) {
                gameState.junak.setVelocityX(500)
                gameState.junak.anims.play('stoji', true)
                gameState.junak.flipX = false;
            }
            else if (gameState.cursors.left.isDown) {
                gameState.junak.setVelocityX(-500);
                gameState.junak.anims.play('stoji', true);
                gameState.junak.flipX = true;
            }
            else {
                gameState.junak.setVelocityX(0);
                gameState.junak.anims.play('stoji', true);
            }

        }

        gameState.heart1.y = gameState.junak.y - 50
        gameState.heart2.y = gameState.junak.y - 50
        gameState.heart3.y = gameState.junak.y - 50
        if (easy)
            gameState.heart4.y = gameState.junak.y - 50


        this.physics.add.overlap(gameState.junak, clouds, (_, cloud) => {
            cloud.destroy()

            this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
            this.titleMusic.play();
            console.log('ştik');
            if (stZivljenj > 0) {
                gameState.junak.y = gameState.junak.y + 150
                stZivljenj -= 1
                if (stZivljenj == 3)
                    gameState.heart4.destroy()
                if (stZivljenj == 2)
                    gameState.heart3.destroy()
                if (stZivljenj == 1)
                    gameState.heart2.destroy()



            }
           else  if (stZivljenj == 0) {

                stSmrti += 1
                this.anims.pauseAll();
                gameState.active = false;
                vrstaTeksta = "padec"
                vrsta_smrt = true
                this.scene.stop('A7_droper')
                this.scene.start('vrsta')

            }
        });



    }
}





