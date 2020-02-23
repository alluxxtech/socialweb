import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0433149a-f6c0-400a-85ac-4baa82f95df9"
    }
});

export const userApi = {
    getUsers(currentPage, pageSize) { 
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(resolve => resolve.data)
    },
    getUsersByUser(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(resolve => resolve.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
        .then(resolve => resolve.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
        .then(resolve => resolve.data)
    },
    getProfile(userId) {
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status});
    }
}

export const authApi = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}