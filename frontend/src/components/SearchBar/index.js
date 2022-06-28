import './SearchBar.css'

const SearchBarComponent = () => {
    return (
        <div className="search-bar-container">
            <input className='search-bar' type='text' placeholder="Search for artists, bands, tracks, podcasts"></input>
            <p id="search-p">or</p>
            <button className='upload-own-button'>Upload your own</button>
        </div>
    )
}

export default SearchBarComponent
