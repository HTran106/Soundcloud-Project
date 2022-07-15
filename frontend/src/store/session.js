import { csrfFetch } from "./csrf"


//TYPES

const SET_SESSION = 'users/setSessionUser'
const REMOVE_SESSION = 'users/removeSessionUser'


//ACTIONS
export const setSessionUser = (user) => ({
    type: SET_SESSION,
    payload: user
})

export const removeSessionUser = () => ({
    type: REMOVE_SESSION
})


//THUNKS
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

export const loginGuest = user => async (dispatch) => {
    const res = await csrfFetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            credential: "Demo-lition",
            password: "password"
        })
    })

    const parsedRes = await res.json()
    dispatch(setSessionUser(parsedRes.user))
    return res;
}

export const signup = (user) => async (dispatch) => {
  const response = await csrfFetch("/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  const data = await response.json();
  dispatch(setSessionUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/restore');
  const data = await response.json();
  dispatch(setSessionUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/logout', {
    method: 'DELETE',
  });
  dispatch(removeSessionUser());
  return response;
};


//REDUCER
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
