// this is the Class that will be model to the objects
// the only thing we'll do here is start the queue
var RecentCounter = function () {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */

// this is the ring function inside the objects
RecentCounter.prototype.ping = function (t) {
    // first of all, when we receive a call, we'll add it to the queue
    this.queue.push(t);
    // then we filter the queues that are not in the range
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    // in the end we return the length of the queue, how many calls were received in that range
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
