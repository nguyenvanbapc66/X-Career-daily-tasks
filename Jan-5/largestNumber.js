const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter the number from 1 to 9: ', (number) => {
    console.log(largestNumber(number))
    rl.close()
})

function largestNumber(n) {
    if(n >= 1 && n <= 9) {
        return 10**n - 1
    }
    return 'Invalid number'
}