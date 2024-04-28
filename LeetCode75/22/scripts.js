/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */


// this resolution didn't had an amazing performance
// although i decided to keep it 'cause i liked the path i got to solve the problem

var closeStrings = function (word1, word2) {
  // if the words have different lengths, they are not close
  if (word1.length !== word2.length) {
      return false
  }

  // now we have two Sets that only contain the letters once each
  let set1 = new Set(word1)
  let set2 = new Set(word2)

  // then, we create two hash tables that are going to track how many times each letter appears
  let map1 = new Object()
  let map2 = new Object()

  // in these loops  we verify if the letters are present in both words
  // if they aren't, we can declare that the words are not close, 'cause they have to contain the same leters
  // if they are, we increase the frequence in the map that that letter appears 
  for (let char of word1) {
      if (!set2.has(char)) {
          return false
      } else {
          if (map1[char] > 0) {
              map1[char]++
          } else {
              map1[char] = 1
          }
      }
  }
  for (let char of word2) {
      if (!set1.has(char)) {
          return false
      } else {
          if (map2[char] > 0) {
              map2[char]++
          } else {
              map2[char] = 1
          }
      }
  }

  // now, we create two sorted arrays that contains the frequencesm of the letters
  let frequences1 = Object.values(map1).sort((a, b) => a - b)
  let frequences2 = Object.values(map2).sort((a, b) => a - b)


  // if the frequences are not equal, the words are not close
  // 'cause they won't be able to be ordenated by the operation 2
  for (let i = 0; i < frequences1.length; i++) {
      if (frequences1[i] !== frequences2[i]) {
          return false
      }
  }

  // after all the verifications, if the words pass through all, they are close
  return true
};