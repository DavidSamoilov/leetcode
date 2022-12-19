/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     let ransomNoteChars = {};

  
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];
    if (ransomNoteChars[char]) {
      ransomNoteChars[char]++;
    } else {
      ransomNoteChars[char] = 1;
    }
  }

  // Loop through magazine and decrement the frequency of each character
  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    if (ransomNoteChars[char]) {
      ransomNoteChars[char]--;
    }
  }

  // Check if all characters in ransomNote have a frequency of 0
  for (let char in ransomNoteChars) {
    if (ransomNoteChars[char] > 0) {
      return false; // At least one character in ransomNote has a non-zero frequency
    }
  }

  return true; // All characters in ransomNote have a frequency of 0
};