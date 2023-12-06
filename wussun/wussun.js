;
(function(window) {
	"use strict";

	var defaultSetting = {
		icon: "https://i.imgur.com/2GcljEi.jpg",
		name: "JW Tạ Linh 💗💞💘 ",
		info: "",
		z_index: 9999,
		blur: ".container",
		lang: "en-US",
		mini: true,
		darkmode: 1,
		maxWidth: "480px",
		fontFamily: "",
		closeDuration: 60000,
		defaultClosed: false,
		defaultLinkIcon: "fa-solid fa-paw",
		fontawesome: {
			"type": "svg",
			"CDN": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/js/all.min.js"
		},
		hitokoto: {
			"enable": false,
			"cats": [],
			"color": "#70a1ff",
			"offline": "Developer"
		},
        iconLinks: [{
            "title": "My Github",
            "url": "https://github.com/jwtalinh",
            "icon": "fa-brands fa-github",
            "target": "_blank"
        }, {
            "title": "My Blog",
            "url": "https://www.facebook.com/talinh22?locale=vi_VN",
            "icon": "fa-solid fa-blog"
        },],
        links: [{
            "title": "My Blog",
            "url": "https://www.facebook.com/talinh22?locale=vi_VN",
            "type": "primary",
            "target": "_blank"
        }, {
            "title": "My Github",
            "url": "https://github.com/jwtalinh",
        },],
    };
	var i18n = new Map([
        
		["en-US", {
			"close": "Ignore it"
		}],
		["vi-VN", {
			"close": "Đóng"
		}]
	]);
	var darkmode = [0, 1, 2, 3];
	var fontaCDN = ["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/js/all.min.js",
		"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/all.min.css"
	]
	Object.freeze(defaultSetting);
	var MyukiGCard = function(option, undefined) {
		return new MyukiGCard.fn.init(option, undefined);
	};
	MyukiGCard.prototype = MyukiGCard.fn = {
		constructor: MyukiGCard,

		init: function(option, undefined) {
			let _this = this;
			_this.help();
			_this._setting = extend({}, defaultSetting, option);
			let wussunCard = document.createElement("div");
			addClass("wussun-card_mask", wussunCard);
			wussunCard.style.zIndex = parseInt(_this._setting.z_index);
			let cardBox = document.createElement("div");
			addClass("wussun-card_box", cardBox);
			_this._setting.fontFamily != "" ? cardBox.style.fontFamily = _this._setting.fontFamily : "";
			cardBox.style.maxWidth = _this._setting.maxWidth;
			let cardIcon = document.createElement("div");
			addClass("wussun-card_icon", cardIcon);
			let img = document.createElement("img");
			img.setAttribute("src", _this._setting.icon);
			img.setAttribute("alt", _this._setting.name);
			cardIcon.appendChild(img);
			cardBox.appendChild(cardIcon);
			let cardName = document.createElement("div");
			addClass("wussun-card_title", cardName);
			cardName.innerText = _this._setting.name;
			cardBox.appendChild(cardName);
			let cardInfo = document.createElement("div");
			addClass("wussun-card_info", cardInfo);
			if (_this._setting.info != "") {
				let p = document.createElement("p");
				p.innerText = _this._setting.info;
				cardInfo.appendChild(p);
			}
			
			cardBox.appendChild(cardInfo);
		
			let iconList = document.createElement("div");
			addClass("wussun-card_icon-list", iconList);
			let iconLinks = _this._setting.iconLinks;
			for (let i = 0; i < iconLinks.length; i++) {
				let iconLink = document.createElement("a");
				let icon = document.createElement("i");
				addClass("wussun-card_icon-item", iconLink);
				iconLinks[i].title ? iconLink.setAttribute("title", iconLinks[i].title) : "";
				iconLinks[i].icon ? addClass(iconLinks[i].icon, icon) : addClass(_this._setting
					.defaultLinkIcon, icon);
				iconLink.appendChild(icon);
				iconLinks[i].target ? iconLink.setAttribute("target", iconLinks[i].target) : "";
				iconLinks[i].url && !iconLinks[i].func ? iconLink.setAttribute("href", iconLinks[i].url) :
					iconLink.setAttribute(
						"href", "javascript:void(0);");
				iconLinks[i].func && typeof iconLinks[i].func == 'function' ? iconLink.addEventListener(
					'click',
					iconLinks[i].func) : "";
				iconList.appendChild(iconLink);
			}
			if (iconLinks.length > 0) {
				let cdnType = _this._setting.fontawesome.type == "svg" ? "script" : "link";
				let newTag = document.createElement(cdnType);
				let script = document.getElementsByTagName("script")[0];
				if (cdnType == "script") {
					newTag.src = _this._setting.fontawesome.CDN.endsWith(".js") ? _this._setting.fontawesome
						.CDN : fontaCDN[0];
				} else {
					newTag.rel = "stylesheet";
					newTag.href = _this._setting.fontawesome.CDN.endsWith(".css") ? _this._setting
						.fontawesome.CDN : fontaCDN[1];
				}
				script.parentNode.insertBefore(newTag, script);
				cardBox.appendChild(iconList);
			}
			let cardBtnList = document.createElement("div");
			addClass("wussun-card_btn-list", cardBtnList);
			let links = _this._setting.links;
			for (let i = 0; i < links.length; i++) {
				let btn = document.createElement("a");
				addClass("wussun-card_btn", btn);
				links[i].type ? addClass("btn-" + links[i].type, btn) : addClass("btn-default", btn);
				links[i].type ? btn.setAttribute("btn-type", links[i].type) : btn.setAttribute("btn-type",
					"btn-default");
				links[i].target ? btn.setAttribute("target", links[i].target) : "";
				links[i].url && !links[i].func ? btn.setAttribute("href", links[i].url) : btn.setAttribute(
					"href", "javascript:void(0);");
				btn.innerText = links[i].title;
				links[i].func && typeof links[i].func == 'function' ? btn.addEventListener('click', links[i]
					.func) : "";
				cardBtnList.appendChild(btn);
			}
			let closeBtn = document.createElement("a");
			addClass("wussun-card_btn", closeBtn);
			addClass("btn-close", closeBtn);
			closeBtn.setAttribute("href", "javascript:void(0);");
			closeBtn.setAttribute("id", "wussun-card_close");
			closeBtn.setAttribute("btn-type", "btn-close");
			let lang = i18n.get(_this._setting.lang) ? _this._setting.lang : document.documentElement
				.lang !=
				"" ? document.documentElement.lang : defaultSetting.lang;
			closeBtn.innerText = i18n.get(lang) ? i18n.get(lang).close : i18n.get(defaultSetting.lang)
				.close;
			closeBtn.addEventListener("click", function() {
                wussunplay();
				_this.close();
			});
			cardBtnList.appendChild(closeBtn);
			cardBox.appendChild(cardBtnList);
			// darkmode
			let dmode = darkmode.includes(_this._setting.darkmode) ? _this._setting.darkmode :
				defaultSetting
				.darkmode;
			switch (dmode) {
				case 0:
					removeClass("darkmode", cardBox);
					break;
				case 1:
					window.matchMedia("(prefers-color-scheme: dark)").matches ? addClass("darkmode",
						cardBox) : "";
					break;
				case 2:
					let hour = new Date().getHours();
					hour < 6 || hour >= 18 ? addClass("darkmode", cardBox) : "";
					break;
				case 3:
					addClass("darkmode", cardBox);
				default:
					break;

			}
			wussunCard.appendChild(cardBox);
			let DoNotShowMGC = getCookie('DoNotShowMGC');
			if (DoNotShowMGC != "" && DoNotShowMGC != null && DoNotShowMGC == "yes") {
				addClass('hidden', wussunCard);
				this._closed = true;
			}
			if (this._setting.defaultClosed) {
				this._closed = true;
				addClass("closed", cardBox);
				addClass("hidden", wussunCard);
			}
			document.body.appendChild(wussunCard);
			if (_this._setting.mini == true) {
				let cardMini = document.createElement("div");
				addClass("wussun-card_mini", cardMini);
				if (this._setting.defaultClosed) {
					addClass("shown", cardMini);
				}
				let miniImg = document.createElement("img");
				miniImg.setAttribute("src", _this._setting.icon);
				cardMini.appendChild(miniImg);
				cardMini.style.zIndex = _this._setting.z_index;
				cardMini.addEventListener("click", function() {
					_this.open(() => {
						removeClass("shown", cardMini);
					});
				});
				if (DoNotShowMGC != "" && DoNotShowMGC != null && DoNotShowMGC == "yes") {
					addClass('shown', cardMini);
				}
				document.body.appendChild(cardMini);
			}
			let container = document.querySelectorAll(_this._setting.blur)[0];
			if (container != undefined) {
				if (DoNotShowMGC != "yes" && !this._setting.defaultClosed) {
					addClass("blur", container);

				}
			}

			this._GCard = wussunCard;
			return this;
		},

		getSetting: function() {
			return this._setting;
		},

		close: function(closecallback) {
			if (!this._closed) {
				this._closed = true;
			} else {
				console.warn("MyukiGCard closed.");
				return;
			}
			let GCard = this._GCard;
			let cardBox = GCard.querySelectorAll(".wussun-card_box")[0];

			cardBox.addEventListener("animationend", cfun);
			// cardBox.removeEventListener("animationend", cfun);

			addClass("closed", cardBox);
			if (typeof closecallback == "function") {
				closecallback();
			}

			setCookie('DoNotShowMGC', 'yes', this._setting.closeDuration);

			let _this = this;

			function cfun() {
				addClass("hidden", GCard);
				let container = document.querySelectorAll(_this._setting.blur)[0];
				let cardMini = document.querySelectorAll(".wussun-card_mini")[0];
				if (container != undefined) {
					removeClass("blur", container);
				}
				cardMini != undefined ? addClass("shown", cardMini) : "";
				cardBox.removeEventListener("animationend", cfun);
			}
		},

		open: function(opencallback) {
			if (this._closed) {
				this._closed = false;
			} else {
				return;
			}
			setCookie('DoNotShowMGC', 'yes', -1000000);
			let GCard = this._GCard;
			let cardBox = GCard.querySelectorAll(".wussun-card_box")[0];
			let cardMini = document.querySelectorAll(".wussun-card_mini")[0];
			removeClass("hidden", GCard);

			removeClass("closed", cardBox);
			let container = document.querySelectorAll(this._setting.blur)[0];
			if (container != undefined) {
				addClass("blur", container);
			}
			cardMini != undefined ? removeClass("shown", cardMini) : "";
			if (typeof opencallback == "function") {
				opencallback();
			}
		},

		help: function() {
	
		}
	}

	function extend() {
		var length = arguments.length;
		var target = arguments[0] || {};
		if (typeof target != "object" && typeof target != "function") {
			target = {};
		}
		if (length == 1) {
			target = this;
			i--;
		}
		for (var i = 1; i < length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	}

	function hasClass(cla, element) {
		if (element.className.trim().length === 0) return false;
		let allClass = element.className.trim().split(" ");
		return allClass.indexOf(cla) > -1;
	}

	function addClass(cla, element) {
		if (!hasClass(cla, element)) {
			if (element.setAttribute) {
				let newClass = element.getAttribute("class") ? element.getAttribute("class") + " " + cla : cla;
				element.setAttribute("class", newClass);
			} else {
				element.className = element.className + " " + cla;
			}

		}
	}

	function removeClass(cla, element) {
		let classList = element.getAttribute("class").split(" ");
		for (let i = 0; i < classList.length; i++) {
			if (classList[i] == cla) {
				classList.splice(i, 1);
			}
		}

		element.setAttribute("class", classList.join(" "));

	}

	function setCookie(cname, cvalue, etime) {
		var d = new Date();
		d.setTime(d.getTime() + etime);
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

	MyukiGCard.fn.init.prototype = MyukiGCard.fn;
	window.MyukiGCard = MyukiGCard;
	window.$MGC = MyukiGCard;
	return this;
})(window);
var stop, staticx;
var img = new Image();
img.src = "https://i.imgur.com/VumGWEZ.png";
			function Sakura(x, y, s, r, fn) {
				this.x = x;
				this.y = y;
				this.s = s;
				this.r = r;
				this.fn = fn;
			}

			Sakura.prototype.draw = function(cxt) {
				cxt.save();
				var xc = 25 * this.s / 4;
				cxt.translate(this.x, this.y);
				cxt.rotate(this.r);
				cxt.drawImage(img, 0, 0, 25 * this.s, 25 * this.s)
				cxt.restore();
			}

			Sakura.prototype.update = function() {
				this.x = this.fn.x(this.x, this.y);
				this.y = this.fn.y(this.y, this.y);
				this.r = this.fn.r(this.r);
				if(this.x > window.innerWidth ||
					this.x < 0 ||
					this.y > window.innerHeight ||
					this.y < 0
				) {
					this.r = getRandom('fnr');
					if(Math.random() > 0.4) {
						this.x = getRandom('x');
						this.y = 0;
						this.s = getRandom('s');
						this.r = getRandom('r');
					} else {
						this.x = window.innerWidth;
						this.y = getRandom('y');
						this.s = getRandom('s');
						this.r = getRandom('r');
					}
				}
			}

			SakuraList = function() {
				this.list = [];
			}
			SakuraList.prototype.push = function(sakura) {
				this.list.push(sakura);
			}
			SakuraList.prototype.update = function() {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].update();
				}
			}
			SakuraList.prototype.draw = function(cxt) {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].draw(cxt);
				}
			}
			SakuraList.prototype.get = function(i) {
				return this.list[i];
			}
			SakuraList.prototype.size = function() {
				return this.list.length;
			}

			function getRandom(option) {
				var ret, random;
				switch(option) {
					case 'x':
						ret = Math.random() * window.innerWidth;
						break;
					case 'y':
						ret = Math.random() * window.innerHeight;
						break;
					case 's':
						ret = Math.random();
						break;
					case 'r':
						ret = Math.random() * 5;
						break;
					case 'fnx':
						random = -0.5 + Math.random() * 1;
						ret = function(x, y) {
							return x + 0.5 * random - 1;
						};
						break;
					case 'fny':
						random = 0.5 + Math.random() * 0.5
						ret = function(x, y) {
							return y + random;
						};
						break;
					case 'fnr':
						random = Math.random() * 0.01;
						ret = function(r) {
							return r + random;
						};
						break;
				}
				return ret;
			}

			function startSakura() {

				requestAnimationFrame = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame;
				var canvas = document.createElement('canvas'),
					cxt;
				staticx = true;
				canvas.height = window.innerHeight;
				canvas.width = window.innerWidth;
				canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
				canvas.setAttribute('id', 'canvas_sakura');
				document.getElementsByTagName('body')[0].appendChild(canvas);
				cxt = canvas.getContext('2d');
				var sakuraList = new SakuraList();
				for(var i = 0; i < 50; i++) {
					var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
					randomX = getRandom('x');
					randomY = getRandom('y');
					randomR = getRandom('r');
					randomS = getRandom('s');
					randomFnx = getRandom('fnx');
					randomFny = getRandom('fny');
					randomFnR = getRandom('fnr');
					sakura = new Sakura(randomX, randomY, randomS, randomR, {
						x: randomFnx,
						y: randomFny,
						r: randomFnR
					});
					sakura.draw(cxt);
					sakuraList.push(sakura);
				}
				stop = requestAnimationFrame(function() {
					cxt.clearRect(0, 0, canvas.width, canvas.height);
					sakuraList.update();
					sakuraList.draw(cxt);
					stop = requestAnimationFrame(arguments.callee);
				})
			}

			window.onresize = function() {
				var canvasSnow = document.getElementById('canvas_snow');
				canvasSnow.width = window.innerWidth;
				canvasSnow.height = window.innerHeight;
			}

			img.onload = function() {
				startSakura();
			}

			function stopp() {
				if(staticx) {
					var child = document.getElementById("canvas_sakura");
					child.parentNode.removeChild(child);
					window.cancelAnimationFrame(stop);
					staticx = false;
				} else {
					startSakura();
				}
			}
		

			function addLoadEvent(e){var t=window.onload;if(typeof t!="function")window.onload=e;else window.onload=function(){if(t)t();e()}}function regenbogen(){if(document.getElementById){var e,t;rainbow=document.getElementById("rainbow");raintxt=rainbow.firstChild.nodeValue;while(rainbow.childNodes.length)rainbow.removeChild(rainbow.childNodes[0]);for(e=0;e<raintxt.length;e++){t=document.createElement("span");t.setAttribute("id","rain"+e);t.appendChild(document.createTextNode(raintxt.charAt(e)));if(alink){t.style.cursor="pointer";t.onclick=function(){top.location.href=alink}}rainbow.appendChild(t)}rainbow=setInterval("raining()",speed)}}function raining(){var e,t;for(e=0;e<raintxt.length;e++){t=raincol[(e+raincnt)%raincol.length];document.getElementById("rain"+e).style.color=t;if(glow)document.getElementById("rain"+e).style.textShadow=t+" 0px 0px "+glow+"px"}raincnt++}var speed=10;var glow=15;var raincol=new Array("#ff0000","#ff5500","#ffaa00","#ffff00","#aaff00","#55ff00","#00ff00","#00ff55","#00ffaa","#00ffff","#00aaff","#0055ff","#0000ff","#5500ff","#aa00ff","#ff00ff","#ff00aa","#ff0055");var alink="#";var rainbow,raintxt,raincnt=0;addLoadEvent(regenbogen)