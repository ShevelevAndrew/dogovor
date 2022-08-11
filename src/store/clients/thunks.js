import {
    getClientsStart,
    getClientsSuccess,
    getClientsError, 
    getInPhoneStart,
    getInPhoneSuccess,
    getInPhoneError
} from "./actions"

export const getClients = () =>
    async (dispatch, getState, api) => {
        try {
            dispatch(getClientsStart())
            const { data } = await api.getClientsApi('',getState().login.auth.token)
            dispatch(getClientsSuccess(data))

        } catch (error) {
            dispatch(getClientsError(error))
        }
    }

export const getPhone = (dateObj=[]) =>
    async (dispatch, getState, api) => {
        try {
            dispatch(getInPhoneStart())
            const { data } = await api.getPhoneApi(dateObj, getState().login.auth.token)
            dispatch(getInPhoneSuccess(data))

        } catch (error) {
            dispatch(getInPhoneError(error))
        }
    }