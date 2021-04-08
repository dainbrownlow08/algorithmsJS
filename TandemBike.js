function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest) {
    let total = 0;
    let reds = redShirtSpeeds.sort((a, b) => a - b);
    let blues = blueShirtSpeeds.sort((a, b) => b - a);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (reds[i] > blues[i]) {
        total += reds[i];
      } else {
        total += blues[i];
      }
    }
    return total;
  } else {
    let total = 0;
    let reds = redShirtSpeeds.sort((a, b) => a - b);
    let blues = blueShirtSpeeds.sort((a, b) => a - b);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (reds[i] > blues[i]) {
        total += reds[i];
      } else {
        total += blues[i];
      }
    }
    return total;
  }
}
