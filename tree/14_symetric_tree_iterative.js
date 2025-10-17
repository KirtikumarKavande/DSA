var isSymmetric = function (root) {
    if (!root) return true;
    const queue = [[root.left, root.right]];
    while (queue.length) {
        const [left, right] = queue.shift();
        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;
        queue.push([left.left, right.right]);
        queue.push([left.right, right.left]);
    }
    return true;
};