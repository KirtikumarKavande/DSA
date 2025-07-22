var MyStack = function() {
    this.q=[]
};


MyStack.prototype.push = function(x) {
    this.q.push(x)
};


MyStack.prototype.deQTillLastEle=function(){
    let length=this.q.length
    let i=1
    while(i<length){
        let ele=this.q.shift()
        this.q.push(ele)
        i++
    }
} 
MyStack.prototype.pop = function() {
    this.deQTillLastEle()
    return this.q.shift()
};


MyStack.prototype.top = function() {
    this.deQTillLastEle()
    let ele=this.q.shift()
    this.q.push(ele)
    return ele
};


MyStack.prototype.empty = function() {
    
    return this.q.length===0
};