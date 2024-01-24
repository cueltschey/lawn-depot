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
        {pages.map((page_name: string, index: number) => (
        <li className={index == page_number ? "nav-item active":"nav-item"} onClick={() => changePage(index)}>{page_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
