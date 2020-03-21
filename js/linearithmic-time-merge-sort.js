// merge sort
// halves the arrays unitl they're single elems then reconstitute them into a sorted array
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr;
    }

    // get the middle item of the array rounded down
    const middle = Math.floor(arr.length >> 1);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // recursively halve the arrays until we have a single elem
    return merge(mergeSort(left), mergeSort(right));
}

// sort the single elems left right
function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[ indexLeft ] < right[ indexRight ]) {
            result.push(left[ indexLeft++ ]);
            // indexLeft++;
        } else {
            result.push(right[ indexRight++ ]);
            // indexRight++;
        }
    }
    let res = result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));

    return res;
}

const list = [4, 62, 3, 7, 9, 8, 5, 3, 6, 7];

console.profile('linearithmic-time/mergeSort');
console.log('...init', mergeSort(list));
console.profileEnd('linearithmic-time/mergeSort');


/*
*
*
7 - 15
* 15, 7
*
* */