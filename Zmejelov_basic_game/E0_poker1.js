class E0_poker1 extends Phaser.Scene {
    constructor() {
        super({ key: 'E0_poker1' });
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.video('video2', 'assets/uvod/zmeja konec.mp4');
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("L3", "assets/uvod/nivoji/L3.png")
        this.load.image("d2", "assets/mesto/poker/d2.png")
        this.load.image("d3", "assets/mesto/poker/d3.png")
        this.load.image("d4", "assets/mesto/poker/d4.png")
        this.load.image("d5", "assets/mesto/poker/d5.png")
        this.load.image("d6", "assets/mesto/poker/d6.png")
        this.load.image("d7", "assets/mesto/poker/d7.png")
        this.load.image("d8", "assets/mesto/poker/d8.png")
        this.load.image("d9", "assets/mesto/poker/d9.png")
        this.load.image("d10", "assets/mesto/poker/d10.png")
        this.load.image("d11", "assets/mesto/poker/d11.png")
        this.load.image("d12", "assets/mesto/poker/d12.png")
        this.load.image("d13", "assets/mesto/poker/d13.png")
        this.load.image("d14", "assets/mesto/poker/d14.png")
        this.load.image("k2", "assets/mesto/poker/k2.png")
        this.load.image("k3", "assets/mesto/poker/k3.png")
        this.load.image("k4", "assets/mesto/poker/k4.png")
        this.load.image("k5", "assets/mesto/poker/k5.png")
        this.load.image("k6", "assets/mesto/poker/k6.png")
        this.load.image("k7", "assets/mesto/poker/k7.png")
        this.load.image("k8", "assets/mesto/poker/k8.png")
        this.load.image("k9", "assets/mesto/poker/k9.png")
        this.load.image("k10", "assets/mesto/poker/k10.png")
        this.load.image("k11", "assets/mesto/poker/k11.png")
        this.load.image("k12", "assets/mesto/poker/k12.png")
        this.load.image("k13", "assets/mesto/poker/k13.png")
        this.load.image("k14", "assets/mesto/poker/k14.png")
        this.load.image("s2", "assets/mesto/poker/s2.png")
        this.load.image("s3", "assets/mesto/poker/s3.png")
        this.load.image("s4", "assets/mesto/poker/s4.png")
        this.load.image("s5", "assets/mesto/poker/s5.png")
        this.load.image("s6", "assets/mesto/poker/s6.png")
        this.load.image("s7", "assets/mesto/poker/s7.png")
        this.load.image("s8", "assets/mesto/poker/s8.png")
        this.load.image("s9", "assets/mesto/poker/s9.png")
        this.load.image("s10", "assets/mesto/poker/s10.png")
        this.load.image("s11", "assets/mesto/poker/s11.png")
        this.load.image("s12", "assets/mesto/poker/s12.png")
        this.load.image("s13", "assets/mesto/poker/s13.png")
        this.load.image("s14", "assets/mesto/poker/s14.png")
        this.load.image("p2", "assets/mesto/poker/p2.png")
        this.load.image("p3", "assets/mesto/poker/p3.png")
        this.load.image("p4", "assets/mesto/poker/p4.png")
        this.load.image("p5", "assets/mesto/poker/p5.png")
        this.load.image("p6", "assets/mesto/poker/p6.png")
        this.load.image("p7", "assets/mesto/poker/p7.png")
        this.load.image("p8", "assets/mesto/poker/p8.png")
        this.load.image("p9", "assets/mesto/poker/p9.png")
        this.load.image("p10", "assets/mesto/poker/p10.png")
        this.load.image("p11", "assets/mesto/poker/p11.png")
        this.load.image("p12", "assets/mesto/poker/p12.png")
        this.load.image("p13", "assets/mesto/poker/p13.png")
        this.load.image("p14", "assets/mesto/poker/p14.png")

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
    create() {
        var detelje = [0, 1, "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "d14"]
        var kare = [0, 1, "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "k10", "k11", "k12", "k13", "k14"]
        var srca = [0, 1, "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14"]
        var pik = [0, 1, "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14"]
        var vsi = [detelje, kare, srca, pik]

        var levaKarta = this.add.image(GAME_WIDTH / 2 - 200, GAME_HEIGHT / 2, vsi[vrstaLeva][leva])
        levaKarta.setScale(.5)
        var desna = Math.floor(Math.random() * 13) + 2;
        var vrstaD = Math.floor(Math.random() * 4);
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");



        //this.add.text(GAME_WIDTH/2+400,GAME_HEIGHT-100, desna,{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });


        this.vecji = this.add.sprite(GAME_WIDTH / 2 + 200, GAME_HEIGHT - 480, 'gumb').setInteractive();
        this.add.text(GAME_WIDTH / 2 + 150, GAME_HEIGHT - 480, '^', { fontSize: '20px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.vecji.setScale(0.8)

        this.manjsi = this.add.sprite(GAME_WIDTH / 2 + 200, GAME_HEIGHT - 300, 'gumb').setInteractive();
        this.add.text(GAME_WIDTH / 2 + 150, GAME_HEIGHT - 300, 'ˇv', { fontSize: '20px', fill: '#E950F4', fontFamily: 'CustomFont' });
        this.manjsi.setScale(0.8)



        var x = GAME_WIDTH - 150
        var y = GAME_HEIGHT - 55
        var g1 = GAME_WIDTH - 100 //gumba
        var g2 = GAME_HEIGHT - 50

        if (leva == desna) {
            this.vecji.on('pointerup', () => {
                this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
                this.titleMusic.play();
                leva = desna
                vrstaLeva = vrstaD
                //this.add.text(GAME_WIDTH/2-100,GAME_HEIGHT/2-140, desna,{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
                var desnaKarta = this.add.image(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2, vsi[vrstaD][desna])
                desnaKarta.setScale(.5)
                this.next = this.add.sprite(g1, g2, 'gumb').setInteractive();
                this.next.setScale(0.8)
                this.add.text(x, y, this.loadText("next"), { fontSize: '20px', fill: '#B637BF' });

                this.next.on('pointerup', () => {
                    this.scene.stop('E0_poker1')
                    this.scene.start('E0_poker2')
                })

            })
            this.manjsi.on('pointerup', () => {
                this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
                this.titleMusic.play();
                leva = desna
                vrstaLeva = vrstaD
                //this.add.text(GAME_WIDTH/2-100,GAME_HEIGHT/2-140, desna,{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
                var desnaKarta = this.add.image(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2, vsi[vrstaD][desna])
                desnaKarta.setScale(.5)
                this.next = this.add.sprite(g1, g2, 'gumb').setInteractive();
                this.next.setScale(0.8)
                this.add.text(x,y, this.loadText("next"),{ fontSize: '20px', fill: '#B637BF' });

                this.next.on('pointerup', () => {
                    this.scene.stop('E0_poker1')
                    this.scene.start('E0_poker2')
                })
            })
        }
        else if (leva < desna) {
            this.vecji.on('pointerup', () => {
                this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
                this.titleMusic.play();
                leva = desna
                vrstaLeva = vrstaD
                //this.add.text(GAME_WIDTH/2-100,GAME_HEIGHT/2-140, desna,{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
                var desnaKarta = this.add.image(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2, vsi[vrstaD][desna])
                desnaKarta.setScale(.5)
                this.next = this.add.sprite(g1, g2, 'gumb').setInteractive();
                this.next.setScale(0.8)
                this.add.text(x,y, this.loadText("next"),{ fontSize: '20px', fill: '#B637BF' });

                this.next.on('pointerup', () => {
                    this.scene.stop('E0_poker1')
                    this.scene.start('E0_poker2')
                })

            })
            this.manjsi.on('pointerup', () => {
                this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
                this.titleMusic.play();
                var desnaKarta = this.add.image(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2, vsi[vrstaD][desna])
                desnaKarta.setScale(.5)
                this.domov = this.add.sprite(g1, g2, 'gumb').setInteractive();
                this.domov.setScale(0.8)
                this.add.text(x,y, this.loadText("to_town"),{ fontSize: '20px', fill: '#B637BF' });

                if (vrniNaPogoj == true) {
                    this.input.on('pointerup', () => {
                        this.scene.stop('E0_poker1')
                        this.scene.start('E0_poker')
                    });
                }
                else {
                    this.domov.on('pointerup', () => {
                        this.scene.stop('E0_poker1')
                        this.scene.start('E0_mesto')
                    })
                }
            })
        }
        else {
            this.vecji.on('pointerup', () => {
                this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });
                this.titleMusic.play();
                var desnaKarta = this.add.image(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2, vsi[vrstaD][desna])
                desnaKarta.setScale(.5)
                this.domov = this.add.sprite(g1, g2, 'gumb').setInteractive();
                this.domov.setScale(0.8)
                this.add.text(x,y, this.loadText("to_town"),{ fontSize: '20px', fill: '#B637BF' });

                if (vrniNaPogoj == true) {
                    this.input.on('pointerup', () => {
                        this.scene.stop('E0_poker1')
                        this.scene.start('E0_poker')
                    });
                }
                else {
                    this.domov.on('pointerup', () => {
                        this.scene.stop('E0_poker1')
                        this.scene.start('E0_mesto')
                    })
                }
            })

            this.manjsi.on('pointerup', () => {
                this.titleMusic = this.sound.add('zmaga', { volume: 0.1, loop: false });
                this.titleMusic.play();
                leva = desna
                vrstaLeva = vrstaD
                // this.add.text(GAME_WIDTH/2-100,GAME_HEIGHT/2-140, desna,{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
                var desnaKarta = this.add.image(GAME_WIDTH / 2 + 200, GAME_HEIGHT / 2, vsi[vrstaD][desna])
                desnaKarta.setScale(.5)
                this.next = this.add.sprite(g1, g2, 'gumb').setInteractive();
                this.next.setScale(0.8)
                this.add.text(x,y, this.loadText("next"),{ fontSize: '20px', fill: '#B637BF' });




                this.next.on('pointerup', () => {
                    this.scene.stop('E0_poker1')
                    this.scene.start('E0_poker2')
                })

            })









        }











    }
    update() {



    }




}