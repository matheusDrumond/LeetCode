let canJump = function (nums) {
    // This variabl will just make simpler to use the last index in operations, by calling it instead of using 'nums.length - 1' every time
    const max = nums.length - 1;
    // This pointer will keep track of 'where we are' in the jumps
    let current = max;

    // The loop will go through the array from right to left to do the reverse way to get to the end of the path
    for (let i = max - 1; i > -1; i--) {
        // If the place we are jumping from can reach the next point that can allow us to get to the end, we jump and consider it as our current position
        if (current - i <= nums[i]) current = i;
    }

    // If we could get to the beginning in the reverse path, then it is possible to get to the end jumping
    return current == 0 ? true : false;
};
