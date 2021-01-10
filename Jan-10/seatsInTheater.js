const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter nCols = ', (nCols) => {
    rl.question('Enter nRows = ', (nRows) => {
        rl.question('Enter col = ', (col) => {
            rl.question('Enter row = ', (row) => {
                console.log(seatsInTheater(nCols, nRows, col, row))
                rl.close()
            })
        })
    })
})

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row)
}