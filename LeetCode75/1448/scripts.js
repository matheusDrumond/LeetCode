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
var goodNodes = function (root) {
    // This variable is going to store the number of good nodes
    let goodCount = 0;

    // This is a recursive function that will go through each node of the tree
    const findGoods = (node, max) => {
        // If there is no node, just return
        if (!node) return;

        // If the node's value is greater than the current greatest number it is a good node
        if (node.val >= max) {
            // We update the count of good nodes
            goodCount++;

            // And we update the greatest value of this path
            max = node.val;
        }

        // Then, we just repeat the process for its children
        findGoods(node.left, max);
        findGoods(node.right, max);
    };

    // We call the function for the received tree
    findGoods(root, root.val);

    // in the end we return the good count
    return goodCount;
};
