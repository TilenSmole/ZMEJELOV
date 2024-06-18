class vrsta extends Phaser.Scene {
    constructor() {
        super({
            key: 'vrsta',
        });
    }
    preload() {
        this.load.json('textSlo', 'translations/translationsSLO_js.json');
        this.load.json('textEn', 'translations/translationsEN_js.json');
    }

    loadText(text_to_translate) {
        if (language === "en") {
                        return this.cache.json.get('textEn')["en"][text_to_translate];

        } else {
                        return this.cache.json.get('textSlo')["slo"][text_to_translate];

        }
    }
    enemyDeath() {
        var num = Math.round(Math.random() * 7)
        console.log("num"+ num);
        var death_message = ""
        switch (num) {
            case 0:
                death_message = this.loadText("enemy_death_n0");
                break;
            case 1:
                death_message = this.loadText("enemy_death_n1");
                break;
            case 2:
                death_message = this.loadText("enemy_death_n2");
                break;
            case 3:
                death_message = this.loadText("enemy_death_n3");
                break;
            case 4:
                death_message = this.loadText("enemy_death_n4");
                break;
            case 5:
                death_message = this.loadText("enemy_death_n5");
                break;
            case 6:
                death_message = this.loadText("enemy_death_n6");
                break;
            case 7:
                death_message = this.loadText("enemy_death_n7");
                break;
        }
        console.log("death_message" + death_message );

        return death_message

    }


    create() {
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        pogoj = true
        const xKordinata = (Math.random() * 490)
        const yKordinata = (Math.random() * 280)

        this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });
        console.log(vrstaTeksta+ "vrstaTeksta");
        if (vrstaTeksta === "sovraznik" || vrstaTeksta === "sovraznik5" || vrstaTeksta === "level4smrt" || vrstaTeksta === "level6Znak" ||
            vrstaTeksta == "level6Vojak" || vrstaTeksta == "level6Brsljan" || vrstaTeksta == "level6Kip" || vrstaTeksta == "level6Znak2") {

            var text = ""

            if (vrstaTeksta == "sovraznik" || vrstaTeksta === "sovraznik5") {
                this.add.text(10, GAME_HEIGHT - 400, this.enemyDeath(), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else if (vrstaTeksta == "level4smrt") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("level4smrt"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });

            }
            else if (vrstaTeksta == "level4smrt") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("leve6smrt"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else if (vrstaTeksta == "level6Vojak") {
                this.add.text(10 - 200, GAME_HEIGHT - 300, 'hihihi🙈🙊', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
                if (stSmrtiPrVojski > 5) {
                    this.add.text(10, GAME_HEIGHT - 400, this.loadText("soldier_hint"), {
                        fontSize: '40px',
                        fill: '#A996BC',
                        fontFamily: 'CustomFont',
                        wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                    });
                }
            }
            else if (vrstaTeksta == "level4smrt") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("level4smrt"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else if (vrstaTeksta == "level6Znak") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("leve6smrt"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else if (vrstaTeksta == "level6Kip") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("level6Kip"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else if (vrstaTeksta == "level6Znak2") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("evil_sign"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else if (vrstaTeksta == "level6Brsljan") {
                this.add.text(10, GAME_HEIGHT - 400, this.loadText("level6Brsljan"), {
                    fontSize: '40px',
                    fill: '#A996BC',
                    fontFamily: 'CustomFont',
                    wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
                });
            }
            else{
                this.add.text(10 , GAME_HEIGHT - 300, this.enemyDeath(), { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });

            }




            vrsta_smrt = false
            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                });
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start(trenutnaScena)
                });
            }
        }


        else if (vrstaTeksta == "padec") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("cloud_death"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });

            vrsta_smrt = false

            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                console.log('stSmrti'+ stSmrti);

                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                });
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start(trenutnaScena)
                });
            }
        }
        else if (vrstaTeksta == "A8_udar") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("death_ocean"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });

            vrsta_smrt = false
            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                console.log('stSmrti'+ stSmrti);

                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                });
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start(trenutnaScena)
                });
            }


        }
        else if (vrstaTeksta == "A8_udarHuman") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("death_ocean2"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });

            vrsta_smrt = false
            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                this.input.keyboard.on('keyup-SPACE', () => {
                    console.log('stSmrti'+ stSmrti);

                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                });
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start(trenutnaScena)
                });
            }

        }
        else if (vrstaTeksta == "level6Brsljan") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("death_ocean2"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });



            vrsta_smrt = false
            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                this.input.keyboard.on('keyup-SPACE', () => {
                    console.log('stSmrti'+ stSmrti);

                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                });
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start(trenutnaScena)
                });


            }

        }
        else if (vrstaTeksta == "swamp") {
            const number = Math.floor(Math.random() * 1);
            const textToShow = number === 0 ? this.loadText("swamp") : this.loadText("swamp2");

            this.add.text(10, GAME_HEIGHT - 400, textToShow, {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });



            vrsta_smrt = false
            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                trenutnaScena = "E1_swamp"
                this.input.keyboard.on('keyup-SPACE', () => {
                    console.log('stSmrti'+ stSmrti);

                    this.scene.stop('E1_swamp')
                    this.scene.start('smrt')
                })
            }
            else {
                if (vrniNaPogoj == true) {
                    this.scene.stop('vrsta')
                    this.scene.start('E1_swamp')
                }
                else {
                    this.input.keyboard.on('keyup-SPACE', () => {
                        this.scene.stop('E1_swamp')
                        this.scene.start('E0_mesto')
                    })
                }
            }

        }
        else if (vrstaTeksta == "bar") {

            this.add.text(10, GAME_HEIGHT - 400, this.loadText("bar"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });




            vrsta_smrt = false
            if (stSmrti % pogojSmrtLevel == 0 && stSmrti != 0) {
                console.log('stSmrti'+ stSmrti);
                trenutnaScena = "E1_swamp"
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                })
            }
            else {
                if (vrniNaPogoj == true) {
                    this.scene.stop('vrsta')
                    this.scene.start('E0_barUvod')
                }
                else {
                    this.input.keyboard.on('keyup-SPACE', () => {
                        this.scene.stop('vrsta')
                        this.scene.start('E0_mesto')
                    })
                }

            }

        }

        else if (vrstaTeksta == "level_1_konec") {
            vrstaTeksta = ""
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_1_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });



            if (vrniNaPogoj) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A2_scena2')
                });
            }
        }
        else if (vrstaTeksta == "level_2_konec") {
            vrstaTeksta = ""
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_2_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });


            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A3_scena3')
                });
            }
        }
        else if (vrstaTeksta == "level_3_konec") {

            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_3_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });


            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A4_scena4')
                });
            }
        }
        else if (vrstaTeksta == "level_4_konec") {
            vrstaTeksta = ""

            var text = this.loadText("level_4_konec")

            if (zaprto == false && easy == false) {
                text = text + " " + this.loadText("secret_level_missed")
            }

            this.add.text(10, GAME_HEIGHT - 400, text, {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });




            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A5_scena5')
                });
            }
        }
        else if (vrstaTeksta == "level_5_konec") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_5_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });


            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('E0_uvod')
                });
            }
        }
        else if (vrstaTeksta == "level_6_konec") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_6_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });



            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A7_droperUvod')
                });
            }
        }
        else if (vrstaTeksta == "level_7_konecTroll") {


            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_7_konecTroll"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });



            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A7_droper')
                });
            }
        }
        else if (vrstaTeksta == "level_7_konec") {

            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_7_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });

            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')

            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('A8_plavanje')
                });
            }
        }
        else if (vrstaTeksta == "level_8_konec") {
            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
            else {
                this.scene.stop('vrsta')
                this.scene.start('A9_skrinja_uvod')
            }
        }
        else if (vrstaTeksta == "level_9_konec") {
            this.add.text(10, GAME_HEIGHT - 400, this.loadText("level_9_konec"), {
                fontSize: '40px',
                fill: '#A996BC',
                fontFamily: 'CustomFont',
                wordWrap: { width: GAME_WIDTH - 10, useAdvancedWrap: true }
            });

            if (vrniNaPogoj == true) {
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')

            }
            else {
                this.scene.stop('vrsta')
                this.scene.start('A10_outro')
            }

        }
        else {
            this.add.text(10, GAME_HEIGHT - 300, 'ERROR' + vrstaTeksta, { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });
        }













    }



}

