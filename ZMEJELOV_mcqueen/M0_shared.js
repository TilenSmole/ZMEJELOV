let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
timer = true
var uploaded = false

class M0_shared extends Phaser.Scene {
	constructor(key) {
		super({
			key: key
		})
	}
	preload() {
		this.load.atlas("Zmeja", "assets/najdela/najdela.png", "assets/najdela/najdela.json")
		this.load.spritesheet('ZmejaDyingAnimation', 'assets/ZMEJA/zmeja_death.png', {
			frameWidth: 500,
			frameHeight: 420,
		});
		this.load.spritesheet('ZmejaMoving', 'assets/ZMEJA/zmejaMoving.png', {
			frameWidth: 220,
			frameHeight: 292,
		});
		this.load.spritesheet('ZmejaIdle', 'assets/ZMEJA/zmejaIdle.png', {
			frameWidth: 220,
			frameHeight: 302,
		});
		this.load.json('textEn', '/translations/translationsEN_js.json');
		this.load.json('textSlo', '/translations/translationsSLO_js.json');
		this.load.image("platform1", "assets/a_speedRunning/platforms/Pad_3_3.png")
		this.load.image("platform2", "assets/a_speedRunning/platforms/Pad_04_1.png")
		this.load.image("platform3", "assets/a_speedRunning/platforms/Pad_01_1.png")
		this.load.image("platform4", "assets/a_speedRunning/platforms/Pad_1_3.png")
		this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
		this.load.image("spaceship", "assets/scena6/spaceship.png")
		this.load.image("skeli", "assets/deco/Spikes.png")
		this.load.image("boaster", "assets/a_speedRunning/boaster.png")
		this.load.spritesheet('vultureMovement', 'assets/a_speedRunning/Vulture_walk.png', {
			frameWidth: 48,
			frameHeight: 48,
		});
		this.load.image("vulture", "assets/a_speedRunning/Vulture.png")

		this.load.image("coin", "assets/scena3/Coin_01.png")
		this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);


		this.load.image("reaper", "assets/a_speedRunning/0_Reaper_Man_Idle_000.png")
		this.load.spritesheet('reaperMovement', 'assets/a_speedRunning/alienWalking.png', {
			frameWidth: 616,
			frameHeight: 587.3,
		});

