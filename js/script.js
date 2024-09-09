/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'End': {
		title: 'Things just got real!',
		body: 'You finished Monogatari 101.',
		icon: 'assets/icons/icon_192x192.png'
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	universe: 
	{
	  "autoPlay": true,
	  "background": {
		"color": {
		  "value": "transparent"
		},
		"image": "",
		"position": "",
		"repeat": "",
		"size": "",
		"opacity": 1
	  },
	  "backgroundMask": {
		"composite": "destination-out",
		"cover": {
		  "color": {
			"value": "#fff"
		  },
		  "opacity": 1
		},
		"enable": false
	  },
	  "clear": true,
	  "defaultThemes": {},
	  "delay": 0,
	  "fullScreen": {
		"enable": true,
		"zIndex": 0
	  },
	  "detectRetina": true,
	  "duration": 0,
	  "fpsLimit": 120,
	  "interactivity": {
		"detectsOn": "window",
		"events": {
		  "onClick": {
			"enable": true,
			"mode": "push"
		  },
		  "onDiv": {
			"selectors": [],
			"enable": false,
			"mode": [],
			"type": "circle"
		  },
		  "onHover": {
			"enable": true,
			"mode": "repulse",
			"parallax": {
			  "enable": false,
			  "force": 2,
			  "smooth": 10
			}
		  },
		  "resize": {
			"delay": 0.5,
			"enable": true
		  }
		},
		"modes": {
		  "trail": {
			"delay": 1,
			"pauseOnStop": false,
			"quantity": 1
		  },
		  "attract": {
			"distance": 200,
			"duration": 0.4,
			"easing": "ease-out-quad",
			"factor": 1,
			"maxSpeed": 50,
			"speed": 1
		  },
		  "bounce": {
			"distance": 200
		  },
		  "bubble": {
			"distance": 200,
			"duration": 0.4,
			"mix": false,
			"divs": {
			  "distance": 200,
			  "duration": 0.4,
			  "mix": false,
			  "selectors": []
			}
		  },
		  "connect": {
			"distance": 80,
			"links": {
			  "opacity": 0.5
			},
			"radius": 60
		  },
		  "grab": {
			"distance": 100,
			"links": {
			  "blink": false,
			  "consent": false,
			  "opacity": 1
			}
		  },
		  "push": {
			"default": true,
			"groups": [],
			"quantity": 4
		  },
		  "remove": {
			"quantity": 2
		  },
		  "repulse": {
			"distance": 200,
			"duration": 0.4,
			"factor": 100,
			"speed": 1,
			"maxSpeed": 50,
			"easing": "ease-out-quad",
			"divs": {
			  "distance": 200,
			  "duration": 0.4,
			  "factor": 100,
			  "speed": 1,
			  "maxSpeed": 50,
			  "easing": "ease-out-quad",
			  "selectors": []
			}
		  },
		  "slow": {
			"factor": 3,
			"radius": 200
		  },
		  "light": {
			"area": {
			  "gradient": {
				"start": {
				  "value": "#ffffff"
				},
				"stop": {
				  "value": "#000000"
				}
			  },
			  "radius": 1000
			},
			"shadow": {
			  "color": {
				"value": "#000000"
			  },
			  "length": 2000
			}
		  }
		}
	  },
	  "manualParticles": [],
	  "particles": {
		"bounce": {
		  "horizontal": {
			"value": 1
		  },
		  "vertical": {
			"value": 1
		  }
		},
		"collisions": {
		  "absorb": {
			"speed": 2
		  },
		  "bounce": {
			"horizontal": {
			  "value": 1
			},
			"vertical": {
			  "value": 1
			}
		  },
		  "enable": false,
		  "maxSpeed": 10,
		  "mode": "bounce",
		  "overlap": {
			"enable": true,
			"retries": 0
		  }
		},
		"color": {
		  "value": "#ff0000",
		  "animation": {
			"h": {
			  "count": 0,
			  "enable": true,
			  "speed": 20,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			},
			"s": {
			  "count": 0,
			  "enable": false,
			  "speed": 1,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			},
			"l": {
			  "count": 0,
			  "enable": false,
			  "speed": 1,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			}
		  }
		},
		"effect": {
		  "close": true,
		  "fill": true,
		  "options": {},
		  "type": []
		},
		"groups": {},
		"move": {
		  "angle": {
			"offset": 0,
			"value": 90
		  },
		  "attract": {
			"distance": 200,
			"enable": false,
			"rotate": {
			  "x": 3000,
			  "y": 3000
			}
		  },
		  "center": {
			"x": 50,
			"y": 50,
			"mode": "percent",
			"radius": 0
		  },
		  "decay": 0,
		  "distance": {},
		  "direction": "none",
		  "drift": 0,
		  "enable": true,
		  "gravity": {
			"acceleration": 9.81,
			"enable": false,
			"inverse": false,
			"maxSpeed": 50
		  },
		  "path": {
			"clamp": true,
			"delay": {
			  "value": 0
			},
			"enable": false,
			"options": {}
		  },
		  "outModes": {
			"default": "out",
			"bottom": "out",
			"left": "out",
			"right": "out",
			"top": "out"
		  },
		  "random": false,
		  "size": false,
		  "speed": 1,
		  "spin": {
			"acceleration": 0,
			"enable": false
		  },
		  "straight": false,
		  "trail": {
			"enable": false,
			"length": 10,
			"fill": {}
		  },
		  "vibrate": false,
		  "warp": false
		},
		"number": {
		  "density": {
			"enable": true,
			"width": 1920,
			"height": 1080
		  },
		  "limit": {
			"mode": "delete",
			"value": 0
		  },
		  "value": 80
		},
		"opacity": {
		  "value": 0.5,
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 2,
			"decay": 0,
			"delay": 0,
			"sync": false,
			"mode": "auto",
			"startValue": "random",
			"destroy": "none"
		  }
		},
		"reduceDuplicates": false,
		"shadow": {
		  "blur": 0,
		  "color": {
			"value": "#000"
		  },
		  "enable": false,
		  "offset": {
			"x": 0,
			"y": 0
		  }
		},
		"shape": {
		  "close": true,
		  "fill": true,
		  "options": {},
		  "type": "circle"
		},
		"size": {
		  "value": {
			"min": 1,
			"max": 3
		  },
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 5,
			"decay": 0,
			"delay": 0,
			"sync": false,
			"mode": "auto",
			"startValue": "random",
			"destroy": "none"
		  }
		},
		"stroke": {
		  "width": 0
		},
		"zIndex": {
		  "value": 0,
		  "opacityRate": 1,
		  "sizeRate": 1,
		  "velocityRate": 1
		},
		"destroy": {
		  "bounds": {},
		  "mode": "none",
		  "split": {
			"count": 1,
			"factor": {
			  "value": 3
			},
			"rate": {
			  "value": {
				"min": 4,
				"max": 9
			  }
			},
			"sizeOffset": true,
			"particles": {}
		  }
		},
		"roll": {
		  "darken": {
			"enable": false,
			"value": 0
		  },
		  "enable": false,
		  "enlighten": {
			"enable": false,
			"value": 0
		  },
		  "mode": "vertical",
		  "speed": 25
		},
		"tilt": {
		  "value": 0,
		  "animation": {
			"enable": false,
			"speed": 0,
			"decay": 0,
			"sync": false
		  },
		  "direction": "clockwise",
		  "enable": false
		},
		"twinkle": {
		  "lines": {
			"enable": false,
			"frequency": 0.05,
			"opacity": 1
		  },
		  "particles": {
			"enable": false,
			"frequency": 0.05,
			"opacity": 1
		  }
		},
		"wobble": {
		  "distance": 5,
		  "enable": false,
		  "speed": {
			"angle": 50,
			"move": 10
		  }
		},
		"life": {
		  "count": 0,
		  "delay": {
			"value": 0,
			"sync": false
		  },
		  "duration": {
			"value": 0,
			"sync": false
		  }
		},
		"rotate": {
		  "value": 0,
		  "animation": {
			"enable": false,
			"speed": 0,
			"decay": 0,
			"sync": false
		  },
		  "direction": "clockwise",
		  "path": false
		},
		"orbit": {
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 1,
			"decay": 0,
			"delay": 0,
			"sync": false
		  },
		  "enable": false,
		  "opacity": 1,
		  "rotation": {
			"value": 45
		  },
		  "width": 1
		},
		"links": {
		  "blink": false,
		  "color": {
			"value": "#ffffff"
		  },
		  "consent": false,
		  "distance": 150,
		  "enable": false,
		  "frequency": 1,
		  "opacity": 0.4,
		  "shadow": {
			"blur": 5,
			"color": {
			  "value": "#000"
			},
			"enable": false
		  },
		  "triangles": {
			"enable": false,
			"frequency": 1
		  },
		  "width": 1,
		  "warp": false
		},
		"repulse": {
		  "value": 0,
		  "enabled": false,
		  "distance": 1,
		  "duration": 1,
		  "factor": 1,
		  "speed": 1
		}
	  },
	  "pauseOnBlur": true,
	  "pauseOnOutsideViewport": true,
	  "responsive": [],
	  "smooth": false,
	  "style": {},
	  "themes": [],
	  "zLayers": 100,
	  "name": "Basic",
	  "motion": {
		"disable": false,
		"reduce": {
		  "factor": 4,
		  "value": true
		}
	  }
	}	
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'Artists': {
		'Backgrounds': '<a href="https://queenbeebee.carrd.co/" target="_blank">Queen BeeBee</a>',
		'Sprites': '<a href="https://queenbeebee.carrd.co/" target="_blank">Queen BeeBee</a>'
	},
	'Audio': {
		'Music': `<span xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'> _ghost</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</span>`
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'Theme': '_ghost_-_Reverie_(small_theme).mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'Dandelion': 'DandelionTimelapse.mp4'
});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	morning: 'morning.png',
	afternoon: 'afternoon.png',
	night: 'night.png',
	nightLight: 'night-light.png',
});


