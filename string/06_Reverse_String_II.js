var reverseStr = function(s, k) {
    let result = "";
    
    for(let i = 0; i < s.length; i += 2*k) {
        let reverseEnd = Math.min(i + k - 1, s.length - 1);
        for(let j = reverseEnd; j >= i; j--) {
            result += s[j];
        }
        
        let normalStart = i + k;
        let normalEnd = Math.min(i + 2*k - 1, s.length - 1);
        for(let j = normalStart; j <= normalEnd; j++) {
            result += s[j];
        }
    }
    
    return result;
};