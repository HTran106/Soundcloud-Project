const SearchBar = () => {
    return (
        <form className="mini-search-bar">
            <input type='search' placeholder="Search"/>
            <button type='submit' className='search-button'>
                <img src='https://www.kindacode.com/wp-content/uploads/2020/12/search.png'></img>
            </button>
        </form>
    )
}

export default SearchBar
