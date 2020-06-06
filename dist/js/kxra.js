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
    value: function update(time) {
      this.sceneController && this.sceneController.update(time);
    }
  }, {
    key: "render",
    value: function render(time, screen) {
      this.update(time);
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
      this.update(time); // screen.strokeRect(this.x1, this.y1, this.x2-this.x1, this.y2-this.y1);
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

module.exports = JSON.parse("{\"name\":\"Kxra\",\"screen\":{\"width\":640,\"height\":640},\"fpsController\":{\"label\":{\"name\":\"fpsLabel\",\"text\":\"FPS: \",\"color\":\"#FFFFFF55\",\"fontSize\":14,\"fontWeight\":\"bold\",\"animated\":false,\"x\":550,\"y\":30}},\"player\":{\"name\":\"Kxra\",\"body\":{\"x\":100,\"y\":100,\"width\":64,\"height\":64,\"visible\":false,\"moveSpeed\":3,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"keys\":{\"up\":\"KeyW\",\"right\":\"KeyD\",\"down\":\"KeyS\",\"left\":\"KeyA\"}},\"animationController\":{\"name\":\"playerAnimation\"}}},\"scenes\":{\"loading\":{\"background\":{\"name\":\"loadingBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"loadingBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/loadingScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"disk\":{\"name\":\"loadingDisk\",\"width\":64,\"height\":64,\"x\":288,\"y\":288,\"spriteSheet\":{\"name\":\"loadingDiskSpriteSheet\",\"src\":\"./img/tile-sets/loadingDisk.png\",\"width\":512,\"height\":64,\"spriteWidth\":64,\"spriteHeight\":64},\"animated\":true,\"animationProp\":{\"name\":\"loadingDiskSpriteAnimation\",\"indices\":[1,2,3,4,5,6,7,8],\"frameDelay\":80,\"repeat\":true,\"autorun\":true}},\"label\":{\"name\":\"loadingLabel\",\"text\":\"Loading...\",\"color\":\"#FFFFFF\",\"fontSize\":36,\"fontWeight\":\"bold\",\"x\":240,\"y\":380,\"animated\":true,\"animationProp\":{\"name\":\"loadingLabelAnimation\",\"frameDelay\":300,\"textCollection\":[\"Loading\",\"Loading.\",\"Loading..\",\"Loading...\"],\"repeat\":true,\"autorun\":true}}},\"startMenu\":{\"background\":{\"name\":\"startMenuBackground\",\"width\":640,\"height\":640,\"x\":0,\"y\":0,\"spriteSheet\":{\"name\":\"startMenuBackgroundSpriteSheet\",\"src\":\"./img/backgrounds/startMenuScene.jpg\",\"width\":640,\"height\":640,\"spriteWidth\":640,\"spriteHeight\":640},\"animated\":false,\"options\":{\"fog\":true}},\"playButton\":{\"name\":\"playeButton\",\"width\":200,\"height\":80,\"bgcolor\":\"#800000\",\"colors\":{\"default\":\"#800000\",\"hover\":\"#80000066\",\"click\":\"#00800099\"},\"x\":400,\"y\":500,\"labelProp\":{\"name\":\"playButtonLabel\",\"x\":40,\"y\":55,\"text\":\"Play\",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54}}},\"level_1\":{\"next\":\"level_1\",\"time\":3,\"interface\":{\"healthPoints\":{\"sprite\":{\"src\":\"./img/tile-sets/heart.png\",\"width\":64,\"height\":64},\"x\":20,\"y\":556,\"count\":3},\"time\":{\"name\":\"timeLabel\",\"x\":300,\"y\":610,\"text\":\"Time: \",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54,\"fontFamily\":\"Do Hyeon\"}},\"mapSpriteSheet\":{\"name\":\"level_1MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"mapData\":{\"name\":\"map_1\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"test.json\"}},\"height\":10,\"infinite\":false,\"layers\":[{\"data\":[7,13,14,13,14,13,14,13,14,7,7,17,18,19,20,17,18,19,20,7,7,27,28,29,30,27,28,29,30,7,7,37,38,39,40,37,38,39,40,7,7,17,18,7,7,7,7,19,20,7,7,27,28,7,7,7,7,29,30,7,7,37,38,7,7,7,7,39,40,7,7,29,38,39,40,37,38,39,40,7,7,39,18,19,20,17,18,19,20,7,7,7,7,7,7,7,7,7,7,7],\"height\":10,\"id\":1,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[1,3,3,2,3,4,5,71,4,26,11,0,0,0,0,0,0,16,0,36,21,0,0,2,3,4,5,81,0,46,31,0,0,0,0,0,0,0,0,26,41,0,0,61,65,65,66,0,0,36,1,0,0,26,0,0,21,0,0,46,11,0,0,36,0,0,31,0,0,26,21,0,0,2,73,72,5,0,0,36,31,0,0,0,41,0,0,0,0,46,51,52,53,54,55,52,53,54,55,56],\"height\":10,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"data\":[0,68,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0],\"height\":10,\"id\":4,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2},{\"name\":\"entryPoint-index\",\"type\":\"int\",\"value\":77},{\"name\":\"outPoint-index\",\"type\":\"int\",\"value\":66}],\"type\":\"tilelayer\",\"visible\":true,\"width\":10,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":214.332666666667,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":258.667,\"x\":190.667,\"y\":296.333333333333},{\"height\":21.5,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":276,\"x\":192,\"y\":167.5},{\"height\":129.333,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17.3333,\"x\":450.667,\"y\":41.3333},{\"height\":588,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":41.3333,\"y\":40},{\"height\":15.2727272727273,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":557.333,\"x\":41.3333,\"y\":611.393272727273},{\"height\":583.667,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":574.667,\"y\":40.3333},{\"height\":22.9999333333333,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":538,\"x\":43.333,\"y\":39.6666666666667},{\"height\":114,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":296,\"y\":508}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":13,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":10},\"enemies\":[{\"rangeZone\":{\"up\":64,\"right\":64,\"down\":64,\"left\":64},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":400,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":450,\"isStop\":true,\"stopTime\":3000},{\"x\":450,\"y\":450,\"isStop\":false},{\"x\":450,\"y\":200,\"isStop\":false},{\"x\":500,\"y\":200,\"isStop\":true,\"stopTime\":3000}]}}},{\"rangeZone\":{\"up\":64,\"right\":64,\"down\":64,\"left\":64},\"name\":\"Enemy_2\",\"body\":{\"x\":100,\"y\":300,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":200,\"y\":520,\"isStop\":false},{\"x\":100,\"y\":520,\"isStop\":true,\"stopTime\":3000}]}}}]},\"level_2\":{\"time\":180,\"interface\":{\"healthPoints\":{\"sprite\":{\"src\":\"./img/tile-sets/heart.png\",\"width\":64,\"height\":64},\"x\":20,\"y\":556,\"count\":3},\"time\":{\"name\":\"timeLabel\",\"x\":300,\"y\":610,\"text\":\"Time: \",\"color\":\"#FFFFFF\",\"fontWeight\":\"bold\",\"fontSize\":54,\"fontFamily\":\"Do Hyeon\"}},\"mapData\":{\"name\":\"map_2\",\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"map_2.json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"id\":1,\"name\":\"background\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":0}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,15,0,0,29,17,18,28,20,17,18,19,20,17,18,19,20,17,18,19,20,25,0,0,29,27,33,93,14,14,13,14,14,13,14,14,13,14,14,29,30,35,0,0,23,37,38,39,40,25,38,39,40,40,38,39,40,37,38,39,40,25,0,0,13,13,14,14,15,35,13,14,40,40,13,14,0,0,0,0,20,35,0,0,28,27,28,29,25,0,28,29,30,27,28,29,0,0,0,0,30,25,0,0,25,0,0,0,0,0,38,39,40,37,38,39,0,0,0,0,40,35,0,0,35,0,0,0,0,0,0,0,20,25,0,0,0,0,0,0,20,25,0,0,35,0,0,0,0,0,0,0,30,25,0,0,0,0,0,0,30,35,0,0,25,0,0,0,0,0,38,39,28,25,38,39,0,0,0,0,40,25,0,0,35,17,18,19,20,0,13,14,20,17,13,14,0,0,0,0,20,35,0,0,18,13,14,13,14,0,29,29,30,27,28,29,0,0,0,0,30,25,0,0,28,37,38,39,35,0,39,39,40,37,38,39,0,0,0,0,40,35,0,0,38,17,25,19,20,17,19,19,20,17,18,19,20,17,18,0,20,25,0,0,18,27,35,13,13,15,28,29,17,17,28,29,13,14,13,14,39,35,0,0,28,37,25,39,40,37,13,14,17,17,13,14,40,37,38,39,30,25,0,0,38,27,35,29,30,17,18,19,20,37,38,39,40,27,28,29,30,35,0,0,29,27,27,13,14,13,14,13,14,13,14,13,14,14,14,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":3,\"name\":\"earth\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":1}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,2,3,4,5,2,2,2,3,4,5,3,4,5,2,3,2,3,4,6,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,21,0,0,0,83,3,2,3,4,5,2,3,4,5,5,73,0,0,0,26,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,41,2,3,4,72,73,0,71,72,0,0,72,73,0,0,11,0,0,0,6,1,0,0,0,0,11,0,16,0,0,0,0,11,54,62,63,64,16,0,16,11,0,0,0,0,21,53,26,0,0,0,0,1,0,0,0,0,26,0,26,21,0,61,62,63,64,0,36,0,0,0,0,11,0,0,0,0,36,0,36,31,0,36,0,0,0,0,62,66,0,0,61,62,0,0,0,0,46,0,46,41,0,46,0,0,0,0,0,41,0,0,46,0,0,0,0,0,6,0,6,1,0,46,0,0,0,0,71,4,0,0,4,73,0,0,0,0,16,0,16,11,0,72,72,72,73,0,6,0,0,0,0,11,0,0,0,0,26,0,26,21,0,0,0,0,21,0,16,0,0,0,0,21,0,0,0,0,36,0,36,31,0,0,0,0,31,0,26,0,0,0,0,31,0,0,0,0,46,0,46,41,0,0,0,71,4,5,36,0,0,0,0,11,3,4,73,0,46,0,6,11,0,0,0,26,0,0,2,3,0,0,3,2,0,0,31,4,81,0,16,21,0,0,0,36,0,0,0,0,0,0,0,0,0,0,41,0,0,0,26,31,0,0,0,3,4,5,2,3,4,5,2,3,2,3,4,0,0,0,36,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,51,52,53,54,55,52,53,54,55,52,53,54,55,52,53,54,55,54,55,56],\"height\":20,\"id\":2,\"name\":\"wall\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":2}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":5,\"name\":\"objects\",\"opacity\":1,\"properties\":[{\"name\":\"z-index\",\"type\":\"int\",\"value\":3}],\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"colliderBoxes\",\"objects\":[{\"height\":23,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1173.33,\"x\":42,\"y\":39},{\"height\":1230.36696969697,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":1215.33,\"y\":37.6969663636364},{\"height\":12.3333,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1148,\"x\":65.3333,\"y\":1253},{\"height\":1230.36696969697,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":40.6667,\"y\":37.0303033636364},{\"height\":29.3333666666667,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":300.667,\"x\":61.3333,\"y\":293.333},{\"height\":273,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":232,\"x\":128.666,\"y\":489.667},{\"height\":645.999666666667,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":360.667,\"y\":293.333333333333},{\"height\":191.667,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":256.667,\"y\":936.333},{\"height\":22.6667,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":170,\"x\":276.667,\"y\":935.333},{\"height\":20.6667,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":767.333,\"x\":256.667,\"y\":1128.67},{\"height\":23.3333,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125.667,\"x\":705.667,\"y\":999.667},{\"height\":709.333333333333,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":808.667,\"y\":294.666666666667},{\"height\":147.666333333333,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127.666633333333,\"x\":703.667,\"y\":555.333666666667},{\"height\":24.3332966666667,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126.666,\"x\":703.667,\"y\":294.833},{\"height\":24.3333,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.167,\"x\":448,\"y\":294.833},{\"height\":280.667,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22.6667,\"x\":448,\"y\":295},{\"height\":149.667,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128.333366666667,\"x\":447.000333333333,\"y\":556.333},{\"height\":23.6667,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":447.667,\"y\":999.333},{\"height\":332.667,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23.6667,\"x\":447.333,\"y\":669},{\"height\":29.3333,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63.5,\"x\":384,\"y\":418.667},{\"height\":594.5,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":163,\"x\":832,\"y\":361},{\"height\":977.625,\"id\":45,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":998.5,\"y\":166.375},{\"height\":24.1087,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":700.978,\"x\":298.022,\"y\":165.391},{\"height\":659.636363636364,\"id\":48,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":83,\"x\":1027.5,\"y\":359.363636363636}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":false,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":54,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.4\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"map tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20},\"mapSpriteSheet\":{\"name\":\"level_2_MapSpriteSheet\",\"src\":\"./img/tile-sets/map.png\",\"width\":640,\"height\":640,\"spriteWidth\":64,\"spriteHeight\":64},\"enemies\":[{\"rangeZone\":{\"up\":64,\"right\":64,\"down\":64,\"left\":64},\"name\":\"Enemy_1\",\"body\":{\"x\":500,\"y\":80,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":1000,\"y\":80,\"isStop\":true,\"stopTime\":3000},{\"x\":400,\"y\":80,\"isStop\":true,\"stopTime\":3000}]}}},{\"rangeZone\":{\"up\":64,\"right\":64,\"down\":64,\"left\":64},\"name\":\"Enemy_2\",\"body\":{\"x\":500,\"y\":300,\"width\":64,\"height\":64,\"visible\":false,\"defaultSpeed\":1,\"aggressiveSpeed\":2,\"boxCollider\":{\"x\":14,\"y\":45,\"width\":36,\"height\":19,\"visible\":false}},\"view\":{\"spriteSheet\":{\"name\":\"playerSpriteSheet\",\"src\":\"./img/tile-sets/player.png\",\"width\":832,\"height\":1344,\"spriteWidth\":64,\"spriteHeight\":64},\"animationList\":[{\"name\":\"idle-up\",\"indices\":[1,2],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-right\",\"indices\":[40,41],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-down\",\"indices\":[27,28],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"idle-left\",\"indices\":[14,15],\"frameDelay\":300,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-up\",\"indices\":[105,106,107,108,109,110,111,112,113],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-right\",\"indices\":[144,145,146,147,148,149,150,151,152],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-down\",\"indices\":[131,132,133,134,135,136,137,137,138],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"walk-left\",\"indices\":[118,119,119,120,121,122,123,124,125],\"frameDelay\":60,\"repeat\":true,\"autorun\":false},{\"name\":\"spell_cast-up\",\"indices\":[1,2,3,4,5,6,7],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-right\",\"indices\":[40,41,42,43,44,45,46],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-down\",\"indices\":[27,28,29,30,31,32,33],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"spell_cast-left\",\"indices\":[14,15,16,17,18,19,20],\"frameDelay\":50,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-up\",\"indices\":[170,171,172,173,174,175],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-right\",\"indices\":[209,210,211,212,213,214],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-down\",\"indices\":[196,197,198,199,200,201],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"attack-left\",\"indices\":[183,184,185,186,187,188],\"frameDelay\":40,\"repeat\":false,\"autorun\":false},{\"name\":\"dead\",\"indices\":[274,275,276,277,278,279],\"frameDelay\":300,\"repeat\":false,\"autorun\":false}]},\"controller\":{\"moveController\":{\"movePoints\":[{\"x\":500,\"y\":470,\"isStop\":true,\"stopTime\":3000},{\"x\":750,\"y\":470,\"isStop\":true,\"stopTime\":3000},{\"x\":750,\"y\":300,\"isStop\":true,\"stopTime\":3000},{\"x\":500,\"y\":300,\"isStop\":true,\"stopTime\":3000}]}}}]}}}");

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

