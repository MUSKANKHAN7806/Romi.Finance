import {
    spring
} from '../generators/spring.js';
import {
    keyframes
} from '../generators/keyframes.js';
import {
    decay
} from '../generators/decay.js';

var types = {
    keyframes: keyframes,
    spring: spring,
    decay: decay
};

function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return keyframes;
    } else if (types[config.type]) {
        return types[config.type];
    }
    var keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return keyframes;
    } else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return spring;
    }
    return keyframes;
}

export {
    detectAnimationFromOptions
};