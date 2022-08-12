import {combineReducers} from "redux";
import alert from './message';
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    alert,
    userReducer
});
export default rootReducer;
