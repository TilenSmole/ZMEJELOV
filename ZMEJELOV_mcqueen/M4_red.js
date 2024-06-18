
class M4_red extends M0_shared {

    constructor() {
        super("M4_red")
    }

  
    preload() {
        super.preload()
        this.load.image('ship', "assets/a_TheFinalRage/r1 (15).png");


    }


    addCountdownTimer(pozX) {
        countdownText = this.add.text(pozX,gameState.junak.y, '3', {
            fontSize: '128px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        this.time.delayedCall(1000, () => {
            countdownText.setText('2');
        });

        this.time.delayedCall(2000, () => {
            countdownText.setText('1');
        });

        this.time.delayedCall(3000, () => {
            countdownText.setText('GO!');
            this.time.delayedCall(500, () => {
                countdownText.destroy();
                canStart = true
            });
        });
    }


    create() {
        distance = 0

        super.create();
        lowerPlatforms = [];

        //ozadje rainbow
        var rainbowWidth = 42000; // Width of each color segment

        var p1 = this.add.graphics();


        // Fill the graphics objects with gradient fills representing the colors of the rainbow
        p1.fillStyle(0xFF0000, 1); // Red
        p1.fillRect(0, 0, rainbowWidth, visina);




        // Fill the graphics object with the desired color
        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)

        // gameState.junak = this.physics.add.sprite(dolzina-800, visina - 400, "Zmeja")
        gameState.junak = this.physics.add.sprite(200, visina - 400, "zmeja")


        if(!this.anims.exists('reaperMovement'))
      {  this.anims.create({
            key: 'reaperMovement',
            frames: this.anims.generateFrameNumbers('reaperMovement', { start: 0, end: 5 }), // Adjust the range as needed
            frameRate: 8,
            repeat: -1
        });}


        gameState.junak.setCollideWorldBounds(true)
        gameState.junak.setScale(.40)// pomanjsa
        this.cameras.main.startFollow(gameState.junak)
        this.addCountdownTimer(GAME_WIDTH /2);




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


        lowerCollider = this.physics.add.collider(gameState.junak, lowerPlatforms);



