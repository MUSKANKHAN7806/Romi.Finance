import {
    isPoint
} from './is-point.js';

var isPoint3D = function(point) {
    return isPoint(point) && point.hasOwnProperty('z');
};

export {
    isPoint3D
};