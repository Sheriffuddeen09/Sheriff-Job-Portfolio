import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3400"
        : process.env.REACT_APP_BASE_URL;

    const apiFetchs = axios.create({
    baseURL,
    });

export const getPosts = async () =>{
    const response = await apiFetch.get('/accordions')
    return response.data 
}
export const getCompany = async () =>{
    const response = await apiFetch.get('/companys')
    return response.data 
}

export const getInbox = async () =>{
    const response = await apiFetch.get('/posts')
    return response.data 
}
export const getNotify = async () =>{
    const response = await apiFetch.get('/notifys')
    return response.data 
}
export const getInfos = async () =>{
    const response = await apiFetch.get("/infos")
    return response.data 
}

export const getPdf = async () =>{
    const response = await apiFetch.get("/pdfs")
    return response.data 
}
export const getCertificate = async () =>{
    const response = await apiFetch.get("/certificates")
    return response.data 
}
export const getCertification = async () =>{
    const response = await apiFetch.get("/certifications")
    return response.data 
}

export const getLanguage = async () =>{
    const response = await apiFetch.get("/languages")
    return response.data 
}
export const getNewLanguage = async () =>{
    const response = await apiFetch.get("/newlanguages")
    return response.data 
}
export const getLicences = async () =>{
    const response = await apiFetch.get("/licences")
    return response.data 
}
export const getJobtitle = async () =>{
    const response = await apiFetch.get("/jobtitles")
    return response.data 
}
export default apiFetch