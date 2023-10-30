import {
    useRef as E,
    useEffect as m
} from "react";
import {
    useIsoMorphicEffect as T
} from "./use-iso-morphic-effect.js";
import {
    getOwnerDocument as N
} from "../utils/owner.js";

function F({
    container: e,
    accept: t,
    walk: r,
    enabled: c = !0
}) {
    let o = E(t),
        l = E(r);
    m(() => {
        o.current = t, l.current = r
    }, [t, r]), T(() => {
        if (!e || !c) return;
        let n = N(e);
        if (!n) return;
        let f = o.current,
            p = l.current,
            d = Object.assign(i => f(i), {
                acceptNode: f
            }),
            u = n.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d, !1);
        for (; u.nextNode();) p(u.currentNode)
    }, [e, c, o, l])
}
export {
    F as useTreeWalker
};