/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr=[]
    let add=0;
    let rich=0
    for(let key of accounts){
        for(let i of key){
            add+=i
           
        }
 arr.push(add)
 add=0
    }
   for(let k of arr){
    if(k > rich){
        rich=k
    }
   }
   return rich
};