import { ActionTypes } from "../constants/action-types"
const initialState = {
    products: []
}
export const productReducer = (state=initialState , { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT: 
             return {...state,products:payload};
        default:
            return state
    }
}

export const selectedProductReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT: 
             return {...state,...payload};
        default:
            return state;
    }
}

export const reducerFn=(state={counter:0},action)=>{

    if(action.type==="INC"){
        return {counter:state.counter+1}
    }
    if(action.type==="DEC"){
        return {counter:state.counter-1}
    }
    if(action.type==="ADD"){
        return {counter:state.counter+action.payload}
    }
    return state;
};