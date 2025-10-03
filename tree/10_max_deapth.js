var maxDepth = function (root) {
    function DFS(node) {
        if (!node) return 0
        const leftMax = 1 + DFS(node.left)
        const rightMax = 1 + DFS(node.right)

        return Math.max(leftMax, rightMax)
    }
    return DFS(root)
};