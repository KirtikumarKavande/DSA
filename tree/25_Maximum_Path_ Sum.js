//notes

var maxPathSum = function (root) {
    let maxSum = root.val
    function DFS(node) {

        if (!node) return 0

        const leftSum = DFS(node.left)
        const rightSum = DFS(node.right)

        maxSum = Math.max(node.val + leftSum + rightSum, maxSum)

        return Math.max(node.val + leftSum, node.val + rightSum, 0)
    }

    DFS(root)
    return maxSum


}
