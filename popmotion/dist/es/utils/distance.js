import {
    isPoint
} from './is-point.js';
import {
    isPoint3D
} from './is-point-3d.js';
import {
    isNum
} from './inc.js';

var distance1D = function(a, b) {
    return Math.abs(a - b);
};

function distance(a, b) {
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}

export {
    distance
};