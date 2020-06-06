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

/***/ "./src/bodies/animation.js":
/*!*********************************!*\
  !*** ./src/bodies/animation.js ***!
  \*********************************/
/*! exports provided: BodyAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyAnimation", function() { return BodyAnimation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BodyAnimation = /*#__PURE__*/function () {
  function BodyAnimation(view, moveController) {
    _classCallCheck(this, BodyAnimation);

    this.view = view;
    this.moveController = moveController;
  }

  _createClass(BodyAnimation, [{
    key: "update",
    value: function update(time) {
      this.view.setAnimation((this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction);
      this.view.animation.update(time);
    }
  }]);

  return BodyAnimation;
}();

/***/ }),

/***/ "./src/bodies/body.js":
/*!****************************!*\
  !*** ./src/bodies/body.js ***!
  \****************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _boxCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxCollider */ "./src/bodies/boxCollider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Body = /*#__PURE__*/function () {
  function Body(prop) {
    _classCallCheck(this, Body);

    this.x = prop.x;
    this.y = prop.y;
    this.width = prop.width;
    this.height = prop.height;
    this.moveSpeed = prop.moveSpeed;
    this.visible = prop.visible;
    this.boxCollider = new _boxCollider__WEBPACK_IMPORTED_MODULE_0__["BoxCollider"](prop.boxCollider);
  }

  _createClass(Body, [{
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

  return Body;
}();

/***/ }),

/***/ "./src/bodies/boxCollider.js":
/*!***********************************!*\
  !*** ./src/bodies/boxCollider.js ***!
  \***********************************/
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

/***/ "./src/bodies/character.js":
/*!*********************************!*\
  !*** ./src/bodies/character.js ***!
  \*********************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/bodies/body.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/bodies/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Character = /*#__PURE__*/function () {
  function Character(prop) {
    _classCallCheck(this, Character);

    this.name = prop.name;
    this.body = new _body__WEBPACK_IMPORTED_MODULE_0__["Body"](prop.body);
    this.view = new _view__WEBPACK_IMPORTED_MODULE_1__["View"](prop.view);
  }

  _createClass(Character, [{
    key: "init",
    value: function init() {
      this.view.init();
      this.body.init();
    }
  }, {
    key: "update",
    value: function update() {
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

  return Character;
}();

/***/ }),

/***/ "./src/bodies/view.js":
/*!****************************!*\
  !*** ./src/bodies/view.js ***!
  \****************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/picture/spriteSheet */ "./src/view/picture/spriteSheet.js");
/* harmony import */ var _view_animation_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/animation/spriteAnimation */ "./src/view/animation/spriteAnimation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var View = /*#__PURE__*/function () {
  function View(prop) {
    _classCallCheck(this, View);

    this.spriteSheet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](prop.spriteSheet);
    this.animationList = {};
    this.tempAnimationProp = prop.animationList;
  }

  _createClass(View, [{
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

  return View;
}();

/***/ }),

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

/***/ "./src/enemy/controllers/attackController.js":
/*!***************************************************!*\
  !*** ./src/enemy/controllers/attackController.js ***!
  \***************************************************/
/*! exports provided: EnemyAttackController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyAttackController", function() { return EnemyAttackController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyAttackController = /*#__PURE__*/function () {
  function EnemyAttackController(range, body) {
    _classCallCheck(this, EnemyAttackController);

    this.range = range;
    this.body = body;
    this.target = null;
  }

  _createClass(EnemyAttackController, [{
    key: "init",
    value: function init(player, collision) {
      this.player = player;
      this.collision = collision;
      this.selfBox = {
        x1: this.body.boxCollider.x,
        x2: this.body.boxCollider.x + this.body.boxCollider.width,
        y1: this.body.boxCollider.y,
        y2: this.body.boxCollider.y + this.body.boxCollider.height
      };
      this.playerBox = {
        x1: this.player.body.boxCollider.x,
        x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
        y1: this.player.body.boxCollider.y,
        y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height
      };
    }
  }, {
    key: "update",
    value: function update() {
      this.selfBox = {
        x1: this.body.boxCollider.x,
        x2: this.body.boxCollider.x + this.body.boxCollider.width,
        y1: this.body.boxCollider.y,
        y2: this.body.boxCollider.y + this.body.boxCollider.height
      };
      this.playerBox = {
        x1: this.player.body.boxCollider.x,
        x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
        y1: this.player.body.boxCollider.y,
        y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height
      };
      if (this.collision.intersect(this.playerBox, this.range)) this.target = this.player;else this.target = null;
    }
  }, {
    key: "hit",
    value: function hit(direction) {
      switch (direction) {
        case "up":
          this.player.body.y -= 20;
          break;

        case "right":
          this.player.body.x += 20;
          break;

        case "down":
          this.player.body.y += 20;
          break;

        case "left":
          this.player.body.x -= 20;
          break;
      }
    }
  }, {
    key: "attack",
    value: function attack(direction) {
      --this.player.healthPoint;
      this.hit(direction);
    }
  }]);

  return EnemyAttackController;
}();

/***/ }),

/***/ "./src/enemy/controllers/enemyController.js":
/*!**************************************************!*\
  !*** ./src/enemy/controllers/enemyController.js ***!
  \**************************************************/
/*! exports provided: EnemyController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyController", function() { return EnemyController; });
/* harmony import */ var _bodies_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bodies/animation */ "./src/bodies/animation.js");
/* harmony import */ var _moveController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveController */ "./src/enemy/controllers/moveController.js");
/* harmony import */ var _attackController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attackController */ "./src/enemy/controllers/attackController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var EnemyController = /*#__PURE__*/function () {
  function EnemyController(enemy, prop) {
    _classCallCheck(this, EnemyController);

    this.enemy = enemy;
    this.attackController = new _attackController__WEBPACK_IMPORTED_MODULE_2__["EnemyAttackController"](this.enemy.rangeZone, this.enemy.body);
    this.moveController = new _moveController__WEBPACK_IMPORTED_MODULE_1__["EnemyMoveController"](this.enemy.body, this.attackController, prop.moveController);
    this.animationController = new _bodies_animation__WEBPACK_IMPORTED_MODULE_0__["BodyAnimation"](this.enemy.view, this.moveController);
  }

  _createClass(EnemyController, [{
    key: "init",
    value: function init(player, collision) {
      this.attackController.init(player, collision);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.moveController.update();
      this.animationController.update(time);
      this.attackController.update();
    }
  }]);

  return EnemyController;
}();

/***/ }),

/***/ "./src/enemy/controllers/moveController.js":
/*!*************************************************!*\
  !*** ./src/enemy/controllers/moveController.js ***!
  \*************************************************/
/*! exports provided: EnemyMoveController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyMoveController", function() { return EnemyMoveController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyMoveController = /*#__PURE__*/function () {
  function EnemyMoveController(body, attackController, prop) {
    _classCallCheck(this, EnemyMoveController);

    this.body = body;
    this.attackController = attackController;
    this.currentMovePointIndex = 0;
    (this.movePoints = prop.movePoints) && (this.currentMovePoint = this.movePoints[this.currentMovePointIndex]);
    this.isMove = true;
    this.direction = "down";
  }

  _createClass(EnemyMoveController, [{
    key: "update",
    value: function update() {
      if (this.isStrictStopped) return;

      if (this.attackController.target) {
        this.start();

        if (this.attackController.collision.intersect(this.attackController.playerBox, this.attackController.selfBox)) {
          this.attackController.attack(this.direction);
          this.strictStop(1000);
        }
      }

      if (!this.isMove || !this.movePoints) return;
      if (this.body.x != this.currentMovePoint.x || this.body.y != this.currentMovePoint.y) this.move();else if (this.currentMovePointIndex < this.movePoints.length - 1) {
        this.currentMovePoint = this.movePoints[++this.currentMovePointIndex];
        this.currentMovePoint.isStop && this.stop(this.currentMovePoint.stopTime);
      } else this.moveRotate();
    }
  }, {
    key: "start",
    value: function start() {
      !this.isStrictStopped && (this.isMove = true);
    }
  }, {
    key: "stop",
    value: function stop(time) {
      var _this = this;

      this.isMove = false;
      setTimeout(function () {
        _this.isStrictStopped = false;

        _this.start();
      }, time);
    }
  }, {
    key: "strictStop",
    value: function strictStop(time) {
      this.isStrictStopped = true;
      this.stop(time);
    }
  }, {
    key: "moveRotate",
    value: function moveRotate() {
      this.movePoints = this.movePoints.reverse();
      this.currentMovePointIndex = 0;
      this.currentMovePoint = this.movePoints[this.currentMovePointIndex];
      if (this.currentMovePoint.isStop) this.stop();
    }
  }, {
    key: "move",
    value: function move() {
      var a = this.body,
          b = this.attackController.target ? {
        x: this.attackController.target.body.x,
        y: this.attackController.target.body.y
      } : this.currentMovePoint;
      if (a.y > b.y) this.moveUp();
      if (a.x < b.x) this.moveRight();
      if (a.y < b.y) this.moveDown();
      if (a.x > b.x) this.moveLeft();
    }
  }, {
    key: "movePointsReset",
    value: function movePointsReset() {
      this.movePoints.forEach(function (point) {
        return point.isPassed = false;
      });
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.body.y -= this.body.moveSpeed;
      this.direction = "up";
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.body.x += this.body.moveSpeed;
      this.direction = "right";
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.body.y += this.body.moveSpeed;
      this.direction = "down";
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.body.x -= this.body.moveSpeed;
      this.direction = "left";
    }
  }]);

  return EnemyMoveController;
}();

/***/ }),

/***/ "./src/enemy/enemy.js":
/*!****************************!*\
  !*** ./src/enemy/enemy.js ***!
  \****************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _bodies_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bodies/character */ "./src/bodies/character.js");
/* harmony import */ var _rangeZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rangeZone */ "./src/enemy/rangeZone.js");
/* harmony import */ var _controllers_enemyController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/enemyController */ "./src/enemy/controllers/enemyController.js");
/* harmony import */ var _enemyBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemyBody */ "./src/enemy/enemyBody.js");
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





var Enemy = /*#__PURE__*/function (_Character) {
  _inherits(Enemy, _Character);

  var _super = _createSuper(Enemy);

  function Enemy(prop) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, prop);
    _this.body = new _enemyBody__WEBPACK_IMPORTED_MODULE_3__["EnemyBody"](prop.body);
    _this.name = prop.name;
    _this.rangeZone = new _rangeZone__WEBPACK_IMPORTED_MODULE_1__["EnemyRangeZone"](_this.body, prop.rangeZone);
    _this.controller = new _controllers_enemyController__WEBPACK_IMPORTED_MODULE_2__["EnemyController"](_assertThisInitialized(_this), prop.controller);
    return _this;
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init(player, collision) {
      _get(_getPrototypeOf(Enemy.prototype), "init", this).call(this);

      this.rangeZone.init();
      this.controller.init(player, collision);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.controller.update(time);

      _get(_getPrototypeOf(Enemy.prototype), "update", this).call(this);

      this.body.moveSpeed = this.controller.attackController.target ? this.body.aggressiveSpeed : this.body.defaultSpeed;
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      _get(_getPrototypeOf(Enemy.prototype), "render", this).call(this, time, screen);

      this.rangeZone.render(time, screen);
    }
  }]);

  return Enemy;
}(_bodies_character__WEBPACK_IMPORTED_MODULE_0__["Character"]);

