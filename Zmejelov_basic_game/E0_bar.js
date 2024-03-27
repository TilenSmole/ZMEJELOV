smeti_pada = []

class E0_bar extends Phaser.Scene{
    constructor() {
      super({
        key: 'E0_bar',
        physics: {
          default: 'arcade',
          arcade: { 
            gravity: { y: 100 }
          }
        }
      });}
  preload() {
    this.load.atlas("zmejaBAR","assets/najdela/najdela.png","assets/najdela/najdela.json")
    this.load.atlas("sovraznik","assets/enemy/enemy1.png","assets/enemy/enemy1.json")
    this.load.image("trgovina","assets/mesto/mesto.png")
    this.load.image("konec", "assets/swamp/voda.png")
    this.load.image("tlaTrgovina" ,"assets/lvl2/2.png")


    this.load.image("h1","assets/mesto/bar/h1.png")
    this.load.image("h2" ,"assets/mesto/bar/h2.png")
    this.load.image("h3", "assets/mesto/bar/h3.png")
    this.load.image("h4","assets/mesto/bar/h4.png")
    this.load.image("h5" ,"assets/mesto/bar/h5.png")
    this.load.image("h6","assets/mesto/bar/h6.png")
    this.load.image("h7","assets/mesto/bar/h7.png")
    this.load.image("h8" ,"assets/mesto/bar/h8.png")
    this.load.image("h9","assets/mesto/bar/h9.png")
    this.load.image("h10","assets/mesto/bar/h10.png")
    this.load.image("h11", "assets/mesto/bar/h11.png")
    this.load.image("h12", "assets/mesto/bar/h12.png")
    this.load.image("h13" ,"assets/mesto/bar/h13.png")
    this.load.image("h14","assets/mesto/bar/h14.png")
    this.load.image("h15","assets/mesto/bar/h15.png")
    this.load.image("h16", "assets/mesto/bar/h16.png")
    this.load.image("h17", "assets/mesto/bar/h17.png")


    this.load.image("sm1","assets/mesto/bar/s1.png")
    this.load.image("sm2" ,"assets/mesto/bar/s2.png")
    this.load.image("sm3", "assets/mesto/bar/s3.png")
    this.load.image("sm4","assets/mesto/bar/s4.png")
    this.load.image("sm5" ,"assets/mesto/bar/s5.png")
    this.load.image("sm6","assets/mesto/bar/s6.png")
    this.load.image("sm7","assets/mesto/bar/s7.png")
    this.load.image("sm8" ,"assets/mesto/bar/s8.png")
    this.load.image("sm9","assets/mesto/bar/s9.png")

    this.load.image("luc", "assets/mesto/luc.png")

    this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);
  
    
   }
   
  create(){

    zaprto = true
    gameState.active = true;
    gameState.cursors = this.input.keyboard.createCursorKeys();
  
    const dolzina = 1200
    const sirina =750
    //ozadje full screen
    this.bg = this.add.image(dolzina / 2, sirina / 2, 'trgovina');
    this.bg.setDisplaySize(dolzina, sirina)
    //dekoracija
    var luc1 = this.physics.add.sprite(1000,500, "luc")
    luc1.setScale(.75)
    //var luc2 =this.physics.add.sprite(100,500, "luc")
    //luc2.setScale(3.5)
  
    gameState.junak  = this.physics.add.sprite(500,650, "zmejaBAR")
    gameState.junak.setScale(.40)// pomanjsa
  
    //platforma
    const platforms = this.physics.add.staticGroup(); //54x55
    const kolider = [];
    const tileWidth4 = 54;
    for (let x = 0; x <= dolzina+100; x = x + 125 ){
    const podenj =  platforms.create(x, sirina+40, 'tlaTrgovina')
    kolider.push(podenj)}
    
    //kamni
    const hrana = []
    const smeti = []
    const zalogaH = ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13", "h14", "h15", "h16", "h17"]
    const zalogaS = ["sm1", "sm2", "sm3", "sm4", "sm5", "sm6", "sm7", "sm8", "sm9"]

    var stH = 0
    var stS = 0

    gameState.scoreText = this.add.text(dolzina-250,20 , 'Score: 0', { fontSize: '30px', fill: '#E950F4',  fontFamily: 'CustomFont' })
    gameState.score = 0

    var  stev =  Math.floor(Math.random() *1200)+1200
    const hrana_pada = this.physics.add.group();
    function padanje () {
        stev =  Math.floor(Math.random() *1100)+1200
        var  kordinata =  Math.floor(Math.random() * dolzina+50);
        var st = Math.floor(Math.random() *17); 
        var vrsta = zalogaH[st]
        var h = hrana_pada.create(kordinata, 10, vrsta);
        h.setScale(2)
      }
    


    const padanjeLoop = this.time.addEvent({
    delay: stev,
    callback: padanje,
    callbackScope: this,
    loop: true,
    });

    var stev2 =  Math.floor(Math.random() *1200)+1200
    function padanjeS () {
        stev2 =  Math.floor(Math.random() *1100)+1200
        var  kordinata =  Math.floor(Math.random() * dolzina+50);
        var st2 = Math.floor(Math.random() *9); 
        var vrsta = zalogaS[st2]
        var smet = this.physics.add.sprite(kordinata, 10, vrsta);
        smet.setScale(2)
        smeti_pada.push(smet)
      }
    
    const padanjeSLoop = this.time.addEvent({
    delay: stev2,
    callback: padanjeS,
    callbackScope: this,
    loop: true,
    });
  



  
  var  kordinata =  Math.floor(Math.random() * dolzina+50); 
  const napoj =  this.physics.add.sprite(sirina/2, -132000 , "konec")
  
  
  
  

  
    gameState.junak.setCollideWorldBounds(true)


    this.physics.add.collider(gameState.junak, kolider)
    this.physics.add.collider(luc1, kolider)  

    this.physics.add.overlap(gameState.junak, hrana_pada, (user, OnePiecefood) => {
      OnePiecefood.destroy()
      gameState.score += 500;
      gameState.scoreText.setText(`Score: ${gameState.score}`)

    });


   

    this.physics.add.overlap(gameState.junak, smeti_pada, (user, OnePiecefood) => {
        OnePiecefood.destroy()
        gameState.score -= 1000;
        gameState.scoreText.setText(`Score: ${gameState.score}`)
      });


   


    this.physics.add.overlap(kolider, napoj, () => {
      this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
      this.titleMusic.play(); 
      vrstaTeksta = "bar"
      this.physics.pause();
      stSmrti += 1
      gameState.active = false;
      this.anims.pauseAll();
      this.scene.stop('E0_bar')
      this.scene.start('vrsta')
  
      });  
      
      
      this.anims.create({
        key: 'walk',
        frames: [
            { key: 'zmejaBAR',frame:"Wraith_03_Moving Forward_000.png" },],
        frameRate: 8,
        repeat: -1
    });

this.anims.create({
        key: 'stoji',
        frames: [
            { key: 'zmejaBAR',frame:"Wraith_03_Idle_000.png" },],
        frameRate: 8,
        repeat: -1
    });
  
  }
  
  update(){
  /*if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
    gameState.junak.anims.play('umre', true);
    gameState.junak.setVelocityY(-650);}*/
   if(gameState.cursors.right.isDown) {
  gameState.junak.setVelocityX(600)
  gameState.junak.anims.play('walk', true)
  gameState.junak.flipX = false;}
  else if ( gameState.cursors.left.isDown) {
  gameState.junak.setVelocityX(-600);
  gameState.junak.anims.play('walk', true);
  gameState.junak.flipX = true;}
  else {
  gameState.junak.setVelocityX(0);
  // Plays the idle animation if no arrow keys are pressed
  gameState.junak.anims.play('stoji', true);}
  
  if(gameState.score > 10000){
    this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
    this.titleMusic.play(); 
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();
    this.scene.stop('E0_bar')
    this.scene.start('E0_barKonec')
      
}


  
  
  }
  }
  
  
  
  
  
  