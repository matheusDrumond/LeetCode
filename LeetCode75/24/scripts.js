/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    // first of all, we are going to turn the string into an array to manipulate it
    const chars = s.split("");
    // then, we create a stack to store the characters from the original array that are not stars
    const result = [];

    // now, this loop will iterate the array checking it
    for (let i = 0; i < chars.length; i++) {
        // if the current character is not a star, we put it in the stack "result"
        if (chars[i] !== "*") {
            result.push(chars[i]);
        } 
        // otherwise, if it is a star we remove the last added character from the stack 
        // this operation is deleting the character that would be the left-sided one
        else if (result.length > 0) {
            result.pop();
        }
    }

    // in the end, we have a stack that stores the characters different from stars
    // and also those that were not placed in their left sides at any moment
    // so we turn the stack into a string and return it
    return result.join("");
};
