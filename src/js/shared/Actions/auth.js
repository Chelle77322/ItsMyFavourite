import {Types} from '../Constants/user-constants.js';
import {AuthService} from "../Services/auth-service.js";

export const authActions = (_id, firstName, lastName, password) => (dispatch) => {
    return AuthService.register(_id, firstName, lastName, password).then
    (
        (response) => {
            dispatch({
                type: Types.REGISTER_SUCCESS,
            });

            dispatch({
                type: Types.SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
    (error) => {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.toString();

        dispatch ({
            type: Types.REGISTER_FAIL,
        });

        dispatch({
            type: Types.SET_MESSAGE,
            payload: message,
        });
        return Promise.reject();
    }    
    );
};
export const login = (_id, password) => (dispatch)=> {
    return AuthService.login(_id, password).then (
        (data) => {
            dispatch({
                type: Types.LOGIN_SUCCESS, payload: {user:data},
            });
            return Promise.resolve();
        },
        (error)=> {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            dispatch({
                type: Types.LOGIN_FAIL
            });
            dispatch ({
                type: Types.SET_MESSAGE, payload: message
            });
            return Promise.reject();
        }
    );
};
export const logout = () => (dispatch)=> {
    AuthService.logout();
    dispatch({
        type: Types.LOGOUT,
    });
};
export default new AuthService();