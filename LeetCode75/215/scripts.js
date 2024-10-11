/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let minHeap = new MinPriorityQueue(); // Initialize a min-heap

    for (let num of nums) {
        minHeap.enqueue(num); // Add the current number to the heap

        // Ensure the heap size stays at k by removing the smallest element
        if (minHeap.size() > k) {
            minHeap.dequeue(); // Remove the smallest element (root of the min-heap)
        }
    }

    // The root of the heap is the k-th largest element
    return minHeap.front().element;
};
