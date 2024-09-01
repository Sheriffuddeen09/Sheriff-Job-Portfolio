import axios from "axios"

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3400"
        : process.env.REACT_APP_BASE_URL;

    const apiFetchs = axios.create({
    baseURL,
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