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
var longestZigZag = function (root) {
    // This variable will keep track of the longest zigzag
    let maxZigZag = 0;

    // This is a depth-first-search algorithm that will go through the whole tree looking for the longest zigzag
    const dfs = (node, isLeft, length) => {
        // If the node is empty, just return
        if (!node) return;

        // This will vhange the maxZigZag value if the current zigzag length is greater
        maxZigZag = Math.max(maxZigZag, length);

        // Here, we are to call the dfs recursively based on the direction we want to follow
        if (isLeft) {
            dfs(node.left, false, length + 1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, length + 1);
            dfs(node.left, false, 1);
        }
    };

    // We start the alforithm for both sides in the root node
    dfs(root.left, false, 1);
    dfs(root.right, true, 1);

    // And, fianlly, we return the length of the longest zigzag
    return maxZigZag;
};
