import { useState } from "react"
import "./Search.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Replace this with the actual function you want to run on search
    console.log(`Search term: ${searchTerm}`);
    window.location.href = "/products"
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
