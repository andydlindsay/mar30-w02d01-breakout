/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => total + curr, 0);
};

const stdev = function(arr) {
  // stdev = sqrt(sum((el - populationMean)^2)/numberOfValues)

  // number of values
  const numberOfValues = arr.length;

  // average of the array
  const populationMean = sum(arr) / numberOfValues;

  // iterate through the array
  const deviations = arr.map((el) => {
    // calculate deviations from mean
    return Math.pow(el - populationMean, 2);
  });

  const total = deviations.reduce((total, curr) => total + curr, 0);
  const variance = total / numberOfValues;
  const stdDev = Math.sqrt(variance);
  return round(stdDev);
};

// Don't change below:
module.exports = { stdev };
