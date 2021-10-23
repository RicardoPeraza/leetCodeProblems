/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

/*Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]*/

let nums = [2, 7, 11, 15];
let target = 9;

function twoSum2(nums: number[], target: number): number[] {
  let result: any[] = [];
  let map1 = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map1.has(target - nums[i])) {
      result[1] = i;
      result[0] = map1.get(target - nums[i]);
      return result;
    }
    map1.set(nums[i], i);
  }
  return result;
}

console.log(twoSum2(nums, target));
