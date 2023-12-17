import axios from 'axios'
// import authRoute from './userApi'
// import router from '../router/index'

export const axiosRequest = axios.create({
    baseURL: 'http://localhost:4321/api'
})

// axiosRequest.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         const refreshToken = localStorage.getItem('refreshToken')
//         if (token && config.url.includes('auth/refres')) {
//             config.headers.Authorization = `Bearer ${refreshToken}`
//         }
//         if (token) {
//             console.log('token added')
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )
//
// axiosRequest.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     async (error) => {
//         const originalRequest = error.config
//         if (error.response.status === 401 && !originalRequest.url.includes('auth/refres')) {
//             await authRoute.tokenization()
//             return
//         }
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true
//             try {
//                 return axiosRequest(originalRequest)
//             } catch (err) {
//                 return Promise.reject(err)
//             }
//         }
//         await router.push('/auth')
//         return Promise.reject(error)
//     }
// )