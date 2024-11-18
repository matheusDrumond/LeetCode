let romanToInt = function (s) {
    // This dictionary will store the values for each character so we can access it later
    const dictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    // 'sum' will keep track of the sum as we go through the string
    let sum = 0;
    // The length of the string
    const n = s.length;

    // The loop will go through the string checking each character
    for (let i = 0; i < n; i++) {
        // This is the value of the current char
        let current = dictionary[s[i]];
        // The value of the next char
        let next = i + 1 < n ? dictionary[s[i + 1]] : 0;

        // If the current char is less than the next one, then we need to subtract it, otherwise we just add it
        sum += current < next ? -current : current;
    }

    // Return the total sum
    return sum;
};
