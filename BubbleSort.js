// helper function swaps positions in array

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// uses isSorted to keep track if we changed the array, if not sort is completed
// while isSorted is false, go through the entire array switching each value if the
// next value is less

function bubbleSort(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
  }
  return array;
}
