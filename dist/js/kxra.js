/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/fpsController.js":
/*!******************************************!*\
  !*** ./src/controllers/fpsController.js ***!
  \******************************************/
/*! exports provided: FPSController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPSController", function() { return FPSController; });
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ielements/label */ "./src/ielements/label.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FPSController = /*#__PURE__*/function () {
  function FPSController(prop) {
    _classCallCheck(this, FPSController);

    this.name = "fpsController";
    this.fps = 0; // every second

    this._fps = 0; // every frame

    this.frameTime = 0;
    this.__label__ = new _ielements_label__WEBPACK_IMPORTED_MODULE_0__["Label"](prop.label);
  }

  _createClass(FPSController, [{
    key: "init",
    value: function init() {
      this.__label__.init();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.frameTime == Math.trunc(time / 1000)) {
        ++this._fps;
      } else {
        this.fps = ++this._fps;
        this.frameTime = Math.trunc(time / 1000);
        this._fps = 0;
      }

      this.__label__.text = "FPS: ".concat(this.fps);
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawLabel(this.__label__);
    }
  }]);

  return FPSController;
}();

/***/ }),

/***/ "./src/controllers/gameCtrl.js":
/*!*************************************!*\
  !*** ./src/controllers/gameCtrl.js ***!
  \*************************************/
/*! exports provided: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameController", function() { return GameController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this.length = 0;
  }

  _createClass(GameController, [{
    key: "update",
    value: function update() {
      this.sceneController && this.sceneController.update();
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update();
      this.sceneController && this.sceneController.currentScene.render(time, screen);
      this.fpsController && this.fpsController.render(time, screen);
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, controllers = new Array(_len), _key = 0; _key < _len; _key++) {
        controllers[_key] = arguments[_key];
      }

      for (var _i = 0, _controllers = controllers; _i < _controllers.length; _i++) {
        var ctrl = _controllers[_i];

        if (!this[ctrl.name]) {
          if (!ctrl.name) throw new Error("Invalid name of controller, name is must be like 'sceneController'");
          this[ctrl.name] = ctrl;
          this[ctrl.name].init();
          ++this.length;
        }
      }

      return this.length;
    }
  }, {
    key: "remove",
    value: function remove(controllerName) {
      if (this[controllerName]) {
        delete this[controllerName];
        --this.length;
      }
    }
  }]);

  return GameController;
}();

/***/ }),

/***/ "./src/controllers/sceneCtrl.js":
/*!**************************************!*\
  !*** ./src/controllers/sceneCtrl.js ***!
  \**************************************/
/*! exports provided: SceneController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneController", function() { return SceneController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneController = /*#__PURE__*/function () {
  function SceneController(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "sceneController" : _ref$name,
        scenes = _ref.scenes;

    _classCallCheck(this, SceneController);

    this.name = name;
    this.scenes = {};

    for (var scene in scenes) {
      this.scenes[scene] = scenes[scene];
      this.scenes[scene].init();
      this.scenes[scene].isInitialized = true;
    }
  }

  _createClass(SceneController, [{
    key: "init",
    value: function init() {
      if (!this.scenes.loading) throw new Error("Game must have loading scene");
      this.setScene("level_1");
    }
  }, {
    key: "setScene",
    value: function setScene(sceneName) {
      if (!this.scenes[sceneName]) return;
      !this.scenes[sceneName].isInitialized && (this.scenes[sceneName].isInitialized = true) && this.scenes[sceneName].init();
      this.currentScene = this.scenes[sceneName];
      this.currentScene.start();
      this.currentScene.status = "running";
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, scenes = new Array(_len), _key = 0; _key < _len; _key++) {
        scenes[_key] = arguments[_key];
      }

      for (var _i = 0, _scenes = scenes; _i < _scenes.length; _i++) {
        var scene = _scenes[_i];

        if (!this.scenes[scene.name]) {
          if (!scene.name) throw new Error("Scene must have name, like 'startMenu'");
          this.scenes[scene.name] = scene;
          this.scenes[scene.name].init();
          this.scenes[scene.name].isInitialized = true;
        }
      }

      return this.scenes.length;
    }
  }, {
    key: "remove",
    value: function remove(sceneName) {
      this.scenes[sceneName] && this.scenes.splice(this.scenes.findIndex(function (el) {
        return el.name == sceneName;
      }));
    }
  }, {
    key: "update",
    value: function update() {
      for (var scene in this.scenes) {
        if (this.scenes[scene].status == "finish") {
          if (scene.next == "none") this.scenes[scene].status = "running";else {
            this.currentScene.stop();
            this.setScene(this.scenes[scene].next);
            this.currentScene.parent = this.scenes[scene].name;
            this.scenes[scene].status = "ready";
            this.scenes[scene].next = "none";
          }
        }
      }
    }
  }]);

  return SceneController;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _view_screen_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/screen/screen */ "./src/view/screen/screen.js");
/* harmony import */ var _view_scene_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/scene/loading */ "./src/view/scene/loading.js");
/* harmony import */ var _view_scene_menu_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/scene/menu/start */ "./src/view/scene/menu/start.js");
/* harmony import */ var _view_scene_level_level_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/scene/level/level_1 */ "./src/view/scene/level/level_1.js");
/* harmony import */ var _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/gameCtrl */ "./src/controllers/gameCtrl.js");
/* harmony import */ var _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/sceneCtrl */ "./src/controllers/sceneCtrl.js");
/* harmony import */ var _controllers_fpsController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/fpsController */ "./src/controllers/fpsController.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _game_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game.json */ "./src/game.json");
var _game_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./game.json */ "./src/game.json", 1);
/* harmony import */ var _physic_collision__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./physic/collision */ "./src/physic/collision.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.name = _game_json__WEBPACK_IMPORTED_MODULE_8__.name;
    this.isRunning = false;
    this.screen = new _view_screen_screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](_game_json__WEBPACK_IMPORTED_MODULE_8__.screen);
    this.controller = new _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_4__["GameController"]();
    this.player = new _player_player__WEBPACK_IMPORTED_MODULE_7__["Player"](_game_json__WEBPACK_IMPORTED_MODULE_8__.player);
    this.collision = new _physic_collision__WEBPACK_IMPORTED_MODULE_9__["Collision"](this.player);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.screen.init();
      this.player.init();
      this.controller.add(new _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_5__["SceneController"]({
        scenes: {
          loading: new _view_scene_loading__WEBPACK_IMPORTED_MODULE_1__["LoadingScene"]({
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_8__.scenes.loading
          }),
          startMenu: new _view_scene_menu_start__WEBPACK_IMPORTED_MODULE_2__["StartMenu"]({
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_8__.scenes.startMenu
          }),
          level_1: new _view_scene_level_level_1__WEBPACK_IMPORTED_MODULE_3__["Level_1"]({
            player: this.player,
            screen: this.screen,
            collision: this.collision,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_8__.scenes.level
          })
        }
      }), new _controllers_fpsController__WEBPACK_IMPORTED_MODULE_6__["FPSController"](_game_json__WEBPACK_IMPORTED_MODULE_8__.fpsController));
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      this.controller.render(time, this.screen);
      this.isRunning && requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.init();
      (this.isRunning = true) && requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
      console.log(this);
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/game.json":
/*!***********************!*\
  !*** ./src/game.json ***!
  \***********************/
/*! exports provided: name, screen, fpsController, player, scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":15,\"y\":45,\"width\":34,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}},\"level\":{\"mapSpriteSheet\":{\"name\":\"level_1MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"level_2\":{\"mapData\":{\"name\":\"map_1\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"test.json\"}},\"height\":10,\"infinite\":false,\"layers\":[{\"data\":[7,13,14,13,14,13,14,13,14,7,7,17,18,19,20,17,18,19,20,7,7,27,28,29,30,27,28,29,30,7,7,37,38,39,40,37,38,39,40,7,7,17,18,7,7,7,7,19,20,7,7,27,28,7,7,7,7,29,30,7,7,37,38,7,7,7,7,39,40,7,7,29,38,39,40,37,38,39,40,7,7,39,18,19,20,17,18,19,20,7,7,7,7,7,7,7,7,7,7,7],\"height\":10,\"id\":1,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[1,3,3,2,3,4,5,71,4,26,11,0,0,0,0,0,0,16,0,36,21,0,0,2,3,4,5,81,0,46,31,0,0,0,0,0,0,0,0,26,41,0,0,61,65,65,66,0,0,36,1,0,0,26,0,0,21,0,0,46,11,0,0,36,0,0,31,0,0,26,21,0,0,2,73,72,5,0,0,36,31,0,0,0,41,0,0,0,0,46,51,52,53,54,55,52,53,54,55,56],\"height\":10,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[0,68,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0],\"height\":10,\"id\":4,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2},{\"name\":\"entryPoint-index\",\"type\":\"int\",\"value\":77},{\"name\":\"outPoint-index\",\"type\":\"int\",\"value\":66}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":214.332666666667,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":258.667,\"x\":190.667,\"y\":296.333333333333},{\"height\":21.5,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":276,\"x\":192,\"y\":167.5},{\"height\":129.333,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17.3333,\"x\":450.667,\"y\":41.3333},{\"height\":588,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":41.3333,\"y\":40},{\"height\":15.2727272727273,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":557.333,\"x\":41.3333,\"y\":611.393272727273},{\"height\":583.667,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":574.667,\"y\":40.3333},{\"height\":22.9999333333333,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":538,\"x\":43.333,\"y\":39.6666666666667},{\"height\":114,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":296,\"y\":508}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":13,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":10}},\"level_1\":{\"mapData\":{\"name\":\"map_2\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"map_1.json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"id\":1,\"name\":\"background\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,15,0,0,29,17,18,28,20,17,18,19,20,17,18,19,20,17,18,19,20,25,0,0,29,27,33,93,14,14,13,14,14,13,14,14,13,14,14,29,30,35,0,0,23,37,38,39,40,25,38,39,40,40,38,39,40,37,38,39,40,25,0,0,13,13,14,14,15,35,13,14,40,40,13,14,0,0,0,0,20,35,0,0,28,27,28,29,25,0,28,29,30,27,28,29,0,0,0,0,30,25,0,0,25,0,0,0,0,0,38,39,40,37,38,39,0,0,0,0,40,35,0,0,35,0,0,0,0,0,0,0,20,25,0,0,0,0,0,0,20,25,0,0,35,0,0,0,0,0,0,0,30,25,0,0,0,0,0,0,30,35,0,0,25,0,0,0,0,0,38,39,28,25,38,39,0,0,0,0,40,25,0,0,35,17,18,19,20,0,13,14,20,17,13,14,0,0,0,0,20,35,0,0,18,13,14,13,14,0,29,29,30,27,28,29,0,0,0,0,30,25,0,0,28,37,38,39,35,0,39,39,40,37,38,39,0,0,0,0,40,35,0,0,38,17,25,19,20,17,19,19,20,17,18,19,20,17,18,0,20,25,0,0,18,27,35,13,13,15,28,29,17,17,28,29,13,14,13,14,39,35,0,0,28,37,25,39,40,37,13,14,17,17,13,14,40,37,38,39,30,25,0,0,38,27,35,29,30,17,18,19,20,37,38,39,40,27,28,29,30,35,0,0,29,27,27,13,14,13,14,13,14,13,14,13,14,14,14,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":3,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,2,3,4,5,2,2,2,3,4,5,3,4,5,2,3,2,3,4,6,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,21,0,0,0,83,3,2,3,4,5,2,3,4,5,5,73,0,0,0,26,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,41,2,3,4,72,73,0,71,72,0,0,72,73,0,0,11,0,0,0,6,1,0,0,0,0,11,0,16,0,0,0,0,11,54,62,63,64,16,0,16,11,0,0,0,0,21,53,26,0,0,0,0,1,0,0,0,0,26,0,26,21,0,61,62,63,64,0,36,0,0,0,0,11,0,0,0,0,36,0,36,31,0,36,0,0,0,0,62,66,0,0,61,62,0,0,0,0,46,0,46,41,0,46,0,0,0,0,0,41,0,0,46,0,0,0,0,0,6,0,6,1,0,46,0,0,0,0,71,4,0,0,4,73,0,0,0,0,16,0,16,11,0,72,72,72,73,0,6,0,0,0,0,11,0,0,0,0,26,0,26,21,0,0,0,0,21,0,16,0,0,0,0,21,0,0,0,0,36,0,36,31,0,0,0,0,31,0,26,0,0,0,0,31,0,0,0,0,46,0,46,41,0,0,0,71,4,5,36,0,0,0,0,11,3,4,73,0,46,0,6,11,0,0,0,26,0,0,2,3,0,0,3,2,0,0,31,4,81,0,16,21,0,0,0,36,0,0,0,0,0,0,0,0,0,0,41,0,0,0,26,31,0,0,0,3,4,5,2,3,4,5,2,3,2,3,4,0,0,0,36,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,51,52,53,54,55,52,53,54,55,52,53,54,55,52,53,54,55,54,55,56],\"height\":20,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":5,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":3}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"colliderBoxes\",\"objects\":[{\"height\":23,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1173.33,\"x\":42,\"y\":39},{\"height\":1230.36696969697,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":1215.33,\"y\":37.6969663636364},{\"height\":12.3333,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1148,\"x\":65.3333,\"y\":1253},{\"height\":1230.36696969697,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":40.6667,\"y\":37.0303033636364},{\"height\":29.3333666666667,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":300.667,\"x\":61.3333,\"y\":293.333},{\"height\":273,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":232,\"x\":128.666,\"y\":489.667},{\"height\":645.999666666667,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":360.667,\"y\":293.333333333333},{\"height\":191.667,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":256.667,\"y\":936.333},{\"height\":22.6667,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":170,\"x\":276.667,\"y\":935.333},{\"height\":20.6667,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":767.333,\"x\":256.667,\"y\":1128.67},{\"height\":23.3333,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125.667,\"x\":705.667,\"y\":999.667},{\"height\":709.333333333333,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":808.667,\"y\":294.666666666667},{\"height\":147.666333333333,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127.666633333333,\"x\":703.667,\"y\":555.333666666667},{\"height\":24.3332966666667,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126.666,\"x\":703.667,\"y\":294.833},{\"height\":24.3333,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.167,\"x\":448,\"y\":294.833},{\"height\":280.667,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":448,\"y\":295},{\"height\":149.667,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.333366666667,\"x\":447.000333333333,\"y\":556.333},{\"height\":23.6667,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":447.667,\"y\":999.333},{\"height\":332.667,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":447.333,\"y\":669},{\"height\":29.3333,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63.5,\"x\":384,\"y\":418.667},{\"height\":594.5,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":163,\"x\":832,\"y\":361},{\"height\":977.625,\"id\":45,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":998.5,\"y\":166.375},{\"height\":24.1087,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":700.978,\"x\":298.022,\"y\":165.391},{\"height\":659.636363636364,\"id\":48,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":83,\"x\":1027.5,\"y\":359.363636363636}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":54,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20}}}}}");

/***/ }),

/***/ "./src/ielements/button.js":
/*!*********************************!*\
  !*** ./src/ielements/button.js ***!
  \*********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _ielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ielement */ "./src/ielements/ielement.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./src/ielements/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Button = /*#__PURE__*/function (_IElement) {
  _inherits(Button, _IElement);

  var _super = _createSuper(Button);

  function Button(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "button" : _ref$name,
        width = _ref.width,
        height = _ref.height,
        bgcolor = _ref.bgcolor,
        colors = _ref.colors,
        labelProp = _ref.labelProp,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        _ref$animationProp = _ref.animationProp,
        animationProp = _ref$animationProp === void 0 ? undefined : _ref$animationProp;

    _classCallCheck(this, Button);

    _this = _super.call(this, {
      name: name,
      x: x,
      y: y,
      animated: animated,
      animationProp: animationProp
    });
    _this.width = width;
    _this.height = height;
    _this.bgcolor = bgcolor;
    _this.colors = colors;
    _this.label = new _label__WEBPACK_IMPORTED_MODULE_1__["Label"](labelProp);
    _this.isMouseDown = false;
    return _this;
  }

  _createClass(Button, [{
    key: "__in__",
    value: function __in__(event) {
      return event.offsetX >= this.x && event.offsetX <= this.x + this.width && event.offsetY >= this.y && event.offsetY <= this.y + this.height;
    }
  }, {
    key: "addListeners",
    value: function addListeners(target, functions) {
      (this._listenerMouseMove = functions.mouseMoveHandler) && target.addEventListener("mousemove", this._listenerMouseMove);
      (this._listenerMouseDown = functions.mouseDownHandler) && target.addEventListener("mousedown", this._listenerMouseDown);
      (this._listenerMouseUp = functions.mouseUpHandler) && target.addEventListener("mouseup", this._listenerMouseUp);
      (this._listenerMouseClick = functions.mouseClickHandler) && target.addEventListener("click", this._listenerMouseClick);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(target) {
      this._listenerMouseMove && target.removeEventListener("mousemove", this._listenerMouseMove) && delete this._listenerMouseMove;
      this._listenerMouseDown && target.removeEventListener("mousedown", this._listenerMouseDown) && delete this._listenerMouseDown;
      this._listenerMouseUp && target.removeEventListener("mouseup", this._listenerMouseUp) && delete this._listenerMouseUp;
      this._listenerMouseClick && target.removeEventListener("click", this._listenerMouseClick) && delete this._listenerMouseClick;
    }
  }, {
    key: "init",
    value: function init() {
      this.label.init();
      this.label.x += this.x;
      this.label.y += this.y;

      _get(_getPrototypeOf(Button.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      screen.drawButton(this);
    }
  }]);

  return Button;
}(_ielement__WEBPACK_IMPORTED_MODULE_0__["IElement"]);

/***/ }),

/***/ "./src/ielements/ielement.js":
/*!***********************************!*\
  !*** ./src/ielements/ielement.js ***!
  \***********************************/
/*! exports provided: IElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IElement", function() { return IElement; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IElement = /*#__PURE__*/function () {
  function IElement() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? "ielement" : _ref$name,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        animationProp = _ref.animationProp;

    _classCallCheck(this, IElement);

    this.name = name;
    this.x = x;
    this.y = y;
    this.animated = animated;
    this._animation = animationProp;
  }

  _createClass(IElement, [{
    key: "init",
    value: function init() {
      if (this.animated) {
        this.animation = this.createAnimation(this._animation);
        this.animation.init();
      }

      delete this._animation;
    }
  }, {
    key: "update",
    value: function update(time) {
      this.animated && this.animation.update(time);
    }
  }, {
    key: "createAnimation",
    value: function createAnimation() {}
  }, {
    key: "setXY",
    value: function setXY(newX, newY) {
      this.x = newX;
      this.y = newY;
    }
  }]);

  return IElement;
}();

/***/ }),

/***/ "./src/ielements/label.js":
/*!********************************!*\
  !*** ./src/ielements/label.js ***!
  \********************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _ielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ielement */ "./src/ielements/ielement.js");
/* harmony import */ var _view_animation_labelAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/animation/labelAnimation */ "./src/view/animation/labelAnimation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Label = /*#__PURE__*/function (_IElement) {
  _inherits(Label, _IElement);

  var _super = _createSuper(Label);

  function Label(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "label" : _ref$name,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? "label" : _ref$text,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 10 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 10 : _ref$y,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? "#444444" : _ref$color,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 36 : _ref$fontSize,
        _ref$fontWeight = _ref.fontWeight,
        fontWeight = _ref$fontWeight === void 0 ? "normal" : _ref$fontWeight,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? "Courier New" : _ref$fontFamily,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        _ref$animationProp = _ref.animationProp,
        animationProp = _ref$animationProp === void 0 ? undefined : _ref$animationProp;

    _classCallCheck(this, Label);

    _this = _super.call(this, {
      name: name,
      x: x,
      y: y,
      animated: animated,
      animationProp: animationProp
    });
    _this.text = text;
    _this.color = color;
    _this.fontSize = fontSize;
    _this.fontWeight = fontWeight;
    _this.fontFamily = fontFamily;
    return _this;
  }

  _createClass(Label, [{
    key: "createAnimation",
    value: function createAnimation(prop) {
      return new _view_animation_labelAnimation__WEBPACK_IMPORTED_MODULE_1__["LabelAnimation"]({
        label: this,
        frameDelay: prop.frameDelay,
        repeat: prop.repeat,
        autorun: prop.autorun,
        textCollection: prop.textCollection
      });
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawLabel(this);
    }
  }]);

  return Label;
}(_ielement__WEBPACK_IMPORTED_MODULE_0__["IElement"]);

/***/ }),

/***/ "./src/ielements/tile.js":
/*!*******************************!*\
  !*** ./src/ielements/tile.js ***!
  \*******************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var _ielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ielement */ "./src/ielements/ielement.js");
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
/* harmony import */ var _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/animation/spriteAnimation */ "./src/view/animation/spriteAnimation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Tile = /*#__PURE__*/function (_IElement) {
  _inherits(Tile, _IElement);

  var _super = _createSuper(Tile);

  function Tile(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "tile" : _ref$name,
        width = _ref.width,
        height = _ref.height,
        spriteSheet = _ref.spriteSheet,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 10 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 10 : _ref$y,
        _ref$animated = _ref.animated,
        animated = _ref$animated === void 0 ? false : _ref$animated,
        _ref$animationProp = _ref.animationProp,
        animationProp = _ref$animationProp === void 0 ? undefined : _ref$animationProp,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? undefined : _ref$options;

    _classCallCheck(this, Tile);

    _this = _super.call(this, {
      name: name,
      x: x,
      y: y,
      animated: animated,
      animationProp: animationProp
    });
    _this.width = width;
    _this.height = height;
    options && (_this.__options__ = options);
    _this.spriteSheet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"](spriteSheet);
    return _this;
  }

  _createClass(Tile, [{
    key: "init",
    value: function init() {
      this.spriteSheet.init();

      _get(_getPrototypeOf(Tile.prototype), "init", this).call(this);
    }
  }, {
    key: "createAnimation",
    value: function createAnimation(prop) {
      return new _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_2__["SpriteAnimation"]({
        spriteSheet: this.spriteSheet,
        indices: prop.indices,
        autorun: prop.autorun,
        frameDelay: prop.frameDelay,
        name: prop.name,
        repeat: prop.repeat
      });
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawSprite(this.spriteSheet.getSprite(this.animated && this.animation.indices[this.animation.currentFrameIndex] || 1), this.x, this.y);
      this.__options__ && this.__options__.fog && screen.fill("#00000066");
    }
  }]);

  return Tile;
}(_ielement__WEBPACK_IMPORTED_MODULE_0__["IElement"]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  game.run();
};

/***/ }),

/***/ "./src/physic/collision.js":
/*!*********************************!*\
  !*** ./src/physic/collision.js ***!
  \*********************************/
/*! exports provided: Collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collision", function() { return Collision; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collision = /*#__PURE__*/function () {
  function Collision(player) {
    _classCallCheck(this, Collision);

    this.player = player;
    this.colliders = [];
  }

  _createClass(Collision, [{
    key: "update",
    value: function update() {
      var _this = this;

      this.colliders.forEach(function (collider) {
        return _this.intersect(collider) && _this.outCollider(collider);
      });
    }
  }, {
    key: "outCollider",
    value: function outCollider(collider) {
      var body = this.player.body;
      var box = {
        _x: this.player.body.boxCollider._x,
        _y: this.player.body.boxCollider._y,
        x1: this.player.body.boxCollider.x,
        x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
        y1: this.player.body.boxCollider.y,
        y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height,
        width: this.player.body.boxCollider.width,
        height: this.player.body.boxCollider.height
      };
      var min = Math.min(Math.abs(collider.x1 - box.x2), Math.abs(collider.x2 - box.x1), Math.abs(collider.y1 - box.y2), Math.abs(collider.y2 - box.y1));

      switch (min) {
        case Math.abs(collider.x1 - box.x2):
          this.player.body.x = collider.x1 - body.width + box._x;
          break;

        case Math.abs(collider.x2 - box.x1):
          this.player.body.x = collider.x2 - box._x + 2;
          break;

        case Math.abs(collider.y1 - box.y2):
          this.player.body.y = collider.y1 - body.height - 2;
          break;

        case Math.abs(collider.y2 - box.y1):
          this.player.body.y = collider.y2 - box._y + 2;
          break;
      }
    }
  }, {
    key: "intersect",
    value: function intersect(collider) {
      var box = {
        x1: this.player.body.boxCollider.x,
        x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
        y1: this.player.body.boxCollider.y,
        y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height
      };
      return box.x2 > collider.x1 && box.x1 < collider.x1 && box.y2 > collider.y1 && box.y1 < collider.y2 || box.x1 < collider.x2 && box.x2 > collider.x2 && box.y2 > collider.y1 && box.y1 < collider.y2 || box.y2 > collider.y1 && box.y1 < collider.y1 && box.x2 > collider.x1 && box.x1 < collider.x2 || box.y1 < collider.y2 && box.y2 > collider.y2 && box.x2 > collider.x1 && box.x1 < collider.x2 || box.x1 >= collider.x1 && box.x2 <= collider.x2 && box.y1 >= collider.y1 && box.y2 <= collider.y2;
    }
  }]);

  return Collision;
}();

/***/ }),

/***/ "./src/player/components/body.js":
/*!***************************************!*\
  !*** ./src/player/components/body.js ***!
  \***************************************/
/*! exports provided: PlayerBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerBody", function() { return PlayerBody; });
/* harmony import */ var _boxCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxCollider */ "./src/player/components/boxCollider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var PlayerBody = /*#__PURE__*/function () {
  function PlayerBody(prop) {
    _classCallCheck(this, PlayerBody);

    this.x = prop.x;
    this.y = prop.y;
    this.width = prop.width;
    this.height = prop.height;
    this.moveSpeed = prop.moveSpeed;
    this.visible = prop.visible;
    this.boxCollider = new _boxCollider__WEBPACK_IMPORTED_MODULE_0__["BoxCollider"](prop.boxCollider);
  }

  _createClass(PlayerBody, [{
    key: "init",
    value: function init() {
      this.boxCollider.x = this.x + this.boxCollider._x;
      this.boxCollider.y = this.y + this.boxCollider._y;
    }
  }, {
    key: "update",
    value: function update() {
      this.boxCollider.x = this.x + this.boxCollider._x;
      this.boxCollider.y = this.y + this.boxCollider._y;
    }
  }, {
    key: "render",
    value: function render(screen) {
      this.visible && screen.strokeRect(this.x, this.y, this.width, this.height);
      this.boxCollider.render(screen);
    }
  }]);

  return PlayerBody;
}();

/***/ }),

