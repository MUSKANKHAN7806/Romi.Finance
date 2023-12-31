import U, {
    Fragment as G,
    createContext as j,
    createRef as B,
    useCallback as y,
    useContext as Q,
    useEffect as W,
    useMemo as v,
    useReducer as V,
    useRef as _
} from "react";
import {
    match as K
} from "../../utils/match.js";
import {
    forwardRefWithAs as h,
    render as P,
    Features as H
} from "../../utils/render.js";
import {
    disposables as x
} from "../../utils/disposables.js";
import {
    useDisposables as N
} from "../../hooks/use-disposables.js";
import {
    useIsoMorphicEffect as E
} from "../../hooks/use-iso-morphic-effect.js";
import {
    useSyncRefs as D
} from "../../hooks/use-sync-refs.js";
import {
    useId as F
} from "../../hooks/use-id.js";
import {
    Keys as d
} from "../keyboard.js";
import {
    Focus as I,
    calculateActiveIndex as $
} from "../../utils/calculate-active-index.js";
import {
    isDisabledReactIssue7711 as q
} from "../../utils/bugs.js";
import {
    isFocusableElement as J,
    FocusableMode as z,
    sortByDomNode as X
} from "../../utils/focus-management.js";
import {
    useOutsideClick as Y
} from "../../hooks/use-outside-click.js";
import {
    useTreeWalker as Z
} from "../../hooks/use-tree-walker.js";
import {
    useOpenClosed as ee,
    State as L,
    OpenClosedProvider as te
} from "../../internal/open-closed.js";
import {
    useResolveButtonType as re
} from "../../hooks/use-resolve-button-type.js";
import {
    useOwnerDocument as ne
} from "../../hooks/use-owner.js";
var oe = (a => (a[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a))(oe || {}),
    ae = (a => (a[a.Pointer = 0] = "Pointer", a[a.Other = 1] = "Other", a))(ae || {}),
    ie = (o => (o[o.OpenMenu = 0] = "OpenMenu", o[o.CloseMenu = 1] = "CloseMenu", o[o.GoToItem = 2] = "GoToItem", o[o.Search = 3] = "Search", o[o.ClearSearch = 4] = "ClearSearch", o[o.RegisterItem = 5] = "RegisterItem", o[o.UnregisterItem = 6] = "UnregisterItem", o))(ie || {});

function k(t, i = a => a) {
    let a = t.activeItemIndex !== null ? t.items[t.activeItemIndex] : null,
        e = X(i(t.items.slice()), u => u.dataRef.current.domRef.current),
        r = a ? e.indexOf(a) : null;
    return r === -1 && (r = null), {
        items: e,
        activeItemIndex: r
    }
}
let ue = {
        [1](t) {
            return t.menuState === 1 ? t : { ...t,
                activeItemIndex: null,
                menuState: 1
            }
        },
        [0](t) {
            return t.menuState === 0 ? t : { ...t,
                menuState: 0
            }
        },
        [2]: (t, i) => {
            var r;
            let a = k(t),
                e = $(i, {
                    resolveItems: () => a.items,
                    resolveActiveIndex: () => a.activeItemIndex,
                    resolveId: u => u.id,
                    resolveDisabled: u => u.dataRef.current.disabled
                });
            return { ...t,
                ...a,
                searchQuery: "",
                activeItemIndex: e,
                activationTrigger: (r = i.trigger) != null ? r : 1
            }
        },
        [3]: (t, i) => {
            let e = t.searchQuery !== "" ? 0 : 1,
                r = t.searchQuery + i.value.toLowerCase(),
                s = (t.activeItemIndex !== null ? t.items.slice(t.activeItemIndex + e).concat(t.items.slice(0, t.activeItemIndex + e)) : t.items).find(l => {
                    var p;
                    return ((p = l.dataRef.current.textValue) == null ? void 0 : p.startsWith(r)) && !l.dataRef.current.disabled
                }),
                o = s ? t.items.indexOf(s) : -1;
            return o === -1 || o === t.activeItemIndex ? { ...t,
                searchQuery: r
            } : { ...t,
                searchQuery: r,
                activeItemIndex: o,
                activationTrigger: 1
            }
        },
        [4](t) {
            return t.searchQuery === "" ? t : { ...t,
                searchQuery: "",
                searchActiveItemIndex: null
            }
        },
        [5]: (t, i) => {
            let a = k(t, e => [...e, {
                id: i.id,
                dataRef: i.dataRef
            }]);
            return { ...t,
                ...a
            }
        },
        [6]: (t, i) => {
            let a = k(t, e => {
                let r = e.findIndex(u => u.id === i.id);
                return r !== -1 && e.splice(r, 1), e
            });
            return { ...t,
                ...a,
                activationTrigger: 1
            }
        }
    },
    w = j(null);
w.displayName = "MenuContext";

function C(t) {
    let i = Q(w);
    if (i === null) {
        let a = new Error(`<${t} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(a, C), a
    }
    return i
}

function se(t, i) {
    return K(i.type, ue, t, i)
}
let le = G,
    ce = h(function(i, a) {
        let e = V(se, {
                menuState: 1,
                buttonRef: B(),
                itemsRef: B(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1
            }),
            [{
                menuState: r,
                itemsRef: u,
                buttonRef: s
            }, o] = e,
            l = D(a);
        Y([s, u], (M, R) => {
            var T;
            r === 0 && (o({
                type: 1
            }), J(R, z.Loose) || (M.preventDefault(), (T = s.current) == null || T.focus()))
        });
        let p = v(() => ({
                open: r === 0
            }), [r]),
            g = i,
            f = {
                ref: l
            };
        return U.createElement(w.Provider, {
            value: e
        }, U.createElement(te, {
            value: K(r, {
                [0]: L.Open,
                [1]: L.Closed
            })
        }, P({
            ourProps: f,
            theirProps: g,
            slot: p,
            defaultTag: le,
            name: "Menu"
        })))
    }),
    pe = "button",
    de = h(function(i, a) {
        var T;
        let [e, r] = C("Menu.Button"), u = D(e.buttonRef, a), s = `headlessui-menu-button-${F()}`, o = N(), l = y(c => {
            switch (c.key) {
                case d.Space:
                case d.Enter:
                case d.ArrowDown:
                    c.preventDefault(), c.stopPropagation(), r({
                        type: 0
                    }), o.nextFrame(() => r({
                        type: 2,
                        focus: I.First
                    }));
                    break;
                case d.ArrowUp:
                    c.preventDefault(), c.stopPropagation(), r({
                        type: 0
                    }), o.nextFrame(() => r({
                        type: 2,
                        focus: I.Last
                    }));
                    break
            }
        }, [r, o]), p = y(c => {
            switch (c.key) {
                case d.Space:
                    c.preventDefault();
                    break
            }
        }, []), g = y(c => {
            if (q(c.currentTarget)) return c.preventDefault();
            i.disabled || (e.menuState === 0 ? (r({
                type: 1
            }), o.nextFrame(() => {
                var b;
                return (b = e.buttonRef.current) == null ? void 0 : b.focus({
                    preventScroll: !0
                })
            })) : (c.preventDefault(), c.stopPropagation(), r({
                type: 0
            })))
        }, [r, o, e, i.disabled]), f = v(() => ({
            open: e.menuState === 0
        }), [e]), M = i, R = {
            ref: u,
            id: s,
            type: re(i, e.buttonRef),
            "aria-haspopup": !0,
            "aria-controls": (T = e.itemsRef.current) == null ? void 0 : T.id,
            "aria-expanded": i.disabled ? void 0 : e.menuState === 0,
            onKeyDown: l,
            onKeyUp: p,
            onClick: g
        };
        return P({
            ourProps: R,
            theirProps: M,
            slot: f,
            defaultTag: pe,
            name: "Menu.Button"
        })
    }),
    me = "div",
    fe = H.RenderStrategy | H.Static,
    Te = h(function(i, a) {
        var b, O;
        let [e, r] = C("Menu.Items"), u = D(e.itemsRef, a), s = ne(e.itemsRef), o = `headlessui-menu-items-${F()}`, l = N(), p = ee(), g = (() => p !== null ? p === L.Open : e.menuState === 0)();
        W(() => {
            let n = e.itemsRef.current;
            !n || e.menuState === 0 && n !== (s == null ? void 0 : s.activeElement) && n.focus({
                preventScroll: !0
            })
        }, [e.menuState, e.itemsRef, s]), Z({
            container: e.itemsRef.current,
            enabled: e.menuState === 0,
            accept(n) {
                return n.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            },
            walk(n) {
                n.setAttribute("role", "none")
            }
        });
        let f = y(n => {
                var m, S;
                switch (l.dispose(), n.key) {
                    case d.Space:
                        if (e.searchQuery !== "") return n.preventDefault(), n.stopPropagation(), r({
                            type: 3,
                            value: n.key
                        });
                    case d.Enter:
                        if (n.preventDefault(), n.stopPropagation(), r({
                                type: 1
                            }), e.activeItemIndex !== null) {
                            let {
                                dataRef: A
                            } = e.items[e.activeItemIndex];
                            (S = (m = A.current) == null ? void 0 : m.domRef.current) == null || S.click()
                        }
                        x().nextFrame(() => {
                            var A;
                            return (A = e.buttonRef.current) == null ? void 0 : A.focus({
                                preventScroll: !0
                            })
                        });
                        break;
                    case d.ArrowDown:
                        return n.preventDefault(), n.stopPropagation(), r({
                            type: 2,
                            focus: I.Next
                        });
                    case d.ArrowUp:
                        return n.preventDefault(), n.stopPropagation(), r({
                            type: 2,
                            focus: I.Previous
                        });
                    case d.Home:
                    case d.PageUp:
                        return n.preventDefault(), n.stopPropagation(), r({
                            type: 2,
                            focus: I.First
                        });
                    case d.End:
                    case d.PageDown:
                        return n.preventDefault(), n.stopPropagation(), r({
                            type: 2,
                            focus: I.Last
                        });
                    case d.Escape:
                        n.preventDefault(), n.stopPropagation(), r({
                            type: 1
                        }), x().nextFrame(() => {
                            var A;
                            return (A = e.buttonRef.current) == null ? void 0 : A.focus({
                                preventScroll: !0
                            })
                        });
                        break;
                    case d.Tab:
                        n.preventDefault(), n.stopPropagation();
                        break;
                    default:
                        n.key.length === 1 && (r({
                            type: 3,
                            value: n.key
                        }), l.setTimeout(() => r({
                            type: 4
                        }), 350));
                        break
                }
            }, [r, l, e, s]),
            M = y(n => {
                switch (n.key) {
                    case d.Space:
                        n.preventDefault();
                        break
                }
            }, []),
            R = v(() => ({
                open: e.menuState === 0
            }), [e]),
            T = i,
            c = {
                "aria-activedescendant": e.activeItemIndex === null || (b = e.items[e.activeItemIndex]) == null ? void 0 : b.id,
                "aria-labelledby": (O = e.buttonRef.current) == null ? void 0 : O.id,
                id: o,
                onKeyDown: f,
                onKeyUp: M,
                role: "menu",
                tabIndex: 0,
                ref: u
            };
        return P({
            ourProps: c,
            theirProps: T,
            slot: R,
            defaultTag: me,
            features: fe,
            visible: g,
            name: "Menu.Items"
        })
    }),
    Ie = G,
    ye = h(function(i, a) {
        let {
            disabled: e = !1,
            ...r
        } = i, [u, s] = C("Menu.Item"), o = `headlessui-menu-item-${F()}`, l = u.activeItemIndex !== null ? u.items[u.activeItemIndex].id === o : !1, p = _(null), g = D(a, p);
        E(() => {
            if (u.menuState !== 0 || !l || u.activationTrigger === 0) return;
            let n = x();
            return n.requestAnimationFrame(() => {
                var m, S;
                (S = (m = p.current) == null ? void 0 : m.scrollIntoView) == null || S.call(m, {
                    block: "nearest"
                })
            }), n.dispose
        }, [p, l, u.menuState, u.activationTrigger, u.activeItemIndex]);
        let f = _({
            disabled: e,
            domRef: p
        });
        E(() => {
            f.current.disabled = e
        }, [f, e]), E(() => {
            var n, m;
            f.current.textValue = (m = (n = p.current) == null ? void 0 : n.textContent) == null ? void 0 : m.toLowerCase()
        }, [f, p]), E(() => (s({
            type: 5,
            id: o,
            dataRef: f
        }), () => s({
            type: 6,
            id: o
        })), [f, o]);
        let M = y(n => {
                if (e) return n.preventDefault();
                s({
                    type: 1
                }), x().nextFrame(() => {
                    var m;
                    return (m = u.buttonRef.current) == null ? void 0 : m.focus({
                        preventScroll: !0
                    })
                })
            }, [s, u.buttonRef, e]),
            R = y(() => {
                if (e) return s({
                    type: 2,
                    focus: I.Nothing
                });
                s({
                    type: 2,
                    focus: I.Specific,
                    id: o
                })
            }, [e, o, s]),
            T = y(() => {
                e || l || s({
                    type: 2,
                    focus: I.Specific,
                    id: o,
                    trigger: 0
                })
            }, [e, l, o, s]),
            c = y(() => {
                e || !l || s({
                    type: 2,
                    focus: I.Nothing
                })
            }, [e, l, s]),
            b = v(() => ({
                active: l,
                disabled: e
            }), [l, e]);
        return P({
            ourProps: {
                id: o,
                ref: g,
                role: "menuitem",
                tabIndex: e === !0 ? void 0 : -1,
                "aria-disabled": e === !0 ? !0 : void 0,
                disabled: void 0,
                onClick: M,
                onFocus: R,
                onPointerMove: T,
                onMouseMove: T,
                onPointerLeave: c,
                onMouseLeave: c
            },
            theirProps: r,
            slot: b,
            defaultTag: Ie,
            name: "Menu.Item"
        })
    }),
    Qe = Object.assign(ce, {
        Button: de,
        Items: Te,
        Item: ye
    });
export {
    Qe as Menu
};