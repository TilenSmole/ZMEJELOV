class scena2 extends osnova {
	constructor() {
		super({ key: 'scena2' });
	}
	preload() {
		this.load.image("ozadje2", "assets/lvl2/BG.png")
		this.load.image("tla2", "assets/lvl2/2.png")
		this.load.atlas("coolGuy2", "assets/lvl2/najdela.png", "assets/lvl2/najdela.json")
		//ploščadi
		this.load.image("ploscad0", "assets/lvl2/14.png")
		this.load.image("ploscad1", "assets/lvl2/15.png")
		this.load.image("ploscad2", "assets/lvl2/16.png")
		this.load.image("past", "assets/Chest_01_Locked.png")
		this.load.image("puscavskaDrevo", "assets/deco/Tree.png")
		this.load.image("puscavskaTrava", "assets/deco/Grass (2).png")
		this.load.image("puscavskiKamen", "assets/deco/Stone.png")




	}
	create() {
		gameState.active = true;

		//ozadje full screen
		this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje2');
		this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
		//platforma
		const platforms = this.physics.add.staticGroup();
		const tiles = [];
		const tileWidth = 128;
		for (let x = 64; x < GAME_WIDTH + 100; x = x + tileWidth) {
			const podenj = platforms.create(x, 725, 'tla2')
			tiles.push(podenj)
		}
		//junak
		gameState.junak2 = this.physics.add.sprite(100, 500, "coolGuy2")
		gameState.junak2.setScale(.40)

		this.anims.create({
			key: 'walk2',
			frames: [
				{ key: 'coolGuy2', frame: "Wraith_03_Moving Forward_000.png" },],
			frameRate: 8,
			repeat: -1
		});
		this.anims.create({
			key: 'stoji2',
			frames: [
				{ key: 'coolGuy2', frame: "Wraith_03_Idle_000.png" },],
			frameRate: 8,
			repeat: -1
		});
		this.anims.create({
			key: 'umre2',
			frames: [
				{ key: 'coolGuy2', frame: "assets/New folder/Wraith_03_Dying_000.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 8,
			repeat: -1
		});
		gameState.cursors = this.input.keyboard.createCursorKeys();

		gameState.junak2.setCollideWorldBounds(true)

		this.physics.add.collider(gameState.junak2, tiles)


		//prvi jumping point
		const kamSkocit = platforms.create(790, 525, 'ploscad1')
		const kamSkocit1 = platforms.create(662, 525, 'ploscad0') //tileWidth = 128
		const kamSkocit2 = platforms.create(918, 525, 'ploscad2') //tileWidth = 128

		this.physics.add.collider(gameState.junak2, kamSkocit)
		this.physics.add.collider(gameState.junak2, kamSkocit1)
		this.physics.add.collider(gameState.junak2, kamSkocit2)

		//drugi jumping pointer
		const kamSkocit3 = platforms.create(290, 350, 'ploscad1')
		const kamSkocit4 = platforms.create(162, 350, 'ploscad0') //tileWidth = 128
		const kamSkocit5 = platforms.create(418, 350, 'ploscad2') //tileWidth = 128

		this.physics.add.collider(gameState.junak2, kamSkocit3)
		this.physics.add.collider(gameState.junak2, kamSkocit4)
		this.physics.add.collider(gameState.junak2, kamSkocit5)

		/*var frameNames = this.textures.get("ploscad0").getFrameNames()
		console.log(frameNames)*/
		const zakladDaNePade = this.physics.add.staticGroup();
		const zaklad = zakladDaNePade.create(240, 260, "past") //350 - 93 kar je velikost ploscadi
		this.physics.add.collider(zaklad, kamSkocit3)
		this.physics.add.collider(zaklad, kamSkocit4)
		this.physics.add.collider(zaklad, kamSkocit5)


		const puscavskaDrevo = this.physics.add.sprite(800, 200, "puscavskaDrevo")
		this.physics.add.collider(kamSkocit, puscavskaDrevo)

		const puscavskiKamen = this.physics.add.sprite(250, 600, "puscavskiKamen")
		this.physics.add.collider(tiles, puscavskiKamen)

		const puscavskaTrava = [];
		const tileWidthT = 102; //102*50
		for (let x = 600; x < 1200; x = x + 51) {
			const podenj = this.physics.add.sprite(x, 620, 'puscavskaTrava')
			puscavskaTrava.push(podenj)
		}

		this.physics.add.collider(tiles, puscavskaTrava)


		this.physics.add.overlap(gameState.junak2, zaklad, () => {
			this.add.text(150, 50, this.loadText("level2_finish"), { fontFamily: 'Arial', fontSize: 36, color: '#000000' });
			gameState.junak2.destroy()
			this.physics.pause();
			gameState.active = false;
			//za lvl 3
			this.input.on('pointerup', () => {
				this.scene.stop('scena2')
				this.scene.start('scena3')
			});
		})

	}


	update() {
		if (gameState.active) {
			if ((gameState.cursors.up.isDown) && gameState.junak2.body.touching.down) {
				gameState.junak2.anims.play('stoji2', true); //skoči
				gameState.junak2.setVelocityY(-700);
			}
			else if (gameState.cursors.right.isDown) {
				gameState.junak2.setVelocityX(500)
				gameState.junak2.anims.play('walk2', true)
				gameState.junak2.flipX = false;
			}
			else if (gameState.cursors.left.isDown) {
				gameState.junak2.setVelocityX(-500);
				gameState.junak2.anims.play('movement2', true);
				gameState.junak2.flipX = true;
			}
			else {
				gameState.junak2.setVelocityX(0);
				gameState.junak2.anims.play('stoji2', true);
			}
		}
	}
}
