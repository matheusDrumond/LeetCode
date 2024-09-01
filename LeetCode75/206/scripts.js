/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // This variable is going to store the previous node (there is no previous node for the first one. that's why it starts with a null value)
    let prev = null;

    // The while loop will reassign the value for each node .next property
    while (head) {
        let next = head.next; // 'next' is storing the next node we need to reassign

        // At this point, we are going to make our node point to the previous one
        head.next = prev;

        // Finally, we update the variables to keep iterating
        prev = head;
        head = next;
    }

    // One interesting thing is that we need to return the prev node, because at the end of the iteration the 'head' is going to be undefined while 'prev' will be the last node
    // And the last node is now the first
    return prev;
};
