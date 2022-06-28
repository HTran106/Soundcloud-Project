import './SearchBar.css'

const SearchBarComponent = () => {
    return (
        <div className="search-bar-container">
            <input className='search-bar' type='text' placeholder="Search for artists, bands, tracks, podcasts"></input>
        </div>
    )
}

export default SearchBarComponent
