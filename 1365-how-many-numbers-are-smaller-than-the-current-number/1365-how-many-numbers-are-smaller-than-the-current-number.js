/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr=[]
  
    
    for(let i = 0 ; i< nums.length ; i++){
          let b=0
        for(let a = 0 ; a <nums.length ; a++){
            if(nums[a] < nums[i]){
                b++;
             
               
            }
        
        } 
         arr.push(b)
    }
return arr
};