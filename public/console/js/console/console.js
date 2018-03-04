/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 680);
/******/ })
/************************************************************************/
/******/ ({

/***/ 528:
/***/ (function(module, exports) {

// *****************************
// ***** Private Variables *****
// *****************************
/**
 * Save this instance
 * @type @this;
 * @private
 */
var self = this;

/**
 * If Module has been initiated
 * @type Boolean
 * @private
 */
var _isInit = false; // to avoid 'rebinds'

/**
 * Init console plugin
 * @private
 *
 */
var _editor = function _editor() {
    $(document).ready(function () {
        CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "material"
        });
    });
};

// ****************************
// ***** Public functions *****
// ****************************
/**
 * start
 *
 * Starts the module
 * Inits private variables and executes specific logic needed for the module
 * to start.
 *
 * @public
 */
this.start = function () {
    if (!_isInit) {
        console.log("Console Area List started..");

        // Start Code Editor
        _editor();
    }
};

self.start();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(528);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2U2YzhiNTQxOWYyM2RkYWY5NzE/ZjBlMCoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnNvbGUvY29uc29sZS5qcyJdLCJuYW1lcyI6WyJzZWxmIiwiX2lzSW5pdCIsIl9lZGl0b3IiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJnZXRFbGVtZW50QnlJZCIsImxpbmVOdW1iZXJzIiwibWF0Y2hCcmFja2V0cyIsInN0eWxlQWN0aXZlTGluZSIsInRoZW1lIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsSUFBSUEsT0FBTyxJQUFYOztBQUVBOzs7OztBQUtBLElBQUlDLFVBQVUsS0FBZCxDLENBQXFCOztBQUVyQjs7Ozs7QUFLQSxJQUFJQyxVQUFVLFNBQVZBLE9BQVUsR0FBWTtBQUN0QkMsTUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJDLG1CQUFXQyxZQUFYLENBQXdCSCxTQUFTSSxjQUFULENBQXdCLE1BQXhCLENBQXhCLEVBQXlEO0FBQ3JEQyx5QkFBYSxJQUR3QztBQUVyREMsMkJBQWUsSUFGc0M7QUFHckRDLDZCQUFpQixJQUhvQztBQUlyREMsbUJBQU87QUFKOEMsU0FBekQ7QUFNSCxLQVBEO0FBUUgsQ0FURDs7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0EsS0FBS0MsS0FBTCxHQUFhLFlBQVc7QUFDcEIsUUFBRyxDQUFDWixPQUFKLEVBQWE7QUFDVGEsZ0JBQVFDLEdBQVIsQ0FBWSw2QkFBWjs7QUFFQTtBQUNBYjtBQUNIO0FBQ0osQ0FQRDs7QUFTQUYsS0FBS2EsS0FBTCxHIiwiZmlsZSI6ImNvbnNvbGUvanMvY29uc29sZS9jb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjgwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZTZjOGI1NDE5ZjIzZGRhZjk3MSIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKiBQcml2YXRlIFZhcmlhYmxlcyAqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogU2F2ZSB0aGlzIGluc3RhbmNlXG4gKiBAdHlwZSBAdGhpcztcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzZWxmID0gdGhpcztcblxuLyoqXG4gKiBJZiBNb2R1bGUgaGFzIGJlZW4gaW5pdGlhdGVkXG4gKiBAdHlwZSBCb29sZWFuXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgX2lzSW5pdCA9IGZhbHNlOyAvLyB0byBhdm9pZCAncmViaW5kcydcblxuLyoqXG4gKiBJbml0IGNvbnNvbGUgcGx1Z2luXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xudmFyIF9lZGl0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKSwge1xuICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICAgICAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLFxuICAgICAgICAgICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLFxuICAgICAgICAgICAgdGhlbWU6IFwibWF0ZXJpYWxcIlxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKiogUHVibGljIGZ1bmN0aW9ucyAqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBzdGFydFxuICpcbiAqIFN0YXJ0cyB0aGUgbW9kdWxlXG4gKiBJbml0cyBwcml2YXRlIHZhcmlhYmxlcyBhbmQgZXhlY3V0ZXMgc3BlY2lmaWMgbG9naWMgbmVlZGVkIGZvciB0aGUgbW9kdWxlXG4gKiB0byBzdGFydC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnRoaXMuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZighX2lzSW5pdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnNvbGUgQXJlYSBMaXN0IHN0YXJ0ZWQuLlwiKTtcblxuICAgICAgICAvLyBTdGFydCBDb2RlIEVkaXRvclxuICAgICAgICBfZWRpdG9yKCk7XG4gICAgfVxufTtcblxuc2VsZi5zdGFydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29uc29sZS9jb25zb2xlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==