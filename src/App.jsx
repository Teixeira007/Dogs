import React from 'react'
import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Home from './componets/Home'
import Login from './componets/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
}

export default App
