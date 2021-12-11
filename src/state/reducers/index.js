import userEvent from "@testing-library/user-event";
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import {productReducer} from "./productReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
    account : accountReducer,
    allProducts : productReducer,
    users:usersReducer
})


export default reducers;