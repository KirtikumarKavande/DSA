var connect = function (root) {
    if (!root) return root;

    const q = [root]
    while (q.length) {
        const qLength = q.length
        for (let i = 0; i < qLength; i++) {
            const node = q.shift()
            if (i === qLength - 1) {
                node.next = null

            } else {
                node.next = q[0]
            }
            if (node.left) {
                q.push(node.left, node.right)
            }

        }

    }
    return root

};

//approach 2 without using q[0]
var connect = function (root) {
    if (!root) return root

    const q = [root]
    while (q.length) {
        let prev = null
        const len = q.length
        for (let index = 0; index < len; index++) {
            const node = q.shift()
            if (node.left) {
                q.push(node.left, node.right)
            }
            if (prev) {
                prev.next = node
            }
            prev = node

        }
        prev.next = null
    }

    return root


}

// approach3 recursion

var connect = function (root) {
    if (!root) return root
    const stack = []

    function BFS(node, level) {
        if (!node) return
        if (!stack[level]) {
            stack[level] = [node];
            node.next = null
            // above no need to point to null it will automatically handled by leetCode
        } else {
            const top = stack[level].pop()
            top.next = node
            stack[level].push(node)
            node.next = null
            // above no need to point to null it will automatically handled by leetCode

        }

        BFS(node.left, level + 1)
        BFS(node.right, level + 1)

    }
    BFS(root, 0)
    return root
}


// approach 4 without using extra space

var connect = function (root) {
    if (!root) return root
    let node = root
    while (node.left) {
        node.left.next = node.right
        let currentNode = node

        while (currentNode.next) {
            currentNode.right.next = currentNode.next.left
            currentNode = currentNode.next
            currentNode.left.next = currentNode.right
        }
        node = node.left
    }
    return root
}