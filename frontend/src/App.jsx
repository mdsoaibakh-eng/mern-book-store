import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx'
import ShowBook from './pages/ShowBook.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/edit" element={<EditBook />} />
        <Route path="/delete" element={<DeleteBook />} />
        <Route path="/show" element={<ShowBook />} />
    </Routes>
  )
}

export default App
