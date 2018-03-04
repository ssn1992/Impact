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
/******/ 	return __webpack_require__(__webpack_require__.s = 1171);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1091)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(686),
  /* template */
  __webpack_require__(1041),
  /* scopeId */
  "data-v-313b6e36",
  /* cssModules */
  null
)
Component.options.__file = "/Users/sergionogueira/impact/resources/assets/js/components/tables/requests/fairs/activate/Tables.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tables.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-313b6e36", Component.options)
  } else {
    hotAPI.reload("data-v-313b6e36", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "modal inmodal fade",
    staticStyle: {
      "z-index": "209999950!important"
    },
    attrs: {
      "id": _vm.tableId + "modal",
      "tabindex": "-1",
      "role": "dialog",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-md"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.errorMessage))]), _c('br')]), _vm._v(" "), _vm._m(1)])])]), _vm._v(" "), (_vm.isLoading) ? _c('div', {
    attrs: {
      "id": "isLoading"
    }
  }, [_vm._m(2)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ibox float-e-margins "
  }, [_c('div', {
    staticClass: "ibox-title"
  }, [(!_vm.errorMessage) ? _c('h5', [_vm._v(" " + _vm._s(_vm.tableName))]) : _c('h5', {
    staticClass: "text-danger"
  }, [_vm._v(" " + _vm._s(_vm.tableName))]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c('div', {
    staticClass: "ibox-content",
    attrs: {
      "id": "table_wrapper"
    }
  }, [(_vm.data) ? _c('table', {
    staticClass: "mdl-data-table display nowrap mdl-typography--text-center",
    attrs: {
      "id": _vm.tableId,
      "cellspacing": "0",
      "width": "100%"
    }
  }, [_c('thead', [_c('tr', [_vm._l((_vm.columns), function(column) {
    return _c('th', [_vm._v("\n                            " + _vm._s(column) + "\n                        ")])
  }), _vm._v(" "), _c('th', [_vm._v("\n                            Actions\n                        ")])], 2)]), _vm._v(" "), (_vm.data) ? _c('tbody', _vm._l((_vm.data), function(value, index) {
    return _c('tr', [_vm._l((_vm.data[index]), function(value) {
      return _c('td', [_vm._v(" " + _vm._s(value) + " ")])
    }), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          _vm.editLead(_vm.data[index].id)
        }
      }
    }, [_c('i', {
      staticClass: "material-icons",
      staticStyle: {
        "color": "#2fbab7"
      }
    }, [_vm._v("")])])])], 2)
  })) : _vm._e(), _vm._v(" "), _c('tfoot', [_c('tr', [_vm._l((_vm.columns), function(column) {
    return _c('th', [_vm._v("\n                            " + _vm._s(column) + "\n                        ")])
  }), _vm._v(" "), _c('th', [_vm._v("\n                            Actions\n                        ")])], 2)])]) : _c('table', {
    staticClass: "mdl-data-table display nowrap",
    staticStyle: {
      "min-height": "127px"
    },
    attrs: {
      "id": _vm.tableId,
      "cellspacing": "0",
      "width": "100%"
    }
  }, [_vm._m(4), _vm._v(" "), _c('tbody')])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
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
  }, [_vm._v("Please try again later")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "vue-simple-spinner"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ibox-tools"
  }, [_c('a', {
    staticClass: "collapse-link"
  }, [_c('i', {
    staticClass: "fa fa-chevron-up"
  })]), _vm._v(" "), _c('a', {
    staticClass: "close-link"
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th')])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-313b6e36", module.exports)
  }
}

/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(816);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("9ffe77fa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-313b6e36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tables.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-313b6e36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tables.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(593);


/***/ }),

/***/ 146:
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
 * Request
 * @type String
 * @private
 */
var _request;

/**
 * Steps
 * @type Object
 * @private
 */
var _steps = {};

// *****************************
// ***** Private functions *****
// *****************************
/**
 *  Tour Component
 *
 *  Create a Tour component
 *
 */
var _tourComponent = function _tourComponent() {
    for (var key in _request.data) {
        _steps[key] = {
            element: '#' + _request.data[key].element,
            title: _request.data[key].title,
            content: _request.data[key].content,
            placement: _request.data[key].placement,
            backdrop: true,
            backdropContainer: '#wrapper',
            onShown: function onShown(tour) {
                $('body').addClass('tour-open');
            },
            onHidden: function onHidden(tour) {
                $('body').removeClass('tour-close');
            }
        };
    }

    // Instance the tour
    var tour = new Tour({
        name: _request.tourName,
        steps: _steps,
        onEnd: function onEnd(tour) {
            localStorage.setItem(_request.tourName + '- tour_ended', 1);
        }
    });

    // Initialize the tour
    tour.init();
    tour.restart();
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
        console.log("Tour Component started..");

        // Init tour component
        _tourComponent();
    }
};

/***/ }),

/***/ 3:
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

/***/ 593:
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
var _requestTable = ["fairs-active-table"];

/**
 * Form Component instance
 */
var _tableComponent = __webpack_require__(736);

/**
 * Tour Component instance
 */
var tourComponent = __webpack_require__(146);

/**
 * Request Tour
 *
 * @type {[object]}
 *
 * tourName  : tourName
 *
 * [
 * element   : div id
 * title     : title
 * content   : content
 * placement : placement
 * ]
 *
 * @private
 */
var _requestTour = {
  tourName: 'tour-tradeshow-create',

  data: [{
    element: "forms",
    title: "Forms",
    content: "Select the tradeshow, fill and confirm all the data for Impact connect with SalesForce and add your new contact",
    placement: "top"
  }]
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
    console.log("Fairs Active Area started..");

    // Form component init
    _tableComponent.start(_requestTable);

    /**
     *
     // If Tour not completed start component
    if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {
        // Tour component init
        tourComponent.start(_requestTour);
    }
     */
  }
};

self.start();

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

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            isLoading: true,
            tableName: null,
            tableId: null,
            columns: null,
            data: null,
            errorMessage: null
        };
    },


    methods: {
        // Update Data instance
        updateData: function updateData() {
            var isUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var response = arguments[1];


            this.errorMessage = null;
            // If Table instance is already created destroy previous
            if (isUpdate) {
                window[this.tableId].destroy();
            }

            //Update Data
            this.tableId = response.tableId;
            this.tableName = response.tableName, this.data = response.data, this.columns = response.columns, this.$nextTick(function () {
                // Create Table Instance
                this.createTable(this.tableId, false, isUpdate);
            });
        },


        // Update Data instance if an error occurred
        updateDataWithError: function updateDataWithError() {
            var isUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var response = arguments[1];
            var error = arguments[2];

            // If Table instance is already created destroy previous
            if (isUpdate) {
                // Create Table Instance
                window[this.tableId].destroy();
            }

            // Set Error message
            if (error != undefined) {
                this.errorMessage = error.statusText;
            } else {
                this.errorMessage = 'Error';
            }

            // Update data
            this.tableId = response;
            this.tableName = 'Table - ' + this.errorMessage;
            this.data = null;
            this.columns = null, this.$nextTick(function () {
                // Create Table Instance
                this.createTable(this.tableId, true);
            });
        },


        // Create Table instance
        createTable: function createTable(instanceName) {
            var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var excelExportFlag = false;
            if (window.Grants.roles === 'Admin' || window.Grants.roles === 'Accounter' || window.Grants.roles === 'WebPR') {
                excelExportFlag = true;
            }
            /**
             * Create Data Table function
             *
             * @param instanceName
             */
            var self = this;

            if (excelExportFlag) {
                window[instanceName] = $('#' + instanceName).DataTable({
                    dom: 'Bfrtip',
                    sScrollX: "100%",
                    stateSave: true,
                    colReorder: true,
                    order: [[0, 'desc']],
                    lengthMenu: [[10, 25, 50, -1], ['10 rows', '25 rows', '50 rows', 'Show all']],
                    columnDefs: [{
                        targets: [0], //Comma separated values
                        visible: false,
                        searchable: false
                    }],
                    buttons: [{
                        extend: 'pageLength',
                        titleAttr: 'Page Lenght'
                    }, { extend: 'excelHtml5', text: '<i class="icon-excel"></i>', exportOptions: { columns: ':visible' } },
                    //{extend: 'pdfHtml5', text: '<i class="material-icons">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},
                    //{extend: 'print', text: '<i class="material-icons">print</i>', exportOptions: {columns: ':visible'}},
                    { extend: 'colvis', text: '<i class="material-icons">visibility</i>', postfixButtons: ['colvisRestore'] }, { text: '<i class="material-icons">settings_backup_restore</i>', action: function action() {
                            window[instanceName].colReorder.reset();
                        } }],
                    oLanguage: {
                        oPaginate: {
                            "sNext": '<i class="material-icons">chevron_right</i>',
                            "sPrevious": '<i class="material-icons">chevron_left</i>'
                        }
                    },
                    initComplete: function initComplete() {
                        // Stop Loader
                        self.isLoading = false;

                        if (error) {
                            // Show error modal
                            $('#' + instanceName + 'modal').modal('show');
                        }
                    }
                });

                window[instanceName].column('0:visible').order('desc').draw();
            } else {
                window[instanceName] = $('#' + instanceName).DataTable({
                    dom: 'Bfrtip',
                    sScrollX: "100%",
                    stateSave: true,
                    colReorder: true,
                    order: [[0, 'desc']],
                    lengthMenu: [[10, 25, 50, -1], ['10 rows', '25 rows', '50 rows', 'Show all']],
                    buttons: [
                    //{extend: 'pdfHtml5', text: '<i class="material-icons">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},
                    //{extend: 'print', text: '<i class="material-icons">print</i>', exportOptions: {columns: ':visible'}},
                    {
                        extend: 'colvis',
                        text: '<i class="material-icons">visibility</i>',
                        postfixButtons: ['colvisRestore']
                    }, {
                        text: '<i class="material-icons">settings_backup_restore</i>', action: function action() {
                            window[instanceName].colReorder.reset();
                        }
                    }],
                    oLanguage: {
                        oPaginate: {
                            "sNext": '<i class="material-icons">chevron_right</i>',
                            "sPrevious": '<i class="material-icons">chevron_left</i>'
                        }
                    },
                    initComplete: function initComplete() {
                        // Stop Loader
                        self.isLoading = false;

                        if (error) {
                            // Show error modal
                            $('#' + instanceName + 'modal').modal('show');
                        }
                    }
                });

                window[instanceName].column('0:visible').order('desc').draw();
            }
        },


        // Edit Lead
        editLead: function editLead(id) {
            window.location.href = window.location.pathname + '/edit/' + id;
        }
    }
});

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

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tables_vue__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tables_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Tables_vue__);
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
 * Tables instance
 */


