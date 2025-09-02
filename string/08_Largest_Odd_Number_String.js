var largestOddNumber = function(num) {
    let maxOddIndex=-1
    let result=""
    for(let i=num.length-1;i>=0;i--){
        if(num[i]%2!==0){
            maxOddIndex=i;
            break
        }
    }

    if(maxOddIndex!==-1){
        for(let i=0;i<=maxOddIndex;i++){
            result+=num[i]
        }
    }
    return result
};