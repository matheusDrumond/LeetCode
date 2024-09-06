/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    // This is going to be our graph to manage the connections between cities
    let graph = Array.from({ length: n }, () => []);

    // Then we populate this graph
    for (let [u, v] of connections) {
        graph[u].push([v, true]); // original direction u -> v
        graph[v].push([u, false]); // reverse direction v -> u
    }

    // We are going to use a dfs function to recursively traverse the tree and count the times we will need to reverse ways
    function dfs(city, parent) {
        let reversals = 0;

        graph[city].forEach(([neighbor, needsReversal]) => {
            // Avoids going backto the parent node
            if (neighbor !== parent) {
                // If it needs to be reversed, we increment our counter
                if (needsReversal) {
                    reversals++;
                }
                // Recurse to the neighboring city
                reversals += dfs(neighbor, city);
            }
        });

        return reversals;
    }

    // Starts DFS from city 0 and return the result
    return dfs(0, -1);
};
