var zigzagLevelOrder = function (root) {
    if (!root) return []
    const q = [root]
    const result = []
    let isLeftToRight = true
    while (q.length) {
        const level = q.length
        const levelValues = new Array(level)
        for (let i = 0; i < level; i++) {
            const node = q.shift()
            const index = isLeftToRight ? i : level - i - 1
            levelValues[index] = node.val

            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        result.push(levelValues)
        isLeftToRight = !isLeftToRight

    }

    return result

};