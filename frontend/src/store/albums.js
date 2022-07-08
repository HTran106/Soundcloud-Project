import { csrfFetch } from "./csrf"

const SINGLE_ALBUM = 'albums/getSingleAlbum'
const ALL_ALBUMS = 'albums/getAllAlbums'
const CREATE_ALBUM = 'albums/createAlbum'

export const createAlbum = (album) => ({
    type: CREATE_ALBUM,
    payload: album
})

export const getSingleAlbum = (album) => ({
    type: SINGLE_ALBUM,
    payload: album
})

export const getAllAlbums = (albums) => ({
    type: ALL_ALBUMS,
    payload: albums
})

export const fetchSingleAlbum = albumId => async dispatch => {
    const res = await csrfFetch(`/albums/${albumId}`)

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getSingleAlbum(parsedRes))
        return res;
    }
}

export const fetchAllAlbums = () => async dispatch => {
    const res = await csrfFetch('/albums')

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getAllAlbums(parsedRes))
        return res;
    }
}

export const uploadAlbum = (album) => async dispatch => {
    const res = await csrfFetch('/albums', {
        method: 'POST',
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
    })

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(createAlbum(parsedRes))
        return res;
    }
}

const albumsReducer = (state = {}, action) => {
    switch (action.type) {
        case SINGLE_ALBUM:
            let setAlbumState = {...state}
            setAlbumState = action.payload
            return setAlbumState
        case ALL_ALBUMS:
            let setAllAlbums = {...state}
            setAllAlbums = action.payload.Albums
            return setAllAlbums
        case CREATE_ALBUM:
            let newAlbumState = {}
            newAlbumState[action.payload.id] = action.payload
            return newAlbumState
        default:
            return state;
    }
}

export default albumsReducer;
