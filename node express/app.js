const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.question('Please enter your name: ', (name) =>{
    console.log('You entered: ', name)

    rl.close();
})

const fs = require('fs')

fs.writeFile('./output.txt', `Hey who the  are you this text is created at ${new Date()}`, 'utf-8', (err) =>{
    if(err) console.error(err);
    console.log('File is written successfully')
});

fs.readFile('./output.txt', 'utf-8', (err, data) =>{
    console.log(data)
})

