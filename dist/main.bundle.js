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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nbody {\n  background-color: pink; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0; }\n\nbody {\n  font-family: \"Open Sans\";\n  margin: 0;\n  background-color: #4d4e4f;\n  height: auto; }\n\nh1 {\n  text-align: center;\n  color: #ffffff;\n  height: 80px;\n  padding-top: 10px; }\n\ninput {\n  height: 15px;\n  width: 50px; }\n\n.main {\n  display: flex;\n  flex-direction: row;\n  height: 1500px; }\n  .main .main-sidebar-body {\n    display: flex;\n    flex-direction: row;\n    width: 25%;\n    height: 100%; }\n    .main .main-sidebar-body .body-sidebar-sidebarContainer {\n      background-color: #9A9DAB;\n      border: 1px solid #000000;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n      overflow: scroll; }\n      .main .main-sidebar-body .body-sidebar-sidebarContainer .sidebar-header-name {\n        text-align: center; }\n      .main .main-sidebar-body .body-sidebar-sidebarContainer .sidebar-header-userInfo {\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 1.2em;\n        margin: .5em .5em .5em .5em;\n        width: inherit; }\n      .main .main-sidebar-body .body-sidebar-sidebarContainer .sidebar-header-line {\n        color: #ffffff;\n        border: 1px solid #000000;\n        margin: 1em 1em 0 1em;\n        height: 0;\n        width: 80%; }\n      .main .main-sidebar-body .body-sidebar-sidebarContainer .sidebar-header-userImage {\n        border-radius: 50%;\n        border: 1px solid #000000;\n        height: 200px;\n        width: 200px;\n        margin: 4px 2px 2px 2px;\n        justify-content: center; }\n      .main .main-sidebar-body .body-sidebar-sidebarContainer .sidebar-body-friendContainer {\n        display: flex;\n        flex-direction: column; }\n        .main .main-sidebar-body .body-sidebar-sidebarContainer .sidebar-body-friendContainer .sidebar-friendContainer-listItems {\n          text-align: left; }\n\n.body-main-infoContainter {\n  width: 100%;\n  border: 1px solid #000000;\n  margin: 0 0 1em;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll; }\n  .body-main-infoContainter .main-column-hydration {\n    display: flex;\n    flex-direction: row; }\n  .body-main-infoContainter .main-column-activity {\n    display: flex;\n    flex-direction: row; }\n  .body-main-infoContainter .main-column-sleep {\n    display: flex;\n    flex-direction: row; }\n\n.infoContainer-cardContainer-card-horizontal {\n  width: 100%;\n  background-color: #ffffff;\n  border: 1px solid #000000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1%;\n  justify-content: space-around; }\n\n.horizontalCard-activity-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  overflow: scroll; }\n\n.infoContainer-cardContainer-card-vertical {\n  width: 100%;\n  background-color: #ffffff;\n  border: 1px solid #000000;\n  display: flex;\n  flex-direction: row;\n  margin: 1%;\n  overflow: scroll; }\n\n.activity-input {\n  display: flex;\n  justify-content: center; }\n\n.sleep-input {\n  display: flex;\n  justify-content: center; }\n\n.hydration-input {\n  display: flex;\n  justify-content: center; }\n\n.card-today-hydration {\n  text-align: center;\n  background-color: #5BC8AC;\n  font-size: 1.5em;\n  font-family: sans-serif;\n  margin: 0.5em;\n  justify-content: space-between;\n  width: 80%;\n  display: flex;\n  flex-direction: column; }\n\n.card-today-sleep {\n  text-align: center;\n  background-color: #EC96A4;\n  font-size: 1.5em;\n  font-family: sans-serif;\n  margin: 0.5em;\n  justify-content: space-between;\n  width: 80%;\n  display: flex;\n  flex-direction: column; }\n\n.card-today-activity {\n  text-align: center;\n  background-color: #DFE166;\n  font-size: 1.5em;\n  font-family: sans-serif;\n  margin: 0.3em;\n  justify-content: space-between;\n  width: 40%;\n  display: flex;\n  flex-direction: column; }\n\n.card-history-hydration {\n  text-align: center;\n  background-color: #5BC8AC;\n  font-size: 1em;\n  font-family: sans-serif;\n  margin: 0.5em;\n  justify-content: flex-start;\n  width: 50%;\n  display: flex;\n  flex-direction: column; }\n\n.card-history-sleep {\n  text-align: center;\n  background-color: #EC96A4;\n  font-size: 1em;\n  font-family: sans-serif;\n  margin: 0.5em;\n  justify-content: flex-start;\n  width: 50%;\n  display: flex;\n  flex-direction: column; }\n\n.card-history-activity {\n  text-align: center;\n  background-color: #DFE166;\n  font-size: 1em;\n  font-family: sans-serif;\n  margin: 0.5em;\n  justify-content: flex-start;\n  width: 50%;\n  display: flex;\n  flex-direction: column; }\n\n.number {\n  font-size: 2em;\n  font-weight: bolder;\n  color: #4d4e4f;\n  font-kerning: normal; }\n\n.historicalWeek {\n  text-align: center;\n  font-size: 1em;\n  font-weight: bolder;\n  margin: .5em;\n  color: #000000; }\n\n.thisWeek {\n  text-align: center;\n  font-size: 1em;\n  font-weight: bolder;\n  margin: .5em;\n  color: #000000; }\n\n.card-vertical-list {\n  list-style-type: none;\n  font-weight: lighter;\n  font-style: italic;\n  padding-left: 0;\n  font-size: 1em; }\n\n.historical-list-listItem {\n  padding: .3em;\n  font-weight: bold;\n  font-family: sans-serif;\n  text-align: center; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Activity.js":
/*!*************************!*\
  !*** ./src/Activity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Health__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Health */ "./src/Health.js");

class Activity extends _Health__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super(data);
    this.activityData = data;
  };

  getDailyMiles(id, date, userRepo) {
    let userStepsByDate = this.activityData.find(data => id === data.userID && date === data.date);
    let userRepoData = userRepo.users.find(user => id === user.id);
    let miles = parseFloat(((userStepsByDate.numSteps * userRepoData.strideLength) / 5280).toFixed(1));
    return miles;
  };

  calculateActiveWeeklyAverage(id, date, userRepo) {
    let week = userRepo.getWeekByDate(date, id, this.activityData);
    let weekActiveMin =  week.reduce((sum, user) => {
      return sum += user.minutesActive;
    }, 0);
    let averageActiveWeek = parseFloat((weekActiveMin / 7).toFixed(1));
    return averageActiveWeek;
  };

  accomplishStepGoal(id, date, userRepo) {
    let userActivityData = this.activityData.find(data => id === data.userID && date === data.date);
    let userRepoData = userRepo.users.find(user => id === user.id);
    let goalAccomplished = userActivityData.numSteps >= userRepoData.dailyStepGoal;
    return goalAccomplished;
  };

  getDaysGoalExceeded(id, userRepo) {
    let userRepoData = userRepo.users.find(user => id === user.id);
    let daysExceeded = this.activityData.filter(data => id === data.userID && data.numSteps > userRepoData.dailyStepGoal);
    let dates = daysExceeded.map(data => data.date);
    return dates;
  };

  getStairRecord(id) {
    let userActivityData = this.activityData.filter(data => id === data.userID);
    let totalStairs = userActivityData.reduce((sum, user) => (user.flightsOfStairs > sum) ? user.flightsOfStairs : sum, 0);
    return totalStairs;
  };

  getAllUsersAverageForDay(date, userRepo, relevantData) {
    let selectedDayData = userRepo.getDayDataForAllUsers(this.activityData, date);
    let stairsAverage = selectedDayData.reduce((sum, user) => sum += user[relevantData], 0) / selectedDayData.length;
    let formattedAverage = parseFloat(stairsAverage.toFixed(1));
    return formattedAverage;
  };

  getDailyUserData(id, date, userRepo, relevantData) {
    let userData = userRepo.getDataFromUserID(id, this.activityData);
    let dataByDate = userData.find(data => data.date === date)[relevantData];
    return dataByDate;
  };

  getWeeklyUserData(id, date, userRepo, releventData) {
    let dataByWeek = userRepo.getWeekByDate(date, id, this.activityData);
    let formattedData = dataByWeek.map((data) => `${data.date}: ${data[releventData]}`);
    return formattedData;
  };

  // Friends

  getFriendsActivityData(user, userRepo) {
    let data = this.activityData;
    let userFriends = user.friends.map((friend) => {
      return userRepo.getDataFromUserID(friend, data)
    });
    let userFriendsData = userFriends.flat();
    return userFriendsData;
  };

  getFriendsAverageStepsForWeek(user, date, userRepo) {
    let friendsActivity = this.getFriendsActivityData(user, userRepo);
    let weekData = userRepo.getWeekDataForAllUsers(friendsActivity, date);
    let rankedFriendsActivity = userRepo.combineRankedUsersAndAverageData(friendsActivity, date, 'numSteps', weekData);
    return rankedFriendsActivity;
  };

  getChallengeListAndWinner(user, date, userRepo) {
    let rankedList = this.getFriendsAverageStepsForWeek(user, date, userRepo);
    let rankedFriendsActivity = rankedList.map((friend) => {
      let userID = Object.keys(friend)[0];
      let userName = userRepo.getUserFromID(parseInt(userID)).name;
      return `${userName}: ${friend[userID]}`;
    });
    return rankedFriendsActivity;
  };

  showcaseWinner(user, date, userRepo) {
    let namedList = this.getChallengeListAndWinner(user, date, userRepo);
    let winner = this.getChallengeListAndWinner(user, date, userRepo).shift();
    return winner;
  };

  getStreakDays(userRepo, id, relevantData) {
    let data = this.activityData;
    let sortedUserArray = (userRepo.makeSortedUserArray(id, data)).reverse();
    let streaks = sortedUserArray.reduce((streakDays, currentDay, index) => {
      let qualifyingDay = this.isQualifyingDay(sortedUserArray, index, relevantData);
      if (qualifyingDay) {
        streakDays.push(currentDay.date);
      }
      return streakDays;
    }, []);
    return streaks;
  };

  isQualifyingDay(sortedUserArray, index, relevantData) {
    if (index >= 2) {
      return sortedUserArray[index - 2][relevantData] < sortedUserArray[index - 1][relevantData] && sortedUserArray[index - 1][relevantData] < sortedUserArray[index][relevantData]
    }
    return false;
  };

  getWinnerId(user, date, userRepo) {
    let rankedList = this.getFriendsAverageStepsForWeek(user, date, userRepo);
    let keysList = rankedList.map(friend => Object.keys(friend));
    let winnerID = parseInt(keysList[0].join(''));
    return winnerID;
  };

};


/* harmony default export */ __webpack_exports__["default"] = (Activity);


/***/ }),

/***/ "./src/Fetch-API.js":
/*!**************************!*\
  !*** ./src/Fetch-API.js ***!
  \**************************/
/*! exports provided: fetchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApi", function() { return fetchApi; });
let fetchApi = {

  fetchUserData() {
    let fetchedUser = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
      .then(response => response.json())
      .then(data => data.userData)
      .catch(error => console.log(error.message));
      return fetchedUser;
  },
  fetchSleepData() {
    let fetchedSleep = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData')
      .then(response => response.json())
      .then(data => data.sleepData)
      .catch(error => console.log(error.message));
      return fetchedSleep;
  },
  fetchHydrationData() {
    let fetchedHydration = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
      .then(response => response.json())
      .then(data => data.hydrationData)
      .catch(error => console.log(error.message));
      return fetchedHydration;
  },
  fetchActivityData() {
    let fetchedActivity = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData')
      .then(response => response.json())
      .then(data => data.activityData)
      .catch(error => console.log(error.message));
      return fetchedActivity;
  },
  postSleepData() {
    let newData = buildSleepObject();
    let postSleepData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))
  },
  buildSleepObject() {
    let newData = {userID: parseInt(sleepIdInfo.value),
    date: sleepDateInfo.value,
    hoursSlept: parseInt(sleepHoursSleptInfo.value),
    sleepQuality: parseInt(sleepSleepQualityInfo.value)};
    return newData;
  },
  postHydrationData() {
   let newData = buildHydrationObject();
   let postSleepData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData', {
     method: 'POST',
     headers: {
       'Content-Type':'application/json'
     },
     body: JSON.stringify(newData)
   })
   .then(response => response.json())
   .catch(error => console.log(error.message))
 },
 buildHydrationObject() {
   let newData = {userID: parseInt(hydrationIdInfo.value),
   date: hydrationDateInfo.value,
   numOunces: parseInt(hydrationOuncesInfo.value),
   };
   return newData;
 },
 postActivityData() {
   let newData = buildActivityObject();
   let postSleepData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData', {
     method: 'POST',
     headers: {
       'Content-Type':'application/json'
     },
     body: JSON.stringify(newData)
   })
   .then(response => response.json())
   .catch(error => console.log(error.message))
 },
 buildActivityObject() {
   let newData = {userID: parseInt(activityIdInfo.value),
   date: activityDateInfo.value,
   numSteps: parseInt(activityNumStepsInfo.value),
   minutesActive: parseInt(activityMinsActiveInfo.value),
   flightsOfStairs: parseInt(activityFlightsOfStairsInfo.value)};
   return newData;
 }
 
};



/***/ }),

/***/ "./src/Health.js":
/*!***********************!*\
  !*** ./src/Health.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Health {
  constructor(data) {
    this.data = data
  }

  calculateDailyTotal(id, date, property) {
    let findDataByDate = this.data.find((data) => id === data.userID && date === data.date);
    return findDataByDate[property];
  }

  calculateAverage(id, property) {
    let dataPerDay = this.data.filter((data) => id === data.userID);
    let total = dataPerDay.reduce((sum, data) => {
      return sum += data[property];
    }, 0);
    let averagePerDay = total / dataPerDay.length;
    return averagePerDay.toFixed(1);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Health);


/***/ }),

/***/ "./src/Hydration.js":
/*!**************************!*\
  !*** ./src/Hydration.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Health__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Health */ "./src/Health.js");

class Hydration extends _Health__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(data) {
    super(data);
    this.hydrationData = data;
  };

  calculateFirstWeekOunces(userRepo, id) {
    let firstWeek = userRepo.getFirstWeek(id, this.hydrationData);
    let firstWeekOunces = firstWeek.map((data) => `${data.date}: ${data.numOunces}`);
    return firstWeekOunces;
  };

  calculateRandomWeekOunces(date, id, userRepo) {
    let week = userRepo.getWeekByDate(date, id, this.hydrationData);
    let weekOunces = week.map((data) => `${data.date}: ${data.numOunces}`);
    return weekOunces;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Hydration);


/***/ }),

/***/ "./src/Sleep.js":
/*!**********************!*\
  !*** ./src/Sleep.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Health__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Health */ "./src/Health.js");

