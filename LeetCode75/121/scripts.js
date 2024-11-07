let maxProfit = function (prices) {
    // This variable will keep track of the maximum profit found
    let profit = 0;
    // This variable will be storing the value of the minimum price found
    let min = prices[0];

    // This loop will go through the array checking the possible profits
    for (const price of prices) {
        // If the current price gets a better profit, we update the maximum profit value
        if (profit < price - min) profit = price - min;
        // If the current price is less than the minimum price variable, we update the variable's value
        if (price < min) min = price;
    }

    // We return the max profit
    return profit;
};
