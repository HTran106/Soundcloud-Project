import './HomePageComponent.css'

import * as songsActions from '../../store/song'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import './Songs.css'
import { useHistory } from 'react-router-dom'
import * as userActions from '../../store/users'


const HomePageComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const sessionUser = useSelector(state => state.session.user)

    const songs = Object.values(useSelector(state => state.songs))
    const top5 = songs.filter((song, i) => i < 5)
    const newAndHot = songs.filter((song, i) => i >= 5 && i <10)



    useEffect(() => {
        dispatch(songsActions.fetchAllSongs())
        dispatch(userActions.fetchAllUsers())
    }, [dispatch])


    return (
        <div className="songs-container">
            <div className='song-sections'>
                <h2>Top 5 Songs</h2>
                <h4>The most played tracks on SoundCloud this week</h4>
                    <ul className="songs-list">
                        {top5.map(song => (
                            <div key={`${song.id}`} className='song-selections'>
                                <button className='song-details-button' onClick={e => {
                                    e.preventDefault()
                                    history.push(`/songs/${song.id}`)
                                    }}>
                                    <img src={song.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={song.id}>{song.title}</li>
                                <p>Top 5</p>
                            </div>
                        ))}
                    </ul>
            </div>
            <div className='song-sections'>
                <h2>Charts: New & Hot</h2>
                <h4>Up-and-coming tracks on SoundCloud</h4>
                    <ul className="songs-list">
                        {newAndHot.map(song => (
                            <div key={`${song.id}`} className='song-selections'>
                                <button className='song-details-button' onClick={e => {
                                    e.preventDefault()
                                    history.push(`/songs/${song.id}`)
                                    }}>
                                    <img src={song.previewImage} alt='previewImage'></img>
                                </button>
                                <li key={song.id}>{song.title}</li>
                                <p>New & Hot</p>
                            </div>
                        ))}
                    </ul>
            </div>
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
        </div>
    )
}

export default HomePageComponent
