class E12_swampSkakanje extends A0_osnova {
    constructor() {
        super("E12_swampSkakanje")
    }
    preload() {
      super.preload()
      this.load.image("ozadjeG","assets/swamp/gora.jpg")
      this.load.image("tlaSNEG","assets/swamp/2.png")
      this.load.image("platL" ,"assets/swamp/14.png")
      this.load.image("plat", "assets/swamp/15.png")
      this.load.image("platD", "assets/swamp/16.png")
      this.load.image("goba", "assets/swamp/goba.png")
      this.load.image("kristal", "assets/swamp/kristal.png")
      this.load.image("snezak", "assets/swamp/snezak.png")
      this.load.image("kamensneg", "assets/swamp/kamenSNEG.png")


      this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);

     }
  create(){
  super.create();
  
  gameState.active = true;
  
  const dolzina = 1200
  const visina = 6000


  //ozadje full screen
  this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadjeG');
  this.bg.setDisplaySize(dolzina, visina)
  
  gameState.junak  = this.physics.add.sprite(dolzina-100,visina-200, "coolGuy")
  gameState.junak.setScale(.40)// pomanjsa
  this.cameras.main.setBounds(0,0,dolzina,visina)
  this.physics.world.setBounds(0,0,dolzina,visina)
  this.cameras.main.startFollow(gameState.junak)





  const platforms = this.physics.add.staticGroup();
  const tiles = [];
  const tileWidth = 128;
  for (let x = 64; x < dolzina+100; x = x + tileWidth ){
  const podenj =  platforms.create(x, visina, 'tlaSNEG')
  tiles.push(podenj)}


    

  
  gameState.junak.setCollideWorldBounds(true) //ne more vn past

  var  prehod =  Math.floor(Math.random() * (dolzina-400) );  
  var  prehod2 =  Math.floor(Math.random() * (dolzina-400) );  
  var  prehod3 =  Math.floor(Math.random() * (dolzina-400) );  
  var  prehod4 =  Math.floor(Math.random() * (dolzina-400) );  
  var  prehod5 =  Math.floor(Math.random() * (dolzina-400) );  
  var  prehod6 =  Math.floor(Math.random() * (dolzina-400) );  


  for (let x = 0; x < dolzina +100; x = x + 64 ){
    if(x < prehod || x >  prehod+200){
        const podenj =  platforms.create(x, visina-300, 'tlaSNEG')
        podenj.setScale(.5)
        tiles.push(podenj)
        }
    if(x < prehod2 || x >  prehod2+200){
        const podenj2 =  platforms.create(x, visina-600, 'tlaSNEG')
        podenj2.setScale(.5)
        tiles.push(podenj2)
        }
    const podenj3 =  platforms.create(x, visina-900, 'tlaSNEG')
    podenj3.setScale(.5)
    if(x < prehod3 || x >  prehod3+270){
       tiles.push(podenj3)
        }
    const podenj4 =  platforms.create(x, visina-1200, 'tlaSNEG')
    podenj4.setScale(.5)
    if(x < prehod4 || x >  prehod4+270){
        tiles.push(podenj4)
        }
    if(x < prehod5 || x >  prehod5+200){
        const podenj5 =  platforms.create(x, visina-1500, 'tlaSNEG')
        podenj5.setScale(.5)
        tiles.push(podenj5)
        }
    const podenj6 =  platforms.create(x, visina-1800, 'tlaSNEG')
    podenj6.setScale(.5)
    if(x < prehod6 || x >  prehod6+270){
        tiles.push(podenj6)
        }


    }
    var pogoj = 0
    for (let y = visina -  2100; y > visina-3700;  y-= 350 ){
        const L =  platforms.create(570, y, 'platL')
        const D =  platforms.create(634, y, 'platD')
        L.setScale(.5)
        D.setScale(.5)
        tiles.push(L)
        tiles.push(D)
        var  st0 =  Math.floor(Math.random() * 2); 
        if(pogoj == 1 || pogoj == 3){
        if (st0 == 1){
          const L1 =  platforms.create(246, y-175, 'platL')
          const D1 =  platforms.create(300, y-175, 'platD')
          const L2 =  platforms.create(968, y-175, 'platL')
          const D2 =  platforms.create(1032, y-175, 'platD')
          L2.setScale(.5)
          D2.setScale(.5)
          L1.setScale(.5)
          D1.setScale(.5)
          tiles.push(L1)
          tiles.push(D1)
        }
        else{
          const L1 =  platforms.create(246, y-175, 'platL')
          const D1 =  platforms.create(300, y-175, 'platD')
          L1.setScale(.5)
          D1.setScale(.5)
          const L2 =  platforms.create(968, y-175, 'platL')
          const D2 =  platforms.create(1032, y-175, 'platD')
          L2.setScale(.5)
          D2.setScale(.5)
          tiles.push(L2)
          tiles.push(D2)
        }}
        else{
          const L1 =  platforms.create(246, y-175, 'platL')
          const D1 =  platforms.create(300, y-175, 'platD')
          L1.setScale(.5)
          D1.setScale(.5)
          tiles.push(L1)
          tiles.push(D1)
          const L2 =  platforms.create(968, y-175, 'platL')
          const D2 =  platforms.create(1032, y-175, 'platD')
          L2.setScale(.5)
          D2.setScale(.5)
          tiles.push(L2)
          tiles.push(D2)
        }
        pogoj += 1
      
        }
  
    const L =  platforms.create(570, visina -3900, 'platL')
    const D =  platforms.create(634, visina -3900, 'platD')
    L.setScale(.5)
    D.setScale(.5)
    tiles.push(L)
    tiles.push(D)


    var goba  = this.physics.add.sprite(600,0, "goba")
    this.physics.add.collider(goba, tiles)
    this.physics.add.collider(gameState.junak, tiles)
    var kristal  = this.add.image(150,visina -1865, "kristal")
    var snezak  = this.physics.add.sprite(dolzina-500,visina-200, "snezak")
    snezak.setScale(.8)
    this.physics.add.collider(snezak, tiles)
    var kamen  = this.add.image(dolzina-400,visina-1865, "kamensneg")

    this.timer = this.add.text(dolzina-120,gameState.y -800, "", {  fontFamily: 'CustomFont', fontSize: 36, color: '#000000' })
    this.countdown = new CountdownController(this, this.timer)
    this.countdown.start(this.konec.bind(this))

    this.physics.add.overlap(gameState.junak, goba, () => {
        this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });   
        this.titleMusic.play();    
       
      this.physics.pause();
      gameState.active = false;
      
        this.scene.stop('E12_swampSkakanje')
        this.scene.start('E12_goraKonec')
      
      })

  }
  konec(){
    this.scene.stop('E12_swampSkakanje')
    this.scene.start('E12_SWAMP_PORAZ')
}
  update(){
    super.update("basic")
    this.countdown.update()
    this.timer.y = gameState.junak.y - 350
    if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
        gameState.junak.anims.play('stoji', true);
        gameState.junak.setVelocityY(-790);}
  }
  }
