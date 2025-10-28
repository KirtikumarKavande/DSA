var diameterOfBinaryTree = function (root) {
    let max = 0
    function DFS(node) {
        if (!node) return 0

        const left = DFS(node.left)
        const right = DFS(node.right)
        const sum = left + right
        if (sum > max) {
            max = sum
        }
        return 1 + Math.max(left, right)
    }
    DFS(root)
    return max

};