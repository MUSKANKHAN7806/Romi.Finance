var defaultBindingOptions = {
    allowDownsampling: true,
};
export function bindToDevicePixelRatio(canvas, options) {
    if (options === void 0) {
        options = defaultBindingOptions;
    }
    return new DevicePixelRatioBinding(canvas, options);
}
var DevicePixelRatioBinding = /** @class */ (function() {
    function DevicePixelRatioBinding(canvas, options) {
        var _this = this;
        this._resolutionMediaQueryList = null;
        this._resolutionListener = function(ev) {
            return _this._onResolutionChanged();
        };
        this._canvasConfiguredListeners = [];
        this.canvas = canvas;
        this._canvasSize = {
            width: this.canvas.clientWidth,
            height: this.canvas.clientHeight,
        };
        this._options = options;
        this._configureCanvas();
        this._installResolutionListener();
    }
    DevicePixelRatioBinding.prototype.destroy = function() {
        this._canvasConfiguredListeners.length = 0;
        this._uninstallResolutionListener();
        this.canvas = null;
    };
    Object.defineProperty(DevicePixelRatioBinding.prototype, "canvasSize", {
        get: function() {
            return {
                width: this._canvasSize.width,
                height: this._canvasSize.height,
            };
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding.prototype.resizeCanvas = function(size) {
        this._canvasSize = {
            width: size.width,
            height: size.height,
        };
        this._configureCanvas();
    };
    Object.defineProperty(DevicePixelRatioBinding.prototype, "pixelRatio", {
        get: function() {
            // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
            // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
            var win = this.canvas.ownerDocument.defaultView;
            if (win == null) {
                throw new Error('No window is associated with the canvas');
            }
            return win.devicePixelRatio > 1 || this._options.allowDownsampling ? win.devicePixelRatio : 1;
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding.prototype.subscribeCanvasConfigured = function(listener) {
        this._canvasConfiguredListeners.push(listener);
    };
    DevicePixelRatioBinding.prototype.unsubscribeCanvasConfigured = function(listener) {
        this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(function(l) {
            return l != listener;
        });
    };
    DevicePixelRatioBinding.prototype._configureCanvas = function() {
        var ratio = this.pixelRatio;
        this.canvas.style.width = this._canvasSize.width + "px";
        this.canvas.style.height = this._canvasSize.height + "px";
        this.canvas.width = this._canvasSize.width * ratio;
        this.canvas.height = this._canvasSize.height * ratio;
        this._emitCanvasConfigured();
    };
    DevicePixelRatioBinding.prototype._emitCanvasConfigured = function() {
        var _this = this;
        this._canvasConfiguredListeners.forEach(function(listener) {
            return listener.call(_this);
        });
    };
    DevicePixelRatioBinding.prototype._installResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) {
            throw new Error('Resolution listener is already installed');
        }
        // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
        // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
        var win = this.canvas.ownerDocument.defaultView;
        if (win == null) {
            throw new Error('No window is associated with the canvas');
        }
        var dppx = win.devicePixelRatio;
        this._resolutionMediaQueryList = win.matchMedia("all and (resolution: " + dppx + "dppx)");
        // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
        this._resolutionMediaQueryList.addListener(this._resolutionListener);
    };
    DevicePixelRatioBinding.prototype._uninstallResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) {
            // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
            this._resolutionMediaQueryList.removeListener(this._resolutionListener);
            this._resolutionMediaQueryList = null;
        }
    };
    DevicePixelRatioBinding.prototype._reinstallResolutionListener = function() {
        this._uninstallResolutionListener();
        this._installResolutionListener();
    };
    DevicePixelRatioBinding.prototype._onResolutionChanged = function() {
        this._configureCanvas();
        this._reinstallResolutionListener();
    };
    return DevicePixelRatioBinding;
}());