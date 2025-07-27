var evalRPN = function(tokens) {
    let stack = []
    for(let i = 0; i < tokens.length; i++){
        
        if(!isNaN(tokens[i])){
            stack.push(+tokens[i])
        } else {
            let firstEle = stack.pop()
            let secondEle = stack.pop()
            let result = eval(`(${secondEle})${tokens[i]}(${firstEle})`) 
            if(tokens[i] === "/"){
                result = Math.trunc(result);
            }
            stack.push(result)
        }
    } 

    return stack[stack.length-1]  
};

// method 2
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i = 0; i < tokens.length; i++){
        if(!isNaN(+tokens[i])){
            stack.push(+tokens[i]);  
        } else {
            let firstEle = stack.pop();
            let secondEle = stack.pop();
            let result;
            
            switch(tokens[i]) {
                case '+':
                    result = secondEle + firstEle;
                    break;
                case '-':
                    result = secondEle - firstEle;
                    break;
                case '*':
                    result = secondEle * firstEle;
                    break;
                case '/':
                    result = Math.trunc(secondEle / firstEle);
                    break;
            }
            stack.push(result);
        }
    }
    
    return stack[0];  
};
