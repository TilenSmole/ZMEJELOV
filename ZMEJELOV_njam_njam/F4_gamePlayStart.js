var visina = 800
var dolzina = 1300
var food = [];
var destoyers = [];
var allPlatforms = []
class F4_gamePlayStart extends F0_shared {
    constructor() {
        super("F4_gamePlayStart")
    }
    preload() {
      super.preload()
      for (let i = 1; i <= 7; i++) {
        this.load.image("b" + i, "assets/a_njam_njam/background/"+i+".png");
        }

      this.load.image("platform2","assets/a_speedRunning/platforms/Pad_04_1.png")

      for (let i = 1; i <= 101; i++) {
        this.load.image("f" + i, "assets/a_njam_njam/foods/1 (" + i + ").png");
        }
      for (let i = 1; i <= 10; i++) {
            this.load.image("s" + i, "assets/a_njam_njam/bad/s"+i+".png");
        }

      
    }
  create(){
    super.create();
    
    gameState.bg = this.add.image(GAME_WIDTH /2, GAME_HEIGHT /2, 'b2');  
	gameState.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)

    this.cameras.main.setBounds(0,0,dolzina,visina)
	this.physics.world.setBounds(0,0,dolzina,visina)

   

    gameState.junak  = this.physics.add.sprite(200,    visina-400, "Zmeja") //ZAMENJI DODAJ STORYLINEE
    gameState.junak.setScale(.6)// pomanjsa
    gameState.junak.setDepth(0)
   
    
   
    const platforms = this.physics.add.staticGroup();

    var razmik = 0
    for(var i = 0; i < 10; i++){
        var startPlatfrom = platforms.create( 200+razmik, visina +100,     "platform2");
        allPlatforms.push(startPlatfrom);
        razmik += 400
    }

    gameState.spawnEvent = this.time.addEvent({
        delay: delayTimer,
        callback: spawn,
        callbackScope: this,
        loop: true
    });    

   
    gameState.text = this.add.text(GAME_WIDTH-150, 0, 'Score: ',{ fontSize: '30px',fill: '#E950F4',  fontFamily: 'CustomFont' });
    gameState.text.setDepth(0)


  
  this.physics.add.collider(gameState.junak, allPlatforms)
  gameState.junak.setCollideWorldBounds(true) //ne more vn past
        
    this.physics.add.overlap(gameState.junak, food, (user, OnePiecefood) => {
        OnePiecefood.destroy()
        score += 10
    })
  
    this.physics.add.overlap(gameState.junak, destoyers, (user, destoyer) => {
       // this.scene.restart()
    })
  }
  
  update(){
    gameState.text.setText('Score: ' + score);
    gameState.spawnEvent.delay = delayTimer;
   

    super.update("basic")  
  }

  activateSpawn(){
    var randomPosX = Math.round(Math.random()*GAME_WIDTH)
    var randomPosY = Math.round(Math.random()*450)
    var randomEle  = Math.round(Math.random())

  

    if(randomEle == 0){
        var foodNum = Math.floor(Math.random() * 100)+1;
        var pieceOfFood = this.physics.add.sprite(randomPosX, 0-randomPosY, "f"+foodNum)
        pieceOfFood.setVelocityY(speedOfDrops);
        pieceOfFood.setScale(2.5)
        food.push(pieceOfFood)
    }
    else {
        var destoyerNum = Math.floor(Math.random() * 10)+1;
        var destoyer = this.physics.add.sprite(randomPosX, 0-randomPosY, "s"+destoyerNum)
        destoyer.setVelocityY(200);
        destoyer.setScale(2.5)
        destoyers.push(destoyer)
    }
    
}
changeBc(){
    gameState.bg.setTexture('b'+typeOfBc[typeOfBcIndex%7]);; 
    typeOfBcIndex++
    speedOfDrops += 40
}


}
  
 


function spawn(){
    timer = this.getTimePassed()
    if (timer < 5) {
        for(var i = 0; i < 1; i++){
            this.activateSpawn()
        }
        gameState.bg.setTexture('b2');; 

    }
    else if(timer > 5 && timer < 15){
        
        for(var i = 0; i < 2; i++){
            this.activateSpawn()}
        gameState.bg.setTexture('b3');; 
        speedOfDrops = 400
    }
    else if(timer > 15 && timer < 30){
        for(var i = 0; i < 4; i++){
            this.activateSpawn()}
        gameState.bg.setTexture('b4');; 
        speedOfDrops = 420
    }
    else if(timer > 30 && timer < 60){
        for(var i = 0; i < 4; i++){
            this.activateSpawn()}
        gameState.bg.setTexture('b5');; 
        speedOfDrops = 450
    }
    else if(timer > 60 && timer < 75){
        for(var i = 0; i < 5; i++){
            this.activateSpawn()}
        gameState.bg.setTexture('b6');; 
        speedOfDrops = 500
    }
    else if(timer > 75 && timer < 100){
        for(var i = 0; i < 6; i++){
            this.activateSpawn()}
        gameState.bg.setTexture('b7');;
        speedOfDrops = 520 
    }
    else if(timer > 100){
        for(var i = 0; i < 7; i++){
            this.activateSpawn()}
        if(timer % 30 == 0)
            this.changeBc()
        
    }
    
   
}




  

