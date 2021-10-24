/*Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:*/

/*Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]*/

function generate(numRows: number): number[][] {
  let ans = [];
  if (numRows == 1) {
    return [[1]];
  } else if (numRows == 2) {
    return [[1], [1, 1]];
  }
  let prev = [1, 1];
  for (let i = 0; i < numRows; i++) {
    let curr = [1];
    curr[i] = 1;
    for (let j = 1; j < i; j++) {
      curr[j] = prev[j - 1] + prev[j];
    }
    ans.push(curr);
    prev = curr;
  }
  return ans;
}

console.log(generate(5));

