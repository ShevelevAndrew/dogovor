import {getLoginStart, getLoginSuccess, getLoginError } from "./actions"

export const getLogin = (auth = '') =>
    async (dispatch, _, api) => {
        try {
            dispatch(getLoginStart())
            const { data } = await api.loginApi(auth)
            dispatch(getLoginSuccess(data))

        } catch (error) {
            dispatch(getLoginError({status: error.response.status, statusText: error.response.statusText}))
        }
    }