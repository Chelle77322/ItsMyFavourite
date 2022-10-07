import { default as USERS_FETCHED } from './constants';

export default function usersFetched(response) {
    return ({ type: USERS_FETCHED, response });
}
