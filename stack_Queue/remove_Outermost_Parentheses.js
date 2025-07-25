var removeOuterParentheses = function (s) {
    let str = ""
    let openingParenthesesCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            openingParenthesesCount++
            if (openingParenthesesCount > 1) {
                str += s[i]
            }
        } else {
            openingParenthesesCount--

            if (openingParenthesesCount === 0) {
                continue
            }
            str += s[i]
        }

    }
    return str

};


// using stack
var removeOuterParentheses = function (s) {
    let stack = []
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i])
            if (stack.length > 1) {
                str += s[i]
            }
        } else {
            stack.pop()
            if (stack.length === 0) continue
            str += s[i]
        }
    }

    return str
};