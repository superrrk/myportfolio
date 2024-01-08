import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 id = "name">
          kelly truong
        </h1>
        <p id = "about">
          im building up a little website about my little journey in JADE + beyond
        </p>

        <div id = "nav bar"> 
        <ul>
          <li>
            <a href ="/myportfolio/main.jsx">home</a>
            <a href ="main.jsx">portfolio</a>
            <a href ="main.jsx">projects</a>
            <a href ="main.jsx">resume</a>
          </li>
        </ul>
        </div>

        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <a href="https://www.linkedin.com/in/kellybtruong/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        </div>


      </div>
       
    </>
  )
}

export default App
