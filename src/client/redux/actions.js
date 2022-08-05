import { USERS_FETCHED } from './constants';

export function usersFetched(response) {
    return ({ type: USERS_FETCHED, response });
}