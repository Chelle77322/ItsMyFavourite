import {combineReducers } from "redux";
import message from './message';
import auth from "./auth"
import user from "./user-reducer";
import registration from "./registration";

let initialState = {
    loggedIn: false,
    users:{id:[{}]} || {}
}

const {users = {} || undefined, setState} = setState => ({...initialState}|| {user:[{}]});


const rootReducer = combineReducers({
    message,
    auth,
    user,
    registration
    
    
});

;

export default combineReducers(user, rootReducer)
