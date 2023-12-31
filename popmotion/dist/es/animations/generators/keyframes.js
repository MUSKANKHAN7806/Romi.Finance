import {
    interpolate
} from '../../utils/interpolate.js';
import {
    easeInOut
} from '../../easing/index.js';

function defaultEasing(values, easing) {
    return values.map(function() {
        return easing || easeInOut;
    }).splice(0, values.length - 1);
}

function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function(_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
}

function convertOffsetToTimes(offset, duration) {
    return offset.map(function(o) {
        return o * duration;
    });
}

function keyframes(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        ease = _a.ease,
        offset = _a.offset,
        _d = _a.duration,
        duration = _d === void 0 ? 300 : _d;
    var state = {
        done: false,
        value: from
    };
    var values = Array.isArray(to) ? to : [from, to];
    var times = convertOffsetToTimes(offset && offset.length === values.length ?
        offset :
        defaultOffset(values), duration);

    function createInterpolator() {
        return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    var interpolator = createInterpolator();
    return {
        next: function(t) {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: function() {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}

export {
    convertOffsetToTimes,
    defaultEasing,
    defaultOffset,
    keyframes
};