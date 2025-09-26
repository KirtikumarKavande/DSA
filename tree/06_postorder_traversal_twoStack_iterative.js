var postorderTraversal = function (root) {
    if (!root) return []
    const s1 = [root]
    const s2 = []
    while (s1.length) {

        const node = s1.pop()
        if (node?.val) {
            s2.push(node.val)
        }
        node?.left && s1.push(node.left)
        node?.right && s1.push(node.right)
    }

    return s2.reverse()

};