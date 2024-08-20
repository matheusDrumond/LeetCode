/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let slow = head;
    let fast = head;
    let prev = null;

    // This loop will find the middle node while reverse the first half
    while (fast?.next) {
        fast = fast.next.next;

        // Reversão da primeira metade
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    // slow is now at the first node of the first half

    // Initializing the variable that will keep track of the maxSum available
    let maxSum = 0;

    // At the last loop, we will now check the twin sums
    while (slow) {
        maxSum = Math.max(maxSum, slow.val + prev.val);
        slow = slow.next;
        prev = prev.next;
    }

    // Returning the greatest sum
    return maxSum;
};

// Two of the concepts used have been designed before.
// The algorithm to find the middle node is available and explained in the problem 29
// The algorithm to reverse a linked list is available in problem 31
