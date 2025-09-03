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