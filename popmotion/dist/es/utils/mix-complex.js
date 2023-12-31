import {
    __spreadArray,
    __assign
} from 'tslib';
import {
    complex,
    color
} from 'style-value-types';
import {
    mix
} from './mix.js';
import {
    mixColor
} from './mix-color.js';
import {
    isNum
} from './inc.js';
import {
    pipe
} from './pipe.js';
import {
    invariant
} from 'hey-listen';

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function(v) {
            return mix(origin, target, v);
        };
    } else if (color.test(origin)) {
        return mixColor(origin, target);
    } else {
        return mixComplex(origin, target);
    }
}
var mixArray = function(from, to) {
    var output = __spreadArray([], from);
    var numValues = output.length;
    var blendValue = from.map(function(fromThis, i) {
        return getMixer(fromThis, to[i]);
    });
    return function(v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function(origin, target) {
    var output = __assign(__assign({}, origin), target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function(v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};

function analyse(value) {
    var parsed = complex.parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        } else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            } else {
                numRGB++;
            }
        }
    }
    return {
        parsed: parsed,
        numNumbers: numNumbers,
        numRGB: numRGB,
        numHSL: numHSL
    };
}
var mixComplex = function(origin, target) {
    var template = complex.createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    invariant(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

export {
    mixArray,
    mixComplex,
    mixObject
};