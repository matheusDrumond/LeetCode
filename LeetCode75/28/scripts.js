// Firstly, it took me a long time to figure out how to solve this problem and, even after all this time, my solution wasn't very good.
// Therefore, I started to search for ways to implement a solution with better performance and was able to improve it.
// Now, check out the difference between the initial approach to the solution and the final version of the code.
// (The description of the problem is in the README.md file.)

/**
 * @param {string} senate
 * @return {string}
 */

var predictPartyVictory = function (senate) {
    // Turns the string into a 'real' queue
    let queue = senate.split("");

    // These variables will keep track of how many senators each party still has
    let dires = 0;
    let radiants = 0;

    // This loop finds out how many senators are in each party at the beginning
    for (const senator of queue) {
        if (senator === "R") {
            radiants++;
        } else {
            dires++;
        }
    }

    // The while loop executes the senate itself and keeps going until one of the sides runs out of senators
    while (radiants > 0 && dires > 0) {
        // If the senator is a Radiant
        if (queue[0] === "R") {
            // The target is the enemy senator they are going to block
            let target = queue.indexOf("D");
            // So the enemy senator is eliminated from the senate
            queue.splice(target, 1);
            // Then the senator who just voted goes back to the end of the queue
            queue.shift();
            queue.push("R");
            // Finally, the number of Dire senators left is decreased
            dires--;
        }
        // In case the senator is a Dire, the same logic applies, but eliminating a Radiant
        else {
            let target = queue.indexOf("R");
            queue.splice(target, 1);
            queue.shift();
            queue.push("D");
            radiants--;
        }
    }

    // In the end, the party that still has senators wins
    return radiants > 0 ? "Radiant" : "Dire";
};

// The logic makes sense, but the performance is poor.
// This is especially due to the 'shift' and 'splice' methods, which make the code slow.

// To solve these problems, the final solution uses different logic. Keep reading!

// Final version

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    // This part turns each party into a queue
    let radiants = [];
    let dires = [];

    // And sets a variable that will be used to put the senators back to the end of the line
    let n = senate.length;

    // Fill up the queues with the indices of the senators
    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") {
            radiants.push(i);
        } else {
            dires.push(i);
        }
    }

    // Time to execute the real rounds
    while (radiants.length > 0 && dires.length > 0) {
        // Get the index of the first senator of each party
        let radiantIndex = radiants.shift();
        let direIndex = dires.shift();

        // The logic is: whoever comes first will be able to block the other
        if (radiantIndex < direIndex) {
            // Radiant defeats the Dire
            radiants.push(radiantIndex + n);
        } else {
            // Dire defeats the Radiant
            dires.push(direIndex + n);
        }
    }

    // The queue that gets empty loses
    return radiants.length > 0 ? "Radiant" : "Dire";
};

// This solution uses an algorithm that is much simpler and uses fewer methods that can make the code slower, thus providing a more efficient solution.
