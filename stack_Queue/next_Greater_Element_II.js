var nextGreaterElements = function (nums) {
    nums = [...nums, ...nums]
    let stack = [nums[nums.length - 1]]
    let ans = new Array(nums.length).fill(-1)
    for (let i = nums.length - 2; i >= 0; i--) {
        while (nums[i] >= stack[stack.length - 1]) {
            stack.pop()
        }

        if (stack.length > 0) {
            ans[i] = stack[stack.length - 1]
        }

        stack.push(nums[i])

    }
    return ans.slice(0, nums.length / 2)
};



var nextGreaterElements = function(nums) {
   let stack=[nums[nums.length-1]]
   let ans=new Array(nums.length).fill(-1)
   for(let i=2*nums.length-2;i>=0;i--){
    while(nums[i%nums.length]>=stack[stack.length-1]){
        stack.pop()
    }

    if(stack.length>0){
        ans[i%nums.length]=stack[stack.length-1]
    }

    stack.push(nums[i%nums.length])

   } 
 return ans
};