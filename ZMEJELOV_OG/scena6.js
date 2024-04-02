
class scena6 extends osnova {
	constructor() {
		super("scena6")
	}
	preload() {
		this.load.image("ozadje6", "assets/scena6/Cartoon_Forest_BG_02.png")
		this.load.image("tlaSpodnja", "assets/scena6/Brick_02.png")
		this.load.atlas("coolGuy2", "assets/lvl2/najdela.png", "assets/lvl2/najdela.json")
		//ploščadi
		this.load.image("ploscadSkakalna6", "assets/scena6/Decor_Brick.png")
		this.load.image("ploscadPodenj", "assets/scena4/TombStone (1).png")
		this.load.image("izhod5", "assets/scena4/Life.png")
		this.load.atlas("sovraznik2", "assets/enemy/enemy1.png", "assets/enemy/enemy1.json")
		this.load.image("fakeIzhod5", "assets/Chest_01_Locked.png")
		this.load.image("trava1", "assets/scena6/weed.png")
		this.load.image("trava2", "assets/scena6/weed - Copy.png")

		this.load.image("spaceship", "assets/scena6/spaceship.png")
		this.load.image("znakSmrt", "assets/scena6/Sign_04.png")
		this.load.image("gor", "assets/scena6/Sign_02.png")

	}
	create() {
		gameState.active = true;

		const dolzina = 1700
		const visina = 4500




		//ozadje full screen
		this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadje6');
		this.bg.setDisplaySize(dolzina, visina)

		//platforma tla
		const platforms = this.physics.add.staticGroup(); //128*128
		const tlaSpodnja = [];
		const tileWidth4 = 70;
		for (let x = 64; x < dolzina; x = x + 115) {
			const podenj = platforms.create(x, visina - 20, 'tlaSpodnja')
			tlaSpodnja.push(podenj)
		}

		this.add.image(1200, visina - 60, "trava2")
		this.add.image(650, visina - 60, "trava1")


		//ploščad srednja

		//NE RABM VEDNO NOVE SPREMENLJVKE

		const tilesLobanja9 = []; //128x128
		const tileWidth6 = 128;

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 300, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 700, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 1100, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}
		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 1500, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 1900, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 2300, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 2700, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 3100, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		const tilesLobanjaN = []; //128x128  NI FAKE
		const tilesLobanjaF = []; //128x128  FAKE

