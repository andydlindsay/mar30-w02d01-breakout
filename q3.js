/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create initial object
  const nums = {};

  // iterate through array
  for (const el of arr) {
    if (nums[el]) {
      // if we have seen the number before, increment the value
      nums[el] += 1;
    } else {
      // if we haven't seen the number before, set initial value to 1
      nums[el] = 1;
    }
  }

  let highest = -Infinity;
  let highestKey = null;

  // iterate through the object
  for (const key in nums) {
    // find the key that has the highest value
    if (nums[key] > highest) {
      highest = nums[key];
      highestKey = key;
    }
  }

  // return the key (converted to number?)
  // return +highestKey;
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };
