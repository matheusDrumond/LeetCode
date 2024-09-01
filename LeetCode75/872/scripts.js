/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    // At the first moment we are initializing the arrays that will store the values of the leaves of each root
    let leaves1 = [];
    let leaves2 = [];

    //  This is the recursive function that will go through the tree to find the leaves and store them
    const dfs = (node, array) => {
        // If the node is empty, return
        if (!node) return;

        // If the node has no child nodes than it is a leaf and we are going to store it
        if (!node.left && !node.right) {
            array.push(node.val);
        }
        // If the node is not a leaf, we repeat the process for its children until we find all the leaves
        else {
            if (node.left) {
                dfs(node.left, array);
            }
            if (node.right) {
                dfs(node.right, array);
            }
        }
    };

    // We execute the function for both roots to fill the leaves array
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    // This function will compare both arrays
    function compareArrays(arr1, arr2) {
        // If their length is different they cannot be equal
        if (arr1.length !== arr2.length) {
            return false;
        }

        // This loop checks each element of the array
        for (let i = 0; i < arr1.length; i++) {
            // If any element is different, than they are not the same
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        // If none of the elements is different, than the arrays are the same
        return true;
    }

    // In the end we return if both arrays are equal or not
    return compareArrays(leaves1, leaves2);
};
