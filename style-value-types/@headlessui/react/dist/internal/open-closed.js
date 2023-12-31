import r, {
    createContext as l,
    useContext as d
} from "react";
let o = l(null);
o.displayName = "OpenClosedContext";
var p = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(p || {});

function s() {
    return d(o)
}

function C({
    value: t,
    children: n
}) {
    return r.createElement(o.Provider, {
        value: t
    }, n)
}
export {
    C as OpenClosedProvider, p as State, s as useOpenClosed
};