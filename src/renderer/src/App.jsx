import { useEffect, useState } from 'react'
import Settings from './components/Settings'

function App() {
  const [fileData, setFileData] = useState()
  const [reciveData, setreciveData] = useState()

  // const counter = document.getElementById('counter')

  window.electronAPI.onUpdateCounter((value) => {
    console.log(value)
    setreciveData(value)
    // const oldValue = Number(counter.innerText)
    // const newValue = oldValue + value
    // counter.innerText = newValue.toString()
    // console.log(newValue.toString())
  })

  // const handleFilePath = () => {
  const filePath = async () => await window.electronAPI.isPath()

  // }
  useEffect(() => {
    // handleFilePath()
    filePath().then((data) => {
      setFileData(data)
    })
  }, [])

  const switchClick = document.getElementById('showConfig-btn')
  switchClick?.addEventListener('click', () => {
    console.log('hello switchClick')
    filePath().then((data) => {
      setFileData(data)
    })
  })
  console.log(fileData)

  return (
    <>
      Current value: <strong id="counter">{reciveData}</strong>
      {!fileData?.clickThrough?.isAllow ? '' : <Settings></Settings>}
    </>
  )
}

export default App
