const dolzina = 50000
var freshlyRocketDone = false
var lowerPlatforms = [];
var upperPlatforms = [];

var finalPlatform = [];
var playOnce = false
var coins = [];
var enemies = [];

var zen = false
var buffs = []
var distance = 0
var shieldIcon = ""
var startTimeShield = 0
var gameStateStoredX = 0
var heartIcon = ""
var startTimeheart = 0
var potionActivation = false
var spaceShipIcon = ""
var startTimespaceShip = 0

var shroomIcon = ""
var startTimeshroom = 0

var ghostIcon = ""
var startTimeGhost = 0

class M4_red extends M0_shared {
    constructor() {
        super("M4_red")
    }

    showPopupAchievements(text) {
        const rectangle = this.add.rectangle(999833, 2827, dolzina, 3000, 0XAAAAFF);
        rectangle.setOrigin(0.5, 0);

        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(rectangle.x - rectangle.width / 2, rectangle.y, rectangle.width, rectangle.height);

        const popup = this.add.text(999833, 2827, text, {
            fontSize: '32px',
            color: '#980a69',
            align: 'center',
            wordWrap: { width: rectangle.width - 20, useAdvancedWrap: true }
        });

        this.time.delayedCall(4000, () => {
            popup.destroy();
            rectangle.destroy();
            graphics.destroy();
        });
    }
    preload() {
        super.preload()
        this.load.image('ship', "assets/a_TheFinalRage/r1 (15).png");


    }



    create() {
        super.create();
        lowerPlatforms = [];
        coins = [];
        enemies = [];

        //ozadje rainbow
        var rainbowWidth = 50000; // Width of each color segment

        var p1 = this.add.graphics();


        // Fill the graphics objects with gradient fills representing the colors of the rainbow
        p1.fillStyle(0xFF0000, 1); // Red
        p1.fillRect(0, 0, rainbowWidth, visina);




        // Fill the graphics object with the desired color
        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)

        // gameState.junak = this.physics.add.sprite(dolzina-800, visina - 400, "Zmeja")
        gameState.junak = this.physics.add.sprite(200, visina - 400, "zmeja")




        gameState.junak.setCollideWorldBounds(true)
        gameState.junak.setScale(.40)// pomanjsa
        this.cameras.main.startFollow(gameState.junak)





        for (var i = 0; i < 5; i++) {
            var startPlatform = this.createRectanglePlatform(200 + distance, visina - 200);
            lowerPlatforms.push(startPlatform);
            distance += 200
        }

        var distanceEnd = 200
        for (var i = 0; i < 7; i++) {
            var startPlatform = this.createRectanglePlatform(dolzina - distanceEnd, visina - 100);
            finalPlatform.push(startPlatform);
            distanceEnd -= 200

        }

        gameState.spawnEvent = this.time.addEvent({
            delay: 100,
            callback: spawn,
            callbackScope: this,
            loop: true
        });



        gameState.text = this.add.text(dolzina - 200, visina - 600, 'Coins: ', { fontSize: '30px', fill: '#000000', fontFamily: 'CustomFont' });
        gameState.text.setDepth(0)

