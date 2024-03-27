class scena5 extends osnova {
	constructor() {
		super({ key: 'scena5' });
	}
	preload() {
		this.load.image("ozadje5", "assets/BG.png")
		this.load.image("tla5", "assets/lvl2/2.png")
		this.load.atlas("coolGuy2", "assets/lvl2/najdela.png", "assets/lvl2/najdela.json")
		//ploščadi
		this.load.image("ploscadSkakalna", "assets/scena4/Bone (2).png")
		this.load.image("ploscadPodenj", "assets/scena4/TombStone (1).png")
		this.load.image("izhod5", "assets/scena4/Life.png")
		this.load.atlas("sovraznik2", "assets/enemy/enemy1.png", "assets/enemy/enemy1.json")
		this.load.image("fakeIzhod5", "assets/Chest_01_Locked.png")
		this.load.image("kip", "assets/deco/Decor_Statue.png")


	}
	create() {
		gameState.active = true;

		const dolzina = 1200
		const sirina = 1500




		//ozadje full screen
		this.bg = this.add.image(dolzina / 2, sirina / 2, 'ozadje5');
		this.bg.setDisplaySize(dolzina, sirina)
		//platforma tla
		const platforms = this.physics.add.staticGroup(); //54x55
		const tiles5 = [];
		const tileWidth4 = 54;
		for (let x = 27; x < dolzina; x = x + 50) {
			const podenj = platforms.create(x, 1445, 'ploscadPodenj')
			tiles5.push(podenj)
		}

		const fakeIzhod5 = this.physics.add.sprite(900, 1200, "fakeIzhod5")

		const izhod5 = this.physics.add.sprite(300, 10, "izhod5")
		izhod5.setScale(.5)
		const REALizhod5 = this.physics.add.sprite(1, 1350, "izhod5")
		REALizhod5.setScale(.01)
		//ploščad desna
		const tilesLobanja9 = []; //128x128
		const tileWidth5 = 128;
		for (let x = 700; x < 1000; x = x + 64) {
			const podenj = platforms.create(x, 1250, 'ploscadSkakalna')
			tilesLobanja9.push(podenj)
		}

		const tilesLobanja8 = []; //128x128
		for (let x = 700; x < 1000; x = x + 64) {
			const podenj = platforms.create(x, 850, 'ploscadSkakalna')
			tilesLobanja8.push(podenj)
		}

		const tilesLobanja7 = []; //128x128
		for (let x = 700; x < 1000; x = x + 64) {
			const podenj = platforms.create(x, 450, 'ploscadSkakalna')
			tilesLobanja7.push(podenj)
		}

		const visinaLobanja = []; //128x128
		for (let y = 50; y < 250; y = y + 64) {
			const podenj = platforms.create(200, y, 'ploscadSkakalna')
			visinaLobanja.push(podenj)
		}

		//ploščad leva
		const tilesLobanja20 = []; //128x128
		for (let x = 200; x < 500; x = x + 64) {
			const podenj2 = platforms.create(x, 1050, 'ploscadSkakalna')
			tilesLobanja20.push(podenj2)
		}

		const tilesLobanja30 = []; //128x128
		for (let x = 200; x < 500; x = x + 64) {
			const podenj = platforms.create(x, 650, 'ploscadSkakalna')
			tilesLobanja30.push(podenj)
		}

		const tilesLobanja40 = []; //128x128
		for (let x = 200; x < 500; x = x + 64) {
			const podenj = platforms.create(x, 250, 'ploscadSkakalna')
			tilesLobanja40.push(podenj)
		}

		const tilesLobanja50 = []; //128x128
		for (let x = 200; x < 500; x = x + 64) {
			const podenj = platforms.create(x, 50, 'ploscadSkakalna')
			tilesLobanja50.push(podenj)
		}

		gameState.junak2 = this.physics.add.sprite(300, 1300, "coolGuy2")
		gameState.junak2.setScale(.40)


		const kip = this.physics.add.sprite(150, 1200, "kip")
		kip.setScale(.8)
		this.physics.add.collider(kip, tiles5)


		this.physics.add.collider(gameState.junak2, tilesLobanja50)
		this.physics.add.collider(gameState.junak2, tilesLobanja9)
		this.physics.add.collider(gameState.junak2, tilesLobanja7)
		this.physics.add.collider(gameState.junak2, tilesLobanja8)
		this.physics.add.collider(gameState.junak2, tiles5)
		this.physics.add.collider(gameState.junak2, tilesLobanja40)
		this.physics.add.collider(gameState.junak2, tilesLobanja30)
		this.physics.add.collider(gameState.junak2, tilesLobanja20)
		this.physics.add.collider(gameState.junak2, visinaLobanja)
		this.physics.add.collider(fakeIzhod5, tiles5)


		this.physics.add.collider(REALizhod5, tiles5)


		this.cameras.main.setBounds(0, 0, dolzina, sirina)
		this.physics.world.setBounds(0, 0, dolzina, sirina)
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

		this.physics.add.collider(tilesLobanja40, izhod5)
		this.physics.add.collider(tilesLobanja40, REALizhod5)




		gameState.sovraznik2 = this.physics.add.sprite(600, 1200, "sovraznik2");
		gameState.sovraznik2.setScale(.30)

		this.anims.create({
			key: 'sovraznik2',
			frames: [
				{ key: 'sovraznik2', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 10,
			repeat: -1
		});

		gameState.sovraznik2.move = this.tweens.add({
			targets: gameState.sovraznik2,
			x: 1200,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			yoyo: true,
		})
		this.physics.add.collider(gameState.sovraznik2, tiles5)




		this.physics.add.overlap(gameState.junak2, gameState.sovraznik2, () => {
			this.add.text(500, 1000, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
			gameState.junak2.destroy()
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});

		gameState.sovraznik3 = this.physics.add.sprite(700, 100, "sovraznik2");
		gameState.sovraznik3.setScale(.30)

		this.anims.create({
			key: 'sovraznik2',
			frames: [
				{ key: 'sovraznik2', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 10,
			repeat: -1
		});

		gameState.sovraznik3.move = this.tweens.add({
			targets: gameState.sovraznik3,
			x: 1000,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			yoyo: true,
		})
		this.physics.add.collider(gameState.sovraznik3, tilesLobanja7)




		this.physics.add.overlap(gameState.junak2, gameState.sovraznik3, () => {
			this.add.text(500, 150, this.loadText("lost"), { fontFamily: 'Arial', fontSize: 36, color: '#000000' });
			gameState.junak2.destroy()
			this.physics.pause();
			gameState.active = false;
			this.anims.pauseAll();
			this.input.on('pointerup', () => {
				this.scene.restart();
			})
		});

		



		this.physics.add.overlap(gameState.junak2, izhod5, () => {
			this.add.text(150, 350, this.loadText("level5_finish_fake"), { fontFamily: 'Arial', fontSize: 36, color: '#000000' });

		})
		this.physics.add.overlap(gameState.junak2, REALizhod5, () => {
			this.add.text(250, 1300, this.loadText("level5_finish"), { fontFamily: 'Arial', fontSize: 36, color: '#45664464' });
			this.physics.pause();
			gameState.active = false;
			//za lvl 4
			this.input.on('pointerup', () => {
				this.scene.stop('scena5')
				this.scene.start('scena6')
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
