import axios from 'axios'

const axiosInstace = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6f8b59ae-66bc-41f1-88e2-b3a23ad3fb54"
    }

})

export const dalApi = {
    getUsers(currentPage, pageSize) {
        return axiosInstace
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return axiosInstace
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return axiosInstace
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
    getHeaderUser() {
        return axiosInstace.get(`auth/me`).then(response => response.data)
    },
    getProfilePage(userId) {
        return axiosInstace.get(`profile/${userId}`).then(response => response.data)
    }
}
