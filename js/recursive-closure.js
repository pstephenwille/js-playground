
function closure(arr) {
    /*
     * 1. A new closure is created with each iteration,
     * until this return is reached, before calling closedFunc. */
    if (arr.length === 1) return arr;
    arr.shift();

    /* 2. after `closure` has been recursively called arr.length times,
     * the returned value is passed to `closedFunc` and `closedFunc` is called
     * arr.length times; executed for each recursive closure that was created. */
    return closedFunc(closure(arr), closure(arr));
}

function closedFunc(left, right) {
    console.log('...L/R ', left, right);
    /* 3. after all the closures have been created,
    * this func is executed. */
    let val = left.concat(right);
    // console.log('...val ', JSON.stringify(val));

    /* 4. the returned val is an array arr.length with the single value from
     shifting off all elems in `clousre`: eg [4,4,4,4,4] */
    return val;
}

arr = Array(5).fill(0).map((item, index) => index);
closure(arr);
