function f(r) {
    throw new Error("Unexpected object: " + r)
}
var a = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(a || {});

function x(r, n) {
    let t = n.resolveItems();
    if (t.length <= 0) return null;
    let l = n.resolveActiveIndex(),
        s = l != null ? l : -1,
        d = (() => {
            switch (r.focus) {
                case 0:
                    return t.findIndex(e => !n.resolveDisabled(e));
                case 1:
                    {
                        let e = t.slice().reverse().findIndex((i, c, u) => s !== -1 && u.length - c - 1 >= s ? !1 : !n.resolveDisabled(i));
                        return e === -1 ? e : t.length - 1 - e
                    }
                case 2:
                    return t.findIndex((e, i) => i <= s ? !1 : !n.resolveDisabled(e));
                case 3:
                    {
                        let e = t.slice().reverse().findIndex(i => !n.resolveDisabled(i));
                        return e === -1 ? e : t.length - 1 - e
                    }
                case 4:
                    return t.findIndex(e => n.resolveId(e) === r.id);
                case 5:
                    return null;
                default:
                    f(r)
            }
        })();
    return d === -1 ? l : d
}
export {
    a as Focus, x as calculateActiveIndex
};