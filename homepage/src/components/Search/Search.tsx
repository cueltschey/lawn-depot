import { useState } from "react"
import "./Search.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="search">
      <input type="text" className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}/>
      <button className="search-submit" onClick={() => handleSearch()}>
        <span>🔍</span>
      </button>
    </div>
  )
}

export default Search
