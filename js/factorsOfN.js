/// Factors are the numbers you multiply to get another number.
/// For instance, factors of 12 = 1, 2, 3, 4, 6, 12
/// (1, 12), (2, 6), (3, 4) are factor,  12
/// Given a binary tree root node and a number, write a program to find the factor pairs of the number in the tree


/**
 * what does a node look  like: {data,next, prev}
 *
 * inputs: node, num
 *  6=[1,6], [2,3]
 * */
factorsOfN = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }

    return result;
};
console.log('result ', factorsOfN(56));