function smallestDifference(arrayOne, arrayTwo) {
  let sortedOne = arrayOne.sort((a, b) => a - b);
  let sortedTwo = arrayTwo.sort((a, b) => a - b);

  let diffArr = [];
  let currentLow = 1000;
  let onePointer = 0;
  let twoPointer = 0;
  while (
    onePointer <= sortedOne.length - 1 &&
    twoPointer <= sortedTwo.length - 1
  ) {
    if (Math.abs(sortedOne[onePointer] - sortedTwo[twoPointer]) < currentLow) {
      diffArr = [sortedOne[onePointer], sortedTwo[twoPointer]];
      currentLow = Math.abs(sortedOne[onePointer] - sortedTwo[twoPointer]);
    }
    if (sortedOne[onePointer] >= sortedTwo[twoPointer]) {
      twoPointer += 1;
    } else {
      onePointer += 1;
    }
  }
  return diffArr;
}
