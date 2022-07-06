import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const MySongsComponent = () => {
    const songs = Object.values(useSelector(state => state.songs))
    // const sessionUser = useSelector(state => state.sessionUser)

    const history = useHistory()
    const mySongs = songs.find(song => song.userId)

    // console.log(sessionUser)

    return (
        <div className='all-song-sections'>
                <h2>All Songs</h2>
                <h4>All available songs</h4>
                    <ul className="all-songs-list">
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
    )
}

export default MySongsComponent