class CountdownController
  {
      /** @type {Phaser.Scene} */
      scene
  
      /** @type {Phaser.GameObjects.Text} */
      label
  
      /** @type {Phaser.Time.TimerEvent} */
      timerEvent
  
      duration = 0
  
      /**
       * 
       * @param {Phaser.Scene} scene 
       * @param {Phaser.GameObjects.Text} label 
       */
      constructor(scene, label)
      {
          this.scene = scene
          this.label = label
      }
  
      /**
       * @param {() => void} callback
       * @param {number} duration 
       */
      start(callback, duration = 65000)
      {
          this.stop()
  
          this.finishedCallback = callback
          this.duration = duration
  
          this.timerEvent = this.scene.time.addEvent({
              delay: duration,
              callback: () => {
                  this.label.text = '0'
  
                  this.stop()
                  
                  if (callback)
                  {
                    callback()
                        
                  }
              }
          })
      }
  
      stop()
      {
          if (this.timerEvent)
          {
              this.timerEvent.destroy()
              this.timerEvent = undefined
          }
      }
  
      update()
      {
          if (!this.timerEvent || this.duration <= 0)
          {
              return
          }
  
          const elapsed = this.timerEvent.getElapsed()
          const remaining = this.duration - elapsed
          const seconds = remaining / 1000

          this.label.text = seconds.toFixed(2)
      }
  }