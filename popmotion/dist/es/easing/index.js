import {
    createExpoIn,
    reverseEasing,
    mirrorEasing,
    createBackIn,
    createAnticipate
} from './utils.js';

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function(p) {
    return p;
};
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = function(p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function(p) {
    if (p === 1 || p === 0)
        return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ?
        7.5625 * p2 :
        p < BOUNCE_SECOND_THRESHOLD ?
        9.075 * p2 - 9.9 * p + 3.4 :
        p < BOUNCE_THIRD_THRESHOLD ?
        ca * p2 - cb * p + cc :
        10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = function(p) {
    return p < 0.5 ?
        0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) :
        0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};

export {
    anticipate,
    backIn,
    backInOut,
    backOut,
    bounceIn,
    bounceInOut,
    bounceOut,
    circIn,
    circInOut,
    circOut,
    easeIn,
    easeInOut,
    easeOut,
    linear
};