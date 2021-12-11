
import { actionType } from "../constants/actionTypes";
const initialState={
    users:[]
}

export const usersReducer = (state =initialState,{type,payload})=>{
    switch(type){
        case actionType.GET_USERS:
        return  {...state,users:payload};
        default :
        return state;
    }

}