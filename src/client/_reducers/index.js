import {combineReducers } from "redux";
import message from './message';
import auth from "./auth"
import user from "./user-reducer";
import registration from "./registration";

const rootReducer = combineReducers({
    message,
    auth,
    user,
    registration,
});
let initialState = {
    loggedIn: false,
        thisUser: []
}
const [state, setState] = state = {}


export default combineReducers(state = {...initialState, root:rootReducer})
