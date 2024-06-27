class A8_plavanje extends  Phaser.Scene {
    constructor() {
        super({
          key: 'A8_plavanje',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 100 }
            }
          }
        });}
    preload() {
      this.load.atlas("zmejaDT","assets/najdela/najdela.png","assets/najdela/najdela.json")
      this.load.atlas("sovraznik","assets/enemy/enemy1.png","assets/enemy/enemy1.json")
      this.load.image("ozadjeP","assets/plavanje/index.png")
      this.load.image("tla7", "assets/scena6/Brick_02.png")
      this.load.atlas("sovraznik","assets/enemy/enemy1.png","assets/enemy/enemy1.json")
      this.load.image("zaklad" ,"assets/Chest_01_Locked.png")
      this.load.image("riba1", "assets/plavanje/riba1.png")
      this.load.image("riba2", "assets/plavanje/riba2.png")
      this.load.image("riba3", "assets/plavanje/riba3.png")
      this.load.image("riba4", "assets/plavanje/riba4.png")
      this.load.image("riba5", "assets/plavanje/riba5.png")
      this.load.image("riba6", "assets/plavanje/riba6.png")
      this.load.image("riba7", "assets/plavanje/riba7.png")
      this.load.image("riba8", "assets/plavanje/riba8.png")
      this.load.image("obvestilo", "assets/deco/Sign_06.png")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
      this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);
      
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
  
      difficulty = difficultyUpdated;
    }
