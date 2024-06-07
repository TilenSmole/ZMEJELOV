class A6_scena6 extends A0_osnova {
	constructor() {
		super("A6_scena6");
	}
	preload() {
		super.preload()
		this.load.image("ozadje6", "assets/scena6/Cartoon_Forest_BG_02.png")
		this.load.image("tlaSpodnja", "assets/scena6/Brick_02.png")
		this.load.image("ploscadSkakalna6", "assets/scena6/Decor_Brick.png")
		this.load.image("ploscadPodenj", "assets/scena4/TombStone (1).png")
		this.load.image("izhod5", "assets/scena4/Life.png")
		this.load.image("fakeIzhod5", "assets/Chest_01_Locked.png")
		this.load.image("trava1", "assets/scena6/weed.png")
		this.load.image("trava2", "assets/scena6/weed - Copy.png")
		this.load.image("spaceship", "assets/scena6/spaceship.png")
		this.load.image("znakSmrt", "assets/scena6/Sign_04.png")
		this.load.image("gor", "assets/scena6/Sign_02.png")
		this.load.image("obvestilo", "assets/deco/Sign_06.png")
		this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
		this.load.audio('poraz', ['assets/uvod/smrt.mp3', "assets/uvod/smrt.ogg"]);
		this.load.image("mestoR", "assets/mesto/vasR.png")
		this.load.image("mestoA", "assets/mesto/vasA.png")
		this.load.image("mestoS", "assets/mesto/varS.png")


	}
	create() {
		super.create()
		gameState.active = true;

		const dolzina = 1700
		const visina = 6500

		if (easy == true || (spawn6)) {
			trenutnaScena = "A6_scena6"
		}
		else {
			trenutnaScena = "A4_scena4"
		}

		this.save("A6_scena6", difficulty)

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

		const tilesLobanja9 = []; //128x128
		const tileWidth6 = 128;

		for (let x = 700; x < 1000; x = x + 115) {
			const podenj = platforms.create(x, visina - 300, 'ploscadSkakalna6')
			const podenj1 = platforms.create(x, visina - 700, 'ploscadSkakalna6')
			const podenj2 = platforms.create(x, visina - 1900, 'ploscadSkakalna6')
			const podenj3 = platforms.create(x, visina - 1100, 'ploscadSkakalna6')
			const podenj4 = platforms.create(x, visina - 1500, 'ploscadSkakalna6')
			const podenj5 = platforms.create(x, visina - 2300, 'ploscadSkakalna6')
			const podenj6 = platforms.create(x, visina - 2700, 'ploscadSkakalna6')
			const podenj7 = platforms.create(x, visina - 3100, 'ploscadSkakalna6')
			const podenj8 = platforms.create(x, visina - 3900, 'ploscadSkakalna6')
			const podenj9 = platforms.create(x, visina - 4300, 'ploscadSkakalna6')
			const podenj10 = platforms.create(x, visina - 4700, 'ploscadSkakalna6')
			const podenj11 = platforms.create(x, visina - 5100, 'ploscadSkakalna6')
			const podenj12 = platforms.create(x, visina - 5450, 'ploscadSkakalna6')


			tilesLobanja9.push(podenj)
			tilesLobanja9.push(podenj1)
			tilesLobanja9.push(podenj2)
			tilesLobanja9.push(podenj3)
			tilesLobanja9.push(podenj4)
			tilesLobanja9.push(podenj5)
			tilesLobanja9.push(podenj6)
			tilesLobanja9.push(podenj7)
			tilesLobanja9.push(podenj8)
			tilesLobanja9.push(podenj9)
			tilesLobanja9.push(podenj10)
			tilesLobanja9.push(podenj11)
			tilesLobanja9.push(podenj12)
		}



		const tilesLobanjaN = []; //128x128  NI FAKE
		const tilesLobanjaF = []; //128x128  FAKE

		const tilesLobanjaKill = []

		var dolzina9 = visina - 3600
		//tricky ploščad
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

		//ploščad leva
		this.add.image(800, visina - 1230, "znakSmrt")

		var st0 = Math.floor(Math.random() * 2);
		if (st0 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 500, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 500, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 500, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 500, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st1 = Math.floor(Math.random() * 2);
		if (st1 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 900, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 900, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 900, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 900, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st2 = Math.floor(Math.random() * 2);
		if (st2 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1300, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1300, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1300, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1300, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st3 = Math.floor(Math.random() * 2);
		if (st3 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1700, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1700, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1700, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 1700, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st4 = Math.floor(Math.random() * 2);
		if (st4 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2100, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2100, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2100, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2100, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st5 = Math.floor(Math.random() * 2);
		if (st5 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2500, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2500, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2500, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2500, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st6 = Math.floor(Math.random() * 2);
		if (st6 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2900, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2900, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2900, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 2900, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}


		//zadnji pred tricky ploscadjo, naj bota oba real, da igralca zmedeta
		for (let x = 200; x < 500; x = x + 115) {
			const podenj = platforms.create(x, visina - 3300, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		for (let x = 1300; x < 1600; x = x + 115) {
			const podenj = platforms.create(x, visina - 3300, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj)
		}

		//nad tricky ploscadjo
		var st7 = Math.floor(Math.random() * 2);
		if (st7 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4100, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4100, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4100, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4100, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}

		}

		var st8 = Math.floor(Math.random() * 2);
		if (st8 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4500, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4500, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4500, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 4500, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
		}

		const posebn = []
		this.add.image(350, visina - 5000, "znakSmrt")
		for (let x = 200; x < 500; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 4900, 'ploscadSkakalna6')
			posebn.push(podenj2)
		}
		for (let x = 1200; x < 1545; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 4900, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj2)
		}

		var st9 = Math.floor(Math.random() * 2);
		if (st9 == 1) {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 5300, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 5300, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}

		}
		else {
			for (let x = 200; x < 500; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 5300, 'ploscadSkakalna6')
				tilesLobanjaN.push(podenj2)
			}
			for (let x = 1200; x < 1545; x = x + 115) {
				const podenj2 = platforms.create(x, visina - 5300, 'ploscadSkakalna6')
				tilesLobanjaF.push(podenj2)
			}
		}




		//zadnji dve, pred vrhom
		for (let x = 200; x < 500; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 5700, 'ploscadSkakalna6')
			tilesLobanjaKill.push(podenj2)
		}
		for (let x = 1200; x < 1545; x = x + 115) {
			const podenj2 = platforms.create(x, visina - 5700, 'ploscadSkakalna6')
			tilesLobanjaN.push(podenj2)
		}


		//zgornjaPloscad
		var dolzina10 = visina - 6000
		for (let x = 0; x < dolzina - 226; x = x + 115) {
			const podenj = platforms.create(x, dolzina10, 'ploscadSkakalna6')
			tilesLobanja9.push(podenj)
		}
		for (let x = dolzina - 226; x < dolzina + 100; x = x + 115) {
			const podenj = platforms.create(x, dolzina10, 'ploscadSkakalna6')
			tilesLobanjaF.push(podenj)
		}

		var x = 300
		var y = visina - 300
		if (spawn6 == true && (easy == true || zmaga == true)) {
			x = 100
			y = visina - 3900
			trenutnaScena = "A6_scena6"
		}
		gameState.junak = this.physics.add.sprite(x, y, "coolGuy")
		gameState.junak.setScale(.40)
		gameState.junak.anims.play('umre', true)
		if (vrniNaPogoj != true) {
			gameState.junak.anims.play('umre', true)
			var vrsta2 = "mestoS"
			if (language == "en") {
				vrsta2 = "mestoA"
			}
			else if (language == "rus") {
				vrsta2 = "mestoR"
			}
			const mesto = this.physics.add.sprite(100, visina - 500, vrsta2)
			mesto.setScale(.2)
			this.physics.add.collider(mesto, tlaSpodnja)
			this.physics.add.overlap(gameState.junak, mesto, () => {
				gameState.active = false;
				this.scene.stop('A6_scena6')
				this.scene.start('E0_mesto')
			})

		}
		//terracota army + spaceship
		var s1 = this.add.image(1200, visina - 6140, "sovraznik");
		s1.setScale(.35)
		var s2 = this.add.image(1125, visina - 6140, "sovraznik");
		s2.setScale(.35)
		var s3 = this.physics.add.sprite(1050, visina - 6136, "sovraznik");
		s3.setScale(.35)
		this.physics.add.collider(s3, tilesLobanja9)
		this.physics.add.overlap(gameState.junak, s3, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			stSmrtiPrVojski += 1
			vrstaTeksta = "level6Vojak"
			if (easy == true || (spawn6)) {
				trenutnaScena = "A6_scena6"
			}
			else {
				trenutnaScena = "A4_scena4"
			}
			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		})
		var s4 = this.add.image(975, visina - 6140, "sovraznik");
		s4.setScale(.35)
		var s5 = this.add.image(900, visina - 6140, "sovraznik");
		s5.setScale(.35)
		var s6 = this.add.image(825, visina - 6140, "sovraznik");
		s6.setScale(.35)
		var s7 = this.add.image(750, visina - 6140, "sovraznik");
		s7.setScale(.35)
		var s8 = this.add.image(675, visina - 6140, "sovraznik");
		s8.setScale(.35)
		var s9 = this.physics.add.sprite(600, visina - 6136, "sovraznik");
		s9.setScale(.35)
		this.physics.add.collider(s9, tilesLobanja9)
		this.physics.add.overlap(gameState.junak, s9, () => {
			gameState.junak.anims.play('umre', true)
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			vrstaTeksta = "level6Vojak"
			stSmrtiPrVojski += 1
			if (easy == true || (spawn6)) {
				trenutnaScena = "A6_scena6"
			}
			else {
				trenutnaScena = "A4_scena4"
			}
			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		})
		var s10 = this.add.image(525, visina - 6140, "sovraznik");
		s10.setScale(.35)
		var s11 = this.add.image(450, visina - 6140, "sovraznik");
		s11.setScale(.35)

		const obvestilo2 = this.physics.add.sprite(1400, visina - 6500, "obvestilo")
		this.physics.add.collider(obvestilo2, tilesLobanja9)

		//const text = "Uuuuuuuuuu lej Glinena vojska"


		if (pogoj == true) {
			this.physics.add.overlap(gameState.junak, obvestilo2, () => {
				this.add.text(800, visina - 6400, this.loadText("terracota"), {
					fontSize: '40px',
					fill: '#A996BC',
					fontFamily: 'CustomFont',
					wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
				});	




			});
		}
		//za to da je text lepo na pol
		var naPol = dolzina / 2 - 380

		gameState.spaceship = this.physics.add.sprite(100, visina - 6300, "spaceship");
		gameState.spaceship.setScale(.6)

		this.physics.add.collider(tilesLobanja9, gameState.spaceship)
		this.physics.add.collider(gameState.junak, tilesLobanja9)
		this.physics.add.collider(gameState.junak, tilesLobanjaN)
		this.physics.add.collider(gameState.junak, tlaSpodnja)

		const gor231 = this.physics.add.sprite(800, 4250, "gor")
		this.physics.add.collider(gor231, tlaSpodnja)
		const znakSmrt = this.physics.add.sprite(800, visina - 1230, "znakSmrt")
		this.physics.add.collider(znakSmrt, tilesLobanja9)

		//ce se dotaknemo znaka, je random sansa da te ubije
		var strupenZnak = Math.floor(Math.random() * 5);
		if (strupenZnak == 0) {
			this.physics.add.overlap(gameState.junak, znakSmrt, () => {
				this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
				this.titleMusic.play();
				this.anims.pauseAll();
				gameState.active = false;
				if (easy == true || (spawn6)) {
					trenutnaScena = "A6_scena6"
				}
				else {
					trenutnaScena = "A4_scena4"
				}
				vrstaTeksta = "level6Znak"
				stSmrti += 1
				vrsta_smrt = true
				this.scene.stop('A6_scena6')
				this.scene.start('vrsta')
			});








		}


		this.cameras.main.setBounds(0, 0, dolzina, visina)
		this.physics.world.setBounds(0, 0, dolzina, visina)
		this.cameras.main.startFollow(gameState.junak, true, 0.5, 0.5)


		gameState.junak.setCollideWorldBounds(true)

		//spawnpoint
		const spawn = this.physics.add.sprite(100, visina - 3900, "obvestilo")
		this.physics.add.collider(spawn, tilesLobanja9)



		this.physics.add.overlap(gameState.junak, spawn, () => {
			if (zmaga == true || easy == true) {
				//cheatZaHard = 0
				spawn6 = true
				trenutnaScena = "A6_scena6"

				this.add.text(200, visina - 3900, 'SpawnPoint', { fontSize: '40px', fill: '#FFFFFF' });
			}

		});


		//kao mrtvi
		gameState.sovraznik1 = this.physics.add.sprite(825, visina - 2500, "sovraznik");
		gameState.sovraznik1.setScale(.35)
		//gor pr prvi ladji
		gameState.sovraznik4 = this.physics.add.sprite(520, visina - 3900, "sovraznik");
		gameState.sovraznik4.setScale(.35)
		//spodnja
		gameState.sovraznik2 = this.physics.add.sprite(485, visina - 200, "sovraznik");
		gameState.sovraznik2.setScale(.35)
		gameState.sovraznik3 = this.physics.add.sprite(1600, visina - 200, "sovraznik");
		gameState.sovraznik3.setScale(.35)

		gameState.sovraznik2.move = this.tweens.add({
			targets: gameState.sovraznik2,
			x: 850,
			ease: 'Linear',
			duration: 1800,
			flipX: true,

			repeat: -1,
			yoyo: true,
		})

		gameState.sovraznik3.move = this.tweens.add({
			targets: gameState.sovraznik3,
			x: 1000,
			ease: 'Linear',
			flipX: true,

			duration: 1800,
			repeat: -1,
			yoyo: true,
		})

		gameState.sovraznik4.move = this.tweens.add({
			targets: gameState.sovraznik4,
			x: 1050,
			ease: 'Linear',
			flipX: true,

			duration: 1800,
			repeat: -1,
			yoyo: true,
		})


		this.physics.add.collider(gameState.sovraznik1, tilesLobanja9)
		this.physics.add.collider(gameState.sovraznik4, tilesLobanja9)
		this.physics.add.collider(gameState.sovraznik2, tlaSpodnja)
		this.physics.add.collider(gameState.sovraznik3, tlaSpodnja)
		this.physics.add.collider(gameState.sovraznik4, tilesLobanjaKill)
		//ce se dotaknemo "fake" sovraznika, je random sansa da te ubije
		var vstalOdMrtvih = Math.floor(Math.random() * 5);
		if (vstalOdMrtvih == 4) {
			this.physics.add.overlap(gameState.junak, gameState.sovraznik1, () => {
				this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
				this.titleMusic.play();
				this.anims.pauseAll();
				gameState.active = false;
				vrstaTeksta = "sovraznik"
				stSmrti += 1
				vrsta_smrt = true
				this.scene.stop('A6_scena6')
				this.scene.start('vrsta')
			});
		}
		//dotiki ostali
		this.physics.add.overlap(gameState.junak, gameState.sovraznik2, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			gameState.active = false;
			vrstaTeksta = "sovraznik"
			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		});

		this.physics.add.overlap(gameState.junak, tilesLobanjaKill, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			gameState.active = false;
			vrstaTeksta = "level6Brsljan"
			if (easy == true || (spawn6)) {
				trenutnaScena = "A6_scena6"
			}
			else {
				trenutnaScena = "A4_scena4"
			}



			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		});

		this.physics.add.overlap(gameState.junak, gameState.sovraznik3, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			gameState.active = false;
			vrstaTeksta = "sovraznik"
			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		});
		this.physics.add.overlap(gameState.junak, posebn, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			gameState.active = false;
			vrstaTeksta = "level6Znak2"
			stSmrti += 1
			vrsta_smrt = true
			if (easy == true || (spawn6)) {
				trenutnaScena = "A6_scena6"
			}
			else {
				trenutnaScena = "A4_scena4"
			}
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		});

		this.physics.add.overlap(gameState.junak, gameState.sovraznik4, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			gameState.active = false;
			vrstaTeksta = "sovraznik"
			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')
		});






		this.physics.add.overlap(gameState.junak, gameState.spaceship, () => {
			this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
			this.titleMusic.play();
			vrstaTeksta = "level_6_konec"
			this.physics.pause();
			this.scene.stop('A6_scena6')
			this.scene.start('vrsta')




		})

		const data = {
			lastLevel: "A6_scena6"
		};

		this.updateDataBase(data)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.error(error);
			});




	}

	update() {
		if (gameState.active) {
			if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
				gameState.junak.anims.play('stoji', true);
				gameState.junak.setVelocityY(-800);
			}
			else if (gameState.cursors.right.isDown) {
				gameState.junak.setVelocityX(500)
				gameState.junak.anims.play('walk', true)
				gameState.junak.flipX = false;
			}
			else if (gameState.cursors.left.isDown) {
				gameState.junak.setVelocityX(-500);
				gameState.junak.anims.play('walk', true);
				gameState.junak.flipX = true;
			}
			else {
				gameState.junak.setVelocityX(0);
				// Plays the idle animation if no arrow keys are pressed
				gameState.junak.anims.play('stoji', true);
			}

		}


	}
}
