/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // This is the recursive DFS function we are going to use to go through all the tree
    const dfs = (node) => {
        if (!node) return null; // If the current node is null, return null

        // If the current node is either p or q, return the current node
        if (node === p || node === q) return node;

        // Recurse on the left and right subtrees
        const left = dfs(node.left);
        const right = dfs(node.right);

        // If both left and right are non-null, this means p and q are found in different subtrees
        // Thus, the current node is their lowest common ancestor
        if (left && right) return node;

        // If one side is non-null, return that side; otherwise, return null
        return left ? left : right;
    };

    // Start DFS from the root and return the found ancestor
    return dfs(root);
};