        gameState.coins = this.add.text(dolzina - 200, visina - 800, 'Coins: ', { fontSize: '30px', fill: '#000000', fontFamily: 'CustomFont' });
        gameState.coins.setDepth(0)









    }



    update() {
        //cleaning
        coins.forEach(coin => {
            if (coin.x < gameState.junak.x - 1000) {
                coin.destroy();
            }
        });
        if (gameState.junak.x >= 49950) {
            this.scene.stop('M4_red');
            this.scene.start('M4_orange');
        }
        lowerPlatforms.forEach(platform => {
            if (platform.x + platform.width < gameState.junak.x - 1000) {
                platform.destroy();
                lowerPlatforms.splice(lowerPlatforms.indexOf(platform), 1);
            }
        });


        if (gameState.active) {
            if ((gameState.cursors.up.isDown && gameState.junak.body.touching.down)) {
                gameState.junak.anims.play('skok', true);
                gameState.junak.setVelocityY(this.getJumpingSpeed())
            }
            if(gameState.cursors.down.isDown){
                gameState.junak.setVelocityY(-(this.getJumpingSpeed()))

            }


            if (rocketStart) {
                gameState.junak.setVelocityX(100000)
                gameState.junak.x = gameState.junak.x++;
                gameState.junak.y = visina - 400
                for (let index = 55900; index <= 60000; index += 200) {
                    var startPlatfrom = this.createRectanglePlatform(index, visina - 400);
                    lowerPlatforms.push(startPlatfrom);
                }
                if (gameState.junak.x > 56000) {
                    rocketStart = false
                    freshlyRocketDone = true
                }


            }
            else {
                if (freshlyRocketDone) {
                    gameState.junak.y = visina - 700
                    freshlyRocketDone = false
                }
                else if (!potionActivation) {
                    gameState.junak.setVelocityX(500)
                }
                //    gameState.junak.setVelocityX(1000)

            }

            gameState.junak.anims.play('walk', true)

        }


        if (!rocketStart) {
            this.physics.add.collider(gameState.junak, lowerPlatforms)

        }




        if (didntCheat && !noCheat && score > 10000) {
            this.showPopupAchievements("25000")
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            tfK = true
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
        }



        this.physics.add.overlap(gameState.junak, buffs, (user, buff) => {
            if (buff.value == 2) {
                if (!shield) {
                    shieldIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (2)")
                    shieldIcon.setScale(.3)
                    startTimeShield = this.getTimePassed()
                    shield = true
                    distance += 50
                    didntCheat = false
                }
            }
            else if (buff.value == 1) {
                inventory.push("chest")
            } else if (buff.value == 3) {
                wisdom = true
            } else if (buff.value == 5) {
                if (!ghost) {
                    ghostIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (5)")
                    startTimeGhost = this.getTimePassed()
                    ghost = true
                    distance += 50
                    didntCheat = false

                }
            } else if (buff.value == 6) {
                if (!shroom) {
                    shroomIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (6)")
                    startTimeshroom = this.getTimePassed()
                    shroom = true
                    distance += 50
                    didntCheat = false

                }
            } else if (buff.value == 9 || buff.value == 10) {
                if (!heart) {
                    startTimeheart = this.getTimePassed()
                    heart = true
                    distance += 50
                    if (buff.value == 9) {
                        heartIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (10)")
                    }
                    else {
                        heartIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (9)")
                        heartIcon.setScale(.5)
                    }
                    didntCheat = false


                }
            } else if (buff.value = 14) {
                speedShip = true
                didntCheat = false


            } else if (buff.value = 15) {
                if (!spaceShip) {
                    spaceShipIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (15)")
                    startTimespaceShip = this.getTimePassed()
                    spaceShip = true
                    didntCheat = false

                }
            }
            /*    if (buff.value == 3 || buff.value == 12 || buff.value == 13)
                    return*/


            buff.destroy()




        })


        var currentTime = this.getTimePassed()

        borderLeft = gameState.junak.x - 1500
        gameState.text.setText('Score: ' + score++);
        gameState.coins.setText('Coins: ' + coinsNewGame);

        gameState.coins.x = this.cameras.main.scrollX + 1000;
        gameState.coins.y = this.cameras.main.scrollY + 100;

        gameState.text.x = this.cameras.main.scrollX + 1000;
        gameState.text.y = this.cameras.main.scrollY + 50;




        if (gameState.junak.y >= visina - 100) {
            if (potionStart || spaceshipStart ||heart || spaceShip) {
                potionActivation = true
                gameState.junak.setVelocityX(0)
                gameStateStoredX = gameState.junak.x
                for (let index = gameState.junak.x; index <= gameStateStoredX + 1500; index += 200) {
                    var startPlatfrom = this.createRectanglePlatform(index, visina - 400);
                    lowerPlatforms.push(startPlatfrom);
                }
                gameState.junak.x = gameStateStoredX + 100
                gameState.junak.y = visina - 600

                setTimeout(() => {
                    potionActivation = false
                    if (potionStart)
                        potionStart = false
                    if (spaceshipStart)
                        spaceshipStart = false
                    if (heart)
                        heart = false
                    if (spaceShip)
                        spaceShip = false

                }, 2000);


            }
            else {
                this.scene.stop('M4_red')
                this.scene.start('M5_konec')
            }

        }



        lowerPlatforms.forEach(platform => {
            if (platform.x < borderLeft) {
                platform.destroy();
            }
        });

        upperPlatforms.forEach(platform => {
            if (platform.x < borderLeft) {
                platform.destroy();
            }
        });

        coins.forEach(coin => {
            if (coin.x < borderLeft) {
                coin.destroy();
            }
        })





        gameState.junak.x = gameState.junak.x
        super.update("basic")


        this.physics.add.overlap(gameState.junak, coins, (user, coin) => {
            coinsNewGame += coin.value;
            coin.destroy()

        })



        this.physics.add.overlap(gameState.junak, enemies, (user, enemy) => {
            if (!shroomStart || !shieldStart || !spaceshipStart ||spaceShip ||shroom ||shield ) {
                this.scene.stop('M4_red')
                this.scene.start('M5_konec')
            }
            else {
                enemy.destroy()
                if (ghostStart)
                    ghostStart = false
                if (shieldStart)
                    shieldStart = false
                if (spaceshipStart)
                    spaceshipStart = false
                if (spaceShip)
                    spaceShip = false
                if (shroom)
                    shroom = false
                if (shield)
                    shield = false
            }

        })




        this.physics.add.overlap(gameState.junak, upperPlatforms, (user, platform) => {
            if (ghostStart || shieldStart || spaceshipStart ||shield || spaceShip || ghost) {
                upperPlatforms.forEach(platform => {
                    platform.destroy();
                });
                if (ghostStart)
                    ghostStart = false
                if (shieldStart)
                    shieldStart = false
                if (spaceshipStart)
                    spaceshipStart = false
                if (spaceShip)
                    spaceShip = false
                if (shield)
                    shield = false
                if (ghost)
                    ghost = false
            }
            else {

                this.scene.stop('M4_red')
                this.scene.start('M5_konec')

            }

        })

        enemies.forEach(enemy => {
            if (enemy.x >= enemy.targetMax) {
                enemy.reachedTarget = true
            }
            else if (enemy.x <= enemy.targetMin) {
                enemy.reachedTarget = false
            }

            if (enemy.x < enemy.targetMax && !enemy.reachedTarget) {
                enemy.anims.playReverse('reaperMovement', true);
                enemy.setVelocityX(500);
                enemy.flipX = false;
            } else if (enemy.x >= enemy.targetMin) {
                enemy.anims.playReverse('reaperMovement', true);
                enemy.setVelocityX(-500);
                enemy.flipX = true;
            }



        });


        if (shield) {
            shieldIcon.x = gameState.junak.x - 100
            shieldIcon.y = gameState.junak.y - 50;
            if (startTimeShield + 5 <= currentTime) {
                shieldIcon.destroy()
                shield = false
                distance -= 50
            }
        }


        if (ghost) {
            ghostIcon.x = gameState.junak.x - 200
            ghostIcon.y = gameState.junak.y - 50;
            if (startTimeGhost + 5 <= currentTime) {
                ghostIcon.destroy()
                ghost = false
            }

        }

        if (shroom) {

            shroomIcon.x = gameState.junak.x - 250
            shroomIcon.y = gameState.junak.y - 50;
            if (startTimeshroom + 5 <= currentTime) {
                shroomIcon.destroy()
                ghost = false
            }


        }

        if (heart) {
            heartIcon.x = gameState.junak.x - 150
            heartIcon.y = gameState.junak.y - 50;
            if (startTimeheart + 5 <= currentTime) {
                heartIcon.destroy()
                heart = false
                distance -= 50
            }




        }
        if (spaceShip) {


            gameState.junak.setTexture('r1 (15)')

            if (startTimespaceShip + 5 <= currentTime) {
                spaceShip = false
                gameState.junak.setTexture('zmeja')
            }

        }





    }



}





