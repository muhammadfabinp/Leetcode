/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[]
    for(let j=0;j<nums.length;j++){
        for(let i=j + 1 ; i < nums.length ; i++){
            if(nums[j] + nums[i] === target){
arr.push(j)
arr.push(i)
       return arr;
            }
        }
    }
    return arr
};