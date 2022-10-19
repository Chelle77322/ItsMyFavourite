import { userConstants } from "../_constants";
import {useState} from "react";


function registration(state = {},action)
{
    let initialState = {
        loggedIn: false,
        thisUser: []
    }
    useState(() => initialState);
    
    switch (action.type){
        case userConstants.REGISTER_REQUEST:
            return { registering: true};
        case userConstants.REGISTER_SUCCESS: 
        return {};
        case userConstants.REGISTER_FAILURE:
            return{};
        default:
            return state
    }
}
export default registration;