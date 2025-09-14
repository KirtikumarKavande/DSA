function sumOfArray(length) {
    if(length===0) return array[0]
    return array[length]+sumOfArray(length-1)
}

const array=[2,4,1,5,7,1,5]
console.log(sumOfArray(array.length-1));