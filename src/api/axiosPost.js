import axios from "axios"

const api = axios.create({
    //baseURL:"https://blog-server-fi2x.onrender.com"
    baseURL:"http://localhost:3500"

    });


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