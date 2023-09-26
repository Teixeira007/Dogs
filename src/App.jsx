import { useState } from 'react'
import { Header } from './componets/Header'
import { Footer } from './componets/Footer'
import { BrowserRouters, Routes, Route } from 'react-router-dom';

function App() {
    return <div>
        <BrowserRouters>
            <Header/>
            <Routes>

            </Routes>
            <Footer/>
        </BrowserRouters>
    </div>
}

export default App
