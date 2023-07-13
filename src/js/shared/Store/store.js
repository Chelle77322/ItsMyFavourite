import { configureStore, applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from "../Reducers/index.js";
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';





const loggerMiddleware = createLogger();


const stored = configureStore({
  reducer: rootReducer,
 
})
const persistedReducer = (stored, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (applyMiddleware)=> applyMiddleware().concat(loggerMiddleware, thunkMiddleware)
})


export default store;



