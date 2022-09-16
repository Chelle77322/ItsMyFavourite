import { combineReducers } from "redux";
import message from './message';
import auth from "./auth"
import user from "./user-reducer";
import registration from "./registration";

const rootReducer = combineReducers({
    message,
    auth,
    user,
    registration
});
export default rootReducer;