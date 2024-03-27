class uvod extends osnova {
	constructor(){
		super({ key: 'uvod' });
	}

  create() {
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)


  const uvod =  this.add.text(xKordinata, yKordinata, this.loadText("click_to_start"), { fontSize: '40px', fill: '#FF7F50' });
	const text =  this.add.text(
		50, 500, this.loadText("intro"),
		 { fontSize: '40px', fill: '#F0F8FF' });




    this.input.on('pointerup', () => {
      var achievementsSplit = achievements;
      const prevCompleted = achievementsSplit.substring(12,13); 

      if(prevCompleted == "1")
        completed = true;
      


      this.scene.stop('uvod')
      this.scene.start('scena1')
    });
  }
}
