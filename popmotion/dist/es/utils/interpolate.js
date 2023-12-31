import {
    progress
} from './progress.js';
import {
    mix
} from './mix.js';
import {
    mixColor
} from './mix-color.js';
import {
    mixComplex,
    mixArray,
    mixObject
} from './mix-complex.js';
import {
    color
} from 'style-value-types';
import {
    clamp
} from './clamp.js';
import {
    pipe
} from './pipe.js';
import {
    invariant
} from 'hey-listen';

var mixNumber = function(from, to) {
    return function(p) {
        return mix(from, to, p);
    };
};

function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    } else if (typeof v === 'string') {
        if (color.test(v)) {
            return mixColor;
        } else {
            return mixComplex;
        }
    } else if (Array.isArray(v)) {
        return mixArray;
    } else if (typeof v === 'object') {
        return mixObject;
    }
}

function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}

function fastInterpolate(_a, _b) {
    var from = _a[0],
        to = _a[1];
    var mixer = _b[0];
    return function(v) {
        return mixer(progress(from, to, v));
    };
}

function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function(v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        } else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}

function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.clamp,
        isClamp = _c === void 0 ? true : _c,
        ease = _b.ease,
        mixer = _b.mixer;
    var inputLength = input.length;
    invariant(inputLength === output.length, 'Both input and output ranges must be the same length');
    invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2 ?
        fastInterpolate(input, mixers) :
        slowInterpolate(input, mixers);
    return isClamp ?
        function(v) {
            return interpolator(clamp(input[0], input[inputLength - 1], v));
        } :
        interpolator;
}

export {
    interpolate
};