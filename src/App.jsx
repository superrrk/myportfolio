import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LinkedIn from "./pictures/LinkedIn.jpeg"
import NavigationBar from './NavigationBar'
import home from "./pages/home"
import portfolio from "./pages/portfolio"
import about from "./pages/about"
import resume from "./pages/resume"
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

      </div>
       
    </>
  )
}

export default App
