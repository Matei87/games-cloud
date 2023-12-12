import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import bestOfTheYearReducer from './bestOfTheYear/reducer';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  bestOfYear: bestOfTheYearReducer,
});

export default rootReducer;
