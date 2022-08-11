import {
    GET_CLIENTS_START,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_ERROR,
    GET_INPHONE_START,
    GET_INPHONE_SUCCESS,
    GET_INPHONE_ERROR
} from "./types"

const initalState = {
    clients: [],
    error: null,
    pending: false,
    inphone: [],
    inerror: null,
    inpending: false,
}

export const clientsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_CLIENTS_START:
            return { ...state, pending: true, error: null }

        case GET_CLIENTS_SUCCESS:
            return { ...state, pending: false, clients: action.payload }

        case GET_CLIENTS_ERROR:
            return { ...state, pending: false, error: action.payload }

        case GET_INPHONE_START:
            return { ...state, inpending: true, inerror: null }

        case GET_INPHONE_SUCCESS:
            return { ...state, inpending: false, inphone: action.payload }

        case GET_INPHONE_ERROR:
            return { ...state, inpending: false, inerror: action.payload }

        default:
            return state
    }
}