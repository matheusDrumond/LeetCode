let lengthOfLastWord = function (s) {
    // This variable is going to verify when the last letter appears, to know where the last word ends
    let lastLetter = false;
    // And here we are keeping track of the number of letters in the last word
    let count = 0;

    // We are calculating the last index of the word, to avoid calculating it in every iteration
    const n = s.length - 1;
    // The loop will go through the string
    for (let i = n; i > -1; i--) {
        // Verifying, this is the last letter
        if (s[i] != " " && !lastLetter) {
            lastLetter = true;
            count++;
        }
        // This means that the last word is finished and we return the number of letters
        else if (s[i] == " " && lastLetter) {
            return count;
        }
        // If we started checking the last word and we haven't found a space yet, we should keep counting the letters
        else if (s[i] != " " && lastLetter) {
            count++;
        }
    }

    // In case that the last word is the only word and there's no space before it, we return the count
    return count;
};
