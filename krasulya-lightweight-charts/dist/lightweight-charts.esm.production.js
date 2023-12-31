/*!
 * @license
 * TradingView Lightweight Charts v3.4.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
import {
    bindToDevicePixelRatio as t
} from "fancy-canvas/coordinate-space";
var i, n;

function h(t, i) {
    var n, h = ((n = {})[0] = [], n[1] = [t.lineWidth, t.lineWidth], n[2] = [2 * t.lineWidth, 2 * t.lineWidth], n[3] = [6 * t.lineWidth, 6 * t.lineWidth], n[4] = [t.lineWidth, 4 * t.lineWidth], n)[i];
    t.setLineDash(h)
}

function s(t, i, n, h) {
    t.beginPath();
    var s = t.lineWidth % 2 ? .5 : 0;
    t.moveTo(n, i + s), t.lineTo(h, i + s), t.stroke()
}! function(t) {
    t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps"
}(i || (i = {})),
function(t) {
    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted"
}(n || (n = {}));
var r = function(t, i) {
    return (r = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, i) {
            t.__proto__ = i
        } || function(t, i) {
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        })(t, i)
};

function e(t, i) {
    if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

    function n() {
        this.constructor = t
    }
    r(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
}
var u = function() {
    return (u = Object.assign || function(t) {
        for (var i, n = 1, h = arguments.length; n < h; n++)
            for (var s in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
        return t
    }).apply(this, arguments)
};

function a(t, i) {
    for (var n = 0, h = i.length, s = t.length; n < h; n++, s++) t[s] = i[n];
    return t
}

function o(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""))
}

function l(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t
}

function f(t) {
    if (null === t) throw new Error("Value is null");
    return t
}

function c(t) {
    return f(l(t))
}

function v(t) {
    for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
    for (var h = 0, s = i; h < s.length; h++) {
        var r = s[h];
        for (var e in r) void 0 !== r[e] && ("object" != typeof r[e] || void 0 === t[e] ? t[e] = r[e] : v(t[e], r[e]))
    }
    return t
}

function _(t) {
    return "number" == typeof t && isFinite(t)
}

function d(t) {
    return "number" == typeof t && t % 1 == 0
}

function w(t) {
    return "string" == typeof t
}

function M(t) {
    return "boolean" == typeof t
}

function b(t) {
    var i, n, h, s = t;
    if (!s || "object" != typeof s) return s;
    for (n in i = Array.isArray(s) ? [] : {}, s) s.hasOwnProperty(n) && (h = s[n], i[n] = h && "object" == typeof h ? b(h) : h);
    return i
}

function m(t) {
    return null !== t
}

function g(t) {
    return null === t ? void 0 : t
}
var p = function() {
        function t() {
            this.t = []
        }
        return t.prototype.i = function(t) {
            this.t = t
        }, t.prototype.h = function(t, i, n, h) {
            this.t.forEach((function(s) {
                t.save(), s.h(t, i, n, h), t.restore()
            }))
        }, t
    }(),
    y = function() {
        function t() {}
        return t.prototype.h = function(t, i, n, h) {
            t.save(), t.scale(i, i), this.u(t, n, h), t.restore()
        }, t.prototype.o = function(t, i, n, h) {
            t.save(), t.scale(i, i), this.l(t, n, h), t.restore()
        }, t.prototype.l = function(t, i, n) {}, t
    }(),
    k = function(t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.v = null, i
        }
        return e(i, t), i.prototype._ = function(t) {
            this.v = t
        }, i.prototype.u = function(t) {
            if (null !== this.v && null !== this.v.M) {
                var i = this.v.M,
                    n = this.v,
                    h = function(h) {
                        t.beginPath();
                        for (var s = i.to - 1; s >= i.from; --s) {
                            var r = n.m[s];
                            t.moveTo(r.g, r.p), t.arc(r.g, r.p, h, 0, 2 * Math.PI)
                        }
                        t.fill()
                    };
                t.fillStyle = n.k, h(n.N + 2), t.fillStyle = n.S, h(n.N)
            }
        }, i
    }(y);
var x = {
        from: 0,
        to: 1
    },
    N = function() {
        function t(t, i) {
            this.C = new p, this.D = [], this.T = [], this.B = !0, this.L = t, this.A = i, this.C.i(this.D)
        }
        return t.prototype.V = function(t) {
            var i = this,
                n = this.L.O();
            n.length !== this.D.length && (this.T = n.map((function() {
                return {
                    m: [{
                        g: 0,
                        p: 0,
                        P: 0,
                        F: 0
                    }],
                    S: "",
                    k: i.L.I().layout.backgroundColor,
                    N: 0,
                    M: null
                }
            })), this.D = this.T.map((function(t) {
                var i = new k;
                return i._(t), i
            })), this.C.i(this.D)), this.B = !0
        }, t.prototype.W = function(t, i, n) {
            return this.B && (this.R(), this.B = !1), this.C
        }, t.prototype.R = function() {
            var t = this,
                i = this.L.O(),
                n = this.A.j(),
                h = this.L.U();
            i.forEach((function(i, s) {
                var r = t.T[s],
                    e = i.q(n);
                if (null !== e && i.H()) {
                    var u = f(i.Y());
                    r.S = e.K, r.k = e.$, r.N = e.N, r.m[0].F = e.F, r.m[0].p = i.Z().X(e.F, u.J), r.m[0].P = n, r.m[0].g = h.G(n), r.M = x
                } else r.M = null
            }))
        }, t
    }(),
    S = function() {
        function t(t) {
            this.tt = t
        }
        return t.prototype.h = function(t, i, n, r) {
            if (null !== this.tt) {
                var e = this.tt.it.H,
                    u = this.tt.nt.H;
                if (e || u) {
                    t.save();
                    var a = Math.round(this.tt.g * i),
                        o = Math.round(this.tt.p * i),
                        l = Math.ceil(this.tt.ht * i),
                        f = Math.ceil(this.tt.st * i);
                    t.lineCap = "butt", e && a >= 0 && (t.lineWidth = Math.floor(this.tt.it.rt * i), t.strokeStyle = this.tt.it.et, t.fillStyle = this.tt.it.et, h(t, this.tt.it.ut), function(t, i, n, h) {
                        t.beginPath();
                        var s = t.lineWidth % 2 ? .5 : 0;
                        t.moveTo(i + s, n), t.lineTo(i + s, h), t.stroke()
                    }(t, a, 0, f)), u && o >= 0 && (t.lineWidth = Math.floor(this.tt.nt.rt * i), t.strokeStyle = this.tt.nt.et, t.fillStyle = this.tt.nt.et, h(t, this.tt.nt.ut), s(t, o, 0, l)), t.restore()
                }
            }
        }, t
    }(),
    C = function() {
        function t(t) {
            this.B = !0, this.at = {
                it: {
                    rt: 1,
                    ut: 0,
                    et: "",
                    H: !1
                },
                nt: {
                    rt: 1,
                    ut: 0,
                    et: "",
                    H: !1
                },
                ht: 0,
                st: 0,
                g: 0,
                p: 0
            }, this.ot = new S(this.at), this.lt = t
        }
        return t.prototype.V = function() {
            this.B = !0
        }, t.prototype.W = function(t, i) {
            return this.B && (this.R(), this.B = !1), this.ot
        }, t.prototype.R = function() {
            var t = this.lt.H(),
                i = f(this.lt.ft()),
                n = i.ct().I().crosshair,
                h = this.at;
            h.nt.H = t && this.lt.vt(i), h.it.H = t && this.lt._t(), h.nt.rt = n.horzLine.width, h.nt.ut = n.horzLine.style, h.nt.et = n.horzLine.color, h.it.rt = n.vertLine.width, h.it.ut = n.vertLine.style, h.it.et = n.vertLine.color, h.ht = i.dt(), h.st = i.wt(), h.g = this.lt.Mt(), h.p = this.lt.bt()
        }, t
    }(),
    D = {
        khaki: "#f0e68c",
        azure: "#f0ffff",
        aliceblue: "#f0f8ff",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        gray: "#808080",
        green: "#008000",
        honeydew: "#f0fff0",
        floralwhite: "#fffaf0",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lemonchiffon: "#fffacd",
        hotpink: "#ff69b4",
        lightyellow: "#ffffe0",
        greenyellow: "#adff2f",
        lightgoldenrodyellow: "#fafad2",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        lightcyan: "#e0ffff",
        magenta: "#f0f",
        maroon: "#800000",
        olive: "#808000",
        orange: "#ffa500",
        oldlace: "#fdf5e6",
        mediumblue: "#0000cd",
        transparent: "#0000",
        lime: "#0f0",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        midnightblue: "#191970",
        orchid: "#da70d6",
        mediumorchid: "#ba55d3",
        mediumturquoise: "#48d1cc",
        orangered: "#ff4500",
        royalblue: "#4169e1",
        powderblue: "#b0e0e6",
        red: "#f00",
        coral: "#ff7f50",
        turquoise: "#40e0d0",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        wheat: "#f5deb3",
        teal: "#008080",
        steelblue: "#4682b4",
        bisque: "#ffe4c4",
        aquamarine: "#7fffd4",
        aqua: "#0ff",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        springgreen: "#00ff7f",
        antiquewhite: "#faebd7",
        burlywood: "#deb887",
        brown: "#a52a2a",
        beige: "#f5f5dc",
        chocolate: "#d2691e",
        chartreuse: "#7fff00",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cadetblue: "#5f9ea0",
        tomato: "#ff6347",
        fuchsia: "#f0f",
        blue: "#00f",
        salmon: "#fa8072",
        blanchedalmond: "#ffebcd",
        slateblue: "#6a5acd",
        slategray: "#708090",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        cyan: "#0ff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        blueviolet: "#8a2be2",
        black: "#000",
        darkmagenta: "#8b008b",
        darkslateblue: "#483d8b",
        darkkhaki: "#bdb76b",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkgreen: "#006400",
        darkred: "#8b0000",
        dodgerblue: "#1e90ff",
        darkslategray: "#2f4f4f",
        dimgray: "#696969",
        deepskyblue: "#00bfff",
        firebrick: "#b22222",
        forestgreen: "#228b22",
        indigo: "#4b0082",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        feldspar: "#d19275",
        indianred: "#cd5c5c",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightskyblue: "#87cefa",
        lightslategray: "#789",
        lightslateblue: "#8470ff",
        snow: "#fffafa",
        lightseagreen: "#20b2aa",
        lightsalmon: "#ffa07a",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        mediumpurple: "#9370d8",
        mediumaquamarine: "#66cdaa",
        skyblue: "#87ceeb",
        lavender: "#e6e6fa",
        lightsteelblue: "#b0c4de",
        mediumvioletred: "#c71585",
        mintcream: "#f5fffa",
        navajowhite: "#ffdead",
        navy: "#000080",
        olivedrab: "#6b8e23",
        palevioletred: "#d87093",
        violetred: "#d02090",
        yellow: "#ff0",
        yellowgreen: "#9acd32",
        lawngreen: "#7cfc00",
        pink: "#ffc0cb",
        paleturquoise: "#afeeee",
        palegoldenrod: "#eee8aa",
        darkolivegreen: "#556b2f",
        darkseagreen: "#8fbc8f",
        darkturquoise: "#00ced1",
        peachpuff: "#ffdab9",
        deeppink: "#ff1493",
        violet: "#ee82ee",
        palegreen: "#98fb98",
        mediumseagreen: "#3cb371",
        peru: "#cd853f",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        purple: "#800080",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        papayawhip: "#ffefd5",
        mediumslateblue: "#7b68ee",
        plum: "#dda0dd",
        mediumspringgreen: "#00fa9a"
    };

function T(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0
}
var B = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    E = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    L = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
    A = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

function V(t) {
    var i, n = function(t) {
        var i;
        if ((t = t.toLowerCase()) in D && (t = D[t]), i = A.exec(t) || L.exec(t)) return [T(parseInt(i[1], 10)), T(parseInt(i[2], 10)), T(parseInt(i[3], 10))];
        if (i = E.exec(t)) return [T(parseInt(i[1], 16)), T(parseInt(i[2], 16)), T(parseInt(i[3], 16))];
        if (i = B.exec(t)) return [T(17 * parseInt(i[1], 16)), T(17 * parseInt(i[2], 16)), T(17 * parseInt(i[3], 16))];
        throw new Error("Cannot parse color: " + t)
    }(t);
    return {
        gt: "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")",
        yt: (i = n, .199 * i[0] + .687 * i[1] + .114 * i[2] > 160 ? "black" : "white")
    }
}

function O(t, i, n, h, s, r) {
    t.fillRect(i + r, n, h - 2 * r, r), t.fillRect(i + r, n + s - r, h - 2 * r, r), t.fillRect(i, n, r, s), t.fillRect(i + h - r, n, r, s)
}

function z(t, i, n) {
    t.save(), t.scale(i, i), n(), t.restore()
}

function P(t, i, n, h, s, r) {
    t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, n, h, s), t.restore()
}
var F, I = function() {
        function t(t, i) {
            this._(t, i)
        }
        return t.prototype._ = function(t, i) {
            this.tt = t, this.kt = i
        }, t.prototype.h = function(t, i, n, h, s, r) {
            if (this.tt.H) {
                t.font = i.xt;
                var e = this.tt.Nt || !this.tt.St ? i.Ct : 0,
                    u = i.Dt,
                    a = i.Tt,
                    o = i.Bt,
                    l = i.Et,
                    f = i.Lt,
                    c = this.tt.At,
                    v = Math.ceil(n.Vt(t, c)),
                    _ = i.Ot,
                    d = i.zt + a + o,
                    w = Math.ceil(.5 * d),
                    M = u + v + l + f + e,
                    b = this.kt.Pt;
                this.kt.Ft && (b = this.kt.Ft);
                var m, g, p = (b = Math.round(b)) - w,
                    y = p + d,
                    k = "right" === s,
                    x = k ? h : 0,
                    N = Math.ceil(h * r),
                    S = x;
                if (t.fillStyle = this.kt.gt, t.lineWidth = 1, t.lineCap = "butt", c) {
                    k ? (m = x - e, g = (S = x - M) + f) : (S = x + M, m = x + e, g = x + u + e + l);
                    var C = Math.max(1, Math.floor(r)),
                        D = Math.max(1, Math.floor(u * r)),
                        T = k ? N : 0,
                        B = Math.round(p * r),
                        E = Math.round(S * r),
                        L = Math.round(b * r) - Math.floor(.5 * r),
                        A = L + C + (L - B),
                        V = Math.round(m * r);
                    t.save(), t.beginPath(), t.moveTo(T, B), t.lineTo(E, B), t.lineTo(E, A), t.lineTo(T, A), t.fill(), t.fillStyle = this.tt.$, t.fillRect(k ? N - D : 0, B, D, A - B), this.tt.Nt && (t.fillStyle = this.kt.et, t.fillRect(T, L, V - T, C)), t.textAlign = "left", t.fillStyle = this.kt.et, z(t, r, (function() {
                        t.fillText(c, g, y - o - _)
                    })), t.restore()
                }
            }
        }, t.prototype.wt = function(t, i) {
            return this.tt.H ? t.zt + t.Tt + t.Bt : 0
        }, t
    }(),
    W = function() {
        function t(t) {
            this.It = {
                Pt: 0,
                et: "#FFF",
                gt: "#000"
            }, this.Wt = {
                At: "",
                H: !1,
                Nt: !0,
                St: !1,
                $: ""
            }, this.Rt = {
                At: "",
                H: !1,
                Nt: !1,
                St: !0,
                $: ""
            }, this.B = !0, this.jt = new(t || I)(this.Wt, this.It), this.Ut = new(t || I)(this.Rt, this.It)
        }
        return t.prototype.At = function() {
            return this.Wt.At
        }, t.prototype.Pt = function() {
            return this.qt(), this.It.Pt
        }, t.prototype.V = function() {
            this.B = !0
        }, t.prototype.wt = function(t, i) {
            return void 0 === i && (i = !1), Math.max(this.jt.wt(t, i), this.Ut.wt(t, i))
        }, t.prototype.Ht = function() {
            return this.It.Ft || 0
        }, t.prototype.Yt = function(t) {
            this.It.Ft = t
        }, t.prototype.Kt = function() {
            return this.qt(), this.Wt.H || this.Rt.H
        }, t.prototype.$t = function() {
            return this.qt(), this.Wt.H
        }, t.prototype.W = function(t) {
            return this.qt(), this.Wt.Nt = this.Wt.Nt && t.I().drawTicks, this.Rt.Nt = this.Rt.Nt && t.I().drawTicks, this.jt._(this.Wt, this.It), this.Ut._(this.Rt, this.It), this.jt
        }, t.prototype.Xt = function() {
            return this.qt(), this.jt._(this.Wt, this.It), this.Ut._(this.Rt, this.It), this.Ut
        }, t.prototype.qt = function() {
            this.B && (this.Wt.Nt = !0, this.Rt.Nt = !1, this.Zt(this.Wt, this.Rt, this.It))
        }, t
    }(),
    R = function(t) {
        function i(i, n, h) {
            var s = t.call(this) || this;
            return s.lt = i, s.Jt = n, s.Gt = h, s
        }
        return e(i, t), i.prototype.Zt = function(t, i, n) {
            t.H = !1;
            var h = this.lt.I().horzLine;
            if (h.labelVisible) {
                var s = this.Jt.Y();
                if (this.lt.H() && !this.Jt.Qt() && null !== s) {
                    var r = V(h.labelBackgroundColor);
                    n.gt = r.gt, n.et = r.yt;
                    var e = this.Gt(this.Jt);
                    n.Pt = e.Pt, t.At = this.Jt.ti(e.F, s), t.H = !0
                }
            }
        }, i
    }(W),
    j = /[1-9]/g,
    U = function() {
        function t() {
            this.tt = null
        }
        return t.prototype._ = function(t) {
            this.tt = t
        }, t.prototype.h = function(t, i, n) {
            var h = this;
            if (null !== this.tt && !1 !== this.tt.H && 0 !== this.tt.At.length) {
                t.font = i.xt;
                var s = Math.round(i.ii.Vt(t, this.tt.At, j));
                if (!(s <= 0)) {
                    t.save();
                    var r = i.ni,
                        e = s + 2 * r,
                        u = e / 2,
                        a = this.tt.dt,
                        o = this.tt.Pt,
                        l = Math.floor(o - u) + .5;
                    l < 0 ? (o += Math.abs(0 - l), l = Math.floor(o - u) + .5) : l + e > a && (o -= Math.abs(a - (l + e)), l = Math.floor(o - u) + .5);
                    var c = l + e,
                        v = 0 + i.Dt + i.Tt + i.zt + i.Bt;
                    t.fillStyle = this.tt.gt;
                    var _ = Math.round(l * n),
                        d = Math.round(0 * n),
                        w = Math.round(c * n),
                        M = Math.round(v * n);
                    t.fillRect(_, d, w - _, M - d);
                    var b = Math.round(this.tt.Pt * n),
                        m = d,
                        g = Math.round((m + i.Dt + i.Ct) * n);
                    t.fillStyle = this.tt.et;
                    var p = Math.max(1, Math.floor(n)),
                        y = Math.floor(.5 * n);
                    t.fillRect(b - y, m, p, g - m);
                    var k = v - i.Ot - i.Bt;
                    t.textAlign = "left", t.fillStyle = this.tt.et, z(t, n, (function() {
                        t.fillText(f(h.tt).At, l + r, k)
                    })), t.restore()
                }
            }
        }, t
    }(),
    q = function() {
        function t(t, i, n) {
            this.B = !0, this.ot = new U, this.at = {
                H: !1,
                gt: "#4c525e",
                et: "white",
                At: "",
                dt: 0,
                Pt: NaN
            }, this.A = t, this.hi = i, this.Gt = n
        }
        return t.prototype.V = function() {
            this.B = !0
        }, t.prototype.W = function() {
            return this.B && (this.R(), this.B = !1), this.ot._(this.at), this.ot
        }, t.prototype.R = function() {
            var t = this.at;
            t.H = !1;
            var i = this.A.I().vertLine;
            if (i.labelVisible) {
                var n = this.hi.U();
                if (!n.Qt()) {
                    var h = n.si(this.A.j());
                    t.dt = n.dt();
                    var s = this.Gt();
                    if (s.P) {
                        t.Pt = s.Pt, t.At = n.ri(f(h)), t.H = !0;
                        var r = V(i.labelBackgroundColor);
                        t.gt = r.gt, t.et = r.yt
                    }
                }
            }
        }, t
    }(),
    H = function() {
        function t() {
            this.ei = null, this.ui = 0
        }
        return t.prototype.ai = function() {
            return this.ui
        }, t.prototype.oi = function(t) {
            this.ui = t
        }, t.prototype.Z = function() {
            return this.ei
        }, t.prototype.li = function(t) {
            this.ei = t
        }, t.prototype.fi = function(t, i) {
            return []
        }, t.prototype.ci = function(t) {
            return []
        }, t.prototype.vi = function() {
            return []
        }, t.prototype.H = function() {
            return !0
        }, t
    }();
! function(t) {
    t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet"
}(F || (F = {}));
var Y = function(t) {
        function i(i, n) {
            var h = t.call(this) || this;
            h._i = null, h.di = NaN, h.wi = 0, h.Mi = !0, h.bi = new Map, h.mi = !1, h.gi = NaN, h.pi = NaN, h.yi = NaN, h.ki = NaN, h.hi = i, h.xi = n, h.Ni = new N(i, h);
            var s, r;
            h.Si = (s = function() {
                return h.di
            }, r = function() {
                return h.pi
            }, function(t) {
                var i = r(),
                    n = s();
                if (t === f(h._i).Ci()) return {
                    F: n,
                    Pt: i
                };
                var e = f(t.Y());
                return {
                    F: t.Di(i, e),
                    Pt: i
                }
            });
            var e = function(t, i) {
                return function() {
                    return {
                        P: h.hi.U().si(t()),
                        Pt: i()
                    }
                }
            }((function() {
                return h.wi
            }), (function() {
                return h.Mt()
            }));
            return h.Ti = new q(h, i, e), h.Bi = new C(h), h
        }
        return e(i, t), i.prototype.I = function() {
            return this.xi
        }, i.prototype.Ei = function(t, i) {
            this.yi = t, this.ki = i
        }, i.prototype.Li = function() {
            this.yi = NaN, this.ki = NaN
        }, i.prototype.Ai = function() {
            return this.yi
        }, i.prototype.Vi = function() {
            return this.ki
        }, i.prototype.Oi = function(t, i, n) {
            this.mi || (this.mi = !0), this.Mi = !0, this.zi(t, i, n)
        }, i.prototype.j = function() {
            return this.wi
        }, i.prototype.Mt = function() {
            return this.gi
        }, i.prototype.bt = function() {
            return this.pi
        }, i.prototype.H = function() {
            return this.Mi
        }, i.prototype.Pi = function() {
            this.Mi = !1, this.Fi(), this.di = NaN, this.gi = NaN, this.pi = NaN, this._i = null, this.Li()
        }, i.prototype.ci = function(t) {
            return null !== this._i ? [this.Bi, this.Ni] : []
        }, i.prototype.vt = function(t) {
            return t === this._i && this.xi.horzLine.visible
        }, i.prototype._t = function() {
            return this.xi.vertLine.visible
        }, i.prototype.fi = function(t, i) {
            this.Mi && this._i === t || this.bi.clear();
            var n = [];
            return this._i === t && n.push(this.Ii(this.bi, i, this.Si)), n
        }, i.prototype.vi = function() {
            return this.Mi ? [this.Ti] : []
        }, i.prototype.ft = function() {
            return this._i
        }, i.prototype.Wi = function() {
            this.Bi.V(), this.bi.forEach((function(t) {
                return t.V()
            })), this.Ti.V(), this.Ni.V()
        }, i.prototype.Ri = function(t) {
            return t && !t.Ci().Qt() ? t.Ci() : null
        }, i.prototype.zi = function(t, i, n) {
            this.ji(t, i, n) && this.Wi()
        }, i.prototype.ji = function(t, i, n) {
            var h = this.gi,
                s = this.pi,
                r = this.di,
                e = this.wi,
                u = this._i,
                a = this.Ri(n);
            this.wi = t, this.gi = isNaN(t) ? NaN : this.hi.U().G(t), this._i = n;
            var o = null !== a ? a.Y() : null;
            return null !== a && null !== o ? (this.di = i, this.pi = a.X(i, o)) : (this.di = NaN, this.pi = NaN), h !== this.gi || s !== this.pi || e !== this.wi || r !== this.di || u !== this._i
        }, i.prototype.Fi = function() {
            var t = this.hi.O().map((function(t) {
                    return t.qi().Ui()
                })).filter(m),
                i = 0 === t.length ? null : Math.max.apply(Math, t);
            this.wi = null !== i ? i : NaN
        }, i.prototype.Ii = function(t, i, n) {
            var h = t.get(i);
            return void 0 === h && (h = new R(this, i, n), t.set(i, h)), h
        }, i
    }(H),
    K = ".";

function $(t, i) {
    if (!_(t)) return "n/a";
    if (!d(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i)
}
var X = function() {
        function t(t, i) {
            if (i || (i = 1), _(t) && d(t) || (t = 100), t < 0) throw new TypeError("invalid base");
            this.Jt = t, this.Hi = i, this.Yi()
        }
        return t.prototype.Ki = function(t) {
            var i = t < 0 ? "−" : "";
            return t = Math.abs(t), i + this.$i(t)
        }, t.prototype.Yi = function() {
            if (this.Xi = 0, this.Jt > 0 && this.Hi > 0)
                for (var t = this.Jt; t > 1;) t /= 10, this.Xi++
        }, t.prototype.$i = function(t) {
            var i = this.Jt / this.Hi,
                n = Math.floor(t),
                h = "",
                s = void 0 !== this.Xi ? this.Xi : NaN;
            if (i > 1) {
                var r = +(Math.round(t * i) - n * i).toFixed(this.Xi);
                r >= i && (r -= i, n += 1), h = K + $(+r.toFixed(this.Xi) * this.Hi, s)
            } else n = Math.round(n * i) / i, s > 0 && (h = K + $(0, s));
            return n.toFixed(0) + h
        }, t
    }(),
    Z = function(t) {
        function i(i) {
            return void 0 === i && (i = 100), t.call(this, i) || this
        }
        return e(i, t), i.prototype.Ki = function(i) {
            return t.prototype.Ki.call(this, i) + "%"
        }, i
    }(X),
    J = function() {
        function t() {
            this.Zi = []
        }
        return t.prototype.Ji = function(t, i, n) {
            var h = {
                Gi: t,
                Qi: i,
                tn: !0 === n
            };
            this.Zi.push(h)
        }, t.prototype.nn = function(t) {
            var i = this.Zi.findIndex((function(i) {
                return t === i.Gi
            }));
            i > -1 && this.Zi.splice(i, 1)
        }, t.prototype.hn = function(t) {
            this.Zi = this.Zi.filter((function(i) {
                return i.Qi === t
            }))
        }, t.prototype.sn = function(t, i) {
            var n = a([], this.Zi);
            this.Zi = this.Zi.filter((function(t) {
                return !t.tn
            })), n.forEach((function(n) {
                return n.Gi(t, i)
            }))
        }, t.prototype.rn = function() {
            return this.Zi.length > 0
        }, t.prototype.en = function() {
            this.Zi = []
        }, t
    }(),
    G = function() {
        function t(t, i) {
            this.un = t, this.an = i
        }
        return t.prototype.on = function(t) {
            return null !== t && (this.un === t.un && this.an === t.an)
        }, t.prototype.ln = function() {
            return new t(this.un, this.an)
        }, t.prototype.fn = function() {
            return this.un
        }, t.prototype.cn = function() {
            return this.an
        }, t.prototype.vn = function() {
            return this.an - this.un
        }, t.prototype.Qt = function() {
            return this.an === this.un || Number.isNaN(this.an) || Number.isNaN(this.un)
        }, t.prototype._n = function(i) {
            return null === i ? this : new t(Math.min(this.fn(), i.fn()), Math.max(this.cn(), i.cn()))
        }, t.prototype.dn = function(t) {
            if (_(t) && 0 !== this.an - this.un) {
                var i = .5 * (this.an + this.un),
                    n = this.an - i,
                    h = this.un - i;
                n *= t, h *= t, this.an = i + n, this.un = i + h
            }
        }, t.prototype.wn = function(t) {
            _(t) && (this.an += t, this.un += t)
        }, t.prototype.Mn = function() {
            return {
                minValue: this.un,
                maxValue: this.an
            }
        }, t.bn = function(i) {
            return null === i ? null : new t(i.minValue, i.maxValue)
        }, t
    }();

function Q(t, i, n) {
    return Math.min(Math.max(t, i), n)
}

function tt(t, i, n) {
    return i - t <= n
}

function it(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10)
}

function nt(t) {
    var i = Math.ceil(t);
    return i % 2 != 0 ? i - 1 : i
}

function ht(t) {
    var i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i
}

function st(t, i) {
    var n = 100 * (t - i) / i;
    return i < 0 ? -n : n
}

function rt(t, i) {
    var n = st(t.fn(), i),
        h = st(t.cn(), i);
    return new G(n, h)
}

function et(t, i) {
    var n = 100 * (t - i) / i + 100;
    return i < 0 ? -n : n
}

function ut(t, i) {
    var n = et(t.fn(), i),
        h = et(t.cn(), i);
    return new G(n, h)
}

function at(t) {
    var i = Math.abs(t);
    if (i < 1e-8) return 0;
    var n = it(i + 1e-4) + 4;
    return t < 0 ? -n : n
}

function ot(t) {
    var i = Math.abs(t);
    if (i < 1e-8) return 0;
    var n = Math.pow(10, i - 4) - 1e-4;
    return t < 0 ? -n : n
}

function lt(t) {
    if (null === t) return null;
    var i = at(t.fn()),
        n = at(t.cn());
    return new G(i, n)
}
var ft, ct = function() {
        function t(t, i) {
            if (this.mn = t, this.gn = i, function(t) {
                    if (t < 0) return !1;
                    for (var i = t; i > 1; i /= 10)
                        if (i % 10 != 0) return !1;
                    return !0
                }(this.mn)) this.pn = [2, 2.5, 2];
            else {
                this.pn = [];
                for (var n = this.mn; 1 !== n;) {
                    if (n % 2 == 0) this.pn.push(2), n /= 2;
                    else {
                        if (n % 5 != 0) throw new Error("unexpected base");
                        this.pn.push(2, 2.5), n /= 5
                    }
                    if (this.pn.length > 100) throw new Error("something wrong with base")
                }
            }
        }
        return t.prototype.yn = function(t, i, n) {
            for (var h, s, r, e = 0 === this.mn ? 0 : 1 / this.mn, u = 1e-9, a = Math.pow(10, Math.max(0, Math.ceil(it(t - i)))), o = 0, l = this.gn[0];;) {
                var f = tt(a, e, u) && a > e + u,
                    c = tt(a, n * l, u),
                    v = tt(a, 1, u);
                if (!(f && c && v)) break;
                a /= l, l = this.gn[++o % this.gn.length]
            }
            if (a <= e + u && (a = e), a = Math.max(1, a), this.pn.length > 0 && (h = a, s = 1, r = u, Math.abs(h - s) < r))
                for (o = 0, l = this.pn[0]; tt(a, n * l, u) && a > e + u;) a /= l, l = this.pn[++o % this.pn.length];
            return a
        }, t
    }(),
    vt = function() {
        function t(t, i, n, h) {
            this.kn = [], this.Jt = t, this.mn = i, this.xn = n, this.Nn = h
        }
        return t.prototype.yn = function(t, i) {
            if (t < i) throw new Error("high < low");
            var n = this.Jt.wt(),
                h = (t - i) * this.Sn() / n,
                s = new ct(this.mn, [2, 2.5, 2]),
                r = new ct(this.mn, [2, 2, 2.5]),
                e = new ct(this.mn, [2.5, 2, 2]),
                u = [];
            return u.push(s.yn(t, i, h), r.yn(t, i, h), e.yn(t, i, h)),
                function(t) {
                    if (t.length < 1) throw Error("array is empty");
                    for (var i = t[0], n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
                    return i
                }(u)
        }, t.prototype.Cn = function() {
            var t = this.Jt,
                i = t.Y();
            if (null !== i) {
                var n = t.wt(),
                    h = this.xn(n - 1, i),
                    s = this.xn(0, i),
                    r = this.Jt.I().entireTextOnly ? this.Dn() / 2 : 0,
                    e = r,
                    u = n - 1 - r,
                    a = Math.max(h, s),
                    o = Math.min(h, s);
                if (a !== o) {
                    for (var l = this.yn(a, o), f = a % l, c = a >= o ? 1 : -1, v = null, _ = 0, d = a - (f += f < 0 ? l : 0); d > o; d -= l) {
                        var w = this.Nn(d, i, !0);
                        null !== v && Math.abs(w - v) < this.Sn() || (w < e || w > u || (_ < this.kn.length ? (this.kn[_].Tn = w, this.kn[_].Bn = t.En(d)) : this.kn.push({
                            Tn: w,
                            Bn: t.En(d)
                        }), _++, v = w, t.Ln() && (l = this.yn(d * c, o))))
                    }
                    this.kn.length = _
                } else this.kn = []
            } else this.kn = []
        }, t.prototype.An = function() {
            return this.kn
        }, t.prototype.Dn = function() {
            return this.Jt.zt()
        }, t.prototype.Sn = function() {
            return Math.ceil(2.5 * this.Dn())
        }, t
    }();

function _t(t) {
    return t.slice().sort((function(t, i) {
        return f(t.ai()) - f(i.ai())
    }))
}! function(t) {
    t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100"
}(ft || (ft = {}));
var dt, wt = new Z,
    Mt = new X(100, 1),
    bt = function() {
        function t(t, i, n, h) {
            this.Vn = 0, this.On = null, this.zn = null, this.Pn = null, this.Fn = {
                In: !1,
                Wn: null
            }, this.Rn = 0, this.jn = 0, this.Un = new J, this.qn = new J, this.Hn = [], this.Yn = null, this.Kn = null, this.$n = null, this.Xn = null, this.Zn = Mt, this.Jn = t, this.xi = i, this.Gn = n, this.Qn = h, this.th = new vt(this, 100, this.ih.bind(this), this.nh.bind(this))
        }
        return t.prototype.hh = function() {
            return this.Jn
        }, t.prototype.I = function() {
            return this.xi
        }, t.prototype.sh = function(t) {
            if (v(this.xi, t), this.rh(), void 0 !== t.mode && this.eh({
                    uh: t.mode
                }), void 0 !== t.scaleMargins) {
                var i = l(t.scaleMargins.top),
                    n = l(t.scaleMargins.bottom);
                if (i < 0 || i > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=" + i);
                if (n < 0 || n > 1 || i + n > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + n);
                if (i + n > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (i + n));
                this.ah(), this.Kn = null
            }
        }, t.prototype.oh = function() {
            return this.xi.autoScale
        }, t.prototype.Ln = function() {
            return 1 === this.xi.mode
        }, t.prototype.lh = function() {
            return 2 === this.xi.mode
        }, t.prototype.fh = function() {
            return 3 === this.xi.mode
        }, t.prototype.uh = function() {
            return {
                _h: this.xi.autoScale,
                dh: this.xi.invertScale,
                uh: this.xi.mode
            }
        }, t.prototype.eh = function(t) {
            var i = this.uh(),
                n = null;
            void 0 !== t._h && (this.xi.autoScale = t._h), void 0 !== t.uh && (this.xi.mode = t.uh, 2 !== t.uh && 3 !== t.uh || (this.xi.autoScale = !0), this.Fn.In = !1), 1 === i.uh && t.uh !== i.uh && (! function(t) {
                if (null === t) return !1;
                var i = ot(t.fn()),
                    n = ot(t.cn());
                return isFinite(i) && isFinite(n)
            }(this.zn) ? this.xi.autoScale = !0 : null !== (n = function(t) {
                if (null === t) return null;
                var i = ot(t.fn()),
                    n = ot(t.cn());
                return new G(i, n)
            }(this.zn)) && this.wh(n)), 1 === t.uh && t.uh !== i.uh && null !== (n = lt(this.zn)) && this.wh(n);
            var h = i.uh !== this.xi.mode;
            h && (2 === i.uh || this.lh()) && this.rh(), h && (3 === i.uh || this.fh()) && this.rh(), void 0 !== t.dh && i.dh !== t.dh && (this.xi.invertScale = t.dh, this.Mh()), this.qn.sn(i, this.uh())
        }, t.prototype.bh = function() {
            return this.qn
        }, t.prototype.zt = function() {
            return this.Gn.fontSize
        }, t.prototype.wt = function() {
            return this.Vn
        }, t.prototype.mh = function(t) {
            this.Vn !== t && (this.Vn = t, this.ah(), this.Kn = null)
        }, t.prototype.gh = function() {
            if (this.On) return this.On;
            var t = this.wt() - this.ph() - this.yh();
            return this.On = t, t
        }, t.prototype.kh = function() {
            return this.xh(), this.zn
        }, t.prototype.wh = function(t, i) {
            var n = this.zn;
            (i || null === n && null !== t || null !== n && !n.on(t)) && (this.Kn = null, this.zn = t)
        }, t.prototype.Qt = function() {
            return this.xh(), 0 === this.Vn || !this.zn || this.zn.Qt()
        }, t.prototype.Nh = function(t) {
            return this.dh() ? t : this.wt() - 1 - t
        }, t.prototype.X = function(t, i) {
            return this.lh() ? t = st(t, i) : this.fh() && (t = et(t, i)), this.nh(t, i)
        }, t.prototype.Sh = function(t, i, n) {
            this.xh();
            for (var h = this.yh(), s = f(this.kh()), r = s.fn(), e = s.cn(), u = this.gh() - 1, a = this.dh(), o = u / (e - r), l = void 0 === n ? 0 : n.from, c = void 0 === n ? t.length : n.to, v = this.Ch(), _ = l; _ < c; _++) {
                var d = t[_],
                    w = d.F;
                if (!isNaN(w)) {
                    var M = w;
                    null !== v && (M = v(d.F, i));
                    var b = h + o * (M - r),
                        m = a ? b : this.Vn - 1 - b;
                    d.p = m
                }
            }
        }, t.prototype.Dh = function(t, i, n) {
            this.xh();
            for (var h = this.yh(), s = f(this.kh()), r = s.fn(), e = s.cn(), u = this.gh() - 1, a = this.dh(), o = u / (e - r), l = void 0 === n ? 0 : n.from, c = void 0 === n ? t.length : n.to, v = this.Ch(), _ = l; _ < c; _++) {
                var d = t[_],
                    w = d.open,
                    M = d.high,
                    b = d.low,
                    m = d.close;
                null !== v && (w = v(d.open, i), M = v(d.high, i), b = v(d.low, i), m = v(d.close, i));
                var g = h + o * (w - r),
                    p = a ? g : this.Vn - 1 - g;
                d.Th = p, g = h + o * (M - r), p = a ? g : this.Vn - 1 - g, d.Bh = p, g = h + o * (b - r), p = a ? g : this.Vn - 1 - g, d.Eh = p, g = h + o * (m - r), p = a ? g : this.Vn - 1 - g, d.Lh = p
            }
        }, t.prototype.Di = function(t, i) {
            var n = this.ih(t, i);
            return this.Ah(n, i)
        }, t.prototype.Ah = function(t, i) {
            var n = t;
            return this.lh() ? n = function(t, i) {
                return i < 0 && (t = -t), t / 100 * i + i
            }(n, i) : this.fh() && (n = function(t, i) {
                return t -= 100, i < 0 && (t = -t), t / 100 * i + i
            }(n, i)), n
        }, t.prototype.Vh = function() {
            return this.Hn
        }, t.prototype.Oh = function() {
            if (this.Yn) return this.Yn;
            for (var t = [], i = 0; i < this.Hn.length; i++) {
                var n = this.Hn[i];
                null === n.ai() && n.oi(i + 1), t.push(n)
            }
            return t = _t(t), this.Yn = t, this.Yn
        }, t.prototype.zh = function(t) {
            -1 === this.Hn.indexOf(t) && (this.Hn.push(t), this.rh(), this.Ph())
        }, t.prototype.Fh = function(t) {
            var i = this.Hn.indexOf(t);
            if (-1 === i) throw new Error("source is not attached to scale");
            this.Hn.splice(i, 1), 0 === this.Hn.length && (this.eh({
                _h: !0
            }), this.wh(null)), this.rh(), this.Ph()
        }, t.prototype.Y = function() {
            for (var t = null, i = 0, n = this.Hn; i < n.length; i++) {
                var h = n[i].Y();
                null !== h && ((null === t || h.Ih < t.Ih) && (t = h))
            }
            return null === t ? null : t.J
        }, t.prototype.dh = function() {
            return this.xi.invertScale
        }, t.prototype.An = function() {
            return this.Kn || (this.th.Cn(), this.Kn = this.th.An(), this.Un.sn()), this.Kn
        }, t.prototype.Wh = function() {
            return this.Un
        }, t.prototype.Rh = function(t) {
            this.lh() || this.fh() || null === this.$n && null === this.Pn && (this.Qt() || (this.$n = this.Vn - t, this.Pn = f(this.kh()).ln()))
        }, t.prototype.jh = function(t) {
            if (!this.lh() && !this.fh() && null !== this.$n) {
                this.eh({
                    _h: !1
                }), (t = this.Vn - t) < 0 && (t = 0);
                var i = (this.$n + .2 * (this.Vn - 1)) / (t + .2 * (this.Vn - 1)),
                    n = f(this.Pn).ln();
                i = Math.max(i, .1), n.dn(i), this.wh(n)
            }
        }, t.prototype.Uh = function() {
            this.lh() || this.fh() || (this.$n = null, this.Pn = null)
        }, t.prototype.qh = function(t) {
            this.oh() || null === this.Xn && null === this.Pn && (this.Qt() || (this.Xn = t, this.Pn = f(this.kh()).ln()))
        }, t.prototype.Hh = function(t) {
            if (!this.oh() && null !== this.Xn) {
                var i = f(this.kh()).vn() / (this.gh() - 1),
                    n = t - this.Xn;
                this.dh() && (n *= -1);
                var h = n * i,
                    s = f(this.Pn).ln();
                s.wn(h), this.wh(s, !0), this.Kn = null
            }
        }, t.prototype.Yh = function() {
            this.oh() || null !== this.Xn && (this.Xn = null, this.Pn = null)
        }, t.prototype.Kh = function() {
            return this.Zn || this.rh(), this.Zn
        }, t.prototype.ti = function(t, i) {
            switch (this.xi.mode) {
                case 2:
                    return this.Kh().Ki(st(t, i));
                case 3:
                    return this.Kh().Ki(et(t, i));
                default:
                    return this.$h(t)
            }
        }, t.prototype.En = function(t) {
            switch (this.xi.mode) {
                case 2:
                case 3:
                    return this.Kh().Ki(t);
                default:
                    return this.$h(t)
            }
        }, t.prototype.Xh = function(t) {
            return this.$h(t, f(this.Zh()).Kh())
        }, t.prototype.Jh = function(t, i) {
            return t = st(t, i), wt.Ki(t)
        }, t.prototype.Gh = function() {
            return this.Hn
        }, t.prototype.Qh = function(t) {
            this.Fn = {
                Wn: t,
                In: !1
            }
        }, t.prototype.Wi = function() {
            this.Hn.forEach((function(t) {
                return t.Wi()
            }))
        }, t.prototype.rh = function() {
            this.Kn = null;
            var t = this.Zh(),
                i = 100;
            null !== t && (i = Math.round(1 / t.ts())), this.Zn = Mt, this.lh() ? (this.Zn = wt, i = 100) : this.fh() ? (this.Zn = new X(100, 1), i = 100) : null !== t && (this.Zn = t.Kh()), this.th = new vt(this, i, this.ih.bind(this), this.nh.bind(this)), this.th.Cn()
        }, t.prototype.Ph = function() {
            this.Yn = null
        }, t.prototype.Zh = function() {
            return this.Hn[0] || null
        }, t.prototype.ph = function() {
            return this.dh() ? this.xi.scaleMargins.bottom * this.wt() + this.jn : this.xi.scaleMargins.top * this.wt() + this.Rn
        }, t.prototype.yh = function() {
            return this.dh() ? this.xi.scaleMargins.top * this.wt() + this.Rn : this.xi.scaleMargins.bottom * this.wt() + this.jn
        }, t.prototype.xh = function() {
            this.Fn.In || (this.Fn.In = !0, this.ns())
        }, t.prototype.ah = function() {
            this.On = null
        }, t.prototype.nh = function(t, i) {
            if (this.xh(), this.Qt()) return 0;
            t = this.Ln() && t ? at(t) : t;
            var n = f(this.kh()),
                h = this.yh() + (this.gh() - 1) * (t - n.fn()) / n.vn();
            return this.Nh(h)
        }, t.prototype.ih = function(t, i) {
            if (this.xh(), this.Qt()) return 0;
            var n = this.Nh(t),
                h = f(this.kh()),
                s = h.fn() + h.vn() * ((n - this.yh()) / (this.gh() - 1));
            return this.Ln() ? ot(s) : s
        }, t.prototype.Mh = function() {
            this.Kn = null, this.th.Cn()
        }, t.prototype.ns = function() {
            var t = this.Fn.Wn;
            if (null !== t) {
                for (var i = null, n = 0, h = 0, s = 0, r = this.Gh(); s < r.length; s++) {
                    var e = r[s];
                    if (e.H()) {
                        var u = e.Y();
                        if (null !== u) {
                            var a = e.hs(t.ss(), t.rs()),
                                o = a && a.kh();
                            if (null !== o) {
                                switch (this.xi.mode) {
                                    case 1:
                                        o = lt(o);
                                        break;
                                    case 2:
                                        o = rt(o, u.J);
                                        break;
                                    case 3:
                                        o = ut(o, u.J)
                                }
                                if (i = null === i ? o : i._n(f(o)), null !== a) {
                                    var l = a.es();
                                    null !== l && (n = Math.max(n, l.above), h = Math.max(n, l.below))
                                }
                            }
                        }
                    }
                }
                if (n === this.Rn && h === this.jn || (this.Rn = n, this.jn = h, this.Kn = null, this.ah()), null !== i) {
                    if (i.fn() === i.cn()) {
                        var c = this.Zh(),
                            v = 5 * (null === c || this.lh() || this.fh() ? 1 : c.ts());
                        i = new G(i.fn() - v, i.cn() + v)
                    }
                    this.wh(i)
                } else null === this.zn && this.wh(new G(-.5, .5));
                this.Fn.In = !0
            }
        }, t.prototype.Ch = function() {
            return this.lh() ? st : this.fh() ? et : this.Ln() ? at : null
        }, t.prototype.$h = function(t, i) {
            return void 0 === this.Qn.priceFormatter ? (void 0 === i && (i = this.Kh()), i.Ki(t)) : this.Qn.priceFormatter(t)
        }, t
    }();

function mt(t) {
    void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor)
}! function(t) {
    t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible"
}(dt || (dt = {}));
var gt = function(t) {
    return t.getUTCFullYear()
};

function pt(t, i, n) {
    return i.replace(/yyyy/g, function(t) {
        return $(gt(t), 4)
    }(t)).replace(/yy/g, function(t) {
        return $(gt(t) % 100, 2)
    }(t)).replace(/MMMM/g, function(t, i) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "long"
        })
    }(t, n)).replace(/MMM/g, function(t, i) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "short"
        })
    }(t, n)).replace(/MM/g, function(t) {
        return $(function(t) {
            return t.getUTCMonth() + 1
        }(t), 2)
    }(t)).replace(/dd/g, function(t) {
        return $(function(t) {
            return t.getUTCDate()
        }(t), 2)
    }(t))
}
var yt = function() {
        function t(t, i) {
            void 0 === t && (t = "yyyy-MM-dd"), void 0 === i && (i = "default"), this.us = t, this.os = i
        }
        return t.prototype.Ki = function(t) {
            return pt(t, this.us, this.os)
        }, t
    }(),
    kt = function() {
        function t(t) {
            this.ls = t || "%h:%m:%s"
        }
        return t.prototype.Ki = function(t) {
            return this.ls.replace("%h", $(t.getUTCHours(), 2)).replace("%m", $(t.getUTCMinutes(), 2)).replace("%s", $(t.getUTCSeconds(), 2))
        }, t
    }(),
    xt = {
        fs: "yyyy-MM-dd",
        cs: "%h:%m:%s",
        vs: " ",
        _s: "default"
    },
    Nt = function() {
        function t(t) {
            void 0 === t && (t = {});
            var i = u(u({}, xt), t);
            this.ds = new yt(i.fs, i._s), this.ws = new kt(i.cs), this.Ms = i.vs
        }
        return t.prototype.Ki = function(t) {
            return "" + this.ds.Ki(t) + this.Ms + this.ws.Ki(t)
        }, t
    }();
var St = function() {
        function t(t, i) {
            void 0 === i && (i = 50), this.bs = 0, this.gs = 1, this.ps = 1, this.ys = new Map, this.ks = new Map, this.xs = t, this.Ns = i
        }
        return t.prototype.Ki = function(t) {
            var i = void 0 === t.Ss ? new Date(1e3 * t.Cs).getTime() : new Date(Date.UTC(t.Ss.year, t.Ss.month - 1, t.Ss.day)).getTime(),
                n = this.ys.get(i);
            if (void 0 !== n) return n.Ds;
            if (this.bs === this.Ns) {
                var h = this.ks.get(this.ps);
                this.ks.delete(this.ps), this.ys.delete(l(h)), this.ps++, this.bs--
            }
            var s = this.xs(t);
            return this.ys.set(i, {
                Ds: s,
                Ts: this.gs
            }), this.ks.set(this.gs, i), this.bs++, this.gs++, s
        }, t
    }(),
    Ct = function() {
        function t(t, i) {
            o(t <= i, "right should be >= left"), this.Bs = t, this.Es = i
        }
        return t.prototype.ss = function() {
            return this.Bs
        }, t.prototype.rs = function() {
            return this.Es
        }, t.prototype.Ls = function() {
            return this.Es - this.Bs + 1
        }, t.prototype.As = function(t) {
            return this.Bs <= t && t <= this.Es
        }, t.prototype.on = function(t) {
            return this.Bs === t.ss() && this.Es === t.rs()
        }, t
    }();

function Dt(t, i) {
    return null === t || null === i ? t === i : t.on(i)
}
var Tt, Bt = function() {
        function t() {
            this.Vs = new Map, this.ys = null
        }
        return t.prototype.Os = function(t) {
            var i = this;
            this.ys = null, this.Vs.clear(), t.forEach((function(t, n) {
                var h = i.Vs.get(t.zs);
                void 0 === h && (h = [], i.Vs.set(t.zs, h)), h.push({
                    Ps: n,
                    P: t.P,
                    Fs: t.zs
                })
            }))
        }, t.prototype.Is = function(t, i) {
            var n = Math.ceil(i / t);
            return null !== this.ys && this.ys.Ws === n || (this.ys = {
                An: this.Rs(n),
                Ws: n
            }), this.ys.An
        }, t.prototype.Rs = function(t) {
            for (var i = [], n = 0, h = Array.from(this.Vs.keys()).sort((function(t, i) {
                    return i - t
                })); n < h.length; n++) {
                var s = h[n];
                if (this.Vs.get(s)) {
                    var r = i;
                    i = [];
                    for (var e = r.length, u = 0, a = l(this.Vs.get(s)), o = a.length, f = 1 / 0, c = -1 / 0, v = 0; v < o; v++) {
                        for (var _ = a[v], d = _.Ps; u < e;) {
                            var w = r[u],
                                M = w.Ps;
                            if (!(M < d)) {
                                f = M;
                                break
                            }
                            u++, i.push(w), c = M, f = 1 / 0
                        }
                        f - d >= t && d - c >= t && (i.push(_), c = d)
                    }
                    for (; u < e; u++) i.push(r[u])
                }
            }
            return i
        }, t
    }(),
    Et = function() {
        function t(t) {
            this.js = t
        }
        return t.prototype.Us = function() {
            return null === this.js ? null : new Ct(Math.floor(this.js.ss()), Math.ceil(this.js.rs()))
        }, t.prototype.qs = function() {
            return this.js
        }, t.Hs = function() {
            return new t(null)
        }, t
    }();
! function(t) {
    t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds"
}(Tt || (Tt = {}));
var Lt = function() {
    function t(t, i, n) {
        this.Ys = 0, this.Ks = null, this.$s = [], this.Xn = null, this.$n = null, this.Xs = new Bt, this.Zs = new Map, this.Js = Et.Hs(), this.Gs = !0, this.Qs = new J, this.tr = new J, this.ir = new J, this.nr = null, this.hr = null, this.sr = [], this.xi = i, this.Qn = n, this.rr = i.rightOffset, this.er = i.barSpacing, this.hi = t, this.ur()
    }
    return t.prototype.I = function() {
        return this.xi
    }, t.prototype.ar = function(t) {
        v(this.Qn, t), this.lr(), this.ur()
    }, t.prototype.sh = function(t, i) {
        v(this.xi, t), this.xi.fixLeftEdge && this.cr(), void 0 !== t.barSpacing && this.hi.vr(t.barSpacing), void 0 !== t.rightOffset && this.hi._r(t.rightOffset), this.lr(), this.ur(), this.ir.sn()
    }, t.prototype.si = function(t) {
        var i;
        return (null === (i = this.$s[t]) || void 0 === i ? void 0 : i.P) || null
    }, t.prototype.dr = function(t, i) {
        if (this.$s.length < 1) return null;
        if (t.Cs > this.$s[this.$s.length - 1].P.Cs) return i ? this.$s.length - 1 : null;
        for (var n = 0; n < this.$s.length; ++n) {
            if (t.Cs === this.$s[n].P.Cs) return n;
            if (t.Cs < this.$s[n].P.Cs) return i ? n : null
        }
        return null
    }, t.prototype.Qt = function() {
        return 0 === this.Ys || 0 === this.$s.length
    }, t.prototype.wr = function() {
        return this.Mr(), this.Js.Us()
    }, t.prototype.br = function() {
        return this.Mr(), this.Js.qs()
    }, t.prototype.mr = function() {
        var t = this.wr();
        if (null === t) return null;
        var i = {
            from: t.ss(),
            to: t.rs()
        };
        return this.gr(i)
    }, t.prototype.gr = function(t) {
        var i = Math.round(t.from),
            n = Math.round(t.to),
            h = f(this.pr()),
            s = f(this.yr());
        return {
            from: f(this.si(Math.max(h, i))),
            to: f(this.si(Math.min(s, n)))
        }
    }, t.prototype.kr = function(t) {
        var i = this.hi.U();
        return {
            from: f(i.dr(t.from, !0)),
            to: f(i.dr(t.to, !0))
        }
    }, t.prototype.Nr = function() {
        return this.Xs
    }, t.prototype.dt = function() {
        return this.Ys
    }, t.prototype.Sr = function(t) {
        if (isFinite(t) && !(t <= 0) && this.Ys !== t) {
            if (this.xi.lockVisibleTimeRangeOnResize && this.Ys) {
                var i = this.er * t / this.Ys;
                this.Cr(i)
            }
            if (this.xi.fixLeftEdge) {
                var n = this.wr();
                if (null !== n)
                    if (n.ss() <= 0) {
                        var h = this.Ys - t;
                        this.rr -= Math.round(h / this.er) + 1
                    }
            }
            this.Ys = t, this.Gs = !0, this.Dr(), this.Tr()
        }
    }, t.prototype.G = function(t) {
        if (this.Qt() || !d(t)) return 0;
        var i = this.Br() + this.rr - t;
        return this.Ys - (i + .5) * this.er
    }, t.prototype.Er = function(t, i) {
        for (var n = this.Br(), h = void 0 === i ? 0 : i.from, s = void 0 === i ? t.length : i.to, r = h; r < s; r++) {
            var e = t[r].P,
                u = n + this.rr - e,
                a = this.Ys - (u + .5) * this.er;
            t[r].g = a
        }
    }, t.prototype.Lr = function(t) {
        return Math.ceil(this.Ar(t))
    }, t.prototype._r = function(t) {
        this.Gs = !0, this.rr = t, this.Tr(), this.hi.Vr(), this.hi.Or()
    }, t.prototype.zr = function() {
        return this.er
    }, t.prototype.vr = function(t) {
        this.Cr(t), this.Tr(), this.hi.Vr(), this.hi.Or()
    }, t.prototype.Pr = function() {
        return this.rr
    }, t.prototype.An = function() {
        if (this.Qt()) return null;
        if (null !== this.hr) return this.hr;
        for (var t = this.er, i = 5 * (this.hi.I().layout.fontSize + 4), n = Math.round(i / t), h = f(this.wr()), s = Math.max(h.ss(), h.ss() - n), r = Math.max(h.rs(), h.rs() - n), e = 0, u = 0, a = this.Xs.Is(t, i); u < a.length; u++) {
            var o = a[u];
            if (s <= o.Ps && o.Ps <= r) {
                var l = this.si(o.Ps);
                if (null !== l) {
                    if (e < this.sr.length) {
                        var c = this.sr[e];
                        c.Tn = this.G(o.Ps), c.Bn = this.Fr(l, o.Fs), c.Fs = o.Fs
                    } else this.sr.push({
                        Tn: this.G(o.Ps),
                        Bn: this.Fr(l, o.Fs),
                        Fs: o.Fs
                    });
                    e++
                }
            }
        }
        return this.sr.length = e, this.hr = this.sr, this.sr
    }, t.prototype.Ir = function() {
        this.Gs = !0, this.vr(this.xi.barSpacing), this._r(this.xi.rightOffset)
    }, t.prototype.Wr = function(t) {
        this.Gs = !0, this.Ks = t, this.Tr(), this.cr()
    }, t.prototype.Rr = function(t, i) {
        var n = this.Ar(t),
            h = this.zr(),
            s = h + i * (h / 10);
        this.vr(s), this.xi.rightBarStaysOnScroll || this._r(this.Pr() + (n - this.Ar(t)))
    }, t.prototype.Rh = function(t) {
        this.Xn && this.Yh(), null === this.$n && null === this.nr && (this.Qt() || (this.$n = t, this.jr()))
    }, t.prototype.jh = function(t) {
        if (null !== this.nr) {
            var i = Q(this.Ys - t, 0, this.Ys),
                n = Q(this.Ys - f(this.$n), 0, this.Ys);
            0 !== i && 0 !== n && this.vr(this.nr.zr * i / n)
        }
    }, t.prototype.Uh = function() {
        null !== this.$n && (this.$n = null, this.Ur())
    }, t.prototype.qh = function(t) {
        null === this.Xn && null === this.nr && (this.Qt() || (this.Xn = t, this.jr()))
    }, t.prototype.Hh = function(t) {
        if (null !== this.Xn) {
            var i = (this.Xn - t) / this.zr();
            this.rr = f(this.nr).Pr + i, this.Gs = !0, this.Tr()
        }
    }, t.prototype.Yh = function() {
        null !== this.Xn && (this.Xn = null, this.Ur())
    }, t.prototype.qr = function() {
        this.Hr(this.xi.rightOffset)
    }, t.prototype.Hr = function(t, i) {
        var n = this;
        if (void 0 === i && (i = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number");
        if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
        var h = this.rr,
            s = Date.now(),
            r = function() {
                var e = (Date.now() - s) / i,
                    u = e >= 1,
                    a = u ? t : h + (t - h) * e;
                n._r(a), u || setTimeout(r, 20)
            };
        r()
    }, t.prototype.V = function(t) {
        this.Gs = !0, this.$s = t, this.Xs.Os(t), this.Tr()
    }, t.prototype.Yr = function() {
        return this.Qs
    }, t.prototype.Kr = function() {
        return this.tr
    }, t.prototype.$r = function() {
        return this.ir
    }, t.prototype.Br = function() {
        return this.Ks || 0
    }, t.prototype.Xr = function(t) {
        var i = t.Ls();
        this.Cr(this.Ys / i), this.rr = t.rs() - this.Br(), this.Tr(), this.Gs = !0, this.hi.Vr(), this.hi.Or()
    }, t.prototype.Zr = function() {
        var t = this.pr(),
            i = this.yr();
        null !== t && null !== i && this.Xr(new Ct(t, i + this.xi.rightOffset))
    }, t.prototype.Jr = function(t) {
        var i = new Ct(t.from, t.to);
        this.Xr(i)
    }, t.prototype.ri = function(t) {
        return void 0 !== this.Qn.timeFormatter ? this.Qn.timeFormatter(t.Ss || t.Cs) : this.Gr.Ki(new Date(1e3 * t.Cs))
    }, t.prototype.pr = function() {
        return 0 === this.$s.length ? null : 0
    }, t.prototype.yr = function() {
        return 0 === this.$s.length ? null : this.$s.length - 1
    }, t.prototype.Qr = function(t) {
        return (this.Ys + 1 - t) / this.er
    }, t.prototype.Ar = function(t) {
        var i = this.Qr(t),
            n = this.Br() + this.rr - i;
        return Math.round(1e6 * n) / 1e6
    }, t.prototype.Cr = function(t) {
        var i = this.er;
        this.er = t, this.Dr(), i !== this.er && (this.Gs = !0, this.te())
    }, t.prototype.Mr = function() {
        if (this.Gs)
            if (this.Gs = !1, this.Qt()) this.ie(Et.Hs());
            else {
                var t = this.Br(),
                    i = this.Ys / this.er,
                    n = this.rr + t,
                    h = new Ct(n - i + 1, n);
                this.ie(new Et(h))
            }
    }, t.prototype.Dr = function() {
        if (this.er < .5 && (this.er = .5, this.Gs = !0), 0 !== this.Ys) {
            var t = .5 * this.Ys;
            this.er > t && (this.er = t, this.Gs = !0)
        }
    }, t.prototype.Tr = function() {
        var t = this.ne();
        this.rr > t && (this.rr = t, this.Gs = !0);
        var i = this.he();
        null !== i && this.rr < i && (this.rr = i, this.Gs = !0)
    }, t.prototype.he = function() {
        var t = this.pr(),
            i = this.Ks;
        return null === t || null === i ? null : t - i - 1 + (this.xi.fixLeftEdge ? this.Ys / this.er : Math.min(2, this.$s.length))
    }, t.prototype.ne = function() {
        return this.Ys / this.er - Math.min(2, this.$s.length)
    }, t.prototype.jr = function() {
        this.nr = {
            zr: this.zr(),
            Pr: this.Pr()
        }
    }, t.prototype.Ur = function() {
        this.nr = null
    }, t.prototype.Fr = function(t, i) {
        var n = this,
            h = this.Zs.get(i);
        return void 0 === h && (h = new St((function(t) {
            return n.se(t, i)
        })), this.Zs.set(i, h)), h.Ki(t)
    }, t.prototype.se = function(t, i) {
        var n, h, s = this.xi.timeVisible;
        return h = i < 20 && s ? this.xi.secondsVisible ? 4 : 3 : i < 40 && s ? 3 : i < 50 || i < 60 ? 2 : i < 70 ? 1 : 0, void 0 !== this.xi.tickMarkFormatter ? this.xi.tickMarkFormatter(null !== (n = t.Ss) && void 0 !== n ? n : t.Cs, h, this.Qn.locale) : function(t, i, n) {
            var h = {};
            switch (i) {
                case 0:
                    h.year = "numeric";
                    break;
                case 1:
                    h.month = "short";
                    break;
                case 2:
                    h.day = "numeric";
                    break;
                case 3:
                    h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit";
                    break;
                case 4:
                    h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit", h.second = "2-digit"
            }
            var s = void 0 === t.Ss ? new Date(1e3 * t.Cs) : new Date(Date.UTC(t.Ss.year, t.Ss.month - 1, t.Ss.day));
            return new Date(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()).toLocaleString(n, h)
        }(t, h, this.Qn.locale)
    }, t.prototype.ie = function(t) {
        var i = this.Js;
        this.Js = t, Dt(i.Us(), this.Js.Us()) || this.Qs.sn(), Dt(i.qs(), this.Js.qs()) || this.tr.sn(), this.te()
    }, t.prototype.te = function() {
        this.hr = null
    }, t.prototype.lr = function() {
        this.te(), this.Zs.clear()
    }, t.prototype.ur = function() {
        var t = this.Qn.dateFormat;
        this.xi.timeVisible ? this.Gr = new Nt({
            fs: t,
            cs: this.xi.secondsVisible ? "%h:%m:%s" : "%h:%m",
            vs: "   ",
            _s: this.Qn.locale
        }) : this.Gr = new yt(t, this.Qn.locale)
    }, t.prototype.cr = function() {
        if (this.xi.fixLeftEdge) {
            var t = this.pr();
            if (null !== t) {
                var i = f(this.wr()).ss() - t;
                if (i < 0) {
                    var n = this.rr - i - 1;
                    this._r(n)
                }
            }
        }
    }, t
}();

function At(t) {
    return !_(t) && !w(t)
}

function Vt(t) {
    return _(t)
}
var Ot = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function zt(t, i, n) {
    return void 0 !== n ? n += " " : n = "", void 0 === i && (i = Ot), "" + n + t + "px " + i
}
var Pt = function() {
    function t(t) {
        this.re = {
            Dt: 1,
            Ct: 4,
            zt: NaN,
            xt: "",
            ee: "",
            et: "",
            Bt: 0,
            Et: 0,
            Lt: 0,
            Tt: 0,
            Ot: 0
        }, this.L = t
    }
    return t.prototype.I = function() {
        var t = this.re,
            i = this.ue(),
            n = this.ae();
        return t.zt === i && t.ee === n || (t.zt = i, t.ee = n, t.xt = zt(i, n), t.Tt = Math.floor(i / 3.5), t.Bt = t.Tt, t.Et = Math.max(Math.ceil(i / 2 - t.Ct / 2), 0), t.Lt = Math.ceil(i / 2 + t.Ct / 2), t.Ot = Math.round(i / 10)), t.et = this.oe(), this.re
    }, t.prototype.oe = function() {
        return this.L.I().layout.textColor
    }, t.prototype.ue = function() {
        return this.L.I().layout.fontSize
    }, t.prototype.ae = function() {
        return this.L.I().layout.fontFamily
    }, t
}();

function Ft(t) {
    return "left" === t || "right" === t
}
var It = function() {
        function t(t) {
            this.le = new Map, this.fe = !1, this.ce = [], this.ve = t
        }
        return t.prototype._e = function(t, i) {
            var n = function(t, i) {
                return void 0 === t ? i : {
                    de: Math.max(t.de, i.de),
                    _h: t._h || i._h
                }
            }(this.le.get(t), i);
            this.le.set(t, n)
        }, t.prototype.we = function() {
            return this.ve
        }, t.prototype.Me = function(t) {
            var i = this.le.get(t);
            return void 0 === i ? {
                de: this.ve
            } : {
                de: Math.max(this.ve, i.de),
                _h: i._h
            }
        }, t.prototype.be = function() {
            this.ce = [{
                me: 0
            }]
        }, t.prototype.ge = function(t) {
            this.ce = [{
                me: 1,
                J: t
            }]
        }, t.prototype.pe = function() {
            this.ce = [{
                me: 4
            }]
        }, t.prototype.vr = function(t) {
            this.ce.push({
                me: 2,
                J: t
            })
        }, t.prototype._r = function(t) {
            this.ce.push({
                me: 3,
                J: t
            })
        }, t.prototype.ye = function() {
            return this.ce
        }, t.prototype._n = function(t) {
            var i = this;
            this.fe = this.fe || t.fe, this.ce = this.ce.concat(t.ce);
            for (var n = 0, h = t.ce; n < h.length; n++) {
                var s = h[n];
                this.ke(s)
            }
            this.ve = Math.max(this.ve, t.ve), t.le.forEach((function(t, n) {
                i._e(n, t)
            }))
        }, t.prototype.ke = function(t) {
            switch (t.me) {
                case 0:
                    this.be();
                    break;
                case 1:
                    this.ge(t.J);
                    break;
                case 2:
                    this.vr(t.J);
                    break;
                case 3:
                    this._r(t.J);
                    break;
                case 4:
                    this.pe()
            }
        }, t
    }(),
    Wt = function() {
        function t(t) {
            this.xe = t
        }
        return t.prototype.Ki = function(t) {
            var i = "";
            return t < 0 && (i = "-", t = -t), t < 995 ? i + this.Ne(t) : t < 999995 ? i + this.Ne(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.Ne(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.Ne(t / 1e9) + "B")
        }, t.prototype.Ne = function(t) {
            var i = Math.pow(10, this.xe);
            return ((t = Math.round(t * i) / i) >= 1e-15 && t < 1 ? t.toFixed(this.xe).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, (function(t, i) {
                return i
            }))
        }, t
    }();

function Rt(t, i, n, h) {
    if (0 !== i.length) {
        var s = i[h.from].g,
            r = i[h.from].p;
        t.moveTo(s, r);
        for (var e = h.from + 1; e < h.to; ++e) {
            var u = i[e];
            if (1 === n) {
                var a = i[e - 1].p,
                    o = u.g;
                t.lineTo(o, a)
            }
            t.lineTo(u.g, u.p)
        }
    }
}
var jt = function(t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.v = null, i
        }
        return e(i, t), i.prototype._ = function(t) {
            this.v = t
        }, i.prototype.u = function(t) {
            if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                if (t.lineCap = "butt", t.lineJoin = "round", t.strokeStyle = this.v.S, t.lineWidth = this.v.rt, h(t, this.v.ut), t.lineWidth = 1, t.beginPath(), 1 === this.v.m.length) {
                    var i = this.v.m[0],
                        n = this.v.Se / 2;
                    t.moveTo(i.g - n, this.v.Ce), t.lineTo(i.g - n, i.p), t.lineTo(i.g + n, i.p), t.lineTo(i.g + n, this.v.Ce)
                } else t.moveTo(this.v.m[this.v.M.from].g, this.v.Ce), t.lineTo(this.v.m[this.v.M.from].g, this.v.m[this.v.M.from].p), Rt(t, this.v.m, this.v.De, this.v.M), this.v.M.to > this.v.M.from && (t.lineTo(this.v.m[this.v.M.to - 1].g, this.v.Ce), t.lineTo(this.v.m[this.v.M.from].g, this.v.Ce));
                t.closePath();
                var s = t.createLinearGradient(0, 0, 0, this.v.Ce);
                s.addColorStop(0, this.v.Te), s.addColorStop(1, this.v.Be), t.fillStyle = s, t.fill()
            }
        }, i
    }(y),
    Ut = function(t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.v = null, i
        }
        return e(i, t), i.prototype._ = function(t) {
            this.v = t
        }, i.prototype.u = function(t) {
            if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                if (t.lineCap = "butt", t.lineWidth = this.v.rt, h(t, this.v.ut), t.strokeStyle = this.v.S, t.lineJoin = "round", t.beginPath(), 1 === this.v.m.length) {
                    var i = this.v.m[0];
                    t.moveTo(i.g - this.v.Se / 2, i.p), t.lineTo(i.g + this.v.Se / 2, i.p)
                } else Rt(t, this.v.m, this.v.De, this.v.M);
                t.stroke()
            }
        }, i
    }(y);

function qt(t, i, n, h, s) {
    void 0 === h && (h = 0), void 0 === s && (s = t.length);
    for (var r = s - h; 0 < r;) {
        var e = r >> 1,
            u = h + e;
        n(t[u], i) ? (h = u + 1, r -= e + 1) : r = e
    }
    return h
}

function Ht(t, i, n, h, s) {
    void 0 === h && (h = 0), void 0 === s && (s = t.length);
    for (var r = s - h; 0 < r;) {
        var e = r >> 1,
            u = h + e;
        n(i, t[u]) ? r = e : (h = u + 1, r -= e + 1)
    }
    return h
}

function Yt(t, i) {
    return t.P < i
}

function Kt(t, i) {
    return t < i.P
}

function $t(t, i, n) {
    var h = i.ss(),
        s = i.rs(),
        r = qt(t, h, Yt),
        e = Ht(t, s, Kt);
    if (!n) return {
        from: r,
        to: e
    };
    var u = r,
        a = e;
    return r > 0 && r < t.length && t[r].P >= h && (u = r - 1), e > 0 && e < t.length && t[e - 1].P <= s && (a = e + 1), {
        from: u,
        to: a
    }
}
var Xt = function() {
        function t(t, i, n) {
            this.Ee = !0, this.Le = !0, this.Ae = [], this.Ve = null, this.Oe = t, this.ze = i, this.Pe = n
        }
        return t.prototype.V = function(t) {
            this.Ee = !0, "data" === t && (this.Le = !0)
        }, t.prototype.Fe = function() {
            this.Le && (this.Ie(), this.Le = !1), this.Ee && (this.We(), this.Ee = !1)
        }, t.prototype.Re = function() {
            this.Ve = null
        }, t.prototype.We = function() {
            var t = this.Oe.Z(),
                i = this.ze.U();
            if (this.Re(), !i.Qt() && !t.Qt()) {
                var n = i.wr();
                if (null !== n && 0 !== this.Oe.qi().je()) {
                    var h = this.Oe.Y();
                    null !== h && (this.Ve = $t(this.Ae, n, this.Pe), this.Ue(t, i, h.J))
                }
            }
        }, t
    }(),
    Zt = function(t) {
        function i(i, n) {
            return t.call(this, i, n, !0) || this
        }
        return e(i, t), i.prototype.Ue = function(t, i, n) {
            i.Er(this.Ae, g(this.Ve)), t.Sh(this.Ae, n, g(this.Ve))
        }, i.prototype.qe = function(t, i) {
            return {
                P: t,
                F: i,
                g: NaN,
                p: NaN
            }
        }, i.prototype.Ie = function() {
            var t = this,
                i = this.Oe.He();
            this.Ae = this.Oe.qi().Ye().map((function(n) {
                var h = n.J[3];
                return t.Ke(n.Ps, h, i)
            }))
        }, i
    }(Xt),
    Jt = function(t) {
        function i(i, n) {
            var h = t.call(this, i, n) || this;
            return h.ot = new p, h.$e = new jt, h.Xe = new Ut, h.ot.i([h.$e, h.Xe]), h
        }
        return e(i, t), i.prototype.W = function(t, i) {
            if (!this.Oe.H()) return null;
            var n = this.Oe.I();
            this.Fe();
            var h = {
                De: n.lineType,
                m: this.Ae,
                S: n.lineColor,
                ut: n.lineStyle,
                rt: n.lineWidth,
                Te: n.topColor,
                Be: n.bottomColor,
                Ce: t,
                M: this.Ve,
                Se: this.ze.U().zr()
            };
            return this.$e._(h), this.Xe._(h), this.ot
        }, i.prototype.Ke = function(t, i) {
            return this.qe(t, i)
        }, i
    }(Zt);
var Gt = function() {
        function t() {
            this.tt = null, this.Ze = 0, this.Je = 0
        }
        return t.prototype._ = function(t) {
            this.tt = t
        }, t.prototype.h = function(t, i, n, h) {
            if (null !== this.tt && 0 !== this.tt.qi.length && null !== this.tt.M) {
                if (this.Ze = this.Ge(i), this.Ze >= 2) Math.max(1, Math.floor(i)) % 2 != this.Ze % 2 && this.Ze--;
                this.Je = this.tt.Qe ? Math.min(this.Ze, Math.floor(i)) : this.Ze;
                for (var s = null, r = this.Je <= this.Ze && this.tt.zr >= Math.floor(1.5 * i), e = this.tt.M.from; e < this.tt.M.to; ++e) {
                    var u = this.tt.qi[e];
                    s !== u.et && (t.fillStyle = u.et, s = u.et);
                    var a = Math.floor(.5 * this.Je),
                        o = Math.round(u.g * i),
                        l = o - a,
                        f = this.Je,
                        c = l + f - 1,
                        v = Math.min(u.Bh, u.Eh),
                        _ = Math.max(u.Bh, u.Eh),
                        d = Math.round(v * i) - a,
                        w = Math.round(_ * i) + a,
                        M = Math.max(w - d, this.Je);
                    t.fillRect(l, d, f, M);
                    var b = Math.ceil(1.5 * this.Ze);
                    if (r) {
                        if (this.tt.tu) {
                            var m = o - b,
                                g = Math.max(d, Math.round(u.Th * i) - a),
                                p = g + f - 1;
                            p > d + M - 1 && (g = (p = d + M - 1) - f + 1), t.fillRect(m, g, l - m, p - g + 1)
                        }
                        var y = o + b,
                            k = Math.max(d, Math.round(u.Lh * i) - a),
                            x = k + f - 1;
                        x > d + M - 1 && (k = (x = d + M - 1) - f + 1), t.fillRect(c + 1, k, y - c, x - k + 1)
                    }
                }
            }
        }, t.prototype.Ge = function(t) {
            var i = Math.floor(t);
            return Math.max(i, Math.floor(function(t, i) {
                return Math.floor(.3 * t * i)
            }(f(this.tt).zr, t)))
        }, t
    }(),
    Qt = function(t) {
        function i(i, n) {
            return t.call(this, i, n, !1) || this
        }
        return e(i, t), i.prototype.Ue = function(t, i, n) {
            i.Er(this.Ae, g(this.Ve)), t.Dh(this.Ae, n, g(this.Ve))
        }, i.prototype.iu = function(t, i, n) {
            return {
                P: t,
                open: i.J[0],
                high: i.J[1],
                low: i.J[2],
                close: i.J[3],
                g: NaN,
                Th: NaN,
                Bh: NaN,
                Eh: NaN,
                Lh: NaN
            }
        }, i.prototype.Ie = function() {
            var t = this,
                i = this.Oe.He();
            this.Ae = this.Oe.qi().Ye().map((function(n) {
                return t.Ke(n.Ps, n, i)
            }))
        }, i
    }(Xt),
    ti = function(t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.ot = new Gt, i
        }
        return e(i, t), i.prototype.W = function(t, i) {
            if (!this.Oe.H()) return null;
            var n = this.Oe.I();
            this.Fe();
            var h = {
                qi: this.Ae,
                zr: this.ze.U().zr(),
                tu: n.openVisible,
                Qe: n.thinBars,
                M: this.Ve
            };
            return this.ot._(h), this.ot
        }, i.prototype.Ke = function(t, i, n) {
            return u(u({}, this.iu(t, i, n)), {
                et: n.hu(t).nu
            })
        }, i
    }(Qt),
    ii = function() {
        function t() {
            this.tt = null, this.Ze = 0
        }
        return t.prototype._ = function(t) {
            this.tt = t
        }, t.prototype.h = function(t, i, n, h) {
            if (null !== this.tt && 0 !== this.tt.qi.length && null !== this.tt.M) {
                if (this.Ze = function(t, i) {
                        if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                        var n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
                            h = Math.floor(t * n * i),
                            s = Math.floor(t * i),
                            r = Math.min(h, s);
                        return Math.max(Math.floor(i), r)
                    }(this.tt.zr, i), this.Ze >= 2) Math.floor(i) % 2 != this.Ze % 2 && this.Ze--;
                var s = this.tt.qi;
                this.tt.su && this.ru(t, s, this.tt.M, i), this.tt.eu && this.uu(t, s, this.tt.M, this.tt.zr, i);
                var r = this.au(i);
                (!this.tt.eu || this.Ze > 2 * r) && this.ou(t, s, this.tt.M, i)
            }
        }, t.prototype.ru = function(t, i, n, h) {
            if (null !== this.tt) {
                var s = "",
                    r = Math.min(Math.floor(h), Math.floor(this.tt.zr * h));
                r = Math.max(Math.floor(h), Math.min(r, this.Ze));
                for (var e = Math.floor(.5 * r), u = null, a = n.from; a < n.to; a++) {
                    var o = i[a];
                    o.lu !== s && (t.fillStyle = o.lu, s = o.lu);
                    var l = Math.round(Math.min(o.Th, o.Lh) * h),
                        f = Math.round(Math.max(o.Th, o.Lh) * h),
                        c = Math.round(o.Bh * h),
                        v = Math.round(o.Eh * h),
                        _ = Math.round(h * o.g) - e,
                        d = _ + r - 1;
                    null !== u && (_ = Math.max(u + 1, _), _ = Math.min(_, d));
                    var w = d - _ + 1;
                    t.fillRect(_, c, w, l - c), t.fillRect(_, f + 1, w, v - f), u = d
                }
            }
        }, t.prototype.au = function(t) {
            var i = Math.floor(1 * t);
            this.Ze <= 2 * i && (i = Math.floor(.5 * (this.Ze - 1)));
            var n = Math.max(Math.floor(t), i);
            return this.Ze <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n
        }, t.prototype.uu = function(t, i, n, h, s) {
            if (null !== this.tt)
                for (var r = "", e = this.au(s), u = null, a = n.from; a < n.to; a++) {
                    var o = i[a];
                    o.$ !== r && (t.fillStyle = o.$, r = o.$);
                    var l = Math.round(o.g * s) - Math.floor(.5 * this.Ze),
                        f = l + this.Ze - 1,
                        c = Math.round(Math.min(o.Th, o.Lh) * s),
                        v = Math.round(Math.max(o.Th, o.Lh) * s);
                    if (null !== u && (l = Math.max(u + 1, l), l = Math.min(l, f)), this.tt.zr * s > 2 * e) O(t, l, c, f - l + 1, v - c + 1, e);
                    else {
                        var _ = f - l + 1;
                        t.fillRect(l, c, _, v - c + 1)
                    }
                    u = f
                }
        }, t.prototype.ou = function(t, i, n, h) {
            if (null !== this.tt)
                for (var s = "", r = this.au(h), e = n.from; e < n.to; e++) {
                    var u = i[e],
                        a = Math.round(Math.min(u.Th, u.Lh) * h),
                        o = Math.round(Math.max(u.Th, u.Lh) * h),
                        l = Math.round(u.g * h) - Math.floor(.5 * this.Ze),
                        f = l + this.Ze - 1;
                    if (u.et !== s) {
                        var c = u.et;
                        t.fillStyle = c, s = c
                    }
                    this.tt.eu && (l += r, a += r, f -= r, o -= r), a > o || t.fillRect(l, a, f - l + 1, o - a + 1)
                }
        }, t
    }(),
    ni = function(t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.ot = new ii, i
        }
        return e(i, t), i.prototype.W = function(t, i) {
            if (!this.Oe.H()) return null;
            var n = this.Oe.I();
            this.Fe();
            var h = {
                qi: this.Ae,
                zr: this.ze.U().zr(),
                su: n.wickVisible,
                eu: n.borderVisible,
                M: this.Ve
            };
            return this.ot._(h), this.ot
        }, i.prototype.Ke = function(t, i, n) {
            var h = n.hu(t);
            return u(u({}, this.iu(t, i, n)), {
                et: h.nu,
                lu: h.fu,
                $: h.cu
            })
        }, i
    }(Qt),
    hi = function() {
        function t() {
            this.tt = null, this.vu = []
        }
        return t.prototype._ = function(t) {
            this.tt = t, this.vu = []
        }, t.prototype.h = function(t, i, n, h) {
            if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                this.vu.length || this._u(i);
                for (var s = Math.max(1, Math.floor(i)), r = Math.round(this.tt.du * i) - Math.floor(s / 2), e = r + s, u = this.tt.M.from; u < this.tt.M.to; u++) {
                    var a = this.tt.m[u],
                        o = this.vu[u - this.tt.M.from],
                        l = Math.round(a.p * i);
                    t.fillStyle = a.et;
                    var f = void 0,
                        c = void 0;
                    l <= r ? (f = l, c = e) : (f = r, c = l - Math.floor(s / 2) + s), t.fillRect(o.ss, f, o.rs - o.ss + 1, c - f)
                }
            }
        }, t.prototype._u = function(t) {
            if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                var i = Math.ceil(this.tt.zr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                    n = Math.round(this.tt.zr * t) - i;
                this.vu = new Array(this.tt.M.to - this.tt.M.from);
                for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                    var s, r = this.tt.m[h],
                        e = Math.round(r.g * t),
                        u = void 0,
                        a = void 0;
                    if (n % 2) u = e - (s = (n - 1) / 2), a = e + s;
                    else u = e - (s = n / 2), a = e + s - 1;
                    this.vu[h - this.tt.M.from] = {
                        ss: u,
                        rs: a,
                        wu: e,
                        Mu: r.g * t,
                        P: r.P
                    }
                }
                for (h = this.tt.M.from + 1; h < this.tt.M.to; h++) {
                    var o = this.vu[h - this.tt.M.from],
                        l = this.vu[h - this.tt.M.from - 1];
                    o.P === l.P + 1 && (o.ss - l.rs !== i + 1 && (l.wu > l.Mu ? l.rs = o.ss - i - 1 : o.ss = l.rs + i + 1))
                }
                var f = Math.ceil(this.tt.zr * t);
                for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                    (o = this.vu[h - this.tt.M.from]).rs < o.ss && (o.rs = o.ss);
                    var c = o.rs - o.ss + 1;
                    f = Math.min(c, f)
                }
                if (i > 0 && f < 4)
                    for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                        (c = (o = this.vu[h - this.tt.M.from]).rs - o.ss + 1) > f && (o.wu > o.Mu ? o.rs -= 1 : o.ss += 1)
                    }
            } else this.vu = []
        }, t
    }();

function si(t) {
    return {
        m: [],
        zr: t,
        du: NaN,
        M: null
    }
}

function ri(t, i, n) {
    return {
        P: t,
        F: i,
        g: NaN,
        p: NaN,
        et: n
    }
}
var ei = function(t) {
        function i(i, n) {
            var h = t.call(this, i, n, !1) || this;
            return h.C = new p, h.bu = si(0), h.ot = new hi, h
        }
        return e(i, t), i.prototype.W = function(t, i) {
            return this.Oe.H() ? (this.Fe(), this.C) : null
        }, i.prototype.Ie = function() {
            var t = this.ze.U().zr();
            this.bu = si(t);
            for (var i = 0, n = 0, h = this.Oe.I().color, s = 0, r = this.Oe.qi().Ye(); s < r.length; s++) {
                var e = r[s],
                    u = e.J[3],
                    a = void 0 !== e.et ? e.et : h,
                    o = ri(e.Ps, u, a);
                ++i < this.bu.m.length ? this.bu.m[i] = o : this.bu.m.push(o), this.Ae[n++] = {
                    P: e.Ps,
                    g: 0
                }
            }
            this.ot._(this.bu), this.C.i([this.ot])
        }, i.prototype.Re = function() {
            t.prototype.Re.call(this), this.bu.M = null
        }, i.prototype.Ue = function(t, i, n) {
            if (null !== this.Ve) {
                var h = i.zr(),
                    s = f(i.wr()),
                    r = t.X(this.Oe.I().base, n);
                i.Er(this.bu.m), t.Sh(this.bu.m, n), this.bu.du = r, this.bu.M = $t(this.bu.m, s, !1), this.bu.zr = h, this.ot._(this.bu)
            }
        }, i
    }(Xt),
    ui = function(t) {
        function i(i, n) {
            var h = t.call(this, i, n) || this;
            return h.Xe = new Ut, h
        }
        return e(i, t), i.prototype.W = function(t, i) {
            if (!this.Oe.H()) return null;
            var n = this.Oe.I();
            this.Fe();
            var h = {
                m: this.Ae,
                S: n.color,
                ut: n.lineStyle,
                De: n.lineType,
                rt: n.lineWidth,
                M: this.Ve,
                Se: this.ze.U().zr()
            };
            return this.Xe._(h), this.Xe
        }, i.prototype.Ke = function(t, i) {
            return this.qe(t, i)
        }, i
    }(Zt),
    ai = /[2-9]/g,
    oi = function() {
        function t(t) {
            void 0 === t && (t = 50), this.ys = new Map, this.mu = 0, this.gu = Array.from(new Array(t))
        }
        return t.prototype.pu = function() {
            this.ys.clear(), this.gu.fill(void 0)
        }, t.prototype.Vt = function(t, i, n) {
            var h = n || ai,
                s = String(i).replace(h, "0"),
                r = this.ys.get(s);
            if (void 0 === r) {
                if (0 === (r = t.measureText(s).width) && 0 !== i.length) return 0;
                var e = this.gu[this.mu];
                void 0 !== e && this.ys.delete(e), this.gu[this.mu] = s, this.mu = (this.mu + 1) % this.gu.length, this.ys.set(s, r)
            }
            return r
        }, t
    }(),
    li = function() {
        function t(t) {
            this.yu = null, this.re = null, this.ku = "right", this.Ys = 0, this.xu = t
        }
        return t.prototype.Nu = function(t, i, n, h) {
            this.yu = t, this.re = i, this.Ys = n, this.ku = h
        }, t.prototype.h = function(t, i) {
            null !== this.re && null !== this.yu && this.yu.h(t, this.re, this.xu, this.Ys, this.ku, i)
        }, t
    }(),
    fi = function() {
        function t(t, i, n) {
            this.Su = t, this.xu = new oi(50), this.Cu = i, this.L = n, this.ue = -1, this.ot = new li(this.xu)
        }
        return t.prototype.W = function(t, i) {
            var n = this.L.Du(this.Cu);
            if (null === n) return null;
            var h = n.Tu(this.Cu) ? n.Ci() : this.Cu.Z();
            if (null === h) return null;
            var s = n.Bu(h);
            if ("overlay" === s) return null;
            var r = this.L.Eu();
            return r.zt !== this.ue && (this.ue = r.zt, this.xu.pu()), this.ot.Nu(this.Su.Xt(), r, i, s), this.ot
        }, t
    }(),
    ci = function() {
        function t() {
            this.tt = null
        }
        return t.prototype._ = function(t) {
            this.tt = t
        }, t.prototype.h = function(t, i, n, r) {
            if (null !== this.tt && !1 !== this.tt.H) {
                var e = Math.round(this.tt.p * i);
                if (!(e < 0 || e > Math.ceil(this.tt.wt * i))) {
                    var u = Math.ceil(this.tt.dt * i);
                    t.lineCap = "butt", t.strokeStyle = this.tt.et, t.lineWidth = Math.floor(this.tt.rt * i), h(t, this.tt.ut), s(t, e, 0, u)
                }
            }
        }, t
    }(),
    vi = function() {
        function t(t) {
            this.Lu = {
                dt: 0,
                wt: 0,
                p: 0,
                et: "rgba(0, 0, 0, 0)",
                rt: 1,
                ut: 0,
                H: !1
            }, this.Au = new ci, this.B = !0, this.Oe = t, this.ze = t.ct(), this.Au._(this.Lu)
        }
        return t.prototype.V = function() {
            this.B = !0
        }, t.prototype.W = function(t, i) {
            return this.Oe.H() ? (this.B && (this.Vu(t, i), this.B = !1), this.Au) : null
        }, t
    }(),
    _i = function(t) {
        function i(i) {
            return t.call(this, i) || this
        }
        return e(i, t), i.prototype.Vu = function(t, i) {
            this.Lu.H = !1;
            var n = this.Oe.Z(),
                h = n.uh().uh;
            if (2 === h || 3 === h) {
                var s = this.Oe.I();
                if (s.baseLineVisible && this.Oe.H()) {
                    var r = this.Oe.Y();
                    null !== r && (this.Lu.H = !0, this.Lu.p = n.X(r.J, r.J), this.Lu.dt = i, this.Lu.wt = t, this.Lu.et = s.baseLineColor, this.Lu.rt = s.baseLineWidth, this.Lu.ut = s.baseLineStyle)
                }
            }
        }, i
    }(vi);

function di(t, i) {
    return ht(Math.min(Math.max(t, 12), 30) * i)
}

function wi(t, i) {
    switch (t) {
        case "arrowDown":
        case "arrowUp":
            return di(i, 1);
        case "circle":
            return di(i, .8);
        case "square":
            return di(i, .7)
    }
}

function Mi(t) {
    return nt(di(t, 1))
}

function bi(t) {
    return Math.max(di(t, .1), 3)
}

function mi(t, i, n, h, s) {
    var r = wi("square", n),
        e = (r - 1) / 2,
        u = t - e,
        a = i - e;
    return h >= u && h <= u + r && s >= a && s <= a + r
}

function gi(t, i, n, h, s) {
    var r = (wi("arrowUp", s) - 1) / 2,
        e = (ht(s / 2) - 1) / 2;
    i.beginPath(), t ? (i.moveTo(n - r, h), i.lineTo(n, h - r), i.lineTo(n + r, h), i.lineTo(n + e, h), i.lineTo(n + e, h + r), i.lineTo(n - e, h + r), i.lineTo(n - e, h)) : (i.moveTo(n - r, h), i.lineTo(n, h + r), i.lineTo(n + r, h), i.lineTo(n + e, h), i.lineTo(n + e, h - r), i.lineTo(n - e, h - r), i.lineTo(n - e, h)), i.fill()
}

function pi(t, i, n, h, s, r) {
    return mi(i, n, h, s, r)
}
var yi = function(t) {
    function i() {
        var i = null !== t && t.apply(this, arguments) || this;
        return i.tt = null, i.xu = new oi, i.ue = -1, i.ae = "", i.Ou = "", i
    }
    return e(i, t), i.prototype._ = function(t) {
        this.tt = t
    }, i.prototype.Nu = function(t, i) {
        this.ue === t && this.ae === i || (this.ue = t, this.ae = i, this.Ou = zt(t, i), this.xu.pu())
    }, i.prototype.zu = function(t, i) {
        if (null === this.tt || null === this.tt.M) return null;
        for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
            var h = this.tt.m[n];
            if (xi(h, t, i)) return {
                Pu: h.Fu,
                Iu: h.Iu
            }
        }
        return null
    }, i.prototype.u = function(t, i, n) {
        if (null !== this.tt && null !== this.tt.M) {
            t.textBaseline = "middle", t.font = this.Ou;
            for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                var s = this.tt.m[h];
                void 0 !== s.At && (s.At.dt = this.xu.Vt(t, s.At.Wu), s.At.wt = this.ue), ki(s, t)
            }
        }
    }, i
}(y);

function ki(t, i) {
    i.fillStyle = t.et, void 0 !== t.At && function(t, i, n, h) {
            t.fillText(i, n, h)
        }(i, t.At.Wu, t.g - t.At.dt / 2, t.At.p),
        function(t, i) {
            if (0 === t.je) return;
            switch (t.Ru) {
                case "arrowDown":
                    return void gi(!1, i, t.g, t.p, t.je);
                case "arrowUp":
                    return void gi(!0, i, t.g, t.p, t.je);
                case "circle":
                    return void
                    function(t, i, n, h) {
                        var s = (wi("circle", h) - 1) / 2;
                        t.beginPath(), t.arc(i, n, s, 0, 2 * Math.PI, !1), t.fill()
                    }(i, t.g, t.p, t.je);
                case "square":
                    return void
                    function(t, i, n, h) {
                        var s = wi("square", h),
                            r = (s - 1) / 2,
                            e = i - r,
                            u = n - r;
                        t.fillRect(e, u, s, s)
                    }(i, t.g, t.p, t.je)
            }
            t.Ru
        }(t, i)
}

function xi(t, i, n) {
    return !(void 0 === t.At || ! function(t, i, n, h, s, r) {
        var e = h / 2;
        return s >= t && s <= t + n && r >= i - e && r <= i + e
    }(t.g, t.At.p, t.At.dt, t.At.wt, i, n)) || function(t, i, n) {
        if (0 === t.je) return !1;
        switch (t.Ru) {
            case "arrowDown":
            case "arrowUp":
                return pi(0, t.g, t.p, t.je, i, n);
            case "circle":
                return function(t, i, n, h, s) {
                    var r = 2 + wi("circle", n) / 2,
                        e = t - h,
                        u = i - s;
                    return Math.sqrt(e * e + u * u) <= r
                }(t.g, t.p, t.je, i, n);
            case "square":
                return mi(t.g, t.p, t.je, i, n)
        }
        t.Ru
    }(t, i, n)
}

function Ni(t, i, n, h, s, r, e, u, a) {
    var o = _(n) ? n : n.close,
        l = _(n) ? n : n.high,
        f = _(n) ? n : n.low,
        c = _(i.size) ? Math.max(i.size, 0) : 1,
        v = Mi(u.zr()) * c,
        d = v / 2;
    switch (t.je = v, i.position) {
        case "inBar":
            return t.p = e.X(o, a), void(void 0 !== t.At && (t.At.p = t.p + d + r + .6 * s));
        case "aboveBar":
            return t.p = e.X(l, a) - d - h.ju, void 0 !== t.At && (t.At.p = t.p - d - .6 * s, h.ju += 1.2 * s), void(h.ju += v + r);
        case "belowBar":
            return t.p = e.X(f, a) + d + h.Uu, void 0 !== t.At && (t.At.p = t.p + d + r + .6 * s, h.Uu += 1.2 * s), void(h.Uu += v + r)
    }
    i.position
}
var Si = function() {
        function t(t, i) {
            this.B = !0, this.qu = !0, this.Hu = !0, this.Yu = null, this.ot = new yi, this.Ku = t, this.hi = i, this.tt = {
                m: [],
                M: null
            }
        }
        return t.prototype.V = function(t) {
            this.B = !0, this.Hu = !0, "data" === t && (this.qu = !0)
        }, t.prototype.W = function(t, i, n) {
            if (!this.Ku.H()) return null;
            this.B && this.Fe();
            var h = this.hi.I().layout;
            return this.ot.Nu(h.fontSize, h.fontFamily), this.ot._(this.tt), this.ot
        }, t.prototype.$u = function() {
            if (this.Hu) {
                if (this.Ku.Xu().length > 0) {
                    var t = this.hi.U().zr(),
                        i = bi(t),
                        n = 1.5 * Mi(t) + 2 * i;
                    this.Yu = {
                        above: n,
                        below: n
                    }
                } else this.Yu = null;
                this.Hu = !1
            }
            return this.Yu
        }, t.prototype.Fe = function() {
            var t = this.Ku.Z(),
                i = this.hi.U(),
                n = this.Ku.Xu();
            this.qu && (this.tt.m = n.map((function(t) {
                return {
                    P: t.time,
                    g: 0,
                    p: 0,
                    je: 0,
                    Ru: t.shape,
                    et: t.color,
                    Fu: t.Fu,
                    Iu: t.id,
                    At: void 0
                }
            })), this.qu = !1);
            var h = this.hi.I().layout;
            this.tt.M = null;
            var s = i.wr();
            if (null !== s) {
                var r = this.Ku.Y();
                if (null !== r && 0 !== this.tt.m.length) {
                    var e = NaN,
                        u = bi(i.zr()),
                        a = {
                            ju: u,
                            Uu: u
                        };
                    this.tt.M = $t(this.tt.m, s, !0);
                    for (var o = this.tt.M.from; o < this.tt.M.to; o++) {
                        var l = n[o];
                        l.time !== e && (a.ju = u, a.Uu = u, e = l.time);
                        var f = this.tt.m[o];
                        f.g = i.G(l.time), void 0 !== l.text && l.text.length > 0 && (f.At = {
                            Wu: l.text,
                            p: 0,
                            dt: 0,
                            wt: 0
                        });
                        var c = this.Ku.Zu(l.time);
                        null !== c && Ni(f, l, c, a, h.fontSize, u, t, i, r.J)
                    }
                    this.B = !1
                }
            }
        }, t
    }(),
    Ci = function(t) {
        function i(i) {
            return t.call(this, i) || this
        }
        return e(i, t), i.prototype.Vu = function(t, i) {
            var n = this.Lu;
            n.H = !1;
            var h = this.Oe.I();
            if (h.priceLineVisible && this.Oe.H()) {
                var s = this.Oe.Ju(0 === h.priceLineSource);
                s.Gu || (n.H = !0, n.p = s.Pt, n.et = this.Oe.Qu(s.et), n.dt = i, n.wt = t, n.rt = h.priceLineWidth, n.ut = h.priceLineStyle)
            }
        }, i
    }(vi),
    Di = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.lt = i, n
        }
        return e(i, t), i.prototype.Zt = function(t, i, n) {
            if (t.H = !1, i.H = !1, this.lt.H()) {
                var h = this.lt.I(),
                    s = h.lastValueVisible,
                    r = "" !== this.lt.ta(),
                    e = 0 === h.seriesLastValueMode,
                    u = this.lt.Ju(!1);
                if (!u.Gu) {
                    s && (t.At = this.ia(u, s, e), t.H = 0 !== t.At.length), (r || e) && (i.At = this.na(u, s, r, e), i.H = i.At.length > 0);
                    var a = this.lt.Qu(u.et),
                        o = V(a);
                    n.gt = o.gt, n.et = o.yt, n.Pt = u.Pt, i.$ = this.lt.ct().I().layout.backgroundColor, t.$ = a
                }
            }
        }, i.prototype.na = function(t, i, n, h) {
            var s = "",
                r = this.lt.ta();
            return n && 0 !== r.length && (s += r + " "), i && h && (s += this.lt.Z().lh() ? t.ha : t.sa), s.trim()
        }, i.prototype.ia = function(t, i, n) {
            return i ? n ? this.lt.Z().lh() ? t.sa : t.ha : t.At : ""
        }, i
    }(W),
    Ti = function() {
        function t(t, i) {
            this.zn = t, this.ra = i || null
        }
        return t.prototype.kh = function() {
            return this.zn
        }, t.prototype.es = function() {
            return this.ra
        }, t.prototype.Mn = function() {
            return null === this.zn ? null : {
                priceRange: this.zn.Mn(),
                margins: this.ra || void 0
            }
        }, t.bn = function(i) {
            return null === i ? null : new t(G.bn(i.priceRange), i.margins)
        }, t
    }(),
    Bi = function(t) {
        function i(i, n) {
            var h = t.call(this, i) || this;
            return h.ea = n, h
        }
        return e(i, t), i.prototype.Vu = function(t, i) {
            var n = this.Lu;
            if (n.H = !1, this.Oe.H()) {
                var h = this.ea.ua();
                if (null !== h) {
                    var s = this.ea.I();
                    n.H = !0, n.p = h, n.et = s.color, n.dt = i, n.wt = t, n.rt = s.lineWidth, n.ut = s.lineStyle
                }
            }
        }, i
    }(vi),
    Ei = function(t) {
        function i(i, n) {
            var h = t.call(this) || this;
            return h.Ku = i, h.ea = n, h
        }
        return e(i, t), i.prototype.Zt = function(t, i, n) {
            t.H = !1, i.H = !1;
            var h = this.ea.I(),
                s = h.axisLabelVisible,
                r = "" !== h.title;
            if (s && this.Ku.H()) {
                var e = this.ea.ua();
                if (null !== e) {
                    r && (i.At = h.title, i.H = !0), i.$ = this.Ku.ct().I().layout.backgroundColor, t.At = this.Ku.Z().Xh(h.price), t.H = !0;
                    var u = V(h.color);
                    n.gt = u.gt, n.et = u.yt, n.Pt = e
                }
            }
        }, i
    }(W),
    Li = function() {
        function t(t, i) {
            this.Ku = t, this.xi = i, this.aa = new Bi(t, this), this.Su = new Ei(t, this), this.oa = new fi(this.Su, t, t.ct())
        }
        return t.prototype.sh = function(t) {
            v(this.xi, t), this.V(), this.Ku.ct().Or()
        }, t.prototype.I = function() {
            return this.xi
        }, t.prototype.ci = function() {
            return [this.aa, this.oa]
        }, t.prototype.la = function() {
            return this.Su
        }, t.prototype.V = function() {
            this.aa.V(), this.Su.V()
        }, t.prototype.ua = function() {
            var t = this.Ku,
                i = t.Z();
            if (t.ct().U().Qt() || i.Qt()) return null;
            var n = t.Y();
            return null === n ? null : i.X(this.xi.price, n.J)
        }, t
    }(),
    Ai = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.hi = i, n
        }
        return e(i, t), i.prototype.ct = function() {
            return this.hi
        }, i
    }(H),
    Vi = {
        nu: "",
        cu: "",
        fu: ""
    },
    Oi = function() {
        function t(t) {
            this.Ku = t
        }
        return t.prototype.hu = function(t, i) {
            var n = this.Ku.fa(),
                h = this.Ku.I();
            switch (n) {
                case "Line":
                    return this.ca(h);
                case "Area":
                    return this.va(h);
                case "Bar":
                    return this._a(h, t, i);
                case "Candlestick":
                    return this.da(h, t, i);
                case "Histogram":
                    return this.wa(h, t, i)
            }
            throw new Error("Unknown chart style")
        }, t.prototype._a = function(t, i, n) {
            var h = u({}, Vi),
                s = t.upColor,
                r = t.downColor,
                e = s,
                a = r,
                o = f(this.Ma(i, n)),
                l = c(o.J[0]) <= c(o.J[3]);
            return h.nu = l ? s : r, h.cu = l ? e : a, h
        }, t.prototype.da = function(t, i, n) {
            var h = u({}, Vi),
                s = t.upColor,
                r = t.downColor,
                e = t.borderUpColor,
                a = t.borderDownColor,
                o = t.wickUpColor,
                l = t.wickDownColor,
                v = f(this.Ma(i, n)),
                _ = c(v.J[0]) <= c(v.J[3]);
            return h.nu = _ ? s : r, h.cu = _ ? e : a, h.fu = _ ? o : l, h
        }, t.prototype.va = function(t) {
            return u(u({}, Vi), {
                nu: t.lineColor
            })
        }, t.prototype.ca = function(t) {
            return u(u({}, Vi), {
                nu: t.color
            })
        }, t.prototype.wa = function(t, i, n) {
            var h = u({}, Vi),
                s = f(this.Ma(i, n));
            return h.nu = void 0 !== s.et ? s.et : t.color, h
        }, t.prototype.Ma = function(t, i) {
            return void 0 !== i ? i.J : this.Ku.qi().ba(t)
        }, t
    }(),
    zi = function() {
        function t() {
            this.ma = [], this.ga = new Map, this.pa = new Map
        }
        return t.prototype.ya = function() {
            this.ma = [], this.ga.clear(), this.pa.clear()
        }, t.prototype.ka = function() {
            return this.je() > 0 ? this.ma[this.ma.length - 1] : null
        }, t.prototype.xa = function() {
            return this.je() > 0 ? this.Na(0) : null
        }, t.prototype.Ui = function() {
            return this.je() > 0 ? this.Na(this.ma.length - 1) : null
        }, t.prototype.je = function() {
            return this.ma.length
        }, t.prototype.Qt = function() {
            return 0 === this.je()
        }, t.prototype.As = function(t) {
            return null !== this.Sa(t, 0)
        }, t.prototype.ba = function(t) {
            return this.Ca(t)
        }, t.prototype.Ca = function(t, i) {
            void 0 === i && (i = 0);
            var n = this.Sa(t, i);
            return null === n ? null : u(u({}, this.Da(n)), {
                Ps: this.Na(n)
            })
        }, t.prototype.Ye = function() {
            return this.ma
        }, t.prototype.Ta = function(t, i, n) {
            if (this.Qt()) return null;
            for (var h = null, s = 0, r = n; s < r.length; s++) {
                var e = r[s];
                h = Pi(h, this.Ba(t, i, e))
            }
            return h
        }, t.prototype._n = function(t) {
            0 !== t.length && (this.Qt() || t[t.length - 1].Ps < this.ma[0].Ps ? this.Ea(t) : t[0].Ps > this.ma[this.ma.length - 1].Ps ? this.La(t) : 1 !== t.length || t[0].Ps !== this.ma[this.ma.length - 1].Ps ? this.Aa(t) : this.Va(t[0]))
        }, t.prototype.Na = function(t) {
            return this.ma[t].Ps
        }, t.prototype.Da = function(t) {
            return this.ma[t]
        }, t.prototype.Sa = function(t, i) {
            var n = this.Oa(t);
            if (null === n && 0 !== i) switch (i) {
                case -1:
                    return this.za(t);
                case 1:
                    return this.Pa(t);
                default:
                    throw new TypeError("Unknown search mode")
            }
            return n
        }, t.prototype.za = function(t) {
            var i = this.Fa(t);
            return i > 0 && (i -= 1), i !== this.ma.length && this.Na(i) < t ? i : null
        }, t.prototype.Pa = function(t) {
            var i = this.Ia(t);
            return i !== this.ma.length && t < this.Na(i) ? i : null
        }, t.prototype.Oa = function(t) {
            var i = this.Fa(t);
            return i === this.ma.length || t < this.ma[i].Ps ? null : i
        }, t.prototype.Fa = function(t) {
            return qt(this.ma, t, (function(t, i) {
                return t.Ps < i
            }))
        }, t.prototype.Ia = function(t) {
            return Ht(this.ma, t, (function(t, i) {
                return i.Ps > t
            }))
        }, t.prototype.Wa = function(t, i, n) {
            for (var h = null, s = t; s < i; s++) {
                var r = this.ma[s].J[n];
                Number.isNaN(r) || (null === h ? h = {
                    Ra: r,
                    ja: r
                } : (r < h.Ra && (h.Ra = r), r > h.ja && (h.ja = r)))
            }
            return h
        }, t.prototype.Ua = function(t) {
            var i = Math.floor(t.Ps / 30);
            this.ga.forEach((function(t) {
                return t.delete(i)
            }))
        }, t.prototype.Ea = function(t) {
            o(0 !== t.length, "plotRows should not be empty"), this.pa.clear(), this.ga.clear(), this.ma = t.concat(this.ma)
        }, t.prototype.La = function(t) {
            o(0 !== t.length, "plotRows should not be empty"), this.pa.clear(), this.ga.clear(), this.ma = this.ma.concat(t)
        }, t.prototype.Va = function(t) {
            o(!this.Qt(), "plot list should not be empty"), o(this.ma[this.ma.length - 1].Ps === t.Ps, "last row index should match new row index"), this.Ua(t), this.pa.delete(t.Ps), this.ma[this.ma.length - 1] = t
        }, t.prototype.Aa = function(t) {
            o(0 !== t.length, "plot rows should not be empty"), this.pa.clear(), this.ga.clear(), this.ma = function(t, i) {
                var n = function(t, i) {
                        var n = t.length,
                            h = i.length,
                            s = n + h,
                            r = 0,
                            e = 0;
                        for (; r < n && e < h;) t[r].Ps < i[e].Ps ? r++ : t[r].Ps > i[e].Ps ? e++ : (r++, e++, s--);
                        return s
                    }(t, i),
                    h = new Array(n),
                    s = 0,
                    r = 0,
                    e = t.length,
                    u = i.length,
                    a = 0;
                for (; s < e && r < u;) t[s].Ps < i[r].Ps ? (h[a] = t[s], s++) : t[s].Ps > i[r].Ps ? (h[a] = i[r], r++) : (h[a] = i[r], s++, r++), a++;
                for (; s < e;) h[a] = t[s], s++, a++;
                for (; r < u;) h[a] = i[r], r++, a++;
                return h
            }(this.ma, t)
        }, t.prototype.Ba = function(t, i, n) {
            if (this.Qt()) return null;
            var h = null,
                s = f(this.xa()),
                r = f(this.Ui()),
                e = Math.max(t, s),
                u = Math.min(i, r),
                a = 30 * Math.ceil(e / 30),
                o = Math.max(a, 30 * Math.floor(u / 30)),
                l = this.Fa(e),
                c = this.Ia(Math.min(u, a, i));
            h = Pi(h, this.Wa(l, c, n));
            var v = this.ga.get(n);
            void 0 === v && (v = new Map, this.ga.set(n, v));
            for (var _ = Math.max(a + 1, e); _ < o; _ += 30) {
                var d = Math.floor(_ / 30),
                    w = v.get(d);
                if (void 0 === w) {
                    var M = this.Fa(30 * d),
                        b = this.Ia(30 * (d + 1) - 1);
                    w = this.Wa(M, b, n), v.set(d, w)
                }
                h = Pi(h, w)
            }
            l = this.Fa(o), c = this.Ia(u);
            return h = Pi(h, this.Wa(l, c, n))
        }, t
    }();

function Pi(t, i) {
    return null === t ? i : null === i ? t : {
        Ra: Math.min(t.Ra, i.Ra),
        ja: Math.max(t.ja, i.ja)
    }
}
var Fi = function(t) {
        function i(i, n, h) {
            var s = t.call(this, i) || this;
            s.tt = new zi, s.aa = new Ci(s), s.qa = [], s.Ha = new _i(s), s.Ya = null, s.Ka = [], s.$a = [], s.xi = n, s.Xa = h;
            var r = new Di(s);
            return s.bi = [r], s.oa = new fi(r, s, i), s.Za(), s.Ja(), s
        }
        return e(i, t), i.prototype.en = function() {}, i.prototype.Qu = function(t) {
            return this.xi.priceLineColor || t
        }, i.prototype.Ju = function(t, i) {
            var n = {
                    Gu: !0
                },
                h = this.Z();
            if (this.ct().U().Qt() || h.Qt() || this.tt.Qt()) return n;
            var s, r, e = this.ct().U().wr(),
                u = this.Y();
            if (null === e || null === u) return n;
            if (t) {
                var a = this.tt.ka();
                if (null === a) return n;
                s = a, r = a.Ps
            } else {
                var o = this.tt.Ca(e.rs(), -1);
                if (null === o) return n;
                if (null === (s = this.tt.ba(o.Ps))) return n;
                r = o.Ps
            }
            var l = s.J[3],
                f = this.He().hu(r, {
                    J: s
                }),
                c = h.X(l, u.J);
            return {
                Gu: !1,
                F: i ? l : void 0,
                At: h.ti(l, u.J),
                ha: h.Xh(l),
                sa: h.Jh(l, u.J),
                et: f.nu,
                Pt: c,
                Ps: r
            }
        }, i.prototype.He = function() {
            return null !== this.Ya || (this.Ya = new Oi(this)), this.Ya
        }, i.prototype.I = function() {
            return this.xi
        }, i.prototype.sh = function(t) {
            var i = t.priceScaleId;
            void 0 !== i && i !== this.xi.priceScaleId && this.ct().Ga(this, i), v(this.xi, t), null !== this.ei && void 0 !== t.scaleMargins && this.ei.sh({
                scaleMargins: t.scaleMargins
            }), void 0 !== t.priceFormat && this.Za(), this.ct().Qa(this), this.ct().io()
        }, i.prototype.no = function() {
            this.tt.ya(), this.Ja()
        }, i.prototype.ho = function(t, i) {
            i && this.tt.ya(), this.tt._n(t), this.so(), this.Bi.V("data"), this.Ni.V("data");
            var n = this.ct().Du(this);
            this.ct().ro(n), this.ct().Qa(this), this.ct().io(), this.ct().Or()
        }, i.prototype.eo = function(t) {
            this.Ka = t.map((function(t) {
                return u({}, t)
            })), this.so();
            var i = this.ct().Du(this);
            this.Ni.V("data"), this.ct().ro(i), this.ct().Qa(this), this.ct().io(), this.ct().Or()
        }, i.prototype.Xu = function() {
            return this.$a
        }, i.prototype.uo = function(t) {
            var i = new Li(this, t);
            return this.qa.push(i), this.ct().Qa(this), i
        }, i.prototype.ao = function(t) {
            var i = this.qa.indexOf(t); - 1 !== i && this.qa.splice(i, 1), this.ct().Qa(this)
        }, i.prototype.fa = function() {
            return this.Xa
        }, i.prototype.Y = function() {
            var t = this.oo();
            return null === t ? null : {
                J: t.J[3],
                Ih: t.P
            }
        }, i.prototype.oo = function() {
            var t = this.ct().U().wr();
            if (null === t) return null;
            var i = t.ss();
            return this.tt.Ca(i, 1)
        }, i.prototype.qi = function() {
            return this.tt
        }, i.prototype.Zu = function(t) {
            var i = this.tt.ba(t);
            return null === i ? null : "Bar" === this.Xa || "Candlestick" === this.Xa ? {
                open: i.J[0],
                high: i.J[1],
                low: i.J[2],
                close: i.J[3]
            } : i.J[3]
        }, i.prototype.ci = function() {
            var t = [];
            this.lo() || t.push(this.Ha), t.push(this.Bi, this.aa, this.oa, this.Ni);
            for (var i = 0, n = this.qa; i < n.length; i++) {
                var h = n[i];
                t.push.apply(t, h.ci())
            }
            return t
        }, i.prototype.fi = function(t, i) {
            for (var n = i === this.ei || this.lo() ? a([], this.bi) : [], h = 0, s = this.qa; h < s.length; h++) {
                var r = s[h];
                n.push(r.la())
            }
            return n
        }, i.prototype.hs = function(t, i) {
            var n = this;
            if (void 0 !== this.xi.autoscaleInfoProvider) {
                var h = this.xi.autoscaleInfoProvider((function() {
                    var h = n.fo(t, i);
                    return null === h ? null : h.Mn()
                }));
                return Ti.bn(h)
            }
            return this.fo(t, i)
        }, i.prototype.ts = function() {
            return this.xi.priceFormat.minMove
        }, i.prototype.Kh = function() {
            return this.Zn
        }, i.prototype.Wi = function() {
            this.Bi.V(), this.Ni.V();
            for (var t = 0, i = this.bi; t < i.length; t++) {
                i[t].V()
            }
            for (var n = 0, h = this.qa; n < h.length; n++) {
                h[n].V()
            }
            this.aa.V(), this.Ha.V()
        }, i.prototype.Z = function() {
            return f(this.ei)
        }, i.prototype.q = function(t) {
            if (!(("Line" === this.Xa || "Area" === this.Xa) && this.xi.crosshairMarkerVisible)) return null;
            var i = this.tt.ba(t);
            return null === i ? null : {
                F: i.J[3],
                N: this.co(),
                $: this.vo(),
                K: this._o(t)
            }
        }, i.prototype.ta = function() {
            return this.xi.title
        }, i.prototype.H = function() {
            return this.xi.visible
        }, i.prototype.lo = function() {
            return !Ft(this.Z().hh())
        }, i.prototype.fo = function(t, i) {
            if (!d(t) || !d(i) || this.tt.Qt()) return null;
            var n = "Line" === this.Xa || "Area" === this.Xa || "Histogram" === this.Xa ? [3] : [2, 1],
                h = this.tt.Ta(t, i, n),
                s = null !== h ? new G(h.Ra, h.ja) : null;
            if ("Histogram" === this.fa()) {
                var r = this.xi.base,
                    e = new G(r, r);
                s = null !== s ? s._n(e) : e
            }
            return new Ti(s, this.Ni.$u())
        }, i.prototype.co = function() {
            switch (this.Xa) {
                case "Line":
                case "Area":
                    return this.xi.crosshairMarkerRadius
            }
            return 0
        }, i.prototype.vo = function() {
            switch (this.Xa) {
                case "Line":
                case "Area":
                    var t = this.xi.crosshairMarkerBorderColor;
                    if (0 !== t.length) return t
            }
            return this.ct().I().layout.backgroundColor
        }, i.prototype._o = function(t) {
            switch (this.Xa) {
                case "Line":
                case "Area":
                    var i = this.xi.crosshairMarkerBackgroundColor;
                    if (0 !== i.length) return i
            }
            return this.He().hu(t).nu
        }, i.prototype.Za = function() {
            switch (this.xi.priceFormat.type) {
                case "custom":
                    this.Zn = {
                        Ki: this.xi.priceFormat.formatter
                    };
                    break;
                case "volume":
                    this.Zn = new Wt(this.xi.priceFormat.precision);
                    break;
                case "percent":
                    this.Zn = new Z(this.xi.priceFormat.precision);
                    break;
                default:
                    var t = Math.pow(10, this.xi.priceFormat.precision);
                    this.Zn = new X(t, this.xi.priceFormat.minMove * t)
            }
            null !== this.ei && this.ei.rh()
        }, i.prototype.so = function() {
            var t = this,
                i = this.ct().U();
            if (i.Qt() || 0 === this.tt.je()) this.$a = [];
            else {
                var n = f(this.tt.xa());
                this.$a = this.Ka.map((function(h, s) {
                    var r = f(i.dr(h.time, !0)),
                        e = r < n ? 1 : -1;
                    return {
                        time: f(t.tt.Ca(r, e)).Ps,
                        position: h.position,
                        shape: h.shape,
                        color: h.color,
                        id: h.id,
                        Fu: s,
                        text: h.text,
                        size: h.size
                    }
                }))
            }
        }, i.prototype.Ja = function() {
            switch (this.Ni = new Si(this, this.ct()), this.Xa) {
                case "Bar":
                    this.Bi = new ti(this, this.ct());
                    break;
                case "Candlestick":
                    this.Bi = new ni(this, this.ct());
                    break;
                case "Line":
                    this.Bi = new ui(this, this.ct());
                    break;
                case "Area":
                    this.Bi = new Jt(this, this.ct());
                    break;
                case "Histogram":
                    this.Bi = new ei(this, this.ct());
                    break;
                default:
                    throw Error("Unknown chart style assigned: " + this.Xa)
            }
        }, i
    }(Ai),
    Ii = function() {
        function t(t) {
            this.xi = t
        }
        return t.prototype.do = function(t, i, n) {
            var h = t;
            if (0 === this.xi.mode) return h;
            var s = n.Ci(),
                r = s.Y();
            if (null === r) return h;
            var e = s.X(t, r),
                u = n.Vh().filter((function(t) {
                    return t instanceof Fi
                })).reduce((function(t, h) {
                    if (n.Tu(h) || !h.H()) return t;
                    var s = h.Z(),
                        r = h.qi();
                    if (s.Qt() || !r.As(i)) return t;
                    var e = r.ba(i);
                    if (null === e) return t;
                    var u = c(h.Y());
                    return t.concat([s.X(e.J[3], u.J)])
                }), []);
            if (0 === u.length) return h;
            u.sort((function(t, i) {
                return Math.abs(t - e) - Math.abs(i - e)
            }));
            var a = u[0];
            return h = s.Di(a, r)
        }, t
    }(),
    Wi = function() {
        function t() {
            this.tt = null
        }
        return t.prototype._ = function(t) {
            this.tt = t
        }, t.prototype.h = function(t, i, n, s) {
            var r = this;
            if (null !== this.tt) {
                var e = Math.max(1, Math.floor(i));
                t.lineWidth = e;
                var u = Math.ceil(this.tt.st * i),
                    a = Math.ceil(this.tt.ht * i);
                ! function(t, i) {
                    t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore()
                }(t, (function() {
                    var n = f(r.tt);
                    if (n.wo) {
                        t.strokeStyle = n.Mo, h(t, n.bo), t.beginPath();
                        for (var s = 0, o = n.mo; s < o.length; s++) {
                            var l = o[s],
                                c = Math.round(l.Tn * i);
                            t.moveTo(c, -e), t.lineTo(c, u + e)
                        }
                        t.stroke()
                    }
                    if (n.po) {
                        t.strokeStyle = n.yo, h(t, n.ko), t.beginPath();
                        for (var v = 0, _ = n.xo; v < _.length; v++) {
                            var d = _[v],
                                w = Math.round(d.Tn * i);
                            t.moveTo(-e, w), t.lineTo(a + e, w)
                        }
                        t.stroke()
                    }
                }))
            }
        }, t
    }(),
    Ri = function() {
        function t(t) {
            this.ot = new Wi, this.B = !0, this._i = t
        }
        return t.prototype.V = function() {
            this.B = !0
        }, t.prototype.W = function(t, i) {
            if (this.B) {
                var n = this._i.ct().I().grid,
                    h = {
                        st: t,
                        ht: i,
                        po: n.horzLines.visible,
                        wo: n.vertLines.visible,
                        yo: n.horzLines.color,
                        Mo: n.vertLines.color,
                        ko: n.horzLines.style,
                        bo: n.vertLines.style,
                        xo: this._i.Ci().An(),
                        mo: this._i.ct().U().An() || []
                    };
                this.ot._(h), this.B = !1
            }
            return this.ot
        }, t
    }(),
    ji = function() {
        function t(t) {
            this.Bi = new Ri(t)
        }
        return t.prototype.No = function() {
            return this.Bi
        }, t
    }(),
    Ui = function() {
        function t(t, i) {
            this.Hn = [], this.So = new Map, this.Vn = 0, this.Ys = 0, this.Co = 1e3, this.Yn = null, this.Do = new J, this.To = t, this.hi = i, this.Bo = new ji(this);
            var n = i.I();
            this.Eo = this.Lo("left", n.leftPriceScale), this.Ao = this.Lo("right", n.rightPriceScale), this.Eo.bh().Ji(this.Vo.bind(this, this.Eo), this), this.Ao.bh().Ji(this.Vo.bind(this, this.Eo), this), this.Oo(n)
        }
        return t.prototype.Oo = function(t) {
            if (t.leftPriceScale && this.Eo.sh(t.leftPriceScale), t.rightPriceScale && this.Ao.sh(t.rightPriceScale), t.localization && (this.Eo.rh(), this.Ao.rh()), t.overlayPriceScales)
                for (var i = 0, n = Array.from(this.So.values()); i < n.length; i++) {
                    var h = f(n[i][0].Z());
                    h.sh(t.overlayPriceScales), t.localization && h.rh()
                }
        }, t.prototype.zo = function(t) {
            switch (t) {
                case "left":
                    return this.Eo;
                case "right":
                    return this.Ao
            }
            return this.So.has(t) ? l(this.So.get(t))[0].Z() : null
        }, t.prototype.en = function() {
            this.ct().Po().hn(this), this.Eo.bh().hn(this), this.Ao.bh().hn(this), this.Hn.forEach((function(t) {
                t.en && t.en()
            })), this.Do.sn()
        }, t.prototype.Fo = function() {
            return this.Co
        }, t.prototype.Io = function(t) {
            this.Co = t
        }, t.prototype.ct = function() {
            return this.hi
        }, t.prototype.dt = function() {
            return this.Ys
        }, t.prototype.wt = function() {
            return this.Vn
        }, t.prototype.Sr = function(t) {
            this.Ys = t, this.Wo()
        }, t.prototype.mh = function(t) {
            var i = this;
            this.Vn = t, this.Eo.mh(t), this.Ao.mh(t), this.Hn.forEach((function(n) {
                if (i.Tu(n)) {
                    var h = n.Z();
                    null !== h && h.mh(t)
                }
            })), this.Wo()
        }, t.prototype.Vh = function() {
            return this.Hn
        }, t.prototype.Tu = function(t) {
            var i = t.Z();
            return null === i || this.Eo !== i && this.Ao !== i
        }, t.prototype.zh = function(t, i, n) {
            var h = void 0 !== n ? n : this.jo().Ro - 1;
            this.Uo(t, i, h)
        }, t.prototype.Fh = function(t) {
            var i = this.Hn.indexOf(t);
            o(-1 !== i, "removeDataSource: invalid data source"), this.Hn.splice(i, 1);
            var n = f(t.Z()).hh();
            if (this.So.has(n)) {
                var h = l(this.So.get(n)),
                    s = h.indexOf(t); - 1 !== s && (h.splice(s, 1), 0 === h.length && this.So.delete(n))
            }
            var r = t.Z();
            r && r.Vh().indexOf(t) >= 0 && r.Fh(t), null !== r && (r.Ph(), this.qo(r)), this.Yn = null
        }, t.prototype.Bu = function(t) {
            return t === this.Eo ? "left" : t === this.Ao ? "right" : "overlay"
        }, t.prototype.Ho = function() {
            return this.Eo
        }, t.prototype.Yo = function() {
            return this.Ao
        }, t.prototype.Ko = function(t, i) {
            t.Rh(i)
        }, t.prototype.$o = function(t, i) {
            t.jh(i), this.Wo()
        }, t.prototype.Xo = function(t) {
            t.Uh()
        }, t.prototype.Zo = function(t, i) {
            t.qh(i)
        }, t.prototype.Jo = function(t, i) {
            t.Hh(i), this.Wo()
        }, t.prototype.Go = function(t) {
            t.Yh()
        }, t.prototype.Wo = function() {
            this.Hn.forEach((function(t) {
                t.Wi()
            }))
        }, t.prototype.Ci = function() {
            var t = null;
            return this.hi.I().rightPriceScale.visible && 0 !== this.Ao.Vh().length ? t = this.Ao : this.hi.I().leftPriceScale.visible && 0 !== this.Eo.Vh().length ? t = this.Eo : 0 !== this.Hn.length && (t = this.Hn[0].Z()), null === t && (t = this.Ao), t
        }, t.prototype.qo = function(t) {
            null !== t && t.oh() && this.Qo(t)
        }, t.prototype.tl = function(t) {
            var i = this.To.wr();
            t.eh({
                _h: !0
            }), null !== i && t.Qh(i), this.Wo()
        }, t.prototype.il = function() {
            this.Qo(this.Eo), this.Qo(this.Ao)
        }, t.prototype.nl = function() {
            var t = this;
            this.qo(this.Eo), this.qo(this.Ao), this.Hn.forEach((function(i) {
                t.Tu(i) && t.qo(i.Z())
            })), this.Wo(), this.hi.Or()
        }, t.prototype.Oh = function() {
            return null === this.Yn && (this.Yn = _t(this.Hn)), this.Yn
        }, t.prototype.hl = function() {
            return this.Do
        }, t.prototype.sl = function() {
            return this.Bo
        }, t.prototype.Qo = function(t) {
            var i = t.Gh();
            if (i && i.length > 0 && !this.To.Qt()) {
                var n = this.To.wr();
                null !== n && t.Qh(n)
            }
            t.Wi()
        }, t.prototype.jo = function() {
            var t = this.Oh();
            if (0 === t.length) return {
                Ro: 0,
                rl: 0
            };
            for (var i = 0, n = 0, h = 0; h < t.length; h++) {
                var s = t[h].ai();
                null !== s && (s < i && (i = s), s > n && (n = s))
            }
            return {
                Ro: i,
                rl: n
            }
        }, t.prototype.Uo = function(t, i, n) {
            var h = this.zo(i);
            if (null === h && (h = this.Lo(i, this.hi.I().overlayPriceScales)), this.Hn.push(t), !Ft(i)) {
                var s = this.So.get(i) || [];
                s.push(t), this.So.set(i, s)
            }
            h.zh(t), t.li(h), t.oi(n), this.qo(h), this.Yn = null
        }, t.prototype.Vo = function(t, i, n) {
            i.uh !== n.uh && this.Qo(t)
        }, t.prototype.Lo = function(t, i) {
            var n = u({
                    visible: !0,
                    autoScale: !0
                }, b(i)),
                h = new bt(t, n, this.hi.I().layout, this.hi.I().localization);
            return h.mh(this.wt()), h
        }, t
    }(),
    qi = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.el = new Map, n.tt = i, n
        }
        return e(i, t), i.prototype.u = function(t) {}, i.prototype.l = function(t) {
            if (this.tt.H) {
                t.save();
                for (var i = 0, n = 0, h = this.tt.ul; n < h.length; n++) {
                    if (0 !== (a = h[n]).At.length) {
                        t.font = a.xt;
                        var s = this.al(t, a.At);
                        s > this.tt.dt ? a.Rr = this.tt.dt / s : a.Rr = 1, i += a.ol * a.Rr
                    }
                }
                var r = 0;
                switch (this.tt.ll) {
                    case "top":
                        r = 0;
                        break;
                    case "center":
                        r = Math.max((this.tt.wt - i) / 2, 0);
                        break;
                    case "bottom":
                        r = Math.max(this.tt.wt - i, 0)
                }
                t.fillStyle = this.tt.et;
                for (var e = 0, u = this.tt.ul; e < u.length; e++) {
                    var a = u[e];
                    t.save();
                    var o = 0;
                    switch (this.tt.fl) {
                        case "left":
                            t.textAlign = "left", o = a.ol / 2;
                            break;
                        case "center":
                            t.textAlign = "center", o = this.tt.dt / 2;
                            break;
                        case "right":
                            t.textAlign = "right", o = this.tt.dt - 1 - a.ol / 2
                    }
                    t.translate(o, r), t.textBaseline = "top", t.font = a.xt, t.scale(a.Rr, a.Rr), t.fillText(a.At, 0, a.cl), t.restore(), r += a.ol * a.Rr
                }
                t.restore()
            }
        }, i.prototype.al = function(t, i) {
            var n = this.vl(t.font),
                h = n.get(i);
            return void 0 === h && (h = t.measureText(i).width, n.set(i, h)), h
        }, i.prototype.vl = function(t) {
            var i = this.el.get(t);
            return void 0 === i && (i = new Map, this.el.set(t, i)), i
        }, i
    }(y),
    Hi = function() {
        function t(t) {
            this.B = !0, this.at = {
                H: !1,
                et: "",
                wt: 0,
                dt: 0,
                ul: [],
                ll: "center",
                fl: "center"
            }, this.ot = new qi(this.at), this.lt = t
        }
        return t.prototype.V = function() {
            this.B = !0
        }, t.prototype.W = function(t, i) {
            return this.B && (this.R(t, i), this.B = !1), this.ot
        }, t.prototype.R = function(t, i) {
            var n = this.lt.I(),
                h = this.at;
            h.H = n.visible, h.H && (h.et = n.color, h.dt = i, h.wt = t, h.fl = n.horzAlign, h.ll = n.vertAlign, h.ul = [{
                At: n.text,
                xt: zt(n.fontSize, n.fontFamily, n.fontStyle),
                ol: 1.2 * n.fontSize,
                cl: 0,
                Rr: 0
            }])
        }, t
    }(),
    Yi = function(t) {
        function i(i, n) {
            var h = t.call(this) || this;
            return h.xi = n, h.Bi = new Hi(h), h
        }
        return e(i, t), i.prototype.ci = function() {
            return [this.Bi]
        }, i.prototype.I = function() {
            return this.xi
        }, i.prototype.Wi = function() {
            this.Bi.V()
        }, i
    }(H),
    Ki = function() {
        function t(t, i) {
            this._l = [], this.dl = [], this.Ys = 0, this.wl = null, this.Ml = null, this.bl = new J, this.ml = new J, this.gl = t, this.xi = i, this.pl = new Pt(this), this.To = new Lt(this, i.timeScale, this.xi.localization), this.A = new Y(this, i.crosshair), this.yl = new Ii(i.crosshair), this.kl = new Yi(this, i.watermark), this.xl(), this._l[0].Io(2e3)
        }
        return t.prototype.Nl = function() {
            this.Sl(new It(3))
        }, t.prototype.Or = function() {
            this.Sl(new It(2))
        }, t.prototype.Qa = function(t) {
            var i = this.Cl(t);
            this.Sl(i)
        }, t.prototype.Dl = function() {
            return this.Ml
        }, t.prototype.Tl = function(t) {
            var i = this.Ml;
            this.Ml = t, null !== i && this.Qa(i.Bl), null !== t && this.Qa(t.Bl)
        }, t.prototype.I = function() {
            return this.xi
        }, t.prototype.sh = function(t) {
            v(this.xi, t), this._l.forEach((function(i) {
                return i.Oo(t)
            })), void 0 !== t.timeScale && this.To.sh(t.timeScale), void 0 !== t.localization && this.To.ar(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.bl.sn(), this.Nl()
        }, t.prototype.El = function(t, i) {
            var n = this.Ll(t);
            null !== n && (n.Z.sh(i), this.bl.sn())
        }, t.prototype.Ll = function(t) {
            for (var i = 0, n = this._l; i < n.length; i++) {
                var h = n[i],
                    s = h.zo(t);
                if (null !== s) return {
                    ft: h,
                    Z: s
                }
            }
            return null
        }, t.prototype.U = function() {
            return this.To
        }, t.prototype.Al = function() {
            return this._l
        }, t.prototype.Vl = function() {
            return this.kl
        }, t.prototype.Ol = function() {
            return this.A
        }, t.prototype.zl = function() {
            return this.ml
        }, t.prototype.Pl = function(t, i) {
            t.mh(i), this.Vr()
        }, t.prototype.Sr = function(t) {
            this.Ys = t, this.To.Sr(this.Ys), this._l.forEach((function(i) {
                return i.Sr(t)
            })), this.Vr()
        }, t.prototype.xl = function(t) {
            var i = new Ui(this.To, this);
            void 0 !== t ? this._l.splice(t, 0, i) : this._l.push(i);
            var n = void 0 === t ? this._l.length - 1 : t,
                h = new It(3);
            return h._e(n, {
                de: 0,
                _h: !0
            }), this.Sl(h), i
        }, t.prototype.Ko = function(t, i, n) {
            t.Ko(i, n)
        }, t.prototype.$o = function(t, i, n) {
            t.$o(i, n), this.io(), this.Sl(this.Fl(t, 2))
        }, t.prototype.Xo = function(t, i) {
            t.Xo(i), this.Sl(this.Fl(t, 2))
        }, t.prototype.Zo = function(t, i, n) {
            i.oh() || t.Zo(i, n)
        }, t.prototype.Jo = function(t, i, n) {
            i.oh() || (t.Jo(i, n), this.io(), this.Sl(this.Fl(t, 2)))
        }, t.prototype.Go = function(t, i) {
            i.oh() || (t.Go(i), this.Sl(this.Fl(t, 2)))
        }, t.prototype.tl = function(t, i) {
            t.tl(i), this.Sl(this.Fl(t, 2))
        }, t.prototype.Il = function(t) {
            this.To.Rh(t)
        }, t.prototype.Wl = function(t, i) {
            var n = this.U();
            if (!n.Qt() && 0 !== i) {
                var h = n.dt();
                t = Math.max(1, Math.min(t, h)), n.Rr(t, i), this.Vr()
            }
        }, t.prototype.Rl = function(t) {
            this.jl(0), this.Ul(t), this.ql()
        }, t.prototype.Hl = function(t) {
            this.To.jh(t), this.Vr()
        }, t.prototype.Yl = function() {
            this.To.Uh(), this.Or()
        }, t.prototype.jl = function(t) {
            this.wl = t, this.To.qh(t)
        }, t.prototype.Ul = function(t) {
            var i = !1;
            return null !== this.wl && Math.abs(t - this.wl) > 20 && (this.wl = null, i = !0), this.To.Hh(t), this.Vr(), i
        }, t.prototype.ql = function() {
            this.To.Yh(), this.Or(), this.wl = null
        }, t.prototype.O = function() {
            return this.dl
        }, t.prototype.Kl = function(t, i, n) {
            this.A.Ei(t, i);
            var h = NaN,
                s = this.To.Lr(t),
                r = this.To.wr();
            null !== r && (s = Math.min(Math.max(r.ss(), s), r.rs()));
            var e = n.Ci(),
                u = e.Y();
            null !== u && (h = e.Di(i, u)), h = this.yl.do(h, s, n), this.A.Oi(s, h, n), this.$l(), this.ml.sn(this.A.j(), {
                x: t,
                y: i
            })
        }, t.prototype.Xl = function() {
            this.Ol().Pi(), this.$l(), this.ml.sn(null, null)
        }, t.prototype.io = function() {
            var t = this.A.ft();
            if (null !== t) {
                var i = this.A.Ai(),
                    n = this.A.Vi();
                this.Kl(i, n, t)
            }
            this.A.Wi()
        }, t.prototype.Zl = function(t, i) {
            var n = this.To.si(0);
            void 0 !== i && this.To.V(i);
            var h = this.To.si(0),
                s = this.To.Br(),
                r = this.To.wr();
            if (null !== r && null !== n && null !== h) {
                var e = r.As(s),
                    u = n.Cs > h.Cs,
                    a = null !== t && t > s && !u,
                    o = e && this.To.I().shiftVisibleRangeOnNewBar;
                if (a && !o && null !== t) {
                    var l = t - s;
                    this.To._r(this.To.Pr() - l)
                }
            }
            this.To.Wr(t)
        }, t.prototype.ro = function(t) {
            null !== t && t.nl()
        }, t.prototype.Du = function(t) {
            var i = this._l.find((function(i) {
                return i.Oh().includes(t)
            }));
            return void 0 === i ? null : i
        }, t.prototype.Vr = function() {
            this.kl.Wi(), this._l.forEach((function(t) {
                return t.nl()
            })), this.io()
        }, t.prototype.en = function() {
            this._l.forEach((function(t) {
                return t.en()
            })), this._l.length = 0, this.xi.localization.priceFormatter = void 0, this.xi.localization.timeFormatter = void 0
        }, t.prototype.Jl = function() {
            return this.pl
        }, t.prototype.Eu = function() {
            return this.pl.I()
        }, t.prototype.Po = function() {
            return this.bl
        }, t.prototype.Gl = function(t, i) {
            var n = this._l[0],
                h = this.Ql(i, t, n);
            return this.dl.push(h), 1 === this.dl.length ? this.Nl() : this.Or(), h
        }, t.prototype.tf = function(t) {
            var i = this.Du(t),
                n = this.dl.indexOf(t);
            o(-1 !== n, "Series not found"), this.dl.splice(n, 1), f(i).Fh(t), t.en && t.en()
        }, t.prototype.Ga = function(t, i) {
            var n = f(this.Du(t));
            n.Fh(t);
            var h = this.Ll(i);
            if (null === h) {
                var s = t.ai();
                n.zh(t, i, s)
            } else {
                s = h.ft === n ? t.ai() : void 0;
                h.ft.zh(t, i, s)
            }
        }, t.prototype.Zr = function() {
            var t = new It(2);
            t.be(), this.Sl(t)
        }, t.prototype.if = function(t) {
            var i = new It(2);
            i.ge(t), this.Sl(i)
        }, t.prototype.pe = function() {
            var t = new It(2);
            t.pe(), this.Sl(t)
        }, t.prototype.vr = function(t) {
            var i = new It(2);
            i.vr(t), this.Sl(i)
        }, t.prototype._r = function(t) {
            var i = new It(2);
            i._r(t), this.Sl(i)
        }, t.prototype.nf = function() {
            return this.xi.rightPriceScale.visible ? "right" : "left"
        }, t.prototype.Fl = function(t, i) {
            var n = new It(i);
            if (null !== t) {
                var h = this._l.indexOf(t);
                n._e(h, {
                    de: i
                })
            }
            return n
        }, t.prototype.Cl = function(t, i) {
            return void 0 === i && (i = 2), this.Fl(this.Du(t), i)
        }, t.prototype.Sl = function(t) {
            this.gl && this.gl(t), this._l.forEach((function(t) {
                return t.sl().No().V()
            }))
        }, t.prototype.$l = function() {
            this.Sl(new It(1))
        }, t.prototype.Ql = function(t, i, n) {
            var h = new Fi(this, t, i),
                s = void 0 !== t.priceScaleId ? t.priceScaleId : this.nf();
            return n.zh(h, s), Ft(s) || h.sh(t), h
        }, t
    }(),
    $i = function() {
        function t(t, i) {
            this.ht = t, this.st = i
        }
        return t.prototype.on = function(t) {
            return this.ht === t.ht && this.st === t.st
        }, t
    }();

function Xi(t) {
    return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1
}

function Zi(t) {
    var i = f(t.getContext("2d"));
    return i.setTransform(1, 0, 0, 1, 0, 0), i
}

function Ji(t, i) {
    var n = t.createElement("canvas"),
        h = Xi(n);
    return n.style.width = i.ht + "px", n.style.height = i.st + "px", n.width = i.ht * h, n.height = i.st * h, n
}

function Gi(i, n) {
    var h = f(i.ownerDocument).createElement("canvas");
    i.appendChild(h);
    var s = t(h);
    return s.resizeCanvas({
        width: n.ht,
        height: n.st
    }), s
}
var Qi = "undefined" != typeof window;
var tn = function() {
    if (!Qi) return !1;
    var t = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || !!Qi && ("ontouchstart" in window || Boolean(window.DocumentTouch && document instanceof window.DocumentTouch));
    return "onorientationchange" in window && t
}();
var nn = function() {
        if (!Qi) return !1;
        var t = /Android/i.test(navigator.userAgent),
            i = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
        return t || i
    }(),
    hn = function() {
        function t(t, i, n) {
            this.hf = 0, this.sf = null, this.rf = null, this.ef = !1, this.uf = null, this.af = !1, this.lf = !1, this.ff = null, this.cf = null, this.vf = null, this._f = null, this.df = 0, this.wf = !1, this.Mf = !1, this.bf = !1, this.mf = t, this.gf = i, this.xi = n, this.pf()
        }
        return t.prototype.en = function() {
            null !== this.ff && (this.ff(), this.ff = null), null !== this.cf && (this.cf(), this.cf = null), null !== this.vf && (this.vf(), this.vf = null), this.yf(), this.kf()
        }, t.prototype.xf = function(t) {
            var i = this;
            this.cf && this.cf();
            var n = this.Nf.bind(this);
            this.cf = function() {
                i.mf.removeEventListener("mousemove", n)
            }, this.mf.addEventListener("mousemove", n), en(t) && this.Nf(t);
            var h = this.Sf(t);
            this.Cf(h, this.gf.Df)
        }, t.prototype.kf = function() {
            null !== this.sf && clearTimeout(this.sf), this.hf = 0, this.sf = null
        }, t.prototype.Nf = function(t) {
            if (!this.bf || en(t)) {
                var i = this.Sf(t);
                this.Cf(i, this.gf.Tf)
            }
        }, t.prototype.Bf = function(t) {
            if ((!("button" in t) || 0 === t.button) && null === this._f) {
                var i = en(t);
                if (!this.Mf || !i) {
                    this.wf = !0;
                    var n = this.Sf(t),
                        h = c(this.uf),
                        s = Math.abs(h.g - n.Ef),
                        r = Math.abs(h.p - n.Lf),
                        e = s + r > 5;
                    if (e || !i) {
                        if (e && !this.af && i) {
                            var u = .5 * s,
                                a = r >= u && !this.xi.Af,
                                o = u > r && !this.xi.Vf;
                            a || o || (this.Mf = !0)
                        }
                        e && (this.af = !0, this.lf = !0, i && this.yf()), this.Mf || (this.Cf(n, this.gf.Of), i && un(t))
                    }
                }
            }
        }, t.prototype.zf = function(t) {
            if (!("button" in t) || 0 === t.button) {
                var i = this.Sf(t);
                this.yf(), this.uf = null, this.bf = !1, this.vf && (this.vf(), this.vf = null), en(t) && this.Pf(t), this.Cf(i, this.gf.Ff), ++this.hf, this.sf && this.hf > 1 ? (this.Cf(i, this.gf.If), this.kf()) : this.lf || this.Cf(i, this.gf.Wf), en(t) && (un(t), this.Pf(t), 0 === t.touches.length && (this.ef = !1))
            }
        }, t.prototype.yf = function() {
            null !== this.rf && (clearTimeout(this.rf), this.rf = null)
        }, t.prototype.Rf = function(t) {
            if (!("button" in t) || 0 === t.button) {
                var i = this.Sf(t);
                this.lf = !1, this.af = !1, this.Mf = !1, en(t) && this.xf(t), this.uf = {
                    g: i.Ef,
                    p: i.Lf
                }, this.vf && (this.vf(), this.vf = null);
                var n = this.Bf.bind(this),
                    h = this.zf.bind(this),
                    s = this.mf.ownerDocument.documentElement;
                this.vf = function() {
                    s.removeEventListener("touchmove", n), s.removeEventListener("touchend", h), s.removeEventListener("mousemove", n), s.removeEventListener("mouseup", h)
                }, s.addEventListener("touchmove", n, {
                    passive: !1
                }), s.addEventListener("touchend", h, {
                    passive: !1
                }), this.yf(), en(t) && 1 === t.touches.length ? this.rf = setTimeout(this.jf.bind(this, t), 240) : (s.addEventListener("mousemove", n), s.addEventListener("mouseup", h)), this.bf = !0, this.Cf(i, this.gf.Uf), this.sf || (this.hf = 0, this.sf = setTimeout(this.kf.bind(this), 500))
            }
        }, t.prototype.pf = function() {
            var t = this;
            this.mf.addEventListener("mouseenter", this.xf.bind(this)), this.mf.addEventListener("touchcancel", this.yf.bind(this));
            var i = this.mf.ownerDocument,
                n = function(i) {
                    t.gf.qf && (i.composed && t.mf.contains(i.composedPath()[0]) || i.target && t.mf.contains(i.target) || t.gf.qf())
                };
            this.ff = function() {
                i.removeEventListener("mousedown", n), i.removeEventListener("touchstart", n)
            }, i.addEventListener("mousedown", n), i.addEventListener("touchstart", n, {
                passive: !0
            }), this.mf.addEventListener("mouseleave", this.Pf.bind(this)), this.mf.addEventListener("touchstart", this.Rf.bind(this), {
                passive: !0
            }), tn || this.mf.addEventListener("mousedown", this.Rf.bind(this)), this.Hf(), this.mf.addEventListener("touchmove", (function() {}), {
                passive: !1
            })
        }, t.prototype.Hf = function() {
            var t = this;
            void 0 === this.gf.Yf && void 0 === this.gf.Kf && void 0 === this.gf.$f || (this.mf.addEventListener("touchstart", (function(i) {
                return t.Xf(i.touches)
            }), {
                passive: !0
            }), this.mf.addEventListener("touchmove", (function(i) {
                if (2 === i.touches.length && null !== t._f && void 0 !== t.gf.Kf) {
                    var n = rn(i.touches[0], i.touches[1]) / t.df;
                    t.gf.Kf(t._f, n), un(i)
                }
            }), {
                passive: !1
            }), this.mf.addEventListener("touchend", (function(i) {
                t.Xf(i.touches)
            })))
        }, t.prototype.Xf = function(t) {
            1 === t.length && (this.wf = !1), 2 !== t.length || this.wf || this.ef ? this.Zf() : this.Jf(t)
        }, t.prototype.Jf = function(t) {
            var i = sn(this.mf);
            this._f = {
                g: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
                p: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
            }, this.df = rn(t[0], t[1]), void 0 !== this.gf.Yf && this.gf.Yf(), this.yf()
        }, t.prototype.Zf = function() {
            null !== this._f && (this._f = null, void 0 !== this.gf.$f && this.gf.$f())
        }, t.prototype.Pf = function(t) {
            this.cf && this.cf();
            var i = this.Sf(t);
            this.Cf(i, this.gf.Gf)
        }, t.prototype.jf = function(t) {
            var i = this.Sf(t);
            this.Cf(i, this.gf.Qf), this.lf = !0, this.ef = !0
        }, t.prototype.Cf = function(t, i) {
            i && i.call(this.gf, t)
        }, t.prototype.Sf = function(t) {
            var i;
            i = "touches" in t && t.touches.length ? t.touches[0] : "changedTouches" in t && t.changedTouches.length ? t.changedTouches[0] : t;
            var n = sn(this.mf);
            return {
                tc: i.clientX,
                ic: i.clientY,
                Ef: i.pageX,
                Lf: i.pageY,
                nc: i.screenX,
                hc: i.screenY,
                sc: i.clientX - n.left,
                rc: i.clientY - n.top,
                ec: t.ctrlKey,
                uc: t.altKey,
                ac: t.shiftKey,
                oc: t.metaKey,
                me: t.type.startsWith("mouse") ? "mouse" : "touch",
                lc: t.view
            }
        }, t
    }();

function sn(t) {
    return t.getBoundingClientRect() || {
        left: 0,
        top: 0
    }
}

function rn(t, i) {
    var n = t.clientX - i.clientX,
        h = t.clientY - i.clientY;
    return Math.sqrt(n * n + h * h)
}

function en(t) {
    return Boolean(t.touches)
}

function un(t) {
    t.cancelable && t.preventDefault()
}
var an = function() {
        function t(t, i, n, h) {
            this.xu = new oi(200), this.ue = 0, this.fc = "", this.Ou = "", this.gu = [], this.cc = new Map, this.ue = t, this.fc = i, this.Ou = zt(t, n, h)
        }
        return t.prototype.en = function() {
            this.xu.pu(), this.gu = [], this.cc.clear()
        }, t.prototype.vc = function(t, i, n, h, s) {
            var r = this._c(t, i);
            if ("left" !== s) {
                var e = Xi(t.canvas);
                n -= Math.floor(r.dc * e)
            }
            h -= Math.floor(r.wt / 2), t.drawImage(r.wc, n, h, r.dt, r.wt)
        }, t.prototype._c = function(t, i) {
            var n, h = this;
            if (this.cc.has(i)) n = l(this.cc.get(i));
            else {
                if (this.gu.length >= 200) {
                    var s = l(this.gu.shift());
                    this.cc.delete(s)
                }
                var r = Xi(t.canvas),
                    e = Math.ceil(this.ue / 4.5),
                    u = Math.round(this.ue / 10),
                    a = Math.ceil(this.xu.Vt(t, i)),
                    o = nt(Math.round(a + 2 * e)),
                    f = nt(this.ue + 2 * e),
                    c = Ji(document, new $i(o, f));
                n = {
                    At: i,
                    dc: Math.round(Math.max(1, a)),
                    dt: Math.ceil(o * r),
                    wt: Math.ceil(f * r),
                    wc: c
                }, 0 !== a && (this.gu.push(n.At), this.cc.set(n.At, n)), z(t = Zi(n.wc), r, (function() {
                    t.font = h.Ou, t.fillStyle = h.fc, t.fillText(i, 0, f - e - u)
                }))
            }
            return n
        }, t
    }(),
    on = function() {
        function t(t, i, n, h) {
            var s = this;
            this.Jt = null, this.Mc = null, this.bc = null, this.mc = !1, this.gc = new oi(50), this.yc = new an(11, "#000"), this.fc = null, this.Ou = null, this.kc = 0, this.xc = function() {
                s.Nc(s.pl.I()), s._i.Sc().ct().Or()
            }, this.Cc = function() {
                s._i.Sc().ct().Or()
            }, this._i = t, this.xi = i, this.pl = n, this.Dc = "left" === h, this.Tc = document.createElement("div"), this.Tc.style.height = "100%", this.Tc.style.overflow = "hidden", this.Tc.style.width = "25px", this.Tc.style.left = "0", this.Tc.style.position = "relative", this.Bc = Gi(this.Tc, new $i(16, 16)), this.Bc.subscribeCanvasConfigured(this.xc);
            var r = this.Bc.canvas;
            r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Ec = Gi(this.Tc, new $i(16, 16)), this.Ec.subscribeCanvasConfigured(this.Cc);
            var e = this.Ec.canvas;
            e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0";
            var u = {
                Uf: this.Lc.bind(this),
                Of: this.Ac.bind(this),
                qf: this.Vc.bind(this),
                Ff: this.Oc.bind(this),
                If: this.zc.bind(this),
                Df: this.Pc.bind(this),
                Gf: this.Fc.bind(this)
            };
            this.Ic = new hn(this.Ec.canvas, u, {
                Af: !1,
                Vf: !0
            })
        }
        return t.prototype.en = function() {
            this.Ic.en(), this.Ec.unsubscribeCanvasConfigured(this.Cc), this.Ec.destroy(), this.Bc.unsubscribeCanvasConfigured(this.xc), this.Bc.destroy(), null !== this.Jt && this.Jt.Wh().hn(this), this.Jt = null, null !== this.bc && (clearTimeout(this.bc), this.bc = null), this.yc.en()
        }, t.prototype.Wc = function() {
            return this.Tc
        }, t.prototype.K = function() {
            return this.xi.backgroundColor
        }, t.prototype.S = function() {
            return f(this.Jt).I().borderColor
        }, t.prototype.Rc = function() {
            return this.xi.textColor
        }, t.prototype.zt = function() {
            return this.xi.fontSize
        }, t.prototype.jc = function() {
            return zt(this.zt(), this.xi.fontFamily)
        }, t.prototype.Uc = function() {
            var t = this.pl.I(),
                i = this.fc !== t.et,
                n = this.Ou !== t.xt;
            return (i || n) && (this.Nc(t), this.fc = t.et), n && (this.gc.pu(), this.Ou = t.xt), t
        }, t.prototype.qc = function() {
            if (null === this.Jt) return 0;
            var t = 34,
                i = this.Uc(),
                n = Zi(this.Bc.canvas),
                h = this.Jt.An();
            n.font = this.jc(), h.length > 0 && (t = Math.max(this.gc.Vt(n, h[0].Bn), this.gc.Vt(n, h[h.length - 1].Bn)));
            for (var s = this.Hc(), r = s.length; r--;) {
                var e = this.gc.Vt(n, s[r].At());
                e > t && (t = e)
            }
            var u = Math.ceil(i.Dt + i.Ct + i.Et + i.Lt + t);
            return u += u % 2
        }, t.prototype.Yc = function(t) {
            if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
            null !== this.Mc && this.Mc.on(t) || (this.Mc = t, this.Bc.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.Ec.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.Tc.style.width = t.ht + "px", this.Tc.style.height = t.st + "px", this.Tc.style.minWidth = t.ht + "px")
        }, t.prototype.Kc = function() {
            return f(this.Mc).ht
        }, t.prototype.li = function(t) {
            this.Jt !== t && (null !== this.Jt && this.Jt.Wh().hn(this), this.Jt = t, t.Wh().Ji(this.Un.bind(this), this))
        }, t.prototype.Z = function() {
            return this.Jt
        }, t.prototype.pu = function() {
            var t = this._i.$c();
            this._i.Sc().ct().tl(t, f(this.Z()))
        }, t.prototype.Xc = function(t) {
            if (null !== this.Mc) {
                if (1 !== t) {
                    var i = Zi(this.Bc.canvas);
                    this.Zc(), this.Jc(i, this.Bc.pixelRatio), this.uu(i, this.Bc.pixelRatio), this.Gc(i, this.Bc.pixelRatio), this.Qc(i, this.Bc.pixelRatio)
                }
                var n = Zi(this.Ec.canvas),
                    h = this.Mc.ht,
                    s = this.Mc.st;
                z(n, this.Ec.pixelRatio, (function() {
                    n.clearRect(0, 0, h, s)
                })), this.tv(n, this.Ec.pixelRatio)
            }
        }, t.prototype.iv = function() {
            return this.Bc.canvas
        }, t.prototype.Lc = function(t) {
            if (null !== this.Jt && !this.Jt.Qt() && this._i.Sc().I().handleScale.axisPressedMouseMove.price) {
                var i = this._i.Sc().ct(),
                    n = this._i.$c();
                this.mc = !0, i.Ko(n, this.Jt, t.rc)
            }
        }, t.prototype.Ac = function(t) {
            if (null !== this.Jt && this._i.Sc().I().handleScale.axisPressedMouseMove.price) {
                var i = this._i.Sc().ct(),
                    n = this._i.$c(),
                    h = this.Jt;
                i.$o(n, h, t.rc)
            }
        }, t.prototype.Vc = function() {
            if (null !== this.Jt && this._i.Sc().I().handleScale.axisPressedMouseMove.price) {
                var t = this._i.Sc().ct(),
                    i = this._i.$c(),
                    n = this.Jt;
                this.mc && (this.mc = !1, t.Xo(i, n))
            }
        }, t.prototype.Oc = function(t) {
            if (null !== this.Jt && this._i.Sc().I().handleScale.axisPressedMouseMove.price) {
                var i = this._i.Sc().ct(),
                    n = this._i.$c();
                this.mc = !1, i.Xo(n, this.Jt)
            }
        }, t.prototype.zc = function(t) {
            this._i.Sc().I().handleScale.axisDoubleClickReset && this.pu()
        }, t.prototype.Pc = function(t) {
            null !== this.Jt && (!this._i.Sc().ct().I().handleScale.axisPressedMouseMove.price || this.Jt.lh() || this.Jt.fh() || this.nv(1))
        }, t.prototype.Fc = function(t) {
            this.nv(0)
        }, t.prototype.Hc = function() {
            var t = this,
                i = [],
                n = null === this.Jt ? void 0 : this.Jt;
            return function(h) {
                for (var s = 0; s < h.length; ++s)
                    for (var r = h[s].fi(t._i.$c(), n), e = 0; e < r.length; e++) i.push(r[e])
            }(this._i.$c().Oh()), i
        }, t.prototype.Jc = function(t, i) {
            var n = this;
            if (null !== this.Mc) {
                var h = this.Mc.ht,
                    s = this.Mc.st;
                z(t, i, (function() {
                    P(t, 0, 0, h, s, n.K())
                }))
            }
        }, t.prototype.uu = function(t, i) {
            if (null !== this.Mc && null !== this.Jt && this.Jt.I().borderVisible) {
                t.save(), t.fillStyle = this.S();
                var n, h = Math.max(1, Math.floor(this.Uc().Dt * i));
                n = this.Dc ? Math.floor(this.Mc.ht * i) - h : 0, t.fillRect(n, 0, h, Math.ceil(this.Mc.st * i)), t.restore()
            }
        }, t.prototype.Gc = function(t, i) {
            if (null !== this.Mc && null !== this.Jt) {
                var n = this.Jt.An();
                t.save(), t.strokeStyle = this.S(), t.font = this.jc(), t.fillStyle = this.S();
                var h = this.Uc(),
                    s = this.Jt.I().borderVisible && this.Jt.I().drawTicks,
                    r = this.Dc ? Math.floor((this.Mc.ht - h.Ct) * i - h.Dt * i) : Math.floor(h.Dt * i),
                    e = this.Dc ? Math.round(r - h.Et * i) : Math.round(r + h.Ct * i + h.Et * i),
                    u = this.Dc ? "right" : "left",
                    a = Math.max(1, Math.floor(i)),
                    o = Math.floor(.5 * i);
                if (s) {
                    var l = Math.round(h.Ct * i);
                    t.beginPath();
                    for (var f = 0, c = n; f < c.length; f++) {
                        var v = c[f];
                        t.rect(r, Math.round(v.Tn * i) - o, l, a)
                    }
                    t.fill()
                }
                t.fillStyle = this.Rc();
                for (var _ = 0, d = n; _ < d.length; _++) {
                    v = d[_];
                    this.yc.vc(t, v.Bn, e, Math.round(v.Tn * i), u)
                }
                t.restore()
            }
        }, t.prototype.Zc = function() {
            if (null !== this.Mc && null !== this.Jt) {
                var t = this.Mc.st / 2,
                    i = [],
                    n = this.Jt.Oh().slice(),
                    h = this._i.$c(),
                    s = this.Uc();
                this.Jt === h.Ci() && this._i.$c().Oh().forEach((function(t) {
                    h.Tu(t) && n.push(t)
                }));
                var r = this.Jt.Vh()[0],
                    e = this.Jt;
                n.forEach((function(n) {
                    var s = n.fi(h, e);
                    s.forEach((function(t) {
                        t.Yt(null), t.Kt() && i.push(t)
                    })), r === n && s.length > 0 && (t = s[0].Pt())
                }));
                var u = i.filter((function(i) {
                        return i.Pt() <= t
                    })),
                    a = i.filter((function(i) {
                        return i.Pt() > t
                    }));
                if (u.sort((function(t, i) {
                        return i.Pt() - t.Pt()
                    })), u.length && a.length && a.push(u[0]), a.sort((function(t, i) {
                        return t.Pt() - i.Pt()
                    })), i.forEach((function(t) {
                        return t.Yt(t.Pt())
                    })), this.Jt.I().alignLabels) {
                    for (var o = 1; o < u.length; o++) {
                        var l = u[o],
                            f = (v = u[o - 1]).wt(s, !1);
                        l.Pt() > (_ = v.Ht()) - f && l.Yt(_ - f)
                    }
                    for (var c = 1; c < a.length; c++) {
                        var v, _;
                        l = a[c], f = (v = a[c - 1]).wt(s, !0);
                        l.Pt() < (_ = v.Ht()) + f && l.Yt(_ + f)
                    }
                }
            }
        }, t.prototype.Qc = function(t, i) {
            var n = this;
            if (null !== this.Mc) {
                t.save();
                var h = this.Mc,
                    s = this.Hc(),
                    r = this.Uc(),
                    e = this.Dc ? "right" : "left";
                s.forEach((function(s) {
                    if (s.$t()) {
                        var u = s.W(f(n.Jt));
                        t.save(), u.h(t, r, n.gc, h.ht, e, i), t.restore()
                    }
                })), t.restore()
            }
        }, t.prototype.tv = function(t, i) {
            var n = this;
            if (null !== this.Mc && null !== this.Jt) {
                t.save();
                var h = this.Mc,
                    s = this._i.Sc().ct(),
                    r = [],
                    e = this._i.$c(),
                    u = s.Ol().fi(e, this.Jt);
                u.length && r.push(u);
                var a = this.Uc(),
                    o = this.Dc ? "right" : "left";
                r.forEach((function(s) {
                    s.forEach((function(s) {
                        t.save(), s.W(f(n.Jt)).h(t, a, n.gc, h.ht, o, i), t.restore()
                    }))
                })), t.restore()
            }
        }, t.prototype.nv = function(t) {
            this.Tc.style.cursor = 1 === t ? "ns-resize" : "default"
        }, t.prototype.Un = function() {
            var t = this,
                i = this.qc();
            if (this.kc < i) {
                var n = this._i.Sc();
                null === this.bc && (this.bc = setTimeout((function() {
                    n && n.ct().Nl(), t.bc = null
                }), 100))
            }
            this.kc = i
        }, t.prototype.Nc = function(t) {
            this.yc.en(), this.yc = new an(t.zt, t.et, t.ee)
        }, t
    }(),
    ln = nn,
    fn = function() {
        function t(t, i) {
            var n = this;
            this.Mc = new $i(0, 0), this.hv = null, this.sv = null, this.rv = null, this.ev = !1, this.uv = new J, this.av = 0, this.ov = !1, this.lv = null, this.fv = !1, this.cv = null, this.xc = function() {
                return n.vv && n.hi().Or()
            }, this.Cc = function() {
                return n.vv && n.hi().Or()
            }, this._v = t, this.vv = i, this.vv.hl().Ji(this.dv.bind(this), this, !0), this.wv = document.createElement("td"), this.wv.style.padding = "0", this.wv.style.position = "relative";
            var h = document.createElement("div");
            h.style.width = "100%", h.style.height = "100%", h.style.position = "relative", h.style.overflow = "hidden", this.Mv = document.createElement("td"), this.Mv.style.padding = "0", this.bv = document.createElement("td"), this.bv.style.padding = "0", this.wv.appendChild(h), this.Bc = Gi(h, new $i(16, 16)), this.Bc.subscribeCanvasConfigured(this.xc);
            var s = this.Bc.canvas;
            s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Ec = Gi(h, new $i(16, 16)), this.Ec.subscribeCanvasConfigured(this.Cc);
            var r = this.Ec.canvas;
            r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.mv = document.createElement("tr"), this.mv.appendChild(this.Mv), this.mv.appendChild(this.wv), this.mv.appendChild(this.bv), this.gv();
            var e = this.Sc().I().handleScroll;
            this.Ic = new hn(this.Ec.canvas, this, {
                Af: !e.vertTouchDrag,
                Vf: !e.horzTouchDrag
            })
        }
        return t.prototype.en = function() {
            null !== this.hv && this.hv.en(), null !== this.sv && this.sv.en(), this.Ec.unsubscribeCanvasConfigured(this.Cc), this.Ec.destroy(), this.Bc.unsubscribeCanvasConfigured(this.xc), this.Bc.destroy(), null !== this.vv && this.vv.hl().hn(this), this.Ic.en()
        }, t.prototype.$c = function() {
            return f(this.vv)
        }, t.prototype.pv = function(i) {
            null !== this.vv && this.vv.hl().hn(this), this.vv = i, null !== this.vv && this.vv.hl().Ji(t.prototype.dv.bind(this), this, !0), this.gv()
        }, t.prototype.Sc = function() {
            return this._v
        }, t.prototype.Wc = function() {
            return this.mv
        }, t.prototype.gv = function() {
            if (null !== this.vv && (this.yv(), 0 !== this.hi().O().length)) {
                if (null !== this.hv) {
                    var t = this.vv.Ho();
                    this.hv.li(f(t))
                }
                if (null !== this.sv) {
                    var i = this.vv.Yo();
                    this.sv.li(f(i))
                }
            }
        }, t.prototype.Fo = function() {
            return null !== this.vv ? this.vv.Fo() : 0
        }, t.prototype.Io = function(t) {
            this.vv && this.vv.Io(t)
        }, t.prototype.Df = function(t) {
            if (this.vv) {
                var i = t.sc,
                    n = t.rc;
                tn || this.kv(i, n)
            }
        }, t.prototype.Uf = function(t) {
            if (this.ov = !1, this.fv = null !== this.lv, this.vv) {
                if (document.activeElement !== document.body && document.activeElement !== document.documentElement) f(document.activeElement).blur();
                else {
                    var i = document.getSelection();
                    null !== i && i.removeAllRanges()
                }
                var n = this.hi();
                if (!this.vv.Ci().Qt() && !n.U().Qt()) {
                    if (null !== this.lv) {
                        var h = n.Ol();
                        this.cv = {
                            x: h.Mt(),
                            y: h.bt()
                        }, this.lv = {
                            x: t.sc,
                            y: t.rc
                        }
                    }
                    tn || this.kv(t.sc, t.rc)
                }
            }
        }, t.prototype.Tf = function(t) {
            if (this.vv) {
                var i = t.sc,
                    n = t.rc;
                if (this.xv() && this.Nv(), !tn) {
                    this.kv(i, n);
                    var h = this.zu(i, n);
                    this.hi().Tl(h && {
                        Bl: h.Bl,
                        Sv: h.Sv
                    }), null !== h && void 0 !== h.lc.Cv && h.lc.Cv(i, n)
                }
            }
        }, t.prototype.Wf = function(t) {
            if (null !== this.vv) {
                var i = t.sc,
                    n = t.rc,
                    h = this.zu(i, n);
                if (null !== h && void 0 !== h.lc.Dv && h.lc.Dv(i, n), this.uv.rn()) {
                    var s = this.hi().Ol().j();
                    this.uv.sn(s, {
                        x: i,
                        y: n
                    })
                }
                this.Tv()
            }
        }, t.prototype.Of = function(t) {
            if (null !== this.vv) {
                var i = this.hi(),
                    n = t.sc,
                    h = t.rc;
                if (null !== this.lv) {
                    this.fv = !1;
                    var s = f(this.cv),
                        r = s.x + (n - this.lv.x),
                        e = s.y + (h - this.lv.y);
                    this.kv(r, e)
                } else this.xv() || this.kv(n, h);
                if (!i.U().Qt()) {
                    var u = this._v.I().handleScroll;
                    if (u.pressedMouseMove && "touch" !== t.me || (u.horzTouchDrag || u.vertTouchDrag) && "mouse" !== t.me) {
                        var a = this.vv.Ci();
                        null !== this.rv || this.Bv() || (this.rv = {
                            x: t.tc,
                            y: t.ic
                        }), null === this.rv || this.rv.x === t.tc && this.rv.y === t.ic || this.ev || (a.Qt() || i.Zo(this.vv, a, t.rc), i.jl(t.sc), this.ev = !0), this.ev && (a.Qt() || i.Jo(this.vv, a, t.rc), i.Ul(t.sc))
                    }
                }
            }
        }, t.prototype.Ff = function(t) {
            if (null !== this.vv) {
                this.ov = !1;
                var i = this.hi();
                if (this.ev) {
                    var n = this.vv.Ci();
                    i.Go(this.vv, n), i.ql(), this.rv = null, this.ev = !1
                }
            }
        }, t.prototype.Qf = function(t) {
            if (this.ov = !0, null === this.lv && ln) {
                var i = {
                    x: t.sc,
                    y: t.rc
                };
                this.Ev(i, i)
            }
        }, t.prototype.Gf = function(t) {
            null !== this.vv && (this.vv.ct().Tl(null), nn || this.Nv())
        }, t.prototype.Lv = function() {
            return this.uv
        }, t.prototype.Yf = function() {
            this.av = 1
        }, t.prototype.Kf = function(t, i) {
            if (this._v.I().handleScale.pinch) {
                var n = 5 * (i - this.av);
                this.av = i, this.hi().Wl(t.g, n)
            }
        }, t.prototype.zu = function(t, i) {
            var n = this.vv;
            if (null === n) return null;
            for (var h = 0, s = n.Oh(); h < s.length; h++) {
                var r = s[h],
                    e = this.Av(r.ci(n), t, i);
                if (null !== e) return {
                    Bl: r,
                    lc: e.lc,
                    Sv: e.Sv
                }
            }
            return null
        }, t.prototype.Vv = function(t, i) {
            f("left" === i ? this.hv : this.sv).Yc(new $i(t, this.Mc.st))
        }, t.prototype.Ov = function() {
            return this.Mc
        }, t.prototype.Yc = function(t) {
            if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
            this.Mc.on(t) || (this.Mc = t, this.Bc.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.Ec.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.wv.style.width = t.ht + "px", this.wv.style.height = t.st + "px")
        }, t.prototype.zv = function() {
            var t = f(this.vv);
            t.qo(t.Ho()), t.qo(t.Yo());
            for (var i = 0, n = t.Vh(); i < n.length; i++) {
                var h = n[i];
                if (t.Tu(h)) {
                    var s = h.Z();
                    null !== s && t.qo(s), h.Wi()
                }
            }
        }, t.prototype.iv = function() {
            return this.Bc.canvas
        }, t.prototype.Xc = function(t) {
            if (0 !== t && null !== this.vv) {
                if (t > 1 && this.zv(), null !== this.hv && this.hv.Xc(t), null !== this.sv && this.sv.Xc(t), 1 !== t) {
                    var i = Zi(this.Bc.canvas);
                    i.save(), this.Jc(i, this.Pv(), this.Bc.pixelRatio), this.vv && (this.Fv(i, this.Bc.pixelRatio), this.Iv(i, this.Bc.pixelRatio), this.Wv(i, this.Bc.pixelRatio)), i.restore()
                }
                var n = Zi(this.Ec.canvas);
                n.clearRect(0, 0, Math.ceil(this.Mc.ht * this.Ec.pixelRatio), Math.ceil(this.Mc.st * this.Ec.pixelRatio)), this.Rv(n, this.Ec.pixelRatio)
            }
        }, t.prototype.jv = function() {
            return this.hv
        }, t.prototype.Uv = function() {
            return this.sv
        }, t.prototype.Pv = function() {
            return this._v.I().layout.backgroundColor
        }, t.prototype.dv = function() {
            null !== this.vv && this.vv.hl().hn(this), this.vv = null
        }, t.prototype.Jc = function(t, i, n) {
            var h = this;
            z(t, n, (function() {
                P(t, 0, 0, h.Mc.ht, h.Mc.st, i)
            }))
        }, t.prototype.Fv = function(t, i) {
            var n = f(this.vv),
                h = n.sl().No().W(n.wt(), n.dt());
            null !== h && (t.save(), h.h(t, i, !1), t.restore())
        }, t.prototype.Iv = function(t, i) {
            var n = this.hi().Vl();
            this.qv(n, t, i), this.Hv(n, t, i)
        }, t.prototype.Rv = function(t, i) {
            this.Hv(this.hi().Ol(), t, i)
        }, t.prototype.Wv = function(t, i) {
            for (var n = f(this.vv).Oh(), h = 0, s = n; h < s.length; h++) {
                var r = s[h];
                this.qv(r, t, i)
            }
            for (var e = 0, u = n; e < u.length; e++) {
                r = u[e];
                this.Hv(r, t, i)
            }
        }, t.prototype.Hv = function(t, i, n) {
            for (var h = f(this.vv), s = t.ci(h), r = h.wt(), e = h.dt(), u = h.ct().Dl(), a = null !== u && u.Bl === t, o = null !== u && a && void 0 !== u.Sv ? u.Sv.Pu : void 0, l = 0, c = s; l < c.length; l++) {
                var v = c[l].W(r, e);
                null !== v && (i.save(), v.h(i, n, a, o), i.restore())
            }
        }, t.prototype.qv = function(t, i, n) {
            for (var h = f(this.vv), s = t.ci(h), r = h.wt(), e = h.dt(), u = h.ct().Dl(), a = null !== u && u.Bl === t, o = null !== u && a && void 0 !== u.Sv ? u.Sv.Pu : void 0, l = 0, c = s; l < c.length; l++) {
                var v = c[l].W(r, e);
                null !== v && void 0 !== v.o && (i.save(), v.o(i, n, a, o), i.restore())
            }
        }, t.prototype.Av = function(t, i, n) {
            for (var h = 0, s = t; h < s.length; h++) {
                var r = s[h],
                    e = r.W(this.Mc.st, this.Mc.ht);
                if (null !== e && e.zu) {
                    var u = e.zu(i, n);
                    if (null !== u) return {
                        lc: r,
                        Sv: u
                    }
                }
            }
            return null
        }, t.prototype.yv = function() {
            if (null !== this.vv) {
                var t = this._v;
                t.I().leftPriceScale.visible || null === this.hv || (this.Mv.removeChild(this.hv.Wc()), this.hv.en(), this.hv = null), t.I().rightPriceScale.visible || null === this.sv || (this.bv.removeChild(this.sv.Wc()), this.sv.en(), this.sv = null);
                var i = t.ct().Jl();
                t.I().leftPriceScale.visible && null === this.hv && (this.hv = new on(this, t.I().layout, i, "left"), this.Mv.appendChild(this.hv.Wc())), t.I().rightPriceScale.visible && null === this.sv && (this.sv = new on(this, t.I().layout, i, "right"), this.bv.appendChild(this.sv.Wc()))
            }
        }, t.prototype.xv = function() {
            return ln && null === this.lv
        }, t.prototype.Bv = function() {
            return ln && this.ov || null !== this.lv
        }, t.prototype.Yv = function(t) {
            return Math.max(0, Math.min(t, this.Mc.ht - 1))
        }, t.prototype.Kv = function(t) {
            return Math.max(0, Math.min(t, this.Mc.st - 1))
        }, t.prototype.kv = function(t, i) {
            this.hi().Kl(this.Yv(t), this.Kv(i), f(this.vv))
        }, t.prototype.Nv = function() {
            this.hi().Xl()
        }, t.prototype.Tv = function() {
            this.fv && (this.lv = null, this.Nv())
        }, t.prototype.Ev = function(t, i) {
            this.lv = t, this.fv = !1, this.kv(i.x, i.y);
            var n = this.hi().Ol();
            this.cv = {
                x: n.Mt(),
                y: n.bt()
            }
        }, t.prototype.hi = function() {
            return this._v.ct()
        }, t
    }(),
    cn = function() {
        function t(t, i, n, h) {
            var s = this;
            this.B = !0, this.Mc = new $i(0, 0), this.xc = function() {
                return s.Xc(3)
            }, this.Dc = "left" === t, this.pl = n.Jl, this.xi = i, this.$v = h, this.Tc = document.createElement("div"), this.Tc.style.width = "25px", this.Tc.style.height = "100%", this.Tc.style.overflow = "hidden", this.Bc = Gi(this.Tc, new $i(16, 16)), this.Bc.subscribeCanvasConfigured(this.xc)
        }
        return t.prototype.en = function() {
            this.Bc.unsubscribeCanvasConfigured(this.xc), this.Bc.destroy()
        }, t.prototype.Wc = function() {
            return this.Tc
        }, t.prototype.Ov = function() {
            return this.Mc
        }, t.prototype.Yc = function(t) {
            if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
            this.Mc.on(t) || (this.Mc = t, this.Bc.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.Tc.style.width = t.ht + "px", this.Tc.style.minWidth = t.ht + "px", this.Tc.style.height = t.st + "px", this.B = !0)
        }, t.prototype.Xc = function(t) {
            if ((!(t < 3) || this.B) && 0 !== this.Mc.ht && 0 !== this.Mc.st) {
                this.B = !1;
                var i = Zi(this.Bc.canvas);
                this.Jc(i, this.Bc.pixelRatio), this.uu(i, this.Bc.pixelRatio)
            }
        }, t.prototype.iv = function() {
            return this.Bc.canvas
        }, t.prototype.uu = function(t, i) {
            if (this.$v()) {
                var n = this.Mc.ht;
                t.save(), t.fillStyle = this.xi.timeScale.borderColor;
                var h = Math.floor(this.pl.I().Dt * i),
                    s = this.Dc ? Math.round(n * i) - h : 0;
                t.fillRect(s, 0, h, h), t.restore()
            }
        }, t.prototype.Jc = function(t, i) {
            var n = this;
            z(t, i, (function() {
                P(t, 0, 0, n.Mc.ht, n.Mc.st, n.xi.layout.backgroundColor)
            }))
        }, t
    }();

function vn(t, i) {
    return t.Fs > i.Fs ? t : i
}
var _n = function() {
        function t(t) {
            var i = this;
            this.Xv = null, this.Zv = null, this.re = null, this.Jv = !1, this.Mc = new $i(0, 0), this.xc = function() {
                return i._v.ct().Or()
            }, this.Cc = function() {
                return i._v.ct().Or()
            }, this._v = t, this.xi = t.I().layout, this.Gv = document.createElement("tr"), this.Qv = document.createElement("td"), this.Qv.style.padding = "0", this.t_ = document.createElement("td"), this.t_.style.padding = "0", this.Tc = document.createElement("td"), this.Tc.style.height = "25px", this.Tc.style.padding = "0", this.i_ = document.createElement("div"), this.i_.style.width = "100%", this.i_.style.height = "100%", this.i_.style.position = "relative", this.i_.style.overflow = "hidden", this.Tc.appendChild(this.i_), this.Bc = Gi(this.i_, new $i(16, 16)), this.Bc.subscribeCanvasConfigured(this.xc);
            var n = this.Bc.canvas;
            n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Ec = Gi(this.i_, new $i(16, 16)), this.Ec.subscribeCanvasConfigured(this.Cc);
            var h = this.Ec.canvas;
            h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0", this.Gv.appendChild(this.Qv), this.Gv.appendChild(this.Tc), this.Gv.appendChild(this.t_), this.n_(), this._v.ct().Po().Ji(this.n_.bind(this), this), this.Ic = new hn(this.Ec.canvas, this, {
                Af: !0,
                Vf: !1
            })
        }
        return t.prototype.en = function() {
            this.Ic.en(), null !== this.Xv && this.Xv.en(), null !== this.Zv && this.Zv.en(), this.Ec.unsubscribeCanvasConfigured(this.Cc), this.Ec.destroy(), this.Bc.unsubscribeCanvasConfigured(this.xc), this.Bc.destroy()
        }, t.prototype.Wc = function() {
            return this.Gv
        }, t.prototype.h_ = function() {
            return this.Xv
        }, t.prototype.s_ = function() {
            return this.Zv
        }, t.prototype.Uf = function(t) {
            if (!this.Jv) {
                this.Jv = !0;
                var i = this._v.ct();
                !i.U().Qt() && this._v.I().handleScale.axisPressedMouseMove.time && i.Il(t.sc)
            }
        }, t.prototype.qf = function() {
            var t = this._v.ct();
            !t.U().Qt() && this.Jv && (this.Jv = !1, this._v.I().handleScale.axisPressedMouseMove.time && t.Yl())
        }, t.prototype.Of = function(t) {
            var i = this._v.ct();
            !i.U().Qt() && this._v.I().handleScale.axisPressedMouseMove.time && i.Hl(t.sc)
        }, t.prototype.Ff = function(t) {
            this.Jv = !1;
            var i = this._v.ct();
            i.U().Qt() && !this._v.I().handleScale.axisPressedMouseMove.time || i.Yl()
        }, t.prototype.If = function() {
            this._v.I().handleScale.axisDoubleClickReset && this._v.ct().pe()
        }, t.prototype.Df = function(t) {
            this._v.ct().I().handleScale.axisPressedMouseMove.time && this.nv(1)
        }, t.prototype.Gf = function(t) {
            this.nv(0)
        }, t.prototype.Ov = function() {
            return this.Mc
        }, t.prototype.r_ = function(t, i, n) {
            this.Mc && this.Mc.on(t) || (this.Mc = t, this.Bc.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.Ec.resizeCanvas({
                width: t.ht,
                height: t.st
            }), this.Tc.style.width = t.ht + "px", this.Tc.style.height = t.st + "px"), null !== this.Xv && this.Xv.Yc(new $i(i, t.st)), null !== this.Zv && this.Zv.Yc(new $i(n, t.st))
        }, t.prototype.e_ = function() {
            var t = this.u_();
            return Math.ceil(t.Dt + t.Ct + t.zt + t.Tt + t.Bt)
        }, t.prototype.V = function() {
            this._v.ct().U().An()
        }, t.prototype.iv = function() {
            return this.Bc.canvas
        }, t.prototype.Xc = function(t) {
            if (0 !== t) {
                if (1 !== t) {
                    var i = Zi(this.Bc.canvas);
                    this.Jc(i, this.Bc.pixelRatio), this.uu(i, this.Bc.pixelRatio), this.Gc(i, this.Bc.pixelRatio), null !== this.Xv && this.Xv.Xc(t), null !== this.Zv && this.Zv.Xc(t)
                }
                var n = Zi(this.Ec.canvas),
                    h = this.Ec.pixelRatio;
                n.clearRect(0, 0, Math.ceil(this.Mc.ht * h), Math.ceil(this.Mc.st * h)), this.a_([this._v.ct().Ol()], n, h)
            }
        }, t.prototype.Jc = function(t, i) {
            var n = this;
            z(t, i, (function() {
                P(t, 0, 0, n.Mc.ht, n.Mc.st, n.Pv())
            }))
        }, t.prototype.uu = function(t, i) {
            if (this._v.I().timeScale.borderVisible) {
                t.save(), t.fillStyle = this.o_();
                var n = Math.max(1, Math.floor(this.u_().Dt * i));
                t.fillRect(0, 0, Math.ceil(this.Mc.ht * i), n), t.restore()
            }
        }, t.prototype.Gc = function(t, i) {
            var n = this,
                h = this._v.ct().U().An();
            if (h && 0 !== h.length) {
                var s = h.reduce(vn, h[0]).Fs;
                s > 30 && s < 40 && (s = 30), t.save(), t.strokeStyle = this.o_();
                var r = this.u_(),
                    e = r.Dt + r.Ct + r.Tt + r.zt - r.Ot;
                t.textAlign = "center", t.fillStyle = this.o_();
                var u = Math.floor(this.u_().Dt * i),
                    a = Math.max(1, Math.floor(i)),
                    o = Math.floor(.5 * i);
                if (this._v.ct().U().I().borderVisible) {
                    t.beginPath();
                    for (var l = Math.round(r.Ct * i), f = h.length; f--;) {
                        var c = Math.round(h[f].Tn * i);
                        t.rect(c - o, u, a, l)
                    }
                    t.fill()
                }
                t.fillStyle = this.oe(), z(t, i, (function() {
                    t.font = n.l_();
                    for (var i = 0, r = h; i < r.length; i++) {
                        (o = r[i]).Fs < s && t.fillText(o.Bn, o.Tn, e)
                    }
                    t.font = n.f_();
                    for (var u = 0, a = h; u < a.length; u++) {
                        var o;
                        (o = a[u]).Fs >= s && t.fillText(o.Bn, o.Tn, e)
                    }
                }))
            }
        }, t.prototype.a_ = function(t, i, n) {
            for (var h = this.u_(), s = 0, r = t; s < r.length; s++)
                for (var e = 0, u = r[s].vi(); e < u.length; e++) {
                    var a = u[e];
                    i.save(), a.W().h(i, h, n), i.restore()
                }
        }, t.prototype.Pv = function() {
            return this.xi.backgroundColor
        }, t.prototype.o_ = function() {
            return this._v.I().timeScale.borderColor
        }, t.prototype.oe = function() {
            return this.xi.textColor
        }, t.prototype.ue = function() {
            return this.xi.fontSize
        }, t.prototype.l_ = function() {
            return zt(this.ue(), this.xi.fontFamily)
        }, t.prototype.f_ = function() {
            return zt(this.ue(), this.xi.fontFamily, "bold")
        }, t.prototype.u_ = function() {
            null === this.re && (this.re = {
                Dt: 1,
                Ot: NaN,
                Tt: NaN,
                Bt: NaN,
                ni: NaN,
                Ct: 3,
                zt: NaN,
                xt: "",
                ii: new oi
            });
            var t = this.re,
                i = this.l_();
            if (t.xt !== i) {
                var n = this.ue();
                t.zt = n, t.xt = i, t.Tt = Math.ceil(n / 2.5), t.Bt = t.Tt, t.ni = Math.ceil(n / 2), t.Ot = Math.round(this.ue() / 5), t.ii.pu()
            }
            return this.re
        }, t.prototype.nv = function(t) {
            this.Tc.style.cursor = 1 === t ? "ew-resize" : "default"
        }, t.prototype.n_ = function() {
            var t = this._v.ct(),
                i = t.I();
            i.leftPriceScale.visible || null === this.Xv || (this.Qv.removeChild(this.Xv.Wc()), this.Xv.en(), this.Xv = null), i.rightPriceScale.visible || null === this.Zv || (this.t_.removeChild(this.Zv.Wc()), this.Zv.en(), this.Zv = null);
            var n = {
                Jl: this._v.ct().Jl()
            };
            if (i.leftPriceScale.visible && null === this.Xv) {
                var h = function() {
                    return i.leftPriceScale.borderVisible && t.U().I().borderVisible
                };
                this.Xv = new cn("left", this._v.I(), n, h), this.Qv.appendChild(this.Xv.Wc())
            }
            if (i.rightPriceScale.visible && null === this.Zv) {
                h = function() {
                    return i.rightPriceScale.borderVisible && t.U().I().borderVisible
                };
                this.Zv = new cn("right", this._v.I(), n, h), this.t_.appendChild(this.Zv.Wc())
            }
        }, t
    }(),
    dn = function() {
        function t(t, i) {
            var n;
            this.c_ = [], this.v_ = 0, this.Vn = 0, this.Ys = 0, this.__ = 0, this.d_ = 0, this.w_ = null, this.M_ = !1, this.uv = new J, this.ml = new J, this.xi = i, this.Gv = document.createElement("div"), this.Gv.classList.add("tv-lightweight-charts"), this.Gv.style.overflow = "hidden", this.Gv.style.width = "100%", this.Gv.style.height = "100%", (n = this.Gv).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.b_ = document.createElement("table"), this.b_.setAttribute("cellspacing", "0"), this.Gv.appendChild(this.b_), this.m_ = this.g_.bind(this), this.Gv.addEventListener("wheel", this.m_, {
                passive: !1
            }), this.hi = new Ki(this.gl.bind(this), this.xi), this.ct().zl().Ji(this.p_.bind(this), this), this.y_ = new _n(this), this.b_.appendChild(this.y_.Wc());
            var h = this.xi.width,
                s = this.xi.height;
            if (0 === h || 0 === s) {
                var r = t.getBoundingClientRect();
                0 === h && (h = Math.floor(r.width), h -= h % 2), 0 === s && (s = Math.floor(r.height), s -= s % 2)
            }
            this.k_(h, s), this.x_(), t.appendChild(this.Gv), this.N_(), this.hi.U().$r().Ji(this.hi.Nl.bind(this.hi), this), this.hi.Po().Ji(this.hi.Nl.bind(this.hi), this)
        }
        return t.prototype.ct = function() {
            return this.hi
        }, t.prototype.I = function() {
            return this.xi
        }, t.prototype.S_ = function() {
            return this.c_
        }, t.prototype.en = function() {
            this.Gv.removeEventListener("wheel", this.m_), 0 !== this.v_ && window.cancelAnimationFrame(this.v_), this.hi.zl().hn(this), this.hi.U().$r().hn(this), this.hi.Po().hn(this), this.hi.en();
            for (var t = 0, i = this.c_; t < i.length; t++) {
                var n = i[t];
                this.b_.removeChild(n.Wc()), n.Lv().hn(this), n.en()
            }
            this.c_ = [], f(this.y_).en(), null !== this.Gv.parentElement && this.Gv.parentElement.removeChild(this.Gv), this.ml.en(), this.uv.en()
        }, t.prototype.k_ = function(t, i, n) {
            if (void 0 === n && (n = !1), this.Vn !== i || this.Ys !== t) {
                this.Vn = i, this.Ys = t;
                var h = i + "px",
                    s = t + "px";
                f(this.Gv).style.height = h, f(this.Gv).style.width = s, this.b_.style.height = h, this.b_.style.width = s, n ? this.C_(new It(3)) : this.hi.Nl()
            }
        }, t.prototype.Xc = function(t) {
            void 0 === t && (t = new It(3));
            for (var i = 0; i < this.c_.length; i++) this.c_[i].Xc(t.Me(i).de);
            this.y_.Xc(t.we())
        }, t.prototype.sh = function(t) {
            this.hi.sh(t), this.N_();
            var i = t.width || this.Ys,
                n = t.height || this.Vn;
            this.k_(i, n)
        }, t.prototype.Lv = function() {
            return this.uv
        }, t.prototype.zl = function() {
            return this.ml
        }, t.prototype.D_ = function() {
            var t = this;
            null !== this.w_ && (this.C_(this.w_), this.w_ = null);
            var i = this.c_[0],
                n = Ji(document, new $i(this.Ys, this.Vn)),
                h = Zi(n),
                s = Xi(n);
            return z(h, s, (function() {
                var n = 0,
                    s = 0,
                    r = function(i) {
                        for (var r = 0; r < t.c_.length; r++) {
                            var e = t.c_[r],
                                u = e.Ov().st,
                                a = f("left" === i ? e.jv() : e.Uv()),
                                o = a.iv();
                            h.drawImage(o, n, s, a.Kc(), u), s += u
                        }
                    };
                t.T_() && (r("left"), n = f(i.jv()).Kc()), s = 0;
                for (var e = 0; e < t.c_.length; e++) {
                    var u = t.c_[e],
                        a = u.Ov(),
                        o = u.iv();
                    h.drawImage(o, n, s, a.ht, a.st), s += a.st
                }
                n += i.Ov().ht, t.B_() && (s = 0, r("right"));
                var l = function(i) {
                    var r = f("left" === i ? t.y_.h_() : t.y_.s_()),
                        e = r.Ov(),
                        u = r.iv();
                    h.drawImage(u, n, s, e.ht, e.st)
                };
                if (t.xi.timeScale.visible) {
                    n = 0, t.T_() && (l("left"), n = f(i.jv()).Kc());
                    var c = t.y_.Ov();
                    o = t.y_.iv();
                    h.drawImage(o, n, s, c.ht, c.st), t.B_() && (n = i.Ov().ht, l("right"), h.restore())
                }
            })), n
        }, t.prototype.E_ = function(t) {
            return "none" === t ? 0 : ("left" !== t || this.T_()) && ("right" !== t || this.B_()) ? 0 === this.c_.length ? 0 : f("left" === t ? this.c_[0].jv() : this.c_[0].Uv()).Kc() : 0
        }, t.prototype.L_ = function() {
            for (var t = 0, i = 0, n = 0, h = 0, s = this.c_; h < s.length; h++) {
                var r = s[h];
                this.T_() && (i = Math.max(i, f(r.jv()).qc())), this.B_() && (n = Math.max(n, f(r.Uv()).qc())), t += r.Fo()
            }
            var e = this.Ys,
                u = this.Vn,
                a = Math.max(e - i - n, 0),
                o = this.xi.timeScale.visible ? this.y_.e_() : 0;
            o % 2 && (o += 1);
            for (var l = 0 + o, c = u < l ? 0 : u - l, v = c / t, _ = 0, d = 0; d < this.c_.length; ++d) {
                (r = this.c_[d]).pv(this.hi.Al()[d]);
                var w, M = 0;
                M = d === this.c_.length - 1 ? c - _ : Math.round(r.Fo() * v), _ += w = Math.max(M, 2), r.Yc(new $i(a, w)), this.T_() && r.Vv(i, "left"), this.B_() && r.Vv(n, "right"), r.$c() && this.hi.Pl(r.$c(), w)
            }
            this.y_.r_(new $i(a, o), i, n), this.hi.Sr(a), this.__ !== i && (this.__ = i), this.d_ !== n && (this.d_ = n)
        }, t.prototype.g_ = function(t) {
            var i = t.deltaX / 100,
                n = -t.deltaY / 100;
            if (0 !== i && this.xi.handleScroll.mouseWheel || 0 !== n && this.xi.handleScale.mouseWheel) {
                switch (t.cancelable && t.preventDefault(), t.deltaMode) {
                    case t.DOM_DELTA_PAGE:
                        i *= 120, n *= 120;
                        break;
                    case t.DOM_DELTA_LINE:
                        i *= 32, n *= 32
                }
                if (0 !== n && this.xi.handleScale.mouseWheel) {
                    var h = Math.sign(n) * Math.min(1, Math.abs(n)),
                        s = t.clientX - this.Gv.getBoundingClientRect().left;
                    this.ct().Wl(s, h)
                }
                0 !== i && this.xi.handleScroll.mouseWheel && this.ct().Rl(-80 * i)
            }
        }, t.prototype.C_ = function(t) {
            var i = t.we();
            if (3 === i && this.A_(), 3 === i || 2 === i) {
                for (var n = this.hi.Al(), h = 0; h < n.length; h++) t.Me(h)._h && n[h].il();
                for (var s = t.ye(), r = 0, e = s; r < e.length; r++) {
                    var u = e[r];
                    this.ke(u)
                }
                s.length > 0 && (this.hi.Vr(), this.hi.io(), this.hi.Or()), this.y_.V()
            }
            this.Xc(t)
        }, t.prototype.ke = function(t) {
            var i = this.hi.U();
            switch (t.me) {
                case 0:
                    i.Zr();
                    break;
                case 1:
                    i.Jr(t.J);
                    break;
                case 2:
                    i.vr(t.J);
                    break;
                case 3:
                    i._r(t.J);
                    break;
                case 4:
                    i.Ir()
            }
        }, t.prototype.gl = function(t) {
            var i = this;
            null !== this.w_ ? this.w_._n(t) : this.w_ = t, this.M_ || (this.M_ = !0, this.v_ = window.requestAnimationFrame((function() {
                i.M_ = !1, i.v_ = 0, null !== i.w_ && (i.C_(i.w_), i.w_ = null)
            })))
        }, t.prototype.A_ = function() {
            this.x_()
        }, t.prototype.x_ = function() {
            for (var t = this.hi.Al(), i = t.length, n = this.c_.length, h = i; h < n; h++) {
                var s = l(this.c_.pop());
                this.b_.removeChild(s.Wc()), s.Lv().hn(this), s.en()
            }
            for (h = n; h < i; h++) {
                (s = new fn(this, t[h])).Lv().Ji(this.V_.bind(this), this), this.c_.push(s), this.b_.insertBefore(s.Wc(), this.y_.Wc())
            }
            for (h = 0; h < i; h++) {
                var r = t[h];
                (s = this.c_[h]).$c() !== r ? s.pv(r) : s.gv()
            }
            this.N_(), this.L_()
        }, t.prototype.O_ = function(t, i) {
            var n, h = new Map;
            null !== t && this.hi.O().forEach((function(i) {
                var n = i.Zu(t);
                null !== n && h.set(i, n)
            }));
            if (null !== t) {
                var s = this.hi.U().si(t);
                null !== s && (n = s)
            }
            var r = this.ct().Dl(),
                e = null !== r && r.Bl instanceof Fi ? r.Bl : void 0,
                u = null !== r && void 0 !== r.Sv ? r.Sv.Iu : void 0;
            return {
                P: n,
                z_: i || void 0,
                P_: e,
                F_: h,
                I_: u
            }
        }, t.prototype.V_ = function(t, i) {
            var n = this;
            this.uv.sn((function() {
                return n.O_(t, i)
            }))
        }, t.prototype.p_ = function(t, i) {
            var n = this;
            this.ml.sn((function() {
                return n.O_(t, i)
            }))
        }, t.prototype.N_ = function() {
            var t = this.xi.timeScale.visible ? "" : "none";
            this.y_.Wc().style.display = t
        }, t.prototype.T_ = function() {
            return this.xi.leftPriceScale.visible
        }, t.prototype.B_ = function() {
            return this.xi.rightPriceScale.visible
        }, t
    }();

function wn(t, i, n) {
    var h = n.value,
        s = {
            Ps: i,
            P: t,
            J: [h, h, h, h]
        };
    return "color" in n && void 0 !== n.color && (s.et = n.color), s
}

function Mn(t, i, n) {
    return {
        Ps: i,
        P: t,
        J: [n.open, n.high, n.low, n.close]
    }
}

function bn(t) {
    return void 0 !== t.J
}

function mn(t) {
    return function(i, n, h) {
        return void 0 === (s = h).open && void 0 === s.value ? {
            P: i,
            Ps: n
        } : t(i, n, h);
        var s
    }
}
var gn = {
    Candlestick: mn(Mn),
    Bar: mn(Mn),
    Area: mn(wn),
    Histogram: mn(wn),
    Line: mn(wn)
};

function pn(t) {
    return gn[t]
}

function yn(t) {
    return 60 * t * 60 * 1e3
}

function kn(t) {
    return 60 * t * 1e3
}
var xn, Nn = [{
    W_: 1,
    Fs: 20
}, {
    W_: (xn = 1, 1e3 * xn),
    Fs: 19
}, {
    W_: kn(1),
    Fs: 20
}, {
    W_: kn(5),
    Fs: 21
}, {
    W_: kn(30),
    Fs: 22
}, {
    W_: yn(1),
    Fs: 30
}, {
    W_: yn(3),
    Fs: 31
}, {
    W_: yn(6),
    Fs: 32
}, {
    W_: yn(12),
    Fs: 33
}];

function Sn(t, i) {
    if (null !== i) {
        var n = new Date(1e3 * i),
            h = new Date(1e3 * t);
        if (h.getUTCFullYear() !== n.getUTCFullYear()) return 70;
        if (h.getUTCMonth() !== n.getUTCMonth()) return 60;
        if (h.getUTCDate() !== n.getUTCDate()) return 50;
        for (var s = Nn.length - 1; s >= 0; --s)
            if (Math.floor(n.getTime() / Nn[s].W_) !== Math.floor(h.getTime() / Nn[s].W_)) return Nn[s].Fs
    }
    return 20
}

function Cn(t) {
    if (!At(t)) throw new Error("time must be of type BusinessDay");
    var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return {
        Cs: Math.round(i.getTime() / 1e3),
        Ss: t
    }
}

function Dn(t) {
    if (!Vt(t)) throw new Error("time must be of type isUTCTimestamp");
    return {
        Cs: t
    }
}

function Tn(t) {
    return 0 === t.length ? null : At(t[0].time) ? Cn : Dn
}

function Bn(t) {
    return Vt(t) ? Dn(t) : At(t) ? Cn(t) : Cn(En(t))
}

function En(t) {
    var i = new Date(t);
    if (isNaN(i.getTime())) throw new Error("Invalid date string=" + t + ", expected format=yyyy-mm-dd");
    return {
        day: i.getUTCDate(),
        month: i.getUTCMonth() + 1,
        year: i.getUTCFullYear()
    }
}

function Ln(t) {
    w(t.time) && (t.time = En(t.time))
}

function An(t) {
    return {
        Ps: 0,
        R_: new Map,
        Ih: t
    }
}
var Vn = function() {
    function t() {
        this.j_ = new Map, this.U_ = new Map, this.q_ = new Map, this.H_ = []
    }
    return t.prototype.en = function() {
        this.j_.clear(), this.U_.clear(), this.q_.clear(), this.H_ = []
    }, t.prototype.Y_ = function(t, i) {
        var n = this;
        this.q_.has(t) && this.j_.forEach((function(i) {
            return i.R_.delete(t)
        }));
        var h = [];
        if (0 !== i.length) {
            ! function(t) {
                t.forEach(Ln)
            }(i);
            var s = f(Tn(i)),
                r = pn(t.fa());
            h = i.map((function(i) {
                var h = s(i.time),
                    e = n.j_.get(h.Cs);
                void 0 === e && (e = An(h), n.j_.set(h.Cs, e));
                var u = r(h, e.Ps, i);
                return e.R_.set(t, u), u
            }))
        }
        return this.K_(), this.X_(t, h), this.Z_(t)
    }, t.prototype.tf = function(t) {
        return this.Y_(t, [])
    }, t.prototype.J_ = function(t, i) {
        Ln(i);
        var n = f(Tn([i]))(i.time),
            h = this.q_.get(t);
        if (void 0 !== h && n.Cs < h.Cs) throw new Error("Cannot update oldest data, last time=" + h.Cs + ", new time=" + n.Cs);
        var s = this.j_.get(n.Cs),
            r = void 0 === s;
        void 0 === s && (s = An(n), this.j_.set(n.Cs, s));
        var e = pn(t.fa())(n, s.Ps, i);
        s.R_.set(t, e);
        var u = this.G_(t, e);
        if (!r) {
            var a = new Map;
            return null !== u && a.set(t, u), {
                Q_: a,
                U: {
                    Br: this.td()
                }
            }
        }
        return this.Z_(t)
    }, t.prototype.G_ = function(t, i) {
        var n = this.U_.get(t);
        void 0 === n && (n = [], this.U_.set(t, n));
        var h = 0 !== n.length ? n[n.length - 1] : null,
            s = null;
        return null === h || i.P.Cs > h.P.Cs ? bn(i) && (n.push(i), s = {
            Nl: !1,
            nd: [i]
        }) : bn(i) ? (n[n.length - 1] = i, s = {
            Nl: !1,
            nd: [i]
        }) : (n.splice(-1, 1), s = {
            Nl: !0,
            nd: n
        }), this.q_.set(t, i.P), s
    }, t.prototype.X_ = function(t, i) {
        0 !== i.length ? (this.U_.set(t, i.filter(bn)), this.q_.set(t, i[i.length - 1].P)) : (this.U_.delete(t), this.q_.delete(t))
    }, t.prototype.K_ = function() {
        var t = new Map;
        this.j_.forEach((function(i, n) {
            i.R_.size > 0 && t.set(n, i)
        })), this.j_ = t
    }, t.prototype.hd = function(t) {
        for (var i = -1, n = 0; n < this.H_.length && n < t.length; ++n) {
            var h = this.H_[n],
                s = t[n];
            if (h.P.Cs !== s.P.Cs) {
                i = n;
                break
            }
            s.zs = h.zs
        }
        if (-1 === i && this.H_.length !== t.length && (i = Math.min(this.H_.length, t.length)), -1 === i) return -1;
        var r = function(i) {
                var n = l(e.j_.get(t[i].P.Cs));
                n.Ps = i, n.R_.forEach((function(t) {
                    t.Ps = i
                }))
            },
            e = this;
        for (n = i; n < t.length; ++n) r(n);
        return function(t, i) {
            void 0 === i && (i = 0);
            for (var n = 0 === i || 0 === t.length ? null : t[i - 1].P.Cs, h = 0, s = i; s < t.length; ++s) {
                var r = t[s];
                r.zs = Sn(r.P.Cs, n), h += r.P.Cs - (n || r.P.Cs), n = r.P.Cs
            }
            if (0 === i && t.length > 1) {
                var e = Math.ceil(h / (t.length - 1)),
                    u = t[0].P.Cs - e;
                t[0].zs = Sn(t[0].P.Cs, u)
            }
        }(t, i), this.H_ = t, i
    }, t.prototype.td = function() {
        if (0 === this.U_.size) return null;
        var t = 0;
        return this.U_.forEach((function(i) {
            0 !== i.length && (t = Math.max(t, i[i.length - 1].Ps))
        })), t
    }, t.prototype.Z_ = function(t) {
        var i = Array.from(this.j_.values()).map((function(t) {
            return {
                zs: 0,
                P: t.Ih
            }
        }));
        i.sort((function(t, i) {
            return t.P.Cs - i.P.Cs
        }));
        var n = this.hd(i),
            h = {
                Q_: new Map,
                U: {
                    Br: this.td()
                }
            };
        if (-1 !== n) this.U_.forEach((function(t, i) {
            h.Q_.set(i, {
                nd: t,
                Nl: !0
            })
        })), this.U_.has(t) || h.Q_.set(t, {
            nd: [],
            Nl: !0
        }), h.U.sd = this.H_;
        else {
            var s = this.U_.get(t);
            h.Q_.set(t, {
                nd: s || [],
                Nl: !0
            })
        }
        return h
    }, t
}();
var On = {
        color: "#FF0000",
        price: 0,
        lineStyle: 2,
        lineWidth: 1,
        axisLabelVisible: !0,
        title: ""
    },
    zn = function() {
        function t(t) {
            this.ea = t
        }
        return t.prototype.applyOptions = function(t) {
            this.ea.sh(t)
        }, t.prototype.options = function() {
            return this.ea.I()
        }, t.prototype.rd = function() {
            return this.ea
        }, t
    }();

function Pn(t) {
    var i = t.overlay,
        n = function(t, i) {
            var n = {};
            for (var h in t) Object.prototype.hasOwnProperty.call(t, h) && i.indexOf(h) < 0 && (n[h] = t[h]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (h = Object.getOwnPropertySymbols(t); s < h.length; s++) i.indexOf(h[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, h[s]) && (n[h[s]] = t[h[s]])
            }
            return n
        }(t, ["overlay"]);
    return i && (n.priceScaleId = ""), n
}
var Fn = function() {
        function t(t, i, n) {
            this.Oe = t, this.ed = i, this.ud = n
        }
        return t.prototype.priceFormatter = function() {
            return this.Oe.Kh()
        }, t.prototype.Q_ = function() {
            return this.Oe
        }, t.prototype.priceToCoordinate = function(t) {
            var i = this.Oe.Y();
            return null === i ? null : this.Oe.Z().X(t, i.J)
        }, t.prototype.coordinateToPrice = function(t) {
            var i = this.Oe.Y();
            return null === i ? null : this.Oe.Z().Di(t, i.J)
        }, t.prototype.barsInLogicalRange = function(t) {
            if (null === t) return null;
            var i = new Et(new Ct(t.from, t.to)).Us(),
                n = this.Oe.qi();
            if (n.Qt()) return null;
            var h = n.Ca(i.ss(), 1),
                s = n.Ca(i.rs(), -1),
                r = f(n.xa()),
                e = f(n.Ui());
            if (null !== h && null !== s && h.Ps > s.Ps) return {
                barsBefore: t.from - r,
                barsAfter: e - t.to
            };
            var u = {
                barsBefore: null === h || h.Ps === r ? t.from - r : h.Ps - r,
                barsAfter: null === s || s.Ps === e ? e - t.to : e - s.Ps
            };
            return null !== h && null !== s && (u.from = h.P.Ss || h.P.Cs, u.to = s.P.Ss || s.P.Cs), u
        }, t.prototype.setData = function(t) {
            this.Oe.fa(), this.ed.ad(this.Oe, t)
        }, t.prototype.update = function(t) {
            this.Oe.fa(), this.ed.ho(this.Oe, t)
        }, t.prototype.setMarkers = function(t) {
            var i = t.map((function(t) {
                return u(u({}, t), {
                    time: Bn(t.time)
                })
            }));
            this.Oe.eo(i)
        }, t.prototype.applyOptions = function(t) {
            var i = Pn(t);
            this.Oe.sh(i)
        }, t.prototype.options = function() {
            return b(this.Oe.I())
        }, t.prototype.priceScale = function() {
            return this.ud.priceScale(this.Oe.Z().hh())
        }, t.prototype.createPriceLine = function(t) {
            var i = v(b(On), t),
                n = this.Oe.uo(i);
            return new zn(n)
        }, t.prototype.removePriceLine = function(t) {
            this.Oe.ao(t.rd())
        }, t.prototype.seriesType = function() {
            return this.Oe.fa()
        }, t
    }(),
    In = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this
        }
        return e(i, t), i.prototype.applyOptions = function(i) {
            mt(i), t.prototype.applyOptions.call(this, i)
        }, i
    }(Fn),
    Wn = {
        autoScale: !0,
        mode: 0,
        invertScale: !1,
        alignLabels: !0,
        borderVisible: !0,
        borderColor: "#2B2B43",
        entireTextOnly: !1,
        visible: !1,
        drawTicks: !0,
        scaleMargins: {
            bottom: .1,
            top: .2
        }
    },
    Rn = {
        color: "rgba(0, 0, 0, 0)",
        visible: !1,
        fontSize: 48,
        fontFamily: Ot,
        fontStyle: "",
        text: "",
        horzAlign: "center",
        vertAlign: "center"
    },
    jn = {
        width: 0,
        height: 0,
        layout: {
            backgroundColor: "#FFFFFF",
            textColor: "#191919",
            fontSize: 11,
            fontFamily: Ot
        },
        crosshair: {
            vertLine: {
                color: "#758696",
                width: 1,
                style: 3,
                visible: !0,
                labelVisible: !0,
                labelBackgroundColor: "#4c525e"
            },
            horzLine: {
                color: "#758696",
                width: 1,
                style: 3,
                visible: !0,
                labelVisible: !0,
                labelBackgroundColor: "#4c525e"
            },
            mode: 1
        },
        grid: {
            vertLines: {
                color: "#D6DCDE",
                style: 0,
                visible: !0
            },
            horzLines: {
                color: "#D6DCDE",
                style: 0,
                visible: !0
            }
        },
        overlayPriceScales: u({}, Wn),
        leftPriceScale: u(u({}, Wn), {
            visible: !1
        }),
        rightPriceScale: u(u({}, Wn), {
            visible: !0
        }),
        timeScale: {
            rightOffset: 0,
            barSpacing: 6,
            fixLeftEdge: !1,
            lockVisibleTimeRangeOnResize: !1,
            rightBarStaysOnScroll: !1,
            borderVisible: !0,
            borderColor: "#2B2B43",
            visible: !0,
            timeVisible: !1,
            secondsVisible: !0,
            shiftVisibleRangeOnNewBar: !0
        },
        watermark: Rn,
        localization: {
            locale: Qi ? navigator.language : "",
            dateFormat: "dd MMM 'yy"
        },
        handleScroll: {
            mouseWheel: !0,
            pressedMouseMove: !0,
            horzTouchDrag: !0,
            vertTouchDrag: !0
        },
        handleScale: {
            axisPressedMouseMove: {
                time: !0,
                price: !0
            },
            axisDoubleClickReset: !0,
            mouseWheel: !0,
            pinch: !0
        }
    },
    Un = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        wickVisible: !0,
        borderVisible: !0,
        borderColor: "#378658",
        borderUpColor: "#26a69a",
        borderDownColor: "#ef5350",
        wickColor: "#737375",
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350"
    },
    qn = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        openVisible: !0,
        thinBars: !0
    },
    Hn = {
        color: "#2196f3",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBackgroundColor: ""
    },
    Yn = {
        topColor: "rgba( 46, 220, 135, 0.4)",
        bottomColor: "rgba( 40, 221, 100, 0)",
        lineColor: "#33D778",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBackgroundColor: ""
    },
    Kn = {
        color: "#26a69a",
        base: 0
    },
    $n = {
        title: "",
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: "",
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: "#B2B5BE",
        baseLineStyle: 0,
        priceFormat: {
            type: "price",
            precision: 2,
            minMove: .01
        }
    },
    Xn = function() {
        function t(t, i) {
            this.od = t, this.ld = i
        }
        return t.prototype.applyOptions = function(t) {
            this.od.ct().El(this.ld, t)
        }, t.prototype.options = function() {
            return this.Jt().I()
        }, t.prototype.width = function() {
            return Ft(this.ld) ? this.od.E_("left" === this.ld ? "left" : "right") : 0
        }, t.prototype.Jt = function() {
            return f(this.od.ct().Ll(this.ld)).Z
        }, t
    }(),
    Zn = function() {
        function t(t) {
            this.fd = new J, this.tr = new J, this.hi = t, this.To().Yr().Ji(this.vd.bind(this)), this.To().Kr().Ji(this._d.bind(this))
        }
        return t.prototype.en = function() {
            this.To().Yr().hn(this), this.To().Kr().hn(this), this.fd.en()
        }, t.prototype.scrollPosition = function() {
            return this.To().Pr()
        }, t.prototype.scrollToPosition = function(t, i) {
            i ? this.To().Hr(t, 1e3) : this.hi._r(t)
        }, t.prototype.scrollToRealTime = function() {
            this.To().qr()
        }, t.prototype.getVisibleRange = function() {
            var t, i, n = this.To().mr();
            return null === n ? null : {
                from: null !== (t = n.from.Ss) && void 0 !== t ? t : n.from.Cs,
                to: null !== (i = n.to.Ss) && void 0 !== i ? i : n.to.Cs
            }
        }, t.prototype.setVisibleRange = function(t) {
            var i = {
                    from: Bn(t.from),
                    to: Bn(t.to)
                },
                n = this.To().kr(i);
            this.hi.if(n)
        }, t.prototype.getVisibleLogicalRange = function() {
            var t = this.To().br();
            return null === t ? null : {
                from: t.ss(),
                to: t.rs()
            }
        }, t.prototype.setVisibleLogicalRange = function(t) {
            o(t.from <= t.to, "The from index cannot be after the to index."), this.hi.if(t)
        }, t.prototype.resetTimeScale = function() {
            this.hi.pe()
        }, t.prototype.fitContent = function() {
            this.hi.Zr()
        }, t.prototype.logicalToCoordinate = function(t) {
            var i = this.hi.U();
            return i.Qt() ? null : i.G(t)
        }, t.prototype.coordinateToLogical = function(t) {
            var i = this.hi.U();
            return i.Qt() ? null : i.Lr(t)
        }, t.prototype.timeToCoordinate = function(t) {
            var i = Bn(t),
                n = this.hi.U(),
                h = n.dr(i, !1);
            return null === h ? null : n.G(h)
        }, t.prototype.coordinateToTime = function(t) {
            var i, n = this.hi.U(),
                h = n.Lr(t),
                s = n.si(h);
            return null === s ? null : null !== (i = s.Ss) && void 0 !== i ? i : s.Cs
        }, t.prototype.subscribeVisibleTimeRangeChange = function(t) {
            this.fd.Ji(t)
        }, t.prototype.unsubscribeVisibleTimeRangeChange = function(t) {
            this.fd.nn(t)
        }, t.prototype.subscribeVisibleLogicalRangeChange = function(t) {
            this.tr.Ji(t)
        }, t.prototype.unsubscribeVisibleLogicalRangeChange = function(t) {
            this.tr.nn(t)
        }, t.prototype.applyOptions = function(t) {
            this.To().sh(t)
        }, t.prototype.options = function() {
            return b(this.To().I())
        }, t.prototype.To = function() {
            return this.hi.U()
        }, t.prototype.vd = function() {
            this.fd.rn() && this.fd.sn(this.getVisibleRange())
        }, t.prototype._d = function() {
            this.tr.rn() && this.tr.sn(this.getVisibleLogicalRange())
        }, t
    }();

function Jn(t) {
    if (void 0 !== t && "custom" !== t.type) {
        var i = t;
        void 0 !== i.minMove && void 0 === i.precision && (i.precision = function(t) {
            if (t >= 1) return 0;
            for (var i = 0; i < 8; i++) {
                var n = Math.round(t);
                if (Math.abs(n - t) < 1e-8) return i;
                t *= 10
            }
            return i
        }(i.minMove))
    }
}

function Gn(t) {
    return function(t) {
            if (M(t.handleScale)) {
                var i = t.handleScale;
                t.handleScale = {
                    axisDoubleClickReset: i,
                    axisPressedMouseMove: {
                        time: i,
                        price: i
                    },
                    mouseWheel: i,
                    pinch: i
                }
            } else if (void 0 !== t.handleScale && M(t.handleScale.axisPressedMouseMove)) {
                var n = t.handleScale.axisPressedMouseMove;
                t.handleScale.axisPressedMouseMove = {
                    time: n,
                    price: n
                }
            }
            var h = t.handleScroll;
            M(h) && (t.handleScroll = {
                horzTouchDrag: h,
                vertTouchDrag: h,
                mouseWheel: h,
                pressedMouseMove: h
            })
        }(t),
        function(t) {
            if (t.priceScale) {
                t.leftPriceScale = t.leftPriceScale || {}, t.rightPriceScale = t.rightPriceScale || {};
                var i = t.priceScale.position;
                delete t.priceScale.position, t.leftPriceScale = v(t.leftPriceScale, t.priceScale), t.rightPriceScale = v(t.rightPriceScale, t.priceScale), "left" === i && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === i && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === i && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1), t.overlayPriceScales = t.overlayPriceScales || {}, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins)
            }
        }(t), t
}
var Qn = function() {
    function t(t, i) {
        var n = this;
        this.dd = new Vn, this.wd = new Map, this.Md = new Map, this.bd = new J, this.md = new J;
        var h = void 0 === i ? b(jn) : v(b(jn), Gn(i));
        this.od = new dn(t, h), this.od.Lv().Ji((function(t) {
            n.bd.rn() && n.bd.sn(n.gd(t()))
        }), this), this.od.zl().Ji((function(t) {
            n.md.rn() && n.md.sn(n.gd(t()))
        }), this);
        var s = this.od.ct();
        this.pd = new Zn(s)
    }
    return t.prototype.remove = function() {
        this.od.Lv().hn(this), this.od.zl().hn(this), this.pd.en(), this.od.en(), this.wd.clear(), this.Md.clear(), this.bd.en(), this.md.en(), this.dd.en()
    }, t.prototype.resize = function(t, i, n) {
        this.od.k_(t, i, n)
    }, t.prototype.addAreaSeries = function(t) {
        void 0 === t && (t = {}), Jn((t = Pn(t)).priceFormat);
        var i = v(b($n), Yn, t),
            n = this.od.ct().Gl("Area", i),
            h = new Fn(n, this, this);
        return this.wd.set(h, n), this.Md.set(n, h), h
    }, t.prototype.addBarSeries = function(t) {
        void 0 === t && (t = {}), Jn((t = Pn(t)).priceFormat);
        var i = v(b($n), qn, t),
            n = this.od.ct().Gl("Bar", i),
            h = new Fn(n, this, this);
        return this.wd.set(h, n), this.Md.set(n, h), h
    }, t.prototype.addCandlestickSeries = function(t) {
        void 0 === t && (t = {}), mt(t = Pn(t)), Jn(t.priceFormat);
        var i = v(b($n), Un, t),
            n = this.od.ct().Gl("Candlestick", i),
            h = new In(n, this, this);
        return this.wd.set(h, n), this.Md.set(n, h), h
    }, t.prototype.addHistogramSeries = function(t) {
        void 0 === t && (t = {}), Jn((t = Pn(t)).priceFormat);
        var i = v(b($n), Kn, t),
            n = this.od.ct().Gl("Histogram", i),
            h = new Fn(n, this, this);
        return this.wd.set(h, n), this.Md.set(n, h), h
    }, t.prototype.addLineSeries = function(t) {
        void 0 === t && (t = {}), Jn((t = Pn(t)).priceFormat);
        var i = v(b($n), Hn, t),
            n = this.od.ct().Gl("Line", i),
            h = new Fn(n, this, this);
        return this.wd.set(h, n), this.Md.set(n, h), h
    }, t.prototype.removeSeries = function(t) {
        var i = l(this.wd.get(t)),
            n = this.dd.tf(i);
        this.od.ct().tf(i), this.yd(n), this.wd.delete(t), this.Md.delete(i)
    }, t.prototype.ad = function(t, i) {
        this.yd(this.dd.Y_(t, i))
    }, t.prototype.ho = function(t, i) {
        this.yd(this.dd.J_(t, i))
    }, t.prototype.subscribeClick = function(t) {
        this.bd.Ji(t)
    }, t.prototype.unsubscribeClick = function(t) {
        this.bd.nn(t)
    }, t.prototype.subscribeCrosshairMove = function(t) {
        this.md.Ji(t)
    }, t.prototype.unsubscribeCrosshairMove = function(t) {
        this.md.nn(t)
    }, t.prototype.priceScale = function(t) {
        return void 0 === t && (t = this.od.ct().nf()), new Xn(this.od, t)
    }, t.prototype.timeScale = function() {
        return this.pd
    }, t.prototype.applyOptions = function(t) {
        this.od.sh(Gn(t))
    }, t.prototype.options = function() {
        return this.od.I()
    }, t.prototype.takeScreenshot = function() {
        return this.od.D_()
    }, t.prototype.yd = function(t) {
        var i = this.od.ct();
        i.Zl(t.U.Br, t.U.sd), t.Q_.forEach((function(t, i) {
            return i.ho(t.nd, t.Nl)
        })), i.Vr()
    }, t.prototype.kd = function(t) {
        return l(this.Md.get(t))
    }, t.prototype.gd = function(t) {
        var i = this,
            n = new Map;
        t.F_.forEach((function(t, h) {
            n.set(i.kd(h), t)
        }));
        var h = void 0 === t.P_ ? void 0 : this.kd(t.P_);
        return {
            time: t.P && (t.P.Ss || t.P.Cs),
            point: t.z_,
            hoveredSeries: h,
            hoveredMarkerId: t.I_,
            seriesPrices: n
        }
    }, t
}();

function th(t, i) {
    var n;
    if (w(t)) {
        var h = document.getElementById(t);
        o(null !== h, "Cannot find element in DOM with id=" + t), n = h
    } else n = t;
    return new Qn(n, i)
}

function ih() {
    return "3.4.0"
}
export {
    F as CrosshairMode, n as LineStyle, i as LineType, dt as PriceLineSource, ft as PriceScaleMode, Tt as TickMarkType, th as createChart, At as isBusinessDay, Vt as isUTCTimestamp, ih as version
};