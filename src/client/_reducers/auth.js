/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import { userConstants } from '../_constants';
import { useState, useEffect } from 'react';


function auth (state = initialState, action) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user] = useState([]);
const windowGlobal = typeof window !== 'undefined' && window === windowGlobal.localStorage('user');

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  windowGlobal.localStorage.setItems('user', JSON.stringify(user));
}, [user, windowGlobal.localStorage]);

//let user = JSON.parse(windowGlobal.localStorage.getAll('user'));


  switch (action.type){
    case userConstants.LOGIN_REQUEST: 
    return {
      loggingIn: true,
      user: action.user
    };
    case userConstants.LOGIN_SUCCESS: 
    return {
      loggedIn: true,
      user: action.user
    };
    case userConstants.LOGIN_FAILURE: 
    return {};
    case userConstants.LOGOUT:
      return {};
      default: 
      return state
  }
}
export default auth;