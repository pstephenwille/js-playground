multiplyTable = function (size) {
    let table = [];
    let arr = new Array(size).fill(0).map((item, index) => index);

    arr.forEach((item1, index1) => {
        arr.forEach((item2, index2) => {
            table.push(arr[index1] * arr[index2]);
        });
    });

    return table;
};

console.profile('quadratic time');
result = multiplyTable(1000);
console.log('..result ', result.length);
console.profileEnd('quadratic time');
