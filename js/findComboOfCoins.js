const findComboOfCoins = (coins, targetAmount) => {
    const sortedCoins = coins.sort((a, b) => b - a);
    const results = { count: 0, coins: [], amount: targetAmount };

    sortedCoins.reduce((a, b) => {
        console.log('%c...', 'color:gold', results.amount, b);
        if (results.amount === 0) return b;

        const numCoinsInAmount = Math.floor(results.amount / b);
        if (numCoinsInAmount > 0) {
            results.count += numCoinsInAmount;
            results.coins.push(b);
            results.amount = results.amount - (numCoinsInAmount * b);
        }

        return b;
    }, a);
    console.log('%c...results', 'color:gold', results);
};

// coin-count leetcode


const doCoinCount = (coins, amount) => {
    if (amount < 0) return -1;
    if (amount === 0) return 0;

    let minCoinCount = Number.MAX_SAFE_INTEGER;
    for (let coin of coins) {
        let count = doCoinCount(coins, amount - coin);

        if(count === -1) continue;
        minCoinCount = Math.min(minCoinCount, count +1)
    }

    return minCoinCount === Number.MAX_SAFE_INTEGER ? -1: minCoinCount;
};
const foo = doCoinCount([1,2], 5)
console.log('%c...leet-code', 'color:gold', foo)

const allCoins = [];
allCoinCombosToEqualAmount = (coins, targetAmount, runningSum, runningCoinCount) => {
    if (coins.length === 0) return runningCoinCount;

    let slate = '';
    let coinCount = 0;

    for (let coin = 0; coin < coins.length; coin++) {
        const coinValue = coins[coin];
        const numCoinInAmount = Math.floor(runningSum / coinValue);
        if (numCoinInAmount) {
            runningSum -= coinValue * numCoinInAmount;
            slate = `${ slate } + ${ coinValue }*${ numCoinInAmount }`;
            coinCount += numCoinInAmount;
        }
        if (runningSum === 0) {
            // slate = `${slate} + ${coin}*${numCoinInAmount}`
            console.log('%c...slate', 'color:gold', slate, coinCount);
            runningSum = targetAmount;
            allCoins.push(runningSum);
            runningCoinCount = Math.min(coinCount, runningCoinCount);
        }

        if (coin === coins.length - 1) {
            if (runningCoinCount === Number.MAX_SAFE_INTEGER) {
                runningCoinCount = -1;
            }
        }
    }

    allCoinCombosToEqualAmount(coins.slice(1), targetAmount, runningSum, runningCoinCount);

    // return runningSum;
    return runningCoinCount;
};
// const foo = allCoinCombosToEqualAmount([ 186, 419, 83, 408 ], 6249, 6249, Number.MAX_SAFE_INTEGER);
// const foo = allCoinCombosToEqualAmount([ 10, 5, 1 ], 11, 11, Number.MAX_SAFE_INTEGER);
// console.log('%c...all-coins', 'color:gold', foo, allCoins);


////// all string permutations
const allCombos = [];
generateAllCombosForString = (slate, str, refStr) => {
    if (str.length === 0) return slate;

    let newString = '';
    for (let char of refStr) {
        newString = generateAllCombosForString(slate + char, str.slice(1), refStr);
        if (newString.length === refStr.length) {
            allCombos.push(newString);
        }
    }

    return slate;
};
// generateAllCombosForString("", "abc", "abc")
// console.log('%c...all-combos', 'color:gold', allCombos);


///// all subsets; order doesn't matter, {b,c}== {c,b}
const allSubsets = [];
const generateSubSets = (slate, letters) => {
    if (letters.length === 0) {
        allSubsets.push(slate);

        return;
    }

    //include
    generateSubSets(slate + letters.charAt(0), letters.slice(1));

    //exclude
    generateSubSets(slate, letters.slice(1));

};

// generateSubSets("", "abc")
// console.log('%c...allSubset', 'color:gold', allSubsets);
