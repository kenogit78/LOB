import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import postReducer from './post/postSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
