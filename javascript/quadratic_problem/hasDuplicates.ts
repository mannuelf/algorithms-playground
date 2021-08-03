/*
 * How many steps will this function take to complete the comparison
 *
 * for N values in the array, the function will perform N squared comparisons.
 *
 * perform an outer loop that iterates N times and for each iteration, we must
 * iterate another N times with the inner loop.
 *
 * thats N steps * N steps.
 *
 * O(N2) "Oh of N sqaured"
 *
 * source: https://devtalk.com/books/a-common-sense-guide-to-data-structures-and-algorithms-second-edition
 * */

function hasDuplicates(myArray: number[]): boolean {
  let steps = 0;
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; i++) {
      steps++;
      console.log('steps', steps);
      if (i !== j && myArray[i] === myArray[j]) {
        return true;
      }
    }
  }
  return false;
}

hasDuplicates([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
