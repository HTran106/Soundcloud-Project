import * as albumActions from '../../store/albums'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as userActions from '../../store/users'
import './AlbumsComponent.css'


const AlbumsComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const albums = Object.values(useSelector(state => state.albums))
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        dispatch(albumActions.fetchAllAlbums())
        dispatch(userActions.fetchAllUsers())
    }, [dispatch, toggle])

    const top5 = albums?.filter((album, i) => i < 5)
    const newAndHot = albums?.filter((album, i) => i >= 5 && i <10)


    return (
        <div className="songs-container">
            <div className='song-sections'>
                <h2>Most listened to Albums</h2>
                <h4>The most played albums on SoundCloud this week</h4>
                    <ul className="albums-list">
                        {top5?.map(album => (
                            <div key={`${album.id}`} className='album-selections'>
                                <button className='album-details-button' onClick={e => {
                                    e.preventDefault()
                                    setToggle(!toggle)
                                    history.push(`/albums/${album.id}`)
                                    }}>
                                    <img src={album.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={album.id}>{album.title}</li>
                                <p>Top 5</p>
                            </div>
                        ))}
                    </ul>
            </div>
            <div className='song-sections'>
                <h2>Hottest Albums</h2>
                <h4>Albums with the most listeners</h4>
                    <ul className="albums-list">
                        {newAndHot?.map(album => (
                            <div key={`${album.id}`} className='album-selections'>
                                <button className='album-details-button' onClick={e => {
                                    e.preventDefault()
                                    history.push(`/albums/${album.id}`)
                                    }}>
                                    <img src={album.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={album.id}>{album.title}</li>
                                <p>New & Hot</p>
                            </div>
                        ))}
                    </ul>
            </div>
            <div className='all-song-sections'>
                <h2>All Albums</h2>
                <h4>All available Albums</h4>
                    <ul className="all-albums-list">
                        {albums?.map(album => (
                            <div key={`${album.id}`}className='all-album-selections'>
                                <button className='all-album-details-button' onClick={e => {
                                    e.preventDefault()
                                    history.push(`/albums/${album.id}`)
                                    }}>
                                    <img src={album.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={album.id}>{album.title}</li>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

// const AlbumsComponent = () => {
//     const dispatch = useDispatch()
//     const albums = useSelector(state => state.albums)
//     const top5 = albums.filter((album, i) => i < 5)
//     const newAndHot = albums.filter((album, i) => i >= 5 && i < 10)

//     useEffect(() => {
//         dispatch(albumActions.fetchAllAlbums())
//     }, [dispatch])



//     console.log(newAndHot)
//     return (
//         <h1>Album Component</h1>
//     )
// }

export default AlbumsComponent
