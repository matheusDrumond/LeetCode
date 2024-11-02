let kthFactor = function (n, k) {
    // This poiter is going to be used to keep track of the pth factor
    let p = 0;

    // This loop will go through the numbers until the half of n and find its factors
    for (let i = 1; i <= n / 2; i++) {
        // Checks if i is a factor of n
        if (n % i == 0) {
            // Increments the factors counter
            p++;
            // If the factor is the kth one, we return it
            if (p == k) {
                return i;
            }
        }
    }

    // If the factors counter equals k - 1 it means that the kth factor is going to be n, otherwise, there's not a kth factor
    return p == k - 1 ? n : -1;
};