// *****************************
// ***** Private functions *****
// *****************************
/**
 * Payload Default
 *
 * @param dateFrom
 * @type object
 *
 * @param dateTo
 * @type object
 *
 * @param brand
 * @type string
 *
 * @return Object
 */
var _payloadMount = function _payloadMount() {
    var dateFrom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.moment();
    var dateTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.moment();
    var brand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var payload = {};
    payload.dateFrom = dateFrom.format("YYYY-MM-DD 00:00:00");
    payload.dateTo = dateTo.format("YYYY-MM-DD 23:59:59");
    payload.brand = brand;

    return payload;
};

/**
 *
 * _tableUpdate
 * Bind Request filter
 *
 * @param instance
 * @private
 */
var _tableUpdate = function _tableUpdate(instance, request) {
    $('#date-search-request').on('click', function () {
        // Filter by date and brand
        var brand = window.searchInstance.syncedVal.value;
        var dateFrom = window.moment(window.searchInstance.startTime.time);
        var dateTo = window.moment(window.searchInstance.endtime.time);
        var todayDate = window.moment(todayDate);

        // If Date Range is valid do a request otherwise throw a exception
        if (window.moment(todayDate) >= window.moment(dateFrom) && window.moment(todayDate) >= window.moment(dateTo) && window.moment(dateTo) >= window.moment(dateFrom)) {

            // Show Loader
            instance.isLoading = true;

            // Request Data
            _tablesRequest(request, true, instance, _payloadMount(dateFrom, dateTo, brand));
        }
    });
};

/**
 *
 * _tablesRequest
 *
 * Tables Component Component POST
 *
 * @param isUpdate
 * @param instance
 * @param payload
 * @private
 */
var _tablesRequest = function _tablesRequest(_request) {
    var isUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var instance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var payload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    // If as filter update request
    if (window.searchInstance.filter.value) _request = _request + '-' + window.searchInstance.filter.request;

    // Send a POST request
    axios({
        method: 'post',
        url: 'tables/' + _request,
        data: payload
    }).then(function (response) {
        // Update Instance Data
        instance.updateData(isUpdate, response.data.table);
    }).catch(function (error) {
        // Update Instance Data with error
        instance.updateDataWithError(isUpdate, _request, error.response);
    });
};

/**
 *
 * Create a Table component
 *
 * @param response
 * @return {{columns, data, tableName: (*|null)}}
 * @private
 */
