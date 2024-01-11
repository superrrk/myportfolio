import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LinkedIn from "./pictures/LinkedIn.jpeg"
import NavigationBar from './NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Main'>
        <h1 id = "name">
          kelly truong
        </h1>
        <p id = "about">
          im building up a little website about my little journey in JADE + beyond
        </p>

        <NavigationBar></NavigationBar>

        <div id = "socials">
          <a href="https://www.linkedin.com/in/kellybtruong/" target="_blank">
            <img src={LinkedIn} id="LinkedIn" />
          </a>
        </div>

        <div className="test">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>


      </div>
       
    </>
  )
}

export default App
