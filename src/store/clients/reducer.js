import { GET_CLIENTS_START, GET_CLIENTS_SUCCESS, GET_CLIENTS_ERROR } from "./types"

const initalState = {
    clients: [],
    error: null,
    pending: false,
}

export const clientsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_CLIENTS_START:
            return { ...state, pending: true, error: null }

        case GET_CLIENTS_SUCCESS:
            return { ...state, pending: false, clients: action.payload }

        case GET_CLIENTS_ERROR:
            return { ...state, pending: false, error: action.payload }

        default:
            return state
    }
}