class scena4 extends osnova {
	constructor() {
		super({ key: 'scena4' });
	}
	preload() {
		this.load.image("ozadje4", "assets/BG.png")
		this.load.image("tla2", "assets/lvl2/2.png")
		this.load.atlas("coolGuy2", "assets/lvl2/najdela.png", "assets/lvl2/najdela.json")
		//ploščadi
		this.load.image("ploscadSkakalna", "assets/scena4/Bone (2).png")
		this.load.image("ploscadPodenj", "assets/scena4/TombStone (1).png")
		this.load.image("izhod4", "assets/Apple.png")
		this.load.atlas("sovraznik", "assets/enemy/enemy1.png", "assets/enemy/enemy1.json")
		this.load.atlas("sovraznik", "assets/enemy/enemy1.png", "assets/enemy/enemy1.json")
		//this.load.image("nevidnaTla" ,"assets/Transparency10.png")
		this.load.image("grm", "assets/scena6/Bush (2).png")
		this.load.image("cudo", "assets/deco/Decor_Ruins_01.png")


	}
	create() {
		gameState.active = true;

		//ozadje full screen
		this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje4');
		this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)

		//platforma
		const platforms = this.physics.add.staticGroup(); //54x55
		const tiles4 = [];
		const tileWidth4 = 54;
		for (let x = 54; x < 600; x = x + 200) {
			const podenj = platforms.create(x, 700, 'ploscadPodenj')
			tiles4.push(podenj)
		}
		//ploščad za enemy
		const tilesLobanja = []; //128x128
		const tileWidth5 = 128;
		for (let x = 600; x < GAME_WIDTH; x = x + 64) {
			const podenj = platforms.create(x, 350, 'ploscadSkakalna')
			tilesLobanja.push(podenj)
		}

		const tilesLobanja2 = []; //128x128
		for (let x = 128; x < 256; x = x + 64) {
			const podenj2 = platforms.create(x, 220, 'ploscadSkakalna')
			tilesLobanja2.push(podenj2)
		}

		const tilesLobanjaY = []; //128x128
		for (let y = 350; y < GAME_HEIGHT; y = y + 64) {
			const podenj2 = platforms.create(600, y, 'ploscadSkakalna')
			tilesLobanjaY.push(podenj2)
		}

		const tilesLobanjaP = []; //128x128
		for (let x = 64; x < 600; x = x + 64) {
			const podenj2 = platforms.create(x, 730, 'ploscadSkakalna')
			podenj2.setScale(.1)
			tilesLobanjaP.push(podenj2)
		}


		/*	const tilesNe = platforms.create(70, 1100, 'nevidnaTla') //tileWidth = 128
tilesNe.setScale(5)*/
		//jumping  2
		const ploscadSkakalna3 = platforms.create(64, 220, 'ploscadSkakalna') //tileWidth = 128
		const ploscadSkakalna2 = platforms.create(400, 520, 'ploscadSkakalna') //tileWidth = 128
		gameState.junak2 = this.physics.add.sprite(64, 500, "coolGuy2")
		gameState.junak2.setScale(.40)

		const izhod4 = this.physics.add.sprite(64, 10, "izhod4")

		this.physics.add.collider(gameState.junak2, tilesLobanja)
		this.physics.add.collider(gameState.junak2, ploscadSkakalna2)
		this.physics.add.collider(gameState.junak2, tiles4)
		this.physics.add.collider(gameState.junak2, tilesLobanja2)
		this.physics.add.collider(gameState.junak2, ploscadSkakalna3)
		this.physics.add.collider(gameState.junak2, tilesLobanjaY)


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

		this.physics.add.collider(ploscadSkakalna3, izhod4)

		const cudo = this.physics.add.sprite(900, 10, "cudo")
		cudo.setScale(.6)
		this.physics.add.collider(cudo, tilesLobanja)


		gameState.sovraznik = this.physics.add.sprite(600, 100, "sovraznik");
		gameState.sovraznik.setScale(.40)


		this.anims.create({
			key: 'sovraznik',
			frames: [
				{ key: 'sovraznik', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 10,
			repeat: -1
		});

		gameState.sovraznik.move = this.tweens.add({
			targets: gameState.sovraznik,
			x: 1000,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			yoyo: true,
		})

		this.physics.add.collider(tilesLobanja, gameState.sovraznik)
		gameState.sovraznik.anims.play('sovraznik', true);


		this.physics.add.overlap(gameState.junak2, gameState.sovraznik, () => {
			this.add.text(150, 50, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#000000' });
			gameState.junak2.destroy()
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});

		this.physics.add.overlap(gameState.junak2, tilesLobanjaP, () => {
			this.add.text(150, 250, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#000000' });
			gameState.junak2.destroy()
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});




		this.physics.add.overlap(gameState.junak2, izhod4, () => {
			this.add.text(150, 50, this.loadText("level4_finish"), { fontFamily: 'Arial', fontSize: 36, color: '#000000' });

			this.physics.pause();
			gameState.sovraznik.move.stop();
			gameState.active = false;
			//za lvl 4
			this.input.on('pointerup', () => {
				this.scene.stop('scena4')
				this.scene.start('scena5')
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
