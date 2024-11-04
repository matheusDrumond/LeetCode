let removeDuplicates = function (nums) {
    // Initialize a pointer `p` to track the position for the next unique or allowable duplicate
    let p = 1;

    // Set `prev` to the first element to keep track of the last unique element encountered
    let prev = nums[0];

    // Initialize `counter` to count occurrences of the current number; start with 1 for the first element
    let counter = 1;

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element matches the previous unique element
        if (nums[i] == prev) {
            // Allow up to two duplicates of the same element
            if (counter < 2) {
                nums[p] = nums[i]; // Place the duplicate in the position pointed by `p`
                p++; // Move `p` to the next position
                counter++; // Increment the count for the current number
            }
        } else {
            // If the current element is different from `prev`, reset the counter
            nums[p] = nums[i]; // Place the new unique element in the position pointed by `p`
            counter = 1; // Reset counter to 1 for the new element
            prev = nums[i]; // Update `prev` to the current unique element
            p++; // Move `p` to the next position
        }
    }

    // Return the length of the modified array (unique elements and allowed duplicates only)
    return p;
};
