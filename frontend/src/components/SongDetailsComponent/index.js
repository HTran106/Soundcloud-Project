import { useParams } from "react-router-dom"
import './SongDetails.css'
import { backgroundImageData } from './backgroundImageData'
import AudioPlayer from 'react-h5-audio-player';
import '../AudioPlayer/styles.css'
// import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../store/users";



const SongDetailsComponent = ({songs}) => {
    const { songId } = useParams()
    const dispatch = useDispatch()
    const users = Object.values(useSelector(state => state.users))

    const currentSong = songs.find(song => song.id === +songId)

    let artist;
    if (users) {
        artist = users?.find(user => user.id === +currentSong?.userId)
    }

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const randomBackground = backgroundImageData[Math.floor(Math.random() * backgroundImageData.length)];

    return (
            <div style={{backgroundImage: `url(${randomBackground})`}} className="song-details-container">
                <div className="song-details-info">
                    <div className="player-box">
                        <div className='player-box-contents'>
                            <img src={`${currentSong?.previewImage}`} alt='previewImage'></img>
                        </div>
                        <div className='player-buttons-container'>
                            <div className='artist'>
                                <h2>{`${artist?.firstName} ${artist?.lastName}`}</h2>
                            </div>
                            <div className='title'>
                                <h2>{currentSong?.title}</h2>
                            </div>
                            <div className="player-buttons">
                                <AudioPlayer
                                autoPlay
                                src={currentSong?.url} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-box-container">
                <p>About this song:</p>
                <p>{`${currentSong?.description}`}</p>
                </div>
            </div>
    )
}

export default SongDetailsComponent
