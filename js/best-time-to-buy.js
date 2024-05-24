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


const findBestTimes = (prices) => {
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

            if (isSellablePrice && isBetterPrice) {
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

console.log('...', findBestTimes([3, 3, 5, 0, 0, 3, 1, 4]))


const maxProfit = (prices) => {
    let t1Cost = Number.MAX_VALUE,
        t2Cost = Number.MAX_VALUE;
    let t1Profit = 0,
        t2Profit = 0;


    for (let price in prices) {
        // the maximum profit if only one transaction is allowed
        t1Cost = Math.min(t1Cost, price);
        t1Profit = Math.max(t1Profit, price - t1Cost);
        // reinvest the gained profit in the second transaction
        t2Cost = Math.min(t2Cost, price - t1Profit);
        t2Profit = Math.max(t2Profit, price - t2Cost);
    }

    return t2Profit
};
