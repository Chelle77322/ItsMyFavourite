import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../client/reducers/index'


export default function configuredStore(preloadedState) {
  return configureStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}