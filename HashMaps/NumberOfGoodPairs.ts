/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0

*/

nums = [1, 2, 3, 1, 1, 3];

function numIdenticalPairs(nums: number[]): number {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
      count = count + map.get(nums[i]);
    }
  }

  return count;
}

console.log(numIdenticalPairs(nums));
