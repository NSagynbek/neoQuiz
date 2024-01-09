import {
    FETCHING_DATA,
    SET_FILTERED_ARTICLES,
} from "./actionTypes"

const initialState = {
    loading:false,
    isAllowed: false,
    filteredArticlesData:[],
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCHING_DATA:
            return {
                ...state,
                loading:true
            };
        case SET_FILTERED_ARTICLES:
            return {
                ...state,
                filteredArticlesData:action.payload,
            }    
    }

}


export default reducer