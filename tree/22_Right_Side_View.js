var rightSideView = function (root) {
    const result = []
    function DFS(node, level) {
        if (!node) return
        if (result[level] === undefined) {
            result[level] = node.val
        }
        DFS(node.right, level + 1)
        DFS(node.left, level + 1)
    }


    DFS(root, 0)

    return result
};

// approach 2

const rightSideView = (
    root,
    answer = [],
    depth = 0
) => {
    if (!root) return answer;
    answer[depth] = root.val;
    rightSideView(root.left, answer, depth + 1);
    return rightSideView(root.right, answer, depth + 1);
};