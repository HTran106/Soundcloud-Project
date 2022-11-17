import './HomePageComponent.css'
import * as songsActions from '../../store/song'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as userActions from '../../store/users'
import * as albumActions from '../../store/albums'


const HomePageComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const albums = Object.values(useSelector(state => state.albums))

    const songs = Object.values(useSelector(state => state.songs))
    const trending = songs?.filter((song, i) => i >= 10 && i < 15)
    const newAndHot = albums?.filter((song, i) => i >= 5 && i < 10)

    useEffect(() => {
        dispatch(songsActions.fetchAllSongs())
        dispatch(userActions.fetchAllUsers())
        dispatch(albumActions.fetchAllAlbums())
    }, [dispatch])

    return (
        <div className="songs-container">
            <div className='song-sections'>
                <h2>Top Trending Songs</h2>
                <h4>Songs that will light the fire in you</h4>
                <ul className="songs-list">
                    {trending?.map(song => (
                        <div key={`${song.id}`} className='song-selections'>
                            <button className='song-details-button' onClick={e => {
                                e.preventDefault()
                                history.push(`/songs/${song.id}`)
                            }}>
                                <img src={song.previewImage} alt='previewImage'></img>
                            </button>
                            <li key={song.id}>{song.title}</li>
                            <p>🔥 🔥 🔥</p>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='song-sections'>
                <h2>Top Trending Albums</h2>
                <h4>Newest and Hottest Albums</h4>
                <ul className="songs-list">
                    {newAndHot?.map(album => (
                        <div key={`${album.id}`} className='song-selections'>
                            <button className='song-details-button' onClick={e => {
                                e.preventDefault()
                                history.push(`/albums/${album.id}`)
                            }}>
                                <img src={album.previewImage} alt='previewImage'></img>
                            </button>
                            <li key={album.id}>{album.title}</li>
                            <p>Listen to me NOW</p>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='all-song-sections'>
                <h2>All Songs</h2>
                <h4>All available songs</h4>
                <ul className="all-songs-list">
                    {songs?.map(song => (
                        <div key={`${song.id}`} className='all-song-selections'>
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

export default HomePageComponent
