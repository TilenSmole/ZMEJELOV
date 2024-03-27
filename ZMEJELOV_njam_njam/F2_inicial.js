class F2_inicial extends F0_shared {
    constructor() {
        super("F2_inicial")
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.image("zmentures", "assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png")
        this.load.image("rage", "assets/uvod/rage.png")
        this.load.image("basic", "assets/uvod/basic.png")
        this.load.image("usa", "assets/uvod/United_States.jpg")
        this.load.image("rus", "assets/uvod/Russia.jpg")
        this.load.image("slo", "assets/uvod/Slovenia.jpg")
        this.load.image("gumb2", "assets/uvod/gumbVeliki.png")
        this.load.image("mute", "assets/uvod/mute.png")
        this.load.image("unmute", "assets/uvod/umute.png")
    }
    create() {
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        var verzija = Math.floor(Math.random() * 3)


        if (verzija == 0) {

            var zmentures = this.add.image(GAME_WIDTH / 2, 150, "zmentures");
            zmentures.setScale(.5)
        }
        else if (verzija == 1) {
            var rage = this.add.image(GAME_WIDTH / 2, 150, "rage");
            rage.setScale(.5)
        }
        else if (verzija == 2) {
            var basic = this.add.image(GAME_WIDTH / 2, 150, "basic");
            basic.setScale(.5)
        }

        typeOfBcIndex = 0
        speedOfDrops = 300

        //zvok
        if (!isMute) {
            this.unmute = this.add.sprite(GAME_WIDTH - 40, GAME_HEIGHT - 30, "unmute").setInteractive();;
            this.unmute.setScale(.5)
            if (muska == 1) {
                this.titleMusic = this.sound.add('glavna', { volume: 0.1, loop: true });
                this.titleMusic.play();
                muska = 2
            }



            this.unmute.on('pointerup', () => {
                isMute = true
                this.scene.restart()
            })

        }
        else if (isMute) {
            muska = 1
            this.mute = this.add.sprite(GAME_WIDTH - 40, GAME_HEIGHT - 30, "mute").setInteractive();;
            this.mute.setScale(.5)
            this.titleMusic.stop()
            this.mute.on('pointerup', () => {
                isMute = false
                this.scene.restart()
            })
        }







        var odmik = 2

        var pozicija1 = 400
        var razmikMedBloki = 150

        this.igra = this.add.sprite(GAME_WIDTH / odmik, pozicija1, 'gumb2').setInteractive();





        if (usa == true) {
            this.add.text(GAME_WIDTH / 2 - 50, pozicija1 - 250, 'PLAY', { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });

        }
        else if (rus == true) {
            this.add.text(GAME_WIDTH / 2 - 50, pozicija1 - 20, 'ИГРАЙ', { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });

        }
        else {
            this.add.text(GAME_WIDTH / 2 - 50, pozicija1 - 20, 'IGRAJ', { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });

        }







        this.igra.setScale(1)


        this.igra.on('pointerup', () => {
            /*  var achievementsSplit = achievements;
              const prevCompletedSpeedy = achievementsSplit.substring(6, 7); 
              const prevCompletedGame = achievementsSplit.substring(7, 8); 
              const prevDieDiverse = achievementsSplit.substring(8, 9);
              const prevStars = achievementsSplit.substring(9, 10);
              const prevDieALot = achievementsSplit.substring(10,11);
              const prevQuickDeath = achievementsSplit.substring(11, 12);
  
              console.log(achievements)
              console.log(prevStars)
              console.log(prevDieALot)    
  
              if(prevCompletedSpeedy == "1")
                  eascompletedSpeedyy = true;
                  
              if(prevCompletedGame == "1")
                  completedGame     = true;
             
              if(prevDieDiverse == "1")
                  dieDiverse = true;
                  
              if(prevStars == "1")
                  stars  = true;
             
              if(prevDieALot == "1")
                   dieALot  = true;
  
              if(prevQuickDeath == "1")
                   quickDeath  = true;
  
              console.log(stars)*/



            // Trigger the pop-up when clicking on a button or performing any action


            stopWatchStart()
            this.scene.stop('F2_inicial ')
            this.scene.start('F4_gamePlayStart')
        })











        var razmak = 50
        var y = GAME_HEIGHT - 20
        this.slo = this.add.sprite(25 + razmak + razmak, y, 'slo').setInteractive();
        this.slo.setScale(.5)
        this.slo.on('pointerup', () => {
            slo = true
            rus = false
            usa = false
            this.scene.restart();
        })

        this.usa = this.add.sprite(20 + razmak, y, 'usa').setInteractive();
        this.usa.setScale(.5)
        this.usa.on('pointerup', () => {
            slo = false
            rus = false
            usa = true
            this.scene.restart();
        })

        this.rus = this.add.sprite(20, y, 'rus').setInteractive();
        this.rus.setScale(.45)
        this.rus.on('pointerup', () => {
            slo = false
            rus = true
            usa = false
            this.scene.restart();

        })






    }
}