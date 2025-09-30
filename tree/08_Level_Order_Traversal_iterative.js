var levelOrder = function (root) {
    if (!root) return []
    const q = [[root]]
    const result = []
    while (q.length) {
        const arr = q.shift()
        const subResult = []
        const sameLevel = []
        for (let x of arr) {
            if (x) {
                subResult.push(x.val)
            }
            if (x?.left) {
                sameLevel.push(x.left)
            }
            if (x?.right) {
                sameLevel.push(x.right)
            }
        }
        if (subResult.length) {
            result.push(subResult)
        }
        if (sameLevel.length > 0) {
            q.push(sameLevel)
        }
    }
    return result
};