/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // turning the given string into an array separated by the spaces
  s = s.split(/\s+/); // the split method separates the string according to a separator thats defined by the /\s+/ regex that selects one or more spaces

  // if the string initiates with more than one or more spaces, it can result in "" elements in the beggining or in the end of the array, so we are taking them of
  if (s[0] === "") s.shift();
  if (s[s.length - 1] === "") s.pop();

  // now we finally can reverse the array of strings and then put them together in a single string with spaces between them
  return s.reverse().join(" ");
};
