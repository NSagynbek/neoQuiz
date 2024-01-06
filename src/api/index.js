import axios from "axios";

const instance = axios.create({
    baseURL:"https://tokyo-backender.org.kg/",
    headers:{
        "Content-Type":"application/json",
    }
});

export const getArticles = async ()=>{
    const response = await instance.get("articles/")
    return response.data
}

export const getArticlesById = async (id)=>{
    const response = await instance.get(`articles/${id}/`)
    return response.data
}

