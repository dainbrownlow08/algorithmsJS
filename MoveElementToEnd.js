function moveElementToEnd(array, toMove) {
  let counter = 0;
  let i = 0;
  while (i < array.length) {
    if (array[i] === toMove) {
      array.splice(i, 1);
      counter++;
    } else {
      i++;
    }
  }
  for (let j = 0; j < counter; j++) {
    array.push(toMove);
  }
  return array;
}
