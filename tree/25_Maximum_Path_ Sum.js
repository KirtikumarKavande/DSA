

var maxPathSum = function (root) {
    let maxSum = root.val
    function DFS(node) {

        if (!node) return 0

        const left = DFS(node.left)
        const right = DFS(node.right)

        maxSum = Math.max(node.val + left + right, maxSum)

        return Math.max(node.val + left + right, 0)
    }

    DFS(root)
    return maxSum

}