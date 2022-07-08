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
        await dispatch(getSingleSong(parsedRes))
        return res;
    }
}

export const fetchAllSongs = () => async dispatch => {
    const res = await csrfFetch('/songs')

    if (res.ok) {
        const parsedRes = await res.json()
        await dispatch(getAllSongs(parsedRes))
        return res;
    }
}

export const deleteSong = songId => async dispatch => {
    const res = await csrfFetch(`/songs/${songId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(removeSong(songId))
        return res;
    }
}

export const updateSong = (song) => async dispatch => {
    const res = await csrfFetch(`/songs/${song.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(editSong(parsedRes))
    }
}

const songsReducer = (state = {}, action) => {
    switch (action.type) {
        case SINGLE_SONG:
            const setSongState = {...state}
            setSongState[action.payload.id] = action.payload
            return setSongState
        case ALL_SONGS:
            const setAllSongs = {...state}
            action.payload.Songs?.forEach(song => {
                setAllSongs[song.id] = song
            })
            return setAllSongs
        case REMOVE_SONG:
            const removeSongState = {...state}
            delete removeSongState[action.payload]
            return removeSongState
        case EDIT_SONG:
            const updatedSongState = {...state}
            updatedSongState[action.payload.id] = action.payload
            return updatedSongState;
        default:
            return state;
    }
}

export default songsReducer;
