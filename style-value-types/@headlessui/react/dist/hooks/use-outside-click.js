import {
    useRef as m
} from "react";
import {
    microTask as s
} from "../utils/micro-task.js";
import {
    useLatestValue as p
} from "./use-latest-value.js";
import {
    useWindowEvent as u
} from "./use-window-event.js";
var C = (r => (r[r.None = 1] = "None", r[r.IgnoreScrollbars = 2] = "IgnoreScrollbars", r))(C || {});

function w(c, a, r = 1) {
    let i = m(!1),
        l = p(n => {
            if (i.current) return;
            i.current = !0, s(() => {
                i.current = !1
            });
            let f = function t(e) {
                    return typeof e == "function" ? t(e()) : Array.isArray(e) || e instanceof Set ? e : [e]
                }(c),
                o = n.target;
            if (!!o.ownerDocument.documentElement.contains(o)) {
                if ((r & 2) === 2) {
                    let t = 20,
                        e = o.ownerDocument.documentElement;
                    if (n.clientX > e.clientWidth - t || n.clientX < t || n.clientY > e.clientHeight - t || n.clientY < t) return
                }
                for (let t of f) {
                    if (t === null) continue;
                    let e = t instanceof HTMLElement ? t : t.current;
                    if (e != null && e.contains(o)) return
                }
                return a(n, o)
            }
        });
    u("pointerdown", (...n) => l.current(...n)), u("mousedown", (...n) => l.current(...n))
}
export {
    C as Features, w as useOutsideClick
};