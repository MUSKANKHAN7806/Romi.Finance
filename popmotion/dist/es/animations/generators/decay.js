function decay(_a) {
    var _b = _a.velocity,
        velocity = _b === void 0 ? 0 : _b,
        _c = _a.from,
        from = _c === void 0 ? 0 : _c,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 350 : _e,
        _f = _a.restDelta,
        restDelta = _f === void 0 ? 0.5 : _f,
        modifyTarget = _a.modifyTarget;
    var state = {
        done: false,
        value: from
    };
    var amplitude = power * velocity;
    var ideal = from + amplitude;
    var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: function(t) {
            var delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: function() {},
    };
}

export {
    decay
};