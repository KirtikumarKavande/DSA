
var postorderTraversal = function (root) {

    if (!root) return []
    const result = []
    const stack = [root]
    let lastPoppedNode = null
    let currentNode = root

    while (stack.length) {
        while (currentNode?.left) {
            currentNode = currentNode?.left
            stack.push(currentNode)
        }
        const topNode = stack[stack.length - 1]
        if (topNode?.right && lastPoppedNode) {
            currentNode = currentNode.right
        } else {
            lastPoppedNode = stack.pop()
            result.push(currentNode.val)
        }
    }

    return result
};