import { request } from "./request";


export const searchAccessApi = (search = '', token = '') => {

    return request.post(`/api/access/getaccess`, { search }, token)
}

export const createAccessApi = (access = [], token = '') => {

    return request.post(`/api/access/createaccess`, { access }, token)
}

export const loginApi = (obj = {}) => {
    return request.post(`/api/user/login`,  obj )
}