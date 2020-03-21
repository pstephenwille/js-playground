currier = function(fn) {
    // cache arg from initial call
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        // add args from first call to args from subsequent call; args = [1, 5], [1, 11]
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
    };
};

sequence = function(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

seq5 = currier(sequence, 1);

seq5(5);
seq5(11);


/* https://medium.com/datadriveninvestor/javascript-currying-vs-partial-application-4db5b2442be8
* */
const compose = (...fns) =>
    fns.reduce((f, g) => (...args) => f(g(...args)));
