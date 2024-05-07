/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // initialize an empty stack to store characters.
    let stack = [];
    
    // This loop wil iterate through each character from the string
    for (let char of s) {
        // if the current character is not ']', push it onto the stack
        if (char !== ']') {
            stack.push(char);
        }    
        // if the current character is ']', we'll start decoding the string
        else {

            // declaring an empty string to store the encoded part
            let encodedString = '';      
            // pop characters from the stack until '[' is encountered.
            let currentChar = stack.pop();
            while (currentChar !== '[') {
                encodedString = currentChar + encodedString;
                currentChar = stack.pop();
            }
            // extract the number 'k' from the stack.
            let num = '';
            currentChar = stack.pop();
            while (!isNaN(currentChar)) {
                num = currentChar + num;
                currentChar = stack.pop();
            }
            // push the decoded string 'k[encoded_string]' back onto the stack.
            stack.push(currentChar); // push the character before '['
            stack.push(encodedString.repeat(parseInt(num))); // push the decoded string repeated 'k' times.
        }
    }
    // join the characters remaining in the stack to form the decoded string and return it.
    return stack.join('');
};
