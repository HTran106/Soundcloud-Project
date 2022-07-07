import { csrfFetch } from "./csrf"

const SINGLE_SONG = 'songs/getSingleSong'
const ALL_SONGS = 'songs/getAllSongs'
const REMOVE_SONG = 'songs/removeSong'
const EDIT_SONG = 'songs/editSong'

export const editSong = song => ({
    type: EDIT_SONG,
    payload: song
})

export const getSingleSong = (song) => ({
    type: SINGLE_SONG,
    payload: song
})

export const getAllSongs = (songs) => ({
    type: ALL_SONGS,
    payload: songs
})

export const removeSong = (songId) => ({
    type: REMOVE_SONG,
    payload: songId
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

export const deleteSong = song => async dispatch => {
    const res = await csrfFetch(`/songs/${song.id}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(removeSong(parsedRes.id))
    }
}

export const updateSong = (song, songId) => async dispatch => {
    const res = await csrfFetch(`/songs/${songId}`, {
        method: "PUT",
        headers: {
            "CONTENT-TYPE": "application/json"
        },
        body: JSON.stringify(song)
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(editSong(parsedRes))
        return res
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
        case REMOVE_SONG:
            return {}
        case EDIT_SONG:
            const updatedSongState = {...state}
            updatedSongState[action.payload.id] = action.payload
            return updatedSongState;
        default:
            return state;
    }
}

export default songsReducer;
