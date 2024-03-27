class A2_scena2 extends A0_osnova {
	constructor() {
		super("A2_scena2")
	}
preload(){
		super.preload()

		 this.load.image("ozadje2","assets/lvl2/BG.png")
		 this.load.image("tla2" ,"assets/lvl2/2.png")
		//ploščadi
		 this.load.image("ploscad0" ,"assets/lvl2/14.png")
		 this.load.image("ploscad1" ,"assets/lvl2/15.png")
		 this.load.image("ploscad2" ,"assets/lvl2/16.png")
		 this.load.image("past" ,"assets/Chest_01_Locked.png")
		 this.load.image("puscavskaDrevo" ,"assets/deco/Tree.png")
		 this.load.image("puscavskaTrava" ,"assets/deco/Grass (2).png")
		 this.load.image("puscavskiKamen" ,"assets/deco/Stone.png")
		 this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);


	}
create(){
	super.create();
	
//ozadje full screen
this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje2');
this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
//platforma
const platforms = this.physics.add.staticGroup();
const tiles = [];
const tileWidth = 128;
for (let x = 64; x < GAME_WIDTH+100; x = x + tileWidth ){
	const podenj =  platforms.create(x, 725, 'tla2')
	tiles.push(podenj)}

gameState.junak  = this.physics.add.sprite(100,500, "coolGuy")
gameState.junak.setScale(.40)
gameState.junak.setCollideWorldBounds(true)

//prvi jumping point
const kamSkocit = platforms.create(790, 525, 'ploscad1')
const kamSkocit1 = platforms.create(662, 525, 'ploscad0') //tileWidth = 128
const kamSkocit2 = platforms.create(918, 525, 'ploscad2') //tileWidth = 128

this.physics.add.collider(gameState.junak, kamSkocit)
this.physics.add.collider(gameState.junak, kamSkocit1)
this.physics.add.collider(gameState.junak, kamSkocit2)

const kamSkocit11 = platforms.create(790, 100, 'ploscad1')
const kamSkocit12= platforms.create(662, 100, 'ploscad0') //tileWidth = 128
const kamSkocit13 = platforms.create(918, 100, 'ploscad2') //tileWidth = 128

this.physics.add.collider(gameState.junak, kamSkocit11)
this.physics.add.collider(gameState.junak, kamSkocit12)
this.physics.add.collider(gameState.junak, kamSkocit13)
//drugi jumping pointer
const kamSkocit3 = platforms.create(290, 350, 'ploscad1')
const kamSkocit4 = platforms.create(162, 350, 'ploscad0') //tileWidth = 128
const kamSkocit5 = platforms.create(418, 350, 'ploscad2') //tileWidth = 128

this.physics.add.collider(gameState.junak, kamSkocit3)
this.physics.add.collider(gameState.junak, kamSkocit4)
this.physics.add.collider(gameState.junak, kamSkocit5)

const zakladDaNePade = this.physics.add.staticGroup();
const zaklad = zakladDaNePade.create(400,260,"past") //350 - 93 kar je velikost ploscadi
this.physics.add.collider(zaklad, kamSkocit3)
this.physics.add.collider(zaklad, kamSkocit4)
this.physics.add.collider(zaklad, kamSkocit5)


const puscavskaDrevo = this.physics.add.sprite(800,200,"puscavskaDrevo")
this.physics.add.collider(kamSkocit, puscavskaDrevo)

const puscavskiKamen = this.physics.add.sprite(250,600,"puscavskiKamen")
this.physics.add.collider(tiles, puscavskiKamen)

this.physics.add.collider(gameState.junak, tiles)


const puscavskaTrava = [];
const tileWidthT = 102; //102*50
for (let x = 600; x < 1200; x = x + 51 ){
	const podenj =  this.physics.add.sprite(x, 620, 'puscavskaTrava')
	puscavskaTrava.push(podenj)}

this.physics.add.collider(tiles, puscavskaTrava)


this.physics.add.overlap(gameState.junak, zaklad, () => {
	this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
	this.titleMusic.play();    
	vrstaTeksta = "level_2_konec"
	this.scene.stop('A2_scena2')
	this.scene.start('vrsta')

	
	  




})

this.save("A2_scena2", dificulty)


}
update(){
	super.update("basic")
	}

}
/*if (usa == true){
	this.add.text(gameState.junak.x-350, gameState.junak.y -150, 'GAME',{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });}
else if (rus == true){
	this.add.text(gameState.junak.x-350, gameState.junak.y -150, 'ИГРА',{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });}
else{
	this.add.text(gameState.junak.x-350, gameState.junak.y -150, 'IGRA',{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });}*/