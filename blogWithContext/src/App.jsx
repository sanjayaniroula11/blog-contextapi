import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <header>
        <nav>
            <div className="logo-section">
                <h2>-V BLOG</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Tutorial</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </header>
    <div className="input-things">
        <h5>Enter the title of your blog</h5>
        <input type="text" className="fields"/> <br/>
        <h5>Description</h5>
        <input type="text" className="fields" /> <br/>
        <h5>Image link</h5>
        <input type="text" className="fields"/> <br/>
        <button>Post</button>
    </div>

    
    <main>
        <div className="blogs-grid">
            <div className="one-blog">
                <div className="blog-picture"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVx6CB56pxO8gwlzLLOkV8fPN0jfF3T_98w&s"
                        alt=""/></div>

                <div className="blog-content">
                    <div className="one-blog-title"><h5>koala - the lazy creature</h5></div>
                    <div className="blog-content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, assumenda!</p></div>
                    <div className="writer"> <p>sanjaya niroula</p></div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default App
