/* eslint-disable import/no-anonymous-default-export */
import {combineReducers } from "redux";
import message from './message';
import auth from "./auth"
import user from "./user-reducer";
import registration from "./registration";

let initialState = {
    loggedIn: false,
    users:{id:[{}]} || {}
}

var rootReducer = combineReducers({
    initialState,
    message,
    auth,
    user,
    registration
}  
    
);



export default {rootReducer}
