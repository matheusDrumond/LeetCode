let rotate = function (nums, k) {
    // Is going to define how much we need to rotate the array
    const n = k % nums.length;

    // It takes out the right part of the array with n elements
    const right = nums.splice(nums.length - n);

    // Puts those elements back in the beginning of the array
    nums.unshift(...right);
};
