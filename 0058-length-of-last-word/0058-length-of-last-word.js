/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a=s.trim().split(" ")
    let result=a[a.length-1].length
    return result
};