/***/ }),

/***/ "./src/enemy/enemyBody.js":
/*!********************************!*\
  !*** ./src/enemy/enemyBody.js ***!
  \********************************/
/*! exports provided: EnemyBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyBody", function() { return EnemyBody; });
/* harmony import */ var _bodies_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bodies/body */ "./src/bodies/body.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var EnemyBody = /*#__PURE__*/function (_Body) {
  _inherits(EnemyBody, _Body);

  var _super = _createSuper(EnemyBody);

  function EnemyBody(prop) {
    var _this;

    _classCallCheck(this, EnemyBody);

    _this = _super.call(this, prop);
    _this.moveSpeed = prop.defaultSpeed;
    _this.defaultSpeed = prop.defaultSpeed;
    _this.aggressiveSpeed = prop.aggressiveSpeed;
    return _this;
  }

  return EnemyBody;
}(_bodies_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/enemy/rangeZone.js":
/*!********************************!*\
  !*** ./src/enemy/rangeZone.js ***!
  \********************************/
/*! exports provided: EnemyRangeZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyRangeZone", function() { return EnemyRangeZone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyRangeZone = /*#__PURE__*/function () {
  function EnemyRangeZone(body, prop) {
    _classCallCheck(this, EnemyRangeZone);

    this.body = body;
    this.up = prop.up;
    this.right = prop.right;
    this.down = prop.down;
    this.left = prop.left;
  }

  _createClass(EnemyRangeZone, [{
    key: "setPosition",
    value: function setPosition() {
      this.x1 = this.body.x - this.left;
      this.x2 = this.body.x + this.body.width + this.right;
      this.y1 = this.body.y - this.up;
      this.y2 = this.body.y + this.body.height + this.down;
    }
  }, {
    key: "init",
    value: function init() {
      this.setPosition();
    }
  }, {
    key: "update",
    value: function update() {
      this.setPosition();
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
      screen.strokeRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }
  }]);

  return EnemyRangeZone;
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
/* harmony import */ var _view_scene_level_level_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/scene/level/level_2 */ "./src/view/scene/level/level_2.js");
/* harmony import */ var _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/gameCtrl */ "./src/controllers/gameCtrl.js");
/* harmony import */ var _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/sceneCtrl */ "./src/controllers/sceneCtrl.js");
/* harmony import */ var _controllers_fpsController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/fpsController */ "./src/controllers/fpsController.js");
/* harmony import */ var _physic_collision__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./physic/collision */ "./src/physic/collision.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _game_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game.json */ "./src/game.json");
var _game_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./game.json */ "./src/game.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.name = _game_json__WEBPACK_IMPORTED_MODULE_10__.name;
    this.isRunning = false;
    this.screen = new _view_screen_screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](_game_json__WEBPACK_IMPORTED_MODULE_10__.screen);
    this.controller = new _controllers_gameCtrl__WEBPACK_IMPORTED_MODULE_5__["GameController"]();
    this.player = new _player_player__WEBPACK_IMPORTED_MODULE_9__["Player"](_game_json__WEBPACK_IMPORTED_MODULE_10__.player);
    this.collision = new _physic_collision__WEBPACK_IMPORTED_MODULE_8__["Collision"]();
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.screen.init();
      this.player.init();
      this.controller.add(new _controllers_sceneCtrl__WEBPACK_IMPORTED_MODULE_6__["SceneController"]({
        scenes: {
          loading: new _view_scene_loading__WEBPACK_IMPORTED_MODULE_1__["LoadingScene"]({
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_10__.scenes.loading
          }),
          startMenu: new _view_scene_menu_start__WEBPACK_IMPORTED_MODULE_2__["StartMenu"]({
            screen: this.screen,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_10__.scenes.startMenu
          }),
          level_1: new _view_scene_level_level_1__WEBPACK_IMPORTED_MODULE_3__["Level_1"]({
            player: this.player,
            screen: this.screen,
            collision: this.collision,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_10__.scenes.level_1
          }) // level_2:   new Level_2({ player: this.player, screen: this.screen, collision: this.collision, prop: gameJSON.scenes.level_2 })

        }
      }), new _controllers_fpsController__WEBPACK_IMPORTED_MODULE_7__["FPSController"](_game_json__WEBPACK_IMPORTED_MODULE_10__.fpsController));
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

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}},\"level_1\":{\"mapSpriteSheet\":{\"name\":\"level_1MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"mapData\":{\"name\":\"map_1\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"test.json\"}},\"height\":10,\"infinite\":false,\"layers\":[{\"data\":[7,13,14,13,14,13,14,13,14,7,7,17,18,19,20,17,18,19,20,7,7,27,28,29,30,27,28,29,30,7,7,37,38,39,40,37,38,39,40,7,7,17,18,7,7,7,7,19,20,7,7,27,28,7,7,7,7,29,30,7,7,37,38,7,7,7,7,39,40,7,7,29,38,39,40,37,38,39,40,7,7,39,18,19,20,17,18,19,20,7,7,7,7,7,7,7,7,7,7,7],\"height\":10,\"id\":1,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[1,3,3,2,3,4,5,71,4,26,11,0,0,0,0,0,0,16,0,36,21,0,0,2,3,4,5,81,0,46,31,0,0,0,0,0,0,0,0,26,41,0,0,61,65,65,66,0,0,36,1,0,0,26,0,0,21,0,0,46,11,0,0,36,0,0,31,0,0,26,21,0,0,2,73,72,5,0,0,36,31,0,0,0,41,0,0,0,0,46,51,52,53,54,55,52,53,54,55,56],\"height\":10,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[0,68,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0],\"height\":10,\"id\":4,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2},{\"name\":\"entryPoint-index\",\"type\":\"int\",\"value\":77},{\"name\":\"outPoint-index\",\"type\":\"int\",\"value\":66}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":214.332666666667,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":258.667,\"x\":190.667,\"y\":296.333333333333},{\"height\":21.5,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":276,\"x\":192,\"y\":167.5},{\"height\":129.333,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17.3333,\"x\":450.667,\"y\":41.3333},{\"height\":588,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":41.3333,\"y\":40},{\"height\":15.2727272727273,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":557.333,\"x\":41.3333,\"y\":611.393272727273},{\"height\":583.667,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":574.667,\"y\":40.3333},{\"height\":22.9999333333333,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":538,\"x\":43.333,\"y\":39.6666666666667},{\"height\":114,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":296,\"y\":508}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":13,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":10},\"enemies\":[{\"rangeZone\":{\"up\":64,\"right\":64,\"down\":64,\"left\":64},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":400,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":450,\"isStop\":true,\"stopTime\":3000},{\"x\":450,\"y\":450,\"isStop\":false},{\"x\":450,\"y\":200,\"isStop\":false},{\"x\":500,\"y\":200,\"isStop\":true,\"stopTime\":3000}]}}},{\"rangeZone\":{\"up\":64,\"right\":64,\"down\":64,\"left\":64},\"name\":\"Enemy_2\",\"body\":{\"x\":100,\"y\":300,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":200,\"y\":520,\"isStop\":false},{\"x\":100,\"y\":520,\"isStop\":true,\"stopTime\":3000}]}}}]},\"level_2\":{\"mapData\":{\"name\":\"map_2\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"map_2.json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"id\":1,\"name\":\"background\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,15,0,0,29,17,18,28,20,17,18,19,20,17,18,19,20,17,18,19,20,25,0,0,29,27,33,93,14,14,13,14,14,13,14,14,13,14,14,29,30,35,0,0,23,37,38,39,40,25,38,39,40,40,38,39,40,37,38,39,40,25,0,0,13,13,14,14,15,35,13,14,40,40,13,14,0,0,0,0,20,35,0,0,28,27,28,29,25,0,28,29,30,27,28,29,0,0,0,0,30,25,0,0,25,0,0,0,0,0,38,39,40,37,38,39,0,0,0,0,40,35,0,0,35,0,0,0,0,0,0,0,20,25,0,0,0,0,0,0,20,25,0,0,35,0,0,0,0,0,0,0,30,25,0,0,0,0,0,0,30,35,0,0,25,0,0,0,0,0,38,39,28,25,38,39,0,0,0,0,40,25,0,0,35,17,18,19,20,0,13,14,20,17,13,14,0,0,0,0,20,35,0,0,18,13,14,13,14,0,29,29,30,27,28,29,0,0,0,0,30,25,0,0,28,37,38,39,35,0,39,39,40,37,38,39,0,0,0,0,40,35,0,0,38,17,25,19,20,17,19,19,20,17,18,19,20,17,18,0,20,25,0,0,18,27,35,13,13,15,28,29,17,17,28,29,13,14,13,14,39,35,0,0,28,37,25,39,40,37,13,14,17,17,13,14,40,37,38,39,30,25,0,0,38,27,35,29,30,17,18,19,20,37,38,39,40,27,28,29,30,35,0,0,29,27,27,13,14,13,14,13,14,13,14,13,14,14,14,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":3,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,2,3,4,5,2,2,2,3,4,5,3,4,5,2,3,2,3,4,6,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,21,0,0,0,83,3,2,3,4,5,2,3,4,5,5,73,0,0,0,26,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,41,2,3,4,72,73,0,71,72,0,0,72,73,0,0,11,0,0,0,6,1,0,0,0,0,11,0,16,0,0,0,0,11,54,62,63,64,16,0,16,11,0,0,0,0,21,53,26,0,0,0,0,1,0,0,0,0,26,0,26,21,0,61,62,63,64,0,36,0,0,0,0,11,0,0,0,0,36,0,36,31,0,36,0,0,0,0,62,66,0,0,61,62,0,0,0,0,46,0,46,41,0,46,0,0,0,0,0,41,0,0,46,0,0,0,0,0,6,0,6,1,0,46,0,0,0,0,71,4,0,0,4,73,0,0,0,0,16,0,16,11,0,72,72,72,73,0,6,0,0,0,0,11,0,0,0,0,26,0,26,21,0,0,0,0,21,0,16,0,0,0,0,21,0,0,0,0,36,0,36,31,0,0,0,0,31,0,26,0,0,0,0,31,0,0,0,0,46,0,46,41,0,0,0,71,4,5,36,0,0,0,0,11,3,4,73,0,46,0,6,11,0,0,0,26,0,0,2,3,0,0,3,2,0,0,31,4,81,0,16,21,0,0,0,36,0,0,0,0,0,0,0,0,0,0,41,0,0,0,26,31,0,0,0,3,4,5,2,3,4,5,2,3,2,3,4,0,0,0,36,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,51,52,53,54,55,52,53,54,55,52,53,54,55,52,53,54,55,54,55,56],\"height\":20,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":5,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":3}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"colliderBoxes\",\"objects\":[{\"height\":23,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1173.33,\"x\":42,\"y\":39},{\"height\":1230.36696969697,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":1215.33,\"y\":37.6969663636364},{\"height\":12.3333,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1148,\"x\":65.3333,\"y\":1253},{\"height\":1230.36696969697,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":40.6667,\"y\":37.0303033636364},{\"height\":29.3333666666667,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":300.667,\"x\":61.3333,\"y\":293.333},{\"height\":273,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":232,\"x\":128.666,\"y\":489.667},{\"height\":645.999666666667,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":360.667,\"y\":293.333333333333},{\"height\":191.667,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":256.667,\"y\":936.333},{\"height\":22.6667,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":170,\"x\":276.667,\"y\":935.333},{\"height\":20.6667,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":767.333,\"x\":256.667,\"y\":1128.67},{\"height\":23.3333,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125.667,\"x\":705.667,\"y\":999.667},{\"height\":709.333333333333,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":808.667,\"y\":294.666666666667},{\"height\":147.666333333333,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127.666633333333,\"x\":703.667,\"y\":555.333666666667},{\"height\":24.3332966666667,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126.666,\"x\":703.667,\"y\":294.833},{\"height\":24.3333,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.167,\"x\":448,\"y\":294.833},{\"height\":280.667,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":448,\"y\":295},{\"height\":149.667,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.333366666667,\"x\":447.000333333333,\"y\":556.333},{\"height\":23.6667,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":447.667,\"y\":999.333},{\"height\":332.667,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":447.333,\"y\":669},{\"height\":29.3333,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63.5,\"x\":384,\"y\":418.667},{\"height\":594.5,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":163,\"x\":832,\"y\":361},{\"height\":977.625,\"id\":45,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":998.5,\"y\":166.375},{\"height\":24.1087,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":700.978,\"x\":298.022,\"y\":165.391},{\"height\":659.636363636364,\"id\":48,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":83,\"x\":1027.5,\"y\":359.363636363636}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":54,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20},\"mapSpriteSheet\":{\"name\":\"level_2_MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"enemies\":[{\"rangeZone\":{\"up\":128,\"right\":64,\"down\":128,\"left\":64},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":400,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":1,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":450,\"isStop\":true,\"stopTime\":3000},{\"x\":450,\"y\":450,\"isStop\":false},{\"x\":450,\"y\":200,\"isStop\":false},{\"x\":500,\"y\":200,\"isStop\":true,\"stopTime\":3000}]}}}]}}}");

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
  function Collision(bodies) {
    _classCallCheck(this, Collision);

    this.colliders = [];
    this.bodies = bodies || [];
  }

  _createClass(Collision, [{
    key: "update",
    value: function update() {
      var _this = this;

      this.bodies.forEach(function (body) {
        _this.colliders.forEach(function (collider) {
          if (_this.intersect(body, collider)) _this.outCollider(body, collider);
        });
      });
    }
  }, {
    key: "outCollider",
    value: function outCollider(body, collider) {
      var box = {
        _x: body.boxCollider._x,
        _y: body.boxCollider._y,
        x1: body.boxCollider.x,
        x2: body.boxCollider.x + body.boxCollider.width,
        y1: body.boxCollider.y,
        y2: body.boxCollider.y + body.boxCollider.height,
        width: body.boxCollider.width,
        height: body.boxCollider.height
      };
      var min = Math.min(Math.abs(collider.x1 - box.x2), Math.abs(collider.x2 - box.x1), Math.abs(collider.y1 - box.y2), Math.abs(collider.y2 - box.y1));

      switch (min) {
        case Math.abs(collider.x1 - box.x2):
          body.x = Math.floor(collider.x1 - body.width + box._x);
          break;

        case Math.abs(collider.x2 - box.x1):
          body.x = Math.ceil(collider.x2 - box._x + 2);
          break;

        case Math.abs(collider.y1 - box.y2):
          body.y = Math.floor(collider.y1 - body.height - 2);
          break;

        case Math.abs(collider.y2 - box.y1):
          body.y = Math.ceil(collider.y2 - box._y + 2);
          break;
      }
    }
  }, {
    key: "intersect",
    value: function intersect(body, collider) {
      var box = {
        x1: body.x1 || body.boxCollider.x,
        x2: body.x2 || body.boxCollider.x + body.boxCollider.width,
        y1: body.y1 || body.boxCollider.y,
        y2: body.y2 || body.boxCollider.y + body.boxCollider.height
      };
      return box.x2 > collider.x1 && box.x1 < collider.x1 && box.y2 > collider.y1 && box.y1 < collider.y2 || box.x1 < collider.x2 && box.x2 > collider.x2 && box.y2 > collider.y1 && box.y1 < collider.y2 || box.y2 > collider.y1 && box.y1 < collider.y1 && box.x2 > collider.x1 && box.x1 < collider.x2 || box.y1 < collider.y2 && box.y2 > collider.y2 && box.x2 > collider.x1 && box.x1 < collider.x2 || box.x1 >= collider.x1 && box.x2 <= collider.x2 && box.y1 >= collider.y1 && box.y2 <= collider.y2;
    }
  }]);

  return Collision;
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
/* harmony import */ var _bodies_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bodies/animation */ "./src/bodies/animation.js");
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
    this.animationController = new _bodies_animation__WEBPACK_IMPORTED_MODULE_2__["BodyAnimation"](this.player.view, this.moveController);
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
/* harmony import */ var _controllers_playerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/playerController */ "./src/player/controllers/playerController.js");
/* harmony import */ var _bodies_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bodies/character */ "./src/bodies/character.js");
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



