var MinStack = function () {
    this.stack = []
};


MinStack.prototype.push = function (val) {
    if (!this.stack.length) {
        this.stack.push([val, val])
    } else {
        let min = val
        let top = this.stack[this.stack.length - 1]
        if (val > top[1]) {
            min = top[1]
        }
        this.stack.push([val, min])

    }
};

MinStack.prototype.pop = function () {
    return this.stack.pop()[0]
};


MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0]
};

MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1][1]

};