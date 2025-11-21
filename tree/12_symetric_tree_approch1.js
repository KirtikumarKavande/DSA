// this is my brute force recursive approch we will in detail thing later
var isSymmetric = function (root) {
    if (!root.left && !root.right) return true

    const leftSideOfTree = []
    const rightSideOfTree = []
    function BFS(node, level, path) {
        let val = 0
        if (node?.val === 0) {
            val = 0
        } else {
            val = node?.val || null
        }

        if (path === "left") {
            leftSideOfTree[level] ? leftSideOfTree[level].push(val) : (leftSideOfTree[level] = [val])
        } else {
            rightSideOfTree[level] ? rightSideOfTree[level].push(val) : (rightSideOfTree[level] = [val])

        }

        if (node) {
            if (path === "left") {
                BFS(node.left, level + 1, path)
                BFS(node.right, level + 1, path)
            } else {

                BFS(node.right, level + 1, path)
                BFS(node.left, level + 1, path)

            }

        }
    }

    const left = BFS(root.left, 0, "left")
    const right = BFS(root.right, 0, "right")
    console.log(leftSideOfTree, rightSideOfTree)
    if (leftSideOfTree.length !== rightSideOfTree.length) return false
    for (let i = 0; i < leftSideOfTree.length - 1; i++) {
        if (JSON.stringify(leftSideOfTree[i]) !== JSON.stringify(rightSideOfTree[i])) {
            return false
        }
    }

    return true


};/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root.left && !root.right) return true

    const leftSideOfTree = []
    const rightSideOfTree = []
    function BFS(node, level, path) {
        let val = 0
        if (node?.val === 0) {
            val = 0
        } else {
            val = node?.val || null
        }

        if (path === "left") {
            leftSideOfTree[level] ? leftSideOfTree[level].push(val) : (leftSideOfTree[level] = [val])
        } else {
            rightSideOfTree[level] ? rightSideOfTree[level].push(val) : (rightSideOfTree[level] = [val])

        }

        if (node) {
            if (path === "left") {
                BFS(node.left, level + 1, path)
                BFS(node.right, level + 1, path)
            } else {

                BFS(node.right, level + 1, path)
                BFS(node.left, level + 1, path)

            }

        }
    }

    const left = BFS(root.left, 0, "left")
    const right = BFS(root.right, 0, "right")
    console.log(leftSideOfTree, rightSideOfTree)
    if (leftSideOfTree.length !== rightSideOfTree.length) return false
    for (let i = 0; i < leftSideOfTree.length - 1; i++) {
        if (JSON.stringify(leftSideOfTree[i]) !== JSON.stringify(rightSideOfTree[i])) {
            return false
        }
    }

    return true


};