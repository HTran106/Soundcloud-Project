import './AlbumDetailsComponent.css'
import { backgroundImageData } from '../SongDetailsComponent/backgroundImageData'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as albumActions from '../../store/albums'
import * as userActions from '../../store/users'

const AlbumDetailsComponent = () => {
    const randomBackground = backgroundImageData[Math.floor(Math.random() * backgroundImageData.length)];
    const { albumId } = useParams()
    const dispatch = useDispatch()
    const albums = useSelector(state => state.albums)
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(userActions.fetchAllUsers())
        dispatch(albumActions.fetchAllAlbums())
    }, [dispatch])

    const album = albums?.find(album => album.id === +albumId)
    const artist = users?.find(user => album.userId === user.id)


    return (
        <div style={{backgroundImage: `url(https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/skillet-unleashed.jpeg`}} className='album-details-container'>
            <div className='album-info-container'>
                <div className='album-image' style={{backgroundImage: `url(${album?.previewImage}`}}></div>
                <div className='album-info'>
                    <p className="artist">{artist?.firstName} {artist?.lastName}</p>
                    <p className='title'>{album?.title}</p>
                    <p className='description'>{album?.description}</p>
                </div>
                <h2 style={{color: "white"}}></h2>
            </div>
            <div className='album-songs'>

            </div>
        </div>
    )
}

export default AlbumDetailsComponent
