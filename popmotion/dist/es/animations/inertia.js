import {
    __assign
} from 'tslib';
import {
    animate
} from './index.js';
import {
    velocityPerSecond
} from '../utils/velocity-per-second.js';
import {
    getFrameData
} from 'framesync';

function inertia(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 750 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget,
        driver = _a.driver,
        onUpdate = _a.onUpdate,
        onComplete = _a.onComplete;
    var currentAnimation;

    function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
    }

    function boundaryNearest(v) {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }

    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = animate(__assign(__assign({}, options), {
            driver: driver,
            onUpdate: function(v) {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            },
            onComplete: onComplete
        }));
    }

    function startSpring(options) {
        startAnimation(__assign({
            type: "spring",
            stiffness: bounceStiffness,
            damping: bounceDamping,
            restDelta: restDelta
        }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({
            from: from,
            velocity: velocity,
            to: boundaryNearest(from)
        });
    } else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function(v) {
            prev_1 = current_1;
            current_1 = v;
            velocity = velocityPerSecond(v - prev_1, getFrameData().delta);
            if ((heading_1 === 1 && v > boundary_1) ||
                (heading_1 === -1 && v < boundary_1)) {
                startSpring({
                    from: v,
                    to: boundary_1,
                    velocity: velocity
                });
            }
        };
        startAnimation({
            type: "decay",
            from: from,
            velocity: velocity,
            timeConstant: timeConstant,
            power: power,
            restDelta: restDelta,
            modifyTarget: modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
    }
    return {
        stop: function() {
            return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        },
    };
}

export {
    inertia
};