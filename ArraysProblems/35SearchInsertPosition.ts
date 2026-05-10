/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */


function searchInsert(nums: number[], target: number): number {

    let valor = nums.findIndex((element) => element === target);

    // Si existe, retornamos el índice
    if (valor !== -1) {
        return valor;
    }

    let indice = nums.length;

    nums.forEach((element, index) => {

        // Encontramos dónde debería insertarse
        if (target < element && indice === nums.length) {
            indice = index;
        }

    });

    return indice;
}