		for (let i = 1; i <= 16; i++) {
			this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
		}



	}
	restart() {
		lastPoint = 1600
		borderLeft = 0
		generated = false
		inventory = []
		wisdom = false
		coinsNewGame = 0
		score = 0
		saveResOnce = false
		shieldAbility = false
		ghostAbility = false
		shroomAbility = false
		potionAbility = false
		rocketAbility = false
		spaceshipAbility = false
		shieldStart = false
		ghostStart = false
		shroomStart = false
		potionStart = false
		rocketStart = false
		spaceshipStart = false
		shield = false
		ghost = false
		shroom = false
		heart = false
		spaceShip = false
		speedShip = false
		enemies = []
		 coins = [];
		 buffs = []
		 distance = 0
		 finalPlatform = [];
		 playOnce = false;
		 coins = [];
		 objectsFloor = []
		 lowerCollider = []
		 zen = false
		 buffs = []
		 distance = 0
		 shieldIcon = ""
		 startTimeShield = 0
		 gameStateStoredX = 0
		 heartIcon = ""
		 spaceShipIcon = ""
		 startTimeheart = 0
		 potionActivation = false
		 spaceShipIcon = ""
		 startTimespaceShip =
			 shroomIcon = ""
		 startTimeshroom =
			 ghostIcon = ""
		 startTimeGhost = 0
		 canStart = false
		 canShowAnAchivement = false
		 heightPlatform = visina - 200
		  lastPoint = 1600
		  borderLeft = 0
		  generated = false
	

	}
	reset() {
		distance = 0
		finalPlatform = [];
		playOnce = false;
		coins = [];
		enemies = []
		objectsFloor = []
		lowerCollider = []
		zen = false
		buffs = []
		distance = 0
		shieldIcon = ""
		startTimeShield = 0
		gameStateStoredX = 0
		heartIcon = ""
		spaceShipIcon = ""
		startTimeheart = 0
		potionActivation = false
		spaceShipIcon = ""
		startTimespaceShip =
			shroomIcon = ""
		startTimeshroom =
			ghostIcon = ""
		startTimeGhost = 0
		canStart = false
		canShowAnAchivement = false
		heightPlatform = visina - 200
		 lastPoint = 1600
		 borderLeft = 0
		 generated = false
		 dolzina = 40000
	}


	generateCoins(min, max, height) {
		var pos = Math.floor(Math.random() * 1000) + 1000
		var distanceBetween = Math.floor(Math.random() * 250) + 120
		for (var i = min; i <= max; i += distanceBetween) {
			var coin = this.physics.add.sprite(i, height - 100, 'coin');
			coin.body.allowGravity = false;
			coin.value = 1;
			coin.setScale(.67)
			coins.push(coin)
		}
	}

	generateEnemy(min, max, height) {
		var enemy = this.physics.add.sprite((min+max)/2, height - 105, 'reaper');
		enemy.body.allowGravity = false;
		enemy.setScale(0.15)
	//	enemy.targetMax = max;
	//	enemy.targetMin = min; // Store the target X coordinate as a property of the enemy
	//	enemy.reachedTarget = false
		enemies.push(enemy)
	}

	generateLineOFCoins(min, max, height) {
		var index = 1
		var distanceBetween = 200
		for (var i = min; i <= max; i += distanceBetween) {
			var coin = this.physics.add.sprite(i, height - index++ * 75, 'coin');
			coin.body.allowGravity = false;
			coin.setScale(.67)
			coin.value = 1;
			coins.push(coin)
			if (index > 7)
				break
		}
	}

	generateWallOFCoins(min, max, height) {
		var distanceBetween = 200
		var actualHeight = height - 50
		for (var index = 0; index <= 5; index++) {
			for (var i = min; i <= max; i += distanceBetween) {
				var coin = this.physics.add.sprite(i, actualHeight, 'coin');
				coin.body.allowGravity = false;
				coin.setScale(.67)
				coin.value = 1;
				coins.push(coin)
			}
			actualHeight -= 100
		}
	}

	generateRandomCoins(min, max, height) {
		var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;

		var numberOfgenerated = Math.floor(Math.random() * 4) + 1;
		for (var x = 0; x <= numberOfgenerated; x++) {
			var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;
			var coin = this.physics.add.sprite(coordinatesX, height - (Math.floor(Math.random() * (400)) + 100), 'coin');
			coin.value = 1
			coin.body.allowGravity = false;
			coin.setScale(.67)
			coins.push(coin)


		}






	}

	generateSpecialEffect(min, max, height) {
		var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;

		var numberOfgenerated = Math.floor(Math.random() * 4) + 1;

		var possibleEle = ["fake", 'r1 (1)', 'r1 (2)', 'r1 (3)', 'r1 (4)', 'r1 (5)', 'r1 (6)', 'r1 (7)', 'r1 (8)', 'r1 (10)', 'r1 (9)', 'r1 (11)', 'r1 (12)', 'r1 (13)', 'r1 (14)', 'r1 (15)', 'r1 (16)']
		var choosenEle = Math.floor(Math.random() * 15) + 1;


		var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;
		//4 7 8 11
		if (choosenEle === 4 || choosenEle === 7 || choosenEle === 8 || choosenEle === 11) {
			var coin = this.physics.add.sprite(coordinatesX, height - (Math.floor(Math.random() * (350


			))), possibleEle[choosenEle]);
			coin.setScale(3)

			if (choosenEle === 7)
				coin.value = 50;
			else if (choosenEle === 4) {
				coin.value = 1000;
				coin.setScale(1)
			}
			else if (choosenEle === 8) {
				coin.value = 50;
			}
			else if (choosenEle === 11) {
				coin.value = 250;
			}
			coin.body.allowGravity = false;
			coins.push(coin)

		}
		else if (choosenEle === 12 || choosenEle === 13) {
			objectsFloor.push(buff)

			console.log('¸ok pusham');


		}
		else {
			var buff = this.physics.add.sprite(coordinatesX, height - 200, possibleEle[choosenEle]);
			if (choosenEle === 14)
				buff.setScale(3)
			else if (choosenEle === 15)
				buff.setScale(0.5)
			else if (choosenEle === 16)
				buff.setScale(.67)
			else if (choosenEle === 10)
				buff.setScale(2.2)
			else if (choosenEle === 6)
				buff.setScale(2.2)
			/* else if (choosenEle === 11)
				 buff.setScale(.67)*/

			buff.body.allowGravity = false;
			buff.value = choosenEle;
			buffs.push(buff)

		}










	}
	createRectanglePlatform(x, y) {
		var graphics = this.add.graphics();
		var rectWidth = 300;  // Width of the rectangle
		var rectHeight = 20;  // Height of the rectangle
		var rectColor = 0x4A0404;  // Color of the rectangle

		graphics.fillStyle(rectColor, 1);  // Color and alpha
		graphics.fillRect(0, 0, rectWidth, rectHeight);  // Position and size of the rectangle
		graphics.generateTexture('rectPlatform', rectWidth, rectHeight);

		var platform = this.physics.add.sprite(x, y, 'rectPlatform');
		platform.setImmovable(true);
		platform.body.allowGravity = false;
		platform.body.setSize(rectWidth, rectHeight);

		return platform;
	}


	loadText(text_to_translate) {
		console.log('¸evo klicem json');
		let textEn = this.cache.json.get('textEn');
		let textSlo = this.cache.json.get('textSlo');
		if (language === "en") {
			return textEn["en"][text_to_translate];
		} else {
			return textSlo["slo"][text_to_translate];
		}
	}
	create() {

		gameState.active = true;




		if(!this.anims.exists('walk')){
			this.anims.create({
				key: 'walk',
				frames: [
					{ key: 'Zmeja', frame: "Wraith_03_Moving Forward_000.png" },],
				frameRate: 8,
				repeat: -1
			});
		}
		
		if(!this.anims.exists('idle'))
		{this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('ZmejaIdle', { start: 0, end: 7 }),
			frameRate: 4,
			repeat: -1
		});}
		if(!this.anims.exists('dying'))
	{	this.anims.create({
			key: 'dying',
			frames: this.anims.generateFrameNumbers('ZmejaDyingAnimation', { start: 0, end: 11 }), // Adjust the range as needed
			frameRate: 10,
			repeat: -1
		});}

		if(!this.anims.exists('umre'))
		{this.anims.create({
			key: 'umre',
			frames: [
				{ key: 'Zmeja', frame: "Wraith_03_Dying_000.png" },],
			frameRate: 8,
			repeat: -1
		});}


		if(!this.anims.exists('skok'))
{		this.anims.create({
			key: 'skok',
			frames: [
				{ key: 'Zmeja', frame: "Wraith_03_Idle_000.png" },],
			frameRate: 8,
			repeat: -1
		});}


		gameState.cursors = this.input.keyboard.createCursorKeys();








	}

	update() {




	}
	updateAchievements() {
		var achievementsUpdated = achievements;


		if (buy)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 6, "1");
		if (rainbow)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 7, "1");
		if (noCheat)
			achievementsUpdated = this.replaceCharAt(achievementsUpdated, 8, "1");

		achievements = achievementsUpdated;
	}
	updateMoney(data) {
		console.log('¸fdsfas');
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "/SERVER/moneyUpdater.php", true);
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

	getMoney() {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/SERVER/getMoney.php', false);  // Set the third parameter to false for synchronous request
		xhr.setRequestHeader('Content-Type', 'application/json');
		var data = JSON.stringify({ action: 'getMoney' });
		xhr.send(data);

		if (xhr.status === 200) {
			console.log("Response from server:", xhr.responseText);
			try {
				var response = JSON.parse(xhr.responseText);
				if (response.money !== undefined) {
					return response.money;
				} else {
					console.error("Error: Money value not found in response");
					return null;
				}
			} catch (error) {
				console.error("Error parsing JSON:", error);
				return null;
			}
		} else {
			console.error("Failed to retrieve money. Status: " + xhr.status);
			return null;
		}

	}







	getJumpingSpeed() {
		return gameState.speed;
	}

	setJumpingSpeed(speedNew) {
		gameState.speed = speedNew;
	}


	updateDataBase(data) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "/SERVER/resultUpdaterCity.php", true);
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



	replaceCharAt(str, index, replacement) {
		if (index < 0 || index >= str.length) {
			return str; // Index out of range, return original string
		}
		return str.substring(0, index) + replacement + str.substring(index + 1);
	}








	stopWatchStop() {
		timer = false;
		//console.log(hour+" "+ minute+" "+second+count)
		if (!uploaded) {
			uploaded = true
			var timeToComplete = hour + " " + minute + " " + second + " " + count
			finalTime = parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

			const data = {
				time: timeToComplete,
			};

			this.updateDataBase(data)
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.error(error);
				});
		}



	}

	getTimePassed() {
		return parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);
	}



}
//https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/
function stopWatchStart() {
	setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
	count++;
	if (timer) {
		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour.toString().padStart(2, '0');
		let minString = minute.toString().padStart(2, '0');
		let secString = second.toString().padStart(2, '0');
		let countString = count.toString().padStart(2, '0');


	}

}


