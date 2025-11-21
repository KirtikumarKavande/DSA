var postorderTraversal = function (root) {

    if (!root) return []
    const result = []
    const stack = [root]
    let lastVisited = ""
    let currentNode = root
    while (stack.length) {
        while (currentNode?.left) {
            currentNode = currentNode?.left
            stack.push(currentNode)
        }
        const topNode = stack[stack.length - 1]
        if (topNode?.right && lastVisited !== topNode.right) {
            currentNode = topNode.right
            stack.push(currentNode)
        } else {
            lastVisited = stack.pop()
            result.push(lastVisited.val)
        }
    }
    return result
};