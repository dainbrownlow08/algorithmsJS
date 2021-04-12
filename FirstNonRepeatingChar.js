function firstNonRepeatingCharacter(string) {
  let chars = {};
  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      chars[string[i]] += 1;
    } else {
      chars[string[i]] = 1;
    }
  }

  for (let j = 0; j < string.length; j++) {
    if (chars[string[j]] === 1) return j;
  }
  return -1;
}
