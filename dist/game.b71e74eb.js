// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _uiCreation = require("./UI/UI_Creation");
var _uiCreationDefault = parcelHelpers.interopDefault(_uiCreation);
customElements.define("game-creation", (0, _uiCreationDefault.default));

},{"./UI/UI_Creation":"fGoP4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGoP4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _board = require("../Board");
var _uiBoard = require("./UI_Board");
var _uiBoardDefault = parcelHelpers.interopDefault(_uiBoard);
var _game = require("../Game");
var _uiInfos = require("./UI_Infos");
var _uiInfosDefault = parcelHelpers.interopDefault(_uiInfos);
class UI_Creation extends HTMLElement {
    connectedCallback() {
        const submitButton = document.querySelector(".validate-button");
        submitButton.addEventListener("click", ()=>{
            this.createGame();
        });
    }
    constructor(){
        super();
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        // Tailwind
        overlay.classList.add("flex", "h-screen", "w-screen", "bg-black", "bg-opacity-50", "backdrop-blur-lg", "z-0");
        const container = document.createElement("div");
        container.classList.add("form-container");
        // Tailwind
        container.classList.add("container", "relative", "flex", "flex-col", "justify-center", "items-center", "m-auto", "w-full", "sm:w-1/2", "h-fit", "sm:h-1/2", "bg-white", "shadow-sm", "rounded-md");
        const title = document.createElement("h1");
        title.classList.add("creation-title");
        title.appendChild(document.createTextNode("Cr\xe9er une partie"));
        //Tailwind
        title.classList.add("text-3xl", "font-bold", "absolute", "top-3");
        const player1Input = document.createElement("input");
        player1Input.classList.add("player1-input");
        player1Input.setAttribute("value", "Joueur 1");
        // Tailwind
        player1Input.classList.add("pl-1", "border", "rounded-md", "text-slate-600", "border-slate-300", "h-10", "shadow-sm", "w-1/2", "mr-2");
        const player2Input = document.createElement("input");
        player2Input.classList.add("player2-input");
        player2Input.setAttribute("value", "Joueur 2");
        // Tailwind
        player2Input.classList.add("pl-1", "border", "rounded-md", "text-slate-600", "border-slate-300", "h-10", "shadow-sm", "w-1/2", "ml-2");
        const validateButton = document.createElement("button");
        validateButton.classList.add("validate-button");
        validateButton.appendChild(document.createTextNode("Valider"));
        // Tailwind
        validateButton.classList.add("absolute", "bottom-5", "h-10", "w-2/4", "bg-blue-600", "text-white", "rounded-md", "hover:bg-blue-700", "active:bg-blue-800", "shadow-md", "hover:shadow-lg");
        const inputsContainer = document.createElement("div");
        inputsContainer.classList.add("inputs-container");
        inputsContainer.appendChild(player1Input);
        inputsContainer.appendChild(player2Input);
        // Tailwind
        inputsContainer.classList.add("w-3/4", "mb-5", "mt-16", "sm:mt-0", "flex", "flex-row", "justify-between");
        const sizeLabel = document.createElement("label");
        sizeLabel.appendChild(document.createTextNode("Taille de la grille :"));
        const sizeInput = document.createElement("input");
        sizeInput.classList.add("size-input");
        sizeInput.setAttribute("type", "number");
        sizeInput.setAttribute("value", "5");
        sizeInput.setAttribute("min", "4");
        sizeInput.setAttribute("max", "20");
        // Tailwind
        sizeInput.classList.add("h-10", "w-1/4", "border", "rounded-md", "border-slate-300", "pl-1", "text-slate-600", "mb-20", "sm:mb-0");
        container.appendChild(title);
        container.appendChild(inputsContainer);
        container.appendChild(sizeLabel);
        container.appendChild(sizeInput);
        container.appendChild(validateButton);
        overlay.appendChild(container);
        this.appendChild(overlay);
    }
    createGame() {
        const sizeInput = document.querySelector(".size-input");
        const boardSize = parseInt(sizeInput.value);
        const board = new (0, _board.Board)(boardSize, boardSize);
        const player1 = document.querySelector(".player1-input");
        const p1_name = player1.value;
        const player2 = document.querySelector(".player2-input");
        const p2_name = player2.value;
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
        const ui_board = document.createElement("game-board");
        ui_board.setAttribute("board-width", boardSize.toString());
        ui_board.setAttribute("board-height", boardSize.toString());
        document.querySelector(".app").appendChild(ui_board);
        customElements.define("game-board", (0, _uiBoardDefault.default));
        const game = new (0, _game.Game)(board, p1_name, p2_name);
        (0, _uiBoardDefault.default).prototype.game = game;
        (0, _uiInfosDefault.default).prototype.game = game;
        const ui_infos = document.createElement("game-infos");
        customElements.define("game-infos", (0, _uiInfosDefault.default));
        document.querySelector(".app").appendChild(ui_infos);
    }
}
exports.default = UI_Creation;

},{"../Board":"4daYq","./UI_Board":"jFBjG","../Game":"TyEjs","./UI_Infos":"7zNnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4daYq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Board", ()=>Board);
class Board {
    constructor(width, height){
        this.board = [];
        this.height = height;
        this.width = width;
        for(let i = 0; i < height; i++){
            let line = [];
            for(let j = 0; j < width; j++)line.push({
                owner: null,
                linesOwners: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null
                }
            });
            this.board.push(line);
        }
    }
    setSquareOwner(x, y, name) {
        this.board[y][x].owner = name;
    }
    setLineOwner(x, y, direction, name) {
        switch(direction){
            case "right":
                this.board[y][x].linesOwners.right = name;
                if (x < this.width - 1) this.board[y][x + 1].linesOwners.left = name;
                break;
            case "left":
                this.board[y][x].linesOwners.left = name;
                if (x > 0) this.board[y][x - 1].linesOwners.right = name;
                break;
            case "top":
                this.board[y][x].linesOwners.top = name;
                if (y > 0) this.board[y - 1][x].linesOwners.bottom = name;
                break;
            case "bottom":
                this.board[y][x].linesOwners.bottom = name;
                if (y < this.height - 1) this.board[y + 1][x].linesOwners.top = name;
                break;
        }
    }
    printBoard() {
        let str = "";
        for(let i = 0; i < this.height; i++){
            for(let j = 0; j < this.width; j++)if (j == 0) str += "\u25A1 ";
            else str += " \u25A1 ";
            str += "\n";
        }
        console.log(str);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jFBjG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiEnd = require("./UI_End");
var _uiEndDefault = parcelHelpers.interopDefault(_uiEnd);
class UI_Board extends HTMLElement {
    get board_height() {
        if (this.hasAttribute("board-height")) return parseInt(this.getAttribute("board-height"));
        else return 10;
    }
    get board_width() {
        if (this.hasAttribute("board-width")) return parseInt(this.getAttribute("board-width"));
        else return 10;
    }
    connectedCallback() {
        const boxes = document.getElementsByTagName("td");
        for(let i = 0; i < boxes.length; i++)[
            "left",
            "right",
            "top",
            "bottom"
        ].forEach((dir)=>{
            const hitbox = boxes[i].querySelector(".hitbox-" + dir);
            hitbox.addEventListener("mouseenter", ()=>{
                this.interractLine(Array.from(boxes[i].parentNode.children).indexOf(boxes[i]), Array.from(boxes[i].parentNode.parentNode.children).indexOf(boxes[i].parentElement), dir, "select", this.game.players[this.game.currentPlayer].color);
            });
            hitbox.addEventListener("mouseleave", ()=>{
                this.interractLine(Array.from(boxes[i].parentNode.children).indexOf(boxes[i]), Array.from(boxes[i].parentNode.parentNode.children).indexOf(boxes[i].parentElement), dir, "reset");
            });
            hitbox.addEventListener("click", ()=>{
                const x = Array.from(boxes[i].parentNode.children).indexOf(boxes[i]);
                const y = Array.from(boxes[i].parentNode.parentNode.children).indexOf(boxes[i].parentElement);
                const currentPlayer = this.game.players[this.game.currentPlayer];
                this.interractLine(x, y, dir, "click", currentPlayer.color);
                const xy = this.game.playTurn(x, y, dir);
                const infos = document.querySelector("game-infos");
                infos.updateScore();
                if (xy != []) for(let k = 0; k < xy.length; k++)this.setBgColor(xy[k][0], xy[k][1], currentPlayer.color);
                if (this.game.isGameFinished()) {
                    const endScreen = document.createElement("end-screen");
                    document.querySelector(".app").appendChild(endScreen);
                    customElements.define("end-screen", (0, _uiEndDefault.default));
                    (0, _uiEndDefault.default).prototype.setWinner(this.game.getWinner());
                }
            });
        });
    }
    constructor(){
        super();
        const body = document.createElement("tbody");
        for(let i = 0; i < this.board_height; i++){
            const line = document.createElement("tr");
            for(let j = 0; j < this.board_width; j++){
                // Create dot elements
                const dot_top_right = document.createElement("span");
                dot_top_right.className = "dot dot-top-right";
                const dot_top_left = document.createElement("span");
                dot_top_left.className = " dot dot-top-left";
                const dot_bottom_right = document.createElement("span");
                dot_bottom_right.className = "dot dot-bottom-right";
                const dot_bottom_left = document.createElement("span");
                dot_bottom_left.className = "dot dot-bottom-left";
                const square = document.createElement("td");
                square.className = "square";
                // Append dot elements
                square.appendChild(dot_top_left);
                if (j == this.board_width - 1) square.appendChild(dot_top_right);
                if (i == this.board_height - 1) square.appendChild(dot_bottom_left);
                if (i == this.board_height - 1 && j == this.board_width - 1) square.appendChild(dot_bottom_right);
                [
                    "left",
                    "right",
                    "top",
                    "bottom"
                ].forEach((dir)=>{
                    const hitbox = document.createElement("span");
                    hitbox.className = "hitbox hitbox-" + dir;
                    square.appendChild(hitbox);
                });
                line.appendChild(square);
            }
            body.appendChild(line);
        }
        const table = document.createElement("table");
        table.appendChild(body);
        this.appendChild(table);
    }
    interractLine(x, y, direction, interractionType = "select", color = "none") {
        const typeString = interractionType == "select" ? "selected" : "clicked";
        const table = this.getElementsByTagName("table")[0];
        const box = table.rows[y].cells[x];
        if (interractionType == "click" && box.className.includes("selected-" + direction)) box.classList.remove("selected-" + direction);
        if (!box.className.includes("clicked-" + direction)) {
            switch(direction){
                case "right":
                    if (x < this.board_width - 1) {
                        const neighborBox = table.rows[y].cells[x + 1];
                        if (interractionType == "click" && neighborBox.className.includes("selected-left")) neighborBox.classList.remove("selected-left");
                        interractionType == "reset" ? [
                            "selected"
                        ].forEach((c)=>neighborBox.classList.remove(c + "-left")) : neighborBox.classList.add(typeString + "-left");
                        if (interractionType == "click") neighborBox.classList.add(color + "-left");
                    }
                    interractionType == "reset" ? [
                        "selected"
                    ].forEach((c)=>box.classList.remove(c + "-right")) : box.classList.add(typeString + "-right");
                    break;
                case "left":
                    if (x > 0) {
                        const neighborBox = table.rows[y].cells[x - 1];
                        if (interractionType == "click" && neighborBox.className.includes("selected-right")) neighborBox.classList.remove("selected-right");
                        interractionType == "reset" ? [
                            "selected"
                        ].forEach((c)=>neighborBox.classList.remove(c + "-right")) : neighborBox.classList.add(typeString + "-right");
                        if (interractionType == "click") neighborBox.classList.add(color + "-right");
                    }
                    interractionType == "reset" ? [
                        "selected"
                    ].forEach((c)=>box.classList.remove(c + "-left")) : box.classList.add(typeString + "-left");
                    break;
                case "top":
                    if (y > 0) {
                        const neighborBox = table.rows[y - 1].cells[x];
                        if (interractionType == "click" && neighborBox.className.includes("selected-bottom")) neighborBox.classList.remove("selected-bottom");
                        interractionType == "reset" ? [
                            "selected"
                        ].forEach((c)=>neighborBox.classList.remove(c + "-bottom")) : neighborBox.classList.add(typeString + "-bottom");
                        if (interractionType == "click") neighborBox.classList.add(color + "-bottom");
                    }
                    interractionType == "reset" ? [
                        "selected"
                    ].forEach((c)=>box.classList.remove(c + "-top")) : box.classList.add(typeString + "-top");
                    break;
                case "bottom":
                    if (y < this.board_height - 1) {
                        const neighborBox = table.rows[y + 1].cells[x];
                        if (interractionType == "click" && neighborBox.className.includes("selected-")) neighborBox.classList.remove("selected-top");
                        interractionType == "reset" ? [
                            "selected"
                        ].forEach((c)=>neighborBox.classList.remove(c + "-top")) : neighborBox.classList.add(typeString + "-top");
                        if (interractionType == "click") neighborBox.classList.add(color + "-top");
                    }
                    interractionType == "reset" ? [
                        "selected"
                    ].forEach((c)=>box.classList.remove(c + "-bottom")) : box.classList.add(typeString + "-bottom");
                    break;
            }
            if (interractionType == "click") box.classList.add(color + "-" + direction);
        }
    }
    setBgColor(x, y, color) {
        const table = this.getElementsByTagName("table")[0];
        const box = table.rows[y].cells[x];
        box.classList.add("background-" + color);
    }
}
exports.default = UI_Board;

},{"./UI_End":"cB2E3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cB2E3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _partyJs = require("party-js");
var _partyJsDefault = parcelHelpers.interopDefault(_partyJs);
class UI_End extends HTMLElement {
    connectedCallback() {
        const replayButton = document.querySelector(".replay-button");
        replayButton.addEventListener("click", ()=>{
            this.replay();
        });
        (0, _partyJsDefault.default).confetti(replayButton, {
            count: (0, _partyJsDefault.default).variation.range(20, 40)
        });
    }
    constructor(){
        super();
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        // Tailwind
        overlay.classList.add("absolute", "top-0", "left-0", "flex", "h-screen", "w-screen", "bg-black", "bg-opacity-50", "backdrop-blur-lg", "z-0");
        const container = document.createElement("div");
        container.classList.add("form-container");
        // Tailwind
        container.classList.add("container", "relative", "flex", "flex-col", "justify-center", "items-center", "m-auto", "w-full", "sm:w-1/4", "h-fit", "sm:h-fit", "p-5", "bg-white", "shadow-sm", "rounded-md");
        const endText = document.createElement("h1");
        endText.classList.add("end-text");
        const replayButton = document.createElement("button");
        replayButton.classList.add("replay-button");
        replayButton.appendChild(document.createTextNode("Rejouer"));
        // Tailwind
        replayButton.classList.add("h-10", "w-2/4", "mt-5", "bg-blue-600", "text-white", "rounded-md", "hover:bg-blue-700", "active:bg-blue-800", "shadow-md", "hover:shadow-lg");
        container.appendChild(endText);
        container.appendChild(replayButton);
        overlay.appendChild(container);
        this.appendChild(overlay);
    }
    setWinner(name) {
        const endText = document.querySelector(".end-text");
        if (name == null) endText.appendChild(document.createTextNode("\xc9galit\xe9"));
        else endText.appendChild(document.createTextNode("Victoire de " + name));
    }
    replay() {
        window.location.reload();
    }
}
exports.default = UI_End;

},{"party-js":"4CZH0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CZH0":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.forceInit = exports.util = exports.math = exports.random = exports.sources = exports.variation = exports.Emitter = exports.Particle = exports.settings = exports.scene = void 0;
var scene_1 = require("./scene");
var util_1 = require("./util");
__exportStar(require("./components"), exports);
__exportStar(require("./templates"), exports);
__exportStar(require("./systems/shapes"), exports);
__exportStar(require("./systems/modules"), exports);
// Create the lazy-initializing scene.
exports.scene = new util_1.Lazy(function() {
    // The library requires the use of the DOM, hence it cannot run in non-browser environments.
    if (typeof document === "undefined" || typeof window === "undefined") throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");
    return new scene_1.Scene();
});
var settings_1 = require("./settings");
Object.defineProperty(exports, "settings", {
    enumerable: true,
    get: function() {
        return settings_1.settings;
    }
});
var particle_1 = require("./particles/particle");
Object.defineProperty(exports, "Particle", {
    enumerable: true,
    get: function() {
        return particle_1.Particle;
    }
});
var emitter_1 = require("./particles/emitter");
Object.defineProperty(exports, "Emitter", {
    enumerable: true,
    get: function() {
        return emitter_1.Emitter;
    }
});
exports.variation = require("./systems/variation");
exports.sources = require("./systems/sources");
exports.random = require("./systems/random");
exports.math = require("./systems/math");
exports.util = require("./util");
/**
 * Forces the initialization of the otherwise lazy scene.
 */ function forceInit() {
    exports.scene.current;
}
exports.forceInit = forceInit;
exports.default = require("./");

},{"./scene":"jEqPk","./util":"9d1t4","./components":"c3SI7","./templates":"8LPA9","./systems/shapes":"5LIWi","./systems/modules":"kmomM","./settings":"k3hBr","./particles/particle":"8tUlD","./particles/emitter":"g9myp","./systems/variation":"3vUvI","./systems/sources":"hwKSl","./systems/random":"5H16q","./systems/math":"bi5qY","./":"4CZH0"}],"jEqPk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Scene = void 0;
var debug_1 = require("./debug");
var emitter_1 = require("./particles/emitter");
var renderer_1 = require("./particles/renderer");
/**
 * Represents a scene that contains emitters and their particles.
 *
 * Scenes are responsible for spawning and updating emitters, and
 * removing them once they are done.
 *
 * Scenes are not explicitely present in the DOM as an element, only
 * the contained particles are.
 */ var Scene = /** @class */ function() {
    /**
     * Initializes a new scene and starts the ticking job.
     */ function Scene1() {
        /**
         * The emitters currently present in the scene.
         */ this.emitters = [];
        /**
         * The debug instance associated with the scene.
         */ this.debug = new debug_1.Debug(this);
        /**
         * The renderer associated with the scene.
         */ this.renderer = new renderer_1.Renderer();
        /**
         * The ID of the currently scheduled tick.
         */ this.scheduledTickId = undefined;
        /**
         * The timestamp of the last tick, used to calculate deltas.
         *
         * @initialValue `performance.now()` (time origin)
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp
         */ this.lastTickTimestamp = performance.now();
        // Ensure the scene context is preserved on the tick.
        this.tick = this.tick.bind(this);
        this.scheduleTick();
    }
    /**
     * Creates and returns a new, default emitter object.
     */ Scene1.prototype.createEmitter = function(options) {
        var emitter = new emitter_1.Emitter(options);
        this.emitters.push(emitter);
        return emitter;
    };
    /**
     * Clears all emitters from the scene.
     *
     * @returns The number of cleared emitters.
     */ Scene1.prototype.clearEmitters = function() {
        return this.emitters.splice(0).length;
    };
    /**
     * Clears the particles from all emitters in the scene.
     * Note that this does not remove the actual emitter objects though.
     *
     * @returns The number of cleared particles.
     */ Scene1.prototype.clearParticles = function() {
        return this.emitters.reduce(function(sum, emitter) {
            return sum + emitter.clearParticles();
        }, 0);
    };
    /**
     * Schedules a tick in the scene.
     */ Scene1.prototype.scheduleTick = function() {
        this.scheduledTickId = window.requestAnimationFrame(this.tick);
    };
    /**
     * Cancels a pending tick operation.
     */ Scene1.prototype.cancelTick = function() {
        window.cancelAnimationFrame(this.scheduledTickId);
    };
    /**
     * Processes a tick cycle, updating all emitters contained in the scene.
     * This is handled as a JS animation frame event, hence the passed timestamp.
     *
     * @remarks
     * The emitter ticking and particle rendering is run using try-catch blocks,
     * to ensure that we can recover from potential errors.
     *
     * @param timestamp The current timestamp of the animation frame.
     */ Scene1.prototype.tick = function(timestamp) {
        // Calculate the elapsed delta and convert it to seconds.
        var delta = (timestamp - this.lastTickTimestamp) / 1000;
        try {
            // Perform ticks for all the emitters in the scene.
            for(var i = 0; i < this.emitters.length; i++){
                var emitter = this.emitters[i];
                emitter.tick(delta);
                if (emitter.isExpired && emitter.canRemove) this.emitters.splice(i--, 1);
            }
        } catch (error) {
            console.error("An error occurred while updating the scene's emitters:\n\"" + error + '"');
        }
        try {
            // Instruct the renderer to draw the particles of all systems.
            this.renderer.begin();
            for(var _i = 0, _a = this.emitters; _i < _a.length; _i++){
                var emitter = _a[_i];
                for(var _b = 0, _c = emitter.particles; _b < _c.length; _b++){
                    var particle = _c[_b];
                    this.renderer.renderParticle(particle, emitter);
                }
            }
            this.renderer.end();
        } catch (error1) {
            console.error("An error occurred while rendering the scene's particles:\n\"" + error1 + '"');
        }
        // Perform a tick on the debug interface
        this.debug.tick(delta);
        // Save the timestamp as the last tick timestamp and schedule a new tick.
        this.lastTickTimestamp = timestamp;
        this.scheduleTick();
    };
    return Scene1;
}();
exports.Scene = Scene;

},{"./debug":"lBZ92","./particles/emitter":"g9myp","./particles/renderer":"9bOlO"}],"lBZ92":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Debug = void 0;
var containers_1 = require("./containers");
var settings_1 = require("./settings");
/**
 * Represents a utility module to view debug information inside the DOM.
 * This is disabled by default and needs to manually be enabled by setting
 * the '.enabled' field to true.
 *
 * While disabled, the utility will not fetch stats and update itself.
 */ var Debug = /** @class */ function() {
    /**
     * Registers a new debug utility that is attached to the given scene.
     *
     * @param scene The scene to attach to.
     */ function Debug1(scene) {
        this.scene = scene;
        /**
         * The rate at which the debug interface should refresh itself (per second).
         */ this.refreshRate = 8;
        /**
         * The timer counting down to refreshes.
         */ this.refreshTimer = 1 / this.refreshRate;
    }
    /**
     * Processes a tick event in the interface. This checks if enough has passed to
     * trigger a refresh, and if so, fetches the debug information and updates the DOM.
     *
     * @param delta The time that has elapsed since the last tick.
     */ Debug1.prototype.tick = function(delta) {
        var container = containers_1.debugContainer.current;
        // If the current display style does not match the style inferred from the
        // enabled-state, update it.
        var displayStyle = settings_1.settings.debug ? "block" : "none";
        if (container.style.display !== displayStyle) container.style.display = displayStyle;
        if (!settings_1.settings.debug) // If the interface is not enabled, don't fetch or update any infos.
        return;
        this.refreshTimer += delta;
        if (this.refreshTimer > 1 / this.refreshRate) {
            this.refreshTimer = 0;
            // Update the container with the fetched information joined on line breaks.
            container.innerHTML = this.getDebugInformation(delta).join("<br>");
        }
    };
    /**
     * Fetches the debug information from the specified delta and the linked scene.
     *
     * @returns An array of debugging information, formatted as HTML.
     */ Debug1.prototype.getDebugInformation = function(delta) {
        // Count emitters and particles.
        var emitters = this.scene.emitters.length;
        var particles = this.scene.emitters.reduce(function(acc, cur) {
            return acc + cur.particles.length;
        }, 0);
        var infos = [
            "<b>party.js Debug</b>",
            "--------------",
            "FPS: " + Math.round(1 / delta),
            "Emitters: " + emitters,
            "Particles: " + particles, 
        ];
        // Emitter informations are formatted using their index, internal timer
        // and total particle count.
        var emitterInfos = this.scene.emitters.map(function(emitter) {
            return [
                // Show the current loop and the total loops.
                "\u2B6F: " + (emitter["currentLoop"] + 1) + "/" + (emitter.options.loops >= 0 ? emitter.options.loops : "\u221E"),
                // Show the amount of particle contained.
                "\u03A3p: " + emitter.particles.length,
                // Show the internal timer.
                !emitter.isExpired ? "\u03A3t: " + emitter["durationTimer"].toFixed(3) + "s" : "<i>expired</i>", 
            ].join(", ");
        });
        infos.push.apply(infos, __spreadArray([
            "--------------"
        ], emitterInfos));
        return infos;
    };
    return Debug1;
}();
exports.Debug = Debug;

},{"./containers":"64AJ2","./settings":"k3hBr"}],"64AJ2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.particleContainer = exports.debugContainer = exports.rootContainer = void 0;
var settings_1 = require("./settings");
var util_1 = require("./util");
/**
 * The prefix to apply to the containers.
 */ var containerPrefix = "party-js-";