var Player = /*#__PURE__*/function (_Character) {
  _inherits(Player, _Character);

  var _super = _createSuper(Player);

  function Player(prop) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, prop);
    _this.name = prop.name;
    _this.healthPoint = 3;
    _this.controller = new _controllers_playerController__WEBPACK_IMPORTED_MODULE_0__["PlayerController"]({
      player: _assertThisInitialized(_this),
      prop: prop.controller
    });
    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(time) {
      this.controller.update(time);

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this);
    }
  }]);

  return Player;
}(_bodies_character__WEBPACK_IMPORTED_MODULE_1__["Character"]);

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
  function Map(prop, collision) {
    _classCallCheck(this, Map);

    this.collision = collision;
    this.data = prop.mapData;
    this.name = this.data.name;
    this.width = this.data.width * this.data.tilewidth;
    this.height = this.data.height * this.data.tileheight;
    this.tileSet = new _view_picture_spriteSheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"](prop.mapSpriteSheet);
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
            if (layer.name == "wall") {
              _this2.collision.bodies.forEach(function (body) {
                var isIntersect = _this2.collision.intersect(body, {
                  x1: _this2.tileSet.spriteWidth * col,
                  x2: _this2.tileSet.spriteWidth * col + _this2.tileSet.spriteWidth,
                  y1: _this2.tileSet.spriteHeight * row,
                  y2: _this2.tileSet.spriteHeight * row + _this2.tileSet.spriteHeight / 2
                });

                if (isIntersect) _this2.upperLayer.push({
                  sprite: _this2.tileSet.getSprite(index),
                  x: _this2.tileSet.spriteWidth * col,
                  y: _this2.tileSet.spriteHeight * row
                });else screen.drawSprite(_this2.tileSet.getSprite(index), _this2.tileSet.spriteWidth * col, _this2.tileSet.spriteHeight * row);
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
/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enemy/enemy */ "./src/enemy/enemy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
        prop = _ref.prop,
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
    _this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["Map"](prop, collision);
    _this.player = player;
    _this.enemies = prop.enemies.map(function (enemy) {
      return new _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](enemy);
    });
    _this.collision = collision;
    return _this;
  }

  _createClass(Level, [{
    key: "init",
    value: function init() {
      var _this2 = this,
          _this$collision$bodie;

      this.map.init();
      this.player.controller.start();
      this.enemies.forEach(function (enemy) {
        return enemy.init(_this2.player, _this2.collision);
      });

      (_this$collision$bodie = this.collision.bodies).push.apply(_this$collision$bodie, [this.player.body].concat(_toConsumableArray(this.enemies.map(function (enemy) {
        return enemy.body;
      }))));

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
      var _this3 = this;

      this.update(time);
      this.map.render(this.screen);
      this.enemies.forEach(function (enemy) {
        return enemy.render(time, _this3.screen);
      });
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
      prop: prop,
      collision: collision,
      parent: parent,
      next: next
    });
  }

  return Level_1;
}(_level__WEBPACK_IMPORTED_MODULE_0__["Level"]);

/***/ }),

/***/ "./src/view/scene/level/level_2.js":
/*!*****************************************!*\
  !*** ./src/view/scene/level/level_2.js ***!
  \*****************************************/
