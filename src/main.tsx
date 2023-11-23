import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Navbar/>
        <Routes/>
        <Footer/>
    </React.StrictMode>,
)
