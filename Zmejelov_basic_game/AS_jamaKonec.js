class AS_jamaKonec extends A0_osnova {
  constructor() {
    super("AS_jamaKonec")
  }

  preload() {

    this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);

  }




  create() {
    const xKordinata = (Math.random() * 490)
    const yKordinata = (Math.random() * 350)

    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });
    if (zmaga == true) {
      this.add.text(100, GAME_HEIGHT - 200, this.loadText("cave_win"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
      });

      if (!secret) {
        this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
        this.titleMusic.play();
        secret = true;
        this.updateAchievements();
        const dataAchievements = {
          achievements: achievements,
        };
        this.updateDataBaseAchivements(dataAchievements)
      }


    }
    else {
      this.add.text(100, GAME_HEIGHT - 200, this.loadText("cave_loose"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
      })
    }

 





    if (vrniNaPogoj == true) {
      this.input.keyboard.on('keyup-SPACE', () => {
        this.scene.stop('AS_jamaKonec')
        this.scene.start('A0_vsi_nivoji')
      });
    }
    else {
      this.input.keyboard.on('keyup-SPACE', () => {
        this.scene.stop('AS_jamaKonec')
        this.scene.start('A4_scena4')
      });
    }

  }

}