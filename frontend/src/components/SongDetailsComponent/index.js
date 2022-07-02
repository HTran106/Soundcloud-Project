import { useParams } from "react-router-dom"
import './SongDetails.css'
import { backgroundImageData } from './backgroundImageData'
import { useState, useEffect } from 'react'

const SongDetailsComponent = ({songs}) => {
    const { songId } = useParams()
    const [toggle, setToggle] = useState("Play")
    const player = document.getElementById('player')
    const minutes = Math.floor(player?.duration / 60)
    const seconds = player?.duration - minutes * 60

    const currentSong = songs.find(song => song.id === +songId)
    const randomBackground = backgroundImageData[Math.floor(Math.random() * backgroundImageData.length)];
    // const audio = new Audio(`${currentSong.url}`)

    const playSong = e => {
        e.preventDefault()
        player.play()
    }

    const pauseSong = e => {
        e.preventDefault()
        // const player = document.getElementById('player')
        player.pause()
    }

    const volumnUp = e => {
        e.preventDefault()
        // const player = document.getElementById('player')
        player.volume += .1
    }

    const volumnDown = e => {
        e.preventDefault()
        // const player = document.getElementById('player')
        player.volume -= .1
    }

    return (
        <div style={{backgroundImage: `url(${randomBackground})`}} className="song-details-container">
            <div className="song-details-info">
                <div className="player-box">
                    <div className='player-box-contents'>
                        <img src={`${currentSong.previewImage}`} alt='previewImage'></img>
                        <audio id="player" src={`${currentSong.url}`}></audio>
                        <div>
                            <button onClick={playSong}>Play</button>
                            <button onClick={pauseSong}>Pause</button>
                            <button onClick={volumnUp}>Vol +</button>
                            <button onClick={volumnDown}>Vol -</button>
                            <h2>{`${minutes}: ${seconds}`}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongDetailsComponent
