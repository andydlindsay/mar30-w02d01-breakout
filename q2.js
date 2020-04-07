/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

const median = function(arr) {
  // sort the array
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);

  // find the middle index
  const middleIndex = Math.floor(newArr.length / 2);

  // check if array length is even
  if (newArr.length % 2 === 0) {
    // round the result
    // [1, 2, 3, 4]
    const sum = newArr[middleIndex] + newArr[middleIndex - 1];
    return round(sum / 2);
  } else {
    // return the result
    return newArr[middleIndex];
  }
};

// Don't change below:
module.exports = { median };
