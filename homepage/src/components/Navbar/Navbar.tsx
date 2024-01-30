import './Navbar.css'

interface Props {
  changePage: (index: number) => void;
  page_number: number;
  pages: string[];
}


const Navbar = ({changePage, page_number, pages}:Props) => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <h2 style={{color: "green", margin: "0px 20px", textWrap: "nowrap", fontSize: "max(1.5vw, 20px)"}}>Lawn Depot</h2>
        {pages.map((page_name: string, index: number) => (
        <li key={index} className={index == page_number ? "nav-item active":"nav-item"} onClick={() => changePage(index)}>{page_name}</li>
        ))}
      </ul>
      <button className="cart-button" onClick={()=>changePage(101)}>View Cart</button>
    </div>
  )
}

export default Navbar
