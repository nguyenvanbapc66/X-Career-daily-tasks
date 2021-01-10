const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a divisor: ', (divisor) => {
    rl.question('Enter a bound: ', (bound) => {
        console.log(maxMultiple(divisor, bound))
        rl.close()
    })
})

function maxMultiple(divisor, bound) {
    if(checkNum(divisor, 2, 10) && checkNum(bound, 5, 100)) {
        return Math.floor(bound/divisor) * divisor
    }
}

function checkNum(number, start, end) {
    if(number >= start && number <= end) {
        return true
    }
    return false
}