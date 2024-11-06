let majorityElement = function (nums) {
    // Initialize two variables:
    // 'candidate' to store the potential majority element
    // 'count' to keep track of the current count of the candidate
    let candidate = null;
    let count = 0;

    // Loop through each number in the input array 'nums'
    for (let num of nums) {
        // If count is zero, we set the current number as the new candidate
        if (count === 0) {
            candidate = num;
        }
        // If the current number is the same as the candidate, increment the count
        // Otherwise, decrement the count
        count += num === candidate ? 1 : -1;
    }

    // By the end of the loop, the 'candidate' variable holds the majority element
    // This works because the majority element appears more than half the time in the array
    return candidate;
};
