import {
    FETCHING_DATA
} from "./actionTypes"

const initialState = {
    loading:false,
    isAllowed: false,
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCHING_DATA:
            return {
                ...state,
                loading:true
            };
    }

}


export default reducer