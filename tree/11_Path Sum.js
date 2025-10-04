var hasPathSum = function (root, targetSum) {
    if (!root) return false


    function DFS(node, totalSum) {
        totalSum += node.val

        if (!node.left && !node.right) {
            if (totalSum === targetSum) return true
            return false
        }
        let left
        let right
        if (node.left) {
            left = DFS(node.left, totalSum)
        }
        if (node.right) {
            right = DFS(node.right, totalSum)
        }
        if (left || right) {
            return true
        } else {

            return false
        }
    }

    return DFS(root, 0)
};