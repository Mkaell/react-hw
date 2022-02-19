import { initialState  } from "../initialState";
import { combineReducers } from "redux";

const myReducer = (state = initialState , action) => {
    switch (action.type) {

        case 'FETCHING_START':
            return {
                ...state, user : {
                    email: action.payload.email,
                    token: action.payload.token,
                    id:action.payload.id,
                }
                
            };

        case 'FETCHING_DELETED':
            return {
                ...state,
                user : {
                    email: null,
                    token: null,
                    id:null
                }
            };


        default: return state;
    }
}

export const rootReducer = combineReducers({
    myReducer,
})