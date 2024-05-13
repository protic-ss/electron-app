/* eslint-disable react/prop-types */
import { useState } from 'react'

function Settings({ previousPath }) {
  const [language, setLanguage] = useState('en')
  const [name, setName] = useState('Enter the name here!')
  const [namelist, setNamelist] = useState([])
  const [filePath, setFilePath] = useState('')

  const handleFilePath = async () => {
    const Path = await window.electronAPI.openFile()
    // console.log(Path)
    setFilePath(Path)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  const handleNamelist = () => {
    if (name) {
      let objestlist = {
        name: name,
        language: language
      }
      let newList = namelist
      newList.push(objestlist)
      setNamelist(newList)
      setName('')
    }
  }

  return (
    <div className="settings">
      <div style={{ margin: '25px', padding: '0px 5px', border: 'solid white 1px' }}>
        <button type="button" id="btn" onClick={handleFilePath}>
          Open a File
        </button>
        File path: <strong id="filePath">{filePath ? filePath : previousPath}</strong>
      </div>

      <div style={{ margin: '25px', padding: '0px 5px', border: 'solid white 1px' }}>
        <label>
          Name:
          <input
            style={{ background: 'transparent', color: 'white' }}
            type="text"
            name="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <select
          style={{ background: 'transparent', color: 'white' }}
          value={language}
          onChange={handleLanguageChange}
        >
          <option style={{ color: 'black' }} value="en">
            English
          </option>
          <option style={{ color: 'black' }} value="fr">
            French
          </option>
          <option style={{ color: 'black' }} value="es">
            Spanish
          </option>
        </select>
        <button style={{ background: 'transparent', color: 'white' }} onClick={handleNamelist}>
          ADD
        </button>
      </div>

      <div style={{ padding: '0px 5px', margin: '0px 25px', border: 'solid white 1px' }}>
        <div
          style={{
            borderBottom: 'solid white 1px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>Name</div> <div>Language</div>
        </div>
        {/* {console.log(namelist)} */}
        {namelist.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: 'solid white 1px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div>{item.name}</div> <div>{item.language}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings
