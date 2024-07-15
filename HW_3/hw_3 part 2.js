/**
 * 2. Implement your versions of the following Array methods (choose 6).
 * 
 * Chosen: map, filter, reduce, join, pop, push, slice
 */

// myMap
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// myFilter
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// myReduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// myJoin
Array.prototype.myJoin = function (separator = ',') {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += separator;
        }
    }
    return result;
};

// myPop
Array.prototype.myPop = function () {
    if (this.length === 0) return undefined;
    const lastElement = this[this.length - 1];
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
Array.prototype.mySlice = function (start = 0, end = this.length) {
    const result = [];
    start = start >= 0 ? start : Math.max(this.length + start, 0);
    end = end >= 0 ? Math.min(end, this.length) : this.length + end;

    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
};