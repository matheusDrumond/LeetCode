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
var maxDepth = function (root) {
    // To solve this problem, I will use recursion, so this is our recursive function
    const findingDepth = (node) => {
        // If our current node is empty, it increases the depth in zero (this is the base case for the recursion)
        if (!node) {
            return 0;
        }
        // Otherwise, we are going to return the deepest side of the subtree increased by 1 to count as the current level
        else {
            return (
                Math.max(findingDepth(node.left), findingDepth(node.right)) + 1
            );
        }
    };

    // At the end, we return directly the result of the recursion calling it as the return value
    return findingDepth(root);
};
