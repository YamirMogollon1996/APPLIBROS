import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contexto from './contexto.jsx'
import App2 from './App2.jsx'
import Global2 from './Global2.jsx'
import App3 from './app3.jsx'
import Libro from './Libro.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(


  <Global2>


            <React.StrictMode>
              {/* <App2></App2> */}
    <Libro></Libro>
            </React.StrictMode>
  </Global2>
)