class Sleep extends _Health__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super(data);
    this.sleepData = data;
  };

  calculateWeekTotal(date, id, userRepo, property) {
  return userRepo.getWeekByDate(date, id, this.sleepData).map((data) => `${data.date}: ${data[property]}`);
};

  calculateAllUserSleepQuality() {
    let totalSleepQuality = this.sleepData.reduce((sum, user) => {
      sum += user.sleepQuality;
      return sum;
    }, 0)
    let averageSleep = totalSleepQuality / this.sleepData.length;
    return averageSleep;
  };

  determineBestSleepers(date, userRepo) {
    let weekData = userRepo.getWeekDataForAllUsers(this.sleepData, date);
    let userSleepObject = userRepo.getUserAndRelevantData(this.sleepData, date, 'sleepQuality', weekData);
    let bestSleepers = Object.keys(userSleepObject).filter((key) => {
      return this.calculateSleepQualityAverage(userSleepObject[key]) > 3;
    });
    return bestSleepers.map((sleeper) => {
      return userRepo.getUserFromID(parseInt(sleeper)).name;
    });
  };

  calculateSleepQualityAverage(sleepQualityData) {
    let sleepQualityAverage = sleepQualityData.reduce((sum, sleepQualityValue) => {
      sum += sleepQualityValue;
      return sum;
    }, 0);
    const average = sleepQualityAverage / sleepQualityData.length;
    return average;
  };

  determineSleepQualityWinnerForWeek(date, userRepo) {
    let weekData = userRepo.getWeekDataForAllUsers(this.sleepData, date);
    let sleepRankWithData = userRepo.combineRankedUsersAndAverageData(this.sleepData, date, 'sleepQuality', weekData);
    return this.getWinnerNamesFromList(sleepRankWithData, userRepo);
  };

  determineSleepHoursWinnerForDay(date, userRepo) {
    let dayData = userRepo.getDayDataForAllUsers(this.sleepData, date);
    let sleepRankWithData = userRepo.combineRankedUsersAndAverageData(this.sleepData, date, 'hoursSlept', dayData);
    return this.getWinnerNamesFromList(sleepRankWithData, userRepo);
  };

  getWinnerNamesFromList(sortedArray, userRepo) {
    let bestSleepers = this.getBestSleepers(sortedArray);
    let bestSleeperIds = this.getBestSleepersIds(bestSleepers);
    return bestSleeperIds.map((sleepNumber) => {
      return userRepo.getUserFromID(parseInt(sleepNumber)).name;
    });
  };

  getBestSleepers(sortedArray) {
    let bestSleepers = sortedArray.filter((element) => {
      return element[Object.keys(element)] === Object.values(sortedArray[0])[0]
    });
    return bestSleepers;
  };

  getBestSleepersIds(bestSleepers) {
    let bestSleeperIds = bestSleepers.map((bestSleeper) => {
      return (Object.keys(bestSleeper));
    });
    return bestSleeperIds;
  }
};


/* harmony default export */ __webpack_exports__["default"] = (Sleep);


/***/ }),

/***/ "./src/User-repo.js":
/*!**************************!*\
  !*** ./src/User-repo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class UserRepo {
  constructor(users) {
    this.users = users;
  };

  getUserFromID(id) {
    return this.users.find((user) => id === user.id);
  };

  getDataFromUserID(id, dataSet) {
    return dataSet.filter((userData) => id === userData.userID);
  };

  calculateAverageStepGoal() {
    const totalStepGoal = this.users.reduce((sum, data) => {
      return sum += data.dailyStepGoal;
    }, 0);
    const averageSteps = totalStepGoal / this.users.length;
    return averageSteps;
  };

  makeSortedUserArray(id, dataSet) {
    let selectedID = this.getDataFromUserID(id, dataSet)
    let sortedByDate = selectedID.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedByDate;
  };

  getCurrentDate(id, dataSet) {
    return this.makeSortedUserArray(id, dataSet)[0].date;
  };

  getFirstWeek(id, dataSet) {
    return this.makeSortedUserArray(id, dataSet).slice(0, 7);
  };

  getWeekByDate(date, id, dataSet) {
    let user = this.makeSortedUserArray(id, dataSet).find((sortedItem) => (sortedItem.date === date));
    let dateIndex = this.makeSortedUserArray(id, dataSet).indexOf(user);
    let week = this.makeSortedUserArray(id, dataSet).slice(dateIndex, dateIndex + 7);
    return week;
  };

  getWeekDataForAllUsers(dataSet, date) {
    let allUserData = dataSet.filter((dataItem) => {
      return (new Date(date)).setDate((new Date(date)).getDate() - 7) <= new Date(dataItem.date) && new Date(dataItem.date) <= new Date(date);
    });
    return allUserData;
  };

  getDayDataForAllUsers(dataSet, date) {
    let userData = dataSet.filter((dataItem) => {
      return dataItem.date === date
    });
    return userData;
  };

  getUserAndRelevantData(dataSet, date, relevantData, timelineData) {
    let userData = timelineData.reduce((userObject, dataItem) => {
      if (!userObject[dataItem.userID]) {
        userObject[dataItem.userID] = [dataItem[relevantData]];
      } else {
        userObject[dataItem.userID].push(dataItem[relevantData]);
      }
      return userObject;
    }, {});
    return userData;
  };

  rankUsersByDataValue(dataSet, date, relevantData, timelineData) {
    let sortedObjectKeys = this.getUserAndRelevantData(dataSet, date, relevantData, timelineData);
    let dataValue = Object.keys(sortedObjectKeys).sort((b, a) => {
      return (this.getUserAverageData(sortedObjectKeys[a])) - (this.getUserAverageData(sortedObjectKeys[b]));
    });
    return dataValue;
  };

  getUserAverageData(propertyValues) {
    const totalUserData = propertyValues.reduce((sum, currentData) => {
      sum += currentData
      return sum;
    }, 0);
    const average = totalUserData / propertyValues.length;
    return average;
  };

  combineRankedUsersAndAverageData(dataSet, date, relevantData, timelineData) {
    let sortedObjectKeys = this.getUserAndRelevantData(dataSet, date, relevantData, timelineData);
    let rankedUsers = this.rankUsersByDataValue(dataSet, date, relevantData, timelineData);
    let rankedUsersAndAverages = rankedUsers.reduce((rankedAverages, user) => {
      let updatedUser = {[user] : this.getUserAverageData(sortedObjectKeys[user])}
      rankedAverages.push(updatedUser)
      return rankedAverages;
    }, []);
    return rankedUsersAndAverages;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (UserRepo);


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.address = userDetails.address;
    this.email = userDetails.email;
    this.strideLength = userDetails.strideLength;
    this.dailyStepGoal = userDetails.dailyStepGoal;
    this.friends = userDetails.friends;
  };

  getFirstName() {
    return this.name.split(' ', 1).join();
  };

  getFriendsNames(dataSet) {
    return this.friends.map((friendId) => (dataSet.getUserFromID(friendId).name));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/The Rock.jpg":
/*!*********************************!*\
  !*** ./src/images/The Rock.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/The Rock.jpg";

/***/ }),

/***/ "./src/images/person walking on path.jpg":
/*!***********************************************!*\
  !*** ./src/images/person walking on path.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/person walking on path.jpg";

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_person_walking_on_path_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/person walking on path.jpg */ "./src/images/person walking on path.jpg");
/* harmony import */ var _images_person_walking_on_path_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_person_walking_on_path_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_The_Rock_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/The Rock.jpg */ "./src/images/The Rock.jpg");
/* harmony import */ var _images_The_Rock_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_The_Rock_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Activity */ "./src/Activity.js");
/* harmony import */ var _Hydration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hydration */ "./src/Hydration.js");
/* harmony import */ var _Sleep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sleep */ "./src/Sleep.js");
/* harmony import */ var _User_repo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User-repo */ "./src/User-repo.js");
/* harmony import */ var _Fetch_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Fetch-API */ "./src/Fetch-API.js");














let userList;
let userRepo;
let hydrationRepo;
let sleepRepo;
let activityRepo;

const fetchedUserData = _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].fetchUserData();
const fetchedSleepData = _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].fetchSleepData();
const fetchedHydrationData = _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].fetchHydrationData();
const fetchedActivityData = _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].fetchActivityData();

Promise.all([fetchedUserData, fetchedSleepData, fetchedHydrationData, fetchedActivityData]).then(values => {
  userList = createUsers(values[0]);
  userRepo = new _User_repo__WEBPACK_IMPORTED_MODULE_8__["default"](userList);
  sleepRepo = new _Sleep__WEBPACK_IMPORTED_MODULE_7__["default"](values[1]);
  hydrationRepo = new _Hydration__WEBPACK_IMPORTED_MODULE_6__["default"](values[2]);
  activityRepo = new _Activity__WEBPACK_IMPORTED_MODULE_5__["default"](values[3]);
  startApp();
});

const sleepIdInfo = document.getElementById('sleep-userID-input');
const sleepDateInfo = document.getElementById('sleep-date-input');
const sleepHoursSleptInfo = document.getElementById('sleep-hoursSlept-input');
const sleepSleepQualityInfo = document.getElementById('sleep-sleepQuality-input');
const hydrationIdInfo = document.getElementById('hydration-userID-input');
const hydrationDateInfo = document.getElementById('hydration-date-input');
const hydrationOuncesInfo = document.getElementById('hydration-ounces-input');
const activityIdInfo = document.getElementById('activity-userID-input')
const activityDateInfo = document.getElementById('activity-date-input')
const activityNumStepsInfo = document.getElementById('activity-numSteps-input')
const activityMinsActiveInfo = document.getElementById('activity-minsActive-input')
const activityFlightsOfStairsInfo = document.getElementById('activity-flightsOfStairs-input')

const sidebarName = document.getElementById('sidebarUserName');
const stepGoalCard = document.getElementById('userStepGoalCard');
const avStepGoalCard = document.getElementById('averageStepsGoalCard');
const headerText = document.getElementById('headerText');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStridelength = document.getElementById('userStridelength');
const friendList = document.getElementById('friendList');
const hydrationToday = document.getElementById('hydrationToday');
const hydrationAverage = document.getElementById('hydrationAverage');
const hydrationThisWeek = document.getElementById('hydrationThisWeek');
const hydrationEarlierWeek = document.getElementById('hydrationEarlierWeek');
const historicalWeek = document.querySelectorAll('.historicalWeek');
const sleepToday = document.getElementById('sleepToday');
const sleepQualityToday = document.getElementById('sleepQualityToday');
const avUserSleepQuality = document.getElementById('avUserSleepQuality');
const sleepThisWeek = document.getElementById('sleepThisWeek');
const sleepEarlierWeek = document.getElementById('sleepEarlierWeek');
const friendChallengeListToday = document.getElementById('friendChallengeListToday');
const friendChallengeListHistory = document.getElementById('friendChallengeListHistory');
const bigWinner = document.getElementById('bigWinner');
const userStepsToday = document.getElementById('userStepsToday');
const avgStepsToday = document.getElementById('avgStepsToday');
const userStairsToday = document.getElementById('userStairsToday');
const avgStairsToday = document.getElementById('avgStairsToday');
const userMinutesToday = document.getElementById('userMinutesToday');
const avgMinutesToday = document.getElementById('avgMinutesToday');
const userStepsThisWeek = document.getElementById('userStepsThisWeek');
const userStairsThisWeek = document.getElementById('userStairsThisWeek');
const userMinutesThisWeek = document.getElementById('userMinutesThisWeek');
const bestUserSteps = document.getElementById('bestUserSteps');
const streakList = document.getElementById('streakList');
const streakListMinutes = document.getElementById('streakListMinutes')

document.querySelector('#submit-sleep-info').addEventListener('click', _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].postSleepData);
document.querySelector('#submit-hydration-info').addEventListener('click', _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].postHydrationData);
document.querySelector('#submit-activity-info').addEventListener('click', _Fetch_API__WEBPACK_IMPORTED_MODULE_9__["fetchApi"].postActivityData);

function startApp() {
  getCurrentInfo();
};

function getCurrentInfo() {
  const userNowId = Math.floor(Math.random() * 50);
  const userNow = userRepo.getUserFromID(userNowId);
  const today = userRepo.getCurrentDate(userNowId, hydrationRepo.hydrationData);
  const randomHistory = getRandomDate(userRepo, userNowId, hydrationRepo.hydrationData);
  const winnerNow = activityRepo.getWinnerId(userNow, today, userRepo);
  displayUserInfo(userNow, userNowId, today, randomHistory, winnerNow);
};

function displayUserInfo(userNow, userNowId, today, randomHistory, winnerNow) {
  addInfoToSidebar(userNow, userRepo);
  addHydrationInfo(userNowId, hydrationRepo, today, userRepo, randomHistory);
  addSleepInfo(userNowId, sleepRepo, today, userRepo, randomHistory);
  addActivityInfo(userNowId, activityRepo, today, userRepo, randomHistory, userNow, winnerNow);
  addFriendGameInfo(userNowId, activityRepo, userRepo, today, randomHistory, userNow);
  historicalWeek.forEach(instance => instance.insertAdjacentHTML('afterBegin', `Week of ${randomHistory}`));
};

function createUsers(userData) {
  return userData.reduce((userList, userInfo) => {
    let user = new _User__WEBPACK_IMPORTED_MODULE_4__["default"](userInfo);
    userList.push(user);
    return userList;
  }, [])
};

function addInfoToSidebar(user, userRepo) {
  sidebarName.innerText = user.name;
  headerText.innerText = `${user.getFirstName()}'s Activity Tracker`;
  stepGoalCard.innerText = `Your daily step goal is ${user.dailyStepGoal}.`;
  avStepGoalCard.innerText = `The average daily step goal is ${userRepo.calculateAverageStepGoal()}.`;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStridelength.innerText = `Your stridelength is ${user.strideLength} meters.`;
  friendList.insertAdjacentHTML('afterBegin', makeFriendHTML(user, userRepo));
};

function makeFriendHTML(user, userRepo) {
  const friends = user.getFriendsNames(userRepo);
  const createFriends = friends.map(friendName => `<li class='historical-list-listItem'>${friendName}</li>`).join('');
  return createFriends;
};

function getRandomDate(userRepo, id, dataSet) {
  let sortedArray = userRepo.makeSortedUserArray(id, dataSet);
  return sortedArray[Math.floor(Math.random() * sortedArray.length + 1)].date
};

function addHydrationInfo(id, hydrationInfo, dateString, userRepo, laterDateString) {
  const dailyOunces = hydrationInfo.calculateDailyTotal(id, dateString, 'numOunces');
  hydrationToday.insertAdjacentHTML('afterBegin', `<p>You drank</p><p><span class="number">${dailyOunces}</span></p><p>oz water today.</p>`);
  const averageOunces = hydrationInfo.calculateAverage(id, 'numOunces');
  hydrationAverage.insertAdjacentHTML('afterBegin', `<p>Your average water intake is</p><p><span class="number">${averageOunces}</span></p> <p>oz per day.</p>`);
  const firstWeekOunces = hydrationInfo.calculateFirstWeekOunces(userRepo, id);
  hydrationThisWeek.insertAdjacentHTML('afterBegin', makeHydrationHTML(id, hydrationInfo, userRepo, firstWeekOunces));
  const randomWeekOunces = hydrationInfo.calculateRandomWeekOunces(laterDateString, id, userRepo);
  hydrationEarlierWeek.insertAdjacentHTML('afterBegin', makeHydrationHTML(id, hydrationInfo, userRepo, randomWeekOunces));
};

