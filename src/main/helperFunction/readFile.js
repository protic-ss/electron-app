import fs from 'fs'
import readline from 'readline'
import translatte from 'translatte'

async function readLastLine(filePath) {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath)
    })

    let lastLine = null
    for await (const line of rl) {
      lastLine = line
    }

    rl.close()
    return lastLine
  } catch (err) {
    console.error('Error reading file:', err)
    return null // Or handle the error differently
  }
}

export function readFile(fileData, handleTranslatedText) {
  if (fileData.path) {
    console.log('hellloew', fileData)

    const WATCH_TARGET = fileData.path
    fs.watch(WATCH_TARGET, (eventType, filename) => {
      console.log('File "' + filename + '" was changed: ' + eventType)

      // var file = WATCH_TARGET
      // var linesCount = 0
      // var rl = readline.createInterface({
      //   input: fs.createReadStream(file),
      //   output: process.stdout,
      //   terminal: false
      // })
      // rl.on('line', function () {
      //   linesCount++ // on each linebreak, add +1 to 'linesCount'
      // })
      // rl.on('close', function () {
      //   console.log('totalline:', linesCount) // print the result when the 'close' event is called
      // })

      readLastLine(WATCH_TARGET)
        .then((lastLine) => {
          if (lastLine) {
            let splittext
            console.log('Last line:', lastLine)
            if (lastLine.includes('=')) {
              splittext = lastLine.split('=')
              console.log(splittext)
              translatte(splittext[1], { to: splittext[0] })
                .then((res) => {
                  console.log(res.text)
                  handleTranslatedText(res.text)
                })
                .catch((err) => {
                  console.error(err)
                })
            } else handleTranslatedText(lastLine)
          } else {
            console.log('File is empty or an error occurred.')
          }
        })
        .catch((err) => {
          console.error('Error:', err)
        })
    })
  }

  return null
}
