class smrt extends A0_osnova {
  constructor() {
    super("smrt")
  }
  preload() {
    this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);

  }
  create() {
    const xKordinata = (Math.random() * 490)
    const yKordinata = (Math.random() * 350)
    this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
    this.titleMusic.play();

    var angQuoti = ["Do one thing every day that scares you.", "Do one thing every\nday that scares you.", "One day or day one.\nYou decide.",
      "No one is to blame for your\nfuture situation but yourself", "If you want to besuccessful,\nthen become Successful.", "The hard days are what\nmake you stronger."]
    var stUSA = Math.floor(Math.random() * (angQuoti.length - 2));

    var sloQuoti = ["Zmaga nad samim seboj je največja zmaga.", "Šibki tekači čakajo na priložnost, močni jo ustvarijo.", "Naredi, kar zmoreš, s tistim, kar imaš, tam, kjer si.",
      "Volja zmagati ni nič brez volje pripraviti se.", "V lastnem znoju ni še nihče utonil.", "Na vrhu je prostora, kolikor ga hočete, samo ne za sedenje.", "Umetnost uspeha je v tem, da znaš\ iti hkrati drzen in previden.", "Nemogoče pomeni samo to, da vam bo vzelo malo več časa, kot ste načrtovali."]
    var stSLO = Math.floor(Math.random() * (sloQuoti.length - 2));

    var rusQuoti = ["Стремете се към прогрес,\nне към съвършенство.", "Силата не идва от физическия капацитет.\nТя идва от неукротимата воля.", "Разликата между цел и\nмечта е крайният срок",
      "Тайната да излезеш\nначело е да започнеш.", "Изчисти си разума\nот не мога."]
    var stRUS = Math.floor(Math.random() * (angQuoti.length - 2));
    if (!deaths) {
      this.showPopupAchievements(this.loadText("ach_50deaths"))

      this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
      this.titleMusic.play();
      deaths = true;
      this.updateAchievements();
      const dataAchievements = {
        achievements: achievements,
      };
      this.updateDataBaseAchivements(dataAchievements)
    }

    this.add.text(xKordinata, yKordinata, this.loadText("space_restart"), { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });

    var quote = this.loadText("quote_intro") + sloQuoti[stSLO]

    if (language == "en")
      quote = this.loadText("quote_intro") + angQuoti[stUSA]
    else if (language == "rus")
      quote = this.loadText("quote_intro") + rusQuoti[stRUS]


    if (easy == false) {
      checkpoint = true
      this.add.text(100, GAME_HEIGHT - 200, quote, {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
      });

    }
    else {
      this.add.text(100, GAME_HEIGHT - 200, this.loadText("quote_intro_easy"), {
        fontSize: '40px',
        fill: '#A996BC',
        fontFamily: 'CustomFont',
        wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
      });
    }



    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('smrt')
      this.scene.start(trenutnaScena)
    });
  }






}