class E0_mesto extends A0_osnova {
    constructor() {
        super("E0_mesto")
    }
    preload() {
      super.preload()
      this.load.image("ozadjeM","assets/mesto/Background_01.png")
      this.load.image("ozadje2M","assets/mesto/Background_02.png")
      this.load.image("tla" ,"assets/Tile (15).png")
      this.load.image("izhodR", "assets/mesto/gozdRUS.png")
      this.load.image("izhodA", "assets/mesto/gozdANG.png")
      this.load.image("izhodS", "assets/mesto/gozdSLO.png")

      this.load.image("shop" ,"assets/film/shop.png")
      this.load.image("trava", "assets/deco/Grass_01.png")
      this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
      this.load.image("obvestilo", "assets/deco/Sign_06.png")
      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
      this.load.image("platform" ,"assets/lvl2/15.png")
      //hise stuff
      this.load.image("leviZgornji" ,"assets/mesto/Wall_A_01.png")
      this.load.image("zgornji" ,"assets/mesto/Wall_A_02.png")
      this.load.image("desniZgornji" ,"assets/mesto/Wall_A_03.png")

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

      this.load.image("bar", "assets/mesto/bar.png")
      this.load.image("barOsnova", "assets/mesto/barOsnova.png")

      this.load.image("leviKamen", "assets/mesto/Wall_C_01.png")
      this.load.image("kamen", "assets/mesto/Wall_C_02.png")
      this.load.image("desniKamen", "assets/mesto/Wall_C_03.png")

      this.load.image("vrata3", "assets/mesto/Door_02.png")
      this.load.image("okno3", "assets/mesto/Stone_Window_01.png")

      this.load.image("luc", "assets/mesto/luc.png")
      this.load.image("vodnjak", "assets/mesto/vodnjak.png")
      this.load.image("voz", "assets/mesto/voz.png")

      this.load.image("vrata4", "assets/mesto/vrata3.png")
      this.load.image("okno4", "assets/mesto/okno3.png")

      this.load.image("kovac", "assets/mesto/kovac.png")
      this.load.image("kovacOsnova", "assets/mesto/kovacOsnova.png")
      this.load.image("furnace", "assets/mesto/furnace.png")
      this.load.image("anvil", "assets/mesto/anvil.png")

      this.load.image("hiska2", "assets/mesto/Untitled design.png")
      this.load.image("hiska1", "assets/mesto/hiska1.png")


      this.load.image("ograjaD", "assets/mesto/ograjaD.png")
      this.load.image("ograjaL", "assets/mesto/ograjaL.png")
      this.load.image("ograja", "assets/mesto/ograja.png")
      this.load.image("swamp", "assets/mesto/swamp.png")


        //zivali

    this.load.atlas("macka1", "assets/mesto/zivali/macka/macka.png", "assets/mesto/zivali/macka/macka_atlas.json")
    this.load.atlas("pes1", "assets/mesto/zivali/1 Dog/pes.png", "assets/mesto/zivali/1 Dog/pes_atlas.json")
    this.load.atlas("macka2", "assets/mesto/zivali/4 Cat 2/muca2.png", "assets/mesto/zivali/4 Cat 2/muca2_atlas.json")
    this.load.atlas("pes2", "assets/mesto/zivali/2 Dog 2/pes2.png", "assets/mesto/zivali/2 Dog 2/pes2_atlas.json")
    this.load.atlas("podgana1", "assets/mesto/zivali/6 Rat 2/podgana2.png", "assets/mesto/zivali/6 Rat 2/podgana2_atlas.json")
    this.load.atlas("podgana2", "assets/mesto/zivali/5 Rat/podgana1.png", "assets/mesto/zivali/5 Rat/podgana1_atlas.json")
    this.load.atlas("ptica1", "assets/mesto/zivali/7 Bird/ptica1.png", "assets/mesto/zivali/7 Bird/ptica1_atlas.json")
    this.load.image("trgovec", "assets/mesto/zivali/trgovec/Wraith_02_Idle Blinking_006.png")
    this.load.atlas("krava", "assets/mesto/zivali/krava.png", "assets/mesto/zivali/krava_atlas.json")
    this.load.atlas("krava2", "assets/mesto/zivali/krava2.png", "assets/mesto/zivali/krava2_atlas.json")

     }
create(){
    super.create();
    const dolzina = 10000
    const sirina = 1200
    gameState.active = true;
    
    this.bg = this.add.image(dolzina / 2, sirina /2, 'ozadjeM');
    this.bg.setScale(.01)
    this.bg.setDisplaySize(dolzina, sirina)
    this.bg2 = this.add.image(dolzina / 2, sirina /2, 'ozadje2M');
    this.bg2.setScale(.0005)
    this.bg2.setDisplaySize(dolzina, sirina)

    this.save("E0_mesto", dificulty)

    
    const platforms = this.physics.add.staticGroup();
   
    const tiles = [];
    const tileWidth = 128;
    for (let x = 64; x < dolzina+129; x = x + tileWidth ){
    const podenj =  platforms.create(x, sirina+20, 'platform')
    tiles.push(podenj)}
    const trava = [];
    const tileWidthT = 128; //128/64
    

    
    //prva stevilka 1 st trgovine, druga ker del
    var odmik = 220
    var x = 850
    var shop10  = this.physics.add.sprite(dolzina -x,1000, "spodnji")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - odmik,1000, "leviSpodnji")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniSpodnji")
    this.physics.add.collider(shop12, tiles)
    var y = 850
    this.add.image(dolzina -x,y, 'zgornji');
    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x - odmik,y, 'leviZgornji');
    var  s1 = this.add.image(dolzina -x +135,y-200, 'desnaStreha');
    s1.setScale(.8)
    var s2 = this.add.image(dolzina -x -135 ,y-200, 'levaStreha');
    s2.setScale(.8)


    this.add.image(dolzina -x +110,y+120, 'okno1');
    var vrata1  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata2')
    this.physics.add.collider(vrata1, tiles)
    vrata1.setScale(.8)
    this.add.image(dolzina -x +50,y-60, 'okno1');
    this.add.image(dolzina -x -50,y-60, 'okno1');

    //hisa 2 aka bar
    var odmik = 220
    var x = 1300
    var shop20  = this.physics.add.sprite(dolzina -x,1000, "spodnji")
    this.physics.add.collider(shop20, tiles)
    var shop21  = this.physics.add.sprite(dolzina -odmik -x,1000, "spodnji")
    this.physics.add.collider(shop21, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - 2*odmik,1000, "leviSpodnji")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniSpodnji")
    this.physics.add.collider(shop12, tiles)

    var y = 850
    this.add.image(dolzina -x,y, 'zgornji');
    this.add.image(dolzina -x-odmik,y, 'zgornji');

    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x -2* odmik,y, 'leviZgornji');
    var  s1 = this.add.image(dolzina -x +125,y-215, 'desnaStreha');
    s1.setScale(1.2)
    var s2 = this.add.image(dolzina -x -295 ,y-215, 'levaStreha');
    s2.setScale(1.2)

    this.add.image(dolzina -x +110,y+120, 'okno2');
    this.add.image(dolzina -x -250,y+120, 'okno2');
    var barVhod  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata1')
    this.physics.add.collider(barVhod, tiles)
    barVhod.setScale(.8)
    var bO = this.add.image(dolzina -x -60,y+80, 'barOsnova');
    bO.setScale(.6)
    var b = this.add.image(dolzina -x -60,y+80, 'bar');
    b.setScale(.3)
    
    this.add.image(dolzina -x +110,y-60, 'okno1');
    this.add.image(dolzina -x -60,y-60, 'okno1');
    this.add.image(dolzina -x -250,y-60, 'okno1');





    //hisa3
    var odmik = 220
    var x = 2050
    var shop10  = this.physics.add.sprite(dolzina -x,1000, "kamen")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - odmik,1000, "leviKamen")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniKamen")
    this.physics.add.collider(shop12, tiles)
    var y = 850
    var  s1 = this.add.image(dolzina -x +135,y, 'desnaStreha');
    s1.setScale(.8)
    var s2 = this.add.image(dolzina -x -135 ,y, 'levaStreha');
    s2.setScale(.8)
    this.add.image(dolzina -x +110,y+200, 'okno3');
    var vrata3  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata3')
    this.physics.add.collider(vrata3, tiles)
    vrata1.setScale(.8)
    
    var x = 2800
    var vodnjak  = this.physics.add.sprite(dolzina -x-200,800, "vodnjak")
    this.physics.add.collider(vodnjak, tiles)
    var luc  = this.physics.add.sprite(dolzina -x+300,800, "luc")
    this.physics.add.collider(luc, tiles)
    var voz  = this.physics.add.sprite(dolzina -800,800, "voz")
    this.physics.add.collider(voz, tiles)

    //h4
    var odmik = 220
    var x = 3800
    var shop10  = this.physics.add.sprite(dolzina -x,1000, "kamen")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - odmik,1000, "leviKamen")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniKamen")
    this.physics.add.collider(shop12, tiles)
    var y = 720
    this.add.image(dolzina -x,y, 'zgornji');
    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x - odmik,y, 'leviZgornji');
    var  s1 = this.add.image(dolzina -x +135,y-200, 'desnaStreha');
    s1.setScale(.8)
    var s2 = this.add.image(dolzina -x -135 ,y-200, 'levaStreha');
    s2.setScale(.8)


    this.add.image(dolzina -x +110,y+250, 'okno2');
    var vrata1  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata2')
    this.physics.add.collider(vrata1, tiles)
    vrata1.setScale(.8)
    this.add.image(dolzina -x +50,y-60, 'okno1');
    this.add.image(dolzina -x -50,y-60, 'okno1');


    //blacksmith
    var odmik = 220
    var x = 4500
    var shop20  = this.physics.add.sprite(dolzina -x,1000, "kamen")
    this.physics.add.collider(shop20, tiles)
    var shop21  = this.physics.add.sprite(dolzina -odmik -x,1000, "kamen")
    this.physics.add.collider(shop21, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - 2*odmik,1000, "leviKamen")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniKamen")
    this.physics.add.collider(shop12, tiles)

    var y = 850
    var  s1 = this.add.image(dolzina -x +125,y-70, 'desnaStreha');
    s1.setScale(1.2)
    var s2 = this.add.image(dolzina -x -295 ,y-70, 'levaStreha');
    s2.setScale(1.2)

    this.add.image(dolzina -x +110,y+200, 'okno4');
    this.add.image(dolzina -x -250,y+200, 'okno4');
    var vrata1  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata4')
    this.physics.add.collider(vrata1, tiles)
    vrata1.setScale(.8)
    var bO = this.add.image(dolzina -x -485,y+80, 'kovacOsnova');
    bO.setScale(.6)
    var b = this.add.image(dolzina -x -500,y+90, 'kovac');
    b.setScale(.3)
    var furnace  = this.physics.add.sprite(dolzina -x -750,y+150, 'furnace')
    this.physics.add.collider(furnace, tiles)
    var anvil  = this.physics.add.sprite(dolzina -x +80 ,y+150, 'anvil')
    anvil.setScale(.5)
    this.physics.add.collider(anvil, tiles)

    gameState.trgovec  = this.physics.add.sprite(dolzina -x,500, "trgovec")
    gameState.trgovec.setScale(.4)
    this.physics.add.collider(gameState.trgovec, tiles)

  
  



    //h5
    var odmik = 220
    var x = 5800
    var shop10  = this.physics.add.sprite(dolzina -x,1000, "kamen")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - odmik,1000, "leviKamen")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniKamen")
    this.physics.add.collider(shop12, tiles)
    var y = 720
    this.add.image(dolzina -x,y, 'zgornji');
    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x - odmik,y, 'leviZgornji');


    this.add.image(dolzina -x +110,y+250, 'okno2');
    var vrata1  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata2')
    this.physics.add.collider(vrata1, tiles)
    vrata1.setScale(.8)
    this.add.image(dolzina -x +75,y-60, 'okno3');
    this.add.image(dolzina -x -75,y-60, 'okno2');

    var y = 440
    this.add.image(dolzina -x,y, 'zgornji');
    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x - odmik,y, 'leviZgornji');

    //h6
    var odmik = 220
    var x = 6350
    var shop10  = this.physics.add.sprite(dolzina -x,1000, "spodnji")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - odmik,1000, "leviSpodnji")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniSpodnji")
    this.physics.add.collider(shop12, tiles)
    var y = 850
    this.add.image(dolzina -x,y, 'zgornji');
    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x - odmik,y, 'leviZgornji');
    var  s1 = this.add.image(dolzina -x +135,y-200, 'desnaStreha');
    s1.setScale(.8)
    var s2 = this.add.image(dolzina -x -135 ,y-200, 'levaStreha');
    s2.setScale(.8)


    this.add.image(dolzina -x +110,y+120, 'okno1');
    var vrata1  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata2')
    this.physics.add.collider(vrata1, tiles)
    vrata1.setScale(.8)
    this.add.image(dolzina -x +50,y-60, 'okno1');
    this.add.image(dolzina -x -50,y-60, 'okno1');



    gameState.krava = this.physics.add.sprite(dolzina -x -550,100,"krava");
    gameState.krava.setScale(3)
    gameState.krava.move = this.tweens.add({
		targets: gameState.krava,
		x: dolzina-x-2350,
		ease: 'Linear',
		duration: 50000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.krava, tiles)

    gameState.krava2 = this.physics.add.sprite(dolzina -x -1400,100,"krava");
    gameState.krava2.setScale(3)
    gameState.krava2.move = this.tweens.add({
		targets: gameState.krava2,
		x: dolzina-x-2300,
		ease: 'Linear',
		duration: 50000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.krava2, tiles)

    gameState.krava2 = this.physics.add.sprite(dolzina -x -800,100,"krava");
    gameState.krava2.setScale(3)
    gameState.krava2.move = this.tweens.add({
		targets: gameState.krava2,
		x: dolzina-x-2200,
		ease: 'Linear',
		duration: 50000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.krava2, tiles)


    gameState.krava2 = this.physics.add.sprite(dolzina -x -2200,100,"krava2");
    gameState.krava2.setScale(3)
    gameState.krava2.move = this.tweens.add({
		targets: gameState.krava2,
		x: dolzina-x-800,
		ease: 'Linear',
		duration: 50000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.krava2, tiles)

    gameState.krava2 = this.physics.add.sprite(dolzina -x -1400,100,"krava2");
    gameState.krava2.setScale(3)
    gameState.krava2.move = this.tweens.add({
		targets: gameState.krava2,
		x: dolzina-x-550,
		ease: 'Linear',
		duration: 50000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.krava2, tiles)





    var o = this.add.sprite(dolzina -x -500,1115, 'ograjaD');
    this.physics.add.collider(o, tiles)
    for(var y = 600; y < dolzina -x -1200;y+= 100){
      this.add.image(dolzina -x -y,1115, 'ograja');
    }
    this.add.image(dolzina -x -2400,1115, 'ograjaL');


    var odmik = 220
    var x = 9400
    var shop10  = this.physics.add.sprite(dolzina -x,1000, "kamen")
    this.physics.add.collider(shop10, tiles)
    var shop11 = this.physics.add.sprite(dolzina -x - odmik,1000, "leviKamen")
    this.physics.add.collider(shop11, tiles)
    var shop12  = this.physics.add.sprite(dolzina -x + odmik,1000, "desniKamen")
    this.physics.add.collider(shop12, tiles)
    var y = 720
    this.add.image(dolzina -x,y, 'kamen');
    this.add.image(dolzina -x +odmik,y, 'desniZgornji');
    this.add.image(dolzina -x - odmik,y, 'leviZgornji');
    var  s1 = this.add.image(dolzina -x +135,y-200, 'desnaStreha');
    s1.setScale(.8)
    var s2 = this.add.image(dolzina -x -135 ,y-200, 'levaStreha');
    s2.setScale(.8)


    this.add.image(dolzina -x +110,y+250, 'okno1');
    var vrata1  = this.physics.add.sprite(dolzina -x -60 ,y+150, 'vrata3')
    this.physics.add.collider(vrata1, tiles)
    vrata1.setScale(.8)
    this.add.image(dolzina -x -40,y-60, 'okno2');




	//zivali
    gameState.muca = this.physics.add.sprite(7000,500,"macka1");
    gameState.muca.move = this.tweens.add({
		targets: gameState.muca,
		x: dolzina-1500,
        duration: 10000,
		ease: 'Linear',
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.muca, tiles)

    gameState.muca2 = this.physics.add.sprite(dolzina-2500,500,"macka2");
    gameState.muca2.setScale(2)
    gameState.muca2.move = this.tweens.add({
		targets: gameState.muca2,
		x:  dolzina-350,
		ease: 'Linear',
		repeat: -1,
        duration: 10000,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.muca2, tiles)

    gameState.podgana1 = this.physics.add.sprite(5000,500,"podgana1");
    gameState.podgana1.move = this.tweens.add({
		targets: gameState.podgana1,
		x: 11000,
		ease: 'Linear',
		duration: 2000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.podgana1, tiles)

    gameState.podgana2 = this.physics.add.sprite(4000,500,"podgana2");
    gameState.podgana2.move = this.tweens.add({
		targets: gameState.podgana2,
		x: dolzina,
		ease: 'Linear',
		duration: 10000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.podgana2, tiles)

    gameState.podgana1 = this.physics.add.sprite(5050,500,"podgana1");
    gameState.podgana1.move = this.tweens.add({
		targets: gameState.podgana1,
		x: 11000,
		ease: 'Linear',
		duration: 2000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.podgana1, tiles)

    gameState.podgana2 = this.physics.add.sprite(4050,500,"podgana2");
    gameState.podgana2.move = this.tweens.add({
		targets: gameState.podgana2,
		x: dolzina,
		ease: 'Linear',
		duration: 10000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.podgana2, tiles)



    gameState.pes1 = this.physics.add.sprite(dolzina-6000,500,"pes1");
    gameState.pes1.setScale(3)
    gameState.pes1.move = this.tweens.add({
		targets: gameState.pes1,
		x: dolzina-500,
		ease: 'Linear',
		duration: 20000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.pes1, tiles)

    gameState.pes2 = this.physics.add.sprite(dolzina-4000,500,"pes2");
    gameState.pes2.setScale(2)
    gameState.pes2.move = this.tweens.add({
		targets: gameState.pes2,
		x: dolzina-750,
		ease: 'Linear',
		duration: 20000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.pes2, tiles)

    for(var x = 0; x < 30;x +=1){   
        var razmik =  Math.floor(Math.random() * (dolzina/2)); 
        var visina =  Math.floor(Math.random() * 650); 

        gameState.ptica1 = this.add.image(razmik,visina,"ptica1");
        gameState.ptica1.move = this.tweens.add({
		targets: gameState.ptica1,
		x: dolzina,
		ease: 'Linear',
		duration: 20000,
		repeat: -1,
        flipX: true,
		yoyo: true,})}

    for(var x = 0; x < 30;x +=1){   
        var razmik =  Math.floor(Math.random() * (dolzina/2))+ dolzina/2; 
        var visina =  Math.floor(Math.random() * 650)+10; 

        gameState.ptica2 = this.add.image(razmik,visina,"ptica1");
        gameState.ptica2.flipX = true
        gameState.ptica2.move = this.tweens.add({
        targets: gameState.ptica2,
        x: 0,
        ease: 'Linear',
        duration: 20000,
        repeat: -1,
        flipX: true,
        yoyo: true,})}

 /*
    this.physics.add.collider( gameState.ptica1, tiles)
    gameState.ptica1 = this.add.image(6000,500,"ptica1");
    gameState.ptica1.move = this.tweens.add({
		targets: gameState.ptica1,
		x: 10000,
		ease: 'Linear',
		duration: 20000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.ptica1, tiles)
    gameState.ptica1 = this.add.image(dolzina-1000,600,"ptica1");
    gameState.ptica1.move = this.tweens.add({
		targets: gameState.ptica1,
		x: dolzina,
		ease: 'Linear',
		duration: 20000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.ptica1, tiles)
    gameState.ptica1 = this.add.image(dolzina-1050,550,"ptica1");
    gameState.ptica1.move = this.tweens.add({
		targets: gameState.ptica1,
		x: dolzina,
		ease: 'Linear',
		duration: 20000,
		repeat: -1,
        flipX: true,
		yoyo: true,})
    this.physics.add.collider( gameState.ptica1, tiles)
/*

    for(var x = 0; x < 10;x +=1){   
        var razmik =  Math.floor(Math.random() * dolzina)-500; 
        gameState.clovk = this.physics.add.sprite(dolzina-razmik,500,"trgovec");
        gameState.clovk.setScale(.3)
        var pot =  Math.floor(Math.random() * 800)+200; 
        gameState.clovk.move = this.tweens.add({
            targets: gameState.clovk,
            x: dolzina -500,
            ease: 'Linear',
            duration: 5000,
            repeat: -1,
            flipX: true,
            yoyo: true,})
        this.physics.add.collider( gameState.clovk, tiles)
    }*/

    gameState.clovk = this.physics.add.sprite(dolzina-5000,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: dolzina -500,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)

    gameState.clovk = this.physics.add.sprite(1000,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: dolzina -5000,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)

    gameState.clovk = this.physics.add.sprite(2500,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: dolzina ,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)

    gameState.clovk = this.physics.add.sprite(3400,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: 5000 ,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)


    gameState.clovk = this.physics.add.sprite(100,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: 2000 ,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)


    gameState.clovk = this.physics.add.sprite(2500,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: 4000 ,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)



    gameState.clovk = this.physics.add.sprite(8000,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: 15000 ,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)

    gameState.clovk = this.physics.add.sprite(8500,500,"trgovec");
    gameState.clovk.setScale(.4)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: dolzina -200 ,
        ease: 'Linear',
        duration: 15000,
        repeat: -1,
        flipX: true,
        yoyo: true,})
    this.physics.add.collider( gameState.clovk, tiles)

    gameState.junak  = this.physics.add.sprite(KoordinateMestoX, KoordinateMestoY, "coolGuy")
    gameState.junak.setScale(.40)// pomanjsa

    this.cameras.main.setBounds(0,0,dolzina,sirina)
    this.physics.world.setBounds(0,0,dolzina,sirina)
    this.cameras.main.startFollow(gameState.junak, true,0.5, 0.5)
    this.physics.add.collider(gameState.junak, tiles)
    gameState.junak.setCollideWorldBounds(true) //ne more vn past
    


    var pogoj = poker

    if(pogoj ==  false){
    this.physics.add.overlap(gameState.junak,   gameState.trgovec, () => {
      this.physics.pause();
      gameState.active = false;
        this.scene.stop('E0_mesto')
        this.scene.start('E0_pokerUvod')
     
      })
    }

    var pogoj = bar
    if(pogoj ==  false){
    this.physics.add.overlap(gameState.junak, barVhod, () => {
      this.physics.pause();
      gameState.active = false;
      this.scene.stop('E0_mesto')
      this.scene.start('E0_barUvod')
          })}


    if(!mestoGameMode){
        var vrsta = "izhodS"
      if (language == "en"){
          vrsta =  "izhodA"}
      else if (language == "rus"){
          vrsta = "izhodR"}
      else{
          vrsta = "izhodS"
      }
    }
    
  

    if(E_iger== 3 && mestoOpravljeno == false){
      mestoOpravljeno = true 
      this.scene.stop('E0_mesto')
      this.scene.start('E0_mestoKonec')
    }

  

    if(!mestoGameMode){

      const izhod = this.physics.add.sprite(dolzina-100,250,vrsta )
      izhod.setScale(.2)
      this.physics.add.collider(izhod, tiles)


      this.physics.add.overlap(gameState.junak, izhod, () => {
        this.physics.pause();
        gameState.active = false;
        this.scene.stop('E0_mesto')
        this.scene.start('A6_scena6')
    
            
            })
    }
    

    const swamp = this.physics.add.sprite(100,250,"swamp" )
    swamp.setScale(.25)
    this.physics.add.collider(swamp, tiles)
    this.physics.add.overlap(gameState.junak, swamp, () => {
      KoordinateMestoX = 300
      KoordinateMestoY = 1100 
      this.physics.pause();
      gameState.active = false;
      this.scene.stop('E0_mesto')
      this.scene.start('E1_swamp')
  
          
          })




        
    
    }
  
  update(){
    super.update("basic")
  }
  }