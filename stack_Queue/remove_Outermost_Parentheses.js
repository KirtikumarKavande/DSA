var removeOuterParentheses = function(s) {
   let str=""
    let openingParenthesesCount=0
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            openingParenthesesCount++
            if(openingParenthesesCount>1){
            str+=s[i]
            }
        }else{
            openingParenthesesCount--

            if(openingParenthesesCount===0){
                continue
            }
            str+=s[i]
        }

    }
    return str

};