// monotonic decreasing stack
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