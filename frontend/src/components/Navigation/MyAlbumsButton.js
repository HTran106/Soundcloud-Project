import { useHistory } from 'react-router-dom'

const MyAlbumsButton = () => {
    const history = useHistory()

    const handleOnClick = e => {
        e.preventDefault()
        history.push('/my/albums')
    }

    return (
            <button className='my-albums-button' onClick={handleOnClick}>My Albums</button>
    )
}

export default MyAlbumsButton
