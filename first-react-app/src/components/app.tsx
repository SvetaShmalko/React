import React from 'react'
import '../App.css'
import Header from './Header'
import Navbar from './Navbar'
import Info from './Info'

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Info />
        </div>
    )
}

export default App