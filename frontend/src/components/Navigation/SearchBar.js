import { useHistory } from "react-router-dom"

const SearchBar = () => {
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        history.push("/search")
    }

    return (
        <form onSubmit={handleSubmit} className="mini-search-bar">
            <input type='site-search' placeholder="Search" name="q"/>
            <button type='submit' className='search-button'>
                <img src='https://www.kindacode.com/wp-content/uploads/2020/12/search.png' alt='mag-glass'></img>
            </button>
        </form>
    )
}

export default SearchBar
