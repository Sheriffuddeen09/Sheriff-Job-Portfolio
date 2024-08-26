import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:3400/'
})
const delay = () => new Promise((res) => setTimeout(() => res(), 2800))

export const postsUrlEndpoint = '/posts'

export const postUrlPosts = async (url, userId) =>{
    await delay()
    const response = await api.get(`${url}?userId= ${userId}`)
    return response.data

}

export const postUrl = async () =>{
    const response = await api.get("/posts")
    return response.data 
}