function spawn() {
    const platforms = this.physics.add.staticGroup();
    if (lastPoint - gameState.junak.x < 900) {
        var selection =  Math.floor(Math.random()*4)
        var length = Math.floor(Math.random() * 1000) + 2000
        switch (selection) {
            case 0:
                //zmeja has to be jumping
                var start = lastPoint
                var limit = start + length
                for (let index = lastPoint; index < limit; index += 600) {
                    var height = generateHeight()
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += 400
                    this.generateCoins(index, index + 100, height)
                }
                break
            case 1:
                //standing platform

                var start = lastPoint
                var height = generateHeight()
                var limit = start + length
                var index = lastPoint;
                for (index; index < limit; index += 300) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += Math.floor(Math.random() * 100) + 500
                }
                var thing = Math.floor(Math.random() * 5)

                //change probability

                if (thing == 0)
                    this.generateEnemy(start, limit, height)
                else if (thing == 1)
                    this.generateCoins(start, limit, height)
                else if (thing == 2)
                    this.generateWallOFCoins(start, limit, height)
                else if (thing == 3)
                    this.generateRandomCoins(start, limit, height)
                else if (thing == 4)
                    this.generateSpecialEffect(start, limit, height)



                break
            case 2:
                //zmeja has to be jumping but in the same line
                var start = lastPoint
                var height = generateHeight()
                var limit = start + length

                for (let index = lastPoint; index < limit + length; index += 600) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += 500
                }
                this.generateCoins(start, limit, height)
                break
            case 3:
                //zmeja has to be jumping but in the same line
                var start = lastPoint
                var height = generateHeight()
                var limit = start + length
                var index = lastPoint;
                var startUp = index
                for (index; index < limit; index += 300) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += Math.floor(Math.random() * 100) + 350
                    if (index > startUp + 301 && index <= limit - 300) {
                        var startPlatfrom = this.createRectanglePlatform(index, (height - 200));
                        upperPlatforms.push(startPlatfrom);
                    }


                }
                var thing = Math.floor(Math.random() * 5)
                this.generateCoins(start, limit, height)
                break
        }
    }





}

function generateHeight() {
    var newHeight = heightPlatform
    // - gre gor, + gre dol
    if (newHeight + 200 >= visina)
        newHeight += Math.floor(Math.random() * -200)
    else if (newHeight - 200 <= 350)
        newHeight += Math.floor(Math.random() * +200)
    else {
        var upDown = Math.floor(Math.random() * 2)
        if (upDown == 1)
            newHeight += Math.floor(Math.random() * -200)
        else if (upDown == 0)
            newHeight += Math.floor(Math.random() * +200)
    }

    heightPlatform = newHeight
    return heightPlatform


}




