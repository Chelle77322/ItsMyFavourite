import {combineReducers} from "redux";
import message from './message.js';
import userReducer from "./user-reducer.js";

const rootReducer = combineReducers({
    message,
    userReducer
});
export default rootReducer;