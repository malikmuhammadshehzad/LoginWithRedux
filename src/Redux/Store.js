import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer';
 

const reducers = combineReducers({
  Auth:AuthReducer,
   
});

export const store = configureStore({
  reducer: reducers,
});