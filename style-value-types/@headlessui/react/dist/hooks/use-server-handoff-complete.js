import {
    useState as o,
    useEffect as t
} from "react";
let r = {
    serverHandoffComplete: !1
};

function a() {
    let [e, f] = o(r.serverHandoffComplete);
    return t(() => {
        e !== !0 && f(!0)
    }, [e]), t(() => {
        r.serverHandoffComplete === !1 && (r.serverHandoffComplete = !0)
    }, []), e
}
export {
    a as useServerHandoffComplete
};