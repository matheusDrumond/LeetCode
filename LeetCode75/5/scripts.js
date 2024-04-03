/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // turning the string into an array, to manipulate it
  let str = s.split("");
  // declaring the pointers that will go through the array
  let left = 0;
  let right = str.length - 1;
  // declaring the array that includes all the vowels, also in uppercase
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // defining a loop that will run while the left pointer is smallest
  while (left < right) {
    // if the left pointer is not a vowel, keep the pointer increasing
    while (left < right && !vowels.includes(str[left])) {
      left++;
    }
    // if the right pointer is not a vowel, keep the pointer descreasing
    while (left < right && !vowels.includes(str[right])) {
      right--;
    }
    // if the pointers are vowels, we swap them
    let temp = str[left]; // declaring a temporary variable that will keep the value of the first vowel
    str[left] = str[right]; // turn the first vowel into the second
    str[right] = temp; // using the 'temp' variable to get the value of the first vowel and substitue it in the second
    // keep the pointers running
    left++;
    right--;
  }
  // turning the array into a string and returning it
  return str.join("");
};
