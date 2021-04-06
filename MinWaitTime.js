function minimumWaitingTime(queries) {
  let sortedQueries = queries.sort((a, b) => a - b);
  let runTime = 0;
  let runningTotal = 0;
  for (let i = 1; i < sortedQueries.length; i++) {
    runningTotal = runningTotal + sortedQueries[i - 1];
    runTime += runningTotal;
  }
  return runTime;
}
