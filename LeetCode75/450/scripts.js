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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null; // Base case: if the root is null, there's nothing to delete.

    let parent = null; // Variable to keep track of the parent node.
    let current = root; // Start with the root node.

    // Find the node to delete and its parent
    while (current && current.val !== key) {
        parent = current; // Update the parent to be the current node.
        if (key < current.val) {
            current = current.left; // Move to the left child if the key is less than the current node's value.
        } else {
            current = current.right; // Move to the right child if the key is greater than the current node's value.
        }
    }

    if (!current) return root; // If the node wasn't found, return the original root.

    // Case 1: Node has two children
    if (current.left && current.right) {
        let successor = current.right; // Start with the right child to find the successor.
        let successorParent = current; // Track the parent of the successor.

        // Find the in-order successor (smallest value in the right subtree)
        while (successor.left) {
            successorParent = successor;
            successor = successor.left; // Move to the leftmost node.
        }

        // Replace the value of the node to delete with the successor's value
        current.val = successor.val;

        // Now we need to delete the successor node, which will have at most one child
        current = successor;
        parent = successorParent;
    }

    // Case 2: Node has zero or one child
    let child = current.left ? current.left : current.right; // Determine the child (left or right).

    // If the node to delete is the root node
    if (!parent) {
        return child; // Return the child, which will become the new root.
    }

    // If the node to delete is the left child of its parent
    if (current === parent.left) {
        parent.left = child; // Replace the left child with the new child.
    } else {
        parent.right = child; // Replace the right child with the new child.
    }

    return root; // Return the (possibly modified) root of the tree.
};
