var inorderTraversal = function(root) {
    if(!root) return []
    let current=root
    const stack=[root]
    const result=[]
    while(stack.length){
        while(current){
             current=current.left
            if(current){
                stack.push(current)
            }

        }
        const node= stack.pop()
        result.push(node.val)
        current=node.right
        if(current){
            stack.push(current)
        }

    }

    return result
};