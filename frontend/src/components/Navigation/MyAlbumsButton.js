import { useHistory } from 'react-router-dom'

const MyAlbumsButton = () => {
    const history = useHistory()

    const handleOnClick = e => {
        e.preventDefault()
        history.push('/my/albums')
    }

    return (
            <button onClick={handleOnClick} className="albums-button">My Albums</button>
    )
}

export default MyAlbumsButton
