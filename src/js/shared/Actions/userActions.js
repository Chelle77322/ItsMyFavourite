import { userConstants } from '../Constants/user-constants.js';
import { default as userService } from '../Services/user-service.js';
import { alertActions } from '../Actions/alertActions.js';
//import history from '../../../server/helpers/history';


export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(_id, password){
    return dispatch => {
        dispatch(request({_id}));

        userService.login(_id, password).then(user => {
            dispatch(success(user));
            
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        }
        );
    };
    function request (user) { return { type: userConstants.LOGIN_REQUEST, user}}

    function success(user){ return {type: userConstants.LOGIN_SUCCESS, user}}

    function failure(error){return {type: userConstants.LOGIN_FAILURE, error}}
}

function logout () {
    userService.logout();
    return { type: userConstants.LOGOUT};
}
function register(user){
    return dispatch => {
        dispatch(request(user));
        userService.register(user).then(user => {
            dispatch(success());
            dispatch(alertActions.success('Registration successful'));
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        }
        );
    };
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
function _delete(_id) {
    return dispatch => {
        dispatch(request(_id));

        userService.delete(_id)
            .then(
                user => dispatch(success(_id)),
                error => dispatch(failure(_id, error.toString()))
            );
    };

    function request(_id) { return { type: userConstants.DELETE_REQUEST, _id } }
    function success(_id) { return { type: userConstants.DELETE_SUCCESS, _id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}



