let mySqrt = (x) => {
    // The square root of 0 or 1 are going to be themselves
    if (x <= 1) {
        return x;
    }

    // Here, we are going to define pointers so we can check the possibilities
    let left = 0;
    let right = x;

    // In this loop, we will go through the numbers using a binary search approach
    while (left < right) {
        // First step: get the middle
        let middle = Math.floor((right + left) / 2);
        // Second step: find what number has it as the square root
        let square = middle * middle;

        // Checking if the middle number is the square root of x
        if (square === x) return middle;

        // Now, since it is not the sqrt, we should keep loking for it
        if (square < x) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    // Finally, since we couldn't find the sqrt as an integer
    // We will return the integer that comes right before the number that should be the precise result
    return left - 1;
};
