import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteSong } from "../../store/song"
import EditFormModal from "../EditSongModal"
import './MySongsComponent.css'


const MySongsComponent = ({songs}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)
    const mySongs = songs?.filter(song => song.userId === sessionUser?.id)

    return (
        <div className="songs-container">
            <div className='all-song-sections'>
                <div className="my-songs-header">
                    <h2>My Songs</h2>
                    <button className="upload-own-button">Upload</button>
                </div>
                    <h4>All songs uploaded by You!</h4>
                        <ul className="all-songs-list">
                            {mySongs?.map(song => (
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
                                        <button onClick={e => {
                                            e.preventDefault()
                                            dispatch(deleteSong(song.id))
                                        }}>
                                        Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                </div>
        </div>
    )
}

export default MySongsComponent
