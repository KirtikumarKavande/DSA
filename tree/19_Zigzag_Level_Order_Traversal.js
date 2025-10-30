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




// recursive approach

var zigzagLevelOrder = function(root) {
    
const result=[]
    function BFS(node,level){
        if(!node) return 
         if(!result[level]) result[level]=[]
        if(level%2==0){
            result[level].push(node.val)
        } else{
            result[level].unshift(node.val)
        }

        BFS(node.left,level+1)
        BFS(node.right,level+1)

    }

    BFS(root,0)
    return result
};