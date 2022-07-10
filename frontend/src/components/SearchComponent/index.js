import './SearchComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { fetchAllUsers } from '../../store/users'

const SearchComponent = () => {
    const songs = Object.values(useSelector(state => state.search))
    const users = Object.values(useSelector(state => state.users))
    const dispatch = useDispatch()
    const [url, setUrl] = useState('')
    const [togglePlayer, setTogglePlayer] = useState(false)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    return (
        <div className='search-container'>
            <div className='search-top'>
                <div className='search-title'>
                    <h1>Songs:</h1>
                </div>
                <div className='search-audio-player'>
                {togglePlayer &&
                <AudioPlayer
                    src={url}
                    autoPlay
                    customProgressBarSection={[]}
                />}
                </div>
            </div>

            <div className='search-songs-container'>
                    {songs?.map((song, i) => (
                        <div key={i} className='search-list-container'>
                            <div className='search-image'>
                                <img src={song.previewImage} alt='previewImage'></img>
                            </div>
                            <div className='search-image'>
                                <button onClick={e => {
                                    e.preventDefault()
                                    setTogglePlayer(true)
                                    setUrl(song.url)
                                }}
                                className='play-button'>
                                    <img src='https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/transparent-play-button-icon-21.png' alt="previewImage"></img>
                                </button>
                            </div>
                            <div className='list-container'>
                                <div className='list-item'>
                                    <li style={{fontSize:'24px'}} className='search-song-title'>
                                         {song.title}
                                    </li>
                                </div>
                                <div style={{fontSize: '14px', color: 'gray'}} className='list-item'>
                                    {`by
                                    ${users.find(user => user.id === song.userId).firstName}
                                    ${users.find(user => user.id === song.userId).lastName}
                                    `}
                                </div>
                                <div className='search-icons-section'>
                                    <div className='icons'>
                                        <img src='https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/play-solid.svg' alt="previewImage"></img>
                                        {`${Math.floor(Math.random() * 100000).toLocaleString("en-US")}`}
                                    </div>
                                    <div className='icons'>
                                        <img src='https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/upload-solid.svg' alt="previewImage"></img>
                                        {`${Math.floor(Math.random() * 11).toLocaleString("en-US")}y ago`}
                                    </div>
                                    <div className='icons'>
                                        <img src='https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/download-solid.svg' alt="previewImage"></img>
                                        {`${Math.floor(Math.random() * 100000).toLocaleString("en-US")}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SearchComponent
