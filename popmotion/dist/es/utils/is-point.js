var isPoint = function(point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};

export {
    isPoint
};