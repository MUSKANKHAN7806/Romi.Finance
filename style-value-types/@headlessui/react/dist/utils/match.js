function u(r, n, ...a) {
    if (r in n) {
        let e = n[r];
        return typeof e == "function" ? e(...a) : e
    }
    let t = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, u), t
}
export {
    u as match
};