/**
 * Checks if the specified container is 'active', meaning not undefined and attached to the DOM.
 */ function isContainerActive(container) {
    return container && container.isConnected;
}
/**
 * A generic factory method for creating a DOM container. Prefixes the specified name with the
 * container prefix, applies the styles and adds it under the parent.
 */ function makeContainer(name, styles, parent) {
    var container = document.createElement("div");
    container.id = containerPrefix + name;
    Object.assign(container.style, styles);
    return parent.appendChild(container);
}
/**
 * Represents the root container for DOM elements of the library.
 */ exports.rootContainer = new util_1.Lazy(function() {
    return makeContainer("container", {
        position: "fixed",
        left: "0",
        top: "0",
        height: "100vh",
        width: "100vw",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: settings_1.settings.zIndex.toString()
    }, document.body);
}, isContainerActive);
/**
 * Represents the debugging container of the library, only active if debugging is enabled.
 */ exports.debugContainer = new util_1.Lazy(function() {
    return makeContainer("debug", {
        position: "absolute",
        top: "0",
        left: "0",
        margin: "0.5em",
        padding: "0.5em 1em",
        border: "2px solid rgb(0, 0, 0, 0.2)",
        background: "rgb(0, 0, 0, 0.1)",
        color: "#555",
        fontFamily: "monospace"
    }, exports.rootContainer.current);
}, isContainerActive);
/**
 * Represents the particle container of the library.
 * This is where the particle DOM elements get rendered into.
 */ exports.particleContainer = new util_1.Lazy(function() {
    return makeContainer("particles", {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        perspective: "1200px"
    }, exports.rootContainer.current);
}, isContainerActive);

},{"./settings":"k3hBr","./util":"9d1t4"}],"k3hBr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.settings = void 0;
exports.settings = {
    debug: false,
    gravity: 800,
    zIndex: 99999,
    respectReducedMotion: true
};

},{}],"9d1t4":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./config"), exports);
__exportStar(require("./rotation"), exports);
__exportStar(require("./rules"), exports);
__exportStar(require("./lazy"), exports);

},{"./config":"4z5Un","./rotation":"eiiSe","./rules":"lmgZ8","./lazy":"eCZqY"}],"4z5Un":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overrideDefaults = void 0;
/**
 * Replaces the supplied defaults with the properties specified in the overrides.
 * This returns a new object.
 */ function overrideDefaults(defaults, overrides) {
    return Object.assign({}, defaults, overrides);
}
exports.overrideDefaults = overrideDefaults;

},{}],"eiiSe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rotationToNormal = void 0;
var components_1 = require("../components");
var math_1 = require("../systems/math");
/**
 * Converts the specified euler rotation (in degrees) into the corresponding normal vector.
 *
 * @remarks
 * The normal is calculated by placing a (figurative) plane in a coordinate-system's
 * origin, and rotating it by the specified angles. Note that the z-component of the
 * rotation is irrelevant for the normal and can be ignored. Then, two vectors
 * describing the orientation of the plane are calculated. Their cross product
 * denotes the normal vector.
 *
 * @param rotation The euler rotation angles (in degrees) to calculate the normal for.
 */ function rotationToNormal(rotation) {
    var alpha = rotation.x * math_1.deg2rad;
    var beta = rotation.y * math_1.deg2rad;
    var a = new components_1.Vector(Math.cos(beta), 0, Math.sin(beta));
    var b = new components_1.Vector(0, Math.cos(alpha), Math.sin(alpha));
    return a.cross(b);
}
exports.rotationToNormal = rotationToNormal;

},{"../components":"c3SI7","../systems/math":"bi5qY"}],"c3SI7":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./circle"), exports);
__exportStar(require("./color"), exports);
__exportStar(require("./gradient"), exports);
__exportStar(require("./numericSpline"), exports);
__exportStar(require("./rect"), exports);
__exportStar(require("./vector"), exports);

},{"./circle":"jhUtM","./color":"cSGmB","./gradient":"aL2hp","./numericSpline":"2lErI","./rect":"7uego","./vector":"j7Fm6"}],"jhUtM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Circle = void 0;
/**
 * Represents a circle.
 */ var Circle = /** @class */ function() {
    /**
     * Creates a new circle at the specified coordinates, with a default radius of 0.
     */ function Circle1(x, y, radius) {
        if (radius === void 0) radius = 0;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    Circle1.zero = new Circle1(0, 0);
    return Circle1;
}();
exports.Circle = Circle;

},{}],"cSGmB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Color = void 0;
var math_1 = require("../systems/math");
/**
 * Represents a color consisting of RGB values. The components of it are
 * represented as integers in the range 0 to 255.
 *
 * @example
 * ```ts
 * const a = new Color(12, 59, 219);
 * const b = Color.fromHex("#ffa68d");
 * const result = a.mix(b);
 * ```
 */ var Color = /** @class */ function() {
    /**
     * Creates a new color instance from the specified RGB components.
     */ function Color1(r, g, b) {
        this.values = new Float32Array(3);
        this.rgb = [
            r,
            g,
            b
        ];
    }
    Object.defineProperty(Color1.prototype, "r", {
        /**
         * Returns the r-component of the color.
         */ get: function() {
            return this.values[0];
        },
        /**
         * Modifies the r-component of the color.
         * Note that this also floors the value.
         */ set: function(value) {
            this.values[0] = Math.floor(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color1.prototype, "g", {
        /**
         * Returns the g-component of the color.
         */ get: function() {
            return this.values[1];
        },
        /**
         * Modifies the g-component of the color.
         * Note that this also floors the value.
         */ set: function(value) {
            this.values[1] = Math.floor(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color1.prototype, "b", {
        /**
         * Returns the b-component of the color.
         * Note that this also floors the value.
         */ get: function() {
            return this.values[2];
        },
        /**
         * Modifies the b-component of the color.
         */ set: function(value) {
            this.values[2] = Math.floor(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color1.prototype, "rgb", {
        /**
         * Returns the rgb-components of the color, bundled as a copied array.
         */ get: function() {
            return [
                this.r,
                this.g,
                this.b
            ];
        },
        /**
         * Simultaneously updates the rgb-components of the color, by passing an array.
         */ set: function(values) {
            this.r = values[0];
            this.g = values[1];
            this.b = values[2];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Mixes the two color together with an optional mixing weight.
     * This weight is 0.5 by default, perfectly averaging the color.
     */ Color1.prototype.mix = function(color, weight) {
        if (weight === void 0) weight = 0.5;
        return new Color1(math_1.lerp(this.r, color.r, weight), math_1.lerp(this.g, color.g, weight), math_1.lerp(this.b, color.b, weight));
    };
    /**
     * Returns the hexadecimal representation of the color, prefixed by '#'.
     */ Color1.prototype.toHex = function() {
        var hex = function(v) {
            return v.toString(16).padStart(2, "0");
        };
        return "#" + hex(this.r) + hex(this.g) + hex(this.b);
    };
    /**
     * Returns a formatted representation of the color.
     */ Color1.prototype.toString = function() {
        return "rgb(" + this.values.join(", ") + ")";
    };
    /**
     * Creates a color from the specified hexadecimal string.
     * This string can optionally be prefixed by '#'.
     */ Color1.fromHex = function(hex) {
        if (hex.startsWith("#")) hex = hex.substr(1);
        return new Color1(parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16));
    };
    /**
     * Creates a color from the specified HSL components.
     *
     * @see https://stackoverflow.com/a/9493060/5507624
     */ Color1.fromHsl = function(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        if (s === 0) return new Color1(l, l, l);
        else {
            var hue2rgb = function(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 0.5) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var to255 = function(v) {
                return Math.min(255, 256 * v);
            };
            var q1 = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p1 = 2 * l - q1;
            return new Color1(to255(hue2rgb(p1, q1, h + 1 / 3)), to255(hue2rgb(p1, q1, h)), to255(hue2rgb(p1, q1, h - 1 / 3)));
        }
    };
    /**
     * Returns (1, 1, 1).
     */ Color1.white = new Color1(255, 255, 255);
    /**
     * Returns (0, 0, 0).
     */ Color1.black = new Color1(0, 0, 0);
    return Color1;
}();
exports.Color = Color;

},{"../systems/math":"bi5qY"}],"bi5qY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.approximately = exports.clamp = exports.invlerp = exports.slerp = exports.lerp = exports.epsilon = exports.rad2deg = exports.deg2rad = void 0;
/**
 * Constant coefficient to convert degrees to radians.
 */ exports.deg2rad = Math.PI / 180;
/**
 * Constant coefficient to convert radians to degrees.
 */ exports.rad2deg = 180 / Math.PI;
/**
 * A small value to approximately compare values.
 */ exports.epsilon = 0.000001;
/**
 * Linearly interpolates between a and b by t.
 */ function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}
exports.lerp = lerp;
/**
 * Smoothly interpolates between a and b by t (using cosine interpolation).
 */ function slerp(a, b, t) {
    return lerp(a, b, (1 - Math.cos(t * Math.PI)) / 2);
}
exports.slerp = slerp;
/**
 * Inversely lerps v between a and b to find t.
 */ function invlerp(a, b, v) {
    return (v - a) / (b - a);
}
exports.invlerp = invlerp;
/**
 * Clamps the specified value between a minimum and a maximum.
 */ function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
exports.clamp = clamp;
/**
 * Checks if a is approximately equal to b.
 */ function approximately(a, b) {
    return Math.abs(a - b) < exports.epsilon;
}
exports.approximately = approximately;

},{}],"aL2hp":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gradient = void 0;
var spline_1 = require("./spline");
/**
 * Represents a gradient that can be used to interpolate between multiple color.
 */ var Gradient = /** @class */ function(_super) {
    __extends(Gradient1, _super);
    function Gradient1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Interpolates between two color on the gradient.
     */ Gradient1.prototype.interpolate = function(a, b, t) {
        return a.mix(b, t);
    };
    /**
     * Returns a solid gradient from the given color.
     */ Gradient1.solid = function(color) {
        return new Gradient1({
            value: color,
            time: 0.5
        });
    };
    /**
     * Returns a gradient with evenly spaced keys from the given colors.
     */ Gradient1.simple = function() {
        var colors = [];
        for(var _i = 0; _i < arguments.length; _i++)colors[_i] = arguments[_i];
        var step = 1 / (colors.length - 1);
        return new (Gradient1.bind.apply(Gradient1, __spreadArray([
            void 0
        ], colors.map(function(color, index) {
            return {
                value: color,
                time: index * step
            };
        }))))();
    };
    return Gradient1;
}(spline_1.Spline);
exports.Gradient = Gradient;

},{"./spline":"5qFca"}],"5qFca":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spline = void 0;
var math_1 = require("../systems/math");
/**
 * Represents a spline that can be used to continueously evaluate a function
 * between keys. The base implementation is kept generic, so the functionality
 * can easily be implemented for similar constructs, such as gradients.
 */ var Spline = /** @class */ function() {
    /**
     * Creates a new spline instance, using the specified keys.
     * Note that you have to pass at least one key.
     */ function Spline1() {
        var keys = [];
        for(var _i = 0; _i < arguments.length; _i++)keys[_i] = arguments[_i];
        if (keys.length === 0) throw new Error("Splines require at least one key.");
        if (Array.isArray(keys[0])) throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");
        this.keys = keys;
    }
    /**
     * Evaluates the spline at the given time.
     */ Spline1.prototype.evaluate = function(time) {
        if (this.keys.length === 0) throw new Error("Attempt to evaluate a spline with no keys.");
        if (this.keys.length === 1) // The spline only contains one key, therefore is constant.
        return this.keys[0].value;
        // Sort the keys and figure out the first key above the passed time.
        var ascendingKeys = this.keys.sort(function(a, b) {
            return a.time - b.time;
        });
        var upperKeyIndex = ascendingKeys.findIndex(function(g) {
            return g.time > time;
        });
        // If the found index is either 0 or -1, the specified time falls out
        // of the range of the supplied keys. In that case, the value of the
        // nearest applicant key is returned.
        if (upperKeyIndex === 0) return ascendingKeys[0].value;
        if (upperKeyIndex === -1) return ascendingKeys[ascendingKeys.length - 1].value;
        // Otherwise, find the bounding keys, and extrapolate the time between
        // the two. This is then used to interpolate between the two keys,
        // using the provided implementation.
        var lowerKey = ascendingKeys[upperKeyIndex - 1];
        var upperKey = ascendingKeys[upperKeyIndex];
        var containedTime = math_1.invlerp(lowerKey.time, upperKey.time, time);
        return this.interpolate(lowerKey.value, upperKey.value, containedTime);
    };
    return Spline1;
}();
exports.Spline = Spline;

},{"../systems/math":"bi5qY"}],"2lErI":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumericSpline = void 0;
var math_1 = require("../systems/math");
var spline_1 = require("./spline");
/**
 * Represents a spline that can take numeric values.
 */ var NumericSpline = /** @class */ function(_super) {
    __extends(NumericSpline1, _super);
    function NumericSpline1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Smoothly interpolates between two keys on the spline.
     */ NumericSpline1.prototype.interpolate = function(a, b, t) {
        return math_1.slerp(a, b, t);
    };
    return NumericSpline1;
}(spline_1.Spline);
exports.NumericSpline = NumericSpline;

},{"../systems/math":"bi5qY","./spline":"5qFca"}],"7uego":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rect = void 0;
/**
 * Represents a rectangle with an origin and size.
 */ var Rect = /** @class */ function() {
    function Rect1(x, y, width, height) {
        if (width === void 0) width = 0;
        if (height === void 0) height = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * Returns a new document-space rectangle from the viewport's bounds.
     */ Rect1.fromScreen = function() {
        return new Rect1(window.scrollX, window.scrollY, window.innerWidth, window.innerHeight);
    };
    /**
     * Returns a new document-space rectangle from the specified element.
     */ Rect1.fromElement = function(element) {
        var r = element.getBoundingClientRect();
        return new Rect1(window.scrollX + r.x, window.scrollY + r.y, r.width, r.height);
    };
    Rect1.zero = new Rect1(0, 0);
    return Rect1;
}();
exports.Rect = Rect;

},{}],"j7Fm6":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Vector = void 0;
var math_1 = require("../systems/math");
/**
 * Represents a structure used to process vectors.
 *
 * @remarks
 * Note that the operations in this class will **not** modify the original vector,
 * except for the property assignments. This is to ensure that vectors are not
 * unintentionally modified.
 *
 * @example
 * ```ts
 * const vectorA = new Vector(1, 3, 5);
 * const vectorB = new Vector(2, 3, 1);
 * const vectorC = vectorA.add(vectorB); // (3, 6, 6)
 * ```
 */ var Vector = /** @class */ function() {
    /**
     * Creates a new vector with optional x-, y-, and z-components.
     * Omitted components are defaulted to 0.
     */ function Vector1(x, y, z) {
        if (x === void 0) x = 0;
        if (y === void 0) y = 0;
        if (z === void 0) z = 0;
        this.values = new Float32Array(3);
        this.xyz = [
            x,
            y,
            z
        ];
    }
    Object.defineProperty(Vector1.prototype, "x", {
        /**
         * Returns the x-component of the vector.
         */ get: function() {
            return this.values[0];
        },
        /**
         * Modifies the x-component of the vector.
         */ set: function(value) {
            this.values[0] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector1.prototype, "y", {
        /**
         * Returns the y-component of the vector.
         */ get: function() {
            return this.values[1];
        },
        /**
         * Modifies the y-component of the vector.
         */ set: function(value) {
            this.values[1] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector1.prototype, "z", {
        /**
         * Returns the z-component of the vector.
         */ get: function() {
            return this.values[2];
        },
        /**
         * Modifies the z-component of the vector.
         */ set: function(value) {
            this.values[2] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector1.prototype, "xyz", {
        /**
         * Returns the xyz-components of the vector, bundled as a copied array.
         */ get: function() {
            return [
                this.x,
                this.y,
                this.z
            ];
        },
        /**
         * Simultaneously updates the xyz-components of the vector, by passing an array.
         */ set: function(values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the length of the vector.
     */ Vector1.prototype.magnitude = function() {
        return Math.sqrt(this.sqrMagnitude());
    };
    /**
     * Returns the squared length of the vector.
     */ Vector1.prototype.sqrMagnitude = function() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    /**
     * Adds the two vectors together, component-wise.
     */ Vector1.prototype.add = function(vector) {
        return new Vector1(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    };
    /**
     * Subtracts the right vector from the left one, component-wise.
     */ Vector1.prototype.subtract = function(vector) {
        return new Vector1(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    };
    /**
     * Scales the lefthand vector by another vector or by a number.
     */ Vector1.prototype.scale = function(scalar) {
        if (typeof scalar === "number") return new Vector1(this.x * scalar, this.y * scalar, this.z * scalar);
        else return new Vector1(this.x * scalar.x, this.y * scalar.y, this.z * scalar.z);
    };
    /**
     * Normalizes the vector to a length of 1. If the length was previously zero,
     * then a zero-length vector will be returned.
     */ Vector1.prototype.normalized = function() {
        var magnitude = this.magnitude();
        if (magnitude !== 0) return this.scale(1 / magnitude);
        return new (Vector1.bind.apply(Vector1, __spreadArray([
            void 0
        ], this.xyz)))();
    };
    /**
     * Returns the angle between two vectors, in degrees.
     */ Vector1.prototype.angle = function(vector) {
        return math_1.rad2deg * Math.acos((this.x * vector.x + this.y * vector.y + this.z * vector.z) / (this.magnitude() * vector.magnitude()));
    };
    /**
     * Returns the cross-product of two vectors.
     */ Vector1.prototype.cross = function(vector) {
        return new Vector1(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
    };
    /**
     * returns the dot-product of two vectors.
     */ Vector1.prototype.dot = function(vector) {
        return this.magnitude() * vector.magnitude() * Math.cos(math_1.deg2rad * this.angle(vector));
    };
    /**
     * Returns a formatted representation of the vector.
     */ Vector1.prototype.toString = function() {
        return "Vector(" + this.values.join(", ") + ")";
    };
    /**
     * Creates a new vector from an angle, in degrees. Note that the z-component will be zero.
     */ Vector1.from2dAngle = function(angle) {
        return new Vector1(Math.cos(angle * math_1.deg2rad), Math.sin(angle * math_1.deg2rad));
    };
    /**
     * Returns (0, 0, 0).
     */ Vector1.zero = new Vector1(0, 0, 0);
    /**
     * Returns (1, 1, 1).
     */ Vector1.one = new Vector1(1, 1, 1);
    /**
     * Returns (1, 0, 0).
     */ Vector1.right = new Vector1(1, 0, 0);
    /**
     * Returns (0, 1, 0).
     */ Vector1.up = new Vector1(0, 1, 0);
    /**
     * Returns (0, 0, 1).
     */ Vector1.forward = new Vector1(0, 0, 1);
    return Vector1;
}();
exports.Vector = Vector;

},{"../systems/math":"bi5qY"}],"lmgZ8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.despawningRules = void 0;
/**
 * Contains a set of pre-defined particle despawning rules.
 */ exports.despawningRules = {
    /**
     * A rule that despawns a particle once its lifetime is over.
     */ lifetime: function(particle) {
        return particle.lifetime <= 0;
    },
    /**
     * A rule that despawns a particle once its y-coordinate is outside of the document.
     */ bounds: function(particle) {
        // Get document height: https://stackoverflow.com/a/44077777/5507624
        var height = document.documentElement.scrollHeight;
        return particle.location.y > height;
    }
};

},{}],"eCZqY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lazy = void 0;
/**
 * A wrapper class to lazily initialize a value.
 * Supports custom factory and predicate methods.
 */ var Lazy = /** @class */ function() {
    function Lazy1(factory, exists) {
        if (exists === void 0) exists = Lazy1.defaultExists;
        this.factory = factory;
        this.exists = exists;
    }
    Object.defineProperty(Lazy1.prototype, "current", {
        /**
         * The current value of the lazy object. Will be initialized, if the 'exists'
         * predicate doesn't match.
         */ get: function() {
            if (!this.exists(this.value)) this.value = this.factory();
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Lazy1.defaultExists = function(value) {
        return typeof value !== "undefined";
    };
    return Lazy1;
}();
exports.Lazy = Lazy;

},{}],"g9myp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Emitter = void 0;
var vector_1 = require("../components/vector");
var settings_1 = require("../settings");
var variation_1 = require("../systems/variation");
var config_1 = require("../util/config");
var options_1 = require("./options");
var particle_1 = require("./particle");
/**
 * Represents an emitter that is responsible for spawning and updating particles.
 *
 * Particles themselves are just data-holders, with the system acting upon them and
 * modifying them. The modifications are done mainly via modules, that use the
 * particle's data together with some function to apply temporal transitions.
 *
 * @see Particle
 * @see ParticleModifierModule
 */ var Emitter = /** @class */ function() {
    /**
     * Creates a new emitter, using default options.
     */ function Emitter1(options) {
        /**
         * The particles currently contained within the system.
         */ this.particles = [];
        this.currentLoop = 0; // The current loop index.
        this.durationTimer = 0; // Measures the current runtime duration, to allow loops to reset.
        this.emissionTimer = 0; // Measures the current emission timer, to allow spawning particles in intervals.
        this.attemptedBurstIndices = []; // The indices of the particle bursts that were attempted this loop.
        this.options = config_1.overrideDefaults(options_1.getDefaultEmitterOptions(), options === null || options === void 0 ? void 0 : options.emitterOptions);
        this.emission = config_1.overrideDefaults(options_1.getDefaultEmissionOptions(), options === null || options === void 0 ? void 0 : options.emissionOptions);
        this.renderer = config_1.overrideDefaults(options_1.getDefaultRendererOptions(), options === null || options === void 0 ? void 0 : options.rendererOptions);
    }
    Object.defineProperty(Emitter1.prototype, "isExpired", {
        /**
         * Checks if the emitter is already expired and can be removed.
         * Expired emitters do not emit new particles.
         */ get: function() {
            return this.options.loops >= 0 && this.currentLoop >= this.options.loops;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emitter1.prototype, "canRemove", {
        /**
         * Checks if the emitter can safely be removed.
         * This is true if no more particles are active.
         */ get: function() {
            return this.particles.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clears all particles inside the emitter.
     *
     * @returns The number of cleared particles.
     */ Emitter1.prototype.clearParticles = function() {
        return this.particles.splice(0).length;
    };
    /**
     * Processes a tick of the emitter, using the elapsed time.
     *
     * @remarks
     * This handles a few things, namely:
     * - Incrementing the duration timer and potentially incrementing the loop.
     * - Handling particle bursts & emissions.
     * - Despawning particles conditionally.
     *
     * @param delta The time, in seconds, passed since the last tick.
     */ Emitter1.prototype.tick = function(delta) {
        if (!this.isExpired) {
            this.durationTimer += delta;
            if (this.durationTimer >= this.options.duration) {
                this.currentLoop++;
                // To start a new loop, the duration timer and attempted bursts are reset.
                this.durationTimer = 0;
                this.attemptedBurstIndices = [];
            }
            // We need to check the expiry again, in case the added loop or duration changed something.
            if (!this.isExpired) {
                // Iterate over the bursts, attempting to execute them if the time is ready.
                var burstIndex = 0;
                for(var _i = 0, _a = this.emission.bursts; _i < _a.length; _i++){
                    var burst = _a[_i];
                    if (burst.time <= this.durationTimer) // Has the burst already been attempted? If not ...
                    {
                        if (!this.attemptedBurstIndices.includes(burstIndex)) {
                            // Perform the burst, emitting a variable amount of particles.
                            var count = variation_1.evaluateVariation(burst.count);
                            for(var i = 0; i < count; i++)this.emitParticle();
                            // Mark the burst as attempted.
                            this.attemptedBurstIndices.push(burstIndex);
                        }
                    }
                    burstIndex++;
                }
                // Handle the 'emission over time'. By using a while-loop instead of a simple
                // if-condition, we take high deltas into account, and ensure that the correct
                // number of particles will consistently be emitted.
                this.emissionTimer += delta;
                var delay = 1 / this.emission.rate;
                while(this.emissionTimer > delay){
                    this.emissionTimer -= delay;
                    this.emitParticle();
                }
            }
        }
        var _loop_1 = function(i) {
            var particle = this_1.particles[i];
            this_1.tickParticle(particle, delta);
            // Particles should be despawned (i.e. removed from the collection) if any of
            // the despawning rules apply to them.
            if (this_1.options.despawningRules.some(function(rule) {
                return rule(particle);
            })) this_1.particles.splice(i, 1);
        };
        var this_1 = this;
        for(var i = this.particles.length - 1; i >= 0; i--)_loop_1(i);
    };
    /**
     * Performs an internal tick for the particle.
     *
     * @remarks
     * This method controls the particle's lifetime, location and velocity, according
     * to the elapsed delta and the configuration. Additionally, each of the emitter's
     * modules is applied to the particle.
     *
     * @param particle The particle to apply the tick for.
     * @param delta The time, in seconds, passed since the last tick.
     */ Emitter1.prototype.tickParticle = function(particle, delta) {
        particle.lifetime -= delta;
        if (this.options.useGravity) // Apply gravitational acceleration to the particle.
        particle.velocity = particle.velocity.add(vector_1.Vector.up.scale(settings_1.settings.gravity * delta));
        // Apply the particle's velocity to its location.
        particle.location = particle.location.add(particle.velocity.scale(delta));
        // Apply the modules to the particle.
        for(var _i = 0, _a = this.options.modules; _i < _a.length; _i++){
            var moduleFunction = _a[_i];
            moduleFunction(particle);
        }
    };
    /**
     * Emits a particle using the registered settings.
     * Also may despawn a particle if the maximum number of particles is exceeded.
     */ Emitter1.prototype.emitParticle = function() {
        var particle = new particle_1.Particle({
            location: this.emission.sourceSampler(),
            lifetime: variation_1.evaluateVariation(this.emission.initialLifetime),
            velocity: vector_1.Vector.from2dAngle(variation_1.evaluateVariation(this.emission.angle)).scale(variation_1.evaluateVariation(this.emission.initialSpeed)),
            size: variation_1.evaluateVariation(this.emission.initialSize),
            rotation: variation_1.evaluateVariation(this.emission.initialRotation),
            color: variation_1.evaluateVariation(this.emission.initialColor)
        });
        this.particles.push(particle);
        // Ensure that no more particles than 'maxParticles' can exist.
        if (this.particles.length > this.options.maxParticles) this.particles.shift();
        return particle;
    };
    return Emitter1;
}();
exports.Emitter = Emitter;

},{"../components/vector":"j7Fm6","../settings":"k3hBr","../systems/variation":"3vUvI","../util/config":"4z5Un","./options":"88Kqu","./particle":"8tUlD"}],"3vUvI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gradientSample = exports.splineSample = exports.skewRelative = exports.skew = exports.range = exports.evaluateVariation = void 0;
var random_1 = require("./random");
/**
 * Returns a value instance of a variation.
 */ function evaluateVariation(variation) {
    if (Array.isArray(variation)) return random_1.pick(variation);
    if (typeof variation === "function") return variation();
    return variation;
}
exports.evaluateVariation = evaluateVariation;
/**
 * Creates a variation function that returns a random number from min to max.
 */ function range(min, max) {
    return function() {
        return random_1.randomRange(min, max);
    };
}
exports.range = range;
/**
 * Creates a variation function that skews the specified value by a specified, absolute
 * amount. This means that instead of the value itself, a random number that deviates
 * at most by the specified amount is returned.
 *
 * @remarks
 * If you want to skew by a percentage instead, use `skewRelative`.
 */ function skew(value, amount) {
    return function() {
        return value + random_1.randomRange(-amount, amount);
    };
}
exports.skew = skew;
/**
 * Creates a variation function that skews the specified value by a specified percentage.
 * This means that instead of the value itself, a random number that deviates by a maximum
 * of the specified percentage is returned.
 */ function skewRelative(value, percentage) {
    return function() {
        return value * (1 + random_1.randomRange(-percentage, percentage));
    };
}
exports.skewRelative = skewRelative;
/**
 * Creates a variation function that returns a random sample from the given spline.
 *
 * @param spline The spline to sample from.
 */ function splineSample(spline) {
    return function() {
        return spline.evaluate(Math.random());
    };
}
exports.splineSample = splineSample;
/**
 * Creates a variation function that returns a random sample from the given gradient.
 *
 * @remarks
 * This function is an alias for the spline variation, since a gradient is just
 * a spline under the hood.
 *
 * @param gradient The gradient to sample from.
 */ function gradientSample(gradient) {
    return splineSample(gradient);
}
exports.gradientSample = gradientSample;

},{"./random":"5H16q"}],"5H16q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomInsideCircle = exports.randomInsideRect = exports.randomUnitVector = exports.pick = exports.randomRange = void 0;
var components_1 = require("../components");
var math_1 = require("./math");
/**
 * Returns a random value from min to max.
 */ function randomRange(min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return math_1.lerp(min, max, Math.random());
}
exports.randomRange = randomRange;
/**
 * Picks a random element from the specified array. Returns undefined if the array is empty.
 */ function pick(arr) {
    return arr.length === 0 ? undefined : arr[Math.floor(Math.random() * arr.length)];
}
exports.pick = pick;
/**
 * Returns a random unit vector.
 */ function randomUnitVector() {
    var theta = randomRange(0, 2 * Math.PI);
    var z = randomRange(-1, 1);
    return new components_1.Vector(Math.sqrt(1 - z * z) * Math.cos(theta), Math.sqrt(1 - z * z) * Math.sin(theta), z);
}
exports.randomUnitVector = randomUnitVector;
/**
 * Returns a random point inside the given rect.
 */ function randomInsideRect(rect) {
    return new components_1.Vector(rect.x + randomRange(0, rect.width), rect.y + randomRange(0, rect.height));
}
exports.randomInsideRect = randomInsideRect;
function randomInsideCircle(circle) {
    var theta = randomRange(0, 2 * Math.PI);
    var radius = randomRange(0, circle.radius);
    return new components_1.Vector(circle.x + Math.cos(theta) * radius, circle.y + Math.sin(theta) * radius);
}
exports.randomInsideCircle = randomInsideCircle;

},{"../components":"c3SI7","./math":"bi5qY"}],"88Kqu":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./emitterOptions"), exports);
__exportStar(require("./emissionOptions"), exports);
__exportStar(require("./renderOptions"), exports);

},{"./emitterOptions":"lLCBT","./emissionOptions":"i6gwf","./renderOptions":"8QcYy"}],"lLCBT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDefaultEmitterOptions = void 0;
var rules_1 = require("../../util/rules");
/**
 * Returns the default set of emitter options.
 */ function getDefaultEmitterOptions() {
    return {
        duration: 5,
        loops: 1,
        useGravity: true,
        maxParticles: 300,
        despawningRules: [
            rules_1.despawningRules.lifetime,
            rules_1.despawningRules.bounds
        ],
        modules: []
    };
}
exports.getDefaultEmitterOptions = getDefaultEmitterOptions;

},{"../../util/rules":"lmgZ8"}],"i6gwf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDefaultEmissionOptions = void 0;
var components_1 = require("../../components");
var sources_1 = require("../../systems/sources");
/**
 * Returns the default set of emission options.
 */ function getDefaultEmissionOptions() {
    return {
        rate: 10,
        angle: 0,
        bursts: [],
        sourceSampler: sources_1.rectSource(components_1.Rect.zero),
        initialLifetime: 5,
        initialSpeed: 5,
        initialSize: 1,
        initialRotation: components_1.Vector.zero,
        initialColor: components_1.Color.white
    };
}
exports.getDefaultEmissionOptions = getDefaultEmissionOptions;

},{"../../components":"c3SI7","../../systems/sources":"hwKSl"}],"hwKSl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.circleSource = exports.rectSource = exports.mouseSource = exports.elementSource = exports.dynamicSource = void 0;
var components_1 = require("../components");
var random_1 = require("./random");
/**
 * Dynamically infers a source sampler for the specified source type.
 */ function dynamicSource(source) {
    if (source instanceof HTMLElement) return elementSource(source);
    if (source instanceof components_1.Circle) return circleSource(source);
    if (source instanceof components_1.Rect) return rectSource(source);
    if (source instanceof MouseEvent) return mouseSource(source);
    throw new Error("Cannot infer the source type of '" + source + "'.");
}
exports.dynamicSource = dynamicSource;
/**
 * Creates a sampler to retrieve random points inside a specified HTMLElement.
 */ function elementSource(source) {
    return function() {
        return random_1.randomInsideRect(components_1.Rect.fromElement(source));
    };
}
exports.elementSource = elementSource;
/**
 * Creates a sampler to retrieve the position of a mouse event.
 */ function mouseSource(source) {
    return function() {
        return new components_1.Vector(window.scrollX + source.clientX, window.scrollY + source.clientY);
    };
}
exports.mouseSource = mouseSource;
/**
 * Creates a sampler to retrieve random points inside a specified rectangle.
 */ function rectSource(source) {
    return function() {
        return random_1.randomInsideRect(source);
    };
}
exports.rectSource = rectSource;
/**
 * Creates a sampler to retrieve random points inside a specified circle.
 */ function circleSource(source) {
    return function() {
        return random_1.randomInsideCircle(source);
    };
}
exports.circleSource = circleSource;

},{"../components":"c3SI7","./random":"5H16q"}],"8QcYy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDefaultRendererOptions = void 0;
/**
 * Returns the default set of renderer options.
 */ function getDefaultRendererOptions() {
    return {
        shapeFactory: "square",
        applyColor: defaultApplyColor,
        applyOpacity: defaultApplyOpacity,
        applyLighting: defaultApplyLighting,
        applyTransform: defaultApplyTransform
    };
}
exports.getDefaultRendererOptions = getDefaultRendererOptions;
/**
 * Applies the specified color to the element.
 *
 * @remarks
 * This function is aware of the element's node type:
 * - `div` elements have their `background` set.
 * - `svg` elements have their `fill` and `color` set.
 * - Other elements have their `color` set.
 */ function defaultApplyColor(color, element) {
    var hex = color.toHex();
    // Note that by default, HTML node names are uppercase.
    switch(element.nodeName.toLowerCase()){
        case "div":
            element.style.background = hex;
            break;
        case "svg":
            element.style.fill = element.style.color = hex;
            break;
        default:
            element.style.color = hex;
            break;
    }
}
/**
 * Applies the specified opacity to the element.
 */ function defaultApplyOpacity(opacity, element) {
    element.style.opacity = opacity.toString();
}
/**
 * Applies the specified lighting to the element as a brightness filter.
 *
 * @remarks
 * This function assumes an ambient light with intensity 0.5, and that the
 * particle should be lit from both sides. The brightness filter can exceed 1,
 * to give the particles a "glossy" feel.
 */ function defaultApplyLighting(lighting, element) {
    element.style.filter = "brightness(" + (0.5 + Math.abs(lighting)) + ")";
}
/**
 * Applies the specified transform to the element as a 3D CSS transform.
 * Also takes into account the current window scroll, to make sure that particles are
 * rendered inside of the fixed container.
 */ function defaultApplyTransform(particle, element) {
    element.style.transform = // Make sure to take window scrolling into account.
    "translateX(" + (particle.location.x - window.scrollX).toFixed(3) + "px) " + ("translateY(" + (particle.location.y - window.scrollY).toFixed(3) + "px) ") + ("translateZ(" + particle.location.z.toFixed(3) + "px) ") + ("rotateX(" + particle.rotation.x.toFixed(3) + "deg) ") + ("rotateY(" + particle.rotation.y.toFixed(3) + "deg) ") + ("rotateZ(" + particle.rotation.z.toFixed(3) + "deg) ") + ("scale(" + particle.size.toFixed(3) + ")");
}

},{}],"8tUlD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Particle = void 0;
var components_1 = require("../components");
var config_1 = require("../util/config");
/**
 * Represents an emitted particle.
 */ var Particle = /** @class */ function() {
    /**
     * Creates a new particle instance through the specified options.
     */ function Particle1(options) {
        var populatedOptions = config_1.overrideDefaults({
            lifetime: 0,
            size: 1,
            location: components_1.Vector.zero,
            rotation: components_1.Vector.zero,
            velocity: components_1.Vector.zero,
            color: components_1.Color.white,
            opacity: 1
        }, options);
        // Generate a symbolic ID.
        this.id = Symbol();
        // Assign various properties, together with some initials for later reference.
        this.size = this.initialSize = populatedOptions.size;
        this.lifetime = this.initialLifetime = populatedOptions.lifetime;
        this.rotation = this.initialRotation = populatedOptions.rotation;
        this.location = populatedOptions.location;
        this.velocity = populatedOptions.velocity;
        this.color = populatedOptions.color;
        this.opacity = populatedOptions.opacity;
    }
    return Particle1;
}();
exports.Particle = Particle;

},{"../components":"c3SI7","../util/config":"4z5Un"}],"9bOlO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Renderer = void 0;
var __1 = require("..");
var vector_1 = require("../components/vector");
var containers_1 = require("../containers");
var shapes_1 = require("../systems/shapes");
var util_1 = require("../util");
/**
 * Represents a renderer used to draw particles to the DOM via HTML
 * elements. Additionally, it is responsible for purging the elements
 * of destroyed particles from the DOM.
 */ var Renderer = /** @class */ function() {
    function Renderer1() {
        /**
         * The lookup of elements currently handled by the renderer, with the
         * particle ID as key and a HTMLElement as the value.
         */ this.elements = new Map();
        /**
         * The normalized direction the light comes from.
         */ this.light = new vector_1.Vector(0, 0, 1);
        /**
         * Whether or not the renderer should actually draw particles.
         */ this.enabled = true;
        // Respect that users might prefer reduced motion.
        // See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
        this.enabled = !__1.settings.respectReducedMotion || !window.matchMedia("(prefers-reduced-motion)").matches;
    }
    /**
     * Begins a new render block. During the rendering phase, a list of rendered particles
     * is tracked, so that stale particles can be removed later.
     */ Renderer1.prototype.begin = function() {
        this.renderedParticles = [];
    };
    /**
     * Terminates an existing render block. This checks which particles were rendered
     * during the block and purges all unused HTMLElements from the DOM.
     *
     * @returns The amount of particles that were rendered.
     */ Renderer1.prototype.end = function() {
        var it = this.elements.keys();
        var result = it.next();
        while(!result.done){
            var id = result.value;
            if (!this.renderedParticles.includes(id)) {
                this.elements.get(id).remove();
                this.elements.delete(id);
            }
            result = it.next();
        }
        return this.renderedParticles.length;
    };
    /**
     * Renders an individual particle to the DOM. If the particle is rendered for the first
     * time, a HTMLElement will be created using the emitter's render settings.
     *
     * @param particle The particle to be rendered.
     * @param emitter The system containing the particle.
     */ Renderer1.prototype.renderParticle = function(particle, emitter) {
        if (!this.enabled) return;
        var options = emitter.renderer;
        // Ensure that an element for the particle exists.
        var element = this.elements.has(particle.id) ? this.elements.get(particle.id) : this.createParticleElement(particle, options);
        if (options.applyColor) // If the options offer a coloring method, apply it.
        options.applyColor(particle.color, element);
        if (options.applyOpacity) // If the options offer an opacity modifying method, apply it.
        options.applyOpacity(particle.opacity, element);
        if (options.applyLighting) {
            // If the options offer a lighting method, apply it.
            // Lighting is calculated as a combination of the particle's normal
            // direction and the lighting direction.
            var normal = util_1.rotationToNormal(particle.rotation);
            var lightingCoefficient = normal.dot(this.light);
            options.applyLighting(lightingCoefficient, element);
        }
        if (options.applyTransform) // If the options offer a transformation method, apply it.
        // This ensures the particle is rendered at the correct position with the correct rotation.
        options.applyTransform(particle, element);
        // Mark the particle as rendered.
        this.renderedParticles.push(particle.id);
    };
    /**
     * Creates the HTMLElement for a particle that does not have one already.
     */ Renderer1.prototype.createParticleElement = function(particle, options) {
        // Resolve the element returned from the factory.
        var resolved = shapes_1.resolveShapeFactory(options.shapeFactory);
        // Clone the node to ensure we do not break existing elements.
        var element = resolved.cloneNode(true);
        // Ensure that the elements can be "stacked" ontop of eachother.
        element.style.position = "absolute";
        // Register the new element in the map, while appending the new element to the DOM.
        this.elements.set(particle.id, containers_1.particleContainer.current.appendChild(element));
        return element;
    };
    return Renderer1;
}();
exports.Renderer = Renderer;

},{"..":"4CZH0","../components/vector":"j7Fm6","../containers":"64AJ2","../systems/shapes":"5LIWi","../util":"9d1t4"}],"5LIWi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolveShapeFactory = exports.resolvableShapes = void 0;
var variation_1 = require("./variation");
/**
 * Represents the lookup that maps resolveable element keys to their HTML strings.
 *
 * @remarks
 * The default shapes are made to fit inside a dimension of 10x10 pixels, except
 * the 'star' shape, which exceeds it slightly.
 */ exports.resolvableShapes = {
    square: '<div style="height: 10px; width: 10px;"></div>',
    rectangle: '<div style="height: 6px; width: 10px;"></div>',
    circle: '<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',
    roundedSquare: '<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',
    roundedRectangle: '<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',
    star: '<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'
};
/**
 * Resolves the specified element factory using the resolvable elements, if needed.
 */ function resolveShapeFactory(factory) {
    // Retrieve the unresolved element from the factory.
    var shape = variation_1.evaluateVariation(factory);
    // If a string is returned, we need to resolve the element. This means
    // looking up the string in the resolver lookup. If the key was not
    // resolvable, we throw an error.
    if (typeof shape === "string") {
        var resolved = exports.resolvableShapes[shape];
        if (!resolved) throw new Error("Failed to resolve shape key '" + shape + "'. Did you forget to add it to the 'resolvableShapes' lookup?");
        // We're in luck, we can resolve the element! We create a dummy <div> element
        // to set the innerHTML of, and return the first element child.
        var dummy = document.createElement("div");
        dummy.innerHTML = resolved;
        return dummy.firstElementChild;
    }
    return shape;
}
exports.resolveShapeFactory = resolveShapeFactory;

},{"./variation":"3vUvI"}],"8LPA9":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./confetti"), exports);
__exportStar(require("./sparkles"), exports);

},{"./confetti":"g2Bz5","./sparkles":"4GjFa"}],"g2Bz5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confetti = void 0;
var __1 = require("../");
var components_1 = require("../components");
var modules_1 = require("../systems/modules");
var random = require("../systems/random");
var sources = require("../systems/sources");
var variation = require("../systems/variation");
var util = require("../util");
/**
 * The standard confetti template.
 *
 * @param source The source to emit the confetti from.
 * @param options The (optional) configuration overrides.
 */ function confetti(source, options) {
    var populated = util.overrideDefaults({
        count: variation.range(20, 40),
        spread: variation.range(35, 45),
        speed: variation.range(300, 600),
        size: variation.skew(1, 0.2),
        rotation: function() {
            return random.randomUnitVector().scale(180);
        },
        color: function() {
            return components_1.Color.fromHsl(random.randomRange(0, 360), 100, 70);
        },
        modules: [
            new modules_1.ModuleBuilder().drive("size").by(function(t) {
                return Math.min(1, t * 3);
            }).relative().build(),
            new modules_1.ModuleBuilder().drive("rotation").by(function(t) {
                return new components_1.Vector(140, 200, 260).scale(t);
            }).relative().build(), 
        ],
        shapes: [
            "square",
            "circle"
        ]
    }, options);
    var emitter = __1.scene.current.createEmitter({
        emitterOptions: {
            loops: 1,
            duration: 8,
            modules: populated.modules
        },
        emissionOptions: {
            rate: 0,
            bursts: [
                {
                    time: 0,
                    count: populated.count
                }
            ],
            sourceSampler: sources.dynamicSource(source),
            angle: variation.skew(-90, variation.evaluateVariation(populated.spread)),
            initialLifetime: 8,
            initialSpeed: populated.speed,
            initialSize: populated.size,
            initialRotation: populated.rotation,
            initialColor: populated.color
        },
        rendererOptions: {
            shapeFactory: populated.shapes
        }
    });
    return emitter;
}
exports.confetti = confetti;

},{"../":"4CZH0","../components":"c3SI7","../systems/modules":"kmomM","../systems/random":"5H16q","../systems/sources":"hwKSl","../systems/variation":"3vUvI","../util":"9d1t4"}],"kmomM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModuleBuilder = void 0;
var components_1 = require("../components");
/**
 * Represents a builder for particle modules. Returns an evaluatable module
 * function, that can be consumed by emitters.
 *
 * @remarks
 * Not all properties can be driven. TypeScript will validate this at compile time,
 * but no internal validation is performed due to performance reasons. Also, note
 * that the driving factor is "lifetime" by default.
 *
 * @example
 * ```ts
 * new ModuleBuilder()
 *     .drive("size")
 *     .by((t) => t * 2)
 *     .through("lifetime")
 *     .build();
 * ```
 */ var ModuleBuilder = /** @class */ function() {
    function ModuleBuilder1() {
        /**
         * The factor driving the built function.
         *
         * @defaultValue "lifetime"
         */ this.factor = "lifetime";
        this.isRelative = false;
    }
    /**
     * Specifies the key in the particle that should be driven.
     *
     * @remarks
     * Note that not all of a particle's properties are drivable through modules. If you
     * need full control of a particle inside of a module, you can use a module function directly.
     *
     * @returns The chained builder instance.
     */ ModuleBuilder1.prototype.drive = function(key) {
        this.driverKey = key;
        return this;
    };
    /**
     * Specifies the factor to drive the evaluated value by. Supports "lifetime" and "size".
     *
     * @returns The chained builder instance.
     */ ModuleBuilder1.prototype.through = function(factor) {
        this.factor = factor;
        return this;
    };
    /**
     * Specifies the value to drive the module behaviour by. This can be a constant,
     * a spline or an evaluable function. Note that in the last case, the driving
     * factor is passed as a parameter.
     *
     * @returns The chained builder instance.
     */ ModuleBuilder1.prototype.by = function(driver) {
        this.driverValue = driver;
        return this;
    };
    /**
     * Specifies that the module function is supposed to act relative to the
     * properties initial value.
     *
     * @remarks
     * Note that this is only possible if an "initial*" property exists on the
     * particle object. The operation applied to the initial and new value
     * is dependant on their type:
     * - `Vector`: Both vectors are added.
     * - `number`: Both numbers are multiplied.
     *
     * For more advanced relative customizations, consider using the particle
     * object in the driver value function instead, like:
     * ```ts
     * .by((t, p) => p.initialSize + t * 2);
     * ```
     */ ModuleBuilder1.prototype.relative = function(isRelative) {
        if (isRelative === void 0) isRelative = true;
        this.isRelative = isRelative;
        return this;
    };
    /**
     * Consumes the builder and returns an evaluatable module function.
     *
     * @remarks
     * Note that you need to specify the driving key and value, otherwise an error
     * will be thrown.
     */ ModuleBuilder1.prototype.build = function() {
        var _this = this;
        if (typeof this.driverKey === "undefined") throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");
        if (typeof this.driverValue === "undefined") throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");
        return function(particle) {
            updateDrivenProperty(particle, _this.driverKey, evaluateModuleDriver(_this.driverValue, calculateModuleFactor(_this.factor, particle), particle), _this.isRelative);
        };
    };
    return ModuleBuilder1;
}();
exports.ModuleBuilder = ModuleBuilder;
/**
 * Evaluates the module driver using a specified factor.
 */ function evaluateModuleDriver(driver, factor, particle) {
    if (typeof driver === "object" && "evaluate" in driver) return driver.evaluate(factor);
    if (typeof driver === "function") return driver(factor, particle);
    return driver;
}
/**
 * Calculates a module factor using a specified particle as context.
 */ function calculateModuleFactor(factor, particle) {
    switch(factor){
        case "lifetime":
            return particle.initialLifetime - particle.lifetime;
        case "relativeLifetime":
            return (particle.initialLifetime - particle.lifetime) / particle.initialLifetime;
        case "size":
            return particle.size;
        default:
            throw new Error("Invalid driving factor '" + factor + "'.");
    }
}
/**
 * Updates a driven property of a particle using the specified value.
 *
 * @remarks
 * If the operation is marked as relative, the function infers the new value
 * through the value's type. Note that relative properties must have a
 * corresponding "initial*" value in the particle's properties.
 */ function updateDrivenProperty(particle, key, value, relative) {
    if (relative === void 0) relative = false;
    if (!relative) particle[key] = value;
    else {
        var initial = particle["initial" + key[0].toUpperCase() + key.substr(1)];
        if (typeof initial === "undefined") throw new Error("Unable to use relative chaining with key '" + key + "'; no initial value exists.");
        if (value instanceof components_1.Vector) updateDrivenProperty(particle, key, initial.add(value));
        else if (typeof value === "number") updateDrivenProperty(particle, key, initial * value);
        else throw new Error("Unable to use relative chaining with particle key '" + key + "'; no relative operation for '" + value + "' could be inferred.");
    }
}

},{"../components":"c3SI7"}],"4GjFa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sparkles = void 0;
var __1 = require("..");
var components_1 = require("../components");
var modules_1 = require("../systems/modules");
var random = require("../systems/random");
var sources = require("../systems/sources");
var variation = require("../systems/variation");
var util = require("../util");
/**
 * The standard sparkles template.
 *
 * @param source The source to emit the sparkles from.
 * @param options The (optional) configuration overrides.
 */ function sparkles(source, options) {
    var populated = util.overrideDefaults({
        lifetime: variation.range(1, 2),
        count: variation.range(10, 20),
        speed: variation.range(100, 200),
        size: variation.range(0.8, 1.8),
        rotation: function() {
            return new components_1.Vector(0, 0, random.randomRange(0, 360));
        },
        color: function() {
            return components_1.Color.fromHsl(50, 100, random.randomRange(55, 85));
        },
        modules: [
            new modules_1.ModuleBuilder().drive("rotation").by(function(t) {
                return new components_1.Vector(0, 0, 200).scale(t);
            }).relative().build(),
            new modules_1.ModuleBuilder().drive("size").by(new components_1.NumericSpline({
                time: 0,
                value: 0
            }, {
                time: 0.3,
                value: 1
            }, {
                time: 0.7,
                value: 1
            }, {
                time: 1,
                value: 0
            })).through("relativeLifetime").relative().build(),
            new modules_1.ModuleBuilder().drive("opacity").by(new components_1.NumericSpline({
                time: 0,
                value: 1
            }, {
                time: 0.5,
                value: 1
            }, {
                time: 1,
                value: 0
            })).through("relativeLifetime").build(), 
        ],
        shapes: "star"
    }, options);
    var emitter = __1.scene.current.createEmitter({
        emitterOptions: {
            loops: 1,
            duration: 3,
            useGravity: false,
            modules: populated.modules
        },
        emissionOptions: {
            rate: 0,
            bursts: [
                {
                    time: 0,
                    count: populated.count
                }
            ],
            sourceSampler: sources.dynamicSource(source),
            angle: variation.range(0, 360),
            initialLifetime: populated.lifetime,
            initialSpeed: populated.speed,
            initialSize: populated.size,
            initialRotation: populated.rotation,
            initialColor: populated.color
        },
        rendererOptions: {
            applyLighting: undefined,
            shapeFactory: populated.shapes
        }
    });
    return emitter;
}
exports.sparkles = sparkles;

},{"..":"4CZH0","../components":"c3SI7","../systems/modules":"kmomM","../systems/random":"5H16q","../systems/sources":"hwKSl","../systems/variation":"3vUvI","../util":"9d1t4"}],"TyEjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
class Game {
    constructor(board, ...players){
        this.board = board;
        const colors = [
            "blue",
            "red"
        ];
        this.players = [];
        let i = 0;
        players.map((playerName)=>{
            this.players.push({
                name: playerName,
                score: 0,
                color: colors[i]
            });
            i++;
        });
        this.currentPlayer = 0;
    }
    isLinePlayed(x, y, direction) {
        return this.board.board[y][x].linesOwners[direction] != null;
    }
    playLine(x, y, direction, name) {
        this.board.setLineOwner(x, y, direction, name);
    }
    nextPlayer() {
        this.currentPlayer != this.players.length - 1 ? this.currentPlayer++ : this.currentPlayer = 0;
    }
    isSquareFull(square) {
        return square.linesOwners.left != null && square.linesOwners.top != null && square.linesOwners.right != null && square.linesOwners.bottom != null;
    }
    isGameFinished() {
        const boxesCount = this.board.width * this.board.height;
        let filledBoxesCount = 0;
        for(let y = 0; y < this.board.height; y++)for(let x = 0; x < this.board.width; x++){
            if (this.board.board[y][x].owner != null) filledBoxesCount++;
            else return false;
        }
        return filledBoxesCount == boxesCount;
    }
    getWinner() {
        if (this.players[0].score > this.players[1].score) return this.players[0].name;
        else if (this.players[1].score > this.players[0].score) return this.players[1].name;
        else return null;
    }
    calculateBoxes() {
        let turnScore = 0;
        let xy_arr = [];
        for(let y = 0; y < this.board.height; y++)for(let x = 0; x < this.board.width; x++){
            if (this.board.board[y][x].owner == null) {
                if (this.isSquareFull(this.board.board[y][x])) {
                    this.board.board[y][x].owner = this.players[this.currentPlayer].name;
                    turnScore++;
                    xy_arr.push([
                        x,
                        y
                    ]);
                }
            }
        }
        return {
            score: turnScore,
            xy: xy_arr
        };
    }
    playTurn(x, y, direction) {
        if (!this.isLinePlayed(x, y, direction)) {
            this.playLine(x, y, direction, this.players[this.currentPlayer].name);
            let calculation = this.calculateBoxes();
            let turnScore = calculation.score;
            if (turnScore <= 0) this.nextPlayer();
            else this.players[this.currentPlayer].score += turnScore;
            return calculation.xy;
        } else return [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7zNnw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _truncate = require("../helpers/truncate");
class UI_Infos extends HTMLElement {
    constructor(){
        super();
        const container = document.createElement("div");
        container.classList.add("game-infos-container");
        //Tailwind
        container.classList.add("container", "relative", "sm:w-fit", "w-full", "p-5", "pt-0", "flex", "flex-col", "content-top", "items-center", "mx-auto", "mt-10", "bg-slate-200", "rounded-md");
        const title = document.createElement("h1");
        title.classList.add("infos-title");
        title.appendChild(document.createTextNode("Score :"));
        //Tailwind
        title.classList.add("text-2xl", "font-bold", "mt-3", "mb-3");
        const score1 = document.createElement("span");
        const score2 = document.createElement("span");
        score1.classList.add("score-1");
        score2.classList.add("score-2");
        // Tailwind
        const attributes = [
            "mx-2"
        ];
        score1.classList.add(...attributes);
        score2.classList.add(...attributes);
        score1.innerHTML = "<strong>" + (0, _truncate.truncate)(this.game.players[0].name, 8) + "</strong>" + " : " + this.game.players[0].score.toString();
        score2.innerHTML = "<strong>" + (0, _truncate.truncate)(this.game.players[1].name, 8) + "</strong>" + " : " + this.game.players[1].score.toString();
        container.appendChild(title);
        const scoreDiv = document.createElement("div");
        scoreDiv.classList.add("scores");
        // Tailwind
        scoreDiv.classList.add("w-3/4", "sm:w-fit", "flex", "justify-between", "mb-2");
        scoreDiv.appendChild(score1);
        scoreDiv.appendChild(score2);
        container.appendChild(scoreDiv);
        const currentPlayer = document.createElement("span");
        currentPlayer.classList.add("current-player");
        currentPlayer.innerHTML = "Au tour de <strong>" + (0, _truncate.truncate)(this.game.players[this.game.currentPlayer].name, 8) + "</strong>" + " de jouer";
        container.appendChild(currentPlayer);
        this.appendChild(container);
    }
    updateScore() {
        const score1 = document.querySelector(".score-1");
        const score2 = document.querySelector(".score-2");
        const currentPlayer = document.querySelector(".current-player");
        score1.innerHTML = "<strong>" + (0, _truncate.truncate)(this.game.players[0].name, 8) + "</strong>" + " : " + this.game.players[0].score.toString();
        score2.innerHTML = "<strong>" + (0, _truncate.truncate)(this.game.players[1].name, 8) + "</strong>" + " : " + this.game.players[1].score.toString();
        currentPlayer.innerHTML = "Au tour de <strong>" + (0, _truncate.truncate)(this.game.players[this.game.currentPlayer].name, 8) + "</strong>" + " de jouer";
    }
}
exports.default = UI_Infos;

},{"../helpers/truncate":"5aKUc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5aKUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "truncate", ()=>truncate);
const truncate = (input, length)=>input.length > length ? `${input.substring(0, length)}...` : input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=game.b71e74eb.js.map
