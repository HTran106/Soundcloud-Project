import { useParams } from "react-router-dom"
import './SongDetails.css'
import { backgroundImageData } from './backgroundImageData'
import { useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SongDetailsComponent = ({songs}) => {
    const { songId } = useParams()
    const [toggle, setToggle] = useState("Play")
    const player = document.getElementById('player')
    const minutes = Math.floor(player?.duration / 60)
    const seconds = player?.duration - minutes * 60

    const currentSong = songs.find(song => song.id === +songId)
    const randomBackground = backgroundImageData[Math.floor(Math.random() * backgroundImageData.length)];
    // const audio = new Audio(`${currentSong.url}`)

    // const playSong = e => {
    //     e.preventDefault()
    //     player.play()
    // }

    // const pauseSong = e => {
    //     e.preventDefault()
    //     // const player = document.getElementById('player')
    //     player.pause()
    // }

    // const volumnUp = e => {
    //     e.preventDefault()
    //     // const player = document.getElementById('player')
    //     player.volume += .1
    // }

    // const volumnDown = e => {
    //     e.preventDefault()
    //     // const player = document.getElementById('player')
    //     player.volume -= .1
    // }

    return (
        <div style={{backgroundImage: `url(${randomBackground})`}} className="song-details-container">
            <div className="song-details-info">
                <div className="player-box">
                    <div className='player-box-contents'>
                        <img src={`${currentSong.previewImage}`} alt='previewImage'></img>
                        {/* <audio id="player" src={`${currentSong.url}`}></audio> */}
                    </div>
                    <div className='player-buttons-container'>
                        <div>
                            <h2 className="artist">ARTIST NAME</h2>
                            <p>Premiere</p>
                            <h2 className="title">{currentSong.title}</h2>
                        </div>
                        <div className="player-buttons">
                            <AudioPlayer src={currentSong.url} />
                            {/* <button onClick={playSong}>Play</button>
                            <button onClick={pauseSong}>Pause</button>
                            <button onClick={volumnUp}>Vol +</button>
                            <button onClick={volumnDown}>Vol -</button> */}
                        </div>
                        {/* <h2>{`${minutes}: ${parseInt(seconds).toF}`}</h2> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongDetailsComponent
