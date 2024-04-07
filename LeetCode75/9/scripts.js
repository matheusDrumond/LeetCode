/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // declaring an array that will keep the current letter during the loop
  let char = [chars[0]];

  // the foundChars array will keep track of the sequences of letters and the length of them
  let foundChars = [];

  // now, it's time to run a loop that will go through the array
  for (let i = 1; i <= chars.length; i++) {
    // if the current letter is different from the last one, it means that a sequence is over and a new one is starting
    if (chars[i] !== chars[i - 1]) {
      // so, we get the length of the old sequence
      let length = `${char.length}`;
      // we add the old letter in the foundChars array
      foundChars.push(chars[i - 1]);
      // and if the length is bigger than 1, we add it right after the letter
      if (char.length > 1) {
        foundChars.push(...length.split(""));
      }
      // after we tracked the old sequence and added it to the array, we ca start a new sequence with the current letter
      char = [chars[i]];
    }
    // if the current letter is equal to the previous one, we just add it to the array to increase the sequence
    else {
      char.push(chars[i]);
    }
  }

  // then, we make the original array empty
  while (chars.length > 0) {
    chars.pop();
  }
  // and fill it with the foundChars elements
  for (let i = 0; i < foundChars.length; i++) {
    chars.push(foundChars[i]);
  }

  // returning chars length
  return chars.length;
};
