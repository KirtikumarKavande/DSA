var rightSideView = function (root) {
    const result = []
    function DFS(node, level) {
        if (!node) return
        if (result[level] === undefined) {
            result[level] = node.val
        }
        DFS(node.right, level + 1)
        DFS(node.left, level + 1)
    }


    DFS(root, 0)

    return result
};