// Define the Characters
monogatari.characters ({
	p: {
		name: '{{player.name}}',
		color: '#ff3951'
	},
	y: {
		name: '{{yui_name}}',
		color: '#00bfff',
		directory: 'yui',
		sprites :{
			angry: 'angry.png',
			smiling: 'smiling.png',
			happy: 'happy.png',
			worried: 'worried.png',
		}
	}
});

const { Storage } = monogatari;

monogatari.script ({
	// The game starts here.
	'English':{
		'Start':[
			{'Conditional': {
				'Condition': function () {
					return Storage.get ('played') == 'true';
				},
				'True': {'Choice':{
					'Text': 'It seems you have already played the demo, do you wish to skip the introduction?',
					'Skip':{
						'Text': 'Skip',
						'Do': 'jump Topics'
					},
					'Continue':{
						'Text': 'Continue',
						'Do': 'jump Introduction'
					}
				}},
				'False': 'jump Introduction'
			}}
		],

		'Introduction': [
			'clear',
			'show scene black with fadeIn',
			{'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					Storage.set ('PlayerName', input);
					storage.player.name = input;
					this.storage ({ player: { name: input } });	
					return true;
				},
				'Warning': 'You must enter a name!'
			}},
			'centered You know?...',
			'centered At first, there was nothing, only void. A void so dark and silent...',
			'show particles universe',
			'centered Then, suddenly, they started to appear...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 20;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 80;
					return true;
				},
			}},
			'show particles universe',
			'y There weren\'t many at first but little by little, more and more came...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 50;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 20;
					return true;
				},
			}},
			'show particles universe',
			'y Tenths became hundreds...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 80;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 50;
					return true;
				},
			}},
			'show particles universe',
			'y Hundreds became thousands...',
			'y Soon they weren\'t just there... they were interacting, joining forces for a higher goal...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.links.enable = true;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.links.enable = false;
					return true;
				},
			}},
			'show particles universe',
			'y They were getting ready...',
			'hide particles',

			'play music Theme',
			'show scene morning',
			'show character y happy center with fadeIn',
			'y Ok guys, that\'s it for today, you can go home.',

			'p Wait... what?',

			'show character y worried center with fadeIn',

			'y Oh, is there a problem?',
			'p What was that story about? Aren\'t you going to finish it?',

			'show character y smiling with fadeIn',
			'y Ah! I see, got you intrigued haven\'t I? Well {{player.name}}, as a matter of fact not even I know what I was talking about, we are on a novel someone wrote remember?',

			'p Oh, right... no, wait, WHAT?!',

			'show character y angry at center with fadeIn',

			'y Agh, not this again. Listen, this world we are in? It\'s not even real! In fact, you are not even you!',

			'y The real you is someone looking at this in a very confused manner as we speak.',

			'y I don\'t even get to have a name I mean, what\'s up with that? Come on now, guess you get to choose this.',

			{'Input': {
				'Text': 'What should be my name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					Storage.set ('yui_name', input);
					this.storage ({ yui_name: input });
					return true;
				},
				'Warning': 'Choose a nice name for me please.'
			}},

			'show character y happy with fadeIn',
			{'Conditional': {
				'Condition': function(){
					return this.storage('yui_name') == 'Yui';
				},
				'True': 'y Yui... That\'s a lovely name! I love it!',
				'False': 'y {{yui_name}}... Yeah, sounds good!'
			}},

			'y All right, since you seem a little bit confused let\'s see what living on a visual novel really means shall we?',

			'p Yeah... sure... I mean... the link did say demo so... I guess?',

			'show character y smiling with fadeIn',

			'y Great! We have so much to learn!',

			'jump Topics',
		],

		'Topics': [
			'show scene morning',
			'show character y smiling with fadeIn',
			function () {
				Storage.set ('played', true);
				return true;
			},
			{'Choice':{
				'Text':	'Let\'s see, what do you want to know about?',
				'Animations':{
					'Text': 'Animations',
					'Do': 'jump Animations'
				},
				'Media':{
					'Text': 'Multimedia',
					'Do': 'jump Media'
				},
				'Scripting':{
					'Text': 'Scripting',
					'Do': 'jump Script'
				},
				'Playing':{
					'Text': 'Playing',
					'Do': 'jump Playing'
				},
				'Nothing': {
					'Text': 'Nothing',
					'Do': 'jump Nothing',
					'Condition': function () {
						const { playing, media, scripting, animations } = this.storage();
						return playing && media && scripting && animations;
					}
				}
			}}
		],

		'Animations': [
			function () {
				this.storage({ animations: true });
				return true;
			},
			'show scene morning with fadeIn',
			'show character y happy with fadeIn',
			'y Oh, animations are fun! They make weird things happen to us and the world we live in.',
			'y You can animate pretty much anything yourself but there are some predefined animations that you can start using in both backgrounds and us characters',
			'y For example, we can have a small earthquake just for ourselves.',
			'show scene morning with shake infinite',
			'show character y happy with fadeIn',
			'y Oh wait, if the world is moving how come I\'m standing still, that doesn\'t make any sense does it?',
			'show character y smiling with shake infinite',
			'y Ah! That\'s more like it, as you can see, things can get real weird around here for no other reason than someone wanting to have fun',
			'p Eh... isn\'t that kind of... bad for us?',
			'show character y worried with shake infinite',
			'y Bad? Wait till you hear how our existence ends as soon as they close this or worse, how we get amnesia every time they forget to save!',
			'show scene morning with zoomIn',
			'show character y happy with fadeIn',
			'y But hey, things aren\'t so bad, we also get to experience things that no one else can.',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 200;
					this.action ('particles').particles ('universe').particles.links.enable = false;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 100;
					this.action ('particles').particles ('universe').particles.links.enable = true;
					return true;
				},
			}},
			'show particles universe',

			'y I bet they don\'t have this things where the real you is from.',
			'p What are this things? Can I touch them?',

			'y Sure you can! These are called particles, useful for creating some effects like <i>wind, stars, snow, rain</i> and well, pretty much all sorts of weird stuff.',
			'y If you are the geeky type, then you should know all animations are mainly achieved through CSS but you can use JavaScript as well, the choice is yours!',
			'hide particles',
			'jump Topics'
		],

		'Nothing':[
			'show scene nightLight',
			'show character y happy with fadeIn',
			'y Well, guess that ends up our adventure for now',
			'p Already? I was having so much fun!',
			'y Awww sorry {{player.name}}, our writer has a limited imagination so this was really short',
			'y Nontheless, I hope you were able to learn a lot about this amazing world we live in.',
			'y I hope you got some inspiration and are ready to bring a new novel to the world!',
			'y I\'ll be waiting for it, good luck!',
			'notify End 2000',
			'end'
		],

		'Script':[
			function () {
				this.storage({ scripting: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y As a writer, having a simple language to write is important, that\'s why Monogatari has a Ren\'py-like language.',
			'p Monogatari?...',
			'y Yes! Monogatari is the engine we are living on, it\'s important to keep it simple enough so writers, the ones that make up all our lifes, can focus on that, creating awesome stories for everyone',
			'y If Ren\'py is familiar to you, then writing in Monogatari will be incredibly easy, if not, the syntax is very simple and you\'ll be writing in no time.',
			'p Well, it ain\'t familiar for me, that\'s for sure...',
			'show character y smiling with fadeIn',
			'y No silly, I was talking to real you, who probably has played a lot of novels just like this one',
			'show character y happy with fadeIn',
			'y In the documentation you\'ll find all the examples you need to start writing.',
			'y Remember that Monogatari is open source, and released under the MIT License so you can use it for all your projects. I really hope to see your project very soon!',
			'y As you may know the web has evolved a lot, you\'ll be able to create visual novels as we know them, but also create more incredible things!',

			'y It is really up to your imagination!, there are tons and tons of APIs for the web, and you can easily integrate them to your visual novel',
			'y You name it, Paypal integration for in-app purchases and more, real-time information, you can even create the whole backend for your visual novel in order to have accounts, protected information etc. The sky is the limit!',

			'y Now, Monogatari is responsive, which means that everyone will be able to enjoy of your novel regardless the device they\'re on.',
			'y The inteface is written in HTML5 while the functionality as I said before is written in Javascript and all the styling is mainly CSS.',
			'y This means you could also access real time data and a lot more with the APIs available for the web, even connect it to social media.',
			'y Try Monogatari, extend it, and create Visual Novels like no one has seen before!',
			'jump Topics'
		],

		'Media':[
			function () {
				this.storage({ media: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y So... media, what can we see in our world?',
			'y Well, images are what you are seeing right now but there are a few tricks left.',
			'y Videos for example are a nice way to show some more motion, let me show you what I mean.',
			'show video Dandelion background with fadeIn',
			'show character y smiling',
			'y Nice right? But that\'s not all, unless you\'ve got this muted, you should be hearing to some music.',
			'hide video Dandelion',
			'show character y worried',
			'y You can hear <i>music, sounds and voices</i> on a novel, there\'s only music on this one because... guess what?',
			'p The writer was kind of... lazy?',
			'y Exactly! But hey, there are many others who will take real advantage of all this posibilities!',
			'y He also sucks at drawing and design so you may be asking why does everything look so good?.',
			'y Well, the resources used here were made by really awesome people wiling to share their awesomeness!',
			'show character y happy',
			'y Now then, this world is a web based one, you may use any format supported by browsers, that means the basic JPG, PNG and GIF (yeah, animated GIFs) as well as others like SVG!',
			'y I really recommend you using SVG, it will surely enhance the experience for everyone since no matter what resolution their screen is, it will look awesome.',
			'p Screen?... Resolution? what are you talking about?',
			'y Oh! Guess I forgot to tell you we were being displayed inside a screen... think of it as a mirror to our reality and the resolution is just how good we look',
			'jump Topics'
		],

		'Playing':[
			function () {
				this.storage({ playing: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y Playing a visual novel made with Monogatari is an awesome experience.',
			'y If it\'s on the web, you won\'t need to install anything, just enter the page and play! as simple as that.',
			'y Now, it depends entirely on the developer but the features they can add to your game are infinite! so you will be enjoying a lot of things you\'ve never seen in a VN before.',
			'y Sharing a game with friends is now even easier than before.',
			'jump Topics'
		]
	},
	'Español':{

		'Start':[
			{'Conditional': {
				'Condition': function () {
					return Storage.get ('played') == 'true';
				},
				'True': {'Choice':{
					'Text': 'Parece que ya has jugado el demo, ¿quieres saltarte la introducción?',
					'Skip':{
						'Text': 'Saltarla',
						'Do': 'jump Topics'
					},
					'Continue':{
						'Text': 'Continuar',
						'Do': 'jump Introduction'
					}
				}},
				'False': 'jump Introduction'
			}}
		],

		'Introduction': [
			'clear',
			'show scene black with fadeIn',
			{'Input': {
				'Text': '¿Cuál es tu nombre?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					Storage.set ('PlayerName', input);
					this.storage ({ player: { name: input } });
				},
				'Warning': 'Debes introducir un nombre!'
			}},
			'centered Sabes?...',
			'centered Al principio no había nada, sólo un vacio. Un vacio tan oscuro y silencioso...',
			'show particles universe',
			'centered De pronto, ellos comenzaron a aparecer...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 10;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 0;
					return true;
				},
			}},
			'show particles universe',
			'y Al principio no eran muchos pero poco a poco, más y más vinieron...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 20;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 10;
					return true;
				},
			}},
			'show particles universe',
			'y De decenas pasaron a ser cientos...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 50;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 20;
					return true;
				},
			}},
			'show particles universe',
			'y Cientos se convirtieron en miles...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 100;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 50;
					return true;
				},
			}},
			'show particles universe',
			'y Pronto ya no estaban solamente ahí... estaban interactuando, uniendo fuerzas por un fin mayor...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.links.enable = true;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.links.enable = false;
					return true;
				},
			}},
			'show particles universe',
			'y Se estaban preparando...',
			'hide particles',

			'play music Theme loop',
			'show scene morning',
			'show character y happy center with fadeIn',
			'y Ok chicos, eso es todo por hoy, pueden ir a casa.',

			'p Espera... qué?',

			'show character y worried center with fadeIn',

			'y Oh,¿hay algún problema?',
			'p ¿De qué era esa historia? ¿No la terminarás?',

			'show character y smiling with fadeIn',
			'y Ah! Ya veo, te dejé con intriga ¿no? Pues bien {{player.name}}, de hecho, ni siquiera yo sé de qué estaba hablando, estamos en la novela que alguien escribió ¿recuerdas?',

			'p Oh, cierto... no, espera, QUÉ?!',

			'show character y angry at center with fadeIn',

			'y Agh, no esto otra vez. Escucha, ¿este mundo en el que estamos? Ni siquiera es real! De hecho, tú ni siquiera eres tú mismo!',

			'y Tu yo real es alguien que está viendo esto en completa confusión mientras hablamos.',

			'y Yo ni siquiera tengo un nombre, ¿qué hay con eso? Vamos, supongo que te toca escogerlo.',

			{'Input': {
				'Text': '¿Cuál debería ser mi nombre?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					Storage.set ('yui_name', input);
					this.storage ({ yui_name: input });
				},
				'Warning': 'Escoge un buen nombre para mi por favor.'
			}},

			'show character y happy with fadeIn',
			{'Conditional': {
				'Condition': function(){
					return this.storage('yui_name') == 'Evelyn';
				},
				'True': 'y Evelyn... Es un nombre hermoso! Me encanta!',
				'False': 'y {{yui_name}}... Sí, suena bien!!'
			}},

			'y Bueno, ya que aún noto confusión, qué tal si vemos lo que significa vivir en una novela visual, ¿te parece?',

			'p Si... claro... digo... el link decía demo así que... ¿supongo?',

			'show character y smiling with fadeIn',

			'y Perfecto! Hay mucho por aprender!',

			'jump Topics',
		],

		'Topics': [
			'show scene morning',
			'show character y smiling with fadeIn',
			function () {
				Storage.set ('played', true);
				return true;
			},
			{'Choice':{
				'Text':	'Veamos, ¿sobre qué te interesa saber?',
				'Animations':{
					'Text': 'Animaciones',
					'Do': 'jump Animations'
				},
				'Media':{
					'Text': 'Multimedia',
					'Do': 'jump Media'
				},
				'Scripting':{
					'Text': 'Scripting',
					'Do': 'jump Script'
				},
				'Playing':{
					'Text': 'Jugar',
					'Do': 'jump Playing'
				},
				'Nothing': {
					'Text': 'Nada',
					'Do': 'jump Nothing',
					'Condition': function () {
						const { playing, media, scripting, animations } = this.storage();
						return playing && media && scripting && animations;
					}
				}
			}}
		],

		'Animations': [
			function () {
				this.storage({ animations: true });
				return true;
			},
			'show scene morning with fadeIn',
			'show character y happy with fadeIn',
			'y Oh, las animaciones son divertidas! Hacen que cosas raras nos pasen a nosotros y el mundo en el que vivimos.',
			'y Puedes animar casi todo por tu cuenta pero hay algunas animaciones predefinidas que puedes empezar a usar en personajes y fondos.',
			'y Por ejemplo, podemos tener un pequeño temblor para nosotros mismos.',
			'show scene morning with shake infinite',
			'show character y happy with fadeIn',
			'y Oh espera, si el mundo se está moviendo ¿cómo es que yo estoy estática? eso no tiene sentido ¿o sí?',
			'show character y smiling with shake infinite',
			'y Ah! Eso está mejor, como puedes ver las cosas se pueden poner muy locas por aquí por la única razón de que alguien quería divertirse.',
			'p Eh...¿eso no es... malo para nosotros?',
			'show character y worried with shake infinite',
			'y ¿Malo? Espera a que escuches sobre como nuestra existencia acaba cuando cierran esto o peor, como nos da amnesia cada vez que se les olvida guardar!',
			'show scene morning with zoomIn',
			'show character y happy with fadeIn',
			'y Pero no todo es malo, también podemos experimentar cosas que nadie más puede.',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 200;
					this.action ('particles').particles ('universe').particles.links.enable = false;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 100;
					this.action ('particles').particles ('universe').particles.links.enable = true;
					return true;
				},
			}},
			'show particles universe',

			'y Te apuesto a que no tienen de estos en donde tu yo real vive.',
			'p ¿Qué son estas cosas? ¿Puedo tocarlas?',

			'y Claro! Se llaman partículas, son utiles para crear efectos de  <i>aire, estrellas, nieve, lluvia</i> y bueno, practicamente un montón de cosas raras.',
			'y Si eres un tanto geek tal vez deberías saber que todas las animaciones son creadas principalmente con CSS pero también puedes utilizar JavaScript, la elección es tuya!',
			'hide particles',
			'jump Topics'
		],

		'Nothing':[
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y Supongo que esto termina nuestra aventura por ahora.',
			'p ¿Ya? Me estaba divirtiendo mucho!',
			'y Awww lo siento {{player.name}}, nuestro escritor tiene una imaginación limitada así que esto fue muy corto.',
			'y Sin embargo, espero que hayas podido aprender mucho del mundo en el que vivimos.',
			'y Espero también que esto te haya inspirado y próximamente traigas una nueva novela visual al mundo!',
			'y La estaré esperando! Buena Suerte!',
			'notify End 2000',
			'end'
		],

		'Script':[
			function () {
				this.storage({ scripting: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y Como escritor, es importante contar con un lenguaje sencillo, por eso Monogatari tiene un lenguaje similar al de Ren\'py',
			'p Monogatari? ...',
			'y Sí. Monogatari es el engine en el que vivimos, es importante mantenerlo lo suficientemente simple para que los escritores, quienes crean nuestras vidas, puedan centrarse en eso, creando historias increíbles para todos',
			'y Si estás familiarizado con Ren\'py, escribir en Monogatari será increíblemente fácil, si no, la sintaxis es muy simple y estarás escribiendo en muy poco tiempo',
			'p Bueno, no es familiar para mí, eso es seguro...',
			'show character y smiling with fadeIn',
			'y No, estaba hablando con tu yo real quien probablemente ha jugado muchas novelas como esta.',
			'show character y happy with fadeIn',
			'y En la documentación encontrarás todos los ejemplos que necesitas para comenzar.',
			'y Recuerda que Monogatari es un proyecto de codigo abierto liberado bajo la licencia MIT asi que lo puedes usar para todos tus proyectos. ¡Espero ver tu proyecto pronto!',
			'y Como sabes, la web ha evolucionado mucho, podrás crear novelas visuales como las conocemos, y también crear cosas más increíbles!',
			'y ¡Realmente depende de tu imaginación!, hay miles de APIs para la web, y se pueden integrar fácilmente a su novela visual',
			'y Lo que sea, integración con Paypal para compras in-app y más, información en tiempo real, incluso se puede crear todo el backend para su novela visual con el fin de tener cuentas, información protegida etc. ¡El cielo es el límite!',
			'y  Monogatari es responsivo, por lo que todo el mundo será capaz de disfrutar de tu novela, independientemente del dispositivo en el que esten.',
			'y La inteface está escrita en HTML5, mientras que la funcionalidad está en Javascript y todo el estilo es en su mayoria CSS.',
			'y Esto significa que también se puede acceder a información en tiempo real y mucho más con las APIs disponibles para la web, incluso conectarlo a redes sociales.',
			'y ¡Prueba Monogatari, extiendelo, y crea Novelas Visuales como nunca nadie ha visto!',
			'jump Topics'
		],

		'Media':[
			function () {
				this.storage({ media: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y Así que... multimedia, ¿Qué podemos ver en nuestro mundo?',
			'y En este momento estás viendo imagenes pero aún hay algunos trucos más.',
			'y Videos por ejemplo son una buena manera de mostrar más movimiento, permiteme mostrarte a lo que me refiero.',
			'show video Dandelion background with fadeIn',
			'show character y smiling',
			'y ¿Genial no? Pero eso no es todo. A menos que tengas esto en silencio, deberías estar escuchando un poco de música.',
			'hide video Dandelion',
			'show character y worried',
			'y Puedes escuchar <i>música, sonidos y voces</i>  en una novela visual. Adivina por qué sólo hay música en esta.',
			'p ¿El escritor es... flojo?',
			'y Exacto! Pero seguramente muchos otros aprovecharan todas estas posibilidades.',
			'y También es malo dibujando así que tal vez te preguntes ¿por qué todo se ve tan bien?.',
			'y Pues, los recursos usados aquí fueron hechos por personas increibles!',
			'show character y happy',
			'y Ahora, este mundo está basado en la web así que puedes usar todos los formatos que soporten los navegadores. Eso significa JPG, PNG, GIF (sí, GIFs animados) y otros como SVG!',

			'y Realmente recomiedo usar SVG, seguramente mejorará la experiencia para todos ya que no importa la resolución de su pantalla, siempre se verá bien.',
			'p ¿Pantalla?... ¿Resolución? ¿De qué estás hablando?',

			'y Oh! Supongo que olvidé mencionar que estamos siendo mostrados dentro de una pantalla, piensa que es como un espejo a nuestra realidad y la resolución es que tan bien nos vemos.',
			'jump Topics'
		],

		'Playing':[
			function () {
				this.storage({ playing: true });
				return true;
			},
			'show scene Room',
			'show character y happy with fadeIn',
			'y Jugar una novela visual creada con Monogatari es una experiencia increíble.',
			'y Si está en la web, no necesitas instalar nada, solo entrar a la página y jugar, tan simple como eso.',
			'y Ahora, depende del desarrollador pero las caracteristicas que le pueden agregar a los juegos es infinita, asi que disfrutaras de cosas que nunca habias visto en una Novela Visual.',
			'y Compartir un juego con tus amigos es ahora más facil que nunca.',
			'jump Topics'
		]
	}
});