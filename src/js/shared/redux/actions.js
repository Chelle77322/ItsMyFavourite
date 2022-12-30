import { default as USERS_FETCHED } from './constants.js';

export default function usersFetched(response) {
    return ({ type: USERS_FETCHED, response });
}
