// o(n)
// if stored in hash return val, otherwise return -1

function firstDuplicateValue(array) {
  let numHash = {};
  for (let i = 0; i < array.length; i++) {
    if (numHash[array[i]]) {
      return array[i];
    } else {
      numHash[array[i]] = true;
    }
  }
  return -1;
}
