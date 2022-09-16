import { userConstants } from '../_constants';
import React, { useState, useEffect } from 'react';

const initialState = {
  user: {
    id: "",
    password: "",
  },
  loginFormSubmitted: false
}
function auth (state = initialState, action) {
  const [user, setItems] = useState([]);
const windowGlobal = typeof window !== 'undefined' && window === windowGlobal.localStorage('user');

useEffect(() => {
  windowGlobal.localStorage.setItems('user', JSON.stringify(user));
}, []);

//let user = JSON.parse(windowGlobal.localStorage.getAll('user'));
let users = windowGlobal.localStorage('user') ? JSON.parse(windowGlobal.localStorage('user')) : null;


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