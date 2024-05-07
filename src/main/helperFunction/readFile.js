import fs from 'fs'
import readline from 'readline'

export function readFile(file) {
  console.log('hellloew', file)
  // fs.watch(WATCH_TARGET, (eventType, filename) => {})

  // const WATCH_TARGET = './readfswatch.txt'
  // fs.watch(WATCH_TARGET, (eventType, filename) => {
  //   console.log('File "' + filename + '" was changed: ' + eventType)

  //   var file = WATCH_TARGET
  //   var linesCount = 0
  //   var rl = readline.createInterface({
  //     input: fs.createReadStream(file),
  //     output: process.stdout,
  //     terminal: false
  //   })
  //   rl.on('line', function () {
  //     linesCount++ // on each linebreak, add +1 to 'linesCount'
  //   })
  //   rl.on('close', function () {
  //     console.log(linesCount) // print the result when the 'close' event is called
  //   })
  // })

  return null
}
