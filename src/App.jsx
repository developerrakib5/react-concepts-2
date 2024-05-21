import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Friends from './Friends'


function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('Button Clicked')
  }
  const handleclick2 = () => {
    alert ('Button 2 Clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5 )
  }
  return (
    <>
    <h2>React Core Concepts</h2>
    <Counter></Counter>
    <Team></Team>
    
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleclick2}>Click Me2</button>
    <button onClick={() => alert('Clicked3')}>Click3</button>
    <button onClick={() => addToFive(3)}>Four</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
