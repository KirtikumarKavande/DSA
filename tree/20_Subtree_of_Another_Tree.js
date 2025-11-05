
var isSubtree = function (root, subRoot) {
    let result = false
    function DFS(node, subNode) {
        if (!node) return
        if (isSameTree(node, subNode)) {
            result = true
            return true
        }
        function isSameTree(a, b) {
            if (!a && !b) return true
            if (!a || !b) return false

            return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
        }

        DFS(node.left, subRoot)
        DFS(node.right, subRoot)
    }

    if (!root) return false

    DFS(root, subRoot)
    return result

};






