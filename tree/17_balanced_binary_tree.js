var isBalanced = function (root) {
    let result = true
    function DFS(node) {
        if (!node) return 0
        const left = 1 + DFS(node.left)
        const right = 1 + DFS(node.right)
        const ans = Math.abs(left - right)
        if (ans > 1) {
            result = false
        }
        return Math.max(left, right)
    }

    DFS(root)
    return result
};


// approach 2

var isBalanced = function (root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1)
            return -1;
        return Math.max(left, right) + 1;
    }
    return dfs(root) !== -1;
};