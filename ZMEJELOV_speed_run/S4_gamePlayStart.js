const dolzina = 10000
const visina = 6500
var  krog = true
var  krog1 = true
var  krog2 = true
var krogSpaceship = true
var krogReaper = true
var krogReaper1 = true
var hotdogShow = false;
var allPlatforms = [];

class S4_gamePlayStart extends S0_shared {
    constructor() {
        super("S4_gamePlayStart")
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
    this.load.image("hotdog" ,"assets/a_speedRunning/55_hotdog_sauce.png")
    this.load.image("planet0" ,"assets/a_speedRunning/platforms/Lava.png")
    this.load.image("planet1" ,"assets/a_speedRunning/platforms/Ice.png")
    this.load.image("planet2" ,"assets/a_speedRunning/platforms/Lava.png")
    this.load.image("planet3" ,"assets/a_speedRunning/platforms/Terran.png")
    this.load.image("star" ,"assets/a_speedRunning/clouds/star.png")
    this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3',"assets/uvod/easterEgg(1).ogg"]);

    this.load.image("c1" ,"assets/a_speedRunning/clouds/c1.png")
    this.load.image("c2" ,"assets/a_speedRunning/clouds/c2.png")
    this.load.image("c3" ,"assets/a_speedRunning/clouds/c3.png")
    this.load.image("c4" ,"assets/a_speedRunning/clouds/c4.png")
    this.load.image("c5" ,"assets/a_speedRunning/clouds/c5.png")
    this.load.image("c6" ,"assets/a_speedRunning/clouds/c6.png")
    this.load.image("c7" ,"assets/a_speedRunning/clouds/c7.png")
    this.load.image("c8" ,"assets/a_speedRunning/clouds/c8.png")
    this.load.image("c9" ,"assets/a_speedRunning/clouds/c9.png")
    this.load.image("c10" ,"assets/a_speedRunning/clouds/c10.png")
    this.load.image("c11" ,"assets/a_speedRunning/clouds/c11.png")
    this.load.image("b1" ,"assets/a_speedRunning/clouds/Starfield_03-1024x1024.png")
  


    this.load.image("reaper" ,"assets/a_speedRunning/0_Reaper_Man_Idle_000.png")
    this.load.spritesheet('reaperMovement', 'assets/a_speedRunning/alienWalking.png', {
      frameWidth:  616,  
      frameHeight: 587.3, 
      });

    this.load.image("spaceShipAttackerIdle" ,"assets/a_speedRunning/spaceShipAttackerIdle.png")
    this.load.spritesheet('spaceShipAttacker', 'assets/a_speedRunning/spaceShipAttacker.png', {
        frameWidth:  191.6,  
        frameHeight: 190, 
    });

    this.load.image("quickKillerRockerIdle" ,"assets/a_speedRunning/quickKillerRockerIdle.png")
    this.load.spritesheet('quickKillerRocker', 'assets/a_speedRunning/quickKillerRocker.png', {
        frameWidth:  191.6,  
        frameHeight: 190, 
    });


    }
  create(){
    super.create();
    this.setJumpingSpeed(-650)///650 !!!!!!!!!!!!!!!!!!!0000
    gameState.active = true;
    stopChecking = false
    hotdogShow = true
    allPlatforms = [];
    stZvezd = 0

    //ozadje full screen
   // Create a graphics object
    const upperScreen = this.add.graphics();
    const lowerScreen = this.add.graphics();
    var upperScreenImage = this.add.sprite(0, 0, 'b1');

    var b1 = this.add.image(0, 0, "b1").setOrigin(0, 0);
    b1.displayWidth = dolzina;
    b1.displayHeight = visina / 2;
    

    lowerScreen.fillStyle(0x87CEEB); 
    lowerScreen.fillRect(0, visina/2, dolzina, visina);
    this.cameras.main.setBounds(0,0,dolzina,visina)
	this.physics.world.setBounds(0,0,dolzina,visina)

    var coorX = [0,9500,8700,9200,8500,8300,8400,8000,7100,7800,7000,6700,6420,6200,6010,5800,5500,5200,5000,4850,4650,4125,3800,3650,3700, 4000, 3900,4200,4350,3800,3900,4166,4000,3700 ]
    var coorY = [0,6100,5800,6400,5500,6400,6000,5700,5950,6000,5500,5700,5900,5400,5000,5900,5700,5500,5800,5300,4900,5020,5100,5000,4800,4500,  4300, 4000, 3800,3900,3500,3600,3700,3800 ]
    var clouds =[0,11,   1,   3,   6,   5,    2   ,1   ,5,   1,  4,   3   ,2,   11,  10,   8,   7,  6 ,  5,   4,  3   , 9,   7,   8,   11, 7 ,    5 ,   1,    ,2 ,  3,   8,   8,   11]

    for (let x = 1; x <= coorX.length-1; x++ ){
        this.add.image(coorX[x], coorY[x], "c"+clouds[x])
    }



    const boaster = this.physics.add.sprite(dolzina-6000,visina-1200, "boaster")
    boaster.setScale(0.8)
    gameState.spaceship =  this.physics.add.sprite(dolzina-200,visina -400, "spaceship")
    gameState.spaceship.body.allowGravity = false; 
   // gameState.junak  = this.physics.add.sprite(dolzina-6000, visina-4000, "Zmeja")
    gameState.junak  = this.physics.add.sprite(dolzina-200,    visina-400, "Zmeja")

    gameState.junak.setScale(.40)// pomanjsa
	this.cameras.main.startFollow(gameState.junak)

    //stars to collect 7524.999999999963 2463.333333333333
    var starX = [5500,6500,4600,2500,1000]
    var starY = [3800, 4400, 4400,4100, 3700]



    for (var i = 0; i < 10; i++) {
        var star = this.physics.add.sprite(dolzina - starX[i], visina - starY[i], 'star');
        star.body.allowGravity = false;
        star.setScale(0.05);
        gameState.stars.push(star);
    }
    
    const platformsOptions = ["platform1", "platform1",  "platform4"];
   
    const platforms = this.physics.add.staticGroup();

    var startPlatfrom = platforms.create(dolzina - 200, visina - 200,     "platform4");
    allPlatforms.push(startPlatfrom);


    startPlatfrom =  platforms.create(dolzina-1200,    visina-200,     "platform4")
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
	});

    this.anims.create({
		key: 'reaperMovement',
		frames: this.anims.generateFrameNumbers('reaperMovement', { start: 0, end: 9 }), // Adjust the range as needed
		frameRate: 8,
		repeat: -1
	});

    this.anims.create({
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
  
  this.physics.add.collider(gameState.junak, allPlatforms)
  gameState.junak.setCollideWorldBounds(true) //ne more vn past
  this.physics.add.collider(boaster, allPlatforms)


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
    this.physics.add.overlap(gameState.junak,  gameState.vulture , () => {
        stSmrti++
        deathByWho[1] = [1]
        deathVarient = "bird" 
        this.scene.stop('S4_gamePlayStart')
        this.scene.start('S4_deathScreen') 
        
    })
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
        
    })


        /* KO UMRE            stopChecking = false
        disableReturnBack = false!!!!!!!!!!!!!!*/
       

  
        var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        spaceKey.on('down', function(event) {
            console.log(gameState.junak.x +" "+ gameState.junak.y)
        });
  }
  
  update(){
   // console.log(gameState.junak.x +" "+ gameState.junak.y)



    const platforms = this.physics.add.staticGroup();

    if(gameState.vulture.x >=  dolzina){
        krog = false
    }
    //vulture1
    if(gameState.vulture.x >=  dolzina){
        krog = false
    }
    else if(gameState.vulture.x <=  dolzina-7000){
        krog = true
    }

    if (gameState.vulture.x <  dolzina && krog) {
        gameState.vulture.anims.play('vultureMovement', true);
        gameState.vulture.setVelocityX(800);
        gameState.vulture.flipX = true;     
    } else if(gameState.vulture.x >  dolzina-6500 ) {
        gameState.vulture.anims.playReverse('vultureMovement', true);
        gameState.vulture.setVelocityX(-800);
        gameState.vulture.flipX = false; 
    }
    //vulture 2
    if(gameState.vulture1.x >=  dolzina-5000){
        krog1 = false
    }
    else if(gameState.vulture1.x <=  dolzina-6500){
        krog1 = true
    }

    if (gameState.vulture1.x <   dolzina-5000 && krog1) {
        gameState.vulture1.anims.play('vultureMovement', true);
        gameState.vulture1.setVelocityX(800);
        gameState.vulture1.flipX = true;     
    } else if(gameState.vulture1.x >  dolzina-7500 ) {
        gameState.vulture1.anims.playReverse('vultureMovement', true);
        gameState.vulture1.setVelocityX(-800);
        gameState.vulture1.flipX = false; 
    }
    //spaceship
    if(gameState.spaceShip.x >=  dolzina-5000){
        krogSpaceship = false
    }
    else if(gameState.spaceShip.x <=  dolzina-7100){
        krogSpaceship = true
    }
    if (gameState.spaceShip.x <  dolzina-5000 && krogSpaceship) {
        gameState.spaceShip.anims.play('spaceShipAttacker', true);
        gameState.spaceShip.setVelocityX(800);
        gameState.spaceShip.flipX = false;     
    } else if(gameState.spaceShip.x >  dolzina-7000 ) {
        gameState.spaceShip.anims.playReverse('spaceShipAttacker', true);
        gameState.spaceShip.setVelocityX(-800);
        gameState.spaceShip.flipX = true; 
    }
    //reaper
    if(gameState.reaper.x >=  dolzina-7000){
        krogReaper = false
    }
    else if(gameState.reaper.x <= dolzina-6600){
        krogReaper = true
    }

    if (gameState.reaper.x <  dolzina-5200 && krogReaper) {
        gameState.reaper.anims.playReverse('reaperMovement', true);
        gameState.reaper.setVelocityX(500);
        gameState.reaper.flipX = false;     
    } else if(gameState.reaper.x >=  dolzina-6400 ) {
        gameState.reaper.anims.playReverse('reaperMovement', true);
        gameState.reaper.setVelocityX(-500);
        gameState.reaper.flipX = true; 
    }
   
       

    //reaper1
    if(gameState.reaper1.x >=  dolzina-6000){
        krogReaper1 = false
    }
    else if(gameState.reaper1.x <= dolzina-3500){
        krogReaper1 = true
    }
    if (gameState.reaper1.x <  dolzina-6000 && krogReaper1) {
        gameState.reaper1.anims.playReverse('reaperMovement', true);
        gameState.reaper1.setVelocityX(500);
        gameState.reaper1.flipX = false;     
    } else if(gameState.reaper1.x >=  dolzina-3500 ) {
        gameState.reaper1.anims.playReverse('reaperMovement', true);
        gameState.reaper1.setVelocityX(-500);
        gameState.reaper1.flipX = true; 
    }
    


   
    
    

    const ubijejo = [];
    if(  gameState.junak.y >  visina-4100  && !stopChecking){
       // console.log("#activated")
        stopChecking = true
        this.setJumpingSpeed(-700)
        for (let x = 64; x <= dolzina-400; x = x + 150 ){
            const podenj =  platforms.create(x, visina-3000, 'skeli')
            podenj.allowGravity = false;
         //  podenj.setAlpha(0);
            ubijejo.push(podenj)
        }
        
       
    }

    this.physics.add.overlap(gameState.junak, ubijejo, () => {
        deathVarient = "greediness" 
        this.scene.stop('S4_gamePlayStart')
        this.scene.start('S4_deathScreen') 
    });
    
  

    if(canWin){
        this.physics.add.overlap(gameState.junak,    gameState.spaceship  , () => { 
            this.stopWatchStop()
            this.scene.stop('S4_gamePlayStart')
            this.scene.start('S5_konec')      
            
    })
    }
    var position = visina - 4500
    if(hotdogShow ){
        hotdogShow = false
        gameState.hotdog  = this.physics.add.sprite(dolzina-3700, position, 'hotdog');
        this.physics.add.collider(gameState.hotdog, allPlatforms)
    }

   
    
    this.physics.add.overlap(gameState.junak,  gameState.hotdog , () => {
        gameState.hotdog.destroy()
        var upDownPlanetsLocation = [500,700,1000,1200]      
        var planets;
        var distance = 2800
        for(var i = 0; i < 4; i++){
            planets =  platforms.create(dolzina-6000 + distance, position+upDownPlanetsLocation[i],     "planet"+i)
            planets.setScale(1.5)
            allPlatforms.push(planets)
            distance += 800
        }

        //spaceship killer dolzina-3500, visina-4100
        if (gameState.spaceShipKiller.x <  dolzina-5500 ) {
            gameState.spaceShipKiller.destroy()
            
        } else if(gameState.spaceShipKiller.x >  dolzina-7000 ) {
            gameState.spaceShipKiller.anims.playReverse('quickKillerRocker', true);
            gameState.spaceShipKiller.setVelocityX(-8000);
            gameState.spaceShipKiller.flipX = true; 
    }

    })

    this.physics.add.overlap(gameState.junak, gameState.stars, (user, star) => {
            stZvezd++
          star.destroy();
      });
      

    if(stZvezd == 1 && !stars ){   
        this.showPopupAchievements( this.loadText("ach_stars"))
 
        this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        stars = true;
        this.updateAchievements();
        const dataAchievements = {
        achievements: achievements,
        };
      this.updateDataBaseAchivements(dataAchievements)
      
    }

    super.update("basic")  
 
 
    
    
 
  }
  }
  
  
  