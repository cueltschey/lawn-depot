import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Product from './components/Product/Product.tsx';
import Home from './components/Home/Home.tsx'
import Search from './components/Search/Search.tsx';


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
    <div className='main'>
      <Search/>
      <Navbar changePage={changePage} pages={pages} page_number={page}/>
      {page === 0 ? <Home/> : <Product/>}
      <footer>Charles Ueltschey 2024 | chaseuelt@gmail.com | <a href='https://github.com/cueltschey'>
        cueltschey
      </a></footer>
    </div>
  )
}

export default App
