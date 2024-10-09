let orangesRotting = function (grid) {
    // Get the number of rows (m) and columns (n) in the grid
    const m = grid.length;
    const n = grid[0].length;

    let fresh = 0; // Count of fresh oranges
    let rotten = []; // List to store coordinates of rotten oranges
    let p = 0; // Pointer to track which rotten orange is being processed

    // Loop through the grid to count fresh oranges and locate rotten oranges
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++; // Count fresh orange
            } else if (grid[i][j] === 2) {
                rotten.push([i, j]); // Store the position of a rotten orange
            }
        }
    }

    // If there are no fresh oranges, return 0 (no time needed)
    if (fresh === 0) return 0;

    let minutes = 0; // Time counter (minutes passed)
    // Possible directions to move: up, right, left, down
    const directions = [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
    ];

    // Helper function to check if a given position has a fresh orange
    const isFresh = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1) return false; // Check bounds and ensure the cell contains a fresh orange
        return true;
    };

    // While there are rotten oranges to process (using pointer p)
    while (p < rotten.length) {
        const size = rotten.length - p; // Number of rotten oranges to process in this round
        minutes++; // Increment the minute counter for each round

        // Process each rotten orange in the current batch
        for (let i = 0; i < size; i++) {
            const [r, c] = rotten[p]; // Get the position of the current rotten orange
            p++; // Move the pointer to the next rotten orange

            // Check all four directions (down, right, left, up)
            for (let [x, y] of directions) {
                const a = r + x; // Calculate the new row
                const b = c + y; // Calculate the new column

                // If the new position contains a fresh orange, rot it
                if (isFresh(a, b)) {
                    grid[a][b] = 2; // Mark the fresh orange as rotten
                    rotten.push([a, b]); // Add the new rotten orange to the list
                    fresh--; // Decrease the count of fresh oranges
                }
            }
        }
    }

    // If there are still fresh oranges left, return -1 (not all can rot),
    // otherwise return the number of minutes passed (adjusted by subtracting 1)
    return fresh > 0 ? -1 : minutes - 1;
};
