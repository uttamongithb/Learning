// const readline = require('readline')

// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// })

// rl.question('Please enter your name: ', (name) =>{
//     console.log('You entered: ', name)

//     rl.close();
// })

const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf-8')

fs.writeFileSync('./output.txt', data)