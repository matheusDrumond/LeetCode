let removeDuplicates = function (nums) {
    // Here we are going to use a Set to keep track of the unique elements
    let set = new Set();

    // Now, there is a loop to fill the Set
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    // This is going to be our pointer for the next loop
    let p = 0;
    // In this loop, we will fil the nums array with the elements from the set
    for (const num of set) {
        nums[p] = num;
        p++;
    }

    // In the end, we return the size of the set, that is the number of unique elements
    return set.size;
};
