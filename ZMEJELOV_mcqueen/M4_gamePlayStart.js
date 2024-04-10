const dolzina = 1000000

var allPlatforms = [];
var coins = [];
var enemies = [];
var score = 0
var shield = false
var ghost = false
var shroom = false
var heart = false
var spaceShip = false
var speedShip = false
var zen = false
var buffs = []

var shieldIcon = ""
var startTimeShield = 0

var heartIcon = ""
var startTimeheart = 0

var spaceShipIcon = ""
var startTimespaceShip = 0

var shroomIcon = ""
var startTimeshroom = 0

var ghostIcon = ""
var startTimeGhost = 0

var distance = 0

class M4_gamePlayStart extends M0_shared {
    constructor() {
        super("M4_gamePlayStart")
    }
    preload() {
        super.preload()
        this.load.image("platform1", "assets/a_speedRunning/platforms/Pad_3_3.png")
        this.load.image("platform2", "assets/a_speedRunning/platforms/Pad_04_1.png")
        this.load.image("platform3", "assets/a_speedRunning/platforms/Pad_01_1.png")
        this.load.image("platform4", "assets/a_speedRunning/platforms/Pad_1_3.png")
        this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
        this.load.image("spaceship", "assets/scena6/spaceship.png")
        this.load.image("skeli", "assets/deco/Spikes.png")
        this.load.image("boaster", "assets/a_speedRunning/boaster.png")
        this.load.spritesheet('vultureMovement', 'assets/a_speedRunning/Vulture_walk.png', {
            frameWidth: 48,
            frameHeight: 48,
        });
        this.load.image("vulture", "assets/a_speedRunning/Vulture.png")

        this.load.image("coin", "assets/scena3/Coin_01.png")
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);


        this.load.image("reaper", "assets/a_speedRunning/0_Reaper_Man_Idle_000.png")
        this.load.spritesheet('reaperMovement', 'assets/a_speedRunning/alienWalking.png', {
            frameWidth: 616,
            frameHeight: 587.3,
        });

