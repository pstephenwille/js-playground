console.warn('LEET CODE\n\n');
/*climbing stairs
* https://leetcode.com/problems/climbing-stairs/*/
climbStairs = function (n) {
    //4=5
    //5 = (8) == [1,1,1,1,1], [1,1,1,2], [1,1,2,1], [1,2,1,1], [2,1,1,1], [2,2,1], [2,1,2], [1,2,2]
    //6=13
    //7=21
    //8=34
    if (n <= 3) return n;

    let fibs = [1, 1];

    while (fibs.length <= n) {
        let newFib = fibs[fibs.length - 2] + fibs[fibs.length - 1];
        fibs.push(newFib);
    }

    return fibs.pop();
};
console.log('...climbstairs ', climbStairs(4));


/**
 * 1 2 3 4 5 6 7 8
 * 1 2 3 5 4 6 7 8
 * 1 2 5 3 4 6 7 8
 * 1 2 5 3 4 7 6 8
 * 1 2 5 3 7 4 8 6
 * 1 2 5 3 7 8 4 6
 * 1 2 5 3 7 8 6 4
 *
 * 1 2 5 3 7 8 6 4
 * */