var mix = function(from, to, progress) {
    return -progress * from + progress * to + from;
};

export {
    mix
};