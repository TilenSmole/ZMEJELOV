class S5_konec extends S0_shared {
	constructor(){
        super("S5_konec")
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.video('videokonec', 'assets/uvod/zmeja konec.mp4');
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3',"assets/uvod/easterEgg(1).ogg"]);

	   }
 create() {



	//this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    var x = 150
    var y = 125
    var font = "80px"
    this.add.text(x, y, 'Z', { fontSize:  font,fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y + 60, 'M',{ fontSize: font,fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y+120, 'E',{ fontSize: font,fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y+180, 'J',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y+240, 'E',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y+300, 'L',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y+360, 'O',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    this.add.text(x, y+420, 'V',{ fontSize: '80px',fill: '#A996BC',  fontFamily: 'CustomFont' })


    this.zacetek = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.zacetek.setScale(0.8)
    if (usa == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'NEXT',{ fontSize: '40px',fill: '#E950F4',  fontFamily: 'CustomFont' });}
    else if (rus == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'СЛЕДУЮЩИЙ',{ fontSize: '20px',fill: '#E950F4',  fontFamily: 'CustomFont' });}
    else{
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'NAPREJ',{ fontSize: '40px',fill: '#E950F4',  fontFamily: 'CustomFont' });}

        


   
    if(stSmrti > 20 && !dieALot ){
        this.showPopupAchievements("  UMRI veliko")

			this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
			this.titleMusic.play(); 
			dieALot = true;
		    this.updateAchievements();
		    const dataAchievements = {
			achievements: achievements,
			};
		  this.updateDataBaseAchivements(dataAchievements)
		  
	}

    if(finalTime >60 && !completedSpeedy ){
        this.showPopupAchievements("  dokoncaj")

        this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        completedSpeedy = true;
        this.updateAchievements();
        const dataAchievements = {
        achievements: achievements,
        };
      this.updateDataBaseAchivements(dataAchievements)
      
    }


    if(!completedGame ){
        this.showPopupAchievements("  DOKONCAJ IGRO")
        this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        completedGame = true;
        this.updateAchievements();
        const dataAchievements = {
        achievements: achievements,
        };
    this.updateDataBaseAchivements(dataAchievements)
    
    }

    if(deathByWho = [1,1,1,1,1]  && !dieDiverse){
        this.showPopupAchievements("  UMRI ZARADI VSEGA")

        this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        dieDiverse = true;  
        this.updateAchievements();
        const dataAchievements = {
        achievements: achievements,
        };
      this.updateDataBaseAchivements(dataAchievements)
      
    }




    this.zacetek.on('pointerup', () => {
        
        this.scene.stop('A0_intro')
        this.scene.start('A10_konec')
        })
     
    


  
    
   


	


    


  


    
  }
}