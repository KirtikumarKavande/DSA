var postorderTraversal = function (root) {
    const arr = []
    function traversal(currNode) {
        if (!currNode) return
        traversal(currNode.left)
        traversal(currNode.right)
        arr.push(currNode.val)

    }
    traversal(root)

    return arr

};