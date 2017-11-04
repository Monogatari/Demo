// Define the messages used in the game.
var messages = {
	"SampleWriting":{
		"Title": "Some Credits",
		"Subtitle": "Thanks to everyone.",
		"Message":"Music From: <div xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'><a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'> _ghost</a> / <a rel='license' href='http://creativecommons.org/licenses/by/3.0/'>CC BY 3.0</a></div><p>Evelyn Character from: <a href='http://miririri.deviantart.com/art/Evelyn-Sprite-Set-Starter-Pack-free-minipack-347585657'>miririri</a></p>"
	}
}

// Define the notifications used in the game
var notifications = {
	"End": {
		title: "Things just got real!",
		body: "You finished Monogatari 101.",
		icon: "img/icon_192x192.png"
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {
	"Theme": "_ghost_-_Reverie_(small_theme).mp3"
}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {
	"Dandelion": "DandelionTimelapse.mp4"
}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	"Main": "monogatari-promo.svg",
	"Classroom": "classroom.jpg",
	"Home": "home.png",
	"Room": "room.jpg",
	"Sea": "sea.jpg",
	"Library": "library.png"
}

// Define the Characters
var characters = {
	"e":{
		"Name": "Evelyn",
		"Color": "#00bfff",
		"Directory": "Evelyn",
		"Images":{
			"Normal": "normal.png",
			"Mad": "hmph!.png",
			"Doubt": "uhh.png",
			"Disapointed":"ngggg....png",
			"Happy": "hehehehe.png"
		}
	}
}

var script = {
	// The game starts here.
	"English":{
		"Start":[

			"play music Theme loop",
			"scene Classroom",
			"show e Normal center with fadeIn",
			"Hi! click anywhere or press space to continue.",

			"Welcome to Monogatari 101, my name is Evelyn and I'll be your tutor from now on.",
			"e First lets review the basics, on the right top of the screen you should see some icons.",
			"e The <span class='fa fa-arrow-left'></span> button is the back button, press it to return to a previous state of the game.",
			"e The <span class='fa fa-eye'></span> button will hide the text, allowing you to view the background. Pressing it again will get everything back to normal.",
			"e The <span class='fa fa-save'></span> button is the save button, it will take you to the save menu.",
			"e The <span class='fa fa-undo'></span> button is the load button, it will take you to the load menu.",
			"e The <span class='fa fa-gear'></span> button is the settings button, it will take you to the settings menu.",
			"e The <span class='fa fa-times-circle-o'></span> button is the quit button, it will end the game and take you to the main menu.",
			"show e Happy center",
			"e I'm so excited right now!",
			"show e Normal center",
			"e You see, monogatari is not a normal engine. It aims for a much higher goal.",
			"e You can do simple but cool things like show videos.",
			"play video Dandelion left",
			"e Or displaying Messages",
			"display message SampleWriting",
			"e Before I continue, let me ask you, what are you?",
			{"Choice":{
			     "Developer":{
				     "Text": "I'm a Developer.",
				     "Do": "jump Developer"
			     },
			     "Writer":{
				     "Text": "I'm a Writer.",
				     "Do": "jump Writer"
			     },
			     "Designer":{
				     "Text": "I'm a Designer.",
				     "Do": "jump Designer"
			     },
			     "Player":{
				     "Text": "I'm a Player.",
				     "Do": "jump Player"
			     }
		    }}
		],

		"Developer":[
				"scene Home",
				"show e Normal with fadeIn",
				"e As you may know the web has evolved a lot, you'll be able to create visual novels as we know them, but also create more incredible things!",
				"e It is really up to your imagination!, there are tons and tons of APIs for the web, and you can easily integrate them to your visual novel",
				"e You name it, Paypal integration for in-app purchases and more, real-time information, you can even create the whole backend for your visual novel in order to have accounts, protected information etc. The sky is the limit!",
				"e As an example, the save and load data uses localstorage for storing the information.",
				"e Now now, I'm well aware that it means the user will be able to change that, making your game \"Hackable\" in a way.",
				"e But as I said before, you could extend this functionality and save the data in a database instead of localstorage.",
				"e That will make it more secure and also could let your users have accounts and just login anywhere to play and have their data.",

				"e Now, Monogatari is responsive, which means that everyone will be able to enjoy of your novel regardless the device they're on.",
				"e The inteface is written in HTML5 while the functionality as I said before is written in Javascript and all the styling is mainly CSS.",
				"e This means you could also access real time data and a lot more with the APIs available for the web, even connect it to social media.",
				"e As you can see, Monogatari is indeed not just a simple engine, besides it's open source and released under the MIT License so you can do anything you want!",
				"e Try Monogatari, extend it, and create Visual Novels like no one has seen before!",
				"notify End 2000",
				"end"
			],

			"Writer":[
				"scene Library",
				"show e Normal with fadeIn",
				"e As a writer, having a simple language to write is important, that's why Monogatari has a Ren'py-like language.",
				"e This allows you to write your novel in a powerful but very simple way, no programming required!.",
				"e If Ren'py is familiar to you, then writing in Monogatari will be incredibly easy, if not, the syntax is very simple and you'll be writing in no time.",
				"e In the documentation you'll find all the examples you need to start writing.",
				"e There are a lot of thigs you can do.",
				"e Remember that Monogatari is open source, and released under the MIT Licens so you can use it for all your projects. I really hope to see your project very soon!",
				"notify End 2000",
				"end"
			],

			"Designer":[
				"scene Sea",
				"show e Normal with fadeIn",
				"e So... a designer huh?",
				"show e Doubt",
				"e The one who programmed all this... well he just sucks at drawing and design.",
				"show e Normal center",
				"e However you are surely awesome, that's why you'll be able to create nice graphics and interfaces for your game!",
				"e Since this is web based, you may use any format supported by browsers, that means the basic JPG, PNG and GIF (yeah, animated GIFs) as well as others like SVG!",
				"e I really recommend you using SVG, it will surely enhance the experience for all your users, since no matter what resolution their screen is, it will look awesome.",
				"e Since all the scenes are backgrounds, then they'll resize and fit in any screen.",
				"e Now, CSS will just open you a whole world of posibilities, for animations and designs!",
				"e As you can see, you have lots of resources for designing your game and I can't wait to see what you create.",
				"e Have fun designing awesome VNs!",
				"notify End 2000",
				"end"
			],

			"Player":[
				"scene Room",
				"show e Normal with fadeIn",
				"e Nice, a player!",
				"e As a player, Monogatari means just a lot more fun for you.",
				"e You won't need to install anything, just enter the page and play! as simple as that.",
				"e Now, it depends entirely on the developer but the features they can add to your game are infinite! so you will be enjoying a lot of things you've never seen in a VN before.",
				"e Sharing a game with friends is now even easier than before.",
				"e That's really all I can tell you from now, Monogatari means endless posibilities and I'm sure you'll be soon seeing what I mean by that.",
				"e Goodbye!, I hope you have lots of fun with projects built in Monogatari!",
				"notify End 2000",
				"end"
			]
	},
	"Español":{

		"Start":[

			"play music Theme loop",
			"scene Classroom",
			"show e Normal center with fadeIn",
			"¡Hola! da click en cualquier lugar o presiona espacio para continuar.",

			"Bienvenido a Monogatari 101, mi nombre es Evelyn y seré tu tutora de ahora en adelante.",
			"e Primero repasemos lo básico, en la esquina superior derecha de la pantalla deberias poder ver unos iconos.",
			"e El boton <span class='fa fa-arrow-left'></span> es el boton de \"Atrás\", presiónalo para regresar.",
			"e El boton <span class='fa fa-eye'></span> esconder'a el texto, permitiendote ver el fondo. Presiónalo de nuevo y todo regresará a la normalidad.",
			"e El boton <span class='fa fa-save'></span> es el boton de salvar, te llevará a ese menu.",
			"e El boton <span class='fa fa-undo'></span> es el boton de cargar, te llevará a ese menu.",
			"e El boton <span class='fa fa-gear'></span> es el boton de configuración, te llevará a ese menu.",
			"e El boton <span class='fa fa-times-circle-o'></span> es el boton de salir, terminará el juego y regresarás a la pantalla principal.",
			"show e Happy center",
			"e ¡Estoy muy emocionada!",
			"show e Normal center",
			"e Veras, Monogatari no es un engine normal, aspira a una meta mucho mayor.",
			"e Puedes hacer cosas simples pero increibles como mostrar videos.",
			"play video Dandelion left",
			"e O mostrar mensajes.",
			"display message SampleWriting",
			"e Antes de continuar, permiteme preguntarte, ¿qué eres?",
			{"Choice":{
			     "Developer":{
				     "Text": "Soy un Desarrollador.",
				     "Do": "jump Developer"
			     },
			     "Writer":{
				     "Text": "Soy un Escritor.",
				     "Do": "jump Writer"
			     },
			     "Designer":{
				     "Text": "Soy un Diseñador.",
				     "Do": "jump Designer"
			     },
			     "Player":{
				     "Text": "Soy un Jugador.",
				     "Do": "jump Player"
			     }
		    }}
		],

		"Developer":[
				"scene Home",
				"show e Normal with fadeIn",
				"e Como sabes, la web ha evolucionado mucho, podrás crear novelas visuales como las conocemos, y también crear cosas más increíbles!",
				"e ¡Realmente depende de tu imaginación!, hay miles de APIs para la web, y se pueden integrar fácilmente a su novela visual",
				"e Lo que sea, integración con Paypal para compras in-app y más, información en tiempo real, incluso se puede crear todo el backend para su novela visual con el fin de tener cuentas, información protegida etc. ¡El cielo es el límite!",
				"e Por ejemplo, el guardar y cargar datos utiliza localStorage.",
				"e Y si si, estoy muy consciente de que esto significa que el usuario podrá cambiar eso, por lo que tu juego es \"Hackable\" de una manera.",
				"e Pero como dije antes, se podría extender esta funcionalidad y guardar los datos en una base de datos en lugar de localStorage.",
				"e Eso hará que sea más seguro y también podría permitir que tus usuarios tuvieran cuentas y simplemente inicien sesión en cualquier lugar para jugar y tener sus información.",
				"e  Monogatari es responsivo, por lo que todo el mundo será capaz de disfrutar de tu novela, independientemente del dispositivo en el que esten.",
				"e La inteface está escrita en HTML5, mientras que la funcionalidad está en Javascript y todo el estilo es en su mayoria CSS.",
				"e Esto significa que también se puede acceder a información en tiempo real y mucho más con las APIs disponibles para la web, incluso conectarlo a redes sociales.",
				"e Como puedes ver, Monogatari no es simplemente un engine, además de que es de código abierto y publicado bajo la licencia MIT para que puedas hacer lo que quieras!",
				"e ¡Prueba Monogatari, extiendelo, y crea Novelas Visuales como nunca nadie ha visto!",
				"notify End 2000",
				"end"
			],

			"Writer":[
				"scene Library",
				"show e Normal with fadeIn",
				"e Como escritor tener un lenguaje sencillo para escribir es importante, por eso Monogatari tiene un lenguaje como el de Ren'py.",
				"e Esto te permite escribir tu novela en una forma potente pero simple, ¡sin tener que programar!",
				"e Si Ren'py te es familiar, escribir en Monogatari será realmente facil, en caso contrario la syntaxis es muy facil y estarás escribiendo en muy poco tiempo.",
				"e En la documentación encontrarás todos los ejemplos que necesitas para comenzar.",
				"e Hay montones de cosas que puedes hacer.",
				"e Recuerda que Monogatari es un proyecto de codigo abierto liberado bajo la licencia MIT asi que lo puedes usar para todos tus proyectos. ¡Espero ver tu proyecto pronto!",
				"notify End 2000",
				"end"
			],

			"Designer":[
				"scene Sea",
				"show e Normal with fadeIn",
				"e Asi que... un diseñador huh?",
				"show e Doubt",
				"e La persona que programó todo esto pues... simplemente es un asco dibujando y diseñando.",
				"show e Normal center",
				"e Sin embargo, seguramente tu eres grandioso, y por eso serás capaz de crear buenos gráficos e interfaces para tu juego.",
				"e Como esto está basado en la web, podrás usar cualquier formato soportado por los navegadores, eso significa que los basicos JPG, PNG y GIF (si, GIFs animados) asi como otros, ¡como SVG!",
				"e Realmente recomiedo usar SVG, seguramente mejorará la experiencia para los usuarios ya que no importa la resolución de su pantalla, siempre se verá bien.",
				"e Como todas las escenes son backgrounds, su tamaño se ajusta para caber en todas las pantallas.",
				"e Ahora, CSS abre las puertas a un mundo de posibilidades de animaciones y diseños.",
				"e Como puedes ver, tienes muchos recursos para el diseño de tu juego y no puedo esperar a ver lo que crearás.",
				"e ¡Diviertete diseñando Novelas Visuales increibles!",
				"notify End 2000",
				"end"
			],

			"Player":[
				"scene Room",
				"show e Normal with fadeIn",
				"e ¡Perfecto, un jugador!",
				"e Como jugador, Monogatari significa más diversión para ti.",
				"e No necesitas instalar nada, solo entrar a la página y jugar, tan simple como eso.",
				"e Ahora, depende del desarrollador pero las caracteristicas que le pueden agregar a los juegos es infinita, asi que disfrutaras de cosas que nunca habias visto en una Novela Visual.",
				"e Compartir un juego con tus amigos es ahora más facil que nunca.",
				"e Eso es todo lo que te puedo decir por ahora, Monogatari significa posibilidades ilimitadas y estoy segura de que pronto verás a lo que me refiero.",
				"e ¡Adios!, espero que te diviertas mucho con proyectos creados con Monogatari.",
				"notify End 2000",
				"end"
			]

	}
}
