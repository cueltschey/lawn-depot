import "./Search.css"

interface Props {
  changePage: (page: number) => void;
  term: string;
  changeTerm: (newTerm: string) => void;
}

const Search = ({changePage, term, changeTerm}:Props) => {

  

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      changePage(100)
    }
  };
  
  return (
    <div className="search">
      <input type="text" className="search-bar"
        value={term}
        onChange={(e) => changeTerm(e.target.value)}
        onKeyPress={handleKeyPress}/>
      <button className="search-submit" onClick={() => changePage(100)}>
        <span>🔍</span>
      </button>
    </div>
  )
}

export default Search
