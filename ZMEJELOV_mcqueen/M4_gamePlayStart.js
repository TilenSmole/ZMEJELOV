const dolzina = 1000000

var allPlatforms = [];
var coins = [];
var enemies = [];
class M4_gamePlayStart extends M0_shared {
    constructor() {
        super("M4_gamePlayStart")
    }
    preload() {
      super.preload()
      this.load.image("platform1","assets/a_speedRunning/platforms/Pad_3_3.png")
      this.load.image("platform2","assets/a_speedRunning/platforms/Pad_04_1.png")
      this.load.image("platform3" ,"assets/a_speedRunning/platforms/Pad_01_1.png")
      this.load.image("platform4", "assets/a_speedRunning/platforms/Pad_1_3.png")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
      this.load.image("spaceship" ,"assets/scena6/spaceship.png")
      this.load.image("skeli" ,"assets/deco/Spikes.png")
      this.load.image("boaster" ,"assets/a_speedRunning/boaster.png")
      this.load.spritesheet('vultureMovement', 'assets/a_speedRunning/Vulture_walk.png', {
        frameWidth:  48,  
        frameHeight: 48, 
        });
    this.load.image("vulture" ,"assets/a_speedRunning/Vulture.png")

    this.load.image("coin" ,"assets/scena3/Coin_01.png")
    this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3',"assets/uvod/easterEgg(1).ogg"]);


    this.load.image("reaper" ,"assets/a_speedRunning/0_Reaper_Man_Idle_000.png")
    this.load.spritesheet('reaperMovement', 'assets/a_speedRunning/alienWalking.png', {
      frameWidth:  616,  
      frameHeight: 587.3, 
      });

    


    }
  create(){
    super.create();
  
    //ozadje rainbow
    var p1 = this.add.graphics();
    var p2 = this.add.graphics();
    var p3 = this.add.graphics();
    var p4 = this.add.graphics();
    var p5 = this.add.graphics();
    var p6 = this.add.graphics();
    var p7 = this.add.graphics();

    // Fill the graphics object with the desired color

    p1.fillStyle(0xFFAAbb); 
    p1.fillRect(0, 0, dolzina/7, visina);
    p2.fillStyle(0xFFA500); 
    p2.fillRect(dolzina/7, 0, dolzina/7*2, visina);
    this.cameras.main.setBounds(0,0,dolzina,visina)
	this.physics.world.setBounds(0,0,dolzina,visina)

    



    
    gameState.spaceship =  this.physics.add.sprite(dolzina-200,visina -400, "spaceship")
    gameState.spaceship.body.allowGravity = false; 
    //gameState.junak  = this.physics.add.sprite(dolzina-6000, visina-4000, "Zmeja")
    gameState.junak  = this.physics.add.sprite(200,    visina-400, "Zmeja")

    gameState.junak.setScale(.40)// pomanjsa
	this.cameras.main.startFollow(gameState.junak)

    
    
    const platformsOptions = ["platform1", "platform1",  "platform4"];
   
    const platforms = this.physics.add.staticGroup();

    var distance = 0
    for(var i = 0; i <5; i++){
        var startPlatfrom = platforms.create( 200+distance, visina - 200,     "platform4");
        allPlatforms.push(startPlatfrom);
        distance+=200
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
       

  
  
  }
  
  update(){
    borderLeft = gameState.junak.x-1500

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
 
    
    this.physics.add.overlap(gameState.junak,  coins , (user, coin) => {
        coin.destroy()
        userCoins++
    })
    
    enemies.forEach(enemy => {
        if(enemy.x >= enemy.targetMax){
            enemy.reachedTarget = true
        }
        else if(enemy.x <= enemy.targetMin){
            enemy.reachedTarget = false
        }
        
        if (enemy.x < enemy.targetMax  && !enemy.reachedTarget) {
            enemy.anims.playReverse('reaperMovement', true);
            enemy.setVelocityX(500);
            enemy.flipX = false;     
        } else if(enemy.x >= enemy.targetMin  ) {
            enemy.anims.playReverse('reaperMovement', true);
            enemy.setVelocityX(-500);
            enemy.flipX = true;
        }
       
     

    });
  }


    generateCoins(min, max, height){
        var pos = Math.floor(Math.random()*1000)+1000
        var distanceBetween = Math.floor(Math.random()*250)+120
        for(var i = min; i <= max; i+=distanceBetween){
            var coin = this.physics.add.sprite(i, height-100, 'coin');
            coin.body.allowGravity = false;
            coin.setScale(.67)
            coins.push(coin)
    }}

    generateEnemy(min, max, height){
        var enemy = this.physics.add.sprite(min, height-100, 'reaper');
        enemy.body.allowGravity = false;
        enemy.setScale(0.2)
        enemy.targetMax = max;
        enemy.targetMin = min; // Store the target X coordinate as a property of the enemy
        enemy.reachedTarget = false
        enemies.push(enemy)
    }

    generateLineOFCoins(min, max, height){
        var index = 1
        var distanceBetween = 200   
        for(var i = min; i <= max; i+=distanceBetween){
            var coin = this.physics.add.sprite(i, height-index++*75, 'coin');
            coin.body.allowGravity = false;
            coin.setScale(.67)
            coins.push(coin)
            if(index >7 )
                break
    }}

    generateWallOFCoins(min, max, height){
        var distanceBetween = 200
        var actualHeight = height-100
        for(var index = 0; index <= 6; index++){
            for(var i = min; i <= max; i+=distanceBetween){
                var coin = this.physics.add.sprite(i, actualHeight, 'coin');
                coin.body.allowGravity = false;
                coin.setScale(.67)
                coins.push(coin)
            }
            actualHeight -= 100
           console.log(actualHeight)    
    }
}


}
    
  
  


