var isSameTree = function (p, q) {

    function isSame(p, q) {
        if (!p && !q) return true
        if (!p || !q) return false
        return p.val === q.val && isSame(p.left, q.left) && isSame(p.right, q.right)
    }
    return isSame(p, q)
};