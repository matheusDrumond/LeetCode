let maxProfit = function (prices) {
    // In this variable, we will add all of the possibilities of profit, adding them
    let profit = 0;
    // This variable will be our pointer
    let p = 0;

    // This loop will go through our array, checking the posibilities of profit
    while (p < prices.length - 1) {
        // Here, we check if in the next day the price will be higher, if so, we consider it a profit to be made
        if (prices[p] < prices[p + 1]) {
            // Increases total profit
            profit += prices[p + 1] - prices[p];
        }
        // Update our pointer
        p++;
    }

    // Return the final profit
    return profit;
};
