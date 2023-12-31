import {
    Fragment as c,
    cloneElement as T,
    createElement as g,
    forwardRef as F,
    isValidElement as h
} from "react";
import {
    match as P
} from "./match.js";
var b = (n => (n[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n))(b || {}),
    x = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(x || {});

function A({
    ourProps: r,
    theirProps: t,
    slot: e,
    defaultTag: n,
    features: o,
    visible: a = !0,
    name: l
}) {
    let s = m(t, r);
    if (a) return p(s, e, n, l);
    let u = o != null ? o : 0;
    if (u & 2) {
        let {
            static: i = !1,
            ...d
        } = s;
        if (i) return p(d, e, n, l)
    }
    if (u & 1) {
        let {
            unmount: i = !0,
            ...d
        } = s;
        return P(i ? 0 : 1, {
            [0]() {
                return null
            },
            [1]() {
                return p({ ...d,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, e, n, l)
            }
        })
    }
    return p(s, e, n, l)
}

function p(r, t = {}, e, n) {
    let {
        as: o = e,
        children: a,
        refName: l = "ref",
        ...s
    } = f(r, ["unmount", "static"]), u = r.ref !== void 0 ? {
        [l]: r.ref
    } : {}, i = typeof a == "function" ? a(t) : a;
    if (s.className && typeof s.className == "function" && (s.className = s.className(t)), o === c && Object.keys(y(s)).length > 0) {
        if (!h(i) || Array.isArray(i) && i.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(d => `  - ${d}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(d => `  - ${d}`).join(`
`)].join(`
`));
        return T(i, Object.assign({}, m(i.props, y(f(s, ["ref"]))), u))
    }
    return g(o, Object.assign({}, f(s, ["ref"]), o !== c && u), i)
}

function m(...r) {
    var n;
    if (r.length === 0) return {};
    if (r.length === 1) return r[0];
    let t = {},
        e = {};
    for (let o of r)
        for (let a in o) a.startsWith("on") && typeof o[a] == "function" ? ((n = e[a]) != null || (e[a] = []), e[a].push(o[a])) : t[a] = o[a];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(e).map(o => [o, void 0])));
    for (let o in e) Object.assign(t, {
        [o](a) {
            let l = e[o];
            for (let s of l) {
                if (a.defaultPrevented) return;
                s(a)
            }
        }
    });
    return t
}

function H(r) {
    var t;
    return Object.assign(F(r), {
        displayName: (t = r.displayName) != null ? t : r.name
    })
}

function y(r) {
    let t = Object.assign({}, r);
    for (let e in t) t[e] === void 0 && delete t[e];
    return t
}

function f(r, t = []) {
    let e = Object.assign({}, r);
    for (let n of t) n in e && delete e[n];
    return e
}
export {
    b as Features, x as RenderStrategy, y as compact, H as forwardRefWithAs, A as render
};