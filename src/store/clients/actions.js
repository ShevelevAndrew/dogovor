import {
    GET_CLIENTS_START,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_ERROR,
    GET_INPHONE_START,
    GET_INPHONE_SUCCESS,
    GET_INPHONE_ERROR
} from "./types"

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

export const getInPhoneStart = () => ({
    type: GET_INPHONE_START,
})

export const getInPhoneSuccess = (clients) => ({
    type: GET_INPHONE_SUCCESS,
    payload: clients,
})

export const getInPhoneError = (error) => ({
    type: GET_INPHONE_ERROR,
    payload: error,
})