		const tilesLobanjaKill = []
		var dolzina9 = visina - 3600
		for (let x = 64; x < 192; x = x + 115) {
			const podenj = platforms.create(x, dolzina9, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}

		for (let x = 290; x < 500; x = x + 115) {
			const podenj = platforms.create(x, dolzina9, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}

		for (let x = 510; x < 615; x = x + 115) {
			const podenj = platforms.create(x, dolzina9, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}


		for (let x = 620; x < 1100; x = x + 115) {
			const podenj = platforms.create(x, dolzina9, 'ploscadSkakalna6')
			tilesLobanjaKill.push(podenj)
		}


		this.add.image(800, 3270, "znakSmrt")


		//ploščad leva
		//NAJNIUJA
		for (let x = 200; x < 500; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 500, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj2)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 900, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj2)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 1300, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj2)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj = platforms.create(x, visina - 1700, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj = platforms.create(x, visina - 2100, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj = platforms.create(x, visina - 2500, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj = platforms.create(x, visina - 2900, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}

		for (let x = 200; x < 500; x = x + 115) {
			const podenj = platforms.create(x, visina - 3300, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}



		//ploščad desno
		for (let x = 1200; x < 1545; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 500, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj2)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 900, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 1300, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 1700, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 2100, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 2500, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 2900, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 3300, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}



		gameState.junak2 = this.physics.add.sprite(300, visina - 200, "coolGuy2")
		gameState.junak2.setScale(.40)

		this.physics.add.collider(gameState.junak2, tilesLobanja9)

		this.physics.add.collider(gameState.junak2, tilesLobanjaN)


		this.physics.add.collider(gameState.junak2, tlaSpodnja)

		const gor231 = this.physics.add.sprite(800, 4250, "gor")
		this.physics.add.collider(gor231, tlaSpodnja)
		const SMRT = this.physics.add.sprite(800, 3270, "znakSmrt")
		this.physics.add.collider(SMRT, tilesLobanja9)





		this.cameras.main.setBounds(0, 0, dolzina, visina)
		this.physics.world.setBounds(0, 0, dolzina, visina)
		this.cameras.main.startFollow(gameState.junak2, true, 0.5, 0.5)

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



		gameState.spaceship = this.physics.add.sprite(850, 100, "spaceship");
		gameState.spaceship.setScale(.6)
		this.physics.add.collider(tilesLobanja9, gameState.spaceship)

		gameState.sovraznik5 = this.physics.add.sprite(825, 1500, "sovraznik2");
		gameState.sovraznik5.setScale(.35)

		//this.physics.add.collider(gameState.sovraznik4, tilesLobanja9)

		gameState.sovraznik4 = this.physics.add.sprite(520, 100, "sovraznik2");
		gameState.sovraznik4.setScale(.35)
		gameState.sovraznik2 = this.physics.add.sprite(600, visina - 200, "sovraznik2");
		gameState.sovraznik2.setScale(.35)
		gameState.sovraznik3 = this.physics.add.sprite(1500, visina - 200, "sovraznik2");
		gameState.sovraznik3.setScale(.35)
		this.anims.create({
			key: 'sovraznik2',
			frames: [
				{ key: 'sovraznik2', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 800,
			repeat: -1
		});
		gameState.sovraznik2.move = this.tweens.add({
			targets: gameState.sovraznik2,
			x: 1500,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			yoyo: true,
		})
		this.anims.create({
			key: 'sovraznik3',
			frames: [
				{ key: 'sovraznik2', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 10,
			repeat: -1
		});
		gameState.sovraznik2.move = this.tweens.add({
			targets: gameState.sovraznik3,
			x: 600,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			yoyo: true,
		})

		this.anims.create({
			key: 'sovraznik4',
			frames: [
				{ key: 'sovraznik2', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 2000,
			repeat: -1
		});
		gameState.sovraznik4.move = this.tweens.add({
			targets: gameState.sovraznik4,
			x: 1050,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			yoyo: true,
		})







		this.physics.add.collider(gameState.sovraznik5, tilesLobanja9)
		this.physics.add.collider(gameState.sovraznik4, tilesLobanja9)

		this.physics.add.collider(gameState.sovraznik2, tlaSpodnja)
		this.physics.add.collider(gameState.sovraznik3, tlaSpodnja)

		this.physics.add.collider(gameState.spaceship, tilesLobanjaKill)
		this.physics.add.collider(gameState.sovraznik4, tilesLobanjaKill)


		this.physics.add.overlap(gameState.junak2, gameState.sovraznik2, () => {
			this.add.text(800, visina - 300, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});
		this.physics.add.overlap(gameState.junak2, gameState.sovraznik3, () => {
			this.add.text(800, visina - 300, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});
		this.physics.add.overlap(gameState.junak2, tilesLobanjaKill, () => {
			this.add.text(500, 800, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});



		this.physics.add.overlap(gameState.junak2, gameState.spaceship, () => {
			this.add.text(500, 250,this.loadText("level6_finish"),  { fontFamily: 'Arial', fontSize: 36, color: '#FFF0F5' });
			this.physics.pause();
			gameState.active = false;
			//za lvl 4
			this.input.on('pointerup', () => {
				this.scene.stop('scena6')
				this.scene.start('konec')
			});
		})

	}

	update() {
		if (gameState.active) {
			if ((gameState.cursors.up.isDown) && gameState.junak2.body.touching.down) {
				gameState.junak2.anims.play('stoji2', true); //skoči
				gameState.junak2.setVelocityY(-800);
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
