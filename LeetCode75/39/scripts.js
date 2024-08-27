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
 * @return {number[]}
 */
var rightSideView = function (root) {
    // Verifying if the root is not empty
    if (!root) return [];

    // The queue will store the nodes that I have to visit, starting from the root
    const queue = [root];

    // This array will store the values of the nodes that can be seen from the right side point of view
    const rightSide = [];

    // This loop will go through the Tree, checking the levels of it
    while (queue.length > 0) {
        // We need to store the length of this level to know eich is the last node at right
        let len = queue.length;

        // This smaller loop will place the child nodes in the queue and check for the last node of the level
        while (len > 0) {
            //  Getting the current node and removing it from the queue
            const node = queue.shift();

            // If the node is the last of the loop it means that it is the last from left to right, what means that it would be seen from a right side view
            if (len === 1) rightSide.push(node?.val);

            // If the children exist, add them to the queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            // Decrement the length variable, to keep the loop
            len--;
        }
    }

    // At the end we return the array with the values of the nodes that can be seen from the right side view
    return rightSide;
};
