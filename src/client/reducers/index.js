import { combineReducers } from "redux";
import message from './message';
import auth from "./auth"
import user from "./user-reducer";

const rootReducer = combineReducers({
    message,
    auth,
    user
});
export default rootReducer;
