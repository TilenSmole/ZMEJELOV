class M5_konec extends M0_shared {
    constructor() {
        super("M5_konec")
    }
    showPopupAchievements = (text, onFinish) => {
        const rectangle = this.add.rectangle(GAME_WIDTH - 300, 0, 700, 100, 0XFFFFFF);
        rectangle.setOrigin(0.5, 0);

        const graphics = this.add.graphics();
        graphics.fillStyle(0xffffff, 1);
        graphics.fillRect(rectangle.x - rectangle.width / 2, rectangle.y, rectangle.width, rectangle.height);

        const popup = this.add.text(GAME_WIDTH - 300, 40, text, {
            fontSize: '32px',
            color: '#000000',
            align: 'center',
            wordWrap: { width: rectangle.width - 20, useAdvancedWrap: true }
        });
        popup.setOrigin(0.5);

        this.time.delayedCall(4000, () => {
            popup.destroy();
            rectangle.destroy();
            graphics.destroy();

            // Call the onFinish function once the popup is closed
            if (onFinish) {
                onFinish();
            }
        });
    };
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.video('videokonec', 'assets/uvod/zmeja konec.mp4');
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');

    } loadText(text_to_translate) {

        if (language === "en") {
            return this.cache.json.get('textEn')["en"][text_to_translate];

        } else {
            return this.cache.json.get('textSlo')["slo"][text_to_translate];

        }
    }
    create() {


        //this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
        var x = 150
        var y = 125
        var font = "80px"
        this.add.text(x, y, 'Z', { fontSize: font, fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 60, 'M', { fontSize: font, fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 120, 'E', { fontSize: font, fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 180, 'J', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 240, 'E', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 300, 'L', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 360, 'O', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.add.text(x, y + 420, 'V', { fontSize: '80px', fill: '#E950F4', fontFamily: 'CustomFont' })



        this.add.text(300, 440, this.loadText("the_final_rage_end"), {
            fontSize: '45px',
            fill: '#A996BC',
            fontFamily: 'CustomFont',
            wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
        });






        if (!saveResOnce) {
            const data = {
                type: 5,
                score: score
            };

            this.updateDataBase(data)
                .then(response => {
                    console.log("progress saved!     " + response);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        const showPopupAchievements = (text) => {
            const rectangle = this.add.rectangle(GAME_WIDTH - 300, 0, 700, 100, 0XFFFFFF);
            rectangle.setOrigin(0.5, 0);

            const graphics = this.add.graphics();
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(rectangle.x - rectangle.width / 2, rectangle.y, rectangle.width, rectangle.height);

            const popup = this.add.text(GAME_WIDTH - 300, 40, text, {
                fontSize: '32px',
                color: '#980a69',
                align: 'center',
                wordWrap: { width: rectangle.width - 20, useAdvancedWrap: true }
            });
            popup.setOrigin(0.5);

            this.time.delayedCall(4000, () => {
                popup.destroy();
                rectangle.destroy();
                graphics.destroy();
            });
        };

        if (rainbowUnlocked && !rainbow) {
            showPopupAchievements(this.loadText("rainbow"))
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            rainbow = true;
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
        }


        if (canShowAnAchivement && !noPops) {
            showPopupAchievements(this.loadText("no_pups"))
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            noPops = true
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
            canShowAnAchivement = false
        }


        if (coinsNewGame) {
            const money = {
                money: userCoins + coinsNewGame,
            };
            this.updateMoney(money);
            saveResOnce = true
            coinsNewGame = 0;

        }


    }



}