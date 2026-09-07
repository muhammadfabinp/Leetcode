var findMedianSortedArrays = function(nums1, nums2) {
    
    let arr=nums1.concat(nums2)
    arr.sort((a,b)=>{
     return a-b
    })
   let m=(arr.length-1)/2
   let i=Math.floor((arr.length-1)/2)
    if(arr.length%2==0){
         m= (arr[i]+arr[i+1])/2
 return m
      
    }else{
 return arr[m]
    }
};