        for (let i = 1; i <= 16; i++) {
            this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
        }

    }
    create() {
        super.create();
        allPlatforms = [];
        coins = [];
        enemies = [];

        //ozadje rainbow
        var rainbowWidth = 50000; // Width of each color segment

        var p1 = this.add.graphics();
        var p2 = this.add.graphics();
        var p3 = this.add.graphics();
        var p4 = this.add.graphics();
        var p5 = this.add.graphics();
        var p6 = this.add.graphics();
        var p7 = this.add.graphics();

        // Fill the graphics objects with gradient fills representing the colors of the rainbow
        p1.fillStyle(0xFF0000, 1); // Red
        p1.fillRect(0, 0, rainbowWidth, visina);

        p2.fillStyle(0xFF7F00, 1); // Orange
        p2.fillRect(rainbowWidth, 0, rainbowWidth, visina);

        p3.fillStyle(0xFFFF00, 1); // Yellow
        p3.fillRect(2 * rainbowWidth, 0, rainbowWidth, visina);

        p4.fillStyle(0x00FF00, 1); // Green
        p4.fillRect(3 * rainbowWidth, 0, rainbowWidth, visina);

        p5.fillStyle(0x0000FF, 1); // Blue
        p5.fillRect(4 * rainbowWidth, 0, rainbowWidth, visina);

        p6.fillStyle(0x4B0082, 1); // Indigo
        p6.fillRect(5 * rainbowWidth, 0, rainbowWidth, visina);

        p7.fillStyle(0x9400D3, 1); // Violet
        p7.fillRect(6 * rainbowWidth, 0, rainbowWidth, visina);


        // Fill the graphics object with the desired color


        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)






        gameState.spaceship = this.physics.add.sprite(dolzina - 200, visina - 400, "spaceship")
        gameState.spaceship.body.allowGravity = false;
        //gameState.junak  = this.physics.add.sprite(dolzina-6000, visina-4000, "Zmeja")
        gameState.junak = this.physics.add.sprite(200, visina - 400, "Zmeja")

        gameState.junak.setScale(.40)// pomanjsa
        this.cameras.main.startFollow(gameState.junak)



        const platformsOptions = ["platform1", "platform1", "platform4"];

        const platforms = this.physics.add.staticGroup();

        var distance = 0
        for (var i = 0; i < 5; i++) {
            var startPlatfrom = platforms.create(200 + distance, visina - 200, "platform4");
            allPlatforms.push(startPlatfrom);
            distance += 200
        }


        gameState.spawnEvent = this.time.addEvent({
            delay: 100,
            callback: spawn,
            callbackScope: this,
            loop: true
        });







        /*startPlatfrom =  platforms.create(dolzina-1200,    visina-200,     "platform4")
        startPlatfrom.setAlpha(0)
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-2100,    visina-200,     "platform4")
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-2800,    visina-400,    "platform4")
        startPlatfrom.setAlpha(0)
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-3400,    visina-600,     "platform4")
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-4000,    visina-800,     "platform4")
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-5000,    visina-600,     "platform4")
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-5700,    visina-800,     "platform4")
        allPlatforms.push(startPlatfrom)
    
        startPlatfrom =  platforms.create(dolzina-6000,    visina-1000,     "platform4")
        allPlatforms.push(startPlatfrom)
    
       
    
        var position =  visina-1500;
        var position2 =  visina-1200;
    
    
        var platformCodeLoad = [0,1,1,0,1,0]   //0 generates left, 1 right platform
        for(var i = 0; i < 6; i++){
            startPlatfrom =  platforms.create(dolzina-6000,    position,     "platform1")
            position-=500
            allPlatforms.push(startPlatfrom)
            if(i == 3){
                var platformPos = 0
                for(var l = 0; l < 3; l++){
                    startPlatfrom =  platforms.create(dolzina-6600 +platformPos,    position2,     "platform1")
                    allPlatforms.push(startPlatfrom)
                    platformPos -= 400
             }
            }
            else{
                startPlatfrom =  platforms.create(dolzina-6600,    position2,     "platform1")
                if(platformCodeLoad[i] != 1 )
                    allPlatforms.push(startPlatfrom)
            }
            startPlatfrom =  platforms.create(dolzina-5400,    position2,     "platform1")
            if(platformCodeLoad[i] != 0)
                allPlatforms.push(startPlatfrom)
            position2-=500
        }
    
        var platfromActivater =  platforms.create(dolzina-6000,    position+500,     "platform1")
        allPlatforms.push(platfromActivater)
    
    
    
        var distance = 400
        for(var i = 0; i < 6; i++){
            startPlatfrom =  platforms.create(dolzina-6000 + distance, position+500,     "platform1")
            if(i != 4 && i != 2) 
                allPlatforms.push(startPlatfrom)
            distance += 400
        }
        
        //ubijalne kocke
        const ubijejo = [];
        for (let x = 64; x <= dolzina; x = x + 220 ){
            const podenj =  platforms.create(x, visina-10, 'skeli')
            podenj.setAlpha(0);
            ubijejo.push(podenj)}
    
    
    
        
            
        const winnActivaters = [];
        for (let x = dolzina-450; x <= dolzina; x = x + 150 ){
                const podenj =  platforms.create(x, visina-3000, 'skeli')
                podenj.allowGravity = false;
               podenj.setAlpha(0);
               winnActivaters.push(podenj)
            }
            
    
    
    
        //ALL MOVING ENEMIES    
        gameState.vulture  = this.physics.add.sprite(dolzina-5800, visina-1000, 'vulture');
        gameState.vulture.body.allowGravity = false;
        gameState.vulture.setScale(2)
    
    
        gameState.vulture1  = this.physics.add.sprite(dolzina-2000, visina-1800, 'vulture');
        gameState.vulture1.body.allowGravity = false;
        gameState.vulture1.setScale(2)
    
        gameState.reaper  = this.physics.add.sprite(dolzina-6400, visina-2800, 'reaper');
        gameState.reaper.body.allowGravity = false;
        gameState.reaper.setScale(0.2)
        
        gameState.reaper1  = this.physics.add.sprite(dolzina-6500, visina-4125, 'reaper');
        gameState.reaper1.body.allowGravity = false;
        gameState.reaper1.setScale(0.2)
    
        gameState.spaceShip  = this.physics.add.sprite(dolzina-7150, visina-3800, 'spaceShipAttackerIdle');
        gameState.spaceShip.body.allowGravity = false;
        gameState.spaceShip.setScale(1)
    
        gameState.spaceShipKiller  = this.physics.add.sprite( dolzina+100, visina-4050, 'quickKillerRockerIdle');
        gameState.spaceShipKiller.body.allowGravity = false;
        gameState.spaceShipKiller.setScale(1.7)
    
    
    
        
    
        this.anims.create({
            key: 'vultureMovement',
            frames: this.anims.generateFrameNumbers('vultureMovement', { start: 0, end: 3 }), // Adjust the range as needed
            frameRate: 10,
            repeat: -1
        });*/

        this.anims.create({
            key: 'reaperMovement',
            frames: this.anims.generateFrameNumbers('reaperMovement', { start: 0, end: 9 }), // Adjust the range as needed
            frameRate: 8,
            repeat: -1
        });

        /*  this.anims.create({
              key: 'spaceShipAttacker',
              frames: this.anims.generateFrameNumbers('spaceShipAttacker', { start: 0, end: 5 }),  
              frameRate: 8,
              repeat: -1
          });
      
      
          this.anims.create({
              key: 'quickKillerRocker',
              frames: this.anims.generateFrameNumbers('quickKillerRocker', { start: 0, end: 5 }),  
              frameRate: 8,
              repeat: -1
          });
      
        //COLLIDERS AND OVERLAPS
        this.physics.add.overlap(gameState.junak, platfromActivater, () => {
             disableReturnBack = true 
         })
        */
        this.physics.add.collider(gameState.junak, allPlatforms)
        gameState.junak.setCollideWorldBounds(true) //ne more vn past







        /*
            //INTERACTION 
            this.physics.add.overlap(gameState.junak, ubijejo, () => {
                deathByWho[0] = [1]
                deathVarient = "sky"
                this.scene.stop('S4_gamePlayStart')
                this.scene.start('S4_deathScreen') 
            });
            this.physics.add.overlap(gameState.junak, boaster, () => {
             this.setJumpingSpeed(-850)})
        
            
            this.physics.add.overlap(gameState.junak, winnActivaters , () => {
                canWin = true
            })
            this.physics.add.overlap(gameState.junak,  gameState.vulture1 , () => {
                stSmrti++
                deathByWho[1] = [1]
                deathVarient = "bird" 
                this.scene.stop('S4_gamePlayStart')
                this.scene.start('S4_deathScreen') 
               
            })
        +
            this.physics.add.overlap(gameState.junak,  gameState.spaceShip , () => {
                stSmrti++
                deathByWho[3] = [1]
                deathVarient = "spaceship" 
                this.scene.stop('S4_gamePlayStart')
                this.scene.start('S4_deathScreen') 
                
            })
            this.physics.add.overlap(gameState.junak,  gameState.spaceShipKiller , () => {
                stSmrti++
                deathByWho[4] = [1]
                deathVarient = "qucikSpaceship" 
                this.scene.stop('S4_gamePlayStart')
                this.scene.start('S4_deathScreen') 
                
            })
            this.physics.add.overlap(gameState.junak,  gameState.reaper1 , () => {
                stSmrti++
                deathByWho[2] = [1]
                deathVarient = "reaper" 
                this.scene.stop('S4_gamePlayStart')
                this.scene.start('S4_deathScreen') 
                
            })
            this.physics.add.overlap(gameState.junak,  gameState.reaper , () => {
                stSmrti++
                deathByWho[2] = [1]
                deathVarient = "reaper" 
                this.scene.stop('S4_gamePlayStart')
                this.scene.start('S4_deathScreen') 
                
            })*/


        /* KO UMRE            stopChecking = false
        disableReturnBack = false!!!!!!!!!!!!!!*/


        gameState.text = this.add.text(GAME_WIDTH - 200, visina - 600, 'Coins: ', { fontSize: '30px', fill: '#000000', fontFamily: 'CustomFont' });
        gameState.text.setDepth(0)

        gameState.coins = this.add.text(GAME_WIDTH - 200, visina - 800, 'Coins: ', { fontSize: '30px', fill: '#000000', fontFamily: 'CustomFont' });
        gameState.coins.setDepth(0)




    }

    update() {

        this.physics.add.overlap(gameState.junak, buffs, (user, buff) => {
            if (buff.value == 2) {
                if (!shield) {
                    shieldIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (2)")
                    shieldIcon.setScale(.3)
                    startTimeShield = this.getTimePassed()
                    shield = true
                    distance += 50
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

                }
            } else if (buff.value == 6) {
                if (!shroom) {
                    shroomIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (6)")
                    startTimeshroom = this.getTimePassed()
                    shroom = true
                    distance += 50

                }
            } else if (buff.value == 9 || buff.value == 10) {
                if (!heart) {
                    startTimeheart = this.getTimePassed()
                    heart = true
                    distance += 50
                    if(buff.value == 9){
                        heartIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (10)")
                    }
                    else{
                        heartIcon =  this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (9)")
                        heartIcon.setScale(.5)
                    }


                }
            } else if (buff.value = 14) {
                speedShip = true

            } else if (buff.value = 15) {
                if (!spaceShip) {
                    spaceShipIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (15)")
                    startTimespaceShip = this.getTimePassed()
                    spaceShip = true

                }
            }
            if (buff.value == 3 || buff.value == 12  || buff.value == 13  ) 
                return
            
            
            buff.destroy()




        })


        var currentTime = this.getTimePassed()

        borderLeft = gameState.junak.x - 1500
        gameState.text.setText('Score: ' + score++);
        gameState.coins.setText('Coins: ' + userCoins);

        gameState.coins.x = this.cameras.main.scrollX + 1000;
        gameState.coins.y = this.cameras.main.scrollY + 100;

        gameState.text.x = this.cameras.main.scrollX + 1000;
        gameState.text.y = this.cameras.main.scrollY + 50;
        if (gameState.junak.y >= 2940)
            //this.scene.restart() 



            allPlatforms.forEach(platform => {
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
            userCoins += coin.value;
            coin.destroy()

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


    generateCoins(min, max, height) {
        var pos = Math.floor(Math.random() * 1000) + 1000
        var distanceBetween = Math.floor(Math.random() * 250) + 120
        for (var i = min; i <= max; i += distanceBetween) {
            var coin = this.physics.add.sprite(i, height - 100, 'coin');
            coin.body.allowGravity = false;
            coin.value = 1;
            coin.setScale(.67)
            coins.push(coin)
        }
    }

    generateEnemy(min, max, height) {
        var enemy = this.physics.add.sprite(min, height - 100, 'reaper');
        enemy.body.allowGravity = false;
        enemy.setScale(0.2)
        enemy.targetMax = max;
        enemy.targetMin = min; // Store the target X coordinate as a property of the enemy
        enemy.reachedTarget = false
        enemies.push(enemy)
    }

    generateLineOFCoins(min, max, height) {
        var index = 1
        var distanceBetween = 200
        for (var i = min; i <= max; i += distanceBetween) {
            var coin = this.physics.add.sprite(i, height - index++ * 75, 'coin');
            coin.body.allowGravity = false;
            coin.setScale(.67)
            coins.push(coin)
            if (index > 7)
                break
        }
    }

    generateWallOFCoins(min, max, height) {
        var distanceBetween = 200
        var actualHeight = height - 100
        for (var index = 0; index <= 6; index++) {
            for (var i = min; i <= max; i += distanceBetween) {
                var coin = this.physics.add.sprite(i, actualHeight, 'coin');
                coin.body.allowGravity = false;
                coin.setScale(.67)
                coins.push(coin)
            }
            actualHeight -= 100
            console.log(actualHeight)
        }
    }

    generateRandomCoins(min, max, height) {
        var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;

        var numberOfgenerated = Math.floor(Math.random() * 4) + 1;
        for (var x = 0; x <= numberOfgenerated; x++) {
            var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;
            var coin = this.physics.add.sprite(coordinatesX, height - (Math.floor(Math.random() * (400)) + 100), 'coin');
            coin.body.allowGravity = false;
            coin.setScale(.67)
            coins.push(coin)


        }






    }

    generateSpecialEffect(min, max, height) {
        var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;

        var numberOfgenerated = Math.floor(Math.random() * 4) + 1;

        var possibleEle = ["fake", 'r1 (1)', 'r1 (2)', 'r1 (3)', 'r1 (4)', 'r1 (5)', 'r1 (6)', 'r1 (7)', 'r1 (8)', 'r1 (10)', 'r1 (9)', 'r1 (11)', 'r1 (12)', 'r1 (13)', 'r1 (14)', 'r1 (15)', 'r1 (16)']
        var choosenEle = Math.floor(Math.random() * 15) + 1;


        var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;
        //4 7 8 11
        if (choosenEle === 4 || choosenEle === 7 || choosenEle === 8 || choosenEle === 11) {
            var coin = this.physics.add.sprite(coordinatesX, height - (Math.floor(Math.random() * (400)) + 100), possibleEle[choosenEle]);
            coin.setScale(3)

            if (choosenEle === 7)
                coin.value = 10;
            else if (choosenEle === 4) {
                coin.value = 1000;
                coin.setScale(1)

            }
            else if (choosenEle === 8) {
                coin.value = 50;
            }
            else if (choosenEle === 11) {
                coin.value = 100;
            }
            coin.body.allowGravity = false;
            coins.push(coin)

        }
        else {
            var buff = this.physics.add.sprite(coordinatesX, height - 200, possibleEle[choosenEle]);
            if (choosenEle === 14)
                buff.setScale(3)
            else if (choosenEle === 15)
                buff.setScale(2)
            else if (choosenEle === 16)
                buff.setScale(.67)
            else if (choosenEle === 10)
                buff.setScale(2.2)
            else if (choosenEle === 6)
                buff.setScale(2.2)
            /* else if (choosenEle === 11)
                 buff.setScale(.67)*/



            buff.body.allowGravity = false;
            buff.value = choosenEle;
            buffs.push(buff)

        }










    }




}





function spawn() {

    const platforms = this.physics.add.staticGroup();
    if (lastPoint - gameState.junak.x < 900) {
        var selection = 1// Math.floor(Math.random()*3)
        var length = Math.floor(Math.random() * 1000) + 1000
        switch (selection) {
            case 0:
                //zmeja has to be jumping
                var start = lastPoint
                var limit = start + length
                for (let index = lastPoint; index < limit; index += 600) {
                    var height = generateHeight()
                    var startPlatfrom = platforms.create(index, height, "platform4");
                    allPlatforms.push(startPlatfrom);
                    lastPoint += 600
                    this.generateCoins(index, index + 100, height)
                }

                break
            case 1: //NARED VEČ VERJETNO!!!!!!
                //standing platform
                var start = lastPoint
                var height = generateHeight()
                var limit = start + length
                var index = lastPoint;
                for (index; index < limit; index += 300) {
                    var startPlatfrom = platforms.create(index, height, "platform4");
                    allPlatforms.push(startPlatfrom);
                    lastPoint += Math.floor(Math.random() * 100) + 350
                }
                var thing = 4 //Math.floor(Math.random() * 7)

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
                    var startPlatfrom = platforms.create(index, height, "platform4");
                    allPlatforms.push(startPlatfrom);
                    lastPoint += 600
                }
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







/*extra lives
abilities
achivments

wall of coins



*/