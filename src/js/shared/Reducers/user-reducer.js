/* eslint-disable react-hooks/rules-of-hooks */
import { userConstants } from '../Constants/user-constants.js';
import {useState} from "react"

// eslint-disable-next-line no-undef
function user(users = initialState([{}]), action){
    let initialState = {
        loggedIn: false,
        users:null
    }
    useState(() => initialState);
    switch (action.type) {
        case userConstants.GETALL_REQUEST: return {
            loading: true
        };
        case userConstants.GETALL_SUCCESS: return {
            items: action.users
        };
        case userConstants.GETALL_FAILURE: return {
            error: action.error
        };
        case userConstants.DELETE_REQUEST: return {
            ...users,
            items: users.items.map(user =>
                user._id === action._id ? 
                { ...users, deleting: true}: users )
        };
        case userConstants.DELETE_SUCCESS:
        return {
            items: users.items.filter(user => user._id !== action._id)
        };
        case userConstants.DELETE_FAILURE:
    return {
        ...users,
        items: users.items.map(user => {
            if(user._id === action._id){
                const { deleting, ...userCopy} = users;
                return { ...userCopy, deleteError: action.error};
            }
            return users;
        })
    };
    default: return users
    }
}
export default user;