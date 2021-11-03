/*Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

*/

let arr = [1, 2, 2, 1, 1, 3];
//let arr = [1, 2];

function uniqueOccurrences(arr: number[]): boolean {
  let result: boolean;

  let map1 = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map1.has(arr[i])) {
      map1.set(arr[i], map1.get(arr[i]) + 1);
    } else {
      map1.set(arr[i], 1);
    }
  }

  for (let iteration of map1.entries()) {
    console.log(iteration[0], iteration[1]);
  }

  console.log('****************************************++');

  /*The Set object lets you store unique values of any type, whether primitive values or object references.*/

  const uniqueValues = new Set(map1.values());

  for (let val of map1.keys()) {
    //  uniqueValues.add(val);
  }

  for (let item of uniqueValues) console.log(item);

  if (uniqueValues.size === map1.size) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(uniqueOccurrences(arr));
