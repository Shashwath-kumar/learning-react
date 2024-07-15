/**
 * 2. Implement your versions of the following Array methods (choose 6).
 * 
 * Chosen: map, filter, reduce, join, pop, push, slice
 */

// myMap
Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {  // Handle sparse arrays
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
};

// myFilter
Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this && callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// myReduce
Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    let accumulator = initialValue;
    let startIndex = 0;
    if (initialValue === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
};

// myJoin
Array.prototype.myJoin = function (separator = ',') {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        if (i > 0) {
            result += separator;
        }
        if (this[i] != null) {  // Handle null and undefined
            result += this[i];
        }
    }
    return result;
};

// myPop
Array.prototype.myPop = function () {
    if (this.length === 0) return undefined;
    let lastElement = this[this.length - 1];
    this.length--;
    return lastElement;
};

// myPush
Array.prototype.myPush = function (...elements) {
    for (let element of elements) {
        this[this.length] = element;
    }
    return this.length;
};

// mySlice
Array.prototype.mySlice = function (start, end) {
    let result = [];
    let length = this.length;

    // Handle negative start and end
    start = start === undefined ? 0 : start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    end = end === undefined ? length : end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

    for (let i = start; i < end; i++) {
        if (i in this) {  // Handle sparse arrays
            result.push(this[i]);
        }
    }
    return result;
};