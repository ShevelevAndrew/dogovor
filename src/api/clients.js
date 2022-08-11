import { request } from "./request";


export const getClientsApi = (_, token = '') => {

    return request.post(`/api/access/getclients`,'', token)
}

