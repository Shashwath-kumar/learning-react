/**
 * 2. Implement your versions of the following Array methods (choose 6).
 * 
 * Chosen: map, filter, reduce, join, pop, push, slice
 */

// myMap
Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0;
    const A = new Array(len);

    for (let k = 0; k < len; k++) {
        if (k in O) {
            A[k] = callback.call(thisArg, O[k], k, O);
        }
    }

    return A;
};

// myFilter
Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0;
    const result = [];

    for (let k = 0; k < len; k++) {
        if (k in O) {
            const value = O[k];
            if (callback.call(thisArg, value, k, O)) {
                result.push(value);
            }
        }
    }

    return result;
};

// myReduce
Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0;

    if (len === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let k = 0;
    let accumulator = initialValue;

    if (accumulator === undefined) {
        while (k < len && !(k in O)) {
            k++;
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = O[k++];
    }

    for (; k < len; k++) {
        if (k in O) {
            accumulator = callback(accumulator, O[k], k, O);
        }
    }

    return accumulator;
};

// myJoin
Array.prototype.myJoin = function (separator) {
    const O = Object(this);
    const len = O.length >>> 0;
    separator = separator === undefined ? ',' : String(separator);

    if (len === 0) return '';

    let result = O[0] === undefined || O[0] === null ? '' : String(O[0]);

    for (let k = 1; k < len; k++) {
        result += separator;
        result += O[k] === undefined || O[k] === null ? '' : String(O[k]);
    }

    return result;
};

// myPop
Array.prototype.myPop = function () {
    const O = Object(this);
    const len = O.length >>> 0;
    if (len === 0) {
        O.length = 0;
        return undefined;
    }
    const newLen = len - 1;
    const value = O[newLen];
    delete O[newLen];
    O.length = newLen;
    return value;
};

// myPush
Array.prototype.myPush = function (...items) {
    const O = Object(this);
    const len = O.length >>> 0;
    const newLen = len + items.length;
    for (let i = 0; i < items.length; i++) {
        O[len + i] = items[i];
    }
    O.length = newLen;
    return newLen;
};

// mySlice
Array.prototype.mySlice = function (start, end) {
    const O = Object(this);
    const len = O.length >>> 0;

    start = start === undefined ? 0 : Math.floor(start);
    end = end === undefined ? len : Math.floor(end);

    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

    const result = new Array(Math.max(end - start, 0));

    for (let k = 0; k < result.length; k++) {
        const from = start + k;
        if (from in O) {
            result[k] = O[from];
        }
    }

    return result;
};