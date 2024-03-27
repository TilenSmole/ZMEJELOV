class scena1 extends osnova {
  constructor(){
    super({ key: 'scena1' });
  }
  preload() {
   this.load.image("ozadje","assets/Background_01.png")
   this.load.image("platform","assets/jump.png")
	 this.load.atlas("coolGuy","assets/najdela/najdela.png","assets/najdela/najdela.json")
	 this.load.image("tla" ,"assets/Tile (15).png")
	 this.load.image("izhod", "assets/Sign_01.png")
   this.load.image("trava", "assets/deco/Grass_01.png")
   this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")

  }
  create() {
		gameState.active = true;
    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje')

  gameState.junak  = this.physics.add.sprite(100,110, "coolGuy")
           gameState.junak.setScale(.40)// pomanjsa
//var frameNames = this.textures.get("coolGuy").getFrameNames()
//console.log(frameNames)
const platforms = this.physics.add.staticGroup();
const izhod = this.physics.add.sprite(1100,500, "izhod")

//const podenj =  platforms.create(0.5, 725, 'tla')
		//podenj.setScale(12.8,0.5)

const tiles = [];
const tileWidth = 128;
for (let x = 64; x < GAME_WIDTH+100; x = x + tileWidth ){
	const podenj =  platforms.create(x, 725, 'tla')
	tiles.push(podenj)
}


const rusevine = this.add.image(300,520,"rusevine")
rusevine.setScale(.6)


const trava = [];
const tileWidthT = 128; //128/64
for (let x = 600; x < 950; x = x + tileWidthT ){
	const podenj =  this.physics.add.sprite(x, 620, 'trava')
	trava.push(podenj)}

	this.physics.add.collider(tiles, trava)

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
        this.anims.create({
                key: 'umre',
                frames: [
                    { key: 'coolGuy',frame:"assets/lvl2/Wraith_03_Dying_000.png" },],
                frameRate: 8,
                repeat: -1
            });

			//	this.coolGuy.play("walk")
			//	this.coolGuy.play("stoji ")

gameState.cursors = this.input.keyboard.createCursorKeys();


gameState.junak.setCollideWorldBounds(true) //ne more vn past

this.physics.add.collider(gameState.junak, tiles)

this.physics.add.overlap(gameState.junak, izhod, () => {
      this.add.text(150, 50, this.loadText("level1_finish"), { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
      this.physics.pause();
      gameState.active = false;
			//za lvl 2
			this.input.on('pointerup', () => {
				this.scene.stop('scena1')
				this.scene.start('scena2')
			});
    })
this.physics.add.collider(izhod, tiles)



  }

  update() {
		if (gameState.active) {
			if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
							gameState.junak.anims.play('stoji', true);
							gameState.junak.setVelocityY(-500);}
		else if(gameState.cursors.right.isDown) {
		gameState.junak.setVelocityX(500)
		gameState.junak.anims.play('walk', true)
	 gameState.junak.flipX = false;
    }
		else if ( gameState.cursors.left.isDown) {
      gameState.junak.setVelocityX(-100);
      gameState.junak.anims.play('movement', true);
      gameState.junak.flipX = true;}
			else {
	        gameState.junak.setVelocityX(0);
	        // Plays the idle animation if no arrow keys are pressed
	        gameState.junak.anims.play('stoji', true);}



  }
}
}
