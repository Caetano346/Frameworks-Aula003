import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header/Header'
import Main from './componentes/Main/Main'
import Footer from './componentes/Footer/Footer'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
