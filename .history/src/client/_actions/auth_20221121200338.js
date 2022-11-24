import {Types} from '../_constants/user-constants';
import {AuthService} from "../../server/services/auth-service";

export const authActions = (id, firstName, lastName, password) => (dispatch) => {
    return AuthService.register(id, firstName, lastName, password).then
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
export const login = (id, password) => (dispatch)=> {
    return AuthService.login(id, password).then (
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