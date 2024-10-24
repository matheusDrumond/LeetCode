let sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
    // Since we are using a recursive function, this is the base case in which it should stop
    if (left > right) return null;

    // This defines a middle element in the respective range of the array
    let mid = Math.floor((right + left) / 2);
    // And, the, we create a new root
    let root = new TreeNode(nums[mid]);

    // We define the left and right pointers (which is the recursive case)
    root.left = sortedArrayToBST(nums, left, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, right);

    // Finally, we return the root
    return root;
};
