import {
    GET_ACCESS_START,
    GET_ACCESS_SUCCESS,
    GET_ACCESS_ERROR,
    CREATE_ACCESS_START,
    CREATE_ACCESS_SUCCESS,
    CREATE_ACCESS_ERROR
} from "./types"

export const getAccessStart = () => ({
    type: GET_ACCESS_START,
})

export const getAccessSuccess = (access) => ({
    type: GET_ACCESS_SUCCESS,
    payload: access,
})

export const getAccessError = (error) => ({
    type: GET_ACCESS_ERROR,
    payload: error,
})

export const createAccessStart = () => ({
    type: CREATE_ACCESS_START,
})

export const createAccessSuccess = (access) => ({
    type: CREATE_ACCESS_SUCCESS,
    payload: access,
})

export const createAccessError = (error) => ({
    type: CREATE_ACCESS_ERROR,
    payload: error,
})