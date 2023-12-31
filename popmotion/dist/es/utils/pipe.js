var combineFunctions = function(a, b) {
    return function(v) {
        return b(a(v));
    };
};
var pipe = function() {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};

export {
    pipe
};