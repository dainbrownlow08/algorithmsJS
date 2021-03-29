// Think multiple linear traversals - still better than o(n^2)
// product of excluded index means product of all to the right * all to the left

function arrayOfProducts(array) {
  let sumArr = [];
  let lefts = [];
  let rights = [];
  let rightProduct = 1;
  let leftProduct = 1;

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      lefts[i] = 1;
      leftProduct *= array[i];
    } else {
      lefts[i] = leftProduct;
      leftProduct *= array[i];
    }
  }

  for (let j = array.length - 1; j >= 0; j--) {
    if (j == array.length - 1) {
      rights[j] = 1;
      rightProduct *= array[j];
    } else {
      rights[j] = rightProduct;
      rightProduct *= array[j];
    }
  }

  for (let f = 0; f < array.length; f++) {
    sumArr[f] = rights[f] * lefts[f];
  }

  return sumArr;
}
