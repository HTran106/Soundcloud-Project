import './SearchBar.css'

const SearchBarComponent = () => {
    return (
        <form className="search-bar-container">
            <input
                className='search-bar'
                type='search'
                placeholder="Search for artists, bands, tracks, podcasts"
            />
            <button type='submit' className='search-button'>
                <img src='https://www.kindacode.com/wp-content/uploads/2020/12/search.png' alt='mag-glass'></img>
            </button>
            <p id="search-p">or</p>
            <button className='upload-own-button'>Upload your own</button>
        </form>
    )
}

export default SearchBarComponent
