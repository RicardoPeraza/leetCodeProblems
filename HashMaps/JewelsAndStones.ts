/*You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".*/

/*Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0*/

let jewels = 'aA',
  stones = 'aAAbbbb';

function numJewelsInStones(jewels: string, stones: string): number {
  let result = 0;
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < stones.length; i++) {
    map1.set(i, stones.charAt(i));
  }

  for (let i = 0; i < jewels.length; i++) {
    map2.set(i, jewels.charAt(i));
  }

  for (let entry of map1.values()) {
    for (let i = 0; i < jewels.length; i++) {
      if (entry === map2.get(i)) {
        result++;
      }
    }
  }

  return result;
}

console.log(numJewelsInStones(jewels, stones));
