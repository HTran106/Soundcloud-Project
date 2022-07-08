import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import EditFormModal from "../EditModal"
import './MyAlbumsComponent.css'
import * as albumActions from '../../store/albums'
import UploadAlbumModal from "../UploadAlbumModal"

const MyAlbumsComponent = ({albums}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {

    }, [albums])

    const sessionUser = useSelector(state => state.session.user)
    const myAlbums = albums?.filter(album => album.userId === sessionUser?.id)

    return (
        <div className="songs-container">
            <div className='all-song-sections'>
                <div className="my-songs-header">
                    <h2>All Albums</h2>
                    <UploadAlbumModal />
                    {/* <button className="upload-own-button">Upload</button> */}
                </div>
                    <h4>All available albums</h4>
                        <ul className="all-songs-list">
                            {myAlbums?.map(album => (
                                <div key={`${album.id}`}className='all-song-selections'>
                                    <button className='all-song-details-button' onClick={e => {
                                        e.preventDefault()
                                        history.push(`/albums/${album.id}`)
                                        }}>
                                        <img src={album.previewImage} alt='previewImage'></img>
                                    </button>
                                    <li key={album.id}>{album.title}</li>
                                    <div className="edit-buttons">
                                        <EditFormModal album={album} />
                                        <button onClick={e => {
                                            e.preventDefault()
                                            dispatch(albumActions.deleteAlbum(album.id))
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

export default MyAlbumsComponent
