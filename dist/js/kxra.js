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
      this.scenes[scene].isInitialized = false;
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
/* harmony import */ var _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/gameCtrl */ "./src/controllers/gameCtrl.js");
/* harmony import */ var _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/sceneCtrl */ "./src/controllers/sceneCtrl.js");
/* harmony import */ var _controllers_fpsController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/fpsController */ "./src/controllers/fpsController.js");
/* harmony import */ var _game_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.json */ "./src/game.json");
var _game_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./game.json */ "./src/game.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.name = _game_json__WEBPACK_IMPORTED_MODULE_6__.name;
    this.isRunning = false;
    this.screen = new _view_screen_screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](_game_json__WEBPACK_IMPORTED_MODULE_6__.screen);
    this.controller = new _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_3__["GameController"]();
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.screen.init();
      this.controller.add(new _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_4__["SceneController"]({
        scenes: {
          loading: new _view_scene_loading__WEBPACK_IMPORTED_MODULE_1__["LoadingScene"]({
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_6__.scenes.loading
          })
        }
      }), new _controllers_fpsController__WEBPACK_IMPORTED_MODULE_5__["FPSController"](_game_json__WEBPACK_IMPORTED_MODULE_6__.fpsController));
      this.controller.sceneController.add(new _view_scene_menu_start__WEBPACK_IMPORTED_MODULE_2__["StartMenu"]({
        screen: this.screen,
        prop: _game_json__WEBPACK_IMPORTED_MODULE_6__.scenes.startMenu
      }));
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
/*! exports provided: name, screen, fpsController, scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}}}}");

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
      screen.drawSprite(this.spriteSheet.getSprite(this.animated && this.animation.currentFrameIndex + 1 || 1), this.x, this.y);
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
    _this.frames = _this.getFrames(indices);
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
        this.next = "loading";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Zwc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zY2VuZUN0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9pZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hbmltYXRpb24vbGFiZWxBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbWVudS9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY3JlZW4vY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjcmVlbi9zY3JlZW4uanMiXSwibmFtZXMiOlsiRlBTQ29udHJvbGxlciIsInByb3AiLCJuYW1lIiwiZnBzIiwiX2ZwcyIsImZyYW1lVGltZSIsIl9fbGFiZWxfXyIsIkxhYmVsIiwibGFiZWwiLCJpbml0IiwidGltZSIsIk1hdGgiLCJ0cnVuYyIsInRleHQiLCJzY3JlZW4iLCJ1cGRhdGUiLCJkcmF3TGFiZWwiLCJHYW1lQ29udHJvbGxlciIsImxlbmd0aCIsInNjZW5lQ29udHJvbGxlciIsImN1cnJlbnRTY2VuZSIsInJlbmRlciIsImZwc0NvbnRyb2xsZXIiLCJjb250cm9sbGVycyIsImN0cmwiLCJFcnJvciIsImNvbnRyb2xsZXJOYW1lIiwiU2NlbmVDb250cm9sbGVyIiwic2NlbmVzIiwic2NlbmUiLCJpc0luaXRpYWxpemVkIiwibG9hZGluZyIsInNldFNjZW5lIiwic2NlbmVOYW1lIiwic3RhcnQiLCJzdGF0dXMiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJlbCIsIm5leHQiLCJzdG9wIiwicGFyZW50IiwiR2FtZSIsImdhbWVKU09OIiwiaXNSdW5uaW5nIiwiU2NyZWVuIiwiY29udHJvbGxlciIsImFkZCIsIkxvYWRpbmdTY2VuZSIsIlN0YXJ0TWVudSIsInN0YXJ0TWVudSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiY29uc29sZSIsImxvZyIsIkJ1dHRvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmdjb2xvciIsImNvbG9ycyIsImxhYmVsUHJvcCIsIngiLCJ5IiwiYW5pbWF0ZWQiLCJhbmltYXRpb25Qcm9wIiwidW5kZWZpbmVkIiwiaXNNb3VzZURvd24iLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwidGFyZ2V0IiwiZnVuY3Rpb25zIiwiX2xpc3RlbmVyTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfbGlzdGVuZXJNb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwiX2xpc3RlbmVyTW91c2VVcCIsIm1vdXNlVXBIYW5kbGVyIiwiX2xpc3RlbmVyTW91c2VDbGljayIsIm1vdXNlQ2xpY2tIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyYXdCdXR0b24iLCJJRWxlbWVudCIsIl9hbmltYXRpb24iLCJhbmltYXRpb24iLCJjcmVhdGVBbmltYXRpb24iLCJuZXdYIiwibmV3WSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsIkxhYmVsQW5pbWF0aW9uIiwiZnJhbWVEZWxheSIsInJlcGVhdCIsImF1dG9ydW4iLCJ0ZXh0Q29sbGVjdGlvbiIsIlRpbGUiLCJzcHJpdGVTaGVldCIsIm9wdGlvbnMiLCJfX29wdGlvbnNfXyIsIlNwcml0ZVNoZWV0IiwiU3ByaXRlQW5pbWF0aW9uIiwiaW5kaWNlcyIsImRyYXdTcHJpdGUiLCJnZXRTcHJpdGUiLCJjdXJyZW50RnJhbWVJbmRleCIsImZvZyIsImZpbGwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnYW1lIiwicnVuIiwiQW5pbWF0aW9uIiwibGFzdEZyYW1lVGltZSIsIm5leHRGcmFtZSIsImN1cnJlbnRUZXh0SW5kZXgiLCJmcmFtZXMiLCJnZXRGcmFtZXMiLCJtYXAiLCJpbmRleCIsInNvdXJjZVgiLCJnZXRTb3VyY2VYIiwic291cmNlWSIsImdldFNvdXJjZVkiLCJzcmMiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsImltYWdlIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsIl9sb2FkIiwidGhlbiIsImVycm9yIiwiaWVsZW1lbnRzIiwiYmFja2dyb3VuZCIsImRpc2siLCJzZXRUaW1lb3V0IiwicmFuZG9tIiwiU2NlbmUiLCJwbGF5QnV0dG9uIiwiX19pbl9fIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJjbGljayIsImhvdmVyIiwiYWRkTGlzdGVuZXJzIiwiY2FudmFzIiwiRE9NIiwiYmluZCIsInJlbW92ZUxpc3RlbmVycyIsImllIiwic3RhcnRFdmVudExpc3RlbiIsInN0b3BFdmVudExpc3RlbiIsIkNhbnZhcyIsImRpdiIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYnV0dG9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJkcmF3SW1hZ2UiLCJzcHJpdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFTyxJQUFNQSxhQUFiO0FBQ0kseUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQyxJQUFMLEdBQVksZUFBWjtBQUVBLFNBQUtDLEdBQUwsR0FBWSxDQUFaLENBSGMsQ0FHRTs7QUFDaEIsU0FBS0MsSUFBTCxHQUFZLENBQVosQ0FKYyxDQUlDOztBQUVmLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHNEQUFKLENBQVVOLElBQUksQ0FBQ08sS0FBZixDQUFqQjtBQUNIOztBQVZMO0FBQUE7QUFBQSwyQkFZVztBQUFFLFdBQUtGLFNBQUwsQ0FBZUcsSUFBZjtB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ImZpbGUiOiIuL2pzL2t4cmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL2llbGVtZW50cy9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZQU0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiZnBzQ29udHJvbGxlclwiO1xyXG5cclxuICAgICAgICB0aGlzLmZwcyAgPSAwOyAgLy8gZXZlcnkgc2Vjb25kXHJcbiAgICAgICAgdGhpcy5fZnBzID0gMDsgLy8gZXZlcnkgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9fbGFiZWxfXyA9IG5ldyBMYWJlbChwcm9wLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLl9fbGFiZWxfXy5pbml0KCk7IH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZSA9PSBNYXRoLnRydW5jKHRpbWUgLyAxMDAwKSkge1xyXG4gICAgICAgICAgICArK3RoaXMuX2ZwcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZwcyA9ICsrdGhpcy5fZnBzO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZSA9IE1hdGgudHJ1bmModGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fX2xhYmVsX18udGV4dCA9IGBGUFM6ICR7dGhpcy5mcHN9YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd0xhYmVsKHRoaXMuX19sYWJlbF9fKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5sZW5ndGggPSAwOyB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVDb250cm9sbGVyICYmIHRoaXMuc2NlbmVDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lQ29udHJvbGxlciAmJiB0aGlzLnNjZW5lQ29udHJvbGxlci5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5mcHNDb250cm9sbGVyICAgJiYgdGhpcy5mcHNDb250cm9sbGVyLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5jb250cm9sbGVycykge1xyXG4gICAgICAgIGZvciAobGV0IGN0cmwgb2YgY29udHJvbGxlcnMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzW2N0cmwubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5hbWUgb2YgY29udHJvbGxlciwgbmFtZSBpcyBtdXN0IGJlIGxpa2UgJ3NjZW5lQ29udHJvbGxlcidcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXNbY3RybC5uYW1lXSA9IGN0cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2N0cmwubmFtZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICsrdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoY29udHJvbGxlck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpc1tjb250cm9sbGVyTmFtZV0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbY29udHJvbGxlck5hbWVdO1xyXG4gICAgICAgICAgICAtLXRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJzY2VuZUNvbnRyb2xsZXJcIiwgc2NlbmVzIH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHNjZW5lIGluIHNjZW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0gPSBzY2VuZXNbc2NlbmVdO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0uaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY2VuZXMubG9hZGluZykgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBtdXN0IGhhdmUgbG9hZGluZyBzY2VuZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFNjZW5lKFwibG9hZGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY2VuZShzY2VuZU5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzW3NjZW5lTmFtZV0pIHJldHVybjtcclxuXHJcbiAgICAgICAgIXRoaXMuc2NlbmVzW3NjZW5lTmFtZV0uaXNJbml0aWFsaXplZCAmJiAodGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pc0luaXRpYWxpemVkID0gdHJ1ZSkgJiYgdGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXNbc2NlbmVOYW1lXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyA9IFwicnVubmluZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5zY2VuZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzY2VuZSBvZiBzY2VuZXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzY2VuZS5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJTY2VuZSBtdXN0IGhhdmUgbmFtZSwgbGlrZSAnc3RhcnRNZW51J1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0gPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShzY2VuZU5hbWUpIHsgdGhpcy5zY2VuZXNbc2NlbmVOYW1lXSAmJiB0aGlzLnNjZW5lcy5zcGxpY2UodGhpcy5zY2VuZXMuZmluZEluZGV4KGVsID0+IGVsLm5hbWUgPT0gc2NlbmVOYW1lKSk7IH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2NlbmUgaW4gdGhpcy5zY2VuZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPT0gXCJmaW5pc2hcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLm5leHQgPT0gXCJub25lXCIpIHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPSBcInJ1bm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjZW5lKHRoaXMuc2NlbmVzW3NjZW5lXS5uZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wYXJlbnQgPSB0aGlzLnNjZW5lc1tzY2VuZV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9IFwicmVhZHlcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0ubmV4dCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuICAgICAgIH0gZnJvbSBcIi4vdmlldy9zY3JlZW4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTY2VuZSB9IGZyb20gXCIuL3ZpZXcvc2NlbmUvbG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBTdGFydE1lbnUgfSBmcm9tIFwiLi92aWV3L3NjZW5lL21lbnUvc3RhcnRcIjtcclxuXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyICB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9nYW1lQ3RybFwiO1xyXG5pbXBvcnQgeyBTY2VuZUNvbnRyb2xsZXIgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvc2NlbmVDdHJsXCI7XHJcbmltcG9ydCB7IEZQU0NvbnRyb2xsZXIgICB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9mcHNDb250cm9sbGVyXCI7XHJcblxyXG5pbXBvcnQgZ2FtZUpTT04gZnJvbSBcIi4vZ2FtZS5qc29uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBnYW1lSlNPTi5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbihnYW1lSlNPTi5zY3JlZW4pO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWRkKFxyXG4gICAgICAgICAgICBuZXcgU2NlbmVDb250cm9sbGVyKHsgc2NlbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZ1NjZW5lKHsgc2NyZWVuOiB0aGlzLnNjcmVlbiwgcHJvcDogZ2FtZUpTT04uc2NlbmVzLmxvYWRpbmcgfSlcclxuICAgICAgICAgICAgfSB9KSxcclxuICAgICAgICAgICAgbmV3IEZQU0NvbnRyb2xsZXIoZ2FtZUpTT04uZnBzQ29udHJvbGxlcilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2NlbmVDb250cm9sbGVyLmFkZChcclxuICAgICAgICAgICAgbmV3IFN0YXJ0TWVudSh7IHNjcmVlbjogdGhpcy5zY3JlZW4sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5zdGFydE1lbnUgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVuZGVyKHRpbWUsIHRoaXMuc2NyZWVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgKHRoaXMuaXNSdW5uaW5nID0gdHJ1ZSkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJidXR0b25cIiwgd2lkdGgsIGhlaWdodCwgYmdjb2xvciwgY29sb3JzLCBsYWJlbFByb3AsIHggPSAwLCB5ID0gMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuYmdjb2xvciA9IGJnY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgID0gY29sb3JzO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbmV3IExhYmVsKGxhYmVsUHJvcCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfX2luX18oZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gKCAoZXZlbnQub2Zmc2V0WCA+PSB0aGlzLngpICYmIChldmVudC5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMud2lkdGgpICApXHJcbiAgICAgICAgICAgICYmICggKGV2ZW50Lm9mZnNldFkgPj0gdGhpcy55KSAmJiAoZXZlbnQub2Zmc2V0WSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnModGFyZ2V0LCBmdW5jdGlvbnMpIHtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUgID0gZnVuY3Rpb25zLm1vdXNlTW92ZUhhbmRsZXIgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSk7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VEb3duICA9IGZ1bmN0aW9ucy5tb3VzZURvd25IYW5kbGVyICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24pO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlVXAgICAgPSBmdW5jdGlvbnMubW91c2VVcEhhbmRsZXIgICApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCk7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayA9IGZ1bmN0aW9ucy5tb3VzZUNsaWNrSGFuZGxlcikgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcnModGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUgICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlKSAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9saXN0ZW5lck1vdXNlRG93bikgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlRG93bjtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlVXAgICAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwKSAgICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZVVwO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2spICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsLmluaXQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhYmVsLnggKz0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMubGFiZWwueSArPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7IHNjcmVlbi5kcmF3QnV0dG9uKHRoaXMpOyB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJpZWxlbWVudFwiLCB4ID0gMCwgeSA9IDAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGVkID0gYW5pbWF0ZWQ7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uUHJvcDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5jcmVhdGVBbmltYXRpb24odGhpcy5fYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxldGUgdGhpcy5fYW5pbWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7IHRoaXMuYW5pbWF0ZWQgJiYgdGhpcy5hbmltYXRpb24udXBkYXRlKHRpbWUpOyB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKCkge31cclxuXHJcbiAgICBzZXRYWShuZXdYLCBuZXdZKSB7XHJcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcclxuICAgICAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbEFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9sYWJlbEFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsYWJlbFwiLCB0ZXh0ID0gXCJsYWJlbFwiLCB4ID0gMTAsIHkgPSAxMCwgY29sb3IgPSBcIiM0NDQ0NDRcIixcclxuICAgICAgICBmb250U2l6ZSA9IDM2LCBmb250V2VpZ2h0ID0gXCJub3JtYWxcIiwgZm9udEZhbWlseSA9IFwiQ291cmllciBOZXdcIiwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmZvbnRTaXplICAgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gbmV3IExhYmVsQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgbGFiZWw6IHRoaXMsXHJcbiAgICAgICAgICAgIGZyYW1lRGVsYXk6ICAgICBwcm9wLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgIHJlcGVhdDogICAgICAgICBwcm9wLnJlcGVhdCxcclxuICAgICAgICAgICAgYXV0b3J1bjogICAgICAgIHByb3AuYXV0b3J1bixcclxuICAgICAgICAgICAgdGV4dENvbGxlY3Rpb246IHByb3AudGV4dENvbGxlY3Rpb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgc2NyZWVuLmRyYXdMYWJlbCh0aGlzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJ0aWxlXCIsIHdpZHRoLCBoZWlnaHQsIHNwcml0ZVNoZWV0LCB4ID0gMTAsIHkgPSAxMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIG9wdGlvbnMgJiYgKHRoaXMuX19vcHRpb25zX18gPSBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBTcHJpdGVTaGVldChzcHJpdGVTaGVldCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbihwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBzcHJpdGVTaGVldDogdGhpcy5zcHJpdGVTaGVldCxcclxuICAgICAgICAgICAgaW5kaWNlczogICAgIHByb3AuaW5kaWNlcyxcclxuICAgICAgICAgICAgYXV0b3J1bjogICAgIHByb3AuYXV0b3J1bixcclxuICAgICAgICAgICAgZnJhbWVEZWxheTogIHByb3AuZnJhbWVEZWxheSxcclxuICAgICAgICAgICAgbmFtZTogICAgICAgIHByb3AubmFtZSxcclxuICAgICAgICAgICAgcmVwZWF0OiAgICAgIHByb3AucmVwZWF0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnNwcml0ZVNoZWV0LmdldFNwcml0ZSgodGhpcy5hbmltYXRlZCAmJiB0aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVJbmRleCArMSkgfHwgMSksIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICB0aGlzLl9fb3B0aW9uc19fICYmIHRoaXMuX19vcHRpb25zX18uZm9nICYmIHNjcmVlbi5maWxsKFwiIzAwMDAwMDY2XCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuXHJcbiAgICBnYW1lLnJ1bigpO1xyXG59OyIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBmcmFtZURlbGF5PSA1MCwgcmVwZWF0ID0gZmFsc2UsIGF1dG9ydW4gPSBmYWxzZSB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICAgICAgdGhpcy5hdXRvcnVuID0gYXV0b3J1bjtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gZnJhbWVEZWxheTtcclxuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuYXV0b3J1biAmJiB0aGlzLnJ1bigpOyB9XHJcblxyXG4gICAgcnVuKCkgIHsgdGhpcy5pc1J1bm5pbmcgPSB0cnVlOyAgfVxyXG4gICAgc3RvcCgpIHsgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWVUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0RnJhbWVUaW1lKSA+IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxBbmltYXRpb25cIiwgbGFiZWwsIGZyYW1lRGVsYXkgPSAyMDAsIHRleHRDb2xsZWN0aW9uID0gW10sIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGVjdGlvbiA9IHRleHRDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZXh0SW5kZXggKyAxID09IHRoaXMudGV4dENvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICAgICAgfSBlbHNlICsrdGhpcy5jdXJyZW50VGV4dEluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMudGV4dENvbGxlY3Rpb25bdGhpcy5jdXJyZW50VGV4dEluZGV4XTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZUFuaW1hdGlvblwiLCBzcHJpdGVTaGVldCwgaW5kaWNlcywgZnJhbWVEZWxheSA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IGZhbHNlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gc3ByaXRlU2hlZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSB0aGlzLmdldEZyYW1lcyhpbmRpY2VzKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhbWVzKGluZGljZXMpIHtcclxuICAgICAgICByZXR1cm4gaW5kaWNlcy5tYXAoIGluZGV4ID0+ICh7XHJcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuc3ByaXRlU2hlZXQuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuc3ByaXRlU2hlZXQuZ2V0U291cmNlWShpbmRleClcclxuICAgICAgICB9KSApO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSgpIHtcclxuICAgICAgICBpZiAoKHRoaXMuY3VycmVudEZyYW1lSW5kZXggKyAxID09IHRoaXMuZnJhbWVzLmxlbmd0aCApICYmIHRoaXMucmVwZWF0KVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5yZXBlYXQpIHN0b3AoKTtcclxuICAgICAgICBlbHNlICsrdGhpcy5jdXJyZW50RnJhbWVJbmRleDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZVNoZWV0XCIsIHNyYywgd2lkdGgsIGhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjQgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggID0gc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5pbWFnZSB8fCAodGhpcy5pbWFnZSA9IHRoaXMubG9hZEltYWdlKCkpOyB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIGltYWdlOiAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHdpZHRoOiAgIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogIHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkSW1hZ2UoKSB7IHRoaXMuX2xvYWQoKS50aGVuKGltZyA9PiB0aGlzLmltYWdlID0gaW1nKS5jYXRjaChlcnJvciA9PiB7IHRocm93IGVycm9yOyB9KTsgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHsgcmV0dXJuIChpbmRleC0xKSAqIHRoaXMuc3ByaXRlV2lkdGggJSB0aGlzLndpZHRoOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCAoKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLndpZHRoICkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibG9hZGluZ1wiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgcGFyZW50LCBuZXh0IH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICF0aGlzLmllbGVtZW50cyAmJiAodGhpcy5pZWxlbWVudHMgPSB7fSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHt9XHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSAge31cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWUgaW4gdGhpcy5pZWxlbWVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzW2llXS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVcIikgfHwgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSApO1xyXG4gICAgICAgIGRpdi5pZCA9IFwiZ2FtZVwiO1xyXG5cclxuICAgICAgICB0aGlzLkRPTSA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXSB8fCBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSk7XHJcbiAgICAgICAgdGhpcy5ET00ud2lkdGggID0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLkRPTS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLkRPTS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0J1dHRvbihidXR0b24pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFJlY3QoYnV0dG9uLnggLSA1LCBidXR0b24ueSAtIDUsIGJ1dHRvbi53aWR0aCArIDEwLCBidXR0b24uaGVpZ2h0ICsgMTApO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gYnV0dG9uLmJnY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChidXR0b24ueCwgYnV0dG9uLnksIGJ1dHRvbi53aWR0aCwgYnV0dG9uLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0xhYmVsKGJ1dHRvbi5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xhYmVsKGxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBsYWJlbC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZvbnQgPSBgJHtsYWJlbC5mb250V2VpZ2h0fSAke2xhYmVsLmZvbnRTaXplfXB4ICR7bGFiZWwuZm9udEZhbWlseSB8fCBcIkx1Y2lkYSBDb25zb2xhc1wifWA7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFRleHQobGFiZWwudGV4dCwgbGFiZWwueCwgbGFiZWwueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0ltYWdlKGltYWdlLCB4LCB5KSB7XHJcbiAgICAgICAgaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZSwgeCwgeSkge1xyXG4gICAgICAgIHNwcml0ZS5pbWFnZSAmJiB0aGlzLmNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgc3ByaXRlLmltYWdlLFxyXG4gICAgICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksXHJcbiAgICAgICAgICAgIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgICAgICAgeCB8fCBzcHJpdGUueCB8fCAwLCB5IHx8IHNwcml0ZS55IHx8IDAsXHJcbiAgICAgICAgICAgIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9