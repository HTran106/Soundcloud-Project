import { csrfFetch } from "./csrf"

const SEARCH = 'search/searchSongs'

export const searchSong = (songs) => ({
    type: SEARCH,
    payload: songs
})

export const search = (title) => async dispatch => {
    const res = await csrfFetch(`/search?title=${title}`)

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(searchSong(parsedRes))
        return res
    }
}

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH:
            const songState = {}
            action.payload.Songs.forEach(song => {
                songState[song.id] = song
            })
            return songState
        default:
            return state;
    }
}

export default searchReducer
