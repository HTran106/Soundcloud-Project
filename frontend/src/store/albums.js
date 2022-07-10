import { csrfFetch } from "./csrf"

const SINGLE_ALBUM = 'albums/getSingleAlbum'
const ALL_ALBUMS = 'albums/getAllAlbums'
const CREATE_ALBUM = 'albums/createAlbum'
const REMOVE_ALBUM = 'albums/removeAlbum'
const EDIT_ALBUM = 'albums/editAlbum'

export const editAlbum = album => ({
    type: EDIT_ALBUM,
    payload: album
})

export const removeAlbum = (id) => ({
    type: REMOVE_ALBUM,
    payload: id
})

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
    const res = await csrfFetch(`/api/albums/${albumId}`)

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getSingleAlbum(parsedRes))
        return res;
    }
}

export const fetchAllAlbums = () => async dispatch => {
    const res = await csrfFetch('/api/albums')

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getAllAlbums(parsedRes))
        return res;
    }
}

export const uploadAlbum = (album) => async dispatch => {
        const res = await csrfFetch('/api/albums', {
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

export const deleteAlbum = albumId => async dispatch => {
    const res = await csrfFetch(`/api/albums/${albumId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        await res.json()
        dispatch(removeAlbum(albumId))
        return res;
    }
}

export const updateAlbum = album => async dispatch => {
    const res = await csrfFetch(`/api/albums/${album.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
    });

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(editAlbum(parsedRes))
        return res;
    }
}

const albumsReducer = (state = {}, action) => {
    switch (action.type) {
        case SINGLE_ALBUM:
            const setAlbumState = {...state}
            setAlbumState[action.payload.id] = action.payload
            return setAlbumState
        case ALL_ALBUMS:
            const setAllAlbums = {...state}
            action.payload.Albums?.forEach(album => {
                setAllAlbums[album.id] = album
            });
            return setAllAlbums
        case CREATE_ALBUM:
            const newAlbumState = {...state}
            newAlbumState[action.payload.id] = action.payload
            return newAlbumState
        case REMOVE_ALBUM:
            const removeAlbumState = {...state}
            delete removeAlbumState[action.payload]
            return removeAlbumState
        case EDIT_ALBUM:
            const editAlbumState = {...state}
            editAlbumState[action.payload.id] = action.payload
            return editAlbumState
        default:
            return state;
    }
}

export default albumsReducer;
