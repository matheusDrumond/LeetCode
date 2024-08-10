/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    // This conditional verifies if the list has only one or none nodes and returns a null value
    if (!head || !head.next) return null;

    // Here we initialize the pointers
    let slow = (fast = head);
    let prev = null;

    // In this loop we will find the middle of the linked list, it stops when there is not fast pointer or when it has no next linked node
    while (fast && fast.next) {
        // The prev pointer move to the next node, always behind the slow pointer
        prev = slow;

        // Then the slow pointer moves one node ahead
        slow = slow.next;

        // And the fast pointer moves forward twice
        fast = fast.next.next;
    }

    // Then, if there's a node pointed by the prev pointer
    if (prev) {
        // This node's next linked node is now the slow's next node, so we are skipping the middle node
        prev.next = slow.next;
    }

    // In the end we return the new linked list that skips the middle node, so it is not part of the list anymore
    return head;
};

/*
    To solve this problem, I used a two pointer strategy where one of them moves a single node at a time, while the other one moves two nodes at the same time.
    If the fast pointer always moves the double nodes of the slow pointer, when the fast pointer gets to the end of the list, the slow pointer is going to be in the middle.

    When I find the middle node, I just replace the "next" property of the previous node (pointed by the prev pointer) with the "next" property of the next node.
    What makes me skip the next node and then, return the new list without the middle node.
*/
