class A9_cilj extends A0_osnova {
	constructor() {
		super("A9_cilj")
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
      this.load.image("spaceship","assets/scena6/spaceship.png")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
      this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);
      this.load.image("obvestilo", "assets/deco/Sign_06.png")

	}
create(){
	super.create();
    //ozadje full screen
    const dolzina = 1200
	const visina = 1200
    this.bg = this.add.image(dolzina/2, visina /2, 'ozadje2');
    this.bg.setDisplaySize(dolzina, visina)
    var kolider = []
    this.save("A9_cilj", dificulty)

    //platforma
    const platforms = this.physics.add.staticGroup();
    const tileWidth = 128;
    for (let x = 64; x < GAME_WIDTH+100; x = x + tileWidth ){
        const podenj =  platforms.create(x, visina-15, 'tla2')
        kolider.push(podenj)}

    gameState.junak  = this.physics.add.sprite(290, visina - 500, "coolGuy")
    gameState.junak.setScale(.40)
    gameState.junak.setCollideWorldBounds(true)

	this.cameras.main.setBounds(0,0,dolzina,visina)
	this.physics.world.setBounds(0,0,dolzina,visina)
	this.cameras.main.startFollow(gameState.junak)
    //prvi jumping point
    const kamSkocit = platforms.create(790, visina - 215, 'ploscad1')
    const kamSkocit1 = platforms.create(662, visina - 215, 'ploscad0') //tileWidth = 128
    const kamSkocit2 = platforms.create(918, visina - 215, 'ploscad2') //tileWidth = 128

    kolider.push(kamSkocit)
    kolider.push(kamSkocit1)
    kolider.push(kamSkocit2)

    //nad tem
    const kamSkocit11 = platforms.create(790, visina - 590, 'ploscad1')
    const kamSkocit12= platforms.create(662, visina - 590, 'ploscad0') //tileWidth = 128
    const kamSkocit13 = platforms.create(918, visina - 590, 'ploscad2') //tileWidth = 128

    kolider.push(kamSkocit11)
    kolider.push(kamSkocit12)
    kolider.push(kamSkocit13)
    //drugi jumping pointer
    const kamSkocit3 = platforms.create(290, visina - 390, 'ploscad1')
    const kamSkocit4 = platforms.create(162, visina - 390, 'ploscad0') //tileWidth = 128
    const kamSkocit5 = platforms.create(418, visina - 390, 'ploscad2') //tileWidth = 128

    kolider.push(kamSkocit3)
    kolider.push(kamSkocit4)
    kolider.push(kamSkocit5)
    const kamSkocit7 = platforms.create(290, visina -765 , 'ploscad1')
    const kamSkocit8 = platforms.create(162, visina -765, 'ploscad0') //tileWidth = 128
    const kamSkocit9 = platforms.create(418, visina -765, 'ploscad2') //tileWidth = 128

    kolider.push(kamSkocit7)
    kolider.push(kamSkocit8)
    kolider.push(kamSkocit9)

    //ce zagliča da gres lah do ladje
    const obvestilo2 = this.physics.add.sprite(50,1000,"obvestilo")
    obvestilo2.setScale(.3)
    this.physics.add.overlap(gameState.junak, obvestilo2, () => {
      
        gameState.junak.x = 450
        gameState.junak.y = 100

      })

    this.physics.add.collider(kolider, obvestilo2)


    const zakladDaNePade = this.physics.add.staticGroup();
    const zaklad = zakladDaNePade.create(400,visina - 480,"past") //350 - 93 kar je velikost ploscadi
    this.physics.add.collider(zaklad, kolider)



    const puscavskaDrevo = this.physics.add.sprite(800,visina -540,"puscavskaDrevo")
    this.physics.add.collider(kolider, puscavskaDrevo)

    const puscavskiKamen = this.physics.add.sprite(250,visina - 140,"puscavskiKamen")
    this.physics.add.collider(kolider, puscavskiKamen)

    this.physics.add.collider(gameState.junak, kolider)


    const tileWidthT = 102; //102*50
    for (let x = 600; x < 1200; x = x + 51 ){
        const podenj =  this.physics.add.sprite(x, visina -120, 'puscavskaTrava')
        kolider.push(podenj)}


    var spaceship = this.physics.add.sprite(150, 0, "spaceship")
    spaceship.setScale(.8)
    this.physics.add.collider(spaceship, kolider)

    


        

          this.physics.add.overlap(gameState.junak, spaceship, () => {
            this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
            this.titleMusic.play(); 
              this.physics.pause();
              gameState.active = false;
            vrstaTeksta = "level_9_konec"
            this.physics.pause();
            this.scene.stop('A9_cilj')
            this.scene.start('vrsta')
        
       
          })

   

}
update(){
	super.update("basic")
	}

}
