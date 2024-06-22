const plosce = []

class A7_droperTroll extends Phaser.Scene{
    constructor() {
        super({
          key: 'A7_droperTroll',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 60 }
            }
          }
        });}
  preload() {
    this.load.image("ozadje7","assets/droper/blue-sea-sky-background-calm-sea-surface-sky-clouds-vector-illustration_625536-133.png")
    this.load.image("platformO1","assets/droper/Smoke VFX B2.png")
    this.load.image("platformO2" ,"assets/droper/Smoke VFX C1.png")
    this.load.image("platformO3", "assets/droper/Smoke VFX A1.png")
    this.load.image("platformO4","assets/droper/Smoke VFX B1.png")
    this.load.image("tla" ,"assets/Tile (15).png")
    this.load.image("izhod", "assets/Sign_01.png")
    this.load.image("tla7", "assets/scena6/Brick_02.png")
    this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
    this.load.atlas("zmejaDT","assets/najdela/najdela.png","assets/najdela/najdela.json")
    this.load.image("zaklad","assets/Chest_01_Locked.png")
    this.load.image("sovraznik","assets/enemy/Wraith_02_Idle Blinking_003.png")
    this.load.image("spaceship","assets/scena6/spaceship.png")
    this.load.image("znak","assets/Sign_01.png")
    this.load.image("trava", "assets/deco/Grass_01.png")
    this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
    this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);
    this.load.image("heart","assets/droper/heart.png")


   }
   replaceCharAt(str, index, replacement) {
    if (index < 0 || index >= str.length) {
        return str; // Index out of range, return original string
    }
    return str.substring(0, index) + replacement + str.substring(index + 1);
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
  create(){
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.active = true;
    const visina = 24000
    const dolzina = GAME_WIDTH

    if(easy == true ){
        trenutnaScena = "A7_droperTroll"
        }
    else  if((zmaga == true && spawn6 /*&&cheatZaHard == 0*/ )  ){
        trenutnaScena = "A6_scena6"
    }
    else{
        trenutnaScena = "A4_scena4"
    }
   
    stZivljenj = 3
    
    if(!vrniNaPogoj){
    this.updateDificulty()
    const data = {
    lastLevel: "A7_droperUvod" ,
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

    //ozadje full screen
    this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadje7');
    this.bg.setDisplaySize(dolzina, visina)
  
  
    gameState.junak  = this.physics.add.sprite(dolzina/2,0, "zmejaDT")
    gameState.junak.setScale(.4)// pomanjsa
    

    var spaceship = this.add.image(gameState.junak.x,gameState.junak.y+165, "spaceship")
 

  
    this.camera = this.cameras.main.setBounds(0, 0, dolzina, visina);
    this.physics.world.setBounds(0, 0, dolzina,  visina);
    this.cameras.main.startFollow(gameState.junak);
    this.cameras.main.setPosition(0, 0 ); // Set the camera position to the top-left corner
    this.camera.zoomTo(1, 10000); 
    this.cameras.main.setFollowOffset(0,  -300);

    //oblacki
    var oblacki = ["platformO1", "platformO2", "platformO3","platformO4"] 
    const platforms = this.physics.add.staticGroup(); //128*128
    gameState.junak.setCollideWorldBounds(true)
    var manjsa = 1000
    var pogoj = 0
    plus = 0
    while (pogoj <  800 && manjsa < (visina-6500)){
        //razlika med oblakoma 
        //vedno 2 oblaka
        var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
        var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
        var  zaY =  Math.floor(Math.random() * 100); 
        var plus = Math.floor(Math.random() * dolzina/3)
        var oblak =  Math.floor(Math.random() * 4);
        const podenj =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
        podenj.setScale(3.5)
        plosce.push(podenj)
        var  st =  Math.floor(Math.random() * 11); 
        if(st > 4){
        var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
        var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
        var  zaY =  Math.floor(Math.random() * 100); 
        var plus = Math.floor(Math.random() * dolzina/3)
        var oblak =  Math.floor(Math.random() * 4);
        var podenj2 =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
        podenj2.setScale(3.5)
        plosce.push(podenj2)}
        var  st =  Math.floor(Math.random() * 12); 
        //se en
        if(pogoj > 12 && st > 2){
            var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
            var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
            var  zaY =  Math.floor(Math.random() * 100); 
            var plus = Math.floor(Math.random() * dolzina/3)
            var oblak =  Math.floor(Math.random() * 4);
            var podenj2 =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
            podenj2.setScale(3.5)
            plosce.push(podenj2)
        }
        //se en
        var  st =  Math.floor(Math.random() * 8); 
        if(pogoj > 50 && st > 3){
            var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
            var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
            var  zaY =  Math.floor(Math.random() * 100); 
            var plus = Math.floor(Math.random() * dolzina/3)
            var oblak =  Math.floor(Math.random() * 4);
            var podenj2 =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
            podenj2.setScale(3.5)
            plosce.push(podenj2)
        }

       
    

    var  razlika =  Math.floor(Math.random() * 500)+350; 
    pogoj += 1
    manjsa += razlika
        
    }
    
	var naPol = dolzina/2-380



    var tla =  []
    for (let x = 0; x < dolzina +115; x = x + 115){
		const podenj =  platforms.create(x, visina-5500 , 'tla')
        const podenj2 =  platforms.create(x, visina-5480 , 'tla')
        const podenj3 =  platforms.create(x, visina- 5400, 'tla')
        const podenj4 =  platforms.create(x, visina-5380 , 'tla')
        const podenj5 =  platforms.create(x, visina-5300 , 'tla')
        const podenj6 =  platforms.create(x, visina- 5280, 'tla')
        const podenj7 =  platforms.create(x, visina- 5200, 'tla')
        const podenj8 =  platforms.create(x, visina- 5180, 'tla')
        tla.push(podenj7)
        tla.push(podenj8)
        tla.push(podenj3)
		tla.push(podenj)
        tla.push(podenj2)
        tla.push(podenj6)
		tla.push(podenj5)
        tla.push(podenj4)

	}
    const atlantida = this.physics.add.sprite(200,visina-6000, "trava")
    const sovraznik = this.physics.add.sprite(500,visina-6000, "rusevine")
    sovraznik.setScale(.3)
    const zaklad = this.physics.add.sprite(850,visina-6000, "trava")
    const izhod = this.physics.add.sprite(1100,visina-6000, "trava")

    this.physics.add.collider(tla, izhod)
    this.physics.add.collider(tla, zaklad)
	this.physics.add.collider(tla, sovraznik)
	this.physics.add.collider(tla, atlantida)


    this.anims.create({
            key: 'stoji',
            frames: [
                { key: 'zmejaDT',frame:"Wraith_03_Idle_000.png" },],
            frameRate: 8,
            repeat: -1
        });
    this.anims.create({
        key: 'umre',
        frames: [
            { key: 'zmejaDT',frame:"assets/lvl2/Wraith_03_Dying_000.png" },],
        frameRate: 8,
        repeat: -1
    });
	this.physics.add.overlap(gameState.junak, tla, () => {
        this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        stSmrti += 1
          this.anims.pauseAll();
          gameState.active = false;
          vrstaTeksta = "level_7_konecTroll"
          vrsta_smrt  =true
          this.scene.stop('A7_droperTroll')
          this.scene.start('vrsta')
            })
    


   

        gameState.heart1  = this.physics.add.sprite(40,gameState.junak.y -50, "heart")
        gameState.heart1.setScale(0.1)
        gameState.heart2  = this.physics.add.sprite(90,gameState.junak.y -50, "heart")
        gameState.heart2.setScale(0.1)
        gameState.heart3  = this.physics.add.sprite(140,gameState.junak.y -50, "heart")
        gameState.heart3.setScale(0.1)
  }

update(){
    if (gameState.active) {
        /*if ((gameState.cursors.down.isDown) ) {
                        gameState.junak.anims.play('stoji', true);
                        gameState.junak.setVelocityY(650);}*/
         if(gameState.cursors.right.isDown) {
            gameState.junak.setVelocityX(500)
            gameState.junak.anims.play('stoji', true)
            gameState.junak.flipX = false;}
        else if ( gameState.cursors.left.isDown) {
            gameState.junak.setVelocityX(-500);
            gameState.junak.anims.play('stoji', true);
            gameState.junak.flipX = true;}
        else {
            gameState.junak.setVelocityX(0);
            // Plays the idle animation if no arrow keys are pressed
            gameState.junak.anims.play('stoji', true);}

}
    gameState.heart1.y =     gameState.junak.y -50
    gameState.heart2.y =     gameState.junak.y-50
    gameState.heart3.y =     gameState.junak.y -50
    

    this.physics.add.overlap(gameState.junak, plosce, (user, cloud) => {
        cloud.destroy()
        this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        stZivljenj--
        if(stZivljenj == 2)
            gameState.heart3.destroy()
        if(stZivljenj == 1)
            gameState.heart2.destroy()

        if (stZivljenj == 0) {
        stSmrti += 1
          this.anims.pauseAll();
          gameState.active = false;
          vrstaTeksta = "padec"
          vrsta_smrt  =true
          this.scene.stop('A7_droperTroll')
          this.scene.start('vrsta')
        }
        });

        //DESTROY ALL CLOUDS IF NOT VISIBLE !!!!!!!!!!!!!!!!!

  }
  }
  
  
  
  
  
  