import './AlbumDetailsComponent.css'
import { backgroundImageData } from '../SongDetailsComponent/backgroundImageData'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as albumActions from '../../store/albums'
import * as userActions from '../../store/users'
import * as songActions from '../../store/song'
import AudioPlayer from 'react-h5-audio-player'


const AlbumDetailsComponent = () => {
    const randomBackground = backgroundImageData[Math.floor(Math.random() * backgroundImageData.length)];
    const { albumId } = useParams()
    const dispatch = useDispatch()
    const albums = Object.values(useSelector(state => state.albums))
    const users = useSelector(state => state.users)
    const songs = Object.values(useSelector(state => state.songs))
    const albumSongs = songs?.filter(song => song.albumId === +albumId)
    const [currSongUrl, setCurrSongUrl] = useState("")


    useEffect(() => {
        dispatch(userActions.fetchAllUsers())
        dispatch(albumActions.fetchAllAlbums())
        dispatch(songActions.fetchAllSongs())
    }, [dispatch])

    const album = albums?.find(album => album.id === +albumId)
    const artist = users?.find(user => album?.userId === user.id)

    // const playSong = e => {
    //     e.preventDefault()
    //     document.getElementById('player').play()
    // }

    // const pauseSong = e => {
    //     e.preventDefault()
    //     document.getElementById('player').pause()
    // }


    return (
        <div style={{backgroundImage: `url(https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/skillet-unleashed.jpeg`}} className='album-details-container'>
            <div className='album-info-container'>
                <div className='album-image' style={{backgroundImage: `url(${album?.previewImage}`}}></div>
                <div className='album-info'>
                    <p className="artist">{artist?.firstName} {artist?.lastName}</p>
                    <p className='title'>{album?.title}</p>
                    <p className='description'>{album?.description}</p>
                </div>
                <div className="audio-player">
                    <AudioPlayer src={currSongUrl} style={{backgroundColor: "rgba(147, 147, 147, 0.4)", opacity:"90%"}} />
                </div>
            </div>
            <div className='album-songs-container'>
                <div className='songs-list-container'>
                    <ol className='album-song-list'>
                        {albumSongs.map(song => (
                            <div key={song.id}>
                                <button onClick={e => {
                                    e.preventDefault()
                                    setCurrSongUrl(song.url)
                                }}>play</button>
                                <li key={song.id}>{song.title}</li>
                                {/* <audio id='player' src={song.url}></audio>
                                <div>
                                    <button onClick={playSong}>Play</button>
                                    <button onClick={pauseSong}>Pause</button>
                                </div> */}
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default AlbumDetailsComponent