var _table = function _table() {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {
        new Vue({
            el: '#' + _request[i],
            mixins: [__WEBPACK_IMPORTED_MODULE_0__Tables_vue___default.a],

            beforeCreate: function beforeCreate() {
                // After mounted request data
                _tablesRequest(_request[i], false, this, _payloadMount());

                // After mounted bind filter
                _tableUpdate(this, _request[i]);
            }
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
        console.log("Table Component started..");

        // Init search component
        _table();
    }
};

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
exports.push([module.i, "\n#table_wrapper[data-v-313b6e36] {\n    min-height: 361px;\n}\ntd[data-v-313b6e36] {\n    text-overflow: ellipsis!important;\n    width: 5px!important;\n    white-space: nowrap!important;\n    overflow: hidden!important;\n}\n", "", {"version":3,"sources":["Tables.vue?53150f1d"],"names":[],"mappings":";AACA;IACA,kBAAA;CACA;AAEA;IACA,kCAAA;IACA,qBAAA;IACA,8BAAA;IACA,2BAAA;CACA","file":"Tables.vue","sourcesContent":["<style scoped>\n    #table_wrapper {\n        min-height: 361px;\n    }\n\n    td {\n        text-overflow: ellipsis!important;\n        width: 5px!important;\n        white-space: nowrap!important;\n        overflow: hidden!important;\n    }\n</style>\n\n<template>\n    <div>\n        <!-- Error Modal -->\n        <div class=\"modal inmodal fade\" v-bind:id='tableId + \"modal\"' tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" style=\"z-index: 209999950!important;\">\n            <div class=\"modal-dialog modal-md\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">Please try again later</h4>\n                    </div>\n                    <div class=\"modal-body\" style=\"text-align: center; display: block;\">\n                        <i class=\"fa fa-warning fa-5x text-danger\" style=\"display: block;\"></i>\n                        <small class=\"font-bold text-danger\"> {{ errorMessage }}</small><br>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Loader -->\n        <div id=\"isLoading\" v-if=\"isLoading\">\n            <div>\n                <div class=\"vue-simple-spinner\"></div>\n            </div>\n        </div>\n\n        <div  class=\"ibox float-e-margins \">\n            <div class=\"ibox-title\">\n                <h5 v-if=\"!errorMessage\"> {{ tableName }}</h5>\n                <h5 v-else class=\"text-danger\"> {{ tableName }}</h5>\n\n                <div class=\"ibox-tools\">\n                    <a class=\"collapse-link\">\n                        <i class=\"fa fa-chevron-up\"></i>\n                    </a>\n                    <a class=\"close-link\">\n                        <i class=\"fa fa-times\"></i>\n                    </a>\n                </div>\n            </div>\n\n            <div id=\"table_wrapper\" class=\"ibox-content\">\n                <table v-if=\"data\" v-bind:id='tableId' class=\"mdl-data-table display nowrap mdl-typography--text-center\" cellspacing=\"0\" width=\"100%\">\n                    <thead>\n                        <tr>\n                            <th v-for=\"column in columns\">\n                                {{ column }}\n                            </th>\n                            <th>\n                                Actions\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody v-if=\"data\">\n                        <tr v-for=\"(value, index) in data\">\n                            <td v-for=\"value in data[index]\"> {{ value }} </td>\n\n                            <td><a @click=\"editLead(data[index].id)\"> <i style=\"color: #2fbab7;\" class=\"material-icons\">&#xE22B;</i> </a></td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <th v-for=\"column in columns\">\n                                {{ column }}\n                            </th>\n\n                            <th>\n                                Actions\n                            </th>\n                        </tr>\n                    </tfoot>\n                </table>\n\n                <table v-else v-bind:id='tableId' class=\"mdl-data-table display nowrap\" cellspacing=\"0\" width=\"100%\" style=\"min-height:127px;\">\n                    <thead>\n                    <tr><th></th></tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    data () {\n        return {\n            isLoading: true,\n            tableName: null,\n            tableId: null,\n            columns: null,\n            data: null,\n            errorMessage: null,\n        }\n    },\n\n    methods: {\n        // Update Data instance\n        updateData(isUpdate = false, response) {\n\n            this.errorMessage = null;\n            // If Table instance is already created destroy previous\n            if (isUpdate) {\n                window[this.tableId].destroy();\n            }\n\n            //Update Data\n            this.tableId   = response.tableId\n            this.tableName = response.tableName,\n            this.data      = response.data,\n            this.columns   = response.columns,\n\n            this.$nextTick(function () {\n                // Create Table Instance\n                this.createTable(this.tableId, false, isUpdate);\n            })\n        },\n\n        // Update Data instance if an error occurred\n        updateDataWithError(isUpdate = false, response, error) {\n            // If Table instance is already created destroy previous\n            if (isUpdate) {\n                // Create Table Instance\n                window[this.tableId].destroy();\n            }\n\n            // Set Error message\n            if (error != undefined) {\n                this.errorMessage = error.statusText;\n            } else {\n                this.errorMessage = 'Error';\n            }\n\n            // Update data\n            this.tableId   = response\n            this.tableName = 'Table - ' + this.errorMessage;\n            this.data      = null\n            this.columns   = null,\n\n            this.$nextTick(function () {\n                // Create Table Instance\n                this.createTable(this.tableId, true);\n            })\n        },\n\n        // Create Table instance\n        createTable(instanceName, error = false, isUpdate = false) {\n            let excelExportFlag = false;\n            if (window.Grants.roles === 'Admin' ||\n                window.Grants.roles === 'Accounter' ||\n                window.Grants.roles === 'WebPR') {\n                excelExportFlag = true;\n            }\n            /**\n             * Create Data Table function\n             *\n             * @param instanceName\n             */\n            var self = this;\n\n            if (excelExportFlag) {\n                window[instanceName] = $('#' + instanceName).DataTable({\n                    dom: 'Bfrtip',\n                    sScrollX: \"100%\",\n                    stateSave: true,\n                    colReorder: true,\n                    order: [[ 0, 'desc' ]],\n                    lengthMenu: [\n                        [ 10, 25, 50, -1 ],\n                        [ '10 rows', '25 rows', '50 rows', 'Show all' ]\n                    ],\n                    columnDefs: [{\n                        targets: [0], //Comma separated values\n                        visible: false,\n                        searchable: false\n                    }],\n                    buttons: [\n                        {\n                            extend:    'pageLength',\n                            titleAttr: 'Page Lenght'\n                        },\n                        {extend: 'excelHtml5', text: '<i class=\"icon-excel\"></i>', exportOptions: {columns: ':visible'}},\n                        //{extend: 'pdfHtml5', text: '<i class=\"material-icons\">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},\n                        //{extend: 'print', text: '<i class=\"material-icons\">print</i>', exportOptions: {columns: ':visible'}},\n                        {extend: 'colvis', text: '<i class=\"material-icons\">visibility</i>', postfixButtons: ['colvisRestore']},\n                        {text: '<i class=\"material-icons\">settings_backup_restore</i>', action : function () { window[instanceName].colReorder.reset(); },}\n                    ],\n                    oLanguage: {\n                        oPaginate:\n                            {\n                                \"sNext\": '<i class=\"material-icons\">chevron_right</i>',\n                                \"sPrevious\": '<i class=\"material-icons\">chevron_left</i>'\n                            }\n                    },\n                    initComplete: function () {\n                        // Stop Loader\n                        self.isLoading = false;\n\n                        if (error) {\n                            // Show error modal\n                            $('#' + instanceName+ 'modal').modal('show');\n                        }\n                    },\n                });\n\n                window[instanceName]\n                    .column( '0:visible' )\n                    .order( 'desc' )\n                    .draw();\n\n            } else {\n                window[instanceName] = $('#' + instanceName).DataTable({\n                    dom: 'Bfrtip',\n                    sScrollX: \"100%\",\n                    stateSave: true,\n                    colReorder: true,\n                    order: [[ 0, 'desc' ]],\n                    lengthMenu: [\n                        [ 10, 25, 50, -1 ],\n                        [ '10 rows', '25 rows', '50 rows', 'Show all' ]\n                    ],\n                    buttons: [\n                        //{extend: 'pdfHtml5', text: '<i class=\"material-icons\">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},\n                        //{extend: 'print', text: '<i class=\"material-icons\">print</i>', exportOptions: {columns: ':visible'}},\n                        {\n                            extend: 'colvis',\n                            text: '<i class=\"material-icons\">visibility</i>',\n                            postfixButtons: ['colvisRestore']\n                        },\n                        {\n                            text: '<i class=\"material-icons\">settings_backup_restore</i>', action: function () {\n                            window[instanceName].colReorder.reset();\n                        },\n                        }\n                    ],\n                    oLanguage: {\n                        oPaginate:\n                            {\n                                \"sNext\": '<i class=\"material-icons\">chevron_right</i>',\n                                \"sPrevious\": '<i class=\"material-icons\">chevron_left</i>'\n                            }\n                    },\n                    initComplete: function () {\n                        // Stop Loader\n                        self.isLoading = false;\n\n                        if (error) {\n                            // Show error modal\n                            $('#' + instanceName + 'modal').modal('show');\n                        }\n                    },\n                });\n\n                window[instanceName]\n                    .column( '0:visible' )\n                    .order( 'desc' )\n                    .draw();\n            }\n        },\n\n        // Edit Lead\n        editLead: function(id) {\n            window.location.href = window.location.pathname + '/edit/' + id\n        },\n    },\n}\n</script>"]}]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWI0MDUyZjE5ZmZiZWQyMTcwYjk/NzMyMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90YWJsZXMvcmVxdWVzdHMvZmFpcnMvYWN0aXZhdGUvVGFibGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL1RhYmxlcy52dWU/YThiNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL1RhYmxlcy52dWU/ZmEyYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdG91ci90b3VyLmpzPzIxNWUqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZhaXJzL2FjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcz82YjJiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL1RhYmxlcy52dWU/MTk4NyoqIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzP2U2YWMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL1RhYmxlcy52dWU/ZDBiNyJdLCJuYW1lcyI6WyJzZWxmIiwiX2lzSW5pdCIsIl9yZXF1ZXN0IiwiX3N0ZXBzIiwiX3RvdXJDb21wb25lbnQiLCJrZXkiLCJkYXRhIiwiZWxlbWVudCIsInRpdGxlIiwiY29udGVudCIsInBsYWNlbWVudCIsImJhY2tkcm9wIiwiYmFja2Ryb3BDb250YWluZXIiLCJvblNob3duIiwidG91ciIsIiQiLCJhZGRDbGFzcyIsIm9uSGlkZGVuIiwicmVtb3ZlQ2xhc3MiLCJUb3VyIiwibmFtZSIsInRvdXJOYW1lIiwic3RlcHMiLCJvbkVuZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpbml0IiwicmVzdGFydCIsInN0YXJ0IiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJfcmVxdWVzdFRhYmxlIiwiX3RhYmxlQ29tcG9uZW50IiwicmVxdWlyZSIsInRvdXJDb21wb25lbnQiLCJfcmVxdWVzdFRvdXIiLCJfcGF5bG9hZE1vdW50IiwiZGF0ZUZyb20iLCJ3aW5kb3ciLCJtb21lbnQiLCJkYXRlVG8iLCJicmFuZCIsInBheWxvYWQiLCJmb3JtYXQiLCJfdGFibGVVcGRhdGUiLCJpbnN0YW5jZSIsIm9uIiwic2VhcmNoSW5zdGFuY2UiLCJzeW5jZWRWYWwiLCJ2YWx1ZSIsInN0YXJ0VGltZSIsInRpbWUiLCJlbmR0aW1lIiwidG9kYXlEYXRlIiwiaXNMb2FkaW5nIiwiX3RhYmxlc1JlcXVlc3QiLCJpc1VwZGF0ZSIsImZpbHRlciIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwidXBkYXRlRGF0YSIsInRhYmxlIiwiY2F0Y2giLCJlcnJvciIsInVwZGF0ZURhdGFXaXRoRXJyb3IiLCJfdGFibGUiLCJpIiwibGVuIiwibGVuZ3RoIiwiVnVlIiwiZWwiLCJtaXhpbnMiLCJiZWZvcmVDcmVhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUMvREE7QUFDQSx3QkFBK0w7O0FBRS9MO0FBQ0E7QUFDQSx5QkFBcUo7QUFDcko7QUFDQSwwQkFBcUg7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxhQUFhLGFBQWEsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RJQTs7QUFFQTtBQUNBLHFDQUE2TztBQUM3TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0tBQXdLLG9F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QixvQkFBb0IsRUFBRSx3SkFBd0osZUFBZSxXQUFXLDJEQUEyRCx3RkFBd0YsUUFBUSxJQUFJLGNBQWMsRyIsImZpbGUiOiIvanMvZmFpcnMvYWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTE3MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWI0MDUyZjE5ZmZiZWQyMTcwYjkiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNiNmUzNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFibGVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzEzYjZlMzZcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGFibGVzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0zMTNiNmUzNlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3Nlcmdpb25vZ3VlaXJhL2ltcGFjdC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL1RhYmxlcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUYWJsZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMxM2I2ZTM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzEzYjZlMzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RhYmxlcy9yZXF1ZXN0cy9mYWlycy9hY3RpdmF0ZS9UYWJsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gNDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGlubW9kYWwgZmFkZVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInotaW5kZXhcIjogXCIyMDk5OTk5NTAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS50YWJsZUlkICsgXCJtb2RhbFwiLFxuICAgICAgXCJ0YWJpbmRleFwiOiBcIi0xXCIsXG4gICAgICBcInJvbGVcIjogXCJkaWFsb2dcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1tZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtd2FybmluZyBmYS01eCB0ZXh0LWRhbmdlclwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NtYWxsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkpXSksIF9jKCdicicpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5pc0xvYWRpbmcpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImlzTG9hZGluZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl9tKDIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpYm94IGZsb2F0LWUtbWFyZ2lucyBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpYm94LXRpdGxlXCJcbiAgfSwgWyghX3ZtLmVycm9yTWVzc2FnZSkgPyBfYygnaDUnLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS50YWJsZU5hbWUpKV0pIDogX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0udGFibGVOYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDMpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWJveC1jb250ZW50XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0YWJsZV93cmFwcGVyXCJcbiAgICB9XG4gIH0sIFsoX3ZtLmRhdGEpID8gX2MoJ3RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1kYXRhLXRhYmxlIGRpc3BsYXkgbm93cmFwIG1kbC10eXBvZ3JhcGh5LS10ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS50YWJsZUlkLFxuICAgICAgXCJjZWxsc3BhY2luZ1wiOiBcIjBcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygndGhlYWQnLCBbX2MoJ3RyJywgW192bS5fbCgoX3ZtLmNvbHVtbnMpLCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICByZXR1cm4gX2MoJ3RoJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhjb2x1bW4pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAyKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmRhdGEpID8gX2MoJ3Rib2R5JywgX3ZtLl9sKChfdm0uZGF0YSksIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgIHJldHVybiBfYygndHInLCBbX3ZtLl9sKChfdm0uZGF0YVtpbmRleF0pLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIF9jKCd0ZCcsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3ModmFsdWUpICsgXCIgXCIpXSlcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywgW19jKCdhJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZWRpdExlYWQoX3ZtLmRhdGFbaW5kZXhdLmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMmZiYWI3XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwi7oirXCIpXSldKV0pXSwgMilcbiAgfSkpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCd0Zm9vdCcsIFtfYygndHInLCBbX3ZtLl9sKChfdm0uY29sdW1ucyksIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgIHJldHVybiBfYygndGgnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGNvbHVtbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDIpXSldKSA6IF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtZGF0YS10YWJsZSBkaXNwbGF5IG5vd3JhcFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1pbi1oZWlnaHRcIjogXCIxMjdweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBfdm0udGFibGVJZCxcbiAgICAgIFwiY2VsbHNwYWNpbmdcIjogXCIwXCIsXG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX3ZtLl9tKDQpLCBfdm0uX3YoXCIgXCIpLCBfYygndGJvZHknKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiXG4gIH0sIFtfdm0uX3YoXCJDbG9zZVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1zaW1wbGUtc3Bpbm5lclwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlib3gtdG9vbHNcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGFwc2UtbGlua1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jaGV2cm9uLXVwXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UtbGlua1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiXG4gIH0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aGVhZCcsIFtfYygndHInLCBbX2MoJ3RoJyldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzEzYjZlMzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zMTNiNmUzNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RhYmxlcy9yZXF1ZXN0cy9mYWlycy9hY3RpdmF0ZS9UYWJsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gNDUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2I2ZTM2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOWZmZTc3ZmFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2I2ZTM2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzEzYjZlMzZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZXMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzEzYjZlMzZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90YWJsZXMvcmVxdWVzdHMvZmFpcnMvYWN0aXZhdGUvVGFibGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQ1IiwiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqIFByaXZhdGUgVmFyaWFibGVzICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBTYXZlIHRoaXMgaW5zdGFuY2VcbiAqIEB0eXBlIEB0aGlzO1xuICogQHByaXZhdGVcbiAqL1xudmFyIHNlbGYgPSB0aGlzO1xuXG4vKipcbiAqIElmIE1vZHVsZSBoYXMgYmVlbiBpbml0aWF0ZWRcbiAqIEB0eXBlIEJvb2xlYW5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBfaXNJbml0ID0gZmFsc2U7IC8vIHRvIGF2b2lkICdyZWJpbmRzJ1xuXG4vKipcbiAqIFJlcXVlc3RcbiAqIEB0eXBlIFN0cmluZ1xuICogQHByaXZhdGVcbiAqL1xudmFyIF9yZXF1ZXN0O1xuXG4vKipcbiAqIFN0ZXBzXG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBfc3RlcHMgPSB7fTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqIFByaXZhdGUgZnVuY3Rpb25zICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiAgVG91ciBDb21wb25lbnRcbiAqXG4gKiAgQ3JlYXRlIGEgVG91ciBjb21wb25lbnRcbiAqXG4gKi9cbnZhciBfdG91ckNvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGtleSBpbiBfcmVxdWVzdC5kYXRhKSB7XG4gICAgICAgIF9zdGVwc1trZXldID0ge1xuICAgICAgICAgICAgZWxlbWVudDogJyMnICsgX3JlcXVlc3QuZGF0YVtrZXldLmVsZW1lbnQsXG4gICAgICAgICAgICB0aXRsZTogX3JlcXVlc3QuZGF0YVtrZXldLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogX3JlcXVlc3QuZGF0YVtrZXldLmNvbnRlbnQsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IF9yZXF1ZXN0LmRhdGFba2V5XS5wbGFjZW1lbnQsXG4gICAgICAgICAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tkcm9wQ29udGFpbmVyOiAnI3dyYXBwZXInLFxuICAgICAgICAgICAgb25TaG93bjogZnVuY3Rpb24gKHRvdXIpe1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygndG91ci1vcGVuJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhpZGRlbjogZnVuY3Rpb24gKHRvdXIpe1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygndG91ci1jbG9zZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZSB0aGUgdG91clxuICAgIHZhciB0b3VyID0gbmV3IFRvdXIoe1xuICAgICAgICBuYW1lOiBfcmVxdWVzdC50b3VyTmFtZSxcbiAgICAgICAgc3RlcHM6IF9zdGVwcyxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uICh0b3VyKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfcmVxdWVzdC50b3VyTmFtZSArICctIHRvdXJfZW5kZWQnLCAxKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHRvdXJcbiAgICB0b3VyLmluaXQoKTtcbiAgICB0b3VyLnJlc3RhcnQoKTtcbn07XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqIFB1YmxpYyBmdW5jdGlvbnMgKioqKipcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogc3RhcnRcbiAqXG4gKiBTdGFydHMgdGhlIG1vZHVsZVxuICogSW5pdHMgcHJpdmF0ZSB2YXJpYWJsZXMgYW5kIGV4ZWN1dGVzIHNwZWNpZmljIGxvZ2ljIG5lZWRlZCBmb3IgdGhlIG1vZHVsZVxuICogdG8gc3RhcnQuXG4gKlxuICogQHB1YmxpY1xuICovXG5zZWxmLnN0YXJ0ID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIF9yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICBpZighX2lzSW5pdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRvdXIgQ29tcG9uZW50IHN0YXJ0ZWQuLlwiKTtcblxuICAgICAgICAgLy8gSW5pdCB0b3VyIGNvbXBvbmVudFxuICAgICAgICBfdG91ckNvbXBvbmVudCgpO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RvdXIvdG91ci5qcyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUxIDUyIiwiLy8gdGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMuY29tcHV0ZWQgfHwgbnVsbClcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gICAgb3B0aW9ucy5jb21wdXRlZCA9IGNvbXB1dGVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MSA1MiIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKiBQcml2YXRlIFZhcmlhYmxlcyAqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogU2F2ZSB0aGlzIGluc3RhbmNlXG4gKiBAdHlwZSBAdGhpcztcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzZWxmID0gdGhpcztcblxuLyoqXG4gKiBJZiBNb2R1bGUgaGFzIGJlZW4gaW5pdGlhdGVkXG4gKiBAdHlwZSBCb29sZWFuXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgX2lzSW5pdCA9IGZhbHNlOyAvLyB0byBhdm9pZCAncmViaW5kcydcblxuLyoqXG4gKiBSZXF1ZXN0IFRhYmxlc1xuICogQHR5cGUge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBfcmVxdWVzdFRhYmxlID0gW1wiZmFpcnMtYWN0aXZlLXRhYmxlXCJdO1xuXG4vKipcbiAqIEZvcm0gQ29tcG9uZW50IGluc3RhbmNlXG4gKi9cbmNvbnN0IF90YWJsZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL3RhYmxlcycpXG5cbi8qKlxuICogVG91ciBDb21wb25lbnQgaW5zdGFuY2VcbiAqL1xuY29uc3QgdG91ckNvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvdG91ci90b3VyJyk7XG5cbi8qKlxuICogUmVxdWVzdCBUb3VyXG4gKlxuICogQHR5cGUge1tvYmplY3RdfVxuICpcbiAqIHRvdXJOYW1lICA6IHRvdXJOYW1lXG4gKlxuICogW1xuICogZWxlbWVudCAgIDogZGl2IGlkXG4gKiB0aXRsZSAgICAgOiB0aXRsZVxuICogY29udGVudCAgIDogY29udGVudFxuICogcGxhY2VtZW50IDogcGxhY2VtZW50XG4gKiBdXG4gKlxuICogQHByaXZhdGVcbiAqL1xudmFyIF9yZXF1ZXN0VG91ciA9IChcbiAgICB7XG4gICAgICAgIHRvdXJOYW1lOiAndG91ci10cmFkZXNob3ctY3JlYXRlJyxcblxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogICBcImZvcm1zXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICBcIkZvcm1zXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogICBcIlNlbGVjdCB0aGUgdHJhZGVzaG93LCBmaWxsIGFuZCBjb25maXJtIGFsbCB0aGUgZGF0YSBmb3IgSW1wYWN0IGNvbm5lY3Qgd2l0aCBTYWxlc0ZvcmNlIGFuZCBhZGQgeW91ciBuZXcgY29udGFjdFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbik7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqIFB1YmxpYyBmdW5jdGlvbnMgKioqKipcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogc3RhcnRcbiAqXG4gKiBTdGFydHMgdGhlIG1vZHVsZVxuICogSW5pdHMgcHJpdmF0ZSB2YXJpYWJsZXMgYW5kIGV4ZWN1dGVzIHNwZWNpZmljIGxvZ2ljIG5lZWRlZCBmb3IgdGhlIG1vZHVsZVxuICogdG8gc3RhcnQuXG4gKlxuICogQHB1YmxpY1xuICovXG50aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIV9pc0luaXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlycyBBY3RpdmUgQXJlYSBzdGFydGVkLi5cIik7XG5cbiAgICAgICAgLy8gRm9ybSBjb21wb25lbnQgaW5pdFxuICAgICAgICBfdGFibGVDb21wb25lbnQuc3RhcnQoX3JlcXVlc3RUYWJsZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG5cbiAgICAgICAgLy8gSWYgVG91ciBub3QgY29tcGxldGVkIHN0YXJ0IGNvbXBvbmVudFxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oX3JlcXVlc3RUb3VyLnRvdXJOYW1lICsgXCItIHRvdXJfZW5kZWRcIikgIT0gMSkge1xuICAgICAgICAgICAgLy8gVG91ciBjb21wb25lbnQgaW5pdFxuICAgICAgICAgICAgdG91ckNvbXBvbmVudC5zdGFydChfcmVxdWVzdFRvdXIpO1xuICAgICAgICB9XG4gICAgICAgICAqL1xuICAgIH1cbn07XG5cbnNlbGYuc3RhcnQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZhaXJzL2FjdGl2ZS5qcyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTEgNTIiLCI8c3R5bGUgc2NvcGVkPlxuICAgICN0YWJsZV93cmFwcGVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMzYxcHg7XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA1cHghaW1wb3J0YW50O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDwhLS0gRXJyb3IgTW9kYWwgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBpbm1vZGFsIGZhZGVcIiB2LWJpbmQ6aWQ9J3RhYmxlSWQgKyBcIm1vZGFsXCInIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiei1pbmRleDogMjA5OTk5OTUwIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGJsb2NrO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS13YXJuaW5nIGZhLTV4IHRleHQtZGFuZ2VyXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb250LWJvbGQgdGV4dC1kYW5nZXJcIj4ge3sgZXJyb3JNZXNzYWdlIH19PC9zbWFsbD48YnI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBMb2FkZXIgLS0+XG4gICAgICAgIDxkaXYgaWQ9XCJpc0xvYWRpbmdcIiB2LWlmPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2dWUtc2ltcGxlLXNwaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICBjbGFzcz1cImlib3ggZmxvYXQtZS1tYXJnaW5zIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlib3gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDUgdi1pZj1cIiFlcnJvck1lc3NhZ2VcIj4ge3sgdGFibGVOYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICA8aDUgdi1lbHNlIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4ge3sgdGFibGVOYW1lIH19PC9oNT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpYm94LXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY29sbGFwc2UtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2xvc2UtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWJsZV93cmFwcGVyXCIgY2xhc3M9XCJpYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgdi1pZj1cImRhdGFcIiB2LWJpbmQ6aWQ9J3RhYmxlSWQnIGNsYXNzPVwibWRsLWRhdGEtdGFibGUgZGlzcGxheSBub3dyYXAgbWRsLXR5cG9ncmFwaHktLXRleHQtY2VudGVyXCIgY2VsbHNwYWNpbmc9XCIwXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggdi1mb3I9XCJjb2x1bW4gaW4gY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgdi1pZj1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIih2YWx1ZSwgaW5kZXgpIGluIGRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJ2YWx1ZSBpbiBkYXRhW2luZGV4XVwiPiB7eyB2YWx1ZSB9fSA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIEBjbGljaz1cImVkaXRMZWFkKGRhdGFbaW5kZXhdLmlkKVwiPiA8aSBzdHlsZT1cImNvbG9yOiAjMmZiYWI3O1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4mI3hFMjJCOzwvaT4gPC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHYtZm9yPVwiY29sdW1uIGluIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY29sdW1uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICA8dGFibGUgdi1lbHNlIHYtYmluZDppZD0ndGFibGVJZCcgY2xhc3M9XCJtZGwtZGF0YS10YWJsZSBkaXNwbGF5IG5vd3JhcFwiIGNlbGxzcGFjaW5nPVwiMFwiIHdpZHRoPVwiMTAwJVwiIHN0eWxlPVwibWluLWhlaWdodDoxMjdweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPjwvdGg+PC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PjwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB0YWJsZU5hbWU6IG51bGwsXG4gICAgICAgICAgICB0YWJsZUlkOiBudWxsLFxuICAgICAgICAgICAgY29sdW1uczogbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyBVcGRhdGUgRGF0YSBpbnN0YW5jZVxuICAgICAgICB1cGRhdGVEYXRhKGlzVXBkYXRlID0gZmFsc2UsIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIFRhYmxlIGluc3RhbmNlIGlzIGFscmVhZHkgY3JlYXRlZCBkZXN0cm95IHByZXZpb3VzXG4gICAgICAgICAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbdGhpcy50YWJsZUlkXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVXBkYXRlIERhdGFcbiAgICAgICAgICAgIHRoaXMudGFibGVJZCAgID0gcmVzcG9uc2UudGFibGVJZFxuICAgICAgICAgICAgdGhpcy50YWJsZU5hbWUgPSByZXNwb25zZS50YWJsZU5hbWUsXG4gICAgICAgICAgICB0aGlzLmRhdGEgICAgICA9IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgICA9IHJlc3BvbnNlLmNvbHVtbnMsXG5cbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgVGFibGUgSW5zdGFuY2VcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRhYmxlKHRoaXMudGFibGVJZCwgZmFsc2UsIGlzVXBkYXRlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVXBkYXRlIERhdGEgaW5zdGFuY2UgaWYgYW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgdXBkYXRlRGF0YVdpdGhFcnJvcihpc1VwZGF0ZSA9IGZhbHNlLCByZXNwb25zZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIElmIFRhYmxlIGluc3RhbmNlIGlzIGFscmVhZHkgY3JlYXRlZCBkZXN0cm95IHByZXZpb3VzXG4gICAgICAgICAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgVGFibGUgSW5zdGFuY2VcbiAgICAgICAgICAgICAgICB3aW5kb3dbdGhpcy50YWJsZUlkXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBFcnJvciBtZXNzYWdlXG4gICAgICAgICAgICBpZiAoZXJyb3IgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdFcnJvcic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhXG4gICAgICAgICAgICB0aGlzLnRhYmxlSWQgICA9IHJlc3BvbnNlXG4gICAgICAgICAgICB0aGlzLnRhYmxlTmFtZSA9ICdUYWJsZSAtICcgKyB0aGlzLmVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zICAgPSBudWxsLFxuXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIFRhYmxlIEluc3RhbmNlXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUYWJsZSh0aGlzLnRhYmxlSWQsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBDcmVhdGUgVGFibGUgaW5zdGFuY2VcbiAgICAgICAgY3JlYXRlVGFibGUoaW5zdGFuY2VOYW1lLCBlcnJvciA9IGZhbHNlLCBpc1VwZGF0ZSA9IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgZXhjZWxFeHBvcnRGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAod2luZG93LkdyYW50cy5yb2xlcyA9PT0gJ0FkbWluJyB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5HcmFudHMucm9sZXMgPT09ICdBY2NvdW50ZXInIHx8XG4gICAgICAgICAgICAgICAgd2luZG93LkdyYW50cy5yb2xlcyA9PT0gJ1dlYlBSJykge1xuICAgICAgICAgICAgICAgIGV4Y2VsRXhwb3J0RmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBEYXRhIFRhYmxlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIGluc3RhbmNlTmFtZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChleGNlbEV4cG9ydEZsYWcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbaW5zdGFuY2VOYW1lXSA9ICQoJyMnICsgaW5zdGFuY2VOYW1lKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgICAgICAgICBkb206ICdCZnJ0aXAnLFxuICAgICAgICAgICAgICAgICAgICBzU2Nyb2xsWDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlU2F2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sUmVvcmRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IFtbIDAsICdkZXNjJyBdXSxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWyAxMCwgMjUsIDUwLCAtMSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyAnMTAgcm93cycsICcyNSByb3dzJywgJzUwIHJvd3MnLCAnU2hvdyBhbGwnIF1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uRGVmczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFswXSwgLy9Db21tYSBzZXBhcmF0ZWQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAgICAncGFnZUxlbmd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyOiAnUGFnZSBMZW5naHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsSHRtbDUnLCB0ZXh0OiAnPGkgY2xhc3M9XCJpY29uLWV4Y2VsXCI+PC9pPicsIGV4cG9ydE9wdGlvbnM6IHtjb2x1bW5zOiAnOnZpc2libGUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3tleHRlbmQ6ICdwZGZIdG1sNScsIHRleHQ6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cGljdHVyZV9hc19wZGY8L2k+Jywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLCBwYWdlU2l6ZTogJ0xFR0FMJywgZXhwb3J0T3B0aW9uczoge2NvbHVtbnM6ICc6dmlzaWJsZSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8ve2V4dGVuZDogJ3ByaW50JywgdGV4dDogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5wcmludDwvaT4nLCBleHBvcnRPcHRpb25zOiB7Y29sdW1uczogJzp2aXNpYmxlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2NvbHZpcycsIHRleHQ6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvaT4nLCBwb3N0Zml4QnV0dG9uczogWydjb2x2aXNSZXN0b3JlJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2V0dGluZ3NfYmFja3VwX3Jlc3RvcmU8L2k+JywgYWN0aW9uIDogZnVuY3Rpb24gKCkgeyB3aW5kb3dbaW5zdGFuY2VOYW1lXS5jb2xSZW9yZGVyLnJlc2V0KCk7IH0sfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBvTGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9QYWdpbmF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic05leHRcIjogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGV2cm9uX3JpZ2h0PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic1ByZXZpb3VzXCI6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2hldnJvbl9sZWZ0PC9pPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluaXRDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgbW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGluc3RhbmNlTmFtZSsgJ21vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHdpbmRvd1tpbnN0YW5jZU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIC5jb2x1bW4oICcwOnZpc2libGUnIClcbiAgICAgICAgICAgICAgICAgICAgLm9yZGVyKCAnZGVzYycgKVxuICAgICAgICAgICAgICAgICAgICAuZHJhdygpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tpbnN0YW5jZU5hbWVdID0gJCgnIycgKyBpbnN0YW5jZU5hbWUpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgIGRvbTogJ0JmcnRpcCcsXG4gICAgICAgICAgICAgICAgICAgIHNTY3JvbGxYOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVTYXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xSZW9yZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogW1sgMCwgJ2Rlc2MnIF1dLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbIDEwLCAyNSwgNTAsIC0xIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbICcxMCByb3dzJywgJzI1IHJvd3MnLCAnNTAgcm93cycsICdTaG93IGFsbCcgXVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3tleHRlbmQ6ICdwZGZIdG1sNScsIHRleHQ6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cGljdHVyZV9hc19wZGY8L2k+Jywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLCBwYWdlU2l6ZTogJ0xFR0FMJywgZXhwb3J0T3B0aW9uczoge2NvbHVtbnM6ICc6dmlzaWJsZSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8ve2V4dGVuZDogJ3ByaW50JywgdGV4dDogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5wcmludDwvaT4nLCBleHBvcnRPcHRpb25zOiB7Y29sdW1uczogJzp2aXNpYmxlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZDogJ2NvbHZpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGZpeEJ1dHRvbnM6IFsnY29sdmlzUmVzdG9yZSddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2V0dGluZ3NfYmFja3VwX3Jlc3RvcmU8L2k+JywgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W2luc3RhbmNlTmFtZV0uY29sUmVvcmRlci5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb0xhbmd1YWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvUGFnaW5hdGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNOZXh0XCI6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2hldnJvbl9yaWdodDwvaT4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNQcmV2aW91c1wiOiAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNoZXZyb25fbGVmdDwvaT4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbml0Q29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgTG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yIG1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBpbnN0YW5jZU5hbWUgKyAnbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2luZG93W2luc3RhbmNlTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbHVtbiggJzA6dmlzaWJsZScgKVxuICAgICAgICAgICAgICAgICAgICAub3JkZXIoICdkZXNjJyApXG4gICAgICAgICAgICAgICAgICAgIC5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRWRpdCBMZWFkXG4gICAgICAgIGVkaXRMZWFkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL2VkaXQvJyArIGlkXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUYWJsZXMudnVlPzUzMTUwZjFkIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTEgNTIiLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKiogUHJpdmF0ZSBWYXJpYWJsZXMgKioqKipcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIFNhdmUgdGhpcyBpbnN0YW5jZVxuICogQHR5cGUgQHRoaXM7XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgc2VsZiA9IHRoaXM7XG5cbi8qKlxuICogSWYgTW9kdWxlIGhhcyBiZWVuIGluaXRpYXRlZFxuICogQHR5cGUgQm9vbGVhblxuICogQHByaXZhdGVcbiAqL1xudmFyIF9pc0luaXQgPSBmYWxzZTsgLy8gdG8gYXZvaWQgJ3JlYmluZHMnXG5cbi8qKlxuICogUmVxdWVzdFxuICogQHR5cGUgU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgX3JlcXVlc3Q7XG5cbi8qKlxuICogVGFibGVzIGluc3RhbmNlXG4gKi9cbmltcG9ydCBUYWJsZXMgZnJvbSAnLi9UYWJsZXMudnVlJztcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICoqKioqIFByaXZhdGUgZnVuY3Rpb25zICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBQYXlsb2FkIERlZmF1bHRcbiAqXG4gKiBAcGFyYW0gZGF0ZUZyb21cbiAqIEB0eXBlIG9iamVjdFxuICpcbiAqIEBwYXJhbSBkYXRlVG9cbiAqIEB0eXBlIG9iamVjdFxuICpcbiAqIEBwYXJhbSBicmFuZFxuICogQHR5cGUgc3RyaW5nXG4gKlxuICogQHJldHVybiBPYmplY3RcbiAqL1xudmFyIF9wYXlsb2FkTW91bnQgPSBmdW5jdGlvbiAoZGF0ZUZyb20gPSB3aW5kb3cubW9tZW50KCksIGRhdGVUbyA9IHdpbmRvdy5tb21lbnQoKSwgYnJhbmQgPSBudWxsKSB7XG4gICAgdmFyIHBheWxvYWQgICAgICAgICAgPSB7fTtcbiAgICAgICAgcGF5bG9hZC5kYXRlRnJvbSA9IGRhdGVGcm9tLmZvcm1hdChcIllZWVktTU0tREQgMDA6MDA6MDBcIik7XG4gICAgICAgIHBheWxvYWQuZGF0ZVRvICAgPSBkYXRlVG8uZm9ybWF0KFwiWVlZWS1NTS1ERCAyMzo1OTo1OVwiKTtcbiAgICAgICAgcGF5bG9hZC5icmFuZCAgICA9IGJyYW5kO1xuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG59O1xuXG4vKipcbiAqXG4gKiBfdGFibGVVcGRhdGVcbiAqIEJpbmQgUmVxdWVzdCBmaWx0ZXJcbiAqXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBfdGFibGVVcGRhdGUgICA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgcmVxdWVzdCkge1xuICAgICQoJyNkYXRlLXNlYXJjaC1yZXF1ZXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZpbHRlciBieSBkYXRlIGFuZCBicmFuZFxuICAgICAgICB2YXIgYnJhbmQgICAgID0gd2luZG93LnNlYXJjaEluc3RhbmNlLnN5bmNlZFZhbC52YWx1ZTtcbiAgICAgICAgdmFyIGRhdGVGcm9tICA9IHdpbmRvdy5tb21lbnQod2luZG93LnNlYXJjaEluc3RhbmNlLnN0YXJ0VGltZS50aW1lKVxuICAgICAgICB2YXIgZGF0ZVRvICAgID0gd2luZG93Lm1vbWVudCh3aW5kb3cuc2VhcmNoSW5zdGFuY2UuZW5kdGltZS50aW1lKVxuICAgICAgICB2YXIgdG9kYXlEYXRlID0gd2luZG93Lm1vbWVudCh0b2RheURhdGUpO1xuXG4gICAgICAgIC8vIElmIERhdGUgUmFuZ2UgaXMgdmFsaWQgZG8gYSByZXF1ZXN0IG90aGVyd2lzZSB0aHJvdyBhIGV4Y2VwdGlvblxuICAgICAgICBpZiAod2luZG93Lm1vbWVudCh0b2RheURhdGUpID49IHdpbmRvdy5tb21lbnQoZGF0ZUZyb20pICYmXG4gICAgICAgICAgICB3aW5kb3cubW9tZW50KHRvZGF5RGF0ZSkgPj0gd2luZG93Lm1vbWVudChkYXRlVG8pICYmXG4gICAgICAgICAgICB3aW5kb3cubW9tZW50KGRhdGVUbykgPj0gd2luZG93Lm1vbWVudChkYXRlRnJvbSkpIHtcblxuICAgICAgICAgICAgLy8gU2hvdyBMb2FkZXJcbiAgICAgICAgICAgIGluc3RhbmNlLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3QgRGF0YVxuICAgICAgICAgICAgX3RhYmxlc1JlcXVlc3QocmVxdWVzdCwgdHJ1ZSwgaW5zdGFuY2UsIF9wYXlsb2FkTW91bnQoZGF0ZUZyb20sIGRhdGVUbywgYnJhbmQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKlxuICogX3RhYmxlc1JlcXVlc3RcbiAqXG4gKiBUYWJsZXMgQ29tcG9uZW50IENvbXBvbmVudCBQT1NUXG4gKlxuICogQHBhcmFtIGlzVXBkYXRlXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgX3RhYmxlc1JlcXVlc3QgPSBmdW5jdGlvbiAoX3JlcXVlc3QsIGlzVXBkYXRlID0gZmFsc2UsIGluc3RhbmNlID0gbnVsbCwgcGF5bG9hZCA9IG51bGwpIHtcbiAgICAvLyBJZiBhcyBmaWx0ZXIgdXBkYXRlIHJlcXVlc3RcbiAgICBpZiAod2luZG93LnNlYXJjaEluc3RhbmNlLmZpbHRlci52YWx1ZSlcbiAgICAgICAgX3JlcXVlc3QgPSBfcmVxdWVzdCArICctJyArIHdpbmRvdy5zZWFyY2hJbnN0YW5jZS5maWx0ZXIucmVxdWVzdDtcblxuICAgIC8vIFNlbmQgYSBQT1NUIHJlcXVlc3RcbiAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmw6ICd0YWJsZXMvJyArIF9yZXF1ZXN0LFxuICAgICAgICBkYXRhOiBwYXlsb2FkXG4gICAgfSlcblxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAvLyBVcGRhdGUgSW5zdGFuY2UgRGF0YVxuICAgICAgICBpbnN0YW5jZS51cGRhdGVEYXRhKGlzVXBkYXRlLCByZXNwb25zZS5kYXRhLnRhYmxlKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gVXBkYXRlIEluc3RhbmNlIERhdGEgd2l0aCBlcnJvclxuICAgICAgICBpbnN0YW5jZS51cGRhdGVEYXRhV2l0aEVycm9yKGlzVXBkYXRlLCBfcmVxdWVzdCwgZXJyb3IucmVzcG9uc2UpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKlxuICogQ3JlYXRlIGEgVGFibGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKiBAcmV0dXJuIHt7Y29sdW1ucywgZGF0YSwgdGFibGVOYW1lOiAoKnxudWxsKX19XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgX3RhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gQ3JlYXRlIGFsbCByZXF1ZXN0ZWQgaW5zdGFuY2VzXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IF9yZXF1ZXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgICAgZWw6ICcjJyArIF9yZXF1ZXN0W2ldLFxuICAgICAgICAgICAgbWl4aW5zOiBbVGFibGVzXSxcblxuICAgICAgICAgICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIG1vdW50ZWQgcmVxdWVzdCBkYXRhXG4gICAgICAgICAgICAgICAgX3RhYmxlc1JlcXVlc3QoX3JlcXVlc3RbaV0sIGZhbHNlLCB0aGlzLCBfcGF5bG9hZE1vdW50KCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgbW91bnRlZCBiaW5kIGZpbHRlclxuICAgICAgICAgICAgICAgIF90YWJsZVVwZGF0ZSh0aGlzLCBfcmVxdWVzdFtpXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKiBQdWJsaWMgZnVuY3Rpb25zICoqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIHN0YXJ0XG4gKlxuICogU3RhcnRzIHRoZSBtb2R1bGVcbiAqIEluaXRzIHByaXZhdGUgdmFyaWFibGVzIGFuZCBleGVjdXRlcyBzcGVjaWZpYyBsb2dpYyBuZWVkZWQgZm9yIHRoZSBtb2R1bGVcbiAqIHRvIHN0YXJ0LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuc2VsZi5zdGFydCA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICBfcmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgaWYoIV9pc0luaXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUYWJsZSBDb21wb25lbnQgc3RhcnRlZC4uXCIpO1xuXG4gICAgICAgICAvLyBJbml0IHNlYXJjaCBjb21wb25lbnRcbiAgICAgICAgX3RhYmxlKCk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL3RhYmxlcy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiN0YWJsZV93cmFwcGVyW2RhdGEtdi0zMTNiNmUzNl0ge1xcbiAgICBtaW4taGVpZ2h0OiAzNjFweDtcXG59XFxudGRbZGF0YS12LTMxM2I2ZTM2XSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDVweCFpbXBvcnRhbnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIlRhYmxlcy52dWU/NTMxNTBmMWRcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0Esa0NBQUE7SUFDQSxxQkFBQTtJQUNBLDhCQUFBO0lBQ0EsMkJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVGFibGVzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGUgc2NvcGVkPlxcbiAgICAjdGFibGVfd3JhcHBlciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzNjFweDtcXG4gICAgfVxcblxcbiAgICB0ZCB7XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyFpbXBvcnRhbnQ7XFxuICAgICAgICB3aWR0aDogNXB4IWltcG9ydGFudDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAhaW1wb3J0YW50O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlxcblxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDwhLS0gRXJyb3IgTW9kYWwgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbCBpbm1vZGFsIGZhZGVcXFwiIHYtYmluZDppZD0ndGFibGVJZCArIFxcXCJtb2RhbFxcXCInIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiAgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyMDk5OTk5NTAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLW1kXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogYmxvY2s7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtd2FybmluZyBmYS01eCB0ZXh0LWRhbmdlclxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGJsb2NrO1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZGFuZ2VyXFxcIj4ge3sgZXJyb3JNZXNzYWdlIH19PC9zbWFsbD48YnI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS0gTG9hZGVyIC0tPlxcbiAgICAgICAgPGRpdiBpZD1cXFwiaXNMb2FkaW5nXFxcIiB2LWlmPVxcXCJpc0xvYWRpbmdcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZ1ZS1zaW1wbGUtc3Bpbm5lclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgIGNsYXNzPVxcXCJpYm94IGZsb2F0LWUtbWFyZ2lucyBcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlib3gtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDUgdi1pZj1cXFwiIWVycm9yTWVzc2FnZVxcXCI+IHt7IHRhYmxlTmFtZSB9fTwvaDU+XFxuICAgICAgICAgICAgICAgIDxoNSB2LWVsc2UgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj4ge3sgdGFibGVOYW1lIH19PC9oNT5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWJveC10b29sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY29sbGFwc2UtbGlua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tdXBcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjbG9zZS1saW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwidGFibGVfd3JhcHBlclxcXCIgY2xhc3M9XFxcImlib3gtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZSB2LWlmPVxcXCJkYXRhXFxcIiB2LWJpbmQ6aWQ9J3RhYmxlSWQnIGNsYXNzPVxcXCJtZGwtZGF0YS10YWJsZSBkaXNwbGF5IG5vd3JhcCBtZGwtdHlwb2dyYXBoeS0tdGV4dC1jZW50ZXJcXFwiIGNlbGxzcGFjaW5nPVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggdi1mb3I9XFxcImNvbHVtbiBpbiBjb2x1bW5zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbHVtbiB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgdi1pZj1cXFwiZGF0YVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIodmFsdWUsIGluZGV4KSBpbiBkYXRhXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtZm9yPVxcXCJ2YWx1ZSBpbiBkYXRhW2luZGV4XVxcXCI+IHt7IHZhbHVlIH19IDwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBAY2xpY2s9XFxcImVkaXRMZWFkKGRhdGFbaW5kZXhdLmlkKVxcXCI+IDxpIHN0eWxlPVxcXCJjb2xvcjogIzJmYmFiNztcXFwiIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+JiN4RTIyQjs8L2k+IDwvYT48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPHRmb290PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHYtZm9yPVxcXCJjb2x1bW4gaW4gY29sdW1uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcblxcbiAgICAgICAgICAgICAgICA8dGFibGUgdi1lbHNlIHYtYmluZDppZD0ndGFibGVJZCcgY2xhc3M9XFxcIm1kbC1kYXRhLXRhYmxlIGRpc3BsYXkgbm93cmFwXFxcIiBjZWxsc3BhY2luZz1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIHN0eWxlPVxcXCJtaW4taGVpZ2h0OjEyN3B4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPjwvdGg+PC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PC90Ym9keT5cXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhICgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxcbiAgICAgICAgICAgIHRhYmxlTmFtZTogbnVsbCxcXG4gICAgICAgICAgICB0YWJsZUlkOiBudWxsLFxcbiAgICAgICAgICAgIGNvbHVtbnM6IG51bGwsXFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIC8vIFVwZGF0ZSBEYXRhIGluc3RhbmNlXFxuICAgICAgICB1cGRhdGVEYXRhKGlzVXBkYXRlID0gZmFsc2UsIHJlc3BvbnNlKSB7XFxuXFxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBudWxsO1xcbiAgICAgICAgICAgIC8vIElmIFRhYmxlIGluc3RhbmNlIGlzIGFscmVhZHkgY3JlYXRlZCBkZXN0cm95IHByZXZpb3VzXFxuICAgICAgICAgICAgaWYgKGlzVXBkYXRlKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvd1t0aGlzLnRhYmxlSWRdLmRlc3Ryb3koKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLy9VcGRhdGUgRGF0YVxcbiAgICAgICAgICAgIHRoaXMudGFibGVJZCAgID0gcmVzcG9uc2UudGFibGVJZFxcbiAgICAgICAgICAgIHRoaXMudGFibGVOYW1lID0gcmVzcG9uc2UudGFibGVOYW1lLFxcbiAgICAgICAgICAgIHRoaXMuZGF0YSAgICAgID0gcmVzcG9uc2UuZGF0YSxcXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgICA9IHJlc3BvbnNlLmNvbHVtbnMsXFxuXFxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgVGFibGUgSW5zdGFuY2VcXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUYWJsZSh0aGlzLnRhYmxlSWQsIGZhbHNlLCBpc1VwZGF0ZSk7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICAvLyBVcGRhdGUgRGF0YSBpbnN0YW5jZSBpZiBhbiBlcnJvciBvY2N1cnJlZFxcbiAgICAgICAgdXBkYXRlRGF0YVdpdGhFcnJvcihpc1VwZGF0ZSA9IGZhbHNlLCByZXNwb25zZSwgZXJyb3IpIHtcXG4gICAgICAgICAgICAvLyBJZiBUYWJsZSBpbnN0YW5jZSBpcyBhbHJlYWR5IGNyZWF0ZWQgZGVzdHJveSBwcmV2aW91c1xcbiAgICAgICAgICAgIGlmIChpc1VwZGF0ZSkge1xcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgVGFibGUgSW5zdGFuY2VcXG4gICAgICAgICAgICAgICAgd2luZG93W3RoaXMudGFibGVJZF0uZGVzdHJveSgpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAvLyBTZXQgRXJyb3IgbWVzc2FnZVxcbiAgICAgICAgICAgIGlmIChlcnJvciAhPSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5zdGF0dXNUZXh0O1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0Vycm9yJztcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGFcXG4gICAgICAgICAgICB0aGlzLnRhYmxlSWQgICA9IHJlc3BvbnNlXFxuICAgICAgICAgICAgdGhpcy50YWJsZU5hbWUgPSAnVGFibGUgLSAnICsgdGhpcy5lcnJvck1lc3NhZ2U7XFxuICAgICAgICAgICAgdGhpcy5kYXRhICAgICAgPSBudWxsXFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zICAgPSBudWxsLFxcblxcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIFRhYmxlIEluc3RhbmNlXFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFibGUodGhpcy50YWJsZUlkLCB0cnVlKTtcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8vIENyZWF0ZSBUYWJsZSBpbnN0YW5jZVxcbiAgICAgICAgY3JlYXRlVGFibGUoaW5zdGFuY2VOYW1lLCBlcnJvciA9IGZhbHNlLCBpc1VwZGF0ZSA9IGZhbHNlKSB7XFxuICAgICAgICAgICAgbGV0IGV4Y2VsRXhwb3J0RmxhZyA9IGZhbHNlO1xcbiAgICAgICAgICAgIGlmICh3aW5kb3cuR3JhbnRzLnJvbGVzID09PSAnQWRtaW4nIHx8XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5HcmFudHMucm9sZXMgPT09ICdBY2NvdW50ZXInIHx8XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5HcmFudHMucm9sZXMgPT09ICdXZWJQUicpIHtcXG4gICAgICAgICAgICAgICAgZXhjZWxFeHBvcnRGbGFnID0gdHJ1ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ3JlYXRlIERhdGEgVGFibGUgZnVuY3Rpb25cXG4gICAgICAgICAgICAgKlxcbiAgICAgICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZU5hbWVcXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxuXFxuICAgICAgICAgICAgaWYgKGV4Y2VsRXhwb3J0RmxhZykge1xcbiAgICAgICAgICAgICAgICB3aW5kb3dbaW5zdGFuY2VOYW1lXSA9ICQoJyMnICsgaW5zdGFuY2VOYW1lKS5EYXRhVGFibGUoe1xcbiAgICAgICAgICAgICAgICAgICAgZG9tOiAnQmZydGlwJyxcXG4gICAgICAgICAgICAgICAgICAgIHNTY3JvbGxYOiBcXFwiMTAwJVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVNhdmU6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICBjb2xSZW9yZGVyOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IFtbIDAsICdkZXNjJyBdXSxcXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBbIDEwLCAyNSwgNTAsIC0xIF0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgWyAnMTAgcm93cycsICcyNSByb3dzJywgJzUwIHJvd3MnLCAnU2hvdyBhbGwnIF1cXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5EZWZzOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFswXSwgLy9Db21tYSBzZXBhcmF0ZWQgdmFsdWVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgIH1dLFxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAgICAncGFnZUxlbmd0aCcsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQXR0cjogJ1BhZ2UgTGVuZ2h0J1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsSHRtbDUnLCB0ZXh0OiAnPGkgY2xhc3M9XFxcImljb24tZXhjZWxcXFwiPjwvaT4nLCBleHBvcnRPcHRpb25zOiB7Y29sdW1uczogJzp2aXNpYmxlJ319LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8ve2V4dGVuZDogJ3BkZkh0bWw1JywgdGV4dDogJzxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+cGljdHVyZV9hc19wZGY8L2k+Jywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLCBwYWdlU2l6ZTogJ0xFR0FMJywgZXhwb3J0T3B0aW9uczoge2NvbHVtbnM6ICc6dmlzaWJsZSd9fSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3tleHRlbmQ6ICdwcmludCcsIHRleHQ6ICc8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnByaW50PC9pPicsIGV4cG9ydE9wdGlvbnM6IHtjb2x1bW5zOiAnOnZpc2libGUnfX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2NvbHZpcycsIHRleHQ6ICc8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnZpc2liaWxpdHk8L2k+JywgcG9zdGZpeEJ1dHRvbnM6IFsnY29sdmlzUmVzdG9yZSddfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJzxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+c2V0dGluZ3NfYmFja3VwX3Jlc3RvcmU8L2k+JywgYWN0aW9uIDogZnVuY3Rpb24gKCkgeyB3aW5kb3dbaW5zdGFuY2VOYW1lXS5jb2xSZW9yZGVyLnJlc2V0KCk7IH0sfVxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIG9MYW5ndWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG9QYWdpbmF0ZTpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcInNOZXh0XFxcIjogJzxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+Y2hldnJvbl9yaWdodDwvaT4nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcInNQcmV2aW91c1xcXCI6ICc8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmNoZXZyb25fbGVmdDwvaT4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBpbml0Q29tcGxldGU6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIExvYWRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgbW9kYWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBpbnN0YW5jZU5hbWUrICdtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgIHdpbmRvd1tpbnN0YW5jZU5hbWVdXFxuICAgICAgICAgICAgICAgICAgICAuY29sdW1uKCAnMDp2aXNpYmxlJyApXFxuICAgICAgICAgICAgICAgICAgICAub3JkZXIoICdkZXNjJyApXFxuICAgICAgICAgICAgICAgICAgICAuZHJhdygpO1xcblxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvd1tpbnN0YW5jZU5hbWVdID0gJCgnIycgKyBpbnN0YW5jZU5hbWUpLkRhdGFUYWJsZSh7XFxuICAgICAgICAgICAgICAgICAgICBkb206ICdCZnJ0aXAnLFxcbiAgICAgICAgICAgICAgICAgICAgc1Njcm9sbFg6IFxcXCIxMDAlXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlU2F2ZTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbFJlb3JkZXI6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogW1sgMCwgJ2Rlc2MnIF1dLFxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgMTAsIDI1LCA1MCwgLTEgXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBbICcxMCByb3dzJywgJzI1IHJvd3MnLCAnNTAgcm93cycsICdTaG93IGFsbCcgXVxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3tleHRlbmQ6ICdwZGZIdG1sNScsIHRleHQ6ICc8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnBpY3R1cmVfYXNfcGRmPC9pPicsIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJywgcGFnZVNpemU6ICdMRUdBTCcsIGV4cG9ydE9wdGlvbnM6IHtjb2x1bW5zOiAnOnZpc2libGUnfX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgLy97ZXh0ZW5kOiAncHJpbnQnLCB0ZXh0OiAnPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5wcmludDwvaT4nLCBleHBvcnRPcHRpb25zOiB7Y29sdW1uczogJzp2aXNpYmxlJ319LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAnY29sdmlzJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+dmlzaWJpbGl0eTwvaT4nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Zml4QnV0dG9uczogWydjb2x2aXNSZXN0b3JlJ11cXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+c2V0dGluZ3NfYmFja3VwX3Jlc3RvcmU8L2k+JywgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tpbnN0YW5jZU5hbWVdLmNvbFJlb3JkZXIucmVzZXQoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICBvTGFuZ3VhZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvUGFnaW5hdGU6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzTmV4dFxcXCI6ICc8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmNoZXZyb25fcmlnaHQ8L2k+JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzUHJldmlvdXNcXFwiOiAnPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5jaGV2cm9uX2xlZnQ8L2k+J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgaW5pdENvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBMb2FkZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yIG1vZGFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgaW5zdGFuY2VOYW1lICsgJ21vZGFsJykubW9kYWwoJ3Nob3cnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgd2luZG93W2luc3RhbmNlTmFtZV1cXG4gICAgICAgICAgICAgICAgICAgIC5jb2x1bW4oICcwOnZpc2libGUnIClcXG4gICAgICAgICAgICAgICAgICAgIC5vcmRlciggJ2Rlc2MnIClcXG4gICAgICAgICAgICAgICAgICAgIC5kcmF3KCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIC8vIEVkaXQgTGVhZFxcbiAgICAgICAgZWRpdExlYWQ6IGZ1bmN0aW9uKGlkKSB7XFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL2VkaXQvJyArIGlkXFxuICAgICAgICB9LFxcbiAgICB9LFxcbn1cXG48L3NjcmlwdD5cIl19XSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMxM2I2ZTM2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFibGVzL3JlcXVlc3RzL2ZhaXJzL2FjdGl2YXRlL1RhYmxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDgxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQ1Il0sInNvdXJjZVJvb3QiOiIifQ==