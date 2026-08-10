import { useState } from 'react'
import NavBar from './components/Navbar'
import './App.css'
import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import About from './routes/About'
import Contact from './routes/Contact'
import Service from './routes/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
   </Routes>
    
    {/* <NavBar/> */}
  </div>
  )
}

export default App
