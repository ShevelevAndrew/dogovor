import {
    getAccessStart,
    getAccessSuccess,
    getAccessError,
    createAccessStart,
    createAccessSuccess,
    createAccessError
} from "./actions"

export const getAccess = (search = '') =>
    async (dispatch, getState, api) => {
        try {
            dispatch(getAccessStart())
            const { data } = await api.searchAccessApi(search, getState().login.auth.token )
            dispatch(getAccessSuccess(data))

        } catch (error) {
            dispatch(getAccessError(error))
        }
    }
export const createAccess = (createAccess = []) =>
    async (dispatch, getState, api) => {
        try {
            dispatch(createAccessStart())
            const { data } = await api.createAccessApi(createAccess, getState().login.auth.token)
            dispatch(createAccessSuccess(data))
        } catch (error) {
            dispatch(createAccessError(error))
        }
    }
