function o() {
    let a = [],
        i = [],
        n = {
            enqueue(e) {
                i.push(e)
            },
            addEventListener(e, t, r, s) {
                return e.addEventListener(t, r, s), n.add(() => e.removeEventListener(t, r, s))
            },
            requestAnimationFrame(...e) {
                let t = requestAnimationFrame(...e);
                return n.add(() => cancelAnimationFrame(t))
            },
            nextFrame(...e) {
                return n.requestAnimationFrame(() => n.requestAnimationFrame(...e))
            },
            setTimeout(...e) {
                let t = setTimeout(...e);
                return n.add(() => clearTimeout(t))
            },
            add(e) {
                return a.push(e), () => {
                    let t = a.indexOf(e);
                    if (t >= 0) {
                        let [r] = a.splice(t, 1);
                        r()
                    }
                }
            },
            dispose() {
                for (let e of a.splice(0)) e()
            },
            async workQueue() {
                for (let e of i.splice(0)) await e()
            }
        };
    return n
}
export {
    o as disposables
};