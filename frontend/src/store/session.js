import { csrfFetch } from "./csrf"

const SET_SESSION = 'users/setSessionUser'
const REMOVE_SESSION = 'users/removeSessionUser'

export const setSessionUser = (user) => ({
    type: SET_SESSION,
    payload: user
})

export const removeSessionUser = () => ({
    type: REMOVE_SESSION
})

export const login = user => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        })
    })

    const parsedRes = await res.json()
    dispatch(setSessionUser(parsedRes.user))
    return res;
}



const sessionReducer = (state = {user: null}, action) => {
    switch (action.type) {
        case SET_SESSION:
            const setUserState = {...state}
            setUserState.user = action.payload
            return setUserState
        case REMOVE_SESSION:
            const removeUserState = {...state}
            removeUserState.user = null
            return removeUserState
        default:
            return state;
    }
}

export default sessionReducer
