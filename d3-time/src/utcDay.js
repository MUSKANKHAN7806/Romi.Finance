import interval from "./interval.js";
import {
    durationDay
} from "./duration.js";

var utcDay = interval(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / durationDay;
}, function(date) {
    return date.getUTCDate() - 1;
});

export default utcDay;
export var utcDays = utcDay.range;