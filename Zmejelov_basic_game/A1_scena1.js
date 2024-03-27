
class A1_scena1 extends A0_osnova {
  constructor() {
      super("A1_scena1")
  }
  preload() {
    super.preload()
    this.load.image("ozadje1NIVO","/assets/Background_01.png")
    this.load.image("platform","/assets/jump.png")
    this.load.image("tla" ,"/assets/Tile (15).png")
    this.load.image("izhod", "/assets/Sign_01.png")
    this.load.image("trava", "/assets/deco/Grass_01.png")
    this.load.image("rusevine", "/assets/deco/Decor_Ruins_02.png")
    this.load.image("obvestilo", "/assets/deco/Sign_06.png")
    this.load.audio('zmaga', ['/assets/uvod/zmaga.mp3',"/assets/uvod/zmaga.ogg"]);

   }
create(){
super.create();

gameState.active = true;

this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje1NIVO')

gameState.junak  = this.physics.add.sprite(100,110, "coolGuy")
gameState.junak.setScale(.40)// pomanjsa


const platforms = this.physics.add.staticGroup();
const izhod = this.physics.add.sprite(1100,500, "izhod")
const rusevine = this.add.image(300,520,"rusevine")
rusevine.setScale(.6)

const tiles = [];
const tileWidth = 128;
for (let x = 64; x < GAME_WIDTH+100; x = x + tileWidth ){
const podenj =  platforms.create(x, 725, 'tla')
tiles.push(podenj)}
const trava = [];
const tileWidthT = 128; //128/64
for (let x = 600; x < 950; x = x + 256 ){
const podenj =  this.physics.add.sprite(x, 620, 'trava')
trava.push(podenj)}


this.physics.add.collider(tiles, trava)
this.physics.add.collider(izhod, tiles)
this.physics.add.collider(gameState.junak, tiles)

gameState.junak.setCollideWorldBounds(true) //ne more vn past

const obvestilo2 = this.physics.add.sprite(728,150,"obvestilo")
this.physics.add.collider(obvestilo2, tiles)

this.physics.add.overlap(gameState.junak, obvestilo2, () => {
 
  this.add.text(450, 250, this.loadText("good_sings"), {
    fontSize: '40px',
    fill: '#A996BC',
    fontFamily: 'CustomFont',
    wordWrap: { width:400, useAdvancedWrap: true }
  });

  })

 



var enkat = true



this.physics.add.overlap(gameState.junak, izhod, () => {
  this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
  this.titleMusic.play();    
  vrstaTeksta = "level_1_konec"
  this.scene.stop('A1_scena1')
  this.scene.start('vrsta')

})

this.save("A1_scena1", dificulty)

}
update(){
  super.update("basic")



}
}


