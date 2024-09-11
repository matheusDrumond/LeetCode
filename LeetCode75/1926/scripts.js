/**
 *
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let rows = maze.length; // Number of rows in the maze
    let cols = maze[0].length; // Number of columns in the maze

    // Initialize the queue with the entrance cell and distance 0
    let queue = [[entrance[0], entrance[1], 0]];

    // Define possible movement directions (up, down, left, right)
    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // Mark the entrance cell as visited to avoid revisiting it
    maze[entrance[0]][entrance[1]] = "+";

    // Perform BFS to explore the maze
    while (queue.length > 0) {
        // Dequeue the front cell in the queue
        let [r, c, dist] = queue.shift();

        // Check if the current cell is an exit (but not the entrance)
        // An exit is a boundary cell that is not the entrance
        if (
            (r !== entrance[0] || c !== entrance[1]) &&
            (r === 0 || r === rows - 1 || c === 0 || c === cols - 1)
        ) {
            return dist; // Return the distance if an exit is found
        }

        // Explore all possible directions from the current cell
        for (let [dr, dc] of directions) {
            let nr = r + dr; // New row index
            let nc = c + dc; // New column index

            // Check if the new cell is within bounds and not yet visited
            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                maze[nr][nc] === "."
            ) {
                maze[nr][nc] = "+"; // Mark the new cell as visited
                queue.push([nr, nc, dist + 1]); // Enqueue the new cell with incremented distance
            }
        }
    }

    // Return -1 if no exit is found after exploring all possible paths
    return -1;
};
