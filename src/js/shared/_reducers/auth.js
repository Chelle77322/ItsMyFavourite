/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import { userConstants } from '../_constants';
import { useEffect } from 'react';


function auth () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {users = {} || undefined, useState} = useState({...initialState}||{users: [] = []});
 
const windowGlobal = typeof window !== 'undefined' && window === windowGlobal.localStorage('user');

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  windowGlobal.localStorage.setItems('user', JSON.stringify(users));
}, [users, windowGlobal.localStorage]);

  switch (action.type){
    case userConstants.LOGIN_REQUEST: 
    return {
      ...state,
      loggingIn: true,
      users: action.user
    };
    case userConstants.LOGIN_SUCCESS: 
    return {
      loggedIn: true,
      users: action.user
    };
    case userConstants.LOGIN_FAILURE: 
    return {};
    case userConstants.LOGOUT:
      return {};
      default: 
      return users
  }
}
export default auth;
