let removeElement = function (nums, val) {
    // we are declaring a different array 'result' that is going to receive only the elements different from val
    result = nums.filter((item) => item != val);

    // Then, we are goingo to fill the first k elements of the array with the elements from 'result'
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    // Then, we return the number of elements in the array that are different from val
    return result.length;
};
