let e = {
        data: ""
    },
    t = t => "object" == typeof window ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t || e,
    r = e => {
        let r = t(e),
            l = r.data;
        return r.data = "", l
    },
    l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    a = /\/\*[^]*?\*\/|  +/g,
    n = /\n+/g,
    o = (e, t) => {
        let r = "",
            l = "",
            a = "";
        for (let n in e) {
            let c = e[n];
            "@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : l += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? l += o(c, t ? t.replace(/([^,])+/g, e => n.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += o.p ? o.p(n, c) : n + ":" + c + ";")
        }
        return r + (t && a ? t + "{" + a + "}" : a) + l
    },
    c = {},
    s = e => {
        if ("object" == typeof e) {
            let t = "";
            for (let r in e) t += r + s(e[r]);
            return t
        }
        return e
    },
    i = (e, t, r, i, p) => {
        let u = s(e),
            d = c[u] || (c[u] = (e => {
                let t = 0,
                    r = 11;
                for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
                return "go" + r
            })(u));
        if (!c[d]) {
            let t = u !== e ? e : (e => {
                let t, r, o = [{}];
                for (; t = l.exec(e.replace(a, ""));) t[4] ? o.shift() : t[3] ? (r = t[3].replace(n, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n, " ").trim();
                return o[0]
            })(e);
            c[d] = o(p ? {
                ["@keyframes " + d]: t
            } : t, r ? "" : "." + d)
        }
        return ((e, t, r) => {
            -1 == t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e)
        })(c[d], t, i), d
    },
    p = (e, t, r) => e.reduce((e, l, a) => {
        let n = t[a];
        if (n && n.call) {
            let e = n(r),
                t = e && e.props && e.props.className || /^go/.test(e) && e;
            n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e
        }
        return e + l + (null == n ? "" : n)
    }, "");

function u(e) {
    let r = this || {},
        l = e.call ? e(r.p) : e;
    return i(l.unshift ? l.raw ? p(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => Object.assign(e, t && t.call ? t(r.p) : t), {}) : l, t(r.target), r.g, r.o, r.k)
}
let d, f, g, b = u.bind({
        g: 1
    }),
    h = u.bind({
        k: 1
    });

function m(e, t, r, l) {
    o.p = t, d = e, f = r, g = l
}

function j(e, t) {
    let r = this || {};
    return function() {
        let l = arguments;

        function a(n, o) {
            let c = Object.assign({}, n),
                s = c.className || a.className;
            r.p = Object.assign({
                theme: f && f()
            }, c), r.o = / *go\d+/.test(s), c.className = u.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
            let i = e;
            return e[0] && (i = c.as || e, delete c.as), g && i[0] && g(c), d(i, c)
        }
        return t ? t(a) : a
    }
}
export {
    u as css, r as extractCss, b as glob, h as keyframes, m as setup, j as styled
};