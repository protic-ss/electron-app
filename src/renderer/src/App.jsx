import { useState } from 'react'
import Settings from './components/Settings'

function App() {
  const [fileData, setFileData] = useState()
  const [reciveData, setreciveData] = useState()

  window.electronAPI.onUpdateCounter((value) => {
    console.log(value)
    setreciveData(value.icounter)
    setFileData(value)
    window.electron.ipcRenderer.removeAllListeners('update-counter')
  })

  return (
    <>
      Current value: {reciveData}
      {fileData?.clickThrough?.isAllow ? '' : <Settings></Settings>}
    </>
  )
}

export default App
