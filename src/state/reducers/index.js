import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import {productReducer} from "./productReducer";

const reducers = combineReducers({
    account : accountReducer,
    allProducts : productReducer
})


export default reducers;