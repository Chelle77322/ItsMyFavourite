import { USERS_FETCHED } from './constants.js';

export const usersFetched = response => ({ type: USERS_FETCHED, response });