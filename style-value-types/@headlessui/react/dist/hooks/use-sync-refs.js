import {
    useRef as o,
    useEffect as i,
    useCallback as f
} from "react";
let l = Symbol();

function p(n, t = !0) {
    return Object.assign(n, {
        [l]: t
    })
}

function T(...n) {
    let t = o(n);
    i(() => {
        t.current = n
    }, [n]);
    let c = f(e => {
        for (let u of t.current) u != null && (typeof u == "function" ? u(e) : u.current = e)
    }, [t]);
    return n.every(e => e == null || (e == null ? void 0 : e[l])) ? void 0 : c
}
export {
    p as optionalRef, T as useSyncRefs
};