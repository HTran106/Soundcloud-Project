import { csrfFetch } from "./csrf"

const SINGLE_SONG = 'songs/getSingleSong'
const ALL_SONGS = 'songs/getAllSongs'

export const getSingleSong = (song) => ({
    type: SINGLE_SONG,
    payload: song
})

export const getAllSongs = (songs) => ({
    type: ALL_SONGS,
    payload: songs
})

export const fetchSingleSong = songId => async dispatch => {
    const res = await csrfFetch(`/songs/${songId}`)

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getSingleSong(parsedRes))
        return res;
    }
}

export const fetchAllSongs = () => async dispatch => {
    const res = await csrfFetch('/songs')

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getAllSongs(parsedRes))
        return res;
    }
}

const songsReducer = (state={}, action) => {
    switch (action.type) {
        case SINGLE_SONG:
            let setSongState = {...state}
            setSongState = action.payload
            return setSongState
        case ALL_SONGS:
            let setAllSongs = {...state}
            setAllSongs = action.payload.Songs
            return setAllSongs
        default:
            return state;
    }
}

export default songsReducer;
