"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Credits":{
		"Title": "Awesome people!",
		"Subtitle": "Thanks to everyone.",
		"Message": `
			Music From:
			<div xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'> _ghost</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</div>
			<p>Evelyn Sprite from: <a href='http://miririri.deviantart.com/art/Evelyn-Sprite-Set-Starter-Pack-free-minipack-347585657'  target='_blank'>miririri</a></p>
			<p>Backgrounds from the one and only, <a href='https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=17302' target='_blank'>Uncle Mugen</a>!</p>`
	}
};

// Define the notifications used in the game
let notifications = {
	"End": {
		title: "Things just got real!",
		body: "You finished Monogatari 101.",
		icon: "img/icon_192x192.png"
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
	"universe": {"particles":{"number":{"value":0,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
};

// Define the music used in the game.
const music = {
	"Theme": "_ghost_-_Reverie_(small_theme).mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {
	"Dandelion": "DandelionTimelapse.mp4"
};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Main": "monogatari-promo.svg",
	"Classroom": "classroom.jpg",
	"Home": "home.png",
	"Room": "room.jpg",
	"Sea": "sea.jpg",
	"Library": "library.png"
};

// Define the Characters
const characters = {
	"p": {
		"Name": "{{player.name}}",
		"Color": "#ff3951"
	},
	"e":{
		"Name": "{{evelyn_name}}",
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
};

let script = {
	// The game starts here.
	"English":{
		"Start":[
			{"Conditional": {
				"Condition": function () {
					return Storage.get ("played") == "true";
				},
				"True": {"Choice":{
					"Text": "It seems you have already played the demo, do you wish to skip the introduction?",
					"Skip":{
						"Text": "Skip",
						"Do": "jump Topics"
					},
					"Continue":{
						"Text": "Continue",
						"Do": "jump Introduction"
					}
				}},
				"False": "jump Introduction"
			}}
		],

		"Introduction": [
			"clear",
			"scene black with fadeIn",
			{"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("PlayerName", input);
					storage.player.name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}},
			"centered You know?...",
			"wait 500",
			"centered At first, there was nothing, only void. A void so dark and silent...",
			"particles universe",
			"centered Then, suddenly, they started to appear...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 0;
					return true;
				},
			}},
			"particles universe",
			"e There weren't many at first but little by little, more and more came...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
			}},
			"particles universe",
			"e Tenths became hundreds...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 50;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
			}},
			"particles universe",
			"e Hundreds became thousands...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 100;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 50;
					return true;
				},
			}},
			"particles universe",
			"e Soon they weren't just there... they were interacting, joining forces for a higher goal...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
			}},
			"particles universe",
			"e They were getting ready...",
			"stop particles",

			"play music Theme loop",
			"scene Classroom",
			"show e Normal center with fadeIn",
			"e Ok guys, that's it for today, you can go home.",

			"p Wait... what?",

			"show e Doubt center with fadeIn",

			"e Oh, is there a problem?",
			"p What was that story about? Aren't you going to finish it?",

			"show e Happy with fadeIn",
			"e Ah! I see, got you intrigued haven't I? Well {{player.name}}, as a matter of fact not even I know what I was talking about, we are on a novel someone wrote remember?",

			"p Oh, right... no, wait, WHAT?!",

			"show e Mad at center with fadeIn",

			"e Agh, not this again. Listen, this world we are in? It's not even real! In fact, you are not even you!",

			"e The real you is someone looking at this in a very confused manner as we speak.",

			"e I don't even get to have a name I mean, what's up with that? Come on now, guess you get to choose this.",

			{"Input": {
				"Text": "What should be my name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("Evelyn_Name", input);
					storage.evelyn_name = input;
					return true;
				},
				"Warning": "Choose a nice name for me please."
			}},

			"show e Normal with fadeIn",
			{"Conditional": {
				"Condition": function(){
					return storage.evelyn_name == "Evelyn";
				},
				"True": "e Evelyn... That's a lovely name! I love it!",
				"False": "e {{evelyn_name}}... Yeah, sounds good!"
			}},

			"e All right, since you seem a little bit confused let's see what living on a visual novel really means shall we?",

			"p Yeah... sure... I mean... the link did say demo so... I guess?",

			"show e Happy with fadeIn",

			"e Great! We have so much to learn!",

			"jump Topics",
		],

		"Topics": [
			"scene Classroom",
			"show e Happy with fadeIn",
			function () {
				Storage.set ("played", true);
				return true;
			},
			{"Choice":{
				"Text":	"Let's see, what do you want to know about?",
				"Animations":{
					"Text": "Animations",
					"Do": "jump Animations"
				},
				"Media":{
					"Text": "Multimedia",
					"Do": "jump Media"
				},
				"Scripting":{
					"Text": "Scripting",
					"Do": "jump Script"
				},
				"Playing":{
					"Text": "Playing",
					"Do": "jump Playing"
				},
				"Nothing": {
					"Text": "Nothing",
					"Do": "jump Nothing",
					"Condition": function () {
						return storage.playing && storage.media && storage.scripting && storage.animations;
					}
				}
			}}
		],

		"Animations": [
			function () {
				storage.animations = true;
				return true;
			},
			"scene Classroom with fadeIn",
			"show e Normal with fadeIn",
			"e Oh, animations are fun! They make weird things happen to us and the world we live in.",
			"e You can animate pretty much anything yourself but there are some predefined animations that you can start using in both backgrounds and us characters",
			"e For example, we can have a small earthquake just for ourselves.",
			"scene Classroom with shake infinite",
			"show e Normal with fadeIn",
			"e Oh wait, if the world is moving how come I'm standing still, that doesn't make any sense does it?",
			"show e Happy with shake infinite",
			"e Ah! That's more like it, as you can see, things can get real weird around here for no other reason than someone wanting to have fun",
			"p Eh... isn't that kind of... bad for us?",
			"show e Doubt with shake infinite",
			"e Bad? Wait till you hear how our existence ends as soon as they close this or worse, how we get amnesia every time they forget to save!",
			"scene Classroom with zoomIn",
			"show e Normal with fadeIn",
			"e But hey, things aren't so bad, we also get to experience things that no one else can.",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 200;
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 100;
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
			}},
			"particles universe",

			"e I bet they don't have this things where the real you is from.",
			"p What are this things? Can I touch them?",

			"e Sure you can! These are called particles, useful for creating some effects like <i>wind, stars, snow, rain</i> and well, pretty much all sorts of weird stuff.",
			"e If you are the geeky type, then you should know all animations are mainly achieved through CSS but you can use JavaScript as well, the choice is yours!",
			"stop particles",
			"jump Topics"
		],

		"Nothing":[
			"scene Home",
			"show e Normal with fadeIn",
			"e Well, guess that ends up our adventure for now",
			"p Already? I was having so much fun!",
			"e Awww sorry {{player.name}}, our writer has a limited imagination so this was really short",
			"e Nontheless, I hope you were able to learn a lot about this amazing world we live in.",
			"e I hope you got some inspiration and are ready to bring a new novel to the world!",
			"e I'll be waiting for it, good luck!",
			"notify End 2000",
			"end"
		],

		"Script":[
			function () {
				storage.scripting = true;
				return true;
			},
			"scene Library",
			"show e Normal with fadeIn",
			"e As a writer, having a simple language to write is important, that's why Monogatari has a Ren'py-like language.",
			"p Monogatari?...",
			"e Yes! Monogatari is the engine we are living on, it's important to keep it simple enough so writers, the ones that make up all our lifes, can focus on that, creating awesome stories for everyone",
			"e If Ren'py is familiar to you, then writing in Monogatari will be incredibly easy, if not, the syntax is very simple and you'll be writing in no time.",
			"p Well, it ain't familiar for me, that's for sure...",
			"show e Happy with fadeIn",
			"e No silly, I was talking to real you, who probably has played a lot of novels just like this one",
			"show e Normal with fadeIn",
			"e In the documentation you'll find all the examples you need to start writing.",
			"e Remember that Monogatari is open source, and released under the MIT License so you can use it for all your projects. I really hope to see your project very soon!",
			"e As you may know the web has evolved a lot, you'll be able to create visual novels as we know them, but also create more incredible things!",

			"e It is really up to your imagination!, there are tons and tons of APIs for the web, and you can easily integrate them to your visual novel",
			"e You name it, Paypal integration for in-app purchases and more, real-time information, you can even create the whole backend for your visual novel in order to have accounts, protected information etc. The sky is the limit!",

			"e Now, Monogatari is responsive, which means that everyone will be able to enjoy of your novel regardless the device they're on.",
			"e The inteface is written in HTML5 while the functionality as I said before is written in Javascript and all the styling is mainly CSS.",
			"e This means you could also access real time data and a lot more with the APIs available for the web, even connect it to social media.",
			"e Try Monogatari, extend it, and create Visual Novels like no one has seen before!",
			"jump Topics"
		],

		"Media":[
			function () {
				storage.media = true;
				return true;
			},
			"scene Sea",
			"show e Normal with fadeIn",
			"e So... media, what can we see in our world?",
			"e Well, images are what you are seeing right now but there are a few tricks left.",
			"e Videos for example are a nice way to show some more motion, let me show you what I mean.",
			"play video Dandelion",
			"show e Happy",
			"e Nice right? But that's not all, unless you've got this muted, you should be hearing to some music.",
			"show e Doubt",
			"e You can hear <i>music, sounds and voices</i> on a novel, there's only music on this one because... guess what?",
			"p The writer was kind of... lazy?",
			"e Exactly! But hey, there are many others who will take real advantage of all this posibilities!",
			"e He also sucks at drawing and design so you may be asking why does everything look so good?.",
			"e Well, the resources used here were made by really awesome people wiling to share their awesomeness, let's have some applauses for this people!",
			"display message Credits",
			"show e Normal",
			"e Now then, this world is a web based one, you may use any format supported by browsers, that means the basic JPG, PNG and GIF (yeah, animated GIFs) as well as others like SVG!",
			"e I really recommend you using SVG, it will surely enhance the experience for everyone since no matter what resolution their screen is, it will look awesome.",
			"p Screen?... Resolution? what are you talking about?",
			"e Oh! Guess I forgot to tell you we were being displayed inside a screen... think of it as a mirror to our reality and the resolution is just how good we look",
			"jump Topics"
		],

		"Playing":[
			function () {
				storage.playing = true;
				return true;
			},
			"scene Room",
			"show e Normal with fadeIn",
			"e Playing a visual novel made with Monogatari is an awesome experience.",
			"e If it's on the web, you won't need to install anything, just enter the page and play! as simple as that.",
			"e Now, it depends entirely on the developer but the features they can add to your game are infinite! so you will be enjoying a lot of things you've never seen in a VN before.",
			"e Sharing a game with friends is now even easier than before.",
			"jump Topics"
		]
	},
	"Español":{

		"Start":[
			{"Conditional": {
				"Condition": function () {
					return Storage.get ("played") == "true";
				},
				"True": {"Choice":{
					"Text": "Parece que ya has jugado el demo, ¿quieres saltarte la introducción?",
					"Skip":{
						"Text": "Saltarla",
						"Do": "jump Topics"
					},
					"Continue":{
						"Text": "Continuar",
						"Do": "jump Introduction"
					}
				}},
				"False": "jump Introduction"
			}}
		],

		"Introduction": [
			"clear",
			"scene black with fadeIn",
			{"Input": {
				"Text": "¿Cuál es tu nombre?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("PlayerName", input);
					storage.player.name = input;
				},
				"Warning": "Debes introducir un nombre!"
			}},
			"centered Sabes?...",
			"wait 500",
			"centered Al principio no había nada, sólo un vacio. Un vacio tan oscuro y silencioso...",
			"particles universe",
			"centered De pronto, ellos comenzaron a aparecer...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 0;
					return true;
				},
			}},
			"particles universe",
			"e Al principio no eran muchos pero poco a poco, más y más vinieron...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
			}},
			"particles universe",
			"e De decenas pasaron a ser cientos...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 50;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
			}},
			"particles universe",
			"e Cientos se convirtieron en miles...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 100;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 50;
					return true;
				},
			}},
			"particles universe",
			"e Pronto ya no estaban solamente ahí... estaban interactuando, uniendo fuerzas por un fin mayor...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
			}},
			"particles universe",
			"e Se estaban preparando...",
			"stop particles",

			"play music Theme loop",
			"scene Classroom",
			"show e Normal center with fadeIn",
			"e Ok chicos, eso es todo por hoy, pueden ir a casa.",

			"p Espera... qué?",

			"show e Doubt center with fadeIn",

			"e Oh,¿hay algún problema?",
			"p ¿De qué era esa historia? ¿No la terminarás?",

			"show e Happy with fadeIn",
			"e Ah! Ya veo, te dejé con intriga ¿no? Pues bien {{player.name}}, de hecho, ni siquiera yo sé de qué estaba hablando, estamos en la novela que alguien escribió ¿recuerdas?",

			"p Oh, cierto... no, espera, QUÉ?!",

			"show e Mad at center with fadeIn",

			"e Agh, no esto otra vez. Escucha, ¿este mundo en el que estamos? Ni siquiera es real! De hecho, tú ni siquiera eres tú mismo!",

			"e Tu yo real es alguien que está viendo esto en completa confusión mientras hablamos.",

			"e Yo ni siquiera tengo un nombre, ¿qué hay con eso? Vamos, supongo que te toca escogerlo.",

			{"Input": {
				"Text": "¿Cuál debería ser mi nombre?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("Evelyn_Name", input);
					storage.evelyn_name = input;
				},
				"Warning": "Escoge un buen nombre para mi por favor."
			}},

			"show e Normal with fadeIn",
			{"Conditional": {
				"Condition": function(){
					return storage.evelyn_name == "Evelyn";
				},
				"True": "e Evelyn... Es un nombre hermoso! Me encanta!",
				"False": "e {{evelyn_name}}... Sí, suena bien!!"
			}},

			"e Bueno, ya que aún noto confusión, qué tal si vemos lo que significa vivir en una novela visual, ¿te parece?",

			"p Si... claro... digo... el link decía demo así que... ¿supongo?",

			"show e Happy with fadeIn",

			"e Perfecto! Hay mucho por aprender!",

			"jump Topics",
		],

		"Topics": [
			"scene Classroom",
			"show e Happy with fadeIn",
			function () {
				Storage.set ("played", true);
				return true;
			},
			{"Choice":{
				"Text":	"Veamos, ¿sobre qué te interesa saber?",
				"Animations":{
					"Text": "Animaciones",
					"Do": "jump Animations"
				},
				"Media":{
					"Text": "Multimedia",
					"Do": "jump Media"
				},
				"Scripting":{
					"Text": "Scripting",
					"Do": "jump Script"
				},
				"Playing":{
					"Text": "Jugar",
					"Do": "jump Playing"
				},
				"Nothing": {
					"Text": "Nada",
					"Do": "jump Nothing",
					"Condition": function () {
						return storage.playing && storage.media && storage.scripting && storage.animations;
					}
				}
			}}
		],

		"Animations": [
			function () {
				storage.animations = true;
				return true;
			},
			"scene Classroom with fadeIn",
			"show e Normal with fadeIn",
			"e Oh, las animaciones son divertidas! Hacen que cosas raras nos pasen a nosotros y el mundo en el que vivimos.",
			"e Puedes animar casi todo por tu cuenta pero hay algunas animaciones predefinidas que puedes empezar a usar en personajes y fondos.",
			"e Por ejemplo, podemos tener un pequeño temblor para nosotros mismos.",
			"scene Classroom with shake infinite",
			"show e Normal with fadeIn",
			"e Oh espera, si el mundo se está moviendo ¿cómo es que yo estoy estática? eso no tiene sentido ¿o sí?",
			"show e Happy with shake infinite",
			"e Ah! Eso está mejor, como puedes ver las cosas se pueden poner muy locas por aquí por la única razón de que alguien quería divertirse.",
			"p Eh...¿eso no es... malo para nosotros?",
			"show e Doubt with shake infinite",
			"e ¿Malo? Espera a que escuches sobre como nuestra existencia acaba cuando cierran esto o peor, como nos da amnesia cada vez que se les olvida guardar!",
			"scene Classroom with zoomIn",
			"show e Normal with fadeIn",
			"e Pero no todo es malo, también podemos experimentar cosas que nadie más puede.",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 200;
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 100;
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
			}},
			"particles universe",

			"e Te apuesto a que no tienen de estos en donde tu yo real vive.",
			"p ¿Qué son estas cosas? ¿Puedo tocarlas?",

			"e Claro! Se llaman partículas, son utiles para crear efectos de  <i>aire, estrellas, nieve, lluvia</i> y bueno, practicamente un montón de cosas raras.",
			"e Si eres un tanto geek tal vez deberías saber que todas las animaciones son creadas principalmente con CSS pero también puedes utilizar JavaScript, la elección es tuya!",
			"stop particles",
			"jump Topics"
		],

		"Nothing":[
			"scene Home",
			"show e Normal with fadeIn",
			"e Supongo que esto termina nuestra aventura por ahora.",
			"p ¿Ya? Me estaba divirtiendo mucho!",
			"e Awww lo siento {{player.name}}, nuestro escritor tiene una imaginación limitada así que esto fue muy corto.",
			"e Sin embargo, espero que hayas podido aprender mucho del mundo en el que vivimos.",
			"e Espero también que esto te haya inspirado y próximamente traigas una nueva novela visual al mundo!",
			"e La estaré esperando! Buena Suerte!",
			"notify End 2000",
			"end"
		],

		"Script":[
			function () {
				storage.scripting = true;
				return true;
			},
			"scene Library",
			"show e Normal with fadeIn",
			"e Como escritor, es importante contar con un lenguaje sencillo, por eso Monogatari tiene un lenguaje similar al de Ren'py",
			"p Monogatari? ...",
			"e Sí. Monogatari es el engine en el que vivimos, es importante mantenerlo lo suficientemente simple para que los escritores, quienes crean nuestras vidas, puedan centrarse en eso, creando historias increíbles para todos",
			"e Si estás familiarizado con Ren'py, escribir en Monogatari será increíblemente fácil, si no, la sintaxis es muy simple y estarás escribiendo en muy poco tiempo",
			"p Bueno, no es familiar para mí, eso es seguro...",
			"show e Happy with fadeIn",
			"e No, estaba hablando con tu yo real quien probablemente ha jugado muchas novelas como esta.",
			"show e Normal with fadeIn",
			"e En la documentación encontrarás todos los ejemplos que necesitas para comenzar.",
			"e Recuerda que Monogatari es un proyecto de codigo abierto liberado bajo la licencia MIT asi que lo puedes usar para todos tus proyectos. ¡Espero ver tu proyecto pronto!",
			"e Como sabes, la web ha evolucionado mucho, podrás crear novelas visuales como las conocemos, y también crear cosas más increíbles!",
			"e ¡Realmente depende de tu imaginación!, hay miles de APIs para la web, y se pueden integrar fácilmente a su novela visual",
			"e Lo que sea, integración con Paypal para compras in-app y más, información en tiempo real, incluso se puede crear todo el backend para su novela visual con el fin de tener cuentas, información protegida etc. ¡El cielo es el límite!",
			"e  Monogatari es responsivo, por lo que todo el mundo será capaz de disfrutar de tu novela, independientemente del dispositivo en el que esten.",
			"e La inteface está escrita en HTML5, mientras que la funcionalidad está en Javascript y todo el estilo es en su mayoria CSS.",
			"e Esto significa que también se puede acceder a información en tiempo real y mucho más con las APIs disponibles para la web, incluso conectarlo a redes sociales.",
			"e ¡Prueba Monogatari, extiendelo, y crea Novelas Visuales como nunca nadie ha visto!",
			"jump Topics"
		],

		"Media":[
			function () {
				storage.media = true;
				return true;
			},
			"scene Sea",
			"show e Normal with fadeIn",
			"e Así que... multimedia, ¿Qué podemos ver en nuestro mundo?",
			"e En este momento estás viendo imagenes pero aún hay algunos trucos más.",
			"e Videos por ejemplo son una buena manera de mostrar más movimiento, permiteme mostrarte a lo que me refiero.",
			"play video Dandelion",
			"show e Happy",
			"e ¿Genial no? Pero eso no es todo. A menos que tengas esto en silencio, deberías estar escuchando un poco de música.",
			"show e Doubt",
			"e Puedes escuchar <i>música, sonidos y voces</i>  en una novela visual. Adivina por qué sólo hay música en esta.",
			"p ¿El escritor es... flojo?",
			"e Exacto! Pero seguramente muchos otros aprovecharan todas estas posibilidades.",
			"e También es malo dibujando así que tal vez te preguntes ¿por qué todo se ve tan bien?.",
			"e Pues, los recursos usados aquí fueron hechos por personas increibles dispuestas a compartir, tengamos un fuerte aplausa para ellos!",
			"display message Credits",
			"show e Normal",
			"e Ahora, este mundo está basado en la web así que puedes usar todos los formatos que soporten los navegadores. Eso significa JPG, PNG, GIF (sí, GIFs animados) y otros como SVG!",

			"e Realmente recomiedo usar SVG, seguramente mejorará la experiencia para todos ya que no importa la resolución de su pantalla, siempre se verá bien.",
			"p ¿Pantalla?... ¿Resolución? ¿De qué estás hablando?",

			"e Oh! Supongo que olvidé mencionar que estamos siendo mostrados dentro de una pantalla, piensa que es como un espejo a nuestra realidad y la resolución es que tan bien nos vemos.",
			"jump Topics"
		],

		"Playing":[
			function () {
				storage.playing = true;
				return true;
			},
			"scene Room",
			"show e Normal with fadeIn",
			"e Jugar una novela visual creada con Monogatari es una experiencia increíble.",
			"e Si está en la web, no necesitas instalar nada, solo entrar a la página y jugar, tan simple como eso.",
			"e Ahora, depende del desarrollador pero las caracteristicas que le pueden agregar a los juegos es infinita, asi que disfrutaras de cosas que nunca habias visto en una Novela Visual.",
			"e Compartir un juego con tus amigos es ahora más facil que nunca.",
			"jump Topics"
		]
	}
};