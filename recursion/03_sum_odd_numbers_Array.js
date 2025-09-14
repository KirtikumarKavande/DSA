function oddNumberSum(length) {
    if (length === 0 && arr[0] % 2 === 0) return 0
    if (length === 0 && arr[0] % 2 !== 0) return arr[0]

    if (arr[length] % 2 === 0) {
        return oddNumberSum(length - 1)
    } else {
        return arr[length] + oddNumberSum(length - 1)
    }
}
const arr = [2, 5, 7, 12, 8, 3]
console.log(
    oddNumberSum(arr.length - 1)

);