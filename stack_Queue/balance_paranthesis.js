var isValid = function (s) {
    let parentheses = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (!parentheses[s[i]]) {
            stack.push(s[i])
        } else {
            let poppedEle = stack.pop()
            if (poppedEle !== parentheses[s[i]]) {
                return false
            }
        }
    }

    if (stack.length !== 0) return false
    return true

};