var oddEvenList = function (head) {
    // If the head has none, one or two elements, there is nothing to order
    if (!head || !head.next || !head.next.next) return head;

    // These are going to be our pointers
    let odd = head;
    let even = head.next;
    let firstEven = even;

    // If there is a node ahead of our even element, we keep looping
    while (even?.next) {
        // The current odd node is now going to point to the next odd node
        odd.next = even.next;
        // And now, our odd pointer is updated
        odd = odd.next;

        // Our current even node points to the next even node
        even.next = odd.next;
        // We update the even pointer position
        even = even.next;
    }

    // Now we connect the odd nodes to the even group
    odd.next = firstEven;

    // Finally, we return the new head list
    return head;
};
