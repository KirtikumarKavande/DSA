function fact(num) {
    if (num === 1) return 1
    if (num === 0) return 1 /* factorial of zero is 1  */

    return num * fact(num - 1)

}

console.log(fact(5));