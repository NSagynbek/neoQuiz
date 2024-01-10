import axios from "axios";

const instance = axios.create({
    baseURL:"https://tokyo-backender.org.kg/",
    headers:{
        "Content-Type":"application/json",
    }
});

export const getArticles = async (page)=>{
    const response = await instance.get("articles/",{
        params:{
            page:page
        }
    })
    return response.data
}

export const getArticlesById = async (id)=>{
    const response = await instance.get(`articles/${id}/`)
    return response.data
}

export const getQuizzes = async ()=>{
    const response = await instance.get("quizzes/")
    return response.data
}

export const quizWelcomPage = async (id)=>{
    const response = await instance.get(`quizzes/${id}/welcome/`);
    return response.data
}

export const quizQuestions = async (id)=>{
    const response = await instance.get(`quizzes/${id}/questions/`);
    return response.data
}

export const searchArticles = async (search)=>{
    const response = await instance.get("articles/",{
        params:{
            search:search
        }
    });
    return response.data
}


export const articleCategories = async (queryString)=>{
    const response = await instance.get(`articles/?${queryString}`);
    return response.data
}