var hasPathSum = function (root, targetSum) {
    if (!root) return false


    function DFS(node, totalSum) {
        totalSum += node.val

        if (!node.left && !node.right) {
            if (totalSum === targetSum) return true
            return false
        }
        let left
        let right
        if (node.left) {
            left = DFS(node.left, totalSum)
        }
        if (node.right) {
            right = DFS(node.right, totalSum)
        }
        if (left || right) {
            return true
        } else {

            return false
        }
    }

    return DFS(root, 0)
};


// approach 2


var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let ans = false;

    let traverse = (curr, currSum) => {
        let newSum = currSum + curr.val;

        if(!curr.left && !curr.right) {
            if(newSum === targetSum){
                ans = ans || true;
            }
        }
        
        curr.left && traverse(curr.left, newSum);
        curr.right && traverse(curr.right, newSum);
    } 
    traverse(root, 0);
    return ans;
};


// approach 3

var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        return targetSum - root.val === 0;
    }

    targetSum -= root.val;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);    
};