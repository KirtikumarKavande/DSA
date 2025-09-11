var groupAnagrams = function(strs) {
    let unquieKeyToStrMaspping= new Map()
    for(let i=0;i<strs.length;i++){
        let currentStr=strs[i]
        let alphabateMapping= Array(26).fill(0)
        for(let j=0; j<currentStr.length;j++){
            const index=currentStr.charCodeAt(j)-'a'.charCodeAt(0)
            alphabateMapping[index]=alphabateMapping[index]+1
        }
        let unqiueKey=""
        for(let k=0;k<26;k++){
             unqiueKey+= String.fromCharCode('a'.charCodeAt(0)+k)+alphabateMapping[k]
          
        }
          if(unquieKeyToStrMaspping.has(unqiueKey)){
           const stringArray= unquieKeyToStrMaspping.get(unqiueKey)
             stringArray.push(currentStr)
          }else{
            unquieKeyToStrMaspping.set(unqiueKey,[currentStr])

          }
    }

    return Array.from(unquieKeyToStrMaspping.values())
};