const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter n = ', (n) => {
    rl.question('Enter m = ', (m) => {
        console.log(candies(n, m))
        rl.close()
    })
})

function candies(n, m) {
    if(checkNum(n, 1, 10) && checkNum(m, 2, 100)) {
        return Math.floor(m/n) * n
    }
    return 'Invalid'
}

function checkNum(number, start, end) {
    if(number >= start && number <= end) {
        return true
    }
    return false
}