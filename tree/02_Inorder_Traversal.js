var inorderTraversal = function(root) {
    const arr=[]
    function traversal(currNode) {
        if(!currNode) return
            traversal(currNode.left)
            arr.push(currNode.val)
            traversal(currNode.right)
    }
    traversal(root)

    return arr
    
};