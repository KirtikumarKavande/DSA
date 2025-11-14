var goodNodes = function (root) {
    let goodNode = 0

    function DFS(node, maxSoFar) {
        if (!node) return
        if (node.val >= maxSoFar) {
            goodNode++
            maxSoFar = node.val
        }
        DFS(node.left, maxSoFar)
        DFS(node.right, maxSoFar)
    }
    DFS(root, root.val)
    return goodNode

};
// without using extra variable


var goodNodes = function (root) {
    function DFS(node, maxSoFar) {
        if (!node) return 0
        let count = 0
        if (node.val >= maxSoFar) {
            count++
            maxSoFar = node.val
        }
        count = count + DFS(node.left, maxSoFar)
        count = count + DFS(node.right, maxSoFar)

        return count
    }
    return DFS(root, root.val)
}

