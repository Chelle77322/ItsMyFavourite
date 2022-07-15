'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true});
    
const _usersFetched = undefined;
export { _usersFetched as usersFetched };

import { USERS_FETCHED } from './constants.cjs';

var usersFetched = exports.usersFetched = function usersFetched(response) {
    return {type: USERS_FETCHED, response: response };
};