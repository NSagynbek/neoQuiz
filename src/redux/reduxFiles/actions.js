import {
    FETCHING_DATA,
    SET_FILTERED_ARTICLES,
} from "./actionTypes"

export const dataRequest = ()=>{
    return {
        type:FETCHING_DATA,
    }
}

export const setFilteredArticles = (data)=>{
    return {
        type:SET_FILTERED_ARTICLES,
        payload:data
    }
}