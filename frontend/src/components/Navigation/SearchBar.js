import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import * as searchActions from '../../store/search'

const SearchBar = () => {
    const history = useHistory()
    const [searchParams, setSearchParams] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(searchActions.search(searchParams))
        setSearchParams("")
        history.push("/search")
    }

    return (
        <form onSubmit={handleSubmit} className="mini-search-bar">
            <input
            type='search'
            placeholder="Search songs"
            name="q"
            value={searchParams}
            onChange={e => setSearchParams(e.target.value)}
            />
            <button type='submit' className='search-button'>
                <img src='https://www.kindacode.com/wp-content/uploads/2020/12/search.png' alt='mag-glass'></img>
            </button>
        </form>
    )
}

export default SearchBar
