class A0_osnova extends Phaser.Scene {
	constructor(key) {
		super({
			key: key
		})
	}

	preload() {
		this.load.atlas("coolGuy", "assets/najdela/najdela.png", "assets/najdela/najdela.json")
		this.load.atlas("sovraznik", "assets/enemy/enemy1.png", "assets/enemy/enemy1.json")
		this.load.json('textEn', 'translations/translationsSLO_js.json');
		this.load.json('textSlo', 'translations/translationsEN_js.json');

	}
	create() {

		gameState.active = true;



		if (!this.anims.exists('walk')) {
            this.anims.create({
                key: 'walk',
                frames: [{ key: 'coolGuy', frame: "Wraith_03_Moving Forward_000.png" }],
                frameRate: 8,
                repeat: -1
            });
        }

        // Create 'stoji' animation if it doesn't exist
        if (!this.anims.exists('stoji')) {
            this.anims.create({
                key: 'stoji',
                frames: [{ key: 'coolGuy', frame: "Wraith_03_Idle_000.png" }],
                frameRate: 8,
                repeat: -1
            });
        }

        // Create 'umre' animation if it doesn't exist
        if (!this.anims.exists('umre')) {
            this.anims.create({
                key: 'umre',
                frames: [{ key: 'coolGuy', frame: "assets/lvl2/Wraith_03_Dying_000.png" }],
                frameRate: 8,
                repeat: -1
            });
        }

        // Create 'sovraznik' animation if it doesn't exist
        if (!this.anims.exists('sovraznik')) {
            this.anims.create({
                key: 'sovraznik',
                frames: [{ key: 'sovraznik', frame: "assets/enemy/Wraith_02_Idle Blinking_003.png" }],
                frameRate: 10,
                repeat: -1
            });
        }





		gameState.cursors = this.input.keyboard.createCursorKeys();








	}

	update(arg) {
		if (arg == "basic") {
			if (gameState.active) {
				if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
					gameState.junak.anims.play('stoji', true);
					gameState.junak.setVelocityY(-650);
				}
				else if (gameState.cursors.right.isDown) {
					gameState.junak.setVelocityX(500)
					gameState.junak.anims.play('walk', true)
					gameState.junak.flipX = false;
				}
				else if (gameState.cursors.left.isDown) {
					gameState.junak.setVelocityX(-500);
					gameState.junak.anims.play('walk', true);
					gameState.junak.flipX = true;
				}
				else {
					gameState.junak.setVelocityX(0);
					// Plays the idle animation if no arrow keys are pressed
					gameState.junak.anims.play('stoji', true);
				}

			}
		}
		if (arg == "mrtev") {
			if (gameState.active) {
				if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
					gameState.junak.anims.play('umre', true);
					gameState.junak.setVelocityY(-650);
				}
				else if (gameState.cursors.right.isDown) {
					gameState.junak.setVelocityX(500)
					gameState.junak.anims.play('umre', true)
					gameState.junak.flipX = false;
				}
				else if (gameState.cursors.left.isDown) {
					gameState.junak.setVelocityX(-500);
					gameState.junak.anims.play('umre', true);
					gameState.junak.flipX = true;
				}
				else {
					gameState.junak.setVelocityX(0);
					// Plays the idle animation if no arrow keys are pressed
					gameState.junak.anims.play('umre', true);
				}

			}
		}



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




	save(_scene, _difficulty) {
		if (!vrniNaPogoj) {
			this.updateDificulty()

			const data = {
				lastLevel: _scene,
				difficulty: difficulty,
			};
			this.updateDataBase(data)
				.then(response => {
					console.log("progress saved!");
				})
				.catch(error => {
					console.error(error);
				});

		}


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

	updateDataBaseAchivements(data) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "/SERVER/achivmentsUpdater.php", true);
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

	replaceCharAt(str, index, replacement) {
		if (index < 0 || index >= str.length) {
			return str; // Index out of range, return original string
		}
		return str.substring(0, index) + replacement + str.substring(index + 1);
	}

	updateAchievements() {
		var achievementsUpdated = achievements;

		if (ruins)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 5, "1");
		if (deaths)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 2, "1");
		if (secret)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 1, "1");
		if (city)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 4, "1");
		if (hardMode)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 0, "1");
		if (easyMode)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 3, "1");

		achievements = achievementsUpdated;
	}


	
    loadText(text_to_translate) {
        if (language === "en") {
                        return this.cache.json.get('textEn')["en"][text_to_translate];

        } else {
                        return this.cache.json.get('textSlo')["slo"][text_to_translate];

        }
    }

}



