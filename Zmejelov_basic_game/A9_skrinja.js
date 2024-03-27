class A9_skrinja extends  Phaser.Scene {
    constructor() {
        super({
          key: 'A9_skrinja',
          scale:{
            zoom:20
        },
          physics: {
            default: 'arcade',
           
            arcade: { 
              gravity: { y: 0 }
            }
          }
        });}
    preload() {
      this.load.image("tiles","assets/labirint/basic2.png")
      this.load.image("tla","assets/labirint/tla.png")
      this.load.tilemapTiledJSON("dungeon", "assets/labirint/mapa.json")
      this.load.image("platform","assets/jump.png")
      this.load.image("tla" ,"assets/Tile (15).png")
      this.load.image("izhod", "assets/Sign_01.png")
      this.load.image("trava", "assets/deco/Grass_01.png")
      this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
      this.load.image("koneccc", "assets/labirint/izhod.png")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
      this.load.atlas("coolGuy","assets/najdela/najdela.png","assets/najdela/najdela.json")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);

     }
  create(){



   var  dolzina = 10000
var sirina = 10000
  const map = this.make.tilemap({ key: 'dungeon' })
		const tileset = map.addTilesetImage('basic2', 'tiles')

		map.createLayer('ground', tileset)
		this.zidovi = map.createLayer('walls', tileset)

        this.zidovi.setCollisionByProperty({ collides: true });



        


        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.junak  = this.physics.add.sprite(600,600, "coolGuy")
        gameState.junak.setScale(.15)
        gameState.active = true;

        this.camera=  this.cameras.main.setBounds(0,0,dolzina,sirina)
        this.physics.world.setBounds(0,0,dolzina,sirina)
        this.cameras.main.startFollow(gameState.junak, true,0.5, 0.5)
        this.camera.zoomTo(  
            2, //zoom distance   
            1000 // duration/speed of zoom
            );
        this.physics.add.collider(this.zidovi,  gameState.junak)


        this.anims.create({
                key: 'walk',
                frames: [
                    { key: 'coolGuy',frame:"Wraith_03_Moving Forward_000.png" },],
                frameRate: 8,
                repeat: -1
            });
        
        this.anims.create({
                key: 'stoji',
                frames: [
                    { key: 'coolGuy',frame:"Wraith_03_Idle_000.png" },],
                frameRate: 8,
                repeat: -1
            });

        const izhod = this.physics.add.sprite(1550,200,"koneccc")
        this.physics.add.overlap(gameState.junak, izhod, () => {
          if(vrniNaPogoj == true){
              this.scene.stop('A1_scena1')
              this.scene.start('A0_vsi_nivoji')
          }
          else{
                this.scene.stop('A9_skrinja')
                this.scene.start('A9_skrinja_konec')
           } })
    

  }
  
  update(){
    var speed = 130


    if ((gameState.cursors.up.isDown) ) {
        gameState.junak.anims.play('walk', true);
        gameState.junak.setVelocityY(-speed);}
 if(gameState.cursors.right.isDown) {
gameState.junak.setVelocityX(speed)
gameState.junak.anims.play('walk', true)
gameState.junak.flipX = false;}
 if ( gameState.cursors.left.isDown) {
gameState.junak.setVelocityX(-speed);
gameState.junak.anims.play('walk', true);
gameState.junak.flipX = true;}
if ((gameState.cursors.down.isDown) ) {
    gameState.junak.anims.play('walk', true);
    gameState.junak.setVelocityY(speed);}
if(gameState.cursors.up.isUp && gameState.cursors.down.isUp && gameState.cursors.left.isUp  && gameState.cursors.right.isUp  ){
    gameState.junak.anims.play('stoji', true);
    gameState.junak.setVelocityY(0);
    gameState.junak.setVelocityX(0);}





  }  




  }