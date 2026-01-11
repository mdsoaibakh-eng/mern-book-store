import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route path="/" element={<h1 className="text-3xl font-bold underline">Hello world!</h1>} />
    </Routes>
  )
}

export default App
