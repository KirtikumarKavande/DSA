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

// approch 2
var reverseStr = function(s, k) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};