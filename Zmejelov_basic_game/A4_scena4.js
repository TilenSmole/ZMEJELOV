class A4_scena4 extends A0_osnova {
	constructor() {
		super("A4_scena4");
	}
	preload() {
		super.preload()
		this.load.image("ozadje4", "assets/BG.png")
		this.load.image("tla2", "assets/lvl2/2.png")
		this.load.image("ploscadSkakalna", "assets/scena4/Bone (2).png")
		this.load.image("ploscadPodenj", "assets/scena4/TombStone (1).png")
		this.load.image("izhod4", "assets/Apple.png")
		this.load.image("grm", "assets/scena6/Bush (2).png")
		this.load.image("cudo", "assets/deco/Decor_Ruins_01.png")
		this.load.image("jama", "assets/scena4/A_black_image.jpg")
		this.load.image("skeli", "assets/deco/Spikes.png")
		this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
		this.load.audio('poraz', ['assets/uvod/smrt.mp3', "assets/uvod/smrt.ogg"]);
		this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);

	}
	create() {
		super.create()

		trenutnaScena = "A4_scena4"
		this.save("A4_scena4", dificulty)

		//ozadje full screen
		this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje4');
		this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
		//AS_skrivni level p1
		var jama = this.add.image(860, 590, "jama")
		jama.setScale(.9)

		//platforma
		const platforms = this.physics.add.staticGroup(); //54x55
		const kolider = [];
		const tileWidth4 = 54;
		for (let x = 54; x < 600; x = x + 200) {
			const podenj = platforms.create(x, 700, 'ploscadPodenj')
			kolider.push(podenj)
		}
		//ploščad za enemy
		const tileWidth5 = 128;
		for (let x = 600; x < GAME_WIDTH; x = x + 64) {
			const podenj = platforms.create(x, 350, 'ploscadSkakalna')
			kolider.push(podenj)
		}

		for (let x = 128; x < 256; x = x + 64) {
			const podenj2 = platforms.create(x, 220, 'ploscadSkakalna')
			kolider.push(podenj2)
		}


		//ubijalne kocke
		const ubijejo = [];
		/*for (let x = 64; x < 600; x = x + 30 ){
			const podenj2 =  platforms.create(x, 730, 'ploscadSkakalna')
			podenj2.setScale(.1)
			ubijejo.push(podenj2)}*/
		for (let x = 64; x < 600; x = x + 220) {
			const podenj = platforms.create(x, 760, 'skeli')
			ubijejo.push(podenj)
		}




		const izhod4 = this.physics.add.sprite(64, 10, "izhod4")
		const ploscadSkakalna3 = platforms.create(64, 220, 'ploscadSkakalna') //tileWidth = 128
		const ploscadSkakalna2 = platforms.create(400, 520, 'ploscadSkakalna') //tileWidth = 128

		gameState.junak = this.physics.add.sprite(64, 500, "coolGuy")
		gameState.junak.setScale(.40)
		gameState.junak.setCollideWorldBounds(true)


		//AS_skrivni level p2
		var portal = this.physics.add.sprite(1200, 590, "grm")
		for (let x = 650; x < GAME_WIDTH; x = x + 64) {
			const podenj = platforms.create(x, 730, 'ploscadSkakalna')
			podenj.setScale(.2)
			kolider.push(podenj)
		}

		this.physics.add.collider(portal, kolider)
		var jama2 = this.add.image(1200, 590, "jama")
		jama2.setScale(.9)
		var jama3 = this.add.image(860, 600, "jama")
		jama3.setScale(.9)
		this.physics.add.overlap(gameState.junak, portal, () => {

			this.add.text(500, 500, this.loadText("secret_found"), {
				fontSize: '40px',
				fill: '#A996BC',
				fontFamily: 'CustomFont',
				wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
			});

			this.physics.pause();
			gameState.sovraznik.move.stop();
			//za lvl 4
			this.input.keyboard.on('keyup-SPACE', () => {
				this.scene.stop('A4_scena4')
				this.scene.start('AS_jama')
			});
		})


		//da prekrije jamo
		if (zaprto == true || easy == true) {
			for (let y = 350; y < GAME_HEIGHT; y = y + 64) {
				const podenj2 = platforms.create(600, y, 'ploscadSkakalna')
				kolider.push(podenj2)
			}
		}
		else {
			for (let y = 350; y < GAME_HEIGHT - 200; y = y + 64) {
				const podenj2 = platforms.create(600, y, 'ploscadSkakalna')
				kolider.push(podenj2)
			}
		}


		if (language == "en") {
			this.add.text(640, 390, "Totally not\na cave", { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
		}
		else if (language == "rus") {
			this.add.text(640, 390, "Совершенно\nне пещера", { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
		}
		else {
			this.add.text(640, 390, "To totalno\nni jama!", { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
		}




		this.physics.add.collider(gameState.junak, kolider)
		this.physics.add.collider(gameState.junak, ploscadSkakalna2)
		this.physics.add.collider(gameState.junak, ploscadSkakalna3)
		this.physics.add.collider(ploscadSkakalna3, izhod4)



		const cudo = this.physics.add.sprite(925, 10, "cudo")
		cudo.setScale(.6)
		this.physics.add.collider(cudo, kolider)
		this.physics.add.overlap(gameState.junak, cudo, () => {
			if (!ruins) {
				this.showPopupAchievements( this.loadText("ach_ruins"))
				this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
				this.titleMusic.play();
				enkratt = 0
				ruins = true;
				this.updateAchievements();
				const dataAchievements = {
					achievements: achievements,
				};
				this.updateDataBaseAchivements(dataAchievements)
			}

		});



		gameState.sovraznik = this.physics.add.sprite(600, 150, "sovraznik");
		gameState.sovraznik.setScale(.40)

		gameState.sovraznik.move = this.tweens.add({
			targets: gameState.sovraznik,
			x: 1000,
			ease: 'Linear',
			duration: 1800,
			repeat: -1,
			flipX: true,
			yoyo: true,
		})

		this.physics.add.collider(kolider, gameState.sovraznik)



		this.physics.add.overlap(gameState.junak, gameState.sovraznik, () => {
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			vrstaTeksta = "sovraznik"
			stSmrti += 1
			vrsta_smrt = true
			this.scene.stop('A4_scena4')
			this.scene.start('vrsta')

		});

		this.physics.add.overlap(gameState.junak, ubijejo, () => {
			vrstaTeksta = "level4smrt"
			vrsta_smrt = true
			this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.anims.pauseAll();
			stSmrti += 1
			this.scene.stop('A4_scena4')
			this.scene.start('vrsta')


		});

		this.physics.add.overlap(gameState.junak, izhod4, () => {
			this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
			this.titleMusic.play();
			vrstaTeksta = "level_4_konec"
			this.physics.pause();
			this.scene.stop('A4_scena4')
			this.scene.start('vrsta')
		})



		this.updateDificulty()
		const data = {
			lastLevel: "A4_scena4",
			dificulty: dificulty
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
		super.update("mrtev")


	}
}
