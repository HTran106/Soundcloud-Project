import { csrfFetch } from "./csrf"

const ALL_USERS = 'users/getAllUsers'

export const getAllUsers = (users) => ({
    type: ALL_USERS,
    payload: users
})

export const fetchAllUsers = () => async dispatch => {
    const res = await csrfFetch('/users')

    if (res.ok) {
        const parsedRes = await res.json()
        dispatch(getAllUsers(parsedRes))
        return res;
    }
}

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case ALL_USERS:
            let getAllUsersState = []
            getAllUsersState = action.payload
            return getAllUsersState;
        default:
            return state
    }
}

export default usersReducer
