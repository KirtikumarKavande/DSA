
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


// approach two 
var isSubtree = function (root, subRoot) {
    if (!root) return false
    function isSameTree(node, subNode) {
        // return true or false

        if (!node && !subNode) return true
        if (!node || !subNode) return false

        return node.val === subNode.val && isSameTree(node.left, subNode.left) && isSameTree(node.right, subNode.right)
    }
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

}

// approach 3-serialization
//      A
//    /   \
//   B     C
//  / \
// D   E


// ,A,B,D,#,#,E,#,#,C,#,#

// serialize both root and subRoot



var isSubtree = function (root, subRoot) {

    function serialization(node) {

        if (!node) return '#'

        const left = serialization(node.left)
        const right = serialization(node.right)

        return `,${node.val},${left},${right}`

    }
    const serializedRoot = serialization(root)
    const serializedSubRoot = serialization(subRoot)
    return serializedRoot.includes(serializedSubRoot) ? true : false

}

