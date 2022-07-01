import { useHistory } from 'react-router-dom'

const MySongsButton = () => {
    const history = useHistory()

    const handleOnClick = e => {
        e.preventDefault()
        history.push('/my/songs')
    }

    return (
            <button onClick={handleOnClick} className="songs-button">My Songs</button>
    )
}

export default MySongsButton
