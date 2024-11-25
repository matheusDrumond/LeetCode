let isPalindrome = function (s) {
    // Helper function to determine if a character is alphanumeric
    // Uses charCodeAt to check ASCII ranges for digits (0-9), uppercase (A-Z), and lowercase (a-z)
    const isAlphanumeric = (char) => {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || // ASCII range for '0' to '9'
            (code >= 65 && code <= 90) || // ASCII range for 'A' to 'Z'
            (code >= 97 && code <= 122)
        ); // ASCII range for 'a' to 'z'
    };

    // Initialize two pointers: one at the start of the string, the other at the end
    let left = 0;
    let right = s.length - 1;

    // Continue until the two pointers meet in the middle
    while (left < right) {
        // Move the left pointer forward until it points to an alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        // Move the right pointer backward until it points to an alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare the characters at the two pointers (case-insensitively)
        // Convert to lowercase before comparing to ensure case doesn't matter
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            // If characters do not match, it's not a palindrome
            return false;
        }

        // Move both pointers closer to the center for the next comparison
        left++;
        right--;
    }

    // If the loop completes without returning false, the string is a palindrome
    return true;
};
