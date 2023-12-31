import {
    __rest,
    __assign
} from 'tslib';
import {
    findSpring,
    calcAngularFreq
} from '../utils/find-spring.js';

var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];

function isSpringType(options, keys) {
    return keys.some(function(key) {
        return options[key] !== undefined;
    });
}

function getSpringOptions(options) {
    var springOptions = __assign({
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false
    }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        var derived = findSpring(options);
        springOptions = __assign(__assign(__assign({}, springOptions), derived), {
            velocity: 0.0,
            mass: 1.0
        });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}

function spring(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0.0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1.0 : _c,
        _d = _a.restSpeed,
        restSpeed = _d === void 0 ? 2 : _d,
        restDelta = _a.restDelta,
        options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
    var state = {
        done: false,
        value: from
    };
    var _e = getSpringOptions(options),
        stiffness = _e.stiffness,
        damping = _e.damping,
        mass = _e.mass,
        velocity = _e.velocity,
        duration = _e.duration,
        isResolvedFromDuration = _e.isResolvedFromDuration;
    var resolveSpring = zero;
    var resolveVelocity = zero;

    function createSpring() {
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : (restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4);
        if (dampingRatio < 1) {
            var angularFreq_1 = calcAngularFreq(undampedAngularFreq, dampingRatio);
            resolveSpring = function(t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                    (((initialVelocity +
                                dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq_1) *
                        Math.sin(angularFreq_1 * t) +
                        initialDelta * Math.cos(angularFreq_1 * t)));
            };
            resolveVelocity = function(t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq_1 * t) *
                            (initialVelocity +
                                dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq_1 +
                        initialDelta * Math.cos(angularFreq_1 * t)) -
                    envelope *
                    (Math.cos(angularFreq_1 * t) *
                        (initialVelocity +
                            dampingRatio *
                            undampedAngularFreq *
                            initialDelta) -
                        angularFreq_1 *
                        initialDelta *
                        Math.sin(angularFreq_1 * t)));
            };
        } else if (dampingRatio === 1) {
            resolveSpring = function(t) {
                return to -
                    Math.exp(-undampedAngularFreq * t) *
                    (initialDelta +
                        (initialVelocity + undampedAngularFreq * initialDelta) *
                        t);
            };
        } else {
            var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = function(t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                                dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq_1 *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq_1);
            };
        }
    }
    createSpring();
    return {
        next: function(t) {
            var current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                var currentVelocity = resolveVelocity(t) * 1000;
                var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else {
                state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: function() {
            var _a;
            velocity = -velocity;
            _a = [to, from], from = _a[0], to = _a[1];
            createSpring();
        },
    };
}
spring.needsInterpolation = function(a, b) {
    return typeof a === "string" || typeof b === "string";
};
var zero = function(_t) {
    return 0;
};

export {
    spring
};