binarySearch = function(list, value) {
    let start = 0,
        stop = list.length - 1,
        middle = (start + stop) >> 1;
debugger;
    while (start < stop && list[ middle ] !== value) {
        (value < list[ middle ]) ? stop = middle - 1 : start = middle + 1;
        middle = (start + stop) >> 1;
    }

    return (list[ middle ] === value) ? middle : -1;

};

arr = Array(900000).fill(0).map((item, index) => index);

console.profile('binary-search');
res = binarySearch(arr, 99);
console.log('search ', res, arr[ res ]);
console.profileEnd('binary-search');

