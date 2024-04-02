class AS_skrivni extends Phaser.Scene{
  constructor() {
    super({
      key: 'AS_skrivni',
      physics: {
        default: 'arcade',
        arcade: { 
          gravity: { y: 32 }
        }
      }
    });}
preload() {
  this.load.atlas("zmejaDT","assets/najdela/najdela.png","assets/najdela/najdela.json")
  this.load.atlas("sovraznik","assets/enemy/enemy1.png","assets/enemy/enemy1.json")
  this.load.image("ozadjeS","assets/skrivni/istockphoto-1158457256-612x612.jpg")
  this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
  this.load.image("kamen2","assets/skrivni/rock_2.png")
  this.load.image("kamen1" ,"assets/skrivni/rock_1.png")
  this.load.image("kamen3", "assets/skrivni/rock_3.png")
  this.load.image("kamen4","assets/skrivni/kamen4.png")
  this.load.image("kamen5" ,"assets/skrivni/kamen5.png")
  this.load.image("kamen6","assets/skrivni/kamen6.png")
  this.load.image("kamen7","assets/skrivni/kamen7.png")
  this.load.image("kamen8" ,"assets/skrivni/kamen8.png")
  this.load.image("kamen9","assets/skrivni/kamen9.png")
  this.load.image("kamen10","assets/skrivni/kamen10.png")
  this.load.image("napoj", "assets/skrivni/napoj.png")
  this.load.image("lampa", "assets/skrivni/lamp.png")
  this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
  this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);
  this.load.json('textSlo', 'translations/translationsSLO_js.json');
  this.load.json('textEn', 'translations/translationsEN_js.json');
  
 }  
