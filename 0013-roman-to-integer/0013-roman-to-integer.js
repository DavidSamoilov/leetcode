/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];

    if (
      (char === 'I' && (nextChar === 'V' || nextChar === 'X')) ||
      (char === 'X' && (nextChar === 'L' || nextChar === 'C')) ||
      (char === 'C' && (nextChar === 'D' || nextChar === 'M'))
    ) {
      result += map[nextChar] - map[char];
      i++;
    } else {
      result += map[char];
    }
  }

  return result;
};