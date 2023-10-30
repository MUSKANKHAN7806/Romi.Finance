var clamp = function(min, max, v) {
    return Math.min(Math.max(v, min), max);
};

export {
    clamp
};