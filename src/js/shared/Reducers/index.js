
import {combineReducers } from "redux";

import message from './message.js';
import auth from "./auth.js"
import user from "./user-reducer.js";
import registration from "./registration.js";

let initialState = {
    loggedIn: false,
    users:{id:[{}]} || {}
}

const rootReducer = combineReducers({
   message,
    auth,
    user,
    registration
});



export default rootReducer(initialState);
