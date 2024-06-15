var visina = 800
var dolzina = 1300


class F4_gamePlayStart extends F0_shared {
    constructor() {
        super("F4_gamePlayStart")
    }
    preload() {
        super.preload()
        for (let i = 1; i <= 7; i++) {
            this.load.image("b" + i, "assets/a_njam_njam/background/" + i + ".png");
        }
        if (timeToPlay)
            time = timeToPlay
        this.load.image("b_mesto", " assets/mesto/City2.png");



        this.load.image("platform2", "assets/a_speedRunning/platforms/Pad_04_1.png")

        for (let i = 1; i <= 101; i++) {
            this.load.image("f" + i, "assets/a_njam_njam/foods/1 (" + i + ").png");
        }
        for (let i = 1; i <= 16; i++) {
            this.load.image("s" + i, "assets/a_njam_njam/bad/s" + i + ".png");
        }

        this.load.image("star", "assets/a_njam_njam/star.png")
        this.load.image("shield", "assets/a_njam_njam/shield.png")
        this.load.image("heart", "assets/droper/heart.png")

        this.load.image("multiplier", "assets/a_njam_njam/multiplier.png")
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);



    }

    create() {
        food = [];
        destoyers = [];
        allPlatforms = []
        star = false
        heart = false
        shield = false
        hearts = []
        shields = []
        distanceHeart = 0
        heartsOnScreen = []
        startTime = 0
        startTimeMultiplayer = 0
        scoreMultiplier = 1 //how much multiplayer a player has 
        super.create();

        gameState.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'b2');


        if (countdown)
            gameState.bg.setTexture('b_mesto');;

        gameState.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)

        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)

        gameState.junak = this.physics.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT - 200, "Zmeja")
        gameState.junak.setScale(.6)// pomanjsa
        gameState.junak.setDepth(0)



        const platforms = this.physics.add.staticGroup();

        var razmik = 0
        for (var i = 0; i < 10; i++) {
            var startPlatfrom = platforms.create(200 + razmik, visina + 100, "platform2");
            allPlatforms.push(startPlatfrom);
            razmik += 400
        }

        gameState.spawnEvent = this.time.addEvent({
            delay: delayTimer,
            callback: spawn,
            callbackScope: this,
            loop: true
        });


        if (countdown) {
            gameState.countdown = this.add.text(GAME_WIDTH - 200, 50, 'Time left: ', { fontSize: '30px', fill: '#E950F4', fontFamily: 'CustomFont' });
            gameState.countdown.setDepth(0)
        }


        gameState.text = this.add.text(GAME_WIDTH - 200, 0, 'Score: ', { fontSize: '30px', fill: '#E950F4', fontFamily: 'CustomFont' });

        gameState.text.setDepth(0)



        this.physics.add.collider(gameState.junak, allPlatforms)
        gameState.junak.setCollideWorldBounds(true) //ne more vn past



        this.physics.add.overlap(gameState.junak, shields, (user, oneShield) => {
            if (!shield) {
                shieldIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "shield")
                startTime = this.getTimePassed()
                shield = true
                oneShield.destroy()
            }

        })

        this.physics.add.overlap(gameState.junak, hearts, (user, heart) => {
            distanceHeart += 40
            var newHeart = this.add.image(distanceHeart, 35, "heart");
            newHeart.setScale(0.1);
            hearts.push(newHeart);
            heartsOnScreen.push(newHeart)
            heart.destroy()

        })


        this.physics.add.overlap(gameState.junak, multipliers, (user, Onemultiplier) => {
            Onemultiplier.destroy()
            scoreMultiplier++;
        })

        this.foodPool = this.physics.add.group();

        // Create a pool of 100 food sprites
        for (var i = 1; i <= 100; i++) {
            var pieceOfFood = this.foodPool.create(-100, -100, 'f' + i);
            pieceOfFood.setActive(false);
            pieceOfFood.setVisible(false);
            pieceOfFood.setScale(2.5);
        }



        countdownEvent = this.time.addEvent({
            delay: 1000,
            callback: () => {
                time--
            },
            callbackScope: this,
            loop: true
        });

    }

    update() {

        if (gameState.active && gameState.junak) {

            if (gameState.cursors.right.isDown) {
                gameState.junak.setVelocityX(600)
                gameState.junak.anims.play('walk', true)
                gameState.junak.flipX = false;
            }
            else if (gameState.cursors.left.isDown) {
                gameState.junak.setVelocityX(-600);
                gameState.junak.anims.play('walk', true);
                gameState.junak.flipX = true;
            }
            else {
                gameState.junak.setVelocityX(0);
                gameState.junak.anims.play('idle', true);
            }

        }




        var currentTime = this.getTimePassed()
        //
        if (shield) {
            shieldIcon.x = gameState.junak.x - 100
            shieldIcon.y = gameState.junak.y - 50;

            if (startTime + 15 <= currentTime) {
                shieldIcon.destroy()
                shield = false
            }

        }


        gameState.text.setText('Score: ' + score);
        gameState.spawnEvent.delay = delayTimer;
          this.physics.add.overlap(gameState.junak, destoyers, (user, destoyer) => {
              if (heartsOnScreen.length !== 0) {
                  if (!shield) {
                      distanceHeart -= 40
                      var removedHeart = heartsOnScreen.pop();
                      destoyer.destroy();
                      removedHeart.destroy();
                  }
  
  
              } else if (countdown) {
                  destoyer.destroy();
                  score -= 50
              }
              else {
                console.log('¸pain');
                destoyer.destroy();

                 // this.stopWatchStop()
                 // this.scene.stop('F4_gamePlayStart')
                 // this.scene.start('F5_konec')
              }
  
          })

        this.physics.add.overlap(gameState.junak, food, (user, OnePiecefood) => {
            OnePiecefood.destroy()
            score += (10 * scoreMultiplier)
        })


        if (countdown) {
            gameState.countdown.setText('Time left: ' + time);
            if (time <= 0) {

                var type = 4
                if (timeToPlay == 60)
                    type = 3
                else if (timeToPlay == 20)
                    type = 2



                const data = {
                    type: type,
                    score: score
                };

                this.updateDataBase(data)
                    .then(response => {
                        console.log("progress saved!     " + response);
                    })
                    .catch(error => {
                        console.error(error);
                    });

                countdownEvent.remove();
                this.stopWatchStop()
                this.scene.stop('F4_gamePlayStart')
                this.scene.start('F5_konec')
            }



        } else {
            if (!H && score > 50) {
                this.showPopupAchievements(" 50")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                H = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            }
            else if (!FH && score > 200) {
                this.showPopupAchievements("  200")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                FH = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            } else if (!T && score > 500) {
                this.showPopupAchievements("  500")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                T = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            } else if (!tfT && score > 1000) {
                this.showPopupAchievements("  1000")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                tfT = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            }
            else if (!fT && score > 5000) {
                this.showPopupAchievements(" 5000")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                fT = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            } else if (!K && score == 10000) {
                this.showPopupAchievements("  10000")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                K = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)
            } else if (!tfK && score > 25000) {
                this.showPopupAchievements("  25000")
                this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
                this.titleMusic.play();
                tfK = true
                this.updateAchievements();
                const dataAchievements = {
                    achievements: achievements,
                };
                this.updateDataBaseAchivements(dataAchievements)


            }

        }








        super.update("basic")
    }

    spawnJackpot() {
        var yLength = Math.round(Math.random() * 10) + 30;
        var distance = 0;
        var randomPosXInside = Math.round(Math.random() * GAME_WIDTH);

        for (var i = 0; i < yLength; i++) {
            var foodNum = Math.floor(Math.random() * 100) + 1;

            // Get the first dead piece of food from the pool
            var pieceOfFood = this.foodPool.getFirstDead();

            // If a dead piece of food is found, revive and position it
            if (pieceOfFood) {
                pieceOfFood.setTexture('f' + foodNum); // Set the correct texture
                pieceOfFood.setPosition(randomPosXInside, 0 + distance);
                pieceOfFood.setVelocityY(speedOfDrops);
                pieceOfFood.setActive(true);
                pieceOfFood.setVisible(true);
                food.push(pieceOfFood);
                distance -= 60;
            }
        }
    }



    activateSpawn() {
        var randomPosX = Math.round(Math.random() * GAME_WIDTH)
        var randomPosY = Math.round(Math.random() * 800)
        var buff = Math.round(Math.random() * 5)


        if (buff == 0) {
            var buffType = Math.round(Math.random() * 7)
            if (buffType == 0) {
                this.spawnJackpot();
            } else if (buffType == 1 || buffType == 2) {
                var heart = this.physics.add.sprite(randomPosX, 0 - randomPosY, "heart")
                heart.setVelocityY(speedOfDrops);
                heart.setScale(0.1)
                hearts.push(heart)

            }
            else if (buffType == 3 || buffType == 4) {
                var shield = this.physics.add.sprite(randomPosX, 0 - randomPosY, "shield")
                shield.setVelocityY(speedOfDrops);
                shields.push(shield)
            }
            else if (buffType == 5 || buffType == 6) {
                var multiplier = this.physics.add.sprite(randomPosX, 0 - randomPosY, "multiplier")
                multiplier.setScale(.5)
                multiplier.setVelocityY(speedOfDrops);
                multipliers.push(multiplier)
            }
        }
        randomPosX = Math.round(Math.random() * GAME_WIDTH)
        randomPosY = Math.round(Math.random() * 800)
        var randomEle = Math.round(Math.random())

        if (randomEle == 0) {
            var foodNum = Math.floor(Math.random() * 100) + 1;
            var pieceOfFood = this.physics.add.sprite(randomPosX, 0 - randomPosY, "f" + foodNum)
            pieceOfFood.setVelocityY(speedOfDrops);
            pieceOfFood.setScale(2.5)
            food.push(pieceOfFood)
        }
        else {
            var destoyerNum = Math.floor(Math.random() * 10) + 1;
            var destoyer = this.physics.add.sprite(randomPosX, 0 - randomPosY, "s" + destoyerNum)
            destoyer.setVelocityY(200);
            destoyer.setScale(2.5)
            destoyers.push(destoyer)
        }

    }
    changeBc() {
        gameState.bg.setTexture('b' + typeOfBc[typeOfBcIndex % 7]);;
        typeOfBcIndex++
        speedOfDrops += 20
    }
    showPopupAchievements = (text, onFinish) => {
        const rectangle = this.add.rectangle(GAME_WIDTH - 300, 0, 700, 100, 0XFFFFFF);
        rectangle.setOrigin(0.5, 0);

        const graphics = this.add.graphics();
        graphics.fillStyle(0xffffff, 1);
        graphics.fillRect(rectangle.x - rectangle.width / 2, rectangle.y, rectangle.width, rectangle.height);

        const popup = this.add.text(GAME_WIDTH - 300, 40, text, {
            fontSize: '32px',
            color: '#000000',
            align: 'center',
            wordWrap: { width: rectangle.width - 20, useAdvancedWrap: true }
        });
        popup.setOrigin(0.5);

        this.time.delayedCall(4000, () => {
            popup.destroy();
            rectangle.destroy();
            graphics.destroy();

            // Call the onFinish function once the popup is closed
            if (onFinish) {
                onFinish();
            }
        });
    };

}

