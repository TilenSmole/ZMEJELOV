class M4_deathScreen extends Phaser.Scene {
    constructor() {
          super({
            key: 'M4_deathScreen',
          });}
create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    if (usa == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px', fill: "#E950F4" });
    }
    else if (rus == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'нажми ПРОБЕЛ, чтобы продолжaть', { fontSize: '40px', fill: "#E950F4" });
    }
    else{
        this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px', fill: "#E950F4" })
    }

   






    if(deathVarient == "bird"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Joj te ptice, a res ne znajo nič paziti!',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}

            }
    else if(deathVarient == "sky"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Kdor visoka leta, nizko pade. Glej malo pod noge',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}


                      
    }
    else if(deathVarient == "spaceship"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Ko se prečka cesto, se pogleda??? Odgovor je levo, desno levo. Za v prihodnje ;)',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}


                      
    }
    else if(deathVarient == "qucikSpaceship"){
        if(!quickDeath ){
            this.showPopupAchievements("  UMRI ZARADI VESOLJSKE LADJE")

            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
            this.titleMusic.play(); 
            quickDeath = true;
            this.updateAchievements();
            const dataAchievements = {
            achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)}
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Vrommmmmmmmmmmmmmmmmmmmmm  😇',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}

         
                      
    }
    else if(deathVarient == "reaper"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Chop, chop pa si postal njegovo kosilo',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}

               

                      
    }
    else if(deathVarient == "greediness"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Ta nivo bi bil prelahek, če bi se lahko samo spustil v nižino,\n ali če citiram zakone fizike "skozi zemljino orbito ne moraš pasti brez fatalnih poškdodb"',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}


                      
    }
    


    this.input.keyboard.on('keyup-SPACE', () => {
        this.scene.stop('S4_deathScreen')
        this.scene.start("S4_gamePlayStart")
          });




    
    
      
  
  
      
    }
  }

