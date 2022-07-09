import './SearchComponent.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


const SearchComponent = () => {
    const songs = Object.values(useSelector(state => state.search))
    const history = useHistory()

    return (
        <div className='search-container'>
            <div className='search-title'>
                <h1>The following songs were found:</h1>
            </div>
            <div className='search-song-section'>
                    <ul className="search-songs-list">
                        {songs.map(song => (
                            <div key={`${song.id}`}className='all-song-selections'>
                                <button className='all-song-details-button' onClick={e => {
                                    e.preventDefault()
                                    history.push(`/songs/${song.id}`)
                                    }}>
                                    <img src={song.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={song.id}>{song.title}</li>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default SearchComponent