loadText(text_to_translate) {
  if (language === "en") {
                return this.cache.json.get('textEn')["en"][text_to_translate];

  } else {
                return this.cache.json.get('textSlo')["slo"][text_to_translate];

  }
}
create(){
  zaprto = true
  gameState.active = true;
	gameState.cursors = this.input.keyboard.createCursorKeys();

  const dolzina = 1200
  const sirina =750
  //ozadje full screen
  this.bg = this.add.image(dolzina / 2, sirina / 2, 'ozadjeS');
  this.bg.setDisplaySize(dolzina, sirina)
  //dekoracija
  var luc1 = this.physics.add.sprite(1080,500, "lampa")
  luc1.setScale(3.5)
  var luc2 =this.physics.add.sprite(100,500, "lampa")
  luc2.setScale(3.5)

  gameState.junak  = this.physics.add.sprite(100,600, "zmejaDT")
  gameState.junak.setScale(.40)// pomanjsa

  //platforma
  const platforms = this.physics.add.staticGroup(); //54x55
  const kolider = [];
  const tileWidth4 = 54;
  for (let x = 0; x <= 1200; x = x + 50 ){
  const podenj =  platforms.create(x, 725, 'kamen2')
  podenj.setScale(2.3)
  kolider.push(podenj)}
  
  //kamni
  const kolizija = []
  const pohlep = []
  const kamni = ["kamen1", "kamen2", "kamen3", "kamen4", "kamen5", "kamen6", "kamen7", "kamen8", "kamen9", "kamen10"]
  var pogoj = 0
  var manjsa = -500

  while (manjsa > -20000 ){
      var  kordinata =  Math.floor(Math.random() * dolzina+50); 
      var st = Math.floor(Math.random() *10); 
      var vrsta = kamni[st]
      const kamen =  this.physics.add.sprite(kordinata, manjsa  , vrsta)
      kamen.setScale(2.6)

      if (vrsta == "kamen5" || vrsta == "kamen9" || vrsta == "kamen7"){
        pohlep.push(kamen)
      }
      else{
      kolizija.push(kamen)}

      pogoj += 1
      manjsa -= 500
    
  }
  while (-20000 < manjsa < -30000 ){
    var  kordinata =  Math.floor(Math.random() * dolzina+50); 
    var st = Math.floor(Math.random() *10 ); 
    var vrsta = kamni[st]
    const kamen =  this.physics.add.sprite(kordinata, manjsa  , vrsta)
    kamen.setScale(2.6)
    if (vrsta == "kamen5" || vrsta == "kamen9" || vrsta == "kamen7"){
      pohlep.push(kamen)
    }
    else{
    kolizija.push(kamen)}

    var  kordinata =  Math.floor(Math.random() * dolzina+50); 
    var st = Math.floor(Math.random() *10 ); 
    var vrsta = kamni[st]
    const kamen1 =  this.physics.add.sprite(kordinata, manjsa  , vrsta)
    kamen1.setScale(2.6)
    if (vrsta == "kamen5" || vrsta == "kamen9" || vrsta == "kamen7"){
      pohlep.push(kamen1)
    }
    else{
    kolizija.push(kamen1)}
    pogoj += 1
    manjsa -= 500
  }

  while (-30000 < manjsa < -36500 ){
    var  kordinata =  Math.floor(Math.random() * dolzina+50); 
    var st = Math.floor(Math.random() *10 ); 
    var vrsta = kamni[st]
    const kamen =  this.physics.add.sprite(kordinata, manjsa  , vrsta)
    kamen.setScale(2.6)
    if (vrsta == "kamen5" || vrsta == "kamen9" || vrsta == "kamen7"){
      pohlep.push(kamen)
    }
    else{
    kolizija.push(kamen)}

    var  kordinata =  Math.floor(Math.random() * dolzina+50); 
    var st = Math.floor(Math.random() *10 ); 
    var vrsta = kamni[st]
    const kamen1 =  this.physics.add.sprite(kordinata, manjsa  , vrsta)
    kamen1.setScale(2.6)
    if (vrsta == "kamen5" || vrsta == "kamen9" || vrsta == "kamen7"){
      pohlep.push(kamen1)
    }
    else{
    kolizija.push(kamen1)}

    var  kordinata =  Math.floor(Math.random() * dolzina+50); 
    var st = Math.floor(Math.random() *10 ); 
    var vrsta = kamni[st]
    const kamen2 =  this.physics.add.sprite(kordinata, manjsa  , vrsta)
    kamen2.setScale(2.6)
    if (vrsta == "kamen5" || vrsta == "kamen9" || vrsta == "kamen7"){
      pohlep.push(kamen2)
    }
    else{
    kolizija.push(kamen2)}


  pogoj += 1
  manjsa -= 500

  }





var  kordinata =  Math.floor(Math.random() * dolzina+50); 
const napoj =  this.physics.add.sprite(sirina/2, -35500 , "napoj")
napoj.setScale(2)
this.physics.add.collider(kolider, napoj)






	gameState.junak.setCollideWorldBounds(true)


	this.physics.add.collider(gameState.junak, kolider)
	this.physics.add.collider(luc1, kolider)
  this.physics.add.collider(luc2, kolider)

 
 

  this.physics.add.overlap(gameState.junak, kolizija, () => {
    this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
  		this.titleMusic.play();   

    stSmrti += 1
    this.add.text(dolzina / 2, sirina / 2,  'Ouch', { fontFamily: 'CustomFont', fontSize: 36, color: '#FFFFFF' });
  this.physics.pause();
  gameState.active = false;
  this.anims.pauseAll();
  if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
    trenutnaScena = "AS_jamaKonec"
      this.scene.stop('AS_skrivni')
      this.scene.start('smrt')
      }
  else{
      this.scene.stop('AS_skrivni')
      this.scene.start('AS_jamaKonec')
  }
  });
  this.physics.add.overlap(gameState.junak, pohlep, () => {
    this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
  		this.titleMusic.play(); 
    stSmrti += 1

    this.add.text(100, GAME_HEIGHT - 200, this.loadText("cave_loose2"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
  });


  this.physics.pause();
  gameState.active = false;
  this.anims.pauseAll();
  if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
    trenutnaScena = "AS_jamaKonec"
   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('AS_skrivni')
      this.scene.start('smrt')
      });}
  else{
   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('AS_skrivni')
      this.scene.start('AS_jamaKonec')
  })}
    });
  this.physics.add.overlap(gameState.junak, napoj, () => {
    this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
  		this.titleMusic.play(); 
    zmaga = true
  this.physics.pause();
  gameState.active = false;
  this.anims.pauseAll();
  if(vrniNaPogoj == true){
      this.scene.stop('AS_skrivni')
      this.scene.start('AS_jamaKonec')
    
  }
  else{
    this.scene.stop('AS_skrivni')
    this.scene.start('AS_jamaKonec')
  }

    });    
  

}

update(){
/*if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
  gameState.junak.anims.play('umre', true);
  gameState.junak.setVelocityY(-650);}*/
 if(gameState.cursors.right.isDown) {
gameState.junak.setVelocityX(600)
gameState.junak.anims.play('umre', true)
gameState.junak.flipX = false;}
else if ( gameState.cursors.left.isDown) {
gameState.junak.setVelocityX(-600);
gameState.junak.anims.play('umre', true);
gameState.junak.flipX = true;}
else {
gameState.junak.setVelocityX(0);
// Plays the idle animation if no arrow keys are pressed
gameState.junak.anims.play('umre', true);}



}
}





