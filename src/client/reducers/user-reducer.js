/* eslint-disable default-case */
import {Types} from '../actions/types.js';
const initialState = {
    user: {
        email: "",
        password: "",
        full_name: "",
        favourites: []
    },
    formSubmitted: false
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case Types.REGISTER_SUCCESS:
            console.log('register', action.payload.user);
            return {
                ...state,
                user: action.payload.user,
                formSubmitted: false
            };
        case Types.REGISTER_FAIL:
            console.log('register', action.payload.user);
            return {
                ...state,
                user: action.payload.user,
                formSubmitted: false
            };
        case Types.LOGIN_SUCCESS:
            console.log('login', action.payload.user);
            return {
                user: action.payload.user,
                formSubmitted: false
            };
        case Types.LOGIN_FAIL:
            console.log('login', action.payload.user);
            return {
                user: action.payload.user,
                formSubmitted: false
            };
        case Types.FORM_SUBMITITION_STATUS:
            return {
                ...state,
                formSubmitted: action.payload.status
            };
        default: return state;
    }

}
export default userReducer;