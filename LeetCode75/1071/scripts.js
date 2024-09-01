/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // function to find the GCD between 2 numbers
  function gcd(a, b) {
    // if b is 0, a is the GCD
    if (b === 0) return a;
    // recursively apply the Euclidean algorithm
    return gcd(b, a % b);
  }

  // function to discover if a string can be formed by repetitions of a pattern
  const isRep = (str, pattern) => {
    // if the string's length is not a multiple of the pattern's length,
    // it can't be a repetition of the pattern, so return false
    if (str.length % pattern.length !== 0) {
      return false;
    }
    // calculate how many times the pattern should be repeated
    const times = str.length / pattern.length;
    // check if repeating the pattern 'times' times equals the string
    return str === pattern.repeat(times);
  };

  // find the GCD of the lengths of the two strings
  let lenGcd = gcd(str1.length, str2.length);
  // extract the substring from str1 that might be the repeating pattern
  let potentialGcd = str1.substring(0, lenGcd);

  // check if the extracted substring, when repeated, can form both str1 and str2
  if (isRep(str1, potentialGcd) && isRep(str2, potentialGcd)) {
    // If true, return the potential GCD (the repeating pattern)
    return potentialGcd;
  }

  // if there's no common pattern that forms both strings, return an empty string
  return "";
};
