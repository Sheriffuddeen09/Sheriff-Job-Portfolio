import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3400"
        : process.env.REACT_APP_BASE_URL;

    const apiFetchs = axios.create({
    baseURL,
    });

export const getJobs = async () =>{
    const response = await apiFetchs.get("/jobs")
    return response.data 
}
export const getJobSeconds = async () =>{
    const response = await apiFetchs.get("/jobseconds")
    return response.data 
}
export const getJobThirds = async () =>{
    const response = await apiFetchs.get("/jobthirds")
    return response.data 
}
export const getJobFours = async () =>{
    const response = await apiFetchs.get("/jobfours")
    return response.data 
}
export const getQualifys = async () =>{
    const response = await apiFetchs.get("/qualifys")
    return response.data 
}
export const getEducations = async () =>{
    const response = await apiFetchs.get("/educations")
    return response.data 
}
export const getSkills = async () =>{
    const response = await apiFetchs.get("/skills")
    return response.data 
}
export const getNews = async () =>{
    const response = await apiFetchs.get("/newskills")
    return response.data 
}
export const getNewEducation = async () =>{
    const response = await apiFetchs.get("/neweducations")
    return response.data 
}
export const getNewLicence = async () =>{
    const response = await apiFetchs.get("/newlicences")
    return response.data 
}

export const getBasepay = async () =>{
    const response = await apiFetchs.get("/basepays")
    return response.data 
}
export const getRelocation = async () =>{
    const response = await apiFetchs.get("/relocations")
    return response.data 
}
export const getJobApply = async () =>{
    const response = await apiFetchs.get("/jobs")
    return response.data 
}
export const getEmail = async () =>{
    const response = await apiFetchs.get("/emails")
    return response.data 
}
export const getPhone = async () =>{
    const response = await apiFetchs.get("/phones")
    return response.data 
}
export default apiFetchs