var levelOrder = function (root) {
    if (!root) return []
    const result = []
    function DFS(node, level) {
        if (!node) return
        if (result[level]) {
            result[level].push(node.val)
        } else {
            result[level] = [node.val]
        }
        DFS(node.left, level + 1)
        DFS(node.right, level + 1)
    }
    DFS(root, 0)
    return result
};