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
        container.classList.add("container", "relative", "flex", "flex-col", "justify-center", "items-center", "m-auto", "w-full", "sm:w-1/2", "h-2/5", "sm:h-1/2", "bg-white", "shadow-sm", "rounded-md");
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
        inputsContainer.classList.add("w-3/4", "mb-5", "flex", "flex-row", "justify-between");
        const sizeLabel = document.createElement("label");
        sizeLabel.appendChild(document.createTextNode("Taille de la grille :"));
        const sizeInput = document.createElement("input");
        sizeInput.classList.add("size-input");
        sizeInput.setAttribute("type", "number");
        sizeInput.setAttribute("value", "5");
        sizeInput.setAttribute("min", "4");
        sizeInput.setAttribute("max", "20");
        // Tailwind
        sizeInput.classList.add("h-10", "w-1/4", "border", "rounded-md", "border-slate-300", "pl-1", "text-slate-600", "mb-5");
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
class UI_End extends HTMLElement {
    connectedCallback() {
        const replayButton = document.querySelector(".replay-button");
        replayButton.addEventListener("click", ()=>{
            this.replay();
        });
    }
    constructor(){
        super();
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        const container = document.createElement("div");
        container.classList.add("form-container");
        const endText = document.createElement("h1");
        endText.classList.add("end-text");
        const replayButton = document.createElement("button");
        replayButton.classList.add("replay-button");
        replayButton.appendChild(document.createTextNode("Rejouer"));
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"TyEjs":[function(require,module,exports) {
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
        scoreDiv.classList.add("w-1/2", "sm:w-fit", "flex", "justify-between", "mb-2");
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers/truncate":"5aKUc"}],"5aKUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "truncate", ()=>truncate);
const truncate = (input, length)=>input.length > length ? `${input.substring(0, length)}...` : input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
