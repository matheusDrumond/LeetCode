var pathSum = function (root, targetSum) {
    // This variable will store the number of valid paths that sum up to targetSum
    let equalTarget = 0;

    // This map will store the prefix sums and their frequencies
    const prefixSums = new Map();

    // Initialize the prefix sum with 0 having one occurrence (to handle paths starting from the root)
    prefixSums.set(0, 1);

    const dfs = (node, currentSum) => {
        // If the node is null, return and stop further processing
        if (!node) return;

        // Update the current sum by adding the value of the current node
        currentSum += node.val;

        // Check if there is a prefix sum that, when subtracted from currentSum, equals targetSum
        // If it exists, it means we've found a valid path
        if (prefixSums.has(currentSum - targetSum)) {
            // Add the number of times this prefix sum has occurred to the count of valid paths
            equalTarget += prefixSums.get(currentSum - targetSum);
        }

        // Add the current sum to the map of prefix sums, incrementing its frequency
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);

        // Recursively call dfs on the left and right children
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);

        // Once done processing the current node, decrement the frequency of the current sum
        // This is to backtrack, ensuring the current path does not interfere with other paths
        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1);
    };

    // Start the depth-first search (dfs) from the root with an initial sum of 0
    dfs(root, 0);

    // Return the total number of valid paths found
    return equalTarget;
};
