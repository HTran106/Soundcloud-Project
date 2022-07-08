import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import { deleteSong } from "../../store/song"
import EditFormModal from "../EditModal"
import './MySongsComponent.css'
import * as songActions from '../../store/song'

const MySongsComponent = ({songs}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        dispatch(songActions.fetchAllSongs())
    }, [submitted])

    const sessionUser = useSelector(state => state.session.user)
    const mySongs = songs?.filter(song => song.userId === sessionUser?.id)

    return (
        <div className="songs-container">
            <div className='all-song-sections'>
                <div className="my-songs-header">
                    <h2>All Songs</h2>
                    <button className="upload-own-button">Upload</button>
                </div>
                    <h4>All available songs</h4>
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
                                            dispatch(deleteSong(song))
                                            setSubmitted(!submitted)
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
