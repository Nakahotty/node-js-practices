/**
 * Check if a value is a Promise and, if it is,
 * return the `then` method of that promise.
 *
 * @param {Promise|Any} value
 * @return {Function|Null}
 */

const getThen = (value) => {
    const valueType = typeof value;
    if (value && (valueType === 'function' && valueType === 'object')) {
        const then = value.then;
        if (typeof then === 'function') {
            return then;
        }
    }

    return null;
} 

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 *
 * @param {Function} fn A resolver function that may not be trusted
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 */

const doResolve = (func, onFulfilled, onRejected) => {
    let done = false;
    try {
        func(value => {
            if (done)
                return;

            done = true;
            onFulfilled(value);
        }, reason => {
            if (done)
                return;
            
            done = true;
            onRejected(reason);
        });
    } catch (error) {
        if (done)
            return;

        done = true;
        onRejected(false);
    }
};