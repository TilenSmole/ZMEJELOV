
class A9_skrinja_uvod extends Phaser.Scene {
  constructor() {
    super({
      key: 'A9_skrinja_uvod',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    });
  }

  preload() {
    this.load.json('textSlo', 'translations/translationsSLO_js.json');
    this.load.json('textEn', 'translations/translationsEN_js.json');
  }
  replaceCharAt(str, index, replacement) {
		if (index < 0 || index >= str.length) {
			return str; // Index out of range, return original string
		}
		return str.substring(0, index) + replacement + str.substring(index + 1);
	}
  updateDataBase(data) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "/SERVER/DatabaseUpdater.php", true);
			xhr.setRequestHeader("Content-Type", "application/json");

			xhr.onreadystatechange = function () {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 200) {
						console.log("Server Response:", xhr.responseText);
						resolve("Database updated successfully");
					} else {
						reject("Failed to update database");
					}
				}
			};

			xhr.send(JSON.stringify(data));
		});

	}

  updateDificulty() {
		var difficultyUpdated = "0000";

		if (easy) {
			difficultyUpdated = this.replaceCharAt(difficultyUpdated, 0, "0");
		} else {
			difficultyUpdated = this.replaceCharAt(difficultyUpdated, 0, "1");
		}

		if (zmaga) {
			difficultyUpdated = this.replaceCharAt(difficultyUpdated, 1, "1");
		}

		if (spawn6 && !spawnP) {
			difficultyUpdated = this.replaceCharAt(difficultyUpdated, 2, "1");
		} else if (spawnP) {
			difficultyUpdated = this.replaceCharAt(difficultyUpdated, 2, "2");
		}

		if (zaprto) {
			difficultyUpdated = this.replaceCharAt(difficultyUpdated, 3, "1");
		}

		console.log('difficultyUpdated' + difficultyUpdated);
		difficulty = difficultyUpdated;
	}
  loadText(text_to_translate) {
    if (language === "en") {
                  return this.cache.json.get('textEn')["en"][text_to_translate];

    } else {
                  return this.cache.json.get('textSlo')["slo"][text_to_translate];

    }
  }


  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    const xKordinata = (Math.random() * 490)
    const yKordinata = (Math.random() * 350)
    this.add.text(xKordinata, yKordinata, this.loadText("space"), { fontSize: '40px', fill: "#E950F4", fontFamily: 'CustomFont' });


    if (!vrniNaPogoj) {
      this.updateDificulty()
      const data = {
        lastLevel: "A9_skrinja_uvod",
        difficulty: difficulty
      };

      this.updateDataBase(data)
        .then(response => {
          console.log("progress saved!");
        })
        .catch(error => {
          console.error(error);
        });

    }





    this.add.text(20, GAME_HEIGHT - 200, this.loadText("level_9_intro"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 20, useAdvancedWrap: true }
    });




    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('A9_skrinja_uvod')
      this.scene.start('A9_skrinja')
    })






  }
}

