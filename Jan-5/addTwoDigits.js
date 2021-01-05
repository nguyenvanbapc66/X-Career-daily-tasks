const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter the number from 10 to 99: ', (number) => {
    console.log(addTwoDigits(number))
    rl.close()
})

function addTwoDigits(n) {
    if(n < 10 || n > 99) {
        return 'Invalid number'
    }
    let secondDigit = n % 10
    let firstDigit = (n - secondDigit) / 10
    return firstDigit + secondDigit
}