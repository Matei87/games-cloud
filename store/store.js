import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { baseApi } from './api/baseApi';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