create(){
  zaprto = true
  gameState.active = true;
  gameState.cursors = this.input.keyboard.createCursorKeys();

  const dolzina = 16000
  const visina =750
  //ozadje full screen
  this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadjeP');
  this.bg.setDisplaySize(dolzina, visina)
  
  if(easy == true ||(zmaga == true &&  spawnP/*&&cheatZaHard == 2*/ )){
    trenutnaScena = "A8_plavanje"
   }
  else if ((zmaga == true && spawn6)){
    trenutnaScena = "A6_scena6"
  }
  else{
    trenutnaScena = "A4_scena4"
  }
  if(!vrniNaPogoj){
    this.updateDificulty()
    const data = {
    lastLevel: "A8_plavanje" ,
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
  //platforma
  const platforms = this.physics.add.staticGroup(); //54x55
  const kolider = [];
  const koliderHuman = [];

  for (let x = 0; x < dolzina +250; x = x + 115){
    const podenj1 =  platforms.create(x,  0, 'tla7')
    const podenj2 =  platforms.create(x, 710 , 'tla7')
    kolider.push(podenj2)
    kolider.push(podenj1)
  }
  //dekoracija ribe
  var zalogaRib = ["riba1", "riba2", "riba3", "riba4", "riba5", "riba6", "riba7", "riba8"]
  var koodinataX = 0
  
  for (let x = 0; x < dolzina ; x = x + 115){
    var  kordinataY =  Math.floor(Math.random() * (visina-100  -120  + 1))  + 120 ; 
    var nacin =  Math.floor(Math.random() * 5); 
    var velikostRib = (Math.random() * 2)+0.5; 

    if (nacin == 0){
      var riba = Math.floor(Math.random() * 7); 
      var  plus  =  Math.floor(Math.random() * (100))  ; 
      var riba = this.add.image(koodinataX + plus ,kordinataY, zalogaRib[riba])
      riba.setScale(velikostRib)
    }
    if (nacin == 1){
      var riba = Math.floor(Math.random() * 7); 
      var  plus  =  Math.floor(Math.random() * (10))  ; 
      var  kordinataY =  Math.floor(Math.random() * (visina-125  -120  + 1))  + 120 ; 
      this.add.image(koodinataX + plus ,kordinataY, zalogaRib[riba])
      var  plus  =  Math.floor(Math.random() * (100))  ; 
      var riba = Math.floor(Math.random() * 7); 
      var  kordinataY =  Math.floor(Math.random() * (visina-120  + 1))  ; 
      var riba =  this.add.image(koodinataX + plus,kordinataY, zalogaRib[riba])
      riba.setScale(velikostRib)

    }
    if (nacin == 2){
      for (var r1 = 0; r1 <= 2; r1 += 1){
      var riba = Math.floor(Math.random() * 7); 
      var  plus  =  Math.floor(Math.random() * (100))  ; 
      var  kordinataY =  Math.floor(Math.random() * (visina-100  -120  + 1))  + 120 ; 
      this.add.image(koodinataX + plus ,kordinataY, zalogaRib[riba])}
    }
    if (nacin == 3){
      for (var r2 = 0; r2 <= 3; r2 += 1){
        var riba = Math.floor(Math.random() * 7); 
        var  plus  =  Math.floor(Math.random() * (100))  ; 
        var  kordinataY =  Math.floor(Math.random() * (visina-100  -120  + 1))  + 120 ; 
        this.add.image(koodinataX + plus ,kordinataY, zalogaRib[riba])}
    }
    var dodatek = Math.floor(Math.random() * 500)+125;
    koodinataX += dodatek 


    }



  //ovire
  var ovire = []
  for (let x = 345; x < 4000 ; x = x + st){
      var  nacin =  Math.floor(Math.random() * 16 ); 
      var st =  Math.floor(Math.random() * 300 ) +300
      //semi
      if (nacin == 0 || nacin == 4 ){
        for (let  y = 110; y < 340; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        }
        for (let  y = 565; y < 800; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        }}
      if (nacin == 1 || nacin == 2 || nacin == 3){
        //super easy
        for (let  y = 480; y <= 710; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        }}
      if (nacin == 5 || nacin == 6){
          //gard
          for (let  y = 331.5; y <= 710; y += 115 ){
            const podenj1 =  platforms.create(x,  y, 'tla7')
            kolider.push(podenj1)
        }}
      if (nacin == 7){
        //easy
        for (let  y = 110; y <= 340; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
          }}
      if (nacin == 8 || nacin == 9){
        var  kordinataY =  Math.floor(Math.random() * (visina-100  -120  + 1))  + 120 ; 
        const podenj1 =  platforms.create(x,  kordinataY, 'tla7')
        kolider.push(podenj1)
          }
      if (nacin == 10 || nacin == 11){
          for (let  y = 115; y < 230; y += 115 ){
            const podenj1 =  platforms.create(x,  y, 'tla7')
            kolider.push(podenj1)   
          }
          for (let  y = visina-150; y > visina-300; y -= 115 ){
            const podenj1 =  platforms.create(x,  y, 'tla7')
            kolider.push(podenj1)   
          }
        }
      if (nacin == 12 || nacin == 13){
        for (let  y = 110; y <= 225; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)   
        }
        for (let  y = visina-150; y > visina-260; y -= 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)    
        }
      }
      if (nacin == 14 || nacin == 15){
        var  kordinataY =  Math.floor(Math.random() * (visina-250  -140  + 1))  + 140 ; 
        for (let  y = kordinataY; y < kordinataY+230; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        } 
      }



        }

      
  //sovrazniki
  var riba = Math.floor(Math.random() * 6); 
  gameState.sovraznik2 = this.physics.add.sprite(4200, 100,zalogaRib[riba]);
  gameState.sovraznik2.setScale(3)
  gameState.sovraznik2.move = this.tweens.add({
  targets: gameState.sovraznik2,
  y: 650,
  ease: 'Linear',
  duration: 1800,
  repeat: -1,

  yoyo: true,})
  var riba = Math.floor(Math.random() * 6); 
  koliderHuman.push(gameState.sovraznik2)
  gameState.sovraznik1 = this.physics.add.sprite(5200, 100,zalogaRib[riba]);
  gameState.sovraznik1.setScale(3)
  gameState.sovraznik1.move = this.tweens.add({
  targets: gameState.sovraznik1,
  y: 650,
  ease: 'Linear',
  duration: 1800,

  repeat: -1,
  yoyo: true,})
  var riba = Math.floor(Math.random() * 6); 
  koliderHuman.push(gameState.sovraznik1)
  gameState.sovraznik3 = this.physics.add.sprite(4700, 650,zalogaRib[riba]);
  gameState.sovraznik3.setScale(3)
  gameState.sovraznik3.move = this.tweens.add({
  targets: gameState.sovraznik3,
  y: 100,
  ease: 'Linear',
  duration: 1800,

  repeat: -1,
  yoyo: true,})
  var riba = Math.floor(Math.random() * 6); 
  koliderHuman.push(gameState.sovraznik3)
  gameState.sovraznik4 = this.physics.add.sprite(6000, 500,zalogaRib[riba]);
  gameState.sovraznik4.setScale(3)
  gameState.sovraznik4.move = this.tweens.add({
  targets: gameState.sovraznik4,
  x: 6300,
  ease: 'Linear',
  duration: 1800,
  flipX: true,
  repeat: -1,
  yoyo: true,})
  koliderHuman.push(gameState.sovraznik4)
 

  this.physics.add.collider(gameState.sovraznik4 , kolider)
  this.physics.add.collider(gameState.sovraznik2 , kolider)
  this.physics.add.collider(gameState.sovraznik1 , kolider)
  this.physics.add.collider(gameState.sovraznik3 , kolider)


  var x = 100//100
	var y = 500
	if(spawnP == true  && (easy == true || zmaga == true)){
		x = 6500
	    y = visina - 400
	}
  gameState.junak  = this.physics.add.sprite(x,y, "zmejaDT")
  gameState.junak.setScale(.3)// pomanjsa  

  gameState.junak.setCollideWorldBounds(true)

	this.cameras.main.setBounds(0,0,dolzina,visina)
	this.physics.world.setBounds(0,0,dolzina,visina)
	this.cameras.main.startFollow(gameState.junak)
  
  const izhod7 = this.physics.add.sprite(15000,400,"zaklad")
  this.physics.add.collider(kolider , izhod7)



  //ovire 2 
  var ovire = []
  for (let x = 7000; x < 13500 ; x = x + st){
      var  nacin =  Math.floor(Math.random() * 18 ); 
      var st =  Math.floor(Math.random() * 300 ) +300
      //semi
      if (nacin == 0 || nacin == 4 ){
        for (let  y = 110; y < 340; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        }
        for (let  y = 565; y < 800; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        }}
      if (nacin == 1 || nacin == 2 || nacin == 3){
        //super easy
        for (let  y = 480; y <= 710; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        }}
      if (nacin == 5 || nacin == 6){
          //gard
          for (let  y = 331.5; y <= 710; y += 115 ){
            const podenj1 =  platforms.create(x,  y, 'tla7')
            kolider.push(podenj1)
        }}
      if (nacin == 7){
        //easy
        for (let  y = 110; y <= 340; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
          }}
      if (nacin == 8 || nacin == 9){
        var  kordinataY =  Math.floor(Math.random() * (visina-100  -120  + 1))  + 120 ; 
        const podenj1 =  platforms.create(x,  kordinataY, 'tla7')
        kolider.push(podenj1)
          }
      if (nacin == 10 || nacin == 11){

        var riba = Math.floor(Math.random() * 6); 
        gameState.sovraznikZanka = this.physics.add.sprite(x, 50,zalogaRib[riba]);
        gameState.sovraznikZanka.setScale(3)
        gameState.sovraznikZanka.move = this.tweens.add({
        targets: gameState.sovraznikZanka,
        y: 600,
        ease: 'Linear',
        duration: 1800,
        flipX: true,
        repeat: -1,
        yoyo: true,})
        koliderHuman.push(gameState.sovraznikZanka)
          }
        if (nacin == 12 || nacin == 13){
          for (let  y = 115; y < 230; y += 115 ){
            const podenj1 =  platforms.create(x,  y, 'tla7')
            kolider.push(podenj1)   
          }
          for (let  y = visina-150; y > visina-300; y -= 115 ){
            const podenj1 =  platforms.create(x,  y, 'tla7')
            kolider.push(podenj1)   
          }
        }
      if (nacin == 14 || nacin == 15){
        for (let  y = 110; y <= 225; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)   
        }
        for (let  y = visina-150; y > visina-260; y -= 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)    
        }
      }
      if (nacin == 16 || nacin == 17){
        var  kordinataY =  Math.floor(Math.random() * (visina-250  -140  + 1))  + 140 ; 
        for (let  y = kordinataY; y < kordinataY+230; y += 115 ){
          const podenj1 =  platforms.create(x,  y, 'tla7')
          kolider.push(podenj1)
        } 
      }






          }






  //spawnpoint
  const spawn = this.physics.add.sprite(6400,400,"obvestilo")
  this.physics.add.collider(spawn, kolider)
  this.physics.add.overlap(gameState.junak, spawn, () => {
    if(easy == true || (zmaga == true  )){
      /*if (zmaga = true){
        cheatZaHard = 2
      }*/
      spawnP = true
      this.add.text(6400, 600, 'SpawnPoint',{ fontSize: '40px', fill: '#FFFFFF' });}
      
    
  });  
    

 
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
  this.anims.create({
    key: 'sovraznik',
    frames: [
    { key: 'sovraznik',frame:"assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
    frameRate: 10,
    repeat: -1
    }); 

  this.physics.add.overlap(gameState.junak, kolider, () => {
    this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
    this.titleMusic.play(); 
    stSmrti += 1
    this.anims.pauseAll();
    gameState.active = false;
    vrstaTeksta = "A8_udar"
    vrsta_smrt  =true
    if(easy == true ||(zmaga == true && spawnP/* cheatZaHard == 2*/ )){
      trenutnaScena = "A8_plavanje"
     }
    else if ((zmaga == true && spawn6 && !spawnP /*cheatZaHard == 0*/ )){
      trenutnaScena = "A6_scena6"
    }
    else{
      trenutnaScena = "A4_scena4"
    }

    this.scene.stop('A8_plavanje')
    this.scene.start('vrsta')

      
    });
    this.physics.add.overlap(gameState.junak, koliderHuman, () => {
      this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
      this.titleMusic.play(); 
      stSmrti += 1
      this.anims.pauseAll();
      gameState.active = false;
      if(easy == true ||(zmaga == true && spawnP/* cheatZaHard == 2*/ )){
        trenutnaScena = "A8_plavanje"
       }
      else if ((zmaga == true && spawn6 && !spawnP /*cheatZaHard == 0*/ )){
        trenutnaScena = "A6_scena6"
      }
      else{
        trenutnaScena = "A4_scena4"
      }

      
      vrstaTeksta = "A8_udarHuman"
      vrsta_smrt  =true
      this.scene.stop('A8_plavanje')
      this.scene.start('vrsta')
        
      });
  

    this.physics.add.overlap(gameState.junak, izhod7, () => {
      this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
    this.titleMusic.play(); 
      this.physics.pause();
      gameState.active = false; 
      vrstaTeksta = "level_8_konec"
      this.physics.pause();
      this.scene.stop('A8_plavanje')
      this.scene.start('vrsta')
  
 
    })


  }
update(){
  var y = 100
  var x = 250
 

  if ((gameState.cursors.up.isDown ) ) {
    gameState.junak.anims.play('stoji', true);
    gameState.junak.setVelocityY(-y);}
  else if(gameState.cursors.right.isDown &! (gameState.cursors.up.isDown) ) {
  gameState.junak.setVelocityX(x)
  gameState.junak.anims.play('stoji', true)
  gameState.junak.flipX = false;}
  else if(gameState.cursors.right.isDown && (gameState.cursors.up.isDown) ) {
      gameState.junak.setVelocityX(x)
      gameState.junak.setVelocityY(-y);
      gameState.junak.anims.play('stoji', true)
      gameState.junak.flipX = false;}
  else  if ( gameState.cursors.left.isDown  &! (gameState.cursors.up.isDown)) {
  gameState.junak.setVelocityX(-x);
  gameState.junak.anims.play('stoji', true);
  gameState.junak.flipX = true;}
  else if(gameState.cursors.left.isDown && (gameState.cursors.up.isDown) ) {
      gameState.junak.setVelocityX(x)
      gameState.junak.setVelocityY(-y);
      gameState.junak.flipX = false;}

  else if ((gameState.cursors.down.isDown) ) {
      gameState.junak.anims.play('stoji', true);
      gameState.junak.setVelocityY(x);}

  else if(gameState.cursors.right.isDown &! (gameState.cursors.down.isDown) ) {
      gameState.junak.setVelocityX(x)
      gameState.junak.anims.play('stoji', true)
      gameState.junak.flipX = false;}
  else if(gameState.cursors.right.isDown && (gameState.cursors.down.isDown) ) {
      gameState.junak.setVelocityX(x)
      gameState.junak.setVelocityY(y);
      gameState.junak.anims.play('stoji', true)
      gameState.junak.flipX = false;}
  else  if ( gameState.cursors.left.isDown  &! (gameState.cursors.down.isDown)) {
      gameState.junak.setVelocityX(-x);
      gameState.junak.anims.play('stoji', true);
      gameState.junak.flipX = true;}
  else if(gameState.cursors.left.isDown && (gameState.cursors.down.isDown) ) {
      gameState.junak.setVelocityX(x)
      gameState.junak.setVelocityY(y);
      gameState.junak.flipX = false;}
  else if ((gameState.cursors.down.isDown) ) {
    gameState.junak.anims.play('stoji', true);
    gameState.junak.setVelocityY(y);}    
  else {
  gameState.junak.setVelocityX(0);
  // Plays the idle animation if no arrow keys are pressed
  gameState.junak.anims.play('stoji', true);}



  
}
}
    
    
    
    
    