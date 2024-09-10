/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
    // This is going to be the graph we'll use
    const graph = {};

    // Function to add the edges to the graph
    function addEdge(numerator, denominator, value) {
        if (!graph[numerator]) {
            graph[numerator] = {};
        }
        if (!graph[denominator]) {
            graph[denominator] = {};
        }
        graph[numerator][denominator] = value;
        graph[denominator][numerator] = 1 / value;
    }

    // Build the graph based on equations and values
    for (let i = 0; i < equations.length; i++) {
        const [numerator, denominator] = equations[i];
        const value = values[i];
        addEdge(numerator, denominator, value);
    }
    console.log(graph);

    // dfs function to traverse our tree
    function dfs(numerator, denominator, visited) {
        // If the numerator is not in the graph, return -1.0
        if (!(numerator in graph)) {
            return -1.0;
        }

        // If numerator equals denominator, return 1.0 (x / x = 1)
        if (numerator === denominator) {
            return 1.0;
        }

        visited.add(numerator);

        // Explore the neighbors
        for (let neighbor in graph[numerator]) {
            if (visited.has(neighbor)) {
                continue;
            }
            const result = dfs(neighbor, denominator, visited);
            if (result !== -1.0) {
                return result * graph[numerator][neighbor];
            }
        }

        return -1.0;
    }

    // Evaluate each query
    const results = [];
    for (let [numerator, denominator] of queries) {
        if (numerator === denominator && numerator in graph) {
            results.push(1.0);
        } else {
            results.push(dfs(numerator, denominator, new Set()));
        }
    }

    return results;
}
