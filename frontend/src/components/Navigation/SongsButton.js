import { useHistory } from 'react-router-dom'

const SongsButton = () => {
    const history = useHistory()

    const handleOnClick = e => {
        e.preventDefault()
        console.log('i got here')
        history.push('/songs')
    }

    return (
            <button onClick={handleOnClick} className="songs-button">Songs</button>
    )
}

export default SongsButton
