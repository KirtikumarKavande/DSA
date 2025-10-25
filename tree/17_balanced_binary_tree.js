var isBalanced = function (root) {
    let result = true
    function DFS(node) {
        if (!node) return 0
        const left = 1 + DFS(node.left)
        const right = 1 + DFS(node.right)
        const ans = Math.abs(left - right)
        if (ans > 1) {
            result = false
        }
        return Math.max(left, right)
    }

    DFS(root)
    return result
};   