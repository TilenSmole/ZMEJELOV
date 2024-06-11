var visina = 800
var dolzina = 1300
var food = [];
var destoyers = [];
var allPlatforms = []
var star = false
var heart = false
var shield = false
var shieldIcon = ""
var multiplierIcon = ""
var hearts = []
var shields = []
var distanceHeart = 0
var heartsOnScreen = []
var startTime = 0
var multipliers = []
var multiplier = false
var startTimeMultiplayer = 0
var scoreMultiplier = 1
var time = 0 

class F4_gamePlayStart extends F0_shared {
    constructor() {
        super("F4_gamePlayStart")
    }
    preload() {
        super.preload()
        for (let i = 1; i <= 7; i++) {
            this.load.image("b" + i, "assets/a_njam_njam/background/" + i + ".png");
        }
        if(timeToPlay)
            time = timeToPlay 
        this.load.image("b_mesto", " assets/mesto/City2.png");

       

        this.load.image("platform2", "assets/a_speedRunning/platforms/Pad_04_1.png")

        for (let i = 1; i <= 101; i++) {
            this.load.image("f" + i, "assets/a_njam_njam/foods/1 (" + i + ").png");
        }
        for (let i = 1; i <= 10; i++) {
            this.load.image("s" + i, "assets/a_njam_njam/bad/s" + i + ".png");
        }

        this.load.image("star", "assets/a_njam_njam/star.png")
        this.load.image("shield", "assets/a_njam_njam/shield.png")
        this.load.image("heart", "assets/droper/heart.png")

        this.load.image("multiplier", "assets/a_njam_njam/multiplier.png")
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);



    }
    removeExpiredFood() {
        const currentTime = this.getTimePassed();

        // Loop through each food item
        for (let i = food.length - 1; i >= 0; i--) {
            const foodItem = food[i];

            // Check if the food item has been on the screen for more than 5 seconds
            if (currentTime - foodItem.creationTime >= 10) {
                foodItem.destroy(); // Destroy the food item
                food.splice(i, 1); // Remove the food item from the array
            }
        }
        for (let i = destoyers.length - 1; i >= 0; i--) {
            const destoyerItem = destoyers[i];

            // Check if the food item has been on the screen for more than 5 seconds
            if (currentTime - destoyerItem.creationTime >= 10) {
                destoyerItem.destroy(); // Destroy the food item
                destoyers.splice(i, 1); // Remove the food item from the array
            }
        }
    }
    create() {
        food = [];
        destoyers = [];
        super.create();

        gameState.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'b2');
       

        if(countdown)
        gameState.bg.setTexture('b_mesto');;

        gameState.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)

        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)

        this.time.addEvent({
            delay: 15000, // Adjust the interval as needed
            callback: this.removeExpiredFood,
            callbackScope: this,
            loop: true
        });

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


        if(countdown){
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
            if (!multiplier) {
                multiplierIcon = this.add.image(gameState.junak.x - 200, gameState.junak.y - 150, "multiplier")
                multiplierIcon.setScale(.5)
                Onemultiplier.destroy()
                multiplier = true
                startTimeMultiplayer = this.getTimePassed()
                scoreMultiplier = 2
            }


        })


        this.time.addEvent({
            delay: 1000,
            callback: () => {
                 time--
            },
            callbackScope: this,
            loop: true
        });

    }

    update() {
        var currentTime = this.getTimePassed()
       




        if (shield) {
            shieldIcon.x = gameState.junak.x - 100
            shieldIcon.y = gameState.junak.y - 50;

            if (startTime + 5 <= currentTime) {
                shieldIcon.destroy()
                shield = false
            }

        }
        if (multiplier) {

            multiplierIcon.x = gameState.junak.x - 200
            multiplierIcon.y = gameState.junak.y - 50;

            if (startTimeMultiplayer + 5 <= currentTime) {
                multiplier = false
                multiplierIcon.destroy()
                scoreMultiplier = 1
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


            }  else if (countdown) {
                destoyer.destroy();
                score -= 50
                destoyer.destroy();
            }
            else {
                this.scene.stop('F4_gamePlayStart')
                 this.scene.start('F5_konec') 
            }

        })
        this.physics.add.overlap(gameState.junak, food, (user, OnePiecefood) => {
            OnePiecefood.destroy()
            score += (10 * scoreMultiplier)
        })

        
        if(countdown){
            var timeLeft =(timeToPlay - time);
            gameState.countdown.setText('Time left: ' + time);
            if(time == 0){
                var type = 4
                if(timeToPlay == 60)
                    type = 3
                else if(timeToPlay == 20)   
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




                this.scene.stop('F4_gamePlayStart')
                this.scene.start('F5_konec')
            }



        }else{
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
        var yLength = Math.round(Math.random() * 10) + 30
        var distance = 0
        var randomPosXInside = Math.round(Math.random() * GAME_WIDTH);
        for (var i = 0; i < yLength; i++) {
            var foodNum = Math.floor(Math.random() * 100) + 1;
            var pieceOfFood = this.physics.add.sprite(randomPosXInside, 0 + distance, "f" + foodNum);
            pieceOfFood.setVelocityY(speedOfDrops);
            pieceOfFood.setScale(2.5);
            food.push(pieceOfFood);
            distance -= 60
        }




    }


    activateSpawn() {
        var randomPosX = Math.round(Math.random() * GAME_WIDTH)
        var randomPosY = Math.round(Math.random() * 800)
        var buff = Math.round(Math.random() * 5)


        if (buff == 0) {
            var buffType = Math.round(Math.random() * 3)
            if (buffType == 0) {
                this.spawnJackpot();
            } else if (buffType == 1) {
                var heart = this.physics.add.sprite(randomPosX, 0 - randomPosY, "heart")
                heart.setVelocityY(speedOfDrops);
                heart.setScale(0.1)
                hearts.push(heart)

            }
            else if (buffType == 2) {
                var shield = this.physics.add.sprite(randomPosX, 0 - randomPosY, "shield")
                shield.setVelocityY(speedOfDrops);
                shields.push(shield)
            }
            else if (buffType == 3) {
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


    if (!countdown) {
        if (timer < 5) {
            this.activateSpawn()
            gameState.bg.setTexture('b2');;

        }
        else if (timer > 5 && timer < 15) {
            food = [];
            destoyers = []; for (var i = 0; i < 2; i++) {
                this.activateSpawn()
            }
            console.log(food)
            gameState.bg.setTexture('b3');;
            speedOfDrops = 320
        }
        else if (timer > 15 && timer < 30) {
            food = [];
            destoyers = []; for (var i = 0; i < 3; i++) {
                this.activateSpawn()
            }
            console.log(food)
            gameState.bg.setTexture('b4');;
            speedOfDrops = 350
        }
        else if (timer > 30 && timer < 60) {
            food = [];
            destoyers = []; for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }
            gameState.bg.setTexture('b5');;
        }
        else if (timer > 60 && timer < 75) {
            food = [];
            destoyers = [];
            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }

            gameState.bg.setTexture('b6');;
            speedOfDrops = 400
        }
        else if (timer > 75 && timer < 100) {
            food = [];
            destoyers = [];
            for (var i = 0; i < 4; i++) {

                this.activateSpawn()
            }
            gameState.bg.setTexture('b7');;
        }
        else {
            food = [];
            destoyers = [];
            if (timer % 30 == 0) {
                this.changeBc()
            }




            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }
 

        }

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
        }
        else {

            if (timer % 30 == 0) {
                food = [];
                destoyers = [];
            }


            speedOfDrops = 420


            for (var i = 0; i < 4; i++) {
                this.activateSpawn()
            }

        }
    }


}









