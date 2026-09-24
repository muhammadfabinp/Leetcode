/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr=nums
    let result=nums.map((a)=>{
        arr.push(a)
    })
    return arr
};