class A3_scena3 extends A0_osnova {
	constructor(){
		super("A3_scena3");
	}
preload(){
	super.preload()
	this.load.image("ozadje3","assets/scena3/Gold-Coin-680x380.jpg")
	this.load.image("tla2" ,"assets/lvl2/2.png")
	this.load.image("ploscad0" ,"assets/lvl2/14.png")
	this.load.image("ploscad1" ,"assets/lvl2/15.png")
	this.load.image("ploscad2" ,"assets/lvl2/16.png")
	this.load.image("izhod3","assets/Sign_01.png" )
	this.load.image("skeli" ,"assets/deco/Spikes.png")
	this.load.image("mrtvec" ,"assets/deco/Skeleton.png")
    this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);


}
create(){
	super.create();
	gameState.active = true;

	//ozadje full screen
	this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje3');
	this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
	//platforma
	const platforms = this.physics.add.staticGroup();
	const tiles = [];
	const tileWidth = 128;
	for (let x = 64; x < 600; x = x + tileWidth ){
		const podenj =  platforms.create(x, 725, 'tla2')
		tiles.push(podenj)}
	//junak
	gameState.junak = this.physics.add.sprite(100,500, "coolGuy")
	gameState.junak .setScale(.40)

	gameState.junak.setCollideWorldBounds(true)

	this.physics.add.collider(gameState.junak, tiles)
	const mrtvec = this.physics.add.sprite(250,600,"mrtvec")
	this.physics.add.collider(tiles, mrtvec)

	//jumping 1 in 2
	const kamSkocit4 = platforms.create(600, 350, 'ploscad1') //tileWidth = 128
	const kamSkocit5 = platforms.create(375, 500, 'ploscad1') //tileWidth = 128

	this.physics.add.collider(gameState.junak, kamSkocit4)
	this.physics.add.collider(gameState.junak, kamSkocit5)


	// past jumping pointer
	const kamSkocit6 = platforms.create(1008, 200, 'ploscad1')
	const kamSkocit7 = platforms.create(884, 200, 'ploscad0') //tileWidth = 128
	const kamSkocit8 = platforms.create(1136, 200, 'ploscad2') //tileWidth = 128

	this.add.image(1100,96,"izhod3")

	const spice = []; //128*64
	const tileWidth3 = 128;
	for (let x = 728; x < GAME_WIDTH; x = x + tileWidth3 ){
		const podenj =  platforms.create(x, 725, 'skeli')
		spice.push(podenj)}



	



	this.physics.add.overlap(gameState.junak, spice, () => {
		this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
		this.titleMusic.play();  
		vrstaTeksta = "level_3_konec"
		this.physics.pause();
		this.scene.stop('A3_scena3')
		this.scene.start('vrsta')

	
})

this.save("A3_scena3", dificulty)





}


update(){
	super.update("basic")
	
}}
