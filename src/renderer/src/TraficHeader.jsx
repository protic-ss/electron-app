function TraficHeader() {
  const showConfig = () => window.electron.ipcRenderer.send('setShow')
  const minimizeBtn = () => window.electron.ipcRenderer.send('minimize-window')
  const maximizeBtn = () => window.electron.ipcRenderer.send('maximize-window')
  const closeBtn = () => window.electron.ipcRenderer.send('close-window')
  return (
    <div id="header" className="header">
      <div
        id="showConfig-btn"
        className="header-subbutton"
        style={{ background: 'white' }}
        onClick={showConfig}
      ></div>
      <div
        id="minimize-btn"
        className="header-subbutton"
        style={{ background: 'green' }}
        onClick={maximizeBtn}
      ></div>
      <div
        id="maximize-btn"
        className="header-subbutton"
        style={{ background: 'yellow' }}
        onClick={minimizeBtn}
      ></div>
      <div
        id="close-btn"
        className="header-subbutton"
        style={{ background: 'red' }}
        onClick={closeBtn}
      ></div>

      <div></div>
    </div>
  )
}

export default TraficHeader
