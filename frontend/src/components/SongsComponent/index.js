import * as songsActions from '../../store/song'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const SongsComponent = () => {
    const dispatch = useDispatch()
    const song = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(songsActions.fetchSingleSong(1))
    }, [dispatch])

    return (
        <>
            <h1>Songs Component</h1>
            <audio controls src={song?.url} />
        </>
    )
}

export default SongsComponent