/*! exports provided: Level_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level_2", function() { return Level_2; });
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


var Level_2 = /*#__PURE__*/function (_Level) {
  _inherits(Level_2, _Level);

  var _super = _createSuper(Level_2);

  function Level_2(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "level_2" : _ref$name,
        screen = _ref.screen,
        collision = _ref.collision,
        player = _ref.player,
        prop = _ref.prop,
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? "none" : _ref$parent,
        _ref$next = _ref.next,
        next = _ref$next === void 0 ? "none" : _ref$next;

    _classCallCheck(this, Level_2);

    return _super.call(this, {
      name: name,
      screen: screen,
      player: player,
      prop: prop,
      collision: collision,
      parent: parent,
      next: next
    });
  }

  return Level_2;
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
      var spriteX = x;
      var spriteY = y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      }

      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) return;
      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      var width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      sprite.image && this.canvas.context.drawImage(sprite.image, sourceX, sourceY, width, height, Math.max(0, spriteX), Math.max(0, spriteY), width, height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9ib2RpZXMvYm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9mcHNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9nYW1lQ3RybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvc2NlbmVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9hdHRhY2tDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9lbmVteUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW15L2NvbnRyb2xsZXJzL21vdmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkvZW5lbXlCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9yYW5nZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9pZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BoeXNpYy9jb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9rZXlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMvbW92ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9wbGF5ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL2xhYmVsQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xldmVsL2xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xldmVsL2xldmVsXzEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbGV2ZWwvbGV2ZWxfMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL21lbnUvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NyZWVuL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY3JlZW4vc2NyZWVuLmpzIl0sIm5hbWVzIjpbIkJvZHlBbmltYXRpb24iLCJ2aWV3IiwibW92ZUNvbnRyb2xsZXIiLCJ0aW1lIiwic2V0QW5pbWF0aW9uIiwiaXNNb3ZlIiwiZGlyZWN0aW9uIiwiYW5pbWF0aW9uIiwidXBkYXRlIiwiQm9keSIsInByb3AiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZVNwZWVkIiwidmlzaWJsZSIsImJveENvbGxpZGVyIiwiQm94Q29sbGlkZXIiLCJfeCIsIl95Iiwic2NyZWVuIiwic3Ryb2tlUmVjdCIsInJlbmRlciIsIkNoYXJhY3RlciIsIm5hbWUiLCJib2R5IiwiVmlldyIsImluaXQiLCJkcmF3U3ByaXRlIiwiZ2V0U3ByaXRlIiwic3ByaXRlU2hlZXQiLCJTcHJpdGVTaGVldCIsImFuaW1hdGlvbkxpc3QiLCJ0ZW1wQW5pbWF0aW9uUHJvcCIsImZvckVhY2giLCJTcHJpdGVBbmltYXRpb24iLCJmcmFtZURlbGF5IiwiaW5kaWNlcyIsInJlcGVhdCIsImF1dG9ydW4iLCJydW4iLCJhbmltYXRpb25OYW1lIiwic3RvcCIsImN1cnJlbnRGcmFtZUluZGV4IiwiRlBTQ29udHJvbGxlciIsImZwcyIsIl9mcHMiLCJmcmFtZVRpbWUiLCJfX2xhYmVsX18iLCJMYWJlbCIsImxhYmVsIiwiTWF0aCIsInRydW5jIiwidGV4dCIsImRyYXdMYWJlbCIsIkdhbWVDb250cm9sbGVyIiwibGVuZ3RoIiwic2NlbmVDb250cm9sbGVyIiwiY3VycmVudFNjZW5lIiwiZnBzQ29udHJvbGxlciIsImNvbnRyb2xsZXJzIiwiY3RybCIsIkVycm9yIiwiY29udHJvbGxlck5hbWUiLCJTY2VuZUNvbnRyb2xsZXIiLCJzY2VuZXMiLCJzY2VuZSIsImlzSW5pdGlhbGl6ZWQiLCJsb2FkaW5nIiwic2V0U2NlbmUiLCJzY2VuZU5hbWUiLCJzdGFydCIsInN0YXR1cyIsInNwbGljZSIsImZpbmRJbmRleCIsImVsIiwibmV4dCIsInBhcmVudCIsIkVuZW15QXR0YWNrQ29udHJvbGxlciIsInJhbmdlIiwidGFyZ2V0IiwicGxheWVyIiwiY29sbGlzaW9uIiwic2VsZkJveCIsIngxIiwieDIiLCJ5MSIsInkyIiwicGxheWVyQm94IiwiaW50ZXJzZWN0IiwiaGVhbHRoUG9pbnQiLCJoaXQiLCJFbmVteUNvbnRyb2xsZXIiLCJlbmVteSIsImF0dGFja0NvbnRyb2xsZXIiLCJyYW5nZVpvbmUiLCJFbmVteU1vdmVDb250cm9sbGVyIiwiYW5pbWF0aW9uQ29udHJvbGxlciIsImN1cnJlbnRNb3ZlUG9pbnRJbmRleCIsIm1vdmVQb2ludHMiLCJjdXJyZW50TW92ZVBvaW50IiwiaXNTdHJpY3RTdG9wcGVkIiwiYXR0YWNrIiwic3RyaWN0U3RvcCIsIm1vdmUiLCJpc1N0b3AiLCJzdG9wVGltZSIsIm1vdmVSb3RhdGUiLCJzZXRUaW1lb3V0IiwicmV2ZXJzZSIsImEiLCJiIiwibW92ZVVwIiwibW92ZVJpZ2h0IiwibW92ZURvd24iLCJtb3ZlTGVmdCIsInBvaW50IiwiaXNQYXNzZWQiLCJFbmVteSIsIkVuZW15Qm9keSIsIkVuZW15UmFuZ2Vab25lIiwiY29udHJvbGxlciIsImFnZ3Jlc3NpdmVTcGVlZCIsImRlZmF1bHRTcGVlZCIsInVwIiwicmlnaHQiLCJkb3duIiwibGVmdCIsInNldFBvc2l0aW9uIiwiR2FtZSIsImdhbWVKU09OIiwiaXNSdW5uaW5nIiwiU2NyZWVuIiwiUGxheWVyIiwiQ29sbGlzaW9uIiwiYWRkIiwiTG9hZGluZ1NjZW5lIiwic3RhcnRNZW51IiwiU3RhcnRNZW51IiwibGV2ZWxfMSIsIkxldmVsXzEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkJ1dHRvbiIsImJnY29sb3IiLCJjb2xvcnMiLCJsYWJlbFByb3AiLCJhbmltYXRlZCIsImFuaW1hdGlvblByb3AiLCJ1bmRlZmluZWQiLCJpc01vdXNlRG93biIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJmdW5jdGlvbnMiLCJfbGlzdGVuZXJNb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lck1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZUNsaWNrIiwibW91c2VDbGlja0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhd0J1dHRvbiIsIklFbGVtZW50IiwiX2FuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsIm5ld1giLCJuZXdZIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiTGFiZWxBbmltYXRpb24iLCJ0ZXh0Q29sbGVjdGlvbiIsIlRpbGUiLCJvcHRpb25zIiwiX19vcHRpb25zX18iLCJmb2ciLCJmaWxsIiwid2luZG93Iiwib25sb2FkIiwiZ2FtZSIsImJvZGllcyIsImNvbGxpZGVycyIsImNvbGxpZGVyIiwib3V0Q29sbGlkZXIiLCJib3giLCJtaW4iLCJhYnMiLCJmbG9vciIsImNlaWwiLCJQbGF5ZXJLZXlDb250cm9sbGVyIiwia2V5cyIsIktleVciLCJjb2RlIiwiaXNEb3duIiwiS2V5RCIsIktleVMiLCJLZXlBIiwiQXJyb3dVcCIsIkFycm93UmlnaHQiLCJBcnJvd0Rvd24iLCJBcnJvd0xlZnQiLCJTcGFjZSIsImlzS2V5RG93biIsInN0YXJ0RXZlbnRMaXN0ZW4iLCJzdG9wRXZlbnRMaXN0ZW4iLCJfbGlzdGVuZXJLZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJiaW5kIiwiX2xpc3RlbmVyS2V5VXAiLCJrZXlVcEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIlBsYXllck1vdmVDb250cm9sbGVyIiwia2V5Q29udHJvbGxlciIsIlBsYXllckNvbnRyb2xsZXIiLCJBbmltYXRpb24iLCJsYXN0RnJhbWVUaW1lIiwibmV4dEZyYW1lIiwiY3VycmVudFRleHRJbmRleCIsImZyYW1lcyIsImdldEZyYW1lcyIsIm1hcCIsImluZGV4Iiwic291cmNlWCIsImdldFNvdXJjZVgiLCJzb3VyY2VZIiwiZ2V0U291cmNlWSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1heCIsIk1hcCIsImRhdGEiLCJtYXBEYXRhIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsInRpbGVTZXQiLCJtYXBTcHJpdGVTaGVldCIsInJvdyIsImNvbHVtbiIsImxheWVycyIsImRlZmF1bHRMYXllciIsInVwcGVyTGF5ZXIiLCJjcmVhdGVMYXllcnMiLCJsYXllciIsInR5cGUiLCJwdXNoIiwiaW5kZXhlcyIsInpfaW5kZXgiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJvYmplY3RzIiwiaXRlbSIsInNvcnQiLCJ0aWxlIiwic3ByaXRlIiwiY29sIiwiaXNJbnRlcnNlY3QiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsInNyYyIsImltYWdlIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsIl9sb2FkIiwidGhlbiIsImVycm9yIiwiTGV2ZWwiLCJlbmVtaWVzIiwiY2FtZXJhIiwid2F0Y2giLCJzZXRDYW1lcmEiLCJzZWNvbmRSZW5kZXIiLCJTY2VuZSIsIkxldmVsXzIiLCJpZWxlbWVudHMiLCJiYWNrZ3JvdW5kIiwiZGlzayIsInJhbmRvbSIsInBsYXlCdXR0b24iLCJfX2luX18iLCJkb2N1bWVudCIsInN0eWxlIiwiY3Vyc29yIiwiY2xpY2siLCJob3ZlciIsImFkZExpc3RlbmVycyIsImNhbnZhcyIsIkRPTSIsInJlbW92ZUxpc3RlbmVycyIsImllIiwiQ2FudmFzIiwiZGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29udGV4dCIsImdldENvbnRleHQiLCJpc0NhbWVyYVNldCIsImJ1dHRvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9udCIsImZpbGxUZXh0IiwiZHJhd0ltYWdlIiwic3ByaXRlWCIsInNwcml0ZVkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FB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TUFBZCxFQUFzQmlULE9BQU8sR0FBR3hELE1BQU0sQ0FBQ3pQLE1BQXZDLElBQWlEc0MsSUFBSSxDQUFDMEwsR0FBTCxDQUFTLENBQVQsRUFBWWlGLE9BQVosQ0FBOUQ7QUFFQXhELFlBQU0sQ0FBQ00sS0FBUCxJQUFnQixLQUFLNkIsTUFBTCxDQUFZVyxPQUFaLENBQW9CUSxTQUFwQixDQUNadEQsTUFBTSxDQUFDTSxLQURLLEVBRVp6QyxPQUZZLEVBRUhFLE9BRkcsRUFHWnpOLEtBSFksRUFHTEMsTUFISyxFQUlac0MsSUFBSSxDQUFDMEwsR0FBTCxDQUFTLENBQVQsRUFBWWdGLE9BQVosQ0FKWSxFQUlVMVEsSUFBSSxDQUFDMEwsR0FBTCxDQUFTLENBQVQsRUFBWWlGLE9BQVosQ0FKVixFQUtabFQsS0FMWSxFQUtMQyxNQUxLLENBQWhCO0FBT0g7QUEvREw7QUFBQTtBQUFBLCtCQWlFZUgsQ0FqRWYsRUFpRWtCQyxDQWpFbEIsRUFpRXFCQyxLQWpFckIsRUFpRTRCQyxNQWpFNUIsRUFpRW9DO0FBQzVCLFdBQUs0UixNQUFMLENBQVlXLE9BQVosQ0FBb0IvUixVQUFwQixDQUErQlgsQ0FBL0IsRUFBa0NDLENBQWxDLEVBQXFDQyxLQUFyQyxFQUE0Q0MsTUFBNUM7QUFDSDtBQW5FTDtBQUFBO0FBQUEseUJBcUVTOEosS0FyRVQsRUFxRWdCO0FBQ1IsV0FBSzhILE1BQUwsQ0FBWVcsT0FBWixDQUFvQkksU0FBcEIsR0FBZ0M3SSxLQUFoQztBQUNBLFdBQUs4SCxNQUFMLENBQVlXLE9BQVosQ0FBb0JLLFFBQXBCLENBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLEtBQUs3UyxLQUF4QyxFQUErQyxLQUFLQyxNQUFwRDtBQUNIO0FBeEVMOztBQUFBO0FBQUEsSSIsImZpbGUiOiIuL2pzL2t4cmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjbGFzcyBCb2R5QW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vdmVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbW92ZUNvbnRyb2xsZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldEFuaW1hdGlvbiggKHRoaXMubW92ZUNvbnRyb2xsZXIuaXNNb3ZlID8gXCJ3YWxrLVwiIDogXCJpZGxlLVwiKSArIHRoaXMubW92ZUNvbnRyb2xsZXIuZGlyZWN0aW9uICk7XHJcbiAgICAgICAgdGhpcy52aWV3LmFuaW1hdGlvbi51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCIuL2JveENvbGxpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9keSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcHJvcC54O1xyXG4gICAgICAgIHRoaXMueSA9IHByb3AueTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSBwcm9wLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcC5oZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBwcm9wLm1vdmVTcGVlZDtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gcHJvcC52aXNpYmxlO1xyXG5cclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyID0gbmV3IEJveENvbGxpZGVyKHByb3AuYm94Q29sbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci54ID0gdGhpcy54ICsgdGhpcy5ib3hDb2xsaWRlci5feDtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnkgPSB0aGlzLnkgKyB0aGlzLmJveENvbGxpZGVyLl95O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnggPSB0aGlzLnggKyB0aGlzLmJveENvbGxpZGVyLl94O1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueSA9IHRoaXMueSArIHRoaXMuYm94Q29sbGlkZXIuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSAmJiBzY3JlZW4uc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIucmVuZGVyKHNjcmVlbik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQm94Q29sbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwcm9wLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHByb3AueDsgdGhpcy5feCA9IHByb3AueDtcclxuICAgICAgICB0aGlzLnkgPSBwcm9wLnk7IHRoaXMuX3kgPSBwcm9wLnk7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHByb3AudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlICYmIHNjcmVlbi5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcC5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgQm9keShwcm9wLmJvZHkpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KHByb3Audmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYm9keS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkgeyB0aGlzLmJvZHkudXBkYXRlKCk7IH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudmlldy5nZXRTcHJpdGUoKSwgdGhpcy5ib2R5LngsIHRoaXMuYm9keS55KTtcclxuICAgICAgICB0aGlzLmJvZHkucmVuZGVyKHNjcmVlbik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuLi92aWV3L3BpY3R1cmUvc3ByaXRlU2hlZXRcIjtcclxuaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3ZpZXcvYW5pbWF0aW9uL3Nwcml0ZUFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgU3ByaXRlU2hlZXQocHJvcC5zcHJpdGVTaGVldCk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdCA9IHt9O1xyXG4gICAgICAgIHRoaXMudGVtcEFuaW1hdGlvblByb3AgPSBwcm9wLmFuaW1hdGlvbkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25MaXN0ID09IHt9KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBBbmltYXRpb25Qcm9wLmZvckVhY2goYW5pbWF0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0W2FuaW1hdGlvbi5uYW1lXSA9IG5ldyBTcHJpdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogICAgICAgIGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlU2hlZXQ6IHRoaXMuc3ByaXRlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICBmcmFtZURlbGF5OiAgYW5pbWF0aW9uLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiAgICAgYW5pbWF0aW9uLmluZGljZXMsXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6ICAgICAgYW5pbWF0aW9uLnJlcGVhdCxcclxuICAgICAgICAgICAgICAgIGF1dG9ydW46ICAgICBhbmltYXRpb24uYXV0b3J1biBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb24ubmFtZV0uaW5pdCgpO1xyXG4gICAgICAgIH0pOyBkZWxldGUgdGhpcy50ZW1wQW5pbWF0aW9uUHJvcDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uTGlzdFtcImlkbGUtZG93blwiXTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbmltYXRpb24oYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbi5uYW1lID09IGFuaW1hdGlvbk5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25MaXN0W2FuaW1hdGlvbk5hbWVdO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwcml0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVTaGVldC5nZXRTcHJpdGUodGhpcy5hbmltYXRpb24uaW5kaWNlc1t0aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVJbmRleF0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vaWVsZW1lbnRzL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRlBTQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJmcHNDb250cm9sbGVyXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZnBzICA9IDA7ICAvLyBldmVyeSBzZWNvbmRcclxuICAgICAgICB0aGlzLl9mcHMgPSAwOyAvLyBldmVyeSBmcmFtZVxyXG5cclxuICAgICAgICB0aGlzLmZyYW1lVGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX19sYWJlbF9fID0gbmV3IExhYmVsKHByb3AubGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuX19sYWJlbF9fLmluaXQoKTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lID09IE1hdGgudHJ1bmModGltZSAvIDEwMDApKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5fZnBzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnBzID0gKyt0aGlzLl9mcHM7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVUaW1lID0gTWF0aC50cnVuYyh0aW1lIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZwcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9fbGFiZWxfXy50ZXh0ID0gYEZQUzogJHt0aGlzLmZwc31gO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHNjcmVlbi5kcmF3TGFiZWwodGhpcy5fX2xhYmVsX18pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB0aGlzLmxlbmd0aCA9IDA7IH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZUNvbnRyb2xsZXIgJiYgdGhpcy5zY2VuZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVDb250cm9sbGVyICYmIHRoaXMuc2NlbmVDb250cm9sbGVyLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSwgc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmZwc0NvbnRyb2xsZXIgICAmJiB0aGlzLmZwc0NvbnRyb2xsZXIucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLmNvbnRyb2xsZXJzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY3RybCBvZiBjb250cm9sbGVycykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXNbY3RybC5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHJsLm5hbWUpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbmFtZSBvZiBjb250cm9sbGVyLCBuYW1lIGlzIG11c3QgYmUgbGlrZSAnc2NlbmVDb250cm9sbGVyJ1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpc1tjdHJsLm5hbWVdID0gY3RybDtcclxuICAgICAgICAgICAgICAgIHRoaXNbY3RybC5uYW1lXS5pbml0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgKyt0aGlzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShjb250cm9sbGVyTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzW2NvbnRyb2xsZXJOYW1lXSkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1tjb250cm9sbGVyTmFtZV07XHJcbiAgICAgICAgICAgIC0tdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNjZW5lQ29udHJvbGxlclwiLCBzY2VuZXMgfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgc2NlbmUgaW4gc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXSA9IHNjZW5lc1tzY2VuZV07XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXS5pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lcy5sb2FkaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIG11c3QgaGF2ZSBsb2FkaW5nIHNjZW5lXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNjZW5lKFwibGV2ZWxfMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY2VuZShzY2VuZU5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzW3NjZW5lTmFtZV0pIHJldHVybjtcclxuXHJcbiAgICAgICAgIXRoaXMuc2NlbmVzW3NjZW5lTmFtZV0uaXNJbml0aWFsaXplZCAmJiAodGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pc0luaXRpYWxpemVkID0gdHJ1ZSkgJiYgdGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXNbc2NlbmVOYW1lXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyA9IFwicnVubmluZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5zY2VuZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzY2VuZSBvZiBzY2VuZXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzY2VuZS5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJTY2VuZSBtdXN0IGhhdmUgbmFtZSwgbGlrZSAnc3RhcnRNZW51J1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0gPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShzY2VuZU5hbWUpIHsgdGhpcy5zY2VuZXNbc2NlbmVOYW1lXSAmJiB0aGlzLnNjZW5lcy5zcGxpY2UodGhpcy5zY2VuZXMuZmluZEluZGV4KGVsID0+IGVsLm5hbWUgPT0gc2NlbmVOYW1lKSk7IH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2NlbmUgaW4gdGhpcy5zY2VuZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPT0gXCJmaW5pc2hcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLm5leHQgPT0gXCJub25lXCIpIHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPSBcInJ1bm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjZW5lKHRoaXMuc2NlbmVzW3NjZW5lXS5uZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wYXJlbnQgPSB0aGlzLnNjZW5lc1tzY2VuZV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9IFwicmVhZHlcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0ubmV4dCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEVuZW15QXR0YWNrQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYW5nZSwgYm9keSkge1xyXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG5cclxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwbGF5ZXIsIGNvbGxpc2lvbikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGZCb3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueCwgeDI6IHRoaXMuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5ib2R5LmJveENvbGxpZGVyLnksIHkyOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMuYm9keS5ib3hDb2xsaWRlci5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucGxheWVyQm94ID0ge1xyXG4gICAgICAgICAgICB4MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54LCB4MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSwgeTI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxmQm94ID0ge1xyXG4gICAgICAgICAgICB4MTogdGhpcy5ib2R5LmJveENvbGxpZGVyLngsIHgyOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueCArIHRoaXMuYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMuYm9keS5ib3hDb2xsaWRlci55LCB5MjogdGhpcy5ib2R5LmJveENvbGxpZGVyLnkgKyB0aGlzLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBsYXllckJveCA9IHtcclxuICAgICAgICAgICAgeDE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCwgeDI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIud2lkdGgsXHJcbiAgICAgICAgICAgIHkxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnksIHkyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnkgKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLmhlaWdodFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbi5pbnRlcnNlY3QodGhpcy5wbGF5ZXJCb3gsIHRoaXMucmFuZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMucGxheWVyO1xyXG4gICAgICAgIGVsc2UgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdChkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOiAgICB0aGlzLnBsYXllci5ib2R5LnkgLT0gMjA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjogdGhpcy5wbGF5ZXIuYm9keS54ICs9IDIwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjogIHRoaXMucGxheWVyLmJvZHkueSArPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6ICB0aGlzLnBsYXllci5ib2R5LnggLT0gMjA7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2soZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgLS10aGlzLnBsYXllci5oZWFsdGhQb2ludDtcclxuXHJcbiAgICAgICAgdGhpcy5oaXQoZGlyZWN0aW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJvZHlBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vYm9kaWVzL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBFbmVteU1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlBdHRhY2tDb250cm9sbGVyIH0gZnJvbSBcIi4vYXR0YWNrQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbmVteSwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMuZW5lbXkgPSBlbmVteTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIgPSBuZXcgRW5lbXlBdHRhY2tDb250cm9sbGVyKHRoaXMuZW5lbXkucmFuZ2Vab25lLCB0aGlzLmVuZW15LmJvZHkpO1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBuZXcgRW5lbXlNb3ZlQ29udHJvbGxlcih0aGlzLmVuZW15LmJvZHksIHRoaXMuYXR0YWNrQ29udHJvbGxlciwgcHJvcC5tb3ZlQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEJvZHlBbmltYXRpb24odGhpcy5lbmVteS52aWV3LCB0aGlzLm1vdmVDb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdChwbGF5ZXIsIGNvbGxpc2lvbikgIHsgdGhpcy5hdHRhY2tDb250cm9sbGVyLmluaXQocGxheWVyLCBjb2xsaXNpb24pOyB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEVuZW15TW92ZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoYm9keSwgYXR0YWNrQ29udHJvbGxlciwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyID0gYXR0YWNrQ29udHJvbGxlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleCA9IDA7XHJcbiAgICAgICAgKHRoaXMubW92ZVBvaW50cyA9IHByb3AubW92ZVBvaW50cykgJiYgKHRoaXMuY3VycmVudE1vdmVQb2ludCA9IHRoaXMubW92ZVBvaW50c1t0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleF0pO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdHJpY3RTdG9wcGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrQ29udHJvbGxlci50YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXR0YWNrQ29udHJvbGxlci5jb2xsaXNpb24uaW50ZXJzZWN0KHRoaXMuYXR0YWNrQ29udHJvbGxlci5wbGF5ZXJCb3gsIHRoaXMuYXR0YWNrQ29udHJvbGxlci5zZWxmQm94KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tDb250cm9sbGVyLmF0dGFjayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmljdFN0b3AoMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc01vdmUgfHwgIXRoaXMubW92ZVBvaW50cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LnggIT0gdGhpcy5jdXJyZW50TW92ZVBvaW50LnggfHwgdGhpcy5ib2R5LnkgIT0gdGhpcy5jdXJyZW50TW92ZVBvaW50LnkpXHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudE1vdmVQb2ludEluZGV4IDwgdGhpcy5tb3ZlUG9pbnRzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludCA9IHRoaXMubW92ZVBvaW50c1srK3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludC5pc1N0b3AgJiYgdGhpcy5zdG9wKHRoaXMuY3VycmVudE1vdmVQb2ludC5zdG9wVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7ICF0aGlzLmlzU3RyaWN0U3RvcHBlZCAmJiAodGhpcy5pc01vdmUgPSB0cnVlKTsgfVxyXG5cclxuICAgIHN0b3AodGltZSkge1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdHJpY3RTdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpY3RTdG9wKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmlzU3RyaWN0U3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdG9wKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSb3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUG9pbnRzID0gdGhpcy5tb3ZlUG9pbnRzLnJldmVyc2UoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvaW50ID0gdGhpcy5tb3ZlUG9pbnRzW3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVQb2ludC5pc1N0b3ApXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmJvZHksIGIgPSB0aGlzLmF0dGFja0NvbnRyb2xsZXIudGFyZ2V0ID8ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmF0dGFja0NvbnRyb2xsZXIudGFyZ2V0LmJvZHkueCwgeTogdGhpcy5hdHRhY2tDb250cm9sbGVyLnRhcmdldC5ib2R5LnlcclxuICAgICAgICB9IDogdGhpcy5jdXJyZW50TW92ZVBvaW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhLnkgPiBiLnkpIHRoaXMubW92ZVVwKCk7XHJcbiAgICAgICAgaWYgKGEueCA8IGIueCkgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgICBpZiAoYS55IDwgYi55KSB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgaWYgKGEueCA+IGIueCkgdGhpcy5tb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQb2ludHNSZXNldCgpIHsgdGhpcy5tb3ZlUG9pbnRzLmZvckVhY2gocG9pbnQgPT4gcG9pbnQuaXNQYXNzZWQgPSBmYWxzZSk7IH1cclxuXHJcbiAgICBtb3ZlVXAoKSAgICB7IHRoaXMuYm9keS55IC09IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiOyAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKSB7IHRoaXMuYm9keS54ICs9IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiOyB9XHJcbiAgICBtb3ZlRG93bigpICB7IHRoaXMuYm9keS55ICs9IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7ICB9XHJcbiAgICBtb3ZlTGVmdCgpICB7IHRoaXMuYm9keS54IC09IHRoaXMuYm9keS5tb3ZlU3BlZWQ7IHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCI7ICB9XHJcbn0iLCJpbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vYm9kaWVzL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBFbmVteVJhbmdlWm9uZSB9IGZyb20gXCIuL3JhbmdlWm9uZVwiO1xyXG5pbXBvcnQgeyBFbmVteUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9lbmVteUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlCb2R5IH0gZnJvbSBcIi4vZW5lbXlCb2R5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHN1cGVyKHByb3ApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEVuZW15Qm9keShwcm9wLmJvZHkpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3AubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5nZVpvbmUgPSBuZXcgRW5lbXlSYW5nZVpvbmUodGhpcy5ib2R5LCBwcm9wLnJhbmdlWm9uZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBFbmVteUNvbnRyb2xsZXIodGhpcywgcHJvcC5jb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHBsYXllciwgY29sbGlzaW9uKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucmFuZ2Vab25lLmluaXQoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuaW5pdChwbGF5ZXIsIGNvbGxpc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHkubW92ZVNwZWVkID0gdGhpcy5jb250cm9sbGVyLmF0dGFja0NvbnRyb2xsZXIudGFyZ2V0ID8gdGhpcy5ib2R5LmFnZ3Jlc3NpdmVTcGVlZCA6IHRoaXMuYm9keS5kZWZhdWx0U3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmdlWm9uZS5yZW5kZXIodGltZSwgc2NyZWVuKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi4vYm9kaWVzL2JvZHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteUJvZHkgZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICBzdXBlcihwcm9wKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBwcm9wLmRlZmF1bHRTcGVlZDtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTcGVlZCA9IHByb3AuZGVmYXVsdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuYWdncmVzc2l2ZVNwZWVkID0gcHJvcC5hZ2dyZXNzaXZlU3BlZWQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRW5lbXlSYW5nZVpvbmUge1xyXG4gICAgY29uc3RydWN0b3IoYm9keSwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcblxyXG4gICAgICAgIHRoaXMudXAgPSBwcm9wLnVwO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBwcm9wLnJpZ2h0O1xyXG4gICAgICAgIHRoaXMuZG93biA9IHByb3AuZG93bjtcclxuICAgICAgICB0aGlzLmxlZnQgPSBwcm9wLmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy54MSA9IHRoaXMuYm9keS54IC0gdGhpcy5sZWZ0O1xyXG4gICAgICAgIHRoaXMueDIgPSB0aGlzLmJvZHkueCArIHRoaXMuYm9keS53aWR0aCArIHRoaXMucmlnaHQ7XHJcbiAgICAgICAgdGhpcy55MSA9IHRoaXMuYm9keS55IC0gdGhpcy51cDtcclxuICAgICAgICB0aGlzLnkyID0gdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuaGVpZ2h0ICsgdGhpcy5kb3duO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSAgIHsgdGhpcy5zZXRQb3NpdGlvbigpOyB9XHJcbiAgICB1cGRhdGUoKSB7IHRoaXMuc2V0UG9zaXRpb24oKTsgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBzY3JlZW4uc3Ryb2tlUmVjdCh0aGlzLngxLCB0aGlzLnkxLCB0aGlzLngyLXRoaXMueDEsIHRoaXMueTItdGhpcy55MSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gICAgICAgfSBmcm9tIFwiLi92aWV3L3NjcmVlbi9zY3JlZW5cIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NjZW5lIH0gZnJvbSBcIi4vdmlldy9zY2VuZS9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IFN0YXJ0TWVudSB9ICAgIGZyb20gXCIuL3ZpZXcvc2NlbmUvbWVudS9zdGFydFwiO1xyXG5pbXBvcnQgeyBMZXZlbF8xIH0gICAgICBmcm9tIFwiLi92aWV3L3NjZW5lL2xldmVsL2xldmVsXzFcIjtcclxuaW1wb3J0IHsgTGV2ZWxfMiB9IGZyb20gXCIuL3ZpZXcvc2NlbmUvbGV2ZWwvbGV2ZWxfMlwiO1xyXG5cclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgIH0gIGZyb20gXCIuL2NvbnRyb2xsZXJzL2dhbWVDdHJsXCI7XHJcbmltcG9ydCB7IFNjZW5lQ29udHJvbGxlciB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9zY2VuZUN0cmxcIjtcclxuaW1wb3J0IHsgRlBTQ29udHJvbGxlciAgIH0gIGZyb20gXCIuL2NvbnRyb2xsZXJzL2Zwc0NvbnRyb2xsZXJcIjtcclxuXHJcbmltcG9ydCB7IENvbGxpc2lvbiB9IGZyb20gXCIuL3BoeXNpYy9jb2xsaXNpb25cIjtcclxuXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci9wbGF5ZXJcIjtcclxuXHJcbmltcG9ydCBnYW1lSlNPTiBmcm9tIFwiLi9nYW1lLmpzb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGdhbWVKU09OLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKGdhbWVKU09OLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoZ2FtZUpTT04ucGxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbi5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5hZGQoXHJcbiAgICAgICAgICAgIG5ldyBTY2VuZUNvbnRyb2xsZXIoeyBzY2VuZXM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICAgbmV3IExvYWRpbmdTY2VuZSh7IHNjcmVlbjogdGhpcy5zY3JlZW4sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sb2FkaW5nIH0pLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRNZW51OiBuZXcgU3RhcnRNZW51KHsgc2NyZWVuOiB0aGlzLnNjcmVlbiwgcHJvcDogZ2FtZUpTT04uc2NlbmVzLnN0YXJ0TWVudSB9KSxcclxuICAgICAgICAgICAgICAgIGxldmVsXzE6ICAgbmV3IExldmVsXzEoeyBwbGF5ZXI6IHRoaXMucGxheWVyLCBzY3JlZW46IHRoaXMuc2NyZWVuLCBjb2xsaXNpb246IHRoaXMuY29sbGlzaW9uLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubGV2ZWxfMSB9KSxcclxuICAgICAgICAgICAgICAgIC8vIGxldmVsXzI6ICAgbmV3IExldmVsXzIoeyBwbGF5ZXI6IHRoaXMucGxheWVyLCBzY3JlZW46IHRoaXMuc2NyZWVuLCBjb2xsaXNpb246IHRoaXMuY29sbGlzaW9uLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubGV2ZWxfMiB9KVxyXG4gICAgICAgICAgICB9IH0pLFxyXG4gICAgICAgICAgICBuZXcgRlBTQ29udHJvbGxlcihnYW1lSlNPTi5mcHNDb250cm9sbGVyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAodGhpcy5pc1J1bm5pbmcgPSB0cnVlKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwiYnV0dG9uXCIsIHdpZHRoLCBoZWlnaHQsIGJnY29sb3IsIGNvbG9ycywgbGFiZWxQcm9wLCB4ID0gMCwgeSA9IDAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgPSB1bmRlZmluZWQgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgeDogeCwgeTogeSwgYW5pbWF0ZWQ6IGFuaW1hdGVkLCBhbmltYXRpb25Qcm9wOiBhbmltYXRpb25Qcm9wIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmJnY29sb3IgPSBiZ2NvbG9yO1xyXG4gICAgICAgIHRoaXMuY29sb3JzICA9IGNvbG9ycztcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChsYWJlbFByb3ApO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX19pbl9fKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICggKGV2ZW50Lm9mZnNldFggPj0gdGhpcy54KSAmJiAoZXZlbnQub2Zmc2V0WCA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSAgKVxyXG4gICAgICAgICAgICAmJiAoIChldmVudC5vZmZzZXRZID49IHRoaXMueSkgJiYgKGV2ZW50Lm9mZnNldFkgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzKHRhcmdldCwgZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlICA9IGZ1bmN0aW9ucy5tb3VzZU1vdmVIYW5kbGVyICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUpO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlRG93biAgPSBmdW5jdGlvbnMubW91c2VEb3duSGFuZGxlciApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duKTtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZVVwICAgID0gZnVuY3Rpb25zLm1vdXNlVXBIYW5kbGVyICAgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgICB0aGlzLl9saXN0ZW5lck1vdXNlVXApO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2sgPSBmdW5jdGlvbnMubW91c2VDbGlja0hhbmRsZXIpICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSkgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlRG93biAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24pICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZURvd247XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwICAgICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCkgICAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VVcDtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2sgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrKSAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYWJlbC54ICs9IHRoaXMueDtcclxuICAgICAgICB0aGlzLmxhYmVsLnkgKz0gdGhpcy55O1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikgeyBzY3JlZW4uZHJhd0J1dHRvbih0aGlzKTsgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwiaWVsZW1lbnRcIiwgeCA9IDAsIHkgPSAwLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IGFuaW1hdGVkO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvblByb3A7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuY3JlYXRlQW5pbWF0aW9uKHRoaXMuX2FuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkgeyB0aGlzLmFuaW1hdGVkICYmIHRoaXMuYW5pbWF0aW9uLnVwZGF0ZSh0aW1lKTsgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbigpIHt9XHJcblxyXG4gICAgc2V0WFkobmV3WCwgbmV3WSkge1xyXG4gICAgICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTGFiZWxBbmltYXRpb24gfSBmcm9tIFwiLi4vdmlldy9hbmltYXRpb24vbGFiZWxBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJlbCBleHRlbmRzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxcIiwgdGV4dCA9IFwibGFiZWxcIiwgeCA9IDEwLCB5ID0gMTAsIGNvbG9yID0gXCIjNDQ0NDQ0XCIsXHJcbiAgICAgICAgZm9udFNpemUgPSAzNiwgZm9udFdlaWdodCA9IFwibm9ybWFsXCIsIGZvbnRGYW1pbHkgPSBcIkNvdXJpZXIgTmV3XCIsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgPSB1bmRlZmluZWQgfSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgeDogeCwgeTogeSwgYW5pbWF0ZWQ6IGFuaW1hdGVkLCBhbmltYXRpb25Qcm9wOiBhbmltYXRpb25Qcm9wIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSAgID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5mb250V2VpZ2h0ID0gZm9udFdlaWdodDtcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbihwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMYWJlbEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLFxyXG4gICAgICAgICAgICBmcmFtZURlbGF5OiAgICAgcHJvcC5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICByZXBlYXQ6ICAgICAgICAgcHJvcC5yZXBlYXQsXHJcbiAgICAgICAgICAgIGF1dG9ydW46ICAgICAgICBwcm9wLmF1dG9ydW4sXHJcbiAgICAgICAgICAgIHRleHRDb2xsZWN0aW9uOiBwcm9wLnRleHRDb2xsZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIHNjcmVlbi5kcmF3TGFiZWwodGhpcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuL2llbGVtZW50XCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldFwiO1xyXG5pbXBvcnQgeyBTcHJpdGVBbmltYXRpb24gfSBmcm9tIFwiLi4vdmlldy9hbmltYXRpb24vc3ByaXRlQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwidGlsZVwiLCB3aWR0aCwgaGVpZ2h0LCBzcHJpdGVTaGVldCwgeCA9IDEwLCB5ID0gMTAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB1bmRlZmluZWQgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgeDogeCwgeTogeSwgYW5pbWF0ZWQ6IGFuaW1hdGVkLCBhbmltYXRpb25Qcm9wOiBhbmltYXRpb25Qcm9wIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICBvcHRpb25zICYmICh0aGlzLl9fb3B0aW9uc19fID0gb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgU3ByaXRlU2hlZXQoc3ByaXRlU2hlZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb24ocHJvcCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgc3ByaXRlU2hlZXQ6IHRoaXMuc3ByaXRlU2hlZXQsXHJcbiAgICAgICAgICAgIGluZGljZXM6ICAgICBwcm9wLmluZGljZXMsXHJcbiAgICAgICAgICAgIGF1dG9ydW46ICAgICBwcm9wLmF1dG9ydW4sXHJcbiAgICAgICAgICAgIGZyYW1lRGVsYXk6ICBwcm9wLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgICBwcm9wLm5hbWUsXHJcbiAgICAgICAgICAgIHJlcGVhdDogICAgICBwcm9wLnJlcGVhdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgc2NyZWVuLmRyYXdTcHJpdGUoXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuZ2V0U3ByaXRlKCh0aGlzLmFuaW1hdGVkICYmIHRoaXMuYW5pbWF0aW9uLmluZGljZXNbdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lSW5kZXhdKSB8fCAxKSxcclxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX19vcHRpb25zX18gJiYgdGhpcy5fX29wdGlvbnNfXy5mb2cgJiYgc2NyZWVuLmZpbGwoXCIjMDAwMDAwNjZcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuICAgIGdhbWUucnVuKCk7XHJcbn07IiwiZXhwb3J0IGNsYXNzIENvbGxpc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2RpZXMpIHtcclxuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYm9kaWVzID0gYm9kaWVzIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVycy5mb3JFYWNoKGNvbGxpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyc2VjdChib2R5LCBjb2xsaWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRDb2xsaWRlcihib2R5LCBjb2xsaWRlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dENvbGxpZGVyKGJvZHksIGNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IHtcclxuICAgICAgICAgICAgX3g6IGJvZHkuYm94Q29sbGlkZXIuX3gsIF95OiBib2R5LmJveENvbGxpZGVyLl95LFxyXG4gICAgICAgICAgICB4MTogYm9keS5ib3hDb2xsaWRlci54LCAgeDI6IGJvZHkuYm94Q29sbGlkZXIueCArIGJvZHkuYm94Q29sbGlkZXIud2lkdGgsXHJcbiAgICAgICAgICAgIHkxOiBib2R5LmJveENvbGxpZGVyLnksICB5MjogYm9keS5ib3hDb2xsaWRlci55ICsgYm9keS5ib3hDb2xsaWRlci5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBib2R5LmJveENvbGxpZGVyLndpZHRoLCBoZWlnaHQ6IGJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgTWF0aC5hYnMoY29sbGlkZXIueDEgLSBib3gueDIpLCBNYXRoLmFicyhjb2xsaWRlci54MiAtIGJveC54MSksXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbGxpZGVyLnkxIC0gYm94LnkyKSwgTWF0aC5hYnMoY29sbGlkZXIueTIgLSBib3gueTEpICk7XHJcblxyXG4gICAgICAgIHN3aXRjaChtaW4pIHtcclxuICAgICAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MSAtIGJveC54Mik6IGJvZHkueCA9IE1hdGguZmxvb3IoY29sbGlkZXIueDEgLSBib2R5LndpZHRoICsgYm94Ll94KTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0aC5hYnMoY29sbGlkZXIueDIgLSBib3gueDEpOiBib2R5LnggPSBNYXRoLmNlaWwoY29sbGlkZXIueDIgLSBib3guX3grMik7ICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1hdGguYWJzKGNvbGxpZGVyLnkxIC0gYm94LnkyKTogYm9keS55ID0gTWF0aC5mbG9vcihjb2xsaWRlci55MSAtIGJvZHkuaGVpZ2h0LTIpOyAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci55MiAtIGJveC55MSk6IGJvZHkueSA9IE1hdGguY2VpbChjb2xsaWRlci55MiAtIGJveC5feSsyKTsgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVyc2VjdChib2R5LCBjb2xsaWRlcikge1xyXG4gICAgICAgIGxldCBib3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiBib2R5LngxIHx8IGJvZHkuYm94Q29sbGlkZXIueCwgeDI6IGJvZHkueDIgfHwgYm9keS5ib3hDb2xsaWRlci54ICsgYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IGJvZHkueTEgfHwgYm9keS5ib3hDb2xsaWRlci55LCB5MjogYm9keS55MiB8fCBib2R5LmJveENvbGxpZGVyLnkgKyBib2R5LmJveENvbGxpZGVyLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChib3gueDIgPiAgY29sbGlkZXIueDEgJiYgYm94LngxIDwgIGNvbGxpZGVyLngxICYmIGJveC55MiA+ICBjb2xsaWRlci55MSAmJiBib3gueTEgPCAgY29sbGlkZXIueTIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPCAgY29sbGlkZXIueDIgJiYgYm94LngyID4gIGNvbGxpZGVyLngyICYmIGJveC55MiA+ICBjb2xsaWRlci55MSAmJiBib3gueTEgPCAgY29sbGlkZXIueTIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueTIgPiAgY29sbGlkZXIueTEgJiYgYm94LnkxIDwgIGNvbGxpZGVyLnkxICYmIGJveC54MiA+ICBjb2xsaWRlci54MSAmJiBib3gueDEgPCAgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueTEgPCAgY29sbGlkZXIueTIgJiYgYm94LnkyID4gIGNvbGxpZGVyLnkyICYmIGJveC54MiA+ICBjb2xsaWRlci54MSAmJiBib3gueDEgPCAgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPj0gY29sbGlkZXIueDEgJiYgYm94LngyIDw9IGNvbGxpZGVyLngyICYmIGJveC55MSA+PSBjb2xsaWRlci55MSAmJiBib3gueTIgPD0gY29sbGlkZXIueTIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBsYXllcktleUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlzID0ge1xyXG4gICAgICAgICAgICBLZXlXOiB7IGNvZGU6IDg3LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEtleUQ6IHsgY29kZTogNjgsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgS2V5UzogeyBjb2RlOiA4MywgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBLZXlBOiB7IGNvZGU6IDY1LCBpc0Rvd246IGZhbHNlIH0sXHJcblxyXG4gICAgICAgICAgICBBcnJvd1VwOiAgICB7IGNvZGU6IDM4LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEFycm93UmlnaHQ6IHsgY29kZTogMzksIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgQXJyb3dEb3duOiAgeyBjb2RlOiA0MCwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBBcnJvd0xlZnQ6ICB7IGNvZGU6IDM3LCBpc0Rvd246IGZhbHNlIH0sXHJcblxyXG4gICAgICAgICAgICBTcGFjZTogeyBjb2RlOiAzMiwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaXNLZXlEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7IHRoaXMuc3RhcnRFdmVudExpc3RlbigpOyB9XHJcbiAgICBzdG9wKCkgIHsgdGhpcy5zdG9wRXZlbnRMaXN0ZW4oKTsgIH1cclxuXHJcbiAgICBzdGFydEV2ZW50TGlzdGVuKCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5RG93biA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleVVwICAgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9saXN0ZW5lcktleURvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLl9saXN0ZW5lcktleVVwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlEb3duICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9saXN0ZW5lcktleURvd24pICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcktleURvd247XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlVcCAgICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLl9saXN0ZW5lcktleVVwKSAgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcktleVVwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5pc0tleURvd24gPSB0aGlzLmtleXMuS2V5Vy5pc0Rvd24gfHwgdGhpcy5rZXlzLktleUQuaXNEb3duIHx8IHRoaXMua2V5cy5LZXlTLmlzRG93biB8fCB0aGlzLmtleXMuS2V5QS5pc0Rvd247IH1cclxuXHJcbiAgICBrZXlEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbZXZlbnQuY29kZV0pIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdLmlzRG93biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVVwSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbZXZlbnQuY29kZV0pIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdLmlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQbGF5ZXJNb3ZlQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGtleUNvbnRyb2xsZXIsIHByb3ApIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmtleUNvbnRyb2xsZXIgPSBrZXlDb250cm9sbGVyO1xyXG5cclxuICAgICAgICB0aGlzLmtleXMgPSBwcm9wLmtleXM7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy51cF0uaXNEb3duKSAgICB0aGlzLm1vdmVVcCgpOyAgIFxyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMucmlnaHRdLmlzRG93bikgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLmRvd25dLmlzRG93bikgIHRoaXMubW92ZURvd24oKTsgXHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5sZWZ0XS5pc0Rvd24pICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUNvbnRyb2xsZXIuaXNLZXlEb3duKSB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVVcCgpICAgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgLT0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnggKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVEb3duKCkgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueCAtPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllcktleUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9rZXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBsYXllck1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQm9keUFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi9ib2RpZXMvYW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBsYXllciwgcHJvcCB9KSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IG5ldyBQbGF5ZXJLZXlDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBQbGF5ZXJNb3ZlQ29udHJvbGxlcih0aGlzLnBsYXllciwgdGhpcy5rZXlDb250cm9sbGVyLCBwcm9wLm1vdmVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQm9keUFuaW1hdGlvbih0aGlzLnBsYXllci52aWV3LCB0aGlzLm1vdmVDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5rZXlDb250cm9sbGVyLnN0YXJ0KCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLmtleUNvbnRyb2xsZXIuc3RvcCgpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5rZXlDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9wbGF5ZXJDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9ib2RpZXMvY2hhcmFjdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICBzdXBlcihwcm9wKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhQb2ludCA9IDM7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKHsgcGxheWVyOiB0aGlzLCBwcm9wOiBwcm9wLmNvbnRyb2xsZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBmcmFtZURlbGF5PSA1MCwgcmVwZWF0ID0gZmFsc2UsIGF1dG9ydW4gPSBmYWxzZSB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICAgICAgdGhpcy5hdXRvcnVuID0gYXV0b3J1bjtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gZnJhbWVEZWxheTtcclxuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuYXV0b3J1biAmJiB0aGlzLnJ1bigpOyB9XHJcblxyXG4gICAgcnVuKCkgIHsgdGhpcy5pc1J1bm5pbmcgPSB0cnVlOyAgfVxyXG4gICAgc3RvcCgpIHsgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWVUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0RnJhbWVUaW1lKSA+IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxBbmltYXRpb25cIiwgbGFiZWwsIGZyYW1lRGVsYXkgPSAyMDAsIHRleHRDb2xsZWN0aW9uID0gW10sIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGVjdGlvbiA9IHRleHRDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZXh0SW5kZXggKyAxID09IHRoaXMudGV4dENvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICAgICAgfSBlbHNlICsrdGhpcy5jdXJyZW50VGV4dEluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMudGV4dENvbGxlY3Rpb25bdGhpcy5jdXJyZW50VGV4dEluZGV4XTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZUFuaW1hdGlvblwiLCBzcHJpdGVTaGVldCwgaW5kaWNlcywgZnJhbWVEZWxheSA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IGZhbHNlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gc3ByaXRlU2hlZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lcyhpbmRpY2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGljZXMubWFwKCBpbmRleCA9PiAoe1xyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZUluZGV4ICsgMSA9PSB0aGlzLmZyYW1lcy5sZW5ndGggKSAmJiB0aGlzLnJlcGVhdClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucmVwZWF0KSBzdG9wKCk7XHJcbiAgICAgICAgZWxzZSArK3RoaXMuY3VycmVudEZyYW1lSW5kZXg7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNjQwLCBsaW1pdFkgPSA2NDAsIHNjcm9sbEVkZ2UgPSAzMDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xyXG4gICAgICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChvYmopIHtcclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBvYmouYm9keTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoT2JqZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCA+ICh0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMuYm9keS54IC0gdGhpcy53aWR0aCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLmJvZHkueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueSA+ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLmJvZHkueSAtIHRoaXMuaGVpZ2h0ICsgdGhpcy5zY3JvbGxFZGdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS55IDwgKHRoaXMueSArIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMuYm9keS55IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wLCBjb2xsaXNpb24pIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gcHJvcC5tYXBEYXRhO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHRoaXMuZGF0YS53aWR0aCAqIHRoaXMuZGF0YS50aWxld2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhdGEuaGVpZ2h0ICogdGhpcy5kYXRhLnRpbGVoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVNldCA9IG5ldyBTcHJpdGVTaGVldChwcm9wLm1hcFNwcml0ZVNoZWV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3cgICAgPSB0aGlzLmRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sdW1uID0gdGhpcy5kYXRhLndpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmxheWVycyAgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdExheWVyID0gW107XHJcbiAgICAgICAgdGhpcy51cHBlckxheWVyICAgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZVNldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGF5ZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBuYW1lOiBsYXllci5uYW1lLCBpbmRleGVzOiBsYXllci5kYXRhLCB6X2luZGV4OiBsYXllci5wcm9wZXJ0aWVzWzBdLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycyA9IGxheWVyLm9iamVjdHMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICB4MTogaXRlbS54LCB4MjogaXRlbS54ICsgaXRlbS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5MTogaXRlbS55LCB5MjogaXRlbS55ICsgaXRlbS5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH0pICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXllcnMuc29ydCggKGEsIGIpID0+IGEuel9pbmRleCAtIGIuel9pbmRleCApO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uLmNvbGxpZGVycyA9IHRoaXMuY29sbGlkZXJzO1xyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY29uZFJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIuZm9yRWFjaCh0aWxlID0+IHNjcmVlbi5kcmF3U3ByaXRlKHRpbGUuc3ByaXRlLCB0aWxlLngsIHRpbGUueSkgKTtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2wgPSAwLCByb3cgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGF5ZXIuaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXIubmFtZSA9PSBcIndhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbi5ib2RpZXMuZm9yRWFjaCggYm9keSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNJbnRlcnNlY3QgPSB0aGlzLmNvbGxpc2lvbi5pbnRlcnNlY3QoYm9keSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxOiB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsICB4MjogdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sICArIHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MTogdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvdywgeTI6IHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3cgKyB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0IC8yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ludGVyc2VjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwcGVyTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZTogdGhpcy50aWxlU2V0LmdldFNwcml0ZShpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRpbGVTZXQuZ2V0U3ByaXRlKGluZGV4KSwgdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLCB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBzY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRpbGVTZXQuZ2V0U3ByaXRlKGluZGV4KSwgdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLCB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICgrK2NvbCA+IHRoaXMuY29sdW1uIC0gMSkgJiYgKFtjb2wsIHJvd10gPSBbMCwgcm93KzFdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3ByaXRlU2hlZXRcIiwgc3JjLCB3aWR0aCwgaGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NCB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNyYyA9IHNyYztcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCAgPSBzcHJpdGVXaWR0aDtcclxuICAgICAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmltYWdlIHx8ICh0aGlzLmltYWdlID0gdGhpcy5sb2FkSW1hZ2UoKSk7IH1cclxuXHJcbiAgICBnZXRTcHJpdGUoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgaW1hZ2U6ICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgd2lkdGg6ICAgdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAgdGhpcy5zcHJpdGVIZWlnaHQsXHJcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRJbWFnZSgpIHsgdGhpcy5fbG9hZCgpLnRoZW4oaW1nID0+IHRoaXMuaW1hZ2UgPSBpbWcpLmNhdGNoKGVycm9yID0+IHsgdGhyb3cgZXJyb3I7IH0pOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWChpbmRleCkgeyByZXR1cm4gKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCAlIHRoaXMud2lkdGg7IH1cclxuXHJcbiAgICBnZXRTb3VyY2VZKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoICgoaW5kZXgtMSkgKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMud2lkdGggKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSBcIi4uLy4uL21hcFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi4vLi4vY2FtZXJhXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uLy4uL2VuZW15L2VuZW15XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxldmVsXCIsIHNjcmVlbiwgcGxheWVyLCBjb2xsaXNpb24sIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgc2NyZWVuOiBzY3JlZW4sIHBhcmVudDogcGFyZW50LCBuZXh0OiBuZXh0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAocHJvcCwgY29sbGlzaW9uKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gcHJvcC5lbmVtaWVzLm1hcChlbmVteSA9PiBuZXcgRW5lbXkoZW5lbXkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBjb2xsaXNpb247XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1hcC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbGxlci5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiBlbmVteS5pbml0KHRoaXMucGxheWVyLCB0aGlzLmNvbGxpc2lvbikpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uLmJvZGllcy5wdXNoKHRoaXMucGxheWVyLmJvZHksIC4uLnRoaXMuZW5lbWllcy5tYXAoZW5lbXkgPT4gZW5lbXkuYm9keSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAgdGhpcy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5zY3JlZW4uaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5jYW1lcmEpO1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbikpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnNlY29uZFJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8xIGV4dGVuZHMgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbF8xXCIsIHNjcmVlbiwgY29sbGlzaW9uLCBwbGF5ZXIsIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2NyZWVuOiBzY3JlZW4sXHJcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyLFxyXG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8yIGV4dGVuZHMgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbF8yXCIsIHNjcmVlbiwgY29sbGlzaW9uLCBwbGF5ZXIsIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2NyZWVuOiBzY3JlZW4sXHJcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyLFxyXG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibGV2ZWxfMVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgcGFyZW50LCBuZXh0IH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICF0aGlzLmllbGVtZW50cyAmJiAodGhpcy5pZWxlbWVudHMgPSB7fSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHt9XHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSAge31cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWUgaW4gdGhpcy5pZWxlbWVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzW2llXS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIHx8IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcclxuICAgICAgICBkaXYuaWQgPSBcImdhbWVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5ET00gPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0gfHwgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMuRE9NLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ET00uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5ET00uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYShjYW1lcmEpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmNhbnZhcy5pbml0KCk7IH1cclxuXHJcbiAgICBkcmF3QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChidXR0b24ueCAtIDUsIGJ1dHRvbi55IC0gNSwgYnV0dG9uLndpZHRoICsgMTAsIGJ1dHRvbi5oZWlnaHQgKyAxMCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBidXR0b24uYmdjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KGJ1dHRvbi54LCBidXR0b24ueSwgYnV0dG9uLndpZHRoLCBidXR0b24uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3TGFiZWwoYnV0dG9uLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TGFiZWwobGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IGxhYmVsLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZm9udCA9IGAke2xhYmVsLmZvbnRXZWlnaHR9ICR7bGFiZWwuZm9udFNpemV9cHggJHtsYWJlbC5mb250RmFtaWx5IHx8IFwiTHVjaWRhIENvbnNvbGFzXCJ9YDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsVGV4dChsYWJlbC50ZXh0LCBsYWJlbC54LCBsYWJlbC55KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHsgaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpOyB9XHJcbiAgICBcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5KSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZVggPSB4O1xyXG4gICAgICAgIGxldCBzcHJpdGVZID0geTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICAgICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgICAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3ByaXRlWCA+PSB0aGlzLndpZHRoKSAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodCkgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpICA8PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxyXG4gICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xyXG4gICAgICAgIGxldCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xyXG5cclxuICAgICAgICBzcHJpdGUuaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHNwcml0ZS5pbWFnZSxcclxuICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSxcclxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodCxcclxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCksIE1hdGgubWF4KDAsIHNwcml0ZVkpLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9