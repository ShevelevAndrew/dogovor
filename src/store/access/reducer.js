import {
    GET_ACCESS_START,
    GET_ACCESS_SUCCESS,
    GET_ACCESS_ERROR,
    CREATE_ACCESS_START,
    CREATE_ACCESS_SUCCESS,
    CREATE_ACCESS_ERROR
} from "./types"

const initalState = {
    access: [],
    error: null,
    pending: false,
    createAccess: [],
    createError: null,
    createPending: false
}

export const accessReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_ACCESS_START:
            return { ...state, pending: true, error: null }

        case GET_ACCESS_SUCCESS:
            return { ...state, pending: false, access: action.payload }

        case GET_ACCESS_ERROR:
            return { ...state, pending: false, error: action.payload }

        case CREATE_ACCESS_START:
            return { ...state, createPending: true, createError: null }

        case CREATE_ACCESS_SUCCESS:
            return { ...state, createPending: false, createAccess: action.payload }

        case CREATE_ACCESS_ERROR:
            return { ...state, createPending: false, createError: action.payload }

        default:
            return state
    }
}