
var dailyTemperatures = function(temperatures) {
    let monotonicDecreasingStack = []
    let result = new Array(temperatures.length).fill(0)
    
    for(let i = temperatures.length-1; i >= 0; i--){
        
        while(monotonicDecreasingStack.length > 0 && 
              temperatures[i] >= temperatures[monotonicDecreasingStack[monotonicDecreasingStack.length-1]]){
            monotonicDecreasingStack.pop()
        }

        if(monotonicDecreasingStack.length > 0){
            result[i] = monotonicDecreasingStack[monotonicDecreasingStack.length-1] - i
        }
        
        monotonicDecreasingStack.push(i)
    }
    return result
}


var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            
            const index = stack.pop(); 
            answer[index] = i - index;
        }
        stack.push(i);
    }

    return answer;  

};
