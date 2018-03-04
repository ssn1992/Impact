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
/******/ 	return __webpack_require__(__webpack_require__.s = 858);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

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
 * Request Tables
 * @type {string}
 * @private
 */
var _requestForms = ["insert-press"];

/**
 * Form Component instance
 */
var insertClosedListComponent = __webpack_require__(573);

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
    console.log("Closed List Area Press Insert Area started..");

    // Form component init
    insertClosedListComponent.start(_requestForms);
  }
};

self.start();

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// VeeValidate import

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vee_validate__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            validateForm: 'none',
            payload: {
                budget: {
                    label: 'Budget',
                    value: 'budget',
                    rules: 'required',
                    post: null
                },
                brands: {
                    label: 'Brand',
                    value: 'brands',
                    rules: 'required',
                    post: null,
                    data: []
                },
                years: {
                    label: 'Year',
                    value: 'year',
                    rules: 'required',
                    post: null,
                    data: []
                }
            }
        };
    },


    methods: {
        comboBoxMount: function comboBoxMount(response, data) {
            this.payload[data].data = response.data;

            this.$nextTick(function () {
                $('.selectpicker').selectpicker();
                $('.selectpicker').selectpicker('refresh');
            });
        },
        yearsList: function yearsList(instance) {
            var payload = {};
            payload.data = [];

            var date = new Date();
            var year = date.getFullYear();

            for (var i = year - 3; i <= year + 3; i++) {
                payload.data.push(i);
            }

            // Init ComboBox
            instance.comboBoxMount(payload, 'years', true, 'years', year);
        },
        brandsList: function brandsList(instance) {
            // Send a POST request
            axios({
                method: 'get',
                url: 'get-brands-only'
            }).then(function (response) {
                // Init ComboBox
                instance.comboBoxMount(response.data.brands, 'brands');
            }).catch(function (error) {});
        },
        postInsertBudget: function postInsertBudget(payload) {
            window.buttonLoader.start();

            // Send a POST request
            axios({
                method: 'post',
                url: 'budget-insert',
                data: payload
            }).then(function (response) {
                window.buttonLoader.stop();
                $('.ladda-button-selector').fadeIn(1000, function () {
                    $(this).append('<i style="padding-left: 5px;" class="fa fa-check"></i>');
                });

                setTimeout(function () {
                    $('.ladda-button-selector > .fa-check').fadeOut(1000, function () {
                        $(this).removeClass('fa-check');
                    });
                }, 1000);

                // Show success modal
                $('#modal-success').modal('show');
            }).catch(function (error) {
                if (error.response.status === 419) {
                    error.response.statusText = "Your session has expired, will be redirected to the login";

                    setTimeout(function () {
                        window.location.href = '/';
                    }, 3000);
                }

                window.buttonLoader.stop();

                $('.ladda-button-selector').fadeIn(1000, function () {
                    $(this).append('<i style="padding-left: 5px;" class="fa fa-close"></i>').addClass('btn-danger');
                });

                setTimeout(function () {
                    $('.ladda-button-selector > .fa-close').fadeOut(1000, function () {
                        $(this).remove();
                    });
                    $('.ladda-button-selector').removeClass('btn-danger');
                }, 1000);

                // Show success modal
                $('#modal-error').modal('show');
            });
        },
        validateBeforeSubmit: function validateBeforeSubmit(request) {
            this.$nextTick(function () {
                var _this = this;

                this.$validator.validateAll().then(function (result) {

                    if (result) {
                        var payload = {};

                        Object.keys(request).forEach(function (value) {
                            payload[value] = request[value].post;
                        });

                        _this.postInsertBudget(payload);

                        console.log(payload);
                        console.log('Form Submitted!');

                        return;
                    } else {
                        _this.validateForm = null;
                        console.log('Correct them errors!');
                    }
                });
            });
        }
    },

    mounted: function mounted() {
        // Bind Create button loader
        window.buttonLoader = Ladda.create(document.querySelector('.ladda-button-selector'));

        // Get YearsList
        this.yearsList(this);

        // Get BrandsList
        this.brandsList(this);
    }
});

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Forms_vue__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Forms_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Forms_vue__);
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
 * Request
 * @type String
 * @private
 */
var _request;

/**
 * Date picker instance
 */


/**
 *
 * Create a Table component
 *
 * @param response
 * @return {{columns, data, tableName: (*|null)}}
 * @private
 */
var _form = function _form() {
  // Create all requested instances
  for (var i = 0, len = _request.length; i < len; i++) {
    new Vue({
      el: '#' + _request[i],
      mixins: [__WEBPACK_IMPORTED_MODULE_0__Forms_vue___default.a]
    });
  }
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
self.start = function (request) {
  _request = request;
  if (!_isInit) {
    console.log("Form Component started..");

    // Form component
    _form();
  }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
exports.push([module.i, "\n.btn.disabled[data-v-a26ba514], .btn[disabled][data-v-a26ba514], fieldset[disabled] .btn[data-v-a26ba514] {\n    cursor: auto;\n}\n", "", {"version":3,"sources":["Forms.vue?41fe2e71"],"names":[],"mappings":";AACA;IACA,aAAA;CACA","file":"Forms.vue","sourcesContent":["<style scoped>\n    .btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n        cursor: auto;\n    }\n</style>\n\n<template>\n    <div>\n        <div id=\"forms\">\n            <div class=\"modal inmodal fade\" id=\"modal-success\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" style=\"z-index: 209999950!important;\">\n                <div class=\"modal-dialog modal-md\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <button leadType=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                            <h4 class=\"modal-title\">Success</h4>\n                        </div>\n                        <div class=\"modal-body\" style=\"text-align: center; display: block;\">\n                            <i class=\"fa fa-check fa-5x text-info\" style=\"display: block;\"></i>\n                            <small class=\"font-bold\"> Insert Budget </small><br>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button leadType=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"modal inmodal fade\" id='modal-error' tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" style=\"z-index: 209999950!important;\">\n                <div class=\"modal-dialog modal-md\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <button leadType=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                            <h4 class=\"modal-title\">Please try again later</h4>\n                        </div>\n                        <div class=\"modal-body\" style=\"text-align: center; display: block;\">\n                            <i class=\"fa fa-warning fa-5x text-danger\" style=\"display: block;\"></i>\n                            <small class=\"font-bold text-danger\"> Something goes wrong</small><br>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button leadType=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5> Insert Budget</h5>\n\n                    <div class=\"ibox-tools\">\n                        <a class=\"collapse-link\">\n                            <i class=\"fa fa-chevron-up\"></i>\n                        </a>\n                        <a class=\"close-link\">\n                            <i class=\"fa fa-times\"></i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ibox-content\">\n\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <form @submit.prevent=\"validateBeforeSubmit(payload)\" id=\"form-section-fairs\">\n\n                                <div class=\"col-lg-4 form-group padding-bottom\" :class=\"{'has-error': errors.has(payload.years.value)}\">\n                                    <label class=\"label\" style=\"display: table-cell\">{{ payload.years.label }}</label>\n\n                                    <select v-validate :data-vv-rules=payload.years.rules :data-vv-validate-on=\"validateForm\" title=\"Please choose one of the following options\" :name=payload.years.post  data-live-search=\"true\" v-model=payload.years.post class=\"selectpicker\">\n                                        <option :value=\"values\" v-for=\"values in payload.years.data\">\n                                            <span v-bind:id=\"values\"></span>\n                                            {{ values }}\n                                        </option>\n                                    </select>\n                                    <span v-show=\"errors.has(payload.years.value)\" class=\"help-block text-danger text-center\">\n                                        <strong>{{ errors.first(payload.years.value) }}</strong>\n                                    </span>\n                                </div>\n\n                                <div class=\"col-lg-4 form-group padding-bottom\" :class=\"{'has-error': errors.has(payload.brands.value)}\">\n                                    <label class=\"label\" style=\"display: table-cell\">{{ payload.brands.label }}</label>\n\n                                    <select v-validate :data-vv-rules=payload.brands.rules :data-vv-validate-on=\"validateForm\" title=\"Please choose one of the following options\" :name=payload.brands.post  data-live-search=\"true\" v-model=payload.brands.post class=\"selectpicker\">\n                                        <option :value=\"values.value\" v-for=\"values in payload.brands.data\">\n                                            <span v-bind:id=\"values.value\"></span>\n                                            {{ values.label }}\n                                        </option>\n                                    </select>\n                                    <span v-show=\"errors.has(payload.brands.value)\" class=\"help-block text-danger text-center\">\n                                        <strong>{{ errors.first(payload.brands.value) }}</strong>\n                                    </span>\n                                </div>\n\n                                <div class=\"form-group col-lg-4 padding-bottom\" :class=\"{'has-error': errors.has(payload.budget.value)}\">\n                                    <label class=\"label\">{{ payload.budget.label }}</label>\n\n                                    <input v-model=\"payload.budget.post\" :name=payload.budget.value  v-validate :data-vv-rules=payload.budget.rules :data-vv-validate-on=\"validateForm\" class=\"input form-control\" leadType=\"text\" :placeholder=\"payload.budget.label\"/>\n                                    <span v-show=\"errors.has(payload.budget.value)\" class=\"help-block text-danger text-center\">\n                                            <strong>{{ errors.first(payload.budget.value) }}</strong>\n                                        </span>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <button  class=\"ladda-button ladda-button-selector btn btn-primary\" data-style=\"zoom-in\" leadType=\"submit\">Insert Budget\n                                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    // VeeValidate import\n    import VeeValidate from 'vee-validate';\n    Vue.use(VeeValidate);\n\n    export default {\n        data () {\n            return {\n                validateForm: 'none',\n                payload: {\n                    budget : {\n                        label: 'Budget',\n                        value: 'budget',\n                        rules: 'required',\n                        post  : null,\n                    },\n                    brands         : {\n                        label : 'Brand',\n                        value : 'brands',\n                        rules : 'required',\n                        post  : null,\n                        data  : []\n                    },\n                    years         : {\n                        label : 'Year',\n                        value : 'year',\n                        rules : 'required',\n                        post  : null,\n                        data  : []\n                    },\n                }\n            }\n        },\n\n        methods: {\n            comboBoxMount (response, data) {\n                this.payload[data].data = response.data;\n\n                this.$nextTick(function () {\n                    $('.selectpicker').selectpicker();\n                    $('.selectpicker').selectpicker('refresh');\n                })\n            },\n\n            yearsList (instance) {\n                let payload      = {};\n                    payload.data = [];\n\n                let date = new Date;\n                let year  = date.getFullYear();\n\n                for (let i = year - 3; i <= year + 3; i++) {\n                    payload.data.push(i);\n                }\n\n                // Init ComboBox\n                instance.comboBoxMount(payload, 'years', true, 'years', year);\n            },\n\n            brandsList (instance) {\n                // Send a POST request\n                axios({\n                    method: 'get',\n                    url: 'get-brands-only',\n                })\n\n                .then(function (response) {\n                    // Init ComboBox\n                    instance.comboBoxMount(response.data.brands, 'brands');\n\n                })\n                .catch(function (error) {\n                });\n            },\n\n            postInsertBudget (payload) {\n                window.buttonLoader.start();\n\n                // Send a POST request\n                axios({\n                    method: 'post',\n                    url: 'budget-insert',\n                    data: payload\n                })\n\n                .then(function (response) {\n                    window.buttonLoader.stop();\n                    $('.ladda-button-selector').fadeIn(1000, function() {\n                        $(this).append('<i style=\"padding-left: 5px;\" class=\"fa fa-check\"></i>');\n                    });\n\n                    setTimeout(function(){\n                        $('.ladda-button-selector > .fa-check').fadeOut(1000, function() { $(this).removeClass('fa-check') });\n\n                    }, 1000)\n\n                    // Show success modal\n                    $('#modal-success').modal('show');\n\n                })\n                .catch(function (error) {\n                    if (error.response.status === 419) {\n                        error.response.statusText = \"Your session has expired, will be redirected to the login\";\n\n                        setTimeout(function() {\n                            window.location.href = '/';\n                        }, 3000);\n                    }\n\n                    window.buttonLoader.stop();\n\n                    $('.ladda-button-selector').fadeIn(1000, function() {\n                        $(this).append('<i style=\"padding-left: 5px;\" class=\"fa fa-close\"></i>').addClass('btn-danger');\n                    });\n\n                    setTimeout(function(){\n                        $('.ladda-button-selector > .fa-close').fadeOut(1000, function() { $(this).remove(); });\n                        $('.ladda-button-selector').removeClass('btn-danger');\n                    }, 1000)\n\n                    // Show success modal\n                    $('#modal-error').modal('show');\n                });\n            },\n\n            validateBeforeSubmit(request) {\n                this.$nextTick(function () {\n                    this.$validator.validateAll().then((result) => {\n\n                        if (result) {\n                            var payload = {};\n\n                            Object.keys(request).forEach(function (value) {\n                                payload[value] = request[value].post;\n                            })\n\n                            this.postInsertBudget(payload);\n\n                            console.log(payload);\n                            console.log('Form Submitted!');\n\n                            return;\n                        } else {\n                            this.validateForm = null;\n                            console.log('Correct them errors!');\n                        }\n                    });\n                });\n            },\n        },\n\n        mounted() {\n            // Bind Create button loader\n            window.buttonLoader = Ladda.create(document.querySelector( '.ladda-button-selector'));\n\n            // Get YearsList\n            this.yearsList(this);\n\n            // Get BrandsList\n            this.brandsList(this);\n        }\n    }\n</script>\n\n\n"]}]);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(819)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(531),
  /* template */
  __webpack_require__(779),
  /* scopeId */
  "data-v-a26ba514",
  /* cssModules */
  null
)
Component.options.__file = "/Users/sergionogueira/impact/resources/assets/js/components/forms/requests/closed-list/press/insert/Forms.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Forms.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a26ba514", Component.options)
  } else {
    hotAPI.reload("data-v-a26ba514", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    attrs: {
      "id": "forms"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "ibox float-e-margins"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "ibox-content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('form', {
    attrs: {
      "id": "form-section-fairs"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit(_vm.payload)
      }
    }
  }, [_c('div', {
    staticClass: "col-lg-4 form-group padding-bottom",
    class: {
      'has-error': _vm.errors.has(_vm.payload.years.value)
    }
  }, [_c('label', {
    staticClass: "label",
    staticStyle: {
      "display": "table-cell"
    }
  }, [_vm._v(_vm._s(_vm.payload.years.label))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "validate",
      rawName: "v-validate"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.payload.years.post),
      expression: "payload.years.post"
    }],
    staticClass: "selectpicker",
    attrs: {
      "data-vv-rules": _vm.payload.years.rules,
      "data-vv-validate-on": _vm.validateForm,
      "title": "Please choose one of the following options",
      "name": _vm.payload.years.post,
      "data-live-search": "true"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.payload.years, "post", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, _vm._l((_vm.payload.years.data), function(values) {
    return _c('option', {
      domProps: {
        "value": values
      }
    }, [_c('span', {
      attrs: {
        "id": values
      }
    }), _vm._v("\n                                        " + _vm._s(values) + "\n                                    ")])
  })), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has(_vm.payload.years.value)),
      expression: "errors.has(payload.years.value)"
    }],
    staticClass: "help-block text-danger text-center"
  }, [_c('strong', [_vm._v(_vm._s(_vm.errors.first(_vm.payload.years.value)))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 form-group padding-bottom",
    class: {
      'has-error': _vm.errors.has(_vm.payload.brands.value)
    }
  }, [_c('label', {
    staticClass: "label",
    staticStyle: {
      "display": "table-cell"
    }
  }, [_vm._v(_vm._s(_vm.payload.brands.label))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "validate",
      rawName: "v-validate"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.payload.brands.post),
      expression: "payload.brands.post"
    }],
    staticClass: "selectpicker",
    attrs: {
      "data-vv-rules": _vm.payload.brands.rules,
      "data-vv-validate-on": _vm.validateForm,
      "title": "Please choose one of the following options",
      "name": _vm.payload.brands.post,
      "data-live-search": "true"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.payload.brands, "post", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, _vm._l((_vm.payload.brands.data), function(values) {
    return _c('option', {
      domProps: {
        "value": values.value
      }
    }, [_c('span', {
      attrs: {
        "id": values.value
      }
    }), _vm._v("\n                                        " + _vm._s(values.label) + "\n                                    ")])
  })), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has(_vm.payload.brands.value)),
      expression: "errors.has(payload.brands.value)"
    }],
    staticClass: "help-block text-danger text-center"
  }, [_c('strong', [_vm._v(_vm._s(_vm.errors.first(_vm.payload.brands.value)))])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-lg-4 padding-bottom",
    class: {
      'has-error': _vm.errors.has(_vm.payload.budget.value)
    }
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.payload.budget.label))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.payload.budget.post),
      expression: "payload.budget.post"
    }, {
      name: "validate",
      rawName: "v-validate"
    }],
    staticClass: "input form-control",
    attrs: {
      "name": _vm.payload.budget.value,
      "data-vv-rules": _vm.payload.budget.rules,
      "data-vv-validate-on": _vm.validateForm,
      "leadType": "text",
      "placeholder": _vm.payload.budget.label
    },
    domProps: {
      "value": (_vm.payload.budget.post)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.payload.budget, "post", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has(_vm.payload.budget.value)),
      expression: "errors.has(payload.budget.value)"
    }],
    staticClass: "help-block text-danger text-center"
  }, [_c('strong', [_vm._v(_vm._s(_vm.errors.first(_vm.payload.budget.value)))])])]), _vm._v(" "), _vm._m(3)])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal inmodal fade",
    staticStyle: {
      "z-index": "209999950!important"
    },
    attrs: {
      "id": "modal-success",
      "tabindex": "-1",
      "role": "dialog",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-md"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "leadType": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Close")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Success")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body",
    staticStyle: {
      "text-align": "center",
      "display": "block"
    }
  }, [_c('i', {
    staticClass: "fa fa-check fa-5x text-info",
    staticStyle: {
      "display": "block"
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "font-bold"
  }, [_vm._v(" Insert Budget ")]), _c('br')]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "leadType": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal inmodal fade",
    staticStyle: {
      "z-index": "209999950!important"
    },
    attrs: {
      "id": "modal-error",
      "tabindex": "-1",
      "role": "dialog",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-md"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "leadType": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Close")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Please try again later")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body",
    staticStyle: {
      "text-align": "center",
      "display": "block"
    }
  }, [_c('i', {
    staticClass: "fa fa-warning fa-5x text-danger",
    staticStyle: {
      "display": "block"
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "font-bold text-danger"
  }, [_vm._v(" Something goes wrong")]), _c('br')]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "leadType": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ibox-title"
  }, [_c('h5', [_vm._v(" Insert Budget")]), _vm._v(" "), _c('div', {
    staticClass: "ibox-tools"
  }, [_c('a', {
    staticClass: "collapse-link"
  }, [_c('i', {
    staticClass: "fa fa-chevron-up"
  })]), _vm._v(" "), _c('a', {
    staticClass: "close-link"
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-12"
  }, [_c('button', {
    staticClass: "ladda-button ladda-button-selector btn btn-primary",
    attrs: {
      "data-style": "zoom-in",
      "leadType": "submit"
    }
  }, [_vm._v("Insert Budget\n                                    "), _c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a26ba514", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export install */
/* unused harmony export use */
/* unused harmony export directive */
/* unused harmony export mixin */
/* unused harmony export mapFields */
/* unused harmony export Validator */
/* unused harmony export ErrorBag */
/* unused harmony export Rules */
/* unused harmony export version */
/**
 * vee-validate v2.0.0-rc.21
 * (c) 2017 Abdelrahman Awad
 * @license MIT
 */
// 

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

/**
 * Checks if the value is either null or undefined.
 */
var isNullOrUndefined = function (value) {
  return value === null || value === undefined;
};

/**
 * Sets the data attribute.
 */
var setDataAttribute = function (el, name, value) { return el.setAttribute(("data-vv-" + name), value); };

/**
 * Creates a proxy object if available in the environment.
 */
var createProxy = function (target, handler) {
  if (typeof Proxy === 'undefined') {
    return target;
  }

  return new Proxy(target, handler);
};

/**
 * Creates the default flags object.
 */
var createFlags = function () { return ({
  untouched: true,
  touched: false,
  dirty: false,
  pristine: true,
  valid: null,
  invalid: null,
  validated: false,
  pending: false,
  required: false
}); };

/**
 * Shallow object comparison.
 */
var isEqual = function (lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
  }

  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    if (lhs.length !== rhs.length) { return false; }

    for (var i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) {
        return false;
      }
    }

    return true;
  }

  // if both are objects, compare each key recursively.
  if (isObject(lhs) && isObject(rhs)) {
    return Object.keys(lhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    });
  }

  return lhs === rhs;
};

/**
 * Determines the input field scope.
 */
var getScope = function (el) {
  var scope = getDataAttribute(el, 'scope');
  if (isNullOrUndefined(scope) && el.form) {
    scope = getDataAttribute(el.form, 'scope');
  }

  return !isNullOrUndefined(scope) ? scope : null;
};

/**
 * Gets the value in an object safely.
 */
var getPath = function (path, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!path || !target) { return def; }

  var value = target;
  path.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
      value = def;

      return false;
    }

    value = value[prop];

    return true;
  });

  return value;
};

/**
 * Checks if path exists within an object.
 */
var hasPath = function (path, target) {
  var obj = target;
  return path.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }

    obj = obj[prop];

    return true;
  });
};

/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Debounces a function.
 */
var debounce = function (fn, wait, immediate) {
  if ( wait === void 0 ) wait = 0;
  if ( immediate === void 0 ) immediate = false;

  if (wait === 0) {
    return fn;
  }

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;
      if (!immediate) { fn.apply(void 0, args); }
    };
    /* istanbul ignore next */
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    /* istanbul ignore next */
    if (callNow) { fn.apply(void 0, args); }
  };
};

/**
 * Normalizes the given rules expression.
 */
var normalizeRules = function (rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {};
  }

  if (isObject(rules)) {
    // $FlowFixMe
    return Object.keys(rules).reduce(function (prev, curr) {
      var params = [];
      // $FlowFixMe
      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }

      // $FlowFixMe
      if (rules[curr] !== false) {
        prev[curr] = params;
      }

      return prev;
    }, {});
  }

  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return {};
  }

  return rules.split('|').reduce(function (prev, rule) {
    var parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }

    prev[parsedRule.name] = parsedRule.params;
    return prev;
  }, {});
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  console.warn(("[vee-validate] " + message)); // eslint-disable-line
};

/**
 * Creates a branded error object.
 */
var createError = function (message) { return new Error(("[vee-validate] " + message)); };

/**
 * Checks if the value is an object.
 */
var isObject = function (obj) { return obj !== null && obj && typeof obj === 'object' && ! Array.isArray(obj); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function (el, className, status) {
  if (!el || !className) { return; }

  if (status) {
    return addClass(el, className);
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
};

/**
 * Assign polyfill from the mdn.
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [ target ].concat( others ));
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to;
};

/**
 * Generates a unique id.
 */
var uniqId = function () { return ("_" + (Math.random().toString(36).substr(2, 9))); };

/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
var find = function (arrayLike, predicate) {
  var array = toArray(arrayLike);

  if (isCallable(array.find)) {
    return array.find(predicate);
  }

  var result;
  array.some(function (item) {
    if (predicate(item)) {
      result = item;
      return true;
    }

    return false;
  });

  return result;
};

/**
 * Returns a suitable event name for the input element.
 */
var getInputEventName = function (el) {
  if (el && (el.tagName === 'SELECT' || ~['radio', 'checkbox', 'file'].indexOf(el.type))) {
    return 'change';
  }

  return 'input';
};

var isBuiltInComponent = function (vnode) {
  if (!vnode) {
    return false;
  }

  var tag = vnode.componentOptions.tag;

  return /keep-alive|transition|transition-group/.test(tag);
};

// 

var ErrorBag = function ErrorBag () {
  this.items = [];
};

/**
 * Adds an error to the internal array.
 */
ErrorBag.prototype.add = function add (error) {
  // handle old signature.
  if (arguments.length > 1) {
    error = {
      field: arguments[0],
      msg: arguments[1],
      rule: arguments[2],
      scope: !isNullOrUndefined(arguments[3]) ? arguments[3] : null
    };
  }

  error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
  this.items.push(error);
};

/**
 * Updates a field error with the new field scope.
 */
ErrorBag.prototype.update = function update (id, error) {
  var item = find(this.items, function (i) { return i.id === id; });
  if (!item) {
    return;
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
 * Gets all error messages from the internal array.
 */
ErrorBag.prototype.all = function all (scope) {
  if (isNullOrUndefined(scope)) {
    return this.items.map(function (e) { return e.msg; });
  }

  return this.items.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; });
};

/**
 * Checks if there are any errors in the internal array.
 */
ErrorBag.prototype.any = function any (scope) {
  if (isNullOrUndefined(scope)) {
    return !!this.items.length;
  }

  return !!this.items.filter(function (e) { return e.scope === scope; }).length;
};

/**
 * Removes all items from the internal array.
 */
ErrorBag.prototype.clear = function clear (scope) {
    var this$1 = this;

  if (isNullOrUndefined(scope)) {
    scope = null;
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].scope === scope) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Collects errors into groups or for a specific field.
 */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    if ( map === void 0 ) map = true;

  if (!field) {
    var collection = {};
    this.items.forEach(function (e) {
      if (! collection[e.field]) {
        collection[e.field] = [];
      }

      collection[e.field].push(map ? e.msg : e);
    });

    return collection;
  }

  field = !isNullOrUndefined(field) ? String(field) : field;
  if (isNullOrUndefined(scope)) {
    return this.items.filter(function (e) { return e.field === field; }).map(function (e) { return (map ? e.msg : e); });
  }

  return this.items.filter(function (e) { return e.field === field && e.scope === scope; })
    .map(function (e) { return (map ? e.msg : e); });
};
/**
 * Gets the internal array length.
 */
ErrorBag.prototype.count = function count () {
  return this.items.length;
};

/**
 * Finds and fetches the first error message for the specified field id.
 */
ErrorBag.prototype.firstById = function firstById (id) {
  var error = find(this.items, function (i) { return i.id === id; });

  return error ? error.msg : null;
};

/**
 * Gets the first error message for a specific field.
 */
ErrorBag.prototype.first = function first (field, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = null;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var selector = this._selector(field);
  var scoped = this._scope(field);

  if (scoped) {
    var result = this.first(scoped.name, scoped.scope);
    // if such result exist, return it. otherwise it could be a field.
    // with dot in its name.
    if (result) {
      return result;
    }
  }

  if (selector) {
    return this.firstByRule(selector.name, selector.rule, scope);
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].field === field && (this$1.items[i].scope === scope)) {
      return this$1.items[i].msg;
    }
  }

  return null;
};

/**
 * Returns the first error rule for the specified field
 */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || null;
};

/**
 * Checks if the internal array has at least one error for the specified field.
 */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = null;

  return !!this.first(field, scope);
};

/**
 * Gets the first error message for a specific field and a rule.
 */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || null;
};

/**
 * Gets the first error message for a specific field that not match the rule.
 */
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
    if ( rule === void 0 ) rule = 'required';
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];

  return (error && error.msg) || null;
};

/**
 * Removes errors by matching against the id.
 */
ErrorBag.prototype.removeById = function removeById (id) {
    var this$1 = this;

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].id === id) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Removes all error messages associated with a specific field.
 */
ErrorBag.prototype.remove = function remove (field, scope, id) {
    var this$1 = this;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var removeCondition = function (e) {
    if (e.id && id) {
      return e.id === id;
    }

    if (!isNullOrUndefined(scope)) {
      return e.field === field && e.scope === scope;
    }

    return e.field === field && e.scope === null;
  };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Get the field attributes if there's a rule selector.
 */
ErrorBag.prototype._selector = function _selector (field) {
  if (field.indexOf(':') > -1) {
    var ref = field.split(':');
      var name = ref[0];
      var rule = ref[1];

    return { name: name, rule: rule };
  }

  return null;
};

/**
 * Get the field scope if specified using dot notation.
 */
ErrorBag.prototype._scope = function _scope (field) {
  if (field.indexOf('.') > -1) {
    var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);

    return { name: name.join('.'), scope: scope };
  }

  return null;
};

// 

var Dictionary = function Dictionary (dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !!this.container[locale];
};

Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
  if (!this.container[locale]) {
    return undefined;
  }

  return this.container[locale].dateFormat;
};

Dictionary.prototype.getMessage = function getMessage (locale, key, fallback) {
  if (!this.hasMessage(locale, key)) {
    return fallback || this._getDefaultMessage(locale);
  }

  return this.container[locale].messages[key];
};

/**
 * Gets a specific message for field. falls back to the rule message.
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key) {
  if (!this.hasLocale(locale)) {
    return this.getMessage(locale, key);
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (!dict || !dict[key]) {
    return this.getMessage(locale, key);
  }

  return dict[key];
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default;
  }

  return this.container.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (!this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.container[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].messages &&
          this.container[locale].messages[key]
  );
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].attributes &&
          this.container[locale].attributes[key]
  );
};

Dictionary.prototype.merge = function merge (dictionary) {
  this._merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Dictionary.prototype._merge = function _merge (target, source) {
    var this$1 = this;

  if (! (isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj ));
          var obj;
      }

      this$1._merge(target[key], source[key]);
      return;
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
      var obj$1;
  });

  return target;
};

// 

var defaultConfig = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  classes: false,
  classNames: null,
  events: 'input|blur',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false
};

var currentConfig = assign({}, defaultConfig);

var Config = function Config () {};

var staticAccessors$1 = { default: {},current: {} };

staticAccessors$1.default.get = function () {
  return defaultConfig;
};

staticAccessors$1.current.get = function () {
  return currentConfig;
};

/**
 * Merges the config with a new one.
 */
Config.merge = function merge (config) {
  currentConfig = assign({}, currentConfig, config);
};

/**
 * Resolves the working config from a Vue instance.
 */
Config.resolve = function resolve (context) {
  var selfConfig = getPath('$options.$_veeValidate', context, {});

  return assign({}, Config.current, selfConfig);
};

Object.defineProperties( Config, staticAccessors$1 );

/**
 * Generates the options required to construct a field.
 */
var Generator = function Generator () {};

Generator.generate = function generate (el, binding, vnode) {
  var model = Generator.resolveModel(binding, vnode);
  var options = Config.resolve(vnode.context);

  return {
    name: Generator.resolveName(el, vnode),
    el: el,
    listen: !binding.modifiers.disable,
    scope: Generator.resolveScope(el, binding, vnode),
    vm: Generator.makeVM(vnode.context),
    expression: binding.value,
    component: vnode.child,
    classes: options.classes,
    classNames: options.classNames,
    getter: Generator.resolveGetter(el, vnode, model),
    events: Generator.resolveEvents(el, vnode) || options.events,
    model: model,
    delay: Generator.resolveDelay(el, vnode, options),
    rules: Generator.resolveRules(el, binding),
    initial: !!binding.modifiers.initial,
    alias: Generator.resolveAlias(el, vnode),
    validity: options.validity,
    aria: options.aria,
    initialValue: Generator.resolveInitialValue(vnode)
  };
};

Generator.getCtorConfig = function getCtorConfig (vnode) {
  if (!vnode.child) { return null; }

  var config = getPath('child.$options.$_veeValidate', vnode);

  return config;
};

/**
 *
 * @param {*} el
 * @param {*} binding
 */
Generator.resolveRules = function resolveRules (el, binding) {
  if (!binding || !binding.expression) {
    return getDataAttribute(el, 'rules');
  }

  if (typeof binding.value === 'string') {
    return binding.value;
  }

  if (~['string', 'object'].indexOf(typeof binding.value.rules)) {
    return binding.value.rules;
  }

  return binding.value;
};

/**
 * @param {*} vnode
 */
Generator.resolveInitialValue = function resolveInitialValue (vnode) {
  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });

  return model && model.value;
};

/**
 * Creates a non-circular partial VM instance from a Vue instance.
 * @param {*} vm
 */
Generator.makeVM = function makeVM (vm) {
  return {
    get $el () {
      return vm.$el;
    },
    get $refs () {
      return vm.$refs;
    },
    $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
    $validator: vm.$validator ? {
      errors: vm.$validator.errors,
      validate: vm.$validator.validate.bind(vm.$validator),
      update: vm.$validator.update.bind(vm.$validator)
    } : null
  };
};

/**
 * Resolves the delay value.
 * @param {*} el
 * @param {*} vnode
 * @param {Object} options
 */
Generator.resolveDelay = function resolveDelay (el, vnode, options) {
    if ( options === void 0 ) options = {};

  return getDataAttribute(el, 'delay') || (vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-delay']) || options.delay;
};

/**
 * Resolves the alias for the field.
 * @param {*} el
 * @param {*} vnode
 * @return {Function} alias getter
 */
Generator.resolveAlias = function resolveAlias (el, vnode) {
  return function () { return getDataAttribute(el, 'as') || (vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-as']) || el.title || null; };
};

/**
 * Resolves the events to validate in response to.
 * @param {*} el
 * @param {*} vnode
 */
Generator.resolveEvents = function resolveEvents (el, vnode) {
  var events = getDataAttribute(el, 'validate-on');

  if (!events && vnode.child && vnode.child.$attrs) {
    events = vnode.child.$attrs['data-vv-validate-on'];
  }

  if (!events && vnode.child) {
    var config = Generator.getCtorConfig(vnode);
    events = config && config.events;
  }

  return events;
};

/**
 * Resolves the scope for the field.
 * @param {*} el
 * @param {*} binding
 */
Generator.resolveScope = function resolveScope (el, binding, vnode) {
    if ( vnode === void 0 ) vnode = {};

  var scope = null;
  if (isObject(binding.value)) {
    scope = binding.value.scope;
  }

  if (vnode.child && isNullOrUndefined(scope)) {
    scope = vnode.child.$attrs && vnode.child.$attrs['data-vv-scope'];
  }

  return !isNullOrUndefined(scope) ? scope : getScope(el);
};

/**
 * Checks if the node directives contains a v-model or a specified arg.
 * Args take priority over models.
 *
 * @return {Object}
 */
Generator.resolveModel = function resolveModel (binding, vnode) {
  if (binding.arg) {
    return binding.arg;
  }

  if (isObject(binding.value) && binding.value.arg) {
    return binding.value.arg;
  }

  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
  if (!model) {
    return null;
  }

  var watchable = /^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i.test(model.expression) && hasPath(model.expression, vnode.context);

  if (!watchable) {
    return null;
  }

  return model.expression;
};

/**
   * Resolves the field name to trigger validations.
   * @return {String} The field name.
   */
Generator.resolveName = function resolveName (el, vnode) {
  var name = getDataAttribute(el, 'name');

  if (!name && !vnode.child) {
    return el.name;
  }

  if (!name && vnode.child && vnode.child.$attrs) {
    name = vnode.child.$attrs['data-vv-name'] || vnode.child.$attrs['name'];
  }

  if (!name && vnode.child) {
    var config = Generator.getCtorConfig(vnode);
    if (config && isCallable(config.name)) {
      var boundGetter = config.name.bind(vnode.child);

      return boundGetter();
    }

    return vnode.child.name;
  }

  return name;
};

/**
 * Returns a value getter input type.
 */
Generator.resolveGetter = function resolveGetter (el, vnode, model) {
  if (model) {
    return function () {
      return getPath(model, vnode.context);
    };
  }

  if (vnode.child) {
    var path = getDataAttribute(el, 'value-path') || (vnode.child.$attrs && vnode.child.$attrs['data-vv-value-path']);
    if (path) {
      return function () {
        return getPath(path, vnode.child);
      };
    }

    var config = Generator.getCtorConfig(vnode);
    if (config && isCallable(config.value)) {
      var boundGetter = config.value.bind(vnode.child);

      return function () {
        return boundGetter();
      };
    }

    return function () {
      return vnode.child.value;
    };
  }

  switch (el.type) {
  case 'checkbox': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));

    els = toArray(els).filter(function (el) { return el.checked; });
    if (!els.length) { return undefined; }

    return els.map(function (checkbox) { return checkbox.value; });
  };
  case 'radio': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
    var elm = find(els, function (el) { return el.checked; });

    return elm && elm.value;
  };
  case 'file': return function (context) {
    return toArray(el.files);
  };
  case 'select-multiple': return function () {
    return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; });
  };
  default: return function () {
    return el && el.value;
  };
  }
};

// 

var DEFAULT_OPTIONS = {
  targetOf: null,
  initial: false,
  scope: null,
  listen: true,
  name: null,
  active: true,
  required: false,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

var Field = function Field (el, options) {
  if ( options === void 0 ) options = {};

  this.id = uniqId();
  this.el = el;
  this.updated = false;
  this.dependencies = [];
  this.watchers = [];
  this.events = [];
  this.rules = {};
  if (!this.isHeadless && !options.targetOf) {
    setDataAttribute(this.el, 'id', this.id); // cache field id if it is independent and has a root element.
  }
  options = assign({}, DEFAULT_OPTIONS, options);
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = createFlags();
  this.vm = options.vm;
  this.component = options.component;
  this.ctorConfig = this.component ? getPath('$options.$_veeValidate', this.component) : undefined;
  this.update(options);
  this.updated = false;
};

var prototypeAccessors$1 = { isVue: {},validator: {},isRequired: {},isDisabled: {},isHeadless: {},displayName: {},value: {},rejectsFalse: {} };

prototypeAccessors$1.isVue.get = function () {
  return !!this.component;
};

prototypeAccessors$1.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    warn('No validator instance detected.');
    return { validate: function () {} };
  }

  return this.vm.$validator;
};

prototypeAccessors$1.isRequired.get = function () {
  return !!this.rules.required;
};

prototypeAccessors$1.isDisabled.get = function () {
  return !!(this.component && this.component.disabled) || !!(this.el && this.el.disabled);
};

prototypeAccessors$1.isHeadless.get = function () {
  return !this.el;
};

/**
 * Gets the display name (user-friendly name).
 */

prototypeAccessors$1.displayName.get = function () {
  return isCallable(this.alias) ? this.alias() : this.alias;
};

/**
 * Gets the input value.
 */

prototypeAccessors$1.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined;
  }

  return this.getter();
};

/**
 * If the field rejects false as a valid value for the required rule.
 */

prototypeAccessors$1.rejectsFalse.get = function () {
  if (this.isVue && this.ctorConfig) {
    return !!this.ctorConfig.rejectsFalse;
  }

  if (this.isHeadless) {
    return false;
  }

  return this.el.type === 'checkbox';
};

/**
 * Determines if the instance matches the options provided.
 */
Field.prototype.matches = function matches (options) {
  if (options.id) {
    return this.id === options.id;
  }

  if (options.name === undefined && options.scope === undefined) {
    return true;
  }

  if (options.scope === undefined) {
    return this.name === options.name;
  }

  if (options.name === undefined) {
    return this.scope === options.scope;
  }

  return options.name === this.name && options.scope === this.scope;
};

/**
 * Updates the field with changed data.
 */
Field.prototype.update = function update (options) {
  this.targetOf = options.targetOf || null;
  this.initial = options.initial || this.initial || false;

  // update errors scope if the field scope was changed.
  if (this.updated && !isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options.scope });
  }
  this.scope = !isNullOrUndefined(options.scope) ? options.scope
    : !isNullOrUndefined(this.scope) ? this.scope : null;
  this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = options.classes || this.classes || false;
  this.classNames = options.classNames || this.classNames || DEFAULT_OPTIONS.classNames;
  this.alias = options.alias || this.alias;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this.delay = options.delay || this.delay || 0;
  this.events = typeof options.events === 'string' && options.events.length ? options.events.split('|') : this.events;
  this.updateDependencies();
  this.addActionListeners();

  // update required flag flags
  if (options.rules !== undefined) {
    this.flags.required = this.isRequired;
  }

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules !== undefined && this.updated) {
    this.validator.validate(("#" + (this.id)));
  }

  this.updated = true;

  // no need to continue.
  if (this.isHeadless) {
    return;
  }

  this.updateClasses();
  this.addValueListeners();
  this.updateAriaAttrs();
};

/**
 * Resets field flags and errors.
 */
Field.prototype.reset = function reset () {
    var this$1 = this;

  var def = createFlags();
  Object.keys(this.flags).forEach(function (flag) {
    this$1.flags[flag] = def[flag];
  });

  this.addActionListeners();
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
 */
Field.prototype.setFlags = function setFlags (flags) {
    var this$1 = this;

  var negated = {
    pristine: 'dirty',
    dirty: 'pristine',
    valid: 'invalid',
    invalid: 'valid',
    touched: 'untouched',
    untouched: 'touched'
  };

  Object.keys(flags).forEach(function (flag) {
    this$1.flags[flag] = flags[flag];
    // if it has a negation and was not specified, set it as well.
    if (negated[flag] && flags[negated[flag]] === undefined) {
      this$1.flags[negated[flag]] = !flags[flag];
    }
  });

  if (
    flags.untouched !== undefined ||
    flags.touched !== undefined ||
    flags.dirty !== undefined ||
    flags.pristine !== undefined
  ) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Determines if the field requires references to target fields.
*/
Field.prototype.updateDependencies = function updateDependencies () {
    var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (r === 'confirmed') {
      prev.push({ selector: this$1.rules[r][0] || ((this$1.name) + "_confirmation"), name: r });
    } else if (/after|before/.test(r)) {
      prev.push({ selector: this$1.rules[r][0], name: r });
    }

    return prev;
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) { return; }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref) {
      var selector = ref.selector;
      var name = ref.name;

    var el = null;
    // vue ref selector.
    if (selector[0] === '$') {
      el = this$1.vm.$refs[selector.slice(1)];
    } else {
      try {
        // try query selector
        el = this$1.vm.$el.querySelector(selector);
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      try {
        el = this$1.vm.$el.querySelector(("input[name=\"" + selector + "\"]"));
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      return;
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      initial: this$1.initial,
      targetOf: this$1.id
    };

    // probably a component.
    if (isCallable(el.$watch)) {
      options.component = el;
      options.el = el.$el;
      options.alias = Generator.resolveAlias(el.$el, { child: el });
      options.getter = Generator.resolveGetter(el.$el, { child: el });
    } else {
      options.el = el;
      options.alias = Generator.resolveAlias(el, {});
      options.getter = Generator.resolveGetter(el, {});
    }

    this$1.dependencies.push({ name: name, field: new Field(options.el, options) });
  });
};

/**
 * Removes listeners.
 */
Field.prototype.unwatch = function unwatch (tag) {
    if ( tag === void 0 ) tag = null;

  if (!tag) {
    this.watchers.forEach(function (w) { return w.unwatch(); });
    this.watchers = [];
    return;
  }

  this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
  this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses () {
  if (!this.classes) { return; }

  toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
  toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
  toggleClass(this.el, this.classNames.valid, !!this.flags.valid);
  toggleClass(this.el, this.classNames.invalid, !!this.flags.invalid);
  toggleClass(this.el, this.classNames.touched, this.flags.touched);
  toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners () {
    var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  var onBlur = function () {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = getInputEventName(this.el);
  var onInput = function () {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.isVue && isCallable(this.component.$once)) {
    this.component.$once('input', onInput);
    this.component.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function () {
        this$1.component.$off('input', onInput);
      }
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function () {
        this$1.component.$off('blur', onBlur);
      }
    });
    return;
  }

  if (this.isHeadless) { return; }

  this.el.addEventListener(inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = ['radio', 'checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
  this.el.addEventListener(blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function () {
      this$1.el.removeEventListener(inputEvent, onInput);
    }
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function () {
      this$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners () {
    var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen) { return; }

  var fn = this.targetOf ? function () {
    this$1.validator.validate(("#" + (this$1.targetOf)));
  } : function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    // if its a DOM event, resolve the value, otherwise use the first parameter as the value.
    if (args.length === 0 || (isCallable(Event) && args[0] instanceof Event) || (args[0] && args[0].srcElement)) {
      args[0] = this$1.value;
    }
    this$1.validator.validate(("#" + (this$1.id)), args[0]);
  };

  var validate = debounce(fn, this.delay);
  var inputEvent = getInputEventName(this.el);
  // replace input event with suitable one.
  var events = this.events.map(function (e) {
    return e === 'input' ? inputEvent : e;
  });

  // if there is a watchable model and an on input validation is requested.
  if (this.model && events.indexOf(inputEvent) !== -1) {
    var unwatch = this.vm.$watch(this.model, validate);
    this.watchers.push({
      tag: 'input_model',
      unwatch: unwatch
    });
    // filter out input event as it is already handled by the watcher API.
    events = events.filter(function (e) { return e !== inputEvent; });
  }

  // Add events.
  events.forEach(function (e) {
    if (this$1.isVue) {
      this$1.component.$on(e, validate);
      this$1.watchers.push({
        tag: 'input_vue',
        unwatch: function () {
          this$1.component.$off(e, validate);
        }
      });
      return;
    }

    if (~['radio', 'checkbox'].indexOf(this$1.el.type)) {
      var els = document.querySelectorAll(("input[name=\"" + (this$1.el.name) + "\"]"));
      toArray(els).forEach(function (el) {
        el.addEventListener(e, validate);
        this$1.watchers.push({
          tag: 'input_native',
          unwatch: function () {
            el.removeEventListener(e, validate);
          }
        });
      });

      return;
    }

    this$1.el.addEventListener(e, validate);
    this$1.watchers.push({
      tag: 'input_native',
      unwatch: function () {
        this$1.el.removeEventListener(e, validate);
      }
    });
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
  if (!this.aria || this.isHeadless || !isCallable(this.el.setAttribute)) { return; }

  this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
  this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity () {
  if (!this.validity || this.isHeadless || !isCallable(this.el.setCustomValidity)) { return; }

  this.el.setCustomValidity(this.flags.valid ? '' : (this.validator.errors.firstById(this.id) || ''));
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy () {
  this.watchers.forEach(function (w) { return w.unwatch(); });
  this.watchers = [];
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$1 );

// 

var FieldBag = function FieldBag () {
  this.items = [];
};

var prototypeAccessors$2 = { length: {} };

/**
 * Gets the current items length.
 */

prototypeAccessors$2.length.get = function () {
  return this.items.length;
};

/**
 * Finds the first field that matches the provided matcher object.
 */
FieldBag.prototype.find = function find$1 (matcher) {
  return find(this.items, function (item) { return item.matches(matcher); });
};

/**
 * Filters the items down to the matched fields.
 */
FieldBag.prototype.filter = function filter (matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
  }

  return this.items.filter(function (item) { return item.matches(matcher); });
};

/**
 * Maps the field items using the mapping function.
 */
FieldBag.prototype.map = function map (mapper) {
  return this.items.map(mapper);
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 */
FieldBag.prototype.remove = function remove (matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) { return null; }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);

  return item;
};

/**
 * Adds a field item to the list.
 */
FieldBag.prototype.push = function push (item) {
  if (! (item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.');
  }

  if (!item.id) {
    throw createError('Field id must be defined.');
  }

  if (this.find({ id: item.id })) {
    throw createError(("Field with id " + (item.id) + " is already added."));
  }

  this.items.push(item);
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$2 );

// 

var RULES = {};
var LOCALE = 'en';
var STRICT_MODE = true;
var DICTIONARY = new Dictionary({
  en: {
    messages: {},
    attributes: {},
    custom: {}
  }
});

var Validator = function Validator (validations, options) {
  var this$1 = this;
  if ( options === void 0 ) options = { vm: null, fastExit: true };

  this.strict = STRICT_MODE;
  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this.flags = {};
  this._createFields(validations);
  this.paused = false;
  this.fastExit = options.fastExit || false;
  this.ownerId = options.vm && options.vm._uid;
  // create it statically since we don't need constant access to the vm.
  this.reset = options.vm && isCallable(options.vm.$nextTick) ? function () {
    return new Promise(function (resolve, reject) {
      options.vm.$nextTick(function () {
        this$1.fields.items.forEach(function (i) { return i.reset(); });
        this$1.errors.clear();
        resolve();
      });
    });
  } : function () {
    return new Promise(function (resolve, reject) {
      this$1.fields.items.forEach(function (i) { return i.reset(); });
      this$1.errors.clear();
      resolve();
    });
  };
  /* istanbul ignore next */
  this.clean = function () {
    warn('validator.clean is marked for deprecation, please use validator.reset instead.');
    this$1.reset();
  };
};

var prototypeAccessors = { dictionary: {},locale: {},rules: {} };
var staticAccessors = { dictionary: {},locale: {},rules: {} };

/**
 * Getter for the dictionary.
 */
prototypeAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * Static Getter for the dictionary.
 */
staticAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * Getter for the current locale.
 */
prototypeAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * Setter for the validator locale.
 */
prototypeAccessors.locale.set = function (value) {
  Validator.locale = value;
};

/**
* Static getter for the validator locale.
*/
staticAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * Static setter for the validator locale.
 */
staticAccessors.locale.set = function (value) {
  /* istanbul ignore if */
  if (!DICTIONARY.hasLocale(value)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dictionary. English messages may still be generated.');
  }

  LOCALE = value;
};

/**
 * Getter for the rules object.
 */
prototypeAccessors.rules.get = function () {
  return RULES;
};

/**
 * Static Getter for the rules object.
 */
staticAccessors.rules.get = function () {
  return RULES;
};

/**
 * Static constructor.
 */
Validator.create = function create (validations, options) {
  return new Validator(validations, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.extend = function extend (name, validator) {
  Validator._guardExtend(name, validator);
  Validator._merge(name, validator);
};

/**
 * Removes a rule from the list of validators.
 */
Validator.remove = function remove (name) {
  delete RULES[name];
};

/**
 * Sets the default locale for all validators.
 * @deprecated
 */
Validator.setLocale = function setLocale (language) {
    if ( language === void 0 ) language = 'en';

  Validator.locale = language;
};

/**
 * @deprecated
 */
Validator.installDateTimeValidators = function installDateTimeValidators () {
  /* istanbul ignore next */
  warn('Date validations are now installed by default, you no longer need to install it.');
};

/**
 * @deprecated
 */
Validator.prototype.installDateTimeValidators = function installDateTimeValidators () {
  /* istanbul ignore next */
  warn('Date validations are now installed by default, you no longer need to install it.');
};

/**
 * Sets the operating mode for all newly created validators.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 */
Validator.setStrictMode = function setStrictMode (strictMode) {
    if ( strictMode === void 0 ) strictMode = true;

  STRICT_MODE = strictMode;
};

/**
 * Updates the dictionary, overwriting existing values and adding new ones.
 * @deprecated
 */
Validator.updateDictionary = function updateDictionary (data) {
  DICTIONARY.merge(data);
};

/**
 * Adds a locale object to the dictionary.
 * @deprecated
 */
Validator.addLocale = function addLocale (locale) {
  if (! locale.name) {
    warn('Your locale must have a name property');
    return;
  }

  this.updateDictionary(( obj = {}, obj[locale.name] = locale, obj ));
    var obj;
};

/**
 * Adds a locale object to the dictionary.
 * @deprecated
 * @param {Object} locale
 */
Validator.prototype.addLocale = function addLocale (locale) {
  Validator.addLocale(locale);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.prototype.localize = function localize (lang, dictionary) {
  Validator.localize(lang, dictionary);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.localize = function localize (lang, dictionary) {
  // merge the dictionary.
  if (dictionary) {
    dictionary = assign({}, dictionary, { name: lang });
    Validator.addLocale(dictionary);
  }

  // set the locale.
  Validator.locale = lang;
};

/**
 * Registers a field to be validated.
 */
Validator.prototype.attach = function attach (field) {
  // deprecate: handle old signature.
  if (arguments.length > 1) {
    field = assign({}, {
      name: arguments[0],
      rules: arguments[1]
    }, arguments[2] || { vm: { $validator: this } });
  }

  // fixes initial value detection with v-model and select elements.
  var value = field.initialValue;
  if (!(field instanceof Field)) {
    field = new Field(field.el || null, field);
  }

  this.fields.push(field);

  // validate the field initially
  if (field.initial) {
    this.validate(("#" + (field.id)), value || field.value);
  } else {
    this._validate(field, value || field.value, true).then(function (valid) {
      field.flags.valid = valid;
      field.flags.invalid = !valid;
    });
  }

  this._addFlag(field, field.scope);
  return field;
};

/**
 * Sets the flags on a field.
 */
Validator.prototype.flag = function flag (name, flags) {
  var field = this._resolveField(name);
  if (! field || !flags) {
    return;
  }

  field.setFlags(flags);
};

/**
 * Removes a field from the validator.
 */
Validator.prototype.detach = function detach (name, scope) {
  var field = name instanceof Field ? name : this._resolveField(name, scope);
  if (!field) { return; }

  field.destroy();
  this.errors.remove(field.name, field.scope, field.id);
  this.fields.remove(field);
  var flags = this.flags;
  if (!isNullOrUndefined(field.scope) && flags[("$" + (field.scope))]) {
    delete flags[("$" + (field.scope))][field.name];
  } else if (isNullOrUndefined(field.scope)) {
    delete flags[field.name];
  }

  this.flags = assign({}, flags);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.prototype.extend = function extend (name, validator) {
  Validator.extend(name, validator);
};

/**
 * Updates a field, updating both errors and flags.
 */
Validator.prototype.update = function update (id, ref) {
    var scope = ref.scope;

  var field = this._resolveField(("#" + id));
  this.errors.update(id, { scope: scope });

  // remove old scope.
  if (!isNullOrUndefined(field.scope) && this.flags[("$" + (field.scope))]) {
    delete this.flags[("$" + (field.scope))][field.name];
  } else if (isNullOrUndefined(field.scope)) {
    delete this.flags[field.name];
  }

  this._addFlag(field, scope);
};

/**
 * Removes a rule from the list of validators.
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Sets the validator current language.
 * @deprecated
 */
Validator.prototype.setLocale = function setLocale (language) {
  this.locale = language;
};

/**
 * Updates the messages dictionary, overwriting existing values and adding new ones.
 * @deprecated
 */
Validator.prototype.updateDictionary = function updateDictionary (data) {
  Validator.updateDictionary(data);
};

/**
 * Validates a value against a registered field validations.
 */
Validator.prototype.validate = function validate (name, value, scope) {
    if ( scope === void 0 ) scope = null;

  if (this.paused) { return Promise.resolve(true); }

  // overload to validate all.
  if (arguments.length === 0) {
    return this.validateScopes();
  }

  // overload to validate scope-less fields.
  if (arguments.length === 1 && arguments[0] === '*') {
    return this.validateAll();
  }

  // overload to validate a scope.
  if (arguments.length === 1 && typeof arguments[0] === 'string' && /^(.+)\.\*$/.test(arguments[0])) {
    var matched = arguments[0].match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }

  var field = this._resolveField(name, scope);
  if (!field) {
    return this._handleFieldNotFound(name, scope);
  }

  this.errors.remove(field.name, field.scope, field.id);
  field.flags.pending = true;
  if (arguments.length === 1) {
    value = field.value;
  }

  var silentRun = field.isDisabled;

  return this._validate(field, value, silentRun).then(function (result) {
    field.setFlags({
      pending: false,
      valid: result,
      validated: true
    });

    if (silentRun) {
      return Promise.resolve(true);
    }

    return result;
  });
};

/**
 * Pauses the validator.
 */
Validator.prototype.pause = function pause () {
  this.paused = true;

  return this;
};

/**
 * Resumes the validator.
 */
Validator.prototype.resume = function resume () {
  this.paused = false;

  return this;
};

/**
 * Validates each value against the corresponding field validations.
 */
Validator.prototype.validateAll = function validateAll (values) {
    var arguments$1 = arguments;
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true); }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, scope: arguments$1[1] || null };
    });
    providedValues = true;
  } else if (arguments.length === 0) {
    matcher = { scope: null }; // global scope.
  } else if (Array.isArray(values)) {
    matcher = values.map(function (key) {
      return { name: key, scope: arguments$1[1] || null };
    });
  }

  var promises = this.fields.filter(matcher).map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    providedValues ? values[field.name] : field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); });
};

/**
 * Validates all scopes.
 */
Validator.prototype.validateScopes = function validateScopes () {
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true); }

  var promises = this.fields.map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); });
};

/**
 * Creates the fields to be validated.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (!validations) { return; }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existence of a format, so date_format must be supplied.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || this.dictionary.getDateFormat(this.locale);
};

/**
 * Checks if the passed rule is a date rule.
 */
Validator.prototype._isADateRule = function _isADateRule (rule) {
  return !! ~['after', 'before', 'date_between', 'date_format'].indexOf(rule);
};

/**
 * Formats an error message for field and a rule.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
    if ( data === void 0 ) data = {};
    if ( targetName === void 0 ) targetName = null;

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);
  // Defaults to english message.
  if (!this.dictionary.hasLocale(LOCALE)) {
    var msg$1 = this.dictionary.getFieldMessage('en', field.name, rule.name);

    return isCallable(msg$1) ? msg$1(name, params, data) : msg$1;
  }

  var msg = this.dictionary.getFieldMessage(LOCALE, field.name, rule.name);

  return isCallable(msg) ? msg(name, params, data) : msg;
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
    if ( targetName === void 0 ) targetName = null;

  if (~['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
    var localizedName = targetName || this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0]);
    return [localizedName].concat(rule.params.slice(1));
  }

  return rule.params;
};

/**
 * Resolves an appropriate display name, first checking 'data-as' or the registered 'prettyName'
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
  return field.displayName || this.dictionary.getAttribute(LOCALE, field.name, field.name);
};

/**
 * Adds a field flags to the flags collection.
 */
Validator.prototype._addFlag = function _addFlag (field, scope) {
    if ( scope === void 0 ) scope = null;

  if (isNullOrUndefined(scope)) {
    this.flags = assign({}, this.flags, ( obj = {}, obj[("" + (field.name))] = field.flags, obj ));
      var obj;
    return;
  }

  var scopeObj = assign({}, this.flags[("$" + scope)] || {}, ( obj$1 = {}, obj$1[("" + (field.name))] = field.flags, obj$1 ));
    var obj$1;
  this.flags = assign({}, this.flags, ( obj$2 = {}, obj$2[("$" + scope)] = scopeObj, obj$2 ));
    var obj$2;
};

/**
 * Tests a single input value against a rule.
 */
Validator.prototype._test = function _test (field, value, rule, silent) {
    var this$1 = this;

  var validator = RULES[rule.name];
  var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
  var targetName = null;
  if (!validator || typeof validator !== 'function') {
    throw createError(("No such validator '" + (rule.name) + "' exists."));
  }

  // has field dependencies.
  if (/(confirmed|after|before)/.test(rule.name)) {
    var target = find(field.dependencies, function (d) { return d.name === rule.name; });
    if (target) {
      targetName = target.field.displayName;
      params = [target.field.value].concat(params.slice(1));
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (this._isADateRule(rule.name)) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, params);

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return (isObject(t) ? t.valid : t); });
      } else { // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      if (!allValid && !silent) {
        this$1.errors.add({
          id: field.id,
          field: field.name,
          msg: this$1._formatErrorMessage(field, rule, data, targetName),
          rule: rule.name,
          scope: field.scope
        });
      }

      return allValid;
    });
  }

  if (!isObject(result)) {
    result = { valid: result, data: {} };
  }

  if (!result.valid && !silent) {
    this.errors.add({
      id: field.id,
      field: field.name,
      msg: this._formatErrorMessage(field, rule, result.data, targetName),
      rule: rule.name,
      scope: field.scope
    });
  }

  return result.valid;
};

/**
 * Merges a validator object into the RULES and Messages.
 */
Validator._merge = function _merge (name, validator) {
  if (isCallable(validator)) {
    RULES[name] = validator;
    return;
  }

  RULES[name] = validator.validate;
  if (isCallable(validator.getMessage)) {
    DICTIONARY.setMessage(LOCALE, name, validator.getMessage);
  }

  if (validator.messages) {
    DICTIONARY.merge(
      Object.keys(validator.messages).reduce(function (prev, curr) {
        var dict = prev;
        dict[curr] = {
          messages: ( obj = {}, obj[name] = validator.messages[curr], obj )
        };
          var obj;

        return dict;
      }, {})
    );
  }
};

/**
 * Guards from extension violations.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (!isCallable(validator.validate)) {
    throw createError(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    );
  }

  if (!isCallable(validator.getMessage) && !isObject(validator.messages)) {
    throw createError(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must have a 'getMessage' method or have a 'messages' object.")
    );
  }
};

/**
 * Tries different strategies to find a field.
 */
Validator.prototype._resolveField = function _resolveField (name, scope) {
  if (!isNullOrUndefined(scope)) {
    return this.fields.find({ name: name, scope: scope });
  }

  if (name[0] === '#') {
    return this.fields.find({ id: name.slice(1) });
  }

  if (name.indexOf('.') > -1) {
    var ref = name.split('.');
      var fieldScope = ref[0];
      var fieldName = ref.slice(1);
    var field = this.fields.find({ name: fieldName.join('.'), scope: fieldScope });
    if (field) {
      return field;
    }
  }

  return this.fields.find({ name: name, scope: null });
};

/**
 * Handles when a field is not found depending on the strict flag.
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
  if (!this.strict) { return Promise.resolve(true); }

  var fullName = isNullOrUndefined(scope) ? name : ("" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name);
  throw createError(
    ("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first.")
  );
};

/**
 * Starts the validation process.
 */
Validator.prototype._validate = function _validate (field, value, silent) {
    var this$1 = this;
    if ( silent === void 0 ) silent = false;

  if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
    return Promise.resolve(true);
  }

  var promises = [];
  var isExitEarly = false;
  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).some(function (rule) {
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule] }, silent);

    if (isCallable(result.then)) {
      promises.push(result);
    } else if (this$1.fastExit && !result) {
      isExitEarly = true;
    } else {
      var resultAsPromise = new Promise(function (resolve) {
        resolve(result);
      });
      promises.push(resultAsPromise);
    }

    return isExitEarly;
  });

  if (isExitEarly) { return Promise.resolve(false); }

  return Promise.all(promises).then(function (values) { return values.every(function (t) { return t; }); });
};

Object.defineProperties( Validator.prototype, prototypeAccessors );
Object.defineProperties( Validator, staticAccessors );

// 

/* istanbul ignore next */
var fakeFlags = createProxy({}, {
  get: function get (target, key) {
    // is a scope
    if (String(key).indexOf('$') === 0) {
      return fakeFlags;
    }

    return createFlags();
  }
});

/**
 * Checks if a parent validator instance was requested.
 */
var requestsValidator = function (injections) {
  if (! injections) {
    return false;
  }

  /* istanbul ignore next */
  if (Array.isArray(injections) && ~injections.indexOf('$validator')) {
    return true;
  }

  if (isObject(injections) && injections.$validator) {
    return true;
  }

  return false;
};

/**
 * Creates a validator instance.
 */
var createValidator = function (vm, options) { return new Validator(null, { vm: vm, fastExit: options.fastExit }); };

var mixin = {
  provide: function provide () {
    if (this.$validator && !isBuiltInComponent(this.$vnode)) {
      return {
        $validator: this.$validator
      };
    }

    return {};
  },
  beforeCreate: function beforeCreate () {
    // if built in do nothing.
    if (isBuiltInComponent(this.$vnode)) {
      return;
    }

    // if its a root instance set the config if it exists.
    if (!this.$parent) {
      Config.merge(this.$options.$_veeValidate || {});
    }

    var options = Config.resolve(this);
    var Vue = this.$options._base; // the vue constructor.
    // TODO: Deprecate
    /* istanbul ignore next */
    if (this.$options.$validates) {
      warn('The ctor $validates option has been deprecated please set the $_veeValidate.validator option to "new" instead');
      this.$validator = createValidator(this, options);
    }

    // if its a root instance, inject anyways, or if it requested a new instance.
    if (!this.$parent || (this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator))) {
      this.$validator = createValidator(this, options);
    }

    var requested = requestsValidator(this.$options.inject);

    // if automatic injection is enabled and no instance was requested.
    if (! this.$validator && options.inject && !requested) {
      this.$validator = createValidator(this, options);
    }

    // don't inject errors or fieldBag as no validator was resolved.
    if (! requested && ! this.$validator) {
      return;
    }

    // There is a validator but it isn't injected, mark as reactive.
    if (! requested && this.$validator) {
      Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
      Vue.util.defineReactive(this.$validator, 'flags', this.$validator.flags);
    }

    if (! this.$options.computed) {
      this.$options.computed = {};
    }

    this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter () {
      return this.$validator.errors;
    };
    this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter () {
      if (!Object.keys(this.$validator.flags).length) {
        return fakeFlags;
      }

      return this.$validator.flags;
    };
  },

  beforeDestroy: function beforeDestroy () {
    if (isBuiltInComponent(this.$vnode)) { return; }

    // mark the validator paused to prevent delayed validation.
    if (this.$validator && this.$validator.ownerId === this._uid && isCallable(this.$validator.pause)) {
      this.$validator.pause();
    }
  }
};

// 

/**
 * Finds the requested field by id from the context object.
 */
var findField = function (el, context) {
  if (!context || !context.$validator) {
    return null;
  }

  return context.$validator.fields.find({ id: getDataAttribute(el, 'id') });
};

var directive = {
  bind: function bind (el, binding, vnode) {
    var validator = vnode.context.$validator;
    if (! validator) {
      warn("No validator instance is present on vm, did you forget to inject '$validator'?");
      return;
    }

    var fieldOptions = Generator.generate(el, binding, vnode);
    validator.attach(fieldOptions);
  },
  inserted: function (el, binding, vnode) {
    var field = findField(el, vnode.context);
    var scope = Generator.resolveScope(el, binding, vnode);

    // skip if scope hasn't changed.
    if (!field || scope === field.scope) { return; }

    // only update scope.
    field.update({ scope: scope });

    // allows the field to re-evaluated once more in the update hook.
    field.updated = false;
  },
  update: function (el, binding, vnode) {
    var field = findField(el, vnode.context);

    // make sure we don't do unneccasary work if no important change was done.
    if (!field || (field.updated && isEqual(binding.value, binding.oldValue))) { return; }
    var scope = Generator.resolveScope(el, binding, vnode);
    var rules = Generator.resolveRules(el, binding);

    field.update({
      scope: scope,
      rules: rules
    });
  },
  unbind: function unbind (el, binding, ref) {
    var context = ref.context;

    var field = findField(el, context);
    if (!field) { return; }

    context.$validator.detach(field);
  }
};

var Vue;

function install (_Vue, options) {
  if ( options === void 0 ) options = {};

  if (Vue) {
    warn('already installed, Vue.use(VeeValidate) should only be called once.');
    return;
  }

  Vue = _Vue;
  Config.merge(options);
  if (Config.current.dictionary) {
    Validator.updateDictionary(Config.current.dictionary);
  }

  if (options) {
    if (options.locale) {
      Validator.locale = options.locale;
    }

    if (options.strict) {
      Validator.setStrictMode(Config.current.strict);
    }
  }

  Vue.mixin(mixin);
  Vue.directive('validate', directive);
}

/**
 * Formates file size.
 *
 * @param {Number|String} size
 */
var formatFileSize = function (size) {
  var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var threshold = 1024;
  size = Number(size) * threshold;
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};

/**
 * Checks if vee-validate is defined globally.
 */
var isDefinedGlobally = function () {
  return typeof VeeValidate !== 'undefined';
};

var messages = {
  _default: function (field) { return ("The " + field + " value is not valid."); },
  after: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
  before: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max + ".");
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
  credit_card: function (field) { return ("The " + field + " field is invalid."); },
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max + ".");
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format + ".");
},
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = [];
    var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';

    return ("The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
  email: function (field) { return ("The " + field + " field must be a valid email."); },
  ext: function (field) { return ("The " + field + " field must be a valid file."); },
  image: function (field) { return ("The " + field + " field must be an image."); },
  in: function (field) { return ("The " + field + " field must be a valid value."); },
  integer: function (field) { return ("The " + field + " field must be an integer."); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
  length: function (field, ref) {
    var length = ref[0];
    var max = ref[1];

    if (max) {
      return ("The " + field + " length be between " + length + " and " + max + ".");
    }

    return ("The " + field + " length must be " + length + ".");
  },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters.");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less.");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters.");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more.");
},
  not_in: function (field) { return ("The " + field + " field must be a valid value."); },
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
  regex: function (field) { return ("The " + field + " field format is invalid."); },
  required: function (field) { return ("The " + field + " field is required."); },
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " size must be less than " + (formatFileSize(size)) + ".");
},
  url: function (field) { return ("The " + field + " field is not a valid URL."); }
};

var locale = {
  name: 'en',
  messages: messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  // eslint-disable-next-line
  VeeValidate.Validator.addLocale(locale);
}

// 

function use (plugin, options) {
  if ( options === void 0 ) options = {};

  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function');
  }

  plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument is null, it is treated as an invalid date.
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (argument instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = Number(dirtyAmount);
  return new Date(timestamp + amount)
}

function cloneObject (dirtyObject) {
  dirtyObject = dirtyObject || {};
  var object = {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object
}

var MILLISECONDS_IN_MINUTE$2 = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = Number(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions)
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date)
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance (token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;

function buildShortLongFormat (format) {
  return format.replace(tokensToBeShortedPattern, function (token) {
    return token.slice(1)
  })
}

/**
 * @name buildFormatLongFn
 * @category Locale Helpers
 * @summary Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 *
 * @description
 * Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 * Returns a function which takes one of the following tokens as the argument:
 * `'LTS'`, `'LT'`, `'L'`, `'LL'`, `'LLL'`, `'l'`, `'ll'`, `'lll'`, `'llll'`
 * and returns a long format string written as `format` token strings.
 * See [format]{@link https://date-fns.org/docs/format}
 *
 * `'l'`, `'ll'`, `'lll'` and `'llll'` formats are built automatically
 * by shortening some of the tokens from corresponding unshortened formats
 * (e.g., if `LL` is `'MMMM DD YYYY'` then `ll` will be `MMM D YYYY`)
 *
 * @param {Object} obj - the object with long formats written as `format` token strings
 * @param {String} obj.LT - time format: hours and minutes
 * @param {String} obj.LTS - time format: hours, minutes and seconds
 * @param {String} obj.L - short date format: numeric day, month and year
 * @param {String} [obj.l] - short date format: numeric day, month and year (shortened)
 * @param {String} obj.LL - long date format: day, month in words, and year
 * @param {String} [obj.ll] - long date format: day, month in words, and year (shortened)
 * @param {String} obj.LLL - long date and time format
 * @param {String} [obj.lll] - long date and time format (shortened)
 * @param {String} obj.LLLL - long date, time and weekday format
 * @param {String} [obj.llll] - long date, time and weekday format (shortened)
 * @returns {Function} `formatLong` property of the locale
 *
 * @example
 * // For `en-US` locale:
 * locale.formatLong = buildFormatLongFn({
 *   LT: 'h:mm aa',
 *   LTS: 'h:mm:ss aa',
 *   L: 'MM/DD/YYYY',
 *   LL: 'MMMM D YYYY',
 *   LLL: 'MMMM D YYYY h:mm aa',
 *   LLLL: 'dddd, MMMM D YYYY h:mm aa'
 * })
 */
function buildFormatLongFn (obj) {
  var formatLongLocale = {
    LTS: obj.LTS,
    LT: obj.LT,
    L: obj.L,
    LL: obj.LL,
    LLL: obj.LLL,
    LLLL: obj.LLLL,
    l: obj.l || buildShortLongFormat(obj.L),
    ll: obj.ll || buildShortLongFormat(obj.LL),
    lll: obj.lll || buildShortLongFormat(obj.LLL),
    llll: obj.llll || buildShortLongFormat(obj.LLLL)
  };

  return function (token) {
    return formatLongLocale[token]
  }
}

var formatLong = buildFormatLongFn({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D YYYY',
  LLL: 'MMMM D YYYY h:mm aa',
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] LT',
  yesterday: '[yesterday at] LT',
  today: '[today at] LT',
  tomorrow: '[tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  other: 'L'
};

function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

/**
 * @name buildLocalizeFn
 * @category Locale Helpers
 * @summary Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale
 * used by `format` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * `localize.weekday` function takes the weekday index as argument (0 - Sunday).
 * `localize.month` takes the month index (0 - January).
 * `localize.timeOfDay` takes the hours. Use `indexCallback` to convert them to an array index (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @param {Function} [indexCallback] - the callback which takes the resulting function argument
 *   and converts it into value array index
 * @returns {Function} the resulting function
 *
 * @example
 * var timeOfDayValues = {
 *   uppercase: ['AM', 'PM'],
 *   lowercase: ['am', 'pm'],
 *   long: ['a.m.', 'p.m.']
 * }
 * locale.localize.timeOfDay = buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
 *   // 0 is a.m. array index, 1 is p.m. array index
 *   return (hours / 12) >= 1 ? 1 : 0
 * })
 * locale.localize.timeOfDay(16, {type: 'uppercase'}) //=> 'PM'
 * locale.localize.timeOfDay(5) //=> 'a.m.'
 */
function buildLocalizeFn (values, defaultType, indexCallback) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var valuesArray = values[type] || values[defaultType];
    var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
    return valuesArray[index]
  }
}

/**
 * @name buildLocalizeArrayFn
 * @category Locale Helpers
 * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @returns {Function} the resulting function
 *
 * @example
 * var weekdayValues = {
 *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
 *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 * }
 * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'long')
 * locale.localize.weekdays({type: 'narrow'}) //=> ['Su', 'Mo', ...]
 * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
 */
function buildLocalizeArrayFn (values, defaultType) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    return values[type] || values[defaultType]
  }
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var timeOfDayValues = {
//     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
//   }
//
// And later:
//
//   var localize = {
//     // The callback takes the hours as the argument and returns the array index
//     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
//       if (hours >= 17) {
//         return 3
//       } else if (hours >= 12) {
//         return 2
//       } else if (hours >= 4) {
//         return 1
//       } else {
//         return 0
//       }
//     }),
//     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
//   }
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
};

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
  // 'dayOfMonth' or 'dayOfWeek'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
};

/**
 * @name buildMatchFn
 * @category Locale Helpers
 * @summary Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale used by `parse` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 * The result of the match function will be passed into corresponding parser function
 * (`match.weekday`, `match.month` or `match.timeOfDay` respectively. See `buildParseFn`).
 *
 * @param {Object} values - the object with RegExps
 * @param {String} defaultType - the default type for the match function
 * @returns {Function} the resulting function
 *
 * @example
 * var matchWeekdaysPatterns = {
 *   narrow: /^(su|mo|tu|we|th|fr|sa)/i,
 *   short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
 *   long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
 * }
 * locale.match.weekdays = buildMatchFn(matchWeekdaysPatterns, 'long')
 * locale.match.weekdays('Sunday', {type: 'narrow'}) //=> ['Su', 'Su', ...]
 * locale.match.weekdays('Sunday') //=> ['Sunday', 'Sunday', ...]
 */
function buildMatchFn (patterns, defaultType) {
  return function (dirtyString, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var pattern = patterns[type] || patterns[defaultType];
    var string = String(dirtyString);
    return string.match(pattern)
  }
}

/**
 * @name buildParseFn
 * @category Locale Helpers
 * @summary Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale used by `parse` function.
 * The argument of the resulting function is the result of the corresponding match function
 * (`match.weekdays`, `match.months` or `match.timesOfDay` respectively. See `buildMatchFn`).
 *
 * @param {Object} values - the object with arrays of RegExps
 * @param {String} defaultType - the default type for the parser function
 * @returns {Function} the resulting function
 *
 * @example
 * var parseWeekdayPatterns = {
 *   any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
 * }
 * locale.match.weekday = buildParseFn(matchWeekdaysPatterns, 'long')
 * var matchResult = locale.match.weekdays('Friday')
 * locale.match.weekday(matchResult) //=> 5
 */
function buildParseFn (patterns, defaultType) {
  return function (matchResult, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var patternsArray = patterns[type] || patterns[defaultType];
    var string = matchResult[1];

    return patternsArray.findIndex(function (pattern) {
      return pattern.test(string)
    })
  }
}

/**
 * @name buildMatchPatternFn
 * @category Locale Helpers
 * @summary Build match function from a single RegExp.
 *
 * @description
 * Build match function from a single RegExp.
 * Usually used for building `match.ordinalNumbers` property of the locale.
 *
 * @param {Object} pattern - the RegExp
 * @returns {Function} the resulting function
 *
 * @example
 * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
 * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
 */
function buildMatchPatternFn (pattern) {
  return function (dirtyString) {
    var string = String(dirtyString);
    return string.match(pattern)
  }
}

/**
 * @name parseDecimal
 * @category Locale Helpers
 * @summary Parses the match result into decimal number.
 *
 * @description
 * Parses the match result into decimal number.
 * Uses the string matched with the first set of parentheses of match RegExp.
 *
 * @param {Array} matchResult - the object returned by matching function
 * @returns {Number} the parsed value
 *
 * @example
 * locale.match = {
 *   ordinalNumbers: (dirtyString) {
 *     return String(dirtyString).match(/^(\d+)(th|st|nd|rd)?/i)
 *   },
 *   ordinalNumber: parseDecimal
 * }
 */
function parseDecimal (matchResult) {
  return parseInt(matchResult[1], 10)
}

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};

var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
};

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 */
var locale$1 = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY$1 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK$2 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getUTCMonth() + 1
  },

  // Month: 1st, 2nd, ..., 12th
  'Mo': function (date, options) {
    var month = date.getUTCMonth() + 1;
    return options.locale.localize.ordinalNumber(month, {unit: 'month'})
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getUTCMonth() + 1, 2)
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function (date, options) {
    return options.locale.localize.month(date.getUTCMonth(), {type: 'short'})
  },

  // Month: January, February, ..., December
  'MMMM': function (date, options) {
    return options.locale.localize.month(date.getUTCMonth(), {type: 'long'})
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getUTCMonth() + 1) / 3)
  },

  // Quarter: 1st, 2nd, 3rd, 4th
  'Qo': function (date, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    return options.locale.localize.ordinalNumber(quarter, {unit: 'quarter'})
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getUTCDate()
  },

  // Day of month: 1st, 2nd, ..., 31st
  'Do': function (date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDate(), {unit: 'dayOfMonth'})
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getUTCDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getUTCDayOfYear(date)
  },

  // Day of year: 1st, 2nd, ..., 366th
  'DDDo': function (date, options) {
    return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), {unit: 'dayOfYear'})
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getUTCDayOfYear(date), 3)
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'narrow'})
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'short'})
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'long'})
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getUTCDay()
  },

  // Day of week: 0th, 1st, 2nd, ..., 6th
  'do': function (date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDay(), {unit: 'dayOfWeek'})
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getUTCDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getUTCISOWeek(date)
  },

  // ISO week: 1st, 2nd, ..., 53th
  'Wo': function (date, options) {
    return options.locale.localize.ordinalNumber(getUTCISOWeek(date), {unit: 'isoWeek'})
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getUTCISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getUTCFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getUTCFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getUTCISOWeekYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getUTCISOWeekYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getUTCHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getUTCHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getUTCHours();
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getUTCMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getUTCMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getUTCSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getUTCSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getUTCMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getUTCMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date, options) {
    var originalDate = options._originalDate || date;
    return Math.floor(originalDate.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date, options) {
    var originalDate = options._originalDate || date;
    return originalDate.getTime()
  },

  // AM, PM
  'A': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'uppercase'})
  },

  // am, pm
  'a': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'lowercase'})
  },

  // a.m., p.m.
  'aa': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'long'})
  }
};

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setUTCMinutes(date.getUTCMinutes() + amount);
  return date
}

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 * | Long format             | LT    | 05:30 a.m.                       |
 * |                         | LTS   | 05:30:15 a.m.                    |
 * |                         | L     | 07/02/1995                       |
 * |                         | l     | 7/2/1995                         |
 * |                         | LL    | July 2 1995                      |
 * |                         | ll    | Jul 2 1995                       |
 * |                         | LLL   | July 2 1995 05:30 a.m.           |
 * |                         | lll   | Jul 2 1995 05:30 a.m.            |
 * |                         | LLLL  | Sunday, July 2 1995 05:30 a.m.   |
 * |                         | llll  | Sun, Jul 2 1995 05:30 a.m.       |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var localeFormatters = locale.formatters || {};
  var formattingTokensRegExp = locale.formattingTokensRegExp || defaultFormattingTokensRegExp;
  var formatLong = locale.formatLong;

  var originalDate = toDate(dirtyDate, options);

  if (!isValid(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = originalDate.getTimezoneOffset();
  var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);

  var formatterOptions = cloneObject(options);
  formatterOptions.locale = locale;
  formatterOptions.formatters = formatters;

  // When UTC functions will be implemented, options._originalDate will likely be a part of public API.
  // Right now, please don't use it in locales. If you have to use an original date,
  // please restore it from `date`, adding a timezone offset to it.
  formatterOptions._originalDate = originalDate;

  var result = formatStr
    .replace(longFormattingTokensRegExp, function (substring) {
      if (substring[0] === '[') {
        return substring
      }

      if (substring[0] === '\\') {
        return cleanEscapedString(substring)
      }

      return formatLong(substring)
    })
    .replace(formattingTokensRegExp, function (substring) {
      var formatter = localeFormatters[substring] || formatters[substring];

      if (formatter) {
        return formatter(utcDate, formatterOptions)
      } else {
        return cleanEscapedString(substring)
      }
    });

  return result
}

function cleanEscapedString (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the mintues subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = Number(dirtyAmount);
  return addMinutes(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime()
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime()
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1 (dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime()
}

var patterns$1 = {
  'M': /^(1[0-2]|0?\d)/, // 0 to 12
  'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  'YYYY': /^(\d{1,4})/, // 0 to 9999
  'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  'm': /^([0-5]?\d)/, // 0 to 59
  'Z': /^([+-])(\d{2}):(\d{2})/,
  'ZZ': /^([+-])(\d{2})(\d{2})/,
  singleDigit: /^(\d)/,
  twoDigits: /^(\d{2})/,
  threeDigits: /^(\d{3})/,
  fourDigits: /^(\d{4})/,
  anyDigits: /^(\d+)/
};

function parseDecimal$1 (matchResult) {
  return parseInt(matchResult[1], 10)
}

var parsers = {
  // Year: 00, 01, ..., 99
  'YY': {
    unit: 'twoDigitYear',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult)
    }
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': {
    unit: 'year',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': {
    unit: 'isoYear',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) + 1900
    }
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': {
    unit: 'isoYear',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // Quarter: 1, 2, 3, 4
  'Q': {
    unit: 'quarter',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal quarter
  'Qo': {
    unit: 'quarter',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'quarter'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'quarter'})
    }
  },

  // Month: 1, 2, ..., 12
  'M': {
    unit: 'month',
    match: patterns$1.M,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) - 1
    }
  },

  // Ordinal month
  'Mo': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'month'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'month'}) - 1
    }
  },

  // Month: 01, 02, ..., 12
  'MM': {
    unit: 'month',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) - 1
    }
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.month(matchResult, {type: 'short'})
    }
  },

  // Month: January, February, ..., December
  'MMMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'long'}) ||
        options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.month(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.month(matchResult, {type: 'short'});
      }

      return parseResult
    }
  },

  // ISO week: 1, 2, ..., 53
  'W': {
    unit: 'isoWeek',
    match: patterns$1.W,
    parse: parseDecimal$1
  },

  // Ordinal ISO week
  'Wo': {
    unit: 'isoWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'isoWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'isoWeek'})
    }
  },

  // ISO week: 01, 02, ..., 53
  'WW': {
    unit: 'isoWeek',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of week: 0, 1, ..., 6
  'd': {
    unit: 'dayOfWeek',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal day of week
  'do': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfWeek'})
    }
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.weekday(matchResult, {type: 'narrow'})
    }
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'short'});

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'});
      }

      return parseResult
    }
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'long'}) ||
        options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'short'});

        if (parseResult == null) {
          parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'});
        }
      }

      return parseResult
    }
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': {
    unit: 'dayOfISOWeek',
    match: patterns$1.singleDigit,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult)
    }
  },

  // Day of month: 1, 2, ..., 31
  'D': {
    unit: 'dayOfMonth',
    match: patterns$1.D,
    parse: parseDecimal$1
  },

  // Ordinal day of month
  'Do': {
    unit: 'dayOfMonth',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfMonth'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfMonth'})
    }
  },

  // Day of month: 01, 02, ..., 31
  'DD': {
    unit: 'dayOfMonth',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of year: 1, 2, ..., 366
  'DDD': {
    unit: 'dayOfYear',
    match: patterns$1.DDD,
    parse: parseDecimal$1
  },

  // Ordinal day of year
  'DDDo': {
    unit: 'dayOfYear',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfYear'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfYear'})
    }
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': {
    unit: 'dayOfYear',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // AM, PM
  'A': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.timeOfDay(matchResult, {type: 'short'})
    }
  },

  // a.m., p.m.
  'aa': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'long'}) ||
        options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.timeOfDay(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.timeOfDay(matchResult, {type: 'short'});
      }

      return parseResult
    }
  },

  // Hour: 0, 1, ... 23
  'H': {
    unit: 'hours',
    match: patterns$1.H,
    parse: parseDecimal$1
  },

  // Hour: 00, 01, ..., 23
  'HH': {
    unit: 'hours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Hour: 1, 2, ..., 12
  'h': {
    unit: 'timeOfDayHours',
    match: patterns$1.M,
    parse: parseDecimal$1
  },

  // Hour: 01, 02, ..., 12
  'hh': {
    unit: 'timeOfDayHours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Minute: 0, 1, ..., 59
  'm': {
    unit: 'minutes',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Minute: 00, 01, ..., 59
  'mm': {
    unit: 'minutes',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Second: 0, 1, ..., 59
  's': {
    unit: 'seconds',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Second: 00, 01, ..., 59
  'ss': {
    unit: 'seconds',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': {
    unit: 'milliseconds',
    match: patterns$1.singleDigit,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 100
    }
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': {
    unit: 'milliseconds',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 10
    }
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': {
    unit: 'milliseconds',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': {
    unit: 'timezone',
    match: patterns$1.Z,
    parse: function (matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': {
    unit: 'timezone',
    match: patterns$1.ZZ,
    parse: function (matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Seconds timestamp: 512969520
  'X': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 1000
    }
  },

  // Milliseconds timestamp: 512969520900
  'x': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: parseDecimal$1
  }
};

parsers['a'] = parsers['A'];

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = Number(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay (dirtyDate, dirtyDay, dirtyOptions) {
  var day = Number(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek (dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

var MILLISECONDS_IN_DAY$3 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeekYear (dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoYear = Number(dirtyISOYear);
  var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

var MILLISECONDS_IN_MINUTE$7 = 60000;

function setTimeOfDay (hours, timeOfDay) {
  var isAM = timeOfDay === 0;

  if (isAM) {
    if (hours === 12) {
      return 0
    }
  } else {
    if (hours !== 12) {
      return 12 + hours
    }
  }

  return hours
}

var units = {
  twoDigitYear: {
    priority: 10,
    set: function (dateValues, value) {
      var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
      var year = century * 100 + value;
      dateValues.date.setUTCFullYear(year, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  year: {
    priority: 10,
    set: function (dateValues, value) {
      dateValues.date.setUTCFullYear(value, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  isoYear: {
    priority: 10,
    set: function (dateValues, value, options) {
      dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
      return dateValues
    }
  },

  quarter: {
    priority: 20,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth((value - 1) * 3, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  month: {
    priority: 30,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth(value, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  isoWeek: {
    priority: 40,
    set: function (dateValues, value, options) {
      dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
      return dateValues
    }
  },

  dayOfWeek: {
    priority: 50,
    set: function (dateValues, value, options) {
      dateValues.date = setUTCDay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfISOWeek: {
    priority: 50,
    set: function (dateValues, value, options) {
      dateValues.date = setUTCISODay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfMonth: {
    priority: 50,
    set: function (dateValues, value) {
      dateValues.date.setUTCDate(value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfYear: {
    priority: 50,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth(0, value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  timeOfDay: {
    priority: 60,
    set: function (dateValues, value, options) {
      dateValues.timeOfDay = value;
      return dateValues
    }
  },

  hours: {
    priority: 70,
    set: function (dateValues, value, options) {
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues
    }
  },

  timeOfDayHours: {
    priority: 70,
    set: function (dateValues, value, options) {
      var timeOfDay = dateValues.timeOfDay;
      if (timeOfDay != null) {
        value = setTimeOfDay(value, timeOfDay);
      }
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues
    }
  },

  minutes: {
    priority: 80,
    set: function (dateValues, value) {
      dateValues.date.setUTCMinutes(value, 0, 0);
      return dateValues
    }
  },

  seconds: {
    priority: 90,
    set: function (dateValues, value) {
      dateValues.date.setUTCSeconds(value, 0);
      return dateValues
    }
  },

  milliseconds: {
    priority: 100,
    set: function (dateValues, value) {
      dateValues.date.setUTCMilliseconds(value);
      return dateValues
    }
  },

  timezone: {
    priority: 110,
    set: function (dateValues, value) {
      dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$7);
      return dateValues
    }
  },

  timestamp: {
    priority: 120,
    set: function (dateValues, value) {
      dateValues.date = new Date(value);
      return dateValues
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE$6 = 60000;

var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format.
 *
 * Accepted format tokens:
 * | Unit                    | Priority | Token | Input examples                   |
 * |-------------------------|----------|-------|----------------------------------|
 * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
 * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
 * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
 * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
 * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Month                   | 30       | M     | 1, 2, ..., 12                    |
 * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
 * |                         |          | MM    | 01, 02, ..., 12                  |
 * |                         |          | MMM   | Jan, Feb, ..., Dec               |
 * |                         |          | MMMM  | January, February, ..., December |
 * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
 * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         |          | WW    | 01, 02, ..., 53                  |
 * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
 * |                         |          | do    | 0th, 1st, ..., 6th               |
 * |                         |          | dd    | Su, Mo, ..., Sa                  |
 * |                         |          | ddd   | Sun, Mon, ..., Sat               |
 * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
 * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
 * |                         |          | Do    | 1st, 2nd, ..., 31st              |
 * |                         |          | DD    | 01, 02, ..., 31                  |
 * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
 * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         |          | DDDD  | 001, 002, ..., 366               |
 * | Time of day             | 60       | A     | AM, PM                           |
 * |                         |          | a     | am, pm                           |
 * |                         |          | aa    | a.m., p.m.                       |
 * | Hour                    | 70       | H     | 0, 1, ... 23                     |
 * |                         |          | HH    | 00, 01, ... 23                   |
 * | Time of day hour        | 70       | h     | 1, 2, ..., 12                    |
 * |                         |          | hh    | 01, 02, ..., 12                  |
 * | Minute                  | 80       | m     | 0, 1, ..., 59                    |
 * |                         |          | mm    | 00, 01, ..., 59                  |
 * | Second                  | 90       | s     | 0, 1, ..., 59                    |
 * |                         |          | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | 100      | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | 100      | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | 100      | SSS   | 000, 001, ..., 999               |
 * | Timezone                | 110      | Z     | -01:00, +00:00, ... +12:00       |
 * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | 120      | X     | 512969520                        |
 * | Milliseconds timestamp  | 120      | x     | 512969520900                     |
 *
 * Values will be assigned to the date in the ascending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * Also, `parse` unfolds long formats like those in [format]{@link https://date-fns.org/docs/format}:
 * | Token | Input examples                 |
 * |-------|--------------------------------|
 * | LT    | 05:30 a.m.                     |
 * | LTS   | 05:30:15 a.m.                  |
 * | L     | 07/02/1995                     |
 * | l     | 7/2/1995                       |
 * | LL    | July 2 1995                    |
 * | ll    | Jul 2 1995                     |
 * | LLL   | July 2 1995 05:30 a.m.         |
 * | lll   | Jul 2 1995 05:30 a.m.          |
 * | LLLL  | Sunday, July 2 1995 05:30 a.m. |
 * | llll  | Sun, Jul 2 1995 05:30 a.m.     |
 *
 * The characters wrapped in square brackets in the format string are escaped.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/DD/YYYY',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in English locale in the context of 2010 year:
 * import eoLocale from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   'Do [de] MMMM',
 *   new Date(2010, 0, 1)
 *   {locale: eoLocale}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse (dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present')
  }

  var dateString = String(dirtyDateString);
  var options = dirtyOptions || {};

  var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var locale = options.locale || locale$1;
  var localeParsers = locale.parsers || {};
  var localeUnits = locale.units || {};

  if (!locale.match) {
    throw new RangeError('locale must contain match property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var formatString = String(dirtyFormatString)
    .replace(longFormattingTokensRegExp$1, function (substring) {
      if (substring[0] === '[') {
        return substring
      }

      if (substring[0] === '\\') {
        return cleanEscapedString$1(substring)
      }

      return locale.formatLong(substring)
    });

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = cloneObject(options);
  subFnOptions.locale = locale;

  var tokens = formatString.match(locale.parsingTokensRegExp || defaultParsingTokensRegExp);
  var tokensLength = tokens.length;

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];

  var i;
  for (i = 0; i < tokensLength; i++) {
    var token = tokens[i];
    var parser = localeParsers[token] || parsers[token];
    if (parser) {
      var matchResult;

      if (parser.match instanceof RegExp) {
        matchResult = parser.match.exec(dateString);
      } else {
        matchResult = parser.match(dateString, subFnOptions);
      }

      if (!matchResult) {
        return new Date(NaN)
      }

      var unitName = parser.unit;
      var unit = localeUnits[unitName] || units[unitName];

      setters.push({
        priority: unit.priority,
        set: unit.set,
        value: parser.parse(matchResult, subFnOptions),
        index: setters.length
      });

      var substring = matchResult[0];
      dateString = dateString.slice(substring.length);
    } else {
      var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
      if (dateString.indexOf(head) === 0) {
        dateString = dateString.slice(head.length);
      } else {
        return new Date(NaN)
      }
    }
  }

  var uniquePrioritySetters = setters
    .map(function (setter) {
      return setter.priority
    })
    .sort(function (a, b) {
      return a - b
    })
    .filter(function (priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function (priority) {
      return setters
        .filter(function (setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function (setterArray) {
      return setterArray[0]
    });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMinutes(date, date.getTimezoneOffset());

  var dateValues = {date: utcDate};

  var settersLength = uniquePrioritySetters.length;
  for (i = 0; i < settersLength; i++) {
    var setter = uniquePrioritySetters[i];
    dateValues = setter.set(dateValues, setter.value, subFnOptions);
  }

  return dateValues.date
}

function dateToSystemTimezone (dateValues) {
  var date = dateValues.date;
  var time = date.getTime();

  // Get the system timezone offset at (moment of time - offset)
  var offset = date.getTimezoneOffset();

  // Get the system timezone offset at the exact moment of time
  offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$6).getTimezoneOffset();

  // Convert date in timezone "UTC+00:00" to the system timezone
  dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$6);

  return dateValues
}

function cleanEscapedString$1 (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.

// 

/**
 * Custom parse behavior on top of date-fns parse function.
 */
function parseDate$1 (date, format$$1) {
  if (typeof date !== 'string') {
    return isValid(date) ? date : null;
  }

  var parsed = parse(date, format$$1, new Date());

  // if date is not valid or the formatted output after parsing does not match
  // the string value passed in (avoids overflows)
  if (!isValid(parsed) || format(parsed, format$$1) !== date) {
    return null;
  }

  return parsed;
}

var after = function (value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format);
  otherValue = parseDate$1(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false;
  }

  return isAfter(value, otherValue) || (inclusion && isEqual$1(value, otherValue));
};

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validate = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var locale = ref[0]; if ( locale === void 0 ) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var validate$1 = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var locale = ref[0]; if ( locale === void 0 ) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$1(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var validate$2 = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var locale = ref[0]; if ( locale === void 0 ) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$2(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var validate$3 = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var locale = ref[0]; if ( locale === void 0 ) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$3(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var before = function (value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format);
  otherValue = parseDate$1(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false;
  }

  return isBefore(value, otherValue) || (inclusion && isEqual$1(value, otherValue));
};

var validate$4 = function (value, ref) {
  var min = ref[0];
  var max = ref[1];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$4(val, [min, max]); });
  }

  return Number(min) <= value && Number(max) >= value;
};

var confirmed = function (value, other) { return String(value) === String(other); };

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
});

unwrapExports(assertString_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
});

var isCreditCard = unwrapExports(isCreditCard_1);

var credit_card = function (value) { return isCreditCard(String(value)); };

var validate$5 = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';
  var separator = ref[1]; if ( separator === void 0 ) separator = '.';

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$5(val, [decimals, separator]); });
  }

  if (value === null || value === undefined || value === '') {
    return true;
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^-?\\d*(\\" + separator + "\\d" + regexPart + ")?$"));

  if (! regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
    return parsedValue === parsedValue;
};

var date_between = function (value, params) {
  var min;
  var max;
  var format;
  var inclusivity = '()';

  if (params.length > 3) {
    var assign;
    (assign = params, min = assign[0], max = assign[1], inclusivity = assign[2], format = assign[3]);
  } else {
    var assign$1;
    (assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2]);
  }

  var minDate = parseDate$1(min, format);
  var maxDate = parseDate$1(max, format);
  var dateVal = parseDate$1(value, format);

  if (!minDate || !maxDate || !dateVal) {
    return false;
  }

  if (inclusivity === '()') {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
  }

  if (inclusivity === '(]') {
    return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
  }

  if (inclusivity === '[)') {
    return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
  }

  return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) ||
        (isBefore(dateVal, maxDate) && isAfter(dateVal, minDate));
};

var date_format = function (value, ref) {
  var format = ref[0];

  return !!parseDate$1(value, format);
};

var validate$6 = function (value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$6(val, [length]); });
  }
  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height)
    }); };

    image.src = URL.createObjectURL(file);
  });
};

var dimensions = function (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var list = [];
  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return false;
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) { return validateImage(file, width, height); }));
};

var merge_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
});

unwrapExports(isByteLength_1);

var isFQDN = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
});

unwrapExports(isFQDN);

var isEmail_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);



var _isByteLength2 = _interopRequireDefault(isByteLength_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var validate$7 = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return isEmail(String(val)); });
  }

  return isEmail(String(value));
};

var ext = function (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');

  return files.every(function (file) { return regex.test(file.name); });
};

var image = function (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }
); };

var validate$8 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$8(val, options); });
  }

  // eslint-disable-next-line
  return !! options.filter(function (option) { return option == value; }).length;
};

var isIP_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

var ip = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var version = ref[0]; if ( version === void 0 ) version = 4;

  if (Array.isArray(value)) {
    return value.every(function (val) { return isIP(val, version); });
  }

  return isIP(value, version);
};

/**
 * @param {Array|String} value 
 * @param {Number} length
 * @param {Number} max 
 */
var compare = function (value, length, max) {
  if (max === undefined) {
    return value.length === length;
  }

  // cast to number.
  max = Number(max);

  return value.length >= length && value.length <= max;
};

var length = function (value, ref) {
  var length = ref[0];
  var max = ref[1]; if ( max === void 0 ) max = undefined;

  length = Number(length);
  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return compare(value, length, max);
};

var integer = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var max$1 = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

var max_value = function (value, ref) {
  var max = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) <= max;
};

var mimes = function (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');

  return files.every(function (file) { return regex.test(file.type); });
};

var min$1 = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return false;
  }
  return String(value).length >= length;
};

var min_value = function (value, ref) {
  var min = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) >= min;
};

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$9(val, options); });
  }

  // eslint-disable-next-line
  return ! options.filter(function (option) { return option == value; }).length;
};

var numeric = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^[0-9]+$/.test(String(val)); });
  }

  return /^[0-9]+$/.test(String(value));
};

var regex = function (value, ref) {
  var regex = ref[0];
  var flags = ref.slice(1);

  if (regex instanceof RegExp) {
    return regex.test(value);
  }

  return new RegExp(regex, flags).test(String(value));
};

var required = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var invalidateFalse = ref[0]; if ( invalidateFalse === void 0 ) invalidateFalse = false;

  if (Array.isArray(value)) {
    return !! value.length;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false && invalidateFalse) {
    return false;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return !! String(value).trim().length;
};

var size = function (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }

  var nSize = Number(size) * 1024;
  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var isURL_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;



var _assertString2 = _interopRequireDefault(assertString_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);



var _isIP2 = _interopRequireDefault(isIP_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

var url = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var requireProtocol = ref[0]; if ( requireProtocol === void 0 ) requireProtocol = false;

  var options = { require_protocol: !!requireProtocol, allow_underscores: true };
  if (Array.isArray(value)) {
    return value.every(function (val) { return isURL(val, options); });
  }

  return isURL(value, options);
};

/* eslint-disable camelcase */
var Rules = {
  after: after,
  alpha_dash: validate$1,
  alpha_num: validate$2,
  alpha_spaces: validate$3,
  alpha: validate,
  before: before,
  between: validate$4,
  confirmed: confirmed,
  credit_card: credit_card,
  date_between: date_between,
  date_format: date_format,
  decimal: validate$5,
  digits: validate$6,
  dimensions: dimensions,
  email: validate$7,
  ext: ext,
  image: image,
  in: validate$8,
  integer: integer,
  length: length,
  ip: ip,
  max: max$1,
  max_value: max_value,
  mimes: mimes,
  min: min$1,
  min_value: min_value,
  not_in: validate$9,
  numeric: numeric,
  regex: regex,
  required: required,
  size: size,
  url: url
};

// 

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (~curr.indexOf('.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

/**
 * Maps fields to computed functions.
 */
var mapFields = function (fields) {
  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField () {
      // if field exists
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field];
      }

      // if it has a scope defined
      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }

      var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);
      scope = this.$validator.flags[("$" + scope)];
      name = name.join('.');

      if (scope && scope[name]) {
        return scope[name];
      }

      return {};
    };

    return prev;
  }, {});
};

var version = '2.0.0-rc.21';

var rulesPlugin = function (ref) {
  var Validator$$1 = ref.Validator;

  Object.keys(Rules).forEach(function (rule) {
    Validator$$1.extend(rule, Rules[rule]);
  });

  // Merge the english messages.
  Validator$$1.localize('en', locale);
};

use(rulesPlugin);

var index_esm = {
  install: install,
  use: use,
  directive: directive,
  mixin: mixin,
  mapFields: mapFields,
  Validator: Validator,
  ErrorBag: ErrorBag,
  Rules: Rules,
  version: version
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("40ee1a97", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a26ba514\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Forms.vue", function() {
     var newContent = require("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a26ba514\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Forms.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(466);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzIyMDg3Yzc3ZDQ0MjU4OTk1M2Y/M2IyNyoqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbG9zZWQtbGlzdC9pbnNlcnQvcHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0KioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vRm9ybXMudnVlPzE3Y2EqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9yZXF1ZXN0cy9jbG9zZWQtbGlzdC9wcmVzcy9pbnNlcnQvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanM/NmIyYioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3JlcXVlc3RzL2Nsb3NlZC1saXN0L3ByZXNzL2luc2VydC9Gb3Jtcy52dWU/OGZkYiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcz9lNmFjKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvcmVxdWVzdHMvY2xvc2VkLWxpc3QvcHJlc3MvaW5zZXJ0L0Zvcm1zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvcmVxdWVzdHMvY2xvc2VkLWxpc3QvcHJlc3MvaW5zZXJ0L0Zvcm1zLnZ1ZT8yN2FmIiwid2VicGFjazovLy8uL34vdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmVzbS5qcz9jMWI0KioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9yZXF1ZXN0cy9jbG9zZWQtbGlzdC9wcmVzcy9pbnNlcnQvRm9ybXMudnVlPzY5ZDciXSwibmFtZXMiOlsic2VsZiIsIl9pc0luaXQiLCJfcmVxdWVzdEZvcm1zIiwiaW5zZXJ0Q2xvc2VkTGlzdENvbXBvbmVudCIsInJlcXVpcmUiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJfcmVxdWVzdCIsIl9mb3JtIiwiaSIsImxlbiIsImxlbmd0aCIsIlZ1ZSIsImVsIiwibWl4aW5zIiwicmVxdWVzdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxhQUFhLGFBQWEsMEJBQTBC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrQkFBa0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxnREFBZ0Qsa0JBQWtCLEVBQUU7QUFDcEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsZUFBZSxXQUFXLFVBQVU7QUFDOUQsdUJBQXVCLGVBQWUsV0FBVyxVQUFVOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRLG9EQUFvRDtBQUN2RSxXQUFXLE1BQU0saUVBQWlFO0FBQ2xGLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVEsb0RBQW9EO0FBQ3ZFLFdBQVcsTUFBTSxpRUFBaUU7QUFDbEYsYUFBYSxLQUFLO0FBQ2xCLFlBQVksVUFBVTtBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRLG9EQUFvRDtBQUN2RSxXQUFXLE1BQU0saUVBQWlFO0FBQ2xGLGFBQWEsUUFBUTtBQUNyQixZQUFZLFVBQVU7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsMERBQTBELE9BQU87QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGtDQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZUFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseURBQXlELGNBQWM7QUFDdkUsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSw4REFBOEQsY0FBYztBQUM1RSxHQUFHOztBQUVIO0FBQ0E7QUFDQSw4REFBOEQsYUFBYTtBQUMzRSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdCQUFnQjtBQUMzRSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHFFQUFx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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCx1Q0FBdUM7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxRQUFRLG9EQUFvRDtBQUN2RSxXQUFXLE1BQU0saUVBQWlFO0FBQ2xGLFdBQVcsT0FBTyxrRUFBa0U7QUFDcEYsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksV0FBVztBQUN2QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQjtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CLGlCQUFpQjtBQUNqQjtBQUNBLHVDQUF1Qyw0QkFBNEIsRUFBRTtBQUNyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTtBQUNSOzs7Ozs7OztBQ3RnTkE7O0FBRUE7QUFDQSxxQ0FBbVA7QUFDblA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhLQUE4SyxvRUFBb0U7QUFDbFAsdUxBQXVMLG9FQUFvRTtBQUMzUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiL2pzL3ByZXNzL2luc2VydC9wcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDg1OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzIyMDg3Yzc3ZDQ0MjU4OTk1M2YiLCIvLyB0aGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGVcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IE9iamVjdC5jcmVhdGUob3B0aW9ucy5jb21wdXRlZCB8fCBudWxsKVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgICBvcHRpb25zLmNvbXB1dGVkID0gY29tcHV0ZWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MSA0MiIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKiBQcml2YXRlIFZhcmlhYmxlcyAqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogU2F2ZSB0aGlzIGluc3RhbmNlXG4gKiBAdHlwZSBAdGhpcztcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzZWxmID0gdGhpcztcblxuLyoqXG4gKiBJZiBNb2R1bGUgaGFzIGJlZW4gaW5pdGlhdGVkXG4gKiBAdHlwZSBCb29sZWFuXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgX2lzSW5pdCA9IGZhbHNlOyAvLyB0byBhdm9pZCAncmViaW5kcydcblxuLyoqXG4gKiBSZXF1ZXN0IFRhYmxlc1xuICogQHR5cGUge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBfcmVxdWVzdEZvcm1zID0gW1wiaW5zZXJ0LXByZXNzXCJdO1xuXG4vKipcbiAqIEZvcm0gQ29tcG9uZW50IGluc3RhbmNlXG4gKi9cbmNvbnN0IGluc2VydENsb3NlZExpc3RDb21wb25lbnQgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL3JlcXVlc3RzL2Nsb3NlZC1saXN0L3ByZXNzL2luc2VydC9mb3JtcycpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKiBQdWJsaWMgZnVuY3Rpb25zICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIHN0YXJ0XG4gKlxuICogU3RhcnRzIHRoZSBtb2R1bGVcbiAqIEluaXRzIHByaXZhdGUgdmFyaWFibGVzIGFuZCBleGVjdXRlcyBzcGVjaWZpYyBsb2dpYyBuZWVkZWQgZm9yIHRoZSBtb2R1bGVcbiAqIHRvIHN0YXJ0LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudGhpcy5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCFfaXNJbml0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xvc2VkIExpc3QgQXJlYSBQcmVzcyBJbnNlcnQgQXJlYSBzdGFydGVkLi5cIik7XG5cbiAgICAgICAgLy8gRm9ybSBjb21wb25lbnQgaW5pdFxuICAgICAgICBpbnNlcnRDbG9zZWRMaXN0Q29tcG9uZW50LnN0YXJ0KF9yZXF1ZXN0Rm9ybXMpO1xuICAgIH1cbn07XG5cbnNlbGYuc3RhcnQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Nsb3NlZC1saXN0L2luc2VydC9wcmVzcy5qcyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MSA0MiIsIjxzdHlsZSBzY29wZWQ+XG4gICAgLmJ0bi5kaXNhYmxlZCwgLmJ0bltkaXNhYmxlZF0sIGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuIHtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZm9ybXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBpbm1vZGFsIGZhZGVcIiBpZD1cIm1vZGFsLXN1Y2Nlc3NcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiICBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cInotaW5kZXg6IDIwOTk5OTk1MCFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbGVhZFR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+U3VjY2VzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGJsb2NrO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgZmEtNXggdGV4dC1pbmZvXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9udC1ib2xkXCI+IEluc2VydCBCdWRnZXQgPC9zbWFsbD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGxlYWRUeXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGlubW9kYWwgZmFkZVwiIGlkPSdtb2RhbC1lcnJvcicgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJ6LWluZGV4OiAyMDk5OTk5NTAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGxlYWRUeXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBibG9jaztcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXdhcm5pbmcgZmEtNXggdGV4dC1kYW5nZXJcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb250LWJvbGQgdGV4dC1kYW5nZXJcIj4gU29tZXRoaW5nIGdvZXMgd3Jvbmc8L3NtYWxsPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbGVhZFR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWJveCBmbG9hdC1lLW1hcmdpbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+IEluc2VydCBCdWRnZXQ8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpYm94LXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNvbGxhcHNlLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNsb3NlLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWJveC1jb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInZhbGlkYXRlQmVmb3JlU3VibWl0KHBheWxvYWQpXCIgaWQ9XCJmb3JtLXNlY3Rpb24tZmFpcnNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgZm9ybS1ncm91cCBwYWRkaW5nLWJvdHRvbVwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcyhwYXlsb2FkLnllYXJzLnZhbHVlKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJkaXNwbGF5OiB0YWJsZS1jZWxsXCI+e3sgcGF5bG9hZC55ZWFycy5sYWJlbCB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi12YWxpZGF0ZSA6ZGF0YS12di1ydWxlcz1wYXlsb2FkLnllYXJzLnJ1bGVzIDpkYXRhLXZ2LXZhbGlkYXRlLW9uPVwidmFsaWRhdGVGb3JtXCIgdGl0bGU9XCJQbGVhc2UgY2hvb3NlIG9uZSBvZiB0aGUgZm9sbG93aW5nIG9wdGlvbnNcIiA6bmFtZT1wYXlsb2FkLnllYXJzLnBvc3QgIGRhdGEtbGl2ZS1zZWFyY2g9XCJ0cnVlXCIgdi1tb2RlbD1wYXlsb2FkLnllYXJzLnBvc3QgY2xhc3M9XCJzZWxlY3RwaWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cInZhbHVlc1wiIHYtZm9yPVwidmFsdWVzIGluIHBheWxvYWQueWVhcnMuZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWJpbmQ6aWQ9XCJ2YWx1ZXNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZhbHVlcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKHBheWxvYWQueWVhcnMudmFsdWUpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvcnMuZmlyc3QocGF5bG9hZC55ZWFycy52YWx1ZSkgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGZvcm0tZ3JvdXAgcGFkZGluZy1ib3R0b21cIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMocGF5bG9hZC5icmFuZHMudmFsdWUpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cImRpc3BsYXk6IHRhYmxlLWNlbGxcIj57eyBwYXlsb2FkLmJyYW5kcy5sYWJlbCB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi12YWxpZGF0ZSA6ZGF0YS12di1ydWxlcz1wYXlsb2FkLmJyYW5kcy5ydWxlcyA6ZGF0YS12di12YWxpZGF0ZS1vbj1cInZhbGlkYXRlRm9ybVwiIHRpdGxlPVwiUGxlYXNlIGNob29zZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zXCIgOm5hbWU9cGF5bG9hZC5icmFuZHMucG9zdCAgZGF0YS1saXZlLXNlYXJjaD1cInRydWVcIiB2LW1vZGVsPXBheWxvYWQuYnJhbmRzLnBvc3QgY2xhc3M9XCJzZWxlY3RwaWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cInZhbHVlcy52YWx1ZVwiIHYtZm9yPVwidmFsdWVzIGluIHBheWxvYWQuYnJhbmRzLmRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOmlkPVwidmFsdWVzLnZhbHVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWx1ZXMubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZXJyb3JzLmhhcyhwYXlsb2FkLmJyYW5kcy52YWx1ZSlcIiBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9ycy5maXJzdChwYXlsb2FkLmJyYW5kcy52YWx1ZSkgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLWxnLTQgcGFkZGluZy1ib3R0b21cIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMocGF5bG9hZC5idWRnZXQudmFsdWUpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBwYXlsb2FkLmJ1ZGdldC5sYWJlbCB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGF5bG9hZC5idWRnZXQucG9zdFwiIDpuYW1lPXBheWxvYWQuYnVkZ2V0LnZhbHVlICB2LXZhbGlkYXRlIDpkYXRhLXZ2LXJ1bGVzPXBheWxvYWQuYnVkZ2V0LnJ1bGVzIDpkYXRhLXZ2LXZhbGlkYXRlLW9uPVwidmFsaWRhdGVGb3JtXCIgY2xhc3M9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBsZWFkVHlwZT1cInRleHRcIiA6cGxhY2Vob2xkZXI9XCJwYXlsb2FkLmJ1ZGdldC5sYWJlbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMocGF5bG9hZC5idWRnZXQudmFsdWUpXCIgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KHBheWxvYWQuYnVkZ2V0LnZhbHVlKSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3M9XCJsYWRkYS1idXR0b24gbGFkZGEtYnV0dG9uLXNlbGVjdG9yIGJ0biBidG4tcHJpbWFyeVwiIGRhdGEtc3R5bGU9XCJ6b29tLWluXCIgbGVhZFR5cGU9XCJzdWJtaXRcIj5JbnNlcnQgQnVkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgLy8gVmVlVmFsaWRhdGUgaW1wb3J0XG4gICAgaW1wb3J0IFZlZVZhbGlkYXRlIGZyb20gJ3ZlZS12YWxpZGF0ZSc7XG4gICAgVnVlLnVzZShWZWVWYWxpZGF0ZSk7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZGdldCA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQnVkZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYnVkZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdCAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBicmFuZHMgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIDogJ0JyYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ2JyYW5kcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcyA6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhICA6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHllYXJzICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA6ICdZZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ3llYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXMgOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdCAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAgOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjb21ib0JveE1vdW50IChyZXNwb25zZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF5bG9hZFtkYXRhXS5kYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHllYXJzTGlzdCAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCAgICAgID0ge307XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQuZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZTtcbiAgICAgICAgICAgICAgICBsZXQgeWVhciAgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geWVhciAtIDM7IGkgPD0geWVhciArIDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLmRhdGEucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJbml0IENvbWJvQm94XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tYm9Cb3hNb3VudChwYXlsb2FkLCAneWVhcnMnLCB0cnVlLCAneWVhcnMnLCB5ZWFyKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJyYW5kc0xpc3QgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdFxuICAgICAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnZ2V0LWJyYW5kcy1vbmx5JyxcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluaXQgQ29tYm9Cb3hcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tYm9Cb3hNb3VudChyZXNwb25zZS5kYXRhLmJyYW5kcywgJ2JyYW5kcycpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwb3N0SW5zZXJ0QnVkZ2V0IChwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmJ1dHRvbkxvYWRlci5zdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdFxuICAgICAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2J1ZGdldC1pbnNlcnQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwYXlsb2FkXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnV0dG9uTG9hZGVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbi1zZWxlY3RvcicpLmZhZGVJbigxMDAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKCc8aSBzdHlsZT1cInBhZGRpbmctbGVmdDogNXB4O1wiIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5sYWRkYS1idXR0b24tc2VsZWN0b3IgPiAuZmEtY2hlY2snKS5mYWRlT3V0KDEwMDAsIGZ1bmN0aW9uKCkgeyAkKHRoaXMpLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIG1vZGFsXG4gICAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1zdWNjZXNzJykubW9kYWwoJ3Nob3cnKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MTkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQgPSBcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZCwgd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBsb2dpblwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnV0dG9uTG9hZGVyLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcubGFkZGEtYnV0dG9uLXNlbGVjdG9yJykuZmFkZUluKDEwMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoJzxpIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA1cHg7XCIgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT4nKS5hZGRDbGFzcygnYnRuLWRhbmdlcicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubGFkZGEtYnV0dG9uLXNlbGVjdG9yID4gLmZhLWNsb3NlJykuZmFkZU91dCgxMDAwLCBmdW5jdGlvbigpIHsgJCh0aGlzKS5yZW1vdmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubGFkZGEtYnV0dG9uLXNlbGVjdG9yJykucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHN1Y2Nlc3MgbW9kYWxcbiAgICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWVycm9yJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbGlkYXRlQmVmb3JlU3VibWl0KHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlcXVlc3QpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWRbdmFsdWVdID0gcmVxdWVzdFt2YWx1ZV0ucG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0SW5zZXJ0QnVkZ2V0KHBheWxvYWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Zvcm0gU3VibWl0dGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRm9ybSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QgdGhlbSBlcnJvcnMhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgLy8gQmluZCBDcmVhdGUgYnV0dG9uIGxvYWRlclxuICAgICAgICAgICAgd2luZG93LmJ1dHRvbkxvYWRlciA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmxhZGRhLWJ1dHRvbi1zZWxlY3RvcicpKTtcblxuICAgICAgICAgICAgLy8gR2V0IFllYXJzTGlzdFxuICAgICAgICAgICAgdGhpcy55ZWFyc0xpc3QodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIEdldCBCcmFuZHNMaXN0XG4gICAgICAgICAgICB0aGlzLmJyYW5kc0xpc3QodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRm9ybXMudnVlPzQxZmUyZTcxIiwiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqIFByaXZhdGUgVmFyaWFibGVzICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBTYXZlIHRoaXMgaW5zdGFuY2VcbiAqIEB0eXBlIEB0aGlzO1xuICogQHByaXZhdGVcbiAqL1xudmFyIHNlbGYgPSB0aGlzO1xuXG4vKipcbiAqIElmIE1vZHVsZSBoYXMgYmVlbiBpbml0aWF0ZWRcbiAqIEB0eXBlIEJvb2xlYW5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBfaXNJbml0ID0gZmFsc2U7IC8vIHRvIGF2b2lkICdyZWJpbmRzJ1xuXG4vKipcbiAqIFJlcXVlc3RcbiAqIEB0eXBlIFN0cmluZ1xuICogQHByaXZhdGVcbiAqL1xudmFyIF9yZXF1ZXN0O1xuXG4vKipcbiAqIERhdGUgcGlja2VyIGluc3RhbmNlXG4gKi9cbmltcG9ydCBGb3JtcyBmcm9tICcuL0Zvcm1zLnZ1ZSc7XG5cbi8qKlxuICpcbiAqIENyZWF0ZSBhIFRhYmxlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICogQHJldHVybiB7e2NvbHVtbnMsIGRhdGEsIHRhYmxlTmFtZTogKCp8bnVsbCl9fVxuICogQHByaXZhdGVcbiAqL1xudmFyIF9mb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gQ3JlYXRlIGFsbCByZXF1ZXN0ZWQgaW5zdGFuY2VzXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IF9yZXF1ZXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgICAgZWw6ICcjJyArIF9yZXF1ZXN0W2ldLFxuICAgICAgICAgICAgbWl4aW5zOiBbRm9ybXNdLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKiBQdWJsaWMgZnVuY3Rpb25zICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIHN0YXJ0XG4gKlxuICogU3RhcnRzIHRoZSBtb2R1bGVcbiAqIEluaXRzIHByaXZhdGUgdmFyaWFibGVzIGFuZCBleGVjdXRlcyBzcGVjaWZpYyBsb2dpYyBuZWVkZWQgZm9yIHRoZSBtb2R1bGVcbiAqIHRvIHN0YXJ0LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuc2VsZi5zdGFydCA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICBfcmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgaWYoIV9pc0luaXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIENvbXBvbmVudCBzdGFydGVkLi5cIik7XG5cbiAgICAgICAgIC8vIEZvcm0gY29tcG9uZW50XG4gICAgICAgIF9mb3JtKCk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvcmVxdWVzdHMvY2xvc2VkLWxpc3QvcHJlc3MvaW5zZXJ0L2Zvcm1zLmpzIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDEgNDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLmRpc2FibGVkW2RhdGEtdi1hMjZiYTUxNF0sIC5idG5bZGlzYWJsZWRdW2RhdGEtdi1hMjZiYTUxNF0sIGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuW2RhdGEtdi1hMjZiYTUxNF0ge1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGb3Jtcy52dWU/NDFmZTJlNzFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJGb3Jtcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlIHNjb3BlZD5cXG4gICAgLmJ0bi5kaXNhYmxlZCwgLmJ0bltkaXNhYmxlZF0sIGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuIHtcXG4gICAgICAgIGN1cnNvcjogYXV0bztcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXFwiZm9ybXNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGlubW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm1vZGFsLXN1Y2Nlc3NcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiAgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyMDk5OTk5NTAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGxlYWRUeXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5TdWNjZXNzPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBibG9jaztcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtNXggdGV4dC1pbmZvXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogYmxvY2s7XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIj4gSW5zZXJ0IEJ1ZGdldCA8L3NtYWxsPjxicj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGxlYWRUeXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgaW5tb2RhbCBmYWRlXFxcIiBpZD0nbW9kYWwtZXJyb3InIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiAgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyMDk5OTk5NTAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGxlYWRUeXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBibG9jaztcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtd2FybmluZyBmYS01eCB0ZXh0LWRhbmdlclxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGJsb2NrO1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWRhbmdlclxcXCI+IFNvbWV0aGluZyBnb2VzIHdyb25nPC9zbWFsbD48YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBsZWFkVHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DbG9zZTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlib3ggZmxvYXQtZS1tYXJnaW5zXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWJveC10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDU+IEluc2VydCBCdWRnZXQ8L2g1PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWJveC10b29sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNvbGxhcHNlLWxpbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi11cFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2xvc2UtbGlua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWJveC1jb250ZW50XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJ2YWxpZGF0ZUJlZm9yZVN1Ym1pdChwYXlsb2FkKVxcXCIgaWQ9XFxcImZvcm0tc2VjdGlvbi1mYWlyc1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNCBmb3JtLWdyb3VwIHBhZGRpbmctYm90dG9tXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcyhwYXlsb2FkLnllYXJzLnZhbHVlKX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiB0YWJsZS1jZWxsXFxcIj57eyBwYXlsb2FkLnllYXJzLmxhYmVsIH19PC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtdmFsaWRhdGUgOmRhdGEtdnYtcnVsZXM9cGF5bG9hZC55ZWFycy5ydWxlcyA6ZGF0YS12di12YWxpZGF0ZS1vbj1cXFwidmFsaWRhdGVGb3JtXFxcIiB0aXRsZT1cXFwiUGxlYXNlIGNob29zZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zXFxcIiA6bmFtZT1wYXlsb2FkLnllYXJzLnBvc3QgIGRhdGEtbGl2ZS1zZWFyY2g9XFxcInRydWVcXFwiIHYtbW9kZWw9cGF5bG9hZC55ZWFycy5wb3N0IGNsYXNzPVxcXCJzZWxlY3RwaWNrZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cXFwidmFsdWVzXFxcIiB2LWZvcj1cXFwidmFsdWVzIGluIHBheWxvYWQueWVhcnMuZGF0YVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWJpbmQ6aWQ9XFxcInZhbHVlc1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmFsdWVzIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cXFwiZXJyb3JzLmhhcyhwYXlsb2FkLnllYXJzLnZhbHVlKVxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2sgdGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9ycy5maXJzdChwYXlsb2FkLnllYXJzLnZhbHVlKSB9fTwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgZm9ybS1ncm91cCBwYWRkaW5nLWJvdHRvbVxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMocGF5bG9hZC5icmFuZHMudmFsdWUpfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IHRhYmxlLWNlbGxcXFwiPnt7IHBheWxvYWQuYnJhbmRzLmxhYmVsIH19PC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtdmFsaWRhdGUgOmRhdGEtdnYtcnVsZXM9cGF5bG9hZC5icmFuZHMucnVsZXMgOmRhdGEtdnYtdmFsaWRhdGUtb249XFxcInZhbGlkYXRlRm9ybVxcXCIgdGl0bGU9XFxcIlBsZWFzZSBjaG9vc2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgb3B0aW9uc1xcXCIgOm5hbWU9cGF5bG9hZC5icmFuZHMucG9zdCAgZGF0YS1saXZlLXNlYXJjaD1cXFwidHJ1ZVxcXCIgdi1tb2RlbD1wYXlsb2FkLmJyYW5kcy5wb3N0IGNsYXNzPVxcXCJzZWxlY3RwaWNrZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cXFwidmFsdWVzLnZhbHVlXFxcIiB2LWZvcj1cXFwidmFsdWVzIGluIHBheWxvYWQuYnJhbmRzLmRhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1iaW5kOmlkPVxcXCJ2YWx1ZXMudmFsdWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZhbHVlcy5sYWJlbCB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XFxcImVycm9ycy5oYXMocGF5bG9hZC5icmFuZHMudmFsdWUpXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9jayB0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KHBheWxvYWQuYnJhbmRzLnZhbHVlKSB9fTwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbGctNCBwYWRkaW5nLWJvdHRvbVxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMocGF5bG9hZC5idWRnZXQudmFsdWUpfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+e3sgcGF5bG9hZC5idWRnZXQubGFiZWwgfX08L2xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJwYXlsb2FkLmJ1ZGdldC5wb3N0XFxcIiA6bmFtZT1wYXlsb2FkLmJ1ZGdldC52YWx1ZSAgdi12YWxpZGF0ZSA6ZGF0YS12di1ydWxlcz1wYXlsb2FkLmJ1ZGdldC5ydWxlcyA6ZGF0YS12di12YWxpZGF0ZS1vbj1cXFwidmFsaWRhdGVGb3JtXFxcIiBjbGFzcz1cXFwiaW5wdXQgZm9ybS1jb250cm9sXFxcIiBsZWFkVHlwZT1cXFwidGV4dFxcXCIgOnBsYWNlaG9sZGVyPVxcXCJwYXlsb2FkLmJ1ZGdldC5sYWJlbFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cXFwiZXJyb3JzLmhhcyhwYXlsb2FkLmJ1ZGdldC52YWx1ZSlcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3JzLmZpcnN0KHBheWxvYWQuYnVkZ2V0LnZhbHVlKSB9fTwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3M9XFxcImxhZGRhLWJ1dHRvbiBsYWRkYS1idXR0b24tc2VsZWN0b3IgYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLXN0eWxlPVxcXCJ6b29tLWluXFxcIiBsZWFkVHlwZT1cXFwic3VibWl0XFxcIj5JbnNlcnQgQnVkZ2V0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIC8vIFZlZVZhbGlkYXRlIGltcG9ydFxcbiAgICBpbXBvcnQgVmVlVmFsaWRhdGUgZnJvbSAndmVlLXZhbGlkYXRlJztcXG4gICAgVnVlLnVzZShWZWVWYWxpZGF0ZSk7XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIGRhdGEgKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybTogJ25vbmUnLFxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XFxuICAgICAgICAgICAgICAgICAgICBidWRnZXQgOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdCdWRnZXQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYnVkZ2V0JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlczogJ3JlcXVpcmVkJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ICA6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgYnJhbmRzICAgICAgICAgOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgOiAnQnJhbmQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ2JyYW5kcycsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXMgOiAncmVxdWlyZWQnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QgIDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhICA6IFtdXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMgICAgICAgICA6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA6ICdZZWFyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6ICd5ZWFyJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcyA6ICdyZXF1aXJlZCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdCAgOiBudWxsLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgIDogW11cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNvbWJvQm94TW91bnQgKHJlc3BvbnNlLCBkYXRhKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucGF5bG9hZFtkYXRhXS5kYXRhID0gcmVzcG9uc2UuZGF0YTtcXG5cXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpO1xcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgeWVhcnNMaXN0IChpbnN0YW5jZSkge1xcbiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCAgICAgID0ge307XFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLmRhdGEgPSBbXTtcXG5cXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZTtcXG4gICAgICAgICAgICAgICAgbGV0IHllYXIgID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xcblxcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geWVhciAtIDM7IGkgPD0geWVhciArIDM7IGkrKykge1xcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5kYXRhLnB1c2goaSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLy8gSW5pdCBDb21ib0JveFxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21ib0JveE1vdW50KHBheWxvYWQsICd5ZWFycycsIHRydWUsICd5ZWFycycsIHllYXIpO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgYnJhbmRzTGlzdCAoaW5zdGFuY2UpIHtcXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdFxcbiAgICAgICAgICAgICAgICBheGlvcyh7XFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnZ2V0LWJyYW5kcy1vbmx5JyxcXG4gICAgICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgICAgICAgICAvLyBJbml0IENvbWJvQm94XFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21ib0JveE1vdW50KHJlc3BvbnNlLmRhdGEuYnJhbmRzLCAnYnJhbmRzJyk7XFxuXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICBwb3N0SW5zZXJ0QnVkZ2V0IChwYXlsb2FkKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5idXR0b25Mb2FkZXIuc3RhcnQoKTtcXG5cXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdFxcbiAgICAgICAgICAgICAgICBheGlvcyh7XFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2J1ZGdldC1pbnNlcnQnLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZFxcbiAgICAgICAgICAgICAgICB9KVxcblxcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idXR0b25Mb2FkZXIuc3RvcCgpO1xcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbi1zZWxlY3RvcicpLmZhZGVJbigxMDAwLCBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGkgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogNXB4O1xcXCIgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+Jyk7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubGFkZGEtYnV0dG9uLXNlbGVjdG9yID4gLmZhLWNoZWNrJykuZmFkZU91dCgxMDAwLCBmdW5jdGlvbigpIHsgJCh0aGlzKS5yZW1vdmVDbGFzcygnZmEtY2hlY2snKSB9KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHN1Y2Nlc3MgbW9kYWxcXG4gICAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1zdWNjZXNzJykubW9kYWwoJ3Nob3cnKTtcXG5cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDE5KSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCA9IFxcXCJZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQsIHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgbG9naW5cXFwiO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1dHRvbkxvYWRlci5zdG9wKCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAkKCcubGFkZGEtYnV0dG9uLXNlbGVjdG9yJykuZmFkZUluKDEwMDAsIGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKCc8aSBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiA1cHg7XFxcIiBjbGFzcz1cXFwiZmEgZmEtY2xvc2VcXFwiPjwvaT4nKS5hZGRDbGFzcygnYnRuLWRhbmdlcicpO1xcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbi1zZWxlY3RvciA+IC5mYS1jbG9zZScpLmZhZGVPdXQoMTAwMCwgZnVuY3Rpb24oKSB7ICQodGhpcykucmVtb3ZlKCk7IH0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5sYWRkYS1idXR0b24tc2VsZWN0b3InKS5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpO1xcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgc3VjY2VzcyBtb2RhbFxcbiAgICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWVycm9yJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICB2YWxpZGF0ZUJlZm9yZVN1Ym1pdChyZXF1ZXN0KSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSB7fTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVxdWVzdCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWRbdmFsdWVdID0gcmVxdWVzdFt2YWx1ZV0ucG9zdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0SW5zZXJ0QnVkZ2V0KHBheWxvYWQpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Zvcm0gU3VibWl0dGVkIScpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUZvcm0gPSBudWxsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCB0aGVtIGVycm9ycyEnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIC8vIEJpbmQgQ3JlYXRlIGJ1dHRvbiBsb2FkZXJcXG4gICAgICAgICAgICB3aW5kb3cuYnV0dG9uTG9hZGVyID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubGFkZGEtYnV0dG9uLXNlbGVjdG9yJykpO1xcblxcbiAgICAgICAgICAgIC8vIEdldCBZZWFyc0xpc3RcXG4gICAgICAgICAgICB0aGlzLnllYXJzTGlzdCh0aGlzKTtcXG5cXG4gICAgICAgICAgICAvLyBHZXQgQnJhbmRzTGlzdFxcbiAgICAgICAgICAgIHRoaXMuYnJhbmRzTGlzdCh0aGlzKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcblxcblwiXX1dKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYTI2YmE1MTRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9yZXF1ZXN0cy9jbG9zZWQtbGlzdC9wcmVzcy9pbnNlcnQvRm9ybXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MSA0MiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEyNmJhNTE0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRm9ybXMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Zvcm1zLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTI2YmE1MTRcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRm9ybXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LWEyNmJhNTE0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvc2VyZ2lvbm9ndWVpcmEvaW1wYWN0L3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9yZXF1ZXN0cy9jbG9zZWQtbGlzdC9wcmVzcy9pbnNlcnQvRm9ybXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRm9ybXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWEyNmJhNTE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTI2YmE1MTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3JlcXVlc3RzL2Nsb3NlZC1saXN0L3ByZXNzL2luc2VydC9Gb3Jtcy52dWVcbi8vIG1vZHVsZSBpZCA9IDcyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImZvcm1zXCJcbiAgICB9XG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpYm94IGZsb2F0LWUtbWFyZ2luc1wiXG4gIH0sIFtfdm0uX20oMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWJveC1jb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCJcbiAgfSwgW19jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZm9ybS1zZWN0aW9uLWZhaXJzXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS52YWxpZGF0ZUJlZm9yZVN1Ym1pdChfdm0ucGF5bG9hZClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGZvcm0tZ3JvdXAgcGFkZGluZy1ib3R0b21cIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKF92bS5wYXlsb2FkLnllYXJzLnZhbHVlKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJ0YWJsZS1jZWxsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5wYXlsb2FkLnllYXJzLmxhYmVsKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnBheWxvYWQueWVhcnMucG9zdCksXG4gICAgICBleHByZXNzaW9uOiBcInBheWxvYWQueWVhcnMucG9zdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0cGlja2VyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBfdm0ucGF5bG9hZC55ZWFycy5ydWxlcyxcbiAgICAgIFwiZGF0YS12di12YWxpZGF0ZS1vblwiOiBfdm0udmFsaWRhdGVGb3JtLFxuICAgICAgXCJ0aXRsZVwiOiBcIlBsZWFzZSBjaG9vc2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgb3B0aW9uc1wiLFxuICAgICAgXCJuYW1lXCI6IF92bS5wYXlsb2FkLnllYXJzLnBvc3QsXG4gICAgICBcImRhdGEtbGl2ZS1zZWFyY2hcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS4kc2V0KF92bS5wYXlsb2FkLnllYXJzLCBcInBvc3RcIiwgJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdKVxuICAgICAgfVxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0ucGF5bG9hZC55ZWFycy5kYXRhKSwgZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IHZhbHVlc1xuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaWRcIjogdmFsdWVzXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyh2YWx1ZXMpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKF92bS5wYXlsb2FkLnllYXJzLnZhbHVlKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMocGF5bG9hZC55ZWFycy52YWx1ZSlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgdGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoX3ZtLnBheWxvYWQueWVhcnMudmFsdWUpKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgZm9ybS1ncm91cCBwYWRkaW5nLWJvdHRvbVwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoX3ZtLnBheWxvYWQuYnJhbmRzLnZhbHVlKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJ0YWJsZS1jZWxsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5wYXlsb2FkLmJyYW5kcy5sYWJlbCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wYXlsb2FkLmJyYW5kcy5wb3N0KSxcbiAgICAgIGV4cHJlc3Npb246IFwicGF5bG9hZC5icmFuZHMucG9zdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0cGlja2VyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBfdm0ucGF5bG9hZC5icmFuZHMucnVsZXMsXG4gICAgICBcImRhdGEtdnYtdmFsaWRhdGUtb25cIjogX3ZtLnZhbGlkYXRlRm9ybSxcbiAgICAgIFwidGl0bGVcIjogXCJQbGVhc2UgY2hvb3NlIG9uZSBvZiB0aGUgZm9sbG93aW5nIG9wdGlvbnNcIixcbiAgICAgIFwibmFtZVwiOiBfdm0ucGF5bG9hZC5icmFuZHMucG9zdCxcbiAgICAgIFwiZGF0YS1saXZlLXNlYXJjaFwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnBheWxvYWQuYnJhbmRzLCBcInBvc3RcIiwgJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdKVxuICAgICAgfVxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0ucGF5bG9hZC5icmFuZHMuZGF0YSksIGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHJldHVybiBfYygnb3B0aW9uJywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZXMudmFsdWVcbiAgICAgIH1cbiAgICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImlkXCI6IHZhbHVlcy52YWx1ZVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3ModmFsdWVzLmxhYmVsKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcyhfdm0ucGF5bG9hZC5icmFuZHMudmFsdWUpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcyhwYXlsb2FkLmJyYW5kcy52YWx1ZSlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgdGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoX3ZtLnBheWxvYWQuYnJhbmRzLnZhbHVlKSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY29sLWxnLTQgcGFkZGluZy1ib3R0b21cIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKF92bS5wYXlsb2FkLmJ1ZGdldC52YWx1ZSlcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucGF5bG9hZC5idWRnZXQubGFiZWwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucGF5bG9hZC5idWRnZXQucG9zdCksXG4gICAgICBleHByZXNzaW9uOiBcInBheWxvYWQuYnVkZ2V0LnBvc3RcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0ucGF5bG9hZC5idWRnZXQudmFsdWUsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogX3ZtLnBheWxvYWQuYnVkZ2V0LnJ1bGVzLFxuICAgICAgXCJkYXRhLXZ2LXZhbGlkYXRlLW9uXCI6IF92bS52YWxpZGF0ZUZvcm0sXG4gICAgICBcImxlYWRUeXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0ucGF5bG9hZC5idWRnZXQubGFiZWxcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucGF5bG9hZC5idWRnZXQucG9zdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS4kc2V0KF92bS5wYXlsb2FkLmJ1ZGdldCwgXCJwb3N0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoX3ZtLnBheWxvYWQuYnVkZ2V0LnZhbHVlKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMocGF5bG9hZC5idWRnZXQudmFsdWUpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KF92bS5wYXlsb2FkLmJ1ZGdldC52YWx1ZSkpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDMpXSldKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGlubW9kYWwgZmFkZVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInotaW5kZXhcIjogXCIyMDk5OTk5NTAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibW9kYWwtc3VjY2Vzc1wiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImxlYWRUeXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIlxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiU3VjY2Vzc1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jaGVjayBmYS01eCB0ZXh0LWluZm9cIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzbWFsbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb250LWJvbGRcIlxuICB9LCBbX3ZtLl92KFwiIEluc2VydCBCdWRnZXQgXCIpXSksIF9jKCdicicpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGVhZFR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsb3NlXCIpXSldKV0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgaW5tb2RhbCBmYWRlXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiei1pbmRleFwiOiBcIjIwOTk5OTk1MCFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJtb2RhbC1lcnJvclwiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImxlYWRUeXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIlxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS13YXJuaW5nIGZhLTV4IHRleHQtZGFuZ2VyXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc21hbGwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihcIiBTb21ldGhpbmcgZ29lcyB3cm9uZ1wiKV0pLCBfYygnYnInKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImxlYWRUeXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbG9zZVwiKV0pXSldKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlib3gtdGl0bGVcIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIiBJbnNlcnQgQnVkZ2V0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWJveC10b29sc1wiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZS1saW5rXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNoZXZyb24tdXBcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZS1saW5rXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCJcbiAgfSldKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhZGRhLWJ1dHRvbiBsYWRkYS1idXR0b24tc2VsZWN0b3IgYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1zdHlsZVwiOiBcInpvb20taW5cIixcbiAgICAgIFwibGVhZFR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkluc2VydCBCdWRnZXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYTI2YmE1MTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hMjZiYTUxNFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3JlcXVlc3RzL2Nsb3NlZC1saXN0L3ByZXNzL2luc2VydC9Gb3Jtcy52dWVcbi8vIG1vZHVsZSBpZCA9IDc3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IiwiLyoqXG4gKiB2ZWUtdmFsaWRhdGUgdjIuMC4wLXJjLjIxXG4gKiAoYykgMjAxNyBBYmRlbHJhaG1hbiBBd2FkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuLy8gXG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUuIHRoZSBuYW1lIG11c3QgYmUga2ViYWItY2FzZS5cbiAqL1xudmFyIGdldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUpIHsgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgoXCJkYXRhLXZ2LVwiICsgbmFtZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgZWl0aGVyIG51bGwgb3IgdW5kZWZpbmVkLlxuICovXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRhdGEgYXR0cmlidXRlLlxuICovXG52YXIgc2V0RGF0YUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbCwgbmFtZSwgdmFsdWUpIHsgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZSgoXCJkYXRhLXZ2LVwiICsgbmFtZSksIHZhbHVlKTsgfTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJveHkgb2JqZWN0IGlmIGF2YWlsYWJsZSBpbiB0aGUgZW52aXJvbm1lbnQuXG4gKi9cbnZhciBjcmVhdGVQcm94eSA9IGZ1bmN0aW9uICh0YXJnZXQsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IGZsYWdzIG9iamVjdC5cbiAqL1xudmFyIGNyZWF0ZUZsYWdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgdW50b3VjaGVkOiB0cnVlLFxuICB0b3VjaGVkOiBmYWxzZSxcbiAgZGlydHk6IGZhbHNlLFxuICBwcmlzdGluZTogdHJ1ZSxcbiAgdmFsaWQ6IG51bGwsXG4gIGludmFsaWQ6IG51bGwsXG4gIHZhbGlkYXRlZDogZmFsc2UsXG4gIHBlbmRpbmc6IGZhbHNlLFxuICByZXF1aXJlZDogZmFsc2Vcbn0pOyB9O1xuXG4vKipcbiAqIFNoYWxsb3cgb2JqZWN0IGNvbXBhcmlzb24uXG4gKi9cbnZhciBpc0VxdWFsID0gZnVuY3Rpb24gKGxocywgcmhzKSB7XG4gIGlmIChsaHMgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmhzIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIGlzRXF1YWwobGhzLnNvdXJjZSwgcmhzLnNvdXJjZSkgJiYgaXNFcXVhbChsaHMuZmxhZ3MsIHJocy5mbGFncyk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShsaHMpICYmIEFycmF5LmlzQXJyYXkocmhzKSkge1xuICAgIGlmIChsaHMubGVuZ3RoICE9PSByaHMubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghaXNFcXVhbChsaHNbaV0sIHJoc1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaWYgYm90aCBhcmUgb2JqZWN0cywgY29tcGFyZSBlYWNoIGtleSByZWN1cnNpdmVseS5cbiAgaWYgKGlzT2JqZWN0KGxocykgJiYgaXNPYmplY3QocmhzKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhsaHMpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBpc0VxdWFsKGxoc1trZXldLCByaHNba2V5XSk7XG4gICAgfSkgJiYgT2JqZWN0LmtleXMocmhzKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gaXNFcXVhbChsaHNba2V5XSwgcmhzW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxocyA9PT0gcmhzO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBpbnB1dCBmaWVsZCBzY29wZS5cbiAqL1xudmFyIGdldFNjb3BlID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciBzY29wZSA9IGdldERhdGFBdHRyaWJ1dGUoZWwsICdzY29wZScpO1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpICYmIGVsLmZvcm0pIHtcbiAgICBzY29wZSA9IGdldERhdGFBdHRyaWJ1dGUoZWwuZm9ybSwgJ3Njb3BlJyk7XG4gIH1cblxuICByZXR1cm4gIWlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSA/IHNjb3BlIDogbnVsbDtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgaW4gYW4gb2JqZWN0IHNhZmVseS5cbiAqL1xudmFyIGdldFBhdGggPSBmdW5jdGlvbiAocGF0aCwgdGFyZ2V0LCBkZWYpIHtcbiAgaWYgKCBkZWYgPT09IHZvaWQgMCApIGRlZiA9IHVuZGVmaW5lZDtcblxuICBpZiAoIXBhdGggfHwgIXRhcmdldCkgeyByZXR1cm4gZGVmOyB9XG5cbiAgdmFyIHZhbHVlID0gdGFyZ2V0O1xuICBwYXRoLnNwbGl0KCcuJykuZXZlcnkoZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoISBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3ApICYmIHZhbHVlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gZGVmO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZVtwcm9wXTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBwYXRoIGV4aXN0cyB3aXRoaW4gYW4gb2JqZWN0LlxuICovXG52YXIgaGFzUGF0aCA9IGZ1bmN0aW9uIChwYXRoLCB0YXJnZXQpIHtcbiAgdmFyIG9iaiA9IHRhcmdldDtcbiAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5ldmVyeShmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmICghIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb2JqID0gb2JqW3Byb3BdO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBydWxlIHN0cmluZyBleHByZXNzaW9uLlxuICovXG52YXIgcGFyc2VSdWxlID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgbmFtZSA9IHJ1bGUuc3BsaXQoJzonKVswXTtcblxuICBpZiAofnJ1bGUuaW5kZXhPZignOicpKSB7XG4gICAgcGFyYW1zID0gcnVsZS5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZTogbmFtZSwgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogRGVib3VuY2VzIGEgZnVuY3Rpb24uXG4gKi9cbnZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbiwgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGlmICggd2FpdCA9PT0gdm9pZCAwICkgd2FpdCA9IDA7XG4gIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSBmYWxzZTtcblxuICBpZiAod2FpdCA9PT0gMCkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgeyBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoY2FsbE5vdykgeyBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9XG4gIH07XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIGdpdmVuIHJ1bGVzIGV4cHJlc3Npb24uXG4gKi9cbnZhciBub3JtYWxpemVSdWxlcyA9IGZ1bmN0aW9uIChydWxlcykge1xuICAvLyBpZiBmYWxzeSB2YWx1ZSByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuICBpZiAoIXJ1bGVzKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHJ1bGVzKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocnVsZXMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgaWYgKHJ1bGVzW2N1cnJdID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJ1bGVzW2N1cnJdKSkge1xuICAgICAgICBwYXJhbXMgPSBydWxlc1tjdXJyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IFtydWxlc1tjdXJyXV07XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGlmIChydWxlc1tjdXJyXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcHJldltjdXJyXSA9IHBhcmFtcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBydWxlcyAhPT0gJ3N0cmluZycpIHtcbiAgICB3YXJuKCdydWxlcyBtdXN0IGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBvYmplY3QuJyk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzLnNwbGl0KCd8JykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBydWxlKSB7XG4gICAgdmFyIHBhcnNlZFJ1bGUgPSBwYXJzZVJ1bGUocnVsZSk7XG4gICAgaWYgKCFwYXJzZWRSdWxlLm5hbWUpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHByZXZbcGFyc2VkUnVsZS5uYW1lXSA9IHBhcnNlZFJ1bGUucGFyYW1zO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIEVtaXRzIGEgd2FybmluZyB0byB0aGUgY29uc29sZS5cbiAqL1xudmFyIHdhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBjb25zb2xlLndhcm4oKFwiW3ZlZS12YWxpZGF0ZV0gXCIgKyBtZXNzYWdlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJyYW5kZWQgZXJyb3Igb2JqZWN0LlxuICovXG52YXIgY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gbmV3IEVycm9yKChcIlt2ZWUtdmFsaWRhdGVdIFwiICsgbWVzc2FnZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICovXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICEgQXJyYXkuaXNBcnJheShvYmopOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGZ1bmN0aW9uIGlzIGNhbGxhYmxlLlxuICovXG52YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmdW5jKSB7IHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBlbGVtZW50IGhhcyB0aGUgY3NzIGNsYXNzIG9uIGl0LlxuICovXG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSkpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIHRvIHRoZSBlbGVtZW50LlxuICovXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gKi9cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSk7XG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzIG5hbWUgb24gdGhlIGlucHV0IGRlcGVuZGluZyBvbiB0aGUgc3RhdHVzIGZsYWcuXG4gKi9cbnZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lLCBzdGF0dXMpIHtcbiAgaWYgKCFlbCB8fCAhY2xhc3NOYW1lKSB7IHJldHVybjsgfVxuXG4gIGlmIChzdGF0dXMpIHtcbiAgICByZXR1cm4gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYXJyYXksIHByb3ZpZGVzIGEgc2ltcGxlIHBvbHlmaWxsIGZvciBBcnJheS5mcm9tXG4gKi9cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24gKGFycmF5TGlrZSkge1xuICBpZiAoaXNDYWxsYWJsZShBcnJheS5mcm9tKSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5TGlrZSk7XG4gIH1cblxuICB2YXIgYXJyYXkgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKGFycmF5TGlrZVtpXSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59O1xuXG4vKipcbiAqIEFzc2lnbiBwb2x5ZmlsbCBmcm9tIHRoZSBtZG4uXG4gKi9cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHZhciBvdGhlcnMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gIHdoaWxlICggbGVuLS0gPiAwICkgb3RoZXJzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChpc0NhbGxhYmxlKE9iamVjdC5hc3NpZ24pKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbIHRhcmdldCBdLmNvbmNhdCggb3RoZXJzICkpO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgIGlmIChhcmcgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGFyZ1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIHRvO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWQuXG4gKi9cbnZhciB1bmlxSWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoXCJfXCIgKyAoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpKSk7IH07XG5cbi8qKlxuICogZmluZHMgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZSBjYWxsYmFjaywgcG9seWZpbGxzIGFycmF5LmZpbmRcbiAqL1xudmFyIGZpbmQgPSBmdW5jdGlvbiAoYXJyYXlMaWtlLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGFycmF5ID0gdG9BcnJheShhcnJheUxpa2UpO1xuXG4gIGlmIChpc0NhbGxhYmxlKGFycmF5LmZpbmQpKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmQocHJlZGljYXRlKTtcbiAgfVxuXG4gIHZhciByZXN1bHQ7XG4gIGFycmF5LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICByZXN1bHQgPSBpdGVtO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3VpdGFibGUgZXZlbnQgbmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnQuXG4gKi9cbnZhciBnZXRJbnB1dEV2ZW50TmFtZSA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAoZWwgJiYgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IH5bJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2ZpbGUnXS5pbmRleE9mKGVsLnR5cGUpKSkge1xuICAgIHJldHVybiAnY2hhbmdlJztcbiAgfVxuXG4gIHJldHVybiAnaW5wdXQnO1xufTtcblxudmFyIGlzQnVpbHRJbkNvbXBvbmVudCA9IGZ1bmN0aW9uICh2bm9kZSkge1xuICBpZiAoIXZub2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHRhZyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIHJldHVybiAva2VlcC1hbGl2ZXx0cmFuc2l0aW9ufHRyYW5zaXRpb24tZ3JvdXAvLnRlc3QodGFnKTtcbn07XG5cbi8vIFxuXG52YXIgRXJyb3JCYWcgPSBmdW5jdGlvbiBFcnJvckJhZyAoKSB7XG4gIHRoaXMuaXRlbXMgPSBbXTtcbn07XG5cbi8qKlxuICogQWRkcyBhbiBlcnJvciB0byB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGVycm9yKSB7XG4gIC8vIGhhbmRsZSBvbGQgc2lnbmF0dXJlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBlcnJvciA9IHtcbiAgICAgIGZpZWxkOiBhcmd1bWVudHNbMF0sXG4gICAgICBtc2c6IGFyZ3VtZW50c1sxXSxcbiAgICAgIHJ1bGU6IGFyZ3VtZW50c1syXSxcbiAgICAgIHNjb3BlOiAhaXNOdWxsT3JVbmRlZmluZWQoYXJndW1lbnRzWzNdKSA/IGFyZ3VtZW50c1szXSA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgZXJyb3Iuc2NvcGUgPSAhaXNOdWxsT3JVbmRlZmluZWQoZXJyb3Iuc2NvcGUpID8gZXJyb3Iuc2NvcGUgOiBudWxsO1xuICB0aGlzLml0ZW1zLnB1c2goZXJyb3IpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIGEgZmllbGQgZXJyb3Igd2l0aCB0aGUgbmV3IGZpZWxkIHNjb3BlLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChpZCwgZXJyb3IpIHtcbiAgdmFyIGl0ZW0gPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG4gIGlmICghaXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpZHggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGlkeCwgMSk7XG4gIGl0ZW0uc2NvcGUgPSBlcnJvci5zY29wZTtcbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuLyoqXG4gKiBHZXRzIGFsbCBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIGFsbCAoc2NvcGUpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tc2c7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLm1zZzsgfSk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBhcmUgYW55IGVycm9ycyBpbiB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBhbnkgKHNjb3BlKSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChzY29wZSkpIHtcbiAgICByZXR1cm4gISF0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiAhIXRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSkge1xuICAgIHNjb3BlID0gbnVsbDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0aGlzJDEuaXRlbXNbaV0uc2NvcGUgPT09IHNjb3BlKSB7XG4gICAgICB0aGlzJDEuaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgLS1pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDb2xsZWN0cyBlcnJvcnMgaW50byBncm91cHMgb3IgZm9yIGEgc3BlY2lmaWMgZmllbGQuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb2xsZWN0ID0gZnVuY3Rpb24gY29sbGVjdCAoZmllbGQsIHNjb3BlLCBtYXApIHtcbiAgICBpZiAoIG1hcCA9PT0gdm9pZCAwICkgbWFwID0gdHJ1ZTtcblxuICBpZiAoIWZpZWxkKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB7fTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghIGNvbGxlY3Rpb25bZS5maWVsZF0pIHtcbiAgICAgICAgY29sbGVjdGlvbltlLmZpZWxkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb2xsZWN0aW9uW2UuZmllbGRdLnB1c2gobWFwID8gZS5tc2cgOiBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgZmllbGQgPSAhaXNOdWxsT3JVbmRlZmluZWQoZmllbGQpID8gU3RyaW5nKGZpZWxkKSA6IGZpZWxkO1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZDsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiAobWFwID8gZS5tc2cgOiBlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkICYmIGUuc2NvcGUgPT09IHNjb3BlOyB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChtYXAgPyBlLm1zZyA6IGUpOyB9KTtcbn07XG4vKipcbiAqIEdldHMgdGhlIGludGVybmFsIGFycmF5IGxlbmd0aC5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQgKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEZpbmRzIGFuZCBmZXRjaGVzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkIGlkLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RCeUlkID0gZnVuY3Rpb24gZmlyc3RCeUlkIChpZCkge1xuICB2YXIgZXJyb3IgPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG5cbiAgcmV0dXJuIGVycm9yID8gZXJyb3IubXNnIDogbnVsbDtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgYSBzcGVjaWZpYyBmaWVsZC5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gZmlyc3QgKGZpZWxkLCBzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICBmaWVsZCA9ICFpc051bGxPclVuZGVmaW5lZChmaWVsZCkgPyBTdHJpbmcoZmllbGQpIDogZmllbGQ7XG4gIHZhciBzZWxlY3RvciA9IHRoaXMuX3NlbGVjdG9yKGZpZWxkKTtcbiAgdmFyIHNjb3BlZCA9IHRoaXMuX3Njb3BlKGZpZWxkKTtcblxuICBpZiAoc2NvcGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuZmlyc3Qoc2NvcGVkLm5hbWUsIHNjb3BlZC5zY29wZSk7XG4gICAgLy8gaWYgc3VjaCByZXN1bHQgZXhpc3QsIHJldHVybiBpdC4gb3RoZXJ3aXNlIGl0IGNvdWxkIGJlIGEgZmllbGQuXG4gICAgLy8gd2l0aCBkb3QgaW4gaXRzIG5hbWUuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdEJ5UnVsZShzZWxlY3Rvci5uYW1lLCBzZWxlY3Rvci5ydWxlLCBzY29wZSk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcyQxLml0ZW1zW2ldLmZpZWxkID09PSBmaWVsZCAmJiAodGhpcyQxLml0ZW1zW2ldLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgIHJldHVybiB0aGlzJDEuaXRlbXNbaV0ubXNnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlcnJvciBydWxlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdFJ1bGUgPSBmdW5jdGlvbiBmaXJzdFJ1bGUgKGZpZWxkLCBzY29wZSkge1xuICB2YXIgZXJyb3JzID0gdGhpcy5jb2xsZWN0KGZpZWxkLCBzY29wZSwgZmFsc2UpO1xuXG4gIHJldHVybiAoZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnNbMF0ucnVsZSkgfHwgbnVsbDtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBpbnRlcm5hbCBhcnJheSBoYXMgYXQgbGVhc3Qgb25lIGVycm9yIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChmaWVsZCwgc2NvcGUpIHtcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgcmV0dXJuICEhdGhpcy5maXJzdChmaWVsZCwgc2NvcGUpO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciBhIHNwZWNpZmljIGZpZWxkIGFuZCBhIHJ1bGUuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdEJ5UnVsZSA9IGZ1bmN0aW9uIGZpcnN0QnlSdWxlIChuYW1lLCBydWxlLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICB2YXIgZXJyb3IgPSB0aGlzLmNvbGxlY3QobmFtZSwgc2NvcGUsIGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUucnVsZSA9PT0gcnVsZTsgfSlbMF07XG5cbiAgcmV0dXJuIChlcnJvciAmJiBlcnJvci5tc2cpIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIGEgc3BlY2lmaWMgZmllbGQgdGhhdCBub3QgbWF0Y2ggdGhlIHJ1bGUuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdE5vdCA9IGZ1bmN0aW9uIGZpcnN0Tm90IChuYW1lLCBydWxlLCBzY29wZSkge1xuICAgIGlmICggcnVsZSA9PT0gdm9pZCAwICkgcnVsZSA9ICdyZXF1aXJlZCc7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIHZhciBlcnJvciA9IHRoaXMuY29sbGVjdChuYW1lLCBzY29wZSwgZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5ydWxlICE9PSBydWxlOyB9KVswXTtcblxuICByZXR1cm4gKGVycm9yICYmIGVycm9yLm1zZykgfHwgbnVsbDtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBlcnJvcnMgYnkgbWF0Y2hpbmcgYWdhaW5zdCB0aGUgaWQuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gcmVtb3ZlQnlJZCAoaWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcyQxLml0ZW1zW2ldLmlkID09PSBpZCkge1xuICAgICAgdGhpcyQxLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIC0taTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgZXJyb3IgbWVzc2FnZXMgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWMgZmllbGQuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKGZpZWxkLCBzY29wZSwgaWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBmaWVsZCA9ICFpc051bGxPclVuZGVmaW5lZChmaWVsZCkgPyBTdHJpbmcoZmllbGQpIDogZmllbGQ7XG4gIHZhciByZW1vdmVDb25kaXRpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmlkICYmIGlkKSB7XG4gICAgICByZXR1cm4gZS5pZCA9PT0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChzY29wZSkpIHtcbiAgICAgIHJldHVybiBlLmZpZWxkID09PSBmaWVsZCAmJiBlLnNjb3BlID09PSBzY29wZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gbnVsbDtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocmVtb3ZlQ29uZGl0aW9uKHRoaXMkMS5pdGVtc1tpXSkpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmllbGQgYXR0cmlidXRlcyBpZiB0aGVyZSdzIGEgcnVsZSBzZWxlY3Rvci5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLl9zZWxlY3RvciA9IGZ1bmN0aW9uIF9zZWxlY3RvciAoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgbmFtZSA9IHJlZlswXTtcbiAgICAgIHZhciBydWxlID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgcnVsZTogcnVsZSB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmllbGQgc2NvcGUgaWYgc3BlY2lmaWVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLl9zY29wZSA9IGZ1bmN0aW9uIF9zY29wZSAoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgc2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgbmFtZSA9IHJlZi5zbGljZSgxKTtcblxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUuam9pbignLicpLCBzY29wZTogc2NvcGUgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLy8gXG5cbnZhciBEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gRGljdGlvbmFyeSAoZGljdGlvbmFyeSkge1xuICBpZiAoIGRpY3Rpb25hcnkgPT09IHZvaWQgMCApIGRpY3Rpb25hcnkgPSB7fTtcblxuICB0aGlzLmNvbnRhaW5lciA9IHt9O1xuICB0aGlzLm1lcmdlKGRpY3Rpb25hcnkpO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuaGFzTG9jYWxlID0gZnVuY3Rpb24gaGFzTG9jYWxlIChsb2NhbGUpIHtcbiAgcmV0dXJuICEhdGhpcy5jb250YWluZXJbbG9jYWxlXTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBzZXREYXRlRm9ybWF0IChsb2NhbGUsIGZvcm1hdCkge1xuICBpZiAoIXRoaXMuY29udGFpbmVyW2xvY2FsZV0pIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge307XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXQgPSBmb3JtYXQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24gZ2V0RGF0ZUZvcm1hdCAobG9jYWxlKSB7XG4gIGlmICghdGhpcy5jb250YWluZXJbbG9jYWxlXSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5kYXRlRm9ybWF0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UgKGxvY2FsZSwga2V5LCBmYWxsYmFjaykge1xuICBpZiAoIXRoaXMuaGFzTWVzc2FnZShsb2NhbGUsIGtleSkpIHtcbiAgICByZXR1cm4gZmFsbGJhY2sgfHwgdGhpcy5fZ2V0RGVmYXVsdE1lc3NhZ2UobG9jYWxlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV07XG59O1xuXG4vKipcbiAqIEdldHMgYSBzcGVjaWZpYyBtZXNzYWdlIGZvciBmaWVsZC4gZmFsbHMgYmFjayB0byB0aGUgcnVsZSBtZXNzYWdlLlxuICovXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRGaWVsZE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRGaWVsZE1lc3NhZ2UgKGxvY2FsZSwgZmllbGQsIGtleSkge1xuICBpZiAoIXRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlKGxvY2FsZSwga2V5KTtcbiAgfVxuXG4gIHZhciBkaWN0ID0gdGhpcy5jb250YWluZXJbbG9jYWxlXS5jdXN0b20gJiYgdGhpcy5jb250YWluZXJbbG9jYWxlXS5jdXN0b21bZmllbGRdO1xuICBpZiAoIWRpY3QgfHwgIWRpY3Rba2V5XSkge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2UobG9jYWxlLCBrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGRpY3Rba2V5XTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLl9nZXREZWZhdWx0TWVzc2FnZSA9IGZ1bmN0aW9uIF9nZXREZWZhdWx0TWVzc2FnZSAobG9jYWxlKSB7XG4gIGlmICh0aGlzLmhhc01lc3NhZ2UobG9jYWxlLCAnX2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzLl9kZWZhdWx0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmVuLm1lc3NhZ2VzLl9kZWZhdWx0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlIChsb2NhbGUsIGtleSwgZmFsbGJhY2spIHtcbiAgICBpZiAoIGZhbGxiYWNrID09PSB2b2lkIDAgKSBmYWxsYmFjayA9ICcnO1xuXG4gIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUobG9jYWxlLCBrZXkpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuaGFzTWVzc2FnZSA9IGZ1bmN0aW9uIGhhc01lc3NhZ2UgKGxvY2FsZSwga2V5KSB7XG4gIHJldHVybiAhISAoXG4gICAgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXMgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV1cbiAgKTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZSAobG9jYWxlLCBrZXkpIHtcbiAgcmV0dXJuICEhIChcbiAgICB0aGlzLmhhc0xvY2FsZShsb2NhbGUpICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV1cbiAgKTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UgKGRpY3Rpb25hcnkpIHtcbiAgdGhpcy5fbWVyZ2UodGhpcy5jb250YWluZXIsIGRpY3Rpb25hcnkpO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0TWVzc2FnZSA9IGZ1bmN0aW9uIHNldE1lc3NhZ2UgKGxvY2FsZSwga2V5LCBtZXNzYWdlKSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge1xuICAgICAgbWVzc2FnZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9O1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldID0gbWVzc2FnZTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSAobG9jYWxlLCBrZXksIGF0dHJpYnV0ZSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldID0gYXR0cmlidXRlO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuX21lcmdlID0gZnVuY3Rpb24gX21lcmdlICh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgaWYgKCEgdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgYXNzaWduKHRhcmdldCwgKCBvYmogPSB7fSwgb2JqW2tleV0gPSB7fSwgb2JqICkpO1xuICAgICAgICAgIHZhciBvYmo7XG4gICAgICB9XG5cbiAgICAgIHRoaXMkMS5fbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhc3NpZ24odGFyZ2V0LCAoIG9iaiQxID0ge30sIG9iaiQxW2tleV0gPSBzb3VyY2Vba2V5XSwgb2JqJDEgKSk7XG4gICAgICB2YXIgb2JqJDE7XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vLyBcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgZGVsYXk6IDAsXG4gIGVycm9yQmFnTmFtZTogJ2Vycm9ycycsXG4gIGRpY3Rpb25hcnk6IG51bGwsXG4gIHN0cmljdDogdHJ1ZSxcbiAgZmllbGRzQmFnTmFtZTogJ2ZpZWxkcycsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICBjbGFzc05hbWVzOiBudWxsLFxuICBldmVudHM6ICdpbnB1dHxibHVyJyxcbiAgaW5qZWN0OiB0cnVlLFxuICBmYXN0RXhpdDogdHJ1ZSxcbiAgYXJpYTogdHJ1ZSxcbiAgdmFsaWRpdHk6IGZhbHNlXG59O1xuXG52YXIgY3VycmVudENvbmZpZyA9IGFzc2lnbih7fSwgZGVmYXVsdENvbmZpZyk7XG5cbnZhciBDb25maWcgPSBmdW5jdGlvbiBDb25maWcgKCkge307XG5cbnZhciBzdGF0aWNBY2Nlc3NvcnMkMSA9IHsgZGVmYXVsdDoge30sY3VycmVudDoge30gfTtcblxuc3RhdGljQWNjZXNzb3JzJDEuZGVmYXVsdC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZhdWx0Q29uZmlnO1xufTtcblxuc3RhdGljQWNjZXNzb3JzJDEuY3VycmVudC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50Q29uZmlnO1xufTtcblxuLyoqXG4gKiBNZXJnZXMgdGhlIGNvbmZpZyB3aXRoIGEgbmV3IG9uZS5cbiAqL1xuQ29uZmlnLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UgKGNvbmZpZykge1xuICBjdXJyZW50Q29uZmlnID0gYXNzaWduKHt9LCBjdXJyZW50Q29uZmlnLCBjb25maWcpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgd29ya2luZyBjb25maWcgZnJvbSBhIFZ1ZSBpbnN0YW5jZS5cbiAqL1xuQ29uZmlnLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlIChjb250ZXh0KSB7XG4gIHZhciBzZWxmQ29uZmlnID0gZ2V0UGF0aCgnJG9wdGlvbnMuJF92ZWVWYWxpZGF0ZScsIGNvbnRleHQsIHt9KTtcblxuICByZXR1cm4gYXNzaWduKHt9LCBDb25maWcuY3VycmVudCwgc2VsZkNvbmZpZyk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggQ29uZmlnLCBzdGF0aWNBY2Nlc3NvcnMkMSApO1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgb3B0aW9ucyByZXF1aXJlZCB0byBjb25zdHJ1Y3QgYSBmaWVsZC5cbiAqL1xudmFyIEdlbmVyYXRvciA9IGZ1bmN0aW9uIEdlbmVyYXRvciAoKSB7fTtcblxuR2VuZXJhdG9yLmdlbmVyYXRlID0gZnVuY3Rpb24gZ2VuZXJhdGUgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICB2YXIgbW9kZWwgPSBHZW5lcmF0b3IucmVzb2x2ZU1vZGVsKGJpbmRpbmcsIHZub2RlKTtcbiAgdmFyIG9wdGlvbnMgPSBDb25maWcucmVzb2x2ZSh2bm9kZS5jb250ZXh0KTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IEdlbmVyYXRvci5yZXNvbHZlTmFtZShlbCwgdm5vZGUpLFxuICAgIGVsOiBlbCxcbiAgICBsaXN0ZW46ICFiaW5kaW5nLm1vZGlmaWVycy5kaXNhYmxlLFxuICAgIHNjb3BlOiBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSksXG4gICAgdm06IEdlbmVyYXRvci5tYWtlVk0odm5vZGUuY29udGV4dCksXG4gICAgZXhwcmVzc2lvbjogYmluZGluZy52YWx1ZSxcbiAgICBjb21wb25lbnQ6IHZub2RlLmNoaWxkLFxuICAgIGNsYXNzZXM6IG9wdGlvbnMuY2xhc3NlcyxcbiAgICBjbGFzc05hbWVzOiBvcHRpb25zLmNsYXNzTmFtZXMsXG4gICAgZ2V0dGVyOiBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbCwgdm5vZGUsIG1vZGVsKSxcbiAgICBldmVudHM6IEdlbmVyYXRvci5yZXNvbHZlRXZlbnRzKGVsLCB2bm9kZSkgfHwgb3B0aW9ucy5ldmVudHMsXG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIGRlbGF5OiBHZW5lcmF0b3IucmVzb2x2ZURlbGF5KGVsLCB2bm9kZSwgb3B0aW9ucyksXG4gICAgcnVsZXM6IEdlbmVyYXRvci5yZXNvbHZlUnVsZXMoZWwsIGJpbmRpbmcpLFxuICAgIGluaXRpYWw6ICEhYmluZGluZy5tb2RpZmllcnMuaW5pdGlhbCxcbiAgICBhbGlhczogR2VuZXJhdG9yLnJlc29sdmVBbGlhcyhlbCwgdm5vZGUpLFxuICAgIHZhbGlkaXR5OiBvcHRpb25zLnZhbGlkaXR5LFxuICAgIGFyaWE6IG9wdGlvbnMuYXJpYSxcbiAgICBpbml0aWFsVmFsdWU6IEdlbmVyYXRvci5yZXNvbHZlSW5pdGlhbFZhbHVlKHZub2RlKVxuICB9O1xufTtcblxuR2VuZXJhdG9yLmdldEN0b3JDb25maWcgPSBmdW5jdGlvbiBnZXRDdG9yQ29uZmlnICh2bm9kZSkge1xuICBpZiAoIXZub2RlLmNoaWxkKSB7IHJldHVybiBudWxsOyB9XG5cbiAgdmFyIGNvbmZpZyA9IGdldFBhdGgoJ2NoaWxkLiRvcHRpb25zLiRfdmVlVmFsaWRhdGUnLCB2bm9kZSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gYmluZGluZ1xuICovXG5HZW5lcmF0b3IucmVzb2x2ZVJ1bGVzID0gZnVuY3Rpb24gcmVzb2x2ZVJ1bGVzIChlbCwgYmluZGluZykge1xuICBpZiAoIWJpbmRpbmcgfHwgIWJpbmRpbmcuZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAncnVsZXMnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcbiAgfVxuXG4gIGlmICh+WydzdHJpbmcnLCAnb2JqZWN0J10uaW5kZXhPZih0eXBlb2YgYmluZGluZy52YWx1ZS5ydWxlcykpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZS5ydWxlcztcbiAgfVxuXG4gIHJldHVybiBiaW5kaW5nLnZhbHVlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlSW5pdGlhbFZhbHVlID0gZnVuY3Rpb24gcmVzb2x2ZUluaXRpYWxWYWx1ZSAodm5vZGUpIHtcbiAgdmFyIG1vZGVsID0gdm5vZGUuZGF0YS5tb2RlbCB8fCBmaW5kKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ21vZGVsJzsgfSk7XG5cbiAgcmV0dXJuIG1vZGVsICYmIG1vZGVsLnZhbHVlO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbm9uLWNpcmN1bGFyIHBhcnRpYWwgVk0gaW5zdGFuY2UgZnJvbSBhIFZ1ZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7Kn0gdm1cbiAqL1xuR2VuZXJhdG9yLm1ha2VWTSA9IGZ1bmN0aW9uIG1ha2VWTSAodm0pIHtcbiAgcmV0dXJuIHtcbiAgICBnZXQgJGVsICgpIHtcbiAgICAgIHJldHVybiB2bS4kZWw7XG4gICAgfSxcbiAgICBnZXQgJHJlZnMgKCkge1xuICAgICAgcmV0dXJuIHZtLiRyZWZzO1xuICAgIH0sXG4gICAgJHdhdGNoOiB2bS4kd2F0Y2ggPyB2bS4kd2F0Y2guYmluZCh2bSkgOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAkdmFsaWRhdG9yOiB2bS4kdmFsaWRhdG9yID8ge1xuICAgICAgZXJyb3JzOiB2bS4kdmFsaWRhdG9yLmVycm9ycyxcbiAgICAgIHZhbGlkYXRlOiB2bS4kdmFsaWRhdG9yLnZhbGlkYXRlLmJpbmQodm0uJHZhbGlkYXRvciksXG4gICAgICB1cGRhdGU6IHZtLiR2YWxpZGF0b3IudXBkYXRlLmJpbmQodm0uJHZhbGlkYXRvcilcbiAgICB9IDogbnVsbFxuICB9O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgZGVsYXkgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5HZW5lcmF0b3IucmVzb2x2ZURlbGF5ID0gZnVuY3Rpb24gcmVzb2x2ZURlbGF5IChlbCwgdm5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ2RlbGF5JykgfHwgKHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtZGVsYXknXSkgfHwgb3B0aW9ucy5kZWxheTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGFsaWFzIGZvciB0aGUgZmllbGQuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gYWxpYXMgZ2V0dGVyXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlQWxpYXMgPSBmdW5jdGlvbiByZXNvbHZlQWxpYXMgKGVsLCB2bm9kZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ2FzJykgfHwgKHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtYXMnXSkgfHwgZWwudGl0bGUgfHwgbnVsbDsgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGV2ZW50cyB0byB2YWxpZGF0ZSBpbiByZXNwb25zZSB0by5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVFdmVudHMgPSBmdW5jdGlvbiByZXNvbHZlRXZlbnRzIChlbCwgdm5vZGUpIHtcbiAgdmFyIGV2ZW50cyA9IGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWxpZGF0ZS1vbicpO1xuXG4gIGlmICghZXZlbnRzICYmIHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycykge1xuICAgIGV2ZW50cyA9IHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di12YWxpZGF0ZS1vbiddO1xuICB9XG5cbiAgaWYgKCFldmVudHMgJiYgdm5vZGUuY2hpbGQpIHtcbiAgICB2YXIgY29uZmlnID0gR2VuZXJhdG9yLmdldEN0b3JDb25maWcodm5vZGUpO1xuICAgIGV2ZW50cyA9IGNvbmZpZyAmJiBjb25maWcuZXZlbnRzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50cztcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHNjb3BlIGZvciB0aGUgZmllbGQuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IGJpbmRpbmdcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVTY29wZSA9IGZ1bmN0aW9uIHJlc29sdmVTY29wZSAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKCB2bm9kZSA9PT0gdm9pZCAwICkgdm5vZGUgPSB7fTtcblxuICB2YXIgc2NvcGUgPSBudWxsO1xuICBpZiAoaXNPYmplY3QoYmluZGluZy52YWx1ZSkpIHtcbiAgICBzY29wZSA9IGJpbmRpbmcudmFsdWUuc2NvcGU7XG4gIH1cblxuICBpZiAodm5vZGUuY2hpbGQgJiYgaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgc2NvcGUgPSB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXNjb3BlJ107XG4gIH1cblxuICByZXR1cm4gIWlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSA/IHNjb3BlIDogZ2V0U2NvcGUoZWwpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG5vZGUgZGlyZWN0aXZlcyBjb250YWlucyBhIHYtbW9kZWwgb3IgYSBzcGVjaWZpZWQgYXJnLlxuICogQXJncyB0YWtlIHByaW9yaXR5IG92ZXIgbW9kZWxzLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVNb2RlbCA9IGZ1bmN0aW9uIHJlc29sdmVNb2RlbCAoYmluZGluZywgdm5vZGUpIHtcbiAgaWYgKGJpbmRpbmcuYXJnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcuYXJnO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KGJpbmRpbmcudmFsdWUpICYmIGJpbmRpbmcudmFsdWUuYXJnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcudmFsdWUuYXJnO1xuICB9XG5cbiAgdmFyIG1vZGVsID0gdm5vZGUuZGF0YS5tb2RlbCB8fCBmaW5kKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ21vZGVsJzsgfSk7XG4gIGlmICghbW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB3YXRjaGFibGUgPSAvXlthLXpfXStbMC05XSooXFx3KlxcLlthLXpfXVxcdyopKiQvaS50ZXN0KG1vZGVsLmV4cHJlc3Npb24pICYmIGhhc1BhdGgobW9kZWwuZXhwcmVzc2lvbiwgdm5vZGUuY29udGV4dCk7XG5cbiAgaWYgKCF3YXRjaGFibGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBtb2RlbC5leHByZXNzaW9uO1xufTtcblxuLyoqXG4gICAqIFJlc29sdmVzIHRoZSBmaWVsZCBuYW1lIHRvIHRyaWdnZXIgdmFsaWRhdGlvbnMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGZpZWxkIG5hbWUuXG4gICAqL1xuR2VuZXJhdG9yLnJlc29sdmVOYW1lID0gZnVuY3Rpb24gcmVzb2x2ZU5hbWUgKGVsLCB2bm9kZSkge1xuICB2YXIgbmFtZSA9IGdldERhdGFBdHRyaWJ1dGUoZWwsICduYW1lJyk7XG5cbiAgaWYgKCFuYW1lICYmICF2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBlbC5uYW1lO1xuICB9XG5cbiAgaWYgKCFuYW1lICYmIHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycykge1xuICAgIG5hbWUgPSB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtbmFtZSddIHx8IHZub2RlLmNoaWxkLiRhdHRyc1snbmFtZSddO1xuICB9XG5cbiAgaWYgKCFuYW1lICYmIHZub2RlLmNoaWxkKSB7XG4gICAgdmFyIGNvbmZpZyA9IEdlbmVyYXRvci5nZXRDdG9yQ29uZmlnKHZub2RlKTtcbiAgICBpZiAoY29uZmlnICYmIGlzQ2FsbGFibGUoY29uZmlnLm5hbWUpKSB7XG4gICAgICB2YXIgYm91bmRHZXR0ZXIgPSBjb25maWcubmFtZS5iaW5kKHZub2RlLmNoaWxkKTtcblxuICAgICAgcmV0dXJuIGJvdW5kR2V0dGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZub2RlLmNoaWxkLm5hbWU7XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbHVlIGdldHRlciBpbnB1dCB0eXBlLlxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUdldHRlciA9IGZ1bmN0aW9uIHJlc29sdmVHZXR0ZXIgKGVsLCB2bm9kZSwgbW9kZWwpIHtcbiAgaWYgKG1vZGVsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRQYXRoKG1vZGVsLCB2bm9kZS5jb250ZXh0KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHZub2RlLmNoaWxkKSB7XG4gICAgdmFyIHBhdGggPSBnZXREYXRhQXR0cmlidXRlKGVsLCAndmFsdWUtcGF0aCcpIHx8ICh2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXZhbHVlLXBhdGgnXSk7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXRoKHBhdGgsIHZub2RlLmNoaWxkKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9IEdlbmVyYXRvci5nZXRDdG9yQ29uZmlnKHZub2RlKTtcbiAgICBpZiAoY29uZmlnICYmIGlzQ2FsbGFibGUoY29uZmlnLnZhbHVlKSkge1xuICAgICAgdmFyIGJvdW5kR2V0dGVyID0gY29uZmlnLnZhbHVlLmJpbmQodm5vZGUuY2hpbGQpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYm91bmRHZXR0ZXIoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2bm9kZS5jaGlsZC52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgc3dpdGNoIChlbC50eXBlKSB7XG4gIGNhc2UgJ2NoZWNrYm94JzogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFtuYW1lPVxcXCJcIiArIChlbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuXG4gICAgZWxzID0gdG9BcnJheShlbHMpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pO1xuICAgIGlmICghZWxzLmxlbmd0aCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiAgICByZXR1cm4gZWxzLm1hcChmdW5jdGlvbiAoY2hlY2tib3gpIHsgcmV0dXJuIGNoZWNrYm94LnZhbHVlOyB9KTtcbiAgfTtcbiAgY2FzZSAncmFkaW8nOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKGVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG4gICAgdmFyIGVsbSA9IGZpbmQoZWxzLCBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pO1xuXG4gICAgcmV0dXJuIGVsbSAmJiBlbG0udmFsdWU7XG4gIH07XG4gIGNhc2UgJ2ZpbGUnOiByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICByZXR1cm4gdG9BcnJheShlbC5maWxlcyk7XG4gIH07XG4gIGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoZWwub3B0aW9ucykuZmlsdGVyKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC5zZWxlY3RlZDsgfSkubWFwKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC52YWx1ZTsgfSk7XG4gIH07XG4gIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVsICYmIGVsLnZhbHVlO1xuICB9O1xuICB9XG59O1xuXG4vLyBcblxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgdGFyZ2V0T2Y6IG51bGwsXG4gIGluaXRpYWw6IGZhbHNlLFxuICBzY29wZTogbnVsbCxcbiAgbGlzdGVuOiB0cnVlLFxuICBuYW1lOiBudWxsLFxuICBhY3RpdmU6IHRydWUsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcnVsZXM6IHt9LFxuICB2bTogbnVsbCxcbiAgY2xhc3NlczogZmFsc2UsXG4gIHZhbGlkaXR5OiB0cnVlLFxuICBhcmlhOiB0cnVlLFxuICBldmVudHM6ICdpbnB1dHxibHVyJyxcbiAgZGVsYXk6IDAsXG4gIGNsYXNzTmFtZXM6IHtcbiAgICB0b3VjaGVkOiAndG91Y2hlZCcsIC8vIHRoZSBjb250cm9sIGhhcyBiZWVuIGJsdXJyZWRcbiAgICB1bnRvdWNoZWQ6ICd1bnRvdWNoZWQnLCAvLyB0aGUgY29udHJvbCBoYXNuJ3QgYmVlbiBibHVycmVkXG4gICAgdmFsaWQ6ICd2YWxpZCcsIC8vIG1vZGVsIGlzIHZhbGlkXG4gICAgaW52YWxpZDogJ2ludmFsaWQnLCAvLyBtb2RlbCBpcyBpbnZhbGlkXG4gICAgcHJpc3RpbmU6ICdwcmlzdGluZScsIC8vIGNvbnRyb2wgaGFzIG5vdCBiZWVuIGludGVyYWN0ZWQgd2l0aFxuICAgIGRpcnR5OiAnZGlydHknIC8vIGNvbnRyb2wgaGFzIGJlZW4gaW50ZXJhY3RlZCB3aXRoXG4gIH1cbn07XG5cbnZhciBGaWVsZCA9IGZ1bmN0aW9uIEZpZWxkIChlbCwgb3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmlkID0gdW5pcUlkKCk7XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG4gIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgdGhpcy5ldmVudHMgPSBbXTtcbiAgdGhpcy5ydWxlcyA9IHt9O1xuICBpZiAoIXRoaXMuaXNIZWFkbGVzcyAmJiAhb3B0aW9ucy50YXJnZXRPZikge1xuICAgIHNldERhdGFBdHRyaWJ1dGUodGhpcy5lbCwgJ2lkJywgdGhpcy5pZCk7IC8vIGNhY2hlIGZpZWxkIGlkIGlmIGl0IGlzIGluZGVwZW5kZW50IGFuZCBoYXMgYSByb290IGVsZW1lbnQuXG4gIH1cbiAgb3B0aW9ucyA9IGFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgdGhpcy52YWxpZGl0eSA9IG9wdGlvbnMudmFsaWRpdHk7XG4gIHRoaXMuYXJpYSA9IG9wdGlvbnMuYXJpYTtcbiAgdGhpcy5mbGFncyA9IGNyZWF0ZUZsYWdzKCk7XG4gIHRoaXMudm0gPSBvcHRpb25zLnZtO1xuICB0aGlzLmNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xuICB0aGlzLmN0b3JDb25maWcgPSB0aGlzLmNvbXBvbmVudCA/IGdldFBhdGgoJyRvcHRpb25zLiRfdmVlVmFsaWRhdGUnLCB0aGlzLmNvbXBvbmVudCkgOiB1bmRlZmluZWQ7XG4gIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgaXNWdWU6IHt9LHZhbGlkYXRvcjoge30saXNSZXF1aXJlZDoge30saXNEaXNhYmxlZDoge30saXNIZWFkbGVzczoge30sZGlzcGxheU5hbWU6IHt9LHZhbHVlOiB7fSxyZWplY3RzRmFsc2U6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzVnVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS52YWxpZGF0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudm0gfHwgIXRoaXMudm0uJHZhbGlkYXRvcikge1xuICAgIHdhcm4oJ05vIHZhbGlkYXRvciBpbnN0YW5jZSBkZXRlY3RlZC4nKTtcbiAgICByZXR1cm4geyB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30gfTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnZtLiR2YWxpZGF0b3I7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc1JlcXVpcmVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5ydWxlcy5yZXF1aXJlZDtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzRGlzYWJsZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISEodGhpcy5jb21wb25lbnQgJiYgdGhpcy5jb21wb25lbnQuZGlzYWJsZWQpIHx8ICEhKHRoaXMuZWwgJiYgdGhpcy5lbC5kaXNhYmxlZCk7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc0hlYWRsZXNzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmVsO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkaXNwbGF5IG5hbWUgKHVzZXItZnJpZW5kbHkgbmFtZSkuXG4gKi9cblxucHJvdG90eXBlQWNjZXNzb3JzJDEuZGlzcGxheU5hbWUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzLmFsaWFzKSA/IHRoaXMuYWxpYXMoKSA6IHRoaXMuYWxpYXM7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGlucHV0IHZhbHVlLlxuICovXG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnZhbHVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKHRoaXMuZ2V0dGVyKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXR0ZXIoKTtcbn07XG5cbi8qKlxuICogSWYgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYXMgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIHJlcXVpcmVkIHJ1bGUuXG4gKi9cblxucHJvdG90eXBlQWNjZXNzb3JzJDEucmVqZWN0c0ZhbHNlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaXNWdWUgJiYgdGhpcy5jdG9yQ29uZmlnKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jdG9yQ29uZmlnLnJlamVjdHNGYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lbC50eXBlID09PSAnY2hlY2tib3gnO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnN0YW5jZSBtYXRjaGVzIHRoZSBvcHRpb25zIHByb3ZpZGVkLlxuICovXG5GaWVsZC5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIG1hdGNoZXMgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZCA9PT0gb3B0aW9ucy5pZDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lID09PSBvcHRpb25zLm5hbWU7XG4gIH1cblxuICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZSA9PT0gb3B0aW9ucy5zY29wZTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLm5hbWUgPT09IHRoaXMubmFtZSAmJiBvcHRpb25zLnNjb3BlID09PSB0aGlzLnNjb3BlO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBmaWVsZCB3aXRoIGNoYW5nZWQgZGF0YS5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAob3B0aW9ucykge1xuICB0aGlzLnRhcmdldE9mID0gb3B0aW9ucy50YXJnZXRPZiB8fCBudWxsO1xuICB0aGlzLmluaXRpYWwgPSBvcHRpb25zLmluaXRpYWwgfHwgdGhpcy5pbml0aWFsIHx8IGZhbHNlO1xuXG4gIC8vIHVwZGF0ZSBlcnJvcnMgc2NvcGUgaWYgdGhlIGZpZWxkIHNjb3BlIHdhcyBjaGFuZ2VkLlxuICBpZiAodGhpcy51cGRhdGVkICYmICFpc051bGxPclVuZGVmaW5lZChvcHRpb25zLnNjb3BlKSAmJiBvcHRpb25zLnNjb3BlICE9PSB0aGlzLnNjb3BlICYmIGlzQ2FsbGFibGUodGhpcy52YWxpZGF0b3IudXBkYXRlKSkge1xuICAgIHRoaXMudmFsaWRhdG9yLnVwZGF0ZSh0aGlzLmlkLCB7IHNjb3BlOiBvcHRpb25zLnNjb3BlIH0pO1xuICB9XG4gIHRoaXMuc2NvcGUgPSAhaXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5zY29wZSkgPyBvcHRpb25zLnNjb3BlXG4gICAgOiAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5zY29wZSkgPyB0aGlzLnNjb3BlIDogbnVsbDtcbiAgdGhpcy5uYW1lID0gKCFpc051bGxPclVuZGVmaW5lZChvcHRpb25zLm5hbWUpID8gU3RyaW5nKG9wdGlvbnMubmFtZSkgOiBvcHRpb25zLm5hbWUpIHx8IHRoaXMubmFtZSB8fCBudWxsO1xuICB0aGlzLnJ1bGVzID0gb3B0aW9ucy5ydWxlcyAhPT0gdW5kZWZpbmVkID8gbm9ybWFsaXplUnVsZXMob3B0aW9ucy5ydWxlcykgOiB0aGlzLnJ1bGVzO1xuICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbCB8fCB0aGlzLm1vZGVsO1xuICB0aGlzLmxpc3RlbiA9IG9wdGlvbnMubGlzdGVuICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmxpc3RlbiA6IHRoaXMubGlzdGVuO1xuICB0aGlzLmNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMgfHwgdGhpcy5jbGFzc2VzIHx8IGZhbHNlO1xuICB0aGlzLmNsYXNzTmFtZXMgPSBvcHRpb25zLmNsYXNzTmFtZXMgfHwgdGhpcy5jbGFzc05hbWVzIHx8IERFRkFVTFRfT1BUSU9OUy5jbGFzc05hbWVzO1xuICB0aGlzLmFsaWFzID0gb3B0aW9ucy5hbGlhcyB8fCB0aGlzLmFsaWFzO1xuICB0aGlzLmdldHRlciA9IGlzQ2FsbGFibGUob3B0aW9ucy5nZXR0ZXIpID8gb3B0aW9ucy5nZXR0ZXIgOiB0aGlzLmdldHRlcjtcbiAgdGhpcy5kZWxheSA9IG9wdGlvbnMuZGVsYXkgfHwgdGhpcy5kZWxheSB8fCAwO1xuICB0aGlzLmV2ZW50cyA9IHR5cGVvZiBvcHRpb25zLmV2ZW50cyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5ldmVudHMubGVuZ3RoID8gb3B0aW9ucy5ldmVudHMuc3BsaXQoJ3wnKSA6IHRoaXMuZXZlbnRzO1xuICB0aGlzLnVwZGF0ZURlcGVuZGVuY2llcygpO1xuICB0aGlzLmFkZEFjdGlvbkxpc3RlbmVycygpO1xuXG4gIC8vIHVwZGF0ZSByZXF1aXJlZCBmbGFnIGZsYWdzXG4gIGlmIChvcHRpb25zLnJ1bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmZsYWdzLnJlcXVpcmVkID0gdGhpcy5pc1JlcXVpcmVkO1xuICB9XG5cbiAgLy8gdmFsaWRhdGUgaWYgaXQgd2FzIHZhbGlkYXRlZCBiZWZvcmUgYW5kIGZpZWxkIHdhcyB1cGRhdGVkIGFuZCB0aGVyZSB3YXMgYSBydWxlcyBtdXRhdGlvbi5cbiAgaWYgKHRoaXMuZmxhZ3MudmFsaWRhdGVkICYmIG9wdGlvbnMucnVsZXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVwZGF0ZWQpIHtcbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcy5pZCkpKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlZCA9IHRydWU7XG5cbiAgLy8gbm8gbmVlZCB0byBjb250aW51ZS5cbiAgaWYgKHRoaXMuaXNIZWFkbGVzcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB0aGlzLmFkZFZhbHVlTGlzdGVuZXJzKCk7XG4gIHRoaXMudXBkYXRlQXJpYUF0dHJzKCk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyBmaWVsZCBmbGFncyBhbmQgZXJyb3JzLlxuICovXG5GaWVsZC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIGRlZiA9IGNyZWF0ZUZsYWdzKCk7XG4gIE9iamVjdC5rZXlzKHRoaXMuZmxhZ3MpLmZvckVhY2goZnVuY3Rpb24gKGZsYWcpIHtcbiAgICB0aGlzJDEuZmxhZ3NbZmxhZ10gPSBkZWZbZmxhZ107XG4gIH0pO1xuXG4gIHRoaXMuYWRkQWN0aW9uTGlzdGVuZXJzKCk7XG4gIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB0aGlzLnVwZGF0ZUFyaWFBdHRycygpO1xuICB0aGlzLnVwZGF0ZUN1c3RvbVZhbGlkaXR5KCk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGZsYWdzIGFuZCB0aGVpciBuZWdhdGVkIGNvdW50ZXJwYXJ0cywgYW5kIHVwZGF0ZXMgdGhlIGNsYXNzZXMgYW5kIHJlLWFkZHMgYWN0aW9uIGxpc3RlbmVycy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnNldEZsYWdzID0gZnVuY3Rpb24gc2V0RmxhZ3MgKGZsYWdzKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIG5lZ2F0ZWQgPSB7XG4gICAgcHJpc3RpbmU6ICdkaXJ0eScsXG4gICAgZGlydHk6ICdwcmlzdGluZScsXG4gICAgdmFsaWQ6ICdpbnZhbGlkJyxcbiAgICBpbnZhbGlkOiAndmFsaWQnLFxuICAgIHRvdWNoZWQ6ICd1bnRvdWNoZWQnLFxuICAgIHVudG91Y2hlZDogJ3RvdWNoZWQnXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZmxhZ3MpLmZvckVhY2goZnVuY3Rpb24gKGZsYWcpIHtcbiAgICB0aGlzJDEuZmxhZ3NbZmxhZ10gPSBmbGFnc1tmbGFnXTtcbiAgICAvLyBpZiBpdCBoYXMgYSBuZWdhdGlvbiBhbmQgd2FzIG5vdCBzcGVjaWZpZWQsIHNldCBpdCBhcyB3ZWxsLlxuICAgIGlmIChuZWdhdGVkW2ZsYWddICYmIGZsYWdzW25lZ2F0ZWRbZmxhZ11dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMkMS5mbGFnc1tuZWdhdGVkW2ZsYWddXSA9ICFmbGFnc1tmbGFnXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChcbiAgICBmbGFncy51bnRvdWNoZWQgIT09IHVuZGVmaW5lZCB8fFxuICAgIGZsYWdzLnRvdWNoZWQgIT09IHVuZGVmaW5lZCB8fFxuICAgIGZsYWdzLmRpcnR5ICE9PSB1bmRlZmluZWQgfHxcbiAgICBmbGFncy5wcmlzdGluZSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuYWRkQWN0aW9uTGlzdGVuZXJzKCk7XG4gIH1cbiAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIHRoaXMudXBkYXRlQXJpYUF0dHJzKCk7XG4gIHRoaXMudXBkYXRlQ3VzdG9tVmFsaWRpdHkoKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZmllbGQgcmVxdWlyZXMgcmVmZXJlbmNlcyB0byB0YXJnZXQgZmllbGRzLlxuKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVEZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiB1cGRhdGVEZXBlbmRlbmNpZXMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlc2V0IGRlcGVuZGVuY2llcy5cbiAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5maWVsZC5kZXN0cm95KCk7IH0pO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuXG4gIC8vIHdlIGdldCB0aGUgc2VsZWN0b3JzIGZvciBlYWNoIGZpZWxkLlxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5ydWxlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCByKSB7XG4gICAgaWYgKHIgPT09ICdjb25maXJtZWQnKSB7XG4gICAgICBwcmV2LnB1c2goeyBzZWxlY3RvcjogdGhpcyQxLnJ1bGVzW3JdWzBdIHx8ICgodGhpcyQxLm5hbWUpICsgXCJfY29uZmlybWF0aW9uXCIpLCBuYW1lOiByIH0pO1xuICAgIH0gZWxzZSBpZiAoL2FmdGVyfGJlZm9yZS8udGVzdChyKSkge1xuICAgICAgcHJldi5wdXNoKHsgc2VsZWN0b3I6IHRoaXMkMS5ydWxlc1tyXVswXSwgbmFtZTogciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pO1xuXG4gIGlmICghZmllbGRzLmxlbmd0aCB8fCAhdGhpcy52bSB8fCAhdGhpcy52bS4kZWwpIHsgcmV0dXJuOyB9XG5cbiAgLy8gbXVzdCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBzYW1lIGNvbXBvbmVudCwgc28gd2UgdXNlIHRoZSB2bSByb290IGVsZW1lbnQgY29uc3RyYWluIG91ciBkb20gc2VhcmNoLlxuICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSByZWYuc2VsZWN0b3I7XG4gICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lO1xuXG4gICAgdmFyIGVsID0gbnVsbDtcbiAgICAvLyB2dWUgcmVmIHNlbGVjdG9yLlxuICAgIGlmIChzZWxlY3RvclswXSA9PT0gJyQnKSB7XG4gICAgICBlbCA9IHRoaXMkMS52bS4kcmVmc1tzZWxlY3Rvci5zbGljZSgxKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRyeSBxdWVyeSBzZWxlY3RvclxuICAgICAgICBlbCA9IHRoaXMkMS52bS4kZWwucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVsID0gdGhpcyQxLnZtLiRlbC5xdWVyeVNlbGVjdG9yKChcImlucHV0W25hbWU9XFxcIlwiICsgc2VsZWN0b3IgKyBcIlxcXCJdXCIpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgdm06IHRoaXMkMS52bSxcbiAgICAgIGNsYXNzZXM6IHRoaXMkMS5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lczogdGhpcyQxLmNsYXNzTmFtZXMsXG4gICAgICBkZWxheTogdGhpcyQxLmRlbGF5LFxuICAgICAgc2NvcGU6IHRoaXMkMS5zY29wZSxcbiAgICAgIGV2ZW50czogdGhpcyQxLmV2ZW50cy5qb2luKCd8JyksXG4gICAgICBpbml0aWFsOiB0aGlzJDEuaW5pdGlhbCxcbiAgICAgIHRhcmdldE9mOiB0aGlzJDEuaWRcbiAgICB9O1xuXG4gICAgLy8gcHJvYmFibHkgYSBjb21wb25lbnQuXG4gICAgaWYgKGlzQ2FsbGFibGUoZWwuJHdhdGNoKSkge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnQgPSBlbDtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbC4kZWw7XG4gICAgICBvcHRpb25zLmFsaWFzID0gR2VuZXJhdG9yLnJlc29sdmVBbGlhcyhlbC4kZWwsIHsgY2hpbGQ6IGVsIH0pO1xuICAgICAgb3B0aW9ucy5nZXR0ZXIgPSBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbC4kZWwsIHsgY2hpbGQ6IGVsIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLmVsID0gZWw7XG4gICAgICBvcHRpb25zLmFsaWFzID0gR2VuZXJhdG9yLnJlc29sdmVBbGlhcyhlbCwge30pO1xuICAgICAgb3B0aW9ucy5nZXR0ZXIgPSBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbCwge30pO1xuICAgIH1cblxuICAgIHRoaXMkMS5kZXBlbmRlbmNpZXMucHVzaCh7IG5hbWU6IG5hbWUsIGZpZWxkOiBuZXcgRmllbGQob3B0aW9ucy5lbCwgb3B0aW9ucykgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxpc3RlbmVycy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVud2F0Y2ggPSBmdW5jdGlvbiB1bndhdGNoICh0YWcpIHtcbiAgICBpZiAoIHRhZyA9PT0gdm9pZCAwICkgdGFnID0gbnVsbDtcblxuICBpZiAoIXRhZykge1xuICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaChmdW5jdGlvbiAodykgeyByZXR1cm4gdy51bndhdGNoKCk7IH0pO1xuICAgIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gdGFnLnRlc3Qody50YWcpOyB9KS5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gIXRhZy50ZXN0KHcudGFnKTsgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQgY2xhc3NlcyBkZXBlbmRpbmcgb24gZWFjaCBmaWVsZCBmbGFnIHN0YXR1cy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXMgPSBmdW5jdGlvbiB1cGRhdGVDbGFzc2VzICgpIHtcbiAgaWYgKCF0aGlzLmNsYXNzZXMpIHsgcmV0dXJuOyB9XG5cbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLmRpcnR5LCB0aGlzLmZsYWdzLmRpcnR5KTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnByaXN0aW5lLCB0aGlzLmZsYWdzLnByaXN0aW5lKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnZhbGlkLCAhIXRoaXMuZmxhZ3MudmFsaWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMuaW52YWxpZCwgISF0aGlzLmZsYWdzLmludmFsaWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudG91Y2hlZCwgdGhpcy5mbGFncy50b3VjaGVkKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnVudG91Y2hlZCwgdGhpcy5mbGFncy51bnRvdWNoZWQpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBsaXN0ZW5lcnMgcmVxdWlyZWQgZm9yIGF1dG9tYXRpYyBjbGFzc2VzIGFuZCBzb21lIGZsYWdzLlxuICovXG5GaWVsZC5wcm90b3R5cGUuYWRkQWN0aW9uTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkQWN0aW9uTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyByZW1vdmUgcHJldmlvdXMgbGlzdGVuZXJzLlxuICB0aGlzLnVud2F0Y2goL2NsYXNzLyk7XG5cbiAgdmFyIG9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmxhZ3MudG91Y2hlZCA9IHRydWU7XG4gICAgdGhpcyQxLmZsYWdzLnVudG91Y2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzJDEuY2xhc3Nlcykge1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy50b3VjaGVkLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMudW50b3VjaGVkLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBuZWVkZWQgb25jZS5cbiAgICB0aGlzJDEudW53YXRjaCgvXmNsYXNzX2JsdXIkLyk7XG4gIH07XG5cbiAgdmFyIGlucHV0RXZlbnQgPSBnZXRJbnB1dEV2ZW50TmFtZSh0aGlzLmVsKTtcbiAgdmFyIG9uSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLmZsYWdzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzJDEuZmxhZ3MucHJpc3RpbmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcyQxLmNsYXNzZXMpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMucHJpc3RpbmUsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMuZGlydHksIHRydWUpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgbmVlZGVkIG9uY2UuXG4gICAgdGhpcyQxLnVud2F0Y2goL15jbGFzc19pbnB1dCQvKTtcbiAgfTtcblxuICBpZiAodGhpcy5pc1Z1ZSAmJiBpc0NhbGxhYmxlKHRoaXMuY29tcG9uZW50LiRvbmNlKSkge1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdpbnB1dCcsIG9uSW5wdXQpO1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdibHVyJywgb25CbHVyKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnY2xhc3NfaW5wdXQnLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2lucHV0Jywgb25JbnB1dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2JsdXInLCBvbkJsdXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGlucHV0RXZlbnQsIG9uSW5wdXQpO1xuICAvLyBDaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zIG9uIE1hYyBkb24ndCBlbWl0IGJsdXIgbmF0dXJhbGx5LCBzbyB3ZSBsaXN0ZW4gb24gY2xpY2sgaW5zdGVhZC5cbiAgdmFyIGJsdXJFdmVudCA9IFsncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHRoaXMuZWwudHlwZSkgPT09IC0xID8gJ2JsdXInIDogJ2NsaWNrJztcbiAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICB0YWc6ICdjbGFzc19pbnB1dCcsXG4gICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoaW5wdXRFdmVudCwgb25JbnB1dCk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBsaXN0ZW5lcnMgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24uXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5hZGRWYWx1ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZFZhbHVlTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLnVud2F0Y2goL15pbnB1dF8uKy8pO1xuICBpZiAoIXRoaXMubGlzdGVuKSB7IHJldHVybjsgfVxuXG4gIHZhciBmbiA9IHRoaXMudGFyZ2V0T2YgPyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcyQxLnRhcmdldE9mKSkpO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAvLyBpZiBpdHMgYSBET00gZXZlbnQsIHJlc29sdmUgdGhlIHZhbHVlLCBvdGhlcndpc2UgdXNlIHRoZSBmaXJzdCBwYXJhbWV0ZXIgYXMgdGhlIHZhbHVlLlxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCAoaXNDYWxsYWJsZShFdmVudCkgJiYgYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50KSB8fCAoYXJnc1swXSAmJiBhcmdzWzBdLnNyY0VsZW1lbnQpKSB7XG4gICAgICBhcmdzWzBdID0gdGhpcyQxLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzJDEudmFsaWRhdG9yLnZhbGlkYXRlKChcIiNcIiArICh0aGlzJDEuaWQpKSwgYXJnc1swXSk7XG4gIH07XG5cbiAgdmFyIHZhbGlkYXRlID0gZGVib3VuY2UoZm4sIHRoaXMuZGVsYXkpO1xuICB2YXIgaW5wdXRFdmVudCA9IGdldElucHV0RXZlbnROYW1lKHRoaXMuZWwpO1xuICAvLyByZXBsYWNlIGlucHV0IGV2ZW50IHdpdGggc3VpdGFibGUgb25lLlxuICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUgPT09ICdpbnB1dCcgPyBpbnB1dEV2ZW50IDogZTtcbiAgfSk7XG5cbiAgLy8gaWYgdGhlcmUgaXMgYSB3YXRjaGFibGUgbW9kZWwgYW5kIGFuIG9uIGlucHV0IHZhbGlkYXRpb24gaXMgcmVxdWVzdGVkLlxuICBpZiAodGhpcy5tb2RlbCAmJiBldmVudHMuaW5kZXhPZihpbnB1dEV2ZW50KSAhPT0gLTEpIHtcbiAgICB2YXIgdW53YXRjaCA9IHRoaXMudm0uJHdhdGNoKHRoaXMubW9kZWwsIHZhbGlkYXRlKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnaW5wdXRfbW9kZWwnLFxuICAgICAgdW53YXRjaDogdW53YXRjaFxuICAgIH0pO1xuICAgIC8vIGZpbHRlciBvdXQgaW5wdXQgZXZlbnQgYXMgaXQgaXMgYWxyZWFkeSBoYW5kbGVkIGJ5IHRoZSB3YXRjaGVyIEFQSS5cbiAgICBldmVudHMgPSBldmVudHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlICE9PSBpbnB1dEV2ZW50OyB9KTtcbiAgfVxuXG4gIC8vIEFkZCBldmVudHMuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHRoaXMkMS5pc1Z1ZSkge1xuICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb24oZSwgdmFsaWRhdGUpO1xuICAgICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgICB0YWc6ICdpbnB1dF92dWUnLFxuICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKH5bJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5kZXhPZih0aGlzJDEuZWwudHlwZSkpIHtcbiAgICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKHRoaXMkMS5lbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuICAgICAgdG9BcnJheShlbHMpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICAgICAgdGFnOiAnaW5wdXRfbmF0aXZlJyxcbiAgICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzJDEuZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnaW5wdXRfbmF0aXZlJyxcbiAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyBhcmlhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVBcmlhQXR0cnMgPSBmdW5jdGlvbiB1cGRhdGVBcmlhQXR0cnMgKCkge1xuICBpZiAoIXRoaXMuYXJpYSB8fCB0aGlzLmlzSGVhZGxlc3MgfHwgIWlzQ2FsbGFibGUodGhpcy5lbC5zZXRBdHRyaWJ1dGUpKSB7IHJldHVybjsgfVxuXG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJywgdGhpcy5pc1JlcXVpcmVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0aGlzLmZsYWdzLmludmFsaWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgY3VzdG9tIHZhbGlkaXR5IGZvciB0aGUgZmllbGQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVDdXN0b21WYWxpZGl0eSA9IGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbVZhbGlkaXR5ICgpIHtcbiAgaWYgKCF0aGlzLnZhbGlkaXR5IHx8IHRoaXMuaXNIZWFkbGVzcyB8fCAhaXNDYWxsYWJsZSh0aGlzLmVsLnNldEN1c3RvbVZhbGlkaXR5KSkgeyByZXR1cm47IH1cblxuICB0aGlzLmVsLnNldEN1c3RvbVZhbGlkaXR5KHRoaXMuZmxhZ3MudmFsaWQgPyAnJyA6ICh0aGlzLnZhbGlkYXRvci5lcnJvcnMuZmlyc3RCeUlkKHRoaXMuaWQpIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGxpc3RlbmVycy5cbiAqL1xuRmllbGQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5maWVsZC5kZXN0cm95KCk7IH0pO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEZpZWxkLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxuLy8gXG5cbnZhciBGaWVsZEJhZyA9IGZ1bmN0aW9uIEZpZWxkQmFnICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQyID0geyBsZW5ndGg6IHt9IH07XG5cbi8qKlxuICogR2V0cyB0aGUgY3VycmVudCBpdGVtcyBsZW5ndGguXG4gKi9cblxucHJvdG90eXBlQWNjZXNzb3JzJDIubGVuZ3RoLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgZmllbGQgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBtYXRjaGVyIG9iamVjdC5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kJDEgKG1hdGNoZXIpIHtcbiAgcmV0dXJuIGZpbmQodGhpcy5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ubWF0Y2hlcyhtYXRjaGVyKTsgfSk7XG59O1xuXG4vKipcbiAqIEZpbHRlcnMgdGhlIGl0ZW1zIGRvd24gdG8gdGhlIG1hdGNoZWQgZmllbGRzLlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gZmlsdGVyIChtYXRjaGVyKSB7XG4gIC8vIG11bHRpcGxlIG1hdGNoZXJzIHRvIGJlIHRyaWVkLlxuICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaGVyKSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gbWF0Y2hlci5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobSk7IH0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5tYXRjaGVzKG1hdGNoZXIpOyB9KTtcbn07XG5cbi8qKlxuICogTWFwcyB0aGUgZmllbGQgaXRlbXMgdXNpbmcgdGhlIG1hcHBpbmcgZnVuY3Rpb24uXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAgKG1hcHBlcikge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAobWFwcGVyKTtcbn07XG5cbi8qKlxuICogRmluZHMgYW5kIHJlbW92ZXMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QsIHJldHVybnMgdGhlIHJlbW92ZWQgaXRlbS5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAobWF0Y2hlcikge1xuICB2YXIgaXRlbSA9IG51bGw7XG4gIGlmIChtYXRjaGVyIGluc3RhbmNlb2YgRmllbGQpIHtcbiAgICBpdGVtID0gbWF0Y2hlcjtcbiAgfSBlbHNlIHtcbiAgICBpdGVtID0gdGhpcy5maW5kKG1hdGNoZXIpO1xuICB9XG5cbiAgaWYgKCFpdGVtKSB7IHJldHVybiBudWxsOyB9XG5cbiAgdmFyIGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcmV0dXJuIGl0ZW07XG59O1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCBpdGVtIHRvIHRoZSBsaXN0LlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGl0ZW0pIHtcbiAgaWYgKCEgKGl0ZW0gaW5zdGFuY2VvZiBGaWVsZCkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcignRmllbGRCYWcgb25seSBhY2NlcHRzIGluc3RhbmNlcyBvZiBGaWVsZCB0aGF0IGhhcyBhbiBpZCBkZWZpbmVkLicpO1xuICB9XG5cbiAgaWYgKCFpdGVtLmlkKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ0ZpZWxkIGlkIG11c3QgYmUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIGlmICh0aGlzLmZpbmQoeyBpZDogaXRlbS5pZCB9KSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKChcIkZpZWxkIHdpdGggaWQgXCIgKyAoaXRlbS5pZCkgKyBcIiBpcyBhbHJlYWR5IGFkZGVkLlwiKSk7XG4gIH1cblxuICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRmllbGRCYWcucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMiApO1xuXG4vLyBcblxudmFyIFJVTEVTID0ge307XG52YXIgTE9DQUxFID0gJ2VuJztcbnZhciBTVFJJQ1RfTU9ERSA9IHRydWU7XG52YXIgRElDVElPTkFSWSA9IG5ldyBEaWN0aW9uYXJ5KHtcbiAgZW46IHtcbiAgICBtZXNzYWdlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgY3VzdG9tOiB7fVxuICB9XG59KTtcblxudmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvciAodmFsaWRhdGlvbnMsIG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHsgdm06IG51bGwsIGZhc3RFeGl0OiB0cnVlIH07XG5cbiAgdGhpcy5zdHJpY3QgPSBTVFJJQ1RfTU9ERTtcbiAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JCYWcoKTtcbiAgdGhpcy5maWVsZHMgPSBuZXcgRmllbGRCYWcoKTtcbiAgdGhpcy5mbGFncyA9IHt9O1xuICB0aGlzLl9jcmVhdGVGaWVsZHModmFsaWRhdGlvbnMpO1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICB0aGlzLmZhc3RFeGl0ID0gb3B0aW9ucy5mYXN0RXhpdCB8fCBmYWxzZTtcbiAgdGhpcy5vd25lcklkID0gb3B0aW9ucy52bSAmJiBvcHRpb25zLnZtLl91aWQ7XG4gIC8vIGNyZWF0ZSBpdCBzdGF0aWNhbGx5IHNpbmNlIHdlIGRvbid0IG5lZWQgY29uc3RhbnQgYWNjZXNzIHRvIHRoZSB2bS5cbiAgdGhpcy5yZXNldCA9IG9wdGlvbnMudm0gJiYgaXNDYWxsYWJsZShvcHRpb25zLnZtLiRuZXh0VGljaykgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIG9wdGlvbnMudm0uJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmZpZWxkcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLnJlc2V0KCk7IH0pO1xuICAgICAgICB0aGlzJDEuZXJyb3JzLmNsZWFyKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0aGlzJDEuZmllbGRzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkucmVzZXQoKTsgfSk7XG4gICAgICB0aGlzJDEuZXJyb3JzLmNsZWFyKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH07XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHRoaXMuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgd2FybigndmFsaWRhdG9yLmNsZWFuIGlzIG1hcmtlZCBmb3IgZGVwcmVjYXRpb24sIHBsZWFzZSB1c2UgdmFsaWRhdG9yLnJlc2V0IGluc3RlYWQuJyk7XG4gICAgdGhpcyQxLnJlc2V0KCk7XG4gIH07XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBkaWN0aW9uYXJ5OiB7fSxsb2NhbGU6IHt9LHJ1bGVzOiB7fSB9O1xudmFyIHN0YXRpY0FjY2Vzc29ycyA9IHsgZGljdGlvbmFyeToge30sbG9jYWxlOiB7fSxydWxlczoge30gfTtcblxuLyoqXG4gKiBHZXR0ZXIgZm9yIHRoZSBkaWN0aW9uYXJ5LlxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuZGljdGlvbmFyeS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBESUNUSU9OQVJZO1xufTtcblxuLyoqXG4gKiBTdGF0aWMgR2V0dGVyIGZvciB0aGUgZGljdGlvbmFyeS5cbiAqL1xuc3RhdGljQWNjZXNzb3JzLmRpY3Rpb25hcnkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRElDVElPTkFSWTtcbn07XG5cbi8qKlxuICogR2V0dGVyIGZvciB0aGUgY3VycmVudCBsb2NhbGUuXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5sb2NhbGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTE9DQUxFO1xufTtcblxuLyoqXG4gKiBTZXR0ZXIgZm9yIHRoZSB2YWxpZGF0b3IgbG9jYWxlLlxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMubG9jYWxlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBWYWxpZGF0b3IubG9jYWxlID0gdmFsdWU7XG59O1xuXG4vKipcbiogU3RhdGljIGdldHRlciBmb3IgdGhlIHZhbGlkYXRvciBsb2NhbGUuXG4qL1xuc3RhdGljQWNjZXNzb3JzLmxvY2FsZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBMT0NBTEU7XG59O1xuXG4vKipcbiAqIFN0YXRpYyBzZXR0ZXIgZm9yIHRoZSB2YWxpZGF0b3IgbG9jYWxlLlxuICovXG5zdGF0aWNBY2Nlc3NvcnMubG9jYWxlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFESUNUSU9OQVJZLmhhc0xvY2FsZSh2YWx1ZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3YXJuKCdZb3UgYXJlIHNldHRpbmcgdGhlIHZhbGlkYXRvciBsb2NhbGUgdG8gYSBsb2NhbGUgdGhhdCBpcyBub3QgZGVmaW5lZCBpbiB0aGUgZGljdGlvbmFyeS4gRW5nbGlzaCBtZXNzYWdlcyBtYXkgc3RpbGwgYmUgZ2VuZXJhdGVkLicpO1xuICB9XG5cbiAgTE9DQUxFID0gdmFsdWU7XG59O1xuXG4vKipcbiAqIEdldHRlciBmb3IgdGhlIHJ1bGVzIG9iamVjdC5cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLnJ1bGVzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJVTEVTO1xufTtcblxuLyoqXG4gKiBTdGF0aWMgR2V0dGVyIGZvciB0aGUgcnVsZXMgb2JqZWN0LlxuICovXG5zdGF0aWNBY2Nlc3NvcnMucnVsZXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUlVMRVM7XG59O1xuXG4vKipcbiAqIFN0YXRpYyBjb25zdHJ1Y3Rvci5cbiAqL1xuVmFsaWRhdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSAodmFsaWRhdGlvbnMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBWYWxpZGF0b3IodmFsaWRhdGlvbnMsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY3VzdG9tIHZhbGlkYXRvciB0byB0aGUgbGlzdCBvZiB2YWxpZGF0aW9uIHJ1bGVzLlxuICovXG5WYWxpZGF0b3IuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgVmFsaWRhdG9yLl9ndWFyZEV4dGVuZChuYW1lLCB2YWxpZGF0b3IpO1xuICBWYWxpZGF0b3IuX21lcmdlKG5hbWUsIHZhbGlkYXRvcik7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqL1xuVmFsaWRhdG9yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAobmFtZSkge1xuICBkZWxldGUgUlVMRVNbbmFtZV07XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRlZmF1bHQgbG9jYWxlIGZvciBhbGwgdmFsaWRhdG9ycy5cbiAqIEBkZXByZWNhdGVkXG4gKi9cblZhbGlkYXRvci5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUgKGxhbmd1YWdlKSB7XG4gICAgaWYgKCBsYW5ndWFnZSA9PT0gdm9pZCAwICkgbGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIFZhbGlkYXRvci5sb2NhbGUgPSBsYW5ndWFnZTtcbn07XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuVmFsaWRhdG9yLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgPSBmdW5jdGlvbiBpbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgd2FybignRGF0ZSB2YWxpZGF0aW9ucyBhcmUgbm93IGluc3RhbGxlZCBieSBkZWZhdWx0LCB5b3Ugbm8gbG9uZ2VyIG5lZWQgdG8gaW5zdGFsbCBpdC4nKTtcbn07XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzID0gZnVuY3Rpb24gaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdhcm4oJ0RhdGUgdmFsaWRhdGlvbnMgYXJlIG5vdyBpbnN0YWxsZWQgYnkgZGVmYXVsdCwgeW91IG5vIGxvbmdlciBuZWVkIHRvIGluc3RhbGwgaXQuJyk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIG9wZXJhdGluZyBtb2RlIGZvciBhbGwgbmV3bHkgY3JlYXRlZCB2YWxpZGF0b3JzLlxuICogc3RyaWN0TW9kZSA9IHRydWU6IFZhbHVlcyB3aXRob3V0IGEgcnVsZSBhcmUgaW52YWxpZCBhbmQgY2F1c2UgZmFpbHVyZS5cbiAqIHN0cmljdE1vZGUgPSBmYWxzZTogVmFsdWVzIHdpdGhvdXQgYSBydWxlIGFyZSB2YWxpZCBhbmQgYXJlIHNraXBwZWQuXG4gKi9cblZhbGlkYXRvci5zZXRTdHJpY3RNb2RlID0gZnVuY3Rpb24gc2V0U3RyaWN0TW9kZSAoc3RyaWN0TW9kZSkge1xuICAgIGlmICggc3RyaWN0TW9kZSA9PT0gdm9pZCAwICkgc3RyaWN0TW9kZSA9IHRydWU7XG5cbiAgU1RSSUNUX01PREUgPSBzdHJpY3RNb2RlO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBkaWN0aW9uYXJ5LCBvdmVyd3JpdGluZyBleGlzdGluZyB2YWx1ZXMgYW5kIGFkZGluZyBuZXcgb25lcy5cbiAqIEBkZXByZWNhdGVkXG4gKi9cblZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gdXBkYXRlRGljdGlvbmFyeSAoZGF0YSkge1xuICBESUNUSU9OQVJZLm1lcmdlKGRhdGEpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbG9jYWxlIG9iamVjdCB0byB0aGUgZGljdGlvbmFyeS5cbiAqIEBkZXByZWNhdGVkXG4gKi9cblZhbGlkYXRvci5hZGRMb2NhbGUgPSBmdW5jdGlvbiBhZGRMb2NhbGUgKGxvY2FsZSkge1xuICBpZiAoISBsb2NhbGUubmFtZSkge1xuICAgIHdhcm4oJ1lvdXIgbG9jYWxlIG11c3QgaGF2ZSBhIG5hbWUgcHJvcGVydHknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnVwZGF0ZURpY3Rpb25hcnkoKCBvYmogPSB7fSwgb2JqW2xvY2FsZS5uYW1lXSA9IGxvY2FsZSwgb2JqICkpO1xuICAgIHZhciBvYmo7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBsb2NhbGUgb2JqZWN0IHRvIHRoZSBkaWN0aW9uYXJ5LlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBsb2NhbGVcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRMb2NhbGUgPSBmdW5jdGlvbiBhZGRMb2NhbGUgKGxvY2FsZSkge1xuICBWYWxpZGF0b3IuYWRkTG9jYWxlKGxvY2FsZSk7XG59O1xuXG4vKipcbiAqIEFkZHMgYW5kIHNldHMgdGhlIGN1cnJlbnQgbG9jYWxlIGZvciB0aGUgdmFsaWRhdG9yLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmxvY2FsaXplID0gZnVuY3Rpb24gbG9jYWxpemUgKGxhbmcsIGRpY3Rpb25hcnkpIHtcbiAgVmFsaWRhdG9yLmxvY2FsaXplKGxhbmcsIGRpY3Rpb25hcnkpO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuZCBzZXRzIHRoZSBjdXJyZW50IGxvY2FsZSBmb3IgdGhlIHZhbGlkYXRvci5cbiAqL1xuVmFsaWRhdG9yLmxvY2FsaXplID0gZnVuY3Rpb24gbG9jYWxpemUgKGxhbmcsIGRpY3Rpb25hcnkpIHtcbiAgLy8gbWVyZ2UgdGhlIGRpY3Rpb25hcnkuXG4gIGlmIChkaWN0aW9uYXJ5KSB7XG4gICAgZGljdGlvbmFyeSA9IGFzc2lnbih7fSwgZGljdGlvbmFyeSwgeyBuYW1lOiBsYW5nIH0pO1xuICAgIFZhbGlkYXRvci5hZGRMb2NhbGUoZGljdGlvbmFyeSk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGxvY2FsZS5cbiAgVmFsaWRhdG9yLmxvY2FsZSA9IGxhbmc7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGZpZWxkIHRvIGJlIHZhbGlkYXRlZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2ggKGZpZWxkKSB7XG4gIC8vIGRlcHJlY2F0ZTogaGFuZGxlIG9sZCBzaWduYXR1cmUuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZpZWxkID0gYXNzaWduKHt9LCB7XG4gICAgICBuYW1lOiBhcmd1bWVudHNbMF0sXG4gICAgICBydWxlczogYXJndW1lbnRzWzFdXG4gICAgfSwgYXJndW1lbnRzWzJdIHx8IHsgdm06IHsgJHZhbGlkYXRvcjogdGhpcyB9IH0pO1xuICB9XG5cbiAgLy8gZml4ZXMgaW5pdGlhbCB2YWx1ZSBkZXRlY3Rpb24gd2l0aCB2LW1vZGVsIGFuZCBzZWxlY3QgZWxlbWVudHMuXG4gIHZhciB2YWx1ZSA9IGZpZWxkLmluaXRpYWxWYWx1ZTtcbiAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBGaWVsZCkpIHtcbiAgICBmaWVsZCA9IG5ldyBGaWVsZChmaWVsZC5lbCB8fCBudWxsLCBmaWVsZCk7XG4gIH1cblxuICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcblxuICAvLyB2YWxpZGF0ZSB0aGUgZmllbGQgaW5pdGlhbGx5XG4gIGlmIChmaWVsZC5pbml0aWFsKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgoXCIjXCIgKyAoZmllbGQuaWQpKSwgdmFsdWUgfHwgZmllbGQudmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3ZhbGlkYXRlKGZpZWxkLCB2YWx1ZSB8fCBmaWVsZC52YWx1ZSwgdHJ1ZSkudGhlbihmdW5jdGlvbiAodmFsaWQpIHtcbiAgICAgIGZpZWxkLmZsYWdzLnZhbGlkID0gdmFsaWQ7XG4gICAgICBmaWVsZC5mbGFncy5pbnZhbGlkID0gIXZhbGlkO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5fYWRkRmxhZyhmaWVsZCwgZmllbGQuc2NvcGUpO1xuICByZXR1cm4gZmllbGQ7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGZsYWdzIG9uIGEgZmllbGQuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuZmxhZyA9IGZ1bmN0aW9uIGZsYWcgKG5hbWUsIGZsYWdzKSB7XG4gIHZhciBmaWVsZCA9IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lKTtcbiAgaWYgKCEgZmllbGQgfHwgIWZsYWdzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZmllbGQuc2V0RmxhZ3MoZmxhZ3MpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgZmllbGQgZnJvbSB0aGUgdmFsaWRhdG9yLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCAobmFtZSwgc2NvcGUpIHtcbiAgdmFyIGZpZWxkID0gbmFtZSBpbnN0YW5jZW9mIEZpZWxkID8gbmFtZSA6IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lLCBzY29wZSk7XG4gIGlmICghZmllbGQpIHsgcmV0dXJuOyB9XG5cbiAgZmllbGQuZGVzdHJveSgpO1xuICB0aGlzLmVycm9ycy5yZW1vdmUoZmllbGQubmFtZSwgZmllbGQuc2NvcGUsIGZpZWxkLmlkKTtcbiAgdGhpcy5maWVsZHMucmVtb3ZlKGZpZWxkKTtcbiAgdmFyIGZsYWdzID0gdGhpcy5mbGFncztcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChmaWVsZC5zY29wZSkgJiYgZmxhZ3NbKFwiJFwiICsgKGZpZWxkLnNjb3BlKSldKSB7XG4gICAgZGVsZXRlIGZsYWdzWyhcIiRcIiArIChmaWVsZC5zY29wZSkpXVtmaWVsZC5uYW1lXTtcbiAgfSBlbHNlIGlmIChpc051bGxPclVuZGVmaW5lZChmaWVsZC5zY29wZSkpIHtcbiAgICBkZWxldGUgZmxhZ3NbZmllbGQubmFtZV07XG4gIH1cblxuICB0aGlzLmZsYWdzID0gYXNzaWduKHt9LCBmbGFncyk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjdXN0b20gdmFsaWRhdG9yIHRvIHRoZSBsaXN0IG9mIHZhbGlkYXRpb24gcnVsZXMuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgVmFsaWRhdG9yLmV4dGVuZChuYW1lLCB2YWxpZGF0b3IpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIGEgZmllbGQsIHVwZGF0aW5nIGJvdGggZXJyb3JzIGFuZCBmbGFncy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKGlkLCByZWYpIHtcbiAgICB2YXIgc2NvcGUgPSByZWYuc2NvcGU7XG5cbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKChcIiNcIiArIGlkKSk7XG4gIHRoaXMuZXJyb3JzLnVwZGF0ZShpZCwgeyBzY29wZTogc2NvcGUgfSk7XG5cbiAgLy8gcmVtb3ZlIG9sZCBzY29wZS5cbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChmaWVsZC5zY29wZSkgJiYgdGhpcy5mbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV0pIHtcbiAgICBkZWxldGUgdGhpcy5mbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV1bZmllbGQubmFtZV07XG4gIH0gZWxzZSBpZiAoaXNOdWxsT3JVbmRlZmluZWQoZmllbGQuc2NvcGUpKSB7XG4gICAgZGVsZXRlIHRoaXMuZmxhZ3NbZmllbGQubmFtZV07XG4gIH1cblxuICB0aGlzLl9hZGRGbGFnKGZpZWxkLCBzY29wZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG5hbWUpIHtcbiAgVmFsaWRhdG9yLnJlbW92ZShuYW1lKTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgdmFsaWRhdG9yIGN1cnJlbnQgbGFuZ3VhZ2UuXG4gKiBAZGVwcmVjYXRlZFxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnNldExvY2FsZSA9IGZ1bmN0aW9uIHNldExvY2FsZSAobGFuZ3VhZ2UpIHtcbiAgdGhpcy5sb2NhbGUgPSBsYW5ndWFnZTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgbWVzc2FnZXMgZGljdGlvbmFyeSwgb3ZlcndyaXRpbmcgZXhpc3RpbmcgdmFsdWVzIGFuZCBhZGRpbmcgbmV3IG9uZXMuXG4gKiBAZGVwcmVjYXRlZFxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnVwZGF0ZURpY3Rpb25hcnkgPSBmdW5jdGlvbiB1cGRhdGVEaWN0aW9uYXJ5IChkYXRhKSB7XG4gIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGRhdGEpO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGEgcmVnaXN0ZXJlZCBmaWVsZCB2YWxpZGF0aW9ucy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIHZhbGlkYXRlIChuYW1lLCB2YWx1ZSwgc2NvcGUpIHtcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgaWYgKHRoaXMucGF1c2VkKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICAvLyBvdmVybG9hZCB0byB2YWxpZGF0ZSBhbGwuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVTY29wZXMoKTtcbiAgfVxuXG4gIC8vIG92ZXJsb2FkIHRvIHZhbGlkYXRlIHNjb3BlLWxlc3MgZmllbGRzLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBhcmd1bWVudHNbMF0gPT09ICcqJykge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQWxsKCk7XG4gIH1cblxuICAvLyBvdmVybG9hZCB0byB2YWxpZGF0ZSBhIHNjb3BlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnc3RyaW5nJyAmJiAvXiguKylcXC5cXCokLy50ZXN0KGFyZ3VtZW50c1swXSkpIHtcbiAgICB2YXIgbWF0Y2hlZCA9IGFyZ3VtZW50c1swXS5tYXRjaCgvXiguKylcXC5cXCokLylbMV07XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbGwobWF0Y2hlZCk7XG4gIH1cblxuICB2YXIgZmllbGQgPSB0aGlzLl9yZXNvbHZlRmllbGQobmFtZSwgc2NvcGUpO1xuICBpZiAoIWZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZpZWxkTm90Rm91bmQobmFtZSwgc2NvcGUpO1xuICB9XG5cbiAgdGhpcy5lcnJvcnMucmVtb3ZlKGZpZWxkLm5hbWUsIGZpZWxkLnNjb3BlLCBmaWVsZC5pZCk7XG4gIGZpZWxkLmZsYWdzLnBlbmRpbmcgPSB0cnVlO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbHVlID0gZmllbGQudmFsdWU7XG4gIH1cblxuICB2YXIgc2lsZW50UnVuID0gZmllbGQuaXNEaXNhYmxlZDtcblxuICByZXR1cm4gdGhpcy5fdmFsaWRhdGUoZmllbGQsIHZhbHVlLCBzaWxlbnRSdW4pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGZpZWxkLnNldEZsYWdzKHtcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxuICAgICAgdmFsaWQ6IHJlc3VsdCxcbiAgICAgIHZhbGlkYXRlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHNpbGVudFJ1bikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn07XG5cbi8qKlxuICogUGF1c2VzIHRoZSB2YWxpZGF0b3IuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVzdW1lcyB0aGUgdmFsaWRhdG9yLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBlYWNoIHZhbHVlIGFnYWluc3QgdGhlIGNvcnJlc3BvbmRpbmcgZmllbGQgdmFsaWRhdGlvbnMuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVBbGwgPSBmdW5jdGlvbiB2YWxpZGF0ZUFsbCAodmFsdWVzKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgdmFyIG1hdGNoZXIgPSBudWxsO1xuICB2YXIgcHJvdmlkZWRWYWx1ZXMgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogdmFsdWVzIH07XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWVzKSkge1xuICAgIG1hdGNoZXIgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4geyBuYW1lOiBrZXksIHNjb3BlOiBhcmd1bWVudHMkMVsxXSB8fCBudWxsIH07XG4gICAgfSk7XG4gICAgcHJvdmlkZWRWYWx1ZXMgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogbnVsbCB9OyAvLyBnbG9iYWwgc2NvcGUuXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgbWF0Y2hlciA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHsgbmFtZToga2V5LCBzY29wZTogYXJndW1lbnRzJDFbMV0gfHwgbnVsbCB9O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHByb21pc2VzID0gdGhpcy5maWVsZHMuZmlsdGVyKG1hdGNoZXIpLm1hcChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHRoaXMkMS52YWxpZGF0ZShcbiAgICAoXCIjXCIgKyAoZmllbGQuaWQpKSxcbiAgICBwcm92aWRlZFZhbHVlcyA/IHZhbHVlc1tmaWVsZC5uYW1lXSA6IGZpZWxkLnZhbHVlXG4gICk7IH0pO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykgeyByZXR1cm4gcmVzdWx0cy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH0pO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHNjb3Blcy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZVNjb3BlcyA9IGZ1bmN0aW9uIHZhbGlkYXRlU2NvcGVzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBwcm9taXNlcyA9IHRoaXMuZmllbGRzLm1hcChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHRoaXMkMS52YWxpZGF0ZShcbiAgICAoXCIjXCIgKyAoZmllbGQuaWQpKSxcbiAgICBmaWVsZC52YWx1ZVxuICApOyB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHsgcmV0dXJuIHJlc3VsdHMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pOyB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZmllbGRzIHRvIGJlIHZhbGlkYXRlZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlRmllbGRzID0gZnVuY3Rpb24gX2NyZWF0ZUZpZWxkcyAodmFsaWRhdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoIXZhbGlkYXRpb25zKSB7IHJldHVybjsgfVxuXG4gIE9iamVjdC5rZXlzKHZhbGlkYXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBvcHRpb25zID0gYXNzaWduKHt9LCB7IG5hbWU6IGZpZWxkLCBydWxlczogdmFsaWRhdGlvbnNbZmllbGRdIH0pO1xuICAgIHRoaXMkMS5hdHRhY2gob3B0aW9ucyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEYXRlIHJ1bGVzIG5lZWQgdGhlIGV4aXN0ZW5jZSBvZiBhIGZvcm1hdCwgc28gZGF0ZV9mb3JtYXQgbXVzdCBiZSBzdXBwbGllZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIF9nZXREYXRlRm9ybWF0ICh2YWxpZGF0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gbnVsbDtcbiAgaWYgKHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkodmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gdmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXRbMF07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0IHx8IHRoaXMuZGljdGlvbmFyeS5nZXREYXRlRm9ybWF0KHRoaXMubG9jYWxlKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgcnVsZSBpcyBhIGRhdGUgcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5faXNBRGF0ZVJ1bGUgPSBmdW5jdGlvbiBfaXNBRGF0ZVJ1bGUgKHJ1bGUpIHtcbiAgcmV0dXJuICEhIH5bJ2FmdGVyJywgJ2JlZm9yZScsICdkYXRlX2JldHdlZW4nLCAnZGF0ZV9mb3JtYXQnXS5pbmRleE9mKHJ1bGUpO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIGZpZWxkIGFuZCBhIHJ1bGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2Zvcm1hdEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIF9mb3JtYXRFcnJvck1lc3NhZ2UgKGZpZWxkLCBydWxlLCBkYXRhLCB0YXJnZXROYW1lKSB7XG4gICAgaWYgKCBkYXRhID09PSB2b2lkIDAgKSBkYXRhID0ge307XG4gICAgaWYgKCB0YXJnZXROYW1lID09PSB2b2lkIDAgKSB0YXJnZXROYW1lID0gbnVsbDtcblxuICB2YXIgbmFtZSA9IHRoaXMuX2dldEZpZWxkRGlzcGxheU5hbWUoZmllbGQpO1xuICB2YXIgcGFyYW1zID0gdGhpcy5fZ2V0TG9jYWxpemVkUGFyYW1zKHJ1bGUsIHRhcmdldE5hbWUpO1xuICAvLyBEZWZhdWx0cyB0byBlbmdsaXNoIG1lc3NhZ2UuXG4gIGlmICghdGhpcy5kaWN0aW9uYXJ5Lmhhc0xvY2FsZShMT0NBTEUpKSB7XG4gICAgdmFyIG1zZyQxID0gdGhpcy5kaWN0aW9uYXJ5LmdldEZpZWxkTWVzc2FnZSgnZW4nLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUpO1xuXG4gICAgcmV0dXJuIGlzQ2FsbGFibGUobXNnJDEpID8gbXNnJDEobmFtZSwgcGFyYW1zLCBkYXRhKSA6IG1zZyQxO1xuICB9XG5cbiAgdmFyIG1zZyA9IHRoaXMuZGljdGlvbmFyeS5nZXRGaWVsZE1lc3NhZ2UoTE9DQUxFLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUpO1xuXG4gIHJldHVybiBpc0NhbGxhYmxlKG1zZykgPyBtc2cobmFtZSwgcGFyYW1zLCBkYXRhKSA6IG1zZztcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhlIHJ1bGUgKG1haW5seSBmb3IgdGFyZ2V0IGZpZWxkcykuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldExvY2FsaXplZFBhcmFtcyA9IGZ1bmN0aW9uIF9nZXRMb2NhbGl6ZWRQYXJhbXMgKHJ1bGUsIHRhcmdldE5hbWUpIHtcbiAgICBpZiAoIHRhcmdldE5hbWUgPT09IHZvaWQgMCApIHRhcmdldE5hbWUgPSBudWxsO1xuXG4gIGlmICh+WydhZnRlcicsICdiZWZvcmUnLCAnY29uZmlybWVkJ10uaW5kZXhPZihydWxlLm5hbWUpICYmIHJ1bGUucGFyYW1zICYmIHJ1bGUucGFyYW1zWzBdKSB7XG4gICAgdmFyIGxvY2FsaXplZE5hbWUgPSB0YXJnZXROYW1lIHx8IHRoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUoTE9DQUxFLCBydWxlLnBhcmFtc1swXSwgcnVsZS5wYXJhbXNbMF0pO1xuICAgIHJldHVybiBbbG9jYWxpemVkTmFtZV0uY29uY2F0KHJ1bGUucGFyYW1zLnNsaWNlKDEpKTtcbiAgfVxuXG4gIHJldHVybiBydWxlLnBhcmFtcztcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgYW4gYXBwcm9wcmlhdGUgZGlzcGxheSBuYW1lLCBmaXJzdCBjaGVja2luZyAnZGF0YS1hcycgb3IgdGhlIHJlZ2lzdGVyZWQgJ3ByZXR0eU5hbWUnXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldEZpZWxkRGlzcGxheU5hbWUgPSBmdW5jdGlvbiBfZ2V0RmllbGREaXNwbGF5TmFtZSAoZmllbGQpIHtcbiAgcmV0dXJuIGZpZWxkLmRpc3BsYXlOYW1lIHx8IHRoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUoTE9DQUxFLCBmaWVsZC5uYW1lLCBmaWVsZC5uYW1lKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGZpZWxkIGZsYWdzIHRvIHRoZSBmbGFncyBjb2xsZWN0aW9uLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9hZGRGbGFnID0gZnVuY3Rpb24gX2FkZEZsYWcgKGZpZWxkLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgdGhpcy5mbGFncyA9IGFzc2lnbih7fSwgdGhpcy5mbGFncywgKCBvYmogPSB7fSwgb2JqWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqICkpO1xuICAgICAgdmFyIG9iajtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2NvcGVPYmogPSBhc3NpZ24oe30sIHRoaXMuZmxhZ3NbKFwiJFwiICsgc2NvcGUpXSB8fCB7fSwgKCBvYmokMSA9IHt9LCBvYmokMVsoXCJcIiArIChmaWVsZC5uYW1lKSldID0gZmllbGQuZmxhZ3MsIG9iaiQxICkpO1xuICAgIHZhciBvYmokMTtcbiAgdGhpcy5mbGFncyA9IGFzc2lnbih7fSwgdGhpcy5mbGFncywgKCBvYmokMiA9IHt9LCBvYmokMlsoXCIkXCIgKyBzY29wZSldID0gc2NvcGVPYmosIG9iaiQyICkpO1xuICAgIHZhciBvYmokMjtcbn07XG5cbi8qKlxuICogVGVzdHMgYSBzaW5nbGUgaW5wdXQgdmFsdWUgYWdhaW5zdCBhIHJ1bGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX3Rlc3QgPSBmdW5jdGlvbiBfdGVzdCAoZmllbGQsIHZhbHVlLCBydWxlLCBzaWxlbnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgdmFsaWRhdG9yID0gUlVMRVNbcnVsZS5uYW1lXTtcbiAgdmFyIHBhcmFtcyA9IEFycmF5LmlzQXJyYXkocnVsZS5wYXJhbXMpID8gdG9BcnJheShydWxlLnBhcmFtcykgOiBbXTtcbiAgdmFyIHRhcmdldE5hbWUgPSBudWxsO1xuICBpZiAoIXZhbGlkYXRvciB8fCB0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoKFwiTm8gc3VjaCB2YWxpZGF0b3IgJ1wiICsgKHJ1bGUubmFtZSkgKyBcIicgZXhpc3RzLlwiKSk7XG4gIH1cblxuICAvLyBoYXMgZmllbGQgZGVwZW5kZW5jaWVzLlxuICBpZiAoLyhjb25maXJtZWR8YWZ0ZXJ8YmVmb3JlKS8udGVzdChydWxlLm5hbWUpKSB7XG4gICAgdmFyIHRhcmdldCA9IGZpbmQoZmllbGQuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSBydWxlLm5hbWU7IH0pO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldE5hbWUgPSB0YXJnZXQuZmllbGQuZGlzcGxheU5hbWU7XG4gICAgICBwYXJhbXMgPSBbdGFyZ2V0LmZpZWxkLnZhbHVlXS5jb25jYXQocGFyYW1zLnNsaWNlKDEpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocnVsZS5uYW1lID09PSAncmVxdWlyZWQnICYmIGZpZWxkLnJlamVjdHNGYWxzZSkge1xuICAgIC8vIGludmFsaWRhdGUgZmFsc2UgaWYgbm8gYXJncyB3ZXJlIHNwZWNpZmllZCBhbmQgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYnkgZGVmYXVsdC5cbiAgICBwYXJhbXMgPSBwYXJhbXMubGVuZ3RoID8gcGFyYW1zIDogW3RydWVdO1xuICB9XG5cbiAgaWYgKHRoaXMuX2lzQURhdGVSdWxlKHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgZGF0ZUZvcm1hdCA9IHRoaXMuX2dldERhdGVGb3JtYXQoZmllbGQucnVsZXMpO1xuICAgIGlmIChydWxlLm5hbWUgIT09ICdkYXRlX2Zvcm1hdCcpIHtcbiAgICAgIHBhcmFtcy5wdXNoKGRhdGVGb3JtYXQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSB2YWxpZGF0b3IodmFsdWUsIHBhcmFtcyk7XG5cbiAgLy8gSWYgaXQgaXMgYSBwcm9taXNlLlxuICBpZiAoaXNDYWxsYWJsZShyZXN1bHQudGhlbikpIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGFsbFZhbGlkID0gdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaXNPYmplY3QodCkgPyB0LnZhbGlkIDogdCk7IH0pO1xuICAgICAgfSBlbHNlIHsgLy8gSXMgYSBzaW5nbGUgb2JqZWN0L2Jvb2xlYW4uXG4gICAgICAgIGFsbFZhbGlkID0gaXNPYmplY3QodmFsdWVzKSA/IHZhbHVlcy52YWxpZCA6IHZhbHVlcztcbiAgICAgICAgZGF0YSA9IHZhbHVlcy5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFsbFZhbGlkICYmICFzaWxlbnQpIHtcbiAgICAgICAgdGhpcyQxLmVycm9ycy5hZGQoe1xuICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICBmaWVsZDogZmllbGQubmFtZSxcbiAgICAgICAgICBtc2c6IHRoaXMkMS5fZm9ybWF0RXJyb3JNZXNzYWdlKGZpZWxkLCBydWxlLCBkYXRhLCB0YXJnZXROYW1lKSxcbiAgICAgICAgICBydWxlOiBydWxlLm5hbWUsXG4gICAgICAgICAgc2NvcGU6IGZpZWxkLnNjb3BlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsVmFsaWQ7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkpIHtcbiAgICByZXN1bHQgPSB7IHZhbGlkOiByZXN1bHQsIGRhdGE6IHt9IH07XG4gIH1cblxuICBpZiAoIXJlc3VsdC52YWxpZCAmJiAhc2lsZW50KSB7XG4gICAgdGhpcy5lcnJvcnMuYWRkKHtcbiAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgbXNnOiB0aGlzLl9mb3JtYXRFcnJvck1lc3NhZ2UoZmllbGQsIHJ1bGUsIHJlc3VsdC5kYXRhLCB0YXJnZXROYW1lKSxcbiAgICAgIHJ1bGU6IHJ1bGUubmFtZSxcbiAgICAgIHNjb3BlOiBmaWVsZC5zY29wZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC52YWxpZDtcbn07XG5cbi8qKlxuICogTWVyZ2VzIGEgdmFsaWRhdG9yIG9iamVjdCBpbnRvIHRoZSBSVUxFUyBhbmQgTWVzc2FnZXMuXG4gKi9cblZhbGlkYXRvci5fbWVyZ2UgPSBmdW5jdGlvbiBfbWVyZ2UgKG5hbWUsIHZhbGlkYXRvcikge1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IpKSB7XG4gICAgUlVMRVNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgUlVMRVNbbmFtZV0gPSB2YWxpZGF0b3IudmFsaWRhdGU7XG4gIGlmIChpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSkge1xuICAgIERJQ1RJT05BUlkuc2V0TWVzc2FnZShMT0NBTEUsIG5hbWUsIHZhbGlkYXRvci5nZXRNZXNzYWdlKTtcbiAgfVxuXG4gIGlmICh2YWxpZGF0b3IubWVzc2FnZXMpIHtcbiAgICBESUNUSU9OQVJZLm1lcmdlKFxuICAgICAgT2JqZWN0LmtleXModmFsaWRhdG9yLm1lc3NhZ2VzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwcmV2O1xuICAgICAgICBkaWN0W2N1cnJdID0ge1xuICAgICAgICAgIG1lc3NhZ2VzOiAoIG9iaiA9IHt9LCBvYmpbbmFtZV0gPSB2YWxpZGF0b3IubWVzc2FnZXNbY3Vycl0sIG9iaiApXG4gICAgICAgIH07XG4gICAgICAgICAgdmFyIG9iajtcblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgIH0sIHt9KVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogR3VhcmRzIGZyb20gZXh0ZW5zaW9uIHZpb2xhdGlvbnMuXG4gKi9cblZhbGlkYXRvci5fZ3VhcmRFeHRlbmQgPSBmdW5jdGlvbiBfZ3VhcmRFeHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFpc0NhbGxhYmxlKHZhbGlkYXRvci52YWxpZGF0ZSkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgKFwiRXh0ZW5zaW9uIEVycm9yOiBUaGUgdmFsaWRhdG9yICdcIiArIG5hbWUgKyBcIicgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGhhdmUgYSAndmFsaWRhdGUnIG1ldGhvZC5cIilcbiAgICApO1xuICB9XG5cbiAgaWYgKCFpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSAmJiAhaXNPYmplY3QodmFsaWRhdG9yLm1lc3NhZ2VzKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAoXCJFeHRlbnNpb24gRXJyb3I6IFRoZSB2YWxpZGF0b3IgJ1wiICsgbmFtZSArIFwiJyBtdXN0IGhhdmUgYSAnZ2V0TWVzc2FnZScgbWV0aG9kIG9yIGhhdmUgYSAnbWVzc2FnZXMnIG9iamVjdC5cIilcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFRyaWVzIGRpZmZlcmVudCBzdHJhdGVnaWVzIHRvIGZpbmQgYSBmaWVsZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fcmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gX3Jlc29sdmVGaWVsZCAobmFtZSwgc2NvcGUpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChzY29wZSkpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IG5hbWUsIHNjb3BlOiBzY29wZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lWzBdID09PSAnIycpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IGlkOiBuYW1lLnNsaWNlKDEpIH0pO1xuICB9XG5cbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICB2YXIgcmVmID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgdmFyIGZpZWxkU2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgZmllbGROYW1lID0gcmVmLnNsaWNlKDEpO1xuICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBmaWVsZE5hbWUuam9pbignLicpLCBzY29wZTogZmllbGRTY29wZSB9KTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IG5hbWUsIHNjb3BlOiBudWxsIH0pO1xufTtcblxuLyoqXG4gKiBIYW5kbGVzIHdoZW4gYSBmaWVsZCBpcyBub3QgZm91bmQgZGVwZW5kaW5nIG9uIHRoZSBzdHJpY3QgZmxhZy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5faGFuZGxlRmllbGROb3RGb3VuZCA9IGZ1bmN0aW9uIF9oYW5kbGVGaWVsZE5vdEZvdW5kIChuYW1lLCBzY29wZSkge1xuICBpZiAoIXRoaXMuc3RyaWN0KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICB2YXIgZnVsbE5hbWUgPSBpc051bGxPclVuZGVmaW5lZChzY29wZSkgPyBuYW1lIDogKFwiXCIgKyAoIWlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSA/IHNjb3BlICsgJy4nIDogJycpICsgbmFtZSk7XG4gIHRocm93IGNyZWF0ZUVycm9yKFxuICAgIChcIlZhbGlkYXRpbmcgYSBub24tZXhpc3RlbnQgZmllbGQ6IFxcXCJcIiArIGZ1bGxOYW1lICsgXCJcXFwiLiBVc2UgXFxcImF0dGFjaCgpXFxcIiBmaXJzdC5cIilcbiAgKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIHRoZSB2YWxpZGF0aW9uIHByb2Nlc3MuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlID0gZnVuY3Rpb24gX3ZhbGlkYXRlIChmaWVsZCwgdmFsdWUsIHNpbGVudCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggc2lsZW50ID09PSB2b2lkIDAgKSBzaWxlbnQgPSBmYWxzZTtcblxuICBpZiAoIWZpZWxkLmlzUmVxdWlyZWQgJiYgKGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJycpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IFtdO1xuICB2YXIgaXNFeGl0RWFybHkgPSBmYWxzZTtcbiAgLy8gdXNlIG9mICcuc29tZSgpJyBpcyB0byBicmVhayBpdGVyYXRpb24gaW4gbWlkZGxlIGJ5IHJldHVybmluZyB0cnVlXG4gIE9iamVjdC5rZXlzKGZpZWxkLnJ1bGVzKS5zb21lKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMkMS5fdGVzdChmaWVsZCwgdmFsdWUsIHsgbmFtZTogcnVsZSwgcGFyYW1zOiBmaWVsZC5ydWxlc1tydWxlXSB9LCBzaWxlbnQpO1xuXG4gICAgaWYgKGlzQ2FsbGFibGUocmVzdWx0LnRoZW4pKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmICh0aGlzJDEuZmFzdEV4aXQgJiYgIXJlc3VsdCkge1xuICAgICAgaXNFeGl0RWFybHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0QXNQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdEFzUHJvbWlzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRXhpdEVhcmx5O1xuICB9KTtcblxuICBpZiAoaXNFeGl0RWFybHkpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7IH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHZhbHVlcykgeyByZXR1cm4gdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9KTsgfSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVmFsaWRhdG9yLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVmFsaWRhdG9yLCBzdGF0aWNBY2Nlc3NvcnMgKTtcblxuLy8gXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgZmFrZUZsYWdzID0gY3JlYXRlUHJveHkoe30sIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgLy8gaXMgYSBzY29wZVxuICAgIGlmIChTdHJpbmcoa2V5KS5pbmRleE9mKCckJykgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWtlRmxhZ3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUZsYWdzKCk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHBhcmVudCB2YWxpZGF0b3IgaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAqL1xudmFyIHJlcXVlc3RzVmFsaWRhdG9yID0gZnVuY3Rpb24gKGluamVjdGlvbnMpIHtcbiAgaWYgKCEgaW5qZWN0aW9ucykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdGlvbnMpICYmIH5pbmplY3Rpb25zLmluZGV4T2YoJyR2YWxpZGF0b3InKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KGluamVjdGlvbnMpICYmIGluamVjdGlvbnMuJHZhbGlkYXRvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG52YXIgY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKHZtLCBvcHRpb25zKSB7IHJldHVybiBuZXcgVmFsaWRhdG9yKG51bGwsIHsgdm06IHZtLCBmYXN0RXhpdDogb3B0aW9ucy5mYXN0RXhpdCB9KTsgfTtcblxudmFyIG1peGluID0ge1xuICBwcm92aWRlOiBmdW5jdGlvbiBwcm92aWRlICgpIHtcbiAgICBpZiAodGhpcy4kdmFsaWRhdG9yICYmICFpc0J1aWx0SW5Db21wb25lbnQodGhpcy4kdm5vZGUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAkdmFsaWRhdG9yOiB0aGlzLiR2YWxpZGF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgLy8gaWYgYnVpbHQgaW4gZG8gbm90aGluZy5cbiAgICBpZiAoaXNCdWlsdEluQ29tcG9uZW50KHRoaXMuJHZub2RlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGl0cyBhIHJvb3QgaW5zdGFuY2Ugc2V0IHRoZSBjb25maWcgaWYgaXQgZXhpc3RzLlxuICAgIGlmICghdGhpcy4kcGFyZW50KSB7XG4gICAgICBDb25maWcubWVyZ2UodGhpcy4kb3B0aW9ucy4kX3ZlZVZhbGlkYXRlIHx8IHt9KTtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IENvbmZpZy5yZXNvbHZlKHRoaXMpO1xuICAgIHZhciBWdWUgPSB0aGlzLiRvcHRpb25zLl9iYXNlOyAvLyB0aGUgdnVlIGNvbnN0cnVjdG9yLlxuICAgIC8vIFRPRE86IERlcHJlY2F0ZVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJG9wdGlvbnMuJHZhbGlkYXRlcykge1xuICAgICAgd2FybignVGhlIGN0b3IgJHZhbGlkYXRlcyBvcHRpb24gaGFzIGJlZW4gZGVwcmVjYXRlZCBwbGVhc2Ugc2V0IHRoZSAkX3ZlZVZhbGlkYXRlLnZhbGlkYXRvciBvcHRpb24gdG8gXCJuZXdcIiBpbnN0ZWFkJyk7XG4gICAgICB0aGlzLiR2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXRzIGEgcm9vdCBpbnN0YW5jZSwgaW5qZWN0IGFueXdheXMsIG9yIGlmIGl0IHJlcXVlc3RlZCBhIG5ldyBpbnN0YW5jZS5cbiAgICBpZiAoIXRoaXMuJHBhcmVudCB8fCAodGhpcy4kb3B0aW9ucy4kX3ZlZVZhbGlkYXRlICYmIC9uZXcvLnRlc3QodGhpcy4kb3B0aW9ucy4kX3ZlZVZhbGlkYXRlLnZhbGlkYXRvcikpKSB7XG4gICAgICB0aGlzLiR2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3RlZCA9IHJlcXVlc3RzVmFsaWRhdG9yKHRoaXMuJG9wdGlvbnMuaW5qZWN0KTtcblxuICAgIC8vIGlmIGF1dG9tYXRpYyBpbmplY3Rpb24gaXMgZW5hYmxlZCBhbmQgbm8gaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAgICBpZiAoISB0aGlzLiR2YWxpZGF0b3IgJiYgb3B0aW9ucy5pbmplY3QgJiYgIXJlcXVlc3RlZCkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGRvbid0IGluamVjdCBlcnJvcnMgb3IgZmllbGRCYWcgYXMgbm8gdmFsaWRhdG9yIHdhcyByZXNvbHZlZC5cbiAgICBpZiAoISByZXF1ZXN0ZWQgJiYgISB0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBpcyBhIHZhbGlkYXRvciBidXQgaXQgaXNuJ3QgaW5qZWN0ZWQsIG1hcmsgYXMgcmVhY3RpdmUuXG4gICAgaWYgKCEgcmVxdWVzdGVkICYmIHRoaXMuJHZhbGlkYXRvcikge1xuICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcy4kdmFsaWRhdG9yLCAnZXJyb3JzJywgdGhpcy4kdmFsaWRhdG9yLmVycm9ycyk7XG4gICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLiR2YWxpZGF0b3IsICdmbGFncycsIHRoaXMuJHZhbGlkYXRvci5mbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKCEgdGhpcy4kb3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgdGhpcy4kb3B0aW9ucy5jb21wdXRlZCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRbb3B0aW9ucy5lcnJvckJhZ05hbWUgfHwgJ2Vycm9ycyddID0gZnVuY3Rpb24gZXJyb3JCYWdHZXR0ZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5lcnJvcnM7XG4gICAgfTtcbiAgICB0aGlzLiRvcHRpb25zLmNvbXB1dGVkW29wdGlvbnMuZmllbGRzQmFnTmFtZSB8fCAnZmllbGRzJ10gPSBmdW5jdGlvbiBmaWVsZEJhZ0dldHRlciAoKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuJHZhbGlkYXRvci5mbGFncykubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWtlRmxhZ3M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiR2YWxpZGF0b3IuZmxhZ3M7XG4gICAgfTtcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICBpZiAoaXNCdWlsdEluQ29tcG9uZW50KHRoaXMuJHZub2RlKSkgeyByZXR1cm47IH1cblxuICAgIC8vIG1hcmsgdGhlIHZhbGlkYXRvciBwYXVzZWQgdG8gcHJldmVudCBkZWxheWVkIHZhbGlkYXRpb24uXG4gICAgaWYgKHRoaXMuJHZhbGlkYXRvciAmJiB0aGlzLiR2YWxpZGF0b3Iub3duZXJJZCA9PT0gdGhpcy5fdWlkICYmIGlzQ2FsbGFibGUodGhpcy4kdmFsaWRhdG9yLnBhdXNlKSkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBcblxuLyoqXG4gKiBGaW5kcyB0aGUgcmVxdWVzdGVkIGZpZWxkIGJ5IGlkIGZyb20gdGhlIGNvbnRleHQgb2JqZWN0LlxuICovXG52YXIgZmluZEZpZWxkID0gZnVuY3Rpb24gKGVsLCBjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCB8fCAhY29udGV4dC4kdmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dC4kdmFsaWRhdG9yLmZpZWxkcy5maW5kKHsgaWQ6IGdldERhdGFBdHRyaWJ1dGUoZWwsICdpZCcpIH0pO1xufTtcblxudmFyIGRpcmVjdGl2ZSA9IHtcbiAgYmluZDogZnVuY3Rpb24gYmluZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgdmFyIHZhbGlkYXRvciA9IHZub2RlLmNvbnRleHQuJHZhbGlkYXRvcjtcbiAgICBpZiAoISB2YWxpZGF0b3IpIHtcbiAgICAgIHdhcm4oXCJObyB2YWxpZGF0b3IgaW5zdGFuY2UgaXMgcHJlc2VudCBvbiB2bSwgZGlkIHlvdSBmb3JnZXQgdG8gaW5qZWN0ICckdmFsaWRhdG9yJz9cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZpZWxkT3B0aW9ucyA9IEdlbmVyYXRvci5nZW5lcmF0ZShlbCwgYmluZGluZywgdm5vZGUpO1xuICAgIHZhbGlkYXRvci5hdHRhY2goZmllbGRPcHRpb25zKTtcbiAgfSxcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICB2YXIgZmllbGQgPSBmaW5kRmllbGQoZWwsIHZub2RlLmNvbnRleHQpO1xuICAgIHZhciBzY29wZSA9IEdlbmVyYXRvci5yZXNvbHZlU2NvcGUoZWwsIGJpbmRpbmcsIHZub2RlKTtcblxuICAgIC8vIHNraXAgaWYgc2NvcGUgaGFzbid0IGNoYW5nZWQuXG4gICAgaWYgKCFmaWVsZCB8fCBzY29wZSA9PT0gZmllbGQuc2NvcGUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBvbmx5IHVwZGF0ZSBzY29wZS5cbiAgICBmaWVsZC51cGRhdGUoeyBzY29wZTogc2NvcGUgfSk7XG5cbiAgICAvLyBhbGxvd3MgdGhlIGZpZWxkIHRvIHJlLWV2YWx1YXRlZCBvbmNlIG1vcmUgaW4gdGhlIHVwZGF0ZSBob29rLlxuICAgIGZpZWxkLnVwZGF0ZWQgPSBmYWxzZTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgdmFyIGZpZWxkID0gZmluZEZpZWxkKGVsLCB2bm9kZS5jb250ZXh0KTtcblxuICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkbyB1bm5lY2Nhc2FyeSB3b3JrIGlmIG5vIGltcG9ydGFudCBjaGFuZ2Ugd2FzIGRvbmUuXG4gICAgaWYgKCFmaWVsZCB8fCAoZmllbGQudXBkYXRlZCAmJiBpc0VxdWFsKGJpbmRpbmcudmFsdWUsIGJpbmRpbmcub2xkVmFsdWUpKSkgeyByZXR1cm47IH1cbiAgICB2YXIgc2NvcGUgPSBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgdmFyIHJ1bGVzID0gR2VuZXJhdG9yLnJlc29sdmVSdWxlcyhlbCwgYmluZGluZyk7XG5cbiAgICBmaWVsZC51cGRhdGUoe1xuICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgcnVsZXM6IHJ1bGVzXG4gICAgfSk7XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChlbCwgYmluZGluZywgcmVmKSB7XG4gICAgdmFyIGNvbnRleHQgPSByZWYuY29udGV4dDtcblxuICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgY29udGV4dCk7XG4gICAgaWYgKCFmaWVsZCkgeyByZXR1cm47IH1cblxuICAgIGNvbnRleHQuJHZhbGlkYXRvci5kZXRhY2goZmllbGQpO1xuICB9XG59O1xuXG52YXIgVnVlO1xuXG5mdW5jdGlvbiBpbnN0YWxsIChfVnVlLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmIChWdWUpIHtcbiAgICB3YXJuKCdhbHJlYWR5IGluc3RhbGxlZCwgVnVlLnVzZShWZWVWYWxpZGF0ZSkgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uY2UuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgVnVlID0gX1Z1ZTtcbiAgQ29uZmlnLm1lcmdlKG9wdGlvbnMpO1xuICBpZiAoQ29uZmlnLmN1cnJlbnQuZGljdGlvbmFyeSkge1xuICAgIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KENvbmZpZy5jdXJyZW50LmRpY3Rpb25hcnkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgIFZhbGlkYXRvci5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIFZhbGlkYXRvci5zZXRTdHJpY3RNb2RlKENvbmZpZy5jdXJyZW50LnN0cmljdCk7XG4gICAgfVxuICB9XG5cbiAgVnVlLm1peGluKG1peGluKTtcbiAgVnVlLmRpcmVjdGl2ZSgndmFsaWRhdGUnLCBkaXJlY3RpdmUpO1xufVxuXG4vKipcbiAqIEZvcm1hdGVzIGZpbGUgc2l6ZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHNpemVcbiAqL1xudmFyIGZvcm1hdEZpbGVTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgdmFyIHVuaXRzID0gWydCeXRlJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ107XG4gIHZhciB0aHJlc2hvbGQgPSAxMDI0O1xuICBzaXplID0gTnVtYmVyKHNpemUpICogdGhyZXNob2xkO1xuICB2YXIgaSA9IHNpemUgPT09IDAgPyAwIDogTWF0aC5mbG9vcihNYXRoLmxvZyhzaXplKSAvIE1hdGgubG9nKHRocmVzaG9sZCkpO1xuICByZXR1cm4gKCgoc2l6ZSAvIE1hdGgucG93KHRocmVzaG9sZCwgaSkpLnRvRml4ZWQoMikgKiAxKSArIFwiIFwiICsgKHVuaXRzW2ldKSk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB2ZWUtdmFsaWRhdGUgaXMgZGVmaW5lZCBnbG9iYWxseS5cbiAqL1xudmFyIGlzRGVmaW5lZEdsb2JhbGx5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFZlZVZhbGlkYXRlICE9PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciBtZXNzYWdlcyA9IHtcbiAgX2RlZmF1bHQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiB2YWx1ZSBpcyBub3QgdmFsaWQuXCIpOyB9LFxuICBhZnRlcjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGFmdGVyIFwiICsgKGluY2x1c2lvbiA/ICdvciBlcXVhbCB0byAnIDogJycpICsgdGFyZ2V0ICsgXCIuXCIpO1xufSxcbiAgYWxwaGFfZGFzaDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIGRhc2hlcyBhbmQgdW5kZXJzY29yZXMuXCIpOyB9LFxuICBhbHBoYV9udW06IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGFscGhhX3NwYWNlczogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgc3BhY2VzLlwiKTsgfSxcbiAgYWxwaGE6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhYmV0aWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGJlZm9yZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJlZm9yZSBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGJldHdlZW46IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcbiAgICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBiZXR3ZWVuIFwiICsgbWluICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xufSxcbiAgY29uZmlybWVkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoLlwiKTsgfSxcbiAgY3JlZGl0X2NhcmQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBpcyBpbnZhbGlkLlwiKTsgfSxcbiAgZGF0ZV9iZXR3ZWVuOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtaW4gPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIG11c3QgYmUgYmV0d2VlbiBcIiArIG1pbiArIFwiIGFuZCBcIiArIG1heCArIFwiLlwiKTtcbn0sXG4gIGRhdGVfZm9ybWF0OiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBmb3JtYXQgPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGluIHRoZSBmb3JtYXQgXCIgKyBmb3JtYXQgKyBcIi5cIik7XG59LFxuICBkZWNpbWFsOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbXTtcbiAgICB2YXIgZGVjaW1hbHMgPSByZWZbMF07IGlmICggZGVjaW1hbHMgPT09IHZvaWQgMCApIGRlY2ltYWxzID0gJyonO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBudW1lcmljIGFuZCBtYXkgY29udGFpbiBcIiArICghZGVjaW1hbHMgfHwgZGVjaW1hbHMgPT09ICcqJyA/ICcnIDogZGVjaW1hbHMpICsgXCIgZGVjaW1hbCBwb2ludHMuXCIpO1xufSxcbiAgZGlnaXRzOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIG51bWVyaWMgYW5kIGV4YWN0bHkgY29udGFpbiBcIiArIGxlbmd0aCArIFwiIGRpZ2l0cy5cIik7XG59LFxuICBkaW1lbnNpb25zOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIHdpZHRoICsgXCIgcGl4ZWxzIGJ5IFwiICsgaGVpZ2h0ICsgXCIgcGl4ZWxzLlwiKTtcbn0sXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsLlwiKTsgfSxcbiAgZXh0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGZpbGUuXCIpOyB9LFxuICBpbWFnZTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYW4gaW1hZ2UuXCIpOyB9LFxuICBpbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIGludGVnZXI6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGFuIGludGVnZXIuXCIpOyB9LFxuICBpcDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBpcCBhZGRyZXNzLlwiKTsgfSxcbiAgbGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIGlmIChtYXgpIHtcbiAgICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGxlbmd0aCBiZSBiZXR3ZWVuIFwiICsgbGVuZ3RoICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGxlbmd0aCBtdXN0IGJlIFwiICsgbGVuZ3RoICsgXCIuXCIpO1xuICB9LFxuICBtYXg6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtYXhfdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1heCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtYXggKyBcIiBvciBsZXNzLlwiKTtcbn0sXG4gIG1pbWVzOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBoYXZlIGEgdmFsaWQgZmlsZSB0eXBlLlwiKTsgfSxcbiAgbWluOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtaW5fdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtaW4gKyBcIiBvciBtb3JlLlwiKTtcbn0sXG4gIG5vdF9pbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIG51bWVyaWM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIG51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIHJlZ2V4OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgZm9ybWF0IGlzIGludmFsaWQuXCIpOyB9LFxuICByZXF1aXJlZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIHJlcXVpcmVkLlwiKTsgfSxcbiAgc2l6ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gXCIgKyAoZm9ybWF0RmlsZVNpemUoc2l6ZSkpICsgXCIuXCIpO1xufSxcbiAgdXJsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgbm90IGEgdmFsaWQgVVJMLlwiKTsgfVxufTtcblxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2VuJyxcbiAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICBhdHRyaWJ1dGVzOiB7fVxufTtcblxuaWYgKGlzRGVmaW5lZEdsb2JhbGx5KCkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFZlZVZhbGlkYXRlLlZhbGlkYXRvci5hZGRMb2NhbGUobG9jYWxlKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIHVzZSAocGx1Z2luLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICghaXNDYWxsYWJsZShwbHVnaW4pKSB7XG4gICAgcmV0dXJuIHdhcm4oJ1RoZSBwbHVnaW4gbXVzdCBiZSBhIGNhbGxhYmxlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBwbHVnaW4oeyBWYWxpZGF0b3I6IFZhbGlkYXRvciwgRXJyb3JCYWc6IEVycm9yQmFnLCBSdWxlczogVmFsaWRhdG9yLnJ1bGVzIH0sIG9wdGlvbnMpO1xufVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX0hPVVIgPSAzNjAwMDAwO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMDtcbnZhciBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTID0gMjtcblxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltZXRlcjogL1tUIF0vLFxuICBwbGFpblRpbWU6IC86LyxcblxuICAvLyB5ZWFyIHRva2Vuc1xuICBZWTogL14oXFxkezJ9KSQvLFxuICBZWVk6IFtcbiAgICAvXihbKy1dXFxkezJ9KSQvLCAvLyAwIGFkZGl0aW9uYWwgZGlnaXRzXG4gICAgL14oWystXVxcZHszfSkkLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gICAgL14oWystXVxcZHs0fSkkLyAvLyAyIGFkZGl0aW9uYWwgZGlnaXRzXG4gIF0sXG4gIFlZWVk6IC9eKFxcZHs0fSkvLFxuICBZWVlZWTogW1xuICAgIC9eKFsrLV1cXGR7NH0pLywgLy8gMCBhZGRpdGlvbmFsIGRpZ2l0c1xuICAgIC9eKFsrLV1cXGR7NX0pLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gICAgL14oWystXVxcZHs2fSkvIC8vIDIgYWRkaXRpb25hbCBkaWdpdHNcbiAgXSxcblxuICAvLyBkYXRlIHRva2Vuc1xuICBNTTogL14tKFxcZHsyfSkkLyxcbiAgREREOiAvXi0/KFxcZHszfSkkLyxcbiAgTU1ERDogL14tPyhcXGR7Mn0pLT8oXFxkezJ9KSQvLFxuICBXd3c6IC9eLT9XKFxcZHsyfSkkLyxcbiAgV3d3RDogL14tP1coXFxkezJ9KS0/KFxcZHsxfSkkLyxcblxuICBISDogL14oXFxkezJ9KFsuLF1cXGQqKT8pJC8sXG4gIEhITU06IC9eKFxcZHsyfSk6PyhcXGR7Mn0oWy4sXVxcZCopPykkLyxcbiAgSEhNTVNTOiAvXihcXGR7Mn0pOj8oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvLFxuXG4gIC8vIHRpbWV6b25lIHRva2Vuc1xuICB0aW1lem9uZTogLyhbWistXS4qKSQvLFxuICB0aW1lem9uZVo6IC9eKFopJC8sXG4gIHRpbWV6b25lSEg6IC9eKFsrLV0pKFxcZHsyfSkkLyxcbiAgdGltZXpvbmVISE1NOiAvXihbKy1dKShcXGR7Mn0pOj8oXFxkezJ9KSQvXG59O1xuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiBhbiBhcmd1bWVudCBpcyBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGl0LlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBudWxsLCBpdCBpcyB0cmVhdGVkIGFzIGFuIGludmFsaWQgZGF0ZS5cbiAqXG4gKiBJZiBhbGwgYWJvdmUgZmFpbHMsIHRoZSBmdW5jdGlvbiBwYXNzZXMgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIERhdGUgY29uc3RydWN0b3IuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKiBBbGwgKmRhdGUtZm5zKiBmdW5jdGlvbnMgd2lsbCB0aHJvdyBgUmFuZ2VFcnJvcmAgaWYgYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgaXMgbm90IDAsIDEsIDIgb3IgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSB0b0RhdGUoJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiB2YXIgcmVzdWx0ID0gdG9EYXRlKCcrMDIwMTQxMDEnLCB7YWRkaXRpb25hbERpZ2l0czogMX0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiB0b0RhdGUgKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuXG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTIDogTnVtYmVyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJylcbiAgfVxuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuXG4gIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gIHZhciB5ZWFyID0gcGFyc2VZZWFyUmVzdWx0LnllYXI7XG4gIHZhciByZXN0RGF0ZVN0cmluZyA9IHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZztcblxuICB2YXIgZGF0ZSA9IHBhcnNlRGF0ZShyZXN0RGF0ZVN0cmluZywgeWVhcik7XG5cbiAgaWYgKGRhdGUpIHtcbiAgICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgIHZhciBvZmZzZXQ7XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXQgb2Zmc2V0IGFjY3VyYXRlIHRvIGhvdXIgaW4gdGltZXpvbmVzIHRoYXQgY2hhbmdlIG9mZnNldFxuICAgICAgb2Zmc2V0ID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgIG9mZnNldCA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nIChkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1ldGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgaWYgKHBhdHRlcm5zLnBsYWluVGltZS50ZXN0KGFycmF5WzBdKSkge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBudWxsO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzXG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhciAoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcGF0dGVybllZWSA9IHBhdHRlcm5zLllZWVthZGRpdGlvbmFsRGlnaXRzXTtcbiAgdmFyIHBhdHRlcm5ZWVlZWSA9IHBhdHRlcm5zLllZWVlZW2FkZGl0aW9uYWxEaWdpdHNdO1xuXG4gIHZhciB0b2tlbjtcblxuICAvLyBZWVlZIG9yIMKxWVlZWVlcbiAgdG9rZW4gPSBwYXR0ZXJucy5ZWVlZLmV4ZWMoZGF0ZVN0cmluZykgfHwgcGF0dGVybllZWVlZLmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHZhciB5ZWFyU3RyaW5nID0gdG9rZW5bMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KHllYXJTdHJpbmcsIDEwKSxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKHllYXJTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFlZIG9yIMKxWVlZXG4gIHRva2VuID0gcGF0dGVybnMuWVkuZXhlYyhkYXRlU3RyaW5nKSB8fCBwYXR0ZXJuWVlZLmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHZhciBjZW50dXJ5U3RyaW5nID0gdG9rZW5bMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KGNlbnR1cnlTdHJpbmcsIDEwKSAqIDEwMCxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKGNlbnR1cnlTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZSAoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgdG9rZW47XG4gIHZhciBkYXRlO1xuICB2YXIgbW9udGg7XG4gIHZhciB3ZWVrO1xuXG4gIC8vIFlZWVlcbiAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhcik7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktTU1cbiAgdG9rZW4gPSBwYXR0ZXJucy5NTS5leGVjKGRhdGVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgbW9udGggPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoKTtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1EREQgb3IgWVlZWURERFxuICB0b2tlbiA9IHBhdHRlcm5zLkRERC5leGVjKGRhdGVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgdmFyIGRheU9mWWVhciA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCk7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBkYXlPZlllYXIpO1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLU1NLUREIG9yIFlZWVlNTUREXG4gIHRva2VuID0gcGF0dGVybnMuTU1ERC5leGVjKGRhdGVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgbW9udGggPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMTtcbiAgICB2YXIgZGF5ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLVd3dyBvciBZWVlZV3d3XG4gIHRva2VuID0gcGF0dGVybnMuV3d3LmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHdlZWsgPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMTtcbiAgICByZXR1cm4gZGF5T2ZJU09ZZWFyKHllYXIsIHdlZWspXG4gIH1cblxuICAvLyBZWVlZLVd3dy1EIG9yIFlZWVlXd3dEXG4gIHRva2VuID0gcGF0dGVybnMuV3d3RC5leGVjKGRhdGVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICB3ZWVrID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKSAtIDE7XG4gICAgdmFyIGRheU9mV2VlayA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxO1xuICAgIHJldHVybiBkYXlPZklTT1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKVxuICB9XG5cbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIGRhdGVcbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lICh0aW1lU3RyaW5nKSB7XG4gIHZhciB0b2tlbjtcbiAgdmFyIGhvdXJzO1xuICB2YXIgbWludXRlcztcblxuICAvLyBoaFxuICB0b2tlbiA9IHBhdHRlcm5zLkhILmV4ZWModGltZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGhvdXJzID0gcGFyc2VGbG9hdCh0b2tlblsxXS5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSXG4gIH1cblxuICAvLyBoaDptbSBvciBoaG1tXG4gIHRva2VuID0gcGF0dGVybnMuSEhNTS5leGVjKHRpbWVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICBob3VycyA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCk7XG4gICAgbWludXRlcyA9IHBhcnNlRmxvYXQodG9rZW5bMl0ucmVwbGFjZSgnLCcsICcuJykpO1xuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArXG4gICAgICBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURVxuICB9XG5cbiAgLy8gaGg6bW06c3Mgb3IgaGhtbXNzXG4gIHRva2VuID0gcGF0dGVybnMuSEhNTVNTLmV4ZWModGltZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGhvdXJzID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKTtcbiAgICBtaW51dGVzID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKTtcbiAgICB2YXIgc2Vjb25kcyA9IHBhcnNlRmxvYXQodG9rZW5bM10ucmVwbGFjZSgnLCcsICcuJykpO1xuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArXG4gICAgICBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURSArXG4gICAgICBzZWNvbmRzICogMTAwMFxuICB9XG5cbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSAodGltZXpvbmVTdHJpbmcpIHtcbiAgdmFyIHRva2VuO1xuICB2YXIgYWJzb2x1dGVPZmZzZXQ7XG5cbiAgLy8gWlxuICB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lWi5leGVjKHRpbWV6b25lU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIMKxaGhcbiAgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZUhILmV4ZWModGltZXpvbmVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICBhYnNvbHV0ZU9mZnNldCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgKiA2MDtcbiAgICByZXR1cm4gKHRva2VuWzFdID09PSAnKycpID8gLWFic29sdXRlT2Zmc2V0IDogYWJzb2x1dGVPZmZzZXRcbiAgfVxuXG4gIC8vIMKxaGg6bW0gb3IgwrFoaG1tXG4gIHRva2VuID0gcGF0dGVybnMudGltZXpvbmVISE1NLmV4ZWModGltZXpvbmVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICBhYnNvbHV0ZU9mZnNldCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgKiA2MCArIHBhcnNlSW50KHRva2VuWzNdLCAxMCk7XG4gICAgcmV0dXJuICh0b2tlblsxXSA9PT0gJysnKSA/IC1hYnNvbHV0ZU9mZnNldCA6IGFic29sdXRlT2Zmc2V0XG4gIH1cblxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBkYXlPZklTT1llYXIgKGlzb1llYXIsIHdlZWssIGRheSkge1xuICB3ZWVrID0gd2VlayB8fCAwO1xuICBkYXkgPSBkYXkgfHwgMDtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29ZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSB3ZWVrICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZVxufVxuXG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogdmFyIHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5mdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcyIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudClcbn1cblxuZnVuY3Rpb24gY2xvbmVPYmplY3QgKGRpcnR5T2JqZWN0KSB7XG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG4gIHZhciBvYmplY3QgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChkaXJ0eU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIG9iamVjdFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iamVjdFxufVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSQyID0gNjAwMDA7XG5cbi8qKlxuICogQG5hbWUgYWRkTWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaW51dGVzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZFxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbnV0ZXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAzMCBtaW51dGVzIHRvIDEwIEp1bHkgMjAxNCAxMjowMDowMDpcbiAqIHZhciByZXN1bHQgPSBhZGRNaW51dGVzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgMCksIDMwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6MzA6MDBcbiAqL1xuZnVuY3Rpb24gYWRkTWludXRlcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUkMiwgZGlydHlPcHRpb25zKVxufVxuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZCAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpXG59XG5cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXREaXN0YW5jZSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciByZXN1bHQ7XG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxudmFyIHRva2Vuc1RvQmVTaG9ydGVkUGF0dGVybiA9IC9NTU1NfE1NfEREfGRkZGQvZztcblxuZnVuY3Rpb24gYnVpbGRTaG9ydExvbmdGb3JtYXQgKGZvcm1hdCkge1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UodG9rZW5zVG9CZVNob3J0ZWRQYXR0ZXJuLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4uc2xpY2UoMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBAbmFtZSBidWlsZEZvcm1hdExvbmdGblxuICogQGNhdGVnb3J5IExvY2FsZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBCdWlsZCBgZm9ybWF0TG9uZ2AgcHJvcGVydHkgZm9yIGxvY2FsZSB1c2VkIGJ5IGBmb3JtYXRgLCBgZm9ybWF0UmVsYXRpdmVgIGFuZCBgcGFyc2VgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBmb3JtYXRMb25nYCBwcm9wZXJ0eSBmb3IgbG9jYWxlIHVzZWQgYnkgYGZvcm1hdGAsIGBmb3JtYXRSZWxhdGl2ZWAgYW5kIGBwYXJzZWAgZnVuY3Rpb25zLlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIG9uZSBvZiB0aGUgZm9sbG93aW5nIHRva2VucyBhcyB0aGUgYXJndW1lbnQ6XG4gKiBgJ0xUUydgLCBgJ0xUJ2AsIGAnTCdgLCBgJ0xMJ2AsIGAnTExMJ2AsIGAnbCdgLCBgJ2xsJ2AsIGAnbGxsJ2AsIGAnbGxsbCdgXG4gKiBhbmQgcmV0dXJucyBhIGxvbmcgZm9ybWF0IHN0cmluZyB3cml0dGVuIGFzIGBmb3JtYXRgIHRva2VuIHN0cmluZ3MuXG4gKiBTZWUgW2Zvcm1hdF17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9mb3JtYXR9XG4gKlxuICogYCdsJ2AsIGAnbGwnYCwgYCdsbGwnYCBhbmQgYCdsbGxsJ2AgZm9ybWF0cyBhcmUgYnVpbHQgYXV0b21hdGljYWxseVxuICogYnkgc2hvcnRlbmluZyBzb21lIG9mIHRoZSB0b2tlbnMgZnJvbSBjb3JyZXNwb25kaW5nIHVuc2hvcnRlbmVkIGZvcm1hdHNcbiAqIChlLmcuLCBpZiBgTExgIGlzIGAnTU1NTSBERCBZWVlZJ2AgdGhlbiBgbGxgIHdpbGwgYmUgYE1NTSBEIFlZWVlgKVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHdpdGggbG9uZyBmb3JtYXRzIHdyaXR0ZW4gYXMgYGZvcm1hdGAgdG9rZW4gc3RyaW5nc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MVCAtIHRpbWUgZm9ybWF0OiBob3VycyBhbmQgbWludXRlc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MVFMgLSB0aW1lIGZvcm1hdDogaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmouTCAtIHNob3J0IGRhdGUgZm9ybWF0OiBudW1lcmljIGRheSwgbW9udGggYW5kIHllYXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2JqLmxdIC0gc2hvcnQgZGF0ZSBmb3JtYXQ6IG51bWVyaWMgZGF5LCBtb250aCBhbmQgeWVhciAoc2hvcnRlbmVkKVxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MTCAtIGxvbmcgZGF0ZSBmb3JtYXQ6IGRheSwgbW9udGggaW4gd29yZHMsIGFuZCB5ZWFyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29iai5sbF0gLSBsb25nIGRhdGUgZm9ybWF0OiBkYXksIG1vbnRoIGluIHdvcmRzLCBhbmQgeWVhciAoc2hvcnRlbmVkKVxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MTEwgLSBsb25nIGRhdGUgYW5kIHRpbWUgZm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gW29iai5sbGxdIC0gbG9uZyBkYXRlIGFuZCB0aW1lIGZvcm1hdCAoc2hvcnRlbmVkKVxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MTExMIC0gbG9uZyBkYXRlLCB0aW1lIGFuZCB3ZWVrZGF5IGZvcm1hdFxuICogQHBhcmFtIHtTdHJpbmd9IFtvYmoubGxsbF0gLSBsb25nIGRhdGUsIHRpbWUgYW5kIHdlZWtkYXkgZm9ybWF0IChzaG9ydGVuZWQpXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGBmb3JtYXRMb25nYCBwcm9wZXJ0eSBvZiB0aGUgbG9jYWxlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBgZW4tVVNgIGxvY2FsZTpcbiAqIGxvY2FsZS5mb3JtYXRMb25nID0gYnVpbGRGb3JtYXRMb25nRm4oe1xuICogICBMVDogJ2g6bW0gYWEnLFxuICogICBMVFM6ICdoOm1tOnNzIGFhJyxcbiAqICAgTDogJ01NL0REL1lZWVknLFxuICogICBMTDogJ01NTU0gRCBZWVlZJyxcbiAqICAgTExMOiAnTU1NTSBEIFlZWVkgaDptbSBhYScsXG4gKiAgIExMTEw6ICdkZGRkLCBNTU1NIEQgWVlZWSBoOm1tIGFhJ1xuICogfSlcbiAqL1xuZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4gKG9iaikge1xuICB2YXIgZm9ybWF0TG9uZ0xvY2FsZSA9IHtcbiAgICBMVFM6IG9iai5MVFMsXG4gICAgTFQ6IG9iai5MVCxcbiAgICBMOiBvYmouTCxcbiAgICBMTDogb2JqLkxMLFxuICAgIExMTDogb2JqLkxMTCxcbiAgICBMTExMOiBvYmouTExMTCxcbiAgICBsOiBvYmoubCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTCksXG4gICAgbGw6IG9iai5sbCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTEwpLFxuICAgIGxsbDogb2JqLmxsbCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTExMKSxcbiAgICBsbGxsOiBvYmoubGxsbCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTExMTClcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIGZvcm1hdExvbmdMb2NhbGVbdG9rZW5dXG4gIH1cbn1cblxudmFyIGZvcm1hdExvbmcgPSBidWlsZEZvcm1hdExvbmdGbih7XG4gIExUOiAnaDptbSBhYScsXG4gIExUUzogJ2g6bW06c3MgYWEnLFxuICBMOiAnTU0vREQvWVlZWScsXG4gIExMOiAnTU1NTSBEIFlZWVknLFxuICBMTEw6ICdNTU1NIEQgWVlZWSBoOm1tIGFhJyxcbiAgTExMTDogJ2RkZGQsIE1NTU0gRCBZWVlZIGg6bW0gYWEnXG59KTtcblxudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogJ1tsYXN0XSBkZGRkIFthdF0gTFQnLFxuICB5ZXN0ZXJkYXk6ICdbeWVzdGVyZGF5IGF0XSBMVCcsXG4gIHRvZGF5OiAnW3RvZGF5IGF0XSBMVCcsXG4gIHRvbW9ycm93OiAnW3RvbW9ycm93IGF0XSBMVCcsXG4gIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcbiAgb3RoZXI6ICdMJ1xufTtcblxuZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUgKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dXG59XG5cbi8qKlxuICogQG5hbWUgYnVpbGRMb2NhbGl6ZUZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5YCwgYGxvY2FsaXplLm1vbnRoYCBhbmQgYGxvY2FsaXplLnRpbWVPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5YCwgYGxvY2FsaXplLm1vbnRoYCBhbmQgYGxvY2FsaXplLnRpbWVPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZVxuICogdXNlZCBieSBgZm9ybWF0YCBmdW5jdGlvbi5cbiAqIElmIG5vIGB0eXBlYCBpcyBzdXBwbGllZCB0byB0aGUgb3B0aW9ucyBvZiB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uLCBgZGVmYXVsdFR5cGVgIHdpbGwgYmUgdXNlZCAoc2VlIGV4YW1wbGUpLlxuICpcbiAqIGBsb2NhbGl6ZS53ZWVrZGF5YCBmdW5jdGlvbiB0YWtlcyB0aGUgd2Vla2RheSBpbmRleCBhcyBhcmd1bWVudCAoMCAtIFN1bmRheSkuXG4gKiBgbG9jYWxpemUubW9udGhgIHRha2VzIHRoZSBtb250aCBpbmRleCAoMCAtIEphbnVhcnkpLlxuICogYGxvY2FsaXplLnRpbWVPZkRheWAgdGFrZXMgdGhlIGhvdXJzLiBVc2UgYGluZGV4Q2FsbGJhY2tgIHRvIGNvbnZlcnQgdGhlbSB0byBhbiBhcnJheSBpbmRleCAoc2VlIGV4YW1wbGUpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgb2JqZWN0IHdpdGggYXJyYXlzIG9mIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIGxvY2FsaXplIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaW5kZXhDYWxsYmFja10gLSB0aGUgY2FsbGJhY2sgd2hpY2ggdGFrZXMgdGhlIHJlc3VsdGluZyBmdW5jdGlvbiBhcmd1bWVudFxuICogICBhbmQgY29udmVydHMgaXQgaW50byB2YWx1ZSBhcnJheSBpbmRleFxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciB0aW1lT2ZEYXlWYWx1ZXMgPSB7XG4gKiAgIHVwcGVyY2FzZTogWydBTScsICdQTSddLFxuICogICBsb3dlcmNhc2U6IFsnYW0nLCAncG0nXSxcbiAqICAgbG9uZzogWydhLm0uJywgJ3AubS4nXVxuICogfVxuICogbG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheSA9IGJ1aWxkTG9jYWxpemVGbih0aW1lT2ZEYXlWYWx1ZXMsICdsb25nJywgZnVuY3Rpb24gKGhvdXJzKSB7XG4gKiAgIC8vIDAgaXMgYS5tLiBhcnJheSBpbmRleCwgMSBpcyBwLm0uIGFycmF5IGluZGV4XG4gKiAgIHJldHVybiAoaG91cnMgLyAxMikgPj0gMSA/IDEgOiAwXG4gKiB9KVxuICogbG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheSgxNiwge3R5cGU6ICd1cHBlcmNhc2UnfSkgLy89PiAnUE0nXG4gKiBsb2NhbGUubG9jYWxpemUudGltZU9mRGF5KDUpIC8vPT4gJ2EubS4nXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbiAodmFsdWVzLCBkZWZhdWx0VHlwZSwgaW5kZXhDYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB0eXBlID0gb3B0aW9ucy50eXBlID8gU3RyaW5nKG9wdGlvbnMudHlwZSkgOiBkZWZhdWx0VHlwZTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSB2YWx1ZXNbdHlwZV0gfHwgdmFsdWVzW2RlZmF1bHRUeXBlXTtcbiAgICB2YXIgaW5kZXggPSBpbmRleENhbGxiYWNrID8gaW5kZXhDYWxsYmFjayhOdW1iZXIoZGlydHlJbmRleCkpIDogTnVtYmVyKGRpcnR5SW5kZXgpO1xuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF1cbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIGJ1aWxkTG9jYWxpemVBcnJheUZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5c2AsIGBsb2NhbGl6ZS5tb250aHNgIGFuZCBgbG9jYWxpemUudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5c2AsIGBsb2NhbGl6ZS5tb250aHNgIGFuZCBgbG9jYWxpemUudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqIElmIG5vIGB0eXBlYCBpcyBzdXBwbGllZCB0byB0aGUgb3B0aW9ucyBvZiB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uLCBgZGVmYXVsdFR5cGVgIHdpbGwgYmUgdXNlZCAoc2VlIGV4YW1wbGUpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgb2JqZWN0IHdpdGggYXJyYXlzIG9mIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIGxvY2FsaXplIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSByZXN1bHRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHdlZWtkYXlWYWx1ZXMgPSB7XG4gKiAgIG5hcnJvdzogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICogICBzaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAqICAgbG9uZzogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG4gKiB9XG4gKiBsb2NhbGUubG9jYWxpemUud2Vla2RheXMgPSBidWlsZExvY2FsaXplQXJyYXlGbih3ZWVrZGF5VmFsdWVzLCAnbG9uZycpXG4gKiBsb2NhbGUubG9jYWxpemUud2Vla2RheXMoe3R5cGU6ICduYXJyb3cnfSkgLy89PiBbJ1N1JywgJ01vJywgLi4uXVxuICogbG9jYWxlLmxvY2FsaXplLndlZWtkYXlzKCkgLy89PiBbJ1N1bmRheScsICdNb25kYXknLCAuLi5dXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVBcnJheUZuICh2YWx1ZXMsIGRlZmF1bHRUeXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgPyBTdHJpbmcob3B0aW9ucy50eXBlKSA6IGRlZmF1bHRUeXBlO1xuICAgIHJldHVybiB2YWx1ZXNbdHlwZV0gfHwgdmFsdWVzW2RlZmF1bHRUeXBlXVxuICB9XG59XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciB3ZWVrZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgc2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIGxvbmc6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBzaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICBsb25nOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcblxuLy8gYHRpbWVPZkRheWAgaXMgdXNlZCB0byBkZXNpZ25hdGUgd2hpY2ggcGFydCBvZiB0aGUgZGF5IGl0IGlzLCB3aGVuIHVzZWQgd2l0aCAxMi1ob3VyIGNsb2NrLlxuLy8gVXNlIHRoZSBzeXN0ZW0gd2hpY2ggaXMgdXNlZCB0aGUgbW9zdCBjb21tb25seSBpbiB0aGUgbG9jYWxlLlxuLy8gRm9yIGV4YW1wbGUsIGlmIHRoZSBjb3VudHJ5IGRvZXNuJ3QgdXNlIGEubS4vcC5tLiwgeW91IGNhbiB1c2UgYG5pZ2h0YC9gbW9ybmluZ2AvYGFmdGVybm9vbmAvYGV2ZW5pbmdgOlxuLy9cbi8vICAgdmFyIHRpbWVPZkRheVZhbHVlcyA9IHtcbi8vICAgICBhbnk6IFsnaW4gdGhlIG5pZ2h0JywgJ2luIHRoZSBtb3JuaW5nJywgJ2luIHRoZSBhZnRlcm5vb24nLCAnaW4gdGhlIGV2ZW5pbmcnXVxuLy8gICB9XG4vL1xuLy8gQW5kIGxhdGVyOlxuLy9cbi8vICAgdmFyIGxvY2FsaXplID0ge1xuLy8gICAgIC8vIFRoZSBjYWxsYmFjayB0YWtlcyB0aGUgaG91cnMgYXMgdGhlIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBhcnJheSBpbmRleFxuLy8gICAgIHRpbWVPZkRheTogYnVpbGRMb2NhbGl6ZUZuKHRpbWVPZkRheVZhbHVlcywgJ2FueScsIGZ1bmN0aW9uIChob3Vycykge1xuLy8gICAgICAgaWYgKGhvdXJzID49IDE3KSB7XG4vLyAgICAgICAgIHJldHVybiAzXG4vLyAgICAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4vLyAgICAgICAgIHJldHVybiAyXG4vLyAgICAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbi8vICAgICAgICAgcmV0dXJuIDFcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiAwXG4vLyAgICAgICB9XG4vLyAgICAgfSksXG4vLyAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCAnYW55Jylcbi8vICAgfVxudmFyIHRpbWVPZkRheVZhbHVlcyA9IHtcbiAgdXBwZXJjYXNlOiBbJ0FNJywgJ1BNJ10sXG4gIGxvd2VyY2FzZTogWydhbScsICdwbSddLFxuICBsb25nOiBbJ2EubS4nLCAncC5tLiddXG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyIChkaXJ0eU51bWJlciwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YDpcbiAgLy9cbiAgLy8gICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuICAvLyAgIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdClcbiAgLy9cbiAgLy8gd2hlcmUgYHVuaXRgIGNhbiBiZSAnbW9udGgnLCAncXVhcnRlcicsICd3ZWVrJywgJ2lzb1dlZWsnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheU9mTW9udGgnIG9yICdkYXlPZldlZWsnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0J1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJ1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJ1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIHdlZWtkYXk6IGJ1aWxkTG9jYWxpemVGbih3ZWVrZGF5VmFsdWVzLCAnbG9uZycpLFxuICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgJ2xvbmcnKSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbihtb250aFZhbHVlcywgJ2xvbmcnKSxcbiAgbW9udGhzOiBidWlsZExvY2FsaXplQXJyYXlGbihtb250aFZhbHVlcywgJ2xvbmcnKSxcbiAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCAnbG9uZycsIGZ1bmN0aW9uIChob3Vycykge1xuICAgIHJldHVybiAoaG91cnMgLyAxMikgPj0gMSA/IDEgOiAwXG4gIH0pLFxuICB0aW1lc09mRGF5OiBidWlsZExvY2FsaXplQXJyYXlGbih0aW1lT2ZEYXlWYWx1ZXMsICdsb25nJylcbn07XG5cbi8qKlxuICogQG5hbWUgYnVpbGRNYXRjaEZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBtYXRjaC53ZWVrZGF5c2AsIGBtYXRjaC5tb250aHNgIGFuZCBgbWF0Y2gudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBtYXRjaC53ZWVrZGF5c2AsIGBtYXRjaC5tb250aHNgIGFuZCBgbWF0Y2gudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZSB1c2VkIGJ5IGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBJZiBubyBgdHlwZWAgaXMgc3VwcGxpZWQgdG8gdGhlIG9wdGlvbnMgb2YgdGhlIHJlc3VsdGluZyBmdW5jdGlvbiwgYGRlZmF1bHRUeXBlYCB3aWxsIGJlIHVzZWQgKHNlZSBleGFtcGxlKS5cbiAqIFRoZSByZXN1bHQgb2YgdGhlIG1hdGNoIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkIGludG8gY29ycmVzcG9uZGluZyBwYXJzZXIgZnVuY3Rpb25cbiAqIChgbWF0Y2gud2Vla2RheWAsIGBtYXRjaC5tb250aGAgb3IgYG1hdGNoLnRpbWVPZkRheWAgcmVzcGVjdGl2ZWx5LiBTZWUgYGJ1aWxkUGFyc2VGbmApLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgb2JqZWN0IHdpdGggUmVnRXhwc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIG1hdGNoIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSByZXN1bHRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1hdGNoV2Vla2RheXNQYXR0ZXJucyA9IHtcbiAqICAgbmFycm93OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAqICAgc2hvcnQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAqICAgbG9uZzogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbiAqIH1cbiAqIGxvY2FsZS5tYXRjaC53ZWVrZGF5cyA9IGJ1aWxkTWF0Y2hGbihtYXRjaFdlZWtkYXlzUGF0dGVybnMsICdsb25nJylcbiAqIGxvY2FsZS5tYXRjaC53ZWVrZGF5cygnU3VuZGF5Jywge3R5cGU6ICduYXJyb3cnfSkgLy89PiBbJ1N1JywgJ1N1JywgLi4uXVxuICogbG9jYWxlLm1hdGNoLndlZWtkYXlzKCdTdW5kYXknKSAvLz0+IFsnU3VuZGF5JywgJ1N1bmRheScsIC4uLl1cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRjaEZuIChwYXR0ZXJucywgZGVmYXVsdFR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgPyBTdHJpbmcob3B0aW9ucy50eXBlKSA6IGRlZmF1bHRUeXBlO1xuICAgIHZhciBwYXR0ZXJuID0gcGF0dGVybnNbdHlwZV0gfHwgcGF0dGVybnNbZGVmYXVsdFR5cGVdO1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybilcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIGJ1aWxkUGFyc2VGblxuICogQGNhdGVnb3J5IExvY2FsZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBCdWlsZCBgbWF0Y2gud2Vla2RheWAsIGBtYXRjaC5tb250aGAgYW5kIGBtYXRjaC50aW1lT2ZEYXlgIHByb3BlcnRpZXMgZm9yIHRoZSBsb2NhbGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBCdWlsZCBgbWF0Y2gud2Vla2RheWAsIGBtYXRjaC5tb250aGAgYW5kIGBtYXRjaC50aW1lT2ZEYXlgIHByb3BlcnRpZXMgZm9yIHRoZSBsb2NhbGUgdXNlZCBieSBgcGFyc2VgIGZ1bmN0aW9uLlxuICogVGhlIGFyZ3VtZW50IG9mIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24gaXMgdGhlIHJlc3VsdCBvZiB0aGUgY29ycmVzcG9uZGluZyBtYXRjaCBmdW5jdGlvblxuICogKGBtYXRjaC53ZWVrZGF5c2AsIGBtYXRjaC5tb250aHNgIG9yIGBtYXRjaC50aW1lc09mRGF5YCByZXNwZWN0aXZlbHkuIFNlZSBgYnVpbGRNYXRjaEZuYCkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSBvYmplY3Qgd2l0aCBhcnJheXMgb2YgUmVnRXhwc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIHBhcnNlciBmdW5jdGlvblxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZVdlZWtkYXlQYXR0ZXJucyA9IHtcbiAqICAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxuICogfVxuICogbG9jYWxlLm1hdGNoLndlZWtkYXkgPSBidWlsZFBhcnNlRm4obWF0Y2hXZWVrZGF5c1BhdHRlcm5zLCAnbG9uZycpXG4gKiB2YXIgbWF0Y2hSZXN1bHQgPSBsb2NhbGUubWF0Y2gud2Vla2RheXMoJ0ZyaWRheScpXG4gKiBsb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCkgLy89PiA1XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUGFyc2VGbiAocGF0dGVybnMsIGRlZmF1bHRUeXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB0eXBlID0gb3B0aW9ucy50eXBlID8gU3RyaW5nKG9wdGlvbnMudHlwZSkgOiBkZWZhdWx0VHlwZTtcbiAgICB2YXIgcGF0dGVybnNBcnJheSA9IHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXTtcbiAgICB2YXIgc3RyaW5nID0gbWF0Y2hSZXN1bHRbMV07XG5cbiAgICByZXR1cm4gcGF0dGVybnNBcnJheS5maW5kSW5kZXgoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBidWlsZE1hdGNoUGF0dGVybkZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIG1hdGNoIGZ1bmN0aW9uIGZyb20gYSBzaW5nbGUgUmVnRXhwLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQnVpbGQgbWF0Y2ggZnVuY3Rpb24gZnJvbSBhIHNpbmdsZSBSZWdFeHAuXG4gKiBVc3VhbGx5IHVzZWQgZm9yIGJ1aWxkaW5nIGBtYXRjaC5vcmRpbmFsTnVtYmVyc2AgcHJvcGVydHkgb2YgdGhlIGxvY2FsZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGF0dGVybiAtIHRoZSBSZWdFeHBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIHJlc3VsdGluZyBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBsb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMgPSBidWlsZE1hdGNoUGF0dGVybkZuKC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaSlcbiAqIGxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVycygnM3JkJykgLy89PiBbJzNyZCcsICczJywgJ3JkJywgLi4uXVxuICovXG5mdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuIChwYXR0ZXJuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pXG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBwYXJzZURlY2ltYWxcbiAqIEBjYXRlZ29yeSBMb2NhbGUgSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2VzIHRoZSBtYXRjaCByZXN1bHQgaW50byBkZWNpbWFsIG51bWJlci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlcyB0aGUgbWF0Y2ggcmVzdWx0IGludG8gZGVjaW1hbCBudW1iZXIuXG4gKiBVc2VzIHRoZSBzdHJpbmcgbWF0Y2hlZCB3aXRoIHRoZSBmaXJzdCBzZXQgb2YgcGFyZW50aGVzZXMgb2YgbWF0Y2ggUmVnRXhwLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoUmVzdWx0IC0gdGhlIG9iamVjdCByZXR1cm5lZCBieSBtYXRjaGluZyBmdW5jdGlvblxuICogQHJldHVybnMge051bWJlcn0gdGhlIHBhcnNlZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBsb2NhbGUubWF0Y2ggPSB7XG4gKiAgIG9yZGluYWxOdW1iZXJzOiAoZGlydHlTdHJpbmcpIHtcbiAqICAgICByZXR1cm4gU3RyaW5nKGRpcnR5U3RyaW5nKS5tYXRjaCgvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2kpXG4gKiAgIH0sXG4gKiAgIG9yZGluYWxOdW1iZXI6IHBhcnNlRGVjaW1hbFxuICogfVxuICovXG5mdW5jdGlvbiBwYXJzZURlY2ltYWwgKG1hdGNoUmVzdWx0KSB7XG4gIHJldHVybiBwYXJzZUludChtYXRjaFJlc3VsdFsxXSwgMTApXG59XG5cbnZhciBtYXRjaE9yZGluYWxOdW1iZXJzUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcblxudmFyIG1hdGNoV2Vla2RheXNQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgc2hvcnQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgbG9uZzogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG5cbnZhciBwYXJzZVdlZWtkYXlQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcblxudmFyIG1hdGNoTW9udGhzUGF0dGVybnMgPSB7XG4gIHNob3J0OiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgbG9uZzogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcblxudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcblxuLy8gYHRpbWVPZkRheWAgaXMgdXNlZCB0byBkZXNpZ25hdGUgd2hpY2ggcGFydCBvZiB0aGUgZGF5IGl0IGlzLCB3aGVuIHVzZWQgd2l0aCAxMi1ob3VyIGNsb2NrLlxuLy8gVXNlIHRoZSBzeXN0ZW0gd2hpY2ggaXMgdXNlZCB0aGUgbW9zdCBjb21tb25seSBpbiB0aGUgbG9jYWxlLlxuLy8gRm9yIGV4YW1wbGUsIGlmIHRoZSBjb3VudHJ5IGRvZXNuJ3QgdXNlIGEubS4vcC5tLiwgeW91IGNhbiB1c2UgYG5pZ2h0YC9gbW9ybmluZ2AvYGFmdGVybm9vbmAvYGV2ZW5pbmdgOlxuLy9cbi8vICAgdmFyIG1hdGNoVGltZXNPZkRheVBhdHRlcm5zID0ge1xuLy8gICAgIGxvbmc6IC9eKChpbiB0aGUpPyAobmlnaHR8bW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZz8pKS9pXG4vLyAgIH1cbi8vXG4vLyAgIHZhciBwYXJzZVRpbWVPZkRheVBhdHRlcm5zID0ge1xuLy8gICAgIGFueTogWy8obmlnaHR8bW9ybmluZykvaSwgLyhhZnRlcm5vb258ZXZlbmluZykvaV1cbi8vICAgfVxudmFyIG1hdGNoVGltZXNPZkRheVBhdHRlcm5zID0ge1xuICBzaG9ydDogL14oYW18cG0pL2ksXG4gIGxvbmc6IC9eKFthcF1cXC4/XFxzP21cXC4/KS9pXG59O1xuXG52YXIgcGFyc2VUaW1lT2ZEYXlQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15hL2ksIC9ecC9pXVxufTtcblxudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyczogYnVpbGRNYXRjaFBhdHRlcm5GbihtYXRjaE9yZGluYWxOdW1iZXJzUGF0dGVybiksXG4gIG9yZGluYWxOdW1iZXI6IHBhcnNlRGVjaW1hbCxcbiAgd2Vla2RheXM6IGJ1aWxkTWF0Y2hGbihtYXRjaFdlZWtkYXlzUGF0dGVybnMsICdsb25nJyksXG4gIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbihwYXJzZVdlZWtkYXlQYXR0ZXJucywgJ2FueScpLFxuICBtb250aHM6IGJ1aWxkTWF0Y2hGbihtYXRjaE1vbnRoc1BhdHRlcm5zLCAnbG9uZycpLFxuICBtb250aDogYnVpbGRQYXJzZUZuKHBhcnNlTW9udGhQYXR0ZXJucywgJ2FueScpLFxuICB0aW1lc09mRGF5OiBidWlsZE1hdGNoRm4obWF0Y2hUaW1lc09mRGF5UGF0dGVybnMsICdsb25nJyksXG4gIHRpbWVPZkRheTogYnVpbGRQYXJzZUZuKHBhcnNlVGltZU9mRGF5UGF0dGVybnMsICdhbnknKVxufTtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICovXG52YXIgbG9jYWxlJDEgPSB7XG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZJDEgPSA4NjQwMDAwMDtcblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBnZXRVVENEYXlPZlllYXIgKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkkMSkgKyAxXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsgKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGVcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhciAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDFcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDFcbiAgfVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhciAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZVxufVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUskMiA9IDYwNDgwMDAwMDtcblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBnZXRVVENJU09XZWVrIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSwgZGlydHlPcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSwgZGlydHlPcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLJDIpICsgMVxufVxuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gTW9udGg6IDEsIDIsIC4uLiwgMTJcbiAgJ00nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ01vbnRoKCkgKyAxXG4gIH0sXG5cbiAgLy8gTW9udGg6IDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgJ01vJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCkgKyAxO1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoLCB7dW5pdDogJ21vbnRoJ30pXG4gIH0sXG5cbiAgLy8gTW9udGg6IDAxLCAwMiwgLi4uLCAxMlxuICAnTU0nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNb250aCgpICsgMSwgMilcbiAgfSxcblxuICAvLyBNb250aDogSmFuLCBGZWIsIC4uLiwgRGVjXG4gICdNTU0nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5tb250aChkYXRlLmdldFVUQ01vbnRoKCksIHt0eXBlOiAnc2hvcnQnfSlcbiAgfSxcblxuICAvLyBNb250aDogSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgJ01NTU0nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5tb250aChkYXRlLmdldFVUQ01vbnRoKCksIHt0eXBlOiAnbG9uZyd9KVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDEsIDIsIDMsIDRcbiAgJ1EnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMylcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgJ1FvJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7dW5pdDogJ3F1YXJ0ZXInfSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDEsIDIsIC4uLiwgMzFcbiAgJ0QnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMXN0LCAybmQsIC4uLiwgMzFzdFxuICAnRG8nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7dW5pdDogJ2RheU9mTW9udGgnfSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICAnREQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIDIpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDEsIDIsIC4uLiwgMzY2XG4gICdEREQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRVVENEYXlPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMXN0LCAybmQsIC4uLiwgMzY2dGhcbiAgJ0RERG8nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGdldFVUQ0RheU9mWWVhcihkYXRlKSwge3VuaXQ6ICdkYXlPZlllYXInfSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gICdEREREJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGdldFVUQ0RheU9mWWVhcihkYXRlKSwgMylcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3UsIE1vLCAuLi4sIFNhXG4gICdkZCc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLndlZWtkYXkoZGF0ZS5nZXRVVENEYXkoKSwge3R5cGU6ICduYXJyb3cnfSlcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLiwgU2F0XG4gICdkZGQnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS53ZWVrZGF5KGRhdGUuZ2V0VVRDRGF5KCksIHt0eXBlOiAnc2hvcnQnfSlcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuZGF5LCBNb25kYXksIC4uLiwgU2F0dXJkYXlcbiAgJ2RkZGQnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS53ZWVrZGF5KGRhdGUuZ2V0VVRDRGF5KCksIHt0eXBlOiAnbG9uZyd9KVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiAwLCAxLCAuLi4sIDZcbiAgJ2QnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RheSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDB0aCwgMXN0LCAybmQsIC4uLiwgNnRoXG4gICdkbyc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXkoKSwge3VuaXQ6ICdkYXlPZldlZWsnfSlcbiAgfSxcblxuICAvLyBEYXkgb2YgSVNPIHdlZWs6IDEsIDIsIC4uLiwgN1xuICAnRSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF5KCkgfHwgN1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDUzXG4gICdXJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0VVRDSVNPV2VlayhkYXRlKVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAxc3QsIDJuZCwgLi4uLCA1M3RoXG4gICdXbyc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm9yZGluYWxOdW1iZXIoZ2V0VVRDSVNPV2VlayhkYXRlKSwge3VuaXQ6ICdpc29XZWVrJ30pXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDAxLCAwMiwgLi4uLCA1M1xuICAnV1cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZ2V0VVRDSVNPV2VlayhkYXRlKSwgMilcbiAgfSxcblxuICAvLyBZZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ1lZJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgNCkuc3Vic3RyKDIpXG4gIH0sXG5cbiAgLy8gWWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdZWVlZJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgNClcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gICdHRyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIFN0cmluZyhnZXRVVENJU09XZWVrWWVhcihkYXRlKSkuc3Vic3RyKDIpXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICAnR0dHRyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gSG91cjogMCwgMSwgLi4uIDIzXG4gICdIJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENIb3VycygpXG4gIH0sXG5cbiAgLy8gSG91cjogMDAsIDAxLCAuLi4sIDIzXG4gICdISCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIDIpXG4gIH0sXG5cbiAgLy8gSG91cjogMSwgMiwgLi4uLCAxMlxuICAnaCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgcmV0dXJuIDEyXG4gICAgfSBlbHNlIGlmIChob3VycyA+IDEyKSB7XG4gICAgICByZXR1cm4gaG91cnMgJSAxMlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaG91cnNcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91cjogMDEsIDAyLCAuLi4sIDEyXG4gICdoaCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmb3JtYXR0ZXJzWydoJ10oZGF0ZSksIDIpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwLCAxLCAuLi4sIDU5XG4gICdtJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENNaW51dGVzKClcbiAgfSxcblxuICAvLyBNaW51dGU6IDAwLCAwMSwgLi4uLCA1OVxuICAnbW0nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIDIpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwLCAxLCAuLi4sIDU5XG4gICdzJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENTZWNvbmRzKClcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAwLCAwMSwgLi4uLCA1OVxuICAnc3MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIDIpXG4gIH0sXG5cbiAgLy8gMS8xMCBvZiBzZWNvbmQ6IDAsIDEsIC4uLiwgOVxuICAnUyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSAvIDEwMClcbiAgfSxcblxuICAvLyAxLzEwMCBvZiBzZWNvbmQ6IDAwLCAwMSwgLi4uLCA5OVxuICAnU1MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpIC8gMTApLCAyKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kOiAwMDAsIDAwMSwgLi4uLCA5OTlcbiAgJ1NTUyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLCAzKVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMFxuICAnWic6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZShvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJzonKVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDEwMCwgKzAwMDAsIC4uLiArMTIwMFxuICAnWlonOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUob3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpXG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMFxuICAnWCc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMDkwMFxuICAneCc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHJldHVybiBvcmlnaW5hbERhdGUuZ2V0VGltZSgpXG4gIH0sXG5cbiAgLy8gQU0sIFBNXG4gICdBJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUudGltZU9mRGF5KGRhdGUuZ2V0VVRDSG91cnMoKSwge3R5cGU6ICd1cHBlcmNhc2UnfSlcbiAgfSxcblxuICAvLyBhbSwgcG1cbiAgJ2EnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS50aW1lT2ZEYXkoZGF0ZS5nZXRVVENIb3VycygpLCB7dHlwZTogJ2xvd2VyY2FzZSd9KVxuICB9LFxuXG4gIC8vIGEubS4sIHAubS5cbiAgJ2FhJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUudGltZU9mRGF5KGRhdGUuZ2V0VVRDSG91cnMoKSwge3R5cGU6ICdsb25nJ30pXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lIChvZmZzZXQsIGRlbGltZXRlcikge1xuICBkZWxpbWV0ZXIgPSBkZWxpbWV0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhob3VycywgMikgKyBkZWxpbWV0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMilcbn1cblxuZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zIChudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gYWRkVVRDTWludXRlcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudCk7XG4gIGRhdGUuc2V0VVRDTWludXRlcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlXG59XG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC8oXFxbW15bXSpdKXwoXFxcXCk/KExUU3xMVHxMTExMfExMTHxMTHxMfGxsbGx8bGxsfGxsfGwpL2c7XG52YXIgZGVmYXVsdEZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvKFxcW1teW10qXSl8KFxcXFwpPyh4fHNzfHN8bW18bXxoaHxofGRvfGRkZGR8ZGRkfGRkfGR8YWF8YXxaWnxafFlZWVl8WVl8WHxXb3xXV3xXfFNTU3xTU3xTfFFvfFF8TW98TU1NTXxNTU18TU18TXxISHxIfEdHR0d8R0d8RXxEb3xERERvfERERER8REREfEREfER8QXwuKS9nO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LlxuICpcbiAqIEFjY2VwdGVkIHRva2VuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgfCBUb2tlbiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgTW9udGggICAgICAgICAgICAgICAgICAgfCBNICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyIHxcbiAqIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgfCBRICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgfCBEICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgfCBEREQgICB8IDEsIDIsIC4uLiwgMzY2ICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBERERvICB8IDFzdCwgMm5kLCAuLi4sIDM2NnRoICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICB8IDAwMSwgMDAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgfCBkICAgICB8IDAsIDEsIC4uLiwgNiAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICB8IDB0aCwgMXN0LCAuLi4sIDZ0aCAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICB8IFN1LCBNbywgLi4uLCBTYSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZGQgICB8IFN1biwgTW9uLCAuLi4sIFNhdCAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZGRkICB8IFN1bmRheSwgTW9uZGF5LCAuLi4sIFNhdHVyZGF5ICAgIHxcbiAqIHwgRGF5IG9mIElTTyB3ZWVrICAgICAgICAgfCBFICAgICB8IDEsIDIsIC4uLiwgNyAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgICAgICAgICAgICAgICAgfCBXICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBXbyAgICB8IDFzdCwgMm5kLCAuLi4sIDUzcmQgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBXVyAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgIHxcbiAqIHwgWWVhciAgICAgICAgICAgICAgICAgICAgfCBZWSAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICB8IDE5MDAsIDE5MDEsIC4uLiwgMjA5OSAgICAgICAgICAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgfCBHRyAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICB8IDE5MDAsIDE5MDEsIC4uLiwgMjA5OSAgICAgICAgICAgIHxcbiAqIHwgQU0vUE0gICAgICAgICAgICAgICAgICAgfCBBICAgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgSG91ciAgICAgICAgICAgICAgICAgICAgfCBIICAgICB8IDAsIDEsIC4uLiAyMyAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICB8IDAwLCAwMSwgLi4uIDIzICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBoICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgfCBtICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgfCBzICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgMS8xMCBvZiBzZWNvbmQgICAgICAgICAgfCBTICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgMS8xMDAgb2Ygc2Vjb25kICAgICAgICAgfCBTUyAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTWlsbGlzZWNvbmQgICAgICAgICAgICAgfCBTU1MgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgIHxcbiAqIHwgVGltZXpvbmUgICAgICAgICAgICAgICAgfCBaICAgICB8IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBaWiAgICB8IC0wMTAwLCArMDAwMCwgLi4uLCArMTIwMCAgICAgICAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgfCBYICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgfCB4ICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTG9uZyBmb3JtYXQgICAgICAgICAgICAgfCBMVCAgICB8IDA1OjMwIGEubS4gICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBMVFMgICB8IDA1OjMwOjE1IGEubS4gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBMICAgICB8IDA3LzAyLzE5OTUgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBsICAgICB8IDcvMi8xOTk1ICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICB8IEp1bHkgMiAxOTk1ICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBsbCAgICB8IEp1bCAyIDE5OTUgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICB8IEp1bHkgMiAxOTk1IDA1OjMwIGEubS4gICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBsbGwgICB8IEp1bCAyIDE5OTUgMDU6MzAgYS5tLiAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICB8IFN1bmRheSwgSnVseSAyIDE5OTUgMDU6MzAgYS5tLiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCBsbGxsICB8IFN1biwgSnVsIDIgMTk5NSAwNTozMCBhLm0uICAgICAgIHxcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGluIHNxdWFyZSBicmFja2V0cyBhcmUgZXNjYXBlZC5cbiAqXG4gKiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChcbiAqICAgbmV3IERhdGUoMjAxNCwgMSwgMTEpLFxuICogICAnTU0vREQvWVlZWSdcbiAqIClcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICAnRG8gW2RlXSBNTU1NIFlZWVknLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICovXG5mdW5jdGlvbiBmb3JtYXQgKGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcyIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuXG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBsb2NhbGUkMTtcblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5JylcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5JylcbiAgfVxuXG4gIHZhciBsb2NhbGVGb3JtYXR0ZXJzID0gbG9jYWxlLmZvcm1hdHRlcnMgfHwge307XG4gIHZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gbG9jYWxlLmZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgfHwgZGVmYXVsdEZvcm1hdHRpbmdUb2tlbnNSZWdFeHA7XG4gIHZhciBmb3JtYXRMb25nID0gbG9jYWxlLmZvcm1hdExvbmc7XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIG9wdGlvbnMpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB2YXIgdXRjRGF0ZSA9IGFkZFVUQ01pbnV0ZXMob3JpZ2luYWxEYXRlLCAtdGltZXpvbmVPZmZzZXQsIG9wdGlvbnMpO1xuXG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGZvcm1hdHRlck9wdGlvbnMubG9jYWxlID0gbG9jYWxlO1xuICBmb3JtYXR0ZXJPcHRpb25zLmZvcm1hdHRlcnMgPSBmb3JtYXR0ZXJzO1xuXG4gIC8vIFdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBvcHRpb25zLl9vcmlnaW5hbERhdGUgd2lsbCBsaWtlbHkgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkuXG4gIC8vIFJpZ2h0IG5vdywgcGxlYXNlIGRvbid0IHVzZSBpdCBpbiBsb2NhbGVzLiBJZiB5b3UgaGF2ZSB0byB1c2UgYW4gb3JpZ2luYWwgZGF0ZSxcbiAgLy8gcGxlYXNlIHJlc3RvcmUgaXQgZnJvbSBgZGF0ZWAsIGFkZGluZyBhIHRpbWV6b25lIG9mZnNldCB0byBpdC5cbiAgZm9ybWF0dGVyT3B0aW9ucy5fb3JpZ2luYWxEYXRlID0gb3JpZ2luYWxEYXRlO1xuXG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHJcbiAgICAucmVwbGFjZShsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCwgZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgaWYgKHN1YnN0cmluZ1swXSA9PT0gJ1snKSB7XG4gICAgICAgIHJldHVybiBzdWJzdHJpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnN0cmluZ1swXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZyhzdWJzdHJpbmcpXG4gICAgfSlcbiAgICAucmVwbGFjZShmb3JtYXR0aW5nVG9rZW5zUmVnRXhwLCBmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gbG9jYWxlRm9ybWF0dGVyc1tzdWJzdHJpbmddIHx8IGZvcm1hdHRlcnNbc3Vic3RyaW5nXTtcblxuICAgICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIGZvcm1hdHRlck9wdGlvbnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZylcbiAgICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyAoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XSQvZywgJycpXG4gIH1cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpXG59XG5cbi8qKlxuICogQG5hbWUgc3ViTWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaW51dGVzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaW51dGVzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaW51dGVzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaW50dWVzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDMwIG1pbnV0ZXMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6MDA6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3ViTWludXRlcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDApLCAzMClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDExOjMwOjAwXG4gKi9cbmZ1bmN0aW9uIHN1Yk1pbnV0ZXMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcyIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaW51dGVzKGRpcnR5RGF0ZSwgLWFtb3VudCwgZGlydHlPcHRpb25zKVxufVxuXG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogdmFyIHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNBZnRlciAoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcyIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpXG59XG5cbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiB2YXIgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmVmb3JlIChkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcbn1cblxuLyoqXG4gKiBAbmFtZSBpc0VxdWFsXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBlcXVhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjAwMCBhbmQgMiBKdWx5IDIwMTQgMDY6MzA6NDUuNTAwIGVxdWFsP1xuICogdmFyIHJlc3VsdCA9IGlzRXF1YWwoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgMClcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCA1MDApXG4gKiApXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwkMSAoZGlydHlMZWZ0RGF0ZSwgZGlydHlSaWdodERhdGUsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcyIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5TGVmdERhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlSaWdodERhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgPT09IGRhdGVSaWdodC5nZXRUaW1lKClcbn1cblxudmFyIHBhdHRlcm5zJDEgPSB7XG4gICdNJzogL14oMVswLTJdfDA/XFxkKS8sIC8vIDAgdG8gMTJcbiAgJ0QnOiAvXigzWzAtMV18WzAtMl0/XFxkKS8sIC8vIDAgdG8gMzFcbiAgJ0RERCc6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLywgLy8gMCB0byAzNjZcbiAgJ1cnOiAvXig1WzAtM118WzAtNF0/XFxkKS8sIC8vIDAgdG8gNTNcbiAgJ1lZWVknOiAvXihcXGR7MSw0fSkvLCAvLyAwIHRvIDk5OTlcbiAgJ0gnOiAvXigyWzAtM118WzAtMV0/XFxkKS8sIC8vIDAgdG8gMjNcbiAgJ20nOiAvXihbMC01XT9cXGQpLywgLy8gMCB0byA1OVxuICAnWic6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSkvLFxuICAnWlonOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSkvLFxuICBzaW5nbGVEaWdpdDogL14oXFxkKS8sXG4gIHR3b0RpZ2l0czogL14oXFxkezJ9KS8sXG4gIHRocmVlRGlnaXRzOiAvXihcXGR7M30pLyxcbiAgZm91ckRpZ2l0czogL14oXFxkezR9KS8sXG4gIGFueURpZ2l0czogL14oXFxkKykvXG59O1xuXG5mdW5jdGlvbiBwYXJzZURlY2ltYWwkMSAobWF0Y2hSZXN1bHQpIHtcbiAgcmV0dXJuIHBhcnNlSW50KG1hdGNoUmVzdWx0WzFdLCAxMClcbn1cblxudmFyIHBhcnNlcnMgPSB7XG4gIC8vIFllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnWVknOiB7XG4gICAgdW5pdDogJ3R3b0RpZ2l0WWVhcicsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdClcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdZWVlZJzoge1xuICAgIHVuaXQ6ICd5ZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5ZWVlZLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ0dHJzoge1xuICAgIHVuaXQ6ICdpc29ZZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSArIDE5MDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICAnR0dHRyc6IHtcbiAgICB1bml0OiAnaXNvWWVhcicsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuWVlZWSxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxLCAyLCAzLCA0XG4gICdRJzoge1xuICAgIHVuaXQ6ICdxdWFydGVyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5zaW5nbGVEaWdpdCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBPcmRpbmFsIHF1YXJ0ZXJcbiAgJ1FvJzoge1xuICAgIHVuaXQ6ICdxdWFydGVyJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdxdWFydGVyJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdxdWFydGVyJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoOiAxLCAyLCAuLi4sIDEyXG4gICdNJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuTSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpIC0gMVxuICAgIH1cbiAgfSxcblxuICAvLyBPcmRpbmFsIG1vbnRoXG4gICdNbyc6IHtcbiAgICB1bml0OiAnbW9udGgnLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMoc3RyaW5nLCB7dW5pdDogJ21vbnRoJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdtb250aCd9KSAtIDFcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IDAxLCAwMiwgLi4uLCAxMlxuICAnTU0nOiB7XG4gICAgdW5pdDogJ21vbnRoJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSAtIDFcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IEphbiwgRmViLCAuLi4sIERlY1xuICAnTU1NJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aHMoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gubW9udGgobWF0Y2hSZXN1bHQsIHt0eXBlOiAnc2hvcnQnfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICdNTU1NJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aHMoc3RyaW5nLCB7dHlwZTogJ2xvbmcnfSkgfHxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUubWF0Y2gubW9udGhzKHN0cmluZywge3R5cGU6ICdzaG9ydCd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gubW9udGgobWF0Y2hSZXN1bHQsIHt0eXBlOiAnbG9uZyd9KTtcblxuICAgICAgaWYgKHBhcnNlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aChtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDUzXG4gICdXJzoge1xuICAgIHVuaXQ6ICdpc29XZWVrJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5XLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE9yZGluYWwgSVNPIHdlZWtcbiAgJ1dvJzoge1xuICAgIHVuaXQ6ICdpc29XZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdpc29XZWVrJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdpc29XZWVrJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAwMSwgMDIsIC4uLiwgNTNcbiAgJ1dXJzoge1xuICAgIHVuaXQ6ICdpc29XZWVrJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDAsIDEsIC4uLiwgNlxuICAnZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5zaW5nbGVEaWdpdCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBPcmRpbmFsIGRheSBvZiB3ZWVrXG4gICdkbyc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdkYXlPZldlZWsnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ2RheU9mV2Vlayd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3UsIE1vLCAuLi4sIFNhXG4gICdkZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICduYXJyb3cnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ25hcnJvdyd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLiwgU2F0XG4gICdkZGQnOiB7XG4gICAgdW5pdDogJ2RheU9mV2VlaycsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5cyhzdHJpbmcsIHt0eXBlOiAnc2hvcnQnfSkgfHxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheXMoc3RyaW5nLCB7dHlwZTogJ25hcnJvdyd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KTtcblxuICAgICAgaWYgKHBhcnNlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ25hcnJvdyd9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0XG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheVxuICAnZGRkZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICdsb25nJ30pIHx8XG4gICAgICAgIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICdzaG9ydCd9KSB8fFxuICAgICAgICBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5cyhzdHJpbmcsIHt0eXBlOiAnbmFycm93J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ2xvbmcnfSk7XG5cbiAgICAgIGlmIChwYXJzZVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KTtcblxuICAgICAgICBpZiAocGFyc2VSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCwge3R5cGU6ICduYXJyb3cnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0XG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiBJU08gd2VlazogMSwgMiwgLi4uLCA3XG4gICdFJzoge1xuICAgIHVuaXQ6ICdkYXlPZklTT1dlZWsnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnNpbmdsZURpZ2l0LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdClcbiAgICB9XG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gICdEJzoge1xuICAgIHVuaXQ6ICdkYXlPZk1vbnRoJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5ELFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE9yZGluYWwgZGF5IG9mIG1vbnRoXG4gICdEbyc6IHtcbiAgICB1bml0OiAnZGF5T2ZNb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVycyhzdHJpbmcsIHt1bml0OiAnZGF5T2ZNb250aCd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXIobWF0Y2hSZXN1bHQsIHt1bml0OiAnZGF5T2ZNb250aCd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICAnREQnOiB7XG4gICAgdW5pdDogJ2RheU9mTW9udGgnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMSwgMiwgLi4uLCAzNjZcbiAgJ0RERCc6IHtcbiAgICB1bml0OiAnZGF5T2ZZZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5EREQsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gT3JkaW5hbCBkYXkgb2YgeWVhclxuICAnREREbyc6IHtcbiAgICB1bml0OiAnZGF5T2ZZZWFyJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdkYXlPZlllYXInfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ2RheU9mWWVhcid9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gICdEREREJzoge1xuICAgIHVuaXQ6ICdkYXlPZlllYXInLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnRocmVlRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEFNLCBQTVxuICAnQSc6IHtcbiAgICB1bml0OiAndGltZU9mRGF5JyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLnRpbWVzT2ZEYXkoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZU9mRGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfVxuICB9LFxuXG4gIC8vIGEubS4sIHAubS5cbiAgJ2FhJzoge1xuICAgIHVuaXQ6ICd0aW1lT2ZEYXknLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZXNPZkRheShzdHJpbmcsIHt0eXBlOiAnbG9uZyd9KSB8fFxuICAgICAgICBvcHRpb25zLmxvY2FsZS5tYXRjaC50aW1lc09mRGF5KHN0cmluZywge3R5cGU6ICdzaG9ydCd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZU9mRGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ2xvbmcnfSk7XG5cbiAgICAgIGlmIChwYXJzZVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZU9mRGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VSZXN1bHRcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91cjogMCwgMSwgLi4uIDIzXG4gICdIJzoge1xuICAgIHVuaXQ6ICdob3VycycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuSCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBIb3VyOiAwMCwgMDEsIC4uLiwgMjNcbiAgJ0hIJzoge1xuICAgIHVuaXQ6ICdob3VycycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEhvdXI6IDEsIDIsIC4uLiwgMTJcbiAgJ2gnOiB7XG4gICAgdW5pdDogJ3RpbWVPZkRheUhvdXJzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5NLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEhvdXI6IDAxLCAwMiwgLi4uLCAxMlxuICAnaGgnOiB7XG4gICAgdW5pdDogJ3RpbWVPZkRheUhvdXJzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwLCAxLCAuLi4sIDU5XG4gICdtJzoge1xuICAgIHVuaXQ6ICdtaW51dGVzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5tLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMDAsIDAxLCAuLi4sIDU5XG4gICdtbSc6IHtcbiAgICB1bml0OiAnbWludXRlcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIFNlY29uZDogMCwgMSwgLi4uLCA1OVxuICAncyc6IHtcbiAgICB1bml0OiAnc2Vjb25kcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEubSxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAwLCAwMSwgLi4uLCA1OVxuICAnc3MnOiB7XG4gICAgdW5pdDogJ3NlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyAxLzEwIG9mIHNlY29uZDogMCwgMSwgLi4uLCA5XG4gICdTJzoge1xuICAgIHVuaXQ6ICdtaWxsaXNlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnNpbmdsZURpZ2l0LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdCkgKiAxMDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gMS8xMDAgb2Ygc2Vjb25kOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ1NTJzoge1xuICAgIHVuaXQ6ICdtaWxsaXNlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpICogMTBcbiAgICB9XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmQ6IDAwMCwgMDAxLCAuLi4sIDk5OVxuICAnU1NTJzoge1xuICAgIHVuaXQ6ICdtaWxsaXNlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnRocmVlRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMFxuICAnWic6IHtcbiAgICB1bml0OiAndGltZXpvbmUnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLlosXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgdmFyIHNpZ24gPSBtYXRjaFJlc3VsdFsxXTtcbiAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KG1hdGNoUmVzdWx0WzJdLCAxMCk7XG4gICAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KG1hdGNoUmVzdWx0WzNdLCAxMCk7XG4gICAgICB2YXIgYWJzb2x1dGVPZmZzZXQgPSBob3VycyAqIDYwICsgbWludXRlcztcbiAgICAgIHJldHVybiAoc2lnbiA9PT0gJysnKSA/IGFic29sdXRlT2Zmc2V0IDogLWFic29sdXRlT2Zmc2V0XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDEwMCwgKzAwMDAsIC4uLiArMTIwMFxuICAnWlonOiB7XG4gICAgdW5pdDogJ3RpbWV6b25lJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5aWixcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICB2YXIgc2lnbiA9IG1hdGNoUmVzdWx0WzFdO1xuICAgICAgdmFyIGhvdXJzID0gcGFyc2VJbnQobWF0Y2hSZXN1bHRbMl0sIDEwKTtcbiAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKTtcbiAgICAgIHZhciBhYnNvbHV0ZU9mZnNldCA9IGhvdXJzICogNjAgKyBtaW51dGVzO1xuICAgICAgcmV0dXJuIChzaWduID09PSAnKycpID8gYWJzb2x1dGVPZmZzZXQgOiAtYWJzb2x1dGVPZmZzZXRcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMFxuICAnWCc6IHtcbiAgICB1bml0OiAndGltZXN0YW1wJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5hbnlEaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSAqIDEwMDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwOTAwXG4gICd4Jzoge1xuICAgIHVuaXQ6ICd0aW1lc3RhbXAnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLmFueURpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfVxufTtcblxucGFyc2Vyc1snYSddID0gcGFyc2Vyc1snQSddO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIHNldFVUQ0RheSAoZGlydHlEYXRlLCBkaXJ0eURheSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PT0gdW5kZWZpbmVkID8gMCA6IE51bWJlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiBOdW1iZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKVxuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF5ID0gTnVtYmVyKGRpcnR5RGF5KTtcblxuICB2YXIgY3VycmVudERheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgdmFyIHJlbWFpbmRlciA9IGRheSAlIDc7XG4gIHZhciBkYXlJbmRleCA9IChyZW1haW5kZXIgKyA3KSAlIDc7XG5cbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5O1xuXG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIHNldFVUQ0lTT0RheSAoZGlydHlEYXRlLCBkaXJ0eURheSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXkgPSBOdW1iZXIoZGlydHlEYXkpO1xuXG4gIGlmIChkYXkgJSA3ID09PSAwKSB7XG4gICAgZGF5ID0gZGF5IC0gNztcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBjdXJyZW50RGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcblxuICB2YXIgZGlmZiA9IChkYXlJbmRleCA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIGN1cnJlbnREYXk7XG5cbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc2V0VVRDSVNPV2VlayAoZGlydHlEYXRlLCBkaXJ0eUlTT1dlZWssIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBpc29XZWVrID0gTnVtYmVyKGRpcnR5SVNPV2Vlayk7XG4gIHZhciBkaWZmID0gZ2V0VVRDSVNPV2VlayhkYXRlLCBkaXJ0eU9wdGlvbnMpIC0gaXNvV2VlaztcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZiAqIDcpO1xuICByZXR1cm4gZGF0ZVxufVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSQzID0gODY0MDAwMDA7XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc2V0VVRDSVNPV2Vla1llYXIgKGRpcnR5RGF0ZSwgZGlydHlJU09ZZWFyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgaXNvWWVhciA9IE51bWJlcihkaXJ0eUlTT1llYXIpO1xuICB2YXIgZGF0ZVN0YXJ0T2ZZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkaWZmID0gTWF0aC5mbG9vcigoZGF0ZS5nZXRUaW1lKCkgLSBkYXRlU3RhcnRPZlllYXIuZ2V0VGltZSgpKSAvIE1JTExJU0VDT05EU19JTl9EQVkkMyk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKGlzb1llYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZm91cnRoT2ZKYW51YXJ5LCBkaXJ0eU9wdGlvbnMpO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGVcbn1cblxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUkNyA9IDYwMDAwO1xuXG5mdW5jdGlvbiBzZXRUaW1lT2ZEYXkgKGhvdXJzLCB0aW1lT2ZEYXkpIHtcbiAgdmFyIGlzQU0gPSB0aW1lT2ZEYXkgPT09IDA7XG5cbiAgaWYgKGlzQU0pIHtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaG91cnMgIT09IDEyKSB7XG4gICAgICByZXR1cm4gMTIgKyBob3Vyc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBob3Vyc1xufVxuXG52YXIgdW5pdHMgPSB7XG4gIHR3b0RpZ2l0WWVhcjoge1xuICAgIHByaW9yaXR5OiAxMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgdmFyIGNlbnR1cnkgPSBNYXRoLmZsb29yKGRhdGVWYWx1ZXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpIC8gMTAwKTtcbiAgICAgIHZhciB5ZWFyID0gY2VudHVyeSAqIDEwMCArIHZhbHVlO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDEpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgeWVhcjoge1xuICAgIHByaW9yaXR5OiAxMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCAxKTtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIGlzb1llYXI6IHtcbiAgICBwcmlvcml0eTogMTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrWWVhcihzZXRVVENJU09XZWVrWWVhcihkYXRlVmFsdWVzLmRhdGUsIHZhbHVlLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBxdWFydGVyOiB7XG4gICAgcHJpb3JpdHk6IDIwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDTW9udGgoKHZhbHVlIC0gMSkgKiAzLCAxKTtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIG1vbnRoOiB7XG4gICAgcHJpb3JpdHk6IDMwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDTW9udGgodmFsdWUsIDEpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgaXNvV2Vlazoge1xuICAgIHByaW9yaXR5OiA0MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoc2V0VVRDSVNPV2VlayhkYXRlVmFsdWVzLmRhdGUsIHZhbHVlLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBkYXlPZldlZWs6IHtcbiAgICBwcmlvcml0eTogNTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZSA9IHNldFVUQ0RheShkYXRlVmFsdWVzLmRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIGRheU9mSVNPV2Vlazoge1xuICAgIHByaW9yaXR5OiA1MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gc2V0VVRDSVNPRGF5KGRhdGVWYWx1ZXMuZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgZGF5T2ZNb250aDoge1xuICAgIHByaW9yaXR5OiA1MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0RhdGUodmFsdWUpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgZGF5T2ZZZWFyOiB7XG4gICAgcHJpb3JpdHk6IDUwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDTW9udGgoMCwgdmFsdWUpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgdGltZU9mRGF5OiB7XG4gICAgcHJpb3JpdHk6IDYwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlVmFsdWVzLnRpbWVPZkRheSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgaG91cnM6IHtcbiAgICBwcmlvcml0eTogNzAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICB0aW1lT2ZEYXlIb3Vyczoge1xuICAgIHByaW9yaXR5OiA3MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgdmFyIHRpbWVPZkRheSA9IGRhdGVWYWx1ZXMudGltZU9mRGF5O1xuICAgICAgaWYgKHRpbWVPZkRheSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gc2V0VGltZU9mRGF5KHZhbHVlLCB0aW1lT2ZEYXkpO1xuICAgICAgfVxuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIG1pbnV0ZXM6IHtcbiAgICBwcmlvcml0eTogODAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIHNlY29uZHM6IHtcbiAgICBwcmlvcml0eTogOTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENTZWNvbmRzKHZhbHVlLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIG1pbGxpc2Vjb25kczoge1xuICAgIHByaW9yaXR5OiAxMDAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgdGltZXpvbmU6IHtcbiAgICBwcmlvcml0eTogMTEwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUgPSBuZXcgRGF0ZShkYXRlVmFsdWVzLmRhdGUuZ2V0VGltZSgpIC0gdmFsdWUgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFJDcpO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgdGltZXN0YW1wOiB7XG4gICAgcHJpb3JpdHk6IDEyMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH1cbn07XG5cbnZhciBUSU1FWk9ORV9VTklUX1BSSU9SSVRZID0gMTEwO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUkNiA9IDYwMDAwO1xuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAkMSA9IC8oXFxbW15bXSpdKXwoXFxcXCk/KExUU3xMVHxMTExMfExMTHxMTHxMfGxsbGx8bGxsfGxsfGwpL2c7XG52YXIgZGVmYXVsdFBhcnNpbmdUb2tlbnNSZWdFeHAgPSAvKFxcW1teW10qXSl8KFxcXFwpPyh4fHNzfHN8bW18bXxoaHxofGRvfGRkZGR8ZGRkfGRkfGR8YWF8YXxaWnxafFlZWVl8WVl8WHxXb3xXV3xXfFNTU3xTU3xTfFFvfFF8TW98TU1NTXxNTU18TU18TXxISHxIfEdHR0d8R0d8RXxEb3xERERvfERERER8REREfEREfER8QXwuKS9nO1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkYXRlIHBhcnNlZCBmcm9tIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZm9ybWF0LlxuICpcbiAqIEFjY2VwdGVkIGZvcm1hdCB0b2tlbnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgIHwgUHJpb3JpdHkgfCBUb2tlbiB8IElucHV0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBZZWFyICAgICAgICAgICAgICAgICAgICB8IDEwICAgICAgIHwgWVkgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBZWVlZICB8IDE5MDAsIDE5MDEsIC4uLiwgMjA5OSAgICAgICAgICAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgfCAxMCAgICAgICB8IEdHICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgR0dHRyAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgIHwgMjAgICAgICAgfCBRICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IFFvICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgfFxuICogfCBNb250aCAgICAgICAgICAgICAgICAgICB8IDMwICAgICAgIHwgTSAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBNbyAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IE1NICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgTU1NICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBNTU1NICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyIHxcbiAqIHwgSVNPIHdlZWsgICAgICAgICAgICAgICAgfCA0MCAgICAgICB8IFcgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgV28gICAgfCAxc3QsIDJuZCwgLi4uLCA1M3JkICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBXVyAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgfCA1MCAgICAgICB8IGQgICAgIHwgMCwgMSwgLi4uLCA2ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgZG8gICAgfCAwdGgsIDFzdCwgLi4uLCA2dGggICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBkZCAgICB8IFN1LCBNbywgLi4uLCBTYSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IGRkZCAgIHwgU3VuLCBNb24sIC4uLiwgU2F0ICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgZGRkZCAgfCBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheSAgICB8XG4gKiB8IERheSBvZiBJU08gd2VlayAgICAgICAgIHwgNTAgICAgICAgfCBFICAgICB8IDEsIDIsIC4uLiwgNyAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgfCA1MCAgICAgICB8IEQgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgRG8gICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBERCAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgfCA1MCAgICAgICB8IERERCAgIHwgMSwgMiwgLi4uLCAzNjYgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgREREbyAgfCAxc3QsIDJuZCwgLi4uLCAzNjZ0aCAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBEREREICB8IDAwMSwgMDAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgIHxcbiAqIHwgVGltZSBvZiBkYXkgICAgICAgICAgICAgfCA2MCAgICAgICB8IEEgICAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgSG91ciAgICAgICAgICAgICAgICAgICAgfCA3MCAgICAgICB8IEggICAgIHwgMCwgMSwgLi4uIDIzICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgSEggICAgfCAwMCwgMDEsIC4uLiAyMyAgICAgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWUgb2YgZGF5IGhvdXIgICAgICAgIHwgNzAgICAgICAgfCBoICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IGhoICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICB8IDgwICAgICAgIHwgbSAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBtbSAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgfCA5MCAgICAgICB8IHMgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgc3MgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAgb2Ygc2Vjb25kICAgICAgICAgIHwgMTAwICAgICAgfCBTICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgMS8xMDAgb2Ygc2Vjb25kICAgICAgICAgfCAxMDAgICAgICB8IFNTICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCBNaWxsaXNlY29uZCAgICAgICAgICAgICB8IDEwMCAgICAgIHwgU1NTICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWV6b25lICAgICAgICAgICAgICAgIHwgMTEwICAgICAgfCBaICAgICB8IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IFpaICAgIHwgLTAxMDAsICswMDAwLCAuLi4sICsxMjAwICAgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICB8IDEyMCAgICAgIHwgWCAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgIHwgMTIwICAgICAgfCB4ICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgYXNjZW5kaW5nIG9yZGVyIG9mIGl0cyB1bml0J3MgcHJpb3JpdHkuXG4gKiBVbml0cyBvZiBhbiBlcXVhbCBwcmlvcml0eSBvdmVyd3JpdGUgZWFjaCBvdGhlciBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZS5cbiAqXG4gKiBJZiBubyB2YWx1ZXMgb2YgaGlnaGVyIHByaW9yaXR5IGFyZSBwYXJzZWQgKGUuZy4gd2hlbiBwYXJzaW5nIHN0cmluZyAnSmFudWFyeSAxc3QnIHdpdGhvdXQgYSB5ZWFyKSxcbiAqIHRoZSB2YWx1ZXMgd2lsbCBiZSB0YWtlbiBmcm9tIDNyZCBhcmd1bWVudCBgYmFzZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGBiYXNlRGF0ZWAgbXVzdCBiZSBwYXNzZWQgZm9yIGNvcnJlY3Qgd29yayBvZiB0aGUgZnVuY3Rpb24uXG4gKiBJZiB5b3UncmUgbm90IHN1cmUgd2hpY2ggYGJhc2VEYXRlYCB0byBzdXBwbHksIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBEYXRlOlxuICogYHBhcnNlKCcwMi8xMS8yMDE0JywgJ01NL0REL1lZWVknLCBuZXcgRGF0ZSgpKWBcbiAqIEluIHRoaXMgY2FzZSBwYXJzaW5nIHdpbGwgYmUgZG9uZSBpbiB0aGUgY29udGV4dCBvZiB0aGUgY3VycmVudCBkYXRlLlxuICogSWYgYGJhc2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQWxzbywgYHBhcnNlYCB1bmZvbGRzIGxvbmcgZm9ybWF0cyBsaWtlIHRob3NlIGluIFtmb3JtYXRde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0fTpcbiAqIHwgVG9rZW4gfCBJbnB1dCBleGFtcGxlcyAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IExUICAgIHwgMDU6MzAgYS5tLiAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTFRTICAgfCAwNTozMDoxNSBhLm0uICAgICAgICAgICAgICAgICAgfFxuICogfCBMICAgICB8IDA3LzAyLzE5OTUgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGwgICAgIHwgNy8yLzE5OTUgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTEwgICAgfCBKdWx5IDIgMTk5NSAgICAgICAgICAgICAgICAgICAgfFxuICogfCBsbCAgICB8IEp1bCAyIDE5OTUgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IExMTCAgIHwgSnVseSAyIDE5OTUgMDU6MzAgYS5tLiAgICAgICAgIHxcbiAqIHwgbGxsICAgfCBKdWwgMiAxOTk1IDA1OjMwIGEubS4gICAgICAgICAgfFxuICogfCBMTExMICB8IFN1bmRheSwgSnVseSAyIDE5OTUgMDU6MzAgYS5tLiB8XG4gKiB8IGxsbGwgIHwgU3VuLCBKdWwgMiAxOTk1IDA1OjMwIGEubS4gICAgIHxcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGluIHNxdWFyZSBicmFja2V0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyBhcmUgZXNjYXBlZC5cbiAqXG4gKiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiBJZiBgZm9ybWF0U3RyaW5nYCBtYXRjaGVzIHdpdGggYGRhdGVTdHJpbmdgIGJ1dCBkb2VzIG5vdCBwcm92aWRlcyB0b2tlbnMsIGBiYXNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGVTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0U3RyaW5nIC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIHRvb2sgdGhlIG1pc3NpbmcgaGlnaGVyIHByaW9yaXR5IHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMyBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbWF0Y2hgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2UgMTEgRmVicnVhcnkgMjAxNCBmcm9tIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IHBhcnNlKFxuICogICAnMDIvMTEvMjAxNCcsXG4gKiAgICdNTS9ERC9ZWVlZJyxcbiAqICAgbmV3IERhdGUoKVxuICogKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2UgMjh0aCBvZiBGZWJydWFyeSBpbiBFbmdsaXNoIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW9Mb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKFxuICogICAnMjgtYSBkZSBmZWJydWFybycsXG4gKiAgICdEbyBbZGVdIE1NTU0nLFxuICogICBuZXcgRGF0ZSgyMDEwLCAwLCAxKVxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChkaXJ0eURhdGVTdHJpbmcsIGRpcnR5Rm9ybWF0U3RyaW5nLCBkaXJ0eUJhc2VEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMyBhcmd1bWVudHMgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBwcmVzZW50JylcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5nID0gU3RyaW5nKGRpcnR5RGF0ZVN0cmluZyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PT0gdW5kZWZpbmVkID8gMCA6IE51bWJlcihvcHRpb25zLndlZWtTdGFydHNPbik7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpXG4gIH1cblxuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgbG9jYWxlJDE7XG4gIHZhciBsb2NhbGVQYXJzZXJzID0gbG9jYWxlLnBhcnNlcnMgfHwge307XG4gIHZhciBsb2NhbGVVbml0cyA9IGxvY2FsZS51bml0cyB8fCB7fTtcblxuICBpZiAoIWxvY2FsZS5tYXRjaCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIG1hdGNoIHByb3BlcnR5JylcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5JylcbiAgfVxuXG4gIHZhciBmb3JtYXRTdHJpbmcgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHJpbmcpXG4gICAgLnJlcGxhY2UobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAkMSwgZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgaWYgKHN1YnN0cmluZ1swXSA9PT0gJ1snKSB7XG4gICAgICAgIHJldHVybiBzdWJzdHJpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnN0cmluZ1swXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmckMShzdWJzdHJpbmcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0TG9uZyhzdWJzdHJpbmcpXG4gICAgfSk7XG5cbiAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJycpIHtcbiAgICBpZiAoZGF0ZVN0cmluZyA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0b0RhdGUoZGlydHlCYXNlRGF0ZSwgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgICB9XG4gIH1cblxuICB2YXIgc3ViRm5PcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIHN1YkZuT3B0aW9ucy5sb2NhbGUgPSBsb2NhbGU7XG5cbiAgdmFyIHRva2VucyA9IGZvcm1hdFN0cmluZy5tYXRjaChsb2NhbGUucGFyc2luZ1Rva2Vuc1JlZ0V4cCB8fCBkZWZhdWx0UGFyc2luZ1Rva2Vuc1JlZ0V4cCk7XG4gIHZhciB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoO1xuXG4gIC8vIElmIHRpbWV6b25lIGlzbid0IHNwZWNpZmllZCwgaXQgd2lsbCBiZSBzZXQgdG8gdGhlIHN5c3RlbSB0aW1lem9uZVxuICB2YXIgc2V0dGVycyA9IFt7XG4gICAgcHJpb3JpdHk6IFRJTUVaT05FX1VOSVRfUFJJT1JJVFksXG4gICAgc2V0OiBkYXRlVG9TeXN0ZW1UaW1lem9uZSxcbiAgICBpbmRleDogMFxuICB9XTtcblxuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRva2Vuc0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgIHZhciBwYXJzZXIgPSBsb2NhbGVQYXJzZXJzW3Rva2VuXSB8fCBwYXJzZXJzW3Rva2VuXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICB2YXIgbWF0Y2hSZXN1bHQ7XG5cbiAgICAgIGlmIChwYXJzZXIubWF0Y2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgbWF0Y2hSZXN1bHQgPSBwYXJzZXIubWF0Y2guZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoUmVzdWx0ID0gcGFyc2VyLm1hdGNoKGRhdGVTdHJpbmcsIHN1YkZuT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgICAgIH1cblxuICAgICAgdmFyIHVuaXROYW1lID0gcGFyc2VyLnVuaXQ7XG4gICAgICB2YXIgdW5pdCA9IGxvY2FsZVVuaXRzW3VuaXROYW1lXSB8fCB1bml0c1t1bml0TmFtZV07XG5cbiAgICAgIHNldHRlcnMucHVzaCh7XG4gICAgICAgIHByaW9yaXR5OiB1bml0LnByaW9yaXR5LFxuICAgICAgICBzZXQ6IHVuaXQuc2V0LFxuICAgICAgICB2YWx1ZTogcGFyc2VyLnBhcnNlKG1hdGNoUmVzdWx0LCBzdWJGbk9wdGlvbnMpLFxuICAgICAgICBpbmRleDogc2V0dGVycy5sZW5ndGhcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc3Vic3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5zbGljZShzdWJzdHJpbmcubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGhlYWQgPSB0b2tlbnNbaV0ubWF0Y2goL15cXFsuKl0kLykgPyB0b2tlbnNbaV0ucmVwbGFjZSgvXlxcW3xdJC9nLCAnJykgOiB0b2tlbnNbaV07XG4gICAgICBpZiAoZGF0ZVN0cmluZy5pbmRleE9mKGhlYWQpID09PSAwKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKGhlYWQubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHVuaXF1ZVByaW9yaXR5U2V0dGVycyA9IHNldHRlcnNcbiAgICAubWFwKGZ1bmN0aW9uIChzZXR0ZXIpIHtcbiAgICAgIHJldHVybiBzZXR0ZXIucHJpb3JpdHlcbiAgICB9KVxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGJcbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHByaW9yaXR5LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXhcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgICByZXR1cm4gc2V0dGVyc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXR0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eVxuICAgICAgICB9KVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChzZXR0ZXJBcnJheSkge1xuICAgICAgcmV0dXJuIHNldHRlckFycmF5WzBdXG4gICAgfSk7XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSwgb3B0aW9ucyk7XG5cbiAgaWYgKGlzTmFOKGRhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zN1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbnV0ZXMoZGF0ZSwgZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcblxuICB2YXIgZGF0ZVZhbHVlcyA9IHtkYXRlOiB1dGNEYXRlfTtcblxuICB2YXIgc2V0dGVyc0xlbmd0aCA9IHVuaXF1ZVByaW9yaXR5U2V0dGVycy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBzZXR0ZXJzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2V0dGVyID0gdW5pcXVlUHJpb3JpdHlTZXR0ZXJzW2ldO1xuICAgIGRhdGVWYWx1ZXMgPSBzZXR0ZXIuc2V0KGRhdGVWYWx1ZXMsIHNldHRlci52YWx1ZSwgc3ViRm5PcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlVmFsdWVzLmRhdGVcbn1cblxuZnVuY3Rpb24gZGF0ZVRvU3lzdGVtVGltZXpvbmUgKGRhdGVWYWx1ZXMpIHtcbiAgdmFyIGRhdGUgPSBkYXRlVmFsdWVzLmRhdGU7XG4gIHZhciB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG5cbiAgLy8gR2V0IHRoZSBzeXN0ZW0gdGltZXpvbmUgb2Zmc2V0IGF0IChtb21lbnQgb2YgdGltZSAtIG9mZnNldClcbiAgdmFyIG9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAvLyBHZXQgdGhlIHN5c3RlbSB0aW1lem9uZSBvZmZzZXQgYXQgdGhlIGV4YWN0IG1vbWVudCBvZiB0aW1lXG4gIG9mZnNldCA9IG5ldyBEYXRlKHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFJDYpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgLy8gQ29udmVydCBkYXRlIGluIHRpbWV6b25lIFwiVVRDKzAwOjAwXCIgdG8gdGhlIHN5c3RlbSB0aW1lem9uZVxuICBkYXRlVmFsdWVzLmRhdGUgPSBuZXcgRGF0ZSh0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSQ2KTtcblxuICByZXR1cm4gZGF0ZVZhbHVlc1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmckMSAoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XSQvZywgJycpXG4gIH1cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpXG59XG5cbi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseSBieSBgc2NyaXB0cy9idWlsZC9pbmRpY2VzLmpzYC4gUGxlYXNlLCBkb24ndCBjaGFuZ2UgaXQuXG5cbi8vIFxuXG4vKipcbiAqIEN1c3RvbSBwYXJzZSBiZWhhdmlvciBvbiB0b3Agb2YgZGF0ZS1mbnMgcGFyc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRGF0ZSQxIChkYXRlLCBmb3JtYXQkJDEpIHtcbiAgaWYgKHR5cGVvZiBkYXRlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZGF0ZSA6IG51bGw7XG4gIH1cblxuICB2YXIgcGFyc2VkID0gcGFyc2UoZGF0ZSwgZm9ybWF0JCQxLCBuZXcgRGF0ZSgpKTtcblxuICAvLyBpZiBkYXRlIGlzIG5vdCB2YWxpZCBvciB0aGUgZm9ybWF0dGVkIG91dHB1dCBhZnRlciBwYXJzaW5nIGRvZXMgbm90IG1hdGNoXG4gIC8vIHRoZSBzdHJpbmcgdmFsdWUgcGFzc2VkIGluIChhdm9pZHMgb3ZlcmZsb3dzKVxuICBpZiAoIWlzVmFsaWQocGFyc2VkKSB8fCBmb3JtYXQocGFyc2VkLCBmb3JtYXQkJDEpICE9PSBkYXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG52YXIgYWZ0ZXIgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgb3RoZXJWYWx1ZSA9IHJlZlswXTtcbiAgdmFyIGluY2x1c2lvbiA9IHJlZlsxXTtcbiAgdmFyIGZvcm1hdCA9IHJlZlsyXTtcblxuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3JtYXQgPSBpbmNsdXNpb247XG4gICAgaW5jbHVzaW9uID0gZmFsc2U7XG4gIH1cbiAgdmFsdWUgPSBwYXJzZURhdGUkMSh2YWx1ZSwgZm9ybWF0KTtcbiAgb3RoZXJWYWx1ZSA9IHBhcnNlRGF0ZSQxKG90aGVyVmFsdWUsIGZvcm1hdCk7XG5cbiAgLy8gaWYgZWl0aGVyIGlzIG5vdCB2YWxpZC5cbiAgaWYgKCF2YWx1ZSB8fCAhb3RoZXJWYWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc0FmdGVyKHZhbHVlLCBvdGhlclZhbHVlKSB8fCAoaW5jbHVzaW9uICYmIGlzRXF1YWwkMSh2YWx1ZSwgb3RoZXJWYWx1ZSkpO1xufTtcblxuLyoqXG4gKiBTb21lIEFscGhhIFJlZ2V4IGhlbHBlcnMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNvL3ZhbGlkYXRvci5qcy9ibG9iL21hc3Rlci9zcmMvbGliL2FscGhhLmpzXG4gKi9cblxudmFyIGFscGhhJDEgPSB7XG4gIGVuOiAvXltBLVpdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1dKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnF0qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xbldKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV0qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkF0qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0qJC9cbn07XG5cbnZhciBhbHBoYVNwYWNlcyA9IHtcbiAgZW46IC9eW0EtWlxcc10qJC9pLFxuICBjczogL15bQS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XFxzXSokL2ksXG4gIGRhOiAvXltBLVrDhsOYw4VcXHNdKiQvaSxcbiAgZGU6IC9eW0EtWsOEw5bDnMOfXFxzXSokL2ksXG4gIGVzOiAvXltBLVrDgcOJw43DkcOTw5rDnFxcc10qJC9pLFxuICBmcjogL15bQS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhcXHNdKiQvaSxcbiAgbHQ6IC9eW0EtWsSExIzEmMSWxK7FoMWyxarFvVxcc10qJC9pLFxuICBubDogL15bQS1aw4nDi8OPw5PDlsOcXFxzXSokL2ksXG4gIGh1OiAvXltBLVrDgcOJw43Dk8OWxZDDmsOcxbBcXHNdKiQvaSxcbiAgcGw6IC9eW0EtWsSExIbEmMWaxYHFg8OTxbvFuVxcc10qJC9pLFxuICBwdDogL15bQS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xcXHNdKiQvaSxcbiAgcnU6IC9eW9CQLdCv0IFcXHNdKiQvaSxcbiAgc2s6IC9eW0EtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9XFxzXSokL2ksXG4gIHNyOiAvXltBLVrEjMSGxb3FoMSQXFxzXSokL2ksXG4gIHRyOiAvXltBLVrDh8SexLDEscOWxZ7DnFxcc10qJC9pLFxuICB1azogL15b0JAt0KnQrNCu0K/QhNCG0IfSkFxcc10qJC9pLFxuICBhcjogL15b2KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXFxzXSokL1xufTtcblxudmFyIGFscGhhbnVtZXJpYyA9IHtcbiAgZW46IC9eWzAtOUEtWl0qJC9pLFxuICBjczogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSokL2ksXG4gIGRhOiAvXlswLTlBLVrDhsOYw4VdJC9pLFxuICBkZTogL15bMC05QS1aw4TDlsOcw59dKiQvaSxcbiAgZXM6IC9eWzAtOUEtWsOBw4nDjcORw5PDmsOcXSokL2ksXG4gIGZyOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0qJC9pLFxuICBsdDogL15bMC05QS1axITEjMSYxJbErsWgxbLFqsW9XSokL2ksXG4gIGh1OiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKiQvaSxcbiAgbmw6IC9eWzAtOUEtWsOJw4vDj8OTw5bDnF0qJC9pLFxuICBwbDogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5XSokL2ksXG4gIHB0OiAvXlswLTlBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0qJC9pLFxuICBydTogL15bMC050JAt0K/QgV0qJC9pLFxuICBzazogL15bMC05QS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1dKiQvaSxcbiAgc3I6IC9eWzAtOUEtWsSMxIbFvcWgxJBdKiQvaSxcbiAgdHI6IC9eWzAtOUEtWsOHxJ7EsMSxw5bFnsOcXSokL2ksXG4gIHVrOiAvXlswLTnQkC3QqdCs0K7Qr9CE0IbQh9KQXSokL2ksXG4gIGFyOiAvXlvZoNmh2aLZo9mk2aXZptmn2ajZqTAtOdih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0qJC9cbn07XG5cbnZhciBhbHBoYURhc2ggPSB7XG4gIGVuOiAvXlswLTlBLVpfLV0qJC9pLFxuICBjczogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9Xy1dKiQvaSxcbiAgZGE6IC9eWzAtOUEtWsOGw5jDhV8tXSokL2ksXG4gIGRlOiAvXlswLTlBLVrDhMOWw5zDn18tXSokL2ksXG4gIGVzOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF8tXSokL2ksXG4gIGZyOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF8tXSokL2ksXG4gIGx0OiAvXlswLTlBLVrEhMSMxJjElsSuxaDFssWqxb1fLV0qJC9pLFxuICBubDogL15bMC05QS1aw4nDi8OPw5PDlsOcXy1dKiQvaSxcbiAgaHU6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF8tXSokL2ksXG4gIHBsOiAvXlswLTlBLVrEhMSGxJjFmsWBxYPDk8W7xblfLV0qJC9pLFxuICBwdDogL15bMC05QS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xfLV0qJC9pLFxuICBydTogL15bMC050JAt0K/QgV8tXSokL2ksXG4gIHNrOiAvXlswLTlBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV8tXSokL2ksXG4gIHNyOiAvXlswLTlBLVrEjMSGxb3FoMSQXy1dKiQvaSxcbiAgdHI6IC9eWzAtOUEtWsOHxJ7EsMSxw5bFnsOcXy1dKiQvaSxcbiAgdWs6IC9eWzAtOdCQLdCp0KzQrtCv0ITQhtCH0pBfLV0qJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBfLV0qJC9cbn07XG5cbnZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbXTtcbiAgdmFyIGxvY2FsZSA9IHJlZlswXTsgaWYgKCBsb2NhbGUgPT09IHZvaWQgMCApIGxvY2FsZSA9IG51bGw7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlKHZhbCwgW2xvY2FsZV0pOyB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGF0IGxlYXN0IG9uZSBsb2NhbGUuXG4gIGlmICghIGxvY2FsZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhbHBoYSQxKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhJDFbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhJDFbbG9jYWxlXSB8fCBhbHBoYSQxLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQxID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdOyBpZiAoIGxvY2FsZSA9PT0gdm9pZCAwICkgbG9jYWxlID0gbnVsbDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkMSh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGFEYXNoKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhRGFzaFtsb2NdLnRlc3QodmFsdWUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFEYXNoW2xvY2FsZV0gfHwgYWxwaGFEYXNoLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQyID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdOyBpZiAoIGxvY2FsZSA9PT0gdm9pZCAwICkgbG9jYWxlID0gbnVsbDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkMih2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGFudW1lcmljKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhbnVtZXJpY1tsb2NdLnRlc3QodmFsdWUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFudW1lcmljW2xvY2FsZV0gfHwgYWxwaGFudW1lcmljLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQzID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdOyBpZiAoIGxvY2FsZSA9PT0gdm9pZCAwICkgbG9jYWxlID0gbnVsbDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkMyh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGFTcGFjZXMpLnNvbWUoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gYWxwaGFTcGFjZXNbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhU3BhY2VzW2xvY2FsZV0gfHwgYWxwaGFTcGFjZXMuZW4pLnRlc3QodmFsdWUpO1xufTtcblxudmFyIGJlZm9yZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBvdGhlclZhbHVlID0gcmVmWzBdO1xuICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuICB2YXIgZm9ybWF0ID0gcmVmWzJdO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvcm1hdCA9IGluY2x1c2lvbjtcbiAgICBpbmNsdXNpb24gPSBmYWxzZTtcbiAgfVxuICB2YWx1ZSA9IHBhcnNlRGF0ZSQxKHZhbHVlLCBmb3JtYXQpO1xuICBvdGhlclZhbHVlID0gcGFyc2VEYXRlJDEob3RoZXJWYWx1ZSwgZm9ybWF0KTtcblxuICAvLyBpZiBlaXRoZXIgaXMgbm90IHZhbGlkLlxuICBpZiAoIXZhbHVlIHx8ICFvdGhlclZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzQmVmb3JlKHZhbHVlLCBvdGhlclZhbHVlKSB8fCAoaW5jbHVzaW9uICYmIGlzRXF1YWwkMSh2YWx1ZSwgb3RoZXJWYWx1ZSkpO1xufTtcblxudmFyIHZhbGlkYXRlJDQgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbWluID0gcmVmWzBdO1xuICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ0KHZhbCwgW21pbiwgbWF4XSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcihtaW4pIDw9IHZhbHVlICYmIE51bWJlcihtYXgpID49IHZhbHVlO1xufTtcblxudmFyIGNvbmZpcm1lZCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHsgcmV0dXJuIFN0cmluZyh2YWx1ZSkgPT09IFN0cmluZyhvdGhlcik7IH07XG5cbmZ1bmN0aW9uIHVud3JhcEV4cG9ydHMgKHgpIHtcblx0cmV0dXJuIHggJiYgeC5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnZGVmYXVsdCcpID8geFsnZGVmYXVsdCddIDogeDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBhc3NlcnRTdHJpbmdfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFzc2VydFN0cmluZztcbmZ1bmN0aW9uIGFzc2VydFN0cmluZyhpbnB1dCkge1xuICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuXG4gIGlmICghaXNTdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIGxpYnJhcnkgKHZhbGlkYXRvci5qcykgdmFsaWRhdGVzIHN0cmluZ3Mgb25seScpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGFzc2VydFN0cmluZ18xKTtcblxudmFyIGlzQ3JlZGl0Q2FyZF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDcmVkaXRDYXJkO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBjcmVkaXRDYXJkID0gL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18KDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVswLTldezEyfXw2KD86MDExfDVbMC05XVswLTldKVswLTldezEyfXwzWzQ3XVswLTldezEzfXwzKD86MFswLTVdfFs2OF1bMC05XSlbMC05XXsxMX18KD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX18NjJbMC05XXsxNH0pJC87XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZnVuY3Rpb24gaXNDcmVkaXRDYXJkKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG4gIGlmICghY3JlZGl0Q2FyZC50ZXN0KHNhbml0aXplZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBkaWdpdCA9IHZvaWQgMDtcbiAgdmFyIHRtcE51bSA9IHZvaWQgMDtcbiAgdmFyIHNob3VsZERvdWJsZSA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSAlIDEwICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgfVxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cbiAgcmV0dXJuICEhKHN1bSAlIDEwID09PSAwID8gc2FuaXRpemVkIDogZmFsc2UpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQ3JlZGl0Q2FyZCA9IHVud3JhcEV4cG9ydHMoaXNDcmVkaXRDYXJkXzEpO1xuXG52YXIgY3JlZGl0X2NhcmQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGlzQ3JlZGl0Q2FyZChTdHJpbmcodmFsdWUpKTsgfTtcblxudmFyIHZhbGlkYXRlJDUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW107XG4gIHZhciBkZWNpbWFscyA9IHJlZlswXTsgaWYgKCBkZWNpbWFscyA9PT0gdm9pZCAwICkgZGVjaW1hbHMgPSAnKic7XG4gIHZhciBzZXBhcmF0b3IgPSByZWZbMV07IGlmICggc2VwYXJhdG9yID09PSB2b2lkIDAgKSBzZXBhcmF0b3IgPSAnLic7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDUodmFsLCBbZGVjaW1hbHMsIHNlcGFyYXRvcl0pOyB9KTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaWYgaXMgMC5cbiAgaWYgKE51bWJlcihkZWNpbWFscykgPT09IDApIHtcbiAgICByZXR1cm4gL14tP1xcZCokLy50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIHZhciByZWdleFBhcnQgPSBkZWNpbWFscyA9PT0gJyonID8gJysnIDogKFwiezEsXCIgKyBkZWNpbWFscyArIFwifVwiKTtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgoXCJeLT9cXFxcZCooXFxcXFwiICsgc2VwYXJhdG9yICsgXCJcXFxcZFwiICsgcmVnZXhQYXJ0ICsgXCIpPyRcIikpO1xuXG4gIGlmICghIHJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlID09PSBwYXJzZWRWYWx1ZTtcbn07XG5cbnZhciBkYXRlX2JldHdlZW4gPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgbWluO1xuICB2YXIgbWF4O1xuICB2YXIgZm9ybWF0O1xuICB2YXIgaW5jbHVzaXZpdHkgPSAnKCknO1xuXG4gIGlmIChwYXJhbXMubGVuZ3RoID4gMykge1xuICAgIHZhciBhc3NpZ247XG4gICAgKGFzc2lnbiA9IHBhcmFtcywgbWluID0gYXNzaWduWzBdLCBtYXggPSBhc3NpZ25bMV0sIGluY2x1c2l2aXR5ID0gYXNzaWduWzJdLCBmb3JtYXQgPSBhc3NpZ25bM10pO1xuICB9IGVsc2Uge1xuICAgIHZhciBhc3NpZ24kMTtcbiAgICAoYXNzaWduJDEgPSBwYXJhbXMsIG1pbiA9IGFzc2lnbiQxWzBdLCBtYXggPSBhc3NpZ24kMVsxXSwgZm9ybWF0ID0gYXNzaWduJDFbMl0pO1xuICB9XG5cbiAgdmFyIG1pbkRhdGUgPSBwYXJzZURhdGUkMShtaW4sIGZvcm1hdCk7XG4gIHZhciBtYXhEYXRlID0gcGFyc2VEYXRlJDEobWF4LCBmb3JtYXQpO1xuICB2YXIgZGF0ZVZhbCA9IHBhcnNlRGF0ZSQxKHZhbHVlLCBmb3JtYXQpO1xuXG4gIGlmICghbWluRGF0ZSB8fCAhbWF4RGF0ZSB8fCAhZGF0ZVZhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbmNsdXNpdml0eSA9PT0gJygpJykge1xuICAgIHJldHVybiBpc0FmdGVyKGRhdGVWYWwsIG1pbkRhdGUpICYmIGlzQmVmb3JlKGRhdGVWYWwsIG1heERhdGUpO1xuICB9XG5cbiAgaWYgKGluY2x1c2l2aXR5ID09PSAnKF0nKSB7XG4gICAgcmV0dXJuIGlzQWZ0ZXIoZGF0ZVZhbCwgbWluRGF0ZSkgJiYgKGlzRXF1YWwkMShkYXRlVmFsLCBtYXhEYXRlKSB8fCBpc0JlZm9yZShkYXRlVmFsLCBtYXhEYXRlKSk7XG4gIH1cblxuICBpZiAoaW5jbHVzaXZpdHkgPT09ICdbKScpIHtcbiAgICByZXR1cm4gaXNCZWZvcmUoZGF0ZVZhbCwgbWF4RGF0ZSkgJiYgKGlzRXF1YWwkMShkYXRlVmFsLCBtaW5EYXRlKSB8fCBpc0FmdGVyKGRhdGVWYWwsIG1pbkRhdGUpKTtcbiAgfVxuXG4gIHJldHVybiBpc0VxdWFsJDEoZGF0ZVZhbCwgbWF4RGF0ZSkgfHwgaXNFcXVhbCQxKGRhdGVWYWwsIG1pbkRhdGUpIHx8XG4gICAgICAgIChpc0JlZm9yZShkYXRlVmFsLCBtYXhEYXRlKSAmJiBpc0FmdGVyKGRhdGVWYWwsIG1pbkRhdGUpKTtcbn07XG5cbnZhciBkYXRlX2Zvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBmb3JtYXQgPSByZWZbMF07XG5cbiAgcmV0dXJuICEhcGFyc2VEYXRlJDEodmFsdWUsIGZvcm1hdCk7XG59O1xuXG52YXIgdmFsaWRhdGUkNiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDYodmFsLCBbbGVuZ3RoXSk7IH0pO1xuICB9XG4gIHZhciBzdHJWYWwgPSBTdHJpbmcodmFsdWUpO1xuXG4gIHJldHVybiAvXlswLTldKiQvLnRlc3Qoc3RyVmFsKSAmJiBzdHJWYWwubGVuZ3RoID09PSBOdW1iZXIobGVuZ3RoKTtcbn07XG5cbnZhciB2YWxpZGF0ZUltYWdlID0gZnVuY3Rpb24gKGZpbGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoeyB2YWxpZDogZmFsc2UgfSk7IH07XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICB2YWxpZDogaW1hZ2Uud2lkdGggPT09IE51bWJlcih3aWR0aCkgJiYgaW1hZ2UuaGVpZ2h0ID09PSBOdW1iZXIoaGVpZ2h0KVxuICAgIH0pOyB9O1xuXG4gICAgaW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgfSk7XG59O1xuXG52YXIgZGltZW5zaW9ucyA9IGZ1bmN0aW9uIChmaWxlcywgcmVmKSB7XG4gIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgdmFyIGhlaWdodCA9IHJlZlsxXTtcblxuICB2YXIgbGlzdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gaWYgZmlsZSBpcyBub3QgYW4gaW1hZ2UsIHJlamVjdC5cbiAgICBpZiAoISAvXFwuKGpwZ3xzdmd8anBlZ3xwbmd8Ym1wfGdpZikkL2kudGVzdChmaWxlc1tpXS5uYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxpc3QucHVzaChmaWxlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwobGlzdC5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHZhbGlkYXRlSW1hZ2UoZmlsZSwgd2lkdGgsIGhlaWdodCk7IH0pKTtcbn07XG5cbnZhciBtZXJnZV8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50c1sxXTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqW2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudW53cmFwRXhwb3J0cyhtZXJnZV8xKTtcblxudmFyIGlzQnl0ZUxlbmd0aF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzQnl0ZUxlbmd0aDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzQnl0ZUxlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW4gPSB2b2lkIDA7XG4gIHZhciBtYXggPSB2b2lkIDA7XG4gIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBtaW4gPSBvcHRpb25zLm1pbiB8fCAwO1xuICAgIG1heCA9IG9wdGlvbnMubWF4O1xuICB9IGVsc2Uge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpc0J5dGVMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV07XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG4gIHZhciBsZW4gPSBlbmNvZGVVUkkoc3RyKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGlzQnl0ZUxlbmd0aF8xKTtcblxudmFyIGlzRlFETiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRkRRTjtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9mcWRuX29wdGlvbnMgPSB7XG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzRkRRTihzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2ZxZG5fb3B0aW9ucyk7XG5cbiAgLyogUmVtb3ZlIHRoZSBvcHRpb25hbCB0cmFpbGluZyBkb3QgYmVmb3JlIGNoZWNraW5nIHZhbGlkaXR5ICovXG4gIGlmIChvcHRpb25zLmFsbG93X3RyYWlsaW5nX2RvdCAmJiBzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnLicpIHtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgfVxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKTtcbiAgaWYgKG9wdGlvbnMucmVxdWlyZV90bGQpIHtcbiAgICB2YXIgdGxkID0gcGFydHMucG9wKCk7XG4gICAgaWYgKCFwYXJ0cy5sZW5ndGggfHwgIS9eKFthLXpcXHUwMGExLVxcdWZmZmZdezIsfXx4blthLXowLTktXXsyLH0pJC9pLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBkaXNhbGxvdyBzcGFjZXNcbiAgICBpZiAoL1tcXHNcXHUyMDAyLVxcdTIwMEJcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHVGRUZGXFx1REI0MFxcdURDMjBdLy50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yICh2YXIgcGFydCwgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICBpZiAob3B0aW9ucy5hbGxvd191bmRlcnNjb3Jlcykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvXy9nLCAnJyk7XG4gICAgfVxuICAgIGlmICghL15bYS16XFx1MDBhMS1cXHVmZmZmMC05LV0rJC9pLnRlc3QocGFydCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuICAgIGlmICgvW1xcdWZmMDEtXFx1ZmY1ZV0vLnRlc3QocGFydCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHBhcnRbMF0gPT09ICctJyB8fCBwYXJ0W3BhcnQubGVuZ3RoIC0gMV0gPT09ICctJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnVud3JhcEV4cG9ydHMoaXNGUUROKTtcblxudmFyIGlzRW1haWxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRW1haWw7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuXG5cbnZhciBfaXNCeXRlTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNCeXRlTGVuZ3RoXzEpO1xuXG5cblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0ZRRE4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9lbWFpbF9vcHRpb25zID0ge1xuICBhbGxvd19kaXNwbGF5X25hbWU6IGZhbHNlLFxuICByZXF1aXJlX2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3V0ZjhfbG9jYWxfcGFydDogdHJ1ZSxcbiAgcmVxdWlyZV90bGQ6IHRydWVcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBkaXNwbGF5TmFtZSA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXStbYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXCxcXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHNdKjwoLispPiQvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzRW1haWwoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9lbWFpbF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSB8fCBvcHRpb25zLmFsbG93X2Rpc3BsYXlfbmFtZSkge1xuICAgIHZhciBkaXNwbGF5X2VtYWlsID0gc3RyLm1hdGNoKGRpc3BsYXlOYW1lKTtcbiAgICBpZiAoZGlzcGxheV9lbWFpbCkge1xuICAgICAgc3RyID0gZGlzcGxheV9lbWFpbFsxXTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJ0AnKTtcbiAgdmFyIGRvbWFpbiA9IHBhcnRzLnBvcCgpO1xuICB2YXIgdXNlciA9IHBhcnRzLmpvaW4oJ0AnKTtcblxuICB2YXIgbG93ZXJfZG9tYWluID0gZG9tYWluLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChsb3dlcl9kb21haW4gPT09ICdnbWFpbC5jb20nIHx8IGxvd2VyX2RvbWFpbiA9PT0gJ2dvb2dsZW1haWwuY29tJykge1xuICAgIHVzZXIgPSB1c2VyLnJlcGxhY2UoL1xcLi9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKHVzZXIsIHsgbWF4OiA2NCB9KSB8fCAhKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKGRvbWFpbiwgeyBtYXg6IDI1NCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0ZRRE4yLmRlZmF1bHQpKGRvbWFpbiwgeyByZXF1aXJlX3RsZDogb3B0aW9ucy5yZXF1aXJlX3RsZCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1c2VyWzBdID09PSAnXCInKSB7XG4gICAgdXNlciA9IHVzZXIuc2xpY2UoMSwgdXNlci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBxdW90ZWRFbWFpbFVzZXJVdGY4LnRlc3QodXNlcikgOiBxdW90ZWRFbWFpbFVzZXIudGVzdCh1c2VyKTtcbiAgfVxuXG4gIHZhciBwYXR0ZXJuID0gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBlbWFpbFVzZXJVdGY4UGFydCA6IGVtYWlsVXNlclBhcnQ7XG5cbiAgdmFyIHVzZXJfcGFydHMgPSB1c2VyLnNwbGl0KCcuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcGF0dGVybi50ZXN0KHVzZXJfcGFydHNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNFbWFpbCA9IHVud3JhcEV4cG9ydHMoaXNFbWFpbF8xKTtcblxudmFyIHZhbGlkYXRlJDcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbCkpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBpc0VtYWlsKFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIGV4dCA9IGZ1bmN0aW9uIChmaWxlcywgZXh0ZW5zaW9ucykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKChcIi4oXCIgKyAoZXh0ZW5zaW9ucy5qb2luKCd8JykpICsgXCIpJFwiKSwgJ2knKTtcblxuICByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHJlZ2V4LnRlc3QoZmlsZS5uYW1lKTsgfSk7XG59O1xuXG52YXIgaW1hZ2UgPSBmdW5jdGlvbiAoZmlsZXMpIHsgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiAvXFwuKGpwZ3xzdmd8anBlZ3xwbmd8Ym1wfGdpZikkL2kudGVzdChmaWxlLm5hbWUpOyB9XG4pOyB9O1xuXG52YXIgdmFsaWRhdGUkOCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkOCh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gISEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG52YXIgaXNJUF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJUDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXB2NE1heWJlID0gL14oXFxkezEsM30pXFwuKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pJC87XG52YXIgaXB2NkJsb2NrID0gL15bMC05QS1GXXsxLDR9JC9pO1xuXG5mdW5jdGlvbiBpc0lQKHN0cikge1xuICB2YXIgdmVyc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbik7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lQKHN0ciwgNCkgfHwgaXNJUChzdHIsIDYpO1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc0Jykge1xuICAgIGlmICghaXB2NE1heWJlLnRlc3Qoc3RyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzWzNdIDw9IDI1NTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNicpIHtcbiAgICB2YXIgYmxvY2tzID0gc3RyLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGZvdW5kT21pc3Npb25CbG9jayA9IGZhbHNlOyAvLyBtYXJrZXIgdG8gaW5kaWNhdGUgOjpcblxuICAgIC8vIEF0IGxlYXN0IHNvbWUgT1MgYWNjZXB0IHRoZSBsYXN0IDMyIGJpdHMgb2YgYW4gSVB2NiBhZGRyZXNzXG4gICAgLy8gKGkuZS4gMiBvZiB0aGUgYmxvY2tzKSBpbiBJUHY0IG5vdGF0aW9uLCBhbmQgUkZDIDM0OTMgc2F5c1xuICAgIC8vIHRoYXQgJzo6ZmZmZjphLmIuYy5kJyBpcyB2YWxpZCBmb3IgSVB2NC1tYXBwZWQgSVB2NiBhZGRyZXNzZXMsXG4gICAgLy8gYW5kICc6OmEuYi5jLmQnIGlzIGRlcHJlY2F0ZWQsIGJ1dCBhbHNvIHZhbGlkLlxuICAgIHZhciBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPSBpc0lQKGJsb2Nrc1tibG9ja3MubGVuZ3RoIC0gMV0sIDQpO1xuICAgIHZhciBleHBlY3RlZE51bWJlck9mQmxvY2tzID0gZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID8gNyA6IDg7XG5cbiAgICBpZiAoYmxvY2tzLmxlbmd0aCA+IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gaW5pdGlhbCBvciBmaW5hbCA6OlxuICAgIGlmIChzdHIgPT09ICc6OicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cigwLCAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7ICsraSkge1xuICAgICAgLy8gdGVzdCBmb3IgYSA6OiB3aGljaCBjYW4gbm90IGJlIGF0IHRoZSBzdHJpbmcgc3RhcnQvZW5kXG4gICAgICAvLyBzaW5jZSB0aG9zZSBjYXNlcyBoYXZlIGJlZW4gaGFuZGxlZCBhYm92ZVxuICAgICAgaWYgKGJsb2Nrc1tpXSA9PT0gJycgJiYgaSA+IDAgJiYgaSA8IGJsb2Nrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG11bHRpcGxlIDo6IGluIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgJiYgaSA9PT0gYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gaXQgaGFzIGJlZW4gY2hlY2tlZCBiZWZvcmUgdGhhdCB0aGUgbGFzdFxuICAgICAgICAvLyBibG9jayBpcyBhIHZhbGlkIElQdjQgYWRkcmVzc1xuICAgICAgfSBlbHNlIGlmICghaXB2NkJsb2NrLnRlc3QoYmxvY2tzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID49IDE7XG4gICAgfVxuICAgIHJldHVybiBibG9ja3MubGVuZ3RoID09PSBleHBlY3RlZE51bWJlck9mQmxvY2tzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0lQID0gdW53cmFwRXhwb3J0cyhpc0lQXzEpO1xuXG52YXIgaXAgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW107XG4gIHZhciB2ZXJzaW9uID0gcmVmWzBdOyBpZiAoIHZlcnNpb24gPT09IHZvaWQgMCApIHZlcnNpb24gPSA0O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiBpc0lQKHZhbCwgdmVyc2lvbik7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGlzSVAodmFsdWUsIHZlcnNpb24pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gdmFsdWUgXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IFxuICovXG52YXIgY29tcGFyZSA9IGZ1bmN0aW9uICh2YWx1ZSwgbGVuZ3RoLCBtYXgpIHtcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgLy8gY2FzdCB0byBudW1iZXIuXG4gIG1heCA9IE51bWJlcihtYXgpO1xuXG4gIHJldHVybiB2YWx1ZS5sZW5ndGggPj0gbGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8PSBtYXg7XG59O1xuXG52YXIgbGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcbiAgdmFyIG1heCA9IHJlZlsxXTsgaWYgKCBtYXggPT09IHZvaWQgMCApIG1heCA9IHVuZGVmaW5lZDtcblxuICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgdmFsdWUgPSB0b0FycmF5KHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJlKHZhbHVlLCBsZW5ndGgsIG1heCk7XG59O1xuXG52YXIgaW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gL14tP1swLTldKyQvLnRlc3QoU3RyaW5nKHZhbCkpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAvXi0/WzAtOV0rJC8udGVzdChTdHJpbmcodmFsdWUpKTtcbn07XG5cbnZhciBtYXgkMSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbGVuZ3RoID49IDA7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGggPD0gbGVuZ3RoO1xufTtcblxudmFyIG1heF92YWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtYXggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPD0gbWF4O1xufTtcblxudmFyIG1pbWVzID0gZnVuY3Rpb24gKGZpbGVzLCBtaW1lcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCgobWltZXMuam9pbignfCcpLnJlcGxhY2UoJyonLCAnLisnKSkgKyBcIiRcIiksICdpJyk7XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiByZWdleC50ZXN0KGZpbGUudHlwZSk7IH0pO1xufTtcblxudmFyIG1pbiQxID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGggPj0gbGVuZ3RoO1xufTtcblxudmFyIG1pbl92YWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtaW4gPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPj0gbWluO1xufTtcblxudmFyIHZhbGlkYXRlJDkgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDkodmFsLCBvcHRpb25zKTsgfSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuICEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG52YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gL15bMC05XSskLy50ZXN0KFN0cmluZyh2YWwpKTsgfSk7XG4gIH1cblxuICByZXR1cm4gL15bMC05XSskLy50ZXN0KFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIHJlZ2V4ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIHJlZ2V4ID0gcmVmWzBdO1xuICB2YXIgZmxhZ3MgPSByZWYuc2xpY2UoMSk7XG5cbiAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIGZsYWdzKS50ZXN0KFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIHJlcXVpcmVkID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtdO1xuICB2YXIgaW52YWxpZGF0ZUZhbHNlID0gcmVmWzBdOyBpZiAoIGludmFsaWRhdGVGYWxzZSA9PT0gdm9pZCAwICkgaW52YWxpZGF0ZUZhbHNlID0gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuICEhIHZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIC8vIGluY2FzZSBhIGZpZWxkIGNvbnNpZGVycyBgZmFsc2VgIGFzIGFuIGVtcHR5IHZhbHVlIGxpa2UgY2hlY2tib3hlcy5cbiAgaWYgKHZhbHVlID09PSBmYWxzZSAmJiBpbnZhbGlkYXRlRmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhISBTdHJpbmcodmFsdWUpLnRyaW0oKS5sZW5ndGg7XG59O1xuXG52YXIgc2l6ZSA9IGZ1bmN0aW9uIChmaWxlcywgcmVmKSB7XG4gIHZhciBzaXplID0gcmVmWzBdO1xuXG4gIGlmIChpc05hTihzaXplKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBuU2l6ZSA9IE51bWJlcihzaXplKSAqIDEwMjQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZmlsZXNbaV0uc2l6ZSA+IG5TaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNVUkxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVVJMO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX2lzRlFETjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzRlFETik7XG5cblxuXG52YXIgX2lzSVAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0lQXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF91cmxfb3B0aW9ucyA9IHtcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJ10sXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICByZXF1aXJlX3Byb3RvY29sOiBmYWxzZSxcbiAgcmVxdWlyZV9ob3N0OiB0cnVlLFxuICByZXF1aXJlX3ZhbGlkX3Byb3RvY29sOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHM6IGZhbHNlXG59O1xuXG52YXIgd3JhcHBlZF9pcHY2ID0gL15cXFsoW15cXF1dKylcXF0oPzo6KFswLTldKykpPyQvO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcbiAgICBpZiAoaG9zdCA9PT0gbWF0Y2ggfHwgaXNSZWdFeHAobWF0Y2gpICYmIG1hdGNoLnRlc3QoaG9zdCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVVJMKHVybCwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkodXJsKTtcbiAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA+PSAyMDgzIHx8IC9bXFxzPD5dLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHVybC5pbmRleE9mKCdtYWlsdG86JykgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfdXJsX29wdGlvbnMpO1xuICB2YXIgcHJvdG9jb2wgPSB2b2lkIDAsXG4gICAgICBhdXRoID0gdm9pZCAwLFxuICAgICAgaG9zdCA9IHZvaWQgMCxcbiAgICAgIGhvc3RuYW1lID0gdm9pZCAwLFxuICAgICAgcG9ydCA9IHZvaWQgMCxcbiAgICAgIHBvcnRfc3RyID0gdm9pZCAwLFxuICAgICAgc3BsaXQgPSB2b2lkIDAsXG4gICAgICBpcHY2ID0gdm9pZCAwO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJz8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnOi8vJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgcHJvdG9jb2wgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChvcHRpb25zLnJlcXVpcmVfdmFsaWRfcHJvdG9jb2wgJiYgb3B0aW9ucy5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9wcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHMgJiYgdXJsLnN1YnN0cigwLCAyKSA9PT0gJy8vJykge1xuICAgIHNwbGl0WzBdID0gdXJsLnN1YnN0cigyKTtcbiAgfVxuICB1cmwgPSBzcGxpdC5qb2luKCc6Ly8nKTtcblxuICBpZiAodXJsID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcvJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgaWYgKHVybCA9PT0gJycgJiYgIW9wdGlvbnMucmVxdWlyZV9ob3N0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnQCcpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIGF1dGggPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChhdXRoLmluZGV4T2YoJzonKSA+PSAwICYmIGF1dGguc3BsaXQoJzonKS5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGhvc3RuYW1lID0gc3BsaXQuam9pbignQCcpO1xuXG4gIHBvcnRfc3RyID0gbnVsbDtcbiAgaXB2NiA9IG51bGw7XG4gIHZhciBpcHY2X21hdGNoID0gaG9zdG5hbWUubWF0Y2god3JhcHBlZF9pcHY2KTtcbiAgaWYgKGlwdjZfbWF0Y2gpIHtcbiAgICBob3N0ID0gJyc7XG4gICAgaXB2NiA9IGlwdjZfbWF0Y2hbMV07XG4gICAgcG9ydF9zdHIgPSBpcHY2X21hdGNoWzJdIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgc3BsaXQgPSBob3N0bmFtZS5zcGxpdCgnOicpO1xuICAgIGhvc3QgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChzcGxpdC5sZW5ndGgpIHtcbiAgICAgIHBvcnRfc3RyID0gc3BsaXQuam9pbignOicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3J0X3N0ciAhPT0gbnVsbCkge1xuICAgIHBvcnQgPSBwYXJzZUludChwb3J0X3N0ciwgMTApO1xuICAgIGlmICghL15bMC05XSskLy50ZXN0KHBvcnRfc3RyKSB8fCBwb3J0IDw9IDAgfHwgcG9ydCA+IDY1NTM1KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEoMCwgX2lzSVAyLmRlZmF1bHQpKGhvc3QpICYmICEoMCwgX2lzRlFETjIuZGVmYXVsdCkoaG9zdCwgb3B0aW9ucykgJiYgKCFpcHY2IHx8ICEoMCwgX2lzSVAyLmRlZmF1bHQpKGlwdjYsIDYpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvc3QgPSBob3N0IHx8IGlwdjY7XG5cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QgJiYgIWNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob3B0aW9ucy5ob3N0X2JsYWNrbGlzdCAmJiBjaGVja0hvc3QoaG9zdCwgb3B0aW9ucy5ob3N0X2JsYWNrbGlzdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc1VSTCA9IHVud3JhcEV4cG9ydHMoaXNVUkxfMSk7XG5cbnZhciB1cmwgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW107XG4gIHZhciByZXF1aXJlUHJvdG9jb2wgPSByZWZbMF07IGlmICggcmVxdWlyZVByb3RvY29sID09PSB2b2lkIDAgKSByZXF1aXJlUHJvdG9jb2wgPSBmYWxzZTtcblxuICB2YXIgb3B0aW9ucyA9IHsgcmVxdWlyZV9wcm90b2NvbDogISFyZXF1aXJlUHJvdG9jb2wsIGFsbG93X3VuZGVyc2NvcmVzOiB0cnVlIH07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiBpc1VSTCh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBpc1VSTCh2YWx1ZSwgb3B0aW9ucyk7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbnZhciBSdWxlcyA9IHtcbiAgYWZ0ZXI6IGFmdGVyLFxuICBhbHBoYV9kYXNoOiB2YWxpZGF0ZSQxLFxuICBhbHBoYV9udW06IHZhbGlkYXRlJDIsXG4gIGFscGhhX3NwYWNlczogdmFsaWRhdGUkMyxcbiAgYWxwaGE6IHZhbGlkYXRlLFxuICBiZWZvcmU6IGJlZm9yZSxcbiAgYmV0d2VlbjogdmFsaWRhdGUkNCxcbiAgY29uZmlybWVkOiBjb25maXJtZWQsXG4gIGNyZWRpdF9jYXJkOiBjcmVkaXRfY2FyZCxcbiAgZGF0ZV9iZXR3ZWVuOiBkYXRlX2JldHdlZW4sXG4gIGRhdGVfZm9ybWF0OiBkYXRlX2Zvcm1hdCxcbiAgZGVjaW1hbDogdmFsaWRhdGUkNSxcbiAgZGlnaXRzOiB2YWxpZGF0ZSQ2LFxuICBkaW1lbnNpb25zOiBkaW1lbnNpb25zLFxuICBlbWFpbDogdmFsaWRhdGUkNyxcbiAgZXh0OiBleHQsXG4gIGltYWdlOiBpbWFnZSxcbiAgaW46IHZhbGlkYXRlJDgsXG4gIGludGVnZXI6IGludGVnZXIsXG4gIGxlbmd0aDogbGVuZ3RoLFxuICBpcDogaXAsXG4gIG1heDogbWF4JDEsXG4gIG1heF92YWx1ZTogbWF4X3ZhbHVlLFxuICBtaW1lczogbWltZXMsXG4gIG1pbjogbWluJDEsXG4gIG1pbl92YWx1ZTogbWluX3ZhbHVlLFxuICBub3RfaW46IHZhbGlkYXRlJDksXG4gIG51bWVyaWM6IG51bWVyaWMsXG4gIHJlZ2V4OiByZWdleCxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICBzaXplOiBzaXplLFxuICB1cmw6IHVybFxufTtcblxuLy8gXG5cbnZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgICAgaWYgKH5jdXJyLmluZGV4T2YoJy4nKSkge1xuICAgICAgICBwcmV2W2N1cnIuc3BsaXQoJy4nKVsxXV0gPSBjdXJyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldltjdXJyXSA9IGN1cnI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59O1xuXG4vKipcbiAqIE1hcHMgZmllbGRzIHRvIGNvbXB1dGVkIGZ1bmN0aW9ucy5cbiAqL1xudmFyIG1hcEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemUoZmllbGRzKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgIHZhciBmaWVsZCA9IG5vcm1hbGl6ZWRbY3Vycl07XG4gICAgcHJldltjdXJyXSA9IGZ1bmN0aW9uIG1hcHBlZEZpZWxkICgpIHtcbiAgICAgIC8vIGlmIGZpZWxkIGV4aXN0c1xuICAgICAgaWYgKHRoaXMuJHZhbGlkYXRvci5mbGFnc1tmaWVsZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5mbGFnc1tmaWVsZF07XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0IGhhcyBhIHNjb3BlIGRlZmluZWRcbiAgICAgIHZhciBpbmRleCA9IGZpZWxkLmluZGV4T2YoJy4nKTtcbiAgICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgc2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgbmFtZSA9IHJlZi5zbGljZSgxKTtcbiAgICAgIHNjb3BlID0gdGhpcy4kdmFsaWRhdG9yLmZsYWdzWyhcIiRcIiArIHNjb3BlKV07XG4gICAgICBuYW1lID0gbmFtZS5qb2luKCcuJyk7XG5cbiAgICAgIGlmIChzY29wZSAmJiBzY29wZVtuYW1lXSkge1xuICAgICAgICByZXR1cm4gc2NvcGVbbmFtZV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIHt9KTtcbn07XG5cbnZhciB2ZXJzaW9uID0gJzIuMC4wLXJjLjIxJztcblxudmFyIHJ1bGVzUGx1Z2luID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgVmFsaWRhdG9yJCQxID0gcmVmLlZhbGlkYXRvcjtcblxuICBPYmplY3Qua2V5cyhSdWxlcykuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIFZhbGlkYXRvciQkMS5leHRlbmQocnVsZSwgUnVsZXNbcnVsZV0pO1xuICB9KTtcblxuICAvLyBNZXJnZSB0aGUgZW5nbGlzaCBtZXNzYWdlcy5cbiAgVmFsaWRhdG9yJCQxLmxvY2FsaXplKCdlbicsIGxvY2FsZSk7XG59O1xuXG51c2UocnVsZXNQbHVnaW4pO1xuXG52YXIgaW5kZXhfZXNtID0ge1xuICBpbnN0YWxsOiBpbnN0YWxsLFxuICB1c2U6IHVzZSxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gIG1peGluOiBtaXhpbixcbiAgbWFwRmllbGRzOiBtYXBGaWVsZHMsXG4gIFZhbGlkYXRvcjogVmFsaWRhdG9yLFxuICBFcnJvckJhZzogRXJyb3JCYWcsXG4gIFJ1bGVzOiBSdWxlcyxcbiAgdmVyc2lvbjogdmVyc2lvblxufTtcblxuZXhwb3J0IHsgaW5zdGFsbCwgdXNlLCBkaXJlY3RpdmUsIG1peGluLCBtYXBGaWVsZHMsIFZhbGlkYXRvciwgRXJyb3JCYWcsIFJ1bGVzLCB2ZXJzaW9uIH07XG5leHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTI2YmE1MTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Gb3Jtcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQwZWUxYTk3XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hMjZiYTUxNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Zvcm1zLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTI2YmE1MTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Gb3Jtcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hMjZiYTUxNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3JlcXVlc3RzL2Nsb3NlZC1saXN0L3ByZXNzL2luc2VydC9Gb3Jtcy52dWVcbi8vIG1vZHVsZSBpZCA9IDgxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDE0Il0sInNvdXJjZVJvb3QiOiIifQ==