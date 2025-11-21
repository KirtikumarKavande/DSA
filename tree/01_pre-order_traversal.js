var preorderTraversal = function (root) {

    const result = []
    function traversal(currNode) {
        if (!currNode) return
        result.push(currNode.val)
        traversal(currNode.left)
        traversal(currNode.right)
    }

    traversal(root)

    return result;
};