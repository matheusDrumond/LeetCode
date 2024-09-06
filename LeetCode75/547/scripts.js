/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    // This variable is going to keep track of how many provinces were found
    let provinces = 0;

    // This set will keep track of the cities we already checked
    let checked = new Set();

    // Here is the dfs function implemented to check the cities
    const dfs = (city) => {
        // First of all, we add it to the list of checked functions
        checked.add(city);

        // This loop will go through its possible connected cities
        for (let i = 0; i < isConnected[city].length; i++) {
            // If the city is connected and we haven't checked it yet, let's check it
            if (isConnected[city][i] === 1 && !checked.has(i)) {
                // We will keep ooking until we find the end of the province
                dfs(i);
            }
        }
    };

    // Finally, this loop will go through the cities to find new provinces
    for (let j = 0; j < isConnected.length; j++) {
        // If we haven't checkes the city yet, it means that we are starting a new province
        if (!checked.has(j)) {
            // Increases the provinces count
            provinces++;
            // Checks it to go until its end;
            dfs(j);
        }
    }

    // In the end we return the number of provinces
    return provinces;
};
