var reverseEasing = function(easing) {
    return function(p) {
        return 1 - easing(1 - p);
    };
};
var mirrorEasing = function(easing) {
    return function(p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createExpoIn = function(power) {
    return function(p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function(power) {
    return function(p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipate = function(power) {
    var backEasing = createBackIn(power);
    return function(p) {
        return (p *= 2) < 1 ?
            0.5 * backEasing(p) :
            0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};

export {
    createAnticipate,
    createBackIn,
    createExpoIn,
    mirrorEasing,
    reverseEasing
};