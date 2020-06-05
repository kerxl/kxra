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
      this.setScene("level_2");
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EnemyController = /*#__PURE__*/function () {
  function EnemyController(enemy, prop) {
    _classCallCheck(this, EnemyController);

    this.enemy = enemy;
    this.moveController = new _moveController__WEBPACK_IMPORTED_MODULE_1__["EnemyMoveController"](this.enemy.body, prop.moveController);
    this.animationController = new _bodies_animation__WEBPACK_IMPORTED_MODULE_0__["BodyAnimation"](this.enemy.view, this.moveController);
  }

  _createClass(EnemyController, [{
    key: "update",
    value: function update(time) {
      this.moveController.update();
      this.animationController.update(time);
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
  function EnemyMoveController(body, prop) {
    _classCallCheck(this, EnemyMoveController);

    this.body = body;
    this.movePoints = prop.movePoints;
    this.currentMovePointIndex = 0;
    this.currentMovePoint = this.movePoints[this.currentMovePointIndex];
    this.isMove = true;
    this.direction = "down";
  }

  _createClass(EnemyMoveController, [{
    key: "update",
    value: function update() {
      if (!this.isMove) return;
      if (this.body.x != this.currentMovePoint.x || this.body.y != this.currentMovePoint.y) this.move()();else if (this.currentMovePointIndex < this.movePoints.length - 1) {
        this.currentMovePoint = this.movePoints[++this.currentMovePointIndex];
        if (this.currentMovePoint.isStop) this.stop();
      } else this.moveRotate();
    }
  }, {
    key: "start",
    value: function start() {
      this.isMove = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this = this;

      this.isMove = false;
      setTimeout(function () {
        _this.start();
      }, this.currentMovePoint.stopTime);
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
          b = this.currentMovePoint;
      if (a.x == b.x && a.y > b.y) return this.moveUp.bind(this);
      if (a.y == b.y && a.x < b.x) return this.moveRight.bind(this);
      if (a.x == b.x && a.y < b.y) return this.moveDown.bind(this);
      if (a.y == b.y && a.x > b.y) return this.moveLeft.bind(this);
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
    _this.name = prop.name;
    _this.rangeZone = new _rangeZone__WEBPACK_IMPORTED_MODULE_1__["EnemtRangeZone"](_this.body, prop.rangeZone);
    _this.controller = new _controllers_enemyController__WEBPACK_IMPORTED_MODULE_2__["EnemyController"](_assertThisInitialized(_this), prop.controller);
    return _this;
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Enemy.prototype), "init", this).call(this);

      this.rangeZone.init();
    }
  }, {
    key: "update",
    value: function update(time) {
      this.controller.update(time);

      _get(_getPrototypeOf(Enemy.prototype), "update", this).call(this);
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

/***/ "./src/enemy/rangeZone.js":
/*!********************************!*\
  !*** ./src/enemy/rangeZone.js ***!
  \********************************/
/*! exports provided: EnemtRangeZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemtRangeZone", function() { return EnemtRangeZone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemtRangeZone = /*#__PURE__*/function () {
  function EnemtRangeZone(body, prop) {
    _classCallCheck(this, EnemtRangeZone);

    this.body = body;
    this.up = prop.up;
    this.right = prop.right;
    this.down = prop.down;
    this.left = prop.left;
  }

  _createClass(EnemtRangeZone, [{
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
      this.update(time); // screen.strokeRect(this.x1, this.y1, this.x2-this.x1, this.y2-this.y1);
    }
  }]);

  return EnemtRangeZone;
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
    this.collision = new _physic_collision__WEBPACK_IMPORTED_MODULE_8__["Collision"](this.player);
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
          }),
          level_2: new _view_scene_level_level_2__WEBPACK_IMPORTED_MODULE_4__["Level_2"]({
            player: this.player,
            screen: this.screen,
            collision: this.collision,
            prop: _game_json__WEBPACK_IMPORTED_MODULE_10__.scenes.level_2
          })
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

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}},\"level_1\":{\"mapSpriteSheet\":{\"name\":\"level_1MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"mapData\":{\"name\":\"map_1\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"test.json\"}},\"height\":10,\"infinite\":false,\"layers\":[{\"data\":[7,13,14,13,14,13,14,13,14,7,7,17,18,19,20,17,18,19,20,7,7,27,28,29,30,27,28,29,30,7,7,37,38,39,40,37,38,39,40,7,7,17,18,7,7,7,7,19,20,7,7,27,28,7,7,7,7,29,30,7,7,37,38,7,7,7,7,39,40,7,7,29,38,39,40,37,38,39,40,7,7,39,18,19,20,17,18,19,20,7,7,7,7,7,7,7,7,7,7,7],\"height\":10,\"id\":1,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[1,3,3,2,3,4,5,71,4,26,11,0,0,0,0,0,0,16,0,36,21,0,0,2,3,4,5,81,0,46,31,0,0,0,0,0,0,0,0,26,41,0,0,61,65,65,66,0,0,36,1,0,0,26,0,0,21,0,0,46,11,0,0,36,0,0,31,0,0,26,21,0,0,2,73,72,5,0,0,36,31,0,0,0,41,0,0,0,0,46,51,52,53,54,55,52,53,54,55,56],\"height\":10,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[0,68,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0],\"height\":10,\"id\":4,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2},{\"name\":\"entryPoint-index\",\"type\":\"int\",\"value\":77},{\"name\":\"outPoint-index\",\"type\":\"int\",\"value\":66}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":214.332666666667,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":258.667,\"x\":190.667,\"y\":296.333333333333},{\"height\":21.5,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":276,\"x\":192,\"y\":167.5},{\"height\":129.333,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17.3333,\"x\":450.667,\"y\":41.3333},{\"height\":588,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":41.3333,\"y\":40},{\"height\":15.2727272727273,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":557.333,\"x\":41.3333,\"y\":611.393272727273},{\"height\":583.667,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":574.667,\"y\":40.3333},{\"height\":22.9999333333333,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":538,\"x\":43.333,\"y\":39.6666666666667},{\"height\":114,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":296,\"y\":508}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":13,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":10},\"enemies\":{\"enemy_1\":{\"rangeZone\":{\"up\":128,\"right\":64,\"down\":128,\"left\":64},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":400,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":1,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":450,\"isStop\":true,\"stopTime\":3000},{\"x\":450,\"y\":450,\"isStop\":false},{\"x\":450,\"y\":200,\"isStop\":false},{\"x\":500,\"y\":200,\"isStop\":true,\"stopTime\":3000}]}}}}},\"level_2\":{\"mapData\":{\"name\":\"map_2\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"map_2.json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"id\":1,\"name\":\"background\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,15,0,0,29,17,18,28,20,17,18,19,20,17,18,19,20,17,18,19,20,25,0,0,29,27,33,93,14,14,13,14,14,13,14,14,13,14,14,29,30,35,0,0,23,37,38,39,40,25,38,39,40,40,38,39,40,37,38,39,40,25,0,0,13,13,14,14,15,35,13,14,40,40,13,14,0,0,0,0,20,35,0,0,28,27,28,29,25,0,28,29,30,27,28,29,0,0,0,0,30,25,0,0,25,0,0,0,0,0,38,39,40,37,38,39,0,0,0,0,40,35,0,0,35,0,0,0,0,0,0,0,20,25,0,0,0,0,0,0,20,25,0,0,35,0,0,0,0,0,0,0,30,25,0,0,0,0,0,0,30,35,0,0,25,0,0,0,0,0,38,39,28,25,38,39,0,0,0,0,40,25,0,0,35,17,18,19,20,0,13,14,20,17,13,14,0,0,0,0,20,35,0,0,18,13,14,13,14,0,29,29,30,27,28,29,0,0,0,0,30,25,0,0,28,37,38,39,35,0,39,39,40,37,38,39,0,0,0,0,40,35,0,0,38,17,25,19,20,17,19,19,20,17,18,19,20,17,18,0,20,25,0,0,18,27,35,13,13,15,28,29,17,17,28,29,13,14,13,14,39,35,0,0,28,37,25,39,40,37,13,14,17,17,13,14,40,37,38,39,30,25,0,0,38,27,35,29,30,17,18,19,20,37,38,39,40,27,28,29,30,35,0,0,29,27,27,13,14,13,14,13,14,13,14,13,14,14,14,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":3,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,2,3,4,5,2,2,2,3,4,5,3,4,5,2,3,2,3,4,6,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,21,0,0,0,83,3,2,3,4,5,2,3,4,5,5,73,0,0,0,26,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,41,2,3,4,72,73,0,71,72,0,0,72,73,0,0,11,0,0,0,6,1,0,0,0,0,11,0,16,0,0,0,0,11,54,62,63,64,16,0,16,11,0,0,0,0,21,53,26,0,0,0,0,1,0,0,0,0,26,0,26,21,0,61,62,63,64,0,36,0,0,0,0,11,0,0,0,0,36,0,36,31,0,36,0,0,0,0,62,66,0,0,61,62,0,0,0,0,46,0,46,41,0,46,0,0,0,0,0,41,0,0,46,0,0,0,0,0,6,0,6,1,0,46,0,0,0,0,71,4,0,0,4,73,0,0,0,0,16,0,16,11,0,72,72,72,73,0,6,0,0,0,0,11,0,0,0,0,26,0,26,21,0,0,0,0,21,0,16,0,0,0,0,21,0,0,0,0,36,0,36,31,0,0,0,0,31,0,26,0,0,0,0,31,0,0,0,0,46,0,46,41,0,0,0,71,4,5,36,0,0,0,0,11,3,4,73,0,46,0,6,11,0,0,0,26,0,0,2,3,0,0,3,2,0,0,31,4,81,0,16,21,0,0,0,36,0,0,0,0,0,0,0,0,0,0,41,0,0,0,26,31,0,0,0,3,4,5,2,3,4,5,2,3,2,3,4,0,0,0,36,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,51,52,53,54,55,52,53,54,55,52,53,54,55,52,53,54,55,54,55,56],\"height\":20,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":5,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":3}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"colliderBoxes\",\"objects\":[{\"height\":23,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1173.33,\"x\":42,\"y\":39},{\"height\":1230.36696969697,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":1215.33,\"y\":37.6969663636364},{\"height\":12.3333,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1148,\"x\":65.3333,\"y\":1253},{\"height\":1230.36696969697,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":40.6667,\"y\":37.0303033636364},{\"height\":29.3333666666667,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":300.667,\"x\":61.3333,\"y\":293.333},{\"height\":273,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":232,\"x\":128.666,\"y\":489.667},{\"height\":645.999666666667,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":360.667,\"y\":293.333333333333},{\"height\":191.667,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":256.667,\"y\":936.333},{\"height\":22.6667,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":170,\"x\":276.667,\"y\":935.333},{\"height\":20.6667,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":767.333,\"x\":256.667,\"y\":1128.67},{\"height\":23.3333,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125.667,\"x\":705.667,\"y\":999.667},{\"height\":709.333333333333,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":808.667,\"y\":294.666666666667},{\"height\":147.666333333333,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127.666633333333,\"x\":703.667,\"y\":555.333666666667},{\"height\":24.3332966666667,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126.666,\"x\":703.667,\"y\":294.833},{\"height\":24.3333,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.167,\"x\":448,\"y\":294.833},{\"height\":280.667,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":448,\"y\":295},{\"height\":149.667,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.333366666667,\"x\":447.000333333333,\"y\":556.333},{\"height\":23.6667,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":447.667,\"y\":999.333},{\"height\":332.667,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":447.333,\"y\":669},{\"height\":29.3333,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63.5,\"x\":384,\"y\":418.667},{\"height\":594.5,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":163,\"x\":832,\"y\":361},{\"height\":977.625,\"id\":45,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":998.5,\"y\":166.375},{\"height\":24.1087,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":700.978,\"x\":298.022,\"y\":165.391},{\"height\":659.636363636364,\"id\":48,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":83,\"x\":1027.5,\"y\":359.363636363636}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":54,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20},\"mapSpriteSheet\":{\"name\":\"level_2_MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"enemies\":{\"enemy_1\":{\"rangeZone\":{\"up\":128,\"right\":64,\"down\":128,\"left\":64},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":400,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":1,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":450,\"isStop\":true,\"stopTime\":3000},{\"x\":450,\"y\":450,\"isStop\":false},{\"x\":450,\"y\":200,\"isStop\":false},{\"x\":500,\"y\":200,\"isStop\":true,\"stopTime\":3000}]}}}}}}}");

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
/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enemy/enemy */ "./src/enemy/enemy.js");
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
    _this.enemies = Object.values(prop.enemies).map(function (enemy) {
      return new _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](enemy);
    });
    _this.collision = collision;
    return _this;
  }

  _createClass(Level, [{
    key: "init",
    value: function init() {
      this.map.init();
      this.player.controller.start();
      this.enemies.forEach(function (enemy) {
        return enemy.init();
      });
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
      var _this2 = this;

      this.update(time);
      this.map.render(this.screen);
      this.enemies.forEach(function (enemy) {
        return enemy.render(time, _this2.screen);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9ib2RpZXMvYm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9mcHNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9nYW1lQ3RybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvc2NlbmVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9lbmVteUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW15L2NvbnRyb2xsZXJzL21vdmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkvcmFuZ2Vab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvaWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL3RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waHlzaWMvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMva2V5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL2NvbnRyb2xsZXJzL21vdmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMvcGxheWVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9sYWJlbEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hbmltYXRpb24vc3ByaXRlQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sZXZlbC9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sZXZlbC9sZXZlbF8xLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xldmVsL2xldmVsXzIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9tZW51L3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjcmVlbi9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NyZWVuL3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJCb2R5QW5pbWF0aW9uIiwidmlldyIsIm1vdmVDb250cm9sbGVyIiwidGltZSIsInNldEFuaW1hdGlvbiIsImlzTW92ZSIsImRpcmVjdGlvbiIsImFuaW1hdGlvbiIsInVwZGF0ZSIsIkJvZHkiLCJwcm9wIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIm1vdmVTcGVlZCIsInZpc2libGUiLCJib3hDb2xsaWRlciIsIkJveENvbGxpZGVyIiwiX3giLCJfeSIsInNjcmVlbiIsInN0cm9rZVJlY3QiLCJyZW5kZXIiLCJDaGFyYWN0ZXIiLCJuYW1lIiwiYm9keSIsIlZpZXciLCJpbml0IiwiZHJhd1Nwcml0ZSIsImdldFNwcml0ZSIsInNwcml0ZVNoZWV0IiwiU3ByaXRlU2hlZXQiLCJhbmltYXRpb25MaXN0IiwidGVtcEFuaW1hdGlvblByb3AiLCJmb3JFYWNoIiwiU3ByaXRlQW5pbWF0aW9uIiwiZnJhbWVEZWxheSIsImluZGljZXMiLCJyZXBlYXQiLCJhdXRvcnVuIiwicnVuIiwiYW5pbWF0aW9uTmFtZSIsInN0b3AiLCJjdXJyZW50RnJhbWVJbmRleCIsIkZQU0NvbnRyb2xsZXIiLCJmcHMiLCJfZnBzIiwiZnJhbWVUaW1lIiwiX19sYWJlbF9fIiwiTGFiZWwiLCJsYWJlbCIsIk1hdGgiLCJ0cnVuYyIsInRleHQiLCJkcmF3TGFiZWwiLCJHYW1lQ29udHJvbGxlciIsImxlbmd0aCIsInNjZW5lQ29udHJvbGxlciIsImN1cnJlbnRTY2VuZSIsImZwc0NvbnRyb2xsZXIiLCJjb250cm9sbGVycyIsImN0cmwiLCJFcnJvciIsImNvbnRyb2xsZXJOYW1lIiwiU2NlbmVDb250cm9sbGVyIiwic2NlbmVzIiwic2NlbmUiLCJpc0luaXRpYWxpemVkIiwibG9hZGluZyIsInNldFNjZW5lIiwic2NlbmVOYW1lIiwic3RhcnQiLCJzdGF0dXMiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJlbCIsIm5leHQiLCJwYXJlbnQiLCJFbmVteUNvbnRyb2xsZXIiLCJlbmVteSIsIkVuZW15TW92ZUNvbnRyb2xsZXIiLCJhbmltYXRpb25Db250cm9sbGVyIiwibW92ZVBvaW50cyIsImN1cnJlbnRNb3ZlUG9pbnRJbmRleCIsImN1cnJlbnRNb3ZlUG9pbnQiLCJtb3ZlIiwiaXNTdG9wIiwibW92ZVJvdGF0ZSIsInNldFRpbWVvdXQiLCJzdG9wVGltZSIsInJldmVyc2UiLCJhIiwiYiIsIm1vdmVVcCIsImJpbmQiLCJtb3ZlUmlnaHQiLCJtb3ZlRG93biIsIm1vdmVMZWZ0IiwicG9pbnQiLCJpc1Bhc3NlZCIsIkVuZW15IiwicmFuZ2Vab25lIiwiRW5lbXRSYW5nZVpvbmUiLCJjb250cm9sbGVyIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwieDEiLCJ4MiIsInkxIiwieTIiLCJzZXRQb3NpdGlvbiIsIkdhbWUiLCJnYW1lSlNPTiIsImlzUnVubmluZyIsIlNjcmVlbiIsInBsYXllciIsIlBsYXllciIsImNvbGxpc2lvbiIsIkNvbGxpc2lvbiIsImFkZCIsIkxvYWRpbmdTY2VuZSIsInN0YXJ0TWVudSIsIlN0YXJ0TWVudSIsImxldmVsXzEiLCJMZXZlbF8xIiwibGV2ZWxfMiIsIkxldmVsXzIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkJ1dHRvbiIsImJnY29sb3IiLCJjb2xvcnMiLCJsYWJlbFByb3AiLCJhbmltYXRlZCIsImFuaW1hdGlvblByb3AiLCJ1bmRlZmluZWQiLCJpc01vdXNlRG93biIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0YXJnZXQiLCJmdW5jdGlvbnMiLCJfbGlzdGVuZXJNb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lck1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJfbGlzdGVuZXJNb3VzZUNsaWNrIiwibW91c2VDbGlja0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhd0J1dHRvbiIsIklFbGVtZW50IiwiX2FuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsIm5ld1giLCJuZXdZIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiTGFiZWxBbmltYXRpb24iLCJ0ZXh0Q29sbGVjdGlvbiIsIlRpbGUiLCJvcHRpb25zIiwiX19vcHRpb25zX18iLCJmb2ciLCJmaWxsIiwid2luZG93Iiwib25sb2FkIiwiZ2FtZSIsImNvbGxpZGVycyIsImNvbGxpZGVyIiwiaW50ZXJzZWN0Iiwib3V0Q29sbGlkZXIiLCJib3giLCJtaW4iLCJhYnMiLCJQbGF5ZXJLZXlDb250cm9sbGVyIiwia2V5cyIsIktleVciLCJjb2RlIiwiaXNEb3duIiwiS2V5RCIsIktleVMiLCJLZXlBIiwiQXJyb3dVcCIsIkFycm93UmlnaHQiLCJBcnJvd0Rvd24iLCJBcnJvd0xlZnQiLCJTcGFjZSIsImlzS2V5RG93biIsInN0YXJ0RXZlbnRMaXN0ZW4iLCJzdG9wRXZlbnRMaXN0ZW4iLCJfbGlzdGVuZXJLZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJfbGlzdGVuZXJLZXlVcCIsImtleVVwSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiUGxheWVyTW92ZUNvbnRyb2xsZXIiLCJrZXlDb250cm9sbGVyIiwiUGxheWVyQ29udHJvbGxlciIsIkFuaW1hdGlvbiIsImxhc3RGcmFtZVRpbWUiLCJuZXh0RnJhbWUiLCJjdXJyZW50VGV4dEluZGV4IiwiZnJhbWVzIiwiZ2V0RnJhbWVzIiwibWFwIiwiaW5kZXgiLCJzb3VyY2VYIiwiZ2V0U291cmNlWCIsInNvdXJjZVkiLCJnZXRTb3VyY2VZIiwiQ2FtZXJhIiwibGltaXRYIiwibGltaXRZIiwic2Nyb2xsRWRnZSIsIndhdGNoT2JqZWN0Iiwib2JqIiwibWF4IiwiTWFwIiwiZGF0YSIsIm1hcERhdGEiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwidGlsZVNldCIsIm1hcFNwcml0ZVNoZWV0Iiwicm93IiwiY29sdW1uIiwibGF5ZXJzIiwiZGVmYXVsdExheWVyIiwidXBwZXJMYXllciIsImNyZWF0ZUxheWVycyIsImxheWVyIiwidHlwZSIsInB1c2giLCJpbmRleGVzIiwiel9pbmRleCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIm9iamVjdHMiLCJpdGVtIiwic29ydCIsInRpbGUiLCJzcHJpdGUiLCJjb2wiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsInNyYyIsImltYWdlIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsIl9sb2FkIiwidGhlbiIsImVycm9yIiwiTGV2ZWwiLCJlbmVtaWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2FtZXJhIiwid2F0Y2giLCJzZXRDYW1lcmEiLCJzZWNvbmRSZW5kZXIiLCJTY2VuZSIsImllbGVtZW50cyIsImJhY2tncm91bmQiLCJkaXNrIiwicmFuZG9tIiwicGxheUJ1dHRvbiIsIl9faW5fXyIsImRvY3VtZW50Iiwic3R5bGUiLCJjdXJzb3IiLCJjbGljayIsImhvdmVyIiwiYWRkTGlzdGVuZXJzIiwiY2FudmFzIiwiRE9NIiwicmVtb3ZlTGlzdGVuZXJzIiwiaWUiLCJDYW52YXMiLCJkaXYiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzQ2FtZXJhU2V0IiwiYnV0dG9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJkcmF3SW1hZ2UiLCJzcHJpdGVYIiwic3ByaXRlWSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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LEkiLCJmaWxlIjoiLi9qcy9reHJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQm9keUFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb3ZlQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG1vdmVDb250cm9sbGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMudmlldy5zZXRBbmltYXRpb24oICh0aGlzLm1vdmVDb250cm9sbGVyLmlzTW92ZSA/IFwid2Fsay1cIiA6IFwiaWRsZS1cIikgKyB0aGlzLm1vdmVDb250cm9sbGVyLmRpcmVjdGlvbiApO1xyXG4gICAgICAgIHRoaXMudmlldy5hbmltYXRpb24udXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwiLi9ib3hDb2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMueCA9IHByb3AueDtcclxuICAgICAgICB0aGlzLnkgPSBwcm9wLnk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gcHJvcC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3AuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gcHJvcC5tb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHByb3AudmlzaWJsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcihwcm9wLmJveENvbGxpZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueCA9IHRoaXMueCArIHRoaXMuYm94Q29sbGlkZXIuX3g7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci55ID0gdGhpcy55ICsgdGhpcy5ib3hDb2xsaWRlci5feTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci54ID0gdGhpcy54ICsgdGhpcy5ib3hDb2xsaWRlci5feDtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnkgPSB0aGlzLnkgKyB0aGlzLmJveENvbGxpZGVyLl95O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgJiYgc2NyZWVuLnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnJlbmRlcihzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEJveENvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3AuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnggPSBwcm9wLng7IHRoaXMuX3ggPSBwcm9wLng7XHJcbiAgICAgICAgdGhpcy55ID0gcHJvcC55OyB0aGlzLl95ID0gcHJvcC55O1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBwcm9wLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSAmJiBzY3JlZW4uc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3AubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEJvZHkocHJvcC5ib2R5KTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVmlldyhwcm9wLnZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcclxuICAgICAgICB0aGlzLmJvZHkuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5ib2R5LnVwZGF0ZSgpOyB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnZpZXcuZ2V0U3ByaXRlKCksIHRoaXMuYm9keS54LCB0aGlzLmJvZHkueSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LnJlbmRlcihzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IFNwcml0ZVNoZWV0KHByb3Auc3ByaXRlU2hlZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3QgPSB7fTtcclxuICAgICAgICB0aGlzLnRlbXBBbmltYXRpb25Qcm9wID0gcHJvcC5hbmltYXRpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uTGlzdCA9PSB7fSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wQW5pbWF0aW9uUHJvcC5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb24ubmFtZV0gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICBhbmltYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVNoZWV0OiB0aGlzLnNwcml0ZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgZnJhbWVEZWxheTogIGFuaW1hdGlvbi5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogICAgIGFuaW1hdGlvbi5pbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAgICAgIGFuaW1hdGlvbi5yZXBlYXQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcnVuOiAgICAgYW5pbWF0aW9uLmF1dG9ydW4gXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3RbYW5pbWF0aW9uLm5hbWVdLmluaXQoKTtcclxuICAgICAgICB9KTsgZGVsZXRlIHRoaXMudGVtcEFuaW1hdGlvblByb3A7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbkxpc3RbXCJpZGxlLWRvd25cIl07XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24ubmFtZSA9PSBhbmltYXRpb25OYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uTGlzdFthbmltYXRpb25OYW1lXTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcHJpdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlU2hlZXQuZ2V0U3ByaXRlKHRoaXMuYW5pbWF0aW9uLmluZGljZXNbdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lSW5kZXhdKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL2llbGVtZW50cy9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZQU0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiZnBzQ29udHJvbGxlclwiO1xyXG5cclxuICAgICAgICB0aGlzLmZwcyAgPSAwOyAgLy8gZXZlcnkgc2Vjb25kXHJcbiAgICAgICAgdGhpcy5fZnBzID0gMDsgLy8gZXZlcnkgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9fbGFiZWxfXyA9IG5ldyBMYWJlbChwcm9wLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLl9fbGFiZWxfXy5pbml0KCk7IH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZSA9PSBNYXRoLnRydW5jKHRpbWUgLyAxMDAwKSkge1xyXG4gICAgICAgICAgICArK3RoaXMuX2ZwcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZwcyA9ICsrdGhpcy5fZnBzO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZSA9IE1hdGgudHJ1bmModGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9mcHMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fX2xhYmVsX18udGV4dCA9IGBGUFM6ICR7dGhpcy5mcHN9YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd0xhYmVsKHRoaXMuX19sYWJlbF9fKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5sZW5ndGggPSAwOyB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVDb250cm9sbGVyICYmIHRoaXMuc2NlbmVDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lQ29udHJvbGxlciAmJiB0aGlzLnNjZW5lQ29udHJvbGxlci5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5mcHNDb250cm9sbGVyICAgJiYgdGhpcy5mcHNDb250cm9sbGVyLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5jb250cm9sbGVycykge1xyXG4gICAgICAgIGZvciAobGV0IGN0cmwgb2YgY29udHJvbGxlcnMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzW2N0cmwubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3RybC5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5hbWUgb2YgY29udHJvbGxlciwgbmFtZSBpcyBtdXN0IGJlIGxpa2UgJ3NjZW5lQ29udHJvbGxlcidcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXNbY3RybC5uYW1lXSA9IGN0cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2N0cmwubmFtZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICsrdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoY29udHJvbGxlck5hbWUpIHtcclxuICAgICAgICBpZiAodGhpc1tjb250cm9sbGVyTmFtZV0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbY29udHJvbGxlck5hbWVdO1xyXG4gICAgICAgICAgICAtLXRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJzY2VuZUNvbnRyb2xsZXJcIiwgc2NlbmVzIH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHNjZW5lIGluIHNjZW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0gPSBzY2VuZXNbc2NlbmVdO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0uaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY2VuZXMubG9hZGluZykgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBtdXN0IGhhdmUgbG9hZGluZyBzY2VuZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTY2VuZShcImxldmVsXzJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NlbmUoc2NlbmVOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lc1tzY2VuZU5hbWVdKSByZXR1cm47XHJcblxyXG4gICAgICAgICF0aGlzLnNjZW5lc1tzY2VuZU5hbWVdLmlzSW5pdGlhbGl6ZWQgJiYgKHRoaXMuc2NlbmVzW3NjZW5lTmFtZV0uaXNJbml0aWFsaXplZCA9IHRydWUpICYmIHRoaXMuc2NlbmVzW3NjZW5lTmFtZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzW3NjZW5lTmFtZV07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgPSBcInJ1bm5pbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoLi4uc2NlbmVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2NlbmUgb2Ygc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2NlbmUubmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiU2NlbmUgbXVzdCBoYXZlIG5hbWUsIGxpa2UgJ3N0YXJ0TWVudSdcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdID0gc2NlbmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXS5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoc2NlbmVOYW1lKSB7IHRoaXMuc2NlbmVzW3NjZW5lTmFtZV0gJiYgdGhpcy5zY2VuZXMuc3BsaWNlKHRoaXMuc2NlbmVzLmZpbmRJbmRleChlbCA9PiBlbC5uYW1lID09IHNjZW5lTmFtZSkpOyB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHNjZW5lIGluIHRoaXMuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lc1tzY2VuZV0uc3RhdHVzID09IFwiZmluaXNoXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY2VuZS5uZXh0ID09IFwibm9uZVwiKSB0aGlzLnNjZW5lc1tzY2VuZV0uc3RhdHVzID0gXCJydW5uaW5nXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY2VuZSh0aGlzLnNjZW5lc1tzY2VuZV0ubmV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucGFyZW50ID0gdGhpcy5zY2VuZXNbc2NlbmVdLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXS5zdGF0dXMgPSBcInJlYWR5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVdLm5leHQgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEJvZHlBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vYm9kaWVzL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBFbmVteU1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZW5lbXksIHByb3ApIHtcclxuICAgICAgICB0aGlzLmVuZW15ID0gZW5lbXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBFbmVteU1vdmVDb250cm9sbGVyKHRoaXMuZW5lbXkuYm9keSwgcHJvcC5tb3ZlQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEJvZHlBbmltYXRpb24odGhpcy5lbmVteS52aWV3LCB0aGlzLm1vdmVDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFbmVteU1vdmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvZHksIHByb3ApIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW92ZVBvaW50cyA9IHByb3AubW92ZVBvaW50cztcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvaW50ID0gdGhpcy5tb3ZlUG9pbnRzW3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc01vdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS54ICE9IHRoaXMuY3VycmVudE1vdmVQb2ludC54IHx8IHRoaXMuYm9keS55ICE9IHRoaXMuY3VycmVudE1vdmVQb2ludC55KVxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoKSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudE1vdmVQb2ludEluZGV4IDwgdGhpcy5tb3ZlUG9pbnRzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludCA9IHRoaXMubW92ZVBvaW50c1srK3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vdmVQb2ludC5pc1N0b3ApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVSb3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5pc01vdmUgPSB0cnVlOyB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcy5jdXJyZW50TW92ZVBvaW50LnN0b3BUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUm90YXRlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZVBvaW50cyA9IHRoaXMubW92ZVBvaW50cy5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvaW50SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludCA9IHRoaXMubW92ZVBvaW50c1t0aGlzLmN1cnJlbnRNb3ZlUG9pbnRJbmRleF07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb3ZlUG9pbnQuaXNTdG9wKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5ib2R5LCBiID0gdGhpcy5jdXJyZW50TW92ZVBvaW50O1xyXG5cclxuICAgICAgICBpZiAoYS54ID09IGIueCAmJiBhLnkgPiBiLnkpIHJldHVybiB0aGlzLm1vdmVVcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGlmIChhLnkgPT0gYi55ICYmIGEueCA8IGIueCkgcmV0dXJuIHRoaXMubW92ZVJpZ2h0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgaWYgKGEueCA9PSBiLnggJiYgYS55IDwgYi55KSByZXR1cm4gdGhpcy5tb3ZlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGlmIChhLnkgPT0gYi55ICYmIGEueCA+IGIueSkgcmV0dXJuIHRoaXMubW92ZUxlZnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUG9pbnRzUmVzZXQoKSB7IHRoaXMubW92ZVBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHBvaW50LmlzUGFzc2VkID0gZmFsc2UpOyB9XHJcblxyXG4gICAgbW92ZVVwKCkgICAge1xyXG4gICAgICAgIHRoaXMuYm9keS55IC09IHRoaXMuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInVwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMuYm9keS54ICs9IHRoaXMuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZURvd24oKSAge1xyXG4gICAgICAgIHRoaXMuYm9keS55ICs9IHRoaXMuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdCgpICB7XHJcbiAgICAgICAgdGhpcy5ib2R5LnggLT0gdGhpcy5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL2JvZGllcy9jaGFyYWN0ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXRSYW5nZVpvbmUgfSBmcm9tIFwiLi9yYW5nZVpvbmVcIjtcclxuaW1wb3J0IHsgRW5lbXlDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvZW5lbXlDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHN1cGVyKHByb3ApO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2Vab25lID0gbmV3IEVuZW10UmFuZ2Vab25lKHRoaXMuYm9keSwgcHJvcC5yYW5nZVpvbmUpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgRW5lbXlDb250cm9sbGVyKHRoaXMsIHByb3AuY29udHJvbGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5yYW5nZVpvbmUuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2Vab25lLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEVuZW10UmFuZ2Vab25lIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvZHksIHByb3ApIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG5cclxuICAgICAgICB0aGlzLnVwID0gcHJvcC51cDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcHJvcC5yaWdodDtcclxuICAgICAgICB0aGlzLmRvd24gPSBwcm9wLmRvd247XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gcHJvcC5sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMueDEgPSB0aGlzLmJvZHkueCAtIHRoaXMubGVmdDtcclxuICAgICAgICB0aGlzLngyID0gdGhpcy5ib2R5LnggKyB0aGlzLmJvZHkud2lkdGggKyB0aGlzLnJpZ2h0O1xyXG4gICAgICAgIHRoaXMueTEgPSB0aGlzLmJvZHkueSAtIHRoaXMudXA7XHJcbiAgICAgICAgdGhpcy55MiA9IHRoaXMuYm9keS55ICsgdGhpcy5ib2R5LmhlaWdodCArIHRoaXMuZG93bjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgICB7IHRoaXMuc2V0UG9zaXRpb24oKTsgfVxyXG4gICAgdXBkYXRlKCkgeyB0aGlzLnNldFBvc2l0aW9uKCk7IH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2NyZWVuLnN0cm9rZVJlY3QodGhpcy54MSwgdGhpcy55MSwgdGhpcy54Mi10aGlzLngxLCB0aGlzLnkyLXRoaXMueTEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuICAgICAgIH0gZnJvbSBcIi4vdmlldy9zY3JlZW4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTY2VuZSB9IGZyb20gXCIuL3ZpZXcvc2NlbmUvbG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBTdGFydE1lbnUgfSAgICBmcm9tIFwiLi92aWV3L3NjZW5lL21lbnUvc3RhcnRcIjtcclxuaW1wb3J0IHsgTGV2ZWxfMSB9ICAgICAgZnJvbSBcIi4vdmlldy9zY2VuZS9sZXZlbC9sZXZlbF8xXCI7XHJcbmltcG9ydCB7IExldmVsXzIgfSBmcm9tIFwiLi92aWV3L3NjZW5lL2xldmVsL2xldmVsXzJcIjtcclxuXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyICB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9nYW1lQ3RybFwiO1xyXG5pbXBvcnQgeyBTY2VuZUNvbnRyb2xsZXIgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvc2NlbmVDdHJsXCI7XHJcbmltcG9ydCB7IEZQU0NvbnRyb2xsZXIgICB9ICBmcm9tIFwiLi9jb250cm9sbGVycy9mcHNDb250cm9sbGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb2xsaXNpb24gfSBmcm9tIFwiLi9waHlzaWMvY29sbGlzaW9uXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XHJcblxyXG5pbXBvcnQgZ2FtZUpTT04gZnJvbSBcIi4vZ2FtZS5qc29uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBnYW1lSlNPTi5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbihnYW1lSlNPTi5zY3JlZW4pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGdhbWVKU09OLnBsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbih0aGlzLnBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbi5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5hZGQoXHJcbiAgICAgICAgICAgIG5ldyBTY2VuZUNvbnRyb2xsZXIoeyBzY2VuZXM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICAgbmV3IExvYWRpbmdTY2VuZSh7IHNjcmVlbjogdGhpcy5zY3JlZW4sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sb2FkaW5nIH0pLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRNZW51OiBuZXcgU3RhcnRNZW51KHsgc2NyZWVuOiB0aGlzLnNjcmVlbiwgcHJvcDogZ2FtZUpTT04uc2NlbmVzLnN0YXJ0TWVudSB9KSxcclxuICAgICAgICAgICAgICAgIGxldmVsXzE6ICAgbmV3IExldmVsXzEoeyBwbGF5ZXI6IHRoaXMucGxheWVyLCBzY3JlZW46IHRoaXMuc2NyZWVuLCBjb2xsaXNpb246IHRoaXMuY29sbGlzaW9uLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubGV2ZWxfMSB9KSxcclxuICAgICAgICAgICAgICAgIGxldmVsXzI6ICAgbmV3IExldmVsXzIoeyBwbGF5ZXI6IHRoaXMucGxheWVyLCBzY3JlZW46IHRoaXMuc2NyZWVuLCBjb2xsaXNpb246IHRoaXMuY29sbGlzaW9uLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMubGV2ZWxfMiB9KVxyXG4gICAgICAgICAgICB9IH0pLFxyXG4gICAgICAgICAgICBuZXcgRlBTQ29udHJvbGxlcihnYW1lSlNPTi5mcHNDb250cm9sbGVyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAodGhpcy5pc1J1bm5pbmcgPSB0cnVlKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwiYnV0dG9uXCIsIHdpZHRoLCBoZWlnaHQsIGJnY29sb3IsIGNvbG9ycywgbGFiZWxQcm9wLCB4ID0gMCwgeSA9IDAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgPSB1bmRlZmluZWQgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgeDogeCwgeTogeSwgYW5pbWF0ZWQ6IGFuaW1hdGVkLCBhbmltYXRpb25Qcm9wOiBhbmltYXRpb25Qcm9wIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmJnY29sb3IgPSBiZ2NvbG9yO1xyXG4gICAgICAgIHRoaXMuY29sb3JzICA9IGNvbG9ycztcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChsYWJlbFByb3ApO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX19pbl9fKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICggKGV2ZW50Lm9mZnNldFggPj0gdGhpcy54KSAmJiAoZXZlbnQub2Zmc2V0WCA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSAgKVxyXG4gICAgICAgICAgICAmJiAoIChldmVudC5vZmZzZXRZID49IHRoaXMueSkgJiYgKGV2ZW50Lm9mZnNldFkgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzKHRhcmdldCwgZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlICA9IGZ1bmN0aW9ucy5tb3VzZU1vdmVIYW5kbGVyICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUpO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlRG93biAgPSBmdW5jdGlvbnMubW91c2VEb3duSGFuZGxlciApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duKTtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZVVwICAgID0gZnVuY3Rpb25zLm1vdXNlVXBIYW5kbGVyICAgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgICB0aGlzLl9saXN0ZW5lck1vdXNlVXApO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2sgPSBmdW5jdGlvbnMubW91c2VDbGlja0hhbmRsZXIpICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSkgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlRG93biAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24pICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZURvd247XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwICAgICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCkgICAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VVcDtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2sgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrKSAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYWJlbC54ICs9IHRoaXMueDtcclxuICAgICAgICB0aGlzLmxhYmVsLnkgKz0gdGhpcy55O1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikgeyBzY3JlZW4uZHJhd0J1dHRvbih0aGlzKTsgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwiaWVsZW1lbnRcIiwgeCA9IDAsIHkgPSAwLCBhbmltYXRlZCA9IGZhbHNlLCBhbmltYXRpb25Qcm9wIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IGFuaW1hdGVkO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvblByb3A7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuY3JlYXRlQW5pbWF0aW9uKHRoaXMuX2FuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkgeyB0aGlzLmFuaW1hdGVkICYmIHRoaXMuYW5pbWF0aW9uLnVwZGF0ZSh0aW1lKTsgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbigpIHt9XHJcblxyXG4gICAgc2V0WFkobmV3WCwgbmV3WSkge1xyXG4gICAgICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTGFiZWxBbmltYXRpb24gfSBmcm9tIFwiLi4vdmlldy9hbmltYXRpb24vbGFiZWxBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJlbCBleHRlbmRzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxcIiwgdGV4dCA9IFwibGFiZWxcIiwgeCA9IDEwLCB5ID0gMTAsIGNvbG9yID0gXCIjNDQ0NDQ0XCIsXHJcbiAgICAgICAgZm9udFNpemUgPSAzNiwgZm9udFdlaWdodCA9IFwibm9ybWFsXCIsIGZvbnRGYW1pbHkgPSBcIkNvdXJpZXIgTmV3XCIsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgPSB1bmRlZmluZWQgfSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgeDogeCwgeTogeSwgYW5pbWF0ZWQ6IGFuaW1hdGVkLCBhbmltYXRpb25Qcm9wOiBhbmltYXRpb25Qcm9wIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSAgID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5mb250V2VpZ2h0ID0gZm9udFdlaWdodDtcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbihwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMYWJlbEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLFxyXG4gICAgICAgICAgICBmcmFtZURlbGF5OiAgICAgcHJvcC5mcmFtZURlbGF5LFxyXG4gICAgICAgICAgICByZXBlYXQ6ICAgICAgICAgcHJvcC5yZXBlYXQsXHJcbiAgICAgICAgICAgIGF1dG9ydW46ICAgICAgICBwcm9wLmF1dG9ydW4sXHJcbiAgICAgICAgICAgIHRleHRDb2xsZWN0aW9uOiBwcm9wLnRleHRDb2xsZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIHNjcmVlbi5kcmF3TGFiZWwodGhpcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuL2llbGVtZW50XCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldFwiO1xyXG5pbXBvcnQgeyBTcHJpdGVBbmltYXRpb24gfSBmcm9tIFwiLi4vdmlldy9hbmltYXRpb24vc3ByaXRlQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIElFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwidGlsZVwiLCB3aWR0aCwgaGVpZ2h0LCBzcHJpdGVTaGVldCwgeCA9IDEwLCB5ID0gMTAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB1bmRlZmluZWQgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgeDogeCwgeTogeSwgYW5pbWF0ZWQ6IGFuaW1hdGVkLCBhbmltYXRpb25Qcm9wOiBhbmltYXRpb25Qcm9wIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICBvcHRpb25zICYmICh0aGlzLl9fb3B0aW9uc19fID0gb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgU3ByaXRlU2hlZXQoc3ByaXRlU2hlZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb24ocHJvcCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgc3ByaXRlU2hlZXQ6IHRoaXMuc3ByaXRlU2hlZXQsXHJcbiAgICAgICAgICAgIGluZGljZXM6ICAgICBwcm9wLmluZGljZXMsXHJcbiAgICAgICAgICAgIGF1dG9ydW46ICAgICBwcm9wLmF1dG9ydW4sXHJcbiAgICAgICAgICAgIGZyYW1lRGVsYXk6ICBwcm9wLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgICBwcm9wLm5hbWUsXHJcbiAgICAgICAgICAgIHJlcGVhdDogICAgICBwcm9wLnJlcGVhdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgc2NyZWVuLmRyYXdTcHJpdGUoXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuZ2V0U3ByaXRlKCh0aGlzLmFuaW1hdGVkICYmIHRoaXMuYW5pbWF0aW9uLmluZGljZXNbdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lSW5kZXhdKSB8fCAxKSxcclxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX19vcHRpb25zX18gJiYgdGhpcy5fX29wdGlvbnNfXy5mb2cgJiYgc2NyZWVuLmZpbGwoXCIjMDAwMDAwNjZcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuICAgIGdhbWUucnVuKCk7XHJcbn07IiwiZXhwb3J0IGNsYXNzIENvbGxpc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5jb2xsaWRlcnMuZm9yRWFjaChjb2xsaWRlciA9PiB0aGlzLmludGVyc2VjdChjb2xsaWRlcikgJiYgdGhpcy5vdXRDb2xsaWRlcihjb2xsaWRlcikgKTsgfVxyXG5cclxuICAgIG91dENvbGxpZGVyKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLnBsYXllci5ib2R5O1xyXG4gICAgICAgIGxldCBib3ggPSB7XHJcbiAgICAgICAgICAgIF94OiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLl94LCBfeTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5feSxcclxuICAgICAgICAgICAgeDE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueCwgIHgyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnggKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55LCAgeTI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci53aWR0aCwgaGVpZ2h0OiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLmhlaWdodCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbGxpZGVyLngxIC0gYm94LngyKSwgTWF0aC5hYnMoY29sbGlkZXIueDIgLSBib3gueDEpLFxyXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xsaWRlci55MSAtIGJveC55MiksIE1hdGguYWJzKGNvbGxpZGVyLnkyIC0gYm94LnkxKSApO1xyXG5cclxuICAgICAgICBzd2l0Y2gobWluKSB7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MSAtIGJveC54Mik6IHRoaXMucGxheWVyLmJvZHkueCA9IGNvbGxpZGVyLngxIC0gYm9keS53aWR0aCArIGJveC5feDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MiAtIGJveC54MSk6IHRoaXMucGxheWVyLmJvZHkueCA9IGNvbGxpZGVyLngyIC0gYm94Ll94KzI7ICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci55MSAtIGJveC55Mik6IHRoaXMucGxheWVyLmJvZHkueSA9IGNvbGxpZGVyLnkxIC0gYm9keS5oZWlnaHQtMjsgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci55MiAtIGJveC55MSk6IHRoaXMucGxheWVyLmJvZHkueSA9IGNvbGxpZGVyLnkyIC0gYm94Ll95KzI7ICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVyc2VjdChjb2xsaWRlcikge1xyXG4gICAgICAgIGxldCBib3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLngsIHgyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnggKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55LCB5MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoYm94LngyID4gY29sbGlkZXIueDEgJiYgYm94LngxIDwgY29sbGlkZXIueDEgJiYgYm94LnkyID4gY29sbGlkZXIueTEgJiYgYm94LnkxIDwgY29sbGlkZXIueTIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPCBjb2xsaWRlci54MiAmJiBib3gueDIgPiBjb2xsaWRlci54MiAmJiBib3gueTIgPiBjb2xsaWRlci55MSAmJiBib3gueTEgPCBjb2xsaWRlci55MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC55MiA+IGNvbGxpZGVyLnkxICYmIGJveC55MSA8IGNvbGxpZGVyLnkxICYmIGJveC54MiA+IGNvbGxpZGVyLngxICYmIGJveC54MSA8IGNvbGxpZGVyLngyKSB8fFxyXG4gICAgICAgICAgICAgICAoYm94LnkxIDwgY29sbGlkZXIueTIgJiYgYm94LnkyID4gY29sbGlkZXIueTIgJiYgYm94LngyID4gY29sbGlkZXIueDEgJiYgYm94LngxIDwgY29sbGlkZXIueDIpIHx8XHJcbiAgICAgICAgICAgICAgIChib3gueDEgPj0gY29sbGlkZXIueDEgJiYgYm94LngyIDw9IGNvbGxpZGVyLngyICYmIGJveC55MSA+PSBjb2xsaWRlci55MSAmJiBib3gueTIgPD0gY29sbGlkZXIueTIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBsYXllcktleUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlzID0ge1xyXG4gICAgICAgICAgICBLZXlXOiB7IGNvZGU6IDg3LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEtleUQ6IHsgY29kZTogNjgsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgS2V5UzogeyBjb2RlOiA4MywgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBLZXlBOiB7IGNvZGU6IDY1LCBpc0Rvd246IGZhbHNlIH0sXHJcblxyXG4gICAgICAgICAgICBBcnJvd1VwOiAgICB7IGNvZGU6IDM4LCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEFycm93UmlnaHQ6IHsgY29kZTogMzksIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgQXJyb3dEb3duOiAgeyBjb2RlOiA0MCwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBBcnJvd0xlZnQ6ICB7IGNvZGU6IDM3LCBpc0Rvd246IGZhbHNlIH0sXHJcblxyXG4gICAgICAgICAgICBTcGFjZTogeyBjb2RlOiAzMiwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaXNLZXlEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7IHRoaXMuc3RhcnRFdmVudExpc3RlbigpOyB9XHJcbiAgICBzdG9wKCkgIHsgdGhpcy5zdG9wRXZlbnRMaXN0ZW4oKTsgIH1cclxuXHJcbiAgICBzdGFydEV2ZW50TGlzdGVuKCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5RG93biA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleVVwICAgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9saXN0ZW5lcktleURvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLl9saXN0ZW5lcktleVVwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlEb3duICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9saXN0ZW5lcktleURvd24pICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcktleURvd247XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlVcCAgICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLl9saXN0ZW5lcktleVVwKSAgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcktleVVwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5pc0tleURvd24gPSB0aGlzLmtleXMuS2V5Vy5pc0Rvd24gfHwgdGhpcy5rZXlzLktleUQuaXNEb3duIHx8IHRoaXMua2V5cy5LZXlTLmlzRG93biB8fCB0aGlzLmtleXMuS2V5QS5pc0Rvd247IH1cclxuXHJcbiAgICBrZXlEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbZXZlbnQuY29kZV0pIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdLmlzRG93biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVVwSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbZXZlbnQuY29kZV0pIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdLmlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQbGF5ZXJNb3ZlQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGtleUNvbnRyb2xsZXIsIHByb3ApIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmtleUNvbnRyb2xsZXIgPSBrZXlDb250cm9sbGVyO1xyXG5cclxuICAgICAgICB0aGlzLmtleXMgPSBwcm9wLmtleXM7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy51cF0uaXNEb3duKSAgICB0aGlzLm1vdmVVcCgpOyAgIFxyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMucmlnaHRdLmlzRG93bikgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLmRvd25dLmlzRG93bikgIHRoaXMubW92ZURvd24oKTsgXHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5sZWZ0XS5pc0Rvd24pICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUNvbnRyb2xsZXIuaXNLZXlEb3duKSB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVVcCgpICAgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgLT0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnggKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVEb3duKCkgIHtcclxuICAgICAgICB0aGlzLnBsYXllci5ib2R5LnkgKz0gdGhpcy5wbGF5ZXIuYm9keS5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueCAtPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllcktleUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9rZXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBsYXllck1vdmVDb250cm9sbGVyIH0gZnJvbSBcIi4vbW92ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQm9keUFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi9ib2RpZXMvYW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBsYXllciwgcHJvcCB9KSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IG5ldyBQbGF5ZXJLZXlDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBQbGF5ZXJNb3ZlQ29udHJvbGxlcih0aGlzLnBsYXllciwgdGhpcy5rZXlDb250cm9sbGVyLCBwcm9wLm1vdmVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQm9keUFuaW1hdGlvbih0aGlzLnBsYXllci52aWV3LCB0aGlzLm1vdmVDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5rZXlDb250cm9sbGVyLnN0YXJ0KCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLmtleUNvbnRyb2xsZXIuc3RvcCgpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5rZXlDb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9wbGF5ZXJDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9ib2RpZXMvY2hhcmFjdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICBzdXBlcihwcm9wKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKHsgcGxheWVyOiB0aGlzLCBwcm9wOiBwcm9wLmNvbnRyb2xsZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBmcmFtZURlbGF5PSA1MCwgcmVwZWF0ID0gZmFsc2UsIGF1dG9ydW4gPSBmYWxzZSB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICAgICAgdGhpcy5hdXRvcnVuID0gYXV0b3J1bjtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gZnJhbWVEZWxheTtcclxuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IHRoaXMuYXV0b3J1biAmJiB0aGlzLnJ1bigpOyB9XHJcblxyXG4gICAgcnVuKCkgIHsgdGhpcy5pc1J1bm5pbmcgPSB0cnVlOyAgfVxyXG4gICAgc3RvcCgpIHsgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWVUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0RnJhbWVUaW1lKSA+IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwibGFiZWxBbmltYXRpb25cIiwgbGFiZWwsIGZyYW1lRGVsYXkgPSAyMDAsIHRleHRDb2xsZWN0aW9uID0gW10sIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGVjdGlvbiA9IHRleHRDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZXh0SW5kZXggKyAxID09IHRoaXMudGV4dENvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRJbmRleCA9IDA7XHJcbiAgICAgICAgfSBlbHNlICsrdGhpcy5jdXJyZW50VGV4dEluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMudGV4dENvbGxlY3Rpb25bdGhpcy5jdXJyZW50VGV4dEluZGV4XTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcInNwcml0ZUFuaW1hdGlvblwiLCBzcHJpdGVTaGVldCwgaW5kaWNlcywgZnJhbWVEZWxheSA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IGZhbHNlIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIGZyYW1lRGVsYXk6IGZyYW1lRGVsYXksIHJlcGVhdDogcmVwZWF0LCBhdXRvcnVuOiBhdXRvcnVuIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gc3ByaXRlU2hlZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lcyhpbmRpY2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGljZXMubWFwKCBpbmRleCA9PiAoe1xyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLnNwcml0ZVNoZWV0LmdldFNvdXJjZVkoaW5kZXgpXHJcbiAgICAgICAgfSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZUluZGV4ICsgMSA9PSB0aGlzLmZyYW1lcy5sZW5ndGggKSAmJiB0aGlzLnJlcGVhdClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucmVwZWF0KSBzdG9wKCk7XHJcbiAgICAgICAgZWxzZSArK3RoaXMuY3VycmVudEZyYW1lSW5kZXg7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNjQwLCBsaW1pdFkgPSA2NDAsIHNjcm9sbEVkZ2UgPSAzMDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xyXG4gICAgICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChvYmopIHtcclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBvYmouYm9keTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoT2JqZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCA+ICh0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMuYm9keS54IC0gdGhpcy53aWR0aCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLmJvZHkueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueSA+ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLmJvZHkueSAtIHRoaXMuaGVpZ2h0ICsgdGhpcy5zY3JvbGxFZGdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS55IDwgKHRoaXMueSArIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMuYm9keS55IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wLCBjb2xsaXNpb24pIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gcHJvcC5tYXBEYXRhO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHRoaXMuZGF0YS53aWR0aCAqIHRoaXMuZGF0YS50aWxld2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhdGEuaGVpZ2h0ICogdGhpcy5kYXRhLnRpbGVoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVNldCA9IG5ldyBTcHJpdGVTaGVldChwcm9wLm1hcFNwcml0ZVNoZWV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3cgICAgPSB0aGlzLmRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sdW1uID0gdGhpcy5kYXRhLndpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmxheWVycyAgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdExheWVyID0gW107XHJcbiAgICAgICAgdGhpcy51cHBlckxheWVyICAgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZVNldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGF5ZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBuYW1lOiBsYXllci5uYW1lLCBpbmRleGVzOiBsYXllci5kYXRhLCB6X2luZGV4OiBsYXllci5wcm9wZXJ0aWVzWzBdLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycyA9IGxheWVyLm9iamVjdHMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICB4MTogaXRlbS54LCB4MjogaXRlbS54ICsgaXRlbS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB5MTogaXRlbS55LCB5MjogaXRlbS55ICsgaXRlbS5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH0pICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXllcnMuc29ydCggKGEsIGIpID0+IGEuel9pbmRleCAtIGIuel9pbmRleCApO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uLmNvbGxpZGVycyA9IHRoaXMuY29sbGlkZXJzO1xyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY29uZFJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIuZm9yRWFjaCh0aWxlID0+IHNjcmVlbi5kcmF3U3ByaXRlKHRpbGUuc3ByaXRlLCB0aWxlLngsIHRpbGUueSkgKTtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2wgPSAwLCByb3cgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGF5ZXIuaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXIubmFtZSA9PSBcIndhbGxcIiAmJiB0aGlzLmNvbGxpc2lvbi5pbnRlcnNlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MTogdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLCAgeDI6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCAgKyB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxOiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93LCB5MjogdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvdyArIHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgLzJcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZTogdGhpcy50aWxlU2V0LmdldFNwcml0ZShpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRpbGVTZXQuZ2V0U3ByaXRlKGluZGV4KSwgdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLCB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICgrK2NvbCA+IHRoaXMuY29sdW1uIC0gMSkgJiYgKFtjb2wsIHJvd10gPSBbMCwgcm93KzFdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3ByaXRlU2hlZXRcIiwgc3JjLCB3aWR0aCwgaGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NCB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNyYyA9IHNyYztcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCAgPSBzcHJpdGVXaWR0aDtcclxuICAgICAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmltYWdlIHx8ICh0aGlzLmltYWdlID0gdGhpcy5sb2FkSW1hZ2UoKSk7IH1cclxuXHJcbiAgICBnZXRTcHJpdGUoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgaW1hZ2U6ICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgd2lkdGg6ICAgdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAgdGhpcy5zcHJpdGVIZWlnaHQsXHJcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRJbWFnZSgpIHsgdGhpcy5fbG9hZCgpLnRoZW4oaW1nID0+IHRoaXMuaW1hZ2UgPSBpbWcpLmNhdGNoKGVycm9yID0+IHsgdGhyb3cgZXJyb3I7IH0pOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWChpbmRleCkgeyByZXR1cm4gKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCAlIHRoaXMud2lkdGg7IH1cclxuXHJcbiAgICBnZXRTb3VyY2VZKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoICgoaW5kZXgtMSkgKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMud2lkdGggKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSBcIi4uLy4uL21hcFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi4vLi4vY2FtZXJhXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uLy4uL2VuZW15L2VuZW15XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxldmVsXCIsIHNjcmVlbiwgcGxheWVyLCBjb2xsaXNpb24sIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgc2NyZWVuOiBzY3JlZW4sIHBhcmVudDogcGFyZW50LCBuZXh0OiBuZXh0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAocHJvcCwgY29sbGlzaW9uKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gT2JqZWN0LnZhbHVlcyhwcm9wLmVuZW1pZXMpLm1hcChlbmVteSA9PiBuZXcgRW5lbXkoZW5lbXkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBjb2xsaXNpb247XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1hcC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY29udHJvbGxlci5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiBlbmVteS5pbml0KCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAgdGhpcy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5zY3JlZW4uaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5jYW1lcmEpO1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbikpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnNlY29uZFJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8xIGV4dGVuZHMgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbF8xXCIsIHNjcmVlbiwgY29sbGlzaW9uLCBwbGF5ZXIsIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2NyZWVuOiBzY3JlZW4sXHJcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyLFxyXG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8yIGV4dGVuZHMgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbF8yXCIsIHNjcmVlbiwgY29sbGlzaW9uLCBwbGF5ZXIsIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2NyZWVuOiBzY3JlZW4sXHJcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyLFxyXG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibGV2ZWxfMVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgcGFyZW50LCBuZXh0IH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICF0aGlzLmllbGVtZW50cyAmJiAodGhpcy5pZWxlbWVudHMgPSB7fSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHt9XHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSAge31cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWUgaW4gdGhpcy5pZWxlbWVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzW2llXS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIHx8IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcclxuICAgICAgICBkaXYuaWQgPSBcImdhbWVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5ET00gPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0gfHwgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMuRE9NLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ET00uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5ET00uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYShjYW1lcmEpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmNhbnZhcy5pbml0KCk7IH1cclxuXHJcbiAgICBkcmF3QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChidXR0b24ueCAtIDUsIGJ1dHRvbi55IC0gNSwgYnV0dG9uLndpZHRoICsgMTAsIGJ1dHRvbi5oZWlnaHQgKyAxMCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBidXR0b24uYmdjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KGJ1dHRvbi54LCBidXR0b24ueSwgYnV0dG9uLndpZHRoLCBidXR0b24uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3TGFiZWwoYnV0dG9uLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TGFiZWwobGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IGxhYmVsLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZm9udCA9IGAke2xhYmVsLmZvbnRXZWlnaHR9ICR7bGFiZWwuZm9udFNpemV9cHggJHtsYWJlbC5mb250RmFtaWx5IHx8IFwiTHVjaWRhIENvbnNvbGFzXCJ9YDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsVGV4dChsYWJlbC50ZXh0LCBsYWJlbC54LCBsYWJlbC55KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHsgaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpOyB9XHJcbiAgICBcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5KSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZVggPSB4O1xyXG4gICAgICAgIGxldCBzcHJpdGVZID0geTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICAgICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgICAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3ByaXRlWCA+PSB0aGlzLndpZHRoKSAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodCkgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpICA8PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxyXG4gICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xyXG4gICAgICAgIGxldCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xyXG5cclxuICAgICAgICBzcHJpdGUuaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHNwcml0ZS5pbWFnZSxcclxuICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSxcclxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodCxcclxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCksIE1hdGgubWF4KDAsIHNwcml0ZVkpLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9