import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import useState from "rc-util/es/hooks/useState";
import {
    STEP_PREPARE,
    STEP_ACTIVE,
    STEP_START,
    STEP_ACTIVATED,
    STEP_NONE
} from '../interface';
import useNextFrame from './useNextFrame';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

export var SkipStep = false;
/** Current step should be update in */

export var DoStep = true;
export function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
export default (function(status, callback) {
    var _useState = useState(STEP_NONE),
        _useState2 = _slicedToArray(_useState, 2),
        step = _useState2[0],
        setStep = _useState2[1];

    var _useNextFrame = useNextFrame(),
        _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
        nextFrame = _useNextFrame2[0],
        cancelNextFrame = _useNextFrame2[1];

    function startQueue() {
        setStep(STEP_PREPARE, true);
    }

    useIsomorphicLayoutEffect(function() {
        if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
            var index = STEP_QUEUE.indexOf(step);
            var nextStep = STEP_QUEUE[index + 1];
            var result = callback(step);

            if (result === SkipStep) {
                // Skip when no needed
                setStep(nextStep, true);
            } else {
                // Do as frame for step update
                nextFrame(function(info) {
                    function doNext() {
                        // Skip since current queue is ood
                        if (info.isCanceled()) return;
                        setStep(nextStep, true);
                    }

                    if (result === true) {
                        doNext();
                    } else {
                        // Only promise should be async
                        Promise.resolve(result).then(doNext);
                    }
                });
            }
        }
    }, [status, step]);
    React.useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [startQueue, step];
});