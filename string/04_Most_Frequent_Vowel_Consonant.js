var maxFreqSum = function(s) {
    const count = {}
    const vowels = new Set('aeiou')  
    let vowelMax = 0, consonantMax = 0
    
    for(let char of s) {
        count[char] = (count[char] || 0) + 1
        
        if(vowels.has(char)) {
            vowelMax = Math.max(vowelMax, count[char])
        } else {
            consonantMax = Math.max(consonantMax, count[char])
        }
    }
    
    return vowelMax + consonantMax
}