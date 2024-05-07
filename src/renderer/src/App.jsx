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

  return (
    <>
      {fileData?.clickThrough?.isAllow ? (
        <div
          style={{
            padding: '20px',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: '#32363fbf'
          }}
        >
          <h2>{reciveData}</h2>
        </div>
      ) : (
        <Settings></Settings>
      )}
    </>
  )
}

export default App
