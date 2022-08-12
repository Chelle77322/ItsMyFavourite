import {combineReducers} from "redux";
import message from './message';
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    message,
    userReducer
});
export default rootReducer;
