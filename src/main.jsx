import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FirstApp } from './practices/FirsAPP.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title = "Soy titulo" subTitle = "soy Subtitle" name = "Mi nombre es Ramsess" />
  </React.StrictMode>,
)
