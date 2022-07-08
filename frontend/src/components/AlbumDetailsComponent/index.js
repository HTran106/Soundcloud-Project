import './AlbumDetailsComponent.css'
import { backgroundImageData } from '../SongDetailsComponent/backgroundImageData'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as albumActions from '../../store/albums'
import * as userActions from '../../store/users'
import * as songActions from '../../store/song'
import AudioPlayer from 'react-h5-audio-player'
import '../AudioPlayer/styles.css'


const AlbumDetailsComponent = ({albums}) => {
    const { albumId } = useParams()
    const dispatch = useDispatch()
    // const albums = Object.values(useSelector(state => state.albums))
    const users = Object.values(useSelector(state => state.users))
    const songs = Object.values(useSelector(state => state.songs))
    const albumSongs = songs?.filter(song => song.albumId === +albumId)
    const [currSongUrl, setCurrSongUrl] = useState("")
    console.log(albums)

    useEffect(() => {
        dispatch(userActions?.fetchAllUsers())
        dispatch(albumActions?.fetchAllAlbums())
        dispatch(songActions?.fetchAllSongs())
    }, [dispatch])

    const album = albums?.find(album => album.id === +albumId)
    const artist = users?.find(user => album?.userId === user.id)

    return (
        <div style={{backgroundImage: `url(https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/skillet-unleashed.jpeg`}} className='album-details-container'>
            <div className='album-info-container'>
                <div className='album-image'>
                    <img src={`${album?.previewImage}`} alt='previewImage'></img>
                </div>
                <div className='album-info'>
                    <p className="artist">{artist?.firstName} {artist?.lastName}</p>
                    <p className='title'>{album?.title}</p>
                    <p className='description'>{album?.description}</p>
                </div>
                <div className="audio-player">
                    <AudioPlayer
                    autoPlay
                    src={currSongUrl || albumSongs[0]?.url}
                    style={{backgroundColor: "rgba(147, 147, 147, 0.4)", opacity:"90%"}}
                    />
                </div>
            </div>
            <div className='album-songs-container'>
                <div className='songs-list-container'>
                        {albumSongs?.map((song, i) => (
                            <div key={song.id} className='single-song-container'>
                                <div className='single-song-box'>
                                    <li key={song.id}>{i + 1}. {song.title}</li>
                                    <button className='fa-regular fa-circle-play fa-xl' onClick={e => {
                                        e.preventDefault()
                                        setCurrSongUrl(song.url)
                                    }}></button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default AlbumDetailsComponent
