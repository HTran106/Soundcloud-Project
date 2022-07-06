import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import EditFormModal from "../EditModal"
import './MySongsComponent.css'

const MySongsComponent = ({songs}) => {
    // const songs = Object.values(useSelector(state => state.songs))
    const sessionUser = useSelector(state => state.session.user)

    const history = useHistory()
    const mySongs = songs.filter(song => song.userId === sessionUser.id)

    // console.log(sessionUser)

    return (
        <div className='all-song-sections'>
                <h2>All Songs</h2>
                <h4>All available songs</h4>
                    <ul className="all-songs-list">
                        {mySongs.map(song => (
                            <div key={`${song.id}`}className='all-song-selections'>
                                <button className='all-song-details-button' onClick={e => {
                                    e.preventDefault()
                                    history.push(`/songs/${song.id}`)
                                    }}>
                                    <img src={song.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={song.id}>{song.title}</li>
                                <div className="edit-buttons">
                                    <EditFormModal song={song} />
                                    <button>Delete</button>
                                </div>
                            </div>
                        ))}
                    </ul>
            </div>
    )
}

export default MySongsComponent
