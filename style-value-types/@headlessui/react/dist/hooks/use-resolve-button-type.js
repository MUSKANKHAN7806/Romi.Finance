import {
    useState as o
} from "react";
import {
    useIsoMorphicEffect as r
} from "./use-iso-morphic-effect.js";

function i(t) {
    var n;
    if (t.type) return t.type;
    let e = (n = t.as) != null ? n : "button";
    if (typeof e == "string" && e.toLowerCase() === "button") return "button"
}

function s(t, e) {
    let [n, u] = o(() => i(t));
    return r(() => {
        u(i(t))
    }, [t.type, t.as]), r(() => {
        n || !e.current || e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u("button")
    }, [n, e]), n
}
export {
    s as useResolveButtonType
};