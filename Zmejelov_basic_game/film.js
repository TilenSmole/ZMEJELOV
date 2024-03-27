class film extends A0_osnova {
	constructor() {
		super("film")
	}
preload(){
		super.preload()
		this.load.image("ozadje2","assets/film/plains.png")
	   //ploščadi
		//this.load.image("ploscad1" ,"assets/film/IndustrialTile_45.png")
		//this.load.image("spaceship","assets/film/cohete_off.png")
		/*this.load.image("shop" ,"assets/film/shop.png")
		this.load.image("duh" ,"assets/film/Ghost1.png")
		this.load.image("duh1" ,"assets/film/Ghost3.png")
		this.load.image("duh2" ,"assets/film/Ghost5.png")*/

		this.load.image("ograja" ,"assets/film/Ladder1.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
		this.load.image("ozadje","assets/Background_01.png")
		this.load.image("spaceship" ,"assets/scena6/spaceship.png")	
		this.load.image("trava1" ,"assets/scena6/weed.png")
		this.load.image("ploscad1" ,"assets/Tile (15).png")
		this.load.image("znak", "assets/film/wood3.png")


		this.load.image("puscavskaTrava" ,"assets/deco/Grass (2).png")
		this.load.image("puscavskiKamen" ,"assets/deco/Stone.png")
		this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);


	}
create(){
	super.create();
var sirina = 1500
var visina = 750
//ozadje full screen
this.bg = this.add.image(sirina /2, visina/2, 'ozadje2');
this.bg.setDisplaySize(sirina, visina)
//var lab = this.add.image(sirina/2, visina/2, 'ozadje')
//lab.setScale()
//platforma
const platforms = this.physics.add.staticGroup();
const tiles = [];
const tileWidth = 125;
for (let x = -20; x < sirina+100; x = x + tileWidth ){
	const podenj =  platforms.create(x, 725, 'ploscad1')
	tiles.push(podenj)}

	/*this.add.image(1800,200, "duh1")
	this.add.image(1600,300, "duh")
	this.add.image(2200,400, "duh2")
	this.add.image(800,80, "duh1")
	this.add.image(1400,200, "duh")
	this.add.image(2500,60, "duh2")
	this.add.image(1400,200, "duh")
	this.add.image(500,600, "duh2")
	this.add.image(700,20, "duh1")
	
	this.add.image(900,20, "duh1")*/
	
	var znak   = this.physics.add.sprite(600,300, "znak")
	znak.setScale(.3)
	this.physics.add.collider(tiles, znak)

gameState.junak  = this.physics.add.sprite(500,300, "coolGuy")
gameState.junak.setScale(.40)
gameState.junak.setCollideWorldBounds(true)
/*
var ladja = this.add.image(300,400, "spaceship")
ladja.setScale(1)*/


this.cameras.main.setBounds(0,0,sirina,visina)
this.physics.world.setBounds(0,0,sirina,visina)
this.cameras.main.startFollow(gameState.junak, true,0.5, 0.5)



/*
var clovecek = this.add.image(300,250, "zmeja")
clovecek.setScale(.4)
var ladja = this.add.image(300,400, "spaceship")
ladja.setScale(1)*/
gameState.junak.setScale(.40)
//this.add.text(460, 180, 'NASSA', { fontSize:  "30PX", fill: '#FFFFFF' });


/*var shop  = this.physics.add.sprite(3700,500, "shop")
shop.setScale(2.5)*/



//frendi
/*
this.add.image(3300,600, "zmeja")
this.add.image(3100,600, "zmeja")
this.add.image(2900,600, "zmeja")
this.add.image(2500,600, "zmeja")
this.add.image(2700,600, "zmeja")
this.add.image(2500,600, "zmeja")
this.add.image(2300,600, "zmeja")
this.add.image(3300,600, "zmeja")*/

/*
const ograja = this.physics.add.staticGroup();
for (let x = -200; x < 1300; x = x +50 ){
	const podenj =  platforms.create(x, 620, 'ograja')
	const podenj2 =  platforms.create(x, 550, 'ograja')
	const podenj3 =  platforms.create(x, 520, 'ograja')
	podenj3.setScale(3)

	podenj2.setScale(3)
	podenj.setScale(3)
	}*/


/*
gameState.junak1  = this.physics.add.sprite(3300,600, "zmeja")
gameState.junak1.setScale(.40)

gameState.junak1.move = this.tweens.add({
	targets: gameState.junak1,
	y:300,
	ease: 'Linear',
	duration: 1800,
	repeat: -1,
	yoyo: true,})

gameState.junak2  = this.physics.add.sprite(3100,700, "zmeja")
gameState.junak2.setScale(.40)
gameState.junak2.move = this.tweens.add({
	targets: gameState.junak2,
	y: 300,
	ease: 'Linear',
	duration: 1800,
	repeat: -1,
	yoyo: true,})

gameState.junak3  = this.physics.add.sprite(2900,500, "zmeja")
gameState.junak3.setScale(.40)
gameState.junak4  = this.physics.add.sprite(2700,500, "zmeja")
gameState.junak4.setScale(.40)
gameState.junak5  = this.physics.add.sprite(2500,550, "zmeja")
gameState.junak5.setScale(.40)

gameState.junak7  = this.physics.add.sprite(2300,580, "zmeja")
gameState.junak7.setScale(.40)







gameState.junak3.move = this.tweens.add({
	targets: gameState.junak3,
	x: 2400,
	ease: 'Linear',
	duration: 1800,
	repeat: -1,
	yoyo: true,})
gameState.junak4.move = this.tweens.add({
	targets: gameState.junak4,
	y: 300,
	ease: 'Linear',
	duration: 1800,
	repeat: -1,
	yoyo: true,})
gameState.junak5.move = this.tweens.add({
	targets: gameState.junak5,
	y: 300,
	ease: 'Linear',
	duration: 1800,
	repeat: -1,
	yoyo: true,})
gameState.junak7.move = this.tweens.add({
	targets: gameState.junak7,
	y: 300,
	ease: 'Linear',
	duration: 1800,
	repeat: -1,
	yoyo: true,})*/


this.physics.add.collider(gameState.junak, tiles)
/*
this.physics.add.collider(shop, tiles)

this.physics.add.collider(gameState.junak1, tiles)
this.physics.add.collider(gameState.junak2, tiles)
this.physics.add.collider(gameState.junak3, tiles)
this.physics.add.collider(gameState.junak4, tiles)
this.physics.add.collider(gameState.junak5, tiles)
this.physics.add.collider(gameState.junak7, tiles)*/

/*
var papa  = this.physics.add.sprite(750,580, "puscavskiKamen")
papa.setScale(.2)
this.physics.add.collider(papa, tiles)*/


/*
this.add.image(1200,visina-80,"trava1")
this.add.image(650,visina-80,"trava1")
this.physics.add.collider(gameState.junak, tiles)*/



//this.physics.add.collider(shop, tiles)





/*
this.physics.add.overlap(gameState.junak, papa, () => {
	

gameState.junak.destroy()
this.physics.pause();
gameState.active = false;

})
*/
}
update(){
	super.update("basic")
	}
}