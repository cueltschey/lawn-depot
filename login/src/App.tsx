import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register.tsx'

function App() {
    const [page, setPage] = useState(0)
    const changePage = (index: number) => {
      setPage(index)
      console.log("Registration Successful")
  }
    return (
    <div className="main">
      <div className='login-card'>
        {page === 0? <button onClick={() => setPage(1)}>Register ➡️</button>:
        <button onClick={() => setPage(0)}>⬅️ Login</button>}
        {page === 0?<Login/>: <Register changePage={changePage}/>}
      </div>  
    </div>
  )
}

export default App
