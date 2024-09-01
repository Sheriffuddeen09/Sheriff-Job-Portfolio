import axios from "axios"

    const api = axios.create({
    baseURL:"https://blog-server-fi2x.onrender.com"
    });


const delay = () => new Promise((res) => setTimeout(() => res(), 2800))

export const usersUrlEndpoint = '/users'

export const userUrlPosts = async (url, userId) =>{
    await delay()
    const response = await api.get(`${url}/${userId}`)
    return response.data

}

export const userUrl = async () =>{
    await delay()
    const response = await api.get(usersUrlEndpoint)
    return response.data

}