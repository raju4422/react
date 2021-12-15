
import { actionType } from "../constants/actionTypes";
const initialState={
    session:[]
}

export const sessionReducer = (state =initialState,{type,payload})=>{
    switch(type){
        case actionType.SET_USER:
        return  {...state,session:payload};
        default :
        return state;
    }

}