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

// approach using stack

var nextGreaterElement = function(nums1, nums2) {
    let lastEle=nums2[nums2.length-1]
    // All integers in nums1 and nums2 are unique so we can do
    let map={[lastEle]:-1}

    let stack=[lastEle]

    for(let i=nums2.length-2;i>=0;i--){
        let top=stack[stack.length-1]
        if(top>nums2[i]){
            map[nums2[i]]=top
            stack.push(nums2[i])
        }else{
                stack.pop()
                top=stack[stack.length-1]
            while(top<nums2[i] && stack.length){
                stack.pop()
                top=stack[stack.length-1]
            }

            if(stack.length===0){
                stack.push(nums2[i])
                
                 map[nums2[i]]=-1
            }else{
                stack.push(nums2[i])

                map[nums2[i]]=top
            }
        }
    }
    for(let i=0;i<nums1.length;i++){
        nums1[i]=map[nums1[i]]
    }
    return nums1
};

// more cleaner approach using stack


var nextGreaterElement = function(nums1, nums2) {
    const map = {};
    const stack = [];
    
    // Process nums2 from right to left to find next greater elements
    for (let i = nums2.length - 1; i >= 0; i--) {
        const current = nums2[i];
        
        // Pop elements from stack that are smaller than current
        while (stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
        }
        
        // The next greater element is the top of stack (or -1 if empty)
        map[current] = stack.length > 0 ? stack[stack.length - 1] : -1;
        
        // Push current element to stack
        stack.push(current);
    }
    
    // Map nums1 elements to their next greater elements
    return nums1.map(num => map[num]);
};