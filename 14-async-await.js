const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Code without all the above 3 packages and only require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first}, ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

// Code with all the above 3 packages

// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf-8')
//         const second = await readFilePromise('./content/second.txt', 'utf-8')
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first}, ${second}`)
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

start()
