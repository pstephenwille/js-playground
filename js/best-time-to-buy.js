/*
* Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5:-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
* */

const maxProfit = (prices) => {
    const allTransactions = findAllTransactions(prices);
    const groupedTransactions = groupByConsecutiveSells([...allTransactions], []);
    const maxTransactions = getMaxProfit(groupedTransactions, allTransactions);

    console.log('%c...max-t', 'color:gold', maxTransactions)
}

const getMaxProfit = (groupedTransactions, singleTransactions) => {
    const maxGrouped = groupedTransactions.reduce((max, current) => {
        const maxProfit = (max[0].profit + max[1].profit);
        const newProfit = (current[0].profit + current[1].profit);

        max = (newProfit > maxProfit) ? current : max;

        return max;
    }, [{profit: 0}, {profit: 0}]);

    const maxSingle = singleTransactions.reduce((max, current) => {
        max = (current.profit > max.profit) ? current : max;
        return max;
    }, {profit: 0})

    const maxTrans = ((maxGrouped[0].profit + maxGrouped[1].profit) > maxSingle.profit) ? maxGrouped : maxSingle;
    const maxValue = Math.max((maxGrouped[0].profit + maxGrouped[1].profit), maxSingle.profit);

    return maxValue;
}


const findAllTransactions = (prices) => {
    let results = [];
    for (let currentDayIndex = 0; currentDayIndex < prices.length; currentDayIndex++) {
        const buyPrice = prices[currentDayIndex];
        let maxSellPrice = prices[currentDayIndex + 1];
        let maxPriceIndex = currentDayIndex + 1;

        for (let nextDayIndex = currentDayIndex + 1; nextDayIndex < prices.length; nextDayIndex++) {
            const sellPrice = prices[nextDayIndex];
            const sellPriceDelta = Math.max((maxSellPrice));
            const isSellablePrice = (sellPrice > buyPrice);
            const isBetterPrice = (sellPrice > maxSellPrice);

            if (isSellablePrice || isBetterPrice) {
                maxSellPrice = sellPrice;
                maxPriceIndex = nextDayIndex;
                results.push({
                    buyPrice,
                    sellPrice,
                    buyIndex: currentDayIndex,
                    sellIndex: nextDayIndex,
                    profit: sellPrice - buyPrice,
                    dayDelta: nextDayIndex - currentDayIndex
                });
            }

        }
    }

    return results;
}

/*
* find consecutive sell days
* find max value
* */

const groupByConsecutiveSells = (transactions, grouped = []) => {
    if (transactions.length <= 0) return grouped;

    const sellAfter = transactions.shift();

    transactions.forEach((trans, tIndex) => {
        if (trans.buyIndex > sellAfter.sellIndex) {
            grouped.push([sellAfter, trans]);
            skipIndex = tIndex;
        }
    });

    groupByConsecutiveSells(transactions, grouped);

    return grouped;
}
// console.log('...', maxProfit([1,2]))

/*
* DP, sliding window approach
* */
var maxProfit2 = (prices) => {
    let t1Cost = Number.MAX_VALUE,
        t2Cost = Number.MAX_VALUE;
    let t1Profit = 0,
        t2Profit = 0;


    prices.forEach((price) => {
        // the maximum profit if only one transaction is allowed
        t1Cost = Math.min(t1Cost, price);
        const runningProfit1 = (price - t1Cost);
        t1Profit = Math.max(t1Profit, runningProfit1);
        console.log('%c...prices', 'color:red',price, t1Profit, t2Profit)

        // reinvest the gained profit in the second transaction
        t2Cost = Math.min(t2Cost, price - t1Profit);
        const runningProfit2 = (price - t2Cost);
        t2Profit = Math.max(t2Profit, runningProfit2);
        console.log('%c...prices', 'color:gold',price, t1Profit, t2Profit)
    });

    return t2Profit;

};
console.log('...', maxProfit2([3,3,5,0,0,3,1,4]))