function spawn() {
    timer = this.getTimePassed()

   console.log('food '    + food.length);
    if (!countdown) {
        if (timer < 15) {
            this.activateSpawn()
            gameState.bg.setTexture('b2');;

        }
        else if (timer > 15 && timer < 50) {
            food = [];
            destoyers = []; for (var i = 0; i < 2; i++) {
                this.activateSpawn()
            }
            gameState.bg.setTexture('b3');;
            speedOfDrops = 320
        }
        else if (timer > 50 && timer < 80) {
            food = [];
            destoyers = []; for (var i = 0; i < 3; i++) {
                this.activateSpawn()
            }
            gameState.bg.setTexture('b4');;
            speedOfDrops = 350
        }
        else if (timer > 80 && timer < 120) {
            food = [];
            destoyers = []; for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }
            gameState.bg.setTexture('b5');;
        }
        else if (timer > 120 && timer < 170) {
            food = [];
            destoyers = [];
            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }

            gameState.bg.setTexture('b6');;
            speedOfDrops = 400
        }
        else {
            food = [];
            destoyers = [];
            if (timer % 60 == 0) {
                this.changeBc()
            }

            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }


        }
        console.log('food2 ' + food.length);
        console.log('');

    }
    else {
        if (timer <= 5) {
            this.activateSpawn()
            for (var i = 0; i < 2; i++) {
                this.activateSpawn()
            }


        }
        else if (timer > 5 && timer <= 40) {
            food = [];
            destoyers = [];
            speedOfDrops = 320
            for (var i = 0; i < 3; i++) {
                this.activateSpawn()
            }
        }
        else if (timer > 40 && timer <= 60) {
            food = [];
            destoyers = [];
            speedOfDrops = 400
            for (var i = 0; i < 3; i++) {
                this.activateSpawn()
            }
        }
        else if (timer > 60 && timer < 90) {
            food = [];
            destoyers = [];
            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }
        } else {


            food = [];
            destoyers = [];



            speedOfDrops = 420


            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }


        }
    }


}









