arr1 = 'seattle'.split('');
arr2 = 'xxttle'.split('');
result = [];

let loopIntersectingArrays = () => {
    for (let i = 0; i < arr1.length;) {
        let letter1 = arr1[i];

        for (let ii = 0; ii < arr2.length; ii++) {
            let letter2 = arr2[ii];

            if (letter1 === letter2) {
                arr1.splice(i, 1);
                arr2.splice(ii, 1);
                result.push(letter2);
                i = 0;
                break;
            }
        }
        i++;
    }
};
// loopIntersectingArrays();
// console.log('intersecting arrays ', result, arr1, arr2);


/* doesn't work */
let mapIntersectingArrays = () => {
    let map1 = {}, map2 = {};

    arr1.forEach(ltr => {
        map1[ltr] = ++map1[ltr] || 1;
    });

    arr2.forEach(ltr => {
        map2[ltr] = ++map2[ltr] || 1;
    });

    for (let key1 in map1) {
        if (map2.hasOwnProperty(key1)) {
            if (map2[key1] >= map1[key1]) {
                map2[key1] -= map1[key1];
            }
        }
    }
    console.log('..maps ', map1, map2);

};
mapIntersectingArrays()

