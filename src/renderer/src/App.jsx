import { useState } from 'react'
import Settings from './components/Settings'

function App() {
  const [fileData, setFileData] = useState()
  const [reciveData, setreciveData] = useState()

  window.electronAPI.onUpdateCounter((value) => {
    // console.log(value)
    setreciveData(value.text)
    setFileData(value)
    window.electron.ipcRenderer.removeAllListeners('update-counter')
  })

  console.log(fileData)
  return (
    <>
      {fileData?.clickThrough?.isAllow ? (
        <div className="tranlatedtext">{reciveData}</div>
      ) : (
        <Settings previousPath={fileData?.path}></Settings>
      )}
    </>
  )
}

export default App
