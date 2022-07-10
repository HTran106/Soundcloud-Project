import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import EditAlbumModal from "../EditAlbumModal"
import './MyAlbumsComponent.css'
import * as albumActions from '../../store/albums'
import UploadAlbumModal from "../UploadAlbumModal"
import UploadSongModal from "../UploadSongModal"

const MyAlbumsComponent = ({albums}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const myAlbums = albums?.filter(album => album.userId === sessionUser?.id)

    return (
        <div className="songs-container">
            <div className='all-song-sections'>
                <div className="my-songs-header">
                    <h2>My Albums</h2>
                    <UploadAlbumModal />
                </div>
                    <h4>All Albums uploaded by You!</h4>
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
                                        <UploadSongModal album={album}/>
                                        <EditAlbumModal album={album} />
                                        <button onClick={e => {
                                            e.preventDefault()
                                            dispatch(albumActions.deleteAlbum(album.id))
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