  function spawn(){

    const platforms = this.physics.add.staticGroup();
    if( lastPoint - gameState.junak.x < 900  ){
        var selection = 1// Math.floor(Math.random()*3)
        var length = Math.floor(Math.random()*1000)+1000
        switch(selection){
            case 0:
                //zmeja has to be jumping
                var start  = lastPoint
                var limit= start+length
                for (let index = lastPoint; index < limit; index+=600) {
                    var height = generateHeight()
                    var startPlatfrom = platforms.create(index , height,     "platform4");
                    allPlatforms.push(startPlatfrom);
                    lastPoint  += 600
                    this.generateCoins(index, index+100, height )
                }
                
                break
            case 1: //NARED VEČ VERJETNO!!!!!!
                 //standing platform
                 var start  = lastPoint
                 var height = generateHeight()
                 var limit= start+length
                for (let index = lastPoint; index < limit  ; index+=300) {
                    var startPlatfrom = platforms.create(index , height,     "platform4");
                    allPlatforms.push(startPlatfrom);
                    lastPoint  += 300
                }
               //this.generateEnemy(start, limit, height )   
               // this.generateCoins(start, limit, height )
                this.generateWallOFCoins(start, limit, height)
                break
            case 2:
                //zmeja has to be jumping but in the same line
                var start  = lastPoint
                var height = generateHeight()
                var limit= start+length
                for (let index = lastPoint; index < limit+length; index+=600) {
                    var startPlatfrom = platforms.create(index , height,     "platform4");
                    allPlatforms.push(startPlatfrom);
                    lastPoint  += 600
                }
                this.generateCoins(start, limit, height )
                break
        }
    }
    
 
    
  }

function generateHeight(){
    var newHeight = heightPlatform
    // - gre gor, + gre dol
    if(newHeight + 200 >= visina)
        newHeight += Math.floor(Math.random()*-200)
    else if( newHeight - 200 <= 350)
        newHeight += Math.floor(Math.random()*+200)
    else{
        var upDown = Math.floor(Math.random()*2)
        if(upDown == 1)
            newHeight += Math.floor(Math.random()*-200)
        else if(upDown == 0)
            newHeight += Math.floor(Math.random()*+200)
    }

    heightPlatform = newHeight
    return heightPlatform


}







/*extra lives
abilities
achivments

wall of coins



*/