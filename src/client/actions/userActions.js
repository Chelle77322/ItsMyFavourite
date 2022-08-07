import {Types} from "./types";

export const userActions = {
    registerSuccess: (user) => ({types: Types.REGISTER_SUCCESS, payload: {user} }),

    registerFail : (user) => ({type: Types.REGISTER_FAIL, payload: {user} }),

    loginSuccess: (user) => ({type: Types.LOGIN_SUCCESS, payload: {user} }),

    loginFail: (user) => ({type: Types.LOGIN_FAIL, payload: {user} }),

    logout: (user) => ({types: Types.LOGOUT, payload: {user} }),

    formSubmitionStatus: (status) => ({types: Types.FORM_SUBMITITION_STATUS, payload: {status} }),
}