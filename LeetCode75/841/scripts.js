/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    // This Set is going to store the visited rooms
    const visited = new Set();

    // This function is our dfs implementation that will go through the rooms
    function dfs(room) {
        // First of all, we add the room to the visited rooms Set
        visited.add(room);

        // Then, we go through each one of the keys in this room
        for (let key of rooms[room]) {
            // If the key opens a door of a room we haven't visited yet, we go to this room and repeat this process
            if (!visited.has(key)) {
                dfs(key);
            }
        }
    }

    // We start the search at the first room
    dfs(0);

    // If the number of visited rooms is the same as the number of rooms, then we visited all of them
    return visited.size === rooms.length;
}
