function findClosestInBstHelper(tree, target, closest) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

function findClosestValueInBst(tree, target) {
  return findClosestInBstHelper(tree, target, Infinity);
}
