import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './NavigationBar'
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import About from "./pages/about"
import Resume from "./pages/resume"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
        <HashRouter>
          <div>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </HashRouter>     
    </>
  )
}

export default App
