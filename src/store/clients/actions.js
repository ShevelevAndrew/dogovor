import { GET_CLIENTS_START, GET_CLIENTS_SUCCESS, GET_CLIENTS_ERROR } from "./types"

export const getClientsStart = () => ({
    type: GET_CLIENTS_START,
})

export const getClientsSuccess = (clients) => ({
    type: GET_CLIENTS_SUCCESS,
    payload: clients,
})

export const getClientsError = (error) => ({
    type: GET_CLIENTS_ERROR,
    payload: error,
})