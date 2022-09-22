import config from '../../../config';
import {authHeader} from "../_helpers/auth-header";

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

async function login(id, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({id, password })
    };
    const response = await fetch(`${config.apiUrl}/users/authenticate`, requestOptions);
    const user = await handleResponse(response);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}
function logout() {
    localStorage.removeItem('user');
}
async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions);
    return handleResponse(response);;
}
async function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}
async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'applcation/json'},
        body: JSON.stringify(user)
    };
    const response = await fetch(`${config.apiURL}//users/register`, requestOptions);
    return handleResponse(response);;
}
async function update(user){
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    const response = await fetch(`${config.apiUrl}/users/${user.id}`, requestOptions);
    return handleResponse(response);;
}
async function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions);
    return handleResponse(response);
}
function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok){
            if(response.status === 401){
                logout();
                location.reload(true);
            }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
        }
        return data;
    });
}
export default userService;