var u;
import t from "react";
import {
    useIsoMorphicEffect as d
} from "./use-iso-morphic-effect.js";
import {
    useServerHandoffComplete as f
} from "./use-server-handoff-complete.js";
let l = 0;

function r() {
    return ++l
}
let I = (u = t.useId) != null ? u : function() {
    let n = f(),
        [e, o] = t.useState(n ? r : null);
    return d(() => {
        e === null && o(r())
    }, [e]), e != null ? "" + e : void 0
};
export {
    I as useId
};