import { GET_LOGIN_START, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR } from "./types"

const initalState = {
    auth: [],
    error: null,
    pending: false,
}

export const loginReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_LOGIN_START:
            return { ...state, pending: true, error: null }

        case GET_LOGIN_SUCCESS:
            return { ...state, pending: false, auth: action.payload }

        case GET_LOGIN_ERROR:
            return { ...state, pending: false, auth: [], error: action.payload }

        default:
            return state
    }
}