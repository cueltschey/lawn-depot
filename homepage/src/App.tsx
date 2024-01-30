import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Product from './components/Product/Product.tsx';
import Home from './components/Home/Home.tsx'
import Search from './components/Search/Search.tsx';
import Result from './components/Search/Result.tsx'
import Cart from './components/Cart/Cart.tsx'


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
  const categories = [
    "None",
    "birdhouses",
    "hanging",
    "moss",
    "spinners",
    "statues",
    "wall"
  ]
  const [term, setTerm] = useState("");
  const changeTerm = (newTerm: string) => {
    setTerm(newTerm);
  }
  

  return (
    <div className='main'>
      <div className="top">
      <Search term={term} changeTerm={changeTerm} changePage={changePage}/>
      <Navbar changePage={changePage} pages={pages} page_number={page}/>
      </div>
      <div className="spacer"/>
      {page === 0 ? <Home/> :page < 100? <Product category={categories[page]}/>:
        page === 100? <Result term={term}/>: <Cart/>}
      <footer>Charles Ueltschey 2024 | chaseuelt@gmail.com | <a href='https://github.com/cueltschey'>
        cueltschey
      </a></footer>
    </div>
  )
}

export default App
