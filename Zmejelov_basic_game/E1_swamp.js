class E1_swamp extends A0_osnova{
    constructor() {
		super("E1_swamp")
	}
    preload() {
        super.preload()
        this.load.image("ozadjeSW","assets/swamp/background-03.jpg")
        this.load.image("tlaL" ,"assets/swamp/Tile_07.png")
        this.load.image("tlaS" ,"assets/swamp/Tile_08.png")
        this.load.image("tlaD" ,"assets/swamp/Tile_09.png")
        this.load.image("tlaLS" ,"assets/swamp/Tile_01.png")
        this.load.image("tlaSS" ,"assets/swamp/Tile_02.png")
        this.load.image("tlaDS" ,"assets/swamp/Tile_03.png")
        this.load.image("enojen" ,"assets/swamp/Tile_31.png")
        this.load.image("voda" ,"assets/swamp/5.png")
        this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
        this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);



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

        }
    create(){
        super.create(); 
        
        gameState.active = true;
        
        
        const dolzina = 9500
        const visina = 850
    
    
        //ozadje full screen
        this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadjeSW');
        this.bg.setDisplaySize(dolzina, visina)
    


        gameState.junak  = this.physics.add.sprite(dolzina-10,0, "coolGuy")
        gameState.junak.setScale(.40)// pomanjsa
        
        this.cameras.main.setBounds(0,0,dolzina,visina)
        this.physics.world.setBounds(0,0,dolzina,visina)
        this.cameras.main.startFollow(gameState.junak)
        



        const visinaPLa = visina-475

        const platforms = this.physics.add.staticGroup();
        const tiles = [];
        const podenj =  platforms.create(dolzina-75, visinaPLa, 'tlaL')
        const podenj1 =  platforms.create(dolzina-45, visinaPLa, 'tlaS')
        const podenj2 =  platforms.create(dolzina-15, visinaPLa, 'tlaD')
        platforms.create(dolzina-75, visinaPLa +30, 'tlaLS')
        platforms.create(dolzina-45,  visinaPLa +30, 'tlaSS')
        platforms.create(dolzina-15,  visinaPLa +30, 'tlaDS')
        tiles.push(podenj)
        tiles.push(podenj1)
        tiles.push(podenj2)
        var  visinaPlat =  Math.floor(Math.random() * 200 )+visina-600; 
        var  razmak =  Math.floor(Math.random() * 100 )+500;  

        for (let x = dolzina-500; x > 500; x = x - razmak ){
            var  nacin =  Math.floor(Math.random() * 3 ); 
            if(nacin == 0){
            const podenj =  platforms.create(x, visinaPlat, 'tlaL')
            const podenj1 =  platforms.create(x+30, visinaPlat, 'tlaS')
            const podenj2 =  platforms.create(x+60, visinaPlat, 'tlaD')
            platforms.create(x, visinaPlat+30, 'tlaLS')
            platforms.create(x+30, visinaPlat+30, 'tlaSS')
            platforms.create(x+60, visinaPlat+30, 'tlaDS')
            tiles.push(podenj)
            tiles.push(podenj1)
            tiles.push(podenj2)
            razmak =  Math.floor(Math.random() * 100 )+400;  
            }
            else if(nacin == 1){
            const podenj =  platforms.create(x, visinaPlat, 'tlaL')
            const podenj1 =  platforms.create(x+30, visinaPlat, 'tlaS')
            const podenj12 =  platforms.create(x+60, visinaPlat, 'tlaS')
            const podenj10 =  platforms.create(x+90, visinaPlat, 'tlaS')
            const podenj2 =  platforms.create(x+120, visinaPlat, 'tlaD')
            platforms.create(x, visinaPlat+30, 'tlaLS')
            platforms.create(x+30, visinaPlat+30, 'tlaSS')
            platforms.create(x+60, visinaPlat+30, 'tlaSS')
            platforms.create(x+90, visinaPlat+30, 'tlaSS')
            platforms.create(x+120, visinaPlat+30, 'tlaDS')
            tiles.push(podenj)
            tiles.push(podenj1)
            tiles.push(podenj2)
            razmak =  Math.floor(Math.random() * 100 )+400;  
            }
            else if(nacin == 2){
                const podenj =  platforms.create(x, visinaPlat, 'enojen')
                tiles.push(podenj)
                razmak =  Math.floor(Math.random() * 100 )+300;  

            }

            visinaPlat =  Math.floor(Math.random() * 200 )+visina-600; 

    
    }

  
    var konec = []
    const podenjK =  platforms.create(15, visinaPLa, 'tlaL')
    const podenjK1 =  platforms.create(45, visinaPLa, 'tlaS')
    const podenjK2 =  platforms.create(75, visinaPLa, 'tlaS')
    platforms.create(15, visinaPLa +30, 'tlaLS')
    platforms.create(45,  visinaPLa +30, 'tlaSS')
    platforms.create(75,  visinaPLa +30, 'tlaSS')
    const podenj2K =  platforms.create(100, visinaPLa, 'tlaS')
    const podenjK12 =  platforms.create(130, visinaPLa, 'tlaS')
    const podenjK22 =  platforms.create(160, visinaPLa, 'tlaD')
    platforms.create(100, visinaPLa +30, 'tlaSS')
    platforms.create(130,  visinaPLa +30, 'tlaSS')
    platforms.create(160,  visinaPLa +30, 'tlaDS')
    konec.push(podenj2K)
    konec.push(podenjK12)
    konec.push(podenjK22)
    konec.push(podenjK)
    konec.push(podenjK1)
    konec.push(podenjK2)






    this.physics.add.collider(gameState.junak, tiles)

    gameState.junak.setCollideWorldBounds(true) //ne more vn past


        const smrt = [];
     
        
        
    
    for (let x = 0; x <  dolzina; x = x+170 ){            
            const plosca =  platforms.create(x, visina, 'voda')
            smrt.push(plosca)
    }
        
    


    this.physics.add.overlap(gameState.junak, smrt, () => {
        this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        stSmrti += 1
        this.physics.pause();
        gameState.active = false;
        this.anims.pauseAll();
        vrstaTeksta = "swamp" 
        this.scene.stop('E1_swamp')
        this.scene.start('vrsta')
          
        }); 
        
    this.physics.add.overlap(gameState.junak, konec, () => {
        this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
        this.titleMusic.play();    
        if(vrniNaPogoj == true){
            this.scene.stop('E1_swamp')
            this.scene.start('A0_vsi_nivoji')
        }
        else{
        this.scene.stop('E1_swamp')
        this.scene.start('E12_skakanjeUvod')
        }
        })   
    
        
        
        }
    
    update(){
    super.update("basic")
      }
      }
      