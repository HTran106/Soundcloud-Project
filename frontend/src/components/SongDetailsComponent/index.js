import { useParams } from "react-router-dom"
import './SongDetails.css'

const SongDetailsComponent = ({songs}) => {
    const { songId } = useParams()
    const currentSong = songs.find(song => song.id === +songId)
    // console.log(currentSong.previewImage)
    return (
        <div style={{backgroundImage: `url(${currentSong.previewImage})`}} className="song-details-container">
            <h1>Song detail component</h1>

        </div>
    )
}

export default SongDetailsComponent
