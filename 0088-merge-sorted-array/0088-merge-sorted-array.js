/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let arr=[]
    for(let i=0 ; i <m ; i++){
        arr.push(nums1[i])
    }
    for(let k =0 ; k <n ; k++){
        arr.push(nums2[k])
    }

arr.sort((a, b) => a - b);

 for(let i = 0; i < arr.length; i++){
        nums1[i] = arr[i];
    }


};