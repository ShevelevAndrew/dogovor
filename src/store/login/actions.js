import { GET_LOGIN_START, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR } from "./types"

export const getLoginStart = () => ({
    type: GET_LOGIN_START,
})

export const getLoginSuccess = (auth) => ({
    type: GET_LOGIN_SUCCESS,
    payload: auth,
})

export const getLoginError = (error) => ({
    type: GET_LOGIN_ERROR,
    payload: error,
})