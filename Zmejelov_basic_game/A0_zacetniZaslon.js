class A0_zacetniZaslon extends Phaser.Scene {
    constructor() {
        super({ key: 'A0_zacetniZaslon' });
    }
    preload() {
        this.load.audio('glavna', ['/assets/uvod/glavna.mp3', "/assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "/assets/uvod/gumb.png")
        this.load.image("zmeja", "/assets/uvod/zmeja.png")
        this.load.image("zmentures", "/assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png")
        this.load.image("rage", "/assets/uvod/rage.png")
        this.load.image("basic", "/assets/uvod/basic.png")
        this.load.image("gumb2", "/assets/uvod/gumbVeliki.png")
        this.load.image("mute", "/assets/uvod/mute.png")
        this.load.image("unmute", "/assets/uvod/umute.png")
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');
    }

    loadText(text_to_translate) {
        console.log("Klicem")
        console.log(text_to_translate)
        console.log(this.cache.json.get('textEn'))



        if (language === "en") {
            return this.cache.json.get('textEn')["en"][text_to_translate];
        } else {
            return this.cache.json.get('textSlo')["slo"][text_to_translate];
        }
    }

    create() {





        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");
        var verzija = Math.floor(Math.random() * 3)


        if (verzija == 0) {
            var zmentures = this.add.image(GAME_WIDTH / 2, 200, "zmentures");
            zmentures.setScale(.7)
        }
        else if (verzija == 1) {
            var rage = this.add.image(GAME_WIDTH / 2, 200, "rage");
            rage.setScale(.7)
        }
        else if (verzija == 2) {
            var basic = this.add.image(GAME_WIDTH / 2, 200, "basic");
            basic.setScale(.7)
        }



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

        zaprto = false
        vrniNaPogoj = false
        stSmrti = 0
        checkpoint = false
        pogoj = true
        spawnP = false  //pogoj za spown point A8_plavanje 
        spawn6 = false  //pogoj za spown point lvl6 
        cheatZaHard = 1 //hard level, če opravi težk nivo dobi en spawn point 1 brez aka default, 0 ali 2  nastavljen
        enkratt = 1 //ce je 1 je default, pomeni pa da odklenemo 2 easter egg na 4 nivoju
        mestoGameMode = false
        mestoOpravljeno = false
        easy = true
        stSmrti = 0
        stZivljenj = 0
        zmaga = false
        poker = false
        bar = false
        pokerZmaga = false
        E_iger = 0 //st iger v expansion packu ki jih je igralec opravil
        var odmik = 2
        var pozicija1 = 550




        this.igra = this.add.sprite(GAME_WIDTH / odmik, pozicija1, 'gumb2').setInteractive();
        this.add.text(GAME_WIDTH / 2 - 50, pozicija1 - 20, this.loadText("play"), { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });

        

        this.igra.setScale(1)
        console.log(lastLevel)
        if (lastLevel != 0) {
            this.igra.on('pointerup', () => {
                this.scene.stop('A0_zacetniZaslon ')
                this.scene.start('A0_loadSave')
            })

        } else {
            this.igra.on('pointerup', () => {
                this.scene.stop('A0_zacetniZaslon ')
                this.scene.start('A0_tezavnost')
            })
        }

        //NAREDIMO, DA IGRALEC NE DOBI PONOVNO OBVESTIL O DOSEZENIH ACHIVEMENTIH
        const achHardMode = achievements.substring(0, 1);
        const achSecret = achievements.substring(1, 2);
        const achDeaths = achievements.substring(2, 3);
        const achEasyMode = achievements.substring(3, 4);
        const achCity = achievements.substring(4, 5);
        const achRuins = achievements.substring(5, 6);
        

        /*const secretLevelCompletedPrevious = achievements.substring(1, 2); 
        const checkPoints = achievements.substring(2, 3);*/

        if (achRuins == 1)
            ruins = true;
        if (achDeaths == 1)
            deaths = true;
        if (achSecret == 1)
            secret = true;
        if (achCity == 1)
            city = true;
        if (achHardMode == 1)
            hardMode = true;
        if (achEasyMode == 1)
            easyMode = true;
    }

  


  

}