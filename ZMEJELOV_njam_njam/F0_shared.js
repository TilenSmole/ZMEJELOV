let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 
timer = true
var uploaded = false

class F0_shared extends Phaser.Scene {
    constructor(key) {
        super({
            key: key
        })
    }
	preload() {
		this.load.atlas("Zmeja","assets/najdela/najdela.png","assets/najdela/najdela.json")
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
		this.load.json('textEn', '/translations/translationsSLO_js.json');
		this.load.json('textSlo', '/translations/translationsEN_js.json');


	   }
	 create() {
	
	gameState.active = true;

	

	
	
	this.anims.create({
			key: 'walk',
			frames: [
				{ key: 'Zmeja',frame:"Wraith_03_Moving Forward_000.png" },],
			frameRate: 8,
			repeat: -1
		});
	
	this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('ZmejaIdle', { start: 0, end: 7 }), 
			frameRate: 4,
			repeat: -1
		});

	this.anims.create({
		key: 'dying',
		frames: this.anims.generateFrameNumbers('ZmejaDyingAnimation', { start: 0, end: 12 }), // Adjust the range as needed
		frameRate: 10,
		repeat: -1
	});


	this.anims.create({
			key: 'umre',
			frames: [
				{ key: 'Zmeja',frame:"Wraith_03_Dying_000.png" },],
			frameRate: 8,
			repeat: -1
		});



	this.anims.create({
				key: 'skok',
				frames: [
					{ key: 'Zmeja',frame:"Wraith_03_Idle_000.png" },],
				frameRate: 8,
				repeat: -1
			});
		

	gameState.cursors = this.input.keyboard.createCursorKeys();
	
	
	
	
	
	


	  }

	  loadText(text_to_translate) {
		if (language === "en") {
			return this.cache.json.get('textEn')["en"][text_to_translate];
		} else {
			return this.cache.json.get('textSlo')["slo"][text_to_translate];
		}
	}



update(arg) {
	if (gameState.active) {
		
		if(gameState.cursors.right.isDown) {
			gameState.junak.setVelocityX(600)
			gameState.junak.anims.play('walk', true)
			gameState.junak.flipX = false;}
		else if ( gameState.cursors.left.isDown) {
			gameState.junak.setVelocityX(-600);
			gameState.junak.anims.play('walk', true);
			gameState.junak.flipX = true;}
		else {
			gameState.junak.setVelocityX(0);
			gameState.junak.anims.play('idle', true);}




	

}



}



updateAchievements() {
    var achievementsUpdated = achievements;
	console.log(achievements)
    if (H) 
        achievementsUpdated = this.replaceCharAt(achievementsUpdated, 9, "1");
	if (FH)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 10, "1");
	if (T)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 11, "1");
	if (tfT)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 12, "1");
	if (fT)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 13, "1");
	if (K)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 14, "1");
	if (tfK)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 15, "1");
		console.log(achievements)
    achievements = achievementsUpdated;
}


resetGame(){

}




getJumpingSpeed(){
	return gameState.speed;
}

setJumpingSpeed(speedNew){
	gameState.speed = speedNew;
}


 updateDataBase(data) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();	
		xhr.open("POST", "/SERVER/resultUpdaterCity.php", true);
		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.onreadystatechange = function() {
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

		xhr.onreadystatechange = function() {
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

stopWatchStop(){
	timer = false;
	//console.log(hour+" "+ minute+" "+second+count)
	if(!uploaded){
		uploaded = true
		var timeToComplete = hour + " " + minute+ " " + second +" " + count
		finalTime = parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

		const data = {
			time: timeToComplete ,
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

getTimePassed(){
	return parseInt(		) * 3600 + parseInt(minute) * 60 + parseInt(second);
}



} 
//https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/
function stopWatchStart() { 	
    setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
    count++;
	if(timer){
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


