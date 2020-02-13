import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0433149a-f6c0-400a-85ac-4baa82f95df9"
    }
});

export const userApi = {
    getUsers: (currentPage, pageSize) => { 
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(resolve => resolve.data)
    },
    getUsersByUser: (pageNumber, pageSize) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(resolve => resolve.data)
    },
    unfollowUser: (id) => {
        return instance.delete(`follow/${id}`)
        .then(resolve => resolve.data)
    },
    followUser: (id) => {
        return instance.post(`follow/${id}`)
        .then(resolve => resolve.data)
    }
}