/***/ "./src/player/components/boxCollider.js":
/*!**********************************************!*\
  !*** ./src/player/components/boxCollider.js ***!
  \**********************************************/
/*! exports provided: BoxCollider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxCollider", function() { return BoxCollider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BoxCollider = /*#__PURE__*/function () {
  function BoxCollider(prop) {
    _classCallCheck(this, BoxCollider);

    this.width = prop.width;
    this.height = prop.height;
    this.x = prop.x;
    this._x = prop.x;
    this.y = prop.y;
    this._y = prop.y;
    this.visible = prop.visible;
  }

  _createClass(BoxCollider, [{
    key: "render",
    value: function render(screen) {
      this.visible && screen.strokeRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return BoxCollider;
}();

/***/ }),

/***/ "./src/player/components/view.js":
/*!***************************************!*\
  !*** ./src/player/components/view.js ***!
  \***************************************/
/*! exports provided: PlayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerView", function() { return PlayerView; });
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
/* harmony import */ var _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/animation/spriteAnimation */ "./src/view/animation/spriteAnimation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PlayerView = /*#__PURE__*/function () {
  function PlayerView(prop) {
    _classCallCheck(this, PlayerView);

    this.spriteSheet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](prop.spriteSheet);
    this.animationList = {};
    this.tempAnimationProp = prop.animationList;
  }

  _createClass(PlayerView, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.animationList == {}) return;
      this.spriteSheet.init();
      this.tempAnimationProp.forEach(function (animation) {
        _this.animationList[animation.name] = new _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__["SpriteAnimation"]({
          name: animation.name,
          spriteSheet: _this.spriteSheet,
          frameDelay: animation.frameDelay,
          indices: animation.indices,
          repeat: animation.repeat,
          autorun: animation.autorun
        });

        _this.animationList[animation.name].init();
      });
      delete this.tempAnimationProp;
      this.animation = this.animationList["idle-down"];
      this.animation.run();
    }
  }, {
    key: "setAnimation",
    value: function setAnimation(animationName) {
      if (this.animation.name == animationName) return;
      this.animation.stop();
      this.animation = this.animationList[animationName];
      this.animation.run();
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this.spriteSheet.getSprite(this.animation.indices[this.animation.currentFrameIndex]);
    }
  }]);

  return PlayerView;
}();

/***/ }),

/***/ "./src/player/controllers/animationController.js":
/*!*******************************************************!*\
  !*** ./src/player/controllers/animationController.js ***!
  \*******************************************************/
/*! exports provided: PlayerAnimationController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAnimationController", function() { return PlayerAnimationController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerAnimationController = /*#__PURE__*/function () {
  function PlayerAnimationController(view, moveController) {
    _classCallCheck(this, PlayerAnimationController);

    this.view = view;
    this.moveController = moveController;
  }

  _createClass(PlayerAnimationController, [{
    key: "update",
    value: function update(time) {
      this.view.setAnimation((this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction);
      this.view.animation.update(time);
    }
  }]);

  return PlayerAnimationController;
}();

/***/ }),

/***/ "./src/player/controllers/keyController.js":
/*!*************************************************!*\
  !*** ./src/player/controllers/keyController.js ***!
  \*************************************************/
/*! exports provided: PlayerKeyController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerKeyController", function() { return PlayerKeyController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerKeyController = /*#__PURE__*/function () {
  function PlayerKeyController() {
    _classCallCheck(this, PlayerKeyController);

    this.keys = {
      KeyW: {
        code: 87,
        isDown: false
      },
      KeyD: {
        code: 68,
        isDown: false
      },
      KeyS: {
        code: 83,
        isDown: false
      },
      KeyA: {
        code: 65,
        isDown: false
      },
      ArrowUp: {
        code: 38,
        isDown: false
      },
      ArrowRight: {
        code: 39,
        isDown: false
      },
      ArrowDown: {
        code: 40,
        isDown: false
      },
      ArrowLeft: {
        code: 37,
        isDown: false
      },
      Space: {
        code: 32,
        isDown: false
      }
    };
    this.isKeyDown = false;
  }

  _createClass(PlayerKeyController, [{
    key: "start",
    value: function start() {
      this.startEventListen();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stopEventListen();
    }
  }, {
    key: "startEventListen",
    value: function startEventListen() {
      this._listenerKeyDown = this.keyDownHandler.bind(this);
      this._listenerKeyUp = this.keyUpHandler.bind(this);
      window.addEventListener("keydown", this._listenerKeyDown);
      window.addEventListener("keyup", this._listenerKeyUp);
    }
  }, {
    key: "stopEventListen",
    value: function stopEventListen() {
      this._listenerKeyDown && window.removeEventListener("keydown", this._listenerKeyDown) && delete this._listenerKeyDown;
      this._listenerKeyUp && window.removeEventListener("keyup", this._listenerKeyUp) && delete this._listenerKeyUp;
    }
  }, {
    key: "update",
    value: function update() {
      this.isKeyDown = this.keys.KeyW.isDown || this.keys.KeyD.isDown || this.keys.KeyS.isDown || this.keys.KeyA.isDown;
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      if (this.keys[event.code]) {
        event.preventDefault();
        this.keys[event.code].isDown = true;
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {
      if (this.keys[event.code]) {
        event.preventDefault();
        this.keys[event.code].isDown = false;
      }
    }
  }]);

  return PlayerKeyController;
}();

/***/ }),

/***/ "./src/player/controllers/moveController.js":
/*!**************************************************!*\
  !*** ./src/player/controllers/moveController.js ***!
  \**************************************************/
/*! exports provided: PlayerMoveController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerMoveController", function() { return PlayerMoveController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerMoveController = /*#__PURE__*/function () {
  function PlayerMoveController(player, keyController, prop) {
    _classCallCheck(this, PlayerMoveController);

    this.player = player;
    this.keyController = keyController;
    this.keys = prop.keys;
    this.isMove = false;
    this.direction = "down";
  }

  _createClass(PlayerMoveController, [{
    key: "update",
    value: function update() {
      if (this.keyController.keys[this.keys.up].isDown) this.moveUp();
      if (this.keyController.keys[this.keys.right].isDown) this.moveRight();
      if (this.keyController.keys[this.keys.down].isDown) this.moveDown();
      if (this.keyController.keys[this.keys.left].isDown) this.moveLeft();
      if (!this.keyController.isKeyDown) this.isMove = false;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.player.body.y -= this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "up";
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.player.body.x += this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "right";
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.player.body.y += this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "down";
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.player.body.x -= this.player.body.moveSpeed;
      this.isMove = true;
      this.direction = "left";
    }
  }]);

  return PlayerMoveController;
}();

/***/ }),

/***/ "./src/player/controllers/playerController.js":
/*!****************************************************!*\
  !*** ./src/player/controllers/playerController.js ***!
  \****************************************************/
/*! exports provided: PlayerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerController", function() { return PlayerController; });
/* harmony import */ var _keyController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyController */ "./src/player/controllers/keyController.js");
/* harmony import */ var _moveController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveController */ "./src/player/controllers/moveController.js");
/* harmony import */ var _animationController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animationController */ "./src/player/controllers/animationController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PlayerController = /*#__PURE__*/function () {
  function PlayerController(_ref) {
    var player = _ref.player,
        prop = _ref.prop;

    _classCallCheck(this, PlayerController);

    this.player = player;
    this.keyController = new _keyController__WEBPACK_IMPORTED_MODULE_0__["PlayerKeyController"]();
    this.moveController = new _moveController__WEBPACK_IMPORTED_MODULE_1__["PlayerMoveController"](this.player, this.keyController, prop.moveController);
    this.animationController = new _animationController__WEBPACK_IMPORTED_MODULE_2__["PlayerAnimationController"](this.player.view, this.moveController);
  }

  _createClass(PlayerController, [{
    key: "start",
    value: function start() {
      this.keyController.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.keyController.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      this.keyController.update();
      this.moveController.update();
      this.animationController.update(time);
    }
  }]);

  return PlayerController;
}();

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/body */ "./src/player/components/body.js");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/view */ "./src/player/components/view.js");
/* harmony import */ var _controllers_playerController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/playerController */ "./src/player/controllers/playerController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Player = /*#__PURE__*/function () {
  function Player(prop) {
    _classCallCheck(this, Player);

    this.name = prop.name;
    this.body = new _components_body__WEBPACK_IMPORTED_MODULE_0__["PlayerBody"](prop.body);
    this.view = new _components_view__WEBPACK_IMPORTED_MODULE_1__["PlayerView"](prop.view);
    this.controller = new _controllers_playerController__WEBPACK_IMPORTED_MODULE_2__["PlayerController"]({
      player: this,
      prop: prop.controller
    });
  }

  _createClass(Player, [{
    key: "init",
    value: function init() {
      this.view.init();
      this.body.init();
    }
  }, {
    key: "update",
    value: function update(time) {
      this.controller.update(time);
      this.body.update();
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
      this.body.render(screen);
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/view/animation/animation.js":
/*!*****************************************!*\
  !*** ./src/view/animation/animation.js ***!
  \*****************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animation = /*#__PURE__*/function () {
  function Animation(_ref) {
    var name = _ref.name,
        _ref$frameDelay = _ref.frameDelay,
        frameDelay = _ref$frameDelay === void 0 ? 50 : _ref$frameDelay,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? false : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? false : _ref$autorun;

    _classCallCheck(this, Animation);

    this.name = name;
    this.repeat = repeat;
    this.autorun = autorun;
    this.frameDelay = frameDelay;
    this.lastFrameTime = 0;
    this.isRunning = false;
  }

  _createClass(Animation, [{
    key: "init",
    value: function init() {
      this.autorun && this.run();
    }
  }, {
    key: "run",
    value: function run() {
      this.isRunning = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isRunning = false;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.isRunning) return;

      if (this.lastFrameTime == 0) {
        this.lastFrameTime = time;
        return;
      }

      if (time - this.lastFrameTime > this.frameDelay) {
        this.nextFrame();
        this.lastFrameTime = time;
      }
    }
  }]);

  return Animation;
}();

/***/ }),

/***/ "./src/view/animation/labelAnimation.js":
/*!**********************************************!*\
  !*** ./src/view/animation/labelAnimation.js ***!
  \**********************************************/
/*! exports provided: LabelAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelAnimation", function() { return LabelAnimation; });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/view/animation/animation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var LabelAnimation = /*#__PURE__*/function (_Animation) {
  _inherits(LabelAnimation, _Animation);

  var _super = _createSuper(LabelAnimation);

  function LabelAnimation(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "labelAnimation" : _ref$name,
        label = _ref.label,
        _ref$frameDelay = _ref.frameDelay,
        frameDelay = _ref$frameDelay === void 0 ? 200 : _ref$frameDelay,
        _ref$textCollection = _ref.textCollection,
        textCollection = _ref$textCollection === void 0 ? [] : _ref$textCollection,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun;

    _classCallCheck(this, LabelAnimation);

    _this = _super.call(this, {
      name: name,
      frameDelay: frameDelay,
      repeat: repeat,
      autorun: autorun
    });
    _this.label = label;
    _this.textCollection = textCollection;
    _this.currentTextIndex = 0;
    return _this;
  }

  _createClass(LabelAnimation, [{
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentTextIndex + 1 == this.textCollection.length) {
        this.currentTextIndex = 0;
      } else ++this.currentTextIndex;

      this.label.text = this.textCollection[this.currentTextIndex];
    }
  }]);

  return LabelAnimation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"]);

/***/ }),

/***/ "./src/view/animation/spriteAnimation.js":
/*!***********************************************!*\
  !*** ./src/view/animation/spriteAnimation.js ***!
  \***********************************************/
/*! exports provided: SpriteAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteAnimation", function() { return SpriteAnimation; });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/view/animation/animation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SpriteAnimation = /*#__PURE__*/function (_Animation) {
  _inherits(SpriteAnimation, _Animation);

  var _super = _createSuper(SpriteAnimation);

  function SpriteAnimation(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "spriteAnimation" : _ref$name,
        spriteSheet = _ref.spriteSheet,
        indices = _ref.indices,
        _ref$frameDelay = _ref.frameDelay,
        frameDelay = _ref$frameDelay === void 0 ? 100 : _ref$frameDelay,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? false : _ref$autorun;

    _classCallCheck(this, SpriteAnimation);

    _this = _super.call(this, {
      name: name,
      frameDelay: frameDelay,
      repeat: repeat,
      autorun: autorun
    });
    _this.spriteSheet = spriteSheet;
    _this.indices = indices;
    _this.frames = _this.getFrames(_this.indices);
    _this.currentFrameIndex = 0;
    return _this;
  }

  _createClass(SpriteAnimation, [{
    key: "init",
    value: function init() {
      this.spriteSheet.init();

      _get(_getPrototypeOf(SpriteAnimation.prototype), "init", this).call(this);
    }
  }, {
    key: "getFrames",
    value: function getFrames(indices) {
      var _this2 = this;

      return indices.map(function (index) {
        return {
          sourceX: _this2.spriteSheet.getSourceX(index),
          sourceY: _this2.spriteSheet.getSourceY(index)
        };
      });
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrameIndex + 1 == this.frames.length && this.repeat) this.currentFrameIndex = 0;else if (!this.repeat) stop();else ++this.currentFrameIndex;
    }
  }]);

  return SpriteAnimation;
}(_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"]);

/***/ }),

/***/ "./src/view/camera.js":
/*!****************************!*\
  !*** ./src/view/camera.js ***!
  \****************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera = /*#__PURE__*/function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 640 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 640 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 300 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.limitX = limitX;
    this.limitY = limitY;
    this.watchObject = false;
    this.body = null;
    this.scrollEdge = scrollEdge;
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.body = obj.body;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.watchObject) return;
      if (this.body.x > this.x + this.width - this.scrollEdge) this.x = Math.min(this.limitX, this.body.x - this.width + this.scrollEdge);
      if (this.body.x < this.x + this.scrollEdge) this.x = Math.max(0, this.body.x - this.scrollEdge);
      if (this.body.y > this.y + this.height - this.scrollEdge) this.y = Math.min(this.limitY, this.body.y - this.height + this.scrollEdge);
      if (this.body.y < this.y + this.scrollEdge) this.y = Math.max(0, this.body.y - this.scrollEdge);
    }
  }]);

  return Camera;
}();

/***/ }),

/***/ "./src/view/map.js":
/*!*************************!*\
  !*** ./src/view/map.js ***!
  \*************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Map = /*#__PURE__*/function () {
  function Map(mapData, collision) {
    _classCallCheck(this, Map);

    this.collision = collision;
    this.data = mapData.data;
    this.name = this.data.name;
    this.width = this.data.width * this.data.tilewidth;
    this.height = this.data.height * this.data.tileheight;
    this.tileSet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](mapData.tileSet);
    this.row = this.data.height;
    this.column = this.data.width;
    this.layers = [];
    this.colliders = [];
    this.defaultLayer = [];
    this.upperLayer = [];
  }

  _createClass(Map, [{
    key: "init",
    value: function init() {
      this.tileSet.init();
      this.createLayers();
    }
  }, {
    key: "createLayers",
    value: function createLayers() {
      var _this = this;

      this.data.layers.forEach(function (layer) {
        if (layer.type == "tilelayer") {
          _this.layers.push({
            name: layer.name,
            indexes: layer.data,
            z_index: layer.properties[0].value
          });
        } else if (layer.type == "objectgroup") {
          _this.colliders = layer.objects.map(function (item) {
            return {
              x1: item.x,
              x2: item.x + item.width,
              y1: item.y,
              y2: item.y + item.height
            };
          });
        }
      });
      this.layers.sort(function (a, b) {
        return a.z_index - b.z_index;
      });
      this.collision.colliders = this.colliders;
      delete this.data;
    }
  }, {
    key: "secondRender",
    value: function secondRender(screen) {
      this.upperLayer.forEach(function (tile) {
        return screen.drawSprite(tile.sprite, tile.x, tile.y);
      });
      this.upperLayer = [];
    }
  }, {
    key: "render",
    value: function render(screen) {
      var _this2 = this;

      this.layers.forEach(function (layer) {
        var col = 0,
            row = 0;
        layer.indexes.forEach(function (index) {
          var _ref;

          if (index > 0) {
            if (layer.name == "wall" && _this2.collision.intersect({
              x1: _this2.tileSet.spriteWidth * col,
              x2: _this2.tileSet.spriteWidth * col + _this2.tileSet.spriteWidth,
              y1: _this2.tileSet.spriteHeight * row,
              y2: _this2.tileSet.spriteHeight * row + _this2.tileSet.spriteHeight / 2
            })) {
              _this2.upperLayer.push({
                sprite: _this2.tileSet.getSprite(index),
                x: _this2.tileSet.spriteWidth * col,
                y: _this2.tileSet.spriteHeight * row
              });
            } else screen.drawSprite(_this2.tileSet.getSprite(index), _this2.tileSet.spriteWidth * col, _this2.tileSet.spriteHeight * row);
          }

          ++col > _this2.column - 1 && (_ref = [0, row + 1], col = _ref[0], row = _ref[1], _ref);
        });
      });
    }
  }]);

  return Map;
}();

/***/ }),

/***/ "./src/view/picture/spriteSheet.js":
/*!*****************************************!*\
  !*** ./src/view/picture/spriteSheet.js ***!
  \*****************************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpriteSheet = /*#__PURE__*/function () {
  function SpriteSheet(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "spriteSheet" : _ref$name,
        src = _ref.src,
        width = _ref.width,
        height = _ref.height,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.name = name;
    this.src = src;
    this.width = width;
    this.height = height;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "init",
    value: function init() {
      this.image || (this.image = this.loadImage());
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return {
        image: this.image,
        width: this.spriteWidth,
        height: this.spriteHeight,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index)
      };
    }
  }, {
    key: "_load",
    value: function _load() {
      var _this = this;

      return new Promise(function (resolve) {
        var img = new Image(_this.width, _this.height);

        img.onload = function () {
          return resolve(img);
        };

        img.src = _this.src;
      });
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this2 = this;

      this._load().then(function (img) {
        return _this2.image = img;
      })["catch"](function (error) {
        throw error;
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return (index - 1) * this.spriteWidth % this.width;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc((index - 1) * this.spriteWidth / this.width) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/view/scene/level/level.js":
/*!***************************************!*\
  !*** ./src/view/scene/level/level.js ***!
  \***************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/view/scene/scene.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../map */ "./src/view/map.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../camera */ "./src/view/camera.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Level = /*#__PURE__*/function (_Scene) {
  _inherits(Level, _Scene);

  var _super = _createSuper(Level);

  function Level(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "level" : _ref$name,
        screen = _ref.screen,
        player = _ref.player,
        collision = _ref.collision,
        mapData = _ref.mapData,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, Level);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      parent: parent,
      next: next
    });
    _this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["Map"](mapData, collision);
    _this.player = player;
    _this.collision = collision;
    return _this;
  }

  _createClass(Level, [{
    key: "init",
    value: function init() {
      this.map.init();
      this.player.controller.start();
      this.camera = new _camera__WEBPACK_IMPORTED_MODULE_2__["Camera"]({
        width: this.screen.width,
        height: this.screen.height,
        limitX: this.map.width - this.screen.width,
        limitY: this.map.height - this.screen.height
      });
      this.camera.watch(this.player);
      this.screen.setCamera(this.camera);

      _get(_getPrototypeOf(Level.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.collision.update();
      this.camera.update();

      _get(_getPrototypeOf(Level.prototype), "update", this).call(this, time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.map.render(this.screen);
      this.player.render(time, this.screen);
      this.map.secondRender(this.screen);

      _get(_getPrototypeOf(Level.prototype), "render", this).call(this, time);
    }
  }]);

  return Level;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/view/scene/level/level_1.js":
/*!*****************************************!*\
  !*** ./src/view/scene/level/level_1.js ***!
  \*****************************************/
/*! exports provided: Level_1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level_1", function() { return Level_1; });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./src/view/scene/level/level.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Level_1 = /*#__PURE__*/function (_Level) {
  _inherits(Level_1, _Level);

  var _super = _createSuper(Level_1);

  function Level_1(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "level_1" : _ref$name,
        screen = _ref.screen,
        collision = _ref.collision,
        player = _ref.player,
        prop = _ref.prop,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, Level_1);

    return _super.call(this, {
      name: name,
      screen: screen,
      player: player,
      mapData: {
        data: prop.level_1.mapData,
        tileSet: prop.mapSpriteSheet
      },
      collision: collision,
      parent: parent,
      next: next
    });
  }

  return Level_1;
}(_level__WEBPACK_IMPORTED_MODULE_0__["Level"]);

/***/ }),

/***/ "./src/view/scene/loading.js":
/*!***********************************!*\
  !*** ./src/view/scene/loading.js ***!
  \***********************************/
/*! exports provided: LoadingScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScene", function() { return LoadingScene; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/view/scene/scene.js");
/* harmony import */ var _ielements_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ielements/tile */ "./src/ielements/tile.js");
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ielements/label */ "./src/ielements/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LoadingScene = /*#__PURE__*/function (_Scene) {
  _inherits(LoadingScene, _Scene);

  var _super = _createSuper(LoadingScene);

  function LoadingScene(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "loading" : _ref$name,
        screen = _ref.screen,
        prop = _ref.prop,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, LoadingScene);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      parent: parent,
      next: next
    });
    _this.ielements = {
      background: new _ielements_tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](prop.background),
      disk: new _ielements_tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](prop.disk),
      label: new _ielements_label__WEBPACK_IMPORTED_MODULE_2__["Label"](prop.label)
    };
    return _this;
  }

  _createClass(LoadingScene, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      setTimeout(function () {
        _this2.status = "finish";
        _this2.next = "startMenu";
      }, (1 + Math.random()) * 1e3); // 1-2 sec
    }
  }]);

  return LoadingScene;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/view/scene/menu/start.js":
/*!**************************************!*\
  !*** ./src/view/scene/menu/start.js ***!
  \**************************************/
