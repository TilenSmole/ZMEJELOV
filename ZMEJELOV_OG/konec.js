class konec extends osnova {
	constructor() {
		super("konec")
	}
	preload() {
		this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);
	}
	create() {


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



		const uvod = this.add.text(100, 100, this.loadText("finish"), { fontSize: '60px', fill: '#8B0000' });





		if (!completed) {
			showPopupAchievements(this.loadText("ach"))
			this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
			this.titleMusic.play();
			this.updateAchievements();
			const dataAchievements = {
				achievements: achievements,
			};
			this.updateDataBaseAchivements(dataAchievements)

		}



	}
	replaceCharAt(str, index, replacement) {
		if (index < 0 || index >= str.length) {
			return str; // Index out of range, return original string
		}
		return str.substring(0, index) + replacement + str.substring(index + 1);
	}
	updateAchievements() {
		var achievementsUpdated = achievements;
		if (!completed) {
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 16, "1");
			completed = true;
		}

		console.log(achievementsUpdated)
		achievements = achievementsUpdated;
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



}
