class A5_scena5 extends A0_osnova {
	constructor(){
		super("A5_scena5");
	}
preload(){
	super.preload()
	this.load.image("ozadje5","assets/BG.png")
	this.load.image("tla5" ,"assets/lvl2/2.png")
	this.load.image("ploscadSkakalna" ,"assets/scena4/Bone (2).png")
	this.load.image("ploscadPodenj" ,"assets/scena4/TombStone (1).png")
	this.load.image("izhod5","assets/scena4/Life.png" )
	this.load.image("fakeIzhod5" ,"assets/Chest_01_Locked.png")
	this.load.image("kip" ,"assets/deco/Decor_Statue.png")
	this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);

	}
create(){
	super.create()
	gameState.active =  true;
	if(easy == true || (zmaga == true /*&& cheatZaHard == 0 */) ){
		trenutnaScena = "A5_scena5"
			}
	else{
		trenutnaScena = "A4_scena4"
			}

		
	this.save("A5_scena5", dificulty)




	const dolzina = 1200
	const sirina = 1500

	//ozadje full screen
	this.bg = this.add.image(dolzina / 2, sirina / 2, 'ozadje5');
	this.bg.setDisplaySize(dolzina, sirina)

	//platforma tla
	const platforms = this.physics.add.staticGroup(); //54x55
	const kolider = [];
	const tileWidth4 = 54;
	for (let x = 27; x < dolzina; x = x + 50 ){
	const podenj =  platforms.create(x, 1445, 'ploscadPodenj')
	kolider.push(podenj)}

	const fakeIzhod5 = this.physics.add.sprite(900,1200, "fakeIzhod5")
	const izhod5 = this.physics.add.sprite(300,10, "izhod5")
	izhod5.setScale(.5)
	const REALizhod5 = this.physics.add.sprite(1,1350, "izhod5")
	REALizhod5.setScale(.01)
	
	//ploščad desna
	const tilesLobanja9 = []; //128x128
	const tileWidth5 = 128;
	for (let x = 700; x < 1000; x = x + 64){
		const podenj =  platforms.create(x, 1250 , 'ploscadSkakalna')
		kolider.push(podenj)}

	for (let x = 700; x < 1000; x = x + 64){
		const podenj =  platforms.create(x, 850 , 'ploscadSkakalna')
		kolider.push(podenj)}

	for (let x = 700; x < 1000; x = x + 64){
		const podenj =  platforms.create(x, 450 , 'ploscadSkakalna')
		kolider.push(podenj)}

	for (let y = 50; y < 250; y = y + 64){
		const podenj =  platforms.create(200, y , 'ploscadSkakalna')
		kolider.push(podenj)}

	//ploščad leva
	for (let x = 200; x < 500; x = x + 64 ){
		const podenj2 =  platforms.create(x, 1050, 'ploscadSkakalna')
		kolider.push(podenj2)}

	for (let x = 200; x < 500; x = x + 64){
		const podenj =  platforms.create(x, 650 , 'ploscadSkakalna')
		kolider.push(podenj)}

	for (let x = 200; x < 500; x = x + 64){
		const podenj =  platforms.create(x, 250 , 'ploscadSkakalna')
		kolider.push(podenj)}

	for (let x = 200; x < 500; x = x + 64){
		const podenj =  platforms.create(x, 50 , 'ploscadSkakalna')
		kolider.push(podenj)}

	gameState.junak = this.physics.add.sprite(300,1300, "coolGuy")
	gameState.junak.setScale(.40)
	gameState.junak.setCollideWorldBounds(true)

	const kip = this.physics.add.sprite(150,1200,"kip")
	kip.setScale(.8)
	this.physics.add.collider(kip, kolider)
	this.physics.add.collider(gameState.junak, kolider)
	this.physics.add.collider(fakeIzhod5, kolider)
	this.physics.add.collider(REALizhod5, kolider)
	this.cameras.main.setBounds(0,0,dolzina,sirina)
	this.physics.world.setBounds(0,0,dolzina,sirina)
	this.cameras.main.startFollow(gameState.junak, true,0.5, 0.5)
	this.physics.add.collider(kolider, izhod5)
	//this.physics.add.collider(kolider, REALizhod5)




	gameState.sovraznik2 = this.physics.add.sprite(600,1200,"sovraznik");
	gameState.sovraznik2.setScale(.30)
	gameState.sovraznik2.move = this.tweens.add({
									targets: gameState.sovraznik2,
									x: 1200,
									ease: 'Linear',
									duration: 1800,
									flipX: true,

									repeat: -1,
									yoyo: true,})
									
	this.physics.add.collider(gameState.sovraznik2, kolider)
	this.physics.add.overlap(gameState.junak, gameState.sovraznik2, () => {
		this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
  	this.titleMusic.play(); 
		this.anims.pauseAll();
		gameState.active = false;
		vrstaTeksta = "sovraznik5"
		stSmrti += 1
		vrsta_smrt  = true
		this.scene.stop('A5_scena5')
		this.scene.start('vrsta')
		});


	gameState.sovraznik3 = this.physics.add.sprite(700,100,"sovraznik");
	gameState.sovraznik3.setScale(.30)
	gameState.sovraznik3.move = this.tweens.add({
										targets: gameState.sovraznik3,
										x: 1000,
										ease: 'Linear',
										duration: 1800,
										repeat: -1,
										flipX: true,

										yoyo: true,})
	this.physics.add.collider(gameState.sovraznik3, kolider)





	this.physics.add.overlap(gameState.junak, gameState.sovraznik3, () => {
		this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
  	this.titleMusic.play(); 
		this.anims.pauseAll();
		gameState.active = false;
		vrstaTeksta = "sovraznik5"
		stSmrti += 1
		vrsta_smrt  = true
		this.scene.stop('A5_scena5')
		this.scene.start('vrsta')
		});

	this.physics.add.overlap(gameState.junak, izhod5, () => {
		var text = "lol, to ni izhod"
		if (language == "en")
			text = "Lol this is not an exit"
		else if (language == "rus")
			text = "Лол это не выход"

			const popup = this.add.text(150, 350, text, {
				fontSize: '32px',
				color: '#000000',
				align: 'center',
			});
	
		


		})


		




		this.physics.add.overlap(gameState.junak, REALizhod5, () => {
			this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
			this.titleMusic.play();  
			vrstaTeksta = "level_5_konec"
			this.physics.pause();
			this.scene.stop('A5_scena5')
			this.scene.start('vrsta')
	
	
	
				
		})

		  





}

update(){
	super.update("mrtev")


}}