        this.physics.add.collider(objectsFloor, lowerPlatforms);


    }



    update() {

        if (canStart) { //cleaning
            
            this.anims.resumeAll();

            coins.forEach(coin => {
                if (coin.x < gameState.junak.x - 1000) {
                    coin.destroy();
                }
            });
            if (gameState.junak.x >= 39500) {
                if (rocketStart)
                    rocketStart = false
                if (speedShip)
                    speedShip = false
                if (spaceshipStart)
                    spaceshipStart = false


                this.reset()

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
                if (gameState.cursors.down.isDown) {
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
                    if (gameState.junak.x > 49500) {
                        rocketStart = false
                        freshlyRocketDone = true
                    }
                }
                else if (speedShip) {
                    gameState.junak.setVelocityX(300000)
                    gameState.junak.x = gameState.junak.x++;
                    gameState.junak.y = visina - 400
                }
                else {

                    gameState.junak.setVelocityX(600)


                }

                gameState.junak.anims.play('walk', true)

            }


            if (rocketStart || speedShip) {
                this.physics.world.removeCollider(lowerCollider);
            }




            if (didntCheat && !noCheat && score > 10000) {
                canShowAnAchivement= true  
            }



            this.physics.add.overlap(gameState.junak, buffs, (user, buff) => {
                console.log('' + buff.value);
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
                    chestPickedInGame = true
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
                } else if (buff.value == 14) {
                    if (!speedShip) {
                        speedShip = true
                        didntCheat = false
                    }
                } else if (buff.value == 15) {
                    if (!spaceShip) {
                        spaceShipIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (15)")
                        spaceShipIcon.setScale(0.14)
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




            if (gameState.junak.y >= visina - 70) {
                if(rocketStart){

                }
                if (potionStart || spaceshipStart || heart || spaceShip ) {
                    potionActivation = true
                    gameState.junak.setVelocityX(0)
                    gameStateStoredX = gameState.junak.x
                    var height = generateHeight()
                    for (let index = gameState.junak.x; index <= gameStateStoredX + 1500; index += 200) {
                        var startPlatfrom = this.createRectanglePlatform(index, height);
                        lowerPlatforms.push(startPlatfrom);
                    }
                    gameState.junak.x = gameStateStoredX + 100
                    gameState.junak.y = height - 300

                  //  setTimeout(() => {
                        this.addCountdownTimer(gameState.junak.x +200);
                        potionActivation = false
                        if (potionStart)
                            potionStart = false
                        else if (spaceshipStart)
                            spaceshipStart = false
                        else if (heart)
                            heart = false
                        else if (spaceShip)
                            spaceShip = false

              //      }, 2000);
                    canStart = false


                }
                else {

                    this.scene.stop('M4_red')
                    this.scene.start('M4_deathScreen')
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

            this.physics.add.overlap(gameState.junak, coins, (user, coin) => {
                coinsNewGame += coin.value;
                coin.destroy()

            })

            this.physics.add.overlap(gameState.junak, enemies, (user, enemy) => {
                if (!shroomStart && !shieldStart && !spaceshipStart && !spaceShip && !shroom && !shield && !rocketStart && !speedShip && !heart) {
                    this.scene.stop('M4_red')
                    this.scene.start('M4_deathScreen')
                }
                else {
                    enemy.destroy()
                    enemies = []
                    if (ghostStart)
                        ghostStart = false
                    else if (shieldStart)
                        shieldStart = false
                    else if (spaceshipStart)
                        spaceshipStart = false
                    else if (spaceShip)
                        spaceShip = false
                    else if (shroom)
                        shroom = false
                    else if (shield)
                        shield = false
                    else if (heart)
                        shield = false
                }

            })



            this.physics.add.overlap(gameState.junak, upperPlatforms, (user, platform) => {
                if (ghostStart || shieldStart || spaceshipStart || shield || spaceShip || ghost || rocketStart || speedShip) {
                    upperPlatforms.forEach(platform => {
                        platform.destroy();
                    });
                    if (ghostStart)
                        ghostStart = false
                    else if (shieldStart)
                        shieldStart = false
                    else if (spaceshipStart)
                        spaceshipStart = false
                    else if (spaceShip)
                        spaceShip = false
                    else if (shield)
                        shield = false
                    else if (ghost)
                        ghost = false


                }
                else {
                    this.scene.stop('M4_red')
                    this.scene.start('M4_deathScreen')

                }

            })

        


            if (shield) {
                shieldIcon.x = gameState.junak.x - 50
                shieldIcon.y = gameState.junak.y - 50;

                if (startTimeShield + 30 <= currentTime) {
                    shieldIcon.destroy()
                    shield = false
                    distance -= 50
                }
            }


            if (ghost) {
                ghostIcon.x = gameState.junak.x - 75
                ghostIcon.y = gameState.junak.y - 50;

                if (startTimeGhost + 30 <= currentTime) {
                    ghostIcon.destroy()
                    ghost = false
                }

            }

            if (shroom) {

                shroomIcon.x = gameState.junak.x - 100
                shroomIcon.y = gameState.junak.y - 50;

                if (startTimeshroom + 30 <= currentTime) {
                    shroomIcon.destroy()
                    ghost = false
                }


            }

            if (heart) {
                heartIcon.x = gameState.junak.x - 125
                heartIcon.y = gameState.junak.y - 50;

                if (startTimeheart + 30 <= currentTime) {
                    heartIcon.destroy()
                    heart = false
                    distance -= 50
                }




            }
            if (spaceShip) {
                spaceShipIcon.x = gameState.junak.x - 150
                spaceShipIcon.y = gameState.junak.y - 50;


                if (startTimespaceShip + 30 <= currentTime) {
                    spaceShip = false
                }

            }





        }
        else{
            this.anims.pauseAll()
        }


    }
    }





function spawn() {
    const platforms = this.physics.add.staticGroup();
    if (lastPoint - gameState.junak.x < 900) {
        var selection = Math.floor(Math.random() * 7)
        var length = Math.floor(Math.random() * 1000) + 1000
        switch (selection) {
            case 0:
                //zmeja has to be jumping
                var start = lastPoint
                var limit = start + length
                for (let index = lastPoint - 200; index < limit; index += 600) {
                    var height = generateHeight()
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += 550
                    this.generateCoins(index, index + 100, height)
                }
                break
            case 1:
            case 2:
            case 3:
            case 4:
                //standing platform

                var start = lastPoint
                var height = generateHeight()
                var limit = start + length
                var index = lastPoint;
                for (index; index < limit; index += 300) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += Math.floor(Math.random() * 100) + 350
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
            case 5:
                //zmeja has to be jumping but in the same line
                var start = lastPoint
                var height = generateHeight()
                var limit = start + length

                for (let index = lastPoint; index < limit + length; index += 550) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += 550
                }
                this.generateCoins(start, limit, height)
                break
            case 6:
                //zmeja has to be jumping but in the same line
                var start = lastPoint
                var height = generateHeight()
                var limit = start + length
                var index = lastPoint;
                var startUp = index
                for (index; index < limit; index += 300) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    lowerPlatforms.push(startPlatfrom);
                    lastPoint += Math.floor(Math.random() * 100) + 300
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




