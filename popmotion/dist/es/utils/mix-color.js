import {
    __assign
} from 'tslib';
import {
    mix
} from './mix.js';
import {
    hex,
    rgba,
    hsla
} from 'style-value-types';
import {
    invariant
} from 'hey-listen';

var mixLinearColor = function(from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = function(v) {
    return colorTypes.find(function(type) {
        return type.test(v);
    });
};
var notAnimatable = function(color) {
    return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function(from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    invariant(!!fromColorType, notAnimatable(from));
    invariant(!!toColorType, notAnimatable(to));
    invariant(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === hsla ? mix : mixLinearColor;
    return function(v) {
        for (var key in blended) {
            if (key !== "alpha") {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

export {
    mixColor,
    mixLinearColor
};