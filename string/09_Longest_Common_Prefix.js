var longestCommonPrefix = function (nums) {
    if (nums.length == 1) return nums[0]
    let longestPrefix = nums[0]
    while (longestPrefix.length > 0) {
        let result = nums.every((item) => item.startsWith(longestPrefix))
        if (result) {
            return longestPrefix
        } else {
            longestPrefix = longestPrefix.slice(0, -1)
        }
    }

    return longestPrefix
};


var longestCommonPrefix = function(nums) {
    if (nums.length === 0) return "";
    let prefix = nums[0];
    for (let i = 1; i < nums.length; i++) {
        while (nums[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
};