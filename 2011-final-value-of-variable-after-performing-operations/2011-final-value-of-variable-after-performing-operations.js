/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let sum = 0;
    let result=operations.map((a)=>{
        if(a=== "--X" || a === "X--"){
            sum-=1
        }
        else if( a=== "X++" || a=== "++X"){
            sum+=+1
        }
       
    })
     return sum
};