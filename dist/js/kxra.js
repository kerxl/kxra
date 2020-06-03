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
      this.setScene("loading");
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

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":16,\"y\":45,\"width\":30,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}},\"level\":{\"mapSpriteSheet\":{\"name\":\"level_1MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"level_1\":{\"mapData\":{\"name\":\"map_1\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"test.json\"}},\"height\":10,\"infinite\":false,\"layers\":[{\"data\":[7,13,14,13,14,13,14,13,14,7,7,17,18,19,20,17,18,19,20,7,7,27,28,29,30,27,28,29,30,7,7,37,38,39,40,37,38,39,40,7,7,17,18,7,7,7,7,19,20,7,7,27,28,7,7,7,7,29,30,7,7,37,38,7,7,7,7,39,40,7,7,29,38,39,40,37,38,39,40,7,7,39,18,19,20,17,18,19,20,7,7,7,7,7,7,7,7,7,7,7],\"height\":10,\"id\":1,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[1,3,3,2,3,4,5,71,4,26,11,0,0,0,0,0,0,16,0,36,21,0,0,2,3,4,5,81,0,46,31,0,0,0,0,0,0,0,0,26,41,0,0,61,65,65,66,0,0,36,1,0,0,26,0,0,21,0,0,46,11,0,0,36,0,0,31,0,0,26,21,0,0,2,73,72,5,0,0,36,31,0,0,0,41,0,0,0,0,46,51,52,53,54,55,52,53,54,55,56],\"height\":10,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":210.666,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":258.667,\"x\":190.667,\"y\":300},{\"height\":20,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":276,\"x\":192,\"y\":169},{\"height\":129.333,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17.3333,\"x\":450.667,\"y\":41.3333},{\"height\":588,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":41.3333,\"y\":40},{\"height\":11.9999666666666,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":557.333,\"x\":41.3333,\"y\":614.666333333333},{\"height\":583.667,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":574.667,\"y\":40.3333},{\"height\":22.6666333333333,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":538,\"x\":43.333,\"y\":39.9999666666667},{\"height\":114,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":296,\"y\":508}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":10,\"id\":4,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":13,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":10}},\"level_2\":{\"mapData\":{\"name\":\"map_2\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"map_1.json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"id\":1,\"name\":\"background\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,15,0,0,29,17,18,28,20,17,18,19,20,17,18,19,20,17,18,19,20,25,0,0,29,27,33,93,14,14,13,14,14,13,14,14,13,14,14,29,30,35,0,0,23,37,38,39,40,25,38,39,40,40,38,39,40,37,38,39,40,25,0,0,13,13,14,14,15,35,13,14,40,40,13,14,0,0,0,0,20,35,0,0,28,27,28,29,25,0,28,29,30,27,28,29,0,0,0,0,30,25,0,0,25,0,0,0,0,0,38,39,40,37,38,39,0,0,0,0,40,35,0,0,35,0,0,0,0,0,0,0,20,25,0,0,0,0,0,0,20,25,0,0,35,0,0,0,0,0,0,0,30,25,0,0,0,0,0,0,30,35,0,0,25,0,0,0,0,0,38,39,28,25,38,39,0,0,0,0,40,25,0,0,35,17,18,19,20,0,13,14,20,17,13,14,0,0,0,0,20,35,0,0,18,13,14,13,14,0,29,29,30,27,28,29,0,0,0,0,30,25,0,0,28,37,38,39,35,0,39,39,40,37,38,39,0,0,0,0,40,35,0,0,38,17,25,19,20,17,19,19,20,17,18,19,20,17,18,0,20,25,0,0,18,27,35,13,13,15,28,29,17,17,28,29,13,14,13,14,39,35,0,0,28,37,25,39,40,37,13,14,17,17,13,14,40,37,38,39,30,25,0,0,38,27,35,29,30,17,18,19,20,37,38,39,40,27,28,29,30,35,0,0,29,27,27,13,14,13,14,13,14,13,14,13,14,14,14,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":3,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,2,3,4,5,2,2,2,3,4,5,3,4,5,2,3,2,3,4,6,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,21,0,0,0,83,3,2,3,4,5,2,3,4,5,5,73,0,0,0,26,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,41,2,3,4,72,73,0,71,72,0,0,72,73,0,0,11,0,0,0,6,1,0,0,0,0,11,0,16,0,0,0,0,11,54,62,63,64,16,0,16,11,0,0,0,0,21,53,26,0,0,0,0,1,0,0,0,0,26,0,26,21,0,61,62,63,64,0,36,0,0,0,0,11,0,0,0,0,36,0,36,31,0,36,0,0,0,0,62,66,0,0,61,62,0,0,0,0,46,0,46,41,0,46,0,0,0,0,0,41,0,0,46,0,0,0,0,0,6,0,6,1,0,46,0,0,0,0,71,4,0,0,4,73,0,0,0,0,16,0,16,11,0,72,72,72,73,0,6,0,0,0,0,11,0,0,0,0,26,0,26,21,0,0,0,0,21,0,16,0,0,0,0,21,0,0,0,0,36,0,36,31,0,0,0,0,31,0,26,0,0,0,0,31,0,0,0,0,46,0,46,41,0,0,0,71,4,5,36,0,0,0,0,11,3,4,73,0,46,0,6,11,0,0,0,26,0,0,2,3,0,0,3,2,0,0,31,4,81,0,16,21,0,0,0,36,0,0,0,0,0,0,0,0,0,0,41,0,0,0,26,31,0,0,0,3,4,5,2,3,4,5,2,3,2,3,4,0,0,0,36,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,51,52,53,54,55,52,53,54,55,52,53,54,55,52,53,54,55,54,55,56],\"height\":20,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":5,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":3}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"colliderBoxes\",\"objects\":[{\"height\":23,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1173.33,\"x\":42,\"y\":39},{\"height\":1230.36696969697,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":1215.33,\"y\":37.6969663636364},{\"height\":12.3333,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1148,\"x\":65.3333,\"y\":1253},{\"height\":1230.36696969697,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":40.6667,\"y\":37.0303033636364},{\"height\":29.3333666666667,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":300.667,\"x\":61.3333,\"y\":293.333},{\"height\":273,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":232,\"x\":128.666,\"y\":489.667},{\"height\":645.999666666667,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":360.667,\"y\":293.333333333333},{\"height\":191.667,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":256.667,\"y\":936.333},{\"height\":22.6667,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":170,\"x\":276.667,\"y\":935.333},{\"height\":20.6667,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":767.333,\"x\":256.667,\"y\":1128.67},{\"height\":23.3333,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125.667,\"x\":705.667,\"y\":999.667},{\"height\":709.333333333333,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":808.667,\"y\":294.666666666667},{\"height\":147.666333333333,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127.666633333333,\"x\":703.667,\"y\":555.333666666667},{\"height\":24.3332966666667,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126.666,\"x\":703.667,\"y\":294.833},{\"height\":24.3333,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.167,\"x\":448,\"y\":294.833},{\"height\":280.667,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":448,\"y\":295},{\"height\":149.667,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.333366666667,\"x\":447.000333333333,\"y\":556.333},{\"height\":23.6667,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":447.667,\"y\":999.333},{\"height\":332.667,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":447.333,\"y\":669},{\"height\":29.3333,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63.5,\"x\":384,\"y\":418.667},{\"height\":594.5,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":163,\"x\":832,\"y\":361},{\"height\":977.625,\"id\":45,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":998.5,\"y\":166.375},{\"height\":24.1087,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":700.978,\"x\":298.022,\"y\":165.391},{\"height\":659.636363636364,\"id\":48,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":83,\"x\":1027.5,\"y\":359.363636363636}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":54,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20}}}}}");

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
    this.tileSet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](mapData.tileSet);
    this.column = this.data.width;
    this.row = this.data.height;
    this.layers = [];
    this.colliders = [];
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
          if (index > 0) {
            if (layer.name == "wall" && _this2.collision.intersect({
              x1: _this2.tileSet.spriteWidth * col,
              x2: _this2.tileSet.spriteWidth * col + _this2.tileSet.spriteWidth,
              y1: _this2.tileSet.spriteHeight * row,
              y2: _this2.tileSet.spriteHeight * row + _this2.tileSet.spriteHeight - 20
            })) {
              _this2.upperLayer.push({
                sprite: _this2.tileSet.getSprite(index),
                x: _this2.tileSet.spriteWidth * col,
                y: _this2.tileSet.spriteHeight * row
              });
            } else screen.drawSprite(_this2.tileSet.getSprite(index), _this2.tileSet.spriteWidth * col, _this2.tileSet.spriteHeight * row);
          }

          ++col;

          if (col > _this2.column - 1) {
            col = 0;
            ++row;
          }
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

      _get(_getPrototypeOf(Level.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.collision.update();

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
  }

  _createClass(Screen, [{
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
      sprite.image && this.canvas.context.drawImage(sprite.image, sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, x || sprite.x || 0, y || sprite.y || 0, sprite.width, sprite.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Zwc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zY2VuZUN0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9pZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BoeXNpYy9jb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb21wb25lbnRzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb21wb25lbnRzL2JveENvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29tcG9uZW50cy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMvYW5pbWF0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2NvbnRyb2xsZXJzL2tleUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9tb3ZlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2NvbnRyb2xsZXJzL3BsYXllckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hbmltYXRpb24vbGFiZWxBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sZXZlbC9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sZXZlbC9sZXZlbF8xLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbWVudS9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY3JlZW4vY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjcmVlbi9zY3JlZW4uanMiXSwibmFtZXMiOlsiRlBTQ29udHJvbGxlciIsInByb3AiLCJuYW1lIiwiZnBzIiwiX2ZwcyIsImZyYW1lVGltZSIsIl9fbGFiZWxfXyIsIkxhYmVsIiwibGFiZWwiLCJpbml0IiwidGltZSIsIk1hdGgiLCJ0cnVuYyIsInRleHQiLCJzY3JlZW4iLCJ1cGRhdGUiLCJkcmF3TGFiZWwiLCJHYW1lQ29udHJvbGxlciIsImxlbmd0aCIsInNjZW5lQ29udHJvbGxlciIsImN1cnJlbnRTY2VuZSIsInJlbmRlciIsImZwc0NvbnRyb2xsZXIiLCJjb250cm9sbGVycyIsImN0cmwiLCJFcnJvciIsImNvbnRyb2xsZXJOYW1lIiwiU2NlbmVDb250cm9sbGVyIiwic2NlbmVzIiwic2NlbmUiLCJpc0luaXRpYWxpemVkIiwibG9hZGluZyIsInNldFNjZW5lIiwic2NlbmVOYW1lIiwic3RhcnQiLCJzdGF0dXMiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJlbCIsIm5leHQiLCJzdG9wIiwicGFyZW50IiwiR2FtZSIsImdhbWVKU09OIiwiaXNSdW5uaW5nIiwiU2NyZWVuIiwiY29udHJvbGxlciIsInBsYXllciIsIlBsYXllciIsImNvbGxpc2lvbiIsIkNvbGxpc2lvbiIsImFkZCIsIkxvYWRpbmdTY2VuZSIsInN0YXJ0TWVudSIsIlN0YXJ0TWVudSIsImxldmVsXzEiLCJMZXZlbF8xIiwibGV2ZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJCdXR0b24iLCJ3aWR0aCIsImhlaWdodCIsImJnY29sb3IiLCJjb2xvcnMiLCJsYWJlbFByb3AiLCJ4IiwieSIsImFuaW1hdGVkIiwiYW5pbWF0aW9uUHJvcCIsInVuZGVmaW5lZCIsImlzTW91c2VEb3duIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRhcmdldCIsImZ1bmN0aW9ucyIsIl9saXN0ZW5lck1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpc3RlbmVyTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIl9saXN0ZW5lck1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIl9saXN0ZW5lck1vdXNlQ2xpY2siLCJtb3VzZUNsaWNrSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcmF3QnV0dG9uIiwiSUVsZW1lbnQiLCJfYW5pbWF0aW9uIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwibmV3WCIsIm5ld1kiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJMYWJlbEFuaW1hdGlvbiIsImZyYW1lRGVsYXkiLCJyZXBlYXQiLCJhdXRvcnVuIiwidGV4dENvbGxlY3Rpb24iLCJUaWxlIiwic3ByaXRlU2hlZXQiLCJvcHRpb25zIiwiX19vcHRpb25zX18iLCJTcHJpdGVTaGVldCIsIlNwcml0ZUFuaW1hdGlvbiIsImluZGljZXMiLCJkcmF3U3ByaXRlIiwiZ2V0U3ByaXRlIiwiY3VycmVudEZyYW1lSW5kZXgiLCJmb2ciLCJmaWxsIiwid2luZG93Iiwib25sb2FkIiwiZ2FtZSIsInJ1biIsImNvbGxpZGVycyIsImZvckVhY2giLCJjb2xsaWRlciIsImludGVyc2VjdCIsIm91dENvbGxpZGVyIiwiYm9keSIsImJveCIsIl94IiwiYm94Q29sbGlkZXIiLCJfeSIsIngxIiwieDIiLCJ5MSIsInkyIiwibWluIiwiYWJzIiwiUGxheWVyQm9keSIsIm1vdmVTcGVlZCIsInZpc2libGUiLCJCb3hDb2xsaWRlciIsInN0cm9rZVJlY3QiLCJQbGF5ZXJWaWV3IiwiYW5pbWF0aW9uTGlzdCIsInRlbXBBbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uTmFtZSIsIlBsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIiLCJ2aWV3IiwibW92ZUNvbnRyb2xsZXIiLCJzZXRBbmltYXRpb24iLCJpc01vdmUiLCJkaXJlY3Rpb24iLCJQbGF5ZXJLZXlDb250cm9sbGVyIiwia2V5cyIsIktleVciLCJjb2RlIiwiaXNEb3duIiwiS2V5RCIsIktleVMiLCJLZXlBIiwiQXJyb3dVcCIsIkFycm93UmlnaHQiLCJBcnJvd0Rvd24iLCJBcnJvd0xlZnQiLCJTcGFjZSIsImlzS2V5RG93biIsInN0YXJ0RXZlbnRMaXN0ZW4iLCJzdG9wRXZlbnRMaXN0ZW4iLCJfbGlzdGVuZXJLZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJiaW5kIiwiX2xpc3RlbmVyS2V5VXAiLCJrZXlVcEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIlBsYXllck1vdmVDb250cm9sbGVyIiwia2V5Q29udHJvbGxlciIsInVwIiwibW92ZVVwIiwicmlnaHQiLCJtb3ZlUmlnaHQiLCJkb3duIiwibW92ZURvd24iLCJsZWZ0IiwibW92ZUxlZnQiLCJQbGF5ZXJDb250cm9sbGVyIiwiYW5pbWF0aW9uQ29udHJvbGxlciIsIkFuaW1hdGlvbiIsImxhc3RGcmFtZVRpbWUiLCJuZXh0RnJhbWUiLCJjdXJyZW50VGV4dEluZGV4IiwiZnJhbWVzIiwiZ2V0RnJhbWVzIiwibWFwIiwiaW5kZXgiLCJzb3VyY2VYIiwiZ2V0U291cmNlWCIsInNvdXJjZVkiLCJnZXRTb3VyY2VZIiwiTWFwIiwibWFwRGF0YSIsImRhdGEiLCJ0aWxlU2V0IiwiY29sdW1uIiwicm93IiwibGF5ZXJzIiwidXBwZXJMYXllciIsImNyZWF0ZUxheWVycyIsImxheWVyIiwidHlwZSIsInB1c2giLCJpbmRleGVzIiwiel9pbmRleCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIm9iamVjdHMiLCJpdGVtIiwic29ydCIsImEiLCJiIiwidGlsZSIsInNwcml0ZSIsImNvbCIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltZyIsIkltYWdlIiwiX2xvYWQiLCJ0aGVuIiwiZXJyb3IiLCJMZXZlbCIsInNlY29uZFJlbmRlciIsIlNjZW5lIiwibWFwU3ByaXRlU2hlZXQiLCJpZWxlbWVudHMiLCJiYWNrZ3JvdW5kIiwiZGlzayIsInNldFRpbWVvdXQiLCJyYW5kb20iLCJwbGF5QnV0dG9uIiwiX19pbl9fIiwiZG9jdW1lbnQiLCJzdHlsZSIsImN1cnNvciIsImNsaWNrIiwiaG92ZXIiLCJhZGRMaXN0ZW5lcnMiLCJjYW52YXMiLCJET00iLCJyZW1vdmVMaXN0ZW5lcnMiLCJpZSIsIkNhbnZhcyIsImRpdiIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYnV0dG9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QzdKLEtBTEssRUFLRTZKLE1BQU0sQ0FBQzVKLE1BTFQsQ0FBaEI7QUFPSDtBQXBDTDtBQUFBO0FBQUEsK0JBc0NlSSxDQXRDZixFQXNDa0JDLENBdENsQixFQXNDcUJOLEtBdENyQixFQXNDNEJDLE1BdEM1QixFQXNDb0M7QUFDNUIsV0FBSzJMLE1BQUwsQ0FBWVcsT0FBWixDQUFvQnpILFVBQXBCLENBQStCekUsQ0FBL0IsRUFBa0NDLENBQWxDLEVBQXFDTixLQUFyQyxFQUE0Q0MsTUFBNUM7QUFDSDtBQXhDTDtBQUFBO0FBQUEseUJBMENTZ0MsS0ExQ1QsRUEwQ2dCO0FBQ1IsV0FBSzJKLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkcsU0FBcEIsR0FBZ0N6SyxLQUFoQztBQUNBLFdBQUsySixNQUFMLENBQVlXLE9BQVosQ0FBb0JJLFFBQXBCLENBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLEtBQUszTSxLQUF4QyxFQUErQyxLQUFLQyxNQUFwRDtBQUNIO0FBN0NMOztBQUFBO0FBQUEsSSIsImZpbGUiOiIuL2pzL2t4cmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL2llbGVtZW50cy9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZQU0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiZnBzQ29udHJvbGxlclwiO1xyXG5cclxuICAgICAgICB0aGlzLmZwcyAgPSAwOyAgLy8gZXZlcnkgc2Vjb25kXHJcbiAgICAgICAgdGhpcy5fZnBzID0gMDsgLy8gZXZlcnkgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9fbGFiZWxfXyA9IG5ldyBMYWJlbChwcm9wLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLl9fbGFiZWxfXy5pbml0KCk7IH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZSA9PSBNYXRoLnRydW5jKHRpbWUgLyAxMDAwKSkge1xyXG4gICAgICAgICAgICArK3RoaXMuX2ZwcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZwcyA9ICsrdGhpcy5fZnBzO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZSA9IE1hdGgudHJ1bmModGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fX2xhYmVsX18udGV4dCA9IGBGUFM6ICR7dGhpcy5mcHN9YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd0xhYmVsKHRoaXMuX19sYWJlbF9fKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5sZW5ndGggPSAwOyB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVDb250cm9sbGVyICYmIHRoaXMuc2NlbmVDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lQ29udHJvbGxlciAmJiB0aGlzLnNjZW5lQ29udHJvbGxlci5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5mcHNDb250cm9sbGVyICAgJiYgdGhpcy5mcHNDb250cm9sbGVyLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5jb250cm9sbGVycykge1xyXG4gICAgICAgIGZvciAobGV0IGN0cmwgb2YgY29udHJvbGxlcnMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzW2N0cmwubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5hbWUgb2YgY29udHJvbGxlciwgbmFtZSBpcyBtdXN0IGJlIGxpa2UgJ3NjZW5lQ29udHJvbGxlcidcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXNbY3RybC5uYW1lXSA9IGN0cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2N0cmwubmFtZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICsrdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoY29udHJvbGxlck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpc1tjb250cm9sbGVyTmFtZV0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbY29udHJvbGxlck5hbWVdO1xyXG4gICAgICAgICAgICAtLXRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJzY2VuZUNvbnRyb2xsZXJcIiwgc2NlbmVzIH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHNjZW5lIGluIHNjZW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0gPSBzY2VuZXNbc2NlbmVdO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0uaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0uaXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lcy5sb2FkaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIG11c3QgaGF2ZSBsb2FkaW5nIHNjZW5lXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNjZW5lKFwibG9hZGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY2VuZShzY2VuZU5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzW3NjZW5lTmFtZV0pIHJldHVybjtcclxuXHJcbiAgICAgICAgIXRoaXMuc2NlbmVzW3NjZW5lTmFtZV0uaXNJbml0aWFsaXplZCAmJiAodGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pc0luaXRpYWxpemVkID0gdHJ1ZSkgJiYgdGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXNbc2NlbmVOYW1lXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyA9IFwicnVubmluZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5zY2VuZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzY2VuZSBvZiBzY2VuZXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzY2VuZS5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJTY2VuZSBtdXN0IGhhdmUgbmFtZSwgbGlrZSAnc3RhcnRNZW51J1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0gPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShzY2VuZU5hbWUpIHsgdGhpcy5zY2VuZXNbc2NlbmVOYW1lXSAmJiB0aGlzLnNjZW5lcy5zcGxpY2UodGhpcy5zY2VuZXMuZmluZEluZGV4KGVsID0+IGVsLm5hbWUgPT0gc2NlbmVOYW1lKSk7IH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2NlbmUgaW4gdGhpcy5zY2VuZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPT0gXCJmaW5pc2hcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLm5leHQgPT0gXCJub25lXCIpIHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPSBcInJ1bm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjZW5lKHRoaXMuc2NlbmVzW3NjZW5lXS5uZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wYXJlbnQgPSB0aGlzLnNjZW5lc1tzY2VuZV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9IFwicmVhZHlcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0ubmV4dCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuICAgICAgIH0gZnJvbSBcIi4vdmlldy9zY3JlZW4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTY2VuZSB9IGZyb20gXCIuL3ZpZXcvc2NlbmUvbG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBTdGFydE1lbnUgfSAgICBmcm9tIFwiLi92aWV3L3NjZW5lL21lbnUvc3RhcnRcIjtcclxuaW1wb3J0IHsgTGV2ZWxfMSB9ICAgICAgZnJvbSBcIi4vdmlldy9zY2VuZS9sZXZlbC9sZXZlbF8xXCI7XHJcblxyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciAgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvZ2FtZUN0cmxcIjtcclxuaW1wb3J0IHsgU2NlbmVDb250cm9sbGVyIH0gIGZyb20gXCIuL2NvbnRyb2xsZXJzL3NjZW5lQ3RybFwiO1xyXG5pbXBvcnQgeyBGUFNDb250cm9sbGVyICAgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvZnBzQ29udHJvbGxlclwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xyXG5cclxuaW1wb3J0IGdhbWVKU09OIGZyb20gXCIuL2dhbWUuanNvblwiO1xyXG5pbXBvcnQgeyBDb2xsaXNpb24gfSBmcm9tIFwiLi9waHlzaWMvY29sbGlzaW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBnYW1lSlNPTi5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbihnYW1lSlNPTi5zY3JlZW4pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGdhbWVKU09OLnBsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbih0aGlzLnBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbi5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5hZGQoXHJcbiAgICAgICAgICAgIG5ldyBTY2VuZUNvbnRyb2xsZXIoeyBzY2VuZXM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICAgbmV3IExvYWRpbmdTY2VuZSh7IHNjcmVlbjogdGhpcy5zY3JlZW4sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sb2FkaW5nIH0pLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRNZW51OiBuZXcgU3RhcnRNZW51KHsgc2NyZWVuOiB0aGlzLnNjcmVlbiwgcHJvcDogZ2FtZUpTT04uc2NlbmVzLnN0YXJ0TWVudSB9KSxcclxuICAgICAgICAgICAgICAgIGxldmVsXzE6ICAgbmV3IExldmVsXzEoeyBwbGF5ZXI6IHRoaXMucGxheWVyLCBzY3JlZW46IHRoaXMuc2NyZWVuLCBjb2xsaXNpb246IHRoaXMuY29sbGlzaW9uLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubGV2ZWwgfSlcclxuICAgICAgICAgICAgfSB9KSxcclxuICAgICAgICAgICAgbmV3IEZQU0NvbnRyb2xsZXIoZ2FtZUpTT04uZnBzQ29udHJvbGxlcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVuZGVyKHRpbWUsIHRoaXMuc2NyZWVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgKHRoaXMuaXNSdW5uaW5nID0gdHJ1ZSkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJidXR0b25cIiwgd2lkdGgsIGhlaWdodCwgYmdjb2xvciwgY29sb3JzLCBsYWJlbFByb3AsIHggPSAwLCB5ID0gMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuYmdjb2xvciA9IGJnY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgID0gY29sb3JzO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbmV3IExhYmVsKGxhYmVsUHJvcCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfX2luX18oZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gKCAoZXZlbnQub2Zmc2V0WCA+PSB0aGlzLngpICYmIChldmVudC5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMud2lkdGgpICApXHJcbiAgICAgICAgICAgICYmICggKGV2ZW50Lm9mZnNldFkgPj0gdGhpcy55KSAmJiAoZXZlbnQub2Zmc2V0WSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnModGFyZ2V0LCBmdW5jdGlvbnMpIHtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUgID0gZnVuY3Rpb25zLm1vdXNlTW92ZUhhbmRsZXIgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSk7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VEb3duICA9IGZ1bmN0aW9ucy5tb3VzZURvd25IYW5kbGVyICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24pO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlVXAgICAgPSBmdW5jdGlvbnMubW91c2VVcEhhbmRsZXIgICApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCk7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayA9IGZ1bmN0aW9ucy5tb3VzZUNsaWNrSGFuZGxlcikgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcnModGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUgICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlKSAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9saXN0ZW5lck1vdXNlRG93bikgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlRG93bjtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlVXAgICAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwKSAgICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZVVwO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2spICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsLmluaXQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhYmVsLnggKz0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMubGFiZWwueSArPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7IHNjcmVlbi5kcmF3QnV0dG9uKHRoaXMpOyB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJpZWxlbWVudFwiLCB4ID0gMCwgeSA9IDAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGVkID0gYW5pbWF0ZWQ7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uUHJvcDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5jcmVhdGVBbmltYXRpb24odGhpcy5fYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxldGUgdGhpcy5fYW5pbWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7IHRoaXMuYW5pbWF0ZWQgJiYgdGhpcy5hbmltYXRpb24udXBkYXRlKHRpbWUpOyB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKCkge31cclxuXHJcbiAgICBzZXRYWShuZXdYLCBuZXdZKSB7XHJcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcclxuICAgICAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbEFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9sYWJlbEFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsYWJlbFwiLCB0ZXh0ID0gXCJsYWJlbFwiLCB4ID0gMTAsIHkgPSAxMCwgY29sb3IgPSBcIiM0NDQ0NDRcIixcclxuICAgICAgICBmb250U2l6ZSA9IDM2LCBmb250V2VpZ2h0ID0gXCJub3JtYWxcIiwgZm9udEZhbWlseSA9IFwiQ291cmllciBOZXdcIiwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmZvbnRTaXplICAgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gbmV3IExhYmVsQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgbGFiZWw6IHRoaXMsXHJcbiAgICAgICAgICAgIGZyYW1lRGVsYXk6ICAgICBwcm9wLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgIHJlcGVhdDogICAgICAgICBwcm9wLnJlcGVhdCxcclxuICAgICAgICAgICAgYXV0b3J1bjogICAgICAgIHByb3AuYXV0b3J1bixcclxuICAgICAgICAgICAgdGV4dENvbGxlY3Rpb246IHByb3AudGV4dENvbGxlY3Rpb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgc2NyZWVuLmRyYXdMYWJlbCh0aGlzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJ0aWxlXCIsIHdpZHRoLCBoZWlnaHQsIHNwcml0ZVNoZWV0LCB4ID0gMTAsIHkgPSAxMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIG9wdGlvbnMgJiYgKHRoaXMuX19vcHRpb25zX18gPSBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBTcHJpdGVTaGVldChzcHJpdGVTaGVldCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbihwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBzcHJpdGVTaGVldDogdGhpcy5zcHJpdGVTaGVldCxcclxuICAgICAgICAgICAgaW5kaWNlczogICAgIHByb3AuaW5kaWNlcyxcclxuICAgICAgICAgICAgYXV0b3J1bjogICAgIHByb3AuYXV0b3J1bixcclxuICAgICAgICAgICAgZnJhbWVEZWxheTogIHByb3AuZnJhbWVEZWxheSxcclxuICAgICAgICAgICAgbmFtZTogICAgICAgIHByb3AubmFtZSxcclxuICAgICAgICAgICAgcmVwZWF0OiAgICAgIHByb3AucmVwZWF0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd1Nwcml0ZShcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5nZXRTcHJpdGUoKHRoaXMuYW5pbWF0ZWQgJiYgdGhpcy5hbmltYXRpb24uaW5kaWNlc1t0aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVJbmRleF0pIHx8IDEpLFxyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fX29wdGlvbnNfXyAmJiB0aGlzLl9fb3B0aW9uc19fLmZvZyAmJiBzY3JlZW4uZmlsbChcIiMwMDAwMDA2NlwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG4gICAgZ2FtZS5ydW4oKTtcclxufTsiLCJleHBvcnQgY2xhc3MgQ29sbGlzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkgeyB0aGlzLmNvbGxpZGVycy5mb3JFYWNoKGNvbGxpZGVyID0+IHRoaXMuaW50ZXJzZWN0KGNvbGxpZGVyKSAmJiB0aGlzLm91dENvbGxpZGVyKGNvbGxpZGVyKSApOyB9XHJcblxyXG4gICAgb3V0Q29sbGlkZXIoY29sbGlkZXIpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMucGxheWVyLmJvZHk7XHJcbiAgICAgICAgbGV0IGJveCA9IHtcclxuICAgICAgICAgICAgX3g6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuX3gsIF95OiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLl95LFxyXG4gICAgICAgICAgICB4MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54LCAgeDI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIud2lkdGgsXHJcbiAgICAgICAgICAgIHkxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnksICB5MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLndpZHRoLCBoZWlnaHQ6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgTWF0aC5hYnMoY29sbGlkZXIueDEgLSBib3gueDIpLCBNYXRoLmFicyhjb2xsaWRlci54MiAtIGJveC54MSksXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbGxpZGVyLnkxIC0gYm94LnkyKSwgTWF0aC5hYnMoY29sbGlkZXIueTIgLSBib3gueTEpICk7XHJcblxyXG4gICAgICAgIHN3aXRjaChtaW4pIHtcclxuICAgICAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MSAtIGJveC54Mik6IHRoaXMucGxheWVyLmJvZHkueCA9IGNvbGxpZGVyLngxIC0gYm9keS53aWR0aCArIGJveC5feDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0aC5hYnMoY29sbGlkZXIueDIgLSBib3gueDEpOiB0aGlzLnBsYXllci5ib2R5LnggPSBjb2xsaWRlci54MiAtIGJveC5feCsyOyAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1hdGguYWJzKGNvbGxpZGVyLnkxIC0gYm94LnkyKTogdGhpcy5wbGF5ZXIuYm9keS55ID0gY29sbGlkZXIueTEgLSBib2R5LmhlaWdodC0yOyAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci55MiAtIGJveC55MSk6IHRoaXMucGxheWVyLmJvZHkueSA9IGNvbGxpZGVyLnkyIC0gYm94Ll95KzI7ICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVyc2VjdChjb2xsaWRlcikge1xyXG4gICAgICAgIGxldCBib3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLngsIHgyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnggKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55LCB5MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoYm94LngyID4gY29sbGlkZXIueDEgJiYgYm94LngxIDwgY29sbGlkZXIueDEgJiYgYm94LnkyID4gY29sbGlkZXIueTEgJiYgYm94LnkxIDwgY29sbGlkZXIueTIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPCBjb2xsaWRlci54MiAmJiBib3gueDIgPiBjb2xsaWRlci54MiAmJiBib3gueTIgPiBjb2xsaWRlci55MSAmJiBib3gueTEgPCBjb2xsaWRlci55MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC55MiA+IGNvbGxpZGVyLnkxICYmIGJveC55MSA8IGNvbGxpZGVyLnkxICYmIGJveC54MiA+IGNvbGxpZGVyLngxICYmIGJveC54MSA8IGNvbGxpZGVyLngyKSB8fFxyXG4gICAgICAgICAgICAgICAoYm94LnkxIDwgY29sbGlkZXIueTIgJiYgYm94LnkyID4gY29sbGlkZXIueTIgJiYgYm94LngyID4gY29sbGlkZXIueDEgJiYgYm94LngxIDwgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPj0gY29sbGlkZXIueDEgJiYgYm94LngyIDw9IGNvbGxpZGVyLngyICYmIGJveC55MSA+PSBjb2xsaWRlci55MSAmJiBib3gueTIgPD0gY29sbGlkZXIueTIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwiLi9ib3hDb2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckJvZHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMueCA9IHByb3AueDtcclxuICAgICAgICB0aGlzLnkgPSBwcm9wLnk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gcHJvcC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3AuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gcHJvcC5tb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHByb3AudmlzaWJsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcihwcm9wLmJveENvbGxpZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueCA9IHRoaXMueCArIHRoaXMuYm94Q29sbGlkZXIuX3g7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci55ID0gdGhpcy55ICsgdGhpcy5ib3hDb2xsaWRlci5feTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci54ID0gdGhpcy54ICsgdGhpcy5ib3hDb2xsaWRlci5feDtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnkgPSB0aGlzLnkgKyB0aGlzLmJveENvbGxpZGVyLl95O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgJiYgc2NyZWVuLnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnJlbmRlcihzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEJveENvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3AuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnggPSBwcm9wLng7IHRoaXMuX3ggPSBwcm9wLng7XHJcbiAgICAgICAgdGhpcy55ID0gcHJvcC55OyB0aGlzLl95ID0gcHJvcC55O1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBwcm9wLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSAmJiBzY3JlZW4uc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IFNwcml0ZVNoZWV0KHByb3Auc3ByaXRlU2hlZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3QgPSB7fTtcclxuICAgICAgICB0aGlzLnRlbXBBbmltYXRpb25Qcm9wID0gcHJvcC5hbmltYXRpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uTGlzdCA9PSB7fSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wQW5pbWF0aW9uUHJvcC5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb24ubmFtZV0gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZVNoZWV0OiB0aGlzLnNwcml0ZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVEZWxheTogIGFuaW1hdGlvbi5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlczogICAgIGFuaW1hdGlvbi5pbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiAgICAgIGFuaW1hdGlvbi5yZXBlYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcnVuOiAgICAgYW5pbWF0aW9uLmF1dG9ydW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0W2FuaW1hdGlvbi5uYW1lXS5pbml0KClcclxuICAgICAgICB9KTsgZGVsZXRlIHRoaXMudGVtcEFuaW1hdGlvblByb3A7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbkxpc3RbXCJpZGxlLWRvd25cIl07XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24ubmFtZSA9PSBhbmltYXRpb25OYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb25OYW1lXTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcHJpdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlU2hlZXQuZ2V0U3ByaXRlKHRoaXMuYW5pbWF0aW9uLmluZGljZXNbdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lSW5kZXhdKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQbGF5ZXJBbmltYXRpb25Db250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vdmVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbW92ZUNvbnRyb2xsZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldEFuaW1hdGlvbiggKHRoaXMubW92ZUNvbnRyb2xsZXIuaXNNb3ZlID8gXCJ3YWxrLVwiIDogXCJpZGxlLVwiKSArIHRoaXMubW92ZUNvbnRyb2xsZXIuZGlyZWN0aW9uICk7XHJcbiAgICAgICAgdGhpcy52aWV3LmFuaW1hdGlvbi51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUGxheWVyS2V5Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgICAgIEtleVc6IHsgY29kZTogODcsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgS2V5RDogeyBjb2RlOiA2OCwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBLZXlTOiB7IGNvZGU6IDgzLCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEtleUE6IHsgY29kZTogNjUsIGlzRG93bjogZmFsc2UgfSxcclxuXHJcbiAgICAgICAgICAgIEFycm93VXA6ICAgIHsgY29kZTogMzgsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgQXJyb3dSaWdodDogeyBjb2RlOiAzOSwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBBcnJvd0Rvd246ICB7IGNvZGU6IDQwLCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEFycm93TGVmdDogIHsgY29kZTogMzcsIGlzRG93bjogZmFsc2UgfSxcclxuXHJcbiAgICAgICAgICAgIFNwYWNlOiB7IGNvZGU6IDMyLCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzS2V5RG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkgeyB0aGlzLnN0YXJ0RXZlbnRMaXN0ZW4oKTsgfVxyXG4gICAgc3RvcCgpICB7IHRoaXMuc3RvcEV2ZW50TGlzdGVuKCk7ICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleURvd24gPSB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlVcCAgID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fbGlzdGVuZXJLZXlEb3duKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICAgdGhpcy5fbGlzdGVuZXJLZXlVcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEV2ZW50TGlzdGVuKCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5RG93biAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fbGlzdGVuZXJLZXlEb3duKSAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJLZXlEb3duO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5VXAgICAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICAgdGhpcy5fbGlzdGVuZXJLZXlVcCkgICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJLZXlVcDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7IHRoaXMuaXNLZXlEb3duID0gdGhpcy5rZXlzLktleVcuaXNEb3duIHx8IHRoaXMua2V5cy5LZXlELmlzRG93biB8fCB0aGlzLmtleXMuS2V5Uy5pc0Rvd24gfHwgdGhpcy5rZXlzLktleUEuaXNEb3duOyB9XHJcblxyXG4gICAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXlzW2V2ZW50LmNvZGVdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXS5pc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXlzW2V2ZW50LmNvZGVdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXS5pc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUGxheWVyTW92ZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBrZXlDb250cm9sbGVyLCBwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5rZXlDb250cm9sbGVyID0ga2V5Q29udHJvbGxlcjtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlzID0gcHJvcC5rZXlzO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMudXBdLmlzRG93bikgICAgdGhpcy5tb3ZlVXAoKTsgICBcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLnJpZ2h0XS5pc0Rvd24pIHRoaXMubW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5kb3duXS5pc0Rvd24pICB0aGlzLm1vdmVEb3duKCk7IFxyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMubGVmdF0uaXNEb3duKSAgdGhpcy5tb3ZlTGVmdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5rZXlDb250cm9sbGVyLmlzS2V5RG93bikgdGhpcy5pc01vdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVXAoKSAgICB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYm9keS55IC09IHRoaXMucGxheWVyLmJvZHkubW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwidXBcIjtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUmlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYm9keS54ICs9IHRoaXMucGxheWVyLmJvZHkubW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRG93bigpICB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYm9keS55ICs9IHRoaXMucGxheWVyLmJvZHkubW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KCkgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnggLT0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXJLZXlDb250cm9sbGVyIH0gZnJvbSBcIi4va2V5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJNb3ZlQ29udHJvbGxlciB9IGZyb20gXCIuL21vdmVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9hbmltYXRpb25Db250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBsYXllciwgcHJvcCB9KSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IG5ldyBQbGF5ZXJLZXlDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBQbGF5ZXJNb3ZlQ29udHJvbGxlcih0aGlzLnBsYXllciwgdGhpcy5rZXlDb250cm9sbGVyLCBwcm9wLm1vdmVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlcih0aGlzLnBsYXllci52aWV3LCB0aGlzLm1vdmVDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5rZXlDb250cm9sbGVyLnN0YXJ0KCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLmtleUNvbnRyb2xsZXIuc3RvcCgpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5rZXlDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckJvZHkgfSBmcm9tIFwiLi9jb21wb25lbnRzL2JvZHlcIjtcclxuaW1wb3J0IHsgUGxheWVyVmlldyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmlld1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvcGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcC5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgUGxheWVyQm9keShwcm9wLmJvZHkpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBQbGF5ZXJWaWV3KHByb3Audmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKHsgcGxheWVyOiB0aGlzLCBwcm9wOiBwcm9wLmNvbnRyb2xsZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYm9keS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuYm9keS51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudmlldy5nZXRTcHJpdGUoKSwgdGhpcy5ib2R5LngsIHRoaXMuYm9keS55KTtcclxuICAgICAgICB0aGlzLmJvZHkucmVuZGVyKHNjcmVlbik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwgZnJhbWVEZWxheT0gNTAsIHJlcGVhdCA9IGZhbHNlLCBhdXRvcnVuID0gZmFsc2UgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgICAgIHRoaXMuYXV0b3J1biA9IGF1dG9ydW47XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVEZWxheSA9IGZyYW1lRGVsYXk7XHJcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmF1dG9ydW4gJiYgdGhpcy5ydW4oKTsgfVxyXG5cclxuICAgIHJ1bigpICB7IHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTsgIH1cclxuICAgIHN0b3AoKSB7IHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7IH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEZyYW1lVGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgodGltZSAtIHRoaXMubGFzdEZyYW1lVGltZSkgPiB0aGlzLmZyYW1lRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9hbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJlbEFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxhYmVsQW5pbWF0aW9uXCIsIGxhYmVsLCBmcmFtZURlbGF5ID0gMjAwLCB0ZXh0Q29sbGVjdGlvbiA9IFtdLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBmcmFtZURlbGF5OiBmcmFtZURlbGF5LCByZXBlYXQ6IHJlcGVhdCwgYXV0b3J1bjogYXV0b3J1biB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMudGV4dENvbGxlY3Rpb24gPSB0ZXh0Q29sbGVjdGlvbjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGV4dEluZGV4ICsgMSA9PSB0aGlzLnRleHRDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0SW5kZXggPSAwO1xyXG4gICAgICAgIH0gZWxzZSArK3RoaXMuY3VycmVudFRleHRJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhYmVsLnRleHQgPSB0aGlzLnRleHRDb2xsZWN0aW9uW3RoaXMuY3VycmVudFRleHRJbmRleF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9hbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJzcHJpdGVBbmltYXRpb25cIiwgc3ByaXRlU2hlZXQsIGluZGljZXMsIGZyYW1lRGVsYXkgPSAxMDAsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSBmYWxzZSB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBmcmFtZURlbGF5OiBmcmFtZURlbGF5LCByZXBlYXQ6IHJlcGVhdCwgYXV0b3J1bjogYXV0b3J1biB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IHNwcml0ZVNoZWV0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5kaWNlcyA9IGluZGljZXM7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSB0aGlzLmdldEZyYW1lcyh0aGlzLmluZGljZXMpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmFtZXMoaW5kaWNlcykge1xyXG4gICAgICAgIHJldHVybiBpbmRpY2VzLm1hcCggaW5kZXggPT4gKHtcclxuICAgICAgICAgICAgc291cmNlWDogdGhpcy5zcHJpdGVTaGVldC5nZXRTb3VyY2VYKGluZGV4KSxcclxuICAgICAgICAgICAgc291cmNlWTogdGhpcy5zcHJpdGVTaGVldC5nZXRTb3VyY2VZKGluZGV4KVxyXG4gICAgICAgIH0pICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmICgodGhpcy5jdXJyZW50RnJhbWVJbmRleCArIDEgPT0gdGhpcy5mcmFtZXMubGVuZ3RoICkgJiYgdGhpcy5yZXBlYXQpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnJlcGVhdCkgc3RvcCgpO1xyXG4gICAgICAgIGVsc2UgKyt0aGlzLmN1cnJlbnRGcmFtZUluZGV4O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hcERhdGEsIGNvbGxpc2lvbikge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSBtYXBEYXRhLmRhdGE7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5kYXRhLm5hbWU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGlsZVNldCA9IG5ldyBTcHJpdGVTaGVldChtYXBEYXRhLnRpbGVTZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbiA9IHRoaXMuZGF0YS53aWR0aDtcclxuICAgICAgICB0aGlzLnJvdyA9IHRoaXMuZGF0YS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZVNldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGF5ZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICAgIGxheWVyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlczogbGF5ZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB6X2luZGV4OiBsYXllci5wcm9wZXJ0aWVzWzBdLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXllci50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBsYXllci5vYmplY3RzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDE6IGl0ZW0ueCwgeDI6IGl0ZW0ueCArIGl0ZW0ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTE6IGl0ZW0ueSwgeTI6IGl0ZW0ueSArIGl0ZW0uaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzLnNvcnQoIChhLCBiKSA9PiBhLnpfaW5kZXggLSBiLnpfaW5kZXggKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi5jb2xsaWRlcnMgPSB0aGlzLmNvbGxpZGVycztcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZWNvbmRSZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cHBlckxheWVyLmZvckVhY2godGlsZSA9PiBzY3JlZW4uZHJhd1Nwcml0ZSh0aWxlLnNwcml0ZSwgdGlsZS54LCB0aWxlLnkpICk7XHJcbiAgICAgICAgdGhpcy51cHBlckxheWVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sID0gMCwgcm93ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxheWVyLmluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLm5hbWUgPT0gXCJ3YWxsXCIgJiYgdGhpcy5jb2xsaXNpb24uaW50ZXJzZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCwgICAgeDI6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCAgKyB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxOiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93LCAgIHkyOiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93ICsgdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodC0yMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZTogdGhpcy50aWxlU2V0LmdldFNwcml0ZShpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudGlsZVNldC5nZXRTcHJpdGUoaW5kZXgpLCB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsIHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICsrY29sO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+IHRoaXMuY29sdW1uIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgKytyb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZVNoZWV0XCIsIHNyYywgd2lkdGgsIGhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjQgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggID0gc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5pbWFnZSB8fCAodGhpcy5pbWFnZSA9IHRoaXMubG9hZEltYWdlKCkpOyB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIGltYWdlOiAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAgIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogIHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkSW1hZ2UoKSB7IHRoaXMuX2xvYWQoKS50aGVuKGltZyA9PiB0aGlzLmltYWdlID0gaW1nKS5jYXRjaChlcnJvciA9PiB7IHRocm93IGVycm9yOyB9KTsgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHsgcmV0dXJuIChpbmRleC0xKSAqIHRoaXMuc3ByaXRlV2lkdGggJSB0aGlzLndpZHRoOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCAoKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLndpZHRoICkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IE1hcCB9IGZyb20gXCIuLi8uLi9tYXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbCBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGV2ZWxcIiwgc2NyZWVuLCBwbGF5ZXIsIGNvbGxpc2lvbiwgbWFwRGF0YSwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChtYXBEYXRhLCBjb2xsaXNpb24pO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xsZXIuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24udXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5yZW5kZXIodGhpcy5zY3JlZW4pO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5tYXAuc2Vjb25kUmVuZGVyKHRoaXMuc2NyZWVuKTtcclxuXHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9sZXZlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsXzEgZXh0ZW5kcyBMZXZlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxldmVsXzFcIiwgc2NyZWVuLCBjb2xsaXNpb24sIHBsYXllciwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzY3JlZW46IHNjcmVlbixcclxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXIsXHJcbiAgICAgICAgICAgIG1hcERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByb3AubGV2ZWxfMS5tYXBEYXRhLFxyXG4gICAgICAgICAgICAgICAgdGlsZVNldDogcHJvcC5tYXBTcHJpdGVTaGVldFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibGV2ZWxfMVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgcGFyZW50LCBuZXh0IH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICF0aGlzLmllbGVtZW50cyAmJiAodGhpcy5pZWxlbWVudHMgPSB7fSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHt9XHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSAge31cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWUgaW4gdGhpcy5pZWxlbWVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzW2llXS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIHx8IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcclxuICAgICAgICBkaXYuaWQgPSBcImdhbWVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5ET00gPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0gfHwgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMuRE9NLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ET00uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5ET00uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuY2FudmFzLmluaXQoKTsgfVxyXG5cclxuICAgIGRyYXdCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KGJ1dHRvbi54IC0gNSwgYnV0dG9uLnkgLSA1LCBidXR0b24ud2lkdGggKyAxMCwgYnV0dG9uLmhlaWdodCArIDEwKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IGJ1dHRvbi5iZ2NvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFJlY3QoYnV0dG9uLngsIGJ1dHRvbi55LCBidXR0b24ud2lkdGgsIGJ1dHRvbi5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdMYWJlbChidXR0b24ubGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdMYWJlbChsYWJlbCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gbGFiZWwuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5mb250ID0gYCR7bGFiZWwuZm9udFdlaWdodH0gJHtsYWJlbC5mb250U2l6ZX1weCAke2xhYmVsLmZvbnRGYW1pbHkgfHwgXCJMdWNpZGEgQ29uc29sYXNcIn1gO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxUZXh0KGxhYmVsLnRleHQsIGxhYmVsLngsIGxhYmVsLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdJbWFnZShpbWFnZSwgeCwgeSkgeyBpbWFnZSAmJiB0aGlzLmNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgeCwgeSk7IH1cclxuICAgIFxyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGUsIHgsIHkpIHtcclxuICAgICAgICBzcHJpdGUuaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHNwcml0ZS5pbWFnZSxcclxuICAgICAgICAgICAgc3ByaXRlLnNvdXJjZVgsIHNwcml0ZS5zb3VyY2VZLFxyXG4gICAgICAgICAgICBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHggfHwgc3ByaXRlLnggfHwgMCwgeSB8fCBzcHJpdGUueSB8fCAwLFxyXG4gICAgICAgICAgICBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=