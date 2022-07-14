import { csrfFetch } from "./csrf"

const SINGLE_SONG = 'songs/getSingleSong'
const ALL_SONGS = 'songs/getAllSongs'
const REMOVE_SONG = 'songs/removeSong'
const EDIT_SONG = 'songs/editSong'
const CREATE_SONG = 'songs/createSong'

export const createSong = (song) => ({
    type: CREATE_SONG,
    payload: song
})

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
    const res = await csrfFetch(`/api/songs/${songId}`)

    if (res.ok) {
        const parsedRes = await res.json()
        await dispatch(getSingleSong(parsedRes))
        return res;
    }
}

export const fetchAllSongs = () => async dispatch => {
    const res = await csrfFetch('/api/songs')

    if (res.ok) {
        const parsedRes = await res.json()
        await dispatch(getAllSongs(parsedRes))
        return res;
    }
}

export const deleteSong = songId => async dispatch => {
    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        await res.json()
        dispatch(removeSong(songId))
        return res;
    }
}

export const updateSong = (song) => async dispatch => {
    const { title, description, url, imageUrl } = song
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('url', url)
    if (imageUrl) formData.append('imageUrl', imageUrl)

    const res = await csrfFetch(`/api/songs/${song.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(editSong(parsedRes))
    }
}

export const uploadSong = (song, albumId) => async dispatch => {
    const { title, description, url, imageUrl } = song
    const formData = new FormData();
    formData.append('title', title)
    formData.append('description', description)
    formData.append('url', url)
    if (imageUrl) formData.append('imageUrl', imageUrl)

    const res = await csrfFetch(`/api/albums/${albumId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData,
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(createSong(parsedRes))
        return res;
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
        case CREATE_SONG:
            const newSongState = {...state}
            newSongState[action.payload.id] = action.payload
            return newSongState
        default:
            return state;
    }
}

export default songsReducer;
