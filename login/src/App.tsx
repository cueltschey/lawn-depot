import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin.tsx'

function App() {
    const [page, setPage] = useState(0)
    return (
    <div className="main">
      <div className='login-card'>
        {page === 0? <button onClick={() => setPage(1)}>seller ➡️</button>:
        <button onClick={() => setPage(0)}>⬅️ buyer</button>}
        {page === 0?<Login/>: <Admin/>}
      </div>  
    </div>
  )
}

export default App