function makeHydrationHTML(id, hydrationInfo, userRepo, relevantData) {
  const hydration = relevantData.map(drinkData => `<li class="historical-list-listItem">On ${drinkData}oz</li>`).join('');
  return hydration;
};

function addSleepInfo(id, sleepInfo, dateString, userRepo) {
  const sleepHours = sleepInfo.calculateDailyTotal(id, dateString, 'hoursSlept');
  sleepToday.insertAdjacentHTML("afterBegin", `<p>You slept</p> <p><span class="number">${sleepHours}</span></p> <p>hours today.</p>`);
  const sleepQuality = sleepInfo.calculateDailyTotal(id, dateString, 'sleepQuality');
  sleepQualityToday.insertAdjacentHTML("afterBegin", `<p>Your sleep quality was</p> <p><span class="number">${sleepQuality}</span></p><p>out of 5.</p>`);
  const averageSleepQuality = Math.round(sleepInfo.calculateAllUserSleepQuality() *100)/100;
  avUserSleepQuality.insertAdjacentHTML("afterBegin", `<p>The average user's sleep quality is</p> <p><span class="number">${averageSleepQuality}</span></p><p>out of 5.</p>`);
  const weekSleepTotal = sleepInfo.calculateWeekTotal(dateString, id, userRepo, 'hoursSlept');
  sleepThisWeek.insertAdjacentHTML('afterBegin', makeSleepHTML(id, sleepInfo, userRepo, weekSleepTotal));
  const weekSleepQuality = sleepInfo.calculateWeekTotal(dateString, id, userRepo, 'sleepQuality');
  sleepEarlierWeek.insertAdjacentHTML('afterBegin', makeSleepHTML(id, sleepInfo, userRepo, weekSleepQuality));
}

function makeSleepHTML(id, sleepInfo, userRepo, relevantData) {
  const sleepHours = relevantData.map(sleepData => `<li class="historical-list-listItem">On ${sleepData} hours</li>`).join('');
  return sleepHours;
}

function addActivityInfo(id, activityInfo, dateString, userRepo, winnerId, user) {
  const userDailyActiveMinutes = activityInfo.getDailyUserData(id, dateString, userRepo, 'minutesActive');
  userMinutesToday.insertAdjacentHTML("afterBegin", `<p>Active Minutes:</p><p>You</p><p><span class="number">${userDailyActiveMinutes}</span></p>`);
  const usersAverage = activityInfo.getAllUsersAverageForDay(dateString, userRepo, 'minutesActive');
  avgMinutesToday.insertAdjacentHTML("afterBegin", `<p>Active Minutes:</p><p>All Users</p><p><span class="number">${usersAverage}</span></p>`);
  createDailyActivityData(id, activityInfo, dateString, userRepo);
  createWeeklyActivityData(id, activityInfo, dateString, userRepo, winnerId, user);
}

function createDailyActivityData(id, activityInfo, dateString, userRepo) {
  const userDailyFlights = activityInfo.getDailyUserData(id, dateString, userRepo, 'flightsOfStairs');
  userStairsToday.insertAdjacentHTML("afterBegin", `<p>Stair Count:</p><p>You</><p><span class="number">${userDailyFlights}</span></p>`);
  const usersAverageDailyFlights = activityInfo.getAllUsersAverageForDay(dateString, userRepo, 'flightsOfStairs');
  avgStairsToday.insertAdjacentHTML("afterBegin", `<p>Stair Count: </p><p>All Users</p><p><span class="number">${usersAverageDailyFlights}</span></p>`);
  const userSteps = activityInfo.getDailyUserData(id, dateString, userRepo, 'numSteps');
  userStepsToday.insertAdjacentHTML("afterBegin", `<p>Step Count:</p><p>You</p><p><span class="number">${userSteps}</span></p>`);
  const usersAverageDailySteps = activityInfo.getAllUsersAverageForDay(dateString, userRepo, 'numSteps');
  avgStepsToday.insertAdjacentHTML("afterBegin", `<p>Step Count:</p><p>All Users</p><p><span class="number">${usersAverageDailyFlights}</span></p>`);
}

function createWeeklyActivityData(id, activityInfo, dateString, userRepo, winnerId, user) {
  const weeklySteps = makeActivityHTML(activityInfo.getWeeklyUserData(id, dateString, userRepo, "numSteps"), "steps");
  userStepsThisWeek.insertAdjacentHTML("afterBegin", weeklySteps);
  const weeklyFlights = makeActivityHTML(activityInfo.getWeeklyUserData(id, dateString, userRepo, "flightsOfStairs"), "flights");
  userStairsThisWeek.insertAdjacentHTML("afterBegin", weeklyFlights);
  const minutesActive = makeActivityHTML(activityInfo.getWeeklyUserData(id, dateString, userRepo, "minutesActive"), "minutes");
  userMinutesThisWeek.insertAdjacentHTML("afterBegin", minutesActive);
  const bestSteps = makeActivityHTML(activityInfo.getWeeklyUserData(winnerId, dateString, userRepo, "numSteps"), 'steps');
  bestUserSteps.insertAdjacentHTML("afterBegin", bestSteps);
}

function makeActivityHTML(relevantData, relevantDataName) {
  return relevantData.map(activityData => `<li class="historical-list-listItem">On ${activityData} ${relevantDataName}</li>`).join('');
}

function addFriendGameInfo(id, activityInfo, userRepo, dateString, laterDateString, user) {
  const challengeWinner = activityInfo.getChallengeListAndWinner(user, dateString, userRepo);
  friendChallengeListToday.insertAdjacentHTML("afterBegin", makeFriendChallengeHTML(id, challengeWinner));
  const stepStreak = activityInfo.getStreakDays(userRepo, id, 'numSteps');
  streakList.insertAdjacentHTML("afterBegin", makeStepStreakHTML(id, stepStreak));
  const minutesStreak = activityInfo.getStreakDays(userRepo, id, 'minutesActive');
  streakListMinutes.insertAdjacentHTML("afterBegin", makeStepStreakHTML(id, minutesStreak));
  const challengeList = activityInfo.getChallengeListAndWinner(user, dateString, userRepo);
  friendChallengeListHistory.insertAdjacentHTML("afterBegin", makeFriendChallengeHTML(id, challengeList));
  const winnerInfo = activityInfo.showcaseWinner(user, dateString, userRepo);
  bigWinner.insertAdjacentHTML('afterBegin', `THIS WEEK'S WINNER! ${winnerInfo} steps`);
}

function makeFriendChallengeHTML(id, relevantData) {
  const friendInfo = relevantData.map(friendChallengeData => `<li class="historical-list-listItem">Your friend ${friendChallengeData} average steps.</li>`).join('');
  return friendInfo
}

