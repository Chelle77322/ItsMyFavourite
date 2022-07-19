import { USERS_FETCHED } from './constants.cjs';

export const usersFetched = response => ({ type: USERS_FETCHED, response });