/***/ "./src/view/picture/sprite.js":
/*!************************************!*\
  !*** ./src/view/picture/sprite.js ***!
  \************************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var _ref$image = _ref.image,
        image = _ref$image === void 0 ? undefined : _ref$image,
        src = _ref.src,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height,
        _ref$sourceX = _ref.sourceX,
        sourceX = _ref$sourceX === void 0 ? 0 : _ref$sourceX,
        _ref$sourceY = _ref.sourceY,
        sourceY = _ref$sourceY === void 0 ? 0 : _ref$sourceY;

    _classCallCheck(this, Sprite);

    this.image = image;
    this.src = src;
    this.width = width;
    this.height = height;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
  }

  _createClass(Sprite, [{
    key: "init",
    value: function init() {
      this.image || (this.image = this.loadImage());
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
  }]);

  return Sprite;
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
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/view/picture/sprite.js");
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


var SpriteSheet = /*#__PURE__*/function (_Sprite) {
  _inherits(SpriteSheet, _Sprite);

  var _super = _createSuper(SpriteSheet);

  function SpriteSheet(_ref) {
    var _this;

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

    _this = _super.call(this, {
      src: src,
      width: width,
      height: height
    });
    _this.name = name;
    _this.spriteWidth = spriteWidth;
    _this.spriteHeight = spriteHeight;
    return _this;
  }

  _createClass(SpriteSheet, [{
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        image: this.image,
        width: this.spriteWidth,
        height: this.spriteHeight,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index)
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
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

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
/* harmony import */ var _picture_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../picture/sprite */ "./src/view/picture/sprite.js");
/* harmony import */ var _ielements_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ielements/label */ "./src/ielements/label.js");
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
        parent = _ref$parent === void 0 ? "none" : _ref$parent;

    _classCallCheck(this, Level);

    _this = _super.call(this, {
      name: name,
      screen: screen,
      parent: parent,
      next: prop.next
    });
    _this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["Map"](prop, collision);
    _this.player = player;
    _this.enemies = prop.enemies.map(function (enemy) {
      return new _enemy_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](enemy);
    });
    _this.collision = collision;
    _this["interface"] = {
      healthPoints: {
        sprite: new _picture_sprite__WEBPACK_IMPORTED_MODULE_4__["Sprite"](prop["interface"].healthPoints.sprite),
        x: prop["interface"].healthPoints.x,
        y: prop["interface"].healthPoints.y,
        count: prop["interface"].healthPoints.count
      },
      time: new _ielements_label__WEBPACK_IMPORTED_MODULE_5__["Label"](prop["interface"].time)
    };
    _this.time = {
      all: prop.time,
      current: 0
    };
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
      this["interface"].healthPoints.sprite.init();
      this["interface"].time.init();

      _get(_getPrototypeOf(Level.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.time.current == 0) {
        this.time.current = Math.trunc(time / 1000);
        this.time.all += this.time.current;
      }

      this.collision.update();
      this.camera.update();
      this["interface"].healthPoints.count = this.player.healthPoint;

      if (this.time.current != Math.trunc(time / 1000)) {
        ++this.time.current;
        var min = Math.trunc((this.time.all - 1) / 60);
        var sec = --this.time.all % 60;
        min = min > 9 ? min : "0" + min;
        sec = sec > 9 ? sec : "0" + sec;
        this["interface"].time.text = "Time | ".concat(min, ":").concat(sec);
      }

      if (this.time.all == 0) {
        this.status = "finish";
        this.next = "level_2";
      }

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

      for (var i = 0; i < this["interface"].healthPoints.count; ++i) {
        var x = this["interface"].healthPoints.x + i * this["interface"].healthPoints.sprite.width;
        this.screen.drawImage(this["interface"].healthPoints.sprite.image, x, this["interface"].healthPoints.y);
      }

      this["interface"].time.render(time, this.screen);
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
      this.canvas.context.strokeRect(x - this.camera.x, y - this.camera.y, width, height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9ib2RpZXMvYm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZGllcy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9mcHNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9nYW1lQ3RybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvc2NlbmVDdHJsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9hdHRhY2tDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9jb250cm9sbGVycy9lbmVteUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW15L2NvbnRyb2xsZXJzL21vdmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkvZW5lbXlCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS9yYW5nZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2llbGVtZW50cy9pZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWVsZW1lbnRzL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pZWxlbWVudHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BoeXNpYy9jb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9rZXlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvY29udHJvbGxlcnMvbW92ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9jb250cm9sbGVycy9wbGF5ZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYW5pbWF0aW9uL2xhYmVsQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9waWN0dXJlL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xldmVsL2xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL2xldmVsL2xldmVsXzEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvbGV2ZWwvbGV2ZWxfMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY2VuZS9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3NjZW5lL21lbnUvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NlbmUvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2NyZWVuL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zY3JlZW4vc2NyZWVuLmpzIl0sIm5hbWVzIjpbIkJvZHlBbmltYXRpb24iLCJ2aWV3IiwibW92ZUNvbnRyb2xsZXIiLCJ0aW1lIiwic2V0QW5pbWF0aW9uIiwiaXNNb3ZlIiwiZGlyZWN0aW9uIiwiYW5pbWF0aW9uIiwidXBkYXRlIiwiQm9keSIsInByb3AiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZVNwZWVkIiwidmlzaWJsZSIsImJveENvbGxpZGVyIiwiQm94Q29sbGlkZXIiLCJfeCIsIl95Iiwic2NyZWVuIiwic3Ryb2tlUmVjdCIsInJlbmRlciIsIkNoYXJhY3RlciIsIm5hbWUiLCJib2R5IiwiVmlldyIsImluaXQiLCJkcmF3U3ByaXRlIiwiZ2V0U3ByaXRlIiwic3ByaXRlU2hlZXQiLCJTcHJpdGVTaGVldCIsImFuaW1hdGlvbkxpc3QiLCJ0ZW1wQW5pbWF0aW9uUHJvcCIsImZvckVhY2giLCJTcHJpdGVBbmltYXRpb24iLCJmcmFtZURlbGF5IiwiaW5kaWNlcyIsInJlcGVhdCIsImF1dG9ydW4iLCJydW4iLCJhbmltYXRpb25OYW1lIiwic3RvcCIsImN1cnJlbnRGcmFtZUluZGV4IiwiRlBTQ29udHJvbGxlciIsImZwcyIsIl9mcHMiLCJmcmFtZVRpbWUiLCJfX2xhYmVsX18iLCJMYWJlbCIsImxhYmVsIiwiTWF0aCIsInRydW5jIiwidGV4dCIsImRyYXdMYWJlbCIsIkdhbWVDb250cm9sbGVyIiwibGVuZ3RoIiwic2NlbmVDb250cm9sbGVyIiwiY3VycmVudFNjZW5lIiwiZnBzQ29udHJvbGxlciIsImNvbnRyb2xsZXJzIiwiY3RybCIsIkVycm9yIiwiY29udHJvbGxlck5hbWUiLCJTY2VuZUNvbnRyb2xsZXIiLCJzY2VuZXMiLCJzY2VuZSIsImlzSW5pdGlhbGl6ZWQiLCJsb2FkaW5nIiwic2V0U2NlbmUiLCJzY2VuZU5hbWUiLCJzdGFydCIsInN0YXR1cyIsInNwbGljZSIsImZpbmRJbmRleCIsImVsIiwibmV4dCIsInBhcmVudCIsIkVuZW15QXR0YWNrQ29udHJvbGxlciIsInJhbmdlIiwidGFyZ2V0IiwicGxheWVyIiwiY29sbGlzaW9uIiwic2VsZkJveCIsIngxIiwieDIiLCJ5MSIsInkyIiwicGxheWVyQm94IiwiaW50ZXJzZWN0IiwiaGVhbHRoUG9pbnQiLCJoaXQiLCJFbmVteUNvbnRyb2xsZXIiLCJlbmVteSIsImF0dGFja0NvbnRyb2xsZXIiLCJyYW5nZVpvbmUiLCJFbmVteU1vdmVDb250cm9sbGVyIiwiYW5pbWF0aW9uQ29udHJvbGxlciIsImN1cnJlbnRNb3ZlUG9pbnRJbmRleCIsIm1vdmVQb2ludHMiLCJjdXJyZW50TW92ZVBvaW50IiwiaXNTdHJpY3RTdG9wcGVkIiwiYXR0YWNrIiwic3RyaWN0U3RvcCIsIm1vdmUiLCJpc1N0b3AiLCJzdG9wVGltZSIsIm1vdmVSb3RhdGUiLCJzZXRUaW1lb3V0IiwicmV2ZXJzZSIsImEiLCJiIiwibW92ZVVwIiwibW92ZVJpZ2h0IiwibW92ZURvd24iLCJtb3ZlTGVmdCIsInBvaW50IiwiaXNQYXNzZWQiLCJFbmVteSIsIkVuZW15Qm9keSIsIkVuZW15UmFuZ2Vab25lIiwiY29udHJvbGxlciIsImFnZ3Jlc3NpdmVTcGVlZCIsImRlZmF1bHRTcGVlZCIsInVwIiwicmlnaHQiLCJkb3duIiwibGVmdCIsInNldFBvc2l0aW9uIiwiR2FtZSIsImdhbWVKU09OIiwiaXNSdW5uaW5nIiwiU2NyZWVuIiwiUGxheWVyIiwiQ29sbGlzaW9uIiwiYWRkIiwiTG9hZGluZ1NjZW5lIiwic3RhcnRNZW51IiwiU3RhcnRNZW51IiwibGV2ZWxfMSIsIkxldmVsXzEiLCJsZXZlbF8yIiwiTGV2ZWxfMiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiQnV0dG9uIiwiYmdjb2xvciIsImNvbG9ycyIsImxhYmVsUHJvcCIsImFuaW1hdGVkIiwiYW5pbWF0aW9uUHJvcCIsInVuZGVmaW5lZCIsImlzTW91c2VEb3duIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZ1bmN0aW9ucyIsIl9saXN0ZW5lck1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpc3RlbmVyTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIl9saXN0ZW5lck1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIl9saXN0ZW5lck1vdXNlQ2xpY2siLCJtb3VzZUNsaWNrSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcmF3QnV0dG9uIiwiSUVsZW1lbnQiLCJfYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwibmV3WCIsIm5ld1kiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJMYWJlbEFuaW1hdGlvbiIsInRleHRDb2xsZWN0aW9uIiwiVGlsZSIsIm9wdGlvbnMiLCJfX29wdGlvbnNfXyIsImZvZyIsImZpbGwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnYW1lIiwiYm9kaWVzIiwiY29sbGlkZXJzIiwiY29sbGlkZXIiLCJvdXRDb2xsaWRlciIsImJveCIsIm1pbiIsImFicyIsImZsb29yIiwiY2VpbCIsIlBsYXllcktleUNvbnRyb2xsZXIiLCJrZXlzIiwiS2V5VyIsImNvZGUiLCJpc0Rvd24iLCJLZXlEIiwiS2V5UyIsIktleUEiLCJBcnJvd1VwIiwiQXJyb3dSaWdodCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIlNwYWNlIiwiaXNLZXlEb3duIiwic3RhcnRFdmVudExpc3RlbiIsInN0b3BFdmVudExpc3RlbiIsIl9saXN0ZW5lcktleURvd24iLCJrZXlEb3duSGFuZGxlciIsImJpbmQiLCJfbGlzdGVuZXJLZXlVcCIsImtleVVwSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiUGxheWVyTW92ZUNvbnRyb2xsZXIiLCJrZXlDb250cm9sbGVyIiwiUGxheWVyQ29udHJvbGxlciIsIkFuaW1hdGlvbiIsImxhc3RGcmFtZVRpbWUiLCJuZXh0RnJhbWUiLCJjdXJyZW50VGV4dEluZGV4IiwiZnJhbWVzIiwiZ2V0RnJhbWVzIiwibWFwIiwiaW5kZXgiLCJzb3VyY2VYIiwiZ2V0U291cmNlWCIsInNvdXJjZVkiLCJnZXRTb3VyY2VZIiwiQ2FtZXJhIiwibGltaXRYIiwibGltaXRZIiwic2Nyb2xsRWRnZSIsIndhdGNoT2JqZWN0Iiwib2JqIiwibWF4IiwiTWFwIiwiZGF0YSIsIm1hcERhdGEiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwidGlsZVNldCIsIm1hcFNwcml0ZVNoZWV0Iiwicm93IiwiY29sdW1uIiwibGF5ZXJzIiwiZGVmYXVsdExheWVyIiwidXBwZXJMYXllciIsImNyZWF0ZUxheWVycyIsImxheWVyIiwidHlwZSIsInB1c2giLCJpbmRleGVzIiwiel9pbmRleCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIm9iamVjdHMiLCJpdGVtIiwic29ydCIsInRpbGUiLCJzcHJpdGUiLCJjb2wiLCJpc0ludGVyc2VjdCIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0IiwiU3ByaXRlIiwiaW1hZ2UiLCJzcmMiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltZyIsIkltYWdlIiwiX2xvYWQiLCJ0aGVuIiwiZXJyb3IiLCJMZXZlbCIsImVuZW1pZXMiLCJoZWFsdGhQb2ludHMiLCJjb3VudCIsImFsbCIsImN1cnJlbnQiLCJjYW1lcmEiLCJ3YXRjaCIsInNldENhbWVyYSIsInNlYyIsInNlY29uZFJlbmRlciIsImkiLCJkcmF3SW1hZ2UiLCJTY2VuZSIsImllbGVtZW50cyIsImJhY2tncm91bmQiLCJkaXNrIiwicmFuZG9tIiwicGxheUJ1dHRvbiIsIl9faW5fXyIsImRvY3VtZW50Iiwic3R5bGUiLCJjdXJzb3IiLCJjbGljayIsImhvdmVyIiwiYWRkTGlzdGVuZXJzIiwiY2FudmFzIiwiRE9NIiwicmVtb3ZlTGlzdGVuZXJzIiwiaWUiLCJDYW52YXMiLCJkaXYiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzQ2FtZXJhU2V0IiwiYnV0dG9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQi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LENBQW9CekIsU0FBcEIsQ0FDWjVCLE1BQU0sQ0FBQ00sS0FESyxFQUVaekMsT0FGWSxFQUVIRSxPQUZHLEVBR1ozTixLQUhZLEVBR0xDLE1BSEssRUFJWnNDLElBQUksQ0FBQzRMLEdBQUwsQ0FBUyxDQUFULEVBQVlzRixPQUFaLENBSlksRUFJVWxSLElBQUksQ0FBQzRMLEdBQUwsQ0FBUyxDQUFULEVBQVl1RixPQUFaLENBSlYsRUFLWjFULEtBTFksRUFLTEMsTUFMSyxDQUFoQjtBQU9IO0FBL0RMO0FBQUE7QUFBQSwrQkFpRWVILENBakVmLEVBaUVrQkMsQ0FqRWxCLEVBaUVxQkMsS0FqRXJCLEVBaUU0QkMsTUFqRTVCLEVBaUVvQztBQUM1QixXQUFLcVMsTUFBTCxDQUFZVyxPQUFaLENBQW9CeFMsVUFBcEIsQ0FBK0JYLENBQUMsR0FBRyxLQUFLb1IsTUFBTCxDQUFZcFIsQ0FBL0MsRUFBa0RDLENBQUMsR0FBRyxLQUFLbVIsTUFBTCxDQUFZblIsQ0FBbEUsRUFBcUVDLEtBQXJFLEVBQTRFQyxNQUE1RTtBQUNIO0FBbkVMO0FBQUE7QUFBQSx5QkFxRVNnSyxLQXJFVCxFQXFFZ0I7QUFDUixXQUFLcUksTUFBTCxDQUFZVyxPQUFaLENBQW9CSSxTQUFwQixHQUFnQ3BKLEtBQWhDO0FBQ0EsV0FBS3FJLE1BQUwsQ0FBWVcsT0FBWixDQUFvQkssUUFBcEIsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsS0FBS3RULEtBQXhDLEVBQStDLEtBQUtDLE1BQXBEO0FBQ0g7QUF4RUw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6Ii4vanMva3hyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIEJvZHlBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IodmlldywgbW92ZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBtb3ZlQ29udHJvbGxlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnZpZXcuc2V0QW5pbWF0aW9uKCAodGhpcy5tb3ZlQ29udHJvbGxlci5pc01vdmUgPyBcIndhbGstXCIgOiBcImlkbGUtXCIpICsgdGhpcy5tb3ZlQ29udHJvbGxlci5kaXJlY3Rpb24gKTtcclxuICAgICAgICB0aGlzLnZpZXcuYW5pbWF0aW9uLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIi4vYm94Q29sbGlkZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLnggPSBwcm9wLng7XHJcbiAgICAgICAgdGhpcy55ID0gcHJvcC55O1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoICA9IHByb3Aud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wLmhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IHByb3AubW92ZVNwZWVkO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBwcm9wLnZpc2libGU7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIocHJvcC5ib3hDb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJveENvbGxpZGVyLnggPSB0aGlzLnggKyB0aGlzLmJveENvbGxpZGVyLl94O1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueSA9IHRoaXMueSArIHRoaXMuYm94Q29sbGlkZXIuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYm94Q29sbGlkZXIueCA9IHRoaXMueCArIHRoaXMuYm94Q29sbGlkZXIuX3g7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci55ID0gdGhpcy55ICsgdGhpcy5ib3hDb2xsaWRlci5feTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlICYmIHNjcmVlbi5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5yZW5kZXIoc2NyZWVuKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHByb3Aud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wLmhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy54ID0gcHJvcC54OyB0aGlzLl94ID0gcHJvcC54O1xyXG4gICAgICAgIHRoaXMueSA9IHByb3AueTsgdGhpcy5feSA9IHByb3AueTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gcHJvcC52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgJiYgc2NyZWVuLnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBCb2R5KHByb3AuYm9keSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcocHJvcC52aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudmlldy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7IHRoaXMuYm9keS51cGRhdGUoKTsgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgc2NyZWVuLmRyYXdTcHJpdGUodGhpcy52aWV3LmdldFNwcml0ZSgpLCB0aGlzLmJvZHkueCwgdGhpcy5ib2R5LnkpO1xyXG4gICAgICAgIHRoaXMuYm9keS5yZW5kZXIoc2NyZWVuKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3ZpZXcvcGljdHVyZS9zcHJpdGVTaGVldFwiO1xyXG5pbXBvcnQgeyBTcHJpdGVBbmltYXRpb24gfSBmcm9tIFwiLi4vdmlldy9hbmltYXRpb24vc3ByaXRlQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBTcHJpdGVTaGVldChwcm9wLnNwcml0ZVNoZWV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ID0ge307XHJcbiAgICAgICAgdGhpcy50ZW1wQW5pbWF0aW9uUHJvcCA9IHByb3AuYW5pbWF0aW9uTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkxpc3QgPT0ge30pIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcEFuaW1hdGlvblByb3AuZm9yRWFjaChhbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3RbYW5pbWF0aW9uLm5hbWVdID0gbmV3IFNwcml0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAgICAgICAgYW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVTaGVldDogdGhpcy5zcHJpdGVTaGVldCxcclxuICAgICAgICAgICAgICAgIGZyYW1lRGVsYXk6ICBhbmltYXRpb24uZnJhbWVEZWxheSxcclxuICAgICAgICAgICAgICAgIGluZGljZXM6ICAgICBhbmltYXRpb24uaW5kaWNlcyxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogICAgICBhbmltYXRpb24ucmVwZWF0LFxyXG4gICAgICAgICAgICAgICAgYXV0b3J1bjogICAgIGFuaW1hdGlvbi5hdXRvcnVuIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0W2FuaW1hdGlvbi5uYW1lXS5pbml0KCk7XHJcbiAgICAgICAgfSk7IGRlbGV0ZSB0aGlzLnRlbXBBbmltYXRpb25Qcm9wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25MaXN0W1wiaWRsZS1kb3duXCJdO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFuaW1hdGlvbihhbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uLm5hbWUgPT0gYW5pbWF0aW9uTmFtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbkxpc3RbYW5pbWF0aW9uTmFtZV07XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZVNoZWV0LmdldFNwcml0ZSh0aGlzLmFuaW1hdGlvbi5pbmRpY2VzW3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZUluZGV4XSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGUFNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3ApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcImZwc0NvbnRyb2xsZXJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5mcHMgID0gMDsgIC8vIGV2ZXJ5IHNlY29uZFxyXG4gICAgICAgIHRoaXMuX2ZwcyA9IDA7IC8vIGV2ZXJ5IGZyYW1lXHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVUaW1lID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fX2xhYmVsX18gPSBuZXcgTGFiZWwocHJvcC5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5fX2xhYmVsX18uaW5pdCgpOyB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZVRpbWUgPT0gTWF0aC50cnVuYyh0aW1lIC8gMTAwMCkpIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9mcHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcHMgPSArK3RoaXMuX2ZwcztcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSBNYXRoLnRydW5jKHRpbWUgLyAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fZnBzID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX19sYWJlbF9fLnRleHQgPSBgRlBTOiAke3RoaXMuZnBzfWA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgc2NyZWVuLmRyYXdMYWJlbCh0aGlzLl9fbGFiZWxfXyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IHRoaXMubGVuZ3RoID0gMDsgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZUNvbnRyb2xsZXIgJiYgdGhpcy5zY2VuZUNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lLCBzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZUNvbnRyb2xsZXIgJiYgdGhpcy5zY2VuZUNvbnRyb2xsZXIuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgICAgIHRoaXMuZnBzQ29udHJvbGxlciAgICYmIHRoaXMuZnBzQ29udHJvbGxlci5yZW5kZXIodGltZSwgc2NyZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoLi4uY29udHJvbGxlcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBjdHJsIG9mIGNvbnRyb2xsZXJzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpc1tjdHJsLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0cmwubmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBuYW1lIG9mIGNvbnRyb2xsZXIsIG5hbWUgaXMgbXVzdCBiZSBsaWtlICdzY2VuZUNvbnRyb2xsZXInXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzW2N0cmwubmFtZV0gPSBjdHJsO1xyXG4gICAgICAgICAgICAgICAgdGhpc1tjdHJsLm5hbWVdLmluaXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICArK3RoaXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGNvbnRyb2xsZXJOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXNbY29udHJvbGxlck5hbWVdKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2NvbnRyb2xsZXJOYW1lXTtcclxuICAgICAgICAgICAgLS10aGlzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NlbmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic2NlbmVDb250cm9sbGVyXCIsIHNjZW5lcyB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBzY2VuZSBpbiBzY2VuZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVdID0gc2NlbmVzW3NjZW5lXTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVdLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzLmxvYWRpbmcpIHRocm93IG5ldyBFcnJvcihcIkdhbWUgbXVzdCBoYXZlIGxvYWRpbmcgc2NlbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2NlbmUoXCJsb2FkaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjZW5lKHNjZW5lTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY2VuZXNbc2NlbmVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAhdGhpcy5zY2VuZXNbc2NlbmVOYW1lXS5pc0luaXRpYWxpemVkICYmICh0aGlzLnNjZW5lc1tzY2VuZU5hbWVdLmlzSW5pdGlhbGl6ZWQgPSB0cnVlKSAmJiB0aGlzLnNjZW5lc1tzY2VuZU5hbWVdLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lc1tzY2VuZU5hbWVdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzID0gXCJydW5uaW5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLnNjZW5lcykge1xyXG4gICAgICAgIGZvciAobGV0IHNjZW5lIG9mIHNjZW5lcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2NlbmVzW3NjZW5lLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNjZW5lLm5hbWUpIHRocm93IG5ldyBFcnJvcihcIlNjZW5lIG11c3QgaGF2ZSBuYW1lLCBsaWtlICdzdGFydE1lbnUnXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZS5uYW1lXSA9IHNjZW5lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0uaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmUubmFtZV0uaXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKHNjZW5lTmFtZSkgeyB0aGlzLnNjZW5lc1tzY2VuZU5hbWVdICYmIHRoaXMuc2NlbmVzLnNwbGljZSh0aGlzLnNjZW5lcy5maW5kSW5kZXgoZWwgPT4gZWwubmFtZSA9PSBzY2VuZU5hbWUpKTsgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBzY2VuZSBpbiB0aGlzLnNjZW5lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9PSBcImZpbmlzaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmUubmV4dCA9PSBcIm5vbmVcIikgdGhpcy5zY2VuZXNbc2NlbmVdLnN0YXR1cyA9IFwicnVubmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NlbmUodGhpcy5zY2VuZXNbc2NlbmVdLm5leHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnBhcmVudCA9IHRoaXMuc2NlbmVzW3NjZW5lXS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZV0uc3RhdHVzID0gXCJyZWFkeVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lXS5uZXh0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRW5lbXlBdHRhY2tDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHJhbmdlLCBib2R5KSB7XHJcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHBsYXllciwgY29sbGlzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBjb2xsaXNpb247XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZkJveCA9IHtcclxuICAgICAgICAgICAgeDE6IHRoaXMuYm9keS5ib3hDb2xsaWRlci54LCB4MjogdGhpcy5ib2R5LmJveENvbGxpZGVyLnggKyB0aGlzLmJvZHkuYm94Q29sbGlkZXIud2lkdGgsXHJcbiAgICAgICAgICAgIHkxOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueSwgeTI6IHRoaXMuYm9keS5ib3hDb2xsaWRlci55ICsgdGhpcy5ib2R5LmJveENvbGxpZGVyLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLngsIHgyOiB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLnggKyB0aGlzLnBsYXllci5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55LCB5MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci55ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnNlbGZCb3ggPSB7XHJcbiAgICAgICAgICAgIHgxOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueCwgeDI6IHRoaXMuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5ib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogdGhpcy5ib2R5LmJveENvbGxpZGVyLnksIHkyOiB0aGlzLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMuYm9keS5ib3hDb2xsaWRlci5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucGxheWVyQm94ID0ge1xyXG4gICAgICAgICAgICB4MTogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54LCB4MjogdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci54ICsgdGhpcy5wbGF5ZXIuYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSwgeTI6IHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIueSArIHRoaXMucGxheWVyLmJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uLmludGVyc2VjdCh0aGlzLnBsYXllckJveCwgdGhpcy5yYW5nZSkpXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgZWxzZSB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6ICAgIHRoaXMucGxheWVyLmJvZHkueSAtPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOiB0aGlzLnBsYXllci5ib2R5LnggKz0gMjA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOiAgdGhpcy5wbGF5ZXIuYm9keS55ICs9IDIwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjogIHRoaXMucGxheWVyLmJvZHkueCAtPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjayhkaXJlY3Rpb24pIHtcclxuICAgICAgICAtLXRoaXMucGxheWVyLmhlYWx0aFBvaW50O1xyXG5cclxuICAgICAgICB0aGlzLmhpdChkaXJlY3Rpb24pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keUFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi9ib2RpZXMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEVuZW15TW92ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb3ZlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBFbmVteUF0dGFja0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdHRhY2tDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXlDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVuZW15LCBwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteSA9IGVuZW15O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXR0YWNrQ29udHJvbGxlciA9IG5ldyBFbmVteUF0dGFja0NvbnRyb2xsZXIodGhpcy5lbmVteS5yYW5nZVpvbmUsIHRoaXMuZW5lbXkuYm9keSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBFbmVteU1vdmVDb250cm9sbGVyKHRoaXMuZW5lbXkuYm9keSwgdGhpcy5hdHRhY2tDb250cm9sbGVyLCBwcm9wLm1vdmVDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQm9keUFuaW1hdGlvbih0aGlzLmVuZW15LnZpZXcsIHRoaXMubW92ZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbml0KHBsYXllciwgY29sbGlzaW9uKSAgeyB0aGlzLmF0dGFja0NvbnRyb2xsZXIuaW5pdChwbGF5ZXIsIGNvbGxpc2lvbik7IH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRW5lbXlNb3ZlQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5LCBhdHRhY2tDb250cm9sbGVyLCBwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIgPSBhdHRhY2tDb250cm9sbGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludEluZGV4ID0gMDtcclxuICAgICAgICAodGhpcy5tb3ZlUG9pbnRzID0gcHJvcC5tb3ZlUG9pbnRzKSAmJiAodGhpcy5jdXJyZW50TW92ZVBvaW50ID0gdGhpcy5tb3ZlUG9pbnRzW3RoaXMuY3VycmVudE1vdmVQb2ludEluZGV4XSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0cmljdFN0b3BwZWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2tDb250cm9sbGVyLnRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hdHRhY2tDb250cm9sbGVyLmNvbGxpc2lvbi5pbnRlcnNlY3QodGhpcy5hdHRhY2tDb250cm9sbGVyLnBsYXllckJveCwgdGhpcy5hdHRhY2tDb250cm9sbGVyLnNlbGZCb3gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja0NvbnRyb2xsZXIuYXR0YWNrKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaWN0U3RvcCgxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92ZSB8fCAhdGhpcy5tb3ZlUG9pbnRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueCAhPSB0aGlzLmN1cnJlbnRNb3ZlUG9pbnQueCB8fCB0aGlzLmJvZHkueSAhPSB0aGlzLmN1cnJlbnRNb3ZlUG9pbnQueSlcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50TW92ZVBvaW50SW5kZXggPCB0aGlzLm1vdmVQb2ludHMubGVuZ3RoLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvaW50ID0gdGhpcy5tb3ZlUG9pbnRzWysrdGhpcy5jdXJyZW50TW92ZVBvaW50SW5kZXhdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZVBvaW50LmlzU3RvcCAmJiB0aGlzLnN0b3AodGhpcy5jdXJyZW50TW92ZVBvaW50LnN0b3BUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVSb3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgIXRoaXMuaXNTdHJpY3RTdG9wcGVkICYmICh0aGlzLmlzTW92ZSA9IHRydWUpOyB9XHJcblxyXG4gICAgc3RvcCh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0cmljdFN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmljdFN0b3AodGltZSkge1xyXG4gICAgICAgIHRoaXMuaXNTdHJpY3RTdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0b3AodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJvdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1vdmVQb2ludHMgPSB0aGlzLm1vdmVQb2ludHMucmV2ZXJzZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVQb2ludEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlUG9pbnQgPSB0aGlzLm1vdmVQb2ludHNbdGhpcy5jdXJyZW50TW92ZVBvaW50SW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW92ZVBvaW50LmlzU3RvcClcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBsZXQgYSA9IHRoaXMuYm9keSwgYiA9IHRoaXMuYXR0YWNrQ29udHJvbGxlci50YXJnZXQgPyB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuYXR0YWNrQ29udHJvbGxlci50YXJnZXQuYm9keS54LCB5OiB0aGlzLmF0dGFja0NvbnRyb2xsZXIudGFyZ2V0LmJvZHkueVxyXG4gICAgICAgIH0gOiB0aGlzLmN1cnJlbnRNb3ZlUG9pbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGEueSA+IGIueSkgdGhpcy5tb3ZlVXAoKTtcclxuICAgICAgICBpZiAoYS54IDwgYi54KSB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICAgIGlmIChhLnkgPCBiLnkpIHRoaXMubW92ZURvd24oKTtcclxuICAgICAgICBpZiAoYS54ID4gYi54KSB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVBvaW50c1Jlc2V0KCkgeyB0aGlzLm1vdmVQb2ludHMuZm9yRWFjaChwb2ludCA9PiBwb2ludC5pc1Bhc3NlZCA9IGZhbHNlKTsgfVxyXG5cclxuICAgIG1vdmVVcCgpICAgIHsgdGhpcy5ib2R5LnkgLT0gdGhpcy5ib2R5Lm1vdmVTcGVlZDsgdGhpcy5kaXJlY3Rpb24gPSBcInVwXCI7ICAgIH1cclxuICAgIG1vdmVSaWdodCgpIHsgdGhpcy5ib2R5LnggKz0gdGhpcy5ib2R5Lm1vdmVTcGVlZDsgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7IH1cclxuICAgIG1vdmVEb3duKCkgIHsgdGhpcy5ib2R5LnkgKz0gdGhpcy5ib2R5Lm1vdmVTcGVlZDsgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjsgIH1cclxuICAgIG1vdmVMZWZ0KCkgIHsgdGhpcy5ib2R5LnggLT0gdGhpcy5ib2R5Lm1vdmVTcGVlZDsgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjsgIH1cclxufSIsImltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9ib2RpZXMvY2hhcmFjdGVyXCI7XHJcbmltcG9ydCB7IEVuZW15UmFuZ2Vab25lIH0gZnJvbSBcIi4vcmFuZ2Vab25lXCI7XHJcbmltcG9ydCB7IEVuZW15Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2VuZW15Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBFbmVteUJvZHkgfSBmcm9tIFwiLi9lbmVteUJvZHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteSBleHRlbmRzIENoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgRW5lbXlCb2R5KHByb3AuYm9keSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcC5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmdlWm9uZSA9IG5ldyBFbmVteVJhbmdlWm9uZSh0aGlzLmJvZHksIHByb3AucmFuZ2Vab25lKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEVuZW15Q29udHJvbGxlcih0aGlzLCBwcm9wLmNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQocGxheWVyLCBjb2xsaXNpb24pIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5yYW5nZVpvbmUuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5pbml0KHBsYXllciwgY29sbGlzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keS5tb3ZlU3BlZWQgPSB0aGlzLmNvbnRyb2xsZXIuYXR0YWNrQ29udHJvbGxlci50YXJnZXQgPyB0aGlzLmJvZHkuYWdncmVzc2l2ZVNwZWVkIDogdGhpcy5ib2R5LmRlZmF1bHRTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUsIHNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2Vab25lLnJlbmRlcih0aW1lLCBzY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuLi9ib2RpZXMvYm9keVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Qm9keSBleHRlbmRzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHN1cGVyKHByb3ApO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IHByb3AuZGVmYXVsdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNwZWVkID0gcHJvcC5kZWZhdWx0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5hZ2dyZXNzaXZlU3BlZWQgPSBwcm9wLmFnZ3Jlc3NpdmVTcGVlZDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFbmVteVJhbmdlWm9uZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5LCBwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuXHJcbiAgICAgICAgdGhpcy51cCA9IHByb3AudXA7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHByb3AucmlnaHQ7XHJcbiAgICAgICAgdGhpcy5kb3duID0gcHJvcC5kb3duO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHByb3AubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLngxID0gdGhpcy5ib2R5LnggLSB0aGlzLmxlZnQ7XHJcbiAgICAgICAgdGhpcy54MiA9IHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LndpZHRoICsgdGhpcy5yaWdodDtcclxuICAgICAgICB0aGlzLnkxID0gdGhpcy5ib2R5LnkgLSB0aGlzLnVwO1xyXG4gICAgICAgIHRoaXMueTIgPSB0aGlzLmJvZHkueSArIHRoaXMuYm9keS5oZWlnaHQgKyB0aGlzLmRvd247XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpICAgeyB0aGlzLnNldFBvc2l0aW9uKCk7IH1cclxuICAgIHVwZGF0ZSgpIHsgdGhpcy5zZXRQb3NpdGlvbigpOyB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNjcmVlbi5zdHJva2VSZWN0KHRoaXMueDEsIHRoaXMueTEsIHRoaXMueDItdGhpcy54MSwgdGhpcy55Mi10aGlzLnkxKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjcmVlbiAgICAgICB9IGZyb20gXCIuL3ZpZXcvc2NyZWVuL3NjcmVlblwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2NlbmUgfSBmcm9tIFwiLi92aWV3L3NjZW5lL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgU3RhcnRNZW51IH0gICAgZnJvbSBcIi4vdmlldy9zY2VuZS9tZW51L3N0YXJ0XCI7XHJcbmltcG9ydCB7IExldmVsXzEgfSAgICAgIGZyb20gXCIuL3ZpZXcvc2NlbmUvbGV2ZWwvbGV2ZWxfMVwiO1xyXG5pbXBvcnQgeyBMZXZlbF8yIH0gZnJvbSBcIi4vdmlldy9zY2VuZS9sZXZlbC9sZXZlbF8yXCI7XHJcblxyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciAgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvZ2FtZUN0cmxcIjtcclxuaW1wb3J0IHsgU2NlbmVDb250cm9sbGVyIH0gIGZyb20gXCIuL2NvbnRyb2xsZXJzL3NjZW5lQ3RybFwiO1xyXG5pbXBvcnQgeyBGUFNDb250cm9sbGVyICAgfSAgZnJvbSBcIi4vY29udHJvbGxlcnMvZnBzQ29udHJvbGxlclwiO1xyXG5cclxuaW1wb3J0IHsgQ29sbGlzaW9uIH0gZnJvbSBcIi4vcGh5c2ljL2NvbGxpc2lvblwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xyXG5cclxuaW1wb3J0IGdhbWVKU09OIGZyb20gXCIuL2dhbWUuanNvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZ2FtZUpTT04ubmFtZTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oZ2FtZUpTT04uc2NyZWVuKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihnYW1lSlNPTi5wbGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IG5ldyBDb2xsaXNpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmluaXQoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmFkZChcclxuICAgICAgICAgICAgbmV3IFNjZW5lQ29udHJvbGxlcih7IHNjZW5lczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogICBuZXcgTG9hZGluZ1NjZW5lKHsgc2NyZWVuOiB0aGlzLnNjcmVlbiwgcHJvcDogZ2FtZUpTT04uc2NlbmVzLmxvYWRpbmcgfSksXHJcbiAgICAgICAgICAgICAgICBzdGFydE1lbnU6IG5ldyBTdGFydE1lbnUoeyBzY3JlZW46IHRoaXMuc2NyZWVuLCBwcm9wOiBnYW1lSlNPTi5zY2VuZXMuc3RhcnRNZW51IH0pLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxfMTogICBuZXcgTGV2ZWxfMSh7IHBsYXllcjogdGhpcy5wbGF5ZXIsIHNjcmVlbjogdGhpcy5zY3JlZW4sIGNvbGxpc2lvbjogdGhpcy5jb2xsaXNpb24sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sZXZlbF8xIH0pLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxfMjogICBuZXcgTGV2ZWxfMih7IHBsYXllcjogdGhpcy5wbGF5ZXIsIHNjcmVlbjogdGhpcy5zY3JlZW4sIGNvbGxpc2lvbjogdGhpcy5jb2xsaXNpb24sIHByb3A6IGdhbWVKU09OLnNjZW5lcy5sZXZlbF8yIH0pXHJcbiAgICAgICAgICAgIH0gfSksXHJcbiAgICAgICAgICAgIG5ldyBGUFNDb250cm9sbGVyKGdhbWVKU09OLmZwc0NvbnRyb2xsZXIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmcmFtZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgICh0aGlzLmlzUnVubmluZyA9IHRydWUpICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJidXR0b25cIiwgd2lkdGgsIGhlaWdodCwgYmdjb2xvciwgY29sb3JzLCBsYWJlbFByb3AsIHggPSAwLCB5ID0gMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuYmdjb2xvciA9IGJnY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgID0gY29sb3JzO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbmV3IExhYmVsKGxhYmVsUHJvcCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfX2luX18oZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gKCAoZXZlbnQub2Zmc2V0WCA+PSB0aGlzLngpICYmIChldmVudC5vZmZzZXRYIDw9IHRoaXMueCArIHRoaXMud2lkdGgpICApXHJcbiAgICAgICAgICAgICYmICggKGV2ZW50Lm9mZnNldFkgPj0gdGhpcy55KSAmJiAoZXZlbnQub2Zmc2V0WSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnModGFyZ2V0LCBmdW5jdGlvbnMpIHtcclxuICAgICAgICAodGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUgID0gZnVuY3Rpb25zLm1vdXNlTW92ZUhhbmRsZXIgKSAmJiB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9saXN0ZW5lck1vdXNlTW92ZSk7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VEb3duICA9IGZ1bmN0aW9ucy5tb3VzZURvd25IYW5kbGVyICkgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fbGlzdGVuZXJNb3VzZURvd24pO1xyXG4gICAgICAgICh0aGlzLl9saXN0ZW5lck1vdXNlVXAgICAgPSBmdW5jdGlvbnMubW91c2VVcEhhbmRsZXIgICApICYmIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAgIHRoaXMuX2xpc3RlbmVyTW91c2VVcCk7XHJcbiAgICAgICAgKHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayA9IGZ1bmN0aW9ucy5tb3VzZUNsaWNrSGFuZGxlcikgJiYgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcnModGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJNb3VzZU1vdmUgICYmIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlKSAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyTW91c2VNb3ZlO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VEb3duICAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9saXN0ZW5lck1vdXNlRG93bikgICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlRG93bjtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lck1vdXNlVXAgICAgJiYgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICAgdGhpcy5fbGlzdGVuZXJNb3VzZVVwKSAgICAmJiBkZWxldGUgdGhpcy5fbGlzdGVuZXJNb3VzZVVwO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyTW91c2VDbGljayAmJiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAgICB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2spICYmIGRlbGV0ZSB0aGlzLl9saXN0ZW5lck1vdXNlQ2xpY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsLmluaXQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhYmVsLnggKz0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMubGFiZWwueSArPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7IHNjcmVlbi5kcmF3QnV0dG9uKHRoaXMpOyB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJpZWxlbWVudFwiLCB4ID0gMCwgeSA9IDAsIGFuaW1hdGVkID0gZmFsc2UsIGFuaW1hdGlvblByb3AgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGVkID0gYW5pbWF0ZWQ7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uUHJvcDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5jcmVhdGVBbmltYXRpb24odGhpcy5fYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxldGUgdGhpcy5fYW5pbWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7IHRoaXMuYW5pbWF0ZWQgJiYgdGhpcy5hbmltYXRpb24udXBkYXRlKHRpbWUpOyB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKCkge31cclxuXHJcbiAgICBzZXRYWShuZXdYLCBuZXdZKSB7XHJcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcclxuICAgICAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi9pZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbEFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9sYWJlbEFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsYWJlbFwiLCB0ZXh0ID0gXCJsYWJlbFwiLCB4ID0gMTAsIHkgPSAxMCwgY29sb3IgPSBcIiM0NDQ0NDRcIixcclxuICAgICAgICBmb250U2l6ZSA9IDM2LCBmb250V2VpZ2h0ID0gXCJub3JtYWxcIiwgZm9udEZhbWlseSA9IFwiQ291cmllciBOZXdcIiwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmZvbnRTaXplICAgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gbmV3IExhYmVsQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgbGFiZWw6IHRoaXMsXHJcbiAgICAgICAgICAgIGZyYW1lRGVsYXk6ICAgICBwcm9wLmZyYW1lRGVsYXksXHJcbiAgICAgICAgICAgIHJlcGVhdDogICAgICAgICBwcm9wLnJlcGVhdCxcclxuICAgICAgICAgICAgYXV0b3J1bjogICAgICAgIHByb3AuYXV0b3J1bixcclxuICAgICAgICAgICAgdGV4dENvbGxlY3Rpb246IHByb3AudGV4dENvbGxlY3Rpb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSwgc2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgc2NyZWVuLmRyYXdMYWJlbCh0aGlzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSBcIi4vaWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi92aWV3L2FuaW1hdGlvbi9zcHJpdGVBbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgSUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJ0aWxlXCIsIHdpZHRoLCBoZWlnaHQsIHNwcml0ZVNoZWV0LCB4ID0gMTAsIHkgPSAxMCwgYW5pbWF0ZWQgPSBmYWxzZSwgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHVuZGVmaW5lZCB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCB4OiB4LCB5OiB5LCBhbmltYXRlZDogYW5pbWF0ZWQsIGFuaW1hdGlvblByb3A6IGFuaW1hdGlvblByb3AgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIG9wdGlvbnMgJiYgKHRoaXMuX19vcHRpb25zX18gPSBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBTcHJpdGVTaGVldChzcHJpdGVTaGVldCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0LmluaXQoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbihwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBzcHJpdGVTaGVldDogdGhpcy5zcHJpdGVTaGVldCxcclxuICAgICAgICAgICAgaW5kaWNlczogICAgIHByb3AuaW5kaWNlcyxcclxuICAgICAgICAgICAgYXV0b3J1bjogICAgIHByb3AuYXV0b3J1bixcclxuICAgICAgICAgICAgZnJhbWVEZWxheTogIHByb3AuZnJhbWVEZWxheSxcclxuICAgICAgICAgICAgbmFtZTogICAgICAgIHByb3AubmFtZSxcclxuICAgICAgICAgICAgcmVwZWF0OiAgICAgIHByb3AucmVwZWF0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUsIHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBzY3JlZW4uZHJhd1Nwcml0ZShcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5nZXRTcHJpdGUoKHRoaXMuYW5pbWF0ZWQgJiYgdGhpcy5hbmltYXRpb24uaW5kaWNlc1t0aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVJbmRleF0pIHx8IDEpLFxyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fX29wdGlvbnNfXyAmJiB0aGlzLl9fb3B0aW9uc19fLmZvZyAmJiBzY3JlZW4uZmlsbChcIiMwMDAwMDA2NlwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG4gICAgZ2FtZS5ydW4oKTtcclxufTsiLCJleHBvcnQgY2xhc3MgQ29sbGlzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvZGllcykge1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBib2RpZXMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzLmZvckVhY2goY29sbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJzZWN0KGJvZHksIGNvbGxpZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dENvbGxpZGVyKGJvZHksIGNvbGxpZGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0Q29sbGlkZXIoYm9keSwgY29sbGlkZXIpIHtcclxuICAgICAgICBsZXQgYm94ID0ge1xyXG4gICAgICAgICAgICBfeDogYm9keS5ib3hDb2xsaWRlci5feCwgX3k6IGJvZHkuYm94Q29sbGlkZXIuX3ksXHJcbiAgICAgICAgICAgIHgxOiBib2R5LmJveENvbGxpZGVyLngsICB4MjogYm9keS5ib3hDb2xsaWRlci54ICsgYm9keS5ib3hDb2xsaWRlci53aWR0aCxcclxuICAgICAgICAgICAgeTE6IGJvZHkuYm94Q29sbGlkZXIueSwgIHkyOiBib2R5LmJveENvbGxpZGVyLnkgKyBib2R5LmJveENvbGxpZGVyLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IGJvZHkuYm94Q29sbGlkZXIud2lkdGgsIGhlaWdodDogYm9keS5ib3hDb2xsaWRlci5oZWlnaHQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xsaWRlci54MSAtIGJveC54MiksIE1hdGguYWJzKGNvbGxpZGVyLngyIC0gYm94LngxKSxcclxuICAgICAgICAgICAgTWF0aC5hYnMoY29sbGlkZXIueTEgLSBib3gueTIpLCBNYXRoLmFicyhjb2xsaWRlci55MiAtIGJveC55MSkgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKG1pbikge1xyXG4gICAgICAgICAgICBjYXNlIE1hdGguYWJzKGNvbGxpZGVyLngxIC0gYm94LngyKTogYm9keS54ID0gTWF0aC5mbG9vcihjb2xsaWRlci54MSAtIGJvZHkud2lkdGggKyBib3guX3gpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNYXRoLmFicyhjb2xsaWRlci54MiAtIGJveC54MSk6IGJvZHkueCA9IE1hdGguY2VpbChjb2xsaWRlci54MiAtIGJveC5feCsyKTsgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0aC5hYnMoY29sbGlkZXIueTEgLSBib3gueTIpOiBib2R5LnkgPSBNYXRoLmZsb29yKGNvbGxpZGVyLnkxIC0gYm9keS5oZWlnaHQtMik7ICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1hdGguYWJzKGNvbGxpZGVyLnkyIC0gYm94LnkxKTogYm9keS55ID0gTWF0aC5jZWlsKGNvbGxpZGVyLnkyIC0gYm94Ll95KzIpOyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJzZWN0KGJvZHksIGNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IHtcclxuICAgICAgICAgICAgeDE6IGJvZHkueDEgfHwgYm9keS5ib3hDb2xsaWRlci54LCB4MjogYm9keS54MiB8fCBib2R5LmJveENvbGxpZGVyLnggKyBib2R5LmJveENvbGxpZGVyLndpZHRoLFxyXG4gICAgICAgICAgICB5MTogYm9keS55MSB8fCBib2R5LmJveENvbGxpZGVyLnksIHkyOiBib2R5LnkyIHx8IGJvZHkuYm94Q29sbGlkZXIueSArIGJvZHkuYm94Q29sbGlkZXIuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKGJveC54MiA+ICBjb2xsaWRlci54MSAmJiBib3gueDEgPCAgY29sbGlkZXIueDEgJiYgYm94LnkyID4gIGNvbGxpZGVyLnkxICYmIGJveC55MSA8ICBjb2xsaWRlci55MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC54MSA8ICBjb2xsaWRlci54MiAmJiBib3gueDIgPiAgY29sbGlkZXIueDIgJiYgYm94LnkyID4gIGNvbGxpZGVyLnkxICYmIGJveC55MSA8ICBjb2xsaWRlci55MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC55MiA+ICBjb2xsaWRlci55MSAmJiBib3gueTEgPCAgY29sbGlkZXIueTEgJiYgYm94LngyID4gIGNvbGxpZGVyLngxICYmIGJveC54MSA8ICBjb2xsaWRlci54MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC55MSA8ICBjb2xsaWRlci55MiAmJiBib3gueTIgPiAgY29sbGlkZXIueTIgJiYgYm94LngyID4gIGNvbGxpZGVyLngxICYmIGJveC54MSA8ICBjb2xsaWRlci54MikgfHxcclxuICAgICAgICAgICAgICAgKGJveC54MSA+PSBjb2xsaWRlci54MSAmJiBib3gueDIgPD0gY29sbGlkZXIueDIgJiYgYm94LnkxID49IGNvbGxpZGVyLnkxICYmIGJveC55MiA8PSBjb2xsaWRlci55Mik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUGxheWVyS2V5Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgICAgIEtleVc6IHsgY29kZTogODcsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgS2V5RDogeyBjb2RlOiA2OCwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBLZXlTOiB7IGNvZGU6IDgzLCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEtleUE6IHsgY29kZTogNjUsIGlzRG93bjogZmFsc2UgfSxcclxuXHJcbiAgICAgICAgICAgIEFycm93VXA6ICAgIHsgY29kZTogMzgsIGlzRG93bjogZmFsc2UgfSxcclxuICAgICAgICAgICAgQXJyb3dSaWdodDogeyBjb2RlOiAzOSwgaXNEb3duOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBBcnJvd0Rvd246ICB7IGNvZGU6IDQwLCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIEFycm93TGVmdDogIHsgY29kZTogMzcsIGlzRG93bjogZmFsc2UgfSxcclxuXHJcbiAgICAgICAgICAgIFNwYWNlOiB7IGNvZGU6IDMyLCBpc0Rvd246IGZhbHNlIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0tleURvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHN0YXJ0RXZlbnRMaXN0ZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJLZXlEb3duID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyS2V5VXAgICA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2xpc3RlbmVyS2V5RG93bik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAgIHRoaXMuX2xpc3RlbmVyS2V5VXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleURvd24gJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2xpc3RlbmVyS2V5RG93bikgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyS2V5RG93bjtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcktleVVwICAgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAgIHRoaXMuX2xpc3RlbmVyS2V5VXApICAgJiYgZGVsZXRlIHRoaXMuX2xpc3RlbmVyS2V5VXA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkgeyB0aGlzLmlzS2V5RG93biA9IHRoaXMua2V5cy5LZXlXLmlzRG93biB8fCB0aGlzLmtleXMuS2V5RC5pc0Rvd24gfHwgdGhpcy5rZXlzLktleVMuaXNEb3duIHx8IHRoaXMua2V5cy5LZXlBLmlzRG93bjsgfVxyXG5cclxuICAgIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tldmVudC5jb2RlXSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0uaXNEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5VXBIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tldmVudC5jb2RlXSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0uaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBsYXllck1vdmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwga2V5Q29udHJvbGxlciwgcHJvcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMua2V5Q29udHJvbGxlciA9IGtleUNvbnRyb2xsZXI7XHJcblxyXG4gICAgICAgIHRoaXMua2V5cyA9IHByb3Aua2V5cztcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLnVwXS5pc0Rvd24pICAgIHRoaXMubW92ZVVwKCk7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29udHJvbGxlci5rZXlzW3RoaXMua2V5cy5yaWdodF0uaXNEb3duKSB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmtleUNvbnRyb2xsZXIua2V5c1t0aGlzLmtleXMuZG93bl0uaXNEb3duKSAgdGhpcy5tb3ZlRG93bigpOyBcclxuICAgICAgICBpZiAodGhpcy5rZXlDb250cm9sbGVyLmtleXNbdGhpcy5rZXlzLmxlZnRdLmlzRG93bikgIHRoaXMubW92ZUxlZnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMua2V5Q29udHJvbGxlci5pc0tleURvd24pIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVVwKCkgICAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueSAtPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInVwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueCArPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZURvd24oKSAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmJvZHkueSArPSB0aGlzLnBsYXllci5ib2R5Lm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdCgpICB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYm9keS54IC09IHRoaXMucGxheWVyLmJvZHkubW92ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyS2V5Q29udHJvbGxlciB9IGZyb20gXCIuL2tleUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyTW92ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb3ZlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBCb2R5QW5pbWF0aW9uIH0gZnJvbSBcIi4uLy4uL2JvZGllcy9hbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcGxheWVyLCBwcm9wIH0pIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlDb250cm9sbGVyID0gbmV3IFBsYXllcktleUNvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IFBsYXllck1vdmVDb250cm9sbGVyKHRoaXMucGxheWVyLCB0aGlzLmtleUNvbnRyb2xsZXIsIHByb3AubW92ZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBCb2R5QW5pbWF0aW9uKHRoaXMucGxheWVyLnZpZXcsIHRoaXMubW92ZUNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkgeyB0aGlzLmtleUNvbnRyb2xsZXIuc3RhcnQoKTsgfVxyXG4gICAgc3RvcCgpICB7IHRoaXMua2V5Q29udHJvbGxlci5zdG9wKCk7ICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmtleUNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL3BsYXllckNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL2JvZGllcy9jaGFyYWN0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcCkge1xyXG4gICAgICAgIHN1cGVyKHByb3ApO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3AubmFtZTtcclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50ID0gMztcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIoeyBwbGF5ZXI6IHRoaXMsIHByb3A6IHByb3AuY29udHJvbGxlciB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGZyYW1lRGVsYXk9IDUwLCByZXBlYXQgPSBmYWxzZSwgYXV0b3J1biA9IGZhbHNlIH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcclxuICAgICAgICB0aGlzLmF1dG9ydW4gPSBhdXRvcnVuO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lRGVsYXkgPSBmcmFtZURlbGF5O1xyXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5hdXRvcnVuICYmIHRoaXMucnVuKCk7IH1cclxuXHJcbiAgICBydW4oKSAgeyB0aGlzLmlzUnVubmluZyA9IHRydWU7ICB9XHJcbiAgICBzdG9wKCkgeyB0aGlzLmlzUnVubmluZyA9IGZhbHNlOyB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RGcmFtZVRpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RGcmFtZVRpbWUpID4gdGhpcy5mcmFtZURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWxBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsYWJlbEFuaW1hdGlvblwiLCBsYWJlbCwgZnJhbWVEZWxheSA9IDIwMCwgdGV4dENvbGxlY3Rpb24gPSBbXSwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgZnJhbWVEZWxheTogZnJhbWVEZWxheSwgcmVwZWF0OiByZXBlYXQsIGF1dG9ydW46IGF1dG9ydW4gfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLnRleHRDb2xsZWN0aW9uID0gdGV4dENvbGxlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRleHRJbmRleCArIDEgPT0gdGhpcy50ZXh0Q29sbGVjdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dEluZGV4ID0gMDtcclxuICAgICAgICB9IGVsc2UgKyt0aGlzLmN1cnJlbnRUZXh0SW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0ID0gdGhpcy50ZXh0Q29sbGVjdGlvblt0aGlzLmN1cnJlbnRUZXh0SW5kZXhdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3ByaXRlQW5pbWF0aW9uXCIsIHNwcml0ZVNoZWV0LCBpbmRpY2VzLCBmcmFtZURlbGF5ID0gMTAwLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gZmFsc2UgfSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgZnJhbWVEZWxheTogZnJhbWVEZWxheSwgcmVwZWF0OiByZXBlYXQsIGF1dG9ydW46IGF1dG9ydW4gfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBzcHJpdGVTaGVldDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzO1xyXG4gICAgICAgIHRoaXMuZnJhbWVzID0gdGhpcy5nZXRGcmFtZXModGhpcy5pbmRpY2VzKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuaW5pdCgpO1xyXG5cclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhbWVzKGluZGljZXMpIHtcclxuICAgICAgICByZXR1cm4gaW5kaWNlcy5tYXAoIGluZGV4ID0+ICh7XHJcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuc3ByaXRlU2hlZXQuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuc3ByaXRlU2hlZXQuZ2V0U291cmNlWShpbmRleClcclxuICAgICAgICB9KSApO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSgpIHtcclxuICAgICAgICBpZiAoKHRoaXMuY3VycmVudEZyYW1lSW5kZXggKyAxID09IHRoaXMuZnJhbWVzLmxlbmd0aCApICYmIHRoaXMucmVwZWF0KVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5yZXBlYXQpIHN0b3AoKTtcclxuICAgICAgICBlbHNlICsrdGhpcy5jdXJyZW50RnJhbWVJbmRleDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gICAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwLCBsaW1pdFggPSA2NDAsIGxpbWl0WSA9IDY0MCwgc2Nyb2xsRWRnZSA9IDMwMCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5saW1pdFggPSBsaW1pdFg7XHJcbiAgICAgICAgdGhpcy5saW1pdFkgPSBsaW1pdFk7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbEVkZ2UgPSBzY3JvbGxFZGdlO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKG9iaikge1xyXG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IG9iai5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMud2F0Y2hPYmplY3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS54ID4gKHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnNjcm9sbEVkZ2UpKVxyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLmxpbWl0WCwgdGhpcy5ib2R5LnggLSB0aGlzLndpZHRoICsgdGhpcy5zY3JvbGxFZGdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS54IDwgKHRoaXMueCArIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KDAsIHRoaXMuYm9keS54IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS55ID4gKHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMuYm9keS55IC0gdGhpcy5oZWlnaHQgKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2R5LnkgPCAodGhpcy55ICsgdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoMCwgdGhpcy5ib2R5LnkgLSB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vdmlldy9waWN0dXJlL3Nwcml0ZVNoZWV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3AsIGNvbGxpc2lvbikge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gY29sbGlzaW9uO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSBwcm9wLm1hcERhdGE7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5kYXRhLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggID0gdGhpcy5kYXRhLndpZHRoICogdGhpcy5kYXRhLnRpbGV3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQgKiB0aGlzLmRhdGEudGlsZWhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlU2V0ID0gbmV3IFNwcml0ZVNoZWV0KHByb3AubWFwU3ByaXRlU2hlZXQpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdyAgICA9IHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4gPSB0aGlzLmRhdGEud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzICAgID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TGF5ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLnVwcGVyTGF5ZXIgICA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aWxlU2V0LmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMYXllcnMoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG5hbWU6IGxheWVyLm5hbWUsIGluZGV4ZXM6IGxheWVyLmRhdGEsIHpfaW5kZXg6IGxheWVyLnByb3BlcnRpZXNbMF0udmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5ZXIudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzID0gbGF5ZXIub2JqZWN0cy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHgxOiBpdGVtLngsIHgyOiBpdGVtLnggKyBpdGVtLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHkxOiBpdGVtLnksIHkyOiBpdGVtLnkgKyBpdGVtLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxheWVycy5zb3J0KCAoYSwgYikgPT4gYS56X2luZGV4IC0gYi56X2luZGV4ICk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24uY29sbGlkZXJzID0gdGhpcy5jb2xsaWRlcnM7XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kUmVuZGVyKHNjcmVlbikge1xyXG4gICAgICAgIHRoaXMudXBwZXJMYXllci5mb3JFYWNoKHRpbGUgPT4gc2NyZWVuLmRyYXdTcHJpdGUodGlsZS5zcHJpdGUsIHRpbGUueCwgdGlsZS55KSApO1xyXG4gICAgICAgIHRoaXMudXBwZXJMYXllciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbCA9IDAsIHJvdyA9IDA7XHJcblxyXG4gICAgICAgICAgICBsYXllci5pbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IFwid2FsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uLmJvZGllcy5mb3JFYWNoKCBib2R5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0ludGVyc2VjdCA9IHRoaXMuY29sbGlzaW9uLmludGVyc2VjdChib2R5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE6IHRoaXMudGlsZVNldC5zcHJpdGVXaWR0aCAqIGNvbCwgIHgyOiB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wgICsgdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxOiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93LCB5MjogdGhpcy50aWxlU2V0LnNwcml0ZUhlaWdodCAqIHJvdyArIHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgLzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW50ZXJzZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBwZXJMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlOiB0aGlzLnRpbGVTZXQuZ2V0U3ByaXRlKGluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy50aWxlU2V0LnNwcml0ZVdpZHRoICogY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnRpbGVTZXQuc3ByaXRlSGVpZ2h0ICogcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudGlsZVNldC5nZXRTcHJpdGUoaW5kZXgpLCB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsIHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudGlsZVNldC5nZXRTcHJpdGUoaW5kZXgpLCB0aGlzLnRpbGVTZXQuc3ByaXRlV2lkdGggKiBjb2wsIHRoaXMudGlsZVNldC5zcHJpdGVIZWlnaHQgKiByb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKCsrY29sID4gdGhpcy5jb2x1bW4gLSAxKSAmJiAoW2NvbCwgcm93XSA9IFswLCByb3crMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaW1hZ2UgPSB1bmRlZmluZWQsIHNyYywgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQsIHNvdXJjZVggPSAwLCBzb3VyY2VZID0gMCB9KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgdGhpcy5pbWFnZSB8fCAodGhpcy5pbWFnZSA9IHRoaXMubG9hZEltYWdlKCkpOyB9XHJcblxyXG4gICAgX2xvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkSW1hZ2UoKSB7IHRoaXMuX2xvYWQoKS50aGVuKGltZyA9PiB0aGlzLmltYWdlID0gaW1nKS5jYXRjaChlcnJvciA9PiB7IHRocm93IGVycm9yOyB9KTsgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQgZXh0ZW5kcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJzcHJpdGVTaGVldFwiLCBzcmMsIHdpZHRoLCBoZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0IH0pIHtcclxuICAgICAgICBzdXBlcih7IHNyYzogc3JjLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggID0gc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICAgICAgICBpbWFnZTogICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICB3aWR0aDogICB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICB0aGlzLnNwcml0ZUhlaWdodCxcclxuICAgICAgICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcclxuICAgICAgICAgICAgc291cmNlWTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHsgcmV0dXJuIChpbmRleC0xKSAqIHRoaXMuc3ByaXRlV2lkdGggJSB0aGlzLndpZHRoOyB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCAoKGluZGV4LTEpICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLndpZHRoICkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IE1hcCB9IGZyb20gXCIuLi8uLi9tYXBcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi8uLi9lbmVteS9lbmVteVwiO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi4vLi4vcGljdHVyZS9zcHJpdGVcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxldmVsXCIsIHNjcmVlbiwgcGxheWVyLCBjb2xsaXNpb24sIHByb3AsIHBhcmVudCA9IFwibm9uZVwifSkge1xyXG4gICAgICAgIHN1cGVyKHsgbmFtZTogbmFtZSwgc2NyZWVuOiBzY3JlZW4sIHBhcmVudDogcGFyZW50LCBuZXh0OiBwcm9wLm5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChwcm9wLCBjb2xsaXNpb24pO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBwcm9wLmVuZW1pZXMubWFwKGVuZW15ID0+IG5ldyBFbmVteShlbmVteSkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgICAgIGhlYWx0aFBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOiBuZXcgU3ByaXRlKHByb3AuaW50ZXJmYWNlLmhlYWx0aFBvaW50cy5zcHJpdGUpLFxyXG4gICAgICAgICAgICAgICAgeDogcHJvcC5pbnRlcmZhY2UuaGVhbHRoUG9pbnRzLngsXHJcbiAgICAgICAgICAgICAgICB5OiBwcm9wLmludGVyZmFjZS5oZWFsdGhQb2ludHMueSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBwcm9wLmludGVyZmFjZS5oZWFsdGhQb2ludHMuY291bnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGltZTogbmV3IExhYmVsKHByb3AuaW50ZXJmYWNlLnRpbWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWUgPSB7XHJcbiAgICAgICAgICAgIGFsbDogcHJvcC50aW1lLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmNvbnRyb2xsZXIuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gZW5lbXkuaW5pdCh0aGlzLnBsYXllciwgdGhpcy5jb2xsaXNpb24pKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi5ib2RpZXMucHVzaCh0aGlzLnBsYXllci5ib2R5LCAuLi50aGlzLmVuZW1pZXMubWFwKGVuZW15ID0+IGVuZW15LmJvZHkpKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgICB3aWR0aDogIHRoaXMuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2NyZWVuLmhlaWdodCxcclxuICAgICAgICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBsaW1pdFk6IHRoaXMubWFwLmhlaWdodCAtIHRoaXMuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMuY2FtZXJhKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcmZhY2UuaGVhbHRoUG9pbnRzLnNwcml0ZS5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmZhY2UudGltZS5pbml0KCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWUuY3VycmVudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5jdXJyZW50ID0gTWF0aC50cnVuYyh0aW1lIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5hbGwgKz0gdGhpcy50aW1lLmN1cnJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbGxpc2lvbi51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmludGVyZmFjZS5oZWFsdGhQb2ludHMuY291bnQgPSB0aGlzLnBsYXllci5oZWFsdGhQb2ludDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZS5jdXJyZW50ICE9IE1hdGgudHJ1bmModGltZSAvIDEwMDApKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy50aW1lLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWluID0gTWF0aC50cnVuYygodGhpcy50aW1lLmFsbCAtIDEpIC8gNjApO1xyXG4gICAgICAgICAgICBsZXQgc2VjID0gLS10aGlzLnRpbWUuYWxsICUgNjA7XHJcbiAgICAgICAgICAgIG1pbiA9IChtaW4gPiA5KSA/IG1pbiA6IFwiMFwiICsgbWluO1xyXG4gICAgICAgICAgICBzZWMgPSAoc2VjID4gOSkgPyBzZWMgOiBcIjBcIiArIHNlYztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJmYWNlLnRpbWUudGV4dCA9IGBUaW1lIHwgJHttaW59OiR7c2VjfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50aW1lLmFsbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJsZXZlbF8yXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbikpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJlbmRlcih0aW1lLCB0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnNlY29uZFJlbmRlcih0aGlzLnNjcmVlbik7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVyZmFjZS5oZWFsdGhQb2ludHMuY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuaW50ZXJmYWNlLmhlYWx0aFBvaW50cy54ICsgaSAqIHRoaXMuaW50ZXJmYWNlLmhlYWx0aFBvaW50cy5zcHJpdGUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLmRyYXdJbWFnZSh0aGlzLmludGVyZmFjZS5oZWFsdGhQb2ludHMuc3ByaXRlLmltYWdlLCB4LCB0aGlzLmludGVyZmFjZS5oZWFsdGhQb2ludHMueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlLnRpbWUucmVuZGVyKHRpbWUsIHRoaXMuc2NyZWVuKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8xIGV4dGVuZHMgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbF8xXCIsIHNjcmVlbiwgY29sbGlzaW9uLCBwbGF5ZXIsIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2NyZWVuOiBzY3JlZW4sXHJcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyLFxyXG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8yIGV4dGVuZHMgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lID0gXCJsZXZlbF8yXCIsIHNjcmVlbiwgY29sbGlzaW9uLCBwbGF5ZXIsIHByb3AsIHBhcmVudCA9IFwibm9uZVwiLCBuZXh0ID0gXCJub25lXCIgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2NyZWVuOiBzY3JlZW4sXHJcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyLFxyXG4gICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIG5leHQ6IG5leHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi8uLi9pZWxlbWVudHMvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSBcImxvYWRpbmdcIiwgc2NyZWVuLCBwcm9wLCBwYXJlbnQgPSBcIm5vbmVcIiwgbmV4dCA9IFwibm9uZVwiIH0pIHtcclxuICAgICAgICBzdXBlcih7IG5hbWU6IG5hbWUsIHNjcmVlbjogc2NyZWVuLCBwYXJlbnQ6IHBhcmVudCwgbmV4dDogbmV4dCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmllbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFRpbGUocHJvcC5iYWNrZ3JvdW5kKSxcclxuICAgICAgICAgICAgZGlzazogICAgICAgbmV3IFRpbGUocHJvcC5kaXNrKSxcclxuICAgICAgICAgICAgbGFiZWw6ICAgICAgbmV3IExhYmVsKHByb3AubGFiZWwpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJmaW5pc2hcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJzdGFydE1lbnVcIjtcclxuICAgICAgICB9LCAoMSArIE1hdGgucmFuZG9tKCkpICogMWUzKTsgLy8gMS0yIHNlY1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi8uLi8uLi9pZWxlbWVudHMvdGlsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vaWVsZW1lbnRzL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0TWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSA9IFwic3RhcnRNZW51XCIsIHNjcmVlbiwgcHJvcCwgcGFyZW50ID0gXCJub25lXCIsIG5leHQgPSBcIm5vbmVcIiB9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBuYW1lOiBuYW1lLCBzY3JlZW46IHNjcmVlbiwgcGFyZW50OiBwYXJlbnQsIG5leHQ6IG5leHQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGlsZShwcm9wLmJhY2tncm91bmQpLFxyXG4gICAgICAgICAgICBwbGF5QnV0dG9uOiBuZXcgQnV0dG9uKHByb3AucGxheUJ1dHRvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uX19pbl9fKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZmluaXNoXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IFwibGV2ZWxfMVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5fX2luX18oZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmNsaWNrO1xyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmlzTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAhZXZlbnQgJiYgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5iZ2NvbG9yID0gdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5jb2xvcnMuZGVmYXVsdDtcclxuICAgICAgICAgICAgdGhpcy5pZWxlbWVudHMucGxheUJ1dHRvbi5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLl9faW5fXyhldmVudCkpIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmhvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIXRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uaXNNb3VzZURvd24gJiYgKHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uYmdjb2xvciA9IHRoaXMuaWVsZW1lbnRzLnBsYXlCdXR0b24uY29sb3JzLmRlZmF1bHQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLmFkZExpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NLCB7XHJcbiAgICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXI6ICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXI6ICAgdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG1vdXNlVXBIYW5kbGVyOiAgICAgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNsaWNrSGFuZGxlcjogIHRoaXMubW91c2VDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudExpc3RlbigpIHtcclxuICAgICAgICB0aGlzLmllbGVtZW50cy5wbGF5QnV0dG9uLnJlbW92ZUxpc3RlbmVycyh0aGlzLnNjcmVlbi5jYW52YXMuRE9NKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHNjcmVlbiwgcGFyZW50LCBuZXh0IH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICF0aGlzLmllbGVtZW50cyAmJiAodGhpcy5pZWxlbWVudHMgPSB7fSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGllIGluIHRoaXMuaWVsZW1lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLmllbGVtZW50c1tpZV0uaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFwibG9hZGVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudExpc3RlbigpIHt9XHJcbiAgICBzdG9wRXZlbnRMaXN0ZW4oKSAge31cclxuXHJcbiAgICBzdGFydCgpIHsgdGhpcy5zdGFydEV2ZW50TGlzdGVuKCk7IH1cclxuICAgIHN0b3AoKSAgeyB0aGlzLnN0b3BFdmVudExpc3RlbigpOyAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWUgaW4gdGhpcy5pZWxlbWVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuaWVsZW1lbnRzW2llXS5yZW5kZXIodGltZSwgdGhpcy5zY3JlZW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIHx8IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcclxuICAgICAgICBkaXYuaWQgPSBcImdhbWVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5ET00gPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0gfHwgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMuRE9NLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ET00uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5ET00uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYShjYW1lcmEpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyB0aGlzLmNhbnZhcy5pbml0KCk7IH1cclxuXHJcbiAgICBkcmF3QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChidXR0b24ueCAtIDUsIGJ1dHRvbi55IC0gNSwgYnV0dG9uLndpZHRoICsgMTAsIGJ1dHRvbi5oZWlnaHQgKyAxMCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBidXR0b24uYmdjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KGJ1dHRvbi54LCBidXR0b24ueSwgYnV0dG9uLndpZHRoLCBidXR0b24uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3TGFiZWwoYnV0dG9uLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TGFiZWwobGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IGxhYmVsLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZm9udCA9IGAke2xhYmVsLmZvbnRXZWlnaHR9ICR7bGFiZWwuZm9udFNpemV9cHggJHtsYWJlbC5mb250RmFtaWx5IHx8IFwiTHVjaWRhIENvbnNvbGFzXCJ9YDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsVGV4dChsYWJlbC50ZXh0LCBsYWJlbC54LCBsYWJlbC55KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHsgaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpOyB9XHJcbiAgICBcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5KSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZVggPSB4O1xyXG4gICAgICAgIGxldCBzcHJpdGVZID0geTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICAgICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgICAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3ByaXRlWCA+PSB0aGlzLndpZHRoKSAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodCkgICAgICAgICB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpICA8PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxyXG4gICAgICAgICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xyXG4gICAgICAgIGxldCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xyXG5cclxuICAgICAgICBzcHJpdGUuaW1hZ2UgJiYgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHNwcml0ZS5pbWFnZSxcclxuICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSxcclxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodCxcclxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCksIE1hdGgubWF4KDAsIHNwcml0ZVkpLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LnN0cm9rZVJlY3QoeCAtIHRoaXMuY2FtZXJhLngsIHkgLSB0aGlzLmNhbWVyYS55LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=