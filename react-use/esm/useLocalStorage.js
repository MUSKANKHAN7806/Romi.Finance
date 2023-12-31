import {
    useCallback,
    useState,
    useRef,
    useLayoutEffect
} from 'react';
import {
    isBrowser,
    noop
} from './misc/util';
var useLocalStorage = function(key, initialValue, options) {
    if (!isBrowser) {
        return [initialValue, noop, noop];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options ?
        options.raw ?
        function(value) {
            return value;
        } :
        options.deserializer :
        JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var initializer = useRef(function(key) {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            } else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        } catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = useState(function() {
            return initializer.current(key);
        }),
        state = _a[0],
        setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(function() {
        return setState(initializer.current(key));
    }, [key]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = useCallback(function(valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
            else if (options.serializer)
                value = options.serializer(newState);
            else
                value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        } catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = useCallback(function() {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        } catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
export default useLocalStorage;