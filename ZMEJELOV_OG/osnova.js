class osnova extends Phaser.Scene {
	constructor(key) {
		super({
			key: key
		})
	}

	preload() {

		this.load.json('textEn', '/translations/translationsSLO_OG_js.json');
		this.load.json('textSlo', '/translations/translationsEN_OG_js.json');
	
	}
    loadText(text_to_translate) {
		console.log(language)
		console.log(this.cache.json.get('textEn')[text_to_translate])


        if (language === "en") {
            return this.cache.json.get('textEn')[text_to_translate];
        } else {
            return this.cache.json.get('textSlo')[text_to_translate];
        }
    }

}



