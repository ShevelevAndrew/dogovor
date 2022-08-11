import { getClientsStart, getClientsSuccess, getClientsError } from "./actions"

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