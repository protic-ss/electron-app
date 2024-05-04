import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TraficHeader from './TraficHeader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <TraficHeader />
  </React.StrictMode>
)
