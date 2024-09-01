/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // these objects will keep the frequency of the rows and columns
    let columns = {};
    let rows = {};
    // this variable will keep track of the nmber os pairs
    let pairs = 0;

    // this loop will fill the objects
    for (let i = 0; i < grid.length; i++) {
        // this variable get the numbers with the same index inside the rows and make the columns
        // then, we turn the array into a string
        let column = grid.map(row => row[i]).join("_");
        // meanwhile, we also turn the row into an array
        let row = grid[i].join("_")

        // if the column/row is repeated we increase its count in the object
        // if it appears for the first time we put it in the object
        columns[column] ? columns[column]++ : columns[column] = 1
        rows[row] ? rows[row]++ : rows[row] = 1
    }

    // now that we have the frequencies, we check if it appears in the columns and rows
    // if it appears, we multiply the times it appears in each object
    for(let row of Object.keys(rows)){
        // this verification is to see if the property 'row'(that is dinamic)
        // is a key of columns, it means to verify if the row is present in both objects
        if(row in columns){
            // in this case, the number of pairs increases n
            // where n is the product of the frequencies in both objects
            pairs += rows[row] * columns[row]
        }
    }
    
    // in the end we return the pairs count
    return pairs
};