import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'


function App() {
  
  const [page , setPage] = useState(0);
  const changePage = (index: number) => {setPage(index)}
  const pages: string[] = [
    "Home",
    "Birhouses",
    "Hanging Decor",
    "Moss Collection",
    "Spinners",
    "Statues",
    "Wall Decor"
  ]


  return (
    <>
      <Navbar changePage={changePage} pages={pages} page_number={page}/>
    </>
  )
}

export default App
