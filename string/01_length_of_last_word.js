
var lengthOfLastWord = function(s) {
    let array=s.split(" ")
    for(let i=array.length-1;i>=0;i--){
        if(array[i]!==''){
            return array[i].length
        }
    }
};