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

