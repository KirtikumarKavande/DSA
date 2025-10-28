var diameterOfBinaryTree = function (root) {
    let max = 0
    function DFS(node) {
        if (!node) return 0

        const left = DFS(node.left)
        const right = DFS(node.right)
        const sum = left + right
        if (sum > max) {
            max = sum
        }
        return 1 + Math.max(left, right)
    }
    DFS(root)
    return max

};


// understanding pass by value and pass by reference not good approach but understanding perspective


var diameterOfBinaryTree = function (root) {
    const diameter = (node, res) => {
        if (!node) return 0;

        const left = diameter(node.left, res);
        const right = diameter(node.right, res);

        res[0] = Math.max(res[0], left + right);

        return Math.max(left, right) + 1;
    }

    const res = [0];
    diameter(root, res);
    return res[0];
};

