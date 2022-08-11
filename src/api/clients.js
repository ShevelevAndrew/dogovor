import { request } from "./request";


export const getClientsApi = (_, token = '') => {

    return request.post(`/api/access/getclients`,'', token)
}

export const getPhoneApi = (dateObj=[], token = '') => {
    return request.post(`/api/zayavka/getphone`,dateObj, token)
}