function makeStepStreakHTML(id, relevantData) {
  const streakInfo = relevantData.map(streakData => `<li class="historical-list-listItem">${streakData}!</li>`).join('');
  return streakInfo
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC1BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWx0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSHlkcmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9TbGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci1yZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzliZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9UaGUgUm9jay5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wZXJzb24gd2Fsa2luZyBvbiBwYXRoLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFF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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQThCO0FBQzlCLHVCQUF1QiwrQ0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVUsSUFBSSxtQkFBbUI7QUFDckY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUyxJQUFJLGVBQWU7QUFDNUMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHZSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDOUh4QjtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNrQjs7Ozs7Ozs7Ozs7OztBQzFGbEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDcEJ0QjtBQUFBO0FBQThCO0FBQzlCLHdCQUF3QiwrQ0FBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELFVBQVUsSUFBSSxlQUFlO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxVQUFVLElBQUksZUFBZTtBQUN4RTtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BCekI7QUFBQTtBQUE4QjtBQUM5QixvQkFBb0IsK0NBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsVUFBVSxJQUFJLGVBQWU7QUFDeEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR2Usb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQzVFckI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqR3hCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQnBCLGNBQWMsbUJBQU8sQ0FBQywrTUFBc0c7O0FBRTVILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMsaU5BQXVHOztBQUU3SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZix1Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ0M7O0FBRW1CO0FBQ2Q7O0FBRUw7QUFDUTtBQUNFO0FBQ1I7QUFDTzs7QUFFRTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbURBQVE7QUFDaEMseUJBQXlCLG1EQUFRO0FBQ2pDLDZCQUE2QixtREFBUTtBQUNyQyw0QkFBNEIsbURBQVE7O0FBRXBDO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQVE7QUFDekIsa0JBQWtCLDhDQUFLO0FBQ3ZCLHNCQUFzQixrREFBUztBQUMvQixxQkFBcUIsaURBQVE7QUFDN0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUVBQXVFLG1EQUFRO0FBQy9FLDJFQUEyRSxtREFBUTtBQUNuRiwwRUFBMEUsbURBQVE7O0FBRWxGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixjQUFjO0FBQ3hHOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRCxzREFBc0QsbUJBQW1CO0FBQ3pFLCtEQUErRCxvQ0FBb0M7QUFDbkc7QUFDQTtBQUNBLHVEQUF1RCxrQkFBa0I7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLFdBQVc7QUFDckc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkZBQTZGLFlBQVk7QUFDekc7QUFDQSxrSEFBa0gsY0FBYztBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkZBQTZGLFVBQVU7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLFdBQVc7QUFDckc7QUFDQSw4R0FBOEcsYUFBYTtBQUMzSDtBQUNBLDRIQUE0SCxvQkFBb0I7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGQUE4RixVQUFVO0FBQ3hHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtHQUErRyx1QkFBdUI7QUFDdEk7QUFDQSxvSEFBb0gsYUFBYTtBQUNqSTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBHQUEwRyxpQkFBaUI7QUFDM0g7QUFDQSxpSEFBaUgseUJBQXlCO0FBQzFJO0FBQ0EseUdBQXlHLFVBQVU7QUFDbkg7QUFDQSw4R0FBOEcseUJBQXlCO0FBQ3ZJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGLGFBQWEsR0FBRyxpQkFBaUI7QUFDdEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsV0FBVztBQUMvRTs7QUFFQTtBQUNBLGlIQUFpSCxvQkFBb0I7QUFDckk7QUFDQTs7QUFFQTtBQUNBLDRGQUE0RixXQUFXO0FBQ3ZHO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDRlNGY7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGhlaWdodDogODBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XFxuXFxuaW5wdXQge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDUwcHg7IH1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTUwMHB4OyB9XFxuICAubWFpbiAubWFpbi1zaWRlYmFyLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgLm1haW4gLm1haW4tc2lkZWJhci1ib2R5IC5ib2R5LXNpZGViYXItc2lkZWJhckNvbnRhaW5lciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlBOURBQjtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAgICAgLm1haW4gLm1haW4tc2lkZWJhci1ib2R5IC5ib2R5LXNpZGViYXItc2lkZWJhckNvbnRhaW5lciAuc2lkZWJhci1oZWFkZXItbmFtZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAubWFpbiAubWFpbi1zaWRlYmFyLWJvZHkgLmJvZHktc2lkZWJhci1zaWRlYmFyQ29udGFpbmVyIC5zaWRlYmFyLWhlYWRlci11c2VySW5mbyB7XFxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIG1hcmdpbjogLjVlbSAuNWVtIC41ZW0gLjVlbTtcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0OyB9XFxuICAgICAgLm1haW4gLm1haW4tc2lkZWJhci1ib2R5IC5ib2R5LXNpZGViYXItc2lkZWJhckNvbnRhaW5lciAuc2lkZWJhci1oZWFkZXItbGluZSB7XFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAgICAgICBtYXJnaW46IDFlbSAxZW0gMCAxZW07XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICB3aWR0aDogODAlOyB9XFxuICAgICAgLm1haW4gLm1haW4tc2lkZWJhci1ib2R5IC5ib2R5LXNpZGViYXItc2lkZWJhckNvbnRhaW5lciAuc2lkZWJhci1oZWFkZXItdXNlckltYWdlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgbWFyZ2luOiA0cHggMnB4IDJweCAycHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAgIC5tYWluIC5tYWluLXNpZGViYXItYm9keSAuYm9keS1zaWRlYmFyLXNpZGViYXJDb250YWluZXIgLnNpZGViYXItYm9keS1mcmllbmRDb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAgIC5tYWluIC5tYWluLXNpZGViYXItYm9keSAuYm9keS1zaWRlYmFyLXNpZGViYXJDb250YWluZXIgLnNpZGViYXItYm9keS1mcmllbmRDb250YWluZXIgLnNpZGViYXItZnJpZW5kQ29udGFpbmVyLWxpc3RJdGVtcyB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4uYm9keS1tYWluLWluZm9Db250YWludGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIG1hcmdpbjogMCAwIDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcbiAgLmJvZHktbWFpbi1pbmZvQ29udGFpbnRlciAubWFpbi1jb2x1bW4taHlkcmF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgLmJvZHktbWFpbi1pbmZvQ29udGFpbnRlciAubWFpbi1jb2x1bW4tYWN0aXZpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAuYm9keS1tYWluLWluZm9Db250YWludGVyIC5tYWluLWNvbHVtbi1zbGVlcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uaW5mb0NvbnRhaW5lci1jYXJkQ29udGFpbmVyLWNhcmQtaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLmhvcml6b250YWxDYXJkLWFjdGl2aXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLmluZm9Db250YWluZXItY2FyZENvbnRhaW5lci1jYXJkLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbjogMSU7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLmFjdGl2aXR5LWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5zbGVlcC1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uaHlkcmF0aW9uLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5jYXJkLXRvZGF5LWh5ZHJhdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDOEFDO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYXJkLXRvZGF5LXNsZWVwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQzk2QTQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNhcmQtdG9kYXktYWN0aXZpdHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTE2NjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMC4zZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2FyZC1oaXN0b3J5LWh5ZHJhdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDOEFDO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMC41ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2FyZC1oaXN0b3J5LXNsZWVwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQzk2QTQ7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYXJkLWhpc3RvcnktYWN0aXZpdHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTE2NjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLm51bWJlciB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogIzRkNGU0ZjtcXG4gIGZvbnQta2VybmluZzogbm9ybWFsOyB9XFxuXFxuLmhpc3RvcmljYWxXZWVrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbjogLjVlbTtcXG4gIGNvbG9yOiAjMDAwMDAwOyB9XFxuXFxuLnRoaXNXZWVrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbjogLjVlbTtcXG4gIGNvbG9yOiAjMDAwMDAwOyB9XFxuXFxuLmNhcmQtdmVydGljYWwtbGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxuLmhpc3RvcmljYWwtbGlzdC1saXN0SXRlbSB7XFxuICBwYWRkaW5nOiAuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoJztcbmNsYXNzIEFjdGl2aXR5IGV4dGVuZHMgSGVhbHRoIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuYWN0aXZpdHlEYXRhID0gZGF0YTtcbiAgfTtcblxuICBnZXREYWlseU1pbGVzKGlkLCBkYXRlLCB1c2VyUmVwbykge1xuICAgIGxldCB1c2VyU3RlcHNCeURhdGUgPSB0aGlzLmFjdGl2aXR5RGF0YS5maW5kKGRhdGEgPT4gaWQgPT09IGRhdGEudXNlcklEICYmIGRhdGUgPT09IGRhdGEuZGF0ZSk7XG4gICAgbGV0IHVzZXJSZXBvRGF0YSA9IHVzZXJSZXBvLnVzZXJzLmZpbmQodXNlciA9PiBpZCA9PT0gdXNlci5pZCk7XG4gICAgbGV0IG1pbGVzID0gcGFyc2VGbG9hdCgoKHVzZXJTdGVwc0J5RGF0ZS5udW1TdGVwcyAqIHVzZXJSZXBvRGF0YS5zdHJpZGVMZW5ndGgpIC8gNTI4MCkudG9GaXhlZCgxKSk7XG4gICAgcmV0dXJuIG1pbGVzO1xuICB9O1xuXG4gIGNhbGN1bGF0ZUFjdGl2ZVdlZWtseUF2ZXJhZ2UoaWQsIGRhdGUsIHVzZXJSZXBvKSB7XG4gICAgbGV0IHdlZWsgPSB1c2VyUmVwby5nZXRXZWVrQnlEYXRlKGRhdGUsIGlkLCB0aGlzLmFjdGl2aXR5RGF0YSk7XG4gICAgbGV0IHdlZWtBY3RpdmVNaW4gPSAgd2Vlay5yZWR1Y2UoKHN1bSwgdXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArPSB1c2VyLm1pbnV0ZXNBY3RpdmU7XG4gICAgfSwgMCk7XG4gICAgbGV0IGF2ZXJhZ2VBY3RpdmVXZWVrID0gcGFyc2VGbG9hdCgod2Vla0FjdGl2ZU1pbiAvIDcpLnRvRml4ZWQoMSkpO1xuICAgIHJldHVybiBhdmVyYWdlQWN0aXZlV2VlaztcbiAgfTtcblxuICBhY2NvbXBsaXNoU3RlcEdvYWwoaWQsIGRhdGUsIHVzZXJSZXBvKSB7XG4gICAgbGV0IHVzZXJBY3Rpdml0eURhdGEgPSB0aGlzLmFjdGl2aXR5RGF0YS5maW5kKGRhdGEgPT4gaWQgPT09IGRhdGEudXNlcklEICYmIGRhdGUgPT09IGRhdGEuZGF0ZSk7XG4gICAgbGV0IHVzZXJSZXBvRGF0YSA9IHVzZXJSZXBvLnVzZXJzLmZpbmQodXNlciA9PiBpZCA9PT0gdXNlci5pZCk7XG4gICAgbGV0IGdvYWxBY2NvbXBsaXNoZWQgPSB1c2VyQWN0aXZpdHlEYXRhLm51bVN0ZXBzID49IHVzZXJSZXBvRGF0YS5kYWlseVN0ZXBHb2FsO1xuICAgIHJldHVybiBnb2FsQWNjb21wbGlzaGVkO1xuICB9O1xuXG4gIGdldERheXNHb2FsRXhjZWVkZWQoaWQsIHVzZXJSZXBvKSB7XG4gICAgbGV0IHVzZXJSZXBvRGF0YSA9IHVzZXJSZXBvLnVzZXJzLmZpbmQodXNlciA9PiBpZCA9PT0gdXNlci5pZCk7XG4gICAgbGV0IGRheXNFeGNlZWRlZCA9IHRoaXMuYWN0aXZpdHlEYXRhLmZpbHRlcihkYXRhID0+IGlkID09PSBkYXRhLnVzZXJJRCAmJiBkYXRhLm51bVN0ZXBzID4gdXNlclJlcG9EYXRhLmRhaWx5U3RlcEdvYWwpO1xuICAgIGxldCBkYXRlcyA9IGRheXNFeGNlZWRlZC5tYXAoZGF0YSA9PiBkYXRhLmRhdGUpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfTtcblxuICBnZXRTdGFpclJlY29yZChpZCkge1xuICAgIGxldCB1c2VyQWN0aXZpdHlEYXRhID0gdGhpcy5hY3Rpdml0eURhdGEuZmlsdGVyKGRhdGEgPT4gaWQgPT09IGRhdGEudXNlcklEKTtcbiAgICBsZXQgdG90YWxTdGFpcnMgPSB1c2VyQWN0aXZpdHlEYXRhLnJlZHVjZSgoc3VtLCB1c2VyKSA9PiAodXNlci5mbGlnaHRzT2ZTdGFpcnMgPiBzdW0pID8gdXNlci5mbGlnaHRzT2ZTdGFpcnMgOiBzdW0sIDApO1xuICAgIHJldHVybiB0b3RhbFN0YWlycztcbiAgfTtcblxuICBnZXRBbGxVc2Vyc0F2ZXJhZ2VGb3JEYXkoZGF0ZSwgdXNlclJlcG8sIHJlbGV2YW50RGF0YSkge1xuICAgIGxldCBzZWxlY3RlZERheURhdGEgPSB1c2VyUmVwby5nZXREYXlEYXRhRm9yQWxsVXNlcnModGhpcy5hY3Rpdml0eURhdGEsIGRhdGUpO1xuICAgIGxldCBzdGFpcnNBdmVyYWdlID0gc2VsZWN0ZWREYXlEYXRhLnJlZHVjZSgoc3VtLCB1c2VyKSA9PiBzdW0gKz0gdXNlcltyZWxldmFudERhdGFdLCAwKSAvIHNlbGVjdGVkRGF5RGF0YS5sZW5ndGg7XG4gICAgbGV0IGZvcm1hdHRlZEF2ZXJhZ2UgPSBwYXJzZUZsb2F0KHN0YWlyc0F2ZXJhZ2UudG9GaXhlZCgxKSk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZEF2ZXJhZ2U7XG4gIH07XG5cbiAgZ2V0RGFpbHlVc2VyRGF0YShpZCwgZGF0ZSwgdXNlclJlcG8sIHJlbGV2YW50RGF0YSkge1xuICAgIGxldCB1c2VyRGF0YSA9IHVzZXJSZXBvLmdldERhdGFGcm9tVXNlcklEKGlkLCB0aGlzLmFjdGl2aXR5RGF0YSk7XG4gICAgbGV0IGRhdGFCeURhdGUgPSB1c2VyRGF0YS5maW5kKGRhdGEgPT4gZGF0YS5kYXRlID09PSBkYXRlKVtyZWxldmFudERhdGFdO1xuICAgIHJldHVybiBkYXRhQnlEYXRlO1xuICB9O1xuXG4gIGdldFdlZWtseVVzZXJEYXRhKGlkLCBkYXRlLCB1c2VyUmVwbywgcmVsZXZlbnREYXRhKSB7XG4gICAgbGV0IGRhdGFCeVdlZWsgPSB1c2VyUmVwby5nZXRXZWVrQnlEYXRlKGRhdGUsIGlkLCB0aGlzLmFjdGl2aXR5RGF0YSk7XG4gICAgbGV0IGZvcm1hdHRlZERhdGEgPSBkYXRhQnlXZWVrLm1hcCgoZGF0YSkgPT4gYCR7ZGF0YS5kYXRlfTogJHtkYXRhW3JlbGV2ZW50RGF0YV19YCk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGE7XG4gIH07XG5cbiAgLy8gRnJpZW5kc1xuXG4gIGdldEZyaWVuZHNBY3Rpdml0eURhdGEodXNlciwgdXNlclJlcG8pIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuYWN0aXZpdHlEYXRhO1xuICAgIGxldCB1c2VyRnJpZW5kcyA9IHVzZXIuZnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJSZXBvLmdldERhdGFGcm9tVXNlcklEKGZyaWVuZCwgZGF0YSlcbiAgICB9KTtcbiAgICBsZXQgdXNlckZyaWVuZHNEYXRhID0gdXNlckZyaWVuZHMuZmxhdCgpO1xuICAgIHJldHVybiB1c2VyRnJpZW5kc0RhdGE7XG4gIH07XG5cbiAgZ2V0RnJpZW5kc0F2ZXJhZ2VTdGVwc0ZvcldlZWsodXNlciwgZGF0ZSwgdXNlclJlcG8pIHtcbiAgICBsZXQgZnJpZW5kc0FjdGl2aXR5ID0gdGhpcy5nZXRGcmllbmRzQWN0aXZpdHlEYXRhKHVzZXIsIHVzZXJSZXBvKTtcbiAgICBsZXQgd2Vla0RhdGEgPSB1c2VyUmVwby5nZXRXZWVrRGF0YUZvckFsbFVzZXJzKGZyaWVuZHNBY3Rpdml0eSwgZGF0ZSk7XG4gICAgbGV0IHJhbmtlZEZyaWVuZHNBY3Rpdml0eSA9IHVzZXJSZXBvLmNvbWJpbmVSYW5rZWRVc2Vyc0FuZEF2ZXJhZ2VEYXRhKGZyaWVuZHNBY3Rpdml0eSwgZGF0ZSwgJ251bVN0ZXBzJywgd2Vla0RhdGEpO1xuICAgIHJldHVybiByYW5rZWRGcmllbmRzQWN0aXZpdHk7XG4gIH07XG5cbiAgZ2V0Q2hhbGxlbmdlTGlzdEFuZFdpbm5lcih1c2VyLCBkYXRlLCB1c2VyUmVwbykge1xuICAgIGxldCByYW5rZWRMaXN0ID0gdGhpcy5nZXRGcmllbmRzQXZlcmFnZVN0ZXBzRm9yV2Vlayh1c2VyLCBkYXRlLCB1c2VyUmVwbyk7XG4gICAgbGV0IHJhbmtlZEZyaWVuZHNBY3Rpdml0eSA9IHJhbmtlZExpc3QubWFwKChmcmllbmQpID0+IHtcbiAgICAgIGxldCB1c2VySUQgPSBPYmplY3Qua2V5cyhmcmllbmQpWzBdO1xuICAgICAgbGV0IHVzZXJOYW1lID0gdXNlclJlcG8uZ2V0VXNlckZyb21JRChwYXJzZUludCh1c2VySUQpKS5uYW1lO1xuICAgICAgcmV0dXJuIGAke3VzZXJOYW1lfTogJHtmcmllbmRbdXNlcklEXX1gO1xuICAgIH0pO1xuICAgIHJldHVybiByYW5rZWRGcmllbmRzQWN0aXZpdHk7XG4gIH07XG5cbiAgc2hvd2Nhc2VXaW5uZXIodXNlciwgZGF0ZSwgdXNlclJlcG8pIHtcbiAgICBsZXQgbmFtZWRMaXN0ID0gdGhpcy5nZXRDaGFsbGVuZ2VMaXN0QW5kV2lubmVyKHVzZXIsIGRhdGUsIHVzZXJSZXBvKTtcbiAgICBsZXQgd2lubmVyID0gdGhpcy5nZXRDaGFsbGVuZ2VMaXN0QW5kV2lubmVyKHVzZXIsIGRhdGUsIHVzZXJSZXBvKS5zaGlmdCgpO1xuICAgIHJldHVybiB3aW5uZXI7XG4gIH07XG5cbiAgZ2V0U3RyZWFrRGF5cyh1c2VyUmVwbywgaWQsIHJlbGV2YW50RGF0YSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5hY3Rpdml0eURhdGE7XG4gICAgbGV0IHNvcnRlZFVzZXJBcnJheSA9ICh1c2VyUmVwby5tYWtlU29ydGVkVXNlckFycmF5KGlkLCBkYXRhKSkucmV2ZXJzZSgpO1xuICAgIGxldCBzdHJlYWtzID0gc29ydGVkVXNlckFycmF5LnJlZHVjZSgoc3RyZWFrRGF5cywgY3VycmVudERheSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBxdWFsaWZ5aW5nRGF5ID0gdGhpcy5pc1F1YWxpZnlpbmdEYXkoc29ydGVkVXNlckFycmF5LCBpbmRleCwgcmVsZXZhbnREYXRhKTtcbiAgICAgIGlmIChxdWFsaWZ5aW5nRGF5KSB7XG4gICAgICAgIHN0cmVha0RheXMucHVzaChjdXJyZW50RGF5LmRhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cmVha0RheXM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBzdHJlYWtzO1xuICB9O1xuXG4gIGlzUXVhbGlmeWluZ0RheShzb3J0ZWRVc2VyQXJyYXksIGluZGV4LCByZWxldmFudERhdGEpIHtcbiAgICBpZiAoaW5kZXggPj0gMikge1xuICAgICAgcmV0dXJuIHNvcnRlZFVzZXJBcnJheVtpbmRleCAtIDJdW3JlbGV2YW50RGF0YV0gPCBzb3J0ZWRVc2VyQXJyYXlbaW5kZXggLSAxXVtyZWxldmFudERhdGFdICYmIHNvcnRlZFVzZXJBcnJheVtpbmRleCAtIDFdW3JlbGV2YW50RGF0YV0gPCBzb3J0ZWRVc2VyQXJyYXlbaW5kZXhdW3JlbGV2YW50RGF0YV1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGdldFdpbm5lcklkKHVzZXIsIGRhdGUsIHVzZXJSZXBvKSB7XG4gICAgbGV0IHJhbmtlZExpc3QgPSB0aGlzLmdldEZyaWVuZHNBdmVyYWdlU3RlcHNGb3JXZWVrKHVzZXIsIGRhdGUsIHVzZXJSZXBvKTtcbiAgICBsZXQga2V5c0xpc3QgPSByYW5rZWRMaXN0Lm1hcChmcmllbmQgPT4gT2JqZWN0LmtleXMoZnJpZW5kKSk7XG4gICAgbGV0IHdpbm5lcklEID0gcGFyc2VJbnQoa2V5c0xpc3RbMF0uam9pbignJykpO1xuICAgIHJldHVybiB3aW5uZXJJRDtcbiAgfTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eTtcbiIsImxldCBmZXRjaEFwaSA9IHtcblxuICBmZXRjaFVzZXJEYXRhKCkge1xuICAgIGxldCBmZXRjaGVkVXNlciA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvdXNlcnMvdXNlckRhdGEnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLnVzZXJEYXRhKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgIHJldHVybiBmZXRjaGVkVXNlcjtcbiAgfSxcbiAgZmV0Y2hTbGVlcERhdGEoKSB7XG4gICAgbGV0IGZldGNoZWRTbGVlcCA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvc2xlZXAvc2xlZXBEYXRhJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5zbGVlcERhdGEpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIGZldGNoZWRTbGVlcDtcbiAgfSxcbiAgZmV0Y2hIeWRyYXRpb25EYXRhKCkge1xuICAgIGxldCBmZXRjaGVkSHlkcmF0aW9uID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9maXRsaXQvMTkwOC9oeWRyYXRpb24vaHlkcmF0aW9uRGF0YScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuaHlkcmF0aW9uRGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG4gICAgICByZXR1cm4gZmV0Y2hlZEh5ZHJhdGlvbjtcbiAgfSxcbiAgZmV0Y2hBY3Rpdml0eURhdGEoKSB7XG4gICAgbGV0IGZldGNoZWRBY3Rpdml0eSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvYWN0aXZpdHkvYWN0aXZpdHlEYXRhJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5hY3Rpdml0eURhdGEpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIGZldGNoZWRBY3Rpdml0eTtcbiAgfSxcbiAgcG9zdFNsZWVwRGF0YSgpIHtcbiAgICBsZXQgbmV3RGF0YSA9IGJ1aWxkU2xlZXBPYmplY3QoKTtcbiAgICBsZXQgcG9zdFNsZWVwRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvc2xlZXAvc2xlZXBEYXRhJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuICB9LFxuICBidWlsZFNsZWVwT2JqZWN0KCkge1xuICAgIGxldCBuZXdEYXRhID0ge3VzZXJJRDogcGFyc2VJbnQoc2xlZXBJZEluZm8udmFsdWUpLFxuICAgIGRhdGU6IHNsZWVwRGF0ZUluZm8udmFsdWUsXG4gICAgaG91cnNTbGVwdDogcGFyc2VJbnQoc2xlZXBIb3Vyc1NsZXB0SW5mby52YWx1ZSksXG4gICAgc2xlZXBRdWFsaXR5OiBwYXJzZUludChzbGVlcFNsZWVwUXVhbGl0eUluZm8udmFsdWUpfTtcbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfSxcbiAgcG9zdEh5ZHJhdGlvbkRhdGEoKSB7XG4gICBsZXQgbmV3RGF0YSA9IGJ1aWxkSHlkcmF0aW9uT2JqZWN0KCk7XG4gICBsZXQgcG9zdFNsZWVwRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvaHlkcmF0aW9uL2h5ZHJhdGlvbkRhdGEnLCB7XG4gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICBoZWFkZXJzOiB7XG4gICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgIH0sXG4gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpXG4gICB9KVxuICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuIH0sXG4gYnVpbGRIeWRyYXRpb25PYmplY3QoKSB7XG4gICBsZXQgbmV3RGF0YSA9IHt1c2VySUQ6IHBhcnNlSW50KGh5ZHJhdGlvbklkSW5mby52YWx1ZSksXG4gICBkYXRlOiBoeWRyYXRpb25EYXRlSW5mby52YWx1ZSxcbiAgIG51bU91bmNlczogcGFyc2VJbnQoaHlkcmF0aW9uT3VuY2VzSW5mby52YWx1ZSksXG4gICB9O1xuICAgcmV0dXJuIG5ld0RhdGE7XG4gfSxcbiBwb3N0QWN0aXZpdHlEYXRhKCkge1xuICAgbGV0IG5ld0RhdGEgPSBidWlsZEFjdGl2aXR5T2JqZWN0KCk7XG4gICBsZXQgcG9zdFNsZWVwRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvYWN0aXZpdHkvYWN0aXZpdHlEYXRhJywge1xuICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgaGVhZGVyczoge1xuICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICB9LFxuICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdEYXRhKVxuICAgfSlcbiAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSlcbiB9LFxuIGJ1aWxkQWN0aXZpdHlPYmplY3QoKSB7XG4gICBsZXQgbmV3RGF0YSA9IHt1c2VySUQ6IHBhcnNlSW50KGFjdGl2aXR5SWRJbmZvLnZhbHVlKSxcbiAgIGRhdGU6IGFjdGl2aXR5RGF0ZUluZm8udmFsdWUsXG4gICBudW1TdGVwczogcGFyc2VJbnQoYWN0aXZpdHlOdW1TdGVwc0luZm8udmFsdWUpLFxuICAgbWludXRlc0FjdGl2ZTogcGFyc2VJbnQoYWN0aXZpdHlNaW5zQWN0aXZlSW5mby52YWx1ZSksXG4gICBmbGlnaHRzT2ZTdGFpcnM6IHBhcnNlSW50KGFjdGl2aXR5RmxpZ2h0c09mU3RhaXJzSW5mby52YWx1ZSl9O1xuICAgcmV0dXJuIG5ld0RhdGE7XG4gfVxuIFxufTtcbmV4cG9ydCB7ZmV0Y2hBcGl9O1xuIiwiY2xhc3MgSGVhbHRoIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgfVxuXG4gIGNhbGN1bGF0ZURhaWx5VG90YWwoaWQsIGRhdGUsIHByb3BlcnR5KSB7XG4gICAgbGV0IGZpbmREYXRhQnlEYXRlID0gdGhpcy5kYXRhLmZpbmQoKGRhdGEpID0+IGlkID09PSBkYXRhLnVzZXJJRCAmJiBkYXRlID09PSBkYXRhLmRhdGUpO1xuICAgIHJldHVybiBmaW5kRGF0YUJ5RGF0ZVtwcm9wZXJ0eV07XG4gIH1cblxuICBjYWxjdWxhdGVBdmVyYWdlKGlkLCBwcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhUGVyRGF5ID0gdGhpcy5kYXRhLmZpbHRlcigoZGF0YSkgPT4gaWQgPT09IGRhdGEudXNlcklEKTtcbiAgICBsZXQgdG90YWwgPSBkYXRhUGVyRGF5LnJlZHVjZSgoc3VtLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICs9IGRhdGFbcHJvcGVydHldO1xuICAgIH0sIDApO1xuICAgIGxldCBhdmVyYWdlUGVyRGF5ID0gdG90YWwgLyBkYXRhUGVyRGF5Lmxlbmd0aDtcbiAgICByZXR1cm4gYXZlcmFnZVBlckRheS50b0ZpeGVkKDEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aDtcbiIsImltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGgnO1xuY2xhc3MgSHlkcmF0aW9uIGV4dGVuZHMgSGVhbHRoe1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5oeWRyYXRpb25EYXRhID0gZGF0YTtcbiAgfTtcblxuICBjYWxjdWxhdGVGaXJzdFdlZWtPdW5jZXModXNlclJlcG8sIGlkKSB7XG4gICAgbGV0IGZpcnN0V2VlayA9IHVzZXJSZXBvLmdldEZpcnN0V2VlayhpZCwgdGhpcy5oeWRyYXRpb25EYXRhKTtcbiAgICBsZXQgZmlyc3RXZWVrT3VuY2VzID0gZmlyc3RXZWVrLm1hcCgoZGF0YSkgPT4gYCR7ZGF0YS5kYXRlfTogJHtkYXRhLm51bU91bmNlc31gKTtcbiAgICByZXR1cm4gZmlyc3RXZWVrT3VuY2VzO1xuICB9O1xuXG4gIGNhbGN1bGF0ZVJhbmRvbVdlZWtPdW5jZXMoZGF0ZSwgaWQsIHVzZXJSZXBvKSB7XG4gICAgbGV0IHdlZWsgPSB1c2VyUmVwby5nZXRXZWVrQnlEYXRlKGRhdGUsIGlkLCB0aGlzLmh5ZHJhdGlvbkRhdGEpO1xuICAgIGxldCB3ZWVrT3VuY2VzID0gd2Vlay5tYXAoKGRhdGEpID0+IGAke2RhdGEuZGF0ZX06ICR7ZGF0YS5udW1PdW5jZXN9YCk7XG4gICAgcmV0dXJuIHdlZWtPdW5jZXM7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIeWRyYXRpb247XG4iLCJpbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoJztcbmNsYXNzIFNsZWVwIGV4dGVuZHMgSGVhbHRoIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuc2xlZXBEYXRhID0gZGF0YTtcbiAgfTtcblxuICBjYWxjdWxhdGVXZWVrVG90YWwoZGF0ZSwgaWQsIHVzZXJSZXBvLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gdXNlclJlcG8uZ2V0V2Vla0J5RGF0ZShkYXRlLCBpZCwgdGhpcy5zbGVlcERhdGEpLm1hcCgoZGF0YSkgPT4gYCR7ZGF0YS5kYXRlfTogJHtkYXRhW3Byb3BlcnR5XX1gKTtcbn07XG5cbiAgY2FsY3VsYXRlQWxsVXNlclNsZWVwUXVhbGl0eSgpIHtcbiAgICBsZXQgdG90YWxTbGVlcFF1YWxpdHkgPSB0aGlzLnNsZWVwRGF0YS5yZWR1Y2UoKHN1bSwgdXNlcikgPT4ge1xuICAgICAgc3VtICs9IHVzZXIuc2xlZXBRdWFsaXR5O1xuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LCAwKVxuICAgIGxldCBhdmVyYWdlU2xlZXAgPSB0b3RhbFNsZWVwUXVhbGl0eSAvIHRoaXMuc2xlZXBEYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gYXZlcmFnZVNsZWVwO1xuICB9O1xuXG4gIGRldGVybWluZUJlc3RTbGVlcGVycyhkYXRlLCB1c2VyUmVwbykge1xuICAgIGxldCB3ZWVrRGF0YSA9IHVzZXJSZXBvLmdldFdlZWtEYXRhRm9yQWxsVXNlcnModGhpcy5zbGVlcERhdGEsIGRhdGUpO1xuICAgIGxldCB1c2VyU2xlZXBPYmplY3QgPSB1c2VyUmVwby5nZXRVc2VyQW5kUmVsZXZhbnREYXRhKHRoaXMuc2xlZXBEYXRhLCBkYXRlLCAnc2xlZXBRdWFsaXR5Jywgd2Vla0RhdGEpO1xuICAgIGxldCBiZXN0U2xlZXBlcnMgPSBPYmplY3Qua2V5cyh1c2VyU2xlZXBPYmplY3QpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVTbGVlcFF1YWxpdHlBdmVyYWdlKHVzZXJTbGVlcE9iamVjdFtrZXldKSA+IDM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJlc3RTbGVlcGVycy5tYXAoKHNsZWVwZXIpID0+IHtcbiAgICAgIHJldHVybiB1c2VyUmVwby5nZXRVc2VyRnJvbUlEKHBhcnNlSW50KHNsZWVwZXIpKS5uYW1lO1xuICAgIH0pO1xuICB9O1xuXG4gIGNhbGN1bGF0ZVNsZWVwUXVhbGl0eUF2ZXJhZ2Uoc2xlZXBRdWFsaXR5RGF0YSkge1xuICAgIGxldCBzbGVlcFF1YWxpdHlBdmVyYWdlID0gc2xlZXBRdWFsaXR5RGF0YS5yZWR1Y2UoKHN1bSwgc2xlZXBRdWFsaXR5VmFsdWUpID0+IHtcbiAgICAgIHN1bSArPSBzbGVlcFF1YWxpdHlWYWx1ZTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCk7XG4gICAgY29uc3QgYXZlcmFnZSA9IHNsZWVwUXVhbGl0eUF2ZXJhZ2UgLyBzbGVlcFF1YWxpdHlEYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gYXZlcmFnZTtcbiAgfTtcblxuICBkZXRlcm1pbmVTbGVlcFF1YWxpdHlXaW5uZXJGb3JXZWVrKGRhdGUsIHVzZXJSZXBvKSB7XG4gICAgbGV0IHdlZWtEYXRhID0gdXNlclJlcG8uZ2V0V2Vla0RhdGFGb3JBbGxVc2Vycyh0aGlzLnNsZWVwRGF0YSwgZGF0ZSk7XG4gICAgbGV0IHNsZWVwUmFua1dpdGhEYXRhID0gdXNlclJlcG8uY29tYmluZVJhbmtlZFVzZXJzQW5kQXZlcmFnZURhdGEodGhpcy5zbGVlcERhdGEsIGRhdGUsICdzbGVlcFF1YWxpdHknLCB3ZWVrRGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lubmVyTmFtZXNGcm9tTGlzdChzbGVlcFJhbmtXaXRoRGF0YSwgdXNlclJlcG8pO1xuICB9O1xuXG4gIGRldGVybWluZVNsZWVwSG91cnNXaW5uZXJGb3JEYXkoZGF0ZSwgdXNlclJlcG8pIHtcbiAgICBsZXQgZGF5RGF0YSA9IHVzZXJSZXBvLmdldERheURhdGFGb3JBbGxVc2Vycyh0aGlzLnNsZWVwRGF0YSwgZGF0ZSk7XG4gICAgbGV0IHNsZWVwUmFua1dpdGhEYXRhID0gdXNlclJlcG8uY29tYmluZVJhbmtlZFVzZXJzQW5kQXZlcmFnZURhdGEodGhpcy5zbGVlcERhdGEsIGRhdGUsICdob3Vyc1NsZXB0JywgZGF5RGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lubmVyTmFtZXNGcm9tTGlzdChzbGVlcFJhbmtXaXRoRGF0YSwgdXNlclJlcG8pO1xuICB9O1xuXG4gIGdldFdpbm5lck5hbWVzRnJvbUxpc3Qoc29ydGVkQXJyYXksIHVzZXJSZXBvKSB7XG4gICAgbGV0IGJlc3RTbGVlcGVycyA9IHRoaXMuZ2V0QmVzdFNsZWVwZXJzKHNvcnRlZEFycmF5KTtcbiAgICBsZXQgYmVzdFNsZWVwZXJJZHMgPSB0aGlzLmdldEJlc3RTbGVlcGVyc0lkcyhiZXN0U2xlZXBlcnMpO1xuICAgIHJldHVybiBiZXN0U2xlZXBlcklkcy5tYXAoKHNsZWVwTnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gdXNlclJlcG8uZ2V0VXNlckZyb21JRChwYXJzZUludChzbGVlcE51bWJlcikpLm5hbWU7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0QmVzdFNsZWVwZXJzKHNvcnRlZEFycmF5KSB7XG4gICAgbGV0IGJlc3RTbGVlcGVycyA9IHNvcnRlZEFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnRbT2JqZWN0LmtleXMoZWxlbWVudCldID09PSBPYmplY3QudmFsdWVzKHNvcnRlZEFycmF5WzBdKVswXVxuICAgIH0pO1xuICAgIHJldHVybiBiZXN0U2xlZXBlcnM7XG4gIH07XG5cbiAgZ2V0QmVzdFNsZWVwZXJzSWRzKGJlc3RTbGVlcGVycykge1xuICAgIGxldCBiZXN0U2xlZXBlcklkcyA9IGJlc3RTbGVlcGVycy5tYXAoKGJlc3RTbGVlcGVyKSA9PiB7XG4gICAgICByZXR1cm4gKE9iamVjdC5rZXlzKGJlc3RTbGVlcGVyKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJlc3RTbGVlcGVySWRzO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNsZWVwO1xuIiwiY2xhc3MgVXNlclJlcG8ge1xuICBjb25zdHJ1Y3Rvcih1c2Vycykge1xuICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgfTtcblxuICBnZXRVc2VyRnJvbUlEKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnMuZmluZCgodXNlcikgPT4gaWQgPT09IHVzZXIuaWQpO1xuICB9O1xuXG4gIGdldERhdGFGcm9tVXNlcklEKGlkLCBkYXRhU2V0KSB7XG4gICAgcmV0dXJuIGRhdGFTZXQuZmlsdGVyKCh1c2VyRGF0YSkgPT4gaWQgPT09IHVzZXJEYXRhLnVzZXJJRCk7XG4gIH07XG5cbiAgY2FsY3VsYXRlQXZlcmFnZVN0ZXBHb2FsKCkge1xuICAgIGNvbnN0IHRvdGFsU3RlcEdvYWwgPSB0aGlzLnVzZXJzLnJlZHVjZSgoc3VtLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICs9IGRhdGEuZGFpbHlTdGVwR29hbDtcbiAgICB9LCAwKTtcbiAgICBjb25zdCBhdmVyYWdlU3RlcHMgPSB0b3RhbFN0ZXBHb2FsIC8gdGhpcy51c2Vycy5sZW5ndGg7XG4gICAgcmV0dXJuIGF2ZXJhZ2VTdGVwcztcbiAgfTtcblxuICBtYWtlU29ydGVkVXNlckFycmF5KGlkLCBkYXRhU2V0KSB7XG4gICAgbGV0IHNlbGVjdGVkSUQgPSB0aGlzLmdldERhdGFGcm9tVXNlcklEKGlkLCBkYXRhU2V0KVxuICAgIGxldCBzb3J0ZWRCeURhdGUgPSBzZWxlY3RlZElELnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKTtcbiAgICByZXR1cm4gc29ydGVkQnlEYXRlO1xuICB9O1xuXG4gIGdldEN1cnJlbnREYXRlKGlkLCBkYXRhU2V0KSB7XG4gICAgcmV0dXJuIHRoaXMubWFrZVNvcnRlZFVzZXJBcnJheShpZCwgZGF0YVNldClbMF0uZGF0ZTtcbiAgfTtcblxuICBnZXRGaXJzdFdlZWsoaWQsIGRhdGFTZXQpIHtcbiAgICByZXR1cm4gdGhpcy5tYWtlU29ydGVkVXNlckFycmF5KGlkLCBkYXRhU2V0KS5zbGljZSgwLCA3KTtcbiAgfTtcblxuICBnZXRXZWVrQnlEYXRlKGRhdGUsIGlkLCBkYXRhU2V0KSB7XG4gICAgbGV0IHVzZXIgPSB0aGlzLm1ha2VTb3J0ZWRVc2VyQXJyYXkoaWQsIGRhdGFTZXQpLmZpbmQoKHNvcnRlZEl0ZW0pID0+IChzb3J0ZWRJdGVtLmRhdGUgPT09IGRhdGUpKTtcbiAgICBsZXQgZGF0ZUluZGV4ID0gdGhpcy5tYWtlU29ydGVkVXNlckFycmF5KGlkLCBkYXRhU2V0KS5pbmRleE9mKHVzZXIpO1xuICAgIGxldCB3ZWVrID0gdGhpcy5tYWtlU29ydGVkVXNlckFycmF5KGlkLCBkYXRhU2V0KS5zbGljZShkYXRlSW5kZXgsIGRhdGVJbmRleCArIDcpO1xuICAgIHJldHVybiB3ZWVrO1xuICB9O1xuXG4gIGdldFdlZWtEYXRhRm9yQWxsVXNlcnMoZGF0YVNldCwgZGF0ZSkge1xuICAgIGxldCBhbGxVc2VyRGF0YSA9IGRhdGFTZXQuZmlsdGVyKChkYXRhSXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChuZXcgRGF0ZShkYXRlKSkuc2V0RGF0ZSgobmV3IERhdGUoZGF0ZSkpLmdldERhdGUoKSAtIDcpIDw9IG5ldyBEYXRlKGRhdGFJdGVtLmRhdGUpICYmIG5ldyBEYXRlKGRhdGFJdGVtLmRhdGUpIDw9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGxVc2VyRGF0YTtcbiAgfTtcblxuICBnZXREYXlEYXRhRm9yQWxsVXNlcnMoZGF0YVNldCwgZGF0ZSkge1xuICAgIGxldCB1c2VyRGF0YSA9IGRhdGFTZXQuZmlsdGVyKChkYXRhSXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFJdGVtLmRhdGUgPT09IGRhdGVcbiAgICB9KTtcbiAgICByZXR1cm4gdXNlckRhdGE7XG4gIH07XG5cbiAgZ2V0VXNlckFuZFJlbGV2YW50RGF0YShkYXRhU2V0LCBkYXRlLCByZWxldmFudERhdGEsIHRpbWVsaW5lRGF0YSkge1xuICAgIGxldCB1c2VyRGF0YSA9IHRpbWVsaW5lRGF0YS5yZWR1Y2UoKHVzZXJPYmplY3QsIGRhdGFJdGVtKSA9PiB7XG4gICAgICBpZiAoIXVzZXJPYmplY3RbZGF0YUl0ZW0udXNlcklEXSkge1xuICAgICAgICB1c2VyT2JqZWN0W2RhdGFJdGVtLnVzZXJJRF0gPSBbZGF0YUl0ZW1bcmVsZXZhbnREYXRhXV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyT2JqZWN0W2RhdGFJdGVtLnVzZXJJRF0ucHVzaChkYXRhSXRlbVtyZWxldmFudERhdGFdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1c2VyT2JqZWN0O1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gdXNlckRhdGE7XG4gIH07XG5cbiAgcmFua1VzZXJzQnlEYXRhVmFsdWUoZGF0YVNldCwgZGF0ZSwgcmVsZXZhbnREYXRhLCB0aW1lbGluZURhdGEpIHtcbiAgICBsZXQgc29ydGVkT2JqZWN0S2V5cyA9IHRoaXMuZ2V0VXNlckFuZFJlbGV2YW50RGF0YShkYXRhU2V0LCBkYXRlLCByZWxldmFudERhdGEsIHRpbWVsaW5lRGF0YSk7XG4gICAgbGV0IGRhdGFWYWx1ZSA9IE9iamVjdC5rZXlzKHNvcnRlZE9iamVjdEtleXMpLnNvcnQoKGIsIGEpID0+IHtcbiAgICAgIHJldHVybiAodGhpcy5nZXRVc2VyQXZlcmFnZURhdGEoc29ydGVkT2JqZWN0S2V5c1thXSkpIC0gKHRoaXMuZ2V0VXNlckF2ZXJhZ2VEYXRhKHNvcnRlZE9iamVjdEtleXNbYl0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YVZhbHVlO1xuICB9O1xuXG4gIGdldFVzZXJBdmVyYWdlRGF0YShwcm9wZXJ0eVZhbHVlcykge1xuICAgIGNvbnN0IHRvdGFsVXNlckRhdGEgPSBwcm9wZXJ0eVZhbHVlcy5yZWR1Y2UoKHN1bSwgY3VycmVudERhdGEpID0+IHtcbiAgICAgIHN1bSArPSBjdXJyZW50RGF0YVxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LCAwKTtcbiAgICBjb25zdCBhdmVyYWdlID0gdG90YWxVc2VyRGF0YSAvIHByb3BlcnR5VmFsdWVzLmxlbmd0aDtcbiAgICByZXR1cm4gYXZlcmFnZTtcbiAgfTtcblxuICBjb21iaW5lUmFua2VkVXNlcnNBbmRBdmVyYWdlRGF0YShkYXRhU2V0LCBkYXRlLCByZWxldmFudERhdGEsIHRpbWVsaW5lRGF0YSkge1xuICAgIGxldCBzb3J0ZWRPYmplY3RLZXlzID0gdGhpcy5nZXRVc2VyQW5kUmVsZXZhbnREYXRhKGRhdGFTZXQsIGRhdGUsIHJlbGV2YW50RGF0YSwgdGltZWxpbmVEYXRhKTtcbiAgICBsZXQgcmFua2VkVXNlcnMgPSB0aGlzLnJhbmtVc2Vyc0J5RGF0YVZhbHVlKGRhdGFTZXQsIGRhdGUsIHJlbGV2YW50RGF0YSwgdGltZWxpbmVEYXRhKTtcbiAgICBsZXQgcmFua2VkVXNlcnNBbmRBdmVyYWdlcyA9IHJhbmtlZFVzZXJzLnJlZHVjZSgocmFua2VkQXZlcmFnZXMsIHVzZXIpID0+IHtcbiAgICAgIGxldCB1cGRhdGVkVXNlciA9IHtbdXNlcl0gOiB0aGlzLmdldFVzZXJBdmVyYWdlRGF0YShzb3J0ZWRPYmplY3RLZXlzW3VzZXJdKX1cbiAgICAgIHJhbmtlZEF2ZXJhZ2VzLnB1c2godXBkYXRlZFVzZXIpXG4gICAgICByZXR1cm4gcmFua2VkQXZlcmFnZXM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiByYW5rZWRVc2Vyc0FuZEF2ZXJhZ2VzO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmVwbztcbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGV0YWlscykge1xuICAgIHRoaXMuaWQgPSB1c2VyRGV0YWlscy5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyRGV0YWlscy5uYW1lO1xuICAgIHRoaXMuYWRkcmVzcyA9IHVzZXJEZXRhaWxzLmFkZHJlc3M7XG4gICAgdGhpcy5lbWFpbCA9IHVzZXJEZXRhaWxzLmVtYWlsO1xuICAgIHRoaXMuc3RyaWRlTGVuZ3RoID0gdXNlckRldGFpbHMuc3RyaWRlTGVuZ3RoO1xuICAgIHRoaXMuZGFpbHlTdGVwR29hbCA9IHVzZXJEZXRhaWxzLmRhaWx5U3RlcEdvYWw7XG4gICAgdGhpcy5mcmllbmRzID0gdXNlckRldGFpbHMuZnJpZW5kcztcbiAgfTtcblxuICBnZXRGaXJzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZS5zcGxpdCgnICcsIDEpLmpvaW4oKTtcbiAgfTtcblxuICBnZXRGcmllbmRzTmFtZXMoZGF0YVNldCkge1xuICAgIHJldHVybiB0aGlzLmZyaWVuZHMubWFwKChmcmllbmRJZCkgPT4gKGRhdGFTZXQuZ2V0VXNlckZyb21JRChmcmllbmRJZCkubmFtZSkpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvVGhlIFJvY2suanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9wZXJzb24gd2Fsa2luZyBvbiBwYXRoLmpwZ1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9pbWFnZXMvcGVyc29uIHdhbGtpbmcgb24gcGF0aC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9UaGUgUm9jay5qcGcnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IEFjdGl2aXR5IGZyb20gJy4vQWN0aXZpdHknO1xuaW1wb3J0IEh5ZHJhdGlvbiBmcm9tICcuL0h5ZHJhdGlvbic7XG5pbXBvcnQgU2xlZXAgZnJvbSAnLi9TbGVlcCc7XG5pbXBvcnQgVXNlclJlcG8gZnJvbSAnLi9Vc2VyLXJlcG8nO1xuXG5pbXBvcnQge2ZldGNoQXBpfSBmcm9tICcuL0ZldGNoLUFQSSc7XG5cbmxldCB1c2VyTGlzdDtcbmxldCB1c2VyUmVwbztcbmxldCBoeWRyYXRpb25SZXBvO1xubGV0IHNsZWVwUmVwbztcbmxldCBhY3Rpdml0eVJlcG87XG5cbmNvbnN0IGZldGNoZWRVc2VyRGF0YSA9IGZldGNoQXBpLmZldGNoVXNlckRhdGEoKTtcbmNvbnN0IGZldGNoZWRTbGVlcERhdGEgPSBmZXRjaEFwaS5mZXRjaFNsZWVwRGF0YSgpO1xuY29uc3QgZmV0Y2hlZEh5ZHJhdGlvbkRhdGEgPSBmZXRjaEFwaS5mZXRjaEh5ZHJhdGlvbkRhdGEoKTtcbmNvbnN0IGZldGNoZWRBY3Rpdml0eURhdGEgPSBmZXRjaEFwaS5mZXRjaEFjdGl2aXR5RGF0YSgpO1xuXG5Qcm9taXNlLmFsbChbZmV0Y2hlZFVzZXJEYXRhLCBmZXRjaGVkU2xlZXBEYXRhLCBmZXRjaGVkSHlkcmF0aW9uRGF0YSwgZmV0Y2hlZEFjdGl2aXR5RGF0YV0pLnRoZW4odmFsdWVzID0+IHtcbiAgdXNlckxpc3QgPSBjcmVhdGVVc2Vycyh2YWx1ZXNbMF0pO1xuICB1c2VyUmVwbyA9IG5ldyBVc2VyUmVwbyh1c2VyTGlzdCk7XG4gIHNsZWVwUmVwbyA9IG5ldyBTbGVlcCh2YWx1ZXNbMV0pO1xuICBoeWRyYXRpb25SZXBvID0gbmV3IEh5ZHJhdGlvbih2YWx1ZXNbMl0pO1xuICBhY3Rpdml0eVJlcG8gPSBuZXcgQWN0aXZpdHkodmFsdWVzWzNdKTtcbiAgc3RhcnRBcHAoKTtcbn0pO1xuXG5jb25zdCBzbGVlcElkSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGVlcC11c2VySUQtaW5wdXQnKTtcbmNvbnN0IHNsZWVwRGF0ZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xlZXAtZGF0ZS1pbnB1dCcpO1xuY29uc3Qgc2xlZXBIb3Vyc1NsZXB0SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGVlcC1ob3Vyc1NsZXB0LWlucHV0Jyk7XG5jb25zdCBzbGVlcFNsZWVwUXVhbGl0eUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xlZXAtc2xlZXBRdWFsaXR5LWlucHV0Jyk7XG5jb25zdCBoeWRyYXRpb25JZEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHlkcmF0aW9uLXVzZXJJRC1pbnB1dCcpO1xuY29uc3QgaHlkcmF0aW9uRGF0ZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHlkcmF0aW9uLWRhdGUtaW5wdXQnKTtcbmNvbnN0IGh5ZHJhdGlvbk91bmNlc0luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHlkcmF0aW9uLW91bmNlcy1pbnB1dCcpO1xuY29uc3QgYWN0aXZpdHlJZEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktdXNlcklELWlucHV0JylcbmNvbnN0IGFjdGl2aXR5RGF0ZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktZGF0ZS1pbnB1dCcpXG5jb25zdCBhY3Rpdml0eU51bVN0ZXBzSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0eS1udW1TdGVwcy1pbnB1dCcpXG5jb25zdCBhY3Rpdml0eU1pbnNBY3RpdmVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2aXR5LW1pbnNBY3RpdmUtaW5wdXQnKVxuY29uc3QgYWN0aXZpdHlGbGlnaHRzT2ZTdGFpcnNJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2aXR5LWZsaWdodHNPZlN0YWlycy1pbnB1dCcpXG5cbmNvbnN0IHNpZGViYXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXJVc2VyTmFtZScpO1xuY29uc3Qgc3RlcEdvYWxDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJTdGVwR29hbENhcmQnKTtcbmNvbnN0IGF2U3RlcEdvYWxDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2ZXJhZ2VTdGVwc0dvYWxDYXJkJyk7XG5jb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclRleHQnKTtcbmNvbnN0IHVzZXJBZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJBZGRyZXNzJyk7XG5jb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckVtYWlsJyk7XG5jb25zdCB1c2VyU3RyaWRlbGVuZ3RoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJTdHJpZGVsZW5ndGgnKTtcbmNvbnN0IGZyaWVuZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJpZW5kTGlzdCcpO1xuY29uc3QgaHlkcmF0aW9uVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHlkcmF0aW9uVG9kYXknKTtcbmNvbnN0IGh5ZHJhdGlvbkF2ZXJhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHlkcmF0aW9uQXZlcmFnZScpO1xuY29uc3QgaHlkcmF0aW9uVGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHlkcmF0aW9uVGhpc1dlZWsnKTtcbmNvbnN0IGh5ZHJhdGlvbkVhcmxpZXJXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h5ZHJhdGlvbkVhcmxpZXJXZWVrJyk7XG5jb25zdCBoaXN0b3JpY2FsV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXN0b3JpY2FsV2VlaycpO1xuY29uc3Qgc2xlZXBUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGVlcFRvZGF5Jyk7XG5jb25zdCBzbGVlcFF1YWxpdHlUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGVlcFF1YWxpdHlUb2RheScpO1xuY29uc3QgYXZVc2VyU2xlZXBRdWFsaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2VXNlclNsZWVwUXVhbGl0eScpO1xuY29uc3Qgc2xlZXBUaGlzV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGVlcFRoaXNXZWVrJyk7XG5jb25zdCBzbGVlcEVhcmxpZXJXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsZWVwRWFybGllcldlZWsnKTtcbmNvbnN0IGZyaWVuZENoYWxsZW5nZUxpc3RUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmllbmRDaGFsbGVuZ2VMaXN0VG9kYXknKTtcbmNvbnN0IGZyaWVuZENoYWxsZW5nZUxpc3RIaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyaWVuZENoYWxsZW5nZUxpc3RIaXN0b3J5Jyk7XG5jb25zdCBiaWdXaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnV2lubmVyJyk7XG5jb25zdCB1c2VyU3RlcHNUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyU3RlcHNUb2RheScpO1xuY29uc3QgYXZnU3RlcHNUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmdTdGVwc1RvZGF5Jyk7XG5jb25zdCB1c2VyU3RhaXJzVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlclN0YWlyc1RvZGF5Jyk7XG5jb25zdCBhdmdTdGFpcnNUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmdTdGFpcnNUb2RheScpO1xuY29uc3QgdXNlck1pbnV0ZXNUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTWludXRlc1RvZGF5Jyk7XG5jb25zdCBhdmdNaW51dGVzVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZnTWludXRlc1RvZGF5Jyk7XG5jb25zdCB1c2VyU3RlcHNUaGlzV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyU3RlcHNUaGlzV2VlaycpO1xuY29uc3QgdXNlclN0YWlyc1RoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJTdGFpcnNUaGlzV2VlaycpO1xuY29uc3QgdXNlck1pbnV0ZXNUaGlzV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTWludXRlc1RoaXNXZWVrJyk7XG5jb25zdCBiZXN0VXNlclN0ZXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jlc3RVc2VyU3RlcHMnKTtcbmNvbnN0IHN0cmVha0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyZWFrTGlzdCcpO1xuY29uc3Qgc3RyZWFrTGlzdE1pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyZWFrTGlzdE1pbnV0ZXMnKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXNsZWVwLWluZm8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoQXBpLnBvc3RTbGVlcERhdGEpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1oeWRyYXRpb24taW5mbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmV0Y2hBcGkucG9zdEh5ZHJhdGlvbkRhdGEpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1hY3Rpdml0eS1pbmZvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZXRjaEFwaS5wb3N0QWN0aXZpdHlEYXRhKTtcblxuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gIGdldEN1cnJlbnRJbmZvKCk7XG59O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50SW5mbygpIHtcbiAgY29uc3QgdXNlck5vd0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTApO1xuICBjb25zdCB1c2VyTm93ID0gdXNlclJlcG8uZ2V0VXNlckZyb21JRCh1c2VyTm93SWQpO1xuICBjb25zdCB0b2RheSA9IHVzZXJSZXBvLmdldEN1cnJlbnREYXRlKHVzZXJOb3dJZCwgaHlkcmF0aW9uUmVwby5oeWRyYXRpb25EYXRhKTtcbiAgY29uc3QgcmFuZG9tSGlzdG9yeSA9IGdldFJhbmRvbURhdGUodXNlclJlcG8sIHVzZXJOb3dJZCwgaHlkcmF0aW9uUmVwby5oeWRyYXRpb25EYXRhKTtcbiAgY29uc3Qgd2lubmVyTm93ID0gYWN0aXZpdHlSZXBvLmdldFdpbm5lcklkKHVzZXJOb3csIHRvZGF5LCB1c2VyUmVwbyk7XG4gIGRpc3BsYXlVc2VySW5mbyh1c2VyTm93LCB1c2VyTm93SWQsIHRvZGF5LCByYW5kb21IaXN0b3J5LCB3aW5uZXJOb3cpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJOb3csIHVzZXJOb3dJZCwgdG9kYXksIHJhbmRvbUhpc3RvcnksIHdpbm5lck5vdykge1xuICBhZGRJbmZvVG9TaWRlYmFyKHVzZXJOb3csIHVzZXJSZXBvKTtcbiAgYWRkSHlkcmF0aW9uSW5mbyh1c2VyTm93SWQsIGh5ZHJhdGlvblJlcG8sIHRvZGF5LCB1c2VyUmVwbywgcmFuZG9tSGlzdG9yeSk7XG4gIGFkZFNsZWVwSW5mbyh1c2VyTm93SWQsIHNsZWVwUmVwbywgdG9kYXksIHVzZXJSZXBvLCByYW5kb21IaXN0b3J5KTtcbiAgYWRkQWN0aXZpdHlJbmZvKHVzZXJOb3dJZCwgYWN0aXZpdHlSZXBvLCB0b2RheSwgdXNlclJlcG8sIHJhbmRvbUhpc3RvcnksIHVzZXJOb3csIHdpbm5lck5vdyk7XG4gIGFkZEZyaWVuZEdhbWVJbmZvKHVzZXJOb3dJZCwgYWN0aXZpdHlSZXBvLCB1c2VyUmVwbywgdG9kYXksIHJhbmRvbUhpc3RvcnksIHVzZXJOb3cpO1xuICBoaXN0b3JpY2FsV2Vlay5mb3JFYWNoKGluc3RhbmNlID0+IGluc3RhbmNlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIGBXZWVrIG9mICR7cmFuZG9tSGlzdG9yeX1gKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVVc2Vycyh1c2VyRGF0YSkge1xuICByZXR1cm4gdXNlckRhdGEucmVkdWNlKCh1c2VyTGlzdCwgdXNlckluZm8pID0+IHtcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHVzZXJJbmZvKTtcbiAgICB1c2VyTGlzdC5wdXNoKHVzZXIpO1xuICAgIHJldHVybiB1c2VyTGlzdDtcbiAgfSwgW10pXG59O1xuXG5mdW5jdGlvbiBhZGRJbmZvVG9TaWRlYmFyKHVzZXIsIHVzZXJSZXBvKSB7XG4gIHNpZGViYXJOYW1lLmlubmVyVGV4dCA9IHVzZXIubmFtZTtcbiAgaGVhZGVyVGV4dC5pbm5lclRleHQgPSBgJHt1c2VyLmdldEZpcnN0TmFtZSgpfSdzIEFjdGl2aXR5IFRyYWNrZXJgO1xuICBzdGVwR29hbENhcmQuaW5uZXJUZXh0ID0gYFlvdXIgZGFpbHkgc3RlcCBnb2FsIGlzICR7dXNlci5kYWlseVN0ZXBHb2FsfS5gO1xuICBhdlN0ZXBHb2FsQ2FyZC5pbm5lclRleHQgPSBgVGhlIGF2ZXJhZ2UgZGFpbHkgc3RlcCBnb2FsIGlzICR7dXNlclJlcG8uY2FsY3VsYXRlQXZlcmFnZVN0ZXBHb2FsKCl9LmA7XG4gIHVzZXJBZGRyZXNzLmlubmVyVGV4dCA9IHVzZXIuYWRkcmVzcztcbiAgdXNlckVtYWlsLmlubmVyVGV4dCA9IHVzZXIuZW1haWw7XG4gIHVzZXJTdHJpZGVsZW5ndGguaW5uZXJUZXh0ID0gYFlvdXIgc3RyaWRlbGVuZ3RoIGlzICR7dXNlci5zdHJpZGVMZW5ndGh9IG1ldGVycy5gO1xuICBmcmllbmRMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG1ha2VGcmllbmRIVE1MKHVzZXIsIHVzZXJSZXBvKSk7XG59O1xuXG5mdW5jdGlvbiBtYWtlRnJpZW5kSFRNTCh1c2VyLCB1c2VyUmVwbykge1xuICBjb25zdCBmcmllbmRzID0gdXNlci5nZXRGcmllbmRzTmFtZXModXNlclJlcG8pO1xuICBjb25zdCBjcmVhdGVGcmllbmRzID0gZnJpZW5kcy5tYXAoZnJpZW5kTmFtZSA9PiBgPGxpIGNsYXNzPSdoaXN0b3JpY2FsLWxpc3QtbGlzdEl0ZW0nPiR7ZnJpZW5kTmFtZX08L2xpPmApLmpvaW4oJycpO1xuICByZXR1cm4gY3JlYXRlRnJpZW5kcztcbn07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbURhdGUodXNlclJlcG8sIGlkLCBkYXRhU2V0KSB7XG4gIGxldCBzb3J0ZWRBcnJheSA9IHVzZXJSZXBvLm1ha2VTb3J0ZWRVc2VyQXJyYXkoaWQsIGRhdGFTZXQpO1xuICByZXR1cm4gc29ydGVkQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc29ydGVkQXJyYXkubGVuZ3RoICsgMSldLmRhdGVcbn07XG5cbmZ1bmN0aW9uIGFkZEh5ZHJhdGlvbkluZm8oaWQsIGh5ZHJhdGlvbkluZm8sIGRhdGVTdHJpbmcsIHVzZXJSZXBvLCBsYXRlckRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGFpbHlPdW5jZXMgPSBoeWRyYXRpb25JbmZvLmNhbGN1bGF0ZURhaWx5VG90YWwoaWQsIGRhdGVTdHJpbmcsICdudW1PdW5jZXMnKTtcbiAgaHlkcmF0aW9uVG9kYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgYDxwPllvdSBkcmFuazwvcD48cD48c3BhbiBjbGFzcz1cIm51bWJlclwiPiR7ZGFpbHlPdW5jZXN9PC9zcGFuPjwvcD48cD5veiB3YXRlciB0b2RheS48L3A+YCk7XG4gIGNvbnN0IGF2ZXJhZ2VPdW5jZXMgPSBoeWRyYXRpb25JbmZvLmNhbGN1bGF0ZUF2ZXJhZ2UoaWQsICdudW1PdW5jZXMnKTtcbiAgaHlkcmF0aW9uQXZlcmFnZS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBgPHA+WW91ciBhdmVyYWdlIHdhdGVyIGludGFrZSBpczwvcD48cD48c3BhbiBjbGFzcz1cIm51bWJlclwiPiR7YXZlcmFnZU91bmNlc308L3NwYW4+PC9wPiA8cD5veiBwZXIgZGF5LjwvcD5gKTtcbiAgY29uc3QgZmlyc3RXZWVrT3VuY2VzID0gaHlkcmF0aW9uSW5mby5jYWxjdWxhdGVGaXJzdFdlZWtPdW5jZXModXNlclJlcG8sIGlkKTtcbiAgaHlkcmF0aW9uVGhpc1dlZWsuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbWFrZUh5ZHJhdGlvbkhUTUwoaWQsIGh5ZHJhdGlvbkluZm8sIHVzZXJSZXBvLCBmaXJzdFdlZWtPdW5jZXMpKTtcbiAgY29uc3QgcmFuZG9tV2Vla091bmNlcyA9IGh5ZHJhdGlvbkluZm8uY2FsY3VsYXRlUmFuZG9tV2Vla091bmNlcyhsYXRlckRhdGVTdHJpbmcsIGlkLCB1c2VyUmVwbyk7XG4gIGh5ZHJhdGlvbkVhcmxpZXJXZWVrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG1ha2VIeWRyYXRpb25IVE1MKGlkLCBoeWRyYXRpb25JbmZvLCB1c2VyUmVwbywgcmFuZG9tV2Vla091bmNlcykpO1xufTtcblxuZnVuY3Rpb24gbWFrZUh5ZHJhdGlvbkhUTUwoaWQsIGh5ZHJhdGlvbkluZm8sIHVzZXJSZXBvLCByZWxldmFudERhdGEpIHtcbiAgY29uc3QgaHlkcmF0aW9uID0gcmVsZXZhbnREYXRhLm1hcChkcmlua0RhdGEgPT4gYDxsaSBjbGFzcz1cImhpc3RvcmljYWwtbGlzdC1saXN0SXRlbVwiPk9uICR7ZHJpbmtEYXRhfW96PC9saT5gKS5qb2luKCcnKTtcbiAgcmV0dXJuIGh5ZHJhdGlvbjtcbn07XG5cbmZ1bmN0aW9uIGFkZFNsZWVwSW5mbyhpZCwgc2xlZXBJbmZvLCBkYXRlU3RyaW5nLCB1c2VyUmVwbykge1xuICBjb25zdCBzbGVlcEhvdXJzID0gc2xlZXBJbmZvLmNhbGN1bGF0ZURhaWx5VG90YWwoaWQsIGRhdGVTdHJpbmcsICdob3Vyc1NsZXB0Jyk7XG4gIHNsZWVwVG9kYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCBgPHA+WW91IHNsZXB0PC9wPiA8cD48c3BhbiBjbGFzcz1cIm51bWJlclwiPiR7c2xlZXBIb3Vyc308L3NwYW4+PC9wPiA8cD5ob3VycyB0b2RheS48L3A+YCk7XG4gIGNvbnN0IHNsZWVwUXVhbGl0eSA9IHNsZWVwSW5mby5jYWxjdWxhdGVEYWlseVRvdGFsKGlkLCBkYXRlU3RyaW5nLCAnc2xlZXBRdWFsaXR5Jyk7XG4gIHNsZWVwUXVhbGl0eVRvZGF5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyQmVnaW5cIiwgYDxwPllvdXIgc2xlZXAgcXVhbGl0eSB3YXM8L3A+IDxwPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+JHtzbGVlcFF1YWxpdHl9PC9zcGFuPjwvcD48cD5vdXQgb2YgNS48L3A+YCk7XG4gIGNvbnN0IGF2ZXJhZ2VTbGVlcFF1YWxpdHkgPSBNYXRoLnJvdW5kKHNsZWVwSW5mby5jYWxjdWxhdGVBbGxVc2VyU2xlZXBRdWFsaXR5KCkgKjEwMCkvMTAwO1xuICBhdlVzZXJTbGVlcFF1YWxpdHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCBgPHA+VGhlIGF2ZXJhZ2UgdXNlcidzIHNsZWVwIHF1YWxpdHkgaXM8L3A+IDxwPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+JHthdmVyYWdlU2xlZXBRdWFsaXR5fTwvc3Bhbj48L3A+PHA+b3V0IG9mIDUuPC9wPmApO1xuICBjb25zdCB3ZWVrU2xlZXBUb3RhbCA9IHNsZWVwSW5mby5jYWxjdWxhdGVXZWVrVG90YWwoZGF0ZVN0cmluZywgaWQsIHVzZXJSZXBvLCAnaG91cnNTbGVwdCcpO1xuICBzbGVlcFRoaXNXZWVrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG1ha2VTbGVlcEhUTUwoaWQsIHNsZWVwSW5mbywgdXNlclJlcG8sIHdlZWtTbGVlcFRvdGFsKSk7XG4gIGNvbnN0IHdlZWtTbGVlcFF1YWxpdHkgPSBzbGVlcEluZm8uY2FsY3VsYXRlV2Vla1RvdGFsKGRhdGVTdHJpbmcsIGlkLCB1c2VyUmVwbywgJ3NsZWVwUXVhbGl0eScpO1xuICBzbGVlcEVhcmxpZXJXZWVrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG1ha2VTbGVlcEhUTUwoaWQsIHNsZWVwSW5mbywgdXNlclJlcG8sIHdlZWtTbGVlcFF1YWxpdHkpKTtcbn1cblxuZnVuY3Rpb24gbWFrZVNsZWVwSFRNTChpZCwgc2xlZXBJbmZvLCB1c2VyUmVwbywgcmVsZXZhbnREYXRhKSB7XG4gIGNvbnN0IHNsZWVwSG91cnMgPSByZWxldmFudERhdGEubWFwKHNsZWVwRGF0YSA9PiBgPGxpIGNsYXNzPVwiaGlzdG9yaWNhbC1saXN0LWxpc3RJdGVtXCI+T24gJHtzbGVlcERhdGF9IGhvdXJzPC9saT5gKS5qb2luKCcnKTtcbiAgcmV0dXJuIHNsZWVwSG91cnM7XG59XG5cbmZ1bmN0aW9uIGFkZEFjdGl2aXR5SW5mbyhpZCwgYWN0aXZpdHlJbmZvLCBkYXRlU3RyaW5nLCB1c2VyUmVwbywgd2lubmVySWQsIHVzZXIpIHtcbiAgY29uc3QgdXNlckRhaWx5QWN0aXZlTWludXRlcyA9IGFjdGl2aXR5SW5mby5nZXREYWlseVVzZXJEYXRhKGlkLCBkYXRlU3RyaW5nLCB1c2VyUmVwbywgJ21pbnV0ZXNBY3RpdmUnKTtcbiAgdXNlck1pbnV0ZXNUb2RheS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIGA8cD5BY3RpdmUgTWludXRlczo8L3A+PHA+WW91PC9wPjxwPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+JHt1c2VyRGFpbHlBY3RpdmVNaW51dGVzfTwvc3Bhbj48L3A+YCk7XG4gIGNvbnN0IHVzZXJzQXZlcmFnZSA9IGFjdGl2aXR5SW5mby5nZXRBbGxVc2Vyc0F2ZXJhZ2VGb3JEYXkoZGF0ZVN0cmluZywgdXNlclJlcG8sICdtaW51dGVzQWN0aXZlJyk7XG4gIGF2Z01pbnV0ZXNUb2RheS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIGA8cD5BY3RpdmUgTWludXRlczo8L3A+PHA+QWxsIFVzZXJzPC9wPjxwPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+JHt1c2Vyc0F2ZXJhZ2V9PC9zcGFuPjwvcD5gKTtcbiAgY3JlYXRlRGFpbHlBY3Rpdml0eURhdGEoaWQsIGFjdGl2aXR5SW5mbywgZGF0ZVN0cmluZywgdXNlclJlcG8pO1xuICBjcmVhdGVXZWVrbHlBY3Rpdml0eURhdGEoaWQsIGFjdGl2aXR5SW5mbywgZGF0ZVN0cmluZywgdXNlclJlcG8sIHdpbm5lcklkLCB1c2VyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFpbHlBY3Rpdml0eURhdGEoaWQsIGFjdGl2aXR5SW5mbywgZGF0ZVN0cmluZywgdXNlclJlcG8pIHtcbiAgY29uc3QgdXNlckRhaWx5RmxpZ2h0cyA9IGFjdGl2aXR5SW5mby5nZXREYWlseVVzZXJEYXRhKGlkLCBkYXRlU3RyaW5nLCB1c2VyUmVwbywgJ2ZsaWdodHNPZlN0YWlycycpO1xuICB1c2VyU3RhaXJzVG9kYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCBgPHA+U3RhaXIgQ291bnQ6PC9wPjxwPllvdTwvPjxwPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+JHt1c2VyRGFpbHlGbGlnaHRzfTwvc3Bhbj48L3A+YCk7XG4gIGNvbnN0IHVzZXJzQXZlcmFnZURhaWx5RmxpZ2h0cyA9IGFjdGl2aXR5SW5mby5nZXRBbGxVc2Vyc0F2ZXJhZ2VGb3JEYXkoZGF0ZVN0cmluZywgdXNlclJlcG8sICdmbGlnaHRzT2ZTdGFpcnMnKTtcbiAgYXZnU3RhaXJzVG9kYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCBgPHA+U3RhaXIgQ291bnQ6IDwvcD48cD5BbGwgVXNlcnM8L3A+PHA+PHNwYW4gY2xhc3M9XCJudW1iZXJcIj4ke3VzZXJzQXZlcmFnZURhaWx5RmxpZ2h0c308L3NwYW4+PC9wPmApO1xuICBjb25zdCB1c2VyU3RlcHMgPSBhY3Rpdml0eUluZm8uZ2V0RGFpbHlVc2VyRGF0YShpZCwgZGF0ZVN0cmluZywgdXNlclJlcG8sICdudW1TdGVwcycpO1xuICB1c2VyU3RlcHNUb2RheS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIGA8cD5TdGVwIENvdW50OjwvcD48cD5Zb3U8L3A+PHA+PHNwYW4gY2xhc3M9XCJudW1iZXJcIj4ke3VzZXJTdGVwc308L3NwYW4+PC9wPmApO1xuICBjb25zdCB1c2Vyc0F2ZXJhZ2VEYWlseVN0ZXBzID0gYWN0aXZpdHlJbmZvLmdldEFsbFVzZXJzQXZlcmFnZUZvckRheShkYXRlU3RyaW5nLCB1c2VyUmVwbywgJ251bVN0ZXBzJyk7XG4gIGF2Z1N0ZXBzVG9kYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCBgPHA+U3RlcCBDb3VudDo8L3A+PHA+QWxsIFVzZXJzPC9wPjxwPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+JHt1c2Vyc0F2ZXJhZ2VEYWlseUZsaWdodHN9PC9zcGFuPjwvcD5gKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5QWN0aXZpdHlEYXRhKGlkLCBhY3Rpdml0eUluZm8sIGRhdGVTdHJpbmcsIHVzZXJSZXBvLCB3aW5uZXJJZCwgdXNlcikge1xuICBjb25zdCB3ZWVrbHlTdGVwcyA9IG1ha2VBY3Rpdml0eUhUTUwoYWN0aXZpdHlJbmZvLmdldFdlZWtseVVzZXJEYXRhKGlkLCBkYXRlU3RyaW5nLCB1c2VyUmVwbywgXCJudW1TdGVwc1wiKSwgXCJzdGVwc1wiKTtcbiAgdXNlclN0ZXBzVGhpc1dlZWsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCB3ZWVrbHlTdGVwcyk7XG4gIGNvbnN0IHdlZWtseUZsaWdodHMgPSBtYWtlQWN0aXZpdHlIVE1MKGFjdGl2aXR5SW5mby5nZXRXZWVrbHlVc2VyRGF0YShpZCwgZGF0ZVN0cmluZywgdXNlclJlcG8sIFwiZmxpZ2h0c09mU3RhaXJzXCIpLCBcImZsaWdodHNcIik7XG4gIHVzZXJTdGFpcnNUaGlzV2Vlay5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIHdlZWtseUZsaWdodHMpO1xuICBjb25zdCBtaW51dGVzQWN0aXZlID0gbWFrZUFjdGl2aXR5SFRNTChhY3Rpdml0eUluZm8uZ2V0V2Vla2x5VXNlckRhdGEoaWQsIGRhdGVTdHJpbmcsIHVzZXJSZXBvLCBcIm1pbnV0ZXNBY3RpdmVcIiksIFwibWludXRlc1wiKTtcbiAgdXNlck1pbnV0ZXNUaGlzV2Vlay5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIG1pbnV0ZXNBY3RpdmUpO1xuICBjb25zdCBiZXN0U3RlcHMgPSBtYWtlQWN0aXZpdHlIVE1MKGFjdGl2aXR5SW5mby5nZXRXZWVrbHlVc2VyRGF0YSh3aW5uZXJJZCwgZGF0ZVN0cmluZywgdXNlclJlcG8sIFwibnVtU3RlcHNcIiksICdzdGVwcycpO1xuICBiZXN0VXNlclN0ZXBzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyQmVnaW5cIiwgYmVzdFN0ZXBzKTtcbn1cblxuZnVuY3Rpb24gbWFrZUFjdGl2aXR5SFRNTChyZWxldmFudERhdGEsIHJlbGV2YW50RGF0YU5hbWUpIHtcbiAgcmV0dXJuIHJlbGV2YW50RGF0YS5tYXAoYWN0aXZpdHlEYXRhID0+IGA8bGkgY2xhc3M9XCJoaXN0b3JpY2FsLWxpc3QtbGlzdEl0ZW1cIj5PbiAke2FjdGl2aXR5RGF0YX0gJHtyZWxldmFudERhdGFOYW1lfTwvbGk+YCkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGFkZEZyaWVuZEdhbWVJbmZvKGlkLCBhY3Rpdml0eUluZm8sIHVzZXJSZXBvLCBkYXRlU3RyaW5nLCBsYXRlckRhdGVTdHJpbmcsIHVzZXIpIHtcbiAgY29uc3QgY2hhbGxlbmdlV2lubmVyID0gYWN0aXZpdHlJbmZvLmdldENoYWxsZW5nZUxpc3RBbmRXaW5uZXIodXNlciwgZGF0ZVN0cmluZywgdXNlclJlcG8pO1xuICBmcmllbmRDaGFsbGVuZ2VMaXN0VG9kYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJCZWdpblwiLCBtYWtlRnJpZW5kQ2hhbGxlbmdlSFRNTChpZCwgY2hhbGxlbmdlV2lubmVyKSk7XG4gIGNvbnN0IHN0ZXBTdHJlYWsgPSBhY3Rpdml0eUluZm8uZ2V0U3RyZWFrRGF5cyh1c2VyUmVwbywgaWQsICdudW1TdGVwcycpO1xuICBzdHJlYWtMaXN0Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyQmVnaW5cIiwgbWFrZVN0ZXBTdHJlYWtIVE1MKGlkLCBzdGVwU3RyZWFrKSk7XG4gIGNvbnN0IG1pbnV0ZXNTdHJlYWsgPSBhY3Rpdml0eUluZm8uZ2V0U3RyZWFrRGF5cyh1c2VyUmVwbywgaWQsICdtaW51dGVzQWN0aXZlJyk7XG4gIHN0cmVha0xpc3RNaW51dGVzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyQmVnaW5cIiwgbWFrZVN0ZXBTdHJlYWtIVE1MKGlkLCBtaW51dGVzU3RyZWFrKSk7XG4gIGNvbnN0IGNoYWxsZW5nZUxpc3QgPSBhY3Rpdml0eUluZm8uZ2V0Q2hhbGxlbmdlTGlzdEFuZFdpbm5lcih1c2VyLCBkYXRlU3RyaW5nLCB1c2VyUmVwbyk7XG4gIGZyaWVuZENoYWxsZW5nZUxpc3RIaXN0b3J5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyQmVnaW5cIiwgbWFrZUZyaWVuZENoYWxsZW5nZUhUTUwoaWQsIGNoYWxsZW5nZUxpc3QpKTtcbiAgY29uc3Qgd2lubmVySW5mbyA9IGFjdGl2aXR5SW5mby5zaG93Y2FzZVdpbm5lcih1c2VyLCBkYXRlU3RyaW5nLCB1c2VyUmVwbyk7XG4gIGJpZ1dpbm5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBgVEhJUyBXRUVLJ1MgV0lOTkVSISAke3dpbm5lckluZm99IHN0ZXBzYCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGcmllbmRDaGFsbGVuZ2VIVE1MKGlkLCByZWxldmFudERhdGEpIHtcbiAgY29uc3QgZnJpZW5kSW5mbyA9IHJlbGV2YW50RGF0YS5tYXAoZnJpZW5kQ2hhbGxlbmdlRGF0YSA9PiBgPGxpIGNsYXNzPVwiaGlzdG9yaWNhbC1saXN0LWxpc3RJdGVtXCI+WW91ciBmcmllbmQgJHtmcmllbmRDaGFsbGVuZ2VEYXRhfSBhdmVyYWdlIHN0ZXBzLjwvbGk+YCkuam9pbignJyk7XG4gIHJldHVybiBmcmllbmRJbmZvXG59XG5cbmZ1bmN0aW9uIG1ha2VTdGVwU3RyZWFrSFRNTChpZCwgcmVsZXZhbnREYXRhKSB7XG4gIGNvbnN0IHN0cmVha0luZm8gPSByZWxldmFudERhdGEubWFwKHN0cmVha0RhdGEgPT4gYDxsaSBjbGFzcz1cImhpc3RvcmljYWwtbGlzdC1saXN0SXRlbVwiPiR7c3RyZWFrRGF0YX0hPC9saT5gKS5qb2luKCcnKTtcbiAgcmV0dXJuIHN0cmVha0luZm9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=