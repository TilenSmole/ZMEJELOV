class scena3 extends osnova {
	constructor() {
		super({ key: 'scena3' });
	}
	preload() {
		this.load.image("ozadje3", "assets/scena3/Gold-Coin-680x380.jpg")
		this.load.image("tla2", "assets/lvl2/2.png")
		this.load.atlas("coolGuy3", "assets/lvl2/najdela.png", "assets/lvl2/najdela.json")
		//ploščadi
		this.load.image("ploscad0", "assets/lvl2/14.png")
		this.load.image("ploscad1", "assets/lvl2/15.png")
		this.load.image("ploscad2", "assets/lvl2/16.png")
		this.load.image("izhod3", "assets/Sign_01.png")
		this.load.image("skeli", "assets/deco/Spikes.png")
		this.load.image("mrtvec", "assets/deco/Skeleton.png")


	}
	create() {
		gameState.active = true;

		//ozadje full screen
		this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje3');
		this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
		//platforma
		const platforms = this.physics.add.staticGroup();
		const tiles = [];
		const tileWidth = 128;
		for (let x = 64; x < 600; x = x + tileWidth) {
			const podenj = platforms.create(x, 725, 'tla2')
			tiles.push(podenj)
		}
		//junak
		gameState.junak3 = this.physics.add.sprite(100, 500, "coolGuy3")
		gameState.junak3.setScale(.40)




		this.anims.create({
			key: 'walk2',
			frames: [
				{ key: 'coolGuy3', frame: "Wraith_03_Moving Forward_000.png" },],
			frameRate: 8,
			repeat: -1
		});
		this.anims.create({
			key: 'stoji2',
			frames: [
				{ key: 'coolGuy3', frame: "Wraith_03_Idle_000.png" },],
			frameRate: 8,
			repeat: -1
		});
		this.anims.create({
			key: 'umre2',
			frames: [
				{ key: 'coolGuy3', frame: "assets/New folder/Wraith_03_Dying_000.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 8,
			repeat: -1
		});
		gameState.cursors = this.input.keyboard.createCursorKeys();

		gameState.junak3.setCollideWorldBounds(true)

		this.physics.add.collider(gameState.junak3, tiles)
		const mrtvec = this.physics.add.sprite(250, 600, "mrtvec")
		this.physics.add.collider(tiles, mrtvec)

		//jumping 1 in 2
		const kamSkocit4 = platforms.create(600, 350, 'ploscad1') //tileWidth = 128
		const kamSkocit5 = platforms.create(375, 500, 'ploscad1') //tileWidth = 128

		this.physics.add.collider(gameState.junak3, kamSkocit4)
		this.physics.add.collider(gameState.junak3, kamSkocit5)

		/*var frameNames = this.textures.get("ploscad0").getFrameNames()
		console.log(frameNames)*/

		// past jumping pointer
		const kamSkocit6 = platforms.create(1008, 200, 'ploscad1')
		const kamSkocit7 = platforms.create(884, 200, 'ploscad0') //tileWidth = 128
		const kamSkocit8 = platforms.create(1136, 200, 'ploscad2') //tileWidth = 128

		this.add.image(1100, 96, "izhod3")

		const spice = []; //128*64
		const tileWidth3 = 128;
		for (let x = 728; x < GAME_WIDTH; x = x + tileWidth3) {
			const podenj = platforms.create(x, 725, 'skeli')
			spice.push(podenj)
		}




		/*
		const skeli = this.physics.add.sprite(700,700,"skeli")
		skeli.setCollideWorldBounds(true)
		const DeadBush1 = this.physics.add.sprite(832,700,"skeli") //132
		const DeadBush2 = this.physics.add.sprite(964,700,"skeli")
		const DeadBush3 = this.physics.add.sprite(1096,700,"skeli")
		const DeadBush4 = this.physics.add.sprite(1150,700,"skeli")
		spice.setCollideWorldBounds(true)
		DeadBush2.setCollideWorldBounds(true)
		DeadBush3.setCollideWorldBounds(true)
		DeadBush4.setCollideWorldBounds(true)*/




		this.physics.add.overlap(gameState.junak3, spice, () => {
			this.add.text(150, 100, this.loadText("level3_finish"), { fontFamily: 'Arial', fontSize: 50, color: '#191970' });
			this.physics.pause();
			gameState.active = false;
			//za lvl 4
			this.input.on('pointerup', () => {
				this.scene.stop('scena3')
				this.scene.start('scena4')
			});
		})/*
this.physics.add.overlap(gameState.junak3, skeli, () => {
		      this.add.text(150, 50, 'he he he', { fontFamily: 'Arial', fontSize: 36, color: '#45664464' });
		      this.physics.pause();
		      gameState.active = false;
					//za lvl 4
					this.input.on('pointerup', () => {
						this.scene.stop('scena3')
						this.scene.start('scena4')
					});
		    })
this.physics.add.overlap(gameState.junak3, DeadBush2, () => {
				      this.add.text(150, 50, 'he he he', { fontFamily: 'Arial', fontSize: 36, color: '#45664464' });
				      this.physics.pause();
				      gameState.active = false;
							//za lvl 4
							this.input.on('pointerup', () => {
								this.scene.stop('scena3')
								this.scene.start('scena4')
							});
				    })
this.physics.add.overlap(gameState.junak3, DeadBush3, () => {
						      this.add.text(150, 50, 'he he he', { fontFamily: 'Arial', fontSize: 36, color: '#45664464' });
						      this.physics.pause();
						      gameState.active = false;
									//za lvl 4
									this.input.on('pointerup', () => {
										this.scene.stop('scena3')
										this.scene.start('scena4')
									});
this.physics.add.overlap(gameState.junak3, DeadBush4, () => {
															      this.add.text(150, 50, 'he he he', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
															      this.physics.pause();
															      gameState.active = false;
																		//za lvl 4
																		this.input.on('pointerup', () => {
																			this.scene.stop('scena3')
																			this.scene.start('scena4')
																		});
															    })
																})*/
	}


	update() {
		if (gameState.active) {
			if ((gameState.cursors.up.isDown) && gameState.junak3.body.touching.down) {
				gameState.junak3.anims.play('stoji2', true); //skoči
				gameState.junak3.setVelocityY(-700);
			}
			else if (gameState.cursors.right.isDown) {
				gameState.junak3.setVelocityX(500)
				gameState.junak3.anims.play('walk2', true)
				gameState.junak3.flipX = false;
			}
			else if (gameState.cursors.left.isDown) {
				gameState.junak3.setVelocityX(-500);
				gameState.junak3.anims.play('movement2', true);
				gameState.junak3.flipX = true;
			}
			else {
				gameState.junak3.setVelocityX(0);
				gameState.junak3.anims.play('stoji2', true);
			}
		}
	}
}
