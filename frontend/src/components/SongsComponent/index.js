import * as songsActions from '../../store/song'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Songs.css'
import { useHistory } from 'react-router-dom'


const SongsComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const songs = Object.values(useSelector(state => state.songs))
    let top5 = songs.filter((song, i) => i < 5)

    useEffect(() => {
        dispatch(songsActions.fetchAllSongs())
    }, [dispatch])

    return (
        <div className="songs-component-container">
            <h2>Charts: Top 5</h2>
            <h4>The most played tracks on SoundCloud this week</h4>
            <div className="top5">
                <ul>
                    {top5.map(song => (
                        <>
                            <button onClick={e => {
                                e.preventDefault()
                                history.push(`/songs/${song.id}`)
                                }}>
                                <img src={song.previewImage} alt='previewImage'></img>
                            </button>
                            <li key={song.id}>{song.title}</li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SongsComponent
