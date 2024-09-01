/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    // If the root is null, return 0 as there are no levels to check
    if (!root) return 0;

    // Initialize maxSum with the root node's value
    // This will keep track of the highest sum encountered at any level
    let maxSum = root.val;

    // Initialize the queue with the root node to start the level order traversal
    let queue = [root];

    // Initialize maxLevel to 1, representing the level with the maximum sum
    let maxLevel = 1;

    // Initialize currentLevel to 1, representing the current level being processed
    let currentLevel = 1;

    // Loop until there are no more nodes to process in the queue
    while (queue.length > 0) {
        // Get the number of nodes at the current level
        let len = queue.length;

        // Initialize sum to 0 to calculate the sum of values at the current level
        let sum = 0;

        // Process all nodes at the current level
        for (let i = 0; i < len; i++) {
            // Remove the first node from the queue
            let node = queue.shift();

            // Add the node's value to the current level's sum
            sum += node.val;

            // If the node has a left child, add it to the queue for the next level
            if (node.left) queue.push(node.left);

            // If the node has a right child, add it to the queue for the next level
            if (node.right) queue.push(node.right);
        }

        // If the sum of the current level is greater than the previous maximum sum
        // update maxSum and set maxLevel to the current level
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = currentLevel;
        }

        // Increment the current level counter to move to the next level
        currentLevel++;
    }

    // Return the level number that has the maximum sum
    return maxLevel;
};
