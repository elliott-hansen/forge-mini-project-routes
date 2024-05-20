import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <img src="src\assets\DSC03522.jpeg"></img>
      <p>I am a recent graduate from the Unviersity of Virginia. I am a software engineer with an upcoming internship at Lumin in Charlottesville, VA. I love photography! Especially on film.</p>
      <div className='welcome'>
        <h1>elliott</h1>
      </div>

      <div className='router-col'>
        <Link to= {'/contact'}> 
          <span>
            Contact 
          </span>
        </Link>
        <Link to= {'/about'}> 
          <span>
            About 
          </span>
        </Link>
        <Link to= {'/projects'}> 
          <span>
            Projects 
          </span>
        </Link>
      </div>
    </>
  )
}

export default App