/*! exports provided: StartMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMenu", function() { return StartMenu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/view/scene/scene.js");
/* harmony import */ var _ielements_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ielements/tile */ "./src/ielements/tile.js");
/* harmony import */ var _ielements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ielements/button */ "./src/ielements/button.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var StartMenu = /*#__PURE__*/function (_Scene) {
  _inherits(StartMenu, _Scene);

  var _super = _createSuper(StartMenu);

  function StartMenu(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "startMenu" : _ref$name,
        screen = _ref.screen,
        prop = _ref.prop,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, StartMenu);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      parent: parent,
      next: next
    });
    _this.ielements = {
      background: new _ielements_tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](prop.background),
      playButton: new _ielements_button__WEBPACK_IMPORTED_MODULE_2__["Button"](prop.playButton)
    };
    return _this;
  }

  _createClass(StartMenu, [{
    key: "mouseClickHandler",
    value: function mouseClickHandler(event) {
      event = event || window.event;

      if (this.ielements.playButton.__in__(event)) {
        this.status = "finish";
        this.next = "level_1";
        document.body.style.cursor = "default";
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(event) {
      event = event || window.event;

      if (this.ielements.playButton.__in__(event)) {
        this.ielements.playButton.bgcolor = this.ielements.playButton.colors.click;
        this.ielements.playButton.isMouseDown = true;
      }
    }
  }, {
    key: "mouseUpHandler",
    value: function mouseUpHandler(event) {
      !event && (event = window.event);

      if (this.ielements.playButton.isMouseDown) {
        this.ielements.playButton.bgcolor = this.ielements.playButton.colors["default"];
        this.ielements.playButton.isMouseDown = false;
      }
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(event) {
      event = event || window.event;

      if (this.ielements.playButton.__in__(event)) {
        !this.ielements.playButton.isMouseDown && (this.ielements.playButton.bgcolor = this.ielements.playButton.colors.hover);
        document.body.style.cursor = "pointer";
      } else {
        !this.ielements.playButton.isMouseDown && (this.ielements.playButton.bgcolor = this.ielements.playButton.colors["default"]);
        document.body.style.cursor = "default";
      }
    }
  }, {
    key: "startEventListen",
    value: function startEventListen() {
      this.ielements.playButton.addListeners(this.screen.canvas.DOM, {
        mouseMoveHandler: this.mouseMoveHandler.bind(this),
        mouseDownHandler: this.mouseDownHandler.bind(this),
        mouseUpHandler: this.mouseUpHandler.bind(this),
        mouseClickHandler: this.mouseClickHandler.bind(this)
      });
    }
  }, {
    key: "stopEventListen",
    value: function stopEventListen() {
      this.ielements.playButton.removeListeners(this.screen.canvas.DOM);
    }
  }]);

  return StartMenu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/view/scene/scene.js":
/*!*********************************!*\
  !*** ./src/view/scene/scene.js ***!
  \*********************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene = /*#__PURE__*/function () {
  function Scene(_ref) {
    var name = _ref.name,
        screen = _ref.screen,
        parent = _ref.parent,
        next = _ref.next;

    _classCallCheck(this, Scene);

    this.name = name;
    this.screen = screen;
    this.status = "loading";
    this.parent = parent;
    this.next = next;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      !this.ielements && (this.ielements = {});

      for (var ie in this.ielements) {
        this.ielements[ie].init();
      }

      this.status = "loaded";
    }
  }, {
    key: "startEventListen",
    value: function startEventListen() {}
  }, {
    key: "stopEventListen",
    value: function stopEventListen() {}
  }, {
    key: "start",
    value: function start() {
      this.startEventListen();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stopEventListen();
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);

      for (var ie in this.ielements) {
        this.ielements[ie].render(time, this.screen);
      }
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/view/screen/canvas.js":
/*!***********************************!*\
  !*** ./src/view/screen/canvas.js ***!
  \***********************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Canvas);

    this.width = width;
    this.height = height;
  }

  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      var div = document.getElementById("game") || document.body.appendChild(document.createElement("div"));
      div.id = "game";
      this.DOM = div.getElementsByTagName("canvas")[0] || div.appendChild(document.createElement("canvas"));
      this.DOM.width = this.width;
      this.DOM.height = this.height;
      this.context = this.DOM.getContext("2d");
    }
  }]);

  return Canvas;
}();

/***/ }),

/***/ "./src/view/screen/screen.js":
/*!***********************************!*\
  !*** ./src/view/screen/screen.js ***!
  \***********************************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/view/screen/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Screen = /*#__PURE__*/function () {
  function Screen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas"]({
      width: width,
      height: height
    });
    this.camera = null;
    this.isCameraSet = false;
  }

  _createClass(Screen, [{
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
    key: "init",
    value: function init() {
      this.canvas.init();
    }
  }, {
    key: "drawButton",
    value: function drawButton(button) {
      this.canvas.context.fillStyle = "#000000";
      this.canvas.context.fillRect(button.x - 5, button.y - 5, button.width + 10, button.height + 10);
      this.canvas.context.fillStyle = button.bgcolor;
      this.canvas.context.fillRect(button.x, button.y, button.width, button.height);
      this.drawLabel(button.label);
    }
  }, {
    key: "drawLabel",
    value: function drawLabel(label) {
      this.canvas.context.fillStyle = label.color;
      this.canvas.context.font = "".concat(label.fontWeight, " ").concat(label.fontSize, "px ").concat(label.fontFamily || "Lucida Consolas");
      this.canvas.context.fillText(label.text, label.x, label.y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(image, x, y) {
      image && this.canvas.context.drawImage(image, x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite, x, y) {
      if (this.isCameraSet) {
        x -= this.camera.x;
        y -= this.camera.y;
      }

      sprite.image && this.canvas.context.drawImage(sprite.image, sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, x, y, sprite.width, sprite.height);
    }
  }, {
    key: "strokeRect",
    value: function strokeRect(x, y, width, height) {
      this.canvas.context.strokeRect(x, y, width, height);
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.canvas.context.fillStyle = color;
      this.canvas.context.fillRect(0, 0, this.width, this.height);
    }
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Zwc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zY2VuZUN0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9pZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BoeXNpYy9jb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb21wb25lbnRzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb21wb25lbnRzL2JveENvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29tcG9uZW50cy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMvYW5pbWF0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2NvbnRyb2xsZXJzL2tleUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9tb3ZlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2NvbnRyb2xsZXJzL3BsYXllckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hbmltYXRpb24vbGFiZWxBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3BpY3R1cmUvc3ByaXRlU2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbGV2ZWwvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbGV2ZWwvbGV2ZWxfMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL21lbnUvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NyZWVuL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY3JlZW4vc2NyZWVuLmpzIl0sIm5hbWVzIjpbIkZQU0NvbnRyb2xsZXIiLCJwcm9wIiwibmFtZSIsImZwcyIsIl9mcHMiLCJmcmFtZVRpbWUiLCJfX2xhYmVsX18iLCJMYWJlbCIsImxhYmVsIiwiaW5pdCIsInRpbWUiLCJNYXRoIiwidHJ1bmMiLCJ0ZXh0Iiwic2NyZWVuIiwidXBkYXRlIiwiZHJhd0xhYmVsIiwiR2FtZUNvbnRyb2xsZXIiLCJsZW5ndGgiLCJzY2VuZUNvbnRyb2xsZXIiLCJjdXJyZW50U2NlbmUiLCJyZW5kZXIiLCJmcHNDb250cm9sbGVyIiwiY29udHJvbGxlcnMiLCJjdHJsIiwiRXJyb3IiLCJjb250cm9sbGVyTmFtZSIsIlNjZW5lQ29udHJvbGxlciIsInNjZW5lcyIsInNjZW5lIiwiaXNJbml0aWFsaXplZCIsImxvYWRpbmciLCJzZXRTY2VuZSIsInNjZW5lTmFtZSIsInN0YXJ0Iiwic3RhdHVzIiwic3BsaWNlIiwiZmluZEluZGV4IiwiZWwiLCJuZXh0Iiwic3RvcCIsInBhcmVudCIsIkdhbWUiLCJnYW1lSlNPTiIsImlzUnVubmluZyIsIlNjcmVlbiIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJjb2xsaXNpb24iLCJDb2xsaXNpb24iLCJhZGQiLCJMb2FkaW5nU2NlbmUiLCJzdGFydE1lbnUiLCJTdGFydE1lbnUiLCJsZXZlbF8xIiwiTGV2ZWxfMSIsImxldmVsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJjb25zb2xlIiwibG9nIiwiQnV0dG9uIiwid2lkdGgiLCJoZWlnaHQiLCJiZ2NvbG9yIiwiY29sb3JzIiwibGFiZWxQcm9wIiwieCIsInkiLCJhbmltYXRlZCIsImFuaW1hdGlvblByb3AiLCJ1bmRlZmluZWQiLCJpc01vdXNlRG93biIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0YXJnZXQiLCJmdW5jdGlvbnMiLCJfbGlzdGVuZXJNb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lck1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZUNsaWNrIiwibW91c2VDbGlja0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhd0J1dHRvbiIsIklFbGVtZW50IiwiX2FuaW1hdGlvbiIsImFuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsIm5ld1giLCJuZXdZIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiTGFiZWxBbmltYXRpb24iLCJmcmFtZURlbGF5IiwicmVwZWF0IiwiYXV0b3J1biIsInRleHRDb2xsZWN0aW9uIiwiVGlsZSIsInNwcml0ZVNoZWV0Iiwib3B0aW9ucyIsIl9fb3B0aW9uc19fIiwiU3ByaXRlU2hlZXQiLCJTcHJpdGVBbmltYXRpb24iLCJpbmRpY2VzIiwiZHJhd1Nwcml0ZSIsImdldFNwcml0ZSIsImN1cnJlbnRGcmFtZUluZGV4IiwiZm9nIiwiZmlsbCIsIndpbmRvdyIsIm9ubG9hZCIsImdhbWUiLCJydW4iLCJjb2xsaWRlcnMiLCJmb3JFYWNoIiwiY29sbGlkZXIiLCJpbnRlcnNlY3QiLCJvdXRDb2xsaWRlciIsImJvZHkiLCJib3giLCJfeCIsImJveENvbGxpZGVyIiwiX3kiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIm1pbiIsImFicyIsIlBsYXllckJvZHkiLCJtb3ZlU3BlZWQiLCJ2aXNpYmxlIiwiQm94Q29sbGlkZXIiLCJzdHJva2VSZWN0IiwiUGxheWVyVmlldyIsImFuaW1hdGlvbkxpc3QiLCJ0ZW1wQW5pbWF0aW9uUHJvcCIsImFuaW1hdGlvbk5hbWUiLCJQbGF5ZXJBbmltYXRpb25Db250cm9sbGVyIiwidmlldyIsIm1vdmVDb250cm9sbGVyIiwic2V0QW5pbWF0aW9uIiwiaXNNb3ZlIiwiZGlyZWN0aW9uIiwiUGxheWVyS2V5Q29udHJvbGxlciIsImtleXMiLCJLZXlXIiwiY29kZSIsImlzRG93biIsIktleUQiLCJLZXlTIiwiS2V5QSIsIkFycm93VXAiLCJBcnJvd1JpZ2h0IiwiQXJyb3dEb3duIiwiQXJyb3dMZWZ0IiwiU3BhY2UiLCJpc0tleURvd24iLCJzdGFydEV2ZW50TGlzdGVuIiwic3RvcEV2ZW50TGlzdGVuIiwiX2xpc3RlbmVyS2V5RG93biIsImtleURvd25IYW5kbGVyIiwiYmluZCIsIl9saXN0ZW5lcktleVVwIiwia2V5VXBIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJQbGF5ZXJNb3ZlQ29udHJvbGxlciIsImtleUNvbnRyb2xsZXIiLCJ1cCIsIm1vdmVVcCIsInJpZ2h0IiwibW92ZVJpZ2h0IiwiZG93biIsIm1vdmVEb3duIiwibGVmdCIsIm1vdmVMZWZ0IiwiUGxheWVyQ29udHJvbGxlciIsImFuaW1hdGlvbkNvbnRyb2xsZXIiLCJBbmltYXRpb24iLCJsYXN0RnJhbWVUaW1lIiwibmV4dEZyYW1lIiwiY3VycmVudFRleHRJbmRleCIsImZyYW1lcyIsImdldEZyYW1lcyIsIm1hcCIsImluZGV4Iiwic291cmNlWCIsImdldFNvdXJjZVgiLCJzb3VyY2VZIiwiZ2V0U291cmNlWSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1heCIsIk1hcCIsIm1hcERhdGEiLCJkYXRhIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsInRpbGVTZXQiLCJyb3ciLCJjb2x1bW4iLCJsYXllcnMiLCJkZWZhdWx0TGF5ZXIiLCJ1cHBlckxheWVyIiwiY3JlYXRlTGF5ZXJzIiwibGF5ZXIiLCJ0eXBlIiwicHVzaCIsImluZGV4ZXMiLCJ6X2luZGV4IiwicHJvcGVydGllcyIsInZhbHVlIiwib2JqZWN0cyIsIml0ZW0iLCJzb3J0IiwiYSIsImIiLCJ0aWxlIiwic3ByaXRlIiwiY29sIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJzcmMiLCJpbWFnZSIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJfbG9hZCIsInRoZW4iLCJlcnJvciIsIkxldmVsIiwiY2FtZXJhIiwid2F0Y2giLCJzZXRDYW1lcmEiLCJzZWNvbmRSZW5kZXIiLCJTY2VuZSIsIm1hcFNwcml0ZVNoZWV0IiwiaWVsZW1lbnRzIiwiYmFja2dyb3VuZCIsImRpc2siLCJzZXRUaW1lb3V0IiwicmFuZG9tIiwicGxheUJ1dHRvbiIsIl9faW5fXyIsImRvY3VtZW50Iiwic3R5bGUiLCJjdXJzb3IiLCJjbGljayIsImhvdmVyIiwiYWRkTGlzdGVuZXJzIiwiY2FudmFzIiwiRE9NIiwicmVtb3ZlTGlzdGVuZXJzIiwiaWUiLCJDYW52YXMiLCJkaXYiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzQ2FtZXJhU2V0IiwiYnV0dG9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFTyxJQUFNQSxhQUFiO0FBQ0kseUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQyxJQUFMLEdBQVksZUFBWjtBQUVBLFNBQUtDLEdBQUwsR0FBWSxDQUFaLENBSGMsQ0FHRTs7QUFDaEIsU0FBS0MsSUFBTCxHQUFZLENBQVosQ0FKYyxDQUlDOztBQUVmLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHNEQUFKLENBQVVOLElBQUksQ0FBQ08sS0FBZixDQUFqQjtBQUNIOztBQVZMO0FBQUE7QUFBQSwyQkFZVztBQUFFLFdBQUtGLFNBQUwsQ0FBZUcsSUFBZjtBQUF3QjtBQVpyQztBQUFBO0FBQUEsMkJBY1dDLElBZFgsRUFjaUI7QUFDVCxVQUFJLEtBQUtMLFNBQUwsSUFBa0JNLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixJQUFJLEdBQUcsSUFBbEIsQ0FBdEIsRUFBK0M7QUFDM0MsVUFBRSxLQUFLTixJQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0QsR0FBTCxHQUFXLEVBQUUsS0FBS0MsSUFBbEI7QUFDQSxhQUFLQyxTQUFMLEdBQWlCTSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsSUFBSSxHQUFHLElBQWxCLENBQWpCO0FBQ0EsYUFBS04sSUFBTCxHQUFZLENBQVo7QUFDSDs7QUFFRCxXQUFLRSxTQUFMLENBQWVPLElBQWYsa0JBQThCLEtBQUtWLEdBQW5DO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLDJCQTBCV08sSUExQlgsRUEwQmlCSSxNQTFCakIsRUEwQnlCO0FBQ2pCLFdBQUtDLE1BQUwsQ0FBWUwsSUFBWjtBQUVBSSxZQUFNLENBQUNFLFNBQVAsQ0FBaUIsS0FBS1YsU0FBdEI7QUFDSDtBQTlCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk8sSUFBTVcsY0FBYjtBQUNJLDRCQUFjO0FBQUE7O0FBQUUsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFBa0I7O0FBRHRDO0FBQUE7QUFBQSw2QkFHYTtBQUNMLFdBQUtDLGVBQUwsSUFBd0IsS0FBS0EsZUFBTCxDQUFxQkosTUFBckIsRUFBeEI7QUFDSDtBQUxMO0FBQUE7QUFBQSwyQkFPV0wsSUFQWCxFQU9pQkksTUFQakIsRUFPeUI7QUFDakIsV0FBS0MsTUFBTDtBQUVBLFdBQUtJLGVBQUwsSUFBd0IsS0FBS0EsZUFBTCxDQUFxQkMsWUFBckIsQ0FBa0NDLE1BQWxDLENBQXlDWCxJQUF6QyxFQUErQ0ksTUFBL0MsQ0FBeEI7QUFDQSxXQUFLUSxhQUFMLElBQXdCLEtBQUtBLGFBQUwsQ0FBbUJELE1BQW5CLENBQTBCWCxJQUExQixFQUFnQ0ksTUFBaEMsQ0FBeEI7QUFDSDtBQVpMO0FBQUE7QUFBQSwwQkFjd0I7QUFBQSx3Q0FBYlMsV0FBYTtBQUFiQSxtQkFBYTtBQUFBOztBQUNoQixzQ0FBaUJBLFdBQWpCLGtDQUE4QjtBQUF6QixZQUFJQyxJQUFJLG1CQUFSOztBQUNELFlBQUksQ0FBQyxLQUFLQSxJQUFJLENBQUN0QixJQUFWLENBQUwsRUFBc0I7QUFDbEIsY0FBSSxDQUFDc0IsSUFBSSxDQUFDdEIsSUFBVixFQUFnQixNQUFNLElBQUl1QixLQUFKLENBQVUsb0VBQVYsQ0FBTjtBQUVoQixlQUFLRCxJQUFJLENBQUN0QixJQUFWLElBQWtCc0IsSUFBbEI7QUFDQSxlQUFLQSxJQUFJLENBQUN0QixJQUFWLEVBQWdCTyxJQUFoQjtBQUVBLFlBQUUsS0FBS1MsTUFBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxLQUFLQSxNQUFaO0FBQ0g7QUEzQkw7QUFBQTtBQUFBLDJCQTZCV1EsY0E3QlgsRUE2QjJCO0FBQ25CLFVBQUksS0FBS0EsY0FBTCxDQUFKLEVBQTBCO0FBQ3RCLGVBQU8sS0FBS0EsY0FBTCxDQUFQO0FBQ0EsVUFBRSxLQUFLUixNQUFQO0FBQ0g7QUFDSjtBQWxDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTVMsZUFBYjtBQUNJLGlDQUFrRDtBQUFBLHlCQUFwQ3pCLElBQW9DO0FBQUEsUUFBcENBLElBQW9DLDBCQUE3QixpQkFBNkI7QUFBQSxRQUFWMEIsTUFBVSxRQUFWQSxNQUFVOztBQUFBOztBQUM5QyxTQUFLMUIsSUFBTCxHQUFZQSxJQUFaO0FBRUEsU0FBSzBCLE1BQUwsR0FBYyxFQUFkOztBQUNBLFNBQUssSUFBSUMsS0FBVCxJQUFrQkQsTUFBbEIsRUFBMEI7QUFDdEIsV0FBS0EsTUFBTCxDQUFZQyxLQUFaLElBQXFCRCxNQUFNLENBQUNDLEtBQUQsQ0FBM0I7QUFDQSxXQUFLRCxNQUFMLENBQVlDLEtBQVosRUFBbUJwQixJQUFuQjtBQUNBLFdBQUttQixNQUFMLENBQVlDLEtBQVosRUFBbUJDLGFBQW5CLEdBQW1DLElBQW5DO0FBQ0g7QUFDSjs7QUFWTDtBQUFBO0FBQUEsMkJBWVc7QUFDSCxVQUFJLENBQUMsS0FBS0YsTUFBTCxDQUFZRyxPQUFqQixFQUEwQixNQUFNLElBQUlOLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBRTFCLFdBQUtPLFFBQUwsQ0FBYyxTQUFkO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDZCQWtCYUMsU0FsQmIsRUFrQndCO0FBQ2hCLFVBQUksQ0FBQyxLQUFLTCxNQUFMLENBQVlLLFNBQVosQ0FBTCxFQUE2QjtBQUU3QixPQUFDLEtBQUtMLE1BQUwsQ0FBWUssU0FBWixFQUF1QkgsYUFBeEIsS0FBMEMsS0FBS0YsTUFBTCxDQUFZSyxTQUFaLEVBQXVCSCxhQUF2QixHQUF1QyxJQUFqRixLQUEwRixLQUFLRixNQUFMLENBQVlLLFNBQVosRUFBdUJ4QixJQUF2QixFQUExRjtBQUVBLFdBQUtXLFlBQUwsR0FBb0IsS0FBS1EsTUFBTCxDQUFZSyxTQUFaLENBQXBCO0FBQ0EsV0FBS2IsWUFBTCxDQUFrQmMsS0FBbEI7QUFDQSxXQUFLZCxZQUFMLENBQWtCZSxNQUFsQixHQUEyQixTQUEzQjtBQUNIO0FBMUJMO0FBQUE7QUFBQSwwQkE0Qm1CO0FBQUEsd0NBQVJQLE1BQVE7QUFBUkEsY0FBUTtBQUFBOztBQUNYLGlDQUFrQkEsTUFBbEIsNkJBQTBCO0FBQXJCLFlBQUlDLEtBQUssY0FBVDs7QUFDRCxZQUFJLENBQUMsS0FBS0QsTUFBTCxDQUFZQyxLQUFLLENBQUMzQixJQUFsQixDQUFMLEVBQThCO0FBQzFCLGNBQUksQ0FBQzJCLEtBQUssQ0FBQzNCLElBQVgsRUFBaUIsTUFBTSxJQUFJdUIsS0FBSixDQUFVLHdDQUFWLENBQU47QUFFakIsZUFBS0csTUFBTCxDQUFZQyxLQUFLLENBQUMzQixJQUFsQixJQUEwQjJCLEtBQTFCO0FBQ0EsZUFBS0QsTUFBTCxDQUFZQyxLQUFLLENBQUMzQixJQUFsQixFQUF3Qk8sSUFBeEI7QUFDQSxlQUFLbUIsTUFBTCxDQUFZQyxLQUFLLENBQUMzQixJQUFsQixFQUF3QjRCLGFBQXhCLEdBQXdDLElBQXhDO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLEtBQUtGLE1BQUwsQ0FBWVYsTUFBbkI7QUFDSDtBQXhDTDtBQUFBO0FBQUEsMkJBMENXZSxTQTFDWCxFQTBDc0I7QUFBRSxXQUFLTCxNQUFMLENBQVlLLFNBQVosS0FBMEIsS0FBS0wsTUFBTCxDQUFZUSxNQUFaLENBQW1CLEtBQUtSLE1BQUwsQ0FBWVMsU0FBWixDQUFzQixVQUFBQyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDcEMsSUFBSCxJQUFXK0IsU0FBZjtBQUFBLE9BQXhCLENBQW5CLENBQTFCO0FBQWtHO0FBMUMxSDtBQUFBO0FBQUEsNkJBNENhO0FBQ0wsV0FBSyxJQUFJSixLQUFULElBQWtCLEtBQUtELE1BQXZCLEVBQStCO0FBQzNCLFlBQUksS0FBS0EsTUFBTCxDQUFZQyxLQUFaLEVBQW1CTSxNQUFuQixJQUE2QixRQUFqQyxFQUEyQztBQUN2QyxjQUFJTixLQUFLLENBQUNVLElBQU4sSUFBYyxNQUFsQixFQUEwQixLQUFLWCxNQUFMLENBQVlDLEtBQVosRUFBbUJNLE1BQW5CLEdBQTRCLFNBQTVCLENBQTFCLEtBQ0s7QUFDRCxpQkFBS2YsWUFBTCxDQUFrQm9CLElBQWxCO0FBQ0EsaUJBQUtSLFFBQUwsQ0FBYyxLQUFLSixNQUFMLENBQVlDLEtBQVosRUFBbUJVLElBQWpDO0FBQ0EsaUJBQUtuQixZQUFMLENBQWtCcUIsTUFBbEIsR0FBMkIsS0FBS2IsTUFBTCxDQUFZQyxLQUFaLEVBQW1CM0IsSUFBOUM7QUFFQSxpQkFBSzBCLE1BQUwsQ0FBWUMsS0FBWixFQUFtQk0sTUFBbkIsR0FBNEIsT0FBNUI7QUFDQSxpQkFBS1AsTUFBTCxDQUFZQyxLQUFaLEVBQW1CVSxJQUFuQixHQUEwQixNQUExQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBMURMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRU8sSUFBTUcsSUFBYjtBQUNJLGtCQUFjO0FBQUE7O0FBQ1YsU0FBS3hDLElBQUwsR0FBWXlDLHVDQUFRLENBQUN6QyxJQUFyQjtBQUNBLFNBQUswQyxTQUFMLEdBQWlCLEtBQWpCO0FBRUEsU0FBSzlCLE1BQUwsR0FBYyxJQUFJK0IsMERBQUosQ0FBV0YsdUNBQVEsQ0FBQzdCLE1BQXBCLENBQWQ7QUFFQSxTQUFLZ0MsVUFBTCxHQUFrQixJQUFJN0Isb0VBQUosRUFBbEI7QUFFQSxTQUFLOEIsTUFBTCxHQUFjLElBQUlDLHFEQUFKLENBQVdMLHVDQUFRLENBQUNJLE1BQXBCLENBQWQ7QUFFQSxTQUFLRSxTQUFMLEdBQWlCLElBQUlDLDJEQUFKLENBQWMsS0FBS0gsTUFBbkIsQ0FBakI7QUFDSDs7QUFaTDtBQUFBO0FBQUEsMkJBY1c7QUFDSCxXQUFLakMsTUFBTCxDQUFZTCxJQUFaO0FBQ0EsV0FBS3NDLE1BQUwsQ0FBWXRDLElBQVo7QUFFQSxXQUFLcUMsVUFBTCxDQUFnQkssR0FBaEIsQ0FDSSxJQUFJeEIsc0VBQUosQ0FBb0I7QUFBRUMsY0FBTSxFQUFFO0FBQzFCRyxpQkFBTyxFQUFJLElBQUlxQixnRUFBSixDQUFpQjtBQUFFdEMsa0JBQU0sRUFBRSxLQUFLQSxNQUFmO0FBQXVCYixnQkFBSSxFQUFFMEMsdUNBQVEsQ0FBQ2YsTUFBVCxDQUFnQkc7QUFBN0MsV0FBakIsQ0FEZTtBQUUxQnNCLG1CQUFTLEVBQUUsSUFBSUMsZ0VBQUosQ0FBYztBQUFFeEMsa0JBQU0sRUFBRSxLQUFLQSxNQUFmO0FBQXVCYixnQkFBSSxFQUFFMEMsdUNBQVEsQ0FBQ2YsTUFBVCxDQUFnQnlCO0FBQTdDLFdBQWQsQ0FGZTtBQUcxQkUsaUJBQU8sRUFBSSxJQUFJQyxpRUFBSixDQUFZO0FBQUVULGtCQUFNLEVBQUUsS0FBS0EsTUFBZjtBQUF1QmpDLGtCQUFNLEVBQUUsS0FBS0EsTUFBcEM7QUFBNENtQyxxQkFBUyxFQUFFLEtBQUtBLFNBQTVEO0FBQXVFaEQsZ0JBQUksRUFBRTBDLHVDQUFRLENBQUNmLE1BQVQsQ0FBZ0I2QjtBQUE3RixXQUFaO0FBSGU7QUFBVixPQUFwQixDQURKLEVBTUksSUFBSXpELHdFQUFKLENBQWtCMkMsdUNBQVEsQ0FBQ3JCLGFBQTNCLENBTko7QUFRSDtBQTFCTDtBQUFBO0FBQUEsMEJBNEJVWixJQTVCVixFQTRCZ0I7QUFBQTs7QUFDUixXQUFLb0MsVUFBTCxDQUFnQnpCLE1BQWhCLENBQXVCWCxJQUF2QixFQUE2QixLQUFLSSxNQUFsQztBQUVBLFdBQUs4QixTQUFMLElBQWtCYyxxQkFBcUIsQ0FBQyxVQUFBaEQsSUFBSTtBQUFBLGVBQUksS0FBSSxDQUFDaUQsS0FBTCxDQUFXakQsSUFBWCxDQUFKO0FBQUEsT0FBTCxDQUF2QztBQUNIO0FBaENMO0FBQUE7QUFBQSwwQkFrQ1U7QUFBQTs7QUFDRixXQUFLRCxJQUFMO0FBRUEsT0FBQyxLQUFLbUMsU0FBTCxHQUFpQixJQUFsQixLQUEyQmMscUJBQXFCLENBQUMsVUFBQWhELElBQUk7QUFBQSxlQUFJLE1BQUksQ0FBQ2lELEtBQUwsQ0FBV2pELElBQVgsQ0FBSjtBQUFBLE9BQUwsQ0FBaEQ7QUFFQWtELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDSDtBQXhDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVPLElBQU1DLE1BQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBdUk7QUFBQTs7QUFBQSx5QkFBekg1RCxJQUF5SDtBQUFBLFFBQXpIQSxJQUF5SCwwQkFBbEgsUUFBa0g7QUFBQSxRQUF4RzZELEtBQXdHLFFBQXhHQSxLQUF3RztBQUFBLFFBQWpHQyxNQUFpRyxRQUFqR0EsTUFBaUc7QUFBQSxRQUF6RkMsT0FBeUYsUUFBekZBLE9BQXlGO0FBQUEsUUFBaEZDLE1BQWdGLFFBQWhGQSxNQUFnRjtBQUFBLFFBQXhFQyxTQUF3RSxRQUF4RUEsU0FBd0U7QUFBQSxzQkFBN0RDLENBQTZEO0FBQUEsUUFBN0RBLENBQTZELHVCQUF6RCxDQUF5RDtBQUFBLHNCQUF0REMsQ0FBc0Q7QUFBQSxRQUF0REEsQ0FBc0QsdUJBQWxELENBQWtEO0FBQUEsNkJBQS9DQyxRQUErQztBQUFBLFFBQS9DQSxRQUErQyw4QkFBcEMsS0FBb0M7QUFBQSxrQ0FBN0JDLGFBQTZCO0FBQUEsUUFBN0JBLGFBQTZCLG1DQUFiQyxTQUFhOztBQUFBOztBQUNuSSw4QkFBTTtBQUFFdEUsVUFBSSxFQUFFQSxJQUFSO0FBQWNrRSxPQUFDLEVBQUVBLENBQWpCO0FBQW9CQyxPQUFDLEVBQUVBLENBQXZCO0FBQTBCQyxjQUFRLEVBQUVBLFFBQXBDO0FBQThDQyxtQkFBYSxFQUFFQTtBQUE3RCxLQUFOO0FBRUEsVUFBS1IsS0FBTCxHQUFjQSxLQUFkO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsTUFBTCxHQUFlQSxNQUFmO0FBRUEsVUFBSzFELEtBQUwsR0FBYSxJQUFJRCw0Q0FBSixDQUFVNEQsU0FBVixDQUFiO0FBRUEsVUFBS00sV0FBTCxHQUFtQixLQUFuQjtBQVhtSTtBQVl0STs7QUFiTDtBQUFBO0FBQUEsMkJBZVdDLEtBZlgsRUFla0I7QUFDVixhQUFVQSxLQUFLLENBQUNDLE9BQU4sSUFBaUIsS0FBS1AsQ0FBdkIsSUFBOEJNLEtBQUssQ0FBQ0MsT0FBTixJQUFpQixLQUFLUCxDQUFMLEdBQVMsS0FBS0wsS0FBL0QsSUFDR1csS0FBSyxDQUFDRSxPQUFOLElBQWlCLEtBQUtQLENBQXZCLElBQThCSyxLQUFLLENBQUNFLE9BQU4sSUFBaUIsS0FBS1AsQ0FBTCxHQUFTLEtBQUtMLE1BRHRFO0FBRUg7QUFsQkw7QUFBQTtBQUFBLGlDQW9CaUJhLE1BcEJqQixFQW9CeUJDLFNBcEJ6QixFQW9Cb0M7QUFDNUIsT0FBQyxLQUFLQyxrQkFBTCxHQUEyQkQsU0FBUyxDQUFDRSxnQkFBdEMsS0FBNERILE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0Ysa0JBQTFDLENBQTVEO0FBQ0EsT0FBQyxLQUFLRyxrQkFBTCxHQUEyQkosU0FBUyxDQUFDSyxnQkFBdEMsS0FBNEROLE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0Msa0JBQTFDLENBQTVEO0FBQ0EsT0FBQyxLQUFLRSxnQkFBTCxHQUEyQk4sU0FBUyxDQUFDTyxjQUF0QyxLQUE0RFIsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixTQUF4QixFQUFxQyxLQUFLRyxnQkFBMUMsQ0FBNUQ7QUFDQSxPQUFDLEtBQUtFLG1CQUFMLEdBQTJCUixTQUFTLENBQUNTLGlCQUF0QyxLQUE0RFYsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixPQUF4QixFQUFxQyxLQUFLSyxtQkFBMUMsQ0FBNUQ7QUFDSDtBQXpCTDtBQUFBO0FBQUEsb0NBMkJvQlQsTUEzQnBCLEVBMkI0QjtBQUNwQixXQUFLRSxrQkFBTCxJQUE0QkYsTUFBTSxDQUFDVyxtQkFBUCxDQUEyQixXQUEzQixFQUF3QyxLQUFLVCxrQkFBN0MsQ0FBNUIsSUFBaUcsT0FBTyxLQUFLQSxrQkFBN0c7QUFDQSxXQUFLRyxrQkFBTCxJQUE0QkwsTUFBTSxDQUFDVyxtQkFBUCxDQUEyQixXQUEzQixFQUF3QyxLQUFLTixrQkFBN0MsQ0FBNUIsSUFBaUcsT0FBTyxLQUFLQSxrQkFBN0c7QUFDQSxXQUFLRSxnQkFBTCxJQUE0QlAsTUFBTSxDQUFDVyxtQkFBUCxDQUEyQixTQUEzQixFQUF3QyxLQUFLSixnQkFBN0MsQ0FBNUIsSUFBaUcsT0FBTyxLQUFLQSxnQkFBN0c7QUFDQSxXQUFLRSxtQkFBTCxJQUE0QlQsTUFBTSxDQUFDVyxtQkFBUCxDQUEyQixPQUEzQixFQUF3QyxLQUFLRixtQkFBN0MsQ0FBNUIsSUFBaUcsT0FBTyxLQUFLQSxtQkFBN0c7QUFDSDtBQWhDTDtBQUFBO0FBQUEsMkJBa0NXO0FBQ0gsV0FBSzlFLEtBQUwsQ0FBV0MsSUFBWDtBQUVBLFdBQUtELEtBQUwsQ0FBVzRELENBQVgsSUFBZ0IsS0FBS0EsQ0FBckI7QUFDQSxXQUFLNUQsS0FBTCxDQUFXNkQsQ0FBWCxJQUFnQixLQUFLQSxDQUFyQjs7QUFFQTtBQUNIO0FBekNMO0FBQUE7QUFBQSwyQkEyQ1czRCxJQTNDWCxFQTJDaUJJLE1BM0NqQixFQTJDeUI7QUFBRUEsWUFBTSxDQUFDMkUsVUFBUCxDQUFrQixJQUFsQjtBQUEwQjtBQTNDckQ7O0FBQUE7QUFBQSxFQUE0QkMsa0RBQTVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sSUFBTUEsUUFBYjtBQUNJLHNCQUF1RjtBQUFBLG1GQUFKLEVBQUk7QUFBQSx5QkFBekV4RixJQUF5RTtBQUFBLFFBQXpFQSxJQUF5RSwwQkFBbEUsVUFBa0U7QUFBQSxzQkFBdERrRSxDQUFzRDtBQUFBLFFBQXREQSxDQUFzRCx1QkFBbEQsQ0FBa0Q7QUFBQSxzQkFBL0NDLENBQStDO0FBQUEsUUFBL0NBLENBQStDLHVCQUEzQyxDQUEyQztBQUFBLDZCQUF4Q0MsUUFBd0M7QUFBQSxRQUF4Q0EsUUFBd0MsOEJBQTdCLEtBQTZCO0FBQUEsUUFBdEJDLGFBQXNCLFFBQXRCQSxhQUFzQjs7QUFBQTs7QUFDbkYsU0FBS3JFLElBQUwsR0FBWUEsSUFBWjtBQUVBLFNBQUtrRSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFFQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtxQixVQUFMLEdBQWtCcEIsYUFBbEI7QUFDSDs7QUFUTDtBQUFBO0FBQUEsMkJBV1c7QUFDSCxVQUFJLEtBQUtELFFBQVQsRUFBbUI7QUFDZixhQUFLc0IsU0FBTCxHQUFpQixLQUFLQyxlQUFMLENBQXFCLEtBQUtGLFVBQTFCLENBQWpCO0FBQ0EsYUFBS0MsU0FBTCxDQUFlbkYsSUFBZjtBQUNIOztBQUVELGFBQU8sS0FBS2tGLFVBQVo7QUFDSDtBQWxCTDtBQUFBO0FBQUEsMkJBb0JXakYsSUFwQlgsRUFvQmlCO0FBQUUsV0FBSzRELFFBQUwsSUFBaUIsS0FBS3NCLFNBQUwsQ0FBZTdFLE1BQWYsQ0FBc0JMLElBQXRCLENBQWpCO0FBQStDO0FBcEJsRTtBQUFBO0FBQUEsc0NBc0JzQixDQUFFO0FBdEJ4QjtBQUFBO0FBQUEsMEJBd0JVb0YsSUF4QlYsRUF3QmdCQyxJQXhCaEIsRUF3QnNCO0FBQ2QsV0FBSzNCLENBQUwsR0FBUzBCLElBQVQ7QUFDQSxXQUFLekIsQ0FBTCxHQUFTMEIsSUFBVDtBQUNIO0FBM0JMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRU8sSUFBTXhGLEtBQWI7QUFBQTs7QUFBQTs7QUFDSSx1QkFDcUg7QUFBQTs7QUFBQSx5QkFEdkdMLElBQ3VHO0FBQUEsUUFEdkdBLElBQ3VHLDBCQURoRyxPQUNnRztBQUFBLHlCQUR2RlcsSUFDdUY7QUFBQSxRQUR2RkEsSUFDdUYsMEJBRGhGLE9BQ2dGO0FBQUEsc0JBRHZFdUQsQ0FDdUU7QUFBQSxRQUR2RUEsQ0FDdUUsdUJBRG5FLEVBQ21FO0FBQUEsc0JBRC9EQyxDQUMrRDtBQUFBLFFBRC9EQSxDQUMrRCx1QkFEM0QsRUFDMkQ7QUFBQSwwQkFEdkQyQixLQUN1RDtBQUFBLFFBRHZEQSxLQUN1RCwyQkFEL0MsU0FDK0M7QUFBQSw2QkFBakhDLFFBQWlIO0FBQUEsUUFBakhBLFFBQWlILDhCQUF0RyxFQUFzRztBQUFBLCtCQUFsR0MsVUFBa0c7QUFBQSxRQUFsR0EsVUFBa0csZ0NBQXJGLFFBQXFGO0FBQUEsK0JBQTNFQyxVQUEyRTtBQUFBLFFBQTNFQSxVQUEyRSxnQ0FBOUQsYUFBOEQ7QUFBQSw2QkFBL0M3QixRQUErQztBQUFBLFFBQS9DQSxRQUErQyw4QkFBcEMsS0FBb0M7QUFBQSxrQ0FBN0JDLGFBQTZCO0FBQUEsUUFBN0JBLGFBQTZCLG1DQUFiQyxTQUFhOztBQUFBOztBQUVqSCw4QkFBTTtBQUFFdEUsVUFBSSxFQUFFQSxJQUFSO0FBQWNrRSxPQUFDLEVBQUVBLENBQWpCO0FBQW9CQyxPQUFDLEVBQUVBLENBQXZCO0FBQTBCQyxjQUFRLEVBQUVBLFFBQXBDO0FBQThDQyxtQkFBYSxFQUFFQTtBQUE3RCxLQUFOO0FBRUEsVUFBSzFELElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUttRixLQUFMLEdBQWFBLEtBQWI7QUFFQSxVQUFLQyxRQUFMLEdBQWtCQSxRQUFsQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFUaUg7QUFVcEg7O0FBWkw7QUFBQTtBQUFBLG9DQWNvQmxHLElBZHBCLEVBYzBCO0FBQ2xCLGFBQU8sSUFBSW1HLDZFQUFKLENBQW1CO0FBQ3RCNUYsYUFBSyxFQUFFLElBRGU7QUFFdEI2RixrQkFBVSxFQUFNcEcsSUFBSSxDQUFDb0csVUFGQztBQUd0QkMsY0FBTSxFQUFVckcsSUFBSSxDQUFDcUcsTUFIQztBQUl0QkMsZUFBTyxFQUFTdEcsSUFBSSxDQUFDc0csT0FKQztBQUt0QkMsc0JBQWMsRUFBRXZHLElBQUksQ0FBQ3VHO0FBTEMsT0FBbkIsQ0FBUDtBQU9IO0FBdEJMO0FBQUE7QUFBQSwyQkF3Qlc5RixJQXhCWCxFQXdCaUJJLE1BeEJqQixFQXdCeUI7QUFDakIsV0FBS0MsTUFBTCxDQUFZTCxJQUFaO0FBRUFJLFlBQU0sQ0FBQ0UsU0FBUCxDQUFpQixJQUFqQjtBQUNIO0FBNUJMOztBQUFBO0FBQUEsRUFBMkIwRSxrREFBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUVPLElBQU1lLElBQWI7QUFBQTs7QUFBQTs7QUFDSSxzQkFBNkk7QUFBQTs7QUFBQSx5QkFBL0h2RyxJQUErSDtBQUFBLFFBQS9IQSxJQUErSCwwQkFBeEgsTUFBd0g7QUFBQSxRQUFoSDZELEtBQWdILFFBQWhIQSxLQUFnSDtBQUFBLFFBQXpHQyxNQUF5RyxRQUF6R0EsTUFBeUc7QUFBQSxRQUFqRzBDLFdBQWlHLFFBQWpHQSxXQUFpRztBQUFBLHNCQUFwRnRDLENBQW9GO0FBQUEsUUFBcEZBLENBQW9GLHVCQUFoRixFQUFnRjtBQUFBLHNCQUE1RUMsQ0FBNEU7QUFBQSxRQUE1RUEsQ0FBNEUsdUJBQXhFLEVBQXdFO0FBQUEsNkJBQXBFQyxRQUFvRTtBQUFBLFFBQXBFQSxRQUFvRSw4QkFBekQsS0FBeUQ7QUFBQSxrQ0FBbERDLGFBQWtEO0FBQUEsUUFBbERBLGFBQWtELG1DQUFsQ0MsU0FBa0M7QUFBQSw0QkFBdkJtQyxPQUF1QjtBQUFBLFFBQXZCQSxPQUF1Qiw2QkFBYm5DLFNBQWE7O0FBQUE7O0FBQ3pJLDhCQUFNO0FBQUV0RSxVQUFJLEVBQUVBLElBQVI7QUFBY2tFLE9BQUMsRUFBRUEsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRUEsQ0FBdkI7QUFBMEJDLGNBQVEsRUFBRUEsUUFBcEM7QUFBOENDLG1CQUFhLEVBQUVBO0FBQTdELEtBQU47QUFFQSxVQUFLUixLQUFMLEdBQWNBLEtBQWQ7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQTJDLFdBQU8sS0FBSyxNQUFLQyxXQUFMLEdBQW1CRCxPQUF4QixDQUFQO0FBRUEsVUFBS0QsV0FBTCxHQUFtQixJQUFJRyxxRUFBSixDQUFnQkgsV0FBaEIsQ0FBbkI7QUFSeUk7QUFTNUk7O0FBVkw7QUFBQTtBQUFBLDJCQVlXO0FBQ0gsV0FBS0EsV0FBTCxDQUFpQmpHLElBQWpCOztBQUVBO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLG9DQWtCb0JSLElBbEJwQixFQWtCMEI7QUFDbEIsYUFBTyxJQUFJNkcsK0VBQUosQ0FBb0I7QUFDdkJKLG1CQUFXLEVBQUUsS0FBS0EsV0FESztBQUV2QkssZUFBTyxFQUFNOUcsSUFBSSxDQUFDOEcsT0FGSztBQUd2QlIsZUFBTyxFQUFNdEcsSUFBSSxDQUFDc0csT0FISztBQUl2QkYsa0JBQVUsRUFBR3BHLElBQUksQ0FBQ29HLFVBSks7QUFLdkJuRyxZQUFJLEVBQVNELElBQUksQ0FBQ0MsSUFMSztBQU12Qm9HLGNBQU0sRUFBT3JHLElBQUksQ0FBQ3FHO0FBTkssT0FBcEIsQ0FBUDtBQVFIO0FBM0JMO0FBQUE7QUFBQSwyQkE2Qlc1RixJQTdCWCxFQTZCaUJJLE1BN0JqQixFQTZCeUI7QUFDakIsV0FBS0MsTUFBTCxDQUFZTCxJQUFaO0FBRUFJLFlBQU0sQ0FBQ2tHLFVBQVAsQ0FDSSxLQUFLTixXQUFMLENBQWlCTyxTQUFqQixDQUE0QixLQUFLM0MsUUFBTCxJQUFpQixLQUFLc0IsU0FBTCxDQUFlbUIsT0FBZixDQUF1QixLQUFLbkIsU0FBTCxDQUFlc0IsaUJBQXRDLENBQWxCLElBQStFLENBQTFHLENBREosRUFFSSxLQUFLOUMsQ0FGVCxFQUVZLEtBQUtDLENBRmpCO0FBSUEsV0FBS3VDLFdBQUwsSUFBb0IsS0FBS0EsV0FBTCxDQUFpQk8sR0FBckMsSUFBNENyRyxNQUFNLENBQUNzRyxJQUFQLENBQVksV0FBWixDQUE1QztBQUNIO0FBckNMOztBQUFBO0FBQUEsRUFBMEIxQixrREFBMUIsRTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBOztBQUVBMkIsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQU07QUFDbEIsTUFBTUMsSUFBSSxHQUFHLElBQUk3RSwwQ0FBSixFQUFiO0FBRUE2RSxNQUFJLENBQUNDLEdBQUw7QUFDSCxDQUpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk8sSUFBTXRFLFNBQWI7QUFDSSxxQkFBWUgsTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLMEUsU0FBTCxHQUFpQixFQUFqQjtBQUNIOztBQUpMO0FBQUE7QUFBQSw2QkFNYTtBQUFBOztBQUFFLFdBQUtBLFNBQUwsQ0FBZUMsT0FBZixDQUF1QixVQUFBQyxRQUFRO0FBQUEsZUFBSSxLQUFJLENBQUNDLFNBQUwsQ0FBZUQsUUFBZixLQUE0QixLQUFJLENBQUNFLFdBQUwsQ0FBaUJGLFFBQWpCLENBQWhDO0FBQUEsT0FBL0I7QUFBOEY7QUFON0c7QUFBQTtBQUFBLGdDQVFnQkEsUUFSaEIsRUFRMEI7QUFDbEIsVUFBSUcsSUFBSSxHQUFHLEtBQUsvRSxNQUFMLENBQVkrRSxJQUF2QjtBQUNBLFVBQUlDLEdBQUcsR0FBRztBQUNOQyxVQUFFLEVBQUUsS0FBS2pGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCRCxFQUQzQjtBQUMrQkUsVUFBRSxFQUFFLEtBQUtuRixNQUFMLENBQVkrRSxJQUFaLENBQWlCRyxXQUFqQixDQUE2QkMsRUFEaEU7QUFFTkMsVUFBRSxFQUFFLEtBQUtwRixNQUFMLENBQVkrRSxJQUFaLENBQWlCRyxXQUFqQixDQUE2QjdELENBRjNCO0FBRStCZ0UsVUFBRSxFQUFFLEtBQUtyRixNQUFMLENBQVkrRSxJQUFaLENBQWlCRyxXQUFqQixDQUE2QjdELENBQTdCLEdBQWlDLEtBQUtyQixNQUFMLENBQVkrRSxJQUFaLENBQWlCRyxXQUFqQixDQUE2QmxFLEtBRmpHO0FBR05zRSxVQUFFLEVBQUUsS0FBS3RGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCNUQsQ0FIM0I7QUFHK0JpRSxVQUFFLEVBQUUsS0FBS3ZGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCNUQsQ0FBN0IsR0FBaUMsS0FBS3RCLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCakUsTUFIakc7QUFJTkQsYUFBSyxFQUFFLEtBQUtoQixNQUFMLENBQVkrRSxJQUFaLENBQWlCRyxXQUFqQixDQUE2QmxFLEtBSjlCO0FBSXFDQyxjQUFNLEVBQUUsS0FBS2pCLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCakU7QUFKMUUsT0FBVjtBQU9BLFVBQUl1RSxHQUFHLEdBQUc1SCxJQUFJLENBQUM0SCxHQUFMLENBQ041SCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1EsRUFBVCxHQUFjSixHQUFHLENBQUNLLEVBQTNCLENBRE0sRUFDMEJ6SCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1MsRUFBVCxHQUFjTCxHQUFHLENBQUNJLEVBQTNCLENBRDFCLEVBRU54SCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1UsRUFBVCxHQUFjTixHQUFHLENBQUNPLEVBQTNCLENBRk0sRUFFMEIzSCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1csRUFBVCxHQUFjUCxHQUFHLENBQUNNLEVBQTNCLENBRjFCLENBQVY7O0FBSUEsY0FBT0UsR0FBUDtBQUNJLGFBQUs1SCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1EsRUFBVCxHQUFjSixHQUFHLENBQUNLLEVBQTNCLENBQUw7QUFBcUMsZUFBS3JGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUIxRCxDQUFqQixHQUFxQnVELFFBQVEsQ0FBQ1EsRUFBVCxHQUFjTCxJQUFJLENBQUMvRCxLQUFuQixHQUEyQmdFLEdBQUcsQ0FBQ0MsRUFBcEQ7QUFBd0Q7O0FBQzdGLGFBQUtySCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1MsRUFBVCxHQUFjTCxHQUFHLENBQUNJLEVBQTNCLENBQUw7QUFBcUMsZUFBS3BGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUIxRCxDQUFqQixHQUFxQnVELFFBQVEsQ0FBQ1MsRUFBVCxHQUFjTCxHQUFHLENBQUNDLEVBQWxCLEdBQXFCLENBQTFDO0FBQXdEOztBQUM3RixhQUFLckgsSUFBSSxDQUFDNkgsR0FBTCxDQUFTYixRQUFRLENBQUNVLEVBQVQsR0FBY04sR0FBRyxDQUFDTyxFQUEzQixDQUFMO0FBQXFDLGVBQUt2RixNQUFMLENBQVkrRSxJQUFaLENBQWlCekQsQ0FBakIsR0FBcUJzRCxRQUFRLENBQUNVLEVBQVQsR0FBY1AsSUFBSSxDQUFDOUQsTUFBbkIsR0FBMEIsQ0FBL0M7QUFBd0Q7O0FBQzdGLGFBQUtyRCxJQUFJLENBQUM2SCxHQUFMLENBQVNiLFFBQVEsQ0FBQ1csRUFBVCxHQUFjUCxHQUFHLENBQUNNLEVBQTNCLENBQUw7QUFBcUMsZUFBS3RGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJ6RCxDQUFqQixHQUFxQnNELFFBQVEsQ0FBQ1csRUFBVCxHQUFjUCxHQUFHLENBQUNHLEVBQWxCLEdBQXFCLENBQTFDO0FBQXdEO0FBSmpHO0FBTUg7QUEzQkw7QUFBQTtBQUFBLDhCQTZCY1AsUUE3QmQsRUE2QndCO0FBQ2hCLFVBQUlJLEdBQUcsR0FBRztBQUNOSSxVQUFFLEVBQUUsS0FBS3BGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCN0QsQ0FEM0I7QUFDOEJnRSxVQUFFLEVBQUUsS0FBS3JGLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCN0QsQ0FBN0IsR0FBaUMsS0FBS3JCLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJHLFdBQWpCLENBQTZCbEUsS0FEaEc7QUFFTnNFLFVBQUUsRUFBRSxLQUFLdEYsTUFBTCxDQUFZK0UsSUFBWixDQUFpQkcsV0FBakIsQ0FBNkI1RCxDQUYzQjtBQUU4QmlFLFVBQUUsRUFBRSxLQUFLdkYsTUFBTCxDQUFZK0UsSUFBWixDQUFpQkcsV0FBakIsQ0FBNkI1RCxDQUE3QixHQUFpQyxLQUFLdEIsTUFBTCxDQUFZK0UsSUFBWixDQUFpQkcsV0FBakIsQ0FBNkJqRTtBQUZoRyxPQUFWO0FBS0EsYUFBUStELEdBQUcsQ0FBQ0ssRUFBSixHQUFTVCxRQUFRLENBQUNRLEVBQWxCLElBQXdCSixHQUFHLENBQUNJLEVBQUosR0FBU1IsUUFBUSxDQUFDUSxFQUExQyxJQUFnREosR0FBRyxDQUFDTyxFQUFKLEdBQVNYLFFBQVEsQ0FBQ1UsRUFBbEUsSUFBd0VOLEdBQUcsQ0FBQ00sRUFBSixHQUFTVixRQUFRLENBQUNXLEVBQTNGLElBQ0NQLEdBQUcsQ0FBQ0ksRUFBSixHQUFTUixRQUFRLENBQUNTLEVBQWxCLElBQXdCTCxHQUFHLENBQUNLLEVBQUosR0FBU1QsUUFBUSxDQUFDUyxFQUExQyxJQUFnREwsR0FBRyxDQUFDTyxFQUFKLEdBQVNYLFFBQVEsQ0FBQ1UsRUFBbEUsSUFBd0VOLEdBQUcsQ0FBQ00sRUFBSixHQUFTVixRQUFRLENBQUNXLEVBRDNGLElBRUNQLEdBQUcsQ0FBQ08sRUFBSixHQUFTWCxRQUFRLENBQUNVLEVBQWxCLElBQXdCTixHQUFHLENBQUNNLEVBQUosR0FBU1YsUUFBUSxDQUFDVSxFQUExQyxJQUFnRE4sR0FBRyxDQUFDSyxFQUFKLEdBQVNULFFBQVEsQ0FBQ1EsRUFBbEUsSUFBd0VKLEdBQUcsQ0FBQ0ksRUFBSixHQUFTUixRQUFRLENBQUNTLEVBRjNGLElBR0NMLEdBQUcsQ0FBQ00sRUFBSixHQUFTVixRQUFRLENBQUNXLEVBQWxCLElBQXdCUCxHQUFHLENBQUNPLEVBQUosR0FBU1gsUUFBUSxDQUFDVyxFQUExQyxJQUFnRFAsR0FBRyxDQUFDSyxFQUFKLEdBQVNULFFBQVEsQ0FBQ1EsRUFBbEUsSUFBd0VKLEdBQUcsQ0FBQ0ksRUFBSixHQUFTUixRQUFRLENBQUNTLEVBSDNGLElBSUNMLEdBQUcsQ0FBQ0ksRUFBSixJQUFVUixRQUFRLENBQUNRLEVBQW5CLElBQXlCSixHQUFHLENBQUNLLEVBQUosSUFBVVQsUUFBUSxDQUFDUyxFQUE1QyxJQUFrREwsR0FBRyxDQUFDTSxFQUFKLElBQVVWLFFBQVEsQ0FBQ1UsRUFBckUsSUFBMkVOLEdBQUcsQ0FBQ08sRUFBSixJQUFVWCxRQUFRLENBQUNXLEVBSnRHO0FBS0g7QUF4Q0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1HLFVBQWI7QUFDSSxzQkFBWXhJLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLbUUsQ0FBTCxHQUFTbkUsSUFBSSxDQUFDbUUsQ0FBZDtBQUNBLFNBQUtDLENBQUwsR0FBU3BFLElBQUksQ0FBQ29FLENBQWQ7QUFFQSxTQUFLTixLQUFMLEdBQWM5RCxJQUFJLENBQUM4RCxLQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBYy9ELElBQUksQ0FBQytELE1BQW5CO0FBRUEsU0FBSzBFLFNBQUwsR0FBaUJ6SSxJQUFJLENBQUN5SSxTQUF0QjtBQUVBLFNBQUtDLE9BQUwsR0FBZTFJLElBQUksQ0FBQzBJLE9BQXBCO0FBRUEsU0FBS1YsV0FBTCxHQUFtQixJQUFJVyx3REFBSixDQUFnQjNJLElBQUksQ0FBQ2dJLFdBQXJCLENBQW5CO0FBQ0g7O0FBYkw7QUFBQTtBQUFBLDJCQWVXO0FBQ0gsV0FBS0EsV0FBTCxDQUFpQjdELENBQWpCLEdBQXFCLEtBQUtBLENBQUwsR0FBUyxLQUFLNkQsV0FBTCxDQUFpQkQsRUFBL0M7QUFDQSxXQUFLQyxXQUFMLENBQWlCNUQsQ0FBakIsR0FBcUIsS0FBS0EsQ0FBTCxHQUFTLEtBQUs0RCxXQUFMLENBQWlCQyxFQUEvQztBQUNIO0FBbEJMO0FBQUE7QUFBQSw2QkFvQmE7QUFDTCxXQUFLRCxXQUFMLENBQWlCN0QsQ0FBakIsR0FBcUIsS0FBS0EsQ0FBTCxHQUFTLEtBQUs2RCxXQUFMLENBQWlCRCxFQUEvQztBQUNBLFdBQUtDLFdBQUwsQ0FBaUI1RCxDQUFqQixHQUFxQixLQUFLQSxDQUFMLEdBQVMsS0FBSzRELFdBQUwsQ0FBaUJDLEVBQS9DO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLDJCQXlCV3BILE1BekJYLEVBeUJtQjtBQUNYLFdBQUs2SCxPQUFMLElBQWdCN0gsTUFBTSxDQUFDK0gsVUFBUCxDQUFrQixLQUFLekUsQ0FBdkIsRUFBMEIsS0FBS0MsQ0FBL0IsRUFBa0MsS0FBS04sS0FBdkMsRUFBOEMsS0FBS0MsTUFBbkQsQ0FBaEI7QUFDQSxXQUFLaUUsV0FBTCxDQUFpQjVHLE1BQWpCLENBQXdCUCxNQUF4QjtBQUNIO0FBNUJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFNOEgsV0FBYjtBQUNJLHVCQUFZM0ksSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUs4RCxLQUFMLEdBQWE5RCxJQUFJLENBQUM4RCxLQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBYy9ELElBQUksQ0FBQytELE1BQW5CO0FBRUEsU0FBS0ksQ0FBTCxHQUFTbkUsSUFBSSxDQUFDbUUsQ0FBZDtBQUFpQixTQUFLNEQsRUFBTCxHQUFVL0gsSUFBSSxDQUFDbUUsQ0FBZjtBQUNqQixTQUFLQyxDQUFMLEdBQVNwRSxJQUFJLENBQUNvRSxDQUFkO0FBQWlCLFNBQUs2RCxFQUFMLEdBQVVqSSxJQUFJLENBQUNvRSxDQUFmO0FBRWpCLFNBQUtzRSxPQUFMLEdBQWUxSSxJQUFJLENBQUMwSSxPQUFwQjtBQUNIOztBQVRMO0FBQUE7QUFBQSwyQkFXVzdILE1BWFgsRUFXbUI7QUFDWCxXQUFLNkgsT0FBTCxJQUFnQjdILE1BQU0sQ0FBQytILFVBQVAsQ0FBa0IsS0FBS3pFLENBQXZCLEVBQTBCLEtBQUtDLENBQS9CLEVBQWtDLEtBQUtOLEtBQXZDLEVBQThDLEtBQUtDLE1BQW5ELENBQWhCO0FBQ0g7QUFiTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRU8sSUFBTThFLFVBQWI7QUFDSSxzQkFBWTdJLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLeUcsV0FBTCxHQUFtQixJQUFJRyxxRUFBSixDQUFnQjVHLElBQUksQ0FBQ3lHLFdBQXJCLENBQW5CO0FBRUEsU0FBS3FDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5Qi9JLElBQUksQ0FBQzhJLGFBQTlCO0FBQ0g7O0FBTkw7QUFBQTtBQUFBLDJCQVFXO0FBQUE7O0FBQ0gsVUFBSSxLQUFLQSxhQUFMLElBQXNCLEVBQTFCLEVBQThCO0FBRTlCLFdBQUtyQyxXQUFMLENBQWlCakcsSUFBakI7QUFFQSxXQUFLdUksaUJBQUwsQ0FBdUJ0QixPQUF2QixDQUErQixVQUFBOUIsU0FBUyxFQUFJO0FBQ3hDLGFBQUksQ0FBQ21ELGFBQUwsQ0FBbUJuRCxTQUFTLENBQUMxRixJQUE3QixJQUFxQyxJQUFJNEcsK0VBQUosQ0FBb0I7QUFDakI1RyxjQUFJLEVBQVMwRixTQUFTLENBQUMxRixJQUROO0FBRWpCd0cscUJBQVcsRUFBRSxLQUFJLENBQUNBLFdBRkQ7QUFHakJMLG9CQUFVLEVBQUdULFNBQVMsQ0FBQ1MsVUFITjtBQUlqQlUsaUJBQU8sRUFBTW5CLFNBQVMsQ0FBQ21CLE9BSk47QUFLakJULGdCQUFNLEVBQU9WLFNBQVMsQ0FBQ1UsTUFMTjtBQU1qQkMsaUJBQU8sRUFBTVgsU0FBUyxDQUFDVztBQU5OLFNBQXBCLENBQXJDOztBQVFJLGFBQUksQ0FBQ3dDLGFBQUwsQ0FBbUJuRCxTQUFTLENBQUMxRixJQUE3QixFQUFtQ08sSUFBbkM7QUFDUCxPQVZEO0FBVUksYUFBTyxLQUFLdUksaUJBQVo7QUFFSixXQUFLcEQsU0FBTCxHQUFpQixLQUFLbUQsYUFBTCxDQUFtQixXQUFuQixDQUFqQjtBQUNBLFdBQUtuRCxTQUFMLENBQWU0QixHQUFmO0FBQ0g7QUEzQkw7QUFBQTtBQUFBLGlDQTZCaUJ5QixhQTdCakIsRUE2QmdDO0FBQ3hCLFVBQUksS0FBS3JELFNBQUwsQ0FBZTFGLElBQWYsSUFBdUIrSSxhQUEzQixFQUEwQztBQUUxQyxXQUFLckQsU0FBTCxDQUFlcEQsSUFBZjtBQUNBLFdBQUtvRCxTQUFMLEdBQWlCLEtBQUttRCxhQUFMLENBQW1CRSxhQUFuQixDQUFqQjtBQUNBLFdBQUtyRCxTQUFMLENBQWU0QixHQUFmO0FBQ0g7QUFuQ0w7QUFBQTtBQUFBLGdDQXFDZ0I7QUFDUixhQUFPLEtBQUtkLFdBQUwsQ0FBaUJPLFNBQWpCLENBQTJCLEtBQUtyQixTQUFMLENBQWVtQixPQUFmLENBQXVCLEtBQUtuQixTQUFMLENBQWVzQixpQkFBdEMsQ0FBM0IsQ0FBUDtBQUNIO0FBdkNMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNZ0MseUJBQWI7QUFDSSxxQ0FBWUMsSUFBWixFQUFrQkMsY0FBbEIsRUFBa0M7QUFBQTs7QUFDOUIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsMkJBTVcxSSxJQU5YLEVBTWlCO0FBQ1QsV0FBS3lJLElBQUwsQ0FBVUUsWUFBVixDQUF3QixDQUFDLEtBQUtELGNBQUwsQ0FBb0JFLE1BQXBCLEdBQTZCLE9BQTdCLEdBQXVDLE9BQXhDLElBQW1ELEtBQUtGLGNBQUwsQ0FBb0JHLFNBQS9GO0FBQ0EsV0FBS0osSUFBTCxDQUFVdkQsU0FBVixDQUFvQjdFLE1BQXBCLENBQTJCTCxJQUEzQjtBQUNIO0FBVEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU04SSxtQkFBYjtBQUNJLGlDQUFjO0FBQUE7O0FBQ1YsU0FBS0MsSUFBTCxHQUFZO0FBQ1JDLFVBQUksRUFBRTtBQUFFQyxZQUFJLEVBQUUsRUFBUjtBQUFZQyxjQUFNLEVBQUU7QUFBcEIsT0FERTtBQUVSQyxVQUFJLEVBQUU7QUFBRUYsWUFBSSxFQUFFLEVBQVI7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BRkU7QUFHUkUsVUFBSSxFQUFFO0FBQUVILFlBQUksRUFBRSxFQUFSO0FBQVlDLGNBQU0sRUFBRTtBQUFwQixPQUhFO0FBSVJHLFVBQUksRUFBRTtBQUFFSixZQUFJLEVBQUUsRUFBUjtBQUFZQyxjQUFNLEVBQUU7QUFBcEIsT0FKRTtBQU1SSSxhQUFPLEVBQUs7QUFBRUwsWUFBSSxFQUFFLEVBQVI7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BTko7QUFPUkssZ0JBQVUsRUFBRTtBQUFFTixZQUFJLEVBQUUsRUFBUjtBQUFZQyxjQUFNLEVBQUU7QUFBcEIsT0FQSjtBQVFSTSxlQUFTLEVBQUc7QUFBRVAsWUFBSSxFQUFFLEVBQVI7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BUko7QUFTUk8sZUFBUyxFQUFHO0FBQUVSLFlBQUksRUFBRSxFQUFSO0FBQVlDLGNBQU0sRUFBRTtBQUFwQixPQVRKO0FBV1JRLFdBQUssRUFBRTtBQUFFVCxZQUFJLEVBQUUsRUFBUjtBQUFZQyxjQUFNLEVBQUU7QUFBcEI7QUFYQyxLQUFaO0FBY0EsU0FBS1MsU0FBTCxHQUFpQixLQUFqQjtBQUNIOztBQWpCTDtBQUFBO0FBQUEsNEJBbUJZO0FBQUUsV0FBS0MsZ0JBQUw7QUFBMEI7QUFuQnhDO0FBQUE7QUFBQSwyQkFvQlk7QUFBRSxXQUFLQyxlQUFMO0FBQTBCO0FBcEJ4QztBQUFBO0FBQUEsdUNBc0J1QjtBQUNmLFdBQUtDLGdCQUFMLEdBQXdCLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXhCO0FBQ0EsV0FBS0MsY0FBTCxHQUF3QixLQUFLQyxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUF4QjtBQUVBckQsWUFBTSxDQUFDcEMsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBS3VGLGdCQUF4QztBQUNBbkQsWUFBTSxDQUFDcEMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBbUMsS0FBSzBGLGNBQXhDO0FBQ0g7QUE1Qkw7QUFBQTtBQUFBLHNDQThCc0I7QUFDZCxXQUFLSCxnQkFBTCxJQUF5Qm5ELE1BQU0sQ0FBQzdCLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDLEtBQUtnRixnQkFBM0MsQ0FBekIsSUFBeUYsT0FBTyxLQUFLQSxnQkFBckc7QUFDQSxXQUFLRyxjQUFMLElBQXlCdEQsTUFBTSxDQUFDN0IsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBc0MsS0FBS21GLGNBQTNDLENBQXpCLElBQXlGLE9BQU8sS0FBS0EsY0FBckc7QUFDSDtBQWpDTDtBQUFBO0FBQUEsNkJBbUNhO0FBQUUsV0FBS04sU0FBTCxHQUFpQixLQUFLWixJQUFMLENBQVVDLElBQVYsQ0FBZUUsTUFBZixJQUF5QixLQUFLSCxJQUFMLENBQVVJLElBQVYsQ0FBZUQsTUFBeEMsSUFBa0QsS0FBS0gsSUFBTCxDQUFVSyxJQUFWLENBQWVGLE1BQWpFLElBQTJFLEtBQUtILElBQUwsQ0FBVU0sSUFBVixDQUFlSCxNQUEzRztBQUFvSDtBQW5Dbkk7QUFBQTtBQUFBLG1DQXFDbUJsRixLQXJDbkIsRUFxQzBCO0FBQ2xCLFVBQUksS0FBSytFLElBQUwsQ0FBVS9FLEtBQUssQ0FBQ2lGLElBQWhCLENBQUosRUFBMkI7QUFDdkJqRixhQUFLLENBQUNtRyxjQUFOO0FBQ0EsYUFBS3BCLElBQUwsQ0FBVS9FLEtBQUssQ0FBQ2lGLElBQWhCLEVBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNIO0FBQ0o7QUExQ0w7QUFBQTtBQUFBLGlDQTRDaUJsRixLQTVDakIsRUE0Q3dCO0FBQ2hCLFVBQUksS0FBSytFLElBQUwsQ0FBVS9FLEtBQUssQ0FBQ2lGLElBQWhCLENBQUosRUFBMkI7QUFDdkJqRixhQUFLLENBQUNtRyxjQUFOO0FBQ0EsYUFBS3BCLElBQUwsQ0FBVS9FLEtBQUssQ0FBQ2lGLElBQWhCLEVBQXNCQyxNQUF0QixHQUErQixLQUEvQjtBQUNIO0FBQ0o7QUFqREw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1rQixvQkFBYjtBQUNJLGdDQUFZL0gsTUFBWixFQUFvQmdJLGFBQXBCLEVBQW1DOUssSUFBbkMsRUFBeUM7QUFBQTs7QUFDckMsU0FBSzhDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtnSSxhQUFMLEdBQXFCQSxhQUFyQjtBQUVBLFNBQUt0QixJQUFMLEdBQVl4SixJQUFJLENBQUN3SixJQUFqQjtBQUVBLFNBQUtILE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixNQUFqQjtBQUNIOztBQVRMO0FBQUE7QUFBQSw2QkFXYTtBQUNMLFVBQUksS0FBS3dCLGFBQUwsQ0FBbUJ0QixJQUFuQixDQUF3QixLQUFLQSxJQUFMLENBQVV1QixFQUFsQyxFQUFzQ3BCLE1BQTFDLEVBQXFELEtBQUtxQixNQUFMO0FBQ3JELFVBQUksS0FBS0YsYUFBTCxDQUFtQnRCLElBQW5CLENBQXdCLEtBQUtBLElBQUwsQ0FBVXlCLEtBQWxDLEVBQXlDdEIsTUFBN0MsRUFBcUQsS0FBS3VCLFNBQUw7QUFDckQsVUFBSSxLQUFLSixhQUFMLENBQW1CdEIsSUFBbkIsQ0FBd0IsS0FBS0EsSUFBTCxDQUFVMkIsSUFBbEMsRUFBd0N4QixNQUE1QyxFQUFxRCxLQUFLeUIsUUFBTDtBQUNyRCxVQUFJLEtBQUtOLGFBQUwsQ0FBbUJ0QixJQUFuQixDQUF3QixLQUFLQSxJQUFMLENBQVU2QixJQUFsQyxFQUF3QzFCLE1BQTVDLEVBQXFELEtBQUsyQixRQUFMO0FBRXJELFVBQUksQ0FBQyxLQUFLUixhQUFMLENBQW1CVixTQUF4QixFQUFtQyxLQUFLZixNQUFMLEdBQWMsS0FBZDtBQUN0QztBQWxCTDtBQUFBO0FBQUEsNkJBb0JnQjtBQUNSLFdBQUt2RyxNQUFMLENBQVkrRSxJQUFaLENBQWlCekQsQ0FBakIsSUFBc0IsS0FBS3RCLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJZLFNBQXZDO0FBQ0EsV0FBS1ksTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLGdDQTBCZ0I7QUFDUixXQUFLeEcsTUFBTCxDQUFZK0UsSUFBWixDQUFpQjFELENBQWpCLElBQXNCLEtBQUtyQixNQUFMLENBQVkrRSxJQUFaLENBQWlCWSxTQUF2QztBQUNBLFdBQUtZLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixPQUFqQjtBQUNIO0FBOUJMO0FBQUE7QUFBQSwrQkFnQ2dCO0FBQ1IsV0FBS3hHLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJ6RCxDQUFqQixJQUFzQixLQUFLdEIsTUFBTCxDQUFZK0UsSUFBWixDQUFpQlksU0FBdkM7QUFDQSxXQUFLWSxNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsTUFBakI7QUFDSDtBQXBDTDtBQUFBO0FBQUEsK0JBc0NnQjtBQUNSLFdBQUt4RyxNQUFMLENBQVkrRSxJQUFaLENBQWlCMUQsQ0FBakIsSUFBc0IsS0FBS3JCLE1BQUwsQ0FBWStFLElBQVosQ0FBaUJZLFNBQXZDO0FBQ0EsV0FBS1ksTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7QUExQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVPLElBQU1pQyxnQkFBYjtBQUNJLGtDQUE4QjtBQUFBLFFBQWhCekksTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsUUFBUjlDLElBQVEsUUFBUkEsSUFBUTs7QUFBQTs7QUFDMUIsU0FBSzhDLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFNBQUtnSSxhQUFMLEdBQXFCLElBQUl2QixrRUFBSixFQUFyQjtBQUNBLFNBQUtKLGNBQUwsR0FBc0IsSUFBSTBCLG9FQUFKLENBQXlCLEtBQUsvSCxNQUE5QixFQUFzQyxLQUFLZ0ksYUFBM0MsRUFBMEQ5SyxJQUFJLENBQUNtSixjQUEvRCxDQUF0QjtBQUNBLFNBQUtxQyxtQkFBTCxHQUEyQixJQUFJdkMsOEVBQUosQ0FBOEIsS0FBS25HLE1BQUwsQ0FBWW9HLElBQTFDLEVBQWdELEtBQUtDLGNBQXJELENBQTNCO0FBQ0g7O0FBUEw7QUFBQTtBQUFBLDRCQVNZO0FBQUUsV0FBSzJCLGFBQUwsQ0FBbUI3SSxLQUFuQjtBQUE2QjtBQVQzQztBQUFBO0FBQUEsMkJBVVk7QUFBRSxXQUFLNkksYUFBTCxDQUFtQnZJLElBQW5CO0FBQTZCO0FBVjNDO0FBQUE7QUFBQSwyQkFZVzlCLElBWlgsRUFZaUI7QUFDVCxXQUFLcUssYUFBTCxDQUFtQmhLLE1BQW5CO0FBQ0EsV0FBS3FJLGNBQUwsQ0FBb0JySSxNQUFwQjtBQUNBLFdBQUswSyxtQkFBTCxDQUF5QjFLLE1BQXpCLENBQWdDTCxJQUFoQztBQUNIO0FBaEJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFFTyxJQUFNc0MsTUFBYjtBQUNJLGtCQUFZL0MsSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtDLElBQUwsR0FBWUQsSUFBSSxDQUFDQyxJQUFqQjtBQUVBLFNBQUs0SCxJQUFMLEdBQVksSUFBSVcsMkRBQUosQ0FBZXhJLElBQUksQ0FBQzZILElBQXBCLENBQVo7QUFDQSxTQUFLcUIsSUFBTCxHQUFZLElBQUlMLDJEQUFKLENBQWU3SSxJQUFJLENBQUNrSixJQUFwQixDQUFaO0FBRUEsU0FBS3JHLFVBQUwsR0FBa0IsSUFBSTBJLDhFQUFKLENBQXFCO0FBQUV6SSxZQUFNLEVBQUUsSUFBVjtBQUFnQjlDLFVBQUksRUFBRUEsSUFBSSxDQUFDNkM7QUFBM0IsS0FBckIsQ0FBbEI7QUFDSDs7QUFSTDtBQUFBO0FBQUEsMkJBVVc7QUFDSCxXQUFLcUcsSUFBTCxDQUFVMUksSUFBVjtBQUNBLFdBQUtxSCxJQUFMLENBQVVySCxJQUFWO0FBQ0g7QUFiTDtBQUFBO0FBQUEsMkJBZVdDLElBZlgsRUFlaUI7QUFDVCxXQUFLb0MsVUFBTCxDQUFnQi9CLE1BQWhCLENBQXVCTCxJQUF2QjtBQUNBLFdBQUtvSCxJQUFMLENBQVUvRyxNQUFWO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLDJCQW9CV0wsSUFwQlgsRUFvQmlCSSxNQXBCakIsRUFvQnlCO0FBQ2pCLFdBQUtDLE1BQUwsQ0FBWUwsSUFBWjtBQUVBSSxZQUFNLENBQUNrRyxVQUFQLENBQWtCLEtBQUttQyxJQUFMLENBQVVsQyxTQUFWLEVBQWxCLEVBQXlDLEtBQUthLElBQUwsQ0FBVTFELENBQW5ELEVBQXNELEtBQUswRCxJQUFMLENBQVV6RCxDQUFoRTtBQUNBLFdBQUt5RCxJQUFMLENBQVV6RyxNQUFWLENBQWlCUCxNQUFqQjtBQUNIO0FBekJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTyxJQUFNNEssU0FBYjtBQUNJLDJCQUF1RTtBQUFBLFFBQXpEeEwsSUFBeUQsUUFBekRBLElBQXlEO0FBQUEsK0JBQW5EbUcsVUFBbUQ7QUFBQSxRQUFuREEsVUFBbUQsZ0NBQXZDLEVBQXVDO0FBQUEsMkJBQW5DQyxNQUFtQztBQUFBLFFBQW5DQSxNQUFtQyw0QkFBMUIsS0FBMEI7QUFBQSw0QkFBbkJDLE9BQW1CO0FBQUEsUUFBbkJBLE9BQW1CLDZCQUFULEtBQVM7O0FBQUE7O0FBQ25FLFNBQUtyRyxJQUFMLEdBQVlBLElBQVo7QUFFQSxTQUFLb0csTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBRUEsU0FBS0YsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLc0YsYUFBTCxHQUFxQixDQUFyQjtBQUVBLFNBQUsvSSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7O0FBWEw7QUFBQTtBQUFBLDJCQWFXO0FBQUUsV0FBSzJELE9BQUwsSUFBZ0IsS0FBS2lCLEdBQUwsRUFBaEI7QUFBNkI7QUFiMUM7QUFBQTtBQUFBLDBCQWVXO0FBQUUsV0FBSzVFLFNBQUwsR0FBaUIsSUFBakI7QUFBeUI7QUFmdEM7QUFBQTtBQUFBLDJCQWdCVztBQUFFLFdBQUtBLFNBQUwsR0FBaUIsS0FBakI7QUFBeUI7QUFoQnRDO0FBQUE7QUFBQSwyQkFrQldsQyxJQWxCWCxFQWtCaUI7QUFDVCxVQUFJLENBQUMsS0FBS2tDLFNBQVYsRUFBcUI7O0FBRXJCLFVBQUksS0FBSytJLGFBQUwsSUFBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBS0EsYUFBTCxHQUFxQmpMLElBQXJCO0FBQ0E7QUFDSDs7QUFFRCxVQUFLQSxJQUFJLEdBQUcsS0FBS2lMLGFBQWIsR0FBOEIsS0FBS3RGLFVBQXZDLEVBQW1EO0FBQy9DLGFBQUt1RixTQUFMO0FBQ0EsYUFBS0QsYUFBTCxHQUFxQmpMLElBQXJCO0FBQ0g7QUFDSjtBQTlCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU0wRixjQUFiO0FBQUE7O0FBQUE7O0FBQ0ksZ0NBQXNIO0FBQUE7O0FBQUEseUJBQXhHbEcsSUFBd0c7QUFBQSxRQUF4R0EsSUFBd0csMEJBQWpHLGdCQUFpRztBQUFBLFFBQS9FTSxLQUErRSxRQUEvRUEsS0FBK0U7QUFBQSwrQkFBeEU2RixVQUF3RTtBQUFBLFFBQXhFQSxVQUF3RSxnQ0FBM0QsR0FBMkQ7QUFBQSxtQ0FBdERHLGNBQXNEO0FBQUEsUUFBdERBLGNBQXNELG9DQUFyQyxFQUFxQztBQUFBLDJCQUFqQ0YsTUFBaUM7QUFBQSxRQUFqQ0EsTUFBaUMsNEJBQXhCLElBQXdCO0FBQUEsNEJBQWxCQyxPQUFrQjtBQUFBLFFBQWxCQSxPQUFrQiw2QkFBUixJQUFROztBQUFBOztBQUNsSCw4QkFBTTtBQUFFckcsVUFBSSxFQUFFQSxJQUFSO0FBQWNtRyxnQkFBVSxFQUFFQSxVQUExQjtBQUFzQ0MsWUFBTSxFQUFFQSxNQUE5QztBQUFzREMsYUFBTyxFQUFFQTtBQUEvRCxLQUFOO0FBRUEsVUFBSy9GLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtnRyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFVBQUtxRixnQkFBTCxHQUF3QixDQUF4QjtBQUxrSDtBQU1ySDs7QUFQTDtBQUFBO0FBQUEsZ0NBU2dCO0FBQ1IsVUFBSSxLQUFLQSxnQkFBTCxHQUF3QixDQUF4QixJQUE2QixLQUFLckYsY0FBTCxDQUFvQnRGLE1BQXJELEVBQTZEO0FBQ3pELGFBQUsySyxnQkFBTCxHQUF3QixDQUF4QjtBQUNILE9BRkQsTUFFTyxFQUFFLEtBQUtBLGdCQUFQOztBQUVQLFdBQUtyTCxLQUFMLENBQVdLLElBQVgsR0FBa0IsS0FBSzJGLGNBQUwsQ0FBb0IsS0FBS3FGLGdCQUF6QixDQUFsQjtBQUNIO0FBZkw7O0FBQUE7QUFBQSxFQUFvQ0gsb0RBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNNUUsZUFBYjtBQUFBOztBQUFBOztBQUNJLGlDQUFrSDtBQUFBOztBQUFBLHlCQUFwRzVHLElBQW9HO0FBQUEsUUFBcEdBLElBQW9HLDBCQUE3RixpQkFBNkY7QUFBQSxRQUExRXdHLFdBQTBFLFFBQTFFQSxXQUEwRTtBQUFBLFFBQTdESyxPQUE2RCxRQUE3REEsT0FBNkQ7QUFBQSwrQkFBcERWLFVBQW9EO0FBQUEsUUFBcERBLFVBQW9ELGdDQUF2QyxHQUF1QztBQUFBLDJCQUFsQ0MsTUFBa0M7QUFBQSxRQUFsQ0EsTUFBa0MsNEJBQXpCLElBQXlCO0FBQUEsNEJBQW5CQyxPQUFtQjtBQUFBLFFBQW5CQSxPQUFtQiw2QkFBVCxLQUFTOztBQUFBOztBQUM5Ryw4QkFBTTtBQUFFckcsVUFBSSxFQUFFQSxJQUFSO0FBQWNtRyxnQkFBVSxFQUFFQSxVQUExQjtBQUFzQ0MsWUFBTSxFQUFFQSxNQUE5QztBQUFzREMsYUFBTyxFQUFFQTtBQUEvRCxLQUFOO0FBRUEsVUFBS0csV0FBTCxHQUFtQkEsV0FBbkI7QUFFQSxVQUFLSyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLK0UsTUFBTCxHQUFjLE1BQUtDLFNBQUwsQ0FBZSxNQUFLaEYsT0FBcEIsQ0FBZDtBQUNBLFVBQUtHLGlCQUFMLEdBQXlCLENBQXpCO0FBUDhHO0FBUWpIOztBQVRMO0FBQUE7QUFBQSwyQkFXVztBQUNILFdBQUtSLFdBQUwsQ0FBaUJqRyxJQUFqQjs7QUFFQTtBQUNIO0FBZkw7QUFBQTtBQUFBLDhCQWlCY3NHLE9BakJkLEVBaUJ1QjtBQUFBOztBQUNmLGFBQU9BLE9BQU8sQ0FBQ2lGLEdBQVIsQ0FBYSxVQUFBQyxLQUFLO0FBQUEsZUFBSztBQUMxQkMsaUJBQU8sRUFBRSxNQUFJLENBQUN4RixXQUFMLENBQWlCeUYsVUFBakIsQ0FBNEJGLEtBQTVCLENBRGlCO0FBRTFCRyxpQkFBTyxFQUFFLE1BQUksQ0FBQzFGLFdBQUwsQ0FBaUIyRixVQUFqQixDQUE0QkosS0FBNUI7QUFGaUIsU0FBTDtBQUFBLE9BQWxCLENBQVA7QUFJSDtBQXRCTDtBQUFBO0FBQUEsZ0NBd0JnQjtBQUNSLFVBQUssS0FBSy9FLGlCQUFMLEdBQXlCLENBQXpCLElBQThCLEtBQUs0RSxNQUFMLENBQVk1SyxNQUEzQyxJQUF1RCxLQUFLb0YsTUFBaEUsRUFDSSxLQUFLWSxpQkFBTCxHQUF5QixDQUF6QixDQURKLEtBRUssSUFBSSxDQUFDLEtBQUtaLE1BQVYsRUFBa0I5RCxJQUFJLEdBQXRCLEtBQ0EsRUFBRSxLQUFLMEUsaUJBQVA7QUFDUjtBQTdCTDs7QUFBQTtBQUFBLEVBQXFDd0Usb0RBQXJDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk8sSUFBTVksTUFBYjtBQUNJLG9CQUE4RjtBQUFBLG1GQUFKLEVBQUk7QUFBQSwwQkFBaEZ2SSxLQUFnRjtBQUFBLFFBQWhGQSxLQUFnRiwyQkFBeEUsR0FBd0U7QUFBQSwyQkFBbkVDLE1BQW1FO0FBQUEsUUFBbkVBLE1BQW1FLDRCQUExRCxHQUEwRDtBQUFBLDJCQUFyRHVJLE1BQXFEO0FBQUEsUUFBckRBLE1BQXFELDRCQUE1QyxHQUE0QztBQUFBLDJCQUF2Q0MsTUFBdUM7QUFBQSxRQUF2Q0EsTUFBdUMsNEJBQTlCLEdBQThCO0FBQUEsK0JBQXpCQyxVQUF5QjtBQUFBLFFBQXpCQSxVQUF5QixnQ0FBWixHQUFZOztBQUFBOztBQUMxRixTQUFLckksQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUVBLFNBQUtOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFNBQUt1SSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxTQUFLRSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBSzVFLElBQUwsR0FBWSxJQUFaO0FBRUEsU0FBSzJFLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7O0FBZkw7QUFBQTtBQUFBLDBCQWlCVUUsR0FqQlYsRUFpQmU7QUFDUCxXQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBSzVFLElBQUwsR0FBWTZFLEdBQUcsQ0FBQzdFLElBQWhCO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLDZCQXNCYTtBQUNMLFVBQUksQ0FBQyxLQUFLNEUsV0FBVixFQUF1QjtBQUV2QixVQUFJLEtBQUs1RSxJQUFMLENBQVUxRCxDQUFWLEdBQWUsS0FBS0EsQ0FBTCxHQUFTLEtBQUtMLEtBQWQsR0FBc0IsS0FBSzBJLFVBQTlDLEVBQ0ksS0FBS3JJLENBQUwsR0FBU3pELElBQUksQ0FBQzRILEdBQUwsQ0FBUyxLQUFLZ0UsTUFBZCxFQUFzQixLQUFLekUsSUFBTCxDQUFVMUQsQ0FBVixHQUFjLEtBQUtMLEtBQW5CLEdBQTJCLEtBQUswSSxVQUF0RCxDQUFUO0FBRUosVUFBSSxLQUFLM0UsSUFBTCxDQUFVMUQsQ0FBVixHQUFlLEtBQUtBLENBQUwsR0FBUyxLQUFLcUksVUFBakMsRUFDSSxLQUFLckksQ0FBTCxHQUFTekQsSUFBSSxDQUFDaU0sR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLOUUsSUFBTCxDQUFVMUQsQ0FBVixHQUFjLEtBQUtxSSxVQUEvQixDQUFUO0FBRUosVUFBSSxLQUFLM0UsSUFBTCxDQUFVekQsQ0FBVixHQUFlLEtBQUtBLENBQUwsR0FBUyxLQUFLTCxNQUFkLEdBQXVCLEtBQUt5SSxVQUEvQyxFQUNJLEtBQUtwSSxDQUFMLEdBQVMxRCxJQUFJLENBQUM0SCxHQUFMLENBQVMsS0FBS2lFLE1BQWQsRUFBc0IsS0FBSzFFLElBQUwsQ0FBVXpELENBQVYsR0FBYyxLQUFLTCxNQUFuQixHQUE0QixLQUFLeUksVUFBdkQsQ0FBVDtBQUVKLFVBQUksS0FBSzNFLElBQUwsQ0FBVXpELENBQVYsR0FBZSxLQUFLQSxDQUFMLEdBQVMsS0FBS29JLFVBQWpDLEVBQ0ksS0FBS3BJLENBQUwsR0FBUzFELElBQUksQ0FBQ2lNLEdBQUwsQ0FBUyxDQUFULEVBQVksS0FBSzlFLElBQUwsQ0FBVXpELENBQVYsR0FBYyxLQUFLb0ksVUFBL0IsQ0FBVDtBQUNQO0FBcENMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNSSxHQUFiO0FBQ0ksZUFBWUMsT0FBWixFQUFxQjdKLFNBQXJCLEVBQWdDO0FBQUE7O0FBQzVCLFNBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsU0FBSzhKLElBQUwsR0FBWUQsT0FBTyxDQUFDQyxJQUFwQjtBQUNBLFNBQUs3TSxJQUFMLEdBQVksS0FBSzZNLElBQUwsQ0FBVTdNLElBQXRCO0FBRUEsU0FBSzZELEtBQUwsR0FBYyxLQUFLZ0osSUFBTCxDQUFVaEosS0FBVixHQUFrQixLQUFLZ0osSUFBTCxDQUFVQyxTQUExQztBQUNBLFNBQUtoSixNQUFMLEdBQWMsS0FBSytJLElBQUwsQ0FBVS9JLE1BQVYsR0FBbUIsS0FBSytJLElBQUwsQ0FBVUUsVUFBM0M7QUFFQSxTQUFLQyxPQUFMLEdBQWUsSUFBSXJHLHFFQUFKLENBQWdCaUcsT0FBTyxDQUFDSSxPQUF4QixDQUFmO0FBRUEsU0FBS0MsR0FBTCxHQUFjLEtBQUtKLElBQUwsQ0FBVS9JLE1BQXhCO0FBQ0EsU0FBS29KLE1BQUwsR0FBYyxLQUFLTCxJQUFMLENBQVVoSixLQUF4QjtBQUVBLFNBQUtzSixNQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBSzVGLFNBQUwsR0FBaUIsRUFBakI7QUFFQSxTQUFLNkYsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFNBQUtDLFVBQUwsR0FBb0IsRUFBcEI7QUFDSDs7QUFwQkw7QUFBQTtBQUFBLDJCQXNCVztBQUNILFdBQUtMLE9BQUwsQ0FBYXpNLElBQWI7QUFFQSxXQUFLK00sWUFBTDtBQUNIO0FBMUJMO0FBQUE7QUFBQSxtQ0E0Qm1CO0FBQUE7O0FBQ1gsV0FBS1QsSUFBTCxDQUFVTSxNQUFWLENBQWlCM0YsT0FBakIsQ0FBeUIsVUFBQStGLEtBQUssRUFBSTtBQUM5QixZQUFJQSxLQUFLLENBQUNDLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUMzQixlQUFJLENBQUNMLE1BQUwsQ0FBWU0sSUFBWixDQUFpQjtBQUFFek4sZ0JBQUksRUFBRXVOLEtBQUssQ0FBQ3ZOLElBQWQ7QUFBb0IwTixtQkFBTyxFQUFFSCxLQUFLLENBQUNWLElBQW5DO0FBQXlDYyxtQkFBTyxFQUFFSixLQUFLLENBQUNLLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JDO0FBQXRFLFdBQWpCO0FBQ0gsU0FGRCxNQUVPLElBQUlOLEtBQUssQ0FBQ0MsSUFBTixJQUFjLGFBQWxCLEVBQWlDO0FBQ3BDLGVBQUksQ0FBQ2pHLFNBQUwsR0FBaUJnRyxLQUFLLENBQUNPLE9BQU4sQ0FBY2hDLEdBQWQsQ0FBa0IsVUFBQWlDLElBQUk7QUFBQSxtQkFBSztBQUN4QzlGLGdCQUFFLEVBQUU4RixJQUFJLENBQUM3SixDQUQrQjtBQUM1QmdFLGdCQUFFLEVBQUU2RixJQUFJLENBQUM3SixDQUFMLEdBQVM2SixJQUFJLENBQUNsSyxLQURVO0FBRXhDc0UsZ0JBQUUsRUFBRTRGLElBQUksQ0FBQzVKLENBRitCO0FBRTVCaUUsZ0JBQUUsRUFBRTJGLElBQUksQ0FBQzVKLENBQUwsR0FBUzRKLElBQUksQ0FBQ2pLO0FBRlUsYUFBTDtBQUFBLFdBQXRCLENBQWpCO0FBSUg7QUFDSixPQVREO0FBV0EsV0FBS3FKLE1BQUwsQ0FBWWEsSUFBWixDQUFrQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLENBQUNOLE9BQUYsR0FBWU8sQ0FBQyxDQUFDUCxPQUF4QjtBQUFBLE9BQWxCO0FBQ0EsV0FBSzVLLFNBQUwsQ0FBZXdFLFNBQWYsR0FBMkIsS0FBS0EsU0FBaEM7QUFFQSxhQUFPLEtBQUtzRixJQUFaO0FBQ0g7QUE1Q0w7QUFBQTtBQUFBLGlDQThDaUJqTSxNQTlDakIsRUE4Q3lCO0FBQ2pCLFdBQUt5TSxVQUFMLENBQWdCN0YsT0FBaEIsQ0FBd0IsVUFBQTJHLElBQUk7QUFBQSxlQUFJdk4sTUFBTSxDQUFDa0csVUFBUCxDQUFrQnFILElBQUksQ0FBQ0MsTUFBdkIsRUFBK0JELElBQUksQ0FBQ2pLLENBQXBDLEVBQXVDaUssSUFBSSxDQUFDaEssQ0FBNUMsQ0FBSjtBQUFBLE9BQTVCO0FBQ0EsV0FBS2tKLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDtBQWpETDtBQUFBO0FBQUEsMkJBbURXek0sTUFuRFgsRUFtRG1CO0FBQUE7O0FBQ1gsV0FBS3VNLE1BQUwsQ0FBWTNGLE9BQVosQ0FBb0IsVUFBQStGLEtBQUssRUFBSTtBQUN6QixZQUFJYyxHQUFHLEdBQUcsQ0FBVjtBQUFBLFlBQWFwQixHQUFHLEdBQUcsQ0FBbkI7QUFFQU0sYUFBSyxDQUFDRyxPQUFOLENBQWNsRyxPQUFkLENBQXNCLFVBQUF1RSxLQUFLLEVBQUk7QUFBQTs7QUFDM0IsY0FBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYLGdCQUFJd0IsS0FBSyxDQUFDdk4sSUFBTixJQUFjLE1BQWQsSUFBd0IsTUFBSSxDQUFDK0MsU0FBTCxDQUFlMkUsU0FBZixDQUF5QjtBQUM3Q08sZ0JBQUUsRUFBRSxNQUFJLENBQUMrRSxPQUFMLENBQWFzQixXQUFiLEdBQTJCRCxHQURjO0FBQ1JuRyxnQkFBRSxFQUFFLE1BQUksQ0FBQzhFLE9BQUwsQ0FBYXNCLFdBQWIsR0FBMkJELEdBQTNCLEdBQWtDLE1BQUksQ0FBQ3JCLE9BQUwsQ0FBYXNCLFdBRDNDO0FBRTdDbkcsZ0JBQUUsRUFBRSxNQUFJLENBQUM2RSxPQUFMLENBQWF1QixZQUFiLEdBQTRCdEIsR0FGYTtBQUVSN0UsZ0JBQUUsRUFBRSxNQUFJLENBQUM0RSxPQUFMLENBQWF1QixZQUFiLEdBQTRCdEIsR0FBNUIsR0FBa0MsTUFBSSxDQUFDRCxPQUFMLENBQWF1QixZQUFiLEdBQTJCO0FBRnpELGFBQXpCLENBQTVCLEVBSUE7QUFDSSxvQkFBSSxDQUFDbEIsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUI7QUFDakJXLHNCQUFNLEVBQUUsTUFBSSxDQUFDcEIsT0FBTCxDQUFhakcsU0FBYixDQUF1QmdGLEtBQXZCLENBRFM7QUFFakI3SCxpQkFBQyxFQUFFLE1BQUksQ0FBQzhJLE9BQUwsQ0FBYXNCLFdBQWIsR0FBMkJELEdBRmI7QUFHakJsSyxpQkFBQyxFQUFFLE1BQUksQ0FBQzZJLE9BQUwsQ0FBYXVCLFlBQWIsR0FBNEJ0QjtBQUhkLGVBQXJCO0FBS0gsYUFWRCxNQVdBck0sTUFBTSxDQUFDa0csVUFBUCxDQUFrQixNQUFJLENBQUNrRyxPQUFMLENBQWFqRyxTQUFiLENBQXVCZ0YsS0FBdkIsQ0FBbEIsRUFBaUQsTUFBSSxDQUFDaUIsT0FBTCxDQUFhc0IsV0FBYixHQUEyQkQsR0FBNUUsRUFBaUYsTUFBSSxDQUFDckIsT0FBTCxDQUFhdUIsWUFBYixHQUE0QnRCLEdBQTdHO0FBQ0g7O0FBQ0EsWUFBRW9CLEdBQUYsR0FBUSxNQUFJLENBQUNuQixNQUFMLEdBQWMsQ0FBdkIsWUFBMkMsQ0FBQyxDQUFELEVBQUlELEdBQUcsR0FBQyxDQUFSLENBQTNDLEVBQStCb0IsR0FBL0IsWUFBb0NwQixHQUFwQztBQUNILFNBaEJEO0FBaUJILE9BcEJEO0FBcUJIO0FBekVMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFNdEcsV0FBYjtBQUNJLDZCQUErRjtBQUFBLHlCQUFqRjNHLElBQWlGO0FBQUEsUUFBakZBLElBQWlGLDBCQUExRSxhQUEwRTtBQUFBLFFBQTNEd08sR0FBMkQsUUFBM0RBLEdBQTJEO0FBQUEsUUFBdEQzSyxLQUFzRCxRQUF0REEsS0FBc0Q7QUFBQSxRQUEvQ0MsTUFBK0MsUUFBL0NBLE1BQStDO0FBQUEsZ0NBQXZDd0ssV0FBdUM7QUFBQSxRQUF2Q0EsV0FBdUMsaUNBQXpCLEVBQXlCO0FBQUEsaUNBQXJCQyxZQUFxQjtBQUFBLFFBQXJCQSxZQUFxQixrQ0FBTixFQUFNOztBQUFBOztBQUMzRixTQUFLdk8sSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3dPLEdBQUwsR0FBV0EsR0FBWDtBQUVBLFNBQUszSyxLQUFMLEdBQWNBLEtBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxTQUFLd0ssV0FBTCxHQUFvQkEsV0FBcEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNIOztBQVZMO0FBQUE7QUFBQSwyQkFZVztBQUFFLFdBQUtFLEtBQUwsS0FBZSxLQUFLQSxLQUFMLEdBQWEsS0FBS0MsU0FBTCxFQUE1QjtBQUFnRDtBQVo3RDtBQUFBO0FBQUEsOEJBY2MzQyxLQWRkLEVBY3FCO0FBQ2IsYUFBUTtBQUNKMEMsYUFBSyxFQUFJLEtBQUtBLEtBRFY7QUFFSjVLLGFBQUssRUFBSSxLQUFLeUssV0FGVjtBQUdKeEssY0FBTSxFQUFHLEtBQUt5SyxZQUhWO0FBSUp2QyxlQUFPLEVBQUUsS0FBS0MsVUFBTCxDQUFnQkYsS0FBaEIsQ0FKTDtBQUtKRyxlQUFPLEVBQUUsS0FBS0MsVUFBTCxDQUFnQkosS0FBaEI7QUFMTCxPQUFSO0FBT0g7QUF0Qkw7QUFBQTtBQUFBLDRCQXdCWTtBQUFBOztBQUNKLGFBQU8sSUFBSTRDLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDMUIsWUFBSUMsR0FBRyxHQUFHLElBQUlDLEtBQUosQ0FBVSxLQUFJLENBQUNqTCxLQUFmLEVBQXNCLEtBQUksQ0FBQ0MsTUFBM0IsQ0FBVjs7QUFDQStLLFdBQUcsQ0FBQ3pILE1BQUosR0FBYTtBQUFBLGlCQUFNd0gsT0FBTyxDQUFDQyxHQUFELENBQWI7QUFBQSxTQUFiOztBQUNBQSxXQUFHLENBQUNMLEdBQUosR0FBVSxLQUFJLENBQUNBLEdBQWY7QUFDSCxPQUpNLENBQVA7QUFLSDtBQTlCTDtBQUFBO0FBQUEsZ0NBZ0NnQjtBQUFBOztBQUFFLFdBQUtPLEtBQUwsR0FBYUMsSUFBYixDQUFrQixVQUFBSCxHQUFHO0FBQUEsZUFBSSxNQUFJLENBQUNKLEtBQUwsR0FBYUksR0FBakI7QUFBQSxPQUFyQixXQUFpRCxVQUFBSSxLQUFLLEVBQUk7QUFBRSxjQUFNQSxLQUFOO0FBQWMsT0FBMUU7QUFBOEU7QUFoQ2hHO0FBQUE7QUFBQSwrQkFrQ2VsRCxLQWxDZixFQWtDc0I7QUFBRSxhQUFPLENBQUNBLEtBQUssR0FBQyxDQUFQLElBQVksS0FBS3VDLFdBQWpCLEdBQStCLEtBQUt6SyxLQUEzQztBQUFtRDtBQWxDM0U7QUFBQTtBQUFBLCtCQW9DZWtJLEtBcENmLEVBb0NzQjtBQUNkLGFBQU90TCxJQUFJLENBQUNDLEtBQUwsQ0FBYSxDQUFDcUwsS0FBSyxHQUFDLENBQVAsSUFBWSxLQUFLdUMsV0FBbEIsR0FBaUMsS0FBS3pLLEtBQWxELElBQTRELEtBQUswSyxZQUF4RTtBQUNIO0FBdENMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVPLElBQU1XLEtBQWI7QUFBQTs7QUFBQTs7QUFDSSx1QkFBb0c7QUFBQTs7QUFBQSx5QkFBdEZsUCxJQUFzRjtBQUFBLFFBQXRGQSxJQUFzRiwwQkFBL0UsT0FBK0U7QUFBQSxRQUF0RVksTUFBc0UsUUFBdEVBLE1BQXNFO0FBQUEsUUFBOURpQyxNQUE4RCxRQUE5REEsTUFBOEQ7QUFBQSxRQUF0REUsU0FBc0QsUUFBdERBLFNBQXNEO0FBQUEsUUFBM0M2SixPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSwyQkFBbENySyxNQUFrQztBQUFBLFFBQWxDQSxNQUFrQyw0QkFBekIsTUFBeUI7QUFBQSx5QkFBakJGLElBQWlCO0FBQUEsUUFBakJBLElBQWlCLDBCQUFWLE1BQVU7O0FBQUE7O0FBQ2hHLDhCQUFNO0FBQUVyQyxVQUFJLEVBQUVBLElBQVI7QUFBY1ksWUFBTSxFQUFFQSxNQUF0QjtBQUE4QjJCLFlBQU0sRUFBRUEsTUFBdEM7QUFBOENGLFVBQUksRUFBRUE7QUFBcEQsS0FBTjtBQUVBLFVBQUt5SixHQUFMLEdBQVcsSUFBSWEsd0NBQUosQ0FBUUMsT0FBUixFQUFpQjdKLFNBQWpCLENBQVg7QUFDQSxVQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFFQSxVQUFLRSxTQUFMLEdBQWlCQSxTQUFqQjtBQU5nRztBQU9uRzs7QUFSTDtBQUFBO0FBQUEsMkJBVVc7QUFDSCxXQUFLK0ksR0FBTCxDQUFTdkwsSUFBVDtBQUNBLFdBQUtzQyxNQUFMLENBQVlELFVBQVosQ0FBdUJaLEtBQXZCO0FBRUEsV0FBS21OLE1BQUwsR0FBYyxJQUFJL0MsOENBQUosQ0FBVztBQUNyQnZJLGFBQUssRUFBRyxLQUFLakQsTUFBTCxDQUFZaUQsS0FEQztBQUVyQkMsY0FBTSxFQUFFLEtBQUtsRCxNQUFMLENBQVlrRCxNQUZDO0FBR3JCdUksY0FBTSxFQUFFLEtBQUtQLEdBQUwsQ0FBU2pJLEtBQVQsR0FBaUIsS0FBS2pELE1BQUwsQ0FBWWlELEtBSGhCO0FBSXJCeUksY0FBTSxFQUFFLEtBQUtSLEdBQUwsQ0FBU2hJLE1BQVQsR0FBa0IsS0FBS2xELE1BQUwsQ0FBWWtEO0FBSmpCLE9BQVgsQ0FBZDtBQU1BLFdBQUtxTCxNQUFMLENBQVlDLEtBQVosQ0FBa0IsS0FBS3ZNLE1BQXZCO0FBRUEsV0FBS2pDLE1BQUwsQ0FBWXlPLFNBQVosQ0FBc0IsS0FBS0YsTUFBM0I7O0FBRUE7QUFDSDtBQXpCTDtBQUFBO0FBQUEsMkJBMkJXM08sSUEzQlgsRUEyQmlCO0FBQ1QsV0FBS3VDLFNBQUwsQ0FBZWxDLE1BQWY7QUFDQSxXQUFLc08sTUFBTCxDQUFZdE8sTUFBWjs7QUFFQSx3RUFBYUwsSUFBYjtBQUNIO0FBaENMO0FBQUE7QUFBQSwyQkFrQ1dBLElBbENYLEVBa0NpQjtBQUNULFdBQUtLLE1BQUwsQ0FBWUwsSUFBWjtBQUVBLFdBQUtzTCxHQUFMLENBQVMzSyxNQUFULENBQWdCLEtBQUtQLE1BQXJCO0FBQ0EsV0FBS2lDLE1BQUwsQ0FBWTFCLE1BQVosQ0FBbUJYLElBQW5CLEVBQXlCLEtBQUtJLE1BQTlCO0FBQ0EsV0FBS2tMLEdBQUwsQ0FBU3dELFlBQVQsQ0FBc0IsS0FBSzFPLE1BQTNCOztBQUVBLHdFQUFhSixJQUFiO0FBQ0g7QUExQ0w7O0FBQUE7QUFBQSxFQUEyQitPLDRDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVPLElBQU1qTSxPQUFiO0FBQUE7O0FBQUE7O0FBQ0kseUJBQW1HO0FBQUEseUJBQXJGdEQsSUFBcUY7QUFBQSxRQUFyRkEsSUFBcUYsMEJBQTlFLFNBQThFO0FBQUEsUUFBbkVZLE1BQW1FLFFBQW5FQSxNQUFtRTtBQUFBLFFBQTNEbUMsU0FBMkQsUUFBM0RBLFNBQTJEO0FBQUEsUUFBaERGLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLFFBQXhDOUMsSUFBd0MsUUFBeENBLElBQXdDO0FBQUEsMkJBQWxDd0MsTUFBa0M7QUFBQSxRQUFsQ0EsTUFBa0MsNEJBQXpCLE1BQXlCO0FBQUEseUJBQWpCRixJQUFpQjtBQUFBLFFBQWpCQSxJQUFpQiwwQkFBVixNQUFVOztBQUFBOztBQUFBLDZCQUN6RjtBQUNGckMsVUFBSSxFQUFFQSxJQURKO0FBRUZZLFlBQU0sRUFBRUEsTUFGTjtBQUdGaUMsWUFBTSxFQUFFQSxNQUhOO0FBSUYrSixhQUFPLEVBQUU7QUFDTEMsWUFBSSxFQUFFOU0sSUFBSSxDQUFDc0QsT0FBTCxDQUFhdUosT0FEZDtBQUVMSSxlQUFPLEVBQUVqTixJQUFJLENBQUN5UDtBQUZULE9BSlA7QUFRRnpNLGVBQVMsRUFBRUEsU0FSVDtBQVNGUixZQUFNLEVBQUVBLE1BVE47QUFVRkYsVUFBSSxFQUFFQTtBQVZKLEtBRHlGO0FBYWxHOztBQWRMO0FBQUEsRUFBNkI2TSw0Q0FBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBRU8sSUFBTWhNLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSw4QkFBZ0Y7QUFBQTs7QUFBQSx5QkFBbEVsRCxJQUFrRTtBQUFBLFFBQWxFQSxJQUFrRSwwQkFBM0QsU0FBMkQ7QUFBQSxRQUFoRFksTUFBZ0QsUUFBaERBLE1BQWdEO0FBQUEsUUFBeENiLElBQXdDLFFBQXhDQSxJQUF3QztBQUFBLDJCQUFsQ3dDLE1BQWtDO0FBQUEsUUFBbENBLE1BQWtDLDRCQUF6QixNQUF5QjtBQUFBLHlCQUFqQkYsSUFBaUI7QUFBQSxRQUFqQkEsSUFBaUIsMEJBQVYsTUFBVTs7QUFBQTs7QUFDNUUsOEJBQU07QUFBRXJDLFVBQUksRUFBRUEsSUFBUjtBQUFjWSxZQUFNLEVBQUVBLE1BQXRCO0FBQThCMkIsWUFBTSxFQUFFQSxNQUF0QztBQUE4Q0YsVUFBSSxFQUFFQTtBQUFwRCxLQUFOO0FBRUEsVUFBS29OLFNBQUwsR0FBaUI7QUFDYkMsZ0JBQVUsRUFBRSxJQUFJbkosb0RBQUosQ0FBU3hHLElBQUksQ0FBQzJQLFVBQWQsQ0FEQztBQUViQyxVQUFJLEVBQVEsSUFBSXBKLG9EQUFKLENBQVN4RyxJQUFJLENBQUM0UCxJQUFkLENBRkM7QUFHYnJQLFdBQUssRUFBTyxJQUFJRCxzREFBSixDQUFVTixJQUFJLENBQUNPLEtBQWY7QUFIQyxLQUFqQjtBQUg0RTtBQVEvRTs7QUFUTDtBQUFBO0FBQUEsNEJBV1k7QUFBQTs7QUFDSnNQLGdCQUFVLENBQUMsWUFBTTtBQUNiLGNBQUksQ0FBQzNOLE1BQUwsR0FBYyxRQUFkO0FBQ0EsY0FBSSxDQUFDSSxJQUFMLEdBQVksV0FBWjtBQUNILE9BSFMsRUFHUCxDQUFDLElBQUk1QixJQUFJLENBQUNvUCxNQUFMLEVBQUwsSUFBc0IsR0FIZixDQUFWLENBREksQ0FJMkI7QUFDbEM7QUFoQkw7O0FBQUE7QUFBQSxFQUFrQ04sNENBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUVPLElBQU1uTSxTQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMkJBQWtGO0FBQUE7O0FBQUEseUJBQXBFcEQsSUFBb0U7QUFBQSxRQUFwRUEsSUFBb0UsMEJBQTdELFdBQTZEO0FBQUEsUUFBaERZLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLFFBQXhDYixJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSwyQkFBbEN3QyxNQUFrQztBQUFBLFFBQWxDQSxNQUFrQyw0QkFBekIsTUFBeUI7QUFBQSx5QkFBakJGLElBQWlCO0FBQUEsUUFBakJBLElBQWlCLDBCQUFWLE1BQVU7O0FBQUE7O0FBQzlFLDhCQUFNO0FBQUVyQyxVQUFJLEVBQUVBLElBQVI7QUFBY1ksWUFBTSxFQUFFQSxNQUF0QjtBQUE4QjJCLFlBQU0sRUFBRUEsTUFBdEM7QUFBOENGLFVBQUksRUFBRUE7QUFBcEQsS0FBTjtBQUVBLFVBQUtvTixTQUFMLEdBQWlCO0FBQ2JDLGdCQUFVLEVBQUUsSUFBSW5KLG9EQUFKLENBQVN4RyxJQUFJLENBQUMyUCxVQUFkLENBREM7QUFFYkksZ0JBQVUsRUFBRSxJQUFJbE0sd0RBQUosQ0FBVzdELElBQUksQ0FBQytQLFVBQWhCO0FBRkMsS0FBakI7QUFIOEU7QUFPakY7O0FBUkw7QUFBQTtBQUFBLHNDQVVzQnRMLEtBVnRCLEVBVTZCO0FBQ3JCQSxXQUFLLEdBQUdBLEtBQUssSUFBSTJDLE1BQU0sQ0FBQzNDLEtBQXhCOztBQUVBLFVBQUksS0FBS2lMLFNBQUwsQ0FBZUssVUFBZixDQUEwQkMsTUFBMUIsQ0FBaUN2TCxLQUFqQyxDQUFKLEVBQTZDO0FBQ3pDLGFBQUt2QyxNQUFMLEdBQWMsUUFBZDtBQUNBLGFBQUtJLElBQUwsR0FBWSxTQUFaO0FBRUEyTixnQkFBUSxDQUFDcEksSUFBVCxDQUFjcUksS0FBZCxDQUFvQkMsTUFBcEIsR0FBNkIsU0FBN0I7QUFDSDtBQUNKO0FBbkJMO0FBQUE7QUFBQSxxQ0FxQnFCMUwsS0FyQnJCLEVBcUI0QjtBQUNwQkEsV0FBSyxHQUFHQSxLQUFLLElBQUkyQyxNQUFNLENBQUMzQyxLQUF4Qjs7QUFFQSxVQUFJLEtBQUtpTCxTQUFMLENBQWVLLFVBQWYsQ0FBMEJDLE1BQTFCLENBQWlDdkwsS0FBakMsQ0FBSixFQUE2QztBQUN6QyxhQUFLaUwsU0FBTCxDQUFlSyxVQUFmLENBQTBCL0wsT0FBMUIsR0FBb0MsS0FBSzBMLFNBQUwsQ0FBZUssVUFBZixDQUEwQjlMLE1BQTFCLENBQWlDbU0sS0FBckU7QUFDQSxhQUFLVixTQUFMLENBQWVLLFVBQWYsQ0FBMEJ2TCxXQUExQixHQUF3QyxJQUF4QztBQUNIO0FBQ0o7QUE1Qkw7QUFBQTtBQUFBLG1DQThCbUJDLEtBOUJuQixFQThCMEI7QUFDbEIsT0FBQ0EsS0FBRCxLQUFXQSxLQUFLLEdBQUcyQyxNQUFNLENBQUMzQyxLQUExQjs7QUFFQSxVQUFJLEtBQUtpTCxTQUFMLENBQWVLLFVBQWYsQ0FBMEJ2TCxXQUE5QixFQUEyQztBQUN2QyxhQUFLa0wsU0FBTCxDQUFlSyxVQUFmLENBQTBCL0wsT0FBMUIsR0FBb0MsS0FBSzBMLFNBQUwsQ0FBZUssVUFBZixDQUEwQjlMLE1BQTFCLFdBQXBDO0FBQ0EsYUFBS3lMLFNBQUwsQ0FBZUssVUFBZixDQUEwQnZMLFdBQTFCLEdBQXdDLEtBQXhDO0FBQ0g7QUFDSjtBQXJDTDtBQUFBO0FBQUEscUNBdUNxQkMsS0F2Q3JCLEVBdUM0QjtBQUNwQkEsV0FBSyxHQUFHQSxLQUFLLElBQUkyQyxNQUFNLENBQUMzQyxLQUF4Qjs7QUFFQSxVQUFJLEtBQUtpTCxTQUFMLENBQWVLLFVBQWYsQ0FBMEJDLE1BQTFCLENBQWlDdkwsS0FBakMsQ0FBSixFQUE2QztBQUN6QyxTQUFDLEtBQUtpTCxTQUFMLENBQWVLLFVBQWYsQ0FBMEJ2TCxXQUEzQixLQUEyQyxLQUFLa0wsU0FBTCxDQUFlSyxVQUFmLENBQTBCL0wsT0FBMUIsR0FBb0MsS0FBSzBMLFNBQUwsQ0FBZUssVUFBZixDQUEwQjlMLE1BQTFCLENBQWlDb00sS0FBaEg7QUFFQUosZ0JBQVEsQ0FBQ3BJLElBQVQsQ0FBY3FJLEtBQWQsQ0FBb0JDLE1BQXBCLEdBQTZCLFNBQTdCO0FBQ0gsT0FKRCxNQUlPO0FBQ0gsU0FBQyxLQUFLVCxTQUFMLENBQWVLLFVBQWYsQ0FBMEJ2TCxXQUEzQixLQUEyQyxLQUFLa0wsU0FBTCxDQUFlSyxVQUFmLENBQTBCL0wsT0FBMUIsR0FBb0MsS0FBSzBMLFNBQUwsQ0FBZUssVUFBZixDQUEwQjlMLE1BQTFCLFdBQS9FO0FBRUFnTSxnQkFBUSxDQUFDcEksSUFBVCxDQUFjcUksS0FBZCxDQUFvQkMsTUFBcEIsR0FBNkIsU0FBN0I7QUFDSDtBQUNKO0FBbkRMO0FBQUE7QUFBQSx1Q0FxRHVCO0FBQ2YsV0FBS1QsU0FBTCxDQUFlSyxVQUFmLENBQTBCTyxZQUExQixDQUF1QyxLQUFLelAsTUFBTCxDQUFZMFAsTUFBWixDQUFtQkMsR0FBMUQsRUFBK0Q7QUFDM0R6TCx3QkFBZ0IsRUFBSSxLQUFLQSxnQkFBTCxDQUFzQjBGLElBQXRCLENBQTJCLElBQTNCLENBRHVDO0FBRTNEdkYsd0JBQWdCLEVBQUksS0FBS0EsZ0JBQUwsQ0FBc0J1RixJQUF0QixDQUEyQixJQUEzQixDQUZ1QztBQUczRHJGLHNCQUFjLEVBQU0sS0FBS0EsY0FBTCxDQUFvQnFGLElBQXBCLENBQXlCLElBQXpCLENBSHVDO0FBSTNEbkYseUJBQWlCLEVBQUcsS0FBS0EsaUJBQUwsQ0FBdUJtRixJQUF2QixDQUE0QixJQUE1QjtBQUp1QyxPQUEvRDtBQU1IO0FBNURMO0FBQUE7QUFBQSxzQ0E4RHNCO0FBQ2QsV0FBS2lGLFNBQUwsQ0FBZUssVUFBZixDQUEwQlUsZUFBMUIsQ0FBMEMsS0FBSzVQLE1BQUwsQ0FBWTBQLE1BQVosQ0FBbUJDLEdBQTdEO0FBQ0g7QUFoRUw7O0FBQUE7QUFBQSxFQUErQmhCLDRDQUEvQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pPLElBQU1BLEtBQWI7QUFDSSx1QkFBNEM7QUFBQSxRQUE5QnZQLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLFFBQXhCWSxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxRQUFoQjJCLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLFFBQVJGLElBQVEsUUFBUkEsSUFBUTs7QUFBQTs7QUFDeEMsU0FBS3JDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtZLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtxQixNQUFMLEdBQWMsU0FBZDtBQUNBLFNBQUtNLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNIOztBQVBMO0FBQUE7QUFBQSwyQkFTVztBQUNILE9BQUMsS0FBS29OLFNBQU4sS0FBb0IsS0FBS0EsU0FBTCxHQUFpQixFQUFyQzs7QUFFQSxXQUFLLElBQUlnQixFQUFULElBQWUsS0FBS2hCLFNBQXBCO0FBQ0ksYUFBS0EsU0FBTCxDQUFlZ0IsRUFBZixFQUFtQmxRLElBQW5CO0FBREo7O0FBR0EsV0FBSzBCLE1BQUwsR0FBYyxRQUFkO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLHVDQWtCdUIsQ0FBRTtBQWxCekI7QUFBQTtBQUFBLHNDQW1CdUIsQ0FBRTtBQW5CekI7QUFBQTtBQUFBLDRCQXFCWTtBQUFFLFdBQUttSSxnQkFBTDtBQUEwQjtBQXJCeEM7QUFBQTtBQUFBLDJCQXNCWTtBQUFFLFdBQUtDLGVBQUw7QUFBMEI7QUF0QnhDO0FBQUE7QUFBQSw2QkF3QmEsQ0FBRTtBQXhCZjtBQUFBO0FBQUEsMkJBMEJXN0osSUExQlgsRUEwQmlCO0FBQ1QsV0FBS0ssTUFBTCxDQUFZTCxJQUFaOztBQUVBLFdBQUssSUFBSWlRLEVBQVQsSUFBZSxLQUFLaEIsU0FBcEI7QUFDSSxhQUFLQSxTQUFMLENBQWVnQixFQUFmLEVBQW1CdFAsTUFBbkIsQ0FBMEJYLElBQTFCLEVBQWdDLEtBQUtJLE1BQXJDO0FBREo7QUFFSDtBQS9CTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTThQLE1BQWI7QUFDSSxvQkFBZ0Q7QUFBQSxtRkFBSixFQUFJO0FBQUEsMEJBQWxDN00sS0FBa0M7QUFBQSxRQUFsQ0EsS0FBa0MsMkJBQTFCLEdBQTBCO0FBQUEsMkJBQXJCQyxNQUFxQjtBQUFBLFFBQXJCQSxNQUFxQiw0QkFBWixHQUFZOztBQUFBOztBQUM1QyxTQUFLRCxLQUFMLEdBQWNBLEtBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7QUFKTDtBQUFBO0FBQUEsMkJBTVc7QUFDSCxVQUFJNk0sR0FBRyxHQUFHWCxRQUFRLENBQUNZLGNBQVQsQ0FBd0IsTUFBeEIsS0FBbUNaLFFBQVEsQ0FBQ3BJLElBQVQsQ0FBY2lKLFdBQWQsQ0FBMkJiLFFBQVEsQ0FBQ2MsYUFBVCxDQUF1QixLQUF2QixDQUEzQixDQUE3QztBQUNBSCxTQUFHLENBQUNJLEVBQUosR0FBUyxNQUFUO0FBRUEsV0FBS1IsR0FBTCxHQUFXSSxHQUFHLENBQUNLLG9CQUFKLENBQXlCLFFBQXpCLEVBQW1DLENBQW5DLEtBQXlDTCxHQUFHLENBQUNFLFdBQUosQ0FBZ0JiLFFBQVEsQ0FBQ2MsYUFBVCxDQUF1QixRQUF2QixDQUFoQixDQUFwRDtBQUNBLFdBQUtQLEdBQUwsQ0FBUzFNLEtBQVQsR0FBa0IsS0FBS0EsS0FBdkI7QUFDQSxXQUFLME0sR0FBTCxDQUFTek0sTUFBVCxHQUFrQixLQUFLQSxNQUF2QjtBQUNBLFdBQUttTixPQUFMLEdBQWUsS0FBS1YsR0FBTCxDQUFTVyxVQUFULENBQW9CLElBQXBCLENBQWY7QUFDSDtBQWRMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNdk8sTUFBYjtBQUNJLG9CQUFnRDtBQUFBLG1GQUFKLEVBQUk7QUFBQSwwQkFBbENrQixLQUFrQztBQUFBLFFBQWxDQSxLQUFrQywyQkFBMUIsR0FBMEI7QUFBQSwyQkFBckJDLE1BQXFCO0FBQUEsUUFBckJBLE1BQXFCLDRCQUFaLEdBQVk7O0FBQUE7O0FBQzVDLFNBQUtELEtBQUwsR0FBY0EsS0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFNBQUt3TSxNQUFMLEdBQWMsSUFBSUksOENBQUosQ0FBVztBQUFFN00sV0FBSyxFQUFFQSxLQUFUO0FBQWdCQyxZQUFNLEVBQUVBO0FBQXhCLEtBQVgsQ0FBZDtBQUVBLFNBQUtxTCxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtnQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7O0FBVEw7QUFBQTtBQUFBLDhCQVdjaEMsTUFYZCxFQVdzQjtBQUNkLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQUtnQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0g7QUFkTDtBQUFBO0FBQUEsMkJBZ0JXO0FBQUUsV0FBS2IsTUFBTCxDQUFZL1AsSUFBWjtBQUFxQjtBQWhCbEM7QUFBQTtBQUFBLCtCQWtCZTZRLE1BbEJmLEVBa0J1QjtBQUNmLFdBQUtkLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkksU0FBcEIsR0FBZ0MsU0FBaEM7QUFDQSxXQUFLZixNQUFMLENBQVlXLE9BQVosQ0FBb0JLLFFBQXBCLENBQTZCRixNQUFNLENBQUNsTixDQUFQLEdBQVcsQ0FBeEMsRUFBMkNrTixNQUFNLENBQUNqTixDQUFQLEdBQVcsQ0FBdEQsRUFBeURpTixNQUFNLENBQUN2TixLQUFQLEdBQWUsRUFBeEUsRUFBNEV1TixNQUFNLENBQUN0TixNQUFQLEdBQWdCLEVBQTVGO0FBQ0EsV0FBS3dNLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkksU0FBcEIsR0FBZ0NELE1BQU0sQ0FBQ3JOLE9BQXZDO0FBQ0EsV0FBS3VNLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkssUUFBcEIsQ0FBNkJGLE1BQU0sQ0FBQ2xOLENBQXBDLEVBQXVDa04sTUFBTSxDQUFDak4sQ0FBOUMsRUFBaURpTixNQUFNLENBQUN2TixLQUF4RCxFQUErRHVOLE1BQU0sQ0FBQ3ROLE1BQXRFO0FBRUEsV0FBS2hELFNBQUwsQ0FBZXNRLE1BQU0sQ0FBQzlRLEtBQXRCO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLDhCQTJCY0EsS0EzQmQsRUEyQnFCO0FBQ2IsV0FBS2dRLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkksU0FBcEIsR0FBZ0MvUSxLQUFLLENBQUN3RixLQUF0QztBQUNBLFdBQUt3SyxNQUFMLENBQVlXLE9BQVosQ0FBb0JNLElBQXBCLGFBQThCalIsS0FBSyxDQUFDMEYsVUFBcEMsY0FBa0QxRixLQUFLLENBQUN5RixRQUF4RCxnQkFBc0V6RixLQUFLLENBQUMyRixVQUFOLElBQW9CLGlCQUExRjtBQUVBLFdBQUtxSyxNQUFMLENBQVlXLE9BQVosQ0FBb0JPLFFBQXBCLENBQTZCbFIsS0FBSyxDQUFDSyxJQUFuQyxFQUF5Q0wsS0FBSyxDQUFDNEQsQ0FBL0MsRUFBa0Q1RCxLQUFLLENBQUM2RCxDQUF4RDtBQUNIO0FBaENMO0FBQUE7QUFBQSw4QkFrQ2NzSyxLQWxDZCxFQWtDcUJ2SyxDQWxDckIsRUFrQ3dCQyxDQWxDeEIsRUFrQzJCO0FBQUVzSyxXQUFLLElBQUksS0FBSzZCLE1BQUwsQ0FBWVcsT0FBWixDQUFvQlEsU0FBcEIsQ0FBOEJoRCxLQUE5QixFQUFxQ3ZLLENBQXJDLEVBQXdDQyxDQUF4QyxDQUFUO0FBQXNEO0FBbENuRjtBQUFBO0FBQUEsK0JBb0NlaUssTUFwQ2YsRUFvQ3VCbEssQ0FwQ3ZCLEVBb0MwQkMsQ0FwQzFCLEVBb0M2QjtBQUNyQixVQUFHLEtBQUtnTixXQUFSLEVBQXFCO0FBQ2pCak4sU0FBQyxJQUFJLEtBQUtpTCxNQUFMLENBQVlqTCxDQUFqQjtBQUNBQyxTQUFDLElBQUksS0FBS2dMLE1BQUwsQ0FBWWhMLENBQWpCO0FBQ0g7O0FBRURpSyxZQUFNLENBQUNLLEtBQVAsSUFBZ0IsS0FBSzZCLE1BQUwsQ0FBWVcsT0FBWixDQUFvQlEsU0FBcEIsQ0FDWnJELE1BQU0sQ0FBQ0ssS0FESyxFQUVaTCxNQUFNLENBQUNwQyxPQUZLLEVBRUlvQyxNQUFNLENBQUNsQyxPQUZYLEVBR1prQyxNQUFNLENBQUN2SyxLQUhLLEVBR0V1SyxNQUFNLENBQUN0SyxNQUhULEVBSVpJLENBSlksRUFJVEMsQ0FKUyxFQUtaaUssTUFBTSxDQUFDdkssS0FMSyxFQUtFdUssTUFBTSxDQUFDdEssTUFMVCxDQUFoQjtBQU9IO0FBakRMO0FBQUE7QUFBQSwrQkFtRGVJLENBbkRmLEVBbURrQkMsQ0FuRGxCLEVBbURxQk4sS0FuRHJCLEVBbUQ0QkMsTUFuRDVCLEVBbURvQztBQUM1QixXQUFLd00sTUFBTCxDQUFZVyxPQUFaLENBQW9CdEksVUFBcEIsQ0FBK0J6RSxDQUEvQixFQUFrQ0MsQ0FBbEMsRUFBcUNOLEtBQXJDLEVBQTRDQyxNQUE1QztBQUNIO0FBckRMO0FBQUE7QUFBQSx5QkF1RFNnQyxLQXZEVCxFQXVEZ0I7QUFDUixXQUFLd0ssTUFBTCxDQUFZVyxPQUFaLENBQW9CSSxTQUFwQixHQUFnQ3ZMLEtBQWhDO0FBQ0EsV0FBS3dLLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkssUUFBcEIsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsS0FBS3pOLEtBQXhDLEVBQStDLEtBQUtDLE1BQXBEO0FBQ0g7QUExREw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6Ii4vanMva3hyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vaWVsZW1lbnRzL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRlBTQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJmcHNDb250cm9sbGVyXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZnBzICA9IDA7ICAvLyBldmVyeSBzZWNvbmRcclxuICAgICAgICB0aGlzLl9mcHMgPSAwOyAvLyBldmVyeSBmcmFtZVxyXG5cclxuICAgICAgICB0aGlzLmZyYW1lVGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX19sYWJlbF9fID0gbmV3IExhYmVsKHByb3AubGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuX19sYWJlbF9fLmluaXQoKTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lID09IE1hdGgudHJ1bmModGltZSAvIDEwMDApKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5fZnBzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnBzID0gKyt0aGlzLl9mcHM7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVUaW1lID0gTWF0aC50cnVuYyh0aW1lIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZwcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9fbGFiZWxfXy50ZXh0ID0gYEZQUzogJHt0aGlzLmZwc31gO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHNjcmVlbi5kcmF3TGFiZWwodGhpcy5fX2xhYmVsX18pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB0aGlzLmxlbmd0aCA9IDA7IH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZUNvbnRyb2xsZXIgJiYgdGhpcy5zY2VuZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVDb250cm9sbGVyICYmIHRoaXMuc2NlbmVDb250cm9sbGVyLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSwgc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmZwc0NvbnRyb2xsZXIgICAmJiB0aGlzLmZwc0NvbnRyb2xsZXIucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLmNvbnRyb2xsZXJzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY3RybCBvZiBjb250cm9sbGVycykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXNbY3RybC5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLm5hbWUpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbmFtZSBvZiBjb250cm9sbGVyLCBuYW1lIGlzIG11c3QgYmUgbGlrZSAnc2NlbmVDb250cm9sbGVyJ1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpc1tjdHJsLm5hbWVdID0gY3RybDtcclxuICAgICAgICAgICAgICAgIHRoaXNbY3RybC5uYW1lXS5pbml0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgKyt0aGlzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShjb250cm9sbGVyTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzW2NvbnRyb2xsZXJOYW1lXSkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1tjb250cm9sbGVyTmFtZV07XHJcbiAgICAgICAgICAgIC0tdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNjZW5lQ29udHJvbGxlclwiLCBzY2VuZXMgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgc2NlbmUgaW4gc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXSA9IHNjZW5lc1tzY2VuZV07XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXS5pbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXS5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzLmxvYWRpbmcpIHRocm93IG5ldyBFcnJvcihcIkdhbWUgbXVzdCBoYXZlIGxvYWRpbmcgc2NlbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2NlbmUoXCJsZXZlbF8xXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjZW5lKHNjZW5lTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY2VuZXNbc2NlbmVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAhdGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pc0luaXRpYWxpemVkICYmICh0aGlzLnNjZW5lc1tzY2VuZU5hbWVdLmlzSW5pdGlhbGl6ZWQgPSB0cnVlKSAmJiB0aGlzLnNjZW5lc1tzY2VuZU5hbWVdLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lc1tzY2VuZU5hbWVdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzID0gXCJydW5uaW5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLnNjZW5lcykge1xyXG4gICAgICAgIGZvciAobGV0IHNjZW5lIG9mIHNjZW5lcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNjZW5lLm5hbWUpIHRocm93IG5ldyBFcnJvcihcIlNjZW5lIG11c3QgaGF2ZSBuYW1lLCBsaWtlICdzdGFydE1lbnUnXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXSA9IHNjZW5lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0uaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0uaXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKHNjZW5lTmFtZSkgeyB0aGlzLnNjZW5lc1tzY2VuZU5hbWVdICYmIHRoaXMuc2NlbmVzLnNwbGljZSh0aGlzLnNjZW5lcy5maW5kSW5kZXgoZWwgPT4gZWwubmFtZSA9PSBzY2VuZU5hbWUpKTsgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBzY2VuZSBpbiB0aGlzLnNjZW5lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9PSBcImZpbmlzaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmUubmV4dCA9PSBcIm5vbmVcIikgdGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9IFwicnVubmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NlbmUodGhpcy5zY2VuZXNbc2NlbmVdLm5leHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnBhcmVudCA9IHRoaXMuc2NlbmVzW3NjZW5lXS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0uc3RhdHVzID0gXCJyZWFkeVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXS5uZXh0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gICAgICAgfSBmcm9tIFwiLi92aWV3L3NjcmVlbi9zY3JlZW5cIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NjZW5lIH0gZnJvbSBcIi4vdmlldy9zY2VuZS9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IFN0YXJ0TWVudSB9ICAgIGZyb20gXCIuL3ZpZXcvc2NlbmUvbWVudS9zdGFydFwiO1xyXG5pbXBvcnQgeyBMZXZlbF8xIH0gICAgICBmcm9tIFwiLi92aWV3L3NjZW5lL2xldmVsL2xldmVsXzFcIjtcclxuXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyICB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9nYW1lQ3RybFwiO1xyXG5pbXBvcnQgeyBTY2VuZUNvbnRyb2xsZXIgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvc2NlbmVDdHJsXCI7XHJcbmltcG9ydCB7IEZQU0NvbnRyb2xsZXIgICB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9mcHNDb250cm9sbGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XHJcblxyXG5pbXBvcnQgZ2FtZUpTT04gZnJvbSBcIi4vZ2FtZS5qc29uXCI7XHJcbmltcG9ydCB7IENvbGxpc2lvbiB9IGZyb20gXCIuL3BoeXNpYy9jb2xsaXNpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGdhbWVKU09OLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKGdhbWVKU09OLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoZ2FtZUpTT04ucGxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKHRoaXMucGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmluaXQoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmFkZChcclxuICAgICAgICAgICAgbmV3IFNjZW5lQ29udHJvbGxlcih7IHNjZW5lczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogICBuZXcgTG9hZGluZ1NjZW5lKHsgc2NyZWVuOiB0aGlzLnNjcmVlbiwgcHJvcDogZ2FtZUpTT04uc2NlbmVzLmxvYWRpbmcgfSksXHJcbiAgICAgICAgICAgICAgICBzdGFydE1lbnU6IG5ldyBTdGFydE1lbnUoeyBzY3JlZW46IHRoaXMuc2NyZWVuLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMuc3RhcnRNZW51IH0pLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxfMTogICBuZXcgTGV2ZWxfMSh7IHBsYXllcjogdGhpcy5wbGF5ZXIsIHNjcmVlbjogdGhpcy5zY3JlZW4sIGNvbGxpc2lvbjogdGhpcy5jb2xsaXNpb24sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sZXZlbCB9KVxyXG4gICAgICAgICAgICB9IH0pLFxyXG4gICAgICAgICAgICBuZXcgRlBTQ29udHJvbGxlcihnYW1lSlNPTi5mcHNDb250cm9sbGVyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAodGhpcy5pc1J1bm5pbmcgPSB0cnVlKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuL2llbGVtZW50XCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4vbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImJ1dHRvblwiLCB3aWR0aCwgaGVpZ2h0LCBiZ2NvbG9yLCBjb2xvcnMsIGxhYmVsUHJvcCwgeCA9IDAsIHkgPSAwLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHg6IHgsIHk6IHksIGFuaW1hdGVkOiBhbmltYXRlZCwgYW5pbWF0aW9uUHJvcDogYW5pbWF0aW9uUHJvcCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5iZ2NvbG9yID0gYmdjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbG9ycyAgPSBjb2xvcnM7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwgPSBuZXcgTGFiZWwobGFiZWxQcm9wKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9faW5fXyhldmVudCkge1xyXG4gICAgICAgIHJldHVybiAoIChldmVudC5vZmZzZXRYID49IHRoaXMueCkgJiYgKGV2ZW50Lm9mZnNldFggPD0gdGhpcy54ICsgdGhpcy53aWR0aCkgIClcclxuICAgICAgICAgICAgJiYgKCAoZXZlbnQub2Zmc2V0WSA+PSB0aGlzLnkpICYmIChldmVudC5vZmZzZXRZIDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KSApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyh0YXJnZXQsIGZ1bmN0aW9ucykge1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSAgPSBmdW5jdGlvbnMubW91c2VNb3ZlSGFuZGxlciApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlKTtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZURvd24gID0gZnVuY3Rpb25zLm1vdXNlRG93bkhhbmRsZXIgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9saXN0ZW5lck1vdXNlRG93bik7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VVcCAgICA9IGZ1bmN0aW9ucy5tb3VzZVVwSGFuZGxlciAgICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwKTtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrID0gZnVuY3Rpb25zLm1vdXNlQ2xpY2tIYW5kbGVyKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVycyh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUpICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmU7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24gICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duKSAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCAgICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgICB0aGlzLl9saXN0ZW5lck1vdXNlVXApICAgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlVXA7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljaykgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljaztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwueCArPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5sYWJlbC55ICs9IHRoaXMueTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHsgc2NyZWVuLmRyYXdCdXR0b24odGhpcyk7IH1cclxufSIsImV4cG9ydCBjbGFzcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImllbGVtZW50XCIsIHggPSAwLCB5ID0gMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBhbmltYXRlZDtcclxuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb25Qcm9wO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmNyZWF0ZUFuaW1hdGlvbih0aGlzLl9hbmltYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHsgdGhpcy5hbmltYXRlZCAmJiB0aGlzLmFuaW1hdGlvbi51cGRhdGUodGltZSk7IH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb24oKSB7fVxyXG5cclxuICAgIHNldFhZKG5ld1gsIG5ld1kpIHtcclxuICAgICAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuL2llbGVtZW50XCI7XHJcbmltcG9ydCB7IExhYmVsQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3ZpZXcvYW5pbWF0aW9uL2xhYmVsQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxhYmVsXCIsIHRleHQgPSBcImxhYmVsXCIsIHggPSAxMCwgeSA9IDEwLCBjb2xvciA9IFwiIzQ0NDQ0NFwiLFxyXG4gICAgICAgIGZvbnRTaXplID0gMzYsIGZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiLCBmb250RmFtaWx5ID0gXCJDb3VyaWVyIE5ld1wiLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkIH0pIHtcclxuICAgICAgICBcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHg6IHgsIHk6IHksIGFuaW1hdGVkOiBhbmltYXRlZCwgYW5pbWF0aW9uUHJvcDogYW5pbWF0aW9uUHJvcCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuZm9udFNpemUgICA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb24ocHJvcCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGFiZWxBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBsYWJlbDogdGhpcyxcclxuICAgICAgICAgICAgZnJhbWVEZWxheTogICAgIHByb3AuZnJhbWVEZWxheSxcclxuICAgICAgICAgICAgcmVwZWF0OiAgICAgICAgIHByb3AucmVwZWF0LFxyXG4gICAgICAgICAgICBhdXRvcnVuOiAgICAgICAgcHJvcC5hdXRvcnVuLFxyXG4gICAgICAgICAgICB0ZXh0Q29sbGVjdGlvbjogcHJvcC50ZXh0Q29sbGVjdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICAgICBcclxuICAgICAgICBzY3JlZW4uZHJhd0xhYmVsKHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuLi92aWV3L3BpY3R1cmUvc3ByaXRlU2hlZXRcIjtcclxuaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGUgZXh0ZW5kcyBJRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInRpbGVcIiwgd2lkdGgsIGhlaWdodCwgc3ByaXRlU2hlZXQsIHggPSAxMCwgeSA9IDEwLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkLCBvcHRpb25zID0gdW5kZWZpbmVkIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHg6IHgsIHk6IHksIGFuaW1hdGVkOiBhbmltYXRlZCwgYW5pbWF0aW9uUHJvcDogYW5pbWF0aW9uUHJvcCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgb3B0aW9ucyAmJiAodGhpcy5fX29wdGlvbnNfXyA9IG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IFNwcml0ZVNoZWV0KHNwcml0ZVNoZWV0KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIHNwcml0ZVNoZWV0OiB0aGlzLnNwcml0ZVNoZWV0LFxyXG4gICAgICAgICAgICBpbmRpY2VzOiAgICAgcHJvcC5pbmRpY2VzLFxyXG4gICAgICAgICAgICBhdXRvcnVuOiAgICAgcHJvcC5hdXRvcnVuLFxyXG4gICAgICAgICAgICBmcmFtZURlbGF5OiAgcHJvcC5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICBuYW1lOiAgICAgICAgcHJvcC5uYW1lLFxyXG4gICAgICAgICAgICByZXBlYXQ6ICAgICAgcHJvcC5yZXBlYXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHNjcmVlbi5kcmF3U3ByaXRlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmdldFNwcml0ZSgodGhpcy5hbmltYXRlZCAmJiB0aGlzLmFuaW1hdGlvbi5pbmRpY2VzW3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZUluZGV4XSkgfHwgMSksXHJcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9fb3B0aW9uc19fICYmIHRoaXMuX19vcHRpb25zX18uZm9nICYmIHNjcmVlbi5maWxsKFwiIzAwMDAwMDY2XCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbiAgICBnYW1lLnJ1bigpO1xyXG59OyIsImV4cG9ydCBjbGFzcyBDb2xsaXNpb24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7IHRoaXMuY29sbGlkZXJzLmZvckVhY2goY29sbGlkZXIgPT4gdGhpcy5pbnRlcnNlY3QoY29sbGlkZXIpICYmIHRoaXMub3V0Q29sbGlkZXIoY29sbGlkZXIpICk7IH1cclxuXHJcbiAgICBvdXRDb2xsaWRlcihjb2xsaWRlcikge1xyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5wbGF5ZXIuYm9keTtcclxuICAgICAgICBsZXQgYm94ID0ge1xyXG4gICAgICAgICAgICBfeDogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5feCwgX3k6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuX3ksXHJcbiAgICAgICAgICAgIHgxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLngsICB4MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSwgIHkyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnkgKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIud2lkdGgsIGhlaWdodDogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5oZWlnaHQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xsaWRlci54MSAtIGJveC54MiksIE1hdGguYWJzKGNvbGxpZGVyLngyIC0gYm94LngxKSxcclxuICAgICAgICAgICAgTWF0aC5hYnMoY29sbGlkZXIueTEgLSBib3gueTIpLCBNYXRoLmFicyhjb2xsaWRlci55MiAtIGJveC55MSkgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKG1pbikge1xyXG4gICAgICAgICAgICBjYXNlIE1hdGguYWJzKGNvbGxpZGVyLngxIC0gYm94LngyKTogdGhpcy5wbGF5ZXIuYm9keS54ID0gY29sbGlkZXIueDEgLSBib2R5LndpZHRoICsgYm94Ll94OyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MiAtIGJveC54MSk6IHRoaXMucGxheWVyLmJvZHkueCA9IGNvbGxpZGVyLngyIC0gYm94Ll94KzI7ICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0aC5hYnMoY29sbGlkZXIueTEgLSBib3gueTIpOiB0aGlzLnBsYXllci5ib2R5LnkgPSBjb2xsaWRlci55MSAtIGJvZHkuaGVpZ2h0LTI7ICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1hdGguYWJzKGNvbGxpZGVyLnkyIC0gYm94LnkxKTogdGhpcy5wbGF5ZXIuYm9keS55ID0gY29sbGlkZXIueTIgLSBib3guX3krMjsgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJzZWN0KGNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IHtcclxuICAgICAgICAgICAgeDE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCwgeDI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIud2lkdGgsXHJcbiAgICAgICAgICAgIHkxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnksIHkyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnkgKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChib3gueDIgPiBjb2xsaWRlci54MSAmJiBib3gueDEgPCBjb2xsaWRlci54MSAmJiBib3gueTIgPiBjb2xsaWRlci55MSAmJiBib3gueTEgPCBjb2xsaWRlci55MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC54MSA8IGNvbGxpZGVyLngyICYmIGJveC54MiA+IGNvbGxpZGVyLngyICYmIGJveC55MiA+IGNvbGxpZGVyLnkxICYmIGJveC55MSA8IGNvbGxpZGVyLnkyKSB8fFxyXG4gICAgICAgICAgICAgICAoYm94LnkyID4gY29sbGlkZXIueTEgJiYgYm94LnkxIDwgY29sbGlkZXIueTEgJiYgYm94LngyID4gY29sbGlkZXIueDEgJiYgYm94LngxIDwgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueTEgPCBjb2xsaWRlci55MiAmJiBib3gueTIgPiBjb2xsaWRlci55MiAmJiBib3gueDIgPiBjb2xsaWRlci54MSAmJiBib3gueDEgPCBjb2xsaWRlci54MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC54MSA+PSBjb2xsaWRlci54MSAmJiBib3gueDIgPD0gY29sbGlkZXIueDIgJiYgYm94LnkxID49IGNvbGxpZGVyLnkxICYmIGJveC55MiA8PSBjb2xsaWRlci55Mik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCIuL2JveENvbGxpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQm9keSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcHJvcC54O1xyXG4gICAgICAgIHRoaXMueSA9IHByb3AueTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSBwcm9wLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcC5oZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBwcm9wLm1vdmVTcGVlZDtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gcHJvcC52aXNpYmxlO1xyXG5cclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyID0gbmV3IEJveENvbGxpZGVyKHByb3AuYm94Q29sbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci54ID0gdGhpcy54ICsgdGhpcy5ib3hDb2xsaWRlci5feDtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnkgPSB0aGlzLnkgKyB0aGlzLmJveENvbGxpZGVyLl95O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnggPSB0aGlzLnggKyB0aGlzLmJveENvbGxpZGVyLl94O1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueSA9IHRoaXMueSArIHRoaXMuYm94Q29sbGlkZXIuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSAmJiBzY3JlZW4uc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIucmVuZGVyKHNjcmVlbik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQm94Q29sbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwcm9wLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHByb3AueDsgdGhpcy5feCA9IHByb3AueDtcclxuICAgICAgICB0aGlzLnkgPSBwcm9wLnk7IHRoaXMuX3kgPSBwcm9wLnk7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHByb3AudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlICYmIHNjcmVlbi5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuLi8uLi92aWV3L3BpY3R1cmUvc3ByaXRlU2hlZXRcIjtcclxuaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSBcIi4uLy4uL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgU3ByaXRlU2hlZXQocHJvcC5zcHJpdGVTaGVldCk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdCA9IHt9O1xyXG4gICAgICAgIHRoaXMudGVtcEFuaW1hdGlvblByb3AgPSBwcm9wLmFuaW1hdGlvbkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25MaXN0ID09IHt9KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBBbmltYXRpb25Qcm9wLmZvckVhY2goYW5pbWF0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0W2FuaW1hdGlvbi5uYW1lXSA9IG5ldyBTcHJpdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogICAgICAgIGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlU2hlZXQ6IHRoaXMuc3ByaXRlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZURlbGF5OiAgYW5pbWF0aW9uLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzOiAgICAgYW5pbWF0aW9uLmluZGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQ6ICAgICAgYW5pbWF0aW9uLnJlcGVhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9ydW46ICAgICBhbmltYXRpb24uYXV0b3J1biBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3RbYW5pbWF0aW9uLm5hbWVdLmluaXQoKVxyXG4gICAgICAgIH0pOyBkZWxldGUgdGhpcy50ZW1wQW5pbWF0aW9uUHJvcDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uTGlzdFtcImlkbGUtZG93blwiXTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbmltYXRpb24oYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbi5uYW1lID09IGFuaW1hdGlvbk5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25MaXN0W2FuaW1hdGlvbk5hbWVdO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwcml0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVTaGVldC5nZXRTcHJpdGUodGhpcy5hbmltYXRpb24uaW5kaWNlc1t0aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVJbmRleF0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IodmlldywgbW92ZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBtb3ZlQ29udHJvbGxlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnZpZXcuc2V0QW5pbWF0aW9uKCAodGhpcy5tb3ZlQ29udHJvbGxlci5pc01vdmUgPyBcIndhbGstXCIgOiBcImlkbGUtXCIpICsgdGhpcy5tb3ZlQ29udHJvbGxlci5kaXJlY3Rpb24gKTtcclxuICAgICAgICB0aGlzLnZpZXcuYW5pbWF0aW9uLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQbGF5ZXJLZXlDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2V5cyA9IHtcclxuICAgICAgICAgICAgS2V5VzogeyBjb2RlOiA4NywgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBLZXlEOiB7IGNvZGU6IDY4LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEtleVM6IHsgY29kZTogODMsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgS2V5QTogeyBjb2RlOiA2NSwgaXNEb3duOiBmYWxzZSB9LFxyXG5cclxuICAgICAgICAgICAgQXJyb3dVcDogICAgeyBjb2RlOiAzOCwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiB7IGNvZGU6IDM5LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEFycm93RG93bjogIHsgY29kZTogNDAsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgQXJyb3dMZWZ0OiAgeyBjb2RlOiAzNywgaXNEb3duOiBmYWxzZSB9LFxyXG5cclxuICAgICAgICAgICAgU3BhY2U6IHsgY29kZTogMzIsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNLZXlEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7IHRoaXMuc3RhcnRFdmVudExpc3RlbigpOyB9XHJcbiAgICBzdG9wKCkgIHsgdGhpcy5zdG9wRXZlbnRMaXN0ZW4oKTsgIH1cclxuXHJcbiAgICBzdGFydEV2ZW50TGlzdGVuKCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5RG93biA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleVVwICAgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9saXN0ZW5lcktleURvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLl9saXN0ZW5lcktleVVwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlEb3duICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9saXN0ZW5lcktleURvd24pICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcktleURvd247XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlVcCAgICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLl9saXN0ZW5lcktleVVwKSAgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcktleVVwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5pc0tleURvd24gPSB0aGlzLmtleXMuS2V5Vy5pc0Rvd24gfHwgdGhpcy5rZXlzLktleUQuaXNEb3duIHx8IHRoaXMua2V5cy5LZXlTLmlzRG93biB8fCB0aGlzLmtleXMuS2V5QS5pc0Rvd247IH1cclxuXHJcbiAgICBrZXlEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbZXZlbnQuY29kZV0pIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdLmlzRG93biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVVwSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbZXZlbnQuY29kZV0pIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdLmlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQbGF5ZXJNb3ZlQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGtleUNvbnRyb2xsZXIsIHByb3ApIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmtleUNvbnRyb2xsZXIgPSBrZXlDb250cm9sbGVyO1xyXG5cclxuICAgICAgICB0aGlzLmtleXMgPSBwcm9wLmtleXM7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy51cF0uaXNEb3duKSAgICB0aGlzLm1vdmVVcCgpOyAgIFxyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMucmlnaHRdLmlzRG93bikgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLmRvd25dLmlzRG93bikgIHRoaXMubW92ZURvd24oKTsgXHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5sZWZ0XS5pc0Rvd24pICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUNvbnRyb2xsZXIuaXNLZXlEb3duKSB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVVcCgpICAgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgLT0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnggKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVEb3duKCkgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueCAtPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllcktleUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9rZXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBsYXllck1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlciB9IGZyb20gXCIuL2FuaW1hdGlvbkNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcGxheWVyLCBwcm9wIH0pIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlDb250cm9sbGVyID0gbmV3IFBsYXllcktleUNvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IFBsYXllck1vdmVDb250cm9sbGVyKHRoaXMucGxheWVyLCB0aGlzLmtleUNvbnRyb2xsZXIsIHByb3AubW92ZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBQbGF5ZXJBbmltYXRpb25Db250cm9sbGVyKHRoaXMucGxheWVyLnZpZXcsIHRoaXMubW92ZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkgeyB0aGlzLmtleUNvbnRyb2xsZXIuc3RhcnQoKTsgfVxyXG4gICAgc3RvcCgpICB7IHRoaXMua2V5Q29udHJvbGxlci5zdG9wKCk7ICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmtleUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyQm9keSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9keVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3IH0gZnJvbSBcIi4vY29tcG9uZW50cy92aWV3XCI7XHJcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9wbGF5ZXJDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBQbGF5ZXJCb2R5KHByb3AuYm9keSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFBsYXllclZpZXcocHJvcC52aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIoeyBwbGF5ZXI6IHRoaXMsIHByb3A6IHByb3AuY29udHJvbGxlciB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudmlldy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgc2NyZWVuLmRyYXdTcHJpdGUodGhpcy52aWV3LmdldFNwcml0ZSgpLCB0aGlzLmJvZHkueCwgdGhpcy5ib2R5LnkpO1xyXG4gICAgICAgIHRoaXMuYm9keS5yZW5kZXIoc2NyZWVuKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBmcmFtZURlbGF5PSA1MCwgcmVwZWF0ID0gZmFsc2UsIGF1dG9ydW4gPSBmYWxzZSB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICAgICAgdGhpcy5hdXRvcnVuID0gYXV0b3J1bjtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gZnJhbWVEZWxheTtcclxuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuYXV0b3J1biAmJiB0aGlzLnJ1bigpOyB9XHJcblxyXG4gICAgcnVuKCkgIHsgdGhpcy5pc1J1bm5pbmcgPSB0cnVlOyAgfVxyXG4gICAgc3RvcCgpIHsgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWVUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0RnJhbWVUaW1lKSA+IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxBbmltYXRpb25cIiwgbGFiZWwsIGZyYW1lRGVsYXkgPSAyMDAsIHRleHRDb2xsZWN0aW9uID0gW10sIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGVjdGlvbiA9IHRleHRDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZXh0SW5kZXggKyAxID09IHRoaXMudGV4dENvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICAgICAgfSBlbHNlICsrdGhpcy5jdXJyZW50VGV4dEluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMudGV4dENvbGxlY3Rpb25bdGhpcy5jdXJyZW50VGV4dEluZGV4XTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZUFuaW1hdGlvblwiLCBzcHJpdGVTaGVldCwgaW5kaWNlcywgZnJhbWVEZWxheSA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IGZhbHNlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gc3ByaXRlU2hlZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lcyhpbmRpY2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGljZXMubWFwKCBpbmRleCA9PiAoe1xyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZUluZGV4ICsgMSA9PSB0aGlzLmZyYW1lcy5sZW5ndGggKSAmJiB0aGlzLnJlcGVhdClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucmVwZWF0KSBzdG9wKCk7XHJcbiAgICAgICAgZWxzZSArK3RoaXMuY3VycmVudEZyYW1lSW5kZXg7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNjQwLCBsaW1pdFkgPSA2NDAsIHNjcm9sbEVkZ2UgPSAzMDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xyXG4gICAgICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChvYmopIHtcclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBvYmouYm9keTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoT2JqZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCA+ICh0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMuYm9keS54IC0gdGhpcy53aWR0aCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLmJvZHkueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueSA+ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLmJvZHkueSAtIHRoaXMuaGVpZ2h0ICsgdGhpcy5zY3JvbGxFZGdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS55IDwgKHRoaXMueSArIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMuYm9keS55IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYXBEYXRhLCBjb2xsaXNpb24pIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gbWFwRGF0YS5kYXRhO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHRoaXMuZGF0YS53aWR0aCAqIHRoaXMuZGF0YS50aWxld2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhdGEuaGVpZ2h0ICogdGhpcy5kYXRhLnRpbGVoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVNldCA9IG5ldyBTcHJpdGVTaGVldChtYXBEYXRhLnRpbGVTZXQpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdyAgICA9IHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4gPSB0aGlzLmRhdGEud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzICAgID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TGF5ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIgICA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aWxlU2V0LmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMYXllcnMoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG5hbWU6IGxheWVyLm5hbWUsIGluZGV4ZXM6IGxheWVyLmRhdGEsIHpfaW5kZXg6IGxheWVyLnByb3BlcnRpZXNbMF0udmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5ZXIudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzID0gbGF5ZXIub2JqZWN0cy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHgxOiBpdGVtLngsIHgyOiBpdGVtLnggKyBpdGVtLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHkxOiBpdGVtLnksIHkyOiBpdGVtLnkgKyBpdGVtLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxheWVycy5zb3J0KCAoYSwgYikgPT4gYS56X2luZGV4IC0gYi56X2luZGV4ICk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24uY29sbGlkZXJzID0gdGhpcy5jb2xsaWRlcnM7XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kUmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBwZXJMYXllci5mb3JFYWNoKHRpbGUgPT4gc2NyZWVuLmRyYXdTcHJpdGUodGlsZS5zcHJpdGUsIHRpbGUueCwgdGlsZS55KSApO1xyXG4gICAgICAgIHRoaXMudXBwZXJMYXllciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbCA9IDAsIHJvdyA9IDA7XHJcblxyXG4gICAgICAgICAgICBsYXllci5pbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IFwid2FsbFwiICYmIHRoaXMuY29sbGlzaW9uLmludGVyc2VjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MTogdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLCAgeDI6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCAgKyB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MTogdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvdywgeTI6IHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3cgKyB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0IC8yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cHBlckxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlOiB0aGlzLnRpbGVTZXQuZ2V0U3ByaXRlKGluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuLmRyYXdTcHJpdGUodGhpcy50aWxlU2V0LmdldFNwcml0ZShpbmRleCksIHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCwgdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAoKytjb2wgPiB0aGlzLmNvbHVtbiAtIDEpICYmIChbY29sLCByb3ddID0gWzAsIHJvdysxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZVNoZWV0XCIsIHNyYywgd2lkdGgsIGhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjQgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggID0gc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5pbWFnZSB8fCAodGhpcy5pbWFnZSA9IHRoaXMubG9hZEltYWdlKCkpOyB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIGltYWdlOiAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAgIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogIHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkSW1hZ2UoKSB7IHRoaXMuX2xvYWQoKS50aGVuKGltZyA9PiB0aGlzLmltYWdlID0gaW1nKS5jYXRjaChlcnJvciA9PiB7IHRocm93IGVycm9yOyB9KTsgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHsgcmV0dXJuIChpbmRleC0xKSAqIHRoaXMuc3ByaXRlV2lkdGggJSB0aGlzLndpZHRoOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCAoKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLndpZHRoICkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IE1hcCB9IGZyb20gXCIuLi8uLi9tYXBcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2NhbWVyYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbFwiLCBzY3JlZW4sIHBsYXllciwgY29sbGlzaW9uLCBtYXBEYXRhLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKG1hcERhdGEsIGNvbGxpc2lvbik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xsZXIuc3RhcnQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgICB3aWR0aDogIHRoaXMuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2NyZWVuLmhlaWdodCxcclxuICAgICAgICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBsaW1pdFk6IHRoaXMubWFwLmhlaWdodCAtIHRoaXMuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMuY2FtZXJhKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24udXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5yZW5kZXIodGhpcy5zY3JlZW4pO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5tYXAuc2Vjb25kUmVuZGVyKHRoaXMuc2NyZWVuKTtcclxuXHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9sZXZlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsXzEgZXh0ZW5kcyBMZXZlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxldmVsXzFcIiwgc2NyZWVuLCBjb2xsaXNpb24sIHBsYXllciwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzY3JlZW46IHNjcmVlbixcclxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXIsXHJcbiAgICAgICAgICAgIG1hcERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByb3AubGV2ZWxfMS5tYXBEYXRhLFxyXG4gICAgICAgICAgICAgICAgdGlsZVNldDogcHJvcC5tYXBTcHJpdGVTaGVldFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibGV2ZWxfMVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgcGFyZW50LCBuZXh0IH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICF0aGlzLmllbGVtZW50cyAmJiAodGhpcy5pZWxlbWVudHMgPSB7fSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHt9XHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSAge31cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWUgaW4gdGhpcy5pZWxlbWVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzW2llXS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIHx8IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcclxuICAgICAgICBkaXYuaWQgPSBcImdhbWVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5ET00gPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0gfHwgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMuRE9NLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ET00uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5ET00uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYShjYW1lcmEpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmNhbnZhcy5pbml0KCk7IH1cclxuXHJcbiAgICBkcmF3QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChidXR0b24ueCAtIDUsIGJ1dHRvbi55IC0gNSwgYnV0dG9uLndpZHRoICsgMTAsIGJ1dHRvbi5oZWlnaHQgKyAxMCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBidXR0b24uYmdjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KGJ1dHRvbi54LCBidXR0b24ueSwgYnV0dG9uLndpZHRoLCBidXR0b24uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3TGFiZWwoYnV0dG9uLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TGFiZWwobGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IGxhYmVsLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZm9udCA9IGAke2xhYmVsLmZvbnRXZWlnaHR9ICR7bGFiZWwuZm9udFNpemV9cHggJHtsYWJlbC5mb250RmFtaWx5IHx8IFwiTHVjaWRhIENvbnNvbGFzXCJ9YDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsVGV4dChsYWJlbC50ZXh0LCBsYWJlbC54LCBsYWJlbC55KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHsgaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpOyB9XHJcbiAgICBcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5KSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICAgICAgICB4IC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgICAgICAgIHkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwcml0ZS5pbWFnZSAmJiB0aGlzLmNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgc3ByaXRlLmltYWdlLFxyXG4gICAgICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksXHJcbiAgICAgICAgICAgIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgICAgICAgeCwgeSxcclxuICAgICAgICAgICAgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9