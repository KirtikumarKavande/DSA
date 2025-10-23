var invertTree = function (root) {

    function DFS(root) {
        if (!root) return
        const temp = root.left
        root.left = root.right
        root.right = temp

        DFS(root.left)
        DFS(root.right)
    }
    DFS(root)
    return root
};