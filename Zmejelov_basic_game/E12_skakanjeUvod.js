class E12_skakanjeUvod extends A0_osnova {
    constructor() {
        super("E12_skakanjeUvod")
    }
    preload() {
      super.preload()
      this.load.image("ozadjeG","assets/swamp/gora.jpg")
      this.load.image("platform","assets/jump.png")
      this.load.image("tla" ,"assets/Tile (15).png")
      this.load.image("izhod", "assets/Sign_01.png")
      this.load.image("trava", "assets/deco/Grass_01.png")
      this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
      this.load.image("obvestilo", "assets/deco/Sign_06.png")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
      
      this.load.image("leviSpodnji", "assets/mesto/Wall_B_01.png")
      this.load.image("spodnji", "assets/mesto/Wall_B_02.png")
      this.load.image("desniSpodnji", "assets/mesto/Wall_B_03.png")

      this.load.image("desnaStreha", "assets/mesto/Roof_A_04.png")
      this.load.image("levaStreha", "assets/mesto/Roof_A_05.png")
      this.load.image("desniSpodnji", "assets/mesto/Wall_B_03.png")

      this.load.image("vrata1", "assets/mesto/Wide_Door_02.png")
      this.load.image("okno1", "assets/mesto/Window_02.png")

      this.load.image("vrata2", "assets/mesto/Door_04.png")
      this.load.image("okno2", "assets/mesto/Stone_Window_02.png")


      this.load.image("leviKamen", "assets/mesto/Wall_C_01.png")
      this.load.image("kamen", "assets/mesto/Wall_C_02.png")
      this.load.image("desniKamen", "assets/mesto/Wall_C_03.png")

      this.load.image("vrata3", "assets/mesto/Door_02.png")
      this.load.image("okno3", "assets/mesto/Stone_Window_01.png")
      this.load.atlas("trgovec", "assets/mesto/zivali/trgovec/trgovec.png", "assets/mesto/zivali/trgovec/trgovec_atlas.json")

     }
  create(){
  super.create();
  
  gameState.active = true;
  
  this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadjeG');
  this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
  

  
  
  const platforms = this.physics.add.staticGroup();

  const tiles = [];
  for (let x = 0; x < GAME_WIDTH+100; x = x + 30 ){
  const podenj =  platforms.create(x, 725, 'tla')
  tiles.push(podenj)}
  
  
  


    var odmik = 220
    var x = 900
    var shop10  = this.physics.add.sprite(GAME_WIDTH -x,GAME_HEIGHT-400, "kamen")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(GAME_WIDTH -x - odmik,GAME_HEIGHT-400, "leviKamen")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(GAME_WIDTH -x + odmik,GAME_HEIGHT-400, "desniKamen")
    this.physics.add.collider(shop12, tiles)
    var y = 350
    var  s1 = this.add.image(GAME_WIDTH -x +135,y, 'desnaStreha');
    s1.setScale(.8)
    var s2 = this.add.image(GAME_WIDTH -x -135 ,y, 'levaStreha');
    s2.setScale(.8)
    this.add.image(GAME_WIDTH -x +110,y+200, 'okno3');
    var vrata3  = this.physics.add.sprite(GAME_WIDTH -x -60 ,y+150, 'vrata3')
    this.physics.add.collider(vrata3, tiles)
    
 

   
    gameState.junak  = this.physics.add.sprite(GAME_WIDTH-50,110, "coolGuy")
  gameState.junak.setScale(.40)// pomanjsa
  this.physics.add.collider(gameState.junak, tiles)
  
  gameState.junak.setCollideWorldBounds(true) //ne more vn past
  gameState.trgovec = this.add.sprite(20  ,GAME_HEIGHT-125, 'trgovec');
  gameState.trgovec.setScale(.4)
  gameState.trgovec.move = this.tweens.add({
      targets: gameState.trgovec,
      x: GAME_WIDTH -800,
      ease: 'Linear',
      duration: 15000,
      repeat: -1,
      flipX: true,
      yoyo: true,})
  this.physics.add.collider( gameState.trgovec, tiles)
  this.physics.add.overlap(gameState.junak,   shop10, () => {
  this.physics.pause();
  gameState.active = false;
    this.scene.stop('E12_skakanjeUvod')
    this.scene.start('E12_Swamp_goraUvod')
  });
  
  
      
  
  }
  
  update(){
    super.update("basic")
  }
  }