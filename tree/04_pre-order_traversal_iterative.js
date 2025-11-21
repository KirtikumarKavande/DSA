var preorderTraversal = function (root) {
    const stack = [root]
    const result = []
    if (!root) return []
    while (stack.length) {
        const top = stack.pop()
        result.push(top.val)

        if (top?.right?.val) {
            stack.push(top.right)
        }
        if (top?.left?.val) {
            stack.push(top.left)
        }

    }
    return result

};