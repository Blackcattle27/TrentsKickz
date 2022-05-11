const Search = (props) => {
  const {toggleFilter} = props;

  return (
  <div className="searchBar" >
        <label>Search</label>
        <input type="text" placeholder="keyword(s)" onChange={(e) => e.target.value}  className="searchInput" ></input>
        <button className='filterBtn' onClick={toggleFilter}>Filter Results</button>
  </div> 
  )
}
export default Search