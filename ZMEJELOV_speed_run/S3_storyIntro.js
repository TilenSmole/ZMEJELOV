
class S3_storyIntro extends S0_shared{
	constructor(){
		super("S3_storyIntro");
	}
  preload() {
    this.load.image("zmeja","assets/uvod/zmeja.png")

  }
  create() {

  
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");


    gameState.sovraznik = this.physics.add.sprite(-100, 220, "zmeja");
    gameState.sovraznik.setScale(.7)
    gameState.sovraznik.body.setAllowGravity(false);

    gameState.sovraznik.move = this.tweens.add({
      targets: gameState.sovraznik,
      x: GAME_WIDTH+100,
      ease: 'Linear',
      duration: 4000,
      repeat: -1,
      flipX: true,
      yoyo: true,
    })








    const text = this.add.text(10, 500, this.loadText("game_intro_speedrun"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 20, useAdvancedWrap: true }
    });

    const xKordinata = (Math.random() * 490);
    const yKordinata = (Math.random() * 350);
    var text2 = this.add.text(xKordinata, yKordinata, "", { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });

      text2.destroy(); 
      text2 = this.add.text(xKordinata, yKordinata, this.loadText("space_start"), { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' }); // Create a new text object with updated content




    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('S3_storyIntro')
      this.scene.start('S4_gamePlayStart')
    });
  }    
  update() {
   
}


 
}


function random_color() {
  var rint = Math.floor(0x100000000 * Math.random());
  return 'rgb(' + (rint & 255) + ',' + (rint >> 8 & 255) + ',' + (rint >> 16 & 255) + ')';


}