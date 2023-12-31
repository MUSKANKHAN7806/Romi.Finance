import {
    match as m
} from "./match.js";
import {
    getOwnerDocument as x
} from "./owner.js";
let f = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var E = (n => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(E || {}),
    p = (o => (o[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o))(p || {}),
    L = (t => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(L || {});

function N(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(f))
}
var T = (t => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(T || {});

function O(e, r = 0) {
    var t;
    return e === ((t = x(e)) == null ? void 0 : t.body) ? !1 : m(r, {
        [0]() {
            return e.matches(f)
        },
        [1]() {
            let l = e;
            for (; l !== null;) {
                if (l.matches(f)) return !0;
                l = l.parentElement
            }
            return !1
        }
    })
}

function S(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let b = ["textarea", "input"].join(",");

function M(e) {
    var r, t;
    return (t = (r = e == null ? void 0 : e.matches) == null ? void 0 : r.call(e, b)) != null ? t : !1
}

function h(e, r = t => t) {
    return e.slice().sort((t, l) => {
        let o = r(t),
            a = r(l);
        if (o === null || a === null) return 0;
        let n = o.compareDocumentPosition(a);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function F(e, r) {
    let t = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        l = Array.isArray(e) ? h(e) : N(e),
        o = t.activeElement,
        a = (() => {
            if (r & 5) return 1;
            if (r & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        n = (() => {
            if (r & 1) return 0;
            if (r & 2) return Math.max(0, l.indexOf(o)) - 1;
            if (r & 4) return Math.max(0, l.indexOf(o)) + 1;
            if (r & 8) return l.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        d = r & 32 ? {
            preventScroll: !0
        } : {},
        c = 0,
        i = l.length,
        u;
    do {
        if (c >= i || c + i <= 0) return 0;
        let s = n + c;
        if (r & 16) s = (s + i) % i;
        else {
            if (s < 0) return 3;
            if (s >= i) return 1
        }
        u = l[s], u == null || u.focus(d), c += a
    } while (u !== t.activeElement);
    return r & 6 && M(u) && u.select(), u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), 2
}
export {
    E as Focus, p as FocusResult, T as FocusableMode, S as focusElement, F as focusIn, N as getFocusableElements, O as isFocusableElement, h as sortByDomNode
};