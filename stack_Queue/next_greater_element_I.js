// time complexity is O(n*m)==>O(n^2)
var nextGreaterElement = function(nums1, nums2) {
    let result=[]
    for(let i=0;i<nums1.length;i++){
        let matchedIndex=-1
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                matchedIndex=j
            }
            if(matchedIndex!==-1 && j>matchedIndex && nums2[j]>nums1[i]){
                result.push(nums2[j])
                break
            }
            if(j===nums2.length-1){
                result.push(-1)
            }
        }
    